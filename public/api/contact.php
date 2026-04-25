<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'message' => 'Method not allowed.']);
}

$config = require __DIR__ . '/contact-config.php';
$input = json_decode((string) file_get_contents('php://input'), true);

if (!is_array($input)) {
    respond(400, ['ok' => false, 'message' => 'Invalid request.']);
}

if (trim((string) ($input['website'] ?? '')) !== '') {
    respond(200, ['ok' => true, 'message' => 'Message sent.']);
}

$name = clean_text((string) ($input['name'] ?? ''));
$email = clean_text((string) ($input['email'] ?? ''));
$phone = clean_text((string) ($input['phone'] ?? ''));
$topic = clean_text((string) ($input['topic'] ?? ''));
$audience = clean_text((string) ($input['audience'] ?? ''));
$message = trim((string) ($input['message'] ?? ''));
$requestId = date('Ymd-His') . '-' . substr(bin2hex(random_bytes(4)), 0, 8);

if ($name === '' || $email === '' || $message === '') {
    respond(422, ['ok' => false, 'message' => 'Please enter your name, email and message.']);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['ok' => false, 'message' => 'Please enter a valid email address.']);
}

if (strlen($message) > 5000) {
    respond(422, ['ok' => false, 'message' => 'Please keep the message below 5000 characters.']);
}

rate_limit();

$subject = 'Website contact request from ' . $name;
$body = implode("\n", [
    'New contact request from carinaschoppe.com',
    'Request ID: ' . $requestId,
    '',
    'Name: ' . $name,
    'Email: ' . $email,
    'Phone: ' . ($phone !== '' ? $phone : '-'),
    'Topic: ' . ($topic !== '' ? $topic : '-'),
    'Audience / timeframe: ' . ($audience !== '' ? $audience : '-'),
    '',
    'Message:',
    $message,
    '',
    'Sent: ' . gmdate('Y-m-d H:i:s') . ' UTC',
    'IP: ' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown'),
]);

try {
    send_contact_mail($config, $subject, $body, $email, $name);
    respond(200, ['ok' => true, 'message' => 'Message sent.']);
} catch (Throwable $error) {
    contact_log($requestId . ' failed: ' . $error->getMessage());
    respond(500, [
        'ok' => false,
        'message' => 'The message could not be sent right now. Please email info@carinaschoppe.com directly. Error ID: ' . $requestId,
    ]);
}

function clean_text(string $value): string
{
    $value = trim($value);
    $value = str_replace(["\r", "\n"], ' ', $value);
    return substr($value, 0, 300);
}

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_SLASHES);
    exit;
}

function rate_limit(): void
{
    $ip = preg_replace('/[^a-zA-Z0-9_.:-]/', '_', (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown'));
    $file = sys_get_temp_dir() . '/carina_contact_' . md5($ip) . '.txt';
    $now = time();
    $previous = is_file($file) ? (int) file_get_contents($file) : 0;

    if ($previous > 0 && ($now - $previous) < 30) {
        respond(429, ['ok' => false, 'message' => 'Please wait a moment before sending another message.']);
    }

    file_put_contents($file, (string) $now, LOCK_EX);
}

function send_contact_mail(array $config, string $subject, string $body, string $replyToEmail, string $replyToName): void
{
    $errors = [];

    foreach (smtp_attempts($config) as $attempt) {
        try {
            smtp_send($attempt, $subject, $body, $replyToEmail, $replyToName);
            return;
        } catch (Throwable $error) {
            $errors[] = $attempt['label'] . ': ' . $error->getMessage();
        }
    }

    if (php_mail_send($config, $subject, $body, $replyToEmail, $replyToName)) {
        contact_log('Sent with PHP mail fallback after SMTP failures: ' . implode(' | ', $errors));
        return;
    }

    throw new RuntimeException('All mail transports failed. ' . implode(' | ', $errors));
}

function smtp_attempts(array $config): array
{
    $base = [
        'smtp_host' => (string) $config['smtp_host'],
        'smtp_user' => (string) $config['smtp_user'],
        'smtp_pass' => (string) $config['smtp_pass'],
        'mail_from' => (string) $config['mail_from'],
        'mail_from_name' => (string) $config['mail_from_name'],
        'mail_to' => (string) $config['mail_to'],
    ];

    return [
        $base + ['label' => 'Hostinger SMTP SSL 465', 'smtp_port' => 465, 'smtp_secure' => 'ssl'],
        $base + ['label' => 'Hostinger SMTP STARTTLS 587', 'smtp_port' => 587, 'smtp_secure' => 'starttls'],
    ];
}

function smtp_send(array $config, string $subject, string $body, string $replyToEmail, string $replyToName): void
{
    $host = (string) $config['smtp_host'];
    $port = (int) $config['smtp_port'];
    $secure = (string) $config['smtp_secure'];
    $remote = ($secure === 'ssl' ? 'ssl://' : '') . $host . ':' . $port;
    $socket = stream_socket_client($remote, $errno, $errstr, 20, STREAM_CLIENT_CONNECT);

    if (!$socket) {
        throw new RuntimeException("SMTP connection failed: $errstr ($errno)");
    }

    stream_set_timeout($socket, 20);
    smtp_expect($socket, [220]);
    smtp_command($socket, 'EHLO carinaschoppe.com', [250]);

    if ($secure === 'starttls') {
        smtp_command($socket, 'STARTTLS', [220]);
        if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            throw new RuntimeException('STARTTLS negotiation failed.');
        }
        smtp_command($socket, 'EHLO carinaschoppe.com', [250]);
    }

    smtp_command($socket, 'AUTH LOGIN', [334]);
    smtp_command($socket, base64_encode((string) $config['smtp_user']), [334]);
    smtp_command($socket, base64_encode((string) $config['smtp_pass']), [235]);
    smtp_command($socket, 'MAIL FROM:<' . $config['mail_from'] . '>', [250]);
    smtp_command($socket, 'RCPT TO:<' . $config['mail_to'] . '>', [250, 251]);
    smtp_command($socket, 'DATA', [354]);

    fwrite($socket, build_mail_message($config, $subject, $body, $replyToEmail, $replyToName) . "\r\n.\r\n");
    smtp_expect($socket, [250]);
    smtp_command($socket, 'QUIT', [221]);
    fclose($socket);
}

function php_mail_send(array $config, string $subject, string $body, string $replyToEmail, string $replyToName): bool
{
    $headers = [
        'From: ' . encode_header((string) $config['mail_from_name']) . ' <' . $config['mail_from'] . '>',
        'Reply-To: ' . encode_header($replyToName) . ' <' . $replyToEmail . '>',
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
        'X-Mailer: Carina Website Contact Form',
    ];

    $extraParams = '-f' . escapeshellarg((string) $config['mail_from']);
    return mail((string) $config['mail_to'], encode_header($subject), $body, implode("\r\n", $headers), $extraParams);
}

function build_mail_message(array $config, string $subject, string $body, string $replyToEmail, string $replyToName): string
{
    $headers = [
        'From: ' . encode_header((string) $config['mail_from_name']) . ' <' . $config['mail_from'] . '>',
        'To: <' . $config['mail_to'] . '>',
        'Reply-To: ' . encode_header($replyToName) . ' <' . $replyToEmail . '>',
        'Subject: ' . encode_header($subject),
        'Date: ' . date(DATE_RFC2822),
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
        'X-Mailer: Carina Website Contact Form',
    ];

    return implode("\r\n", $headers) . "\r\n\r\n" . dot_stuff($body);
}

function smtp_command($socket, string $command, array $expected): void
{
    fwrite($socket, $command . "\r\n");
    smtp_expect($socket, $expected);
}

function smtp_expect($socket, array $expected): void
{
    $response = '';

    while (($line = fgets($socket, 515)) !== false) {
        $response .= $line;
        if (strlen($line) >= 4 && $line[3] === ' ') {
            break;
        }
    }

    $code = (int) substr($response, 0, 3);
    if (!in_array($code, $expected, true)) {
        throw new RuntimeException('Unexpected SMTP response: ' . trim($response));
    }
}

function encode_header(string $value): string
{
    return '=?UTF-8?B?' . base64_encode($value) . '?=';
}

function dot_stuff(string $body): string
{
    $body = str_replace(["\r\n", "\r"], "\n", $body);
    $lines = explode("\n", $body);
    $lines = array_map(static function (string $line): string {
        return substr($line, 0, 1) === '.' ? '.' . $line : $line;
    }, $lines);
    return implode("\r\n", $lines);
}

function contact_log(string $message): void
{
    $line = '[' . gmdate('Y-m-d H:i:s') . ' UTC] ' . $message . "\n";
    error_log('Contact form mail error: ' . $message);
    @file_put_contents(__DIR__ . '/contact-errors.log', $line, FILE_APPEND | LOCK_EX);
}

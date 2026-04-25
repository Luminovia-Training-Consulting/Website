<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'message' => 'Method not allowed.']);
}

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

$config = [];

try {
    $config = load_contact_config();
    send_contact_mail($config, $subject, $body, $email, $name);
    respond(200, ['ok' => true, 'message' => 'Message sent.']);
} catch (Throwable $error) {
    contact_log($requestId . ' failed: ' . $error->getMessage());
    $payload = [
        'ok' => false,
        'message' => 'The message could not be sent right now. Please email info@carinaschoppe.com directly. Error ID: ' . $requestId,
    ];

    if (($config['contact_debug'] ?? false) === true) {
        $payload['debug'] = redact_error($error->getMessage());
    }

    respond(500, $payload);
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

function load_contact_config(): array
{
    load_env_files([
        dirname(__DIR__) . '/.env',
        dirname(__DIR__, 2) . '/.env',
        __DIR__ . '/.env',
    ]);

    $fallback = is_file(__DIR__ . '/contact-config.php')
        ? require __DIR__ . '/contact-config.php'
        : [];

    $config = [
        'smtp_host' => env_value('SMTP_HOST', $fallback['smtp_host'] ?? 'smtp.hostinger.com'),
        'smtp_port' => (int) env_value('SMTP_PORT', $fallback['smtp_port'] ?? 465),
        'smtp_secure' => strtolower((string) env_value('SMTP_SECURE', $fallback['smtp_secure'] ?? 'ssl')),
        'smtp_user' => env_value('SMTP_USERNAME', $fallback['smtp_user'] ?? ''),
        'smtp_pass' => env_value('SMTP_PASSWORD', $fallback['smtp_pass'] ?? ''),
        'mail_from' => env_value('MAIL_FROM', $fallback['mail_from'] ?? ''),
        'mail_from_name' => env_value('MAIL_FROM_NAME', $fallback['mail_from_name'] ?? 'Website Contact Form'),
        'mail_to' => env_value('MAIL_TO', $fallback['mail_to'] ?? ''),
        'smtp_verify_peer' => filter_var(env_value('SMTP_VERIFY_PEER', $fallback['smtp_verify_peer'] ?? 'true'), FILTER_VALIDATE_BOOLEAN),
        'contact_transport' => strtolower((string) env_value('CONTACT_TRANSPORT', $fallback['contact_transport'] ?? 'auto')),
        'contact_debug' => filter_var(env_value('CONTACT_DEBUG', 'false'), FILTER_VALIDATE_BOOLEAN),
    ];

    if (!in_array($config['contact_transport'], ['auto', 'smtp', 'mail'], true)) {
        throw new RuntimeException('Invalid CONTACT_TRANSPORT setting. Use auto, smtp or mail.');
    }

    $requiredKeys = ['mail_from', 'mail_to'];
    if ($config['contact_transport'] !== 'mail') {
        $requiredKeys = array_merge($requiredKeys, ['smtp_host', 'smtp_user', 'smtp_pass']);
    }

    foreach ($requiredKeys as $key) {
        if (trim((string) $config[$key]) === '') {
            throw new RuntimeException('Missing contact form setting: ' . $key);
        }
    }

    if ($config['contact_transport'] !== 'mail' && !in_array($config['smtp_secure'], ['ssl', 'starttls', 'none'], true)) {
        throw new RuntimeException('Invalid SMTP_SECURE setting. Use ssl, starttls or none.');
    }

    $emailKeys = ['mail_from', 'mail_to'];
    if ($config['contact_transport'] !== 'mail') {
        $emailKeys[] = 'smtp_user';
    }

    foreach ($emailKeys as $emailKey) {
        if (!filter_var((string) $config[$emailKey], FILTER_VALIDATE_EMAIL)) {
            throw new RuntimeException('Invalid email setting: ' . $emailKey);
        }
    }

    return $config;
}

function load_env_files(array $paths): void
{
    foreach ($paths as $path) {
        if (!is_file($path) || !is_readable($path)) {
            continue;
        }

        $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        if ($lines === false) {
            continue;
        }

        foreach ($lines as $line) {
            $line = trim($line);
            if ($line === '' || str_starts_with($line, '#') || !str_contains($line, '=')) {
                continue;
            }

            [$key, $value] = explode('=', $line, 2);
            $key = trim($key);
            $value = trim($value);

            if (
                (str_starts_with($value, '"') && str_ends_with($value, '"')) ||
                (str_starts_with($value, "'") && str_ends_with($value, "'"))
            ) {
                $value = substr($value, 1, -1);
            }

            if ($key !== '' && raw_env_value($key) === null) {
                putenv($key . '=' . $value);
                $_ENV[$key] = $value;
                $_SERVER[$key] = $value;
            }
        }
    }
}

function env_value(string $key, mixed $default = ''): mixed
{
    $value = raw_env_value($key);
    return $value === null ? $default : $value;
}

function raw_env_value(string $key): ?string
{
    $value = getenv($key);
    if ($value !== false && $value !== '') {
        return $value;
    }

    foreach ([$_ENV, $_SERVER] as $source) {
        if (isset($source[$key]) && (string) $source[$key] !== '') {
            return (string) $source[$key];
        }
    }

    $redirectKey = 'REDIRECT_' . $key;
    if (isset($_SERVER[$redirectKey]) && (string) $_SERVER[$redirectKey] !== '') {
        return (string) $_SERVER[$redirectKey];
    }

    return null;
}

function send_contact_mail(array $config, string $subject, string $body, string $replyToEmail, string $replyToName): void
{
    $errors = [];
    $transport = (string) ($config['contact_transport'] ?? 'auto');

    if ($transport === 'mail') {
        if (php_mail_send($config, $subject, $body, $replyToEmail, $replyToName)) {
            return;
        }

        throw new RuntimeException('PHP mail transport returned false.');
    }

    foreach (smtp_attempts($config) as $attempt) {
        try {
            smtp_send($attempt, $subject, $body, $replyToEmail, $replyToName);
            return;
        } catch (Throwable $error) {
            $errors[] = $attempt['label'] . ': ' . $error->getMessage();
        }
    }

    if ($transport === 'auto' && php_mail_send($config, $subject, $body, $replyToEmail, $replyToName)) {
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

    $configuredPort = (int) ($config['smtp_port'] ?? 465);
    $configuredSecure = (string) ($config['smtp_secure'] ?? 'ssl');

    $attempts = [
        $base + ['label' => 'Configured SMTP', 'smtp_port' => $configuredPort, 'smtp_secure' => $configuredSecure],
    ];

    foreach ([
        ['label' => 'Hostinger SMTP SSL 465', 'smtp_port' => 465, 'smtp_secure' => 'ssl'],
        ['label' => 'Hostinger SMTP STARTTLS 587', 'smtp_port' => 587, 'smtp_secure' => 'starttls'],
    ] as $fallback) {
        if ($fallback['smtp_port'] !== $configuredPort || $fallback['smtp_secure'] !== $configuredSecure) {
            $attempts[] = $base + $fallback;
        }
    }

    return $attempts;
}

function smtp_send(array $config, string $subject, string $body, string $replyToEmail, string $replyToName): void
{
    $host = (string) $config['smtp_host'];
    $port = (int) $config['smtp_port'];
    $secure = (string) $config['smtp_secure'];
    $remote = ($secure === 'ssl' ? 'ssl://' : 'tcp://') . $host . ':' . $port;
    $context = stream_context_create([
        'ssl' => [
            'SNI_enabled' => true,
            'peer_name' => $host,
            'verify_peer' => (bool) ($config['smtp_verify_peer'] ?? true),
            'verify_peer_name' => (bool) ($config['smtp_verify_peer'] ?? true),
            'allow_self_signed' => false,
        ],
    ]);
    $socket = stream_socket_client($remote, $errno, $errstr, 20, STREAM_CLIENT_CONNECT, $context);

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

    if ($response === '') {
        $meta = stream_get_meta_data($socket);
        throw new RuntimeException(($meta['timed_out'] ?? false) ? 'SMTP response timed out.' : 'SMTP connection closed without response.');
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

function redact_error(string $message): string
{
    return preg_replace('/(SMTP_PASSWORD|smtp_pass|password|AUTH LOGIN).*?($|\s\|)/i', '$1 redacted$2', $message) ?? 'Debug details unavailable.';
}

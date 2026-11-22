/** Public Website relay. The existing Portal endpoint remains server-to-server only. */
const route = "/website-enquiry";
const challengeEndpoint = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const action = "website_enquiry";
const submissionIdPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
const fields = [
    "submission_id", "company_name", "contact_name", "email", "phone",
    "topic", "message", "preferred_dates", "duration", "delivery_type",
    "time_zone", "locale", "privacy_notice_version", "consent", "website",
];

function canonicalOrigin(value) {
    try {
        const url = new URL(value);
        return url.protocol === "https:" && url.origin === value ? url : null;
    } catch {
        return null;
    }
}

function portalTarget(value) {
    try {
        const url = new URL(value);
        return url.protocol === "https:" && !url.username && !url.password &&
            !url.hash && !url.search && /^(?:\/backend)?\/functions\/v1\/website-enquiries$/.test(url.pathname)
            ? url : null;
    } catch {
        return null;
    }
}

function readClientKey(key) {
    if (typeof key !== "string" || key.length > 8192 || /\s/.test(key)) return null;
    if (/^sb_publishable_[A-Za-z0-9_-]+$/.test(key)) return {apikey: key};
    try {
        const parts = key.split(".");
        if (parts.length !== 3) return null;
        const claims = JSON.parse(atob(parts[1].replaceAll("-", "+").replaceAll("_", "/")));
        return claims.role === "anon" ? {apikey: key, Authorization: `Bearer ${key}`} : null;
    } catch {
        return null;
    }
}

async function readBoundedJson(source, byteLimit) {
    const chunks = [];
    const reader = source.body?.getReader();
    if (!reader) throw new TypeError("body_required");
    let size = 0;
    try {
        for (;;) {
            const {value, done} = await reader.read();
            if (done) break;
            size += value.byteLength;
            if (size > byteLimit) {
                void reader.cancel().catch(() => {});
                throw new RangeError("body_too_large");
            }
            chunks.push(value);
        }
    } finally {
        reader.releaseLock();
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) {
        bytes.set(chunk, offset);
        offset += chunk.byteLength;
    }
    return JSON.parse(new TextDecoder("utf-8", {fatal: true}).decode(bytes));
}

function readSubmission(value, expectedVersion) {
    if (!value || typeof value !== "object" || Array.isArray(value)) return null;
    const {challenge_token: token, ...payload} = value;
    if (typeof token !== "string" || !token || token.length > 2048 ||
        !submissionIdPattern.test(payload.submission_id ?? "") ||
        Object.keys(payload).some(key => !fields.includes(key)) ||
        fields.some(key => key !== "consent" && !Object.hasOwn(payload, key)) ||
        payload.consent !== true || payload.website !== "" || payload.privacy_notice_version !== expectedVersion ||
        fields.some(key => key !== "consent" && typeof payload[key] !== "string")) return null;
    return {token, payload};
}

export function createEnquiryRelay(fetcher = fetch) {
    return async (request, env) => {
        const website = canonicalOrigin(env.WEBSITE_ORIGIN);
        const target = portalTarget(env.PORTAL_ENQUIRY_URL);
        const clientKey = readClientKey(env.PORTAL_CLIENT_KEY);
        const configuredOrigin = website?.origin;
        const origin = request.headers.get("Origin");
        const allowed = Boolean(configuredOrigin && origin === configuredOrigin);
        const headers = {
            "Content-Type": "application/json",
            "Cache-Control": "no-store",
            "X-Content-Type-Options": "nosniff",
            Vary: "Origin",
            ...(allowed ? {"Access-Control-Allow-Origin": configuredOrigin} : {}),
        };
        const reply = (status, data) => Response.json(data, {status, headers});
        if (new URL(request.url).pathname !== route) return reply(404, {error: "not_found"});
        if (!allowed) return reply(403, {error: "origin_not_allowed"});
        if (!target || !clientKey ||
            typeof env.PORTAL_INTEGRATION_TOKEN !== "string" ||
            !/^[\x21-\x7e]{32,256}$/.test(env.PORTAL_INTEGRATION_TOKEN) ||
            !env.TURNSTILE_SECRET || !env.PRIVACY_NOTICE_VERSION) {
            return reply(503, {error: "integration_unavailable"});
        }
        if (request.method === "OPTIONS") {
            if (request.headers.get("Access-Control-Request-Method") !== "POST") {
                return reply(405, {error: "method_not_allowed"});
            }
            return new Response(null, {status: 204, headers: {
                ...headers, "Access-Control-Allow-Methods": "POST", "Access-Control-Allow-Headers": "Content-Type",
            }});
        }
        if (request.method !== "POST") return reply(405, {error: "method_not_allowed"});
        if (request.headers.get("Content-Type")?.split(";")[0].trim().toLowerCase() !== "application/json") {
            return reply(415, {error: "json_required"});
        }
        let input;
        try {
            input = readSubmission(await readBoundedJson(request, 26000), env.PRIVACY_NOTICE_VERSION);
        } catch (error) {
            return reply(error instanceof RangeError ? 413 : 400, {error: "invalid_request"});
        }
        if (!input) return reply(400, {error: "invalid_request"});
        try {
            const challenge = await fetcher(challengeEndpoint, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({secret: env.TURNSTILE_SECRET, response: input.token}),
                redirect: "error",
                signal: AbortSignal.timeout(4500),
            });
            if (!challenge.ok) return reply(503, {error: "challenge_unavailable"});
            const proof = await readBoundedJson(challenge, 8192);
            if (proof.success !== true || proof.hostname !== website.hostname ||
                proof.action !== action || proof.cdata !== input.payload.submission_id) {
                return reply(400, {error: "challenge_invalid"});
            }
        } catch {
            return reply(503, {error: "challenge_unavailable"});
        }
        try {
            const accepted = await fetcher(target, {
                method: "POST",
                headers: {
                    ...clientKey,
                    "Content-Type": "application/json",
                    "Origin": configuredOrigin,
                    "X-Luminovia-Integration-Token": env.PORTAL_INTEGRATION_TOKEN,
                },
                body: JSON.stringify(input.payload),
                redirect: "error",
                signal: AbortSignal.timeout(8000),
            });
            if (accepted.status !== 202) {
                await accepted.body?.cancel();
                return [400, 409, 413, 429].includes(accepted.status)
                    ? reply(accepted.status, {error: "enquiry_rejected"})
                    : reply(503, {error: "delivery_unavailable"});
            }
            const receipt = await readBoundedJson(accepted, 2048);
            if (receipt?.received !== true || receipt.receipt !== input.payload.submission_id) {
                return reply(503, {error: "delivery_unavailable"});
            }
            return reply(202, {received: true, receipt: receipt.receipt});
        } catch {
            return reply(503, {error: "delivery_unavailable"});
        }
    };
}

export default {fetch: createEnquiryRelay()};

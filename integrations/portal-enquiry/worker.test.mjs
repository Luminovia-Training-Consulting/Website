import assert from "node:assert/strict";
import {test} from "vitest";
import {createEnquiryRelay} from "./worker.mjs";

const id = "fd032f10-f496-45e2-8d3a-cfbfdd1a3167";
const website = "https://website.example.invalid";
const env = {
    WEBSITE_ORIGIN: website,
    PORTAL_ENQUIRY_URL: "https://portal.example.invalid/backend/functions/v1/website-enquiries",
    PORTAL_CLIENT_KEY: "sb_publishable_fictional",
    PORTAL_INTEGRATION_TOKEN: "fictional-server-only-token-with-length",
    TURNSTILE_SECRET: "fictional-site-verification-secret",
    PRIVACY_NOTICE_VERSION: "fictional-notice-v1",
};
const body = {
    submission_id: id, company_name: "Fictional Training", contact_name: "Tester",
    email: "learner@example.invalid", phone: "", topic: "Fictional workshop", message: "Test",
    preferred_dates: "", duration: "", delivery_type: "flexible", time_zone: "Europe/Berlin",
    locale: "de", privacy_notice_version: env.PRIVACY_NOTICE_VERSION, consent: true,
    website: "", challenge_token: "fictional-proof",
};
const proof = {success: true, hostname: new URL(website).hostname, action: "website_enquiry", cdata: id};

function request(payload = body, options = {}) {
    return new Request("https://relay.example.invalid/website-enquiry", {
        method: "POST",
        headers: {Origin: website, "Content-Type": "application/json"},
        body: JSON.stringify(payload),
        ...options,
    });
}

function harness({challenge = proof, releaseReceipt = id, portalStatus = 202} = {}) {
    const calls = [];
    const run = createEnquiryRelay(async (target, init) => {
        calls.push({target: String(target), ...init, input: JSON.parse(init.body)});
        if (calls.length === 1) return Response.json(challenge);
        return Response.json({received: true, receipt: releaseReceipt, privateField: "must not escape"}, {status: portalStatus});
    });
    return {run, calls};
}

test("matches website, challenge action and attempt before forwarding the consented form", async () => {
    const {run, calls} = harness();
    const result = await run(request(), env);
    assert.equal(result.status, 202);
    assert.deepEqual(await result.json(), {received: true, receipt: id});
    assert.equal(result.headers.get("Access-Control-Allow-Origin"), website);
    assert.equal(result.headers.get("Cache-Control"), "no-store");
    assert.deepEqual(calls[0].input, {secret: env.TURNSTILE_SECRET, response: body.challenge_token});
    assert.equal(calls[0].headers["X-Luminovia-Integration-Token"], undefined);
    assert.equal(calls[1].target, env.PORTAL_ENQUIRY_URL);
    assert.equal(calls[1].headers["X-Luminovia-Integration-Token"], env.PORTAL_INTEGRATION_TOKEN);
    assert.equal(calls[1].headers.apikey, env.PORTAL_CLIENT_KEY);
    assert.equal(calls[1].input.challenge_token, undefined);
    assert.equal(calls[1].input.submission_id, id);
    assert.equal(calls[1].redirect, "error");
});

test("rejects cross-origin, weak configuration and unsupported preflight without a provider call", async () => {
    const {run, calls} = harness();
    const foreign = await run(request(body, {headers: {Origin: "https://other.example.invalid"}}), env);
    assert.equal(foreign.status, 403);
    assert.equal(foreign.headers.get("Access-Control-Allow-Origin"), null);
    assert.equal((await run(request(), {...env, PORTAL_CLIENT_KEY: "sb_secret_fictional"})).status, 503);
    const bad = new Request("https://relay.example.invalid/website-enquiry", {
        method: "OPTIONS", headers: {Origin: website, "Access-Control-Request-Method": "DELETE"},
    });
    assert.equal((await run(bad, env)).status, 405);
    const good = new Request(bad, {
        headers: {Origin: website, "Access-Control-Request-Method": "POST"},
    });
    assert.equal((await run(good, env)).status, 204);
    assert.equal(calls.length, 0);
});

test("denies recycled or mismatched challenge, oversized body and extra fields", async () => {
    for (const challenge of [{...proof, success: false}, {...proof, cdata: "other"}, {...proof, hostname: "other.example.invalid"}, {...proof, action: "other"}]) {
        const {run, calls} = harness({challenge});
        assert.equal((await run(request(), env)).status, 400);
        assert.equal(calls.length, 1);
    }
    const {run, calls} = harness();
    assert.equal((await run(request({...body, message: "a".repeat(26100)}), env)).status, 413);
    assert.equal((await run(request({...body, privacy_notice_version: "old"}), env)).status, 400);
    assert.equal((await run(request({...body, organisation_id: "extra"}), env)).status, 400);
    assert.equal(calls.length, 0);
});

test("reports a confirmed Portal receipt only and keeps retryable errors bounded", async () => {
    for (const [fixture, expected] of [
        [{releaseReceipt: "wrong"}, 503], [{portalStatus: 429}, 429], [{portalStatus: 409}, 409],
        [{portalStatus: 403}, 503], [{portalStatus: 200}, 503],
    ]) {
        const {run, calls} = harness(fixture);
        const result = await run(request(), env);
        assert.equal(result.status, expected);
        assert.deepEqual(Object.keys(await result.json()), ["error"]);
        assert.equal(calls[1].input.submission_id, id);
    }
});

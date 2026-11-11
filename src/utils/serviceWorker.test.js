import {readFileSync} from "node:fs";
import {runInNewContext} from "node:vm";
import {describe, expect, it, vi} from "vitest";

const origin = "https://luminovia.org";
const worker = readFileSync("public/sw.js", "utf8");

function setupWorker(cachedResponse, fetch) {
    const handlers = new Map();
    const store = {
        match: vi.fn().mockResolvedValue(cachedResponse),
        put: vi.fn().mockResolvedValue(undefined),
    };
    runInNewContext(worker, {
        URL,
        Response,
        fetch,
        caches: {open: vi.fn().mockResolvedValue(store)},
        self: {
            location: {origin},
            addEventListener: (type, handler) => handlers.set(type, handler),
        },
    });

    function request(path, headers) {
        const event = {
            request: new Request(origin + path, {headers}),
            respondWith: vi.fn(),
            waitUntil: vi.fn(),
        };
        handlers.get("fetch")(event);
        return {
            response: event.respondWith.mock.calls[0][0],
            cacheUpdate: event.waitUntil.mock.calls[0]?.[0],
        };
    }

    return {request, store};
}

describe("service worker asset cache", () => {
    it("serves a cached image while a fresh response is added in the background", async () => {
        const network = Promise.withResolvers();
        const cached = new Response("cached");
        const {request, store} = setupWorker(cached, () => network.promise);
        const {response, cacheUpdate} = request("/images/example.webp");

        await expect(response).resolves.toBe(cached);
        expect(store.put).not.toHaveBeenCalled();

        network.resolve(new Response("fresh"));
        await cacheUpdate;
        await expect(store.put.mock.calls[0][1].text()).resolves.toBe("fresh");
    });

    it("serves a cached image if its background update cannot reach the network", async () => {
        const cached = new Response("cached");
        const fetch = vi.fn().mockRejectedValue(new TypeError("Failed to fetch"));
        const {request, store} = setupWorker(cached, fetch);
        const {response, cacheUpdate} = request("/images/example.webp");

        await expect(response).resolves.toBe(cached);
        await expect(cacheUpdate).resolves.toBeUndefined();
        expect(store.put).not.toHaveBeenCalled();
    });

    it("serves a cached hashed bundle without revalidating it", async () => {
        const cached = new Response("cached bundle");
        const fetch = vi.fn();
        const {request} = setupWorker(cached, fetch);
        const {response, cacheUpdate} = request("/assets/site-hash.js");

        await expect(response).resolves.toBe(cached);
        await cacheUpdate;
        expect(fetch).not.toHaveBeenCalled();
    });
});

it("preserves the origin response and 404 status for a missing page", async () => {
    const originResponse = new Response("GitHub Pages not-found document", {status: 404});
    const fetch = vi.fn().mockResolvedValue(originResponse);
    const {request} = setupWorker(null, fetch);

    const response = await request("/missing-page/?ref=example", {accept: "text/html"}).response;

    expect(response).toBe(originResponse);
    expect(response.status).toBe(404);
    expect(fetch).toHaveBeenCalledExactlyOnceWith(expect.objectContaining({
        url: `${origin}/missing-page/?ref=example`,
    }), {cache: "no-store"});
});

it("shows a bilingual offline page if navigation fails", async () => {
    const fetch = vi.fn().mockRejectedValue(new TypeError("Failed to fetch"));
    const {request} = setupWorker(null, fetch);
    const response = await request("/training/", {accept: "text/html"}).response;
    const html = await response.text();

    expect(response.status).toBe(503);
    expect(html).toContain('<section lang="en">');
    expect(html).toContain("No connection");
    expect(html).toContain('<section lang="de">');
    expect(html).toContain("Keine Verbindung");
});

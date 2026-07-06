/* global caches, fetch, Response, self, URL */

const CACHE_VERSION = "luminovia-v3";
const ASSET_CACHE = `${CACHE_VERSION}-assets`;
const IMAGE_CACHE = `${CACHE_VERSION}-images`;
const CACHEABLE_ASSET_PATHS = ["/assets/", "/images/"];

function isCacheableRequest(request) {
    if (request.method !== "GET") return false;

    const url = new URL(request.url);
    if (url.origin !== self.location.origin) return false;

    return CACHEABLE_ASSET_PATHS.some((path) => url.pathname.startsWith(path));
}

function isNavigationRequest(request) {
    const acceptHeader = request.headers.get("accept") || "";
    return request.mode === "navigate" || acceptHeader.includes("text/html");
}

async function networkFirst(request) {
    try {
        return await fetch(request, {cache: "no-store"});
    } catch {
        return new Response(
            "<!doctype html><html lang=\"de\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>Luminovia aktualisiert</title></head><body style=\"margin:0;background:#08090b;color:#f8fafc;font-family:system-ui,sans-serif;display:grid;min-height:100vh;place-items:center\"><main style=\"max-width:38rem;padding:2rem\"><h1 style=\"font-size:1.6rem\">Luminovia wird aktualisiert.</h1><p style=\"line-height:1.7;color:#cbd5e1\">Bitte laden Sie die Seite neu, sobald die Verbindung wieder verfügbar ist.</p></main></body></html>",
            {
                status: 503,
                statusText: "Service Unavailable",
                headers: {"Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store"},
            },
        );
    }
}

async function cacheFirst(request, cacheName) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    if (cached) return cached;

    const response = await fetch(request);
    if (response.ok) {
        await cache.put(request, response.clone());
    }

    return response;
}

async function staleWhileRevalidate(request, cacheName) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    const fresh = fetch(request).then((response) => {
        if (response.ok) {
            cache.put(request, response.clone());
        }

        return response;
    });

    return cached || fresh;
}

self.addEventListener("install", () => {
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames
                .filter((cacheName) => cacheName.startsWith("luminovia-") && !cacheName.startsWith(CACHE_VERSION))
                .map((cacheName) => caches.delete(cacheName)),
        ))
            .then(() => self.clients.claim())
            .then(() => self.clients.matchAll({type: "window", includeUncontrolled: true}))
            .then((clients) => Promise.all(clients.map((client) => client.postMessage({
                type: "LUMINOVIA_SW_ACTIVATED",
                version: CACHE_VERSION,
            })))),
    );
});

self.addEventListener("fetch", (event) => {
    if (isNavigationRequest(event.request)) {
        event.respondWith(networkFirst(event.request));
        return;
    }

    if (!isCacheableRequest(event.request)) return;

    const url = new URL(event.request.url);
    const cacheName = url.pathname.startsWith("/assets/") ? ASSET_CACHE : IMAGE_CACHE;
    const strategy = url.pathname.startsWith("/assets/") ? cacheFirst : staleWhileRevalidate;

    event.respondWith(strategy(event.request, cacheName));
});

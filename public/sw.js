/* global caches, fetch, self, URL */

const CACHE_VERSION = "luminovia-v2";
const ASSET_CACHE = `${CACHE_VERSION}-assets`;
const IMAGE_CACHE = `${CACHE_VERSION}-images`;
const CACHEABLE_ASSET_PATHS = ["/assets/", "/images/"];

function isCacheableRequest(request) {
    if (request.method !== "GET") return false;

    const url = new URL(request.url);
    if (url.origin !== self.location.origin) return false;

    return CACHEABLE_ASSET_PATHS.some((path) => url.pathname.startsWith(path));
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
        )).then(() => self.clients.claim()),
    );
});

self.addEventListener("fetch", (event) => {
    if (!isCacheableRequest(event.request)) return;

    const url = new URL(event.request.url);
    const cacheName = url.pathname.startsWith("/assets/") ? ASSET_CACHE : IMAGE_CACHE;
    const strategy = url.pathname.startsWith("/assets/") ? cacheFirst : staleWhileRevalidate;

    event.respondWith(strategy(event.request, cacheName));
});

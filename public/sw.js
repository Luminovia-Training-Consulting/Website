/* global caches, fetch, Response, self, URL */

const CACHE_VERSION = "luminovia-v7";
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
        const response = await fetch(request, {cache: "no-store"});
        if (response.status !== 404) return response;

        const requestedUrl = new URL(request.url);
        const fallbackUrl = new URL("/not-found/", self.location.origin);
        fallbackUrl.searchParams.set("from", `${requestedUrl.pathname}${requestedUrl.search}`);
        return await fetch(fallbackUrl, {cache: "no-store"});
    } catch {
        return new Response(
            `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light dark">
<title>Offline | Luminovia</title>
<style>
body { margin: 0; font: 1rem/1.6 system-ui, sans-serif; }
main { max-width: 34rem; padding: 2rem; margin: 10vh auto 0; }
section + section { border-top: 1px solid; margin-top: 2rem; padding-top: 2rem; }
h1, h2 { margin: 0; font-size: 1.6rem; line-height: 1.2; }
p { margin: .75rem 0 0; }
</style>
</head>
<body>
<main>
<section lang="en">
    <h1>No connection</h1>
    <p>Reload this page when you’re back online.</p>
</section>
<section lang="de">
    <h2>Keine Verbindung</h2>
    <p>Laden Sie die Seite neu, sobald Sie wieder online sind.</p>
</section>
</main>
</body>
</html>`,
            {
                status: 503,
                statusText: "Service Unavailable",
                headers: {"Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store"},
            },
        );
    }
}

function serveAsset(event, cacheName, revalidate) {
    const {request} = event;
    const cache = caches.open(cacheName).catch(() => null);
    const cached = cache.then((store) => store?.match(request)).catch(() => null);
    const fresh = revalidate ? fetch(request) : cached.then((response) => response ? null : fetch(request));

    event.waitUntil(fresh.then(async (response) => {
        if (!response?.ok) return;

        const copy = response.clone();
        const store = await cache;
        await store?.put(request, copy);
    }).catch(() => {}));

    return cached.then((response) => response || fresh);
}

self.addEventListener("install", () => {
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames
                .filter((cacheName) => cacheName.startsWith("luminovia-") && cacheName !== ASSET_CACHE && cacheName !== IMAGE_CACHE)
                .map((cacheName) => caches.delete(cacheName)),
        ))
            .catch(() => {})
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
    const isBundledAsset = url.pathname.startsWith("/assets/");
    event.respondWith(serveAsset(event, isBundledAsset ? ASSET_CACHE : IMAGE_CACHE, !isBundledAsset));
});

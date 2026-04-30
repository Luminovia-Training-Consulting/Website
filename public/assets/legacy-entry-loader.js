/* global fetch, URL */

const reloadKey = "carina_legacy_entry_reload_v2";

function reloadOnce() {
    try {
        if (globalThis.sessionStorage?.getItem(reloadKey) === "used") return;
        globalThis.sessionStorage?.setItem(reloadKey, "used");
    } catch {
        // Reloading without the guard is still better than leaving a stale chunk broken.
    }

    globalThis.location.reload();
}

async function importCurrentEntry() {
    const response = await fetch("/", {cache: "no-store"});
    if (!response.ok) throw new Error(`Could not refresh entry HTML: ${response.status}`);

    const html = await response.text();
    const currentPath = new URL(import.meta.url).pathname;
    const entryMatch = html.match(/<script\s+type="module"[^>]+src="(\/assets\/index-[^"]+\.js)"/);
    const entryPath = entryMatch?.[1];

    if (!entryPath || entryPath === currentPath) throw new Error("Current entry chunk was not found.");

    await import(entryPath);
}

importCurrentEntry().catch(reloadOnce);

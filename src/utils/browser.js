export function safeGetStorageItem(key) {
    try {
        return globalThis.localStorage?.getItem(key) ?? null;
    } catch {
        return null;
    }
}

export function safeSetStorageItem(key, value) {
    try {
        globalThis.localStorage?.setItem(key, value);
        return true;
    } catch {
        return false;
    }
}

export function safeGetSessionItem(key) {
    try {
        return globalThis.sessionStorage?.getItem(key) ?? null;
    } catch {
        return null;
    }
}

export function safeSetSessionItem(key, value) {
    try {
        globalThis.sessionStorage?.setItem(key, value);
        return true;
    } catch {
        return false;
    }
}

export function safeRemoveSessionItem(key) {
    try {
        globalThis.sessionStorage?.removeItem(key);
        return true;
    } catch {
        return false;
    }
}

export function isChunkLoadError(error) {
    const message = error instanceof Error ? error.message : String(error ?? "");
    return /Failed to fetch dynamically imported module|Importing a module script failed|Loading chunk|ChunkLoadError|MIME type/i.test(message);
}

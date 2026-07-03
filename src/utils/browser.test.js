import {afterEach, describe, expect, it, vi} from "vitest";
import {
    isChunkLoadError,
    safeRemoveSessionItem,
    safeGetSessionItem,
    safeGetStorageItem,
    safeSetSessionItem,
    safeSetStorageItem,
} from "./browser.js";

describe("browser utilities", () => {
    const originalLocalStorage = globalThis.localStorage;
    const originalSessionStorage = globalThis.sessionStorage;

    afterEach(() => {
        Object.defineProperty(globalThis, "localStorage", {
            value: originalLocalStorage,
            configurable: true,
        });
        Object.defineProperty(globalThis, "sessionStorage", {
            value: originalSessionStorage,
            configurable: true,
        });
        vi.restoreAllMocks();
    });

    it("reads and writes local storage when it is available", () => {
        expect(safeSetStorageItem("site-test", "ok")).toBe(true);
        expect(safeGetStorageItem("site-test")).toBe("ok");
    });

    it("falls back cleanly when local storage is blocked", () => {
        Object.defineProperty(globalThis, "localStorage", {
            value: {
                getItem: () => {
                    throw new Error("blocked");
                },
                setItem: () => {
                    throw new Error("blocked");
                },
            },
            configurable: true,
        });

        expect(safeGetStorageItem("site-test")).toBeNull();
        expect(safeSetStorageItem("site-test", "ok")).toBe(false);
    });

    it("reads and writes session storage when it is available", () => {
        expect(safeSetSessionItem("site-test-session", "ok")).toBe(true);
        expect(safeGetSessionItem("site-test-session")).toBe("ok");
        expect(safeRemoveSessionItem("site-test-session")).toBe(true);
        expect(safeGetSessionItem("site-test-session")).toBeNull();
    });

    it("falls back cleanly when session storage is blocked", () => {
        Object.defineProperty(globalThis, "sessionStorage", {
            value: {
                getItem: () => {
                    throw new Error("blocked");
                },
                setItem: () => {
                    throw new Error("blocked");
                },
                removeItem: () => {
                    throw new Error("blocked");
                },
            },
            configurable: true,
        });

        expect(safeGetSessionItem("site-test-session")).toBeNull();
        expect(safeSetSessionItem("site-test-session", "ok")).toBe(false);
        expect(safeRemoveSessionItem("site-test-session")).toBe(false);
    });

    it("detects common stale chunk and module loading failures", () => {
        expect(isChunkLoadError(new Error("Failed to fetch dynamically imported module"))).toBe(true);
        expect(isChunkLoadError(new Error("Expected a JavaScript module script but got a MIME type"))).toBe(true);
        expect(isChunkLoadError(null)).toBe(false);
        expect(isChunkLoadError(new Error("ordinary render error"))).toBe(false);
    });
});

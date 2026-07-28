import {describe, expect, it} from "vitest";
import {buildNotFoundReference} from "./notFound.js";

describe("not-found references", () => {
    it("creates a stable reference for the same address", () => {
        const reference = buildNotFoundReference("/jiushfe");

        expect(reference).toMatch(/^LV-[0-9A-F]{16}$/);
        expect(buildNotFoundReference("/jiushfe")).toBe(reference);
    });

    it("creates different references for different addresses", () => {
        expect(buildNotFoundReference("/jiushfe")).not.toBe(buildNotFoundReference("/another-page"));
        expect(buildNotFoundReference("/")).toBe(buildNotFoundReference(""));
    });
});

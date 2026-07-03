import {render} from "@testing-library/react";
import {afterEach, beforeEach, describe, expect, it, vi} from "vitest";
import AmbientIntelligence from "./AmbientIntelligence.jsx";

describe("AmbientIntelligence", () => {
    beforeEach(() => {
        vi.stubGlobal("matchMedia", vi.fn(() => ({matches: false})));
        vi.stubGlobal("requestAnimationFrame", vi.fn((callback) => {
            callback();
            return 1;
        }));
        vi.stubGlobal("cancelAnimationFrame", vi.fn());
        Object.defineProperty(window, "innerHeight", {value: 1000, configurable: true});
        Object.defineProperty(window, "innerWidth", {value: 1000, configurable: true});
        Object.defineProperty(window, "scrollY", {value: 500, configurable: true});
        Object.defineProperty(document.documentElement, "scrollHeight", {value: 2000, configurable: true});
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it("updates scroll progress from cached measurements and pointer coordinates", () => {
        render(<AmbientIntelligence/>);

        const progressBar = document.querySelector(".scroll-progress span");
        const pointerAura = document.querySelector(".pointer-aura");

        expect(progressBar).toHaveStyle({"--scroll-progress": "0.5"});

        Object.defineProperty(window, "scrollY", {value: 250, configurable: true});
        window.dispatchEvent(new Event("scroll"));
        expect(progressBar).toHaveStyle({"--scroll-progress": "0.25"});

        Object.defineProperty(document.documentElement, "scrollHeight", {value: 3000, configurable: true});
        window.dispatchEvent(new Event("resize"));
        expect(progressBar).toHaveStyle({"--scroll-progress": "0.125"});

        window.dispatchEvent(new MouseEvent("pointermove", {clientX: 250, clientY: 750}));
        expect(pointerAura).toHaveStyle({"--pointer-x": "25%"});
        expect(pointerAura).toHaveStyle({"--pointer-y": "75%"});
    });

    it("renders decorative markup but skips desktop listeners on mobile", () => {
        const addEventListener = vi.spyOn(globalThis, "addEventListener");
        globalThis.matchMedia = vi.fn(() => ({matches: true}));

        render(<AmbientIntelligence/>);

        expect(document.querySelector(".scroll-progress")).toBeInTheDocument();
        expect(addEventListener).not.toHaveBeenCalledWith("scroll", expect.any(Function), expect.anything());
    });
});

import {fireEvent, screen} from "@testing-library/react";
import {afterEach, describe, expect, it, vi} from "vitest";
import ClientProofSection from "./ClientProofSection.jsx";
import {renderWithProviders} from "../test/test-utils.jsx";

describe("ClientProofSection", () => {
    afterEach(() => {
        vi.useRealTimers();
        vi.restoreAllMocks();
    });

    it("flips a client card once per real pointer entry and applies a short cooldown", () => {
        vi.useFakeTimers();
        vi.setSystemTime(new Date("2026-04-26T12:00:00Z"));
        vi.spyOn(window, "requestAnimationFrame").mockImplementation((callback) => {
            callback();
            return 1;
        });
        vi.spyOn(window, "cancelAnimationFrame").mockImplementation(() => {});

        renderWithProviders(<ClientProofSection compact/>);

        const card = screen.getByRole("link", {name: /Fast Lane \/ AI CERTs/i});
        card.getBoundingClientRect = () => ({
            bottom: 200,
            height: 200,
            left: 0,
            right: 300,
            top: 0,
            width: 300,
            x: 0,
            y: 0,
            toJSON: () => {},
        });

        fireEvent.pointerEnter(card);
        expect(card).toHaveClass("is-flipped");

        fireEvent.pointerLeave(card, {clientX: 500, clientY: 500});
        expect(card).not.toHaveClass("is-flipped");

        fireEvent.pointerEnter(card);
        expect(card).not.toHaveClass("is-flipped");

        vi.advanceTimersByTime(1001);
        fireEvent.pointerEnter(card);
        expect(card).toHaveClass("is-flipped");
    });
});

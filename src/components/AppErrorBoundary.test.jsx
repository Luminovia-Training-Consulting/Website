import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {describe, expect, it, vi} from "vitest";
import AppErrorBoundary from "./AppErrorBoundary.jsx";

function ThrowingChild() {
    throw new Error("boom");
}

describe("AppErrorBoundary", () => {
    it("renders children when no error occurs", () => {
        render(<AppErrorBoundary><div>Healthy child</div></AppErrorBoundary>);

        expect(screen.getByText("Healthy child")).toBeInTheDocument();
    });

    it("renders an explicit fallback after an error", () => {
        vi.spyOn(console, "error").mockImplementation(() => {});

        render(<AppErrorBoundary fallback={<div>Recovered fallback</div>}><ThrowingChild/></AppErrorBoundary>);

        expect(screen.getByText("Recovered fallback")).toBeInTheDocument();
        console.error.mockRestore();
    });

    it("renders the German recovery UI and reload action", async () => {
        const user = userEvent.setup();
        const reload = vi.fn();
        vi.spyOn(console, "error").mockImplementation(() => {});
        document.documentElement.lang = "de";
        Object.defineProperty(globalThis, "location", {
            value: {reload},
            configurable: true,
        });

        render(<AppErrorBoundary><ThrowingChild/></AppErrorBoundary>);

        expect(screen.getByRole("heading", {name: /nicht sauber geladen/i})).toBeInTheDocument();
        await user.click(screen.getByRole("button", {name: /Seite neu laden/i}));
        expect(reload).toHaveBeenCalledTimes(1);
        console.error.mockRestore();
    });
});

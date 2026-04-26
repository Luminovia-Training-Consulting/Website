import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {beforeEach, describe, expect, it, vi} from "vitest";
import App from "./App.jsx";

describe("App routing and language", () => {
    beforeEach(() => {
        window.localStorage.clear();
        window.scrollTo = vi.fn();
        vi.unstubAllGlobals();
    });

    it("renders the homepage and switches the visible copy to German", async () => {
        const user = userEvent.setup();
        render(<App/>);

        expect(screen.getByRole("heading", {name: /AI, IT & Business Lecturer/i})).toBeInTheDocument();

        await user.click(screen.getByRole("button", {name: /Switch language/i}));

        expect(screen.getByRole("heading", {name: /AI-, IT- und Business-Dozentin/i})).toBeInTheDocument();
        expect(document.documentElement.lang).toBe("de");
    });

    it("renders direct contact links and the appointment scheduler without a form", () => {
        window.history.pushState({}, "Contact", "/contact");

        render(<App/>);

        expect(screen.queryByRole("button", {name: /Send request/i})).not.toBeInTheDocument();
        expect(screen.getAllByRole("link", {name: /Write an email/i})[0]).toHaveAttribute("href", expect.stringContaining("mailto:info@carinaschoppe.com"));
        expect(screen.getAllByRole("link", {name: /\+61 451 448 724/i})[0]).toHaveAttribute("href", "tel:+61451448724");
        expect(screen.getAllByRole("link", {name: /\+49 175 5738 757/i})[0]).toHaveAttribute("href", "tel:+491755738757");
        expect(screen.getByTitle(/Google Calendar appointment scheduler/i)).toHaveAttribute("src", expect.stringContaining("calendar.google.com/calendar/appointments/schedules"));
    });

    it("renders pricing in USD by default and switches pricing to German EUR copy", async () => {
        const user = userEvent.setup();
        window.history.pushState({}, "Pricing", "/pricing");

        render(<App/>);

        expect(screen.getByRole("heading", {name: /Transparent orientation rates/i})).toBeInTheDocument();
        expect(screen.getByText("$60-65")).toBeInTheDocument();
        expect(screen.getByText("from $1,200")).toBeInTheDocument();

        await user.click(screen.getByRole("button", {name: /Switch language/i}));

        expect(screen.getByRole("heading", {name: /Transparente Richtwerte/i})).toBeInTheDocument();
        expect(screen.getByText("50-55 EUR")).toBeInTheDocument();
        expect(screen.getByText("ab 1.000 EUR")).toBeInTheDocument();
    });
});

import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {beforeEach, describe, expect, it, vi} from "vitest";
import App from "./App.jsx";
import {LANGUAGE_STORAGE_KEY} from "./i18n.jsx";

describe("App routing and language", () => {
    beforeEach(() => {
        window.localStorage.clear();
        window.scrollTo = vi.fn();
        vi.unstubAllGlobals();
    });

    it("renders the homepage and switches the visible copy to German", async () => {
        const user = userEvent.setup();
        render(<App/>);

        expect(await screen.findByRole("heading", {name: /AI, IT & Business Lecturer/i})).toBeInTheDocument();
        expect(document.documentElement.lang).toBe("en");
        expect(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe("en");

        await user.click(screen.getByRole("button", {name: /Switch language/i}));

        expect(screen.getByRole("heading", {name: /AI-, IT- und Business-Dozentin/i})).toBeInTheDocument();
        expect(document.documentElement.lang).toBe("de");
        expect(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe("de");
    });

    it("uses English as the default page language when no language was selected before", async () => {
        window.history.pushState({}, "Training", "/training");

        render(<App/>);

        expect(await screen.findByRole("heading", {name: /Bookable AI, IT and business technology training services/i})).toBeInTheDocument();
        expect(screen.queryByRole("heading", {name: /Buchbare AI-, IT- und Business-Technology-Trainings/i})).not.toBeInTheDocument();
        expect(document.documentElement.lang).toBe("en");
        expect(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe("en");
    });

    it("keeps German only after the visitor explicitly selected it", async () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "de");
        window.history.pushState({}, "Training", "/training");

        render(<App/>);

        expect(await screen.findByRole("heading", {name: /Buchbare AI-, IT- und Business-Technology-Trainings/i})).toBeInTheDocument();
        expect(document.documentElement.lang).toBe("de");
    });

    it.each([
        ["/blog", /Blog zu AI, Projektmanagement und Lehre mit KI/i],
        ["/contact", /Kontakt für Vorlesungen, Workshops, Trainings oder Talks/i],
        ["/skills", /praktische Kompetenzübersicht/i],
        ["/unknown-page", /Diese Seite ist nicht im Trainingsplan/i],
    ])("renders %s with German page copy", async (route, heading) => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "de");
        window.history.pushState({}, "German route", route);

        render(<App/>);

        expect(await screen.findByRole("heading", {name: heading})).toBeInTheDocument();
        expect(document.documentElement.lang).toBe("de");
    });

    it("renders direct contact links and the appointment scheduler without a form", async () => {
        window.history.pushState({}, "Contact", "/contact");

        render(<App/>);

        await screen.findByRole("heading", {name: /Contact me for lectures/i});
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

        expect(await screen.findByRole("heading", {name: /Transparent starting rates/i})).toBeInTheDocument();
        expect(screen.getByText("from $65")).toBeInTheDocument();
        expect(screen.getByText("from $1,200")).toBeInTheDocument();

        await user.click(screen.getByRole("button", {name: /Switch language/i}));

        expect(screen.getByRole("heading", {name: /Transparente Netto-Ab-Preise/i})).toBeInTheDocument();
        expect(screen.getByText("ab 50 EUR")).toBeInTheDocument();
        expect(screen.getByText("ab 1.000 EUR")).toBeInTheDocument();
    });
});

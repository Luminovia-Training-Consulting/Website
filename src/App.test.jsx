import {render, screen, waitFor} from "@testing-library/react";
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

    it("renders the homepage in English and switches the visible copy to German", async () => {
        const user = userEvent.setup();
        render(<App/>);

        expect(await screen.findByRole("heading", {name: /AI, IT & Digital Capability Training for Modern Teams/i})).toBeInTheDocument();
        expect(document.documentElement.lang).toBe("en");
        expect(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe("en");

        await user.click(screen.getAllByRole("button", {name: /Switch language to German/i})[0]);

        expect(screen.getByRole("heading", {name: /KI-, IT- & Digitalkompetenz-Training für moderne Teams/i})).toBeInTheDocument();
        expect(document.documentElement.lang).toBe("de");
        expect(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe("de");
    });

    it("uses English as the default page language when no language was selected before", async () => {
        window.history.pushState({}, "Training", "/training");

        render(<App/>);

        expect(await screen.findByRole("heading", {name: /Bookable Luminovia offers/i})).toBeInTheDocument();
        expect(screen.queryByRole("heading", {name: /Buchbare Luminovia-Angebote/i})).not.toBeInTheDocument();
        expect(document.documentElement.lang).toBe("en");
        expect(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe("en");
    });

    it("toggles and persists the day color scheme", async () => {
        const user = userEvent.setup();

        render(<App/>);

        expect((await screen.findAllByRole("button", {name: /Switch to day scheme/i}))[0]).toBeInTheDocument();
        expect(document.documentElement.dataset.theme).toBe("night");

        await user.click(screen.getAllByRole("button", {name: /Switch to day scheme/i})[0]);

        expect(document.documentElement.dataset.theme).toBe("day");
        expect(window.localStorage.getItem("carina_color_scheme_v1")).toBe("day");
        expect(screen.getAllByRole("button", {name: /Switch to night scheme/i})[0]).toBeInTheDocument();
    });

    it("keeps English after the visitor explicitly selected it", async () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, "Training", "/training");

        render(<App/>);

        expect(await screen.findByRole("heading", {name: /Bookable Luminovia offers/i})).toBeInTheDocument();
        expect(document.documentElement.lang).toBe("en");
    });

    it.each([
        ["/contact", /Kontakt für Luminovia Training/i],
        ["/about", /Luminovia Training & Consulting steht/i],
        ["/offers", /Klare Luminovia-Angebote/i],
        ["/consulting", /Consulting für AI, IT und digitale Kompetenz/i],
        ["/portfolio", /Projektpraxis hinter IT-/i],
        ["/clients", /Bildungspartner, Kooperationskontexte und Themenbereiche/i],
        ["/pricing", /Klare Preisorientierung/i],
        ["/terms", /Terms & Conditions und Zahlungsinformationen/i],
        ["/unknown-page", /Diese Seite ist nicht im Trainingsplan/i],
    ])("renders %s with German page copy", async (route, heading) => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "de");
        window.history.pushState({}, "German route", route);

        render(<App/>);

        expect(await screen.findByRole("heading", {name: heading})).toBeInTheDocument();
        expect(document.documentElement.lang).toBe("de");
    });

    it.each([
        ["/training/", /Buchbare Luminovia-Angebote/i],
        ["/offers/", /Klare Luminovia-Angebote/i],
        ["/consulting/", /Consulting für AI, IT und digitale Kompetenz/i],
        ["/projects/", /Projekte, die Luminovia-Training/i],
        ["/pricing/", /Klare Preisorientierung/i],
        ["/terms/", /Terms & Conditions und Zahlungsinformationen/i],
    ])("renders GitHub Pages trailing-slash route %s", async (route, heading) => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "de");
        window.history.pushState({}, "Trailing slash route", route);

        render(<App/>);

        expect(await screen.findByRole("heading", {name: heading})).toBeInTheDocument();
        await waitFor(() => expect(document.title).not.toBe("Seite nicht gefunden | Luminovia"));
    });

    it.each(["/skills", "/my-way", "/credentials", "/keynotes", "/corporate", "/software"])("does not expose removed legacy route %s", async (route) => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, `Removed ${route}`, route);

        render(<App/>);

        expect(await screen.findByRole("heading", {level: 1, name: /This page is not in the training plan/i})).toBeInTheDocument();
    });

    it("uses a German browser title on unknown pages after German was selected", async () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "de");
        window.history.pushState({}, "German 404", "/unknown-page");

        render(<App/>);

        expect(await screen.findByRole("heading", {name: /Diese Seite ist nicht im Trainingsplan/i})).toBeInTheDocument();
        await waitFor(() => expect(document.title).toBe("Seite nicht gefunden | Luminovia"));
        expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute(
            "content",
            expect.stringContaining("Diese Seite wurde nicht gefunden"),
        );
    });

    it("renders direct contact links and the embedded appointment scheduler without a form", async () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, "Contact", "/contact");

        render(<App/>);

        await screen.findByRole("heading", {name: /Contact Luminovia/i});
        expect(screen.queryByRole("button", {name: /Send request/i})).not.toBeInTheDocument();
        expect(screen.getAllByRole("link", {name: /Write an email/i})[0]).toHaveAttribute("href", expect.stringContaining("mailto:info@luminovia.org"));
        expect(screen.getAllByRole("link", {name: /\+61 451 448 724/i})[0]).toHaveAttribute("href", "tel:+61451448724");
        expect(screen.getAllByRole("link", {name: /\+49 175 5738 757/i})[0]).toHaveAttribute("href", "tel:+491755738757");
        expect(screen.getAllByRole("link", {name: /Book an appointment/i})[0]).toHaveAttribute("href", expect.stringContaining("calendar.google.com/calendar/appointments/schedules"));
        expect(screen.getByTitle(/Google Calendar appointment scheduler/i)).toHaveAttribute("src", expect.stringContaining("calendar.google.com/calendar/appointments/schedules"));
    });

    it("renders pricing in USD by default and switches pricing to German EUR copy", async () => {
        const user = userEvent.setup();
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, "Pricing", "/pricing");

        render(<App/>);

        expect(await screen.findByRole("heading", {name: /Clear pricing guidance/i})).toBeInTheDocument();
        expect(screen.getByText("from $65")).toBeInTheDocument();
        expect(screen.getByText("from $1,200")).toBeInTheDocument();

        await user.click(screen.getAllByRole("button", {name: /Switch language/i})[0]);

        expect(screen.getByRole("heading", {name: /Klare Preisorientierung/i})).toBeInTheDocument();
        expect(screen.getByText("ab 50 EUR")).toBeInTheDocument();
        expect(screen.getAllByText("ab 1.000 EUR").length).toBeGreaterThan(0);
    });

    it("scrolls to a hash target after route rendering", async () => {
        const scrollIntoView = vi.fn();
        const requestAnimationFrame = vi.fn((callback) => {
            callback();
            return 1;
        });
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, "Hash route", "/#offers");
        window.requestAnimationFrame = requestAnimationFrame;
        Element.prototype.scrollIntoView = scrollIntoView;

        render(<App/>);

        expect(await screen.findByRole("heading", {name: /AI, IT & Digital Capability Training/i})).toBeInTheDocument();
        await waitFor(() => expect(scrollIntoView).toHaveBeenCalledWith({behavior: "auto", block: "start"}));
        expect(window.scrollTo).toHaveBeenCalledWith({top: 0, behavior: "auto"});
        expect(requestAnimationFrame).toHaveBeenCalled();
    });

    it("skips the initial no-hash scroll but scrolls on later route changes", async () => {
        const user = userEvent.setup();
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "de");
        window.history.pushState({}, "Home", "/");

        render(<App/>);

        expect(await screen.findByRole("heading", {name: /KI-, IT- & Digitalkompetenz-Training für moderne Teams/i})).toBeInTheDocument();
        expect(window.scrollTo).not.toHaveBeenCalled();

        const trainingLink = screen.getAllByRole("link", {name: /^Training$/})
            .find((link) => link.getAttribute("href") === "/training");
        await user.click(trainingLink);

        expect(await screen.findByRole("heading", {name: /Buchbare Luminovia-Angebote/i})).toBeInTheDocument();
        expect(window.scrollTo).toHaveBeenCalledWith({top: 0, behavior: "auto"});
    });
});

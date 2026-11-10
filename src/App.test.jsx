import {act, render, screen, waitFor} from "@testing-library/react";
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

        expect(await screen.findByRole("heading", {name: /Understand technology\. Put it to work\./i})).toBeInTheDocument();
        expect(document.documentElement.lang).toBe("en");
        expect(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe("en");

        await user.click(screen.getAllByRole("button", {name: /Switch language to German/i})[0]);

        expect(screen.getByRole("heading", {name: /Technik verstehen\. Selbst anwenden\./i})).toBeInTheDocument();
        expect(document.documentElement.lang).toBe("de");
        expect(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe("de");
    });

    it("scrolls to a hash target when the route renders it", async () => {
        const scrollIntoView = vi.fn();
        Element.prototype.scrollIntoView = scrollIntoView;
        window.history.pushState({}, "Lazy hash route", "/contact#appointment");

        render(<App/>);

        await waitFor(() => expect(scrollIntoView).toHaveBeenCalledTimes(1));
        expect(scrollIntoView.mock.contexts[0]).toBe(document.getElementById("appointment"));
    });

    it("uses English as the default page language when no language was selected before", async () => {
        window.history.pushState({}, "Training", "/training");

        render(<App/>);

        expect(await screen.findByRole("heading", {name: /Training that improves digital work/i})).toBeInTheDocument();
        expect(screen.queryByRole("heading", {name: /Training, das digitale Arbeit besser macht/i})).not.toBeInTheDocument();
        expect(document.documentElement.lang).toBe("en");
        expect(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe("en");
    });

    it("toggles and persists the night color scheme", async () => {
        const user = userEvent.setup();
        render(<App/>);

        expect(document.documentElement.dataset.theme).toBe("day");
        await user.click(screen.getByRole("button", {name: /Switch to night scheme/i}));

        expect(document.documentElement.dataset.theme).toBe("night");
        expect(window.localStorage.getItem("luminovia_color_scheme_v1")).toBe("night");
        expect(screen.getByRole("button", {name: /Switch to day scheme/i})).toBeInTheDocument();
    });

    it("keeps English after the visitor explicitly selected it", async () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, "Training", "/training");

        render(<App/>);

        expect(await screen.findByRole("heading", {name: /Training that improves digital work/i})).toBeInTheDocument();
        expect(document.documentElement.lang).toBe("en");
    });

    it.each([
        ["/contact", /Was möchten Sie mit Ihrem Team angehen/i],
        ["/about", /Das Team hinter Luminovia/i],
        ["/offers", /Buchbare Formate für Training/i],
        ["/consulting", /Beratung für KI, IT und digitale Kompetenz/i],
        ["/portfolio", /Von der Aufgabe zur funktionierenden Software/i],
        ["/clients", /Lehre, Weiterbildung und Forschung/i],
        ["/pricing", /Klare Preise für Training/i],
        ["/terms", /Geschäfts- und Zahlungsbedingungen/i],
        ["/unknown-page", /Huch, hier ist nichts/i],
    ])("renders %s with German page copy", async (route, heading) => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "de");
        window.history.pushState({}, "German route", route);

        render(<App/>);

        expect(await screen.findByRole("heading", {name: heading})).toBeInTheDocument();
        expect(document.documentElement.lang).toBe("de");
    });

    it.each([
        ["/training/", /Training, das digitale Arbeit besser macht/i],
        ["/offers/", /Buchbare Formate für Training/i],
        ["/consulting/", /Beratung für KI, IT und digitale Kompetenz/i],
        ["/projects/", /Von der Aufgabe zur funktionierenden Software/i],
        ["/pricing/", /Klare Preise für Training/i],
        ["/terms/", /Geschäfts- und Zahlungsbedingungen/i],
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

        expect(await screen.findByRole("heading", {level: 1, name: /Oops, there is nothing here/i})).toBeInTheDocument();
    });

    it("uses a German browser title on unknown pages after German was selected", async () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "de");
        window.history.pushState({}, "German 404", "/unknown-page");

        render(<App/>);

        expect(await screen.findByRole("heading", {name: /Huch, hier ist nichts/i})).toBeInTheDocument();
        await waitFor(() => expect(document.title).toBe("Seite nicht gefunden | Luminovia"));
        expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute(
            "content",
            expect.stringContaining("Diese Seite wurde nicht gefunden"),
        );
        expect(document.head.querySelector('meta[name="robots"]')).toHaveAttribute("content", "noindex, follow");
        expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute("href", "https://luminovia.org/");
    });

    it("restores the requested address after the GitHub Pages redirect bridge", async () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "de");
        window.history.pushState({}, "404 bridge", "/not-found?from=%2Fjiushfe");

        render(<App/>);

        expect(await screen.findByRole("heading", {name: /Huch, hier ist nichts/i})).toBeInTheDocument();
        expect(screen.getByText(/Die Seite/)).toHaveTextContent("Die Seite “/jiushfe” wurde nicht gefunden.");
        expect(screen.getByText(/^LV-[0-9A-F]{16}$/)).toBeInTheDocument();
        await waitFor(() => expect(window.location.pathname).toBe("/jiushfe"));
        expect(document.head.querySelector('meta[name="robots"]')).toHaveAttribute("content", "noindex, follow");
    });

    it("uses a different reference for every unknown address", async () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, "First 404", "/first-missing-page");

        const firstRender = render(<App/>);
        const firstReference = (await screen.findByText(/^LV-[0-9A-F]{16}$/)).textContent;
        firstRender.unmount();

        window.history.pushState({}, "Second 404", "/second-missing-page");
        render(<App/>);

        const secondReference = (await screen.findByText(/^LV-[0-9A-F]{16}$/)).textContent;
        expect(secondReference).not.toBe(firstReference);
        expect(screen.getByText(/The page/)).toHaveTextContent(
            "The page “/second-missing-page” could not be found.",
        );
    });

    it("resolves unknown training slugs to noindex not-found metadata", async () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, "Unknown training", "/training/not-a-real-offer");

        render(<App/>);

        expect(await screen.findByRole("heading", {name: /Oops, there is nothing here/i})).toBeInTheDocument();
        await waitFor(() => expect(document.title).toBe("Page not found | Luminovia"));
        expect(document.head.querySelector('meta[name="robots"]')).toHaveAttribute("content", "noindex, follow");
    });

    it("renders direct contact links and an email request for an introductory call", async () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, "Contact", "/contact");

        render(<App/>);

        await screen.findByRole("heading", {name: /Contact Luminovia/i});
        expect(document.querySelector("main form, main iframe")).toBeNull();
        expect(screen.getByRole("link", {name: "Enquire about training or consulting"})).toHaveAttribute("href", expect.stringContaining("mailto:info@luminovia.org"));
        expect(screen.getAllByRole("link", {name: /\+61 451 448 724/i})[0]).toHaveAttribute("href", "tel:+61451448724");
        expect(screen.getAllByRole("link", {name: /\+49 175 5738 757/i})[0]).toHaveAttribute("href", "tel:+491755738757");
        const callSection = document.getElementById("appointment");
        expect(callSection.querySelector("a")).toHaveAttribute("href", expect.stringContaining("mailto:info@luminovia.org?subject=Introductory%20call%20with%20Luminovia"));
        expect(document.getElementById("contact-options")).toBeInTheDocument();
        expect(document.getElementById("contact-faq")).toBeInTheDocument();
    });

    it("uses topic-specific German metadata on direct training routes", async () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "de");
        window.history.pushState({}, "KI training", "/training/ai-genai-training");

        render(<App/>);

        expect(await screen.findByRole("heading", {level: 1, name: /KI- und GenAI-Training/i})).toBeInTheDocument();
        await waitFor(() => expect(document.title).toBe("KI- und GenAI-Training | Luminovia"));
        expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute(
            "content",
            expect.stringContaining("verantwortungsvoll einsetzen"),
        );
    });

    it("renders consistent EUR pricing and switches the pricing copy to German", async () => {
        const user = userEvent.setup();
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, "Pricing", "/pricing");

        render(<App/>);

        expect(await screen.findByRole("heading", {name: /Clear rates for training/i})).toBeInTheDocument();
        expect(screen.getByText("EUR 55")).toBeInTheDocument();
        expect(screen.getByText("EUR 100")).toBeInTheDocument();
        expect(screen.getAllByText("EUR 500").length).toBeGreaterThan(0);
        expect(screen.getAllByText("EUR 1,000").length).toBeGreaterThan(0);

        await user.click(screen.getAllByRole("button", {name: /Switch language/i})[0]);

        expect(screen.getByRole("heading", {name: /Klare Preise für Training/i})).toBeInTheDocument();
        expect(screen.getByText("55 EUR")).toBeInTheDocument();
        expect(screen.getByText("100 EUR")).toBeInTheDocument();
        expect(screen.getAllByText("500 EUR").length).toBeGreaterThan(0);
        expect(screen.getAllByText("1.000 EUR").length).toBeGreaterThan(0);
    });

    it("scrolls to a hash target only once", () => {
        vi.useFakeTimers();
        const scrollIntoView = vi.fn();
        const requestAnimationFrame = vi.fn((callback) => {
            callback();
            return 1;
        });
        window.history.pushState({}, "Hash route", "/#offers");
        vi.stubGlobal("requestAnimationFrame", requestAnimationFrame);
        Element.prototype.scrollIntoView = scrollIntoView;

        try {
            render(<App/>);

            expect(scrollIntoView).toHaveBeenCalledWith({behavior: "auto", block: "start"});
            act(() => vi.advanceTimersByTime(2500));
            expect(scrollIntoView).toHaveBeenCalledTimes(1);
        } finally {
            vi.unstubAllGlobals();
            vi.useRealTimers();
        }
    });

    it("skips the initial no-hash scroll but scrolls on later route changes", async () => {
        const user = userEvent.setup();
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "de");
        window.history.pushState({}, "Home", "/");

        render(<App/>);

        expect(await screen.findByRole("heading", {name: /Technik verstehen\. Selbst anwenden\./i})).toBeInTheDocument();
        expect(window.scrollTo).not.toHaveBeenCalled();

        const trainingLink = screen.getAllByRole("link", {name: /^Training$/})
            .find((link) => link.getAttribute("href") === "/training");
        await user.click(trainingLink);

        expect(await screen.findByRole("heading", {name: /Training, das digitale Arbeit besser macht/i})).toBeInTheDocument();
        expect(window.scrollTo).toHaveBeenCalledWith({top: 0, behavior: "auto"});
    });
});

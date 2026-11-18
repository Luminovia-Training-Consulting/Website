import {fireEvent, render, screen, within} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {beforeEach, describe, expect, it} from "vitest";
import App from "../App.jsx";
import {LANGUAGE_STORAGE_KEY} from "../i18n.jsx";

/** @type {[string, RegExp][]} */
const routes = [
    ["/training", /Training in IT, AI and business/i],
    ["/offers", /Compare training and consulting formats/i],
    ["/training/software-development-retraining-java-python-csharp-kotlin", /Software Development, APIs & Retraining/i],
    ["/projects", /From a problem to working software/i],
    ["/portfolio", /From a problem to working software/i],
    ["/consulting", /Consulting for AI, IT and business processes/i],
    ["/clients", /Teaching, training and research in practice/i],
    ["/about", /Meet the team behind Luminovia/i],
    ["/pricing", /Clear rates for training/i],
    ["/jobs", /Teach people online/i],
    ["/contact", /Contact Luminovia/i],
    ["/imprint", /Imprint/i],
    ["/privacy", /Privacy policy/i],
    ["/terms", /Terms & Conditions and payment information/i],
    ["/unknown-page", /Oops, there is nothing here/i],
];

describe("static page routes", () => {
    beforeEach(() => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
    });

    it.each(routes)("renders %s", async (route, heading) => {
        window.history.pushState({}, "Route", route);
        render(<App/>);

        expect(await screen.findByRole("heading", {level: 1, name: heading})).toBeInTheDocument();
    });

    it("shows the consulting boundaries and offers the supplied demo without loading YouTube", async () => {
        window.history.pushState({}, "Consulting", "/consulting");
        render(<App/>);

        const scope = await screen.findByRole("region", {name: "Consulting scope"});
        expect(within(scope).getByRole("heading", {name: "What’s outside the scope"})).toBeVisible();
        expect(within(scope).getByText("legal, tax or financial advice")).toBeVisible();

        const demo = screen.getByRole("region", {name: "AI in a business context"});
        expect(within(demo).getByRole("link", {name: "Watch on YouTube"}))
            .toHaveAttribute("href", "https://www.youtube.com/watch?v=sYMO5sb-YKg");
        expect(within(demo).getByRole("button", {name: "Watch sample video: AI in a business context"})).toBeVisible();
        expect(within(demo).queryByTitle("Luminovia AI session in a company context")).not.toBeInTheDocument();
    });

    it("renders the freelance instructor listing in German and English with direct email application", async () => {
        const user = userEvent.setup();
        window.history.pushState({}, "Jobs", "/jobs");
        render(<App/>);

        expect(await screen.findByRole("heading", {level: 1, name: "Teach people online."})).toBeInTheDocument();
        expect(screen.getAllByText(/€4,000–€5,000 \/ month/).length).toBeGreaterThan(0);
        expect(screen.getByText(/For the main assignment described here, the fee is €2,000–€2,500/)).toBeVisible();
        expect(screen.getByText(/completed German IHK vocational qualification with an AEVO trainer aptitude certificate/)).toBeVisible();
        expect(screen.getByText(/At least two years of teaching experience/)).toBeVisible();
        expect(screen.getByText(/Monday to Thursday: 08:00–13:00/)).toBeVisible();
        expect(screen.getByText(/Friday in week 1 of the two-week cycle: 08:00–11:00/)).toBeVisible();
        expect(screen.getByText(/Other client assignments may have different hours and fees/)).toBeVisible();
        expect(screen.getByRole("navigation", {name: "Main navigation"}).querySelector('a[href="/jobs"]')).toHaveTextContent("Jobs");

        let applyLinks = screen.getAllByRole("link", {name: "Apply by email"});
        expect(applyLinks).toHaveLength(2);
        expect(applyLinks[0]).toHaveAttribute("href", expect.stringMatching(/^mailto:info@luminovia\.org\?/));

        await user.click(screen.getByRole("button", {name: "DE / EN, switch language to German"}));
        expect(await screen.findByRole("heading", {level: 1, name: "Menschen online unterrichten."})).toBeInTheDocument();
        expect(screen.getAllByText(/4\.000–5\.000 € \/ Monat/).length).toBeGreaterThan(0);
        expect(screen.getByText(/Für den beschriebenen Hauptauftrag beträgt das Honorar je zweiwöchigem Kursblock 2\.000–2\.500 €/)).toBeVisible();
        expect(screen.getByText(/Mindestens zwei Jahre Unterrichtserfahrung/)).toBeVisible();
        expect(screen.getByText(/Montag bis Donnerstag: 08:00–13:00 Uhr/)).toBeVisible();
        expect(screen.getByText(/Freitag in Woche 1 des zweiwöchigen Rhythmus: 08:00–11:00 Uhr/)).toBeVisible();
        expect(screen.getByText(/Neben dem beschriebenen Hauptauftrag können weitere Kurse für andere Kunden hinzukommen/)).toBeVisible();
        expect(screen.getByRole("navigation", {name: "Hauptnavigation"}).querySelector('a[href="/jobs"]')).toHaveTextContent("Jobs");
        expect(screen.getAllByRole("link", {name: "Bewerbung per E-Mail starten"})).toHaveLength(2);
        expect(screen.getAllByRole("link", {name: "Bewerbung per E-Mail starten"})[0])
            .toHaveAttribute("href", expect.stringMatching(/^mailto:info@luminovia\.org\?/));
    });

    it("opens and closes the mobile navigation", async () => {
        const user = userEvent.setup();
        window.history.pushState({}, "Home", "/");
        render(<App/>);

        const toggle = screen.getByRole("button", {name: "Menu"});
        const navigation = screen.getByRole("navigation", {name: "Main navigation"});
        expect(toggle).toHaveAttribute("aria-expanded", "false");

        await user.click(toggle);
        expect(toggle).toHaveAttribute("aria-expanded", "true");
        expect(navigation).toHaveAttribute("data-open", "true");

        await user.keyboard("{Escape}");
        expect(toggle).toHaveFocus();
        expect(toggle).toHaveAttribute("aria-expanded", "false");

        await user.click(toggle);
        fireEvent.pointerDown(screen.getByRole("heading", {level: 1}), {pointerType: "touch"});
        expect(toggle).toHaveAttribute("aria-expanded", "false");

        await user.click(toggle);
        const references = navigation.querySelector('a[href="/clients"]');
        references.focus();
        await user.keyboard("{Enter}");
        expect(toggle).toHaveAttribute("aria-expanded", "false");
        expect(await screen.findByRole("heading", {name: /Teaching, training and research in practice/i})).toBeInTheDocument();
        expect(document.getElementById("site-content")).toHaveFocus();

        await user.click(toggle);
        await user.click(navigation.querySelector('a[href="/contact"]'));
        expect(toggle).toHaveAttribute("aria-expanded", "false");
        expect(await screen.findByRole("heading", {name: /Contact Luminovia/i})).toBeInTheDocument();

        await user.click(toggle);
        await user.click(screen.getAllByRole("link", {name: "Luminovia Training & Consulting"})[0]);
        expect(toggle).toHaveAttribute("aria-expanded", "false");
    });
});

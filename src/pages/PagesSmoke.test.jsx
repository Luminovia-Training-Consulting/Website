import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {beforeEach, describe, expect, it} from "vitest";
import App from "../App.jsx";
import {LANGUAGE_STORAGE_KEY} from "../i18n.jsx";

/** @type {[string, RegExp][]} */
const routes = [
    ["/training", /Training that improves digital work/i],
    ["/offers", /Clear Luminovia offers/i],
    ["/training/software-development-retraining-java-python-csharp-kotlin", /Software Development, APIs & Retraining/i],
    ["/projects", /From a problem to working software/i],
    ["/portfolio", /From a problem to working software/i],
    ["/consulting", /Consulting for AI, IT and digital capability/i],
    ["/clients", /Teaching, training and research in practice/i],
    ["/about", /Meet the team behind Luminovia/i],
    ["/pricing", /Clear rates for training/i],
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
        await user.click(navigation.querySelector('a[href="/contact"]'));
        expect(toggle).toHaveAttribute("aria-expanded", "false");
        expect(await screen.findByRole("heading", {name: /Contact Luminovia/i})).toBeInTheDocument();

        await user.click(toggle);
        await user.click(screen.getAllByRole("link", {name: "Luminovia Training & Consulting"})[0]);
        expect(toggle).toHaveAttribute("aria-expanded", "false");
    });
});

import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {beforeEach, describe, expect, it} from "vitest";
import App from "../App.jsx";
import {LANGUAGE_STORAGE_KEY} from "../i18n.jsx";

/** @type {[string, RegExp][]} */
const routes = [
    ["/training", /Concrete Luminovia offers/i],
    ["/offers", /Clear Luminovia offers/i],
    ["/training/software-development-retraining-java-python-csharp-kotlin", /Software Development, APIs & Retraining/i],
    ["/projects", /Projects that make Luminovia/i],
    ["/portfolio", /Project practice behind IT/i],
    ["/consulting", /Consulting for AI, IT and digital capability/i],
    ["/clients", /Education partners, collaboration contexts and topic areas/i],
    ["/about", /Luminovia Training & Consulting is built/i],
    ["/pricing", /Transparent starting rates/i],
    ["/contact", /Contact Luminovia/i],
    ["/imprint", /Imprint/i],
    ["/privacy", /Privacy policy/i],
    ["/terms", /Terms & Conditions and payment information/i],
    ["/unknown-page", /This page is not in the training plan/i],
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
        window.innerWidth = 390;
        render(<App/>);

        await user.click(screen.getByRole("button", {name: /Menu/i}));
        expect(screen.getByText("Navigation")).toBeInTheDocument();
        expect(document.body).toHaveStyle({overflow: "hidden"});

        await user.click(screen.getByRole("button", {name: /Close/i}));
        expect(screen.queryByText("Navigation")).not.toBeInTheDocument();
        expect(document.body).not.toHaveStyle({overflow: "hidden"});
    });
});

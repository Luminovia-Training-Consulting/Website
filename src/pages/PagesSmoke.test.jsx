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
    ["/skills", /Skill map for IT/i],
    ["/projects", /Projects that make Luminovia/i],
    ["/portfolio", /Project practice behind IT/i],
    ["/consulting", /Project practice behind IT/i],
    ["/clients", /Former clients, education partners and testimonial patterns/i],
    ["/my-way", /A professional path through IT/i],
    ["/about", /Carina Sophie Schoppe leads Luminovia/i],
    ["/corporate", /Training solutions for companies/i],
    ["/keynotes", /Keynotes and expert talks/i],
    ["/credentials", /Credentials for teaching/i],
    ["/imprint", /Imprint/i],
    ["/privacy", /Privacy policy/i],
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

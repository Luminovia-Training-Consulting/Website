import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {describe, expect, it} from "vitest";
import App from "../App.jsx";

/** @type {[string, RegExp][]} */
const routes = [
    ["/training", /Bookable AI, IT and business technology training/i],
    ["/skills", /Skill map for AI/i],
    ["/software", /Software projects/i],
    ["/portfolio", /Projects that support the teaching profile/i],
    ["/my-way", /A professional path through IT/i],
    ["/about", /I make complex digital topics teachable/i],
    ["/corporate", /Training solutions for companies/i],
    ["/keynotes", /Talks that make AI/i],
    ["/credentials", /Proof that supports the main offer/i],
    ["/imprint", /Imprint/i],
    ["/privacy", /Privacy policy/i],
    ["/unknown-page", /This page is not in the training plan/i],
];

describe("static page routes", () => {
    it.each(routes)("renders %s", (route, heading) => {
        window.history.pushState({}, "Route", route);
        render(<App/>);

        expect(screen.getByRole("heading", {name: heading})).toBeInTheDocument();
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

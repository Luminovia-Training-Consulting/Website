import {render, screen, within} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {expect, it} from "vitest";
import App from "../App.jsx";
import {LANGUAGE_STORAGE_KEY} from "../i18n.jsx";

it("filters localized course summaries, updates subject links, and clears back to the full catalogue", async () => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "de");
    window.history.pushState({}, "Trainings", "/training");
    const user = userEvent.setup();

    render(<App/>);

    const input = await screen.findByRole("searchbox", {name: "Trainings durchsuchen"});
    const catalogue = within(screen.getByRole("region", {name: "Themenkatalog"}));
    expect(catalogue.getByRole("status")).toHaveTextContent("23 Trainings");

    await user.type(input, "mArkten iNFlation");

    expect(catalogue.getByRole("status")).toHaveTextContent("1 Training");
    expect(catalogue.getByRole("link", {name: "Wirtschaft, Recht und Datenschutz"})).toHaveAttribute("href", "#training-business-law");
    expect(catalogue.getByRole("link", {name: "Betriebswirtschaft und Volkswirtschaft"})).toHaveAttribute("href", "/training/business-administration-economics");
    expect(catalogue.queryByRole("link", {name: "IT und Software"})).not.toBeInTheDocument();

    await user.type(input, " ohneErgebnis");

    expect(catalogue.getByRole("status")).toHaveTextContent("0 Trainings");
    expect(catalogue.getByText(/Keine passenden Trainings/)).toBeVisible();
    expect(catalogue.queryByRole("navigation", {name: "Fachgebiete"})).not.toBeInTheDocument();

    await user.click(catalogue.getByRole("button", {name: "Suche leeren"}));

    expect(input).toHaveFocus();
    expect(input).toHaveValue("");
    expect(catalogue.getByRole("status")).toHaveTextContent("23 Trainings");
    expect(within(catalogue.getByRole("navigation", {name: "Fachgebiete"})).getAllByRole("link")).toHaveLength(4);
});

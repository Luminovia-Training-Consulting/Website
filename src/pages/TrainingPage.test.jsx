import {act, render, screen, waitFor, within} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {expect, it, vi} from "vitest";
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

it("restores the catalogue search after opening a course and going back", async () => {
    const scrollIntoView = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoView;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "de");
    window.history.pushState({}, "Trainings", "/training?ref=example#details");
    const user = userEvent.setup();
    render(<App/>);

    const search = await screen.findByRole("searchbox", {name: "Trainings durchsuchen"});
    await waitFor(() => expect(scrollIntoView).toHaveBeenCalled());
    const startLength = window.history.length;
    await user.type(search, "SQL");
    expect(window.location.search).toBe("?ref=example&q=SQL");
    expect(window.location.hash).toBe("#details");
    expect(window.history.length).toBe(startLength);
    await user.click(screen.getByRole("link", {name: "Python, SQL und Datenkompetenz"}));
    await screen.findByRole("heading", {name: "Python, SQL und Datenkompetenz", level: 1});

    act(() => window.history.back());

    expect(await screen.findByRole("searchbox", {name: "Trainings durchsuchen"})).toHaveValue("SQL");
    expect(screen.getByRole("status")).toHaveTextContent("1 Training");
    expect(window.location.hash).toBe("#details");
});

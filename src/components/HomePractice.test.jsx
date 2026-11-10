import {screen, within} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {expect, it} from "vitest";
import {LANGUAGE_STORAGE_KEY} from "../i18n.jsx";
import {renderWithProviders} from "../test/test-utils.jsx";
import HomePractice from "./HomePractice.jsx";

it.each([
    {
        language: "en",
        copy: {worksheet: "Sample exercise", output: "Result using sample data", count: "Tickets", lesson: "Explore Python, SQL and data training"},
        open: "Open",
        closed: "Closed",
        initial: "Support has the most open tickets (7).",
        updated: "Operations has the most closed tickets (6).",
    },
    {
        language: "de",
        copy: {worksheet: "Beispielübung", output: "Ergebnis mit Beispieldaten", count: "Tickets", lesson: "Zum Training für Python, SQL und Daten"},
        open: "Offen",
        closed: "Geschlossen",
        initial: "Support hat die meisten offenen Tickets (7).",
        updated: "Operations hat die meisten geschlossenen Tickets (6).",
    },
])("updates the SQL, ranking and live result with keyboard input in $language", async ({language, copy, open, closed, initial, updated}) => {
    const user = userEvent.setup();
    const trainingPath = "/training/python-sql-data-skills";
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    const {container} = renderWithProviders(<HomePractice copy={copy} trainingPath={trainingPath}/>);

    const query = container.querySelector("pre code");
    const table = screen.getByRole("table", {name: copy.output});
    const observation = screen.getByRole("status");
    const openRadio = screen.getByRole("radio", {name: open});

    expect(openRadio).toBeChecked();
    expect(query).toHaveTextContent("WHERE status = 'open'");
    expect(within(table).getAllByRole("rowheader").map((header) => header.textContent)).toEqual(["Support", "Operations"]);
    expect(within(table).getAllByRole("cell").map((cell) => cell.textContent)).toEqual(["7", "3"]);
    expect(observation).toHaveTextContent(initial);

    await user.tab();
    expect(openRadio).toHaveFocus();
    await user.keyboard("{ArrowRight}");

    expect(screen.getByRole("radio", {name: closed})).toBeChecked();
    expect(query).toHaveTextContent("WHERE status = 'closed'");
    expect(within(table).getAllByRole("rowheader").map((header) => header.textContent)).toEqual(["Operations", "Support"]);
    expect(within(table).getAllByRole("cell").map((cell) => cell.textContent)).toEqual(["6", "4"]);
    expect(observation).toHaveTextContent(updated);
    expect(screen.getByRole("link", {name: copy.lesson})).toHaveAttribute("href", trainingPath);
});

import {fireEvent, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {expect, it} from "vitest";
import {LANGUAGE_STORAGE_KEY} from "../i18n.jsx";
import {renderWithProviders} from "../test/test-utils.jsx";
import HomePracticeExamples from "./HomePracticeExamples.jsx";

it("updates the three exercises and keeps the SQL selection when switching back", async () => {
    const user = userEvent.setup();
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
    renderWithProviders(
        <HomePracticeExamples
            sqlCopy={{worksheet: "Query support tickets", output: "Sample data", count: "Tickets", lesson: "Explore SQL training"}}
            sqlTrainingPath="/training/python-sql-data-skills"
        />,
    );

    await user.click(screen.getByRole("radio", {name: "Closed"}));
    await user.click(screen.getByRole("radio", {name: "Business"}));
    expect(screen.getByRole("status")).toHaveTextContent("-€100");
    fireEvent.input(screen.getByRole("slider", {name: "Units sold"}), {target: {value: "10"}});
    expect(screen.getByRole("status")).toHaveTextContent("€0");
    expect(screen.getByRole("status")).toHaveTextContent("covered your fixed costs exactly");

    await user.click(screen.getByRole("radio", {name: "AI", exact: true}));
    await user.click(screen.getByRole("radio", {name: /rollout has already been approved/i}));
    expect(screen.getByRole("status")).toHaveTextContent("decision on rollout comes afterwards");

    await user.click(screen.getByRole("radio", {name: "IT security", exact: true}));
    await user.selectOptions(screen.getByRole("combobox", {name: "Role for the external reviewer"}), "viewer");
    expect(screen.getAllByText("Allowed")).toHaveLength(1);
    expect(screen.getAllByText("Blocked")).toHaveLength(2);
    expect(screen.getByRole("status")).toHaveTextContent("The Viewer role lets the reviewer open the report");

    await user.click(screen.getByRole("radio", {name: "SQL", exact: true}));
    expect(screen.getByRole("radio", {name: "Closed"})).toBeChecked();
    expect(screen.getByRole("status")).toHaveTextContent("Operations has the most closed tickets (6)");
});

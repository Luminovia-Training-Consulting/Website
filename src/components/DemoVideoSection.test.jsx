import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {expect, it} from "vitest";
import {renderWithProviders} from "../test/test-utils.jsx";
import DemoVideoSection from "./DemoVideoSection.jsx";

it("loads the video only after activation and moves focus into the player", async () => {
    const user = userEvent.setup();
    renderWithProviders(<DemoVideoSection/>);

    const title = "Luminovia AI session in a company context";
    expect(screen.queryByTitle(title)).not.toBeInTheDocument();

    screen.getByRole("button", {name: "Load video preview"}).focus();
    await user.keyboard("{Enter}");

    const player = screen.getByTitle(title);
    expect(player).toHaveAttribute("src", expect.stringContaining("https://www.youtube-nocookie.com/embed/"));
    expect(player).toHaveFocus();
});

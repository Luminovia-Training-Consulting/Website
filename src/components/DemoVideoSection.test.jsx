import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {expect, it} from "vitest";
import {renderWithProviders} from "../test/test-utils.jsx";
import {LANGUAGE_STORAGE_KEY} from "../i18n.jsx";
import DemoVideoSection from "./DemoVideoSection.jsx";

it.each([
    ["training", "en", "Watch sample video: AI in a business context", "Luminovia AI session in a company context"],
    ["home", "en", "Watch sample video: AI in a business context", "Luminovia AI session in a company context"],
    ["home", "de", "Beispielvideo ansehen: KI im Unternehmenskontext", "Luminovia KI-Session im Unternehmenskontext"],
])("loads the %s video in %s only after activation and moves focus into the player", async (variant, language, buttonName, title) => {
    const user = userEvent.setup();
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    const {container} = renderWithProviders(<DemoVideoSection variant={variant}/>);

    expect(container.querySelector("iframe")).not.toBeInTheDocument();

    screen.getByRole("button", {name: buttonName}).focus();
    await user.keyboard("{Enter}");

    const player = screen.getByTitle(title);
    expect(player).toHaveAttribute("src", "https://www.youtube-nocookie.com/embed/sYMO5sb-YKg?rel=0");
    expect(player).toHaveFocus();
});

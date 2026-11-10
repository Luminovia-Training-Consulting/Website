import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";
import {describe, expect, it, vi} from "vitest";
import Button from "./Button.jsx";
import Photo from "./Photo.jsx";
import SectionJumpNav from "./SectionJumpNav.jsx";
import SoftwareProjectsSection from "./SoftwareProjectsSection.jsx";
import {LanguageProvider} from "../i18n.jsx";

function renderWithShell(ui) {
    return render(
        <LanguageProvider>
            <MemoryRouter>
                {ui}
            </MemoryRouter>
        </LanguageProvider>,
    );
}

describe("UI primitive branches", () => {
    it("renders a real button without an arrow and handles clicks", async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();

        render(<Button onClick={onClick} showArrow={false} variant="dark">Run action</Button>);

        await user.click(screen.getByRole("button", {name: "Run action"}));
        expect(onClick).toHaveBeenCalledTimes(1);
        expect(screen.getByRole("button", {name: "Run action"})).toHaveAttribute("data-button-variant", "dark");
    });

    it("renders a photo fallback when the image cannot load", async () => {
        renderWithShell(<Photo src="/missing.jpg" alt="Missing portrait" fallback="LV" fallbackCopy="Image fallback"/>);

        screen.getByAltText("Missing portrait").dispatchEvent(new Event("error"));

        expect(await screen.findByText("LV")).toBeInTheDocument();
        expect(screen.getByText("Image fallback")).toBeInTheDocument();
    });

    it("renders the compact project section with a view-all link", () => {
        renderWithShell(<SoftwareProjectsSection compact/>);

        expect(screen.getByRole("link", {name: "All projects"})).toHaveAttribute("href", "/projects");
    });

    it("lets keyboard users move directly between section links", async () => {
        const user = userEvent.setup();
        renderWithShell(
            <SectionJumpNav
                label="On this page"
                items={[["#areas", "Areas"], ["#outcomes", "Outcomes"], ["#process", "Process"]]}
            />,
        );

        await user.tab();
        expect(screen.getByRole("link", {name: "Areas"})).toHaveFocus();
        await user.tab();
        expect(screen.getByRole("link", {name: "Outcomes"})).toHaveFocus();
        expect(screen.getByRole("link", {name: "Process"})).toHaveAttribute("href", "#process");
    });

});

import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";
import {describe, expect, it, vi} from "vitest";
import Button from "./Button.jsx";
import Metric from "./Metric.jsx";
import Photo from "./Photo.jsx";
import SectionJumpNav from "./SectionJumpNav.jsx";
import SoftwareProjectsSection from "./SoftwareProjectsSection.jsx";
import {CapabilityChip, Container, GradientText, LogoSystemVisual, ProofCard, Section, SectionHeader, TextLinkCard} from "./LuminoviaDesign.jsx";
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

        expect(screen.getByRole("link", {name: /Projektportfolio ansehen|view all projects|view project portfolio/i})).toHaveAttribute("href", "/projects");
    });

    it("keeps section navigation keyboard focusable for horizontal scrolling", () => {
        renderWithShell(
            <SectionJumpNav
                label="On this page"
                items={[["#areas", "Areas"], ["#outcomes", "Outcomes"], ["#process", "Process"]]}
            />,
        );

        const nav = screen.getByRole("navigation", {name: "On this page"});
        expect(nav.querySelector(".section-jump-track")).toHaveAttribute("tabindex", "0");
        expect(screen.getByRole("link", {name: "Process"})).toHaveAttribute("href", "#process");
    });

    it("renders Luminovia design primitives and utility cards", () => {
        renderWithShell(
            <Section id="test-section">
                <Container>
                    <SectionHeader badge="System" title={<GradientText>Premium capability</GradientText>} copy="Readable section copy."/>
                    <CapabilityChip>AI enablement</CapabilityChip>
                    <ProofCard title="Proof title" copy="Proof copy"/>
                    <TextLinkCard to="/training" title="Training route" copy="Route copy" cta="Open"/>
                    <LogoSystemVisual
                        logoFull="/images/luminovia-logo-full.svg"
                        logoMark="/images/luminovia-logo-mark.svg"
                        alt="Luminovia system"
                        labels={["AI", "IT", "Security", "Data", "Learning", "Delivery", "DE / EN"]}
                    />
                    <Metric value="DE / EN" label="German and English"/>
                </Container>
            </Section>,
        );

        expect(screen.getByRole("heading", {name: /Premium capability/i})).toBeInTheDocument();
        expect(screen.getByRole("link", {name: /Training route/i})).toHaveAttribute("href", "/training");
        expect(screen.getByLabelText("Luminovia system")).toBeInTheDocument();
        expect(screen.getByLabelText("German")).toBeInTheDocument();
        expect(screen.getByLabelText("English")).toBeInTheDocument();
    });
});

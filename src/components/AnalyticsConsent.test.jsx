import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {describe, expect, it} from "vitest";
import {MemoryRouter} from "react-router-dom";
import {LanguageProvider} from "../i18n.jsx";
import AnalyticsConsent from "./AnalyticsConsent.jsx";

function renderConsent() {
    return render(
        <LanguageProvider>
            <MemoryRouter>
                <AnalyticsConsent/>
            </MemoryRouter>
        </LanguageProvider>,
    );
}

describe("AnalyticsConsent", () => {
    it("stores declined consent and hides the banner", async () => {
        const user = userEvent.setup();
        renderConsent();

        expect(screen.getByText(/Privacy-friendly analytics/i)).toBeInTheDocument();
        await user.click(screen.getByRole("button", {name: /Decline/i}));

        expect(window.localStorage.getItem("carina_analytics_consent")).toBe("declined");
        expect(screen.queryByText(/Privacy-friendly analytics/i)).not.toBeInTheDocument();
    });

    it("loads the google tag script after accepted consent", async () => {
        const user = userEvent.setup();
        renderConsent();

        await user.click(screen.getByRole("button", {name: /Accept/i}));

        expect(window.localStorage.getItem("carina_analytics_consent")).toBe("accepted");
        expect(document.querySelector('script[src*="googletagmanager.com"]')).toBeTruthy();
    });
});
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {afterEach, describe, expect, it} from "vitest";
import {Link, MemoryRouter} from "react-router-dom";
import {PROFILE} from "../data/profile.js";
import PrivacyPage from "../pages/PrivacyPage.jsx";
import {LanguageProvider, LANGUAGE_STORAGE_KEY} from "../i18n.jsx";
import AnalyticsConsent, {ANALYTICS_CONSENT_KEY} from "./AnalyticsConsent.jsx";

function renderConsent({route = "/", children} = {}) {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");

    return render(
        <LanguageProvider>
            <MemoryRouter initialEntries={[route]}>
                <AnalyticsConsent/>
                {children}
            </MemoryRouter>
        </LanguageProvider>,
    );
}

describe("AnalyticsConsent", () => {
    afterEach(() => {
        document.querySelector('script[src*="googletagmanager.com"]')?.remove();
        delete globalThis.gtag;
        delete globalThis.dataLayer;
        delete globalThis[`ga-disable-${PROFILE.analyticsId}`];
    });

    it("stores declined consent and hides the banner", async () => {
        const user = userEvent.setup();
        renderConsent();

        expect(screen.getByText(/Privacy-friendly analytics/i)).toBeInTheDocument();
        await user.click(screen.getByRole("button", {name: /Decline/i}));

        expect(window.localStorage.getItem(ANALYTICS_CONSENT_KEY)).toBe("declined");
        expect(screen.queryByText(/Privacy-friendly analytics/i)).not.toBeInTheDocument();
    });

    it("loads the google tag script after accepted consent", async () => {
        const user = userEvent.setup();
        renderConsent();

        await user.click(screen.getByRole("button", {name: /Accept/i}));

        expect(window.localStorage.getItem(ANALYTICS_CONSENT_KEY)).toBe("accepted");
        expect(document.querySelector('script[src*="googletagmanager.com"]')).toBeTruthy();
    });

    it("counts consented page visits without including queries or fragments", async () => {
        const user = userEvent.setup();
        renderConsent({
            route: "/training?q=SQL#details",
            children: <>
                <Link to="/training?q=Python#details" replace>Change search</Link>
                <Link to="/training?q=Python#formats">Jump to formats</Link>
                <Link to="/contact?intent=training#enquiry">Open contact</Link>
            </>,
        });
        expect(globalThis.dataLayer).toBeUndefined();

        await user.click(screen.getByRole("button", {name: "Accept"}));
        await user.click(screen.getByRole("link", {name: "Change search"}));
        await user.click(screen.getByRole("link", {name: "Jump to formats"}));
        await user.click(screen.getByRole("link", {name: "Open contact"}));

        const calls = globalThis.dataLayer.map((args) => Array.from(args));
        expect(calls.filter(([command]) => command === "config")).toEqual([
            ["config", PROFILE.analyticsId, {anonymize_ip: true, send_page_view: false}],
        ]);
        expect(calls.filter(([command, event]) => command === "event" && event === "page_view")).toEqual([
            ["event", "page_view", {
                page_title: document.title,
                page_location: `${window.location.origin}/training`,
                page_referrer: "",
            }],
            ["event", "page_view", {
                page_title: document.title,
                page_location: `${window.location.origin}/contact`,
                page_referrer: `${window.location.origin}/training`,
            }],
        ]);
    });
    it("lets visitors revoke and later re-enable saved consent from the privacy page", async () => {
        const user = userEvent.setup();
        const flag = `ga-disable-${PROFILE.analyticsId}`;
        const settings = () => screen.getByRole("link", {name: "Change analytics settings"});
        const banner = () => screen.queryByRole("region", {name: "Privacy-friendly analytics"});
        window.localStorage.setItem(ANALYTICS_CONSENT_KEY, "accepted");
        const firstVisit = renderConsent({
            route: "/privacy",
            children: <><PrivacyPage/><Link to="/contact">Open contact</Link></>,
        });
        expect(globalThis[flag]).toBe(false);
        expect(banner()).not.toBeInTheDocument();
        const previousCalls = globalThis.dataLayer.length;

        await user.click(settings());
        expect(banner()).toHaveFocus();
        expect(screen.getByRole("button", {name: "Accept", pressed: true})).toBeInTheDocument();
        await user.click(screen.getByRole("button", {name: "Decline"}));
        expect(window.localStorage.getItem(ANALYTICS_CONSENT_KEY)).toBe("declined");
        expect(globalThis[flag]).toBe(true);
        expect(banner()).not.toBeInTheDocument();
        expect(settings()).toHaveFocus();

        await user.click(settings());
        expect(screen.getByRole("button", {name: "Decline", pressed: true})).toBeInTheDocument();
        await user.click(screen.getByRole("button", {name: "Decline"}));
        await user.click(screen.getByRole("link", {name: "Open contact"}));
        expect(globalThis.dataLayer).toHaveLength(previousCalls);

        firstVisit.unmount();
        document.querySelector('script[src*="googletagmanager.com"]')?.remove();
        delete globalThis.gtag;
        delete globalThis.dataLayer;
        delete globalThis[flag];
        renderConsent({route: "/privacy", children: <PrivacyPage/>});
        expect(document.querySelector('script[src*="googletagmanager.com"]')).toBeNull();
        expect(globalThis[flag]).toBe(true);
        expect(banner()).not.toBeInTheDocument();

        await user.click(settings());
        await user.click(screen.getByRole("button", {name: "Accept"}));
        expect(window.localStorage.getItem(ANALYTICS_CONSENT_KEY)).toBe("accepted");
        expect(globalThis[flag]).toBe(false);
        expect(document.querySelector('script[src*="googletagmanager.com"]')).toBeTruthy();
    });
});

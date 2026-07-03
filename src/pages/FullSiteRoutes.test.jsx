import {readFileSync} from "node:fs";
import {render, screen, within} from "@testing-library/react";
import {describe, expect, it} from "vitest";
import App from "../App.jsx";
import {LANGUAGE_STORAGE_KEY} from "../i18n.jsx";

const SITE_BASE_URL = "https://luminovia-training-consulting.github.io/Website";
const sitemap = readFileSync("public/sitemap.xml", "utf8");
const appRoutes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
    .map((match) => match[1])
    .filter((url) => url.startsWith(SITE_BASE_URL))
    .map((url) => url.slice(SITE_BASE_URL.length) || "/")
    .filter((path) => !path.startsWith("/publications/"))
    .filter((path) => !path.endsWith(".pdf"))
    .filter((path) => !path.endsWith(".html"));

describe("full static site route coverage", () => {
    it("keeps the sitemap connected to every rendered app page", async () => {
        expect(appRoutes).toContain("/");
        expect(appRoutes).toContain("/training");
        expect(appRoutes).toContain("/offers");
        expect(appRoutes).toContain("/consulting");
        expect(appRoutes).toContain("/clients");
        expect(appRoutes).toContain("/projects");
        expect(appRoutes).toContain("/contact");

        for (const route of appRoutes) {
            window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
            window.history.pushState({}, `Route ${route}`, route);

            const {unmount} = render(<App/>);
            expect(await screen.findByRole("main")).toBeInTheDocument();
            expect(await screen.findByRole("heading", {level: 1})).toBeInTheDocument();
            expect(screen.queryByRole("heading", {name: /page not found/i})).not.toBeInTheDocument();
            expect(screen.queryByRole("heading", {name: /seite nicht gefunden/i})).not.toBeInTheDocument();
            expect(document.title).not.toMatch(/not found|nicht gefunden/i);
            unmount();
        }
    }, 30000);

    it("exposes the primary Luminovia information architecture in navigation", async () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, "Home", "/");

        render(<App/>);

        const [headerNav] = await screen.findAllByRole("navigation");

        expect(within(headerNav).getByRole("link", {name: /^Training$/i})).toHaveAttribute("href", "/training");
        expect(within(headerNav).getByRole("link", {name: /^Consulting$/i})).toHaveAttribute("href", "/consulting");
        expect(within(headerNav).getByRole("link", {name: /^Offers$/i})).toHaveAttribute("href", "/offers");
        expect(within(headerNav).getByRole("link", {name: /^Clients$/i})).toHaveAttribute("href", "/clients");
        expect(within(headerNav).getByRole("link", {name: /^Projects$/i})).toHaveAttribute("href", "/projects");
        expect(within(headerNav).getByRole("link", {name: /^CEO$/i})).toHaveAttribute("href", "/about");
        expect(within(headerNav).getByRole("link", {name: /^Contact$/i})).toHaveAttribute("href", "/contact");
    });
});

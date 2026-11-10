import {readFileSync} from "node:fs";
import {render, screen, within} from "@testing-library/react";
import {describe, expect, it} from "vitest";
import App from "../App.jsx";
import {LANGUAGE_STORAGE_KEY} from "../i18n.jsx";

const SITE_BASE_URL = "https://luminovia.org";
const sitemap = readFileSync("public/sitemap.xml", "utf8");
const appRoutes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
    .map((match) => match[1])
    .filter((url) => url.startsWith(SITE_BASE_URL))
    .map((url) => url.slice(SITE_BASE_URL.length) || "/")
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

        for (const language of ["en", "de"]) {
            for (const route of appRoutes) {
                window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
                window.history.pushState({}, `Route ${route}`, route);

                const {unmount} = render(<App/>);
                expect(await screen.findByRole("main")).toBeInTheDocument();
                expect(await screen.findByRole("heading", {level: 1})).toBeInTheDocument();
                const headingLevels = [...document.querySelector("main").querySelectorAll("h1, h2, h3, h4, h5, h6")]
                    .map((heading) => Number(heading.tagName.slice(1)));
                expect(headingLevels[0]).toBe(1);
                headingLevels.slice(1).forEach((level, index) => {
                    expect(level, `${language} ${route} heading levels: ${headingLevels.join(",")}`).toBeLessThanOrEqual(headingLevels[index] + 1);
                });
                expect(screen.queryByRole("heading", {name: /page not found/i})).not.toBeInTheDocument();
                expect(screen.queryByRole("heading", {name: /seite nicht gefunden/i})).not.toBeInTheDocument();
                expect(document.title).not.toMatch(/not found|nicht gefunden/i);
                expect(document.documentElement.lang).toBe(language);
                unmount();
            }
        }
    }, 30000);

    it("exposes the primary Luminovia information architecture in navigation", async () => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");
        window.history.pushState({}, "Home", "/");

        render(<App/>);

        const header = within(screen.getByRole("navigation", {name: "Main navigation"}));
        const services = within(screen.getByRole("navigation", {name: "Services"}));
        const company = within(screen.getByRole("navigation", {name: "Company"}));

        expect(header.getByRole("link", {name: "Training"})).toHaveAttribute("href", "/training");
        expect(header.getByRole("link", {name: "Consulting"})).toHaveAttribute("href", "/consulting");
        expect(header.getByRole("link", {name: "Offers"})).toHaveAttribute("href", "/offers");
        expect(header.getByRole("link", {name: "About us"})).toHaveAttribute("href", "/about");
        expect(header.getByRole("link", {name: "Contact"})).toHaveAttribute("href", "/contact");
        expect(services.getByRole("link", {name: "Pricing"})).toHaveAttribute("href", "/pricing");
        expect(company.getByRole("link", {name: "References"})).toHaveAttribute("href", "/clients");
        expect(company.getByRole("link", {name: "Projects"})).toHaveAttribute("href", "/projects");
    });
});

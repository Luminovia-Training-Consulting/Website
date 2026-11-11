import {act, render, screen, waitFor, within} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {expect, it, vi} from "vitest";
import App from "../App.jsx";
import {LANGUAGE_STORAGE_KEY} from "../i18n.jsx";

it("filters localized course content, updates subject links, and clears back to the full catalogue", async () => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "de");
    window.history.pushState({}, "Trainings", "/training");
    const user = userEvent.setup();

    render(<App/>);

    const input = await screen.findByRole("searchbox", {name: "Trainings durchsuchen"});
    const catalogue = within(screen.getByRole("region", {name: "Themenkatalog"}));
    expect(catalogue.getByRole("status")).toHaveTextContent("23 Trainings");

    await user.type(input, "mArkten iNFlation");

    expect(catalogue.getByRole("status")).toHaveTextContent("1 Training");
    expect(catalogue.getByRole("link", {name: "Wirtschaft, Recht und Datenschutz"})).toHaveAttribute("href", "#training-business-law");
    expect(catalogue.getByRole("link", {name: "Betriebswirtschaft und Volkswirtschaft"})).toHaveAttribute("href", "/training/business-administration-economics");
    expect(catalogue.queryByRole("link", {name: "IT und Software"})).not.toBeInTheDocument();

    await user.type(input, " ohneErgebnis");

    expect(catalogue.getByRole("status")).toHaveTextContent("0 Trainings");
    expect(catalogue.getByText(/Keine passenden Trainings/)).toBeVisible();
    expect(catalogue.queryByRole("navigation", {name: "Fachgebiete"})).not.toBeInTheDocument();

    await user.click(catalogue.getByRole("button", {name: "Suche leeren"}));

    expect(input).toHaveFocus();
    expect(input).toHaveValue("");
    expect(catalogue.getByRole("status")).toHaveTextContent("23 Trainings");
    expect(within(catalogue.getByRole("navigation", {name: "Fachgebiete"})).getAllByRole("link")).toHaveLength(4);
});

it("restores the catalogue search after opening a course and going back", async () => {
    const scrollIntoView = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoView;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "de");
    window.history.pushState({}, "Trainings", "/training?ref=example#details");
    const user = userEvent.setup();
    render(<App/>);

    const search = await screen.findByRole("searchbox", {name: "Trainings durchsuchen"});
    await waitFor(() => expect(scrollIntoView).toHaveBeenCalled());
    const startLength = window.history.length;
    await user.type(search, "SQL");
    expect(window.location.search).toBe("?ref=example&q=SQL");
    expect(window.location.hash).toBe("#details");
    expect(window.history.length).toBe(startLength);
    const resultCount = screen.getByRole("status").textContent;
    await user.click(screen.getByRole("link", {name: "Python, SQL und Datenkompetenz"}));
    await screen.findByRole("heading", {name: "Python, SQL und Datenkompetenz", level: 1});

    act(() => window.history.back());

    expect(await screen.findByRole("searchbox", {name: "Trainings durchsuchen"})).toHaveValue("SQL");
    expect(screen.getByRole("status").textContent).toBe(resultCount);
    expect(window.location.hash).toBe("#details");

    await user.click(screen.getByRole("link", {name: "Python, SQL und Datenkompetenz"}));
    const backToSearch = await screen.findByRole("link", {name: "Zurück zur Suche"});
    expect(backToSearch).toHaveAttribute("href", "/training?ref=example&q=SQL#details");
    await user.click(backToSearch);

    expect(await screen.findByRole("searchbox", {name: "Trainings durchsuchen"})).toHaveValue("SQL");
    expect(screen.getByRole("status").textContent).toBe(resultCount);
});

it.each([
    ["de", "PenTest+ SOC", "Cybersecurity, Pentesting-Grundlagen & Ethical Hacking", "/training/cybersecurity-pentesting-ethical-hacking"],
    ["en", "PenTest+ SOC", "Cybersecurity, Pentesting Fundamentals & Ethical Hacking", "/training/cybersecurity-pentesting-ethical-hacking"],
    ["de", "Cisco Subnetze", "Netzwerktechnik und IT-Infrastruktur", "/training/networking-it-infrastructure"],
    ["en", "Cisco subnet", "Networking & IT Infrastructure", "/training/networking-it-infrastructure"],
    ["de", "MySQL", "Python, SQL und Datenkompetenz", "/training/python-sql-data-skills"],
    ["en", "IT service management", "Business Computer Science & Digital Transformation", "/training/business-informatics-digital-transformation"],
    ["de", "ITSM", "Wirtschaftsinformatik & digitale Transformation", "/training/business-informatics-digital-transformation"],
    ["de", "BWL VWL", "Betriebswirtschaft und Volkswirtschaft", "/training/business-administration-economics"],
    ["de", "Steuern", "Buchhaltung und Steuergrundlagen", "/training/accounting-tax-fundamentals"],
    ["de", "Arbeitsrecht", "Arbeitsrecht und Personalwesen", "/training/employment-law-hr-fundamentals"],
])("finds concrete teaching subjects in %s using %s", async (language, query, title, href) => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    window.history.pushState({}, "Training", `/training?q=${encodeURIComponent(query)}`);

    render(<App/>);

    const catalogue = within(await screen.findByRole("region", {name: language === "de" ? "Themenkatalog" : "Topic catalogue"}));
    expect(catalogue.getByRole("link", {name: title})).toHaveAttribute("href", href);
    expect(catalogue.queryByText(/No matching courses|Keine passenden Trainings/)).not.toBeInTheDocument();
});

it("finds Git lessons without matching unrelated digital topic names", async () => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "de");
    window.history.pushState({}, "Trainings", "/training?q=Git");

    render(<App/>);

    const catalogue = within(await screen.findByRole("region", {name: "Themenkatalog"}));
    expect(catalogue.getByRole("link", {name: "Softwareentwicklung, APIs & Umschulung"})).toHaveAttribute("href", "/training/software-development-retraining-java-python-csharp-kotlin");
    expect(catalogue.queryByRole("link", {name: "Wirtschaftsinformatik & digitale Transformation"})).not.toBeInTheDocument();
});

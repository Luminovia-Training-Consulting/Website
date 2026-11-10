import {describe, expect, it} from "vitest";
import {readFileSync} from "node:fs";
import {capabilities, serviceOfferings, skillGroups, trainingTopics} from "./content.js";
import {localizedSiteContentForLanguage} from "./localizedContent.js";
import {topicLinkForLabel, trainingDetailsForLanguage} from "./trainingDetails.js";

const SITEMAP_BASE_URL = "https://luminovia.org";

const expectedOfferLinks = [
    ["Softwareentwicklung", "/training/software-development-retraining-java-python-csharp-kotlin"],
    ["Softwaredesign", "/training/software-development-retraining-java-python-csharp-kotlin"],
    ["Netzwerktechnik", "/training/networking-it-infrastructure"],
    ["Networking", "/training/networking-it-infrastructure"],
    ["BWL", "/training/business-administration-economics"],
    ["VWL", "/training/business-administration-economics"],
    ["Buchhaltung", "/training/accounting-tax-fundamentals"],
    ["Steuern", "/training/accounting-tax-fundamentals"],
    ["Java", "/training/software-development-retraining-java-python-csharp-kotlin"],
    ["Python", "/training/software-development-retraining-java-python-csharp-kotlin"],
    ["C#", "/training/software-development-retraining-java-python-csharp-kotlin"],
    ["Kotlin", "/training/software-development-retraining-java-python-csharp-kotlin"],
    ["Fachinformatiker Ausbildung", "/training/fachinformatiker-ihk-training-retraining"],
    ["Fachinformatiker Umschulung", "/training/fachinformatiker-ihk-training-retraining"],
    ["Buerokaufleute", "/training/office-management-ihk-business-training"],
    ["Software Developer", "/training/software-development-retraining-java-python-csharp-kotlin"],
    ["Data Analyst", "/training/data-analytics-data-science-engineering"],
    ["Data Scientist", "/training/data-analytics-data-science-engineering"],
    ["Data Engineer", "/training/data-analytics-data-science-engineering"],
    ["Projektmanagement", "/training/project-management-scrum-agile-classic"],
    ["SCRUM und agiles Arbeiten", "/training/project-management-scrum-agile-classic"],
    ["klassisch", "/training/project-management-scrum-agile-classic"],
    ["New Work", "/training/business-consulting-new-work"],
    ["Digitale Transformation", "/training/business-informatics-digital-transformation"],
    ["Wirtschaftsinformatik", "/training/business-informatics-digital-transformation"],
    ["Business Computer Science", "/training/business-informatics-digital-transformation"],
    ["Pentest fundamentals", "/training/cybersecurity-pentesting-ethical-hacking"],
    ["Ethical-Hacking-Grundlagen", "/training/cybersecurity-pentesting-ethical-hacking"],
    ["Arbeitsrecht", "/training/employment-law-hr-fundamentals"],
    ["Employment law", "/training/employment-law-hr-fundamentals"],
    ["Wirtschaftsrecht", "/training/digital-law-gdpr-ai-act-cloud-act"],
    ["Privatrecht", "/training/digital-law-gdpr-ai-act-cloud-act"],
    ["IT-Recht", "/training/digital-law-gdpr-ai-act-cloud-act"],
    ["DSGVO", "/training/digital-law-gdpr-ai-act-cloud-act"],
    ["Datenschutz", "/training/digital-law-gdpr-ai-act-cloud-act"],
    ["GDPR", "/training/digital-law-gdpr-ai-act-cloud-act"],
    ["AI Act", "/training/digital-law-gdpr-ai-act-cloud-act"],
    ["Cloud Act", "/training/digital-law-gdpr-ai-act-cloud-act"],
    ["AI Governance", "/training/ai-governance-responsible-ai"],
    ["IHK Rahmenlehrplan Fachinformatiker", "/training/fachinformatiker-ihk-training-retraining"],
    ["Kaufmann fuer Bueromanagement", "/training/office-management-ihk-business-training"],
    ["Digital Law, GDPR & AI Act Awareness", "/training/digital-law-gdpr-ai-act-cloud-act"],
    ["KI-Kompetenz für Teams", "/training/ai-literacy-for-teams"],
    ["Softwareentwicklung & APIs", "/training/software-development-retraining-java-python-csharp-kotlin"],
    ["Cybersecurity & Pentesting-Grundlagen", "/training/cybersecurity-pentesting-ethical-hacking"],
    ["Digitales Recht, DSGVO & AI Act Awareness", "/training/digital-law-gdpr-ai-act-cloud-act"],
    ["Coaching", "/training/coaching-keynotes-expert-talks"],
    ["Keynote Speaker", "/training/coaching-keynotes-expert-talks"],
    ["Guest Lecture", "/training/coaching-keynotes-expert-talks"],
];

describe("training detail coverage", () => {
    it("contains all detailed offer pages", () => {
        expect(trainingDetailsForLanguage("en")).toHaveLength(23);
        expect(trainingDetailsForLanguage("de")).toHaveLength(23);
    });

    it("gives every German course its own detailed outline at the same depth as English", () => {
        const german = trainingDetailsForLanguage("de");
        const english = trainingDetailsForLanguage("en");

        for (const field of ["modules", "outcomes", "deliverables"]) {
            const plans = new Set();

            for (const [index, topic] of german.entries()) {
                expect(topic.slug).toBe(english[index].slug);
                expect(topic[field], `${topic.slug} ${field}`).toHaveLength(english[index][field].length);
                expect(topic[field]).not.toEqual(english[index][field]);
                plans.add(JSON.stringify(topic[field]));
            }

            expect(plans.size).toBe(german.length);
        }
    });

    it.each(expectedOfferLinks)("maps %s to the correct detail page", (label, expectedLink) => {
        expect(topicLinkForLabel(label)).toBe(expectedLink);
    });

    it("maps every visible service tile to a detail page", () => {
        const missing = serviceOfferings
            .map((service) => service.title)
            .filter((title) => !topicLinkForLabel(title));

        expect(missing).toEqual([]);
    });

    it("maps every visible training topic chip to a detail page", () => {
        const labels = trainingTopics.flatMap((group) => group.items);
        const missing = labels.filter((label) => !topicLinkForLabel(label));

        expect(missing).toEqual([]);
    });

    it("maps every visible skill-map chip to a detail page", () => {
        const labels = skillGroups.flatMap((group) => group.items);
        const missing = labels.filter((label) => !topicLinkForLabel(label));

        expect(missing).toEqual([]);
    });

    it("maps every capability chip to a detail page", () => {
        const missing = capabilities.filter((label) => !topicLinkForLabel(label));

        expect(missing).toEqual([]);
    });

    it("maps every German visible offer, topic and skill chip to a detail page", () => {
        const deContent = localizedSiteContentForLanguage("de");
        const labels = [
            ...deContent.serviceOfferings.map((service) => service.title),
            ...deContent.trainingTopics.flatMap((group) => group.items),
            ...deContent.skillGroups.flatMap((group) => group.items),
            ...deContent.capabilities,
        ];
        const missing = labels.filter((label) => !topicLinkForLabel(label));

        expect(missing).toEqual([]);
    });

    it("lists every detailed training page in the sitemap", () => {
        const sitemap = readFileSync("public/sitemap.xml", "utf8");
        const missing = trainingDetailsForLanguage("en")
            .map((topic) => `/training/${topic.slug}`)
            .filter((path) => !sitemap.includes(`${SITEMAP_BASE_URL}${path}`));

        expect(missing).toEqual([]);
    });
});


import {describe, expect, it} from "vitest";
import {topicLinkForLabel, trainingDetailsForLanguage} from "./trainingDetails.js";

const expectedOfferLinks = [
    ["Softwareentwicklung", "/training/software-development-retraining-java-python-csharp-kotlin"],
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
    ["Pentest fundamentals", "/training/cybersecurity-pentesting-ethical-hacking"],
    ["Ethical-Hacking-Grundlagen", "/training/cybersecurity-pentesting-ethical-hacking"],
    ["Arbeitsrecht", "/training/digital-law-gdpr-ai-act-cloud-act"],
    ["Wirtschaftsrecht", "/training/digital-law-gdpr-ai-act-cloud-act"],
    ["Privatrecht", "/training/digital-law-gdpr-ai-act-cloud-act"],
    ["IT-Recht", "/training/digital-law-gdpr-ai-act-cloud-act"],
    ["DSGVO", "/training/digital-law-gdpr-ai-act-cloud-act"],
    ["GDPR", "/training/digital-law-gdpr-ai-act-cloud-act"],
    ["AI Act", "/training/digital-law-gdpr-ai-act-cloud-act"],
    ["Cloud Act", "/training/digital-law-gdpr-ai-act-cloud-act"],
    ["AI Governance", "/training/ai-governance-responsible-ai"],
];

describe("training detail coverage", () => {
    it("contains all detailed offer pages", () => {
        expect(trainingDetailsForLanguage("en")).toHaveLength(15);
        expect(trainingDetailsForLanguage("de")).toHaveLength(15);
    });

    it.each(expectedOfferLinks)("maps %s to the correct detail page", (label, expectedLink) => {
        expect(topicLinkForLabel(label)).toBe(expectedLink);
    });
});


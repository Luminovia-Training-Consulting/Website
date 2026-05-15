const base = import.meta.env.BASE_URL || "/";

export const publications = [
    {
        key: "executive-governance-genai",
        href: `${base}publications/executive-governance-generative-ai-knowledge-intensive-organizations.pdf`,
        year: "2026",
        type: {en: "MBA publication", de: "MBA-Publikation"},
        title: {
            en: "Executive Governance of Generative AI in Knowledge-Intensive Organizations",
            de: "Executive Governance of Generative AI in wissensintensiven Organisationen",
        },
        description: {
            en: "Systematic literature review and conceptual framework for value creation, risk mitigation and executive governance of generative AI.",
            de: "Systematic Literature Review und konzeptioneller Rahmen zu Wertschöpfung, Risikominimierung und Executive Governance von generativer AI.",
        },
    },
    {
        key: "genai-workplace-risks",
        href: `${base}publications/opportunities-risks-generative-ai-german-companies-human-machine-interaction.pdf`,
        year: "2025",
        type: {en: "Master thesis", de: "Masterarbeit"},
        title: {
            en: "Opportunities and Risks for Employees from Generative AI Tools in German Companies",
            de: "Chancen und Risiken generativer AI-Tools für Mitarbeitende in deutschen Unternehmen",
        },
        description: {
            en: "Systematic literature analysis on human-machine interaction in everyday work and the organisational effects of generative AI adoption.",
            de: "Systematische Literaturanalyse zu Mensch-Maschine-Interaktion im Arbeitsalltag und organisationalen Effekten generativer AI-Nutzung.",
        },
    },
    {
        key: "chatgpt-phishing",
        href: `${base}publications/chatgpt-authentic-context-specific-personalized-phishing-emails.pdf`,
        year: "2025",
        type: {en: "Bachelor thesis", de: "Bachelorarbeit"},
        title: {
            en: "ChatGPT for Authentic, Context-Specific and Personalised Phishing Emails",
            de: "ChatGPT für authentisch wirkende, kontextspezifische und personalisierte Phishing-E-Mails",
        },
        description: {
            en: "Systematic analysis of how generative AI can shape phishing realism, context fit, personalisation and cybersecurity awareness needs.",
            de: "Systematische Analyse dazu, wie generative AI Phishing-Realismus, Kontextbezug, Personalisierung und Cybersecurity-Awareness beeinflusst.",
        },
    },
];

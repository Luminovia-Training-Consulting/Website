export const SITE_URL = "https://luminovia.org";
export const redirectRoutes = new Map([["/portfolio", "/projects"]]);

export function canonicalPageUrl(pathname) {
    const path = pathname.replace(/\/+$/, "");
    return `${SITE_URL}${redirectRoutes.get(path) ?? path}/`;
}

export const routeMeta = {
    en: {
        "/": {
            title: "IT, AI and Business Training | Luminovia",
            description: "Live training in IT, AI and business, from networking and software design to accounting, employment law and data protection. Consulting for technical and business projects.",
        },
        "/training": {
            title: "IT, AI and Business Course Catalogue | Luminovia",
            description: "Browse courses in networking, software design, AI, cybersecurity, economics, accounting, tax fundamentals, employment law and data protection.",
        },
        "/offers": {
            title: "Offers | Luminovia Training & Consulting",
            description: "Compare Luminovia’s live training in IT, AI and business, consulting formats, project support, talks and course design.",
        },
        "/consulting": {
            title: "Consulting | IT, AI and Business Advisory",
            description: "Consulting for IT infrastructure, software design, AI applications and business processes, from comparing options to planning implementation.",
        },
        "/projects": {
            title: "Project Portfolio | AI Research, Automation and Consulting Projects",
            description: "Selected Luminovia project work across automation, AI research workflows, consulting support, software prototypes and learning-friendly technical implementation.",
        },
        "/portfolio": {
            title: "Project Portfolio | AI Research, Automation and Consulting Projects",
            description: "Selected Luminovia project work across automation, AI research workflows, consulting support, software prototypes and learning-friendly technical implementation.",
        },
        "/clients": {
            title: "References | Luminovia Training & Consulting",
            description: "Explore Luminovia’s training collaborations and download English copies of Carina Sophie Schoppe’s degree documents and academic work.",
        },
        "/pricing": {
            title: "Pricing | Training, Consulting and Session Rates",
            description: "Transparent net rates: EUR 55 per 45-minute teaching unit, EUR 100 per consulting hour, EUR 500 half day and EUR 1,000 full day including preparation and agreed standard materials.",
        },
        "/about": {
            title: "About the Team | Luminovia Training & Consulting",
            description: "Meet Carina Sophie Schoppe, educator, consultant and AI researcher, and Nenad Kalicanin. Training and consulting in IT, AI and business.",
        },
        "/contact": {
            title: "Contact & Booking | Book Training or Consulting",
            description: "Contact Luminovia to book training in IT, AI or business, discuss a consulting project or arrange a workshop, talk or course.",
        },
        "/imprint": {
            title: "Imprint | Luminovia",
            description: "Legal notice and contact details for Luminovia Training & Consulting.",
        },
        "/privacy": {
            title: "Privacy Policy | Luminovia",
            description: "Privacy policy for the Luminovia website, including analytics and contact information.",
        },
        "/terms": {
            title: "Terms & Conditions | Luminovia",
            description: "Terms and conditions, payment terms and bank information for Luminovia Training & Consulting invoices and services.",
        },
    },
    de: {
        "/": {
            title: "Training für IT, KI und Wirtschaft | Luminovia",
            description: "Live-Trainings zu IT, KI und Wirtschaft, von Netzwerktechnik und Softwaredesign bis zu Buchhaltung, Arbeitsrecht und Datenschutz. Beratung für technische und betriebliche Projekte.",
        },
        "/training": {
            title: "Kurskatalog für IT, KI und Wirtschaft | Luminovia",
            description: "Kurse zu Netzwerktechnik, Softwaredesign, KI, IT-Sicherheit, BWL, VWL, Buchhaltung, Steuergrundlagen, Arbeitsrecht und Datenschutz.",
        },
        "/offers": {
            title: "Angebote | Luminovia Training & Consulting",
            description: "Live-Trainings zu IT, KI und Wirtschaft, Beratungsformate, Projektbegleitung, Vorträge und Kursentwicklung bei Luminovia.",
        },
        "/consulting": {
            title: "Beratung für IT, KI und Geschäftsprozesse | Luminovia",
            description: "Beratung zu IT-Infrastruktur, Software, KI-Anwendungen und Geschäftsprozessen. Luminovia begleitet Organisationen von der ersten Frage bis zur Umsetzung.",
        },
        "/projects": {
            title: "Projektportfolio | KI-Research, Automatisierung und Consulting",
            description: "Ausgewählte Luminovia-Projektarbeit zu Automatisierung, KI-Research-Workflows, Consulting-Support, Software-Prototypen und technischer Umsetzung.",
        },
        "/portfolio": {
            title: "Projektportfolio | KI-Research, Automatisierung und Consulting",
            description: "Ausgewählte Luminovia-Projektarbeit zu Automatisierung, KI-Research-Workflows, Consulting-Support, Software-Prototypen und technischer Umsetzung.",
        },
        "/clients": {
            title: "Referenzen | Luminovia Training & Consulting",
            description: "Kooperationen von Luminovia sowie englische Abschlussnachweise und wissenschaftliche Arbeiten von Carina Sophie Schoppe zum Download.",
        },
        "/pricing": {
            title: "Preise | Training, Beratung und Sessions",
            description: "Transparente Netto-Sätze: 55 EUR je 45-Minuten-Unterrichtseinheit, 100 EUR je Beratungsstunde, 500 EUR je Halbtag und 1.000 EUR je Tag inklusive Vorbereitung und vereinbarten Standardmaterialien.",
        },
        "/about": {
            title: "Über uns | Luminovia Training & Consulting",
            description: "Carina Sophie Schoppe, Dozentin, Beraterin und KI-Forscherin, und Nenad Kalicanin: das Team für Training und Beratung zu IT, KI und Wirtschaft.",
        },
        "/contact": {
            title: "Kontakt & Buchung | Training oder Consulting buchen",
            description: "Fragen Sie bei Luminovia Trainings zu IT, KI und Wirtschaft, Beratung für Ihr Projekt, Workshops, Vorträge oder Kursdurchführung an.",
        },
        "/imprint": {
            title: "Impressum | Luminovia",
            description: "Impressum und Kontaktinformationen von Luminovia Training & Consulting.",
        },
        "/privacy": {
            title: "Datenschutzerklärung | Luminovia",
            description: "Datenschutzerklärung der Luminovia-Website, inklusive Analytics- und Kontaktinformationen.",
        },
        "/terms": {
            title: "Geschäfts- und Zahlungsbedingungen | Luminovia",
            description: "Geschäfts- und Zahlungsbedingungen sowie Bankinformationen für Rechnungen und Leistungen von Luminovia Training & Consulting.",
        },
    },
};

export const notFoundMeta = {
    de: {
        title: "Seite nicht gefunden | Luminovia",
        description: "Diese Seite wurde nicht gefunden. Nutzen Sie Startseite, Angebote oder Kontakt, um zur passenden Information zu gelangen.",
    },
    en: {
        title: "Page not found | Luminovia",
        description: "This page was not found. Use the homepage, offers or contact page to find the right information.",
    },
};

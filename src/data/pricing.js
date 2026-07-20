const pricing = {
    de: {
        rates: [
            {
                id: "teaching",
                label: "Kursdurchführung",
                title: "Training und Unterricht",
                price: "55 EUR",
                suffix: "je 45-Minuten-Unterrichtseinheit",
                copy: "Für laufende Remote-Kurse, Unterrichtsblöcke und länger angelegte Trainingsdurchführung mit vorhandenem oder gemeinsam abgestimmtem Curriculum.",
                details: ["Netto-Preis", "Remote-Live-Durchführung", "Für planbare Kurs- und Unterrichtsblöcke", "Terminplan und Umfang werden vorab bestätigt"],
            },
            {
                id: "consulting",
                label: "Beratung",
                title: "Consulting und Fachberatung",
                price: "100 EUR",
                suffix: "je 60 Minuten (75 EUR je 45 Minuten)",
                copy: "Für Beratung zu KI, IT, Prozessen, Governance, Lernarchitektur, Toolentscheidungen, Reviews und Umsetzungsfragen.",
                details: ["Netto-Preis", "Fokussierte Beratung oder Sparring", "Vor- und Nachbereitung nach vereinbartem Umfang", "Projektarbeit wird bei größerem Umfang separat angeboten"],
            },
            {
                id: "half-day",
                label: "Session-Paket",
                title: "Halbtagessession",
                price: "500 EUR",
                suffix: "je vereinbartem Halbtagsformat",
                copy: "Für kompakte Workshops, Teamtrainings, Fachsessions, Beratungssprints oder Expertentermine mit einem klar abgegrenzten Ergebnis.",
                details: ["Netto-Paketpreis", "Vorbereitung inklusive", "Vereinbarte Standardmaterialien inklusive", "Remote-Live-Durchführung inklusive"],
            },
            {
                id: "full-day",
                label: "Session-Paket",
                title: "Tagessession",
                price: "1.000 EUR",
                suffix: "je vereinbartem Tagesformat",
                copy: "Für intensive Workshops, Trainingstage, Beratungsformate oder Programmeinheiten, die einen vollständigen Arbeitstag beanspruchen.",
                details: ["Netto-Paketpreis", "Vorbereitung inklusive", "Vereinbarte Standardmaterialien inklusive", "Remote-Live-Durchführung inklusive"],
            },
        ],
        offerPricing: {
            training: "55 EUR je 45-Min.-UE für laufende Kursdurchführung; Halbtag 500 EUR oder Tag 1.000 EUR inklusive Vorbereitung und vereinbarten Standardmaterialien",
            consulting: "100 EUR je 60 Minuten (75 EUR je 45 Minuten); Halbtag 500 EUR oder Tag 1.000 EUR",
            education: "100 EUR je 60 Minuten für Konzeption; Halbtag 500 EUR oder Tag 1.000 EUR; größere Materialproduktionen als Projektangebot",
            talks: "Halbtag 500 EUR oder Tag 1.000 EUR inklusive Vorbereitung und vereinbarten Standardmaterialien",
        },
        currencies: [
            {title: "Training und Unterricht", eur: "55 EUR je 45-Min.-UE", aud: "auf Basis des EUR-Angebots", usd: "auf Basis des EUR-Angebots", note: "Gilt für laufende Kurs- und Unterrichtsdurchführung. Einzelne Workshops werden als Halb- oder Tagessession kalkuliert."},
            {title: "Consulting und Fachberatung", eur: "100 EUR je 60 Min.", aud: "auf Basis des EUR-Angebots", usd: "auf Basis des EUR-Angebots", note: "Entspricht 75 EUR je 45 Minuten. Größere Vorhaben erhalten ein Angebot mit Leistungsumfang und Ergebnissen."},
            {title: "Halbtagessession", eur: "500 EUR", aud: "auf Basis des EUR-Angebots", usd: "auf Basis des EUR-Angebots", note: "Vorbereitung, vereinbarte Standardmaterialien und Remote-Live-Durchführung sind enthalten."},
            {title: "Tagessession", eur: "1.000 EUR", aud: "auf Basis des EUR-Angebots", usd: "auf Basis des EUR-Angebots", note: "Vorbereitung, vereinbarte Standardmaterialien und Remote-Live-Durchführung sind enthalten."},
        ],
    },
    en: {
        rates: [
            {
                id: "teaching",
                label: "Course delivery",
                title: "Training and teaching",
                price: "EUR 55",
                suffix: "per 45-minute teaching unit",
                copy: "For recurring remote courses, scheduled teaching blocks and longer training delivery based on an existing or jointly agreed curriculum.",
                details: ["Net rate", "Remote live delivery", "For scheduled course and teaching blocks", "Timetable and scope confirmed before booking"],
            },
            {
                id: "consulting",
                label: "Consulting",
                title: "Consulting and advisory",
                price: "EUR 100",
                suffix: "per 60 minutes (EUR 75 per 45 minutes)",
                copy: "For advisory work across AI, IT, processes, governance, learning architecture, tool decisions, reviews and implementation questions.",
                details: ["Net rate", "Focused advisory or sparring", "Preparation and follow-up as agreed", "Larger project work is quoted separately"],
            },
            {
                id: "half-day",
                label: "Session package",
                title: "Half-day session",
                price: "EUR 500",
                suffix: "per agreed half-day format",
                copy: "For focused workshops, team training, advisory sprints, expert sessions or talks with a clearly defined outcome.",
                details: ["Net package price", "Preparation included", "Agreed standard materials included", "Remote live delivery included"],
            },
            {
                id: "full-day",
                label: "Session package",
                title: "Full-day session",
                price: "EUR 1,000",
                suffix: "per agreed full-day format",
                copy: "For intensive workshops, training days, consulting formats or programme modules that require a complete working day.",
                details: ["Net package price", "Preparation included", "Agreed standard materials included", "Remote live delivery included"],
            },
        ],
        offerPricing: {
            training: "EUR 55 per 45-minute unit for recurring course delivery; EUR 500 half day or EUR 1,000 full day including preparation and agreed standard materials",
            consulting: "EUR 100 per 60 minutes (EUR 75 per 45 minutes); EUR 500 half day or EUR 1,000 full day",
            education: "EUR 100 per 60 minutes for concept work; EUR 500 half day or EUR 1,000 full day; larger material production quoted as a project",
            talks: "EUR 500 half day or EUR 1,000 full day including preparation and agreed standard materials",
        },
        currencies: [
            {title: "Training and teaching", eur: "EUR 55 per 45-min unit", aud: "quoted from the EUR reference", usd: "quoted from the EUR reference", note: "For recurring course and teaching delivery. Standalone workshops use the half-day or full-day package rate."},
            {title: "Consulting and advisory", eur: "EUR 100 per 60 min", aud: "quoted from the EUR reference", usd: "quoted from the EUR reference", note: "Equivalent to EUR 75 per 45 minutes. Larger projects receive a scoped proposal with deliverables."},
            {title: "Half-day session", eur: "EUR 500", aud: "quoted from the EUR reference", usd: "quoted from the EUR reference", note: "Preparation, agreed standard materials and remote live delivery are included."},
            {title: "Full-day session", eur: "EUR 1,000", aud: "quoted from the EUR reference", usd: "quoted from the EUR reference", note: "Preparation, agreed standard materials and remote live delivery are included."},
        ],
    },
};

export function pricingForLanguage(language) {
    return pricing[language] || pricing.en;
}

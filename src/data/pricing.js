const sessionPricing = {
    de: "500 EUR pro Halbtag oder 1.000 EUR pro Tag",
    en: "EUR 500 per half day or EUR 1,000 per full day",
};

const pricing = {
    de: {
        rates: [
            {
                id: "teaching",
                title: "Training und Unterricht",
                price: "55 EUR",
                suffix: "je 45-Minuten-Unterrichtseinheit",
                copy: "Laufende Online-Kurse und Unterrichtsblöcke mit bestehendem oder gemeinsam abgestimmtem Lehrplan. Termine und Umfang vereinbaren wir vorab.",
            },
            {
                id: "consulting",
                title: "Fachberatung",
                price: "100 EUR",
                suffix: "je 60 Minuten (75 EUR je 45 Minuten)",
                copy: "Beratung zu KI, IT, Prozessen und konkreten Entscheidungen. Vor- und Nachbereitung richten sich nach dem vereinbarten Umfang.",
            },
            {
                id: "half-day",
                title: "Halbtag",
                price: "500 EUR",
                suffix: "pro Halbtag",
                copy: "Für kompakte Workshops, Teamtrainings, Beratungssprints oder Fachvorträge.",
            },
            {
                id: "full-day",
                title: "Ganzer Tag",
                price: "1.000 EUR",
                suffix: "pro Tag",
                copy: "Für intensive Workshops, Trainingstage und umfangreichere Beratungseinheiten.",
            },
        ],
        offerPricing: {
            training: "55 EUR je 45 Min. bei laufenden Kursen",
            consulting: "100 EUR je Stunde (75 EUR je 45 Min.)",
            education: "100 EUR je Stunde für Konzeption",
            talks: sessionPricing.de,
        },
        sessionPricing: sessionPricing.de,
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
                title: "Training and teaching",
                price: "EUR 55",
                suffix: "per 45-minute teaching unit",
                copy: "Recurring online courses and teaching blocks with an existing or agreed curriculum. We confirm the schedule and scope in advance.",
            },
            {
                id: "consulting",
                title: "Specialist consulting",
                price: "EUR 100",
                suffix: "per 60 minutes (EUR 75 per 45 minutes)",
                copy: "Advice on AI, IT, processes and practical decisions. Preparation and follow-up depend on the agreed scope.",
            },
            {
                id: "half-day",
                title: "Half day",
                price: "EUR 500",
                suffix: "per half day",
                copy: "For focused workshops, team training, advisory sprints or expert talks.",
            },
            {
                id: "full-day",
                title: "Full day",
                price: "EUR 1,000",
                suffix: "per full day",
                copy: "For intensive workshops, training days and longer consulting sessions.",
            },
        ],
        offerPricing: {
            training: "EUR 55 per 45 minutes for recurring courses",
            consulting: "EUR 100 per hour (EUR 75 per 45 minutes)",
            education: "EUR 100 per hour for concept work",
            talks: sessionPricing.en,
        },
        sessionPricing: sessionPricing.en,
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

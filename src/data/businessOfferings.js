import {pricingForLanguage} from "./pricing.js";

const catalog = {
    en: {
        durationModels: [
            {
                title: "90-minute briefing",
                scope: "A focused orientation session for leaders, teams or programme owners.",
                output: "Shared language, risk view, topic map and clear next steps.",
            },
            {
                title: "Half-day or full-day workshop",
                scope: "Interactive training for a team, cohort or learning day.",
                output: "Exercises, examples, checklists and transfer tasks for day-to-day work.",
            },
            {
                title: "2-3 day intensive training",
                scope: "Focused capability build in AI, cybersecurity, software, data or business IT.",
                output: "Deeper labs, guided practice, feedback loops and reusable working materials.",
            },
            {
                title: "5-day bootcamp",
                scope: "Compact learning path for cohorts that need structured progress.",
                output: "Sequenced modules, exercises, recaps, learner support and completion criteria.",
            },
            {
                title: "Multi-week course delivery",
                scope: "Recurring sessions for academies, universities, retraining providers or company programmes.",
                output: "Course plan, live delivery, learning checks, materials and stakeholder coordination.",
            },
            {
                title: "Programme or project support",
                scope: "Training combined with consulting, roadmap work, documentation or implementation sparring.",
                output: "Scoped proposal with milestones, deliverables, review points and decision material.",
            },
        ],
        consultingModels: [
            {
                title: "AI use-case and governance consulting",
                meaning: "Clarifies where AI can help, what risks exist, and which usage rules, workflows or human review points are needed.",
                deliverables: ["use-case map", "risk and data notes", "AI usage guidelines", "workflow recommendations"],
            },
            {
                title: "IT and process advisory",
                meaning: "Translates business problems into technical options, tool decisions, automation ideas and realistic implementation steps.",
                deliverables: ["process map", "tool assessment", "technical roadmap", "decision brief"],
            },
            {
                title: "Learning architecture and curriculum design",
                meaning: "Builds programmes, course structures, workshop sequences and learning materials for adults and professional cohorts.",
                deliverables: ["learning path", "module structure", "slides or exercise logic", "assessment/check logic"],
            },
            {
                title: "Project accompaniment",
                meaning: "Supports teams while a digital, AI, learning or IT project is being shaped, reviewed or moved into delivery.",
                deliverables: ["scope definition", "milestone review", "implementation sparring", "handover documentation"],
            },
        ],
        methods: [
            ["Discovery", "Clarify audience, business goal, constraints, existing tools and decision pressure before designing the format."],
            ["Outcome mapping", "Turn vague training or consulting needs into learning outcomes, decisions, artefacts and success criteria."],
            ["Practical labs", "Use hands-on exercises, examples, workflow reviews and transfer tasks instead of passive slide delivery."],
            ["Governance lens", "Connect AI, data, privacy, quality and human oversight questions to everyday work routines."],
            ["Documentation", "Provide summaries, checklists, roadmaps, learning paths or decision notes where the scope requires it."],
            ["Review and transfer", "Close with next steps, risk notes and practical application guidance so the work does not stop after the session."],
        ],
        projectTypes: [
            {
                title: "AI adoption and workflow project",
                description: "Identify useful AI workflows, define prompt patterns, review quality risks and design practical team routines.",
                examples: ["AI use-case workshop", "prompt workflow library", "review checklist", "team enablement path"],
            },
            {
                title: "Training programme or curriculum project",
                description: "Turn a topic area into a teachable programme with modules, exercises, learning checks and trainer-ready structure.",
                examples: ["multi-week syllabus", "workshop series", "exercise/lab concept", "assessment logic"],
            },
            {
                title: "Automation or data process project",
                description: "Analyse repetitive work, data flows or reporting needs and define a realistic automation or tooling route.",
                examples: ["Python automation concept", "data cleanup plan", "reporting workflow", "API/process map"],
            },
            {
                title: "Cybersecurity or compliance awareness project",
                description: "Build practical awareness around secure behaviour, AI risks, GDPR/AI Act interfaces and defensible work routines.",
                examples: ["security awareness session", "risk checklist", "policy briefing", "scenario exercises"],
            },
            {
                title: "Digital transformation and business IT project",
                description: "Structure a digital change question around processes, people, systems, training needs and implementation sequence.",
                examples: ["roadmap", "stakeholder workshop", "tool decision brief", "operating model outline"],
            },
        ],
        boundaries: {
            possible: [
                "remote live training in German or English",
                "corporate workshops, funded education and higher-education formats",
                "AI, IT, cybersecurity, data, software, project and business-technology topics",
                "consulting sprints, roadmaps, learning architecture and project accompaniment",
                "materials, exercises, recaps, checklists and decision artefacts when scoped",
            ],
            notIncluded: [
                "legal, tax or financial advice",
                "unreviewed production deployment or operational responsibility for client systems",
                "guaranteed certification results or employment outcomes",
                "reselling client materials or third-party licensed content",
                "onsite travel unless explicitly quoted and scheduled",
            ],
        },
        currencies: pricingForLanguage("en").currencies,
    },
    de: {
        durationModels: [
            {
                title: "90-Minuten-Briefing",
                scope: "Fokussierte Orientierung für Führung, Teams oder Programmverantwortliche.",
                output: "Gemeinsame Sprache, Risikoblick, Themenlandkarte und klare nächste Schritte.",
            },
            {
                title: "Halbtages- oder Tagesworkshop",
                scope: "Interaktives Training für ein Team, eine Lerngruppe oder einen Weiterbildungstag.",
                output: "Übungen, Beispiele, Checklisten und Transferaufgaben für den Arbeitsalltag.",
            },
            {
                title: "2-3 Tage Intensivtraining",
                scope: "Gezielter Kompetenzaufbau in KI, Cybersecurity, Software, Daten oder Wirtschaftsinformatik.",
                output: "Vertiefende Praxislabore, angeleitete Übungen, Feedbackschleifen und wiederverwendbare Materialien.",
            },
            {
                title: "5-Tage-Bootcamp",
                scope: "Kompakter Lernpfad für Kohorten mit strukturiertem Fortschritt.",
                output: "Aufeinander aufbauende Module, Übungen, Zusammenfassungen, Lernbegleitung und klarer Abschluss.",
            },
            {
                title: "Mehrwöchige Kursdurchführung",
                scope: "Wiederkehrende Termine für Akademien, Hochschulen, Umschulungsanbieter oder Unternehmensprogramme.",
                output: "Kursplan, Live-Durchführung, Lernchecks, Materialien und Stakeholder-Abstimmung.",
            },
            {
                title: "Programm- oder Projektbegleitung",
                scope: "Training kombiniert mit Beratung, Fahrplanarbeit, Dokumentation oder Umsetzungsbegleitung.",
                output: "Angebot mit Meilensteinen, Ergebnissen, Prüfpunkten und Entscheidungsmaterial.",
            },
        ],
        consultingModels: [
            {
                title: "Beratung zu KI-Anwendungsfällen und Governance",
                meaning: "Klärt, wo KI sinnvoll unterstützt, welche Risiken bestehen und welche Nutzungsregeln, Arbeitsabläufe oder Prüfpunkte gebraucht werden.",
                deliverables: ["Anwendungsfallkarte", "Risiko- und Datennotizen", "KI-Nutzungsleitlinien", "Empfehlungen für Arbeitsabläufe"],
            },
            {
                title: "IT- und Prozessberatung",
                meaning: "Übersetzt geschäftliche Herausforderungen in technische Optionen, Werkzeugentscheidungen, Automatisierungsideen und realistische Umsetzungsschritte.",
                deliverables: ["Prozesslandkarte", "Werkzeugbewertung", "technischer Fahrplan", "Entscheidungsvorlage"],
            },
            {
                title: "Lernarchitektur und Curriculum-Entwicklung",
                meaning: "Baut Programme, Kursstrukturen, Workshop-Reihen und Lernmaterialien für Erwachsene und professionelle Kohorten.",
                deliverables: ["Lernpfad", "Modulstruktur", "Präsentations- oder Übungslogik", "Lern- und Wissenschecks"],
            },
            {
                title: "Projektbegleitung",
                meaning: "Begleitet Teams, während ein digitales, AI-, Lern- oder IT-Projekt strukturiert, geprüft oder in Umsetzung gebracht wird.",
                deliverables: ["Leistungsbeschreibung", "Meilensteinprüfung", "Umsetzungsbegleitung", "Übergabedokumentation"],
            },
        ],
        methods: [
            ["Auftragsklärung", "Zielgruppe, Geschäftsziel, Rahmenbedingungen, vorhandene Werkzeuge und Entscheidungsdruck klären."],
            ["Ergebnisplanung", "Vage Trainings- oder Beratungsbedarfe in Lernziele, Entscheidungen, Arbeitsergebnisse und Erfolgskriterien übersetzen."],
            ["Praxislabore", "Angeleitete Übungen, Beispiele, Prüfungen von Arbeitsabläufen und Transferaufgaben statt reiner Foliendurchführung."],
            ["Governance-Blick", "KI, Daten, Datenschutz, Qualität und menschliche Aufsicht mit alltagstauglichen Arbeitsroutinen verbinden."],
            ["Dokumentation", "Zusammenfassungen, Checklisten, Fahrpläne, Lernpfade oder Entscheidungsnotizen im vereinbarten Umfang liefern."],
            ["Prüfung und Transfer", "Mit nächsten Schritten, Risikohinweisen und praktischen Anwendungsempfehlungen abschließen."],
        ],
        projectTypes: [
            {
                title: "KI-Einführung und digitale Arbeitsabläufe",
                description: "Sinnvolle KI-Arbeitsabläufe identifizieren, Prompt-Muster definieren, Qualitätsrisiken prüfen und Teamroutinen gestalten.",
                examples: ["Workshop zu KI-Anwendungsfällen", "Bibliothek für Prompt-Abläufe", "Prüfcheckliste", "Kompetenzpfad für Teams"],
            },
            {
                title: "Trainingsprogramm- oder Curriculum-Projekt",
                description: "Ein Themenfeld in ein lehrbares Programm mit Modulen, Übungen, Lernchecks und Trainerstruktur übersetzen.",
                examples: ["mehrwöchiger Lehrplan", "Workshop-Reihe", "Übungs- und Laborkonzept", "Prüfungslogik"],
            },
            {
                title: "Automatisierungs- oder Datenprozess-Projekt",
                description: "Wiederholbare Arbeit, Datenflüsse oder Reportingbedarf analysieren und eine realistische Automatisierungsroute definieren.",
                examples: ["Python-Automatisierungskonzept", "Plan zur Datenbereinigung", "Berichtsablauf", "API- und Prozesslandkarte"],
            },
            {
                title: "Cybersecurity- oder Compliance-Awareness-Projekt",
                description: "Praxisnahe Awareness zu sicherem Verhalten, AI-Risiken, DSGVO-/AI-Act-Schnittstellen und belastbaren Routinen aufbauen.",
                examples: ["Workshop zum Sicherheitsbewusstsein", "Risiko-Checkliste", "Richtlinien-Briefing", "Szenario-Übungen"],
            },
            {
                title: "Digitale Transformation und Wirtschaftsinformatik",
                description: "Eine digitale Veränderungsfrage entlang von Prozessen, Menschen, Systemen, Trainingsbedarf und Umsetzungsreihenfolge strukturieren.",
                examples: ["Umsetzungsfahrplan", "Stakeholder-Workshop", "Entscheidungsvorlage zur Werkzeugauswahl", "Skizze des Betriebsmodells"],
            },
        ],
        boundaries: {
            possible: [
                "Remote-Live-Training auf Deutsch oder Englisch",
                "Unternehmensworkshops, geförderte Bildung und Hochschulformate",
                "KI, IT, Cybersecurity, Daten, Software, Projektarbeit und Wirtschaftsinformatik",
                "Beratungssprints, Umsetzungsfahrpläne, Lernarchitektur und Projektbegleitung",
                "Materialien, Übungen, Zusammenfassungen, Checklisten und Entscheidungsvorlagen im vereinbarten Umfang",
            ],
            notIncluded: [
                "Rechts-, Steuer- oder Finanzberatung",
                "ungeprüfter Produktivbetrieb oder Betriebsverantwortung für Kundensysteme",
                "garantierte Zertifikats-, Prüfungs- oder Job-Ergebnisse",
                "Weiterverkauf von Kundenmaterialien oder lizenzierten Drittinhalten",
                "Vor-Ort-Reisen, sofern nicht explizit kalkuliert und geplant",
            ],
        },
        currencies: pricingForLanguage("de").currencies,
    },
};

export function businessOfferingsForLanguage(language) {
    return catalog[language] || catalog.en;
}

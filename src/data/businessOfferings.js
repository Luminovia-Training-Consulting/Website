const catalog = {
    en: {
        durationModels: [
            {
                title: "90-minute briefing",
                scope: "Orientation for leaders, teams or programme owners.",
                output: "Shared language, risk view, topic map and recommended next steps.",
            },
            {
                title: "Half-day or full-day workshop",
                scope: "Interactive training for a team, cohort or learning day.",
                output: "Exercises, examples, checklists and concrete transfer tasks.",
            },
            {
                title: "2-3 day intensive training",
                scope: "Focused capability build in AI, cybersecurity, software, data or business IT.",
                output: "Deeper labs, guided practice, feedback loops and reusable materials.",
            },
            {
                title: "5-day bootcamp",
                scope: "Compact learning path for cohorts that need structured progress.",
                output: "Sequenced modules, exercises, recaps, learner support and completion logic.",
            },
            {
                title: "Multi-week course delivery",
                scope: "Recurring sessions for academies, universities, retraining providers or company programmes.",
                output: "Course plan, live delivery, learning checks, materials and coordination with stakeholders.",
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
        currencies: [
            {
                title: "Funded education / AZAV-style delivery",
                eur: "from EUR 50 per 45-min unit",
                aud: "from AUD 85 per 45-min unit",
                usd: "from USD 65 per 45-min unit",
                note: "Best for longer course blocks and structured education-provider delivery.",
            },
            {
                title: "Corporate training and workshops",
                eur: "from EUR 100 per hour",
                aud: "from AUD 165 per hour",
                usd: "from USD 120 per hour",
                note: "Planning average for non-funded education, companies, universities and teams.",
            },
            {
                title: "Talks and expert sessions",
                eur: "from EUR 1,000",
                aud: "from AUD 1,650",
                usd: "from USD 1,200",
                note: "Depends on topic, preparation, audience, event visibility and time-zone requirements.",
            },
            {
                title: "Consulting and project accompaniment",
                eur: "quoted individually",
                aud: "quoted individually",
                usd: "quoted individually",
                note: "Scoped by responsibility, depth, deliverables, timeline and review cadence.",
            },
        ],
    },
    de: {
        durationModels: [
            {
                title: "90-Minuten-Briefing",
                scope: "Orientierung fuer Führung, Teams oder Programmverantwortliche.",
                output: "Gemeinsame Sprache, Risikoblick, Themenlandkarte und empfohlene naechste Schritte.",
            },
            {
                title: "Halbtages- oder Tagesworkshop",
                scope: "Interaktives Training fuer Team, Kohorte oder Learning Day.",
                output: "Uebungen, Beispiele, Checklisten und konkrete Transferaufgaben.",
            },
            {
                title: "2-3 Tage Intensivtraining",
                scope: "Gezielter Kompetenzaufbau in AI, Cybersecurity, Software, Daten oder Business IT.",
                output: "Vertiefende Labs, gefuehrte Praxis, Feedbackschleifen und wiederverwendbare Materialien.",
            },
            {
                title: "5-Tage-Bootcamp",
                scope: "Kompakter Lernpfad fuer Kohorten mit strukturiertem Fortschritt.",
                output: "Sequenzierte Module, Uebungen, Recaps, Lernsupport und Abschlusslogik.",
            },
            {
                title: "Mehrwoechige Kursdurchfuehrung",
                scope: "Wiederkehrende Sessions fuer Akademien, Hochschulen, Umschulungsanbieter oder Unternehmensprogramme.",
                output: "Kursplan, Live-Durchfuehrung, Lernchecks, Materialien und Stakeholder-Abstimmung.",
            },
            {
                title: "Programm- oder Projektbegleitung",
                scope: "Training kombiniert mit Consulting, Roadmap-Arbeit, Dokumentation oder Umsetzungssparring.",
                output: "Angebot mit Meilensteinen, Ergebnissen, Reviewpunkten und Entscheidungsmaterial.",
            },
        ],
        consultingModels: [
            {
                title: "AI-Use-Case- und Governance-Consulting",
                meaning: "Klaert, wo AI sinnvoll hilft, welche Risiken bestehen und welche Nutzungsregeln, Workflows oder Reviewpunkte gebraucht werden.",
                deliverables: ["Use-Case-Map", "Risiko- und Datennotizen", "AI-Nutzungsleitlinien", "Workflow-Empfehlungen"],
            },
            {
                title: "IT- und Prozessberatung",
                meaning: "Uebersetzt Business-Probleme in technische Optionen, Tool-Entscheidungen, Automatisierungsideen und realistische Umsetzungsschritte.",
                deliverables: ["Prozesslandkarte", "Tool-Bewertung", "technische Roadmap", "Entscheidungsvorlage"],
            },
            {
                title: "Learning Architecture und Curriculum Design",
                meaning: "Baut Programme, Kursstrukturen, Workshop-Reihen und Lernmaterialien fuer Erwachsene und professionelle Kohorten.",
                deliverables: ["Lernpfad", "Modulstruktur", "Slide- oder Uebungslogik", "Assessment-/Checklogik"],
            },
            {
                title: "Projektbegleitung",
                meaning: "Begleitet Teams, waehrend ein digitales, AI-, Lern- oder IT-Projekt strukturiert, geprueft oder in Umsetzung gebracht wird.",
                deliverables: ["Scope-Definition", "Meilenstein-Review", "Umsetzungssparring", "Handover-Dokumentation"],
            },
        ],
        methods: [
            ["Discovery", "Zielgruppe, Business-Ziel, Rahmenbedingungen, vorhandene Tools und Entscheidungsdruck klaeren."],
            ["Outcome Mapping", "Vage Trainings- oder Beratungsbedarfe in Lernziele, Entscheidungen, Artefakte und Erfolgskriterien uebersetzen."],
            ["Praxislabs", "Hands-on-Uebungen, Beispiele, Workflow-Reviews und Transferaufgaben statt passiver Foliendurchfuehrung."],
            ["Governance-Blick", "AI, Daten, Datenschutz, Qualitaet und menschliche Aufsicht mit alltagstauglichen Arbeitsroutinen verbinden."],
            ["Dokumentation", "Zusammenfassungen, Checklisten, Roadmaps, Lernpfade oder Entscheidungsnotizen liefern, wenn es im Scope liegt."],
            ["Review und Transfer", "Mit naechsten Schritten, Risikohinweisen und Anwendungsempfehlungen abschliessen."],
        ],
        projectTypes: [
            {
                title: "AI-Adoption- und Workflow-Projekt",
                description: "Sinnvolle AI-Workflows identifizieren, Prompt-Muster definieren, Qualitaetsrisiken pruefen und Teamroutinen gestalten.",
                examples: ["AI-Use-Case-Workshop", "Prompt-Workflow-Library", "Review-Checkliste", "Team-Enablement-Pfad"],
            },
            {
                title: "Trainingsprogramm- oder Curriculum-Projekt",
                description: "Ein Themenfeld in ein lehrbares Programm mit Modulen, Uebungen, Lernchecks und Trainerstruktur uebersetzen.",
                examples: ["mehrwoechiger Syllabus", "Workshop-Reihe", "Uebungs-/Lab-Konzept", "Assessment-Logik"],
            },
            {
                title: "Automatisierungs- oder Datenprozess-Projekt",
                description: "Wiederholbare Arbeit, Datenfluesse oder Reportingbedarf analysieren und eine realistische Automatisierungsroute definieren.",
                examples: ["Python-Automation-Konzept", "Data-Cleanup-Plan", "Reporting-Workflow", "API-/Prozesslandkarte"],
            },
            {
                title: "Cybersecurity- oder Compliance-Awareness-Projekt",
                description: "Praxisnahe Awareness zu sicherem Verhalten, AI-Risiken, DSGVO-/AI-Act-Schnittstellen und belastbaren Routinen aufbauen.",
                examples: ["Security-Awareness-Session", "Risiko-Checkliste", "Policy-Briefing", "Szenario-Uebungen"],
            },
            {
                title: "Digital-Transformation- und Business-IT-Projekt",
                description: "Eine digitale Veraenderungsfrage entlang von Prozessen, Menschen, Systemen, Trainingsbedarf und Umsetzungsreihenfolge strukturieren.",
                examples: ["Roadmap", "Stakeholder-Workshop", "Tool-Entscheidungsvorlage", "Operating-Model-Skizze"],
            },
        ],
        boundaries: {
            possible: [
                "Remote-Live-Training auf Deutsch oder Englisch",
                "Corporate Workshops, gefoerderte Bildung und Hochschulformate",
                "AI, IT, Cybersecurity, Daten, Software, Projekt- und Business-Technology-Themen",
                "Consulting-Sprints, Roadmaps, Learning Architecture und Projektbegleitung",
                "Materialien, Uebungen, Recaps, Checklisten und Entscheidungsartefakte im vereinbarten Scope",
            ],
            notIncluded: [
                "Rechts-, Steuer- oder Finanzberatung",
                "ungepruefter Produktivbetrieb oder Betriebsverantwortung fuer Kundensysteme",
                "garantierte Zertifikats-, Pruefungs- oder Job-Ergebnisse",
                "Weiterverkauf von Kundenmaterialien oder lizenzierten Drittinhalten",
                "Vor-Ort-Reisen, sofern nicht explizit kalkuliert und geplant",
            ],
        },
        currencies: [
            {
                title: "Gefoerderte Bildung / AZAV-nahe Durchfuehrung",
                eur: "ab 50 EUR pro 45-Min.-UE",
                aud: "ab 85 AUD pro 45-Min.-UE",
                usd: "ab 65 USD pro 45-Min.-UE",
                note: "Geeignet fuer laengere Kursbloecke und strukturierte Bildungsanbieter-Durchfuehrung.",
            },
            {
                title: "Corporate Training und Workshops",
                eur: "ab 100 EUR pro Stunde",
                aud: "ab 165 AUD pro Stunde",
                usd: "ab 120 USD pro Stunde",
                note: "Planungswert fuer nicht gefoerderte Bildung, Unternehmen, Hochschulen und Teams.",
            },
            {
                title: "Vortraege und Expert Sessions",
                eur: "ab 1.000 EUR",
                aud: "ab 1.650 AUD",
                usd: "ab 1.200 USD",
                note: "Abhaengig von Thema, Vorbereitung, Zielgruppe, Event-Sichtbarkeit und Zeitzone.",
            },
            {
                title: "Consulting und Projektbegleitung",
                eur: "individuell kalkuliert",
                aud: "individuell kalkuliert",
                usd: "individuell kalkuliert",
                note: "Nach Verantwortung, Tiefe, Ergebnissen, Laufzeit und Reviewrhythmus gescoped.",
            },
        ],
    },
};

export function businessOfferingsForLanguage(language) {
    return catalog[language] || catalog.en;
}

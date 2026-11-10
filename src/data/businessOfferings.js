import {pricingForLanguage} from "./pricing.js";

const catalog = {
    en: {
        durationModels: [
            {
                title: "90-minute briefing",
                scope: "An introduction for team members, leaders or people responsible for a programme.",
                output: "A shared vocabulary, an overview of the risks and topics, and a plan for what to do next.",
            },
            {
                title: "Half-day or full-day workshop",
                scope: "Interactive training for a team, cohort or learning day.",
                output: "Exercises, examples and checklists the group can use back at work.",
            },
            {
                title: "2–3 days of intensive training",
                scope: "Time to go deeper into AI, cybersecurity, software, data or business IT.",
                output: "Practical labs, guided exercises with feedback, and materials you can reuse.",
            },
            {
                title: "5-day bootcamp",
                scope: "A short course in which each day builds on the previous one.",
                output: "Modules with exercises and recaps, support as you learn, and a clear description of what counts as completion.",
            },
            {
                title: "Multi-week course delivery",
                scope: "Recurring sessions for academies, universities, retraining providers or company programmes.",
                output: "Course plan, live sessions, learning checks and materials, with regular coordination with the people involved.",
            },
            {
                title: "Programme or project support",
                scope: "Training alongside consulting, planning, documentation or help with implementation.",
                output: "A proposal with milestones, what we’ll deliver, when we’ll review it and what you’ll need to make decisions.",
            },
        ],
        consultingModels: [
            {
                title: "Where and how to use AI",
                meaning: "We assess which tasks suit AI, which risks to account for and when someone needs to check the result. Together we agree on rules and responsibilities.",
                deliverables: ["use-case map", "risk and data notes", "AI usage guidelines", "workflow recommendations"],
            },
            {
                title: "IT and process advisory",
                meaning: "We look at the business problem, compare tools and automation options, and work out which changes the team can put into practice.",
                deliverables: ["process map", "tool assessment", "technical roadmap", "decision brief"],
            },
            {
                title: "Course and curriculum design",
                meaning: "We plan courses and workshop series for adults and professional groups, and develop the materials they’ll work with.",
                deliverables: ["learning path", "module structure", "slides or exercise logic", "assessment/check logic"],
            },
            {
                title: "Project support",
                meaning: "We help teams plan, review or start a digital, AI, education or IT project.",
                deliverables: ["scope definition", "milestone review", "implementation sparring", "handover documentation"],
            },
        ],
        methods: [
            ["Understand the situation", "We ask who’s involved, what needs to change, which tools you already use and when decisions need to be made."],
            ["Agree on the goal", "We decide what people should be able to do, which decisions the work needs to support and how we’ll tell if it helped."],
            ["Practical labs", "We work through examples, review actual workflows and practise tasks people can repeat at work."],
            ["Set rules for everyday work", "We discuss what data is suitable for AI tools, how to protect it, and who checks quality before results are used."],
            ["Documentation", "If agreed, we document decisions and prepare summaries, checklists or a plan the team can use."],
            ["Plan what happens next", "We end by agreeing what to try next, what to watch out for and how to use the work in practice."],
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
                "live online training in German or English",
                "corporate workshops, funded education and higher-education formats",
                "AI, IT, cybersecurity, data, software, project and business-technology topics",
                "short consulting engagements, implementation plans, course design and project support",
                "materials, exercises, summaries, checklists and decision briefs as agreed",
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
                scope: "Ein Einstieg für Teams, Führungskräfte oder Programmverantwortliche.",
                output: "Ein gemeinsames Verständnis der Begriffe, ein Überblick über Themen und Risiken sowie ein Plan für die nächsten Schritte.",
            },
            {
                title: "Halbtages- oder Tagesworkshop",
                scope: "Interaktives Training für ein Team, eine Lerngruppe oder einen Weiterbildungstag.",
                output: "Übungen, Beispiele und Checklisten, die die Gruppe im Arbeitsalltag einsetzen kann.",
            },
            {
                title: "2–3 Tage Intensivtraining",
                scope: "Zeit, um tiefer in KI, Cybersecurity, Software, Daten oder Wirtschaftsinformatik einzusteigen.",
                output: "Praktische Aufgaben im Lab, angeleitete Übungen mit Rückmeldung und Materialien zur weiteren Nutzung.",
            },
            {
                title: "5-Tage-Bootcamp",
                scope: "Ein kompakter Kurs, bei dem jeder Tag auf dem vorherigen aufbaut.",
                output: "Module mit Übungen und Zusammenfassungen, Unterstützung beim Lernen und klare Kriterien für den Abschluss.",
            },
            {
                title: "Mehrwöchige Kursdurchführung",
                scope: "Wiederkehrende Termine für Akademien, Hochschulen, Umschulungsanbieter oder Unternehmensprogramme.",
                output: "Kursplan, Live-Unterricht, Lernkontrollen und Materialien sowie regelmäßige Abstimmung mit den Beteiligten.",
            },
            {
                title: "Programm- oder Projektbegleitung",
                scope: "Training zusammen mit Beratung, Planung, Dokumentation oder Unterstützung bei der Umsetzung.",
                output: "Ein Angebot mit Meilensteinen, vereinbarten Ergebnissen, Terminen für Rücksprachen und Entscheidungsvorlagen.",
            },
        ],
        consultingModels: [
            {
                title: "Wo und wie Sie KI einsetzen können",
                meaning: "Wir prüfen, bei welchen Aufgaben KI helfen kann, welche Risiken Sie berücksichtigen müssen und wann jemand das Ergebnis prüft. Gemeinsam legen wir Regeln und Zuständigkeiten fest.",
                deliverables: ["Anwendungsfallkarte", "Risiko- und Datennotizen", "KI-Nutzungsleitlinien", "Empfehlungen für Arbeitsabläufe"],
            },
            {
                title: "IT- und Prozessberatung",
                meaning: "Wir schauen uns das Problem an, vergleichen Werkzeuge und Möglichkeiten zur Automatisierung und klären, was Ihr Team umsetzen kann.",
                deliverables: ["Prozesslandkarte", "Werkzeugbewertung", "technischer Fahrplan", "Entscheidungsvorlage"],
            },
            {
                title: "Kurse und Lehrpläne entwickeln",
                meaning: "Wir planen Kurse und Workshop-Reihen für die Erwachsenen- und Berufsbildung und entwickeln die dazugehörigen Lernmaterialien.",
                deliverables: ["Lernpfad", "Modulstruktur", "Präsentations- oder Übungslogik", "Lern- und Wissenschecks"],
            },
            {
                title: "Projektbegleitung",
                meaning: "Wir unterstützen Teams, wenn sie ein Digital-, KI-, Bildungs- oder IT-Projekt planen, prüfen oder in die Umsetzung bringen.",
                deliverables: ["Leistungsbeschreibung", "Meilensteinprüfung", "Umsetzungsbegleitung", "Übergabedokumentation"],
            },
        ],
        methods: [
            ["Ausgangslage verstehen", "Wir fragen, wer beteiligt ist, was sich ändern soll, welche Werkzeuge bereits im Einsatz sind und bis wann Entscheidungen anstehen."],
            ["Ziel vereinbaren", "Wir klären, was die Teilnehmenden danach können sollen, welche Entscheidungen anstehen und woran Sie den Fortschritt erkennen."],
            ["Praxislabore", "Wir gehen Beispiele und Arbeitsabläufe gemeinsam durch und üben Aufgaben, die die Teilnehmenden später selbst erledigen."],
            ["Regeln für den Alltag", "Wir besprechen, welche Daten sich für KI-Werkzeuge eignen, wie Sie sie schützen und wer die Ergebnisse vor der Nutzung prüft."],
            ["Dokumentation", "Je nach Auftrag halten wir Entscheidungen fest und erstellen Zusammenfassungen, Checklisten oder einen Plan für das Team."],
            ["Die nächsten Schritte planen", "Zum Abschluss vereinbaren wir, was Sie als Nächstes ausprobieren, worauf Sie achten und wie Sie die Ergebnisse einsetzen können."],
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
                "Live-Online-Training auf Deutsch oder Englisch",
                "Unternehmensworkshops, geförderte Bildung und Hochschulformate",
                "KI, IT, Cybersecurity, Daten, Software, Projektarbeit und Wirtschaftsinformatik",
                "kurze Beratungsprojekte, Planung der Umsetzung, Kursentwicklung und Projektbegleitung",
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

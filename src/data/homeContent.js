import {useLanguage} from "../i18n.jsx";

const enHomeContent = {
    trustStats: [
        {value: "AI | IT | Security", label: "core digital capability areas"},
        {value: "DE / EN", label: "German and English delivery"},
        {value: "Remote-first", label: "delivery for distributed organisations"},
        {value: "Workshops to programmes", label: "formats from briefings to multi-week enablement"},
    ],
    serviceOfferings: [
        {
            title: "AI & GenAI Training",
            description: "Practical training on generative AI concepts, business use cases, limits, risks and responsible day-to-day adoption.",
            audience: "Corporate teams, education providers, universities and public-sector teams",
            format: "Remote live workshop, training day or multi-day course",
            duration: "90 minutes to 3 days",
            outcomes: ["Understand core GenAI capabilities and limits", "Identify realistic use cases", "Apply quality and risk checks"],
        },
        {
            title: "AI Literacy for Teams",
            description: "A clear foundation for teams that need shared language, practical confidence and sensible AI usage rules.",
            audience: "Non-technical teams, L&D departments, managers and mixed learner groups",
            format: "Interactive workshop or internal enablement programme",
            duration: "Half day to 2 days",
            outcomes: ["Use AI tools more confidently", "Recognise weak outputs", "Build team-level usage guidelines"],
        },
        {
            title: "Prompt Engineering & Agentic Workflows",
            description: "Structured prompting, workflow decomposition and supervised agentic work patterns for real business processes.",
            audience: "Knowledge workers, project teams, AI champions and digital transformation teams",
            format: "Hands-on workshop with workflow exercises",
            duration: "1 to 3 days",
            outcomes: ["Design repeatable prompts", "Map agent-ready tasks", "Define human review points"],
        },
    ],
    faqs: [
        {q: "What can organisations book Luminovia for?", a: "Luminovia provides IT and business consulting, training programmes, AI governance work, cybersecurity awareness, software and data training, digital transformation support and curriculum design. Typical formats are consulting sprints, workshops, live online courses, keynotes, enablement programmes and project implementation support."},
        {q: "Who does Luminovia work with?", a: "Luminovia works with training providers, universities, corporate learning teams, bootcamps, public-sector organisations, startups, SMEs and international education partners that need structured delivery in English or German."},
        {q: "Are full courses or only short workshops available?", a: "Both. Formats can include 90-minute expert sessions, half-day workshops, full training days, consulting sprints, multi-day intensives, multi-week course delivery and larger programme work for professional education providers or organisations."},
        {q: "Which AI topics are most requested?", a: "Common requests include AI literacy, GenAI for teams, prompt engineering, agentic workflows, responsible AI, AI governance, automation risks and practical AI adoption for business or education contexts."},
        {q: "Can Luminovia cover technical topics like Python, SQL or cybersecurity?", a: "Yes. Programmes can cover Python, SQL, databases, APIs, software development foundations, cybersecurity awareness, web security, SOC basics, ethical hacking foundations and certification-oriented preparation contexts."},
        {q: "Is delivery available in German and English?", a: "Yes. Training and consulting formats can be delivered in German or English, depending on audience, programme context and stakeholder needs."},
        {q: "How does remote delivery work?", a: "Remote delivery is planned around the target audience, time zone and format. Luminovia supports German-speaking and international clients across Europe, Australia and distributed global teams."},
        {q: "What makes your training practical?", a: "Sessions combine clear outcomes, examples, exercises, recaps, learner activation and transfer tasks. Participants do not only hear about tools; they practise how to use them in work, study or course contexts."},
        {q: "Can Luminovia design materials or a curriculum?", a: "Yes. Luminovia can support curriculum design, blended-learning concepts, slides, exercises, learning checks, labs, consulting documentation, AI use-case maps, roadmaps and training structures for academies, universities and corporate learning teams."},
        {q: "How does a booking request start?", a: "Send the topic, audience, learner level, project context, desired format, timeframe and target outcome by email or book a short appointment. Luminovia will suggest a suitable consulting, training or project format and next steps."},
    ],
};

const deHomeContent = {
    trustStats: [
        {value: "AI | IT | Security", label: "zentrale Kompetenzbereiche"},
        {value: "DE / EN", label: "Durchführung auf Deutsch und Englisch"},
        {value: "Remote-first", label: "für verteilte Organisationen"},
        {value: "Workshops bis Programme", label: "Formate von Briefings bis Enablement-Pfaden"},
    ],
    serviceOfferings: [
        {title: "AI & GenAI Training", description: "Praxisnahes Training zu generativer AI, Business Use Cases, Grenzen, Risiken und verantwortungsvoller Nutzung im Arbeitsalltag.", audience: "Unternehmen, Bildungsanbieter, Hochschulen und öffentliche Teams", format: "Remote-Live-Workshop, Trainingstag oder mehrtägiger Kurs", duration: "90 Minuten bis 3 Tage", outcomes: ["GenAI-Fähigkeiten und Grenzen verstehen", "realistische Use Cases erkennen", "Qualitäts- und Risikochecks anwenden"]},
        {title: "AI Literacy für Teams", description: "Eine klare Grundlage für Teams, die gemeinsame Sprache, praktische Sicherheit und sinnvolle AI-Nutzungsregeln brauchen.", audience: "Nicht-technische Teams, L&D, Führungskräfte und gemischte Lerngruppen", format: "Interaktiver Workshop oder internes Enablement-Programm", duration: "Halbtags bis 2 Tage", outcomes: ["AI-Tools sicherer nutzen", "schwache Outputs erkennen", "teamweite Nutzungsleitlinien entwickeln"]},
        {title: "Prompt Engineering & Agentic Workflows", description: "Strukturiertes Prompting, Workflow-Zerlegung und betreute agentische Arbeitsmuster für reale Business-Prozesse.", audience: "Knowledge Worker, Projektteams, AI Champions und Transformationsteams", format: "Hands-on-Workshop mit Workflow-Übungen", duration: "1 bis 3 Tage", outcomes: ["wiederholbare Prompts entwerfen", "agentenfähige Aufgaben strukturieren", "menschliche Review-Punkte definieren"]},
    ],
    faqs: [
        {q: "Wofür kann man Luminovia buchen?", a: "Luminovia bietet IT- und Business-Consulting, Trainingsprogramme, AI Governance, Cybersecurity Awareness, Software- und Datentraining, digitale Transformation und Curriculum Design. Typische Formate sind Consulting-Sprints, Workshops, Live-Online-Kurse, Keynotes, Enablement-Programme und Projektunterstützung."},
        {q: "Mit welchen Kundengruppen arbeitet Luminovia?", a: "Luminovia arbeitet mit Bildungsanbietern, Hochschulen, Corporate-Learning-Teams, Bootcamps, öffentlichen Organisationen, Startups, KMU und internationalen Bildungspartnern, die strukturierte Durchführung auf Deutsch oder Englisch brauchen."},
        {q: "Gibt es ganze Kurse oder nur kurze Workshops?", a: "Beides. Möglich sind 90-Minuten-Expert-Sessions, Halbtagesworkshops, Trainingstage, Consulting-Sprints, mehrtägige Intensivtrainings, mehrwöchige Kursdurchführung und größere Projektprogramme für professionelle Bildungsanbieter oder Organisationen."},
        {q: "Welche AI-Themen werden besonders häufig angefragt?", a: "Häufige Themen sind AI Literacy, GenAI für Teams, Prompt Engineering, Agentic Workflows, Responsible AI, AI Governance, Automatisierungsrisiken und praktische AI-Adoption für Business- oder Bildungskontexte."},
        {q: "Deckt Luminovia technische Themen wie Python, SQL oder Cybersecurity ab?", a: "Ja. Programme können Python, SQL, Datenbanken, APIs, Softwareentwicklungsgrundlagen, Cybersecurity Awareness, Web Security, SOC Basics, Ethical-Hacking-Grundlagen und prüfungsnahe Vorbereitungskontexte abdecken."},
        {q: "Gibt es Durchführung auf Deutsch oder Englisch?", a: "Ja. Trainings und Consulting-Formate können je nach Zielgruppe, Programmkontext und Stakeholdern auf Deutsch oder Englisch durchgeführt werden."},
        {q: "Wie funktioniert Remote-Durchführung?", a: "Remote-Durchführung wird nach Zielgruppe, Zeitzone und Format geplant. Luminovia unterstützt deutschsprachige und internationale Kunden in Europa, Australien und verteilten globalen Teams."},
        {q: "Was macht die Trainings praktisch?", a: "Sessions verbinden klare Lernziele, Beispiele, Übungen, Recaps, Aktivierung und Transferaufgaben. Teilnehmende hören nicht nur von Tools, sondern üben, wie sie diese in Arbeit, Studium oder Kurskontexten sinnvoll einsetzen."},
        {q: "Kann Luminovia Materialien oder ein Curriculum entwickeln?", a: "Ja. Luminovia unterstützt Curriculum Design, Blended-Learning-Konzepte, Slides, Übungen, Lernchecks, Labs, Consulting-Dokumentation, AI-Use-Case-Maps, Roadmaps und Trainingsstrukturen für Akademien, Hochschulen und Corporate-Learning-Teams."},
        {q: "Wie startet eine Buchungsanfrage?", a: "Senden Sie Thema, Zielgruppe, Wissensstand, Projektkontext, Wunschformat, Zeitraum und Ziel per E-Mail oder buchen Sie einen kurzen Termin. Danach schlägt Luminovia ein passendes Consulting-, Trainings- oder Projektformat und die nächsten Schritte vor."},
    ],
};

export function useHomeContent() {
    const {language} = useLanguage();
    return language === "de" ? deHomeContent : enHomeContent;
}

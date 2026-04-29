import {useLanguage} from "../i18n.jsx";

const enHomeContent = {
    trustStats: [
        {value: "10k+", label: "documented teaching hours"},
        {value: "4.7/5", label: "average learner rating"},
        {value: "DE / EN", label: "German and English delivery"},
        {value: "B.Sc. | M.Sc. | MBA", label: "business IT and management background"},
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
        {q: "What can I book you for?", a: "You can book me for AI, IT, cybersecurity, software development, business informatics, digital transformation and digital education training. Typical formats are lectures, live online courses, corporate workshops, keynotes and curriculum support."},
        {q: "Who do you usually work with?", a: "I work with training providers, universities, corporate learning teams, bootcamps, public-sector organisations, startups, SMEs and international education partners that need structured remote delivery in English or German."},
        {q: "Do you deliver full courses or only short workshops?", a: "Both. I can deliver 90-minute expert sessions, half-day workshops, full training days, multi-day intensives and multi-week course delivery for professional education providers."},
        {q: "Which AI topics are most requested?", a: "Common requests include AI literacy, GenAI for teams, prompt engineering, agentic workflows, responsible AI, AI governance, automation risks and practical AI adoption for business or education contexts."},
        {q: "Can you teach technical topics like Python, SQL or cybersecurity?", a: "Yes. I teach Python, SQL, databases, APIs, software development foundations, cybersecurity awareness, web security, SOC basics, ethical hacking foundations and CompTIA PenTest+ preparation contexts."},
        {q: "Do you teach in German or English?", a: "Yes. Training can be delivered in English or German. Spanish language experience is also part of my profile, but the primary training languages are English and German."},
        {q: "How does remote delivery from Brisbane work?", a: "Remote delivery is planned around the target audience and time zone. I regularly position remote live sessions for German-speaking and international clients across Europe, Australia and the world."},
        {q: "What makes your training practical?", a: "Sessions combine clear outcomes, examples, exercises, recaps, learner activation and transfer tasks. Participants do not only hear about tools; they practise how to use them in work, study or course contexts."},
        {q: "Can you design materials or a curriculum?", a: "Yes. I can support curriculum design, blended learning concepts, slides, exercises, learning checks, labs and training structures for academies, universities and corporate learning teams."},
        {q: "How do we start a booking request?", a: "Send the topic, audience, learner level, desired format, timeframe and outcome by email or book a short appointment. I will suggest a suitable format and next steps."},
    ],
};

const deHomeContent = {
    trustStats: [
        {value: "10k+", label: "dokumentierte Unterrichtsstunden"},
        {value: "4.7/5", label: "durchschnittliche Teilnehmerbewertung"},
        {value: "DE / EN", label: "Training auf Deutsch und Englisch"},
        {value: "B.Sc. | M.Sc. | MBA", label: "Wirtschaftsinformatik und Management"},
    ],
    serviceOfferings: [
        {title: "AI & GenAI Training", description: "Praxisnahes Training zu generativer AI, Business Use Cases, Grenzen, Risiken und verantwortungsvoller Nutzung im Arbeitsalltag.", audience: "Unternehmen, Bildungsanbieter, Hochschulen und öffentliche Teams", format: "Remote-Live-Workshop, Trainingstag oder mehrtägiger Kurs", duration: "90 Minuten bis 3 Tage", outcomes: ["GenAI-Fähigkeiten und Grenzen verstehen", "realistische Use Cases erkennen", "Qualitäts- und Risikochecks anwenden"]},
        {title: "AI Literacy für Teams", description: "Eine klare Grundlage für Teams, die gemeinsame Sprache, praktische Sicherheit und sinnvolle AI-Nutzungsregeln brauchen.", audience: "Nicht-technische Teams, L&D, Führungskräfte und gemischte Lerngruppen", format: "Interaktiver Workshop oder internes Enablement-Programm", duration: "Halbtags bis 2 Tage", outcomes: ["AI-Tools sicherer nutzen", "schwache Outputs erkennen", "teamweite Nutzungsleitlinien entwickeln"]},
        {title: "Prompt Engineering & Agentic Workflows", description: "Strukturiertes Prompting, Workflow-Zerlegung und betreute agentische Arbeitsmuster für reale Business-Prozesse.", audience: "Knowledge Worker, Projektteams, AI Champions und Transformationsteams", format: "Hands-on-Workshop mit Workflow-Übungen", duration: "1 bis 3 Tage", outcomes: ["wiederholbare Prompts entwerfen", "agentenfähige Aufgaben strukturieren", "menschliche Review-Punkte definieren"]},
    ],
    faqs: [
        {q: "Wofür kann man dich buchen?", a: "Buchbar bin ich für AI-, IT-, Cybersecurity-, Softwareentwicklungs-, Wirtschaftsinformatik-, Digital-Transformation- und Digital-Education-Trainings. Typische Formate sind Vorlesungen, Live-Online-Kurse, Corporate Workshops, Keynotes und Curriculum Support."},
        {q: "Mit welchen Kundengruppen arbeitest du?", a: "Ich arbeite mit Bildungsanbietern, Hochschulen, Corporate-Learning-Teams, Bootcamps, öffentlichen Organisationen, Startups, KMU und internationalen Bildungspartnern, die strukturierte Remote-Durchführung auf Deutsch oder Englisch brauchen."},
        {q: "Machst du ganze Kurse oder nur kurze Workshops?", a: "Beides. Möglich sind 90-Minuten-Expert-Sessions, Halbtagesworkshops, Trainingstage, mehrtägige Intensivtrainings und mehrwöchige Kursdurchführung für professionelle Bildungsanbieter."},
        {q: "Welche AI-Themen werden besonders häufig angefragt?", a: "Häufige Themen sind AI Literacy, GenAI für Teams, Prompt Engineering, Agentic Workflows, Responsible AI, AI Governance, Automatisierungsrisiken und praktische AI-Adoption für Business- oder Bildungskontexte."},
        {q: "Unterrichtest du technische Themen wie Python, SQL oder Cybersecurity?", a: "Ja. Ich unterrichte Python, SQL, Datenbanken, APIs, Softwareentwicklungsgrundlagen, Cybersecurity Awareness, Web Security, SOC Basics, Ethical-Hacking-Grundlagen und CompTIA-PenTest+-Vorbereitungskontexte."},
        {q: "Unterrichtest du auf Deutsch oder Englisch?", a: "Ja. Trainings können auf Deutsch oder Englisch durchgeführt werden. Spanisch-Erfahrung gehört ebenfalls zum Profil, die primären Trainingssprachen sind aber Deutsch und Englisch."},
        {q: "Wie funktioniert Remote-Unterricht aus Brisbane?", a: "Remote-Durchführung wird nach Zielgruppe und Zeitzone geplant. Ich positioniere Live-Online-Trainings für deutschsprachige und internationale Kunden für Europa, Australien und die Welt."},
        {q: "Was macht deine Trainings praktisch?", a: "Sessions verbinden klare Lernziele, Beispiele, Übungen, Recaps, Aktivierung und Transferaufgaben. Teilnehmende hören nicht nur von Tools, sondern üben, wie sie diese in Arbeit, Studium oder Kurskontexten sinnvoll einsetzen."},
        {q: "Kannst du Materialien oder ein Curriculum entwickeln?", a: "Ja. Ich kann Curriculum Design, Blended-Learning-Konzepte, Slides, Übungen, Lernchecks, Labs und Trainingsstrukturen für Akademien, Hochschulen und Corporate-Learning-Teams unterstützen."},
        {q: "Wie startet eine Buchungsanfrage?", a: "Senden Sie Thema, Zielgruppe, Wissensstand, Wunschformat, Zeitraum und Ziel per E-Mail oder buchen Sie einen kurzen Termin. Danach schlage ich ein passendes Format und die nächsten Schritte vor."},
    ],
};

export function useHomeContent() {
    const {language} = useLanguage();
    return language === "de" ? deHomeContent : enHomeContent;
}

export const seoHomeFaqs = enHomeContent.faqs;

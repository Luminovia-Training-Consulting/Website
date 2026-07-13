import {useLanguage} from "../i18n.jsx";
import {
    audienceCards as enAudienceCards,
    capabilities as enCapabilities,
    coreOffers as enCoreOffers,
    faqs as enFaqs,
    featuredTrainingTopics as enFeaturedTrainingTopics,
    formats as enFormats,
    formerClients as enFormerClients,
    selectedProjects as enSelectedProjects,
    serviceOfferings as enServiceOfferings,
    skillGroups as enSkillGroups,
    softwareProjects as enSoftwareProjects,
    teachingProof as enTeachingProof,
    testimonialProof as enTestimonialProof,
    timeline as enTimeline,
    trainingTopics as enTrainingTopics,
    trustSignals as enTrustSignals,
    trustStats as enTrustStats,
} from "./content.js";

const deFormerClientCopy = {
    "AI certification training": {
        type: "AI-Zertifizierungstraining",
        work: "AI-CERTs-Kurse und zertifizierungsorientiertes AI-Training.",
    },
    "IT retraining and professional education": {
        type: "IT-Umschulung und Weiterbildung",
        work: "Fortbildungs- und Umschulungsdurchführung für Fachinformatiker-Lernende.",
    },
    "Higher education": {
        type: "Hochschule",
        work: "Kurse rund um Softwareentwicklung und angewandte digitale Bildung.",
    },
    "Software, mobile and game development": {
        type: "Software-, Mobile- und Spieleentwicklung",
        work: "Kurse zu Softwareentwicklung, Mobile Development und Unity-Spieleentwicklung.",
    },
    "Cybersecurity training": {
        type: "Cybersecurity-Training",
        work: "Kursdurchführung mit Fokus auf Ethical Hacking und CompTIA PenTest+.",
    },
    "Digital business education": {
        type: "Digitale Business-Bildung",
        work: "Breite Weiterbildungsformate rund um digitale, betriebswirtschaftliche und IT-nahe Themen.",
    },
    "IT seminars and funded training": {
        type: "IT-Seminare und geförderte Weiterbildung",
        work: "Professionelle Trainings zu Projektmanagement, Datenbanken und Softwareentwicklung.",
    },
    "Software and AI courses": {
        type: "Software- und AI-Kurse",
        work: "Softwareentwicklungs- und AI-Kurse für Weiterbildung und Umschulung.",
    },
    "Research assistance": {
        type: "Forschungsassistenz",
        work: "Senior-Research-Assistant-Tätigkeit im Bereich Agentic AI.",
    },
    "Bundeswehr ZAW education": {
        type: "Bundeswehr-ZAW-Bildung",
        work: "IT-nahe Lehre für Bachelor-Professional- und Master-Professional-Wege.",
    },
    "Apprentice training": {
        type: "Azubi-Weiterbildung",
        work: "Azubi-Weiterbildung und Fortbildung in verschiedenen IT- und Berufsbildungsformaten.",
    },
    "Current Scrum training": {
        type: "Aktuelles Scrum-Training",
        work: "Scrum- und Agile-Training für professionelle Teams.",
    },
};

const deSelectedProjects = [
    {title: "Digitale Bildungssysteme", tag: "Instructional Design", stack: "ADDIE | Blended Learning | Erwachsenenbildung", copy: "Kurskonzepte, praktische Labs, Lernchecks und strukturierte Lernpfade für IT-, Business- und AI-Bildungsanbieter.", link: enSelectedProjects[0].link},
    {title: "Cybersecurity Learning Labs", tag: "Lehrnachweis", stack: "TryHackMe | SOC | Web Security | Pentest+", copy: "Praktische Security-Lernpfade für Web Security, SOC-Grundlagen und Penetration-Testing-Basics.", link: enSelectedProjects[1].link},
    {title: "PISMA Literature Review Pipeline", tag: "AI-Research-Automatisierung", stack: "Python | AI | Research Tooling | Datenpipelines", copy: "Research-Workflow-Projekt für akademische Suche, Paper-Ranking, Abstract-Analyse und strukturierte Literaturreview-Daten.", link: enSelectedProjects[2].link},
    {title: "AI at Work Research", tag: "AI-Adoption und HCI", stack: "Systematisches Literaturreview | AI-Adoption | Mensch-Maschine-Interaktion", copy: "Research zu Chancen und Risiken generativer AI-Tools in Organisationen, besonders zur Mensch-Maschine-Interaktion im Arbeitsalltag.", link: enSelectedProjects[3].link},
];

const deSoftwareProjects = [
    {name: "Automatic Mail Sender System", type: "Python-Automatisierung", status: "Aktualisiert Apr. 2026", description: "SMTP-basiertes Outreach-Automationssystem für Empfängerlisten, Templates und Versandworkflows.", stack: ["Python", "SMTP", "Automatisierung", "GUI"], href: enSoftwareProjects[0].href},
    {name: "PISMA Literature Review Pipeline", type: "AI-Research-Automatisierung", status: "Aktualisiert Apr. 2026", description: "AI-gestützter Literaturreview-Workflow für akademische Suche, Citation Expansion und Titel-/Abstract-Relevanzanalyse.", stack: ["Python", "AI", "Research", "Datenpipelines"], href: enSoftwareProjects[1].href},
    {name: "OneDrive Duplicate Cleaner", type: "Datenbereinigungs-Notebook", status: "Aktualisiert März 2026", description: "Notebook-Utility zur Bereinigung doppelter Dateien und zur Reduktion manueller OneDrive-Wartung.", stack: ["Jupyter Notebook", "Python", "File Cleanup"], href: enSoftwareProjects[2].href},
    {name: "Skylife", type: "Minecraft / PaperMC Plugin", status: "Aktualisiert Feb. 2026", description: "Umfangreiches PaperMC-PvP-Minispiel mit Lobby-to-Match-Flow, Loadouts, Ranking-UI, Coin-Rewards und Spielerprogression.", stack: ["Kotlin", "PaperMC", "Minecraft", "Game Systems"], href: enSoftwareProjects[3].href},
    {name: "theHunter", type: "Kotlin-Plugin-Recode", status: "Aktualisiert Juli 2025", description: "Überarbeiteter Kotlin-Recode eines theHunter-Plugins mit Game-Plugin-Architektur und Kotlin-Migrationsarbeit.", stack: ["Kotlin", "Pluginentwicklung", "Game Logic"], href: enSoftwareProjects[4].href},
    {name: "Soundboardz", type: "Android-App", status: "Archivprojekt", description: "Android-Soundboard-App und Beispiel für Mobile-Kotlin-Entwicklung aus früherer Portfolioarbeit.", stack: ["Kotlin", "Android", "Mobile App"], href: enSoftwareProjects[5].href},
    {name: "Color Sweaper", type: "Java-Desktopspiel", status: "Archivprojekt", description: "Swing-basiertes Minigame als ältere Java-Desktop-UI- und Game-Logic-Praxis.", stack: ["Java", "Swing", "Spieleentwicklung"], href: enSoftwareProjects[6].href},
    {name: "Remote Client Server", type: "Minecraft Remote Tooling", status: "Archivprojekt", description: "Remote-Access-Tooling für Minecraft-Paper-Umgebungen aus früherer Server- und Plugin-Experimentierarbeit.", stack: ["Kotlin", "Paper", "Remote Tooling"], href: enSoftwareProjects[7].href},
];

const deTimeline = [
    {year: "2021", title: "IT-Security-Lerninhalte", copy: "Didaktische IT-Security-Inhalte für KMU im Projekt KMUeinfachSicher an der Universität Paderborn."},
    {year: "2022-2023", title: "Bildung und Moderation", copy: "Cyber-Lerngrundlagen aufgebaut und Bildungsworkshops sowie Moderation bei SCHLAU NRW unterstützt."},
    {year: "2023-2024", title: "Entrepreneurship und Lerndesign", copy: "Top Talent Programme und garage33 mit Design Thinking, Lean Startup, Pitching und agilen Arbeitsmethoden."},
    {year: "2025", title: "Akademisches Business-IT-Profil", copy: "B.Sc. und M.Sc. mit Fokus auf AI, Daten, HCI, IT-Management und Digitalisierung abgeschlossen."},
    {year: "2026", title: "Luminovia Remote-first Delivery Model", copy: "MBA ohne Major im April abgeschlossen, Certificate IV in Training and Assessment TAE40122 im Juni bei RAM Training Services abgeschlossen und Luminovia für strukturierte Trainings- und Consulting-Durchführung in Europa, Australien und internationalen Teams positioniert."},
];

const de = {
    trustStats: [
        {value: "AI | IT | Security", label: "zentrale Kompetenzbereiche"},
        {value: "DE / EN", label: "Durchführung auf Deutsch und Englisch"},
        {value: "Remote-first", label: "für verteilte Organisationen"},
        {value: "Workshops bis Programme", label: "Formate von Briefings bis Enablement-Pfaden"},
    ],
    coreOffers: [
        {
            ...enCoreOffers[0],
            kicker: "Corporate Training",
            title: "AI- & Digital-Skills-Workshops",
            outcome: "Aus AI-Unsicherheit wird praktische Handlungskompetenz.",
            copy: "Für Unternehmen, die generative AI verstehen, produktiv einsetzen, Risiken bewerten und Workflows verbessern wollen, ohne Qualität oder Kontrolle zu verlieren.",
            deliverables: ["AI Literacy und verantwortungsvolle Nutzung", "Prompt Engineering für Office- und Fachworkflows", "Praxisübungen für reale Business-Szenarien", "Workflow-Vorlagen und Checklisten", "Optionales Executive Briefing"],
            bestFor: "Unternehmen, öffentliche Teams, Bildungsanbieter, KMU",
        },
        {
            ...enCoreOffers[1],
            kicker: "Training Delivery",
            title: "IT- & Business-Kurse",
            outcome: "Strukturierte Lehre für Erwachsene und berufliche Weiterbildung.",
            copy: "Remote-first Kursdurchführung für Bildungsanbieter, Akademien, Hochschulen, Bootcamps und geförderte Weiterbildungen, die klare und praxisnahe Lehre brauchen.",
            deliverables: ["Python, SQL, Datenbanken, AI, Cloud und Cybersecurity", "Theorieblöcke kombiniert mit Hands-on-Übungen", "Lernchecks, Recaps und Transferaufgaben", "Vorbereitete Materialien, Labs und Lernpfade", "Deutsch oder Englisch für gemischte Level"],
            bestFor: "Bildungsanbieter, Hochschulen, Akademien, Erwachsenenbildung",
        },
        {
            ...enCoreOffers[2],
            kicker: "Talks & Vorträge",
            title: "Keynotes, Expert Talks & Gastvorträge",
            outcome: "Klare moderne Vorträge zu IT-Security und digitaler Transformation.",
            copy: "Für Events, interne Lerntage, Leadership-Meetings und Bildungsformate, die komplexe Technologie verständlich und businessnah brauchen.",
            deliverables: ["AI im Business: Chancen, Grenzen und Risiken", "Responsible AI und Governance im Arbeitsalltag", "Cybersecurity Awareness für nicht-technische Teams", "Digitale Transformation und Future Skills", "Individuelle Talk-Konzeption"],
            bestFor: "Konferenzen, Business Events, Schulen, Hochschulen, interne Events",
        },
    ],
    formats: [
        {title: "90-Minuten-Impulsvortrag", label: "Schnelle Orientierung", copy: "Ideal für Management-Briefings, interne Lerntage oder Events, bei denen ein klarer Überblick und nächste Schritte gebraucht werden."},
        {title: "Halbtages- / Tagesworkshop", label: "Praxisfokus", copy: "Für Teams, die mit Tools, Vorlagen, Workflows und genug Sicherheit für die direkte Anwendung rausgehen sollen."},
        {title: "2-5 Tage Intensivtraining", label: "Skill-Aufbau", copy: "Für tieferes Upskilling in AI, Python, SQL, Cybersecurity, Cloud Basics, Business IT oder digitaler Transformation."},
        {title: "Mehrwöchige Kursdurchführung", label: "Bildungsanbieter-Format", copy: "Strukturierte Durchführung für Akademien, Online-Anbieter, berufliche Bildung, Bootcamps und Weiterbildungsprogramme."},
        {title: "Curriculum & Materialdesign", label: "Instructional Design", copy: "Konzeption von Kursplänen, Übungen, Lernchecks, Slides, Labs und verständlicher Dokumentation."},
        {title: "Prüfungs- / Zertifikatsvorbereitung", label: "Gezielte Vorbereitung", copy: "Fokussierte Vorbereitung auf Cybersecurity-, AI-, Programmier- oder Business-IT-Themen mit Übungen und Feedback."},
    ],
    trainingTopics: [
        {group: "AI & Zukunftskompetenzen", items: ["AI Literacy", "Prompt Engineering", "Generative AI Workflows", "Responsible AI", "AI Governance Basics", "AI für Office-Produktivitaet"]},
        {group: "Software & Daten", items: ["Java / Python / C# / Kotlin", "SQL und Datenbanken", "APIs und Automatisierung", "Data Analyst / Scientist / Engineer", "Big-Data-Konzepte", "UI/UX-Grundlagen"]},
        {group: "Cybersecurity", items: ["Cybersecurity Awareness", "Web Security", "SOC-Grundlagen", "CompTIA PenTest+ Vorbereitung", "Ethical-Hacking-Grundlagen", "Passwort- und Datensicherheit"]},
        {group: "Business IT", items: ["Wirtschaftsinformatik", "IT Service Management", "Cloud-Konzepte", "Digitale Transformation", "SCRUM und agiles Arbeiten", "Prozessoptimierung"]},
        {group: "Berufliche Bildung & IHK", items: ["Fachinformatiker Ausbildung", "Fachinformatiker Umschulung", "Bürokaufleute / Büromanagement", "Teilqualifikation", "IHK Prüfungsvorbereitung", "Erwachsenenbildung"]},
        {group: "Recht, Coaching & Vortraege", items: ["Digitales Recht und DSGVO", "AI Act und Cloud Act", "IT-Recht Awareness", "Coaching", "Keynote Speaker", "Gastvorträge"]},
    ],
    serviceOfferings: [
        {title: "AI & GenAI Training", description: "Praxisnahes Training zu generativer KI, geeigneten Anwendungsfällen, Grenzen, Risiken und verantwortungsvoller Nutzung im Arbeitsalltag.", audience: "Unternehmen, Bildungsanbieter, Hochschulen und öffentliche Teams", format: "Remote-Live-Workshop, Trainingstag oder mehrtägiger Kurs", duration: "90 Minuten bis 3 Tage", outcomes: ["Fähigkeiten und Grenzen generativer KI verstehen", "realistische Anwendungsfälle erkennen", "Qualitäts- und Risikoprüfungen anwenden"]},
        {title: "AI Literacy für Teams", description: "Eine gemeinsame Grundlage für Teams, die KI-Werkzeuge sicher einsetzen und verbindliche Regeln für deren Nutzung entwickeln wollen.", audience: "Nicht-technische Teams, Personalentwicklung, Führungskräfte und gemischte Lerngruppen", format: "Interaktiver Workshop oder internes Kompetenzprogramm", duration: "Halbtags bis 2 Tage", outcomes: ["KI-Werkzeuge sicherer nutzen", "unzuverlässige Ergebnisse erkennen", "gemeinsame Nutzungsleitlinien entwickeln"]},
        {title: "Prompt Engineering & Agentische Workflows", description: "Strukturiertes Prompting, klare Aufgabenzerlegung und betreute agentische Abläufe für reale Geschäftsprozesse.", audience: "Wissensarbeitende, Projektteams, KI-Verantwortliche und Transformationsteams", format: "Praxisworkshop mit Ablaufübungen", duration: "1 bis 3 Tage", outcomes: ["wiederholbare Prompts entwerfen", "agentenfähige Aufgaben strukturieren", "menschliche Prüfpunkte definieren"]},
        {title: "AI Governance & Responsible AI", description: "Training zu Verantwortlichkeit, Risikoklassen, Datenhandhabung, menschlicher Aufsicht und praktischen Governance-Routinen.", audience: "Leadership, PMOs, Compliance-nahe Teams und Bildungseinrichtungen", format: "Executive Briefing, Workshop oder Governance-Training", duration: "90 Minuten bis 2 Tage", outcomes: ["AI-Risiken klarer bewerten", "Governance-Verantwortung definieren", "praktische Review-Routinen aufbauen"]},
        {title: "Python, SQL & Datenkompetenz", description: "Angewandtes Programmier- und Datentraining für Automatisierung, Analyse und Datenbanken.", audience: "Erwachsene Lernende, Bootcamps, Umschulungen und interne Upskilling-Gruppen", format: "Live-Kurs, Bootcamp, Lab-Serie oder Prüfungsvorbereitung", duration: "2 Tage bis mehrwöchiger Kurs", outcomes: ["einfache Skripte schreiben", "Daten abfragen und modellieren", "Praxisvertrauen durch Übungen aufbauen"]},
        {title: "Softwareentwicklung & APIs", description: "Grundlagen und angewandte Trainings zu Programmierung, API-Denken, Backend-Konzepten und Softwareprojekt-Struktur.", audience: "Fachinformatiker-Kohorten, Coding Schools, Junior Developer und Business-IT-Lernende", format: "Kursdurchführung, Lab-Training oder Projektworkshop", duration: "2 Tage bis mehrwöchiger Kurs", outcomes: ["Softwarearchitektur-Grundlagen verstehen", "mit APIs arbeiten", "Code mit realen Workflows verbinden"]},
        {title: "Fachinformatiker Ausbildung & Umschulung", description: "IHK-nahes Training für Fachinformatiker-Lernende zu Softwareentwicklung, Systemen, Netzwerken, Datenbanken, Security, IT-Projekten und Prüfungsvorbereitung.", audience: "AZAV-Anbieter, Auszubildende, Umschulungskohorten, Berufsschulen und IHK-nahe Programme", format: "Moduldurchführung, Teilqualifikation, Projektcoaching oder Prüfungsvorbereitung", duration: "Einzelmodul bis mehrwöchige Durchführung", outcomes: ["IHK-nahe IT-Lernfelder abdecken", "Projektdokumentation vorbereiten", "Prüfungs- und Berufsfähigkeit stärken"]},
        {title: "Bürokaufleute & Büromanagement IHK", description: "Training für Kaufmann/Kauffrau für Büromanagement, Bürokaufleute und Office-Management-Lernende rund um Geschäftsprozesse, Kommunikation und digitale Büroarbeit.", audience: "Office-Management-Lernende, kaufmännische Umschulungen, Teilqualifikationsgruppen und Bildungsanbieter", format: "Kursdurchführung, Prüfungsvorbereitung, digitaler Office-Workshop oder Geschäftsprozess-Modul", duration: "Einzeltermine bis mehrwöchige Begleitung", outcomes: ["Büro- und Geschäftsprozesse verstehen", "digitale Tools verantwortungsvoll nutzen", "IHK-nahe Fallaufgaben vorbereiten"]},
        {
            title: "Cybersecurity & Pentesting-Grundlagen",
            description: "Sicherheitsbewusstsein und technische Grundlagen für Websicherheit, ethisches Hacking, SOC-Arbeit und defensive Denkweisen.",
            audience: "IT-Lernende, Umschulungsanbieter, Unternehmen und gemischte technische Gruppen",
            format: "Remote-Live-Training, Lab-Kurs oder Zertifikatsvorbereitung",
            duration: "1 Tag bis mehrwöchiger Kurs",
            outcomes: ["häufige Angriffspfade erkennen", "sichere Arbeitsgewohnheiten anwenden", "Pentesting- und SOC-Grundlagen verstehen"]
        },
        {title: "Scrum, Agile & digitale Projektarbeit", description: "Praktisches Projektarbeitstraining für klarere Zusammenarbeit, Delivery-Struktur und AI-bewusste Koordination.", audience: "Projektteams, Auszubildende, KMU, Bildungsanbieter und digitale Teams", format: "Workshop, Trainingstag oder angewandtes Projekt-Lab", duration: "Halbtags bis 2 Tage", outcomes: ["agile Begriffe korrekt nutzen", "Arbeit sichtbar strukturieren", "Kommunikation und Reviews verbessern"]},
        {title: "Digitales Recht, DSGVO & AI Act Awareness", description: "Awareness-Training zu Arbeitsrecht-, Wirtschaftsrecht-, Privatrecht- und IT-Recht-Schnittstellen, DSGVO/GDPR, AI Act, Cloud Act und digitalen Compliance-Fragen.", audience: "AI-Adoption-Teams, Bildungsanbieter, Projektteams, Öffentliche Organisationen und Nicht-Juristinnen", format: "Awareness-Training, Executive Briefing, Workshop oder compliance-nahes Lernmodul", duration: "90 Minuten bis 2 Tage", outcomes: ["rechtliche Risikofragen erkennen", "Governance mit Datenschutz verbinden", "wissen, wann juristische Prüfung nötig ist"]},
        {title: "Wirtschaftsinformatik & digitale Transformation", description: "Business-IT-Training zu Prozessen, Systemen, Daten, IT-Management und organisatorischem Wandel.", audience: "Hochschulen, Akademien, Unternehmen und berufliche Weiterbildung", format: "Vorlesungsreihe, Moduldurchführung oder Corporate Workshop", duration: "1 Tag bis mehrwöchiges Modul", outcomes: ["IT- und Business-Entscheidungen verbinden", "digitale Prozesse analysieren", "Transformations-Trade-offs verstehen"]},
        {
            title: "Curriculum Design & Blended Learning",
            description: "Konzeption von Lernpfaden, Übungen, Präsentationen, Praxislaboren, Lernkontrollen und verzahnten Online- und Präsenzformaten.",
            audience: "Bildungsanbieter, Hochschulen, Bootcamps und Corporate Learning Teams",
            format: "Beratungssprint, Curriculum-Workshop oder Materialentwicklung",
            duration: "1 Tag bis projektbasierte Begleitung",
            outcomes: ["strukturierte Kurspläne entwickeln", "Lernaktivierung verbessern", "Materialien an Outcomes ausrichten"]
        },
        {title: "Coaching, Keynotes & Expert Talks", description: "Coaching, Keynotes, Gastvorträge und Expert Talks zu IT, Cybersecurity, Wirtschaftsinformatik, digitaler Transformation, digitalem Recht und moderner Bildung.", audience: "Unternehmen, Hochschulen, Konferenzen, Leadership-Teams, Bildungsanbieter und Veranstalterinnen", format: "Keynote, Expert Talk, Gastvortrag, Coaching Session, Leadership Briefing oder Panel Input", duration: "30 Minuten bis Tagesformat", outcomes: ["komplexe Themen verständlich machen", "klare nächste Schritte geben", "Führungskräfte, Trainerinnen und Teams unterstützen"]},
    ],
    featuredTrainingTopics: [],
    trustSignals: [
        {title: "Akademischer Hintergrund", copy: "B.Sc. und M.Sc. in Wirtschaftsinformatik sowie MBA ohne Major, abgeschlossen im April 2026."},
        {title: "Unternehmensmodell", copy: "Remote-first Training und Consulting mit strukturierter Vorbereitung, klaren Materialien und praxisnahen Ergebnissen."},
        {title: "Australische Trainingsqualifikation", copy: "Certificate IV in Training and Assessment TAE40122, abgeschlossen bei RAM Training Services im Juni 2026."},
        {title: "Expertisebereiche", copy: "AI, Cybersecurity, Softwareentwicklung, Wirtschaftsinformatik, Daten, agile Arbeit und digitale Bildung."},
        {title: "Sprachen", copy: "Training auf Deutsch und Englisch, ergänzt durch Spanisch-Erfahrung."},
        {title: "Remote-first", copy: "Live-Online-Training und Consulting für deutschsprachige und internationale Organisationen."},
        {title: "Sektor-Fit", copy: "Erfahrung mit Corporate Training, Hochschulen, Umschulung, Bootcamps und professionellen Akademien."},
    ],
    capabilities: ["AI Literacy", "Prompt Engineering", "Generative AI Workflows", "Responsible AI", "AI Governance", "Python", "Java", "C#", "Kotlin", "SQL", "Datenbanken", "APIs & Automatisierung", "Fachinformatiker", "Bürokaufleute", "Data Analyst", "Data Scientist", "Data Engineer", "Cybersecurity Awareness", "Web Security", "SOC-Grundlagen", "CompTIA PenTest+ Vorbereitung", "Ethical Hacking", "DSGVO", "AI Act", "Cloud Act", "IT-Recht Awareness", "Cloud-Konzepte", "Wirtschaftsinformatik", "IT Service Management", "Digitale Transformation", "SCRUM", "Projektmanagement", "New Work", "Blended Learning", "Curriculum Design", "Erwachsenenbildung", "Coaching", "Keynote Speaker"],
    teachingProof: [
        {title: "Zertifizierte IT-Dozentin", value: "DiBak Trainer Certification", copy: "Umfasst Didaktik, Pädagogik, Lernplattformen, Materialerstellung, Lernchecks, technisches Troubleshooting und Qualitätssicherung."},
        {title: "Australisches VET-Training", value: "TAE40122 Certificate IV", copy: "Certificate IV in Training and Assessment bei RAM Training Services im Juni 2026 abgeschlossen."},
        {title: "Lieferqualität", value: "Strukturierte Formate", copy: "Trainingsformate werden um klare Ziele, praktische Übungen, Transferaufgaben und professionelle Vorbereitung gebaut."},
        {title: "Stärke in Erwachsenenbildung", value: "Theorie + Praxis", copy: "Lernformate mit Beispielen, Übungen, Recaps, Aktivierung, Transferaufgaben und klaren Ergebnissen."},
        {title: "Internationale Durchführung", value: "Remote-first", copy: "Sitz in Brisbane, Online-Trainings für Europa, Australien und die Welt auf Deutsch oder Englisch."},
    ],
    audienceCards: [
        {title: "Bildungsanbieter", copy: "Zuverlässige Remote-Dozentin für strukturierte IT-, Cybersecurity- und Business-Technology-Kurse mit Erwachsenen.", bullets: ["mehrwöchige Kurse", "klare Materialstruktur", "Lernaktivierung", "Deutsch / Englisch"]},
        {title: "Hochschulen", copy: "Gastvorträge und Future-Skills-Formate mit akademischer Glaubwürdigkeit und praktischen Beispielen.", bullets: ["Gastvorträge", "AI und Digitalisierung", "verständliche Erklärungen", "moderne Lernformate"]},
        {title: "Corporate-Learning-Teams", copy: "Praxisnahes Upskilling für Teams, die AI, Daten, Automatisierung oder Cybersecurity sicherer im Alltag einsetzen wollen.", bullets: ["Team-Workshops", "Hands-on-Workflows", "Risikobewusstsein", "Transfer"]},
        {title: "Öffentliche Organisationen", copy: "Klare digitale Kompetenzentwicklung für Teams mit Bedarf an Responsible AI, Security Awareness und Prozessverständnis.", bullets: ["Responsible AI", "Datenbewusstsein", "Governance", "zugänglich"]},
        {title: "Startups & KMU", copy: "Fokussierte Trainings für kleinere Teams, die digitale Skills ohne schwerfällige Enterprise-Formate brauchen.", bullets: ["kompakt", "businessnah", "Tool-Sicherheit", "direkt anwendbar"]},
        {title: "Bootcamps & Coding-Schulen", copy: "Kursdurchführung und Lab-Support für Python, SQL, APIs, Softwareentwicklung und Cybersecurity-Grundlagen.", bullets: ["Hands-on-Labs", "Lernsupport", "Coding-Praxis", "Prüfungsvorbereitung"]},
        {title: "DACH-Bildungsanbieter", copy: "Remote-Dozentin für deutsche, schweizerische und österreichische Anbieter, die professionelle deutschsprachige Lehre brauchen.", bullets: ["deutsche Durchführung", "Remote-Kursraum", "Europa-Zeiten", "Bildungssektor"]},
        {title: "Internationale Kunden", copy: "Englische oder deutsche Durchführung für verteilte Teams und Bildungspartner für Europa, Australien und die Welt.", bullets: ["EN / DE", "zeitzonenbewusst", "remote-first", "international"]},
    ],
    selectedProjects: deSelectedProjects,
    formerClients: enFormerClients.map((client) => ({
        ...client,
        type: deFormerClientCopy[client.type]?.type || client.type,
        work: deFormerClientCopy[client.type]?.work || client.work,
    })),
    testimonialProof: [
        {title: "Vertrauen von Bildungsanbietern", quote: "Wiederholte Buchungen in Weiterbildung, Umschulung, Akademien und Hochschulen zeigen, dass strukturierte Luminovia-Formate in der Erwachsenenbildung funktionieren."},
        {title: "Breit genug für gemischte IT-Gruppen", quote: "Von Fachinformatiker-Kohorten bis AI-Zertifikatsgruppen können Tiefe, Tempo und Beispiele an die Gruppe angepasst werden."},
        {title: "Praxis statt Folienvorlesen", quote: "Luminovia-Formate fokussieren Übungen, Implementation Thinking, Lernaktivierung und klaren Transfer in Arbeit oder Prüfung."},
    ],
    skillGroups: [
        {group: "Didaktik und Lerndesign", items: ["Erwachsenenbildung", "Curriculum Design", "Blended Learning", "Prüfungsvorbereitung", "Lernaktivierung", "Workshop-Facilitation", "Materialdesign", "Remote Delivery"]},
        {group: "AI und Automatisierung", items: ["AI Literacy", "Prompt Engineering", "Agentic AI", "Generative AI Workflows", "Responsible AI", "AI Governance Basics", "LangChain-Konzepte", "Research Automation"]},
        {group: "Softwareentwicklung", items: ["Python", "Java", "Kotlin", "C#", "Rust", "Dart", "Flutter", "Android", "APIs", "Microservices", "Spring", "React-Grundlagen"]},
        {group: "Daten und Systeme", items: ["SQL", "MySQL", "MongoDB", "Redis", "Datenmodellierung", "Data Pipelines", "Docker", "Kubernetes", "Ubuntu", "Cloud-Konzepte"]},
        {group: "Cybersecurity", items: ["Security Awareness", "Ethical-Hacking-Grundlagen", "CompTIA PenTest+ Vorbereitung", "Web Security", "SOC-Grundlagen", "Kali Linux", "Passwortsicherheit", "Risikokommunikation"]},
        {group: "Business und Management", items: ["Digitale Transformation", "Wirtschaftsinformatik", "Projektmanagement", "SCRUM", "IT Service Management", "Prozessoptimierung", "Entrepreneurship", "Stakeholder-Kommunikation"]},
        {group: "Berufliche Bildung, Recht und Vortraege", items: ["Fachinformatiker Ausbildung", "Fachinformatiker Umschulung", "Bürokaufleute", "DSGVO", "AI Act", "Cloud Act", "IT-Recht Awareness", "Coaching", "Keynote Speaker", "Gastvorträge"]},
        {group: "Kreativ- und Webtools", items: ["WordPress", "Elementor", "Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Audition", "UI/UX-Grundlagen"]},
        {group: "Sprachen und Kommunikation", items: ["Deutsch", "Englisch", "Spanisch-Grundlagen", "Technische Erklärung", "Akademisches Schreiben", "Business-Kommunikation", "Präsentation", "Public Speaking"]},
    ],
    softwareProjects: deSoftwareProjects,
    timeline: deTimeline,
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

de.featuredTrainingTopics = de.serviceOfferings.filter((service) => [
    "AI Literacy für Teams",
    "Python, SQL & Datenkompetenz",
    "Cybersecurity & Pentesting-Grundlagen",
    "Prompt Engineering & Agentische Workflows",
    "Scrum, Agile & digitale Projektarbeit",
    "AI Governance & Responsible AI",
].includes(service.title));

export function localizedSiteContentForLanguage(language) {
    if (language === "de") return de;

    return {
        trustStats: enTrustStats,
        coreOffers: enCoreOffers,
        formats: enFormats,
        trainingTopics: enTrainingTopics,
        serviceOfferings: enServiceOfferings,
        featuredTrainingTopics: enFeaturedTrainingTopics,
        trustSignals: enTrustSignals,
        capabilities: enCapabilities,
        audienceCards: enAudienceCards,
        teachingProof: enTeachingProof,
        selectedProjects: enSelectedProjects,
        formerClients: enFormerClients,
        testimonialProof: enTestimonialProof,
        skillGroups: enSkillGroups,
        softwareProjects: enSoftwareProjects,
        timeline: enTimeline,
        faqs: enFaqs,
    };
}

export function useSiteContent() {
    const {language} = useLanguage();
    return localizedSiteContentForLanguage(language);
}


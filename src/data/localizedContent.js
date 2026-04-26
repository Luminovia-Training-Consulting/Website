import {useLanguage} from "../i18n.jsx";
import {
    audienceCards as enAudienceCards,
    blogPosts as enBlogPosts,
    capabilities as enCapabilities,
    coreOffers as enCoreOffers,
    credentialCategories as enCredentialCategories,
    credentials as enCredentials,
    faqs as enFaqs,
    featuredTrainingTopics as enFeaturedTrainingTopics,
    formats as enFormats,
    formerClients as enFormerClients,
    lifeMilestones as enLifeMilestones,
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

const de = {
    trustStats: [
        {value: "150+", label: "dokumentierte Unterrichtsstunden"},
        {value: "4.7/5", label: "durchschnittliche Teilnehmerbewertung"},
        {value: "DE / EN", label: "Training auf Deutsch und Englisch"},
        {value: "B.Sc. · M.Sc. · MBA", label: "Wirtschaftsinformatik und Management"},
    ],
    coreOffers: [
        {
            ...enCoreOffers[0],
            kicker: "Corporate Training",
            title: "AI & Digital Skills Workshops",
            outcome: "Aus AI-Unsicherheit wird praktische Handlungskompetenz.",
            copy: "Für Unternehmen, die generative AI verstehen, produktiv einsetzen, Risiken bewerten und Workflows verbessern wollen, ohne Qualität oder Kontrolle zu verlieren.",
            deliverables: ["AI Literacy und verantwortungsvolle Nutzung", "Prompt Engineering für Office- und Fachworkflows", "Praxisübungen für reale Business-Szenarien", "Workflow-Vorlagen und Checklisten", "Optionales Executive Briefing"],
            bestFor: "Unternehmen, öffentliche Teams, Bildungsanbieter, KMU",
        },
        {
            ...enCoreOffers[1],
            kicker: "Freelance Dozentin",
            title: "IT-, AI- & Business-Kurse",
            outcome: "Strukturierte Lehre für Erwachsene und berufliche Weiterbildung.",
            copy: "Remote-first Kursdurchführung für Bildungsanbieter, Akademien, Hochschulen, Bootcamps und geförderte Weiterbildungen, die klare und praxisnahe Lehre brauchen.",
            deliverables: ["Python, SQL, Datenbanken, AI, Cloud und Cybersecurity", "Theorieblöcke kombiniert mit Hands-on-Übungen", "Lernchecks, Recaps und Transferaufgaben", "Vorbereitete Materialien, Labs und Lernpfade", "Deutsch oder Englisch für gemischte Level"],
            bestFor: "Bildungsanbieter, Hochschulen, Akademien, Erwachsenenbildung",
        },
        {
            ...enCoreOffers[2],
            kicker: "Talks & Vorträge",
            title: "Keynotes, Expert Talks & Gastvorträge",
            outcome: "Klare moderne Vorträge zu AI, IT-Security und digitaler Transformation.",
            copy: "Für Events, interne Knowledge Days, Leadership-Meetings und Bildungsformate, die komplexe Technologie verständlich und businessnah brauchen.",
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
        {group: "AI & Future Skills", items: ["AI Literacy", "Prompt Engineering", "Generative AI Workflows", "Responsible AI", "AI Governance Basics", "AI für Office-Produktivität"]},
        {group: "Software & Daten", items: ["Python-Programmierung", "SQL und Datenbanken", "APIs und Automatisierung", "Data-Science-Grundlagen", "Big-Data-Konzepte", "UI/UX-Grundlagen"]},
        {group: "Cybersecurity", items: ["Cybersecurity Awareness", "Web Security", "SOC-Grundlagen", "CompTIA PenTest+ Vorbereitung", "Ethical-Hacking-Grundlagen", "Passwort- und Datensicherheit"]},
        {group: "Business IT", items: ["Wirtschaftsinformatik", "IT Service Management", "Cloud-Konzepte", "Digitale Transformation", "SCRUM und agiles Arbeiten", "Prozessoptimierung"]},
    ],
    serviceOfferings: [
        {title: "AI & GenAI Training", description: "Praxisnahes Training zu generativer AI, Business Use Cases, Grenzen, Risiken und verantwortungsvoller Nutzung im Arbeitsalltag.", audience: "Unternehmen, Bildungsanbieter, Hochschulen und öffentliche Teams", format: "Remote-Live-Workshop, Trainingstag oder mehrtägiger Kurs", duration: "90 Minuten bis 3 Tage", outcomes: ["GenAI-Fähigkeiten und Grenzen verstehen", "realistische Use Cases erkennen", "Qualitäts- und Risikochecks anwenden"]},
        {title: "AI Literacy für Teams", description: "Eine klare Grundlage für Teams, die gemeinsame Sprache, praktische Sicherheit und sinnvolle AI-Nutzungsregeln brauchen.", audience: "Nicht-technische Teams, L&D, Führungskräfte und gemischte Lerngruppen", format: "Interaktiver Workshop oder internes Enablement-Programm", duration: "Halbtags bis 2 Tage", outcomes: ["AI-Tools sicherer nutzen", "schwache Outputs erkennen", "teamweite Nutzungsleitlinien entwickeln"]},
        {title: "Prompt Engineering & Agentic Workflows", description: "Strukturiertes Prompting, Workflow-Zerlegung und betreute agentische Arbeitsmuster für reale Business-Prozesse.", audience: "Knowledge Worker, Projektteams, AI Champions und Transformationsteams", format: "Hands-on-Workshop mit Workflow-Übungen", duration: "1 bis 3 Tage", outcomes: ["wiederholbare Prompts entwerfen", "agentenfähige Aufgaben strukturieren", "menschliche Review-Punkte definieren"]},
        {title: "AI Governance & Responsible AI", description: "Training zu Verantwortlichkeit, Risikoklassen, Datenhandhabung, menschlicher Aufsicht und praktischen Governance-Routinen.", audience: "Leadership, PMOs, Compliance-nahe Teams und Bildungseinrichtungen", format: "Executive Briefing, Workshop oder Governance-Training", duration: "90 Minuten bis 2 Tage", outcomes: ["AI-Risiken klarer bewerten", "Governance-Verantwortung definieren", "praktische Review-Routinen aufbauen"]},
        {title: "Python, SQL & Data Skills", description: "Angewandtes Programmier- und Datentraining für Automatisierung, Analyse und Datenbanken.", audience: "Erwachsene Lernende, Bootcamps, Umschulungen und interne Upskilling-Gruppen", format: "Live-Kurs, Bootcamp, Lab-Serie oder Prüfungsvorbereitung", duration: "2 Tage bis mehrwöchiger Kurs", outcomes: ["einfache Skripte schreiben", "Daten abfragen und modellieren", "Praxisvertrauen durch Übungen aufbauen"]},
        {title: "Software Development & APIs", description: "Grundlagen und angewandte Trainings zu Programmierung, API-Denken, Backend-Konzepten und Softwareprojekt-Struktur.", audience: "Fachinformatiker-Kohorten, Coding Schools, Junior Developer und Business-IT-Lernende", format: "Kursdurchführung, Lab-Training oder Projektworkshop", duration: "2 Tage bis mehrwöchiger Kurs", outcomes: ["Softwarearchitektur-Grundlagen verstehen", "mit APIs arbeiten", "Code mit realen Workflows verbinden"]},
        {
            title: "Cybersecurity & Pentesting Fundamentals",
            description: "Security Awareness und technische Grundlagen für Web Security, Ethical Hacking, SOC Basics und defensive Denkweise.",
            audience: "IT-Lernende, Umschulungsanbieter, Unternehmen und gemischte technische Gruppen",
            format: "Remote-Live-Training, Lab-Kurs oder Zertifikatsvorbereitung",
            duration: "1 Tag bis mehrwöchiger Kurs",
            outcomes: ["häufige Angriffspfade erkennen", "sichere Arbeitsgewohnheiten anwenden", "Pentesting- und SOC-Grundlagen verstehen"]
        },
        {title: "Scrum, Agile & Digital Project Work", description: "Praktisches Projektarbeitstraining für klarere Zusammenarbeit, Delivery-Struktur und AI-bewusste Koordination.", audience: "Projektteams, Auszubildende, KMU, Bildungsanbieter und digitale Teams", format: "Workshop, Trainingstag oder angewandtes Projekt-Lab", duration: "Halbtags bis 2 Tage", outcomes: ["agile Begriffe korrekt nutzen", "Arbeit sichtbar strukturieren", "Kommunikation und Reviews verbessern"]},
        {title: "Business Informatics & Digital Transformation", description: "Business-IT-Training zu Prozessen, Systemen, Daten, IT-Management und organisatorischem Wandel.", audience: "Hochschulen, Akademien, Unternehmen und berufliche Weiterbildung", format: "Vorlesungsreihe, Moduldurchführung oder Corporate Workshop", duration: "1 Tag bis mehrwöchiges Modul", outcomes: ["IT- und Business-Entscheidungen verbinden", "digitale Prozesse analysieren", "Transformations-Trade-offs verstehen"]},
        {
            title: "Curriculum Design & Blended Learning",
            description: "Unterstützung beim Aufbau von Lernpfaden, Übungen, Slides, Labs, Assessment-Logik und Blended-Learning-Formaten.",
            audience: "Bildungsanbieter, Hochschulen, Bootcamps und Corporate Learning Teams",
            format: "Consulting-Sprint, Curriculum-Workshop oder Materialdesign",
            duration: "1 Tag bis projektbasierte Begleitung",
            outcomes: ["strukturierte Kurspläne entwickeln", "Lernaktivierung verbessern", "Materialien an Outcomes ausrichten"]
        },
    ],
    featuredTrainingTopics: [],
    trustSignals: [
        {title: "Akademischer Hintergrund", copy: "B.Sc. und M.Sc. in Wirtschaftsinformatik sowie MBA in Digital Business."},
        {title: "Lehrerfahrung", copy: "150+ dokumentierte Unterrichtsstunden mit durchschnittlicher Teilnehmerbewertung von 4.7/5."},
        {title: "Expertisebereiche", copy: "AI, Cybersecurity, Softwareentwicklung, Wirtschaftsinformatik, Daten, agile Arbeit und digitale Bildung."},
        {title: "Sprachen", copy: "Training auf Deutsch und Englisch, ergänzt durch Spanisch-Erfahrung."},
        {title: "Remote Delivery", copy: "Remote-Live-Training aus Brisbane für Europa, Australien und internationale Bildungspartner."},
        {title: "Sektor-Fit", copy: "Erfahrung mit Corporate Training, Hochschulen, Umschulung, Bootcamps und professionellen Akademien."},
    ],
    capabilities: ["AI Literacy", "Prompt Engineering", "Generative AI Workflows", "Responsible AI", "AI Governance", "Python", "SQL", "Datenbanken", "APIs & Automatisierung", "Cybersecurity Awareness", "Web Security", "SOC-Grundlagen", "CompTIA PenTest+ Vorbereitung", "Ethical Hacking", "Cloud-Konzepte", "Wirtschaftsinformatik", "IT Service Management", "Digitale Transformation", "SCRUM", "Blended Learning", "Curriculum Design", "Erwachsenenbildung"],
    teachingProof: [
        {title: "Zertifizierte IT-Dozentin", value: "DiBak Trainer Certification", copy: "Umfasst Didaktik, Pädagogik, Lernplattformen, Materialerstellung, Lernchecks, technisches Troubleshooting und Qualitätssicherung."},
        {title: "Teilnehmerbewertung", value: "4.7 / 5", copy: "Dokumentierte Durchschnittsbewertung nach 150+ Unterrichtsstunden und starke Rückmeldung zur praktischen Vermittlung."},
        {title: "Stärke in Erwachsenenbildung", value: "Theorie + Praxis", copy: "Lernformate mit Beispielen, Übungen, Recaps, Aktivierung, Transferaufgaben und klaren Ergebnissen."},
        {title: "Internationale Durchführung", value: "Remote-first", copy: "Sitz in Brisbane, Online-Trainings für Europa und APAC auf Deutsch oder Englisch."},
    ],
    audienceCards: [
        {title: "Bildungsanbieter", copy: "Zuverlässige Remote-Dozentin für strukturierte IT-, AI-, Cybersecurity- und Business-Technology-Kurse mit Erwachsenen.", bullets: ["mehrwöchige Kurse", "klare Materialstruktur", "Lernaktivierung", "Deutsch / Englisch"]},
        {title: "Hochschulen", copy: "Gastvorträge und Future-Skills-Formate mit akademischer Glaubwürdigkeit und praktischen Beispielen.", bullets: ["Gastvorträge", "AI und Digitalisierung", "verständliche Erklärungen", "moderne Lernformate"]},
        {title: "Corporate L&D Teams", copy: "Praxisnahes Upskilling für Teams, die AI, Daten, Automatisierung oder Cybersecurity sicherer im Alltag einsetzen wollen.", bullets: ["Team-Workshops", "Hands-on-Workflows", "Risikobewusstsein", "Transfer"]},
        {title: "Öffentliche Organisationen", copy: "Klare digitale Kompetenzentwicklung für Teams mit Bedarf an Responsible AI, Security Awareness und Prozessverständnis.", bullets: ["Responsible AI", "Datenbewusstsein", "Governance", "zugänglich"]},
        {title: "Startups & KMU", copy: "Fokussierte Trainings für kleinere Teams, die digitale Skills ohne schwerfällige Enterprise-Formate brauchen.", bullets: ["kompakt", "businessnah", "Tool-Sicherheit", "direkt anwendbar"]},
        {title: "Bootcamps & Coding Schools", copy: "Kursdurchführung und Lab-Support für Python, SQL, APIs, Softwareentwicklung und Cybersecurity-Grundlagen.", bullets: ["Hands-on Labs", "Lernsupport", "Coding Practice", "Prüfungsvorbereitung"]},
        {title: "DACH-Bildungsanbieter", copy: "Remote-Dozentin für deutsche, schweizerische und österreichische Anbieter, die professionelle deutschsprachige Lehre brauchen.", bullets: ["DE Delivery", "Remote-Klassenzimmer", "Europa-Zeiten", "Bildungssektor"]},
        {title: "Internationale Kunden", copy: "Englische oder deutsche Durchführung für verteilte Teams und Bildungspartner in Europa, Australien und APAC.", bullets: ["EN / DE", "zeitzonenbewusst", "remote-first", "international"]},
    ],
    credentials: enCredentials,
    credentialCategories: ["Alle", "Teaching", "Akademisch", "AI", "Cybersecurity", "Entrepreneurship", "Sprache"],
    selectedProjects: enSelectedProjects,
    formerClients: enFormerClients.map((client) => ({...client, type: client.type.replace("training", "Training").replace("education", "Bildung"), work: client.work})),
    testimonialProof: [
        {title: "Vertrauen von Bildungsanbietern", quote: "Wiederholte Buchungen in Weiterbildung, Umschulung, Akademien und Hochschulen zeigen, dass meine Durchführung für strukturierte Erwachsenenbildung funktioniert."},
        {title: "Breit genug für gemischte IT-Gruppen", quote: "Von Fachinformatiker-Kohorten bis AI-Zertifikatsgruppen kann ich Tiefe, Tempo und Beispiele an die Gruppe anpassen."},
        {title: "Praxis statt Folienvorlesen", quote: "Meine Kurse fokussieren Übungen, Implementation Thinking, Lernaktivierung und klaren Transfer in Arbeit oder Prüfung."},
    ],
    lifeMilestones: [
        {year: "2000", title: "Aufgewachsen in Bodenwerder", category: "Herkunft", copy: "Aufgewachsen im Weserbergland nahe Hameln, mit früher Neugier für Technik, Lernen und eigenständiges Arbeiten."},
        {year: "2011-2019", title: "Gymnasium am Internat Solling", category: "Schule", copy: "Schulzeit in Holzminden mit breiter Allgemeinbildung, Selbstständigkeit, internationaler Orientierung und frühem IT-Interesse."},
        {year: "2013-2018", title: "Sprachaufenthalte in Australien, England und Spanien", category: "International", copy: "Mehrere Sprach- und Kulturaufenthalte haben Kommunikation, Perspektivwechsel und internationales Arbeiten geprägt."},
        {year: "2019", title: "Abitur und erste Business-Erfahrung", category: "Grundlage", copy: "Abitur abgeschlossen und erste Einblicke in Unternehmenskontexte rund um Immobilien, Bau und Verwaltung gewonnen."},
        {year: "2020", title: "Wirtschaftsinformatik und erste IT-Projekte", category: "IT-Start", copy: "B.Sc. Wirtschaftsinformatik an der Universität Paderborn begonnen und autodidaktisches Programmieren in erste kundennahe IT-Arbeit überführt."},
        {year: "2021", title: "Hotelverwaltung und Unternehmensstruktur", category: "Management", copy: "Mitwirkung an administrativen und strukturellen Aufgaben im Umfeld der Baron von Münchhausen Hotelverwaltungs-GmbH."},
        {year: "2023", title: "bytes Coding GmbH", category: "Software und Bildung", copy: "Softwareentwicklung und Bildungsarbeit über bytes Coding erweitert und technische Umsetzung stärker mit Trainingsbedarf verbunden."},
        {year: "2024", title: "Schoppe & Partner EU", category: "Freelance-Profil", copy: "Das Freelance-Profil klarer auf Lehre, Training, Consulting und digitale Kompetenzentwicklung ausgerichtet."},
        {year: "2025", title: "Bachelor und Master in Wirtschaftsinformatik", category: "Akademisch", copy: "Akademische Grundlage in Wirtschaftsinformatik, AI, Daten, HCI, IT-Management und digitaler Transformation abgeschlossen."},
        {year: "2026", title: "MBA, Australien und internationales Trainingsprofil", category: "Aktuell", copy: "MBA Digital Business abgeschlossen, nach Brisbane gezogen und die Arbeit auf internationale AI-, IT- und Business-Technology-Bildung ausgerichtet."},
    ],
    skillGroups: enSkillGroups.map((group) => group),
    blogPosts: [
        {
            ...enBlogPosts[0],
            title: "Agentic AI: vom beeindruckenden Demo zur delegierten Arbeit",
            category: "Agentic AI",
            readTime: "8 Min. Lesezeit",
            excerpt: "Agentic AI ist nicht nur ein besserer Chatbot. Es ist der Wechsel von Antworten hin zu Systemen, die planen, Tools nutzen, Freigaben einholen und Arbeit in klaren Grenzen voranbringen.",
            body: [
                {
                    heading: "Die wichtige Frage lautet nicht mehr: Kann AI darauf antworten?",
                    paragraphs: ["Die erste Welle generativer AI hat Wissensarbeit elastischer gemacht. Entwürfe wurden schneller, Zusammenfassungen billiger und Recherche begann plötzlich mit einem Dialog statt mit einer leeren Seite. Agentic AI verschiebt die Frage erneut. Es geht nicht mehr nur darum, ob ein Modell eine gute Antwort erzeugt, sondern ob ein AI-System einen Workflow durchlaufen kann: Kontext prüfen, Werkzeuge auswählen, Schritte koordinieren, Freigaben anfordern und ein nachvollziehbares Ergebnis hinterlassen.", "Das klingt groß, ist in der Praxis aber oft sehr konkret. Ein brauchbarer Agent muss nicht das Unternehmen führen. Er kann ein Renewal-Risk-Briefing vorbereiten, Support-Tickets vorsortieren, Richtlinien vergleichen, Projektupdates aus vorhandenen Artefakten entwerfen oder die Mitte eines Research-Prozesses koordinieren. Der Unterschied: Das System erzeugt nicht mehr nur Text. Es handelt innerhalb eines begrenzten Prozesses."]
                },
                {
                    heading: "Agents sind Workflow-Design, keine magische Autonomie",
                    paragraphs: ["Die stärksten Agentic-AI-Projekte starten mit einer Workflow-Karte, nicht mit der Modellwahl. Welche Informationen werden gebraucht? Welche Tools dürfen genutzt werden? Wo ist menschliche Freigabe nötig? Was gilt als korrektes Ergebnis? Was muss geloggt werden? Diese Fragen klingen operativ, weil sie operativ sind. Agentic AI wird wertvoll, wenn sie Handoffs reduziert, Entscheidungen klarer macht und wiederholbare Arbeit verlässlicher gestaltet.", "Genau hier scheitern viele Projekte. Ein Chatbot kann unscharfen Kontext überleben, weil ein Mensch das Ergebnis interpretiert. Ein Agent, der Aktionen auslöst, braucht sauberere Daten, klarere Berechtigungen und bessere Leitplanken. Wenn Kundendaten doppelt sind, Wissensdatenbanken veraltet und Verantwortlichkeiten unklar sind, repariert der Agent nicht die Organisation. Er macht das Chaos nur schneller sichtbar."]
                },
                {
                    heading: "Die neue Fähigkeit heißt Delegationskompetenz",
                    paragraphs: ["Prompt Engineering wird oft so vermittelt, als ginge es hauptsächlich um Formulierungen. In agentischen Systemen ist die tiefere Fähigkeit Delegationskompetenz: wissen, was man abgibt, wie viel Freiheit sinnvoll ist, welche Prüfungen nötig sind und wie Ergebnisse bewertet werden. Ein Human-in-the-loop-Design ist kein Zeichen schwacher Automatisierung. Es ist der Weg, wie ernsthafte Automatisierung Vertrauen verdient.", "Für Teams heißt das: Training muss über Tool-Demos hinausgehen. Lernende müssen üben, Arbeit in agentenfähige Aufgaben zu zerlegen, Akzeptanzkriterien zu definieren, riskante Autonomie zu erkennen und Eskalationspunkte zu gestalten. Der zukünftige AI-Nutzer ist weniger Passagier und mehr Prozessdesigner."]
                },
                {
                    heading: "Womit ich anfangen würde",
                    paragraphs: ["In den meisten Organisationen würde ich nicht mit einem vollautonomen Agenten starten. Ich würde mit einem engen Assistenten beginnen, der Arbeit für eine menschliche Entscheidung vorbereitet: Meeting-Prep, Trainingsmaterial-Anpassung, wöchentliche Projektrisikoanalyse oder Research-Screening. Der Agent sollte in einem kleinen Workflow arbeiten, freigegebene Quellen nutzen, seine Grundlage sichtbar machen und Annahme, Ablehnung oder Korrektur einfach machen.", "Das ist weniger spektakulär als ein digitaler Mitarbeiter, trainiert aber die richtigen Muskeln: Datenqualität, Governance, Review-Routinen und Workflow-Redesign. Wenn diese Muskeln da sind, kann Autonomie vorsichtig wachsen. Agentic AI ist am stärksten, wenn sie als Organisationsdesign mit Software darin verstanden wird."]
                },
            ],
            takeaway: "Das eigentliche Versprechen von Agentic AI ist nicht, Urteilskraft zu ersetzen. Es geht darum, kompetenten Menschen bessere Delegation zu ermöglichen, während Kontext, Verantwortung und Qualität sichtbar bleiben.",
        },
        {
            ...enBlogPosts[1],
            title: "Projektmanagement im Zeitalter von AI: weniger Verwaltung, mehr Urteilskraft",
            category: "Projektmanagement",
            readTime: "7 Min. Lesezeit",
            excerpt: "AI schafft Projektmanagement nicht ab. Sie verschiebt den Schwerpunkt von manueller Koordination hin zu Sinnstiftung, Governance und Vertrauen zwischen Stakeholdern.",
            body: [
                {
                    heading: "Der alte Projektmanager war eine menschliche Integrationsschicht",
                    paragraphs: ["Projektmanagement trägt seit langem einen leisen Widerspruch in sich. Die Arbeit soll strategisch sein, aber der Kalender ist voller Administration: Statusberichte, Meetingnotizen, Risikoregister, Follow-ups, Budgetchecks, Backlog-Pflege und Stakeholder-Updates. Viel davon ist wichtig. Vieles davon ist aber auch wiederholbar genug, dass AI es direkt unterstützen kann.", "Die Veränderung besteht nicht nur darin, dass Projektmanager schneller schreiben können. Tiefer geht es darum, dass AI das Nervensystem eines Projekts pflegen kann: Was hat sich verändert? Was ist blockiert? Welches Risiko entsteht gerade? Wer braucht eine Entscheidung? Welche Annahme stimmt nicht mehr?"]
                },
                {
                    heading: "Von Vergangenheitsbericht zu Gegenwartssinn",
                    paragraphs: ["Klassisches Reporting beschreibt oft, was letzte Woche passiert ist. AI-gestützte Projektarbeit kann näher an die Gegenwart rücken. Meetingtranskripte werden zu Entscheidungen und Aufgaben. Lange Mailthreads werden zu Stakeholder-Zusammenfassungen. Jira- oder GitHub-Aktivität wird zu Delivery-Signalen. Risiko-Workshops können durch Muster aus früheren Projekten unterstützt werden.", "Dadurch wird Projektmanagement nicht unwichtiger. Schwaches Projektmanagement wird sichtbarer. Wenn Rollen unklar, Erfolgskriterien vage und Governance nur Theater sind, erzeugt AI vor allem polierte Verwirrung. Wenn Artefakte sauber sind und Entscheidungen wirklich getroffen werden, kann AI Reibung deutlich senken."]
                },
                {
                    heading: "Die Rolle wird menschlicher, nicht weniger menschlich",
                    paragraphs: ["Der wertvolle Projektmanager der AI-Ära ist nicht die Person, die die schönsten Statusfolien manuell formatiert. Es ist die Person, die schwache Signale interpretiert, unrealistische Pläne herausfordert, Trade-offs moderiert und Menschen ausrichtet, wenn das Projekt unbequem wird. AI kann eine Stakeholder-Mail entwerfen. Sie übernimmt nicht die Verantwortung für die Beziehung hinter dieser Mail.", "Deshalb muss AI Literacy für Projektteams Governance und Kommunikation enthalten, nicht nur Toolnutzung. Teams müssen wissen, wann AI-Output gut genug ist, wann Evidenz fehlt, wann sensible Daten draußen bleiben und wann ein menschliches Gespräch die eigentliche Arbeit ist."]
                },
                {
                    heading: "Ein praktischer AI-Stack für Projektmanagement",
                    paragraphs: ["Ein guter Start ist einfach: automatische Meetingzusammenfassungen, Action-Extraction, Risikolog-Entwürfe, Stakeholder-Update-Drafts, Requirements-Vergleiche und Retrospektiven. Das sind keine glamourösen Use Cases, aber sie entfernen administrativen Ballast, der Projektmanager von Urteilskraftarbeit fernhält.", "Die nächste Stufe ist spannender: AI-gestützte Szenarioplanung, Portfolio-Priorisierung, Abhängigkeitsanalyse und Frühwarnsysteme für Delivery-Risiken. Dann sieht Projektmanagement weniger nach Dokumentationspflege aus und mehr nach organisationaler Intelligenz."]
                },
            ],
            takeaway: "AI wird Projektmanagement nicht verschwinden lassen. Sie bestraft rein administrative Projektarbeit und belohnt Menschen, die Struktur, Kommunikation, Governance und Urteilskraft verbinden.",
        },
        {
            ...enBlogPosts[2],
            title: "Lehren mit KI, ohne das Lernen zu verlieren",
            category: "KI in Bildung",
            readTime: "8 Min. Lesezeit",
            excerpt: "KI kann Bildung adaptiver und praktischer machen, aber nur, wenn Lehrende Lernen rund um Denken, Feedback und Transfer gestalten statt rund um Abkürzungen.",
            body: [
                {
                    heading: "Die unbequeme Wahrheit: KI kann gleichzeitig helfen und schaden",
                    paragraphs: ["KI in der Bildung wird oft in Extremen diskutiert. Die eine Seite sieht personalisiertes Lernen für alle. Die andere sieht Plagiate, Abhängigkeit und das Ende ernsthafter Prüfung. Beide Reaktionen enthalten Wahrheit. KI kann Erklärung, Übung, Feedback, Barrierefreiheit und Curriculum Design unterstützen. Sie kann Lernen aber auch auf Antwortsammlung reduzieren, wenn die Didaktik schwach ist.", "Für Lehrende lautet die Frage deshalb nicht, ob KI in Lernprozesse gehört. Lernende nutzen sie bereits. Die eigentliche Frage ist, ob wir ihnen beibringen, KI so zu nutzen, dass Kompetenz entsteht, statt fehlende Kompetenz zu verstecken."]
                },
                {
                    heading: "Gute KI-Didaktik macht Denken sichtbar",
                    paragraphs: ["Die besten KI-Lernformate fragen nicht nur nach einem finalen Ergebnis. Sie lassen Lernende Outputs vergleichen, Prompts verbessern, Annahmen erklären, Fehler kritisieren, Quellen dokumentieren und reflektieren, was sich am eigenen Verständnis verändert hat. Das Ergebnis ist wichtig, aber das Lernen liegt im Prozess darum herum.", "Gerade in der Erwachsenenbildung ist das stark. Ein Lernender im IT-Kurs kann sich Python erklären lassen, den Code testen, brechen, debuggen und dann den Fix erklären. Eine Business-Lernerin kann AI-generierte Stakeholder-Mails vergleichen und entscheiden, welche in einer echten Organisation funktionieren würde. Ein Cybersecurity-Lerner kann Konzepte mit KI wiederholen und muss trotzdem über Risiko nachdenken."]
                },
                {
                    heading: "Prüfung muss näher an echte Arbeit rücken",
                    paragraphs: ["Wenn eine Aufgabe perfekt gelöst werden kann, indem man sie in ein KI-Tool kopiert, misst die Aufgabe vielleicht nicht mehr das, was sie messen soll. Das macht Prüfung nicht unmöglich. Es bedeutet, dass Prüfung mündliche Verteidigung, Projektlogs, Versionsverlauf, Anwendungsszenarien, praktische Demonstrationen und Reflexion über Toolnutzung einbeziehen muss.", "In beruflicher Weiterbildung kann das sogar ein Vorteil sein. Echte Arbeit ist selten ein Closed-Book-Gedächtnistest. Menschen nutzen Tools, fragen Kolleginnen, suchen Dokumentation und überarbeiten Ergebnisse. KI-bewusste Prüfung kann authentischer werden, wenn sie Urteilskraft, Transfer und Qualitätskontrolle bewertet statt isoliertes Erinnern."]
                },
                {
                    heading: "Lehrende werden Lernarchitekten",
                    paragraphs: ["KI ersetzt Lehrende nicht. Sie erhöht den Anspruch an Learning Design. Lehrende müssen entscheiden, wo KI Lernen unterstützt, wo sie begrenzt wird, wie Nutzung offengelegt wird und wie Feedbackschleifen aussehen. In starken Kursen wird KI Teil der Lernumgebung, nicht die unsichtbare Abkürzung außerhalb davon.", "Genau das finde ich spannend. KI kann differenzierte Übungen erzeugen, Beispiele liefern, mehrsprachige Lernende unterstützen, Feedback beschleunigen und abstrakte Konzepte mit Praxis verbinden. Die menschliche Rolle bleibt zentral: Rahmen setzen, flache Antworten herausfordern, Verwirrung bemerken und Toolnutzung in echte Kompetenz verwandeln."]
                },
            ],
            takeaway: "KI gehört in moderne Bildung, aber nicht als Ersatz für Lernen. Ziel sind Aufgaben, in denen KI Übung, Feedback und Transfer unterstützt, während Lernende weiterhin denken müssen.",
        },
        {
            ...enBlogPosts[3],
            title: "Von Industry 4.0 zu 5.0: wenn Menschen ueber den Loop steigen",
            category: "Industry 5.0",
            readTime: "8 Min. Lesezeit",
            excerpt: "Industry 4.0 hat Organisationen beigebracht, Maschinen, Daten und Prozesse zu verbinden. Industry 5.0 stellt die schwierigere Frage: Was sollen Menschen ueberwachen, gestalten und verantworten, wenn AI Arbeit koordiniert?",
            body: [
                {
                    heading: "Industry 4.0 war vernetzte Faehigkeit",
                    paragraphs: ["Industry 4.0 gab Organisationen eine starke operative Idee: Produktion, Daten, Sensoren, Plattformen und Automatisierung werden verbunden, damit Prozesse transparenter und reaktionsfaehiger werden. Die menschliche Rolle wurde dabei oft als Adaption beschrieben. Menschen sollten das Dashboard lernen, den Daten vertrauen, die Plattform nutzen und ihre Arbeit an digitale Systeme anpassen.", "Das war notwendig, aber nicht das Ende der Geschichte. Sobald AI in die Prozessebene einzieht, veraendert sich die Beziehung. AI zeigt nicht nur Informationen an; sie kann priorisieren, empfehlen, entwerfen, ausloesen, weiterleiten und manchmal handeln. Die Frage lautet nicht mehr nur, ob Menschen Technologie nutzen. Die Frage lautet, wo menschliche Urteilskraft hingehoert, wenn Technologie selbst Teile der Arbeit koordiniert."]
                },
                {
                    heading: "Industry 5.0 bringt den Menschen als Designprinzip zurueck",
                    paragraphs: ["Die europaeische Diskussion zu Industry 5.0 betont drei Begriffe: Human-centricity, Resilienz und Nachhaltigkeit. Das ist keine weiche Dekoration. Es ist eine Korrektur einer rein effizienzgetriebenen Digitalisierungslogik. Wenn Systeme schneller werden, aber Menschen Handlungsmacht verlieren, wenn Automatisierung optimiert, aber fragil wird, oder wenn AI-Entscheidungen nicht mehr herausgefordert werden koennen, ist die Organisation nicht reifer geworden. Sie ist nur automatisierter.", "Ein human-zentriertes System bedeutet nicht, dass Menschen jede Aufgabe manuell erledigen. Es bedeutet, dass das System um menschliche Faehigkeit, Wohlbefinden, Verantwortung und sinnvolle Kontrolle gestaltet wird. Genau dieser Unterschied ist fuer AI-Adoption wichtig. Ziel ist nicht, Menschen fuer immer Approval-Buttons klicken zu lassen. Ziel ist zu entscheiden, welche Entscheidungen menschliche Urteilskraft brauchen, welche delegiert werden koennen und welche fuer Review sichtbar bleiben muessen."]
                },
                {
                    heading: "Von human in the loop zu human above the loop",
                    paragraphs: ["Viele AI-Governance-Gespraeche beginnen mit human-in-the-loop. Das ist sinnvoll, besonders bei Entscheidungen mit hoher Wirkung, Unsicherheit oder ethischer Sensibilitaet. Aber wenn jede AI-gestuetzte Mikroaktion auf einen Menschen wartet, wird das System langsam und performativ. Menschen stempeln Outputs ab, die sie nicht wirklich pruefen koennen, und der Loop wird zum Theater.", "Das reifere Muster ist oft human above the loop. Menschen definieren Ziele, Grenzen, Eskalationsregeln, Qualitaetskriterien und Review-Rhythmen. Das AI-System darf innerhalb dieses Rahmens arbeiten, aber der Mensch ueberwacht Systemdesign und Ausnahmemuster statt jeden Schritt manuell zu beruehren. Das ist eher Flugverkehrskontrolle als Fliessbandfreigabe: Der Mensch ist nicht weg, aber seine Rolle wandert nach oben."]
                },
                {
                    heading: "Der Skill Shift: Operatoren werden Supervisoren von Systemen",
                    paragraphs: ["Das veraendert Trainingsbedarf. Teams brauchen mehr als Tool Literacy. Sie brauchen Prozessverstaendnis, Datenkompetenz, Risikokompetenz und Delegationskompetenz. Sie muessen verstehen, wie guter Input aussieht, wie Fehlerbilder aussehen, wann Automatisierung stoppen sollte und wie Entscheidungen nachtraeglich auditiert werden.", "Fuer Business und Bildung ist das ein grosser Wechsel. Die Arbeitskraft der Zukunft ist nicht nur die Person, die ein digitales Tool gut nutzt. Es ist jemand, der soziotechnische Systeme beaufsichtigen kann: Menschen, AI, Daten, Regeln, Workflow und Verantwortung zusammen. Genau dort wird Industry 5.0 praktisch spannend. Sie lehnt Automatisierung nicht ab. Sie fordert, dass Automatisierung menschliches Vertrauen verdient."]
                },
            ],
            takeaway: "Industry 5.0 ist keine Absage an Industry 4.0. Es ist die naechste Reifestufe: Vernetzte Systeme bleiben wichtig, aber Menschen muessen von passiven Technologie-Nutzern zu Supervisoren AI-gestuetzter Arbeitssysteme werden.",
        },
        {
            ...enBlogPosts[4],
            title: "AI in automatisierten Prozessen: Halluzinationen, Tokenburn und Ratelimits",
            category: "AI Risiko",
            readTime: "8 Min. Lesezeit",
            excerpt: "AI-Automatisierung kann leise scheitern, bevor sie laut scheitert. Halluzinationen verzerren Entscheidungen, Tokenburn macht Workflows teuer und Ratelimits brechen Prozesse genau dann, wenn sie skalieren.",
            body: [
                {
                    heading: "Automatisierung veraendert das Risikoprofil von AI-Output",
                    paragraphs: ["Eine Halluzination in einem Chatfenster ist aergerlich. Eine Halluzination in einem automatisierten Workflow kann ein operativer Defekt werden. Das Risiko entsteht genauso durch den Prozesskontext wie durch das Modell. Wenn AI-Output direkt in Tickets, E-Mails, CRM-Datensaetze, Research-Tabellen, Codeaenderungen oder Business-Entscheidungen fliesst, werden Fehler schwerer sichtbar und leichter vervielfacht.", "Deshalb sollte AI-Automatisierung als Prozessengineering behandelt werden, nicht nur als Prompting. Das System braucht Input-Validierung, Quellenbindung, Confidence-Grenzen, Logging, Review-Pfade und Stop-Bedingungen. Sonst kann eine fluessige Antwort mit mehr Autoritaet durch den Prozess laufen, als sie verdient."]
                },
                {
                    heading: "Halluzinationen werden gefaehrlich, wenn sie handlungsrelevant sind",
                    paragraphs: ["Das praktische Risiko ist nicht, dass ein Modell manchmal etwas Falsches sagt. Menschen tun das auch. Das praktische Risiko ist, dass generierter Inhalt strukturell korrekt aussieht, aber semantisch falsch ist. Eine erfundene Quelle, ein falsches Kundendetail, eine falsch gelesene Policy-Klausel oder eine selbstbewusste, aber ungueltige technische Empfehlung kann durch einen Workflow rutschen, weil sie formal richtig aussieht.", "Die Loesung ist nicht, perfekte Modelle zu verlangen. Die Loesung ist Prozessdesign: Aussagen muessen geerdet sein, wichtige Felder werden geprueft, externe Aktionen brauchen Evidenz und Outputs mit hoher Wirkung werden reviewed. Retrieval, Zitationen, deterministische Checks und menschliche Pruefung sind wichtig, aber keines davon reicht allein. Die Kontrolle muss zum Risiko der Aktion passen."]
                },
                {
                    heading: "Tokenburn ist mehr als ein Kostenproblem",
                    paragraphs: ["Tokenburn klingt nach Finanzen, ist aber auch Architektur. Lange Prompts, wiederholter Kontext, ineffiziente Retries, ausufernde Tool-Traces und schlecht begrenzte Agents koennen einen AI-Workflow langsam, teuer und fragil machen. Im kleinen Demo-Setup merkt das niemand. In groesserem Massstab wird dasselbe Design zum Denial-of-Wallet-Problem: Der Workflow verbrennt Geld und Latenz fuer Arbeit, die vorher gefiltert, gecacht oder vereinfacht gehoert haette.", "Gute AI-Systeme brauchen deshalb budgetbewusstes Design. Kleinere Modelle nutzen, wo es geht; Kontext kuerzen; stabile Informationen cachen; lange Historien zusammenfassen; fehlerhafte Loops frueh stoppen; und Kosten pro erfolgreichem Ergebnis messen statt nur Kosten pro Request. Eine billige Demo kann ein teurer Produktionsprozess werden, wenn niemand Token-Oekonomie beobachtet."]
                },
                {
                    heading: "Ratelimits sind Prozesslimits",
                    paragraphs: ["Ratelimits werden oft als technisches Aergernis behandelt: warten, retry, backoff. In automatisierten Business-Prozessen sind sie mehr als das. Wenn ein Workflow fuer Triage, Klassifikation, Anreicherung oder Antwortgenerierung von AI abhaengt, kann ein Ratelimit zu einer Warteschlange, Verzoegerung, Teilausfall oder gebrochenen Kundenerfahrung werden.", "Die Antwort ist operatives Design: Queues, Fallbacks, Degraded Modes, Batch-Fenster, Priorisierung und klare Erwartungen. Ein System sollte wissen, was passiert, wenn AI nicht verfuegbar, langsam oder zu teuer ist. Menschliche Aufsicht gehoert dazu. Menschen sollten sehen, wann Automatisierung normal laeuft, wann sie degradiert ist und wann Arbeit manuell uebernommen werden muss."]
                },
            ],
            takeaway: "AI-Automatisierung wird erst verlaesslich, wenn Halluzinationskontrolle, Kostenkontrolle und Verfuegbarkeitskontrolle von Anfang an in den Workflow eingebaut werden. Das Modell ist nur ein Teil des Prozesses.",
        },
    ],
    softwareProjects: enSoftwareProjects,
    timeline: enTimeline,
    faqs: [
        {q: "Was ist dein Hauptangebot?", a: "Mein Hauptangebot ist Lehre: IT, AI, Cybersecurity, Business IT, digitale Skills, Workshops, Talks und strukturierte professionelle Trainings."},
        {q: "Machst du ganze Kurse oder nur Workshops?", a: "Beides. Ich kann 90-Minuten-Talks, Tagesworkshops, mehrtägige Trainings und mehrwöchige Kurse für Bildungsanbieter durchführen."},
        {q: "Unterrichtest du auf Deutsch oder Englisch?", a: "Beides. Deutsch und Englisch sind für Unternehmen, Akademien, Hochschulen und Online-Gruppen möglich."},
        {q: "Machst du auch Consulting?", a: "Ja, aber Consulting unterstützt den Trainingsfokus. Ich positioniere Consulting rund um AI-Adoption, Curriculum Design, Workflow-Training und digitale Kompetenz."},
    ],
};

de.featuredTrainingTopics = de.serviceOfferings.filter((service) => [
    "AI Literacy für Teams",
    "Python, SQL & Data Skills",
    "Cybersecurity & Pentesting Fundamentals",
    "Prompt Engineering & Agentic Workflows",
    "Scrum, Agile & Digital Project Work",
    "AI Governance & Responsible AI",
].includes(service.title));

export function useSiteContent() {
    const {language} = useLanguage();
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
        credentials: enCredentials,
        credentialCategories: enCredentialCategories,
        selectedProjects: enSelectedProjects,
        formerClients: enFormerClients,
        testimonialProof: enTestimonialProof,
        lifeMilestones: enLifeMilestones,
        skillGroups: enSkillGroups,
        blogPosts: enBlogPosts,
        softwareProjects: enSoftwareProjects,
        timeline: enTimeline,
        faqs: enFaqs,
    };
}
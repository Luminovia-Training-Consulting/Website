import {createContext, useCallback, useContext, useEffect, useMemo, useState} from "react";

const STORAGE_KEY = "carina_site_language";
const DEFAULT_LANGUAGE = "en";

const dictionaries = {
    en: {
        languageName: "English",
        switchLabel: "DE",
        nav: {
            home: "Home",
            training: "Training",
            skills: "Skills",
            software: "Software",
            clients: "Clients",
            pricing: "Pricing",
            myWay: "My Way",
            blog: "Blog",
            book: "Contact",
            imprint: "Imprint",
            privacy: "Privacy",
        },
        headerTagline: "AI Lecturer · IT Trainer · Business Consultant",
        bookTraining: "Contact",
        bookTrainingCall: "Contact / book a call",
        requestTraining: "Request training",
        bookConsultation: "Book consultation",
        serviceLabels: {
            audience: "Audience",
            format: "Format",
            duration: "Duration",
            outcomes: "Learning outcomes",
            bestFor: "Best for",
        },
        assets: {
            title: "Business assets",
            copy: "Download a complete lecturer profile, a detailed training portfolio and an AI & IT catalogue for programme planning, vendor checks and internal learning proposals.",
            lecturerProfile: "Lecturer Profile",
            trainingPortfolio: "Training Portfolio",
            trainingCatalogue: "AI & IT Training Catalogue",
        },
        linkedin: "LinkedIn",
        menu: "Menu",
        navigation: "Navigation",
        close: "Close",
        open: "Open",
        visit: "Visit",
        github: "GitHub",
        home: {
            badge: "AI · IT · cybersecurity · business education",
            title: "AI, IT & Business Lecturer for modern digital education.",
            intro: "Corporate training, vocational education, AI literacy, cybersecurity, software development and digital transformation, delivered remotely across Europe and Australia.",
            coreOffer: "Core offer:",
            coreCopy: "practical online lectures, workshops, professional development courses and curriculum design for organisations that need measurable learning outcomes, business relevance and responsible AI capability.",
            exploreCapability: "View training topics",
            downloadProfile: "Download lecturer profile",
            mainFocus: "Main focus",
            focusValue: "AI · IT · Business Education",
            remote: "Remote-first",
            learnerRating: "Learner rating",
            signalTeaching: "AI teaching",
            signalWorkflows: "Agentic workflows",
            photoFallback: "Portrait image placeholder. Replace the image path in src/data/profile.js with your production media URL.",
            positioning: "Positioning",
            positioningTitle: "A serious trainer profile for modern digital education.",
            positioningCopy: "The focus is clear: teaching, workshops, lectures and training delivery. Software and consulting are credibility layers that make the training practical, not abstract.",
            explore: "Explore",
            exploreTitle: "More than a training catalogue.",
            trainingOffers: "Training offers",
            trainingOffersTitle: "Three focused ways to work with me.",
            topics: "Training topics",
            topicsTitle: "Practical topics for corporate teams, universities and training providers.",
            topicsCopy: "AI literacy, Python, SQL, cybersecurity, software development, Scrum, digital business and AI governance are presented as usable capabilities, not abstract buzzwords.",
            audiences: "Who I work with",
            audiencesTitle: "Designed for serious education and business environments.",
            audiencesCopy: "The offer is built for professional contexts where clarity, reliability, learner activation and business relevance matter.",
            formats: "Delivery formats",
            formatsTitle: "From compact briefings to multi-week course delivery.",
            process: "Booking process",
            processTitle: "A clear path from first call to useful learning outcomes.",
            servicesTitle: "Bookable training and consulting services.",
            servicesCopy: "Each service can be delivered as a focused workshop, training day, course module or curriculum support depending on audience, level and required outcomes.",
            featuredTitle: "Featured training topics for immediate booking.",
            remoteTitle: "Remote live training from Brisbane, built for Europe and Australia.",
            remoteCopy: "Remote live training from Brisbane for German-speaking and international education providers, with flexible time-zone delivery for Europe, Switzerland, Austria, Australia and distributed teams.",
            blogPreview: "Knowledge hub",
            blogPreviewTitle: "Ideas on AI, governance, digital education and modern work.",
            myWayPreview: "Professional path",
            myWayPreviewTitle: "Professional path and teaching experience after the offer is clear.",
            processSteps: [
                ["1", "Short consultation", "We clarify audience, level, goals, timing and constraints."],
                ["2", "Training scope", "The topic, format, exercises and success criteria are shaped into a realistic scope."],
                ["3", "Proposal", "You receive a clear recommendation with delivery format, preparation needs and next steps."],
                ["4", "Delivery", "Sessions are delivered remotely with structured materials, practical tasks and active learning."],
                ["5", "Follow-up", "Learners receive materials, recap notes or next-step recommendations where useful."],
            ],
            requestAvailability: "Request availability",
            credible: "Trust and delivery fit",
            credibleTitle: "Clear expertise, structured delivery and practical learning outcomes.",
            credibleCopy: "Visitors get a fast view of what I teach, how collaboration works and why the technical depth behind the training is relevant for business, education and public-sector audiences.",
            jumpNavLabel: "Jump to section",
            jumpNav: [
                ["#services", "Services"],
                ["#audiences", "Who I work with"],
                ["#formats", "Formats"],
                ["#featured-topics", "Featured topics"],
                ["#proof", "Proof"],
                ["#blog-preview", "Blog"],
                ["#process", "Process"],
                ["#my-way-preview", "My Way"],
                ["#contact-cta", "Contact"],
            ],
        },
        exploreCards: [
            ["Skills & topics", "A clear map of AI, software, cybersecurity, data, business IT, teaching and communication skills.", "/skills"],
            ["Software", "Selected GitHub projects across automation, AI research workflows, Kotlin plugins and mobile/game development.", "/software"],
            ["My way", "A compact timeline from early programming and studies to entrepreneurship, Brisbane and international training.", "/my-way"],
        ],
        clientSection: {
            badge: "Former clients",
            title: "Trusted by academies, universities and professional training providers.",
            copy: "A selected overview of organisations and education partners I have supported through courses, workshops, research assistance and professional IT training.",
            feedbackLabel: "Feedback theme",
            feedbackNote: "Anonymised pattern, not a named customer quote.",
            feedbackThemes: [
                "Clear structure, practical examples and calm remote delivery.",
                "Technical depth translated into language learners can actually use.",
                "Reliable preparation, active learning and useful course materials.",
                "Flexible enough for mixed learner levels without losing the goal.",
            ],
        },
        softwareSection: {
            badge: "Software",
            title: "Software projects behind the teaching profile.",
            copy: "Selected GitHub repositories that show practical work across automation, AI research workflows, data cleanup, Kotlin plugins, mobile apps and game development.",
            viewAll: "View software portfolio",
        },
        conversion: {
            title: "Need a lecturer, trainer or speaker for AI, IT or business technology?",
            copy: "Send topic, learner group, timeframe and target outcome. You get a clear format recommendation.",
            topics: "View topics",
        },
        contact: {
            badge: "Contact",
            title: "Contact me for lectures, workshops, training or talks.",
            copy: "Send the topic, audience, learner level, timeframe and desired outcome directly by email, phone or appointment booking. I will suggest a suitable format: keynote, workshop, multi-day training, course delivery or curriculum support.",
            appointment: "Book an appointment",
            appointmentTitle: "Book an appointment directly",
            appointmentCopy: "Prefer to choose a time immediately? Use the appointment scheduler below. Short context by email before the call is helpful, but not required.",
            calendarTitle: "Google Calendar appointment scheduler",
            emailButton: "Write an email",
            fallbackTitle: "Direct contact",
            fallbackCopy: "Contact me directly by email or phone. No website form is required, so requests do not depend on SMTP settings or server-side mail delivery.",
            calendarFallback: "Book a call",
        },
        analytics: {
            title: "Privacy-friendly analytics",
            copy: "I use Google Analytics only after consent to understand which pages are useful. IP anonymisation is enabled.",
            decline: "Decline",
            accept: "Accept",
        },
        notFound: {
            badge: "404 / Page not found",
            title: "This page is not in the training plan.",
            copy: "The link may be outdated, moved or typed incorrectly. Use one of the main paths below to continue.",
            home: "Back to homepage",
            contact: "Contact / booking",
            training: "View training topics",
            hint: "Looking for a specific offer, profile or blog post? The contact page is the fastest fallback.",
        },
    },
    de: {
        languageName: "Deutsch",
        switchLabel: "EN",
        nav: {
            home: "Start",
            training: "Training",
            skills: "Skills",
            software: "Software",
            clients: "Kunden",
            pricing: "Preise",
            myWay: "Werdegang",
            blog: "Blog",
            book: "Kontakt",
            imprint: "Impressum",
            privacy: "Datenschutz",
        },
        headerTagline: "AI Dozentin · IT Trainerin · Business Consultant",
        bookTraining: "Kontakt",
        bookTrainingCall: "Kontakt / Termin buchen",
        requestTraining: "Training anfragen",
        bookConsultation: "Beratung buchen",
        serviceLabels: {
            audience: "Zielgruppe",
            format: "Format",
            duration: "Dauer",
            outcomes: "Lernergebnisse",
            bestFor: "Geeignet für",
        },
        assets: {
            title: "Business-Unterlagen",
            copy: "Laden Sie Dozentenprofil, Trainingsportfolio und AI & IT Trainingskatalog fuer Programmplanung, Anbieterpruefung und interne Weiterbildungsvorschlaege herunter.",
            lecturerProfile: "Dozentenprofil",
            trainingPortfolio: "Trainingsportfolio",
            trainingCatalogue: "AI & IT Trainingskatalog",
        },
        linkedin: "LinkedIn",
        menu: "Menü",
        navigation: "Navigation",
        close: "Schließen",
        open: "Öffnen",
        visit: "Website",
        github: "GitHub",
        home: {
            badge: "AI · IT · Cybersecurity · digitale Bildung",
            title: "AI-, IT- und Business-Dozentin für moderne digitale Bildung.",
            intro: "Corporate Training, berufliche Bildung, AI Literacy, Cybersecurity, Softwareentwicklung und digitale Transformation, remote für Europa und Australien.",
            coreOffer: "Kernangebot:",
            coreCopy: "praxisnahe Online-Vorlesungen, Workshops, Weiterbildungen und Curriculum-Design für Organisationen, die messbare Lernergebnisse, Business-Relevanz und verantwortungsvolle AI-Kompetenz brauchen.",
            exploreCapability: "Trainingsthemen ansehen",
            downloadProfile: "Dozentenprofil öffnen",
            mainFocus: "Fokus",
            focusValue: "AI · IT · Business Education",
            remote: "Remote-first",
            learnerRating: "Teilnehmerbewertung",
            signalTeaching: "AI-Lehre",
            signalWorkflows: "Agentic Workflows",
            photoFallback: "Portrait-Platzhalter. Ersetzen Sie den Bildpfad in src/data/profile.js durch die finale Mediendatei.",
            positioning: "Positionierung",
            positioningTitle: "Ein seriöses Trainerinnenprofil für moderne digitale Bildung.",
            positioningCopy: "Der Fokus ist klar: Lehre, Workshops, Vorlesungen und Trainings. Software und Consulting machen die Inhalte praktisch und anwendbar, statt abstrakt.",
            explore: "Mehr entdecken",
            exploreTitle: "Mehr als ein Trainingskatalog.",
            trainingOffers: "Trainingsangebote",
            trainingOffersTitle: "Drei klare Wege, mit mir zu arbeiten.",
            topics: "Trainingsthemen",
            topicsTitle: "Praxisnahe Themen für Unternehmen, Hochschulen und Bildungsanbieter.",
            topicsCopy: "AI Literacy, Python, SQL, Cybersecurity, Softwareentwicklung, Scrum, Digital Business und AI Governance werden als nutzbare Kompetenzen vermittelt, nicht als abstrakte Schlagworte.",
            audiences: "Für wen ich arbeite",
            audiencesTitle: "Ausgelegt für professionelle Bildungs- und Business-Umgebungen.",
            audiencesCopy: "Das Angebot ist für professionelle Kontexte gebaut, in denen Klarheit, Zuverlässigkeit, Lernaktivierung und Business-Relevanz wichtig sind.",
            formats: "Durchführungsformate",
            formatsTitle: "Von kompakten Briefings bis zu mehrwöchigen Kursen.",
            process: "Buchungsprozess",
            processTitle: "Ein klarer Weg vom ersten Gespräch zu nutzbaren Lernergebnissen.",
            servicesTitle: "Buchbare Trainings- und Consulting-Angebote.",
            servicesCopy: "Jedes Angebot kann je nach Zielgruppe, Niveau und gewünschtem Ergebnis als Workshop, Trainingstag, Kursmodul oder Curriculum-Support umgesetzt werden.",
            featuredTitle: "Featured Training Topics für direkte Buchungsanfragen.",
            remoteTitle: "Remote-Live-Training aus Brisbane für Europa und Australien.",
            remoteCopy: "Remote-Live-Training aus Brisbane für deutschsprachige und internationale Bildungsanbieter, mit flexibler Zeitzonenplanung für Deutschland, Schweiz, Österreich, Australien und verteilte Teams.",
            blogPreview: "Knowledge Hub",
            blogPreviewTitle: "Beiträge zu AI, Governance, digitaler Bildung und moderner Arbeit.",
            myWayPreview: "Professioneller Weg",
            myWayPreviewTitle: "Die persönliche Timeline bleibt sichtbar, nachdem das Angebot klar ist.",
            processSteps: [
                ["1", "Kurzes Erstgespräch", "Wir klären Zielgruppe, Wissensstand, Ziele, Zeitraum und Rahmenbedingungen."],
                ["2", "Trainingsumfang", "Thema, Format, Übungen und Erfolgskriterien werden realistisch zugeschnitten."],
                ["3", "Vorschlag", "Sie erhalten eine klare Empfehlung mit Format, Vorbereitung und nächsten Schritten."],
                ["4", "Durchführung", "Die Sessions laufen remote mit strukturierten Materialien, Praxisaufgaben und Aktivierung."],
                ["5", "Follow-up", "Teilnehmende erhalten bei Bedarf Materialien, Recaps oder Empfehlungen für nächste Schritte."],
            ],
            requestAvailability: "Verfügbarkeit anfragen",
            credible: "Glaubwürdig und persönlich",
            credibleTitle: "Persönlich genug für Vertrauen. Professionell genug für Buchungen.",
            credibleCopy: "Sie sehen schnell, wie ich unterrichte, welche Formate ich anbiete und warum die technische Tiefe hinter dem Training relevant ist. Das Profil soll persönlich, glaubwürdig und vor dem ersten Gespräch leicht einzuordnen sein.",
            jumpNavLabel: "Zu Abschnitt springen",
            jumpNav: [
                ["#services", "Services"],
                ["#audiences", "Zielgruppen"],
                ["#formats", "Formate"],
                ["#featured-topics", "Top-Themen"],
                ["#proof", "Nachweise"],
                ["#blog-preview", "Blog"],
                ["#process", "Prozess"],
                ["#my-way-preview", "Werdegang"],
                ["#contact-cta", "Kontakt"],
            ],
        },
        exploreCards: [
            ["Skills & Themen", "Eine klare Übersicht zu AI, Software, Cybersecurity, Daten, Business IT, Didaktik und Kommunikation.", "/skills"],
            ["Software", "Ausgewählte GitHub-Projekte rund um Automatisierung, AI Research, Kotlin Plugins und Mobile-/Game-Development.", "/software"],
            ["Werdegang", "Eine kompakte Timeline von frühem Programmieren und Studium bis Unternehmertum, Brisbane und internationalem Training.", "/my-way"],
        ],
        clientSection: {
            badge: "Ehemalige Kunden",
            title: "Gebucht von Akademien, Hochschulen und professionellen Bildungsanbietern.",
            copy: "Eine ausgewählte Übersicht von Organisationen und Bildungspartnern, die ich mit Kursen, Workshops, Research Assistance und professionellem IT-Training unterstützt habe.",
            feedbackLabel: "Feedback-Thema",
            feedbackNote: "Anonymisiertes Muster, kein benanntes Kunden-Zitat.",
            feedbackThemes: [
                "Klare Struktur, praktische Beispiele und ruhige Remote-Durchfuehrung.",
                "Technische Tiefe wird in Sprache uebersetzt, die Lernende nutzen koennen.",
                "Verlaessliche Vorbereitung, aktive Lehre und hilfreiche Materialien.",
                "Flexibel genug fuer gemischte Lernlevel, ohne das Ziel zu verlieren.",
            ],
        },
        softwareSection: {
            badge: "Software",
            title: "Softwareprojekte hinter dem Trainingsprofil.",
            copy: "Ausgewählte GitHub-Repositories mit praktischer Arbeit in Automatisierung, AI Research Workflows, Datenbereinigung, Kotlin Plugins, Mobile Apps und Game Development.",
            viewAll: "Softwareportfolio ansehen",
        },
        conversion: {
            title: "Brauchen Sie eine Dozentin, Trainerin oder Speakerin für AI, IT oder Business Technology?",
            copy: "Senden Sie Thema, Zielgruppe, Zeitraum und Lernziel. Sie erhalten eine klare Empfehlung für das passende Format.",
            topics: "Themen ansehen",
        },
        contact: {
            badge: "Kontakt",
            title: "Kontakt für Vorlesungen, Workshops, Trainings oder Talks.",
            copy: "Senden Sie Thema, Zielgruppe, Wissensstand, Zeitraum und gewuenschtes Ergebnis direkt per E-Mail, Telefon oder Terminbuchung. Ich schlage ein passendes Format vor: Keynote, Workshop, mehrtaegiges Training, Kursdurchfuehrung oder Curriculum-Support.",
            appointment: "Termin buchen",
            appointmentTitle: "Direkt einen Termin buchen",
            appointmentCopy: "Wenn Sie direkt einen Termin auswaehlen moechten, nutzen Sie den Kalender unten. Kurzer Kontext per E-Mail vor dem Call ist hilfreich, aber nicht erforderlich.",
            calendarTitle: "Google Calendar Terminbuchung",
            emailButton: "E-Mail schreiben",
            fallbackTitle: "Direkter Kontakt",
            fallbackCopy: "Kontaktieren Sie mich direkt per E-Mail oder Telefon. Es wird kein Website-Formular mehr genutzt, daher haengt die Anfrage nicht von SMTP- oder Server-Mail-Einstellungen ab.",
            calendarFallback: "Termin buchen",
        },
        analytics: {
            title: "Datenschutzfreundliche Analyse",
            copy: "Ich nutze Google Analytics nur nach Zustimmung, um zu verstehen, welche Seiten hilfreich sind. IP-Anonymisierung ist aktiviert.",
            decline: "Ablehnen",
            accept: "Akzeptieren",
        },
        notFound: {
            badge: "404 / Seite nicht gefunden",
            title: "Diese Seite ist nicht im Trainingsplan.",
            copy: "Der Link ist eventuell veraltet, verschoben oder falsch eingegeben. Nutzen Sie einen der Hauptpfade, um weiterzugehen.",
            home: "Zur Startseite",
            contact: "Kontakt / Buchung",
            training: "Trainingsthemen ansehen",
            hint: "Suchen Sie ein bestimmtes Angebot, Profil oder einen Blogbeitrag? Die Kontaktseite ist der schnellste Fallback.",
        },
    },
};

/**
 * @typedef {"en" | "de"} Language
 * @typedef {{
 *   language: Language,
 *   toggleLanguage: () => void,
 *   t: typeof dictionaries.en
 * }} LanguageContextValue
 */

const LanguageContext = createContext(/** @type {LanguageContextValue | null} */ (null));

/**
 * @param {string | null | undefined} value
 * @returns {Language}
 */
function resolveLanguage(value) {
    return value === "de" || value === "en" ? value : DEFAULT_LANGUAGE;
}

export function LanguageProvider({children}) {
    const [language, setLanguage] = useState(() => resolveLanguage(localStorage.getItem(STORAGE_KEY)));

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, language);
        document.documentElement.lang = language;
    }, [language]);

    const toggleLanguage = useCallback(() => {
        setLanguage((current) => current === "en" ? "de" : "en");
    }, []);

    const value = useMemo(() => ({
        language,
        toggleLanguage,
        t: dictionaries[language],
    }), [language, toggleLanguage]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
    return context;
}

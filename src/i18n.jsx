import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "carina_site_language";

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
      myWay: "My Way",
      blog: "Blog",
      book: "Contact",
      imprint: "Imprint",
      privacy: "Privacy",
    },
    headerTagline: "AI Lecturer · IT Trainer · Business Consultant",
    bookTraining: "Contact",
    bookTrainingCall: "Contact / book a call",
    linkedin: "LinkedIn",
    menu: "Menu",
    close: "Close",
    open: "Open",
    visit: "Visit",
    github: "GitHub",
    home: {
      badge: "AI lecturer · IT trainer · business consultant",
      title: "Practical AI and IT education for teams that need competence, not hype.",
      intro: "I am Carina Sophie Schoppe, a Brisbane-based lecturer and consultant for AI, software, cybersecurity and business technology. I design training that is structured, practical and usable in real work.",
      coreOffer: "Core offer:",
      coreCopy: "online lectures, workshops, professional development courses and curriculum design for AI adoption, software, cybersecurity, data, business informatics and digital transformation.",
      exploreCapability: "Explore capability map",
      mainFocus: "Main focus",
      focusValue: "AI · IT · Business Capability",
      remote: "Remote-first",
      learnerRating: "Learner rating",
      positioning: "Positioning",
      positioningTitle: "A serious trainer profile for modern digital education.",
      positioningCopy: "The focus is clear: teaching, workshops, lectures and training delivery. Software and consulting are credibility layers that make the training practical, not abstract.",
      explore: "Explore",
      exploreTitle: "More than a training catalogue.",
      trainingOffers: "Training offers",
      trainingOffersTitle: "Three focused ways to work with me.",
      requestAvailability: "Request availability",
      credible: "Credible and human",
      credibleTitle: "Personal enough to trust. Professional enough to book.",
      credibleCopy: "You get a clear view of how I teach, what I can deliver, and why the technical depth behind the training matters. It should feel personal, credible and easy to trust before a first call.",
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
      copy: "Use the form to send topic, audience, learner level, timeframe and desired outcome. I will suggest a suitable format: keynote, workshop, multi-day training, course delivery or curriculum support.",
      appointment: "Book an appointment",
      appointmentTitle: "Book an appointment directly",
      appointmentCopy: "Prefer to choose a time immediately? Use the appointment scheduler below after sending the context through the form.",
      calendarTitle: "Google Calendar appointment scheduler",
      emailButton: "Write an email",
      formTitle: "Send a request",
      name: "Name",
      email: "Email",
      phone: "Phone",
      topic: "Topic",
      audience: "Audience / timeframe",
      message: "Message",
      send: "Send request",
      sending: "Sending...",
      success: "Message sent. I will reply by email.",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@example.com",
      phonePlaceholder: "+49 ...",
      topicPlaceholder: "AI training, keynote, course...",
      audiencePlaceholder: "Team size, learner level, preferred date",
      messagePlaceholder: "Tell me what you need, who the training is for, and what outcome you want.",
    },
    analytics: {
      title: "Privacy-friendly analytics",
      copy: "I use Google Analytics only after consent to understand which pages are useful. IP anonymisation is enabled.",
      decline: "Decline",
      accept: "Accept",
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
      myWay: "Werdegang",
      blog: "Blog",
      book: "Kontakt",
      imprint: "Impressum",
      privacy: "Datenschutz",
    },
    headerTagline: "AI Dozentin · IT Trainerin · Business Consultant",
    bookTraining: "Kontakt",
    bookTrainingCall: "Kontakt / Termin buchen",
    linkedin: "LinkedIn",
    menu: "Menü",
    close: "Schließen",
    open: "Öffnen",
    visit: "Website",
    github: "GitHub",
    home: {
      badge: "AI Dozentin · IT Trainerin · Business Consultant",
      title: "Praktische AI- und IT-Bildung für Teams, die Kompetenz statt Hype brauchen.",
      intro: "Ich bin Carina Sophie Schoppe, Dozentin und Consultant für AI, Software, Cybersecurity und Business Technology mit Sitz in Brisbane. Ich entwickle Trainings, die strukturiert, praxisnah und im echten Arbeitsalltag nutzbar sind.",
      coreOffer: "Kernangebot:",
      coreCopy: "Online-Vorlesungen, Workshops, berufliche Weiterbildungen und Curriculum-Design für AI-Adoption, Software, Cybersecurity, Daten, Wirtschaftsinformatik und digitale Transformation.",
      exploreCapability: "Skill-Map ansehen",
      mainFocus: "Fokus",
      focusValue: "AI · IT · Business Capability",
      remote: "Remote-first",
      learnerRating: "Teilnehmerbewertung",
      positioning: "Positionierung",
      positioningTitle: "Ein seriöses Trainerinnenprofil für moderne digitale Bildung.",
      positioningCopy: "Der Fokus ist klar: Lehre, Workshops, Vorlesungen und Trainings. Software und Consulting machen die Inhalte praktisch und anwendbar, statt abstrakt.",
      explore: "Mehr entdecken",
      exploreTitle: "Mehr als ein Trainingskatalog.",
      trainingOffers: "Trainingsangebote",
      trainingOffersTitle: "Drei klare Wege, mit mir zu arbeiten.",
      requestAvailability: "Verfügbarkeit anfragen",
      credible: "Glaubwürdig und persönlich",
      credibleTitle: "Persönlich genug für Vertrauen. Professionell genug für Buchungen.",
      credibleCopy: "Sie sehen schnell, wie ich unterrichte, welche Formate ich anbiete und warum die technische Tiefe hinter dem Training relevant ist. Das Profil soll persönlich, glaubwürdig und vor dem ersten Gespräch leicht einzuordnen sein.",
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
      copy: "Nutzen Sie das Formular für Thema, Zielgruppe, Wissensstand, Zeitraum und gewünschtes Ergebnis. Ich schlage ein passendes Format vor: Keynote, Workshop, mehrtägiges Training, Kursdurchführung oder Curriculum-Support.",
      appointment: "Termin buchen",
      appointmentTitle: "Direkt einen Termin buchen",
      appointmentCopy: "Wenn Sie direkt einen Termin auswählen möchten, nutzen Sie den Kalender nach dem Formular. Das Formular gibt mir vorher den nötigen Kontext.",
      calendarTitle: "Google Calendar Terminbuchung",
      emailButton: "E-Mail schreiben",
      formTitle: "Anfrage senden",
      name: "Name",
      email: "E-Mail",
      phone: "Telefon",
      topic: "Thema",
      audience: "Zielgruppe / Zeitraum",
      message: "Nachricht",
      send: "Anfrage senden",
      sending: "Wird gesendet...",
      success: "Nachricht gesendet. Ich antworte per E-Mail.",
      namePlaceholder: "Ihr Name",
      emailPlaceholder: "sie@example.com",
      phonePlaceholder: "+49 ...",
      topicPlaceholder: "AI Training, Keynote, Kurs...",
      audiencePlaceholder: "Teamgröße, Lernlevel, Wunschdatum",
      messagePlaceholder: "Beschreiben Sie kurz, was gebraucht wird, für wen das Training ist und welches Ziel erreicht werden soll.",
    },
    analytics: {
      title: "Datenschutzfreundliche Analyse",
      copy: "Ich nutze Google Analytics nur nach Zustimmung, um zu verstehen, welche Seiten hilfreich sind. IP-Anonymisierung ist aktiviert.",
      decline: "Ablehnen",
      accept: "Akzeptieren",
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem(STORAGE_KEY) || "en");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    toggleLanguage: () => setLanguage((current) => current === "en" ? "de" : "en"),
    t: dictionaries[language],
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}

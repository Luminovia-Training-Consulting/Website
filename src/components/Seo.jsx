import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {seoHomeFaqs} from "../data/seoContent.js";
import {PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";

const SITE_URL = "https://luminovia.org";
const DEFAULT_IMAGE = `${SITE_URL}/images/luminovia-og.jpg`;
const schemaServiceOffers = [
    ["AI & GenAI Training", "Practical training on generative AI concepts, business use cases, limits, risks and responsible day-to-day adoption."],
    ["AI Literacy for Teams", "Clear AI literacy training for shared language, practical confidence and sensible AI usage rules."],
    ["Prompt Engineering & Agentic Workflows", "Structured prompting, workflow decomposition and supervised agentic work patterns for real business processes."],
    ["AI Governance & Responsible AI", "Training on accountability, risk classes, data handling, human oversight and practical governance routines."],
    ["Python, SQL & Data Skills", "Applied programming and data training for automation, analysis and databases."],
    ["Software Development & APIs", "Foundations and applied training around programming, API thinking, backend concepts and software project structure."],
    ["Cybersecurity & Pentesting Fundamentals", "Security awareness and technical foundations for web security, ethical hacking, SOC basics and defensive thinking."],
    ["Scrum, Agile & Digital Project Work", "Practical project work training for clearer collaboration, delivery structure and AI-aware coordination."],
    ["Business Computer Science & Digital Transformation", "Business IT training connecting processes, systems, data, IT management and organisational change."],
    ["IT & Business Consulting", "Consulting for AI use cases, IT processes, business technology decisions, learning architecture and digital enablement."],
    ["Curriculum Design & Blended Learning", "Support for learning paths, exercises, slides, labs, assessment logic and blended delivery formats."],
];

const routeMeta = {
    en: {
        "/": {
            title: "Luminovia Training & Consulting — AI, IT & Digital Capability Training",
            description: "Luminovia Training & Consulting provides practical AI, IT, cybersecurity, software, digital business and learning-design training, workshops and consulting for organisations, education providers and remote-first teams.",
        },
        "/training": {
            title: "Training | AI, IT & Digital Capability Training",
            description: "Explore practical AI training, IT training, cybersecurity training, software, data, digital business and curriculum-design workshops for organisations and education providers.",
        },
        "/offers": {
            title: "Offers | Luminovia Training & Consulting",
            description: "Clear Luminovia packages for live training, consulting sprints, project support, keynotes, curriculum design and larger digital enablement programmes.",
        },
        "/consulting": {
            title: "Consulting | IT, AI and Business Advisory",
            description: "Consulting portfolio for AI use cases, IT and process advisory, business technology, curriculum design, roadmaps and digital enablement.",
        },
        "/projects": {
            title: "Project Portfolio | AI Research, Automation and Consulting Projects",
            description: "Selected Luminovia project work across automation, AI research workflows, consulting support, software prototypes and learning-friendly technical implementation.",
        },
        "/portfolio": {
            title: "Project Portfolio | AI Research, Automation and Consulting Projects",
            description: "Selected Luminovia project work across automation, AI research workflows, consulting support, software prototypes and learning-friendly technical implementation.",
        },
        "/clients": {
            title: "Delivery Contexts | Education, Training and Collaboration Proof",
            description: "Selected public delivery contexts, education partners, topic areas and collaboration proof behind Luminovia's training and consulting profile.",
        },
        "/pricing": {
            title: "Pricing | Training, Consulting and Session Rates",
            description: "Transparent net rates: EUR 55 per 45-minute teaching unit, EUR 100 per consulting hour, EUR 500 half day and EUR 1,000 full day including preparation and agreed standard materials.",
        },
        "/about": {
            title: "Company | Luminovia Training & Consulting",
            description: "Company profile for Luminovia Training & Consulting, led by CEO and founder Carina Sophie Schoppe.",
        },
        "/contact": {
            title: "Contact & Booking | Book Training or Consulting",
            description: "Contact Luminovia to book AI, IT and digital capability training, consulting, workshops, talks, course delivery or programme planning.",
        },
        "/imprint": {
            title: "Imprint | Luminovia",
            description: "Legal notice and contact details for Luminovia Training & Consulting.",
        },
        "/privacy": {
            title: "Privacy Policy | Luminovia",
            description: "Privacy policy for the Luminovia website, including analytics and contact information.",
        },
        "/terms": {
            title: "Terms & Conditions | Luminovia",
            description: "Terms and conditions, payment terms and bank information for Luminovia Training & Consulting invoices and services.",
        },
    },
    de: {
        "/": {
            title: "Luminovia Training & Consulting — AI, IT & Digital Capability Training",
            description: "Luminovia Training & Consulting bietet praxisnahes KI-, IT-, Cybersecurity-, Software-, Digital-Business- und Learning-Design-Training sowie Workshops und Consulting für Organisationen, Bildungsanbieter und Remote-first-Teams.",
        },
        "/training": {
            title: "Training | KI, IT und digitale Kompetenz",
            description: "Praxisnahes KI-, IT- und Cybersecurity-Training sowie Kurse zu Software, Daten, Digital Business und Curriculum-Design für Organisationen und Bildungsanbieter.",
        },
        "/offers": {
            title: "Angebote | Luminovia Training & Consulting",
            description: "Klare Luminovia-Pakete für Live-Training, Consulting-Sprints, Projektbegleitung, Keynotes, Curriculum Design und größere Digital-Enablement-Programme.",
        },
        "/consulting": {
            title: "Consulting | IT-, KI- und Business-Beratung",
            description: "Consulting für KI-Anwendungsfälle, IT- und Prozessfragen, Business Technology, Curriculum-Design, Roadmaps und digitalen Kompetenzaufbau.",
        },
        "/projects": {
            title: "Projektportfolio | KI-Research, Automatisierung und Consulting",
            description: "Ausgewählte Luminovia-Projektarbeit zu Automatisierung, KI-Research-Workflows, Consulting-Support, Software-Prototypen und technischer Umsetzung.",
        },
        "/portfolio": {
            title: "Projektportfolio | KI-Research, Automatisierung und Consulting",
            description: "Ausgewählte Luminovia-Projektarbeit zu Automatisierung, KI-Research-Workflows, Consulting-Support, Software-Prototypen und technischer Umsetzung.",
        },
        "/clients": {
            title: "Lieferkontexte | Bildung, Training und Kooperationsnachweise",
            description: "Ausgewählte öffentliche Lieferkontexte, Bildungspartner, Themenbereiche und Kooperationsnachweise hinter dem Trainings- und Consulting-Profil von Luminovia.",
        },
        "/pricing": {
            title: "Preise | Training, Beratung und Sessions",
            description: "Transparente Netto-Sätze: 55 EUR je 45-Minuten-Unterrichtseinheit, 100 EUR je Beratungsstunde, 500 EUR je Halbtag und 1.000 EUR je Tag inklusive Vorbereitung und vereinbarten Standardmaterialien.",
        },
        "/about": {
            title: "Unternehmen | Luminovia Training & Consulting",
            description: "Unternehmensprofil von Luminovia Training & Consulting, geführt von CEO und Gründerin Carina Sophie Schoppe.",
        },
        "/contact": {
            title: "Kontakt & Buchung | Training oder Consulting buchen",
            description: "Kontaktieren Sie Luminovia für KI-, IT- und Digitalkompetenz-Training, Consulting, Workshops, Vorträge, Kursdurchführung oder Programmplanung.",
        },
        "/imprint": {
            title: "Impressum | Luminovia",
            description: "Impressum und Kontaktinformationen von Luminovia Training & Consulting.",
        },
        "/privacy": {
            title: "Datenschutzerklärung | Luminovia",
            description: "Datenschutzerklärung der Luminovia-Website, inklusive Analytics- und Kontaktinformationen.",
        },
        "/terms": {
            title: "Geschäfts- und Zahlungsbedingungen | Luminovia",
            description: "Geschäfts- und Zahlungsbedingungen sowie Bankinformationen für Rechnungen und Leistungen von Luminovia Training & Consulting.",
        },
    },
};

function upsertMeta(selector, attributes) {
    let element = document.head.querySelector(selector);
    if (!element) {
        element = document.createElement("meta");
        document.head.appendChild(element);
    }

    Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
}

function upsertLink(selector, attributes) {
    let element = document.head.querySelector(selector);
    if (!element) {
        element = document.createElement("link");
        document.head.appendChild(element);
    }

    Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
}

function upsertJsonLd(id, data) {
    let element = document.head.querySelector(`#${id}`);
    if (!element) {
        element = document.createElement("script");
        element.type = "application/ld+json";
        element.id = id;
        document.head.appendChild(element);
    }

    element.textContent = JSON.stringify(data);
}

function removeJsonLd(id) {
    document.head.querySelector(`#${id}`)?.remove();
}

function normalizePathname(pathname) {
    if (pathname === "/") return pathname;
    return pathname.replace(/\/+$/, "");
}

function buildBaseSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#luminovia`,
        name: PROFILE.name,
        url: `${SITE_URL}/`,
        image: DEFAULT_IMAGE,
        email: PROFILE.email,
        telephone: [PROFILE.phoneAustralia, PROFILE.phoneGermany],
        address: {
            "@type": "PostalAddress",
            streetAddress: "43/9 Eduard Place",
            postalCode: "4116",
            addressLocality: "Calamvale",
            addressRegion: "QLD",
            addressCountry: "AU",
        },
        areaServed: ["Germany", "Austria", "Switzerland", "Australia", "Europe", "Worldwide"],
        knowsLanguage: ["German", "English", "Spanish"],
        sameAs: [PROFILE.linkedin, PROFILE.github, PROFILE.founderPortfolio],
        founder: {
            "@type": "Person",
            "@id": `${SITE_URL}/#carina-sophie-schoppe`,
            name: PROFILE.founder,
            jobTitle: "CEO and Founder",
            url: PROFILE.founderPortfolio,
            sameAs: [PROFILE.linkedin, PROFILE.founderPortfolio],
        },
        serviceType: schemaServiceOffers.map(([title]) => title),
        makesOffer: schemaServiceOffers.map(([title, description]) => ({
            "@type": "Offer",
            itemOffered: {
                "@type": "Service",
                name: title,
                description,
                audience: "Companies, universities, training providers, public-sector organisations and international education partners",
                areaServed: ["Europe", "Australia", "Worldwide"],
                provider: {"@id": `${SITE_URL}/#luminovia`},
            },
        })),
    };
}

function buildBreadcrumbSchema(pathname, title) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${SITE_URL}/`,
            },
            ...(pathname === "/" ? [] : [{
                "@type": "ListItem",
                position: 2,
                name: title.split("|")[0].trim(),
                item: `${SITE_URL}${pathname}`,
            }]),
        ],
    };
}

export default function Seo() {
    const {pathname} = useLocation();
    const {language} = useLanguage();
    const normalizedPathname = normalizePathname(pathname);
    const isTrainingTopicRoute = /^\/training\/[^/]+$/.test(normalizedPathname);
    const [trainingTopicState, setTrainingTopicState] = useState(null);
    const trainingTopicMeta = trainingTopicState?.pathname === normalizedPathname && trainingTopicState.language === language
        ? trainingTopicState.meta
        : null;

    useEffect(() => {
        let active = true;

        if (!isTrainingTopicRoute) return undefined;

        import("../data/trainingSeo.js").then(({trainingSeoForPath}) => {
            if (active) {
                setTrainingTopicState({
                    pathname: normalizedPathname,
                    language,
                    meta: trainingSeoForPath(normalizedPathname, language) || null,
                });
            }
        });

        return () => {
            active = false;
        };
    }, [isTrainingTopicRoute, language, normalizedPathname]);

    const currentMeta = trainingTopicMeta || routeMeta[language][normalizedPathname] || {
        title: language === "de" ? "Seite nicht gefunden | Luminovia" : "Page not found | Luminovia",
        description: language === "de" ? "Diese Seite wurde nicht gefunden. Nutzen Sie Startseite, Angebote oder Kontakt, um zur passenden Information zu gelangen." : "This page was not found. Use the homepage, offers or contact page to find the right information.",
    };
    const {title, description} = currentMeta;

    useEffect(() => {
        if (isTrainingTopicRoute && !trainingTopicMeta) return;

        const canonical = `${SITE_URL}${normalizedPathname === "/" ? "/" : normalizedPathname}`;
        document.title = title;

        upsertMeta('meta[name="description"]', {name: "description", content: description});
        upsertMeta('meta[name="robots"]', {name: "robots", content: "index, follow, max-image-preview:large"});
        upsertMeta('meta[property="og:title"]', {property: "og:title", content: title});
        upsertMeta('meta[property="og:description"]', {property: "og:description", content: description});
        upsertMeta('meta[property="og:url"]', {property: "og:url", content: canonical});
        upsertMeta('meta[property="og:image"]', {property: "og:image", content: DEFAULT_IMAGE});
        upsertMeta('meta[property="og:type"]', {property: "og:type", content: "website"});
        upsertMeta('meta[name="twitter:card"]', {name: "twitter:card", content: "summary_large_image"});
        upsertMeta('meta[name="twitter:title"]', {name: "twitter:title", content: title});
        upsertMeta('meta[name="twitter:description"]', {name: "twitter:description", content: description});
        upsertLink('link[rel="canonical"]', {rel: "canonical", href: canonical});
        upsertLink('link[rel="alternate"][hreflang="en"]', {rel: "alternate", hreflang: "en", href: canonical});
        upsertLink('link[rel="alternate"][hreflang="de"]', {rel: "alternate", hreflang: "de", href: canonical});

        upsertJsonLd("dynamic-organisation-service-schema", buildBaseSchema());
        upsertJsonLd("dynamic-breadcrumb-schema", buildBreadcrumbSchema(normalizedPathname, title));

        if (normalizedPathname === "/") {
            upsertJsonLd("dynamic-faq-schema", {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: seoHomeFaqs.map((item) => ({
                    "@type": "Question",
                    name: item.q,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: item.a,
                    },
                })),
            });
        } else {
            removeJsonLd("dynamic-faq-schema");
        }
    }, [description, isTrainingTopicRoute, normalizedPathname, title, trainingTopicMeta]);

    return null;
}

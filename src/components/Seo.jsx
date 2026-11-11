import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {canonicalPageUrl, notFoundMeta, routeMeta, SITE_URL} from "../data/seoContent.js";
import {PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";

const DEFAULT_IMAGE = `${SITE_URL}/images/luminovia-og.jpg?v=20261111`;
const schemaServiceOffers = [
    ["AI & GenAI Training", "Practical training on generative AI concepts, business use cases, limits, risks and responsible day-to-day adoption."],
    ["AI Literacy for Teams", "Clear AI literacy training for shared language, practical confidence and sensible AI usage rules."],
    ["Prompt Engineering & Agentic Workflows", "Structured prompting, workflow decomposition and supervised agentic work patterns for real business processes."],
    ["AI Governance & Responsible AI", "Training on accountability, risk classes, data handling, human oversight and practical governance routines."],
    ["Python, SQL & Data Skills", "Applied programming and data training for automation, analysis and databases."],
    ["Software Development, Design & APIs", "Training in programming, software design and architecture, backend development and APIs."],
    ["Networking & IT Infrastructure", "Training in IP addressing, switching, routing, network services and troubleshooting."],
    ["Cybersecurity & Pentesting Fundamentals", "Security awareness and technical foundations for web security, ethical hacking, SOC basics and defensive thinking."],
    ["Scrum, Agile & Digital Project Work", "Practical project work training for clearer collaboration, delivery structure and AI-aware coordination."],
    ["Business Computer Science & Digital Transformation", "Business IT training connecting processes, systems, data, IT management and organisational change."],
    ["Business Administration & Economics", "Training in business functions, markets and commercial decisions."],
    ["Accounting & Tax Fundamentals", "Training in bookkeeping, financial statements and tax fundamentals through practice cases."],
    ["Employment Law & HR Fundamentals", "Training in employment contracts, working time and HR processes through practice cases."],
    ["Data Protection & Digital Law", "Training in GDPR, data protection and legal questions in IT, AI and cloud projects."],
    ["IT & Business Consulting", "Consulting for AI use cases, IT processes, business technology decisions, learning architecture and digital enablement."],
    ["Curriculum Design & Blended Learning", "Support for learning paths, exercises, slides, labs, assessment logic and blended delivery formats."],
];

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

function buildBreadcrumbSchema(pathname, title, language) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: language === "de" ? "Startseite" : "Home",
                item: `${SITE_URL}/`,
            },
            ...(pathname === "/" ? [] : [{
                "@type": "ListItem",
                position: 2,
                name: title.split("|")[0].trim(),
                item: canonicalPageUrl(pathname),
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
    const isTrainingTopicResolved = trainingTopicState?.pathname === normalizedPathname
        && trainingTopicState.language === language;
    const trainingTopicMeta = isTrainingTopicResolved
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

    const routeMetadata = routeMeta[language][normalizedPathname];
    const isMetadataPending = isTrainingTopicRoute && !isTrainingTopicResolved;
    const isNotFoundRoute = !isMetadataPending && !routeMetadata && !trainingTopicMeta;
    const currentMeta = trainingTopicMeta || routeMetadata || notFoundMeta[language];
    const {title, description} = currentMeta;

    useEffect(() => {
        if (isMetadataPending) return;

        const canonical = canonicalPageUrl(isNotFoundRoute ? "/" : normalizedPathname);
        document.title = title;

        upsertMeta('meta[name="description"]', {name: "description", content: description});
        upsertMeta('meta[name="robots"]', {
            name: "robots",
            content: isNotFoundRoute ? "noindex, follow" : "index, follow, max-image-preview:large",
        });
        upsertMeta('meta[property="og:title"]', {property: "og:title", content: title});
        upsertMeta('meta[property="og:description"]', {property: "og:description", content: description});
        upsertMeta('meta[property="og:url"]', {property: "og:url", content: canonical});
        upsertMeta('meta[property="og:image"]', {property: "og:image", content: DEFAULT_IMAGE});
        upsertMeta('meta[property="og:image:width"]', {property: "og:image:width", content: "1200"});
        upsertMeta('meta[property="og:image:height"]', {property: "og:image:height", content: "630"});
        upsertMeta('meta[property="og:image:type"]', {property: "og:image:type", content: "image/jpeg"});
        upsertMeta('meta[property="og:type"]', {property: "og:type", content: "website"});
        upsertMeta('meta[property="og:locale"]', {property: "og:locale", content: language === "de" ? "de_DE" : "en_AU"});
        upsertMeta('meta[name="twitter:card"]', {name: "twitter:card", content: "summary_large_image"});
        upsertMeta('meta[name="twitter:image"]', {name: "twitter:image", content: DEFAULT_IMAGE});
        upsertMeta('meta[name="twitter:image:alt"]', {name: "twitter:image:alt", content: "Luminovia Training & Consulting · IT, AI, Business"});
        upsertMeta('meta[name="twitter:title"]', {name: "twitter:title", content: title});
        upsertMeta('meta[name="twitter:description"]', {name: "twitter:description", content: description});
        upsertLink('link[rel="canonical"]', {rel: "canonical", href: canonical});

        if (isNotFoundRoute) {
            removeJsonLd("organisation-service-schema");
            removeJsonLd("dynamic-breadcrumb-schema");
            return;
        }

        upsertJsonLd("organisation-service-schema", buildBaseSchema());
        upsertJsonLd("dynamic-breadcrumb-schema", buildBreadcrumbSchema(normalizedPathname, title, language));
    }, [description, isMetadataPending, isNotFoundRoute, language, normalizedPathname, title]);

    return null;
}

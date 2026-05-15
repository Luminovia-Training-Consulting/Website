import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {seoHomeFaqs} from "../data/seoContent.js";
import {PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";

const SITE_URL = "https://carinaschoppe.com";
const DEFAULT_IMAGE = `${SITE_URL}/images/carina-hero.jpg`;
const schemaServiceOffers = [
    ["AI & GenAI Training", "Practical training on generative AI concepts, business use cases, limits, risks and responsible day-to-day adoption."],
    ["AI Literacy for Teams", "Clear AI literacy training for shared language, practical confidence and sensible AI usage rules."],
    ["Prompt Engineering & Agentic Workflows", "Structured prompting, workflow decomposition and supervised agentic work patterns for real business processes."],
    ["AI Governance & Responsible AI", "Training on accountability, risk classes, data handling, human oversight and practical governance routines."],
    ["Python, SQL & Data Skills", "Applied programming and data training for automation, analysis and databases."],
    ["Software Development & APIs", "Foundations and applied training around programming, API thinking, backend concepts and software project structure."],
    ["Cybersecurity & Pentesting Fundamentals", "Security awareness and technical foundations for web security, ethical hacking, SOC basics and defensive thinking."],
    ["Scrum, Agile & Digital Project Work", "Practical project work training for clearer collaboration, delivery structure and AI-aware coordination."],
    ["Business Informatics & Digital Transformation", "Business IT training connecting processes, systems, data, IT management and organisational change."],
    ["IT, AI & Business Consulting", "Consulting for AI use cases, IT processes, business technology decisions, learning architecture and digital enablement."],
    ["Curriculum Design & Blended Learning", "Support for learning paths, exercises, slides, labs, assessment logic and blended delivery formats."],
];

const routeMeta = {
    en: {
        "/": {
            title: "Carina Sophie Schoppe | AI, IT & Business Consultant",
            description: "Book Carina Sophie Schoppe for AI, IT and business consulting, project support, corporate training, cybersecurity, software development and digital education from Brisbane.",
        },
        "/training": {
            title: "Offers | AI, IT and Business Training, Lectures & Consulting",
            description: "Book AI, IT and business technology offers: live training, lectures, workshops, consulting sprints, project support, AI governance, cybersecurity and digital transformation.",
        },
        "/skills": {
            title: "Skills & Consulting Topics | AI, IT, Cybersecurity and Business Technology",
            description: "A practical skill map for AI literacy, agentic workflows, Python, SQL, cybersecurity, IT consulting, AI consulting, business informatics and digital education.",
        },
        "/projects": {
            title: "Project Portfolio | AI Research, Automation and Consulting Projects",
            description: "Selected projects by Carina Sophie Schoppe across automation, AI research workflows, consulting support, Kotlin plugins, mobile apps and learning-friendly technical implementation.",
        },
        "/software": {
            title: "Project Portfolio | AI Research, Automation and Consulting Projects",
            description: "Selected projects by Carina Sophie Schoppe across automation, AI research workflows, consulting support, Kotlin plugins, mobile apps and learning-friendly technical implementation.",
        },
        "/portfolio": {
            title: "Consulting Portfolio | IT, AI and Business Consulting",
            description: "Portfolio and proof for IT consulting, AI consulting, business consulting, digital education, technical project practice and professional training delivery.",
        },
        "/pricing": {
            title: "Pricing | AI, IT and Business Training Rates",
            description: "Transparent orientation rates for education-sector teaching, corporate training, talks and workshops, plus consulting and project implementation pricing on request.",
        },
        "/my-way": {
            title: "My Way | Professional Timeline and Teaching Background",
            description: "Professional timeline from business informatics, software practice and entrepreneurship to AI, IT and cybersecurity training from Brisbane.",
        },
        "/blog": {
            title: "Blog | AI Governance, Digital Education and Business IT",
            description: "Articles on agentic AI, AI governance, digital education, project management, cybersecurity, automation risk and modern teaching.",
        },
        "/contact": {
            title: "Contact & Booking | Book AI, IT and Business Training",
            description: "Contact Carina Sophie Schoppe for lectures, workshops, talks, course delivery and training consultations by email, phone or calendar booking.",
        },
        "/imprint": {
            title: "Imprint | Carina Sophie Schoppe",
            description: "Legal notice and contact details for Carina Sophie Schoppe.",
        },
        "/privacy": {
            title: "Privacy Policy | Carina Sophie Schoppe",
            description: "Privacy policy for the Carina Sophie Schoppe website, including analytics and contact information.",
        },
    },
    de: {
        "/": {
            title: "Carina Sophie Schoppe | AI-, IT- und Business-Consultant",
            description: "Buchen Sie Carina Sophie Schoppe für AI-, IT- und Business-Consulting, Projektunterstützung, Corporate Training, Cybersecurity, Softwareentwicklung und digitale Bildung aus Brisbane.",
        },
        "/training": {
            title: "Angebote | AI-, IT- und Business-Training, Lehre & Consulting",
            description: "Buchbare AI-, IT- und Business-Technology-Angebote: Live-Training, Vorlesungen, Workshops, Consulting-Sprints, Projektbegleitung, AI Governance, Cybersecurity und digitale Transformation.",
        },
        "/skills": {
            title: "Kompetenzen & Consulting-Themen | AI, IT, Cybersecurity und Business-Technology",
            description: "Eine praktische Kompetenzübersicht für AI Literacy, agentische Workflows, Python, SQL, Cybersecurity, IT-Consulting, AI-Consulting, Wirtschaftsinformatik und digitale Bildung.",
        },
        "/projects": {
            title: "Projektportfolio | AI Research, Automatisierung und Consulting",
            description: "Ausgewählte Projekte von Carina Sophie Schoppe zu Automatisierung, AI-Research-Workflows, Consulting-Support, Kotlin-Plugins, mobilen Apps und technischer Umsetzung.",
        },
        "/software": {
            title: "Projektportfolio | AI Research, Automatisierung und Consulting",
            description: "Ausgewählte Projekte von Carina Sophie Schoppe zu Automatisierung, AI-Research-Workflows, Consulting-Support, Kotlin-Plugins, mobilen Apps und technischer Umsetzung.",
        },
        "/portfolio": {
            title: "Consulting-Portfolio | IT-, AI- und Business-Consulting",
            description: "Portfolio und Nachweise für IT-Consulting, AI-Consulting, Business-Consulting, digitale Bildung, technische Projektpraxis und professionelle Trainingsdurchführung.",
        },
        "/pricing": {
            title: "Preise | AI-, IT- und Business-Training",
            description: "Transparente Netto-Ab-Preise für geförderte Bildung, Corporate Training, Vorträge und Workshops sowie Consulting- und Projektpreise auf Anfrage.",
        },
        "/my-way": {
            title: "Werdegang | Professionelle Timeline und Lehrprofil",
            description: "Professioneller Werdegang von Wirtschaftsinformatik, Softwarepraxis und Unternehmertum bis zu AI-, IT- und Cybersecurity-Training aus Brisbane.",
        },
        "/blog": {
            title: "Blog | AI Governance, digitale Bildung und Business-IT",
            description: "Beiträge zu Agentic AI, AI Governance, digitaler Bildung, Projektmanagement, Cybersecurity, Automatisierungsrisiken und moderner Lehre.",
        },
        "/contact": {
            title: "Kontakt & Buchung | AI-, IT- und Business-Training buchen",
            description: "Kontaktieren Sie Carina Sophie Schoppe für Vorlesungen, Workshops, Vorträge, Kursdurchführung und Trainingsberatung per E-Mail, Telefon oder Kalenderbuchung.",
        },
        "/imprint": {
            title: "Impressum | Carina Sophie Schoppe",
            description: "Impressum und Kontaktinformationen von Carina Sophie Schoppe.",
        },
        "/privacy": {
            title: "Datenschutzerklärung | Carina Sophie Schoppe",
            description: "Datenschutzerklärung der Website von Carina Sophie Schoppe, inklusive Analytics- und Kontaktinformationen.",
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

function buildBaseSchema() {
    return {
        "@context": "https://schema.org",
        "@type": ["Person", "ProfessionalService"],
        "@id": `${SITE_URL}/#carina-sophie-schoppe`,
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
        sameAs: [PROFILE.linkedin, PROFILE.github],
        serviceType: schemaServiceOffers.map(([title]) => title),
        makesOffer: schemaServiceOffers.map(([title, description]) => ({
            "@type": "Offer",
            itemOffered: {
                "@type": "Service",
                name: title,
                description,
                audience: "Companies, universities, training providers, public-sector organisations and international education partners",
                areaServed: ["Europe", "Australia", "Worldwide"],
                provider: {"@id": `${SITE_URL}/#carina-sophie-schoppe`},
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
    const isBlogPostRoute = /^\/blog\/[^/]+$/.test(pathname);
    const isTrainingTopicRoute = /^\/training\/[^/]+$/.test(pathname);
    const currentMeta = isBlogPostRoute ? {
        title: language === "de" ? "Blogbeitrag | Carina Sophie Schoppe" : "Blog Article | Carina Sophie Schoppe",
        description: language === "de" ? "Fachbeitrag von Carina Sophie Schoppe zu AI, Governance, digitaler Bildung, Business-IT oder moderner Arbeit." : "Long-form article by Carina Sophie Schoppe on AI, governance, digital education, business IT or modern work.",
    } : isTrainingTopicRoute ? {
        title: language === "de" ? "Trainingsthema | AI-, IT- und Business-Bildung" : "Training Topic | AI, IT and Business Education",
        description: language === "de" ? "Detaillierte Themenseite für AI, IT, Softwareentwicklung, Cybersecurity, Projektmanagement, digitale Transformation oder Business-Bildung." : "Detailed training topic page for AI, IT, software development, cybersecurity, project management, digital transformation or business education.",
    } : routeMeta[language][pathname] || {
        title: language === "de" ? "Seite nicht gefunden | Carina Sophie Schoppe" : "Page not found | Carina Sophie Schoppe",
        description: language === "de" ? "Diese Seite wurde nicht gefunden. Nutzen Sie Startseite, Trainingsthemen oder Kontakt, um zur passenden Information zu gelangen." : "This page was not found. Use the homepage, training topics or contact page to find the right information.",
    };
    const {title, description} = currentMeta;

    useEffect(() => {
        const canonical = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
        document.title = title;

        upsertMeta('meta[name="description"]', {name: "description", content: description});
        upsertMeta('meta[name="robots"]', {name: "robots", content: "index, follow, max-image-preview:large"});
        upsertMeta('meta[property="og:title"]', {property: "og:title", content: title});
        upsertMeta('meta[property="og:description"]', {property: "og:description", content: description});
        upsertMeta('meta[property="og:url"]', {property: "og:url", content: canonical});
        upsertMeta('meta[property="og:image"]', {property: "og:image", content: DEFAULT_IMAGE});
        upsertMeta('meta[property="og:type"]', {property: "og:type", content: isBlogPostRoute ? "article" : "website"});
        upsertMeta('meta[name="twitter:card"]', {name: "twitter:card", content: "summary_large_image"});
        upsertMeta('meta[name="twitter:title"]', {name: "twitter:title", content: title});
        upsertMeta('meta[name="twitter:description"]', {name: "twitter:description", content: description});
        upsertLink('link[rel="canonical"]', {rel: "canonical", href: canonical});
        upsertLink('link[rel="alternate"][hreflang="en"]', {rel: "alternate", hreflang: "en", href: canonical});
        upsertLink('link[rel="alternate"][hreflang="de"]', {rel: "alternate", hreflang: "de", href: canonical});

        upsertJsonLd("dynamic-person-service-schema", buildBaseSchema());
        upsertJsonLd("dynamic-breadcrumb-schema", buildBreadcrumbSchema(pathname, title));

        if (pathname === "/") {
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

        if (!isBlogPostRoute) {
            removeJsonLd("dynamic-blogpost-schema");
        }
    }, [description, isBlogPostRoute, pathname, title]);

    useEffect(() => {
        const blogMatch = pathname.match(/^\/blog\/([^/]+)$/);
        if (!blogMatch) return undefined;

        let active = true;
        import("../data/localizedContent.js").then(({localizedSiteContentForLanguage}) => {
            if (!active) return;
            const post = localizedSiteContentForLanguage(language).blogPosts.find((item) => item.slug === blogMatch[1]);
            if (!post) return;

            const canonical = `${SITE_URL}${pathname}`;
            const blogTitle = `${post.title} | Carina Sophie Schoppe Blog`;
            document.title = blogTitle;
            upsertMeta('meta[name="description"]', {name: "description", content: post.excerpt});
            upsertMeta('meta[property="og:title"]', {property: "og:title", content: blogTitle});
            upsertMeta('meta[property="og:description"]', {property: "og:description", content: post.excerpt});
            upsertMeta('meta[property="og:type"]', {property: "og:type", content: "article"});
            upsertJsonLd("dynamic-blogpost-schema", {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: post.title,
                description: post.excerpt,
                datePublished: post.date,
                dateModified: post.date,
                image: DEFAULT_IMAGE,
                author: {"@id": `${SITE_URL}/#carina-sophie-schoppe`},
                publisher: {"@id": `${SITE_URL}/#carina-sophie-schoppe`},
                mainEntityOfPage: canonical,
            });
        });

        return () => {
            active = false;
            removeJsonLd("dynamic-blogpost-schema");
        };
    }, [language, pathname]);

    return null;
}

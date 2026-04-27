import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {seoHomeFaqs} from "../data/homeContent.js";
import {PROFILE} from "../data/profile.js";

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
    ["Curriculum Design & Blended Learning", "Support for learning paths, exercises, slides, labs, assessment logic and blended delivery formats."],
];

const routeMeta = {
    "/": {
        title: "Carina Sophie Schoppe | AI, IT & Business Lecturer",
        description: "Book Carina Sophie Schoppe for AI, IT, cybersecurity, software development, business informatics and digital education training across Europe and Australia.",
    },
    "/training": {
        title: "Training & Services | AI, IT and Cybersecurity Lecturer",
        description: "Book AI training, GenAI workshops, AI governance, Python, SQL, software development, cybersecurity, Scrum and digital transformation training.",
    },
    "/skills": {
        title: "Skills & Training Topics | AI, IT, Cybersecurity and Business IT",
        description: "A practical skill map for AI literacy, agentic workflows, Python, SQL, cybersecurity, software development, business informatics and digital education.",
    },
    "/software": {
        title: "Software Portfolio | AI Research, Automation and Development Projects",
        description: "Selected GitHub projects by Carina Sophie Schoppe across automation, AI research workflows, Kotlin plugins, mobile apps and learning-friendly software examples.",
    },
    "/portfolio": {
        title: "Client Proof & Collaborations | Lecturer Portfolio",
        description: "Selected collaborations, education-sector projects and professional proof for AI, IT, cybersecurity and software development training delivery.",
    },
    "/pricing": {
        title: "Pricing | AI, IT and Business Training Rates",
        description: "Transparent orientation rates for education-sector teaching, corporate training, talks, workshops and custom AI or IT training requests.",
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
            streetAddress: "Unit 28, 436 Ann Street",
            postalCode: "4000",
            addressLocality: "Brisbane",
            addressCountry: "AU",
        },
        areaServed: ["Germany", "Austria", "Switzerland", "Australia", "Europe", "APAC"],
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
                areaServed: ["Europe", "Australia", "APAC"],
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
    const isBlogPostRoute = /^\/blog\/[^/]+$/.test(pathname);
    const isTrainingTopicRoute = /^\/training\/[^/]+$/.test(pathname);
    const currentMeta = isBlogPostRoute ? {
        title: "Blog Article | Carina Sophie Schoppe",
        description: "Long-form article by Carina Sophie Schoppe on AI, governance, digital education, business IT or modern work.",
    } : isTrainingTopicRoute ? {
        title: "Training Topic | AI, IT and Business Education",
        description: "Detailed training topic page for AI, IT, software development, cybersecurity, project management, digital transformation or business education.",
    } : routeMeta[pathname] || {
        title: "Carina Sophie Schoppe | AI, IT & Business Lecturer",
        description: "Professional AI, IT, cybersecurity, software development and digital education training for companies, universities and training providers.",
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
        import("../data/content.js").then(({blogPosts}) => {
            if (!active) return;
            const post = blogPosts.find((item) => item.slug === blogMatch[1]);
            if (!post) return;

            const canonical = `${SITE_URL}${pathname}`;
            document.title = `${post.title} | Carina Sophie Schoppe Blog`;
            upsertMeta('meta[name="description"]', {name: "description", content: post.excerpt});
            upsertMeta('meta[property="og:title"]', {property: "og:title", content: `${post.title} | Carina Sophie Schoppe Blog`});
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
        };
    }, [pathname]);

    return null;
}

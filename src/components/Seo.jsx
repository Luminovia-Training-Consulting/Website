import {useEffect, useMemo} from "react";
import {useLocation} from "react-router-dom";
import {blogPosts, serviceOfferings} from "../data/content.js";
import {PROFILE} from "../data/profile.js";
import {useSiteContent} from "../data/localizedContent.js";

const SITE_URL = "https://carinaschoppe.com";
const DEFAULT_IMAGE = `${SITE_URL}/images/carina-hero.jpg`;

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
        serviceType: serviceOfferings.map((service) => service.title),
        makesOffer: serviceOfferings.slice(0, 10).map((service) => ({
            "@type": "Offer",
            itemOffered: {
                "@type": "Service",
                name: service.title,
                description: service.description,
                audience: service.audience,
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
    const {faqs} = useSiteContent();

    const current = useMemo(() => {
        const blogMatch = pathname.match(/^\/blog\/([^/]+)$/);
        if (blogMatch) {
            const post = blogPosts.find((item) => item.slug === blogMatch[1]);
            if (post) {
                return {
                    title: `${post.title} | Carina Sophie Schoppe Blog`,
                    description: post.excerpt,
                    blogPost: post,
                };
            }
        }

        return routeMeta[pathname] || {
            title: "Carina Sophie Schoppe | AI, IT & Business Lecturer",
            description: "Professional AI, IT, cybersecurity, software development and digital education training for companies, universities and training providers.",
        };
    }, [pathname]);

    useEffect(() => {
        const canonical = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
        document.title = current.title;

        upsertMeta('meta[name="description"]', {name: "description", content: current.description});
        upsertMeta('meta[name="robots"]', {name: "robots", content: "index, follow, max-image-preview:large"});
        upsertMeta('meta[property="og:title"]', {property: "og:title", content: current.title});
        upsertMeta('meta[property="og:description"]', {property: "og:description", content: current.description});
        upsertMeta('meta[property="og:url"]', {property: "og:url", content: canonical});
        upsertMeta('meta[property="og:image"]', {property: "og:image", content: DEFAULT_IMAGE});
        upsertMeta('meta[property="og:type"]', {property: "og:type", content: current.blogPost ? "article" : "website"});
        upsertMeta('meta[name="twitter:card"]', {name: "twitter:card", content: "summary_large_image"});
        upsertMeta('meta[name="twitter:title"]', {name: "twitter:title", content: current.title});
        upsertMeta('meta[name="twitter:description"]', {name: "twitter:description", content: current.description});
        upsertLink('link[rel="canonical"]', {rel: "canonical", href: canonical});
        upsertLink('link[rel="alternate"][hreflang="en"]', {rel: "alternate", hreflang: "en", href: canonical});
        upsertLink('link[rel="alternate"][hreflang="de"]', {rel: "alternate", hreflang: "de", href: canonical});

        upsertJsonLd("dynamic-person-service-schema", buildBaseSchema());
        upsertJsonLd("dynamic-breadcrumb-schema", buildBreadcrumbSchema(pathname, current.title));

        if (pathname === "/") {
            upsertJsonLd("dynamic-faq-schema", {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.slice(0, 10).map((item) => ({
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

        if (current.blogPost) {
            upsertJsonLd("dynamic-blogpost-schema", {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: current.blogPost.title,
                description: current.blogPost.excerpt,
                datePublished: current.blogPost.date,
                dateModified: current.blogPost.date,
                image: DEFAULT_IMAGE,
                author: {"@id": `${SITE_URL}/#carina-sophie-schoppe`},
                publisher: {"@id": `${SITE_URL}/#carina-sophie-schoppe`},
                mainEntityOfPage: `${SITE_URL}${pathname}`,
            });
        } else {
            removeJsonLd("dynamic-blogpost-schema");
        }
    }, [current, faqs, pathname]);

    return null;
}

import {defineConfig} from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const siteUrl = "https://carinaschoppe.com";

const prerenderRoutes = [
    ["/training", "Training & Services | AI, IT and Cybersecurity Lecturer", "Book AI training, GenAI workshops, AI governance, Python, SQL, software development, cybersecurity, Scrum and digital transformation training."],
    ["/training/ai-genai-training", "AI & GenAI Training | Carina Sophie Schoppe", "Practical AI and generative AI training for teams, education providers and organisations that need usable AI capability."],
    ["/training/ai-literacy-for-teams", "AI Literacy for Teams | Carina Sophie Schoppe", "AI literacy training for non-technical and mixed teams that need shared language, safe routines and practical confidence."],
    ["/training/prompt-engineering-agentic-workflows", "Prompt Engineering & Agentic Workflows | Carina Sophie Schoppe", "Prompt engineering and agentic workflow training for repeatable AI-supported work with human review and governance."],
    ["/training/ai-governance-responsible-ai", "AI Governance & Responsible AI | Carina Sophie Schoppe", "AI governance and responsible AI training for practical oversight, risk awareness, policy routines and accountable adoption."],
    ["/training/software-development-retraining-java-python-csharp-kotlin", "Software Development, APIs & Retraining | Carina Sophie Schoppe", "Software development training and retraining around Java, Python, C#, Kotlin, APIs and applied programming."],
    ["/training/fachinformatiker-ihk-training-retraining", "Fachinformatiker Training, Ausbildung & Umschulung | Carina Sophie Schoppe", "Training support for Fachinformatiker Ausbildung, Umschulung, IHK preparation, IT projects, databases and software foundations."],
    ["/training/python-sql-data-skills", "Python, SQL & Data Skills | Carina Sophie Schoppe", "Applied Python, SQL and database training for analysis, automation, reporting and technical retraining contexts."],
    ["/training/data-analytics-data-science-engineering", "Data Analyst, Data Scientist & Data Engineer Training | Carina Sophie Schoppe", "Data analyst, data scientist and data engineer pathway training for analytics, data science foundations and data engineering concepts."],
    ["/training/project-management-scrum-agile-classic", "Project Management, Scrum, Agile & Classic Delivery | Carina Sophie Schoppe", "Project management training across Scrum, agile, classic and hybrid delivery, stakeholder communication and AI-supported coordination."],
    ["/training/business-consulting-new-work", "Business Consulting, New Work & Organisational Change | Carina Sophie Schoppe", "Consulting and training for New Work, digital collaboration, AI adoption, process redesign and learning culture."],
    ["/training/business-informatics-digital-transformation", "Business Informatics & Digital Transformation | Carina Sophie Schoppe", "Business informatics and digital transformation training connecting IT, processes, data, cloud, systems and business value."],
    ["/training/cloud-devops-systems-foundations", "Cloud, DevOps & Systems Foundations | Carina Sophie Schoppe", "Training around cloud concepts, Docker, Kubernetes, Linux, Ubuntu and operational foundations for software, data and IT learners."],
    ["/training/cybersecurity-pentesting-ethical-hacking", "Cybersecurity, Pentesting & Ethical Hacking Training | Carina Sophie Schoppe", "Cybersecurity training from awareness to web security, pentesting fundamentals, ethical hacking, SOC basics and defensive thinking."],
    ["/training/digital-law-gdpr-ai-act-cloud-act", "Digital Law, GDPR, AI Act & Cloud Act Awareness | Carina Sophie Schoppe", "Awareness training around labour, business, private and IT law, GDPR, AI Act, Cloud Act and digital compliance questions."],
    ["/training/office-management-ihk-business-training", "Office Management, Business Administration & IHK Training | Carina Sophie Schoppe", "IHK-oriented business, office management and Bürokaufleute training for digital tools, business processes and commercial communication."],
    ["/training/curriculum-design-blended-learning", "Curriculum Design & Blended Learning | Carina Sophie Schoppe", "Curriculum design and blended learning support for learning paths, exercises, labs, slides, assessments and course materials."],
    ["/training/coaching-keynotes-expert-talks", "Coaching, Keynotes & Expert Talks | Carina Sophie Schoppe", "Book coaching, keynotes, guest lectures and expert talks on AI, IT, cybersecurity, digital transformation, digital law and modern education."],
    ["/training/creative-web-digital-media-tools", "Creative, Web & Digital Media Tools | Carina Sophie Schoppe", "Training for WordPress, Elementor, UI/UX basics, creative tools and digital media workflows in education and business contexts."],
    ["/training/languages-communication-presentation", "Languages, Communication & Presentation | Carina Sophie Schoppe", "Training for technical explanation, academic writing, business communication, presentation, public speaking and multilingual delivery."],
    ["/skills", "Skills & Training Topics | AI, IT, Cybersecurity and Business IT", "A practical skill map for AI literacy, agentic workflows, Python, SQL, cybersecurity, software development, business informatics and digital education."],
    ["/software", "Software Portfolio | AI Research, Automation and Development Projects", "Selected GitHub projects by Carina Sophie Schoppe across automation, AI research workflows, Kotlin plugins, mobile apps and learning-friendly software examples."],
    ["/portfolio", "Client Proof & Collaborations | Lecturer Portfolio", "Selected collaborations, education-sector projects and professional proof for AI, IT, cybersecurity and software development training delivery."],
    ["/pricing", "Pricing | AI, IT and Business Training Rates", "Transparent orientation rates for education-sector teaching, corporate training, talks, workshops and custom AI or IT training requests."],
    ["/my-way", "My Way | Professional Timeline and Teaching Background", "Professional timeline from business informatics, software practice and entrepreneurship to AI, IT and cybersecurity training from Brisbane."],
    ["/about", "About | Carina Sophie Schoppe", "Background and positioning for Carina Sophie Schoppe as an AI, IT and business lecturer, trainer and consultant."],
    ["/keynotes", "Keynotes & Expert Talks | Carina Sophie Schoppe", "Book talks and expert sessions on AI, cybersecurity, digital transformation, business IT and modern digital education."],
    ["/corporate", "Corporate Training | AI, IT and Digital Transformation", "Corporate training solutions for AI literacy, cybersecurity, software, project work, data and digital transformation."],
    ["/credentials", "Credentials | Carina Sophie Schoppe", "Credentials, teaching proof and professional background for AI, IT and business education delivery."],
    ["/blog", "Blog | AI Governance, Digital Education and Business IT", "Articles on agentic AI, AI governance, digital education, project management, cybersecurity, automation risk and modern teaching."],
    ["/blog/agentic-ai-from-demo-to-delegation", "Agentic AI: from demos to delegated work | Carina Sophie Schoppe Blog", "An article on agentic AI, delegated workflows, human review and practical organisational design."],
    ["/blog/project-management-in-the-age-of-ai", "Project Management in the Age of AI | Carina Sophie Schoppe Blog", "An article on how AI changes project management, coordination, risk work and delivery routines."],
    ["/blog/teaching-with-ai-without-losing-learning", "Teaching with AI without losing learning | Carina Sophie Schoppe Blog", "An article on practical AI use in education, learning design, assessment and learner competence."],
    ["/blog/from-industry-4-0-to-5-0-human-above-the-loop", "From Industry 4.0 to 5.0 | Carina Sophie Schoppe Blog", "An article on Industry 5.0, human-in-the-loop, human-above-the-loop and AI supervision."],
    ["/blog/ai-automation-risks-hallucinations-token-burn-rate-limits", "AI automation risks: hallucinations, token burn and rate limits | Carina Sophie Schoppe Blog", "An article on AI automation risks, hallucinations, token burn, rate limits and process resilience."],
    ["/contact", "Contact & Booking | Book AI, IT and Business Training", "Contact Carina Sophie Schoppe for lectures, workshops, talks, course delivery and training consultations by email, phone or calendar booking."],
    ["/imprint", "Imprint | Carina Sophie Schoppe", "Legal notice and contact details for Carina Sophie Schoppe."],
    ["/privacy", "Privacy Policy | Carina Sophie Schoppe", "Privacy policy for the Carina Sophie Schoppe website, including analytics and contact information."],
];

function escapeHtmlAttribute(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll('"', "&quot;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
}

function routeFileName(path) {
    return `${path.replace(/^\//, "")}/index.html`;
}

function withRouteHead(html, [path, title, description]) {
    const canonical = `${siteUrl}${path}`;
    return html
        .replace(/<title>.*?<\/title>/, `<title>${escapeHtmlAttribute(title)}</title>`)
        .replace(/<meta content="[^"]*" name="description"\/>/, `<meta content="${escapeHtmlAttribute(description)}" name="description"/>`)
        .replace(/<meta content="[^"]*" property="og:title"\/>/, `<meta content="${escapeHtmlAttribute(title)}" property="og:title"/>`)
        .replace(/<meta content="[^"]*" property="og:description"\/>/, `<meta content="${escapeHtmlAttribute(description)}" property="og:description"/>`)
        .replace(/<meta content="[^"]*" property="og:url"\/>/, `<meta content="${canonical}" property="og:url"/>`)
        .replace(/<link href="[^"]*" rel="canonical"\/>/, `<link href="${canonical}" rel="canonical"/>`)
        .replace(/<link href="[^"]*" hreflang="en" rel="alternate"\/>/, `<link href="${canonical}" hreflang="en" rel="alternate"/>`)
        .replace(/<link href="[^"]*" hreflang="de" rel="alternate"\/>/, `<link href="${canonical}" hreflang="de" rel="alternate"/>`);
}

function htmlPerformancePlugin() {
    return {
        name: "html-performance-pass",
        enforce: "post",
        apply: "build",
        generateBundle(_options, bundle) {
            const htmlAsset = Object.values(bundle).find((asset) => asset.type === "asset" && asset.fileName.endsWith(".html"));
            if (!htmlAsset || typeof htmlAsset.source !== "string") return;

            let html = htmlAsset.source.replace(/<link rel="stylesheet" crossorigin href="\/([^"]+\.css)">/g, (match, cssFileName) => {
                const cssAsset = bundle[cssFileName];
                if (!cssAsset || cssAsset.type !== "asset" || typeof cssAsset.source !== "string") return match;

                delete bundle[cssFileName];
                return `<style>${cssAsset.source}</style>`;
            });

            const moduleScripts = [];
            html = html.replace(/\s*<script type="module" crossorigin src="\/([^"]+\.js)"><\/script>/g, (match) => {
                moduleScripts.push(match.trim());
                return "";
            });

            if (moduleScripts.length > 0) {
                html = html.replace("</body>", `${moduleScripts.map((script) => `\n${script}`).join("")}\n</body>`);
            }

            htmlAsset.source = html;

            prerenderRoutes.forEach((route) => {
                this.emitFile({
                    type: "asset",
                    fileName: routeFileName(route[0]),
                    source: withRouteHead(html, route),
                });
            });
        },
    };
}

export default defineConfig({
    plugins: [react(), tailwindcss(), htmlPerformancePlugin()],
    base: "/",
    build: {
        cssCodeSplit: false,
        modulePreload: {
            polyfill: false,
        },
        rollupOptions: {
            output: {
                manualChunks(id) {
                    return /node_modules[\\/](react|react-dom|react-router-dom)[\\/]/.test(id)
                        ? "react-vendor"
                        : undefined;
                },
            },
        },
        target: "es2022",
    },
    test: {
        environment: "jsdom",
        setupFiles: "./src/test/setup.js",
        globals: true,
        coverage: {
            reporter: ["text", "json"],
            include: ["src/**/*.{js,jsx}"],
            exclude: ["src/main.jsx"],
        },
    },
});

import {defineConfig} from "vitest/config";
import preact from "@preact/preset-vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import {trainingSeoEntries} from "./src/data/trainingSeo.js";

const siteUrl = "https://luminovia.org";
const redirectRoutes = new Map([["/portfolio", "/projects"]]);
const trainingPrerenderRoutes = trainingSeoEntries.map(({slug, en}) => [`/training/${slug}`, en.title, en.description]);
const prerenderRoutes = [
    ["/training", "Training | AI, IT & Digital Capability Training", "Explore practical AI training, IT training, cybersecurity training, software, data, digital business and curriculum-design workshops for organisations and education providers."],
    ["/offers", "Offers | Luminovia Training & Consulting", "Clear Luminovia packages for live training, consulting sprints, project support, keynotes, curriculum design and larger digital enablement programmes."],
    ["/consulting", "Consulting | IT, AI and Business Advisory", "Consulting portfolio for AI use cases, IT and process advisory, business technology, curriculum design, roadmaps and digital enablement."],
    ...trainingPrerenderRoutes,
    ["/projects", "Project Portfolio | AI Research, Automation and Consulting Projects", "Selected Luminovia project work across automation, AI research workflows, consulting support, software prototypes and learning-friendly technical implementation."],
    ["/portfolio", "Project Portfolio | AI Research, Automation and Consulting Projects", "Selected Luminovia project work across automation, AI research workflows, consulting support, software prototypes and learning-friendly technical implementation."],
    ["/clients", "Delivery Contexts | Education, Training and Collaboration Proof", "Selected public delivery contexts, education partners, topic areas and collaboration proof behind Luminovia's training and consulting profile."],
    ["/pricing", "Pricing | Training, Consulting and Session Rates", "Transparent net rates: EUR 55 per 45-minute teaching unit, EUR 100 per consulting hour, EUR 500 half day and EUR 1,000 full day including preparation and agreed standard materials."],
    ["/about", "Company | Luminovia Training & Consulting", "Company profile for Luminovia Training & Consulting, led by CEO and founder Carina Sophie Schoppe."],
    ["/contact", "Contact & Booking | Book Training or Consulting", "Contact Luminovia to book AI, IT and digital capability training, consulting, workshops, talks, course delivery or programme planning."],
    ["/imprint", "Imprint | Luminovia", "Legal notice and contact details for Luminovia Training & Consulting."],
    ["/privacy", "Privacy Policy | Luminovia", "Privacy policy for the Luminovia website, including analytics and contact information."],
    ["/terms", "Terms & Conditions | Luminovia", "Terms and conditions, payment terms and bank information for Luminovia Training & Consulting invoices and services."],
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
    const redirectTarget = redirectRoutes.get(path);
    const canonical = `${siteUrl}${redirectTarget || path}`;
    const routeHtml = html
        .replace(/<!-- static-home-shell:start -->[\s\S]*?<!-- static-home-shell:end -->/, "")
        .replace(/<title>.*?<\/title>/, `<title>${escapeHtmlAttribute(title)}</title>`)
        .replace(/<meta content="[^"]*" name="description"\/>/, `<meta content="${escapeHtmlAttribute(description)}" name="description"/>`)
        .replace(/<meta content="[^"]*" property="og:title"\/>/, `<meta content="${escapeHtmlAttribute(title)}" property="og:title"/>`)
        .replace(/<meta content="[^"]*" property="og:description"\/>/, `<meta content="${escapeHtmlAttribute(description)}" property="og:description"/>`)
        .replace(/<meta content="[^"]*" property="og:url"\/>/, `<meta content="${canonical}" property="og:url"/>`)
        .replace(/<link href="[^"]*" rel="canonical"\/>/, `<link href="${canonical}" rel="canonical"/>`)
        .replace(/<link href="[^"]*" hreflang="en" rel="alternate"\/>/, `<link href="${canonical}" hreflang="en" rel="alternate"/>`)
        .replace(/<link href="[^"]*" hreflang="de" rel="alternate"\/>/, `<link href="${canonical}" hreflang="de" rel="alternate"/>`);

    return redirectTarget
        ? routeHtml.replace("<head>", `<head><meta content="0;url=${redirectTarget}" http-equiv="refresh"/>`)
        : routeHtml;
}

function htmlPerformancePlugin() {
    return {
        name: "html-performance-pass",
        enforce: "post",
        apply: "build",
        generateBundle(_options, bundle) {
            const htmlAsset = Object.values(bundle).find((asset) => asset.type === "asset" && asset.fileName.endsWith(".html"));
            if (!htmlAsset || typeof htmlAsset.source !== "string") return;

            const html = htmlAsset.source;

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

export default defineConfig(({command, mode}) => {
    const usePreactCompat = command === "build" && mode !== "test";
    const base = "/";

    return {
        plugins: [usePreactCompat ? preact() : react(), tailwindcss(), htmlPerformancePlugin()],
        base,
        build: {
            cssCodeSplit: false,
            modulePreload: {
                polyfill: false,
            },
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        return /node_modules[\\/](preact|react-router|react-router-dom)[\\/]/.test(id)
                            ? "ui-vendor"
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
                include: [
                    "src/components/**/*.{js,jsx}",
                    "src/data/**/*.js",
                    "src/pages/**/*.jsx",
                    "src/utils/**/*.js",
                    "src/App.jsx",
                    "src/i18n.jsx",
                ],
                exclude: [
                    "src/**/*.test.{js,jsx}",
                    "src/test/**",
                    "src/main.jsx",
                ],
                thresholds: {
                    lines: 99,
                },
            },
        },
    };
});

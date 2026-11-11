import {defineConfig} from "vitest/config";
import preact from "@preact/preset-vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import {canonicalPageUrl, notFoundMeta, redirectRoutes, routeMeta} from "./src/data/seoContent.js";
import {trainingDetailsForLanguage} from "./src/data/trainingDetails.js";
import {trainingSeoEntries} from "./src/data/trainingSeo.js";

const pageModules = new Map([
    ["/training", "TrainingPage"],
    ["/offers", "OffersPage"],
    ["/consulting", "ConsultingPage"],
    ["/clients", "ClientsPage"],
    ["/about", "AboutPage"],
    ["/contact", "ContactPage"],
    ["/pricing", "PricingPage"],
    ["/projects", "SoftwarePage"],
    ["/imprint", "ImprintPage"],
    ["/privacy", "PrivacyPage"],
    ["/terms", "TermsPage"],
    ["/not-found", "NotFoundPage"],
]);
const prerenderRoutes = [
    ...Object.entries(routeMeta.en).filter(([path]) => path !== "/"),
    ...trainingSeoEntries.map(({slug, en}) => [`/training/${slug}`, en]),
    ["/not-found", notFoundMeta.en, {noindex: true, canonical: canonicalPageUrl("/")}],
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

function withRouteHead(html, [path, {title, description}, options = {}]) {
    const redirectTarget = redirectRoutes.get(path);
    const canonical = options.canonical || canonicalPageUrl(path);
    const routeHtml = html
        .replace(/<!-- static-home-style:start -->[\s\S]*?<!-- static-home-style:end -->/, "")
        .replace(/<!-- static-home-shell:start -->[\s\S]*?<!-- static-home-shell:end -->/, "")
        .replace(/<title>.*?<\/title>/, `<title>${escapeHtmlAttribute(title)}</title>`)
        .replace(/<meta content="[^"]*" name="description"\/>/, `<meta content="${escapeHtmlAttribute(description)}" name="description"/>`)
        .replace(/<meta content="[^"]*" property="og:title"\/>/, `<meta content="${escapeHtmlAttribute(title)}" property="og:title"/>`)
        .replace(/<meta content="[^"]*" property="og:description"\/>/, `<meta content="${escapeHtmlAttribute(description)}" property="og:description"/>`)
        .replace(/<meta content="[^"]*" property="og:url"\/>/, `<meta content="${canonical}" property="og:url"/>`)
        .replace(
            /<meta content="[^"]*" name="robots"\/>/,
            `<meta content="${options.noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}" name="robots"/>`,
        )
        .replace(/<link href="[^"]*" rel="canonical"\/>/, `<link href="${canonical}" rel="canonical"/>`)
        .replace(/<meta content="[^"]*" name="twitter:title"\/>/, `<meta content="${escapeHtmlAttribute(title)}" name="twitter:title"/>`)
        .replace(/<meta content="[^"]*" name="twitter:description"\/>/, `<meta content="${escapeHtmlAttribute(description)}" name="twitter:description"/>`);

    return redirectTarget
        ? routeHtml.replace("<head>", `<head><meta content="0;url=${redirectTarget}/" http-equiv="refresh"/>`)
        : routeHtml;
}

function pages404Redirect() {
    return `<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="robots" content="noindex, follow">
    <meta name="referrer" content="no-referrer">
    <meta name="theme-color" content="#f8f5ee">
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'">
    <title>Page not found | Luminovia</title>
    <script>
        (function () {
            var requested = location.pathname + location.search + location.hash;
            var safePath = requested.charAt(0) === "/" && requested.slice(0, 2) !== "//" ? requested : "/";
            location.replace("/not-found/?from=" + encodeURIComponent(safePath));
        }());
    </script>
</head>
<body style="margin:0;background:#f8f5ee;color:#14233b;font-family:system-ui,sans-serif">
    <main style="display:grid;min-height:100vh;place-items:center;padding:2rem;text-align:center">
        <div>
            <h1>Page not found</h1>
            <p style="color:#4e435f">We couldn’t find that page. You can continue from the homepage.</p>
            <a href="/" style="color:#1749b5">Go to the homepage</a>
        </div>
    </main>
</body>
</html>`;
}

function preloadRouteAssets(html, path, bundle) {
    const page = path.startsWith("/training/") ? "TrainingTopicPage" : pageModules.get(path);
    if (!page) return html;

    const entry = Object.values(bundle).find((file) => file.type === "chunk" && file.facadeModuleId?.endsWith(`/pages/${page}.jsx`));
    if (!entry) throw new Error(`Missing page bundle for ${path}`);

    const seen = new Set();
    const links = [];

    function addLink(fileName, rel) {
        const href = `/${fileName}`;
        if (!html.includes(`href="${href}"`) && !html.includes(`src="${href}"`)) {
            links.push(`<link rel="${rel}" crossorigin href="${href}">`);
        }
    }

    function visit(fileName) {
        if (seen.has(fileName)) return;
        seen.add(fileName);
        const chunk = bundle[fileName];
        if (chunk?.type !== "chunk") return;

        addLink(fileName, "modulepreload");
        chunk.imports.forEach(visit);
        for (const css of chunk.viteMetadata?.importedCss || []) {
            if (seen.has(css)) continue;
            seen.add(css);
            addLink(css, "stylesheet");
        }
    }

    visit(entry.fileName);
    return html.replace("</head>", `  ${links.join("\n  ")}\n</head>`);
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
                    source: preloadRouteAssets(withRouteHead(html, route), route[0], bundle),
                });
            });

            this.emitFile({
                type: "asset",
                fileName: "404.html",
                source: pages404Redirect(),
            });
        },
    };
}

function trainingCataloguePlugin() {
    function searchWords(topic) {
        const text = [topic.title, topic.summary, ...topic.matches, ...topic.modules].join(" ");
        return [...new Set(text.toLocaleLowerCase().normalize("NFD").replace(/\p{M}/gu, "").replaceAll("ß", "ss").match(/[\p{L}\p{N}#+]+/gu) ?? [])];
    }

    const projections = new Map([
        ["\0virtual:training-catalogue", (topic) => {
            const {slug, subjectArea, title, summary} = topic;
            return {slug, subjectArea, title, summary, searchWords: searchWords(topic)};
        }],
        ["\0virtual:training-titles", ({slug, title}) => [slug, title]],
    ]);

    return {
        name: "training-catalogue",
        resolveId(id) {
            const resolved = `\0${id}`;
            return projections.has(resolved) ? resolved : null;
        },
        load(id) {
            const project = projections.get(id);
            if (!project) return null;

            const catalogue = Object.fromEntries(["en", "de"].map((language) => [
                language,
                trainingDetailsForLanguage(language).map(project),
            ]));
            return `export default ${JSON.stringify(catalogue)};`;
        },
    };
}

export default defineConfig(({command, mode}) => {
    const usePreactCompat = command === "build" && mode !== "test";
    const base = "/";

    return {
        plugins: [usePreactCompat ? preact() : react(), tailwindcss(), trainingCataloguePlugin(), htmlPerformancePlugin()],
        base,
        build: {
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

import {defineConfig} from "vitest/config";
import preact from "@preact/preset-vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import {notFoundMeta, routeMeta} from "./src/data/seoContent.js";
import {trainingSeoEntries} from "./src/data/trainingSeo.js";

const siteUrl = "https://luminovia.org";
const redirectRoutes = new Map([["/portfolio", "/projects"]]);
const prerenderRoutes = [
    ...Object.entries(routeMeta.en).filter(([path]) => path !== "/"),
    ...trainingSeoEntries.map(({slug, en}) => [`/training/${slug}`, en]),
    ["/not-found", notFoundMeta.en, {noindex: true, canonical: `${siteUrl}/`}],
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
    const canonical = options.canonical || `${siteUrl}${redirectTarget || path}`;
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
        ? routeHtml.replace("<head>", `<head><meta content="0;url=${redirectTarget}" http-equiv="refresh"/>`)
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
<body style="margin:0;background:#f8f5ee;color:#201932;font-family:system-ui,sans-serif">
    <main style="display:grid;min-height:100vh;place-items:center;padding:2rem;text-align:center">
        <div>
            <h1>Page not found</h1>
            <p style="color:#4e435f">We couldn’t find that page. You can continue from the homepage.</p>
            <a href="/" style="color:#5024b8">Go to the homepage</a>
        </div>
    </main>
</body>
</html>`;
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

            this.emitFile({
                type: "asset",
                fileName: "404.html",
                source: pages404Redirect(),
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

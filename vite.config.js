import {defineConfig} from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

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
        },
    };
}

export default defineConfig({
    plugins: [react(), tailwindcss(), htmlPerformancePlugin()],
    base: "/",
    build: {
        cssCodeSplit: false,
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

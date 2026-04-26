import {defineConfig} from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [react(), tailwindcss()],
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

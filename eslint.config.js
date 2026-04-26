import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";

export default [
    {
        ignores: ["dist/**", "coverage/**", "node_modules/**"],
    },
    js.configs.recommended,
    {
        files: ["src/**/*.{js,jsx}", "vite.config.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
                ...globals.es2024,
                ...globals.node,
            },
        },
        plugins: {
            "react-hooks": reactHooks,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            "no-unused-vars": ["error", {
                args: "after-used",
                argsIgnorePattern: "^_",
                caughtErrors: "all",
                caughtErrorsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
            }],
        },
    },
];

import {createContext, useCallback, useContext, useEffect, useMemo, useState} from "react";
import {safeGetStorageItem, safeSetStorageItem} from "./utils/browser.js";

export const LANGUAGE_STORAGE_KEY = "carina_site_language_v2";
const DEFAULT_LANGUAGE = "en";

const dictionaries = {
    en: {
        nav: {
            training: "Training",
            consulting: "Consulting",
            offers: "Offers",
            software: "Projects",
            clients: "References",
            about: "About us",
            pricing: "Pricing",
            book: "Contact",
            imprint: "Imprint",
            privacy: "Privacy",
            terms: "Terms",
        },
        bookTraining: "Request an introductory call",
        serviceLabels: {
            audience: "Audience",
            format: "Format",
            duration: "Duration",
            outcomes: "Learning outcomes",
        },
        photoFallback: "Portrait of Carina Sophie Schoppe, CEO and founder of Luminovia Training & Consulting.",
        analytics: {
            title: "Privacy-friendly analytics",
            copy: "Google Analytics is used only after consent to understand which pages are useful. IP anonymisation is enabled.",
            decline: "Decline",
            accept: "Accept",
        },
        notFound: {
            badge: "404 / Nothing here",
            title: "Oops, there is nothing here.",
            copy: "This address does not match a Luminovia page. It may have been mistyped, moved or removed.",
            home: "Back to homepage",
            contact: "Contact / booking",
            training: "View offers",
            hint: "Choose a useful route below or return to the homepage.",
            requestedPathLabel: "Requested page",
            requestedPathPrefix: "The page",
            requestedPathSuffix: "could not be found.",
            referenceLabel: "Error reference",
        },
    },
    de: {
        nav: {
            training: "Training",
            consulting: "Beratung",
            offers: "Angebote",
            software: "Projekte",
            clients: "Referenzen",
            about: "Über uns",
            pricing: "Preise",
            book: "Kontakt",
            imprint: "Impressum",
            privacy: "Datenschutz",
            terms: "Bedingungen",
        },
        bookTraining: "Erstgespräch anfragen",
        serviceLabels: {
            audience: "Zielgruppe",
            format: "Format",
            duration: "Dauer",
            outcomes: "Lernergebnisse",
        },
        photoFallback: "Portrait von Carina Sophie Schoppe, CEO und Gründerin von Luminovia Training & Consulting.",
        analytics: {
            title: "Datenschutzfreundliche Analyse",
            copy: "Google Analytics wird nur nach Zustimmung genutzt, um zu verstehen, welche Seiten hilfreich sind. IP-Anonymisierung ist aktiviert.",
            decline: "Ablehnen",
            accept: "Akzeptieren",
        },
        notFound: {
            badge: "404 / Hier gibt es nichts",
            title: "Huch, hier ist nichts.",
            copy: "Diese Adresse führt zu keiner Luminovia-Seite. Vielleicht wurde sie vertippt, verschoben oder gelöscht.",
            home: "Zur Startseite",
            contact: "Kontakt / Buchung",
            training: "Angebote ansehen",
            hint: "Wählen Sie unten einen passenden Bereich oder gehen Sie zurück zur Startseite.",
            requestedPathLabel: "Eingegebene Seite",
            requestedPathPrefix: "Die Seite",
            requestedPathSuffix: "wurde nicht gefunden.",
            referenceLabel: "Fehlerreferenz",
        },
    },
};

/**
 * @typedef {"en" | "de"} Language
 * @typedef {{
 *   language: Language,
 *   toggleLanguage: () => void,
 *   t: typeof dictionaries.en
 * }} LanguageContextValue
 */

export const LanguageContext = createContext(/** @type {LanguageContextValue | null} */ (null));

/**
 * @param {string | null | undefined} value
 * @returns {Language}
 */
function resolveLanguage(value) {
    return value === "de" || value === "en" ? value : DEFAULT_LANGUAGE;
}

export function LanguageProvider({children}) {
    const [language, setLanguage] = useState(() => resolveLanguage(safeGetStorageItem(LANGUAGE_STORAGE_KEY)));

    useEffect(() => {
        safeSetStorageItem(LANGUAGE_STORAGE_KEY, language);
        document.documentElement.lang = language;
    }, [language]);

    const toggleLanguage = useCallback(() => {
        setLanguage((current) => current === "en" ? "de" : "en");
    }, []);

    const value = useMemo(() => ({
        language,
        toggleLanguage,
        t: dictionaries[language],
    }), [language, toggleLanguage]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
    return context;
}

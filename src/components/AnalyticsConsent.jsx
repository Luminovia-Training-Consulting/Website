import {useEffect, useRef, useState} from "react";
import {useLocation} from "react-router-dom";
import {PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";
import {safeGetStorageItem, safeSetStorageItem} from "../utils/browser.js";

export const ANALYTICS_CONSENT_KEY = "luminovia_analytics_consent_v1";
export const ANALYTICS_PREFERENCES_ID = "analytics-preferences";
const disabledFlag = `ga-disable-${PROFILE.analyticsId}`;

function loadAnalytics(measurementId) {
    if (!measurementId || globalThis.gtag) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    globalThis.dataLayer = globalThis.dataLayer || [];
    globalThis.gtag = function gtag() {
        globalThis.dataLayer.push(arguments);
    };
    globalThis.gtag("js", new Date());
    globalThis.gtag("config", measurementId, {anonymize_ip: true, send_page_view: false});
}

export default function AnalyticsConsent() {
    const {pathname, hash, key} = useLocation();
    const {t} = useLanguage();
    const [consent, setConsent] = useState(() => safeGetStorageItem(ANALYTICS_CONSENT_KEY));
    const [dismissedKey, setDismissedKey] = useState(null);
    const banner = useRef(null);
    const lastPageLocation = useRef(null);
    const enabled = Boolean(PROFILE.analyticsId);
    const editingPreferences = hash === `#${ANALYTICS_PREFERENCES_ID}` && dismissedKey !== key;

    useEffect(() => {
        if (!enabled) return;
        globalThis[disabledFlag] = consent !== "accepted";
        if (consent !== "accepted") return;

        const pageLocation = `${window.location.origin}${pathname}`;
        if (lastPageLocation.current === pageLocation) return;

        loadAnalytics(PROFILE.analyticsId);
        globalThis.gtag("event", "page_view", {
            page_title: document.title,
            page_location: pageLocation,
            page_referrer: lastPageLocation.current ?? document.referrer.split(/[?#]/, 1)[0],
        });
        lastPageLocation.current = pageLocation;
    }, [consent, enabled, pathname]);

    useEffect(() => {
        if (editingPreferences) banner.current?.focus({preventScroll: true});
    }, [editingPreferences, key]);

    if (!enabled || (consent && !editingPreferences)) return null;

    function choose(value) {
        globalThis[disabledFlag] = value !== "accepted";
        if (value !== "accepted") lastPageLocation.current = null;
        safeSetStorageItem(ANALYTICS_CONSENT_KEY, value);
        setConsent(value);
        if (editingPreferences) {
            setDismissedKey(key);
            document.getElementById(ANALYTICS_PREFERENCES_ID)?.querySelector("a")?.focus({preventScroll: true});
        }
    }

    return (
        <section ref={banner} tabIndex={editingPreferences ? -1 : undefined} aria-label={t.analytics.title} className="analytics-consent fixed inset-x-3 bottom-3 z-[80] mx-auto max-w-3xl p-4 sm:bottom-5 sm:p-5">
            <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                    <div className="analytics-consent-title text-sm font-bold">{t.analytics.title}</div>
                    <p className="mt-1 text-sm leading-6">
                        {t.analytics.copy}
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:flex">
                    <button onClick={() => choose("declined")} aria-pressed={editingPreferences ? consent === "declined" : undefined} className="border px-4 py-2 text-sm font-bold">
                        {t.analytics.decline}
                    </button>
                    <button onClick={() => choose("accepted")} aria-pressed={editingPreferences ? consent === "accepted" : undefined} className="px-4 py-2 text-sm font-bold">
                        {t.analytics.accept}
                    </button>
                </div>
            </div>
        </section>
    );
}

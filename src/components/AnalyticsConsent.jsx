import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";
import {safeGetStorageItem, safeSetStorageItem} from "../utils/browser.js";

export const ANALYTICS_CONSENT_KEY = "luminovia_analytics_consent_v1";

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
    globalThis.gtag("config", measurementId, {anonymize_ip: true});
}

export default function AnalyticsConsent() {
    const location = useLocation();
    const {t} = useLanguage();
    const [consent, setConsent] = useState(() => safeGetStorageItem(ANALYTICS_CONSENT_KEY));
    const enabled = Boolean(PROFILE.analyticsId);

    useEffect(() => {
        if (enabled && consent === "accepted") {
            loadAnalytics(PROFILE.analyticsId);
        }
    }, [consent, enabled]);

    useEffect(() => {
        if (globalThis.gtag && enabled && consent === "accepted") {
            globalThis.gtag("config", PROFILE.analyticsId, {
                page_path: `${location.pathname}${location.search}`,
                anonymize_ip: true,
            });
        }
    }, [location, consent, enabled]);

    if (!enabled || consent) return null;

    function choose(value) {
        safeSetStorageItem(ANALYTICS_CONSENT_KEY, value);
        setConsent(value);
    }

    return (
        <div className="analytics-consent fixed inset-x-3 bottom-3 z-[80] mx-auto max-w-3xl rounded-3xl border border-white/15 bg-[#080D19]/95 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl sm:bottom-5 sm:p-5">
            <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                    <div className="text-sm font-black text-white">{t.analytics.title}</div>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                        {t.analytics.copy}
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:flex">
                    <button onClick={() => choose("declined")} className="rounded-full border border-white/10 px-4 py-3 text-sm font-black text-slate-200 transition hover:bg-white/10">
                        {t.analytics.decline}
                    </button>
                    <button onClick={() => choose("accepted")} className="rounded-full bg-white px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-sky-100">
                        {t.analytics.accept}
                    </button>
                </div>
            </div>
        </div>
    );
}

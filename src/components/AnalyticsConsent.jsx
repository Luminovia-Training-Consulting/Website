import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PROFILE } from "../data/profile.js";
import { useLanguage } from "../i18n.jsx";

const CONSENT_KEY = "carina_analytics_consent";

function loadAnalytics(measurementId) {
  if (!measurementId || window.gtag) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, { anonymize_ip: true });
}

export default function AnalyticsConsent() {
  const location = useLocation();
  const { t } = useLanguage();
  const [consent, setConsent] = useState(() => localStorage.getItem(CONSENT_KEY));
  const enabled = Boolean(PROFILE.analyticsId);

  useEffect(() => {
    if (enabled && consent === "accepted") {
      loadAnalytics(PROFILE.analyticsId);
    }
  }, [consent, enabled]);

  useEffect(() => {
    if (window.gtag && enabled && consent === "accepted") {
      window.gtag("config", PROFILE.analyticsId, {
        page_path: `${location.pathname}${location.search}`,
        anonymize_ip: true,
      });
    }
  }, [location, consent, enabled]);

  if (!enabled || consent) return null;

  function choose(value) {
    localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  }

  return (
    <div className="fixed inset-x-3 bottom-3 z-[80] mx-auto max-w-3xl rounded-3xl border border-white/15 bg-[#080D19]/95 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl sm:bottom-5 sm:p-5">
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

import {Link, NavLink} from "react-router-dom";
import {IMAGES, navItems, PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";

const linkClass = "w-fit text-sm font-medium text-slate-300 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300";

const footerTopics = {
    en: ["AI & Future Skills", "Projects & Data", "Cybersecurity", "Business IT"],
    de: ["AI & Zukunftskompetenzen", "Projekte & Daten", "Cybersecurity", "Business-IT"],
};

export default function Footer() {
    const {language, t} = useLanguage();
    const labels = language === "de"
        ? {
            summary: "Praxisnahes Training und strukturierte Beratung für KI, IT, Cybersecurity, Software, Daten und digitales Lernen.",
            location: "Standort: Brisbane, Australien",
            delivery: "Remote-first: Europa, Australien und internationale Teams",
            languages: "Durchführung: Deutsch / Englisch",
            legalAddress: "Vollständige rechtliche Angaben im Impressum",
            booking: "Buchung",
            appointment: "Termin buchen",
            website: "Website",
            topics: "Angebotsthemen",
            founder: "Portfolio der Gründerin",
            founderCopy: "Persönliches Profil, CV, Projekte und Texte von Carina Sophie Schoppe.",
        }
        : {
            summary: "Practical training and structured consulting across AI, IT, cybersecurity, software, data and digital learning.",
            location: "Location: Brisbane, Australia",
            delivery: "Remote-first: Europe, Australia and international teams",
            languages: "Delivery: German / English",
            legalAddress: "Full legal details in the imprint",
            booking: "Booking",
            appointment: "Book appointment",
            website: "Website",
            topics: "Offer topics",
            founder: "Founder portfolio",
            founderCopy: "Personal profile, CV, projects and writing by Carina Sophie Schoppe.",
        };
    return (
        <footer className="lumo-footer border-t border-sky-100/12 px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_0.9fr_0.9fr]">
                <div>
                    <Link to="/" className="inline-flex items-center gap-3">
                        <span className="luminovia-logo-shell grid h-12 w-12 place-items-center overflow-hidden rounded-[0.85rem] border border-sky-100/24 bg-white shadow-[0_0_32px_rgba(56,189,248,.16)]">
                            <img src={IMAGES.luminoviaLogoMark} alt="" className="h-10 w-10 object-contain p-1" loading="lazy" width="40" height="40"/>
                        </span>
                        <span>
                            <span className="block text-2xl font-black tracking-[-0.03em] text-white">Luminovia</span>
                            <span className="lumo-footer-tagline block text-xs font-black uppercase tracking-[0.12em] text-sky-100/80">Training & Consulting</span>
                        </span>
                    </Link>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                        {labels.summary}
                    </p>
                    <div className="mt-5 grid gap-1.5 text-sm text-slate-300">
                        <a href={`mailto:${PROFILE.email}`} className="font-bold text-sky-100 hover:text-white">{PROFILE.email}</a>
                        <a href={`tel:${PROFILE.phoneAustralia.replaceAll(" ", "")}`} className="text-slate-300 hover:text-white">{PROFILE.phoneAustralia}</a>
                        <a href={`tel:${PROFILE.phoneGermany.replaceAll(" ", "")}`} className="text-slate-300 hover:text-white">{PROFILE.phoneGermany}</a>
                        <span>{labels.location}</span>
                        <span>{labels.delivery}</span>
                        <span>{labels.languages}</span>
                        <Link to="/imprint" className="font-bold text-sky-100 hover:text-white">{labels.legalAddress}</Link>
                    </div>
                </div>

                <div>
                    <h2 className="text-sm font-bold text-white">{labels.booking}</h2>
                    <div className="mt-4 grid gap-3">
                        <Link to="/contact#contact-options" className={linkClass}>{t.nav.book}</Link>
                        <a href={PROFILE.appointmentSchedule} target="_blank" rel="noreferrer" className={linkClass}>{labels.appointment}</a>
                        <Link to="/pricing" className={linkClass}>{t.nav.pricing}</Link>
                    </div>
                </div>

                <div>
                    <h2 className="text-sm font-bold text-white">{labels.website}</h2>
                    <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 lg:grid-cols-1">
                        {navItems.map((item) => <NavLink key={item.to} to={item.to} className={linkClass}>{t.nav[item.key]}</NavLink>)}
                        <Link to="/imprint" className={linkClass}>{t.nav.imprint}</Link>
                        <Link to="/privacy" className={linkClass}>{t.nav.privacy}</Link>
                        <Link to="/terms" className={linkClass}>{t.nav.terms}</Link>
                    </div>
                    <div className="mt-6 grid gap-3 border-t border-white/10 pt-5">
                        <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className={linkClass}>LinkedIn</a>
                        <a href={PROFILE.github} target="_blank" rel="noreferrer" className={linkClass}>GitHub</a>
                        <a href={PROFILE.founderPortfolio} target="_blank" rel="noreferrer" className={linkClass}>{labels.founder}</a>
                    </div>
                </div>

                <div>
                    <h2 className="text-sm font-bold text-white">{labels.topics}</h2>
                    <div className="mt-4 grid gap-3">
                        {footerTopics[language].map((topic) => (
                            <Link key={topic} to="/training" className={linkClass}>
                                {topic}
                            </Link>
                        ))}
                        <a href={PROFILE.founderPortfolio} target="_blank" rel="noreferrer" className="mt-2 border-t border-white/10 pt-4 text-sm font-medium text-slate-300 transition-colors hover:text-white">
                            <span className="block font-semibold text-sky-100">{labels.founder}</span>
                            <span className="mt-1 block text-xs font-medium leading-5 text-slate-400">{labels.founderCopy}</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mx-auto flex max-w-7xl flex-col gap-2 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                <span>© {new Date().getFullYear()} Luminovia Training & Consulting</span>
                <span>{labels.languages} · {labels.location}</span>
            </div>
        </footer>
    );
}

import {Link, NavLink} from "react-router-dom";
import {IMAGES, navItems, PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";

const linkClass = "rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white";

const footerTopics = {
    en: ["AI & Future Skills", "Projects & Data", "Cybersecurity", "Business IT"],
    de: ["AI & Zukunftskompetenzen", "Projekte & Daten", "Cybersecurity", "Business-IT"],
};

export default function Footer() {
    const {language, t} = useLanguage();
    const labels = language === "de"
        ? {
            summary: "Luminovia Training & Consulting ist ein remote-first Unternehmen für Corporate Training, Consulting, Projektunterstützung und Digital Enablement. Geführt von CEO und Gründerin Carina Sophie Schoppe.",
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
            summary: "Luminovia Training & Consulting is a remote-first company for corporate training, consulting, project support and digital enablement. Led by CEO and founder Carina Sophie Schoppe.",
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
        <footer className="border-t border-white/10 bg-[#060914]/72 px-4 py-14 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.9fr]">
                <div>
                    <Link to="/" className="inline-flex items-center gap-3" aria-label="Luminovia Training & Consulting home">
                        <span className="luminovia-logo-shell grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-white/20 bg-white">
                            <img src={IMAGES.luminoviaLogoMark} alt="" className="h-11 w-11 object-cover object-center" loading="lazy" width="44" height="44"/>
                        </span>
                        <span className="text-2xl font-black text-white">Luminovia Training & Consulting</span>
                    </Link>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                        {labels.summary}
                    </p>
                    <div className="mt-5 grid gap-2 text-sm text-slate-300">
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
                    <h2 className="text-sm font-black uppercase tracking-[0.16em] text-sky-100">{labels.booking}</h2>
                    <div className="mt-4 grid gap-2">
                        <Link to="/contact#contact-options" className={linkClass}>{t.nav.book}</Link>
                        <a href={PROFILE.appointmentSchedule} target="_blank" rel="noreferrer" className={linkClass}>{labels.appointment}</a>
                        <Link to="/pricing" className={linkClass}>{t.nav.pricing}</Link>
                    </div>
                </div>

                <div>
                    <h2 className="text-sm font-black uppercase tracking-[0.16em] text-sky-100">{labels.website}</h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {navItems.map((item) => <NavLink key={item.to} to={item.to} className={linkClass}>{t.nav[item.key]}</NavLink>)}
                        <Link to="/imprint" className={linkClass}>{t.nav.imprint}</Link>
                        <Link to="/privacy" className={linkClass}>{t.nav.privacy}</Link>
                        <Link to="/terms" className={linkClass}>{t.nav.terms}</Link>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                        <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className={linkClass}>LinkedIn</a>
                        <a href={PROFILE.github} target="_blank" rel="noreferrer" className={linkClass}>GitHub</a>
                        <a href={PROFILE.founderPortfolio} target="_blank" rel="noreferrer" className={linkClass}>{labels.founder}</a>
                    </div>
                </div>

                <div>
                    <h2 className="text-sm font-black uppercase tracking-[0.16em] text-sky-100">{labels.topics}</h2>
                    <div className="mt-4 grid gap-2">
                        {footerTopics[language].map((topic) => (
                            <Link key={topic} to="/training" className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-bold text-slate-300 transition hover:border-sky-100/35 hover:bg-white/[0.08] hover:text-white">
                                {topic}
                            </Link>
                        ))}
                        <a href={PROFILE.founderPortfolio} target="_blank" rel="noreferrer" className="rounded-2xl border border-sky-100/20 bg-sky-100/10 px-4 py-3 text-sm font-bold text-slate-200 transition hover:border-sky-100/45 hover:bg-sky-100/16 hover:text-white">
                            <span className="block text-sky-100">{labels.founder}</span>
                            <span className="mt-1 block text-xs font-medium leading-5 text-slate-400">{labels.founderCopy}</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

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
            booking: "Buchung",
            appointment: "Termin buchen",
            website: "Website",
            topics: "Angebotsthemen",
        }
        : {
            summary: "Luminovia Training & Consulting is a remote-first company for corporate training, consulting, project support and digital enablement. Led by CEO and founder Carina Sophie Schoppe.",
            location: "Location: Brisbane, Australia",
            delivery: "Remote-first: Europe, Australia and international teams",
            languages: "Delivery: German / English",
            booking: "Booking",
            appointment: "Book appointment",
            website: "Website",
            topics: "Offer topics",
        };
    return (
        <footer className="border-t border-white/10 bg-[#060914]/72 px-4 py-14 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.9fr]">
                <div>
                    <Link to="/" className="inline-flex items-center gap-3">
                        <span className="luminovia-logo-shell grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-white/20 bg-white">
                            <img src={IMAGES.luminoviaLogoMark} alt="" className="h-11 w-11 object-cover object-center" loading="lazy"/>
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
                        {PROFILE.addressLines.map((line) => <span key={line}>{line}</span>)}
                        <span>{labels.delivery}</span>
                        <span>{labels.languages}</span>
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
                    </div>
                </div>
            </div>
        </footer>
    );
}

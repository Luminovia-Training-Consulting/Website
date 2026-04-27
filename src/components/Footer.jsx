import {Link, NavLink} from "react-router-dom";
import {navItems, PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";

const linkClass = "rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white";

const footerTopics = {
    en: ["AI & Future Skills", "Software & Data", "Cybersecurity", "Business IT"],
    de: ["AI & Future Skills", "Software & Daten", "Cybersecurity", "Business IT"],
};

export default function Footer() {
    const {language, t} = useLanguage();
    const labels = language === "de"
        ? {
            summary: "AI-, IT- und Business-Dozentin mit Standort Brisbane, Australien. Remote-Live-Trainings fuer deutsch- und englischsprachige Bildungsanbieter, Unternehmen, Hochschulen und internationale Partner.",
            location: "Standort: Brisbane, Australien",
            delivery: "Remote Delivery: Europa, Australien und APAC",
            languages: "Sprachen: Deutsch / Englisch / Spanisch",
            booking: "Buchung",
            appointment: "Termin buchen",
            website: "Website",
            topics: "Trainingsthemen",
        }
        : {
            summary: "AI, IT and business lecturer based in Brisbane, Australia. Remote international delivery for German-speaking and English-speaking training providers, companies, universities and education partners.",
            location: "Location: Brisbane, Australia",
            delivery: "Remote delivery: Europe, Australia and APAC",
            languages: "Languages: German / English / Spanish",
            booking: "Booking",
            appointment: "Book appointment",
            website: "Website",
            topics: "Training topics",
        };
    return (
        <footer className="border-t border-white/10 bg-[#060914]/72 px-4 py-14 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.9fr]">
                <div>
                    <div className="text-2xl font-black text-white">Carina Sophie Schoppe</div>
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
                        <a href={PROFILE.lecturerProfile} target="_blank" rel="noreferrer" download="lecturer.zip" className={linkClass}>{t.assets.lecturerProfile}</a>
                        <a href={PROFILE.trainingPortfolio} target="_blank" rel="noreferrer" download="carina-sophie-schoppe-training-portfolio.html" className={linkClass}>{t.assets.trainingPortfolio}</a>
                        <a href={PROFILE.trainingCatalogue} target="_blank" rel="noreferrer" download="carina-sophie-schoppe-ai-it-training-catalogue.html" className={linkClass}>{t.assets.trainingCatalogue}</a>
                    </div>
                </div>

                <div>
                    <h2 className="text-sm font-black uppercase tracking-[0.16em] text-sky-100">{labels.website}</h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {navItems.map((item) => <NavLink key={item.to} to={item.to} className={linkClass}>{t.nav[item.key]}</NavLink>)}
                        <Link to="/imprint" className={linkClass}>{t.nav.imprint}</Link>
                        <Link to="/privacy" className={linkClass}>{t.nav.privacy}</Link>
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

import {IMAGES, PROFILE} from "../data/profile.js";
import {useSiteContent} from "../data/localizedContent.js";
import {useLanguage} from "../i18n.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import Photo from "../components/Photo.jsx";
import {PageHero, TrustRail} from "../components/LuminoviaDesign.jsx";

const copy = {
    en: {
        badge: "Company",
        title: "Digital expertise, clearly taught and practically applied.",
        intro: "Luminovia is a remote-first training and consulting company for organisations working across AI, IT, cybersecurity, software, data and digital learning.",
        follow: "Founder Carina Sophie Schoppe combines technical practice with instructional design and structured consulting. That combination shapes every workshop, programme and advisory engagement.",
        linkedin: "View LinkedIn",
        github: "View GitHub",
        portfolio: "View personal portfolio",
        timeline: "Company background",
        cards: [
            ["Didactic", "Complex topics are translated into structured, learner-friendly formats with exercises and transfer logic."],
            ["Technical", "AI, software, cybersecurity, data and business IT are taught through systems, workflows and examples that connect concepts with implementation reality."],
            ["Business", "Training and consulting are connected to roles, decisions, stakeholder needs and practical operating routines."],
            ["Professional", "Remote-first, bilingual and built for adult learners, corporate teams and education providers."],
        ],
        links: [
            ["Training", "Structured delivery across AI, software, cybersecurity, data and business technology.", "/training"],
            ["Consulting", "Advisory and implementation support for AI use cases, roadmaps, learning architecture and digital enablement.", "/consulting"],
            ["Projects", "Selected digital, software, AI research and automation projects behind Luminovia's training and consulting profile.", "/projects"],
        ],
        founderCard: ["Founder portfolio", "Carina's personal CV, software projects, writing and public profile live separately at carinaschoppe.com. Luminovia remains the business site for company services."],
        timelineTitle: "Company and leadership background",
    },
    de: {
        badge: "Unternehmen",
        title: "Digitale Expertise, klar vermittelt und praktisch eingesetzt.",
        intro: "Luminovia ist ein remote-first Trainings- und Beratungsunternehmen für Organisationen, die mit KI, IT, Cybersecurity, Software, Daten und digitalem Lernen arbeiten.",
        follow: "Gründerin Carina Sophie Schoppe verbindet technische Praxis mit Lerndesign und strukturierter Beratung. Diese Verbindung prägt Workshops, Programme und Beratungsmandate.",
        linkedin: "LinkedIn ansehen",
        github: "GitHub ansehen",
        portfolio: "Persönliches Portfolio",
        timeline: "Unternehmenshintergrund",
        cards: [
            ["Didaktisch", "Komplexe Themen werden in strukturierte, lernfreundliche Formate mit Übungen und Transferlogik übersetzt."],
            ["Technisch", "KI, Software, Cybersecurity, Daten und Unternehmens-IT werden anhand realistischer Systeme, Arbeitsabläufe und Beispiele vermittelt."],
            ["Geschäftsnah", "Training und Beratung orientieren sich an Rollen, Entscheidungen, Verantwortlichkeiten und konkreten Arbeitsabläufen."],
            ["Professionell", "Remote-first, zweisprachig und ausgelegt auf Erwachsenenbildung, Unternehmensteams und Bildungsanbieter."],
        ],
        links: [
            ["Training", "Strukturierte Formate zu KI, Software, Cybersecurity, Daten und digitaler Arbeit.", "/training"],
            ["Beratung", "Beratung und Umsetzungsbegleitung für KI-Anwendungsfälle, Fahrpläne und Lernarchitektur.", "/consulting"],
            ["Projekte", "Ausgewählte Software-, Forschungs- und Automatisierungsprojekte als fachliche Grundlage der Arbeit.", "/projects"],
        ],
        founderCard: ["Portfolio der Gründerin", "Carinas persönlicher CV, Softwareprojekte, Texte und öffentliches Profil liegen separat auf carinaschoppe.com. Luminovia bleibt die Business-Seite für Firmenleistungen."],
        timelineTitle: "Unternehmens- und Führungshintergrund",
    },
};

export default function AboutPage() {
    const {language, t} = useLanguage();
    const {timeline} = useSiteContent();
    const c = copy[language];

    return (
        <main className="lumo-subpage px-4 pb-24 pt-24 sm:px-6 lg:px-8">
            <div className="-mx-4 -mt-24 sm:-mx-6 lg:-mx-8">
                <PageHero
                    label={c.badge}
                    title={c.title}
                    copy={`${c.intro} ${c.follow}`}
                    actions={<><Button to="/contact#contact-options">{t.nav.book}</Button><Button href={PROFILE.founderPortfolio} variant="secondary">{c.portfolio}</Button></>}
                    visual={<TrustRail items={c.cards.map(([title, text]) => ({icon: title.slice(0, 2).toUpperCase(), title, copy: text}))}/>}
                />
            </div>
            <div className="mx-auto max-w-7xl">
                <div className="mt-10 grid gap-5 lg:grid-cols-[0.4fr_0.6fr] lg:items-start">
                    <Photo src={IMAGES.headshot} alt="Leadership portrait for Luminovia Training & Consulting" className="aspect-[4/5] rounded-[1rem]" imgClass="object-[50%_20%]" loading="eager" fetchPriority="high"/>
                    <Card>
                        <h2 className="text-3xl font-black text-white">{c.founderCard[0]}</h2>
                        <p className="mt-4 text-base leading-8 text-slate-300">{c.founderCard[1]}</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Button href={PROFILE.linkedin}>{c.linkedin}</Button>
                            <Button href={PROFILE.github} variant="secondary">{c.github}</Button>
                            <Button href={PROFILE.founderPortfolio} variant="secondary">{c.portfolio}</Button>
                        </div>
                    </Card>
                </div>

                <div className="mt-16 grid gap-5 lg:grid-cols-3">
                    {c.links.map(([title, text, to]) => (
                        <Card key={title}>
                            <h2 className="text-2xl font-black text-white">{title}</h2>
                            <p className="mt-4 text-sm leading-7 text-slate-300">{text}</p>
                            <div className="mt-6">
                                <Button to={to} variant="secondary">{t.open}</Button>
                            </div>
                        </Card>
                    ))}
                    <Card>
                        <h2 className="text-2xl font-black text-white">{c.founderCard[0]}</h2>
                        <p className="mt-4 text-sm leading-7 text-slate-300">{c.founderCard[1]}</p>
                        <div className="mt-6">
                            <Button href={PROFILE.founderPortfolio} variant="secondary">{c.portfolio}</Button>
                        </div>
                    </Card>
                </div>

                <div className="mt-16">
                    <h2 className="text-3xl font-black text-white">{c.timelineTitle}</h2>
                    <div className="mt-6 grid gap-4 lg:grid-cols-5">
                        {timeline.map((item) => (
                            <Card key={item.year}>
                                <div className="text-sm font-black text-sky-100">{item.year}</div>
                                <h3 className="mt-3 text-xl font-black text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-300">{item.copy}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

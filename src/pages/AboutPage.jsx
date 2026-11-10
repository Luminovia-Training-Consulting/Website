import {ArrowRight, ArrowUpRight} from "lucide-react";
import {Link} from "react-router-dom";
import Button from "../components/Button.jsx";
import {Container} from "../components/LuminoviaDesign.jsx";
import Photo from "../components/Photo.jsx";
import {IMAGES, PROFILE} from "../data/profile.js";
import {useSiteContent} from "../data/localizedContent.js";
import {useLanguage} from "../i18n.jsx";
import "../styles/people.css";

const copy = {
    en: {
        label: "About Luminovia",
        title: "I’m Carina.",
        titleAccent: "I make technical ideas teachable.",
        intro: "I founded Luminovia to bring software, cybersecurity and AI into training people can use at work. I develop workshops and courses for companies, universities and training providers.",
        founder: "Founder and trainer",
        image: "Portrait of Carina Sophie Schoppe",
        credentials: ["Business information systems", "Training and assessment", "Brisbane · working internationally"],
        approach: "How I work",
        practices: [
            ["Start with a real task", "We pick something your team actually needs to do, from writing a query to assessing an AI use case."],
            ["Make room for practice", "Participants work through examples, ask questions and try things out in a setting where mistakes are part of learning."],
            ["Build for everyday use", "Checklists, exercises and materials give teams something to return to after the session."],
        ],
        timeline: "The road to Luminovia",
        explore: "Explore Luminovia",
        links: [["Training", "/training"], ["Consulting", "/consulting"], ["References", "/clients"], ["Projects", "/projects"]],
        portfolio: "Personal portfolio",
        contact: "Request an introductory call",
    },
    de: {
        label: "Über Luminovia",
        title: "Ich bin Carina.",
        titleAccent: "Ich mache Technik verständlich.",
        intro: "Ich habe Luminovia gegründet, um Software, Cybersecurity und KI so zu vermitteln, dass Menschen sie im Beruf einsetzen können. Dafür entwickle ich Workshops und Kurse für Unternehmen, Hochschulen und Bildungsanbieter.",
        founder: "Gründerin und Trainerin",
        image: "Porträt von Carina Sophie Schoppe",
        credentials: ["Wirtschaftsinformatik", "Berufs- und Erwachsenenbildung", "Brisbane · international tätig"],
        approach: "Wie ich arbeite",
        practices: [
            ["Mit einer echten Aufgabe beginnen", "Wir nehmen uns etwas vor, das Ihr Team wirklich braucht, etwa eine SQL-Abfrage oder die Bewertung eines KI-Anwendungsfalls."],
            ["Zeit zum Ausprobieren einplanen", "Die Teilnehmenden arbeiten an Beispielen, stellen Fragen und probieren Lösungen aus. Fehler gehören dabei zum Lernen."],
            ["Material für den Alltag mitgeben", "Mit Checklisten, Übungen und Unterlagen kann Ihr Team auch nach dem Training an den Themen weiterarbeiten."],
        ],
        timeline: "Der Weg zu Luminovia",
        explore: "Luminovia kennenlernen",
        links: [["Training", "/training"], ["Beratung", "/consulting"], ["Referenzen", "/clients"], ["Projekte", "/projects"]],
        portfolio: "Persönliches Portfolio",
        contact: "Erstgespräch anfragen",
    },
};

export default function AboutPage() {
    const {language} = useLanguage();
    const {timeline} = useSiteContent();
    const c = copy[language];

    return (
        <main className="lumo-subpage people-page">
            <Container>
                <section className="people-about-hero" aria-labelledby="about-heading">
                    <div className="people-about-intro">
                        <p className="lumo-section-label">{c.label}</p>
                        <h1 id="about-heading" className="people-display">{c.title}{" "}<span>{c.titleAccent}</span></h1>
                    </div>
                    <figure className="people-founder">
                        <Photo src={IMAGES.headshot} alt={c.image} className="people-founder-photo" imgClass="object-[50%_24%]" fetchPriority="high" sizes="(min-width: 960px) 420px, (min-width: 620px) 360px, 90vw"/>
                        <figcaption><strong>{PROFILE.founder}</strong><span>{c.founder}</span></figcaption>
                    </figure>
                    <div className="people-about-bio">
                        <p className="people-lead">{c.intro}</p>
                        <ul className="people-tags">{c.credentials.map((item) => <li key={item}>{item}</li>)}</ul>
                        <div className="people-inline-links">
                            <a href={PROFILE.founderPortfolio} target="_blank" rel="noreferrer">{c.portfolio} <ArrowUpRight aria-hidden="true"/></a>
                            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true"/></a>
                            <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true"/></a>
                        </div>
                    </div>
                </section>

                <section className="people-section people-practice" aria-labelledby="practice-heading">
                    <h2 id="practice-heading">{c.approach}</h2>
                    <ol>
                        {c.practices.map(([title, text], index) => (
                            <li key={title}>
                                <span className="people-number" aria-hidden="true">0{index + 1}</span>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </li>
                        ))}
                    </ol>
                </section>

                <section className="people-section people-split people-timeline" aria-labelledby="about-timeline-heading">
                    <h2 id="about-timeline-heading">{c.timeline}</h2>
                    <ol>
                        {[...timeline].reverse().map(({year, title, copy: detail}) => (
                            <li key={year}>
                                <span className="people-number">{year}</span>
                                <div><h3>{title}</h3><p>{detail}</p></div>
                            </li>
                        ))}
                    </ol>
                </section>

                <section className="people-section people-about-next" aria-labelledby="about-next-heading">
                    <div>
                        <h2 id="about-next-heading">{c.explore}</h2>
                        <div className="people-inline-links">
                            {c.links.map(([label, to]) => <Link key={to} to={to}>{label} <ArrowRight aria-hidden="true"/></Link>)}
                        </div>
                    </div>
                    <Button to="/contact#appointment">{c.contact}</Button>
                </section>
            </Container>
        </main>
    );
}

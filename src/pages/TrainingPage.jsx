import {Link} from "react-router-dom";
import {businessOfferingsForLanguage} from "../data/businessOfferings.js";
import {useSiteContent} from "../data/localizedContent.js";
import {topicLinkForLabel, trainingDetailsForLanguage} from "../data/trainingDetails.js";
import {useLanguage} from "../i18n.jsx";
import Button from "../components/Button.jsx";
import DemoVideoSection from "../components/DemoVideoSection.jsx";
import SectionJumpNav from "../components/SectionJumpNav.jsx";
import {Container, PageHero} from "../components/LuminoviaDesign.jsx";
import "../styles/business.css";

const tones = ["mint", "lilac", "yellow"];

const copy = {
    de: {
        label: "Live-Trainings & Kurse",
        title: "Training, das digitale Arbeit besser macht.",
        intro: "In Workshops und Kursen zu KI, IT und Cybersecurity arbeitet Ihre Gruppe an Aufgaben aus ihrem Alltag. Wir passen die Übungen und das Tempo an das Vorwissen an. Das Angebot richtet sich an Teams, Hochschulen und Bildungsträger.",
        jumpLabel: "Auf dieser Seite",
        jumpItems: [["#details", "Themenkatalog"], ["#formats", "Formate"], ["#duration", "Dauer"], ["#demo-session", "Demo"], ["#methods", "Arbeitsweise"]],
        browse: "Trainings finden",
        catalog: "Themenkatalog",
        catalogCopy: "Wählen Sie ein Thema, um Inhalte, Lernziele und mögliche Kursformate zu sehen.",
        services: "Ausgewählte Trainings im Detail",
        serviceCopy: "Öffnen Sie ein Training, um zu sehen, für wen es gedacht ist, wie lange es dauert und was Sie darin lernen.",
        offers: "Angebote vergleichen",
        example: "Beispiel aus einem KI-Workshop",
        exampleSteps: ["Eine typische Aufgabe auswählen, etwa einen Entwurf für eine E-Mail.", "Zwei KI-Entwürfe auf Ton, Richtigkeit und fehlende Angaben prüfen.", "Entscheiden, was jemand im Team vor dem Versand noch prüfen muss."],
        delivery: "Formate für Teams und Bildungsträger",
        formats: "Lehrformate",
        duration: "Vom Briefing bis zum Kursprogramm",
        durationOutput: "Was dabei entstehen kann",
        methods: "So arbeiten wir im Training",
        boundaries: "Was wir gemeinsam vereinbaren",
        possible: "Mögliche Leistungen",
        limits: "Was nicht zum Auftrag gehört",
        audiences: "Für wen wir unterrichten",
        proof: "Was Carina in die Lehre einbringt",
        references: "Lehr- und Projekterfahrung ansehen",
        topics: "Weitere Themen nach Fachgebiet",
        details: "Trainingsdetails",
        custom: "Eigenes Thema anfragen",
        consulting: "Training mit Beratung verbinden",
        consultingCopy: "Sie möchten erst herausfinden, wo das Team Unterstützung braucht? Wir können vor dem Training einen Arbeitsablauf prüfen oder gemeinsam einen Lernplan entwickeln.",
        consultingLink: "Beratung ansehen",
        ask: "Training anfragen",
    },
    en: {
        label: "Live training & courses",
        title: "Training that improves digital work.",
        intro: "In our AI, IT and cybersecurity workshops and courses, your group works on tasks they recognise from their own work. We tailor the exercises and pace to their experience. We teach teams, universities and education providers.",
        jumpLabel: "On this page",
        jumpItems: [["#details", "Topic catalogue"], ["#formats", "Formats"], ["#duration", "Duration"], ["#demo-session", "Demo"], ["#methods", "How we work"]],
        browse: "Find a training topic",
        catalog: "Topic catalogue",
        catalogCopy: "Pick a topic to see what the course covers, what you’ll learn and how it can run.",
        services: "A closer look at selected courses",
        serviceCopy: "Open a course to see who it’s for, how long it takes and what you’ll learn.",
        offers: "Compare offers",
        example: "Example from an AI workshop",
        exampleSteps: ["Pick a familiar task, such as drafting an email.", "Check two AI drafts for tone, accuracy and missing information.", "Decide what someone on the team needs to check before sending it."],
        delivery: "Formats for teams and education providers",
        formats: "Teaching formats",
        duration: "From a short briefing to a full course",
        durationOutput: "What you can take away",
        methods: "How we teach",
        boundaries: "What we agree together",
        possible: "Services available",
        limits: "What’s outside the scope",
        audiences: "Who we teach",
        proof: "What Carina brings to the classroom",
        references: "Explore teaching and project experience",
        topics: "More topics by subject area",
        details: "Training details",
        custom: "Request a custom topic",
        consulting: "Combine training with consulting",
        consultingCopy: "Would you like to find out where the team needs support first? We can review a workflow or put together a learning plan before training starts.",
        consultingLink: "Explore consulting",
        ask: "Request training",
    },
};

export default function TrainingPage() {
    const {language, t} = useLanguage();
    const c = copy[language];
    const {coreOffers, trainingTopics, formats, serviceOfferings, audienceCards, trustSignals} = useSiteContent();
    const {durationModels, methods, boundaries} = businessOfferingsForLanguage(language);
    const detailTopics = trainingDetailsForLanguage(language);

    return (
        <main className="business-page" data-business-section="training">
            <PageHero
                label={c.label}
                title={c.title}
                copy={c.intro}
                actions={<><a href="#details" className="business-link">{c.browse}<span aria-hidden="true">↓</span></a><Button to="/offers" variant="secondary">{c.offers}</Button></>}
                visual={
                    <div className="business-panel business-stack" data-tone="yellow">
                        <p className="business-kicker">{c.example}</p>
                        <ol className="business-list business-numbered">
                            {c.exampleSteps.map((step) => <li key={step}>{step}</li>)}
                        </ol>
                    </div>
                }
            />
            <Container className="business-body">
                <SectionJumpNav label={c.jumpLabel} items={c.jumpItems}/>

                <section id="details">
                    <div className="business-heading"><h2>{c.catalog}</h2><p>{c.catalogCopy}</p></div>
                    <div className="business-index">
                        {detailTopics.map((topic) => (
                            <article key={topic.slug}>
                                <p className="business-kicker business-muted">{topic.category}</p>
                                <h3><Link to={`/training/${topic.slug}`} className="business-link">{topic.title}<span aria-hidden="true">↗</span></Link></h3>
                                <p className="business-muted">{topic.summary}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="services">
                    <div className="business-heading"><h2>{c.services}</h2><p>{c.serviceCopy}</p></div>
                    <div className="business-accordion">
                        {serviceOfferings.map((service) => {
                            const detailLink = topicLinkForLabel(service.title);

                            return (
                                <details key={service.title}>
                                    <summary>{service.title}</summary>
                                    <div className="business-layout">
                                        <div className="business-stack">
                                            <p>{service.description}</p>
                                            <dl className="business-facts">
                                                <div><dt>{t.serviceLabels.audience}</dt><dd>{service.audience}</dd></div>
                                                <div><dt>{t.serviceLabels.format}</dt><dd>{service.format}</dd></div>
                                                <div><dt>{t.serviceLabels.duration}</dt><dd>{service.duration}</dd></div>
                                            </dl>
                                        </div>
                                        <div className="business-stack">
                                            <h3>{t.serviceLabels.outcomes}</h3>
                                            <ul className="business-list">{service.outcomes.map((item) => <li key={item}>{item}</li>)}</ul>
                                            {detailLink && <Link className="business-link" to={detailLink}>{c.details}<span aria-hidden="true">↗</span></Link>}
                                            <Link className="business-link" to="/contact#contact-options">{c.ask}<span aria-hidden="true">↗</span></Link>
                                        </div>
                                    </div>
                                </details>
                            );
                        })}
                    </div>
                </section>

                <section id="formats">
                    <div className="business-heading"><h2>{c.delivery}</h2></div>
                    <div className="business-grid">
                        {coreOffers.map((offer, index) => (
                            <article key={offer.title} className="business-panel business-stack" data-tone={tones[index]}>
                                <p className="business-kicker">{offer.kicker}</p>
                                <h3>{offer.title}</h3>
                                <p><strong>{offer.outcome}</strong></p>
                                <p>{offer.copy}</p>
                                <ul className="business-list">{offer.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
                            </article>
                        ))}
                    </div>
                    <div className="business-subsection">
                        <h3>{c.formats}</h3>
                        <div className="business-index">
                            {formats.map((format) => (
                                <article key={format.title}>
                                    <p className="business-kicker business-muted">{format.label}</p>
                                    <h4>{format.title}</h4>
                                    <p>{format.copy}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="duration">
                    <div className="business-heading"><h2>{c.duration}</h2></div>
                    {durationModels.map((model) => (
                        <article key={model.title} className="business-row">
                            <h3>{model.title}</h3>
                            <div><p>{model.scope}</p><p className="business-muted"><strong>{c.durationOutput}</strong> · {model.output}</p></div>
                        </article>
                    ))}
                </section>

                <DemoVideoSection className="business-demo"/>

                <section id="methods" className="business-layout">
                    <div>
                        <div className="business-heading"><h2>{c.methods}</h2></div>
                        <div className="business-accordion">
                            {methods.map(([title, description]) => (
                                <details key={title}><summary>{title}</summary><p>{description}</p></details>
                            ))}
                        </div>
                    </div>
                    <div className="business-panel business-stack">
                        <h3>{c.boundaries}</h3>
                        <p className="business-kicker">{c.possible}</p>
                        <ul className="business-list">{boundaries.possible.map((item) => <li key={item}>{item}</li>)}</ul>
                        <p className="business-kicker">{c.limits}</p>
                        <ul className="business-list">{boundaries.notIncluded.map((item) => <li key={item}>{item}</li>)}</ul>
                    </div>
                </section>

                <section id="topics">
                    <div className="business-heading"><h2>{c.topics}</h2></div>
                    <div className="business-grid">
                        {trainingTopics.map((group) => (
                            <article key={group.group} className="business-stack">
                                <h3>{group.group}</h3>
                                <ul className="business-list business-list--ruled">
                                    {group.items.map((item) => {
                                        const detailLink = topicLinkForLabel(item);
                                        return <li key={item}>{detailLink ? <Link className="business-link" to={detailLink}>{item}</Link> : item}</li>;
                                    })}
                                </ul>
                            </article>
                        ))}
                    </div>
                    <Link to="/contact#contact-options" className="business-link mt-4">{c.custom}<span aria-hidden="true">↗</span></Link>
                </section>

                <div className="business-layout">
                    <section id="audiences">
                        <div className="business-heading"><h2>{c.audiences}</h2></div>
                        <div className="business-accordion">
                            {audienceCards.map((audience) => (
                                <details key={audience.title}><summary>{audience.title}</summary><p>{audience.copy}</p></details>
                            ))}
                        </div>
                    </section>
                    <section id="proof" className="business-panel business-stack" data-tone="lilac">
                        <h2 className="business-h2">{c.proof}</h2>
                        <ul className="business-list">
                            {trustSignals.map((signal) => <li key={signal.title}><strong>{signal.title}</strong> · {signal.copy}</li>)}
                        </ul>
                        <Link to="/clients" className="business-link">{c.references}<span aria-hidden="true">↗</span></Link>
                    </section>
                </div>

                <section id="consulting" className="business-panel business-stack" data-tone="mint">
                    <h2 className="business-h2">{c.consulting}</h2>
                    <p>{c.consultingCopy}</p>
                    <div className="lumo-action-row">
                        <Button to="/contact#contact-options">{c.ask}</Button>
                        <Button to="/consulting" variant="secondary">{c.consultingLink}</Button>
                    </div>
                </section>
            </Container>
        </main>
    );
}

import {Link, useParams} from "react-router-dom";
import Button from "../components/Button.jsx";
import {Container, CTASection, PageHero} from "../components/LuminoviaDesign.jsx";
import {findTrainingDetailTopic, trainingDetailsForLanguage} from "../data/trainingDetails.js";
import {useLanguage} from "../i18n.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import "../styles/business.css";

const copy = {
    de: {
        back: "Alle Trainings ansehen",
        audience: "Zielgruppe",
        format: "Format",
        duration: "Dauer",
        modules: "Das steht auf dem Trainingsplan",
        outcomes: "Das können Sie danach anwenden",
        deliverables: "Was Sie mitnehmen können",
        related: "Wenn Sie hier weitermachen möchten",
        contact: "Training anfragen",
        pricing: "Preise ansehen",
        next: "Dieses Thema für Ihr Team planen",
        nextCopy: "Sagen Sie uns, wer teilnimmt, was die Gruppe schon kann und welche Aufgaben sie nach dem Training selbst erledigen soll.",
    },
    en: {
        back: "View all training topics",
        audience: "Audience",
        format: "Format",
        duration: "Duration",
        modules: "What we cover in the training",
        outcomes: "What you’ll be able to do",
        deliverables: "What you can take away",
        related: "Related training topics",
        contact: "Request training",
        pricing: "View pricing",
        next: "Plan this training for your team",
        nextCopy: "Tell us who’s coming, what they already know and which tasks they’d like to handle on their own after training.",
    },
};

export default function TrainingTopicPage() {
    const {slug} = useParams();
    const {language} = useLanguage();
    const c = copy[language];
    const topics = trainingDetailsForLanguage(language);
    const topic = findTrainingDetailTopic(language, slug);

    if (!topic) {
        return <NotFoundPage/>;
    }

    const relatedTopics = topic.related
        .map((relatedSlug) => topics.find((item) => item.slug === relatedSlug))
        .filter(Boolean);

    return (
        <main className="business-page" data-business-section="course">
            <Container>
                <Link to="/training#details" className="business-link business-back">
                    <span aria-hidden="true">←</span>{c.back}
                </Link>
            </Container>
            <PageHero
                label={topic.category}
                title={topic.title}
                copy={topic.summary}
                actions={<><Button to="/contact#contact-options">{c.contact}</Button><Button to="/pricing" variant="secondary">{c.pricing}</Button></>}
                visual={
                    <dl className="business-panel business-facts" data-tone="mint">
                        <div><dt>{c.audience}</dt><dd>{topic.audience}</dd></div>
                        <div><dt>{c.format}</dt><dd>{topic.format}</dd></div>
                        <div><dt>{c.duration}</dt><dd>{topic.duration}</dd></div>
                    </dl>
                }
            />
            <Container className="business-body">
                <div className="business-layout business-layout--aside">
                    <section>
                        <div className="business-heading"><h2>{c.modules}</h2><p>{topic.promise}</p></div>
                        <ol className="business-list business-list--ruled business-numbered">
                            {topic.modules.map((item) => <li key={item}>{item}</li>)}
                        </ol>
                    </section>
                    <div className="business-stack">
                        <section className="business-panel" data-tone="lilac">
                            <div className="business-heading"><h2>{c.outcomes}</h2></div>
                            <ul className="business-list">
                                {topic.outcomes.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </section>
                        <section className="business-panel">
                            <div className="business-heading"><h2>{c.deliverables}</h2></div>
                            <ul className="business-list">
                                {topic.deliverables.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </section>
                    </div>
                </div>

                {relatedTopics.length > 0 && (
                    <section>
                        <div className="business-heading"><h2>{c.related}</h2></div>
                        <div className="business-index">
                            {relatedTopics.map((related) => (
                                <article key={related.slug}>
                                    <p className="business-kicker business-muted">{related.category}</p>
                                    <h3><Link className="business-link" to={`/training/${related.slug}`}>{related.title}<span aria-hidden="true">↗</span></Link></h3>
                                    <p className="business-muted">{related.summary}</p>
                                </article>
                            ))}
                        </div>
                    </section>
                )}

            </Container>
            <div className="business-end">
                <CTASection
                    title={c.next}
                    copy={c.nextCopy}
                    primary={<Button to="/contact#contact-options">{c.contact}</Button>}
                    secondary={<Button to="/training#details" variant="secondary">{c.back}</Button>}
                />
            </div>
        </main>
    );
}

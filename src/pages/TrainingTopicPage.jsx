import {Link, useParams} from "react-router-dom";
import Button from "../components/Button.jsx";
import {Container, CTASection, PageHero} from "../components/LuminoviaDesign.jsx";
import SectionJumpNav from "../components/SectionJumpNav.jsx";
import {findTrainingDetailTopic, trainingDetailsForLanguage} from "../data/trainingDetails.js";
import {useLanguage} from "../i18n.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import "../styles/business.css";

const copy = {
    de: {
        back: "Alle Trainings ansehen",
        backToSubject: "Zurück zum Fachgebiet",
        jumpLabel: "In diesem Training",
        jumps: [["#course-outline", "Kursplan"], ["#course-outcomes", "Lernziele"], ["#course-materials", "Materialien"]],
        relatedJump: "Weitere Trainings",
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
        backToSubject: "Back to this subject area",
        jumpLabel: "In this course",
        jumps: [["#course-outline", "Course outline"], ["#course-outcomes", "Learning outcomes"], ["#course-materials", "Materials"]],
        relatedJump: "Related courses",
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
    const jumpItems = relatedTopics.length ? [...c.jumps, ["#course-related", c.relatedJump]] : c.jumps;
    const enquiryPath = `/contact?intent=training&course=${encodeURIComponent(topic.slug)}#enquiry`;

    return (
        <main className="business-page" data-business-section="course">
            <Container>
                <Link to={"/training#training-" + topic.subjectArea} className="business-link business-back">
                    <span aria-hidden="true">←</span>{c.backToSubject}
                </Link>
            </Container>
            <PageHero
                label={topic.category}
                title={topic.title}
                copy={topic.summary}
                actions={<><Button to={enquiryPath}>{c.contact}</Button><Button to="/pricing#rates" variant="secondary">{c.pricing}</Button></>}
                visual={
                    <dl className="business-panel business-facts" data-tone="mint">
                        <div><dt>{c.audience}</dt><dd>{topic.audience}</dd></div>
                        <div><dt>{c.format}</dt><dd>{topic.format}</dd></div>
                        <div><dt>{c.duration}</dt><dd>{topic.duration}</dd></div>
                    </dl>
                }
            />
            <Container className="business-body">
                <SectionJumpNav label={c.jumpLabel} items={jumpItems}/>
                <div className="business-layout business-layout--aside">
                    <section id="course-outline" aria-labelledby="course-outline-title">
                        <div className="business-heading"><h2 id="course-outline-title">{c.modules}</h2><p>{topic.promise}</p></div>
                        <ol className="business-list business-list--ruled business-numbered">
                            {topic.modules.map((item) => <li key={item}>{item}</li>)}
                        </ol>
                    </section>
                    <div className="business-stack">
                        <section id="course-outcomes" className="business-panel" data-tone="lilac" aria-labelledby="course-outcomes-title">
                            <div className="business-heading"><h2 id="course-outcomes-title">{c.outcomes}</h2></div>
                            <ul className="business-list">
                                {topic.outcomes.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </section>
                        <section id="course-materials" className="business-panel" aria-labelledby="course-materials-title">
                            <div className="business-heading"><h2 id="course-materials-title">{c.deliverables}</h2></div>
                            <ul className="business-list">
                                {topic.deliverables.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </section>
                    </div>
                </div>

                {relatedTopics.length > 0 && (
                    <section id="course-related" aria-labelledby="course-related-title">
                        <div className="business-heading"><h2 id="course-related-title">{c.related}</h2></div>
                        <div className="business-index">
                            {relatedTopics.map((related) => (
                                <article key={related.slug}>
                                    <p className="business-kicker business-muted">{related.category}</p>
                                    <h3><Link className="business-link" to={`/training/${related.slug}`}>{related.title}<span aria-hidden="true">↗</span></Link></h3>
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
                    primary={<Button to={enquiryPath}>{c.contact}</Button>}
                    secondary={<Button to="/training#details" variant="secondary">{c.back}</Button>}
                />
            </div>
        </main>
    );
}

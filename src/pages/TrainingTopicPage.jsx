import {Link, useParams} from "react-router-dom";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import {findTrainingDetailTopic, trainingDetailsForLanguage} from "../data/trainingDetails.js";
import {useLanguage} from "../i18n.jsx";

function DetailList({items}) {
    return (
        <div className="grid gap-3">
            {items.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-[#071225]/70 p-4 text-sm leading-7 text-slate-200">
                    {item}
                </div>
            ))}
        </div>
    );
}

export default function TrainingTopicPage() {
    const {slug} = useParams();
    const {language, t} = useLanguage();
    const topics = trainingDetailsForLanguage(language);
    const topic = findTrainingDetailTopic(language, slug);
    const copy = language === "de"
        ? {
            back: "Alle Trainings ansehen",
            badge: "Detailseite",
            audience: "Zielgruppe",
            format: "Format",
            duration: "Dauer",
            promise: "Nutzen",
            modules: "Was die Seite abdeckt",
            outcomes: "Lernergebnisse",
            deliverables: "Moegliche Materialien und Ergebnisse",
            related: "Passende Anschlussseiten",
            notFound: "Dieses Training ist noch nicht als Detailseite angelegt.",
            contact: "Training anfragen",
            pricing: "Preise ansehen",
        }
        : {
            back: "View all training topics",
            badge: "Detailed training page",
            audience: "Audience",
            format: "Format",
            duration: "Duration",
            promise: "Value",
            modules: "What this page covers",
            outcomes: "Learning outcomes",
            deliverables: "Possible materials and deliverables",
            related: "Related topic pages",
            notFound: "This training topic is not available as a detail page yet.",
            contact: "Request training",
            pricing: "View pricing",
        };

    if (!topic) {
        return (
            <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <Badge>{copy.badge}</Badge>
                    <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">{copy.notFound}</h1>
                    <div className="mt-8 flex justify-center">
                        <Button to="/training">{copy.back}</Button>
                    </div>
                </div>
            </main>
        );
    }

    const relatedTopics = topic.related
        .map((relatedSlug) => topics.find((item) => item.slug === relatedSlug))
        .filter(Boolean);

    return (
        <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <Link to="/training" className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-black text-sky-100 transition hover:border-sky-200/40 hover:bg-sky-200/10">
                    {copy.back}
                </Link>

                <section className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                    <div>
                        <Badge>{topic.category}</Badge>
                        <h1 className="mt-5 text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                            {topic.title}
                        </h1>
                    </div>
                    <div>
                        <p className="text-lg leading-8 text-slate-300">{topic.summary}</p>
                        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <Button to="/contact#contact-options">{copy.contact}</Button>
                            <Button to="/pricing" variant="secondary">{copy.pricing}</Button>
                        </div>
                    </div>
                </section>

                <section className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {[
                        [copy.audience, topic.audience],
                        [copy.format, topic.format],
                        [copy.duration, topic.duration],
                        [copy.promise, topic.promise],
                    ].map(([title, body]) => (
                        <Card key={title}>
                            <div className="text-xs font-black uppercase tracking-[0.18em] text-sky-100">{title}</div>
                            <p className="mt-4 text-sm leading-7 text-slate-300">{body}</p>
                        </Card>
                    ))}
                </section>

                <section className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                    <Card>
                        <Badge tone="cyan">{copy.modules}</Badge>
                        <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] text-white">{topic.title}</h2>
                        <div className="mt-6">
                            <DetailList items={topic.modules}/>
                        </div>
                    </Card>
                    <div className="grid gap-6">
                        <Card>
                            <Badge tone="emerald">{copy.outcomes}</Badge>
                            <div className="mt-6">
                                <DetailList items={topic.outcomes}/>
                            </div>
                        </Card>
                        <Card>
                            <Badge tone="violet">{copy.deliverables}</Badge>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {topic.deliverables.map((item) => (
                                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-black text-slate-200">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </div>
                </section>

                {relatedTopics.length > 0 && (
                    <section className="mt-16">
                        <Badge tone="emerald">{copy.related}</Badge>
                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            {relatedTopics.map((relatedTopic) => (
                                <Link key={relatedTopic.slug} to={`/training/${relatedTopic.slug}`} className="group block">
                                    <Card className="h-full">
                                        <div className="text-xs font-black uppercase tracking-[0.18em] text-sky-100">{relatedTopic.category}</div>
                                        <h2 className="mt-3 text-2xl font-black text-white transition group-hover:text-sky-100">{relatedTopic.title}</h2>
                                        <p className="mt-4 text-sm leading-7 text-slate-300">{relatedTopic.summary}</p>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,.1),0_24px_84px_rgba(0,0,0,.28)] sm:p-8">
                    <h2 className="text-3xl font-black tracking-[-0.035em] text-white">{t.home.contactTitle}</h2>
                    <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-300">{t.home.contactCopy}</p>
                    <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Button to="/contact#contact-options">{copy.contact}</Button>
                        <Button to="/training" variant="secondary">{copy.back}</Button>
                    </div>
                </section>
            </div>
        </main>
    );
}

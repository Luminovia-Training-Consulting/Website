import SoftwareProjectsSection from "../components/SoftwareProjectsSection.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import {businessOfferingsForLanguage} from "../data/businessOfferings.js";
import {PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";

export default function SoftwarePage() {
    const {language} = useLanguage();
    const {projectTypes} = businessOfferingsForLanguage(language);
    const copy = language === "de"
        ? {
            badge: "Projektportfolio",
            title: "Projekte, die Luminovia-Training und Consulting praktisch machen.",
            intro: "Dieses Portfolio zeigt ausgewählte Projektarbeit, die in Trainings, Beratung und Umsetzung als Praxisbezug dient: Automatisierung mit Python, AI-gestützte Research-Workflows, Datenbereinigung, Kotlin-Plugins, Mobile Apps, Game-Systeme und digitale Arbeitsabläufe.",
            github: "GitHub-Profil öffnen",
            skills: "Consulting ansehen",
            typesTitle: "Was diese Projekte für Kunden bedeuten können",
            typesCopy: "Die Projektseite ist kein Software-Shop mit fertigen Produkten. Sie zeigt, welche Arten von Arbeit Luminovia in Training, Consulting und Projektbegleitung sinnvoll einordnen, strukturieren oder begleiten kann.",
            examplesLabel: "Moegliche Artefakte",
        }
        : {
            badge: "Project portfolio",
            title: "Projects that make Luminovia training and consulting practical.",
            intro: "This portfolio highlights selected project work that gives Luminovia's training, consulting and implementation support practical depth: Python automation, AI-supported research workflows, data cleanup, Kotlin plugins, mobile apps, game systems and digital workflows.",
            github: "Open GitHub profile",
            skills: "View consulting",
            typesTitle: "What these projects can mean for clients",
            typesCopy: "The project page is not a software shop with off-the-shelf products. It shows the kinds of work Luminovia can structure, explain or accompany in training, consulting and project support.",
            examplesLabel: "Possible artefacts",
        };
    return (
        <main className="pb-24 pt-32">
            <section className="px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <Badge tone="blue">{copy.badge}</Badge>
                    <div className="mt-6 text-center">
                        <h1 className="mx-auto max-w-5xl text-5xl font-black tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                            {copy.title}
                        </h1>
                        <p className="mx-auto mt-7 max-w-4xl text-lg leading-8 text-slate-300">
                            {copy.intro}
                        </p>
                    </div>
                    <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Button href={PROFILE.github}>{copy.github}</Button>
                        <Button to="/consulting" variant="secondary">{copy.skills}</Button>
                    </div>
                </div>
            </section>
            <section className="px-4 py-14 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                        <div>
                            <Badge tone="cyan">{language === "de" ? "Projektarten" : "Project types"}</Badge>
                            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{copy.typesTitle}</h2>
                        </div>
                        <p className="text-lg leading-8 text-slate-300">{copy.typesCopy}</p>
                    </div>
                    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                        {projectTypes.map((project) => (
                            <Card key={project.title}>
                                <h3 className="text-xl font-black text-white">{project.title}</h3>
                                <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
                                <div className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-sky-100">{copy.examplesLabel}</div>
                                <div className="mt-3 grid gap-2">
                                    {project.examples.map((example) => (
                                        <span key={example} className="rounded-2xl border border-white/10 bg-white/[0.055] px-3 py-2 text-xs font-black uppercase tracking-[0.1em] text-slate-200">{example}</span>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            <SoftwareProjectsSection/>
        </main>
    );
}

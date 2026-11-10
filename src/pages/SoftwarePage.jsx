import {ArrowDown, ArrowRight, ArrowUpRight} from "lucide-react";
import {Link} from "react-router-dom";
import Button from "../components/Button.jsx";
import SoftwareProjectsSection from "../components/SoftwareProjectsSection.jsx";
import {Container} from "../components/LuminoviaDesign.jsx";
import {businessOfferingsForLanguage} from "../data/businessOfferings.js";
import {PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";
import "../styles/people.css";

const copy = {
    en: {
        label: "Projects",
        title: "From a problem to working software.",
        intro: "Selected work from Carina’s development and research, including a Python literature-review pipeline, Kotlin plugins and apps.",
        index: "See the projects",
        github: "Luminovia on GitHub",
        types: "Where we can help on your project",
        typesCopy: "Luminovia can help you scope a project, choose an approach and turn the work into something your team can use. Here are examples of what that can involve.",
        consulting: "Explore consulting",
        contact: "Discuss your project",
    },
    de: {
        label: "Projekte",
        title: "Von der Aufgabe zur funktionierenden Software.",
        intro: "Ausgewählte Arbeiten aus Carinas Entwicklung und Forschung. Dazu gehören eine Python-Pipeline für Literaturrecherchen, Kotlin-Plugins und Apps.",
        index: "Projekte ansehen",
        github: "Luminovia auf GitHub",
        types: "Wobei wir Sie im Projekt unterstützen",
        typesCopy: "Wir helfen Ihnen, ein Vorhaben einzugrenzen, einen passenden Ansatz zu wählen und Ergebnisse zu erarbeiten, mit denen Ihr Team weiterarbeiten kann.",
        consulting: "Beratung ansehen",
        contact: "Projekt besprechen",
    },
};

export default function SoftwarePage() {
    const {language} = useLanguage();
    const {projectTypes} = businessOfferingsForLanguage(language);
    const c = copy[language];

    return (
        <main className="lumo-subpage people-page">
            <Container>
                <section className="people-simple-hero people-project-hero" aria-labelledby="projects-heading">
                    <p className="lumo-section-label">{c.label}</p>
                    <h1 id="projects-heading" className="people-display">{c.title}</h1>
                    <p className="people-lead">{c.intro}</p>
                    <div className="people-inline-links">
                        <a href="#selected-projects">{c.index} <ArrowDown aria-hidden="true"/></a>
                        <a href={PROFILE.github} target="_blank" rel="noreferrer">{c.github} <ArrowUpRight aria-hidden="true"/></a>
                    </div>
                </section>
            </Container>

            <SoftwareProjectsSection/>

            <Container>
                <section className="people-section people-split people-project-types" aria-labelledby="project-types-heading">
                    <div>
                        <h2 id="project-types-heading">{c.types}</h2>
                        <p>{c.typesCopy}</p>
                        <div className="lumo-action-row mt-4">
                            <Button to="/contact#appointment">{c.contact}</Button>
                            <Link className="people-text-link" to="/consulting">{c.consulting} <ArrowRight aria-hidden="true"/></Link>
                        </div>
                    </div>
                    <dl>
                        {projectTypes.map((project) => (
                            <div key={project.title}>
                                <dt>{project.title}</dt>
                                <dd>{project.description}</dd>
                                <dd><ul className="people-tags">{project.examples.map((example) => <li key={example}>{example}</li>)}</ul></dd>
                            </div>
                        ))}
                    </dl>
                </section>
            </Container>
        </main>
    );
}

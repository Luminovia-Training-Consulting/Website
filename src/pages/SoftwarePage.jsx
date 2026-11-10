import {ArrowDown, ArrowRight, ArrowUpRight} from "lucide-react";
import {Link} from "react-router-dom";
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
        intro: "Selected projects from Carina’s development and research work, from a Python pipeline for literature reviews to Kotlin plugins and apps. This work informs the examples and exercises Luminovia uses in training and consulting.",
        index: "See the projects",
        github: "Luminovia on GitHub",
        types: "Where we can help on your project",
        typesCopy: "Luminovia can help you scope a project, choose an approach and turn the work into something your team can use. Here are examples of what that can involve.",
        consulting: "Explore consulting",
    },
    de: {
        label: "Projekte",
        title: "Von der Aufgabe zur funktionierenden Software.",
        intro: "Ausgewählte Arbeiten aus Carinas Entwicklung und Forschung, von einer Python-Pipeline für Literaturreviews bis zu Kotlin-Plugins und Apps. Daraus entstehen Beispiele und Übungen für Training und Beratung.",
        index: "Projekte ansehen",
        github: "Luminovia auf GitHub",
        types: "Wobei wir Sie im Projekt unterstützen",
        typesCopy: "Wir helfen Ihnen, ein Vorhaben einzugrenzen, einen passenden Ansatz zu wählen und Ergebnisse zu erarbeiten, mit denen Ihr Team weiterarbeiten kann.",
        consulting: "Beratung ansehen",
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
                        <Link className="people-text-link" to="/consulting">{c.consulting} <ArrowRight aria-hidden="true"/></Link>
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

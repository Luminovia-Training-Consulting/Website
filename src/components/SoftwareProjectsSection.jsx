import {ArrowRight} from "lucide-react";
import {Link} from "react-router-dom";
import {Container} from "./LuminoviaDesign.jsx";
import {useSiteContent} from "../data/localizedContent.js";
import {useLanguage} from "../i18n.jsx";
import "../styles/people.css";

export default function SoftwareProjectsSection({compact = false}) {
    const {language} = useLanguage();
    const {softwareProjects} = useSiteContent();
    const projects = compact ? softwareProjects.slice(0, 4) : softwareProjects;
    const isGerman = language === "de";

    return (
        <section id="selected-projects" className="people-section people-projects" aria-labelledby="selected-projects-heading">
            <Container>
                <div className="people-section-intro">
                    <h2 id="selected-projects-heading">{isGerman ? "Ausgewählte Projekte" : "Selected projects"}</h2>
                    {compact && <Link className="people-text-link" to="/projects">{isGerman ? "Alle Projekte" : "All projects"} <ArrowRight aria-hidden="true"/></Link>}
                </div>
                <div className="people-project-grid">
                    {projects.map((project) => (
                        <article key={project.name}>
                            <p className="people-kicker">{project.type}</p>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <ul className="people-tags">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                            <p className="people-project-status">{project.status}</p>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}

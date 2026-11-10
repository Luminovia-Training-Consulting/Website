import {ArrowUpRight} from "lucide-react";
import {Link} from "react-router-dom";
import {Container} from "./LuminoviaDesign.jsx";
import {useSiteContent} from "../data/localizedContent.js";
import {useLanguage} from "../i18n.jsx";
import "../styles/people.css";

export default function ClientProofSection({compact = false}) {
    const {language} = useLanguage();
    const {referenceOrganisations} = useSiteContent();
    const visibleReferences = compact ? referenceOrganisations.slice(0, 8) : referenceOrganisations;
    const isGerman = language === "de";

    return (
        <section id="organisations" className="people-reference-section people-section" aria-labelledby="reference-list-title">
            <Container>
                <div className="people-section-intro">
                    <h2 id="reference-list-title">{isGerman ? "Ausgewählte Stationen" : "Selected organisations"}</h2>
                    {compact && <Link className="people-text-link" to="/clients">{isGerman ? "Alle Referenzen" : "All references"} <ArrowUpRight aria-hidden="true"/></Link>}
                </div>
                <ul className="people-reference-list">
                    {visibleReferences.map((reference) => (
                        <li key={reference.name}>
                            <article className="people-reference-entry">
                                <span className="people-reference-initials" aria-hidden="true">{reference.initials}</span>
                                <div>
                                    <p className="people-kicker">{reference.type}</p>
                                    <h3>
                                        {reference.href
                                            ? <a href={reference.href} target="_blank" rel="noreferrer">{reference.name} <ArrowUpRight aria-hidden="true"/></a>
                                            : reference.name}
                                    </h3>
                                    {reference.linkSource && (
                                        <p className="people-reference-source">
                                            {isGerman ? `Partnereintrag bei ${reference.linkSource}` : `Partner listing on ${reference.linkSource}`}
                                        </p>
                                    )}
                                </div>
                                <p>{reference.work}</p>
                            </article>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}

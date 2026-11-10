import {ArrowUpRight} from "lucide-react";
import {Link} from "react-router-dom";
import {Container} from "./LuminoviaDesign.jsx";
import {useSiteContent} from "../data/localizedContent.js";
import {useLanguage} from "../i18n.jsx";
import "../styles/people.css";

export default function ClientProofSection({compact = false}) {
    const {language} = useLanguage();
    const {formerClients} = useSiteContent();
    const visibleClients = compact ? formerClients.slice(0, 8) : formerClients;
    const isGerman = language === "de";

    return (
        <section className="people-reference-section people-section" aria-labelledby="reference-list-title">
            <Container>
                <div className="people-section-intro">
                    <h2 id="reference-list-title">{isGerman ? "Ausgewählte Stationen" : "Selected organisations"}</h2>
                    {compact && <Link className="people-text-link" to="/clients">{isGerman ? "Alle Referenzen" : "All references"} <ArrowUpRight aria-hidden="true"/></Link>}
                </div>
                <ul className="people-reference-list">
                    {visibleClients.map((client) => (
                        <li key={client.name}>
                            <article className="people-reference-entry">
                                <span className="people-reference-initials" aria-hidden="true">{client.initials}</span>
                                <div>
                                    <p className="people-kicker">{client.type}</p>
                                    <h3><a href={client.href} target="_blank" rel="noreferrer">{client.name} <ArrowUpRight aria-hidden="true"/></a></h3>
                                </div>
                                <p>{client.work}</p>
                            </article>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}

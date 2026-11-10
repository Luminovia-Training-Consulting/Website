import {Link} from "react-router-dom";
import {ArrowUpRight} from "lucide-react";
import {IMAGES, PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";
import {Container} from "./LuminoviaDesign.jsx";

const services = [["/training", "training"], ["/consulting", "consulting"], ["/offers", "offers"], ["/pricing", "pricing"]];
const company = [["/about", "about"], ["/clients", "clients"], ["/projects", "software"], ["/contact", "book"]];
const legal = [["/imprint", "imprint"], ["/privacy", "privacy"], ["/terms", "terms"]];

function FooterLinks({items, labels}) {
    return <ul>{items.map(([to, key]) => <li key={to}><Link to={to}>{labels[key]}</Link></li>)}</ul>;
}

export default function Footer() {
    const {language, t} = useLanguage();
    const de = language === "de";

    return (
        <footer className="site-footer">
            <Container>
                <div className="site-footer-grid">
                    <div className="site-footer-brand">
                        <Link className="site-brand" to="/" aria-label={PROFILE.name}>
                            <img src={IMAGES.luminoviaLogoMark} alt="" width="40" height="40" loading="lazy"/>
                            <span><strong>Luminovia</strong><small>Training & Consulting</small></span>
                        </Link>
                        <p>{de ? "Brisbane, Australien · Deutsch & Englisch" : "Brisbane, Australia · German & English"}</p>
                    </div>
                    <nav aria-label={de ? "Angebot" : "Services"}>
                        <h2>{de ? "Angebot" : "Services"}</h2>
                        <FooterLinks items={services} labels={t.nav}/>
                    </nav>
                    <nav aria-label={de ? "Unternehmen" : "Company"}>
                        <h2>{de ? "Unternehmen" : "Company"}</h2>
                        <FooterLinks items={company} labels={t.nav}/>
                    </nav>
                    <div className="site-footer-contact">
                        <h2>{t.nav.book}</h2>
                        <ul>
                            <li><a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></li>
                            <li><a href={`tel:${PROFILE.phoneAustralia.replaceAll(" ", "")}`}>{PROFILE.phoneAustralia}</a></li>
                            <li><a href={`tel:${PROFILE.phoneGermany.replaceAll(" ", "")}`}>{PROFILE.phoneGermany}</a></li>
                        </ul>
                        <div className="site-footer-social">
                            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} aria-hidden="true"/></a>
                            <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} aria-hidden="true"/></a>
                        </div>
                    </div>
                </div>
                <div className="site-footer-legal">
                    <p>© {new Date().getFullYear()} Luminovia Training & Consulting</p>
                    <nav aria-label={de ? "Rechtliches" : "Legal"}><FooterLinks items={legal} labels={t.nav}/></nav>
                </div>
            </Container>
        </footer>
    );
}

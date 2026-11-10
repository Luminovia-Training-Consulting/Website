import {ArrowUpRight, Mail, Phone} from "lucide-react";
import {Container} from "../components/LuminoviaDesign.jsx";
import {PROFILE} from "../data/profile.js";
import {useSiteContent} from "../data/localizedContent.js";
import {useLanguage} from "../i18n.jsx";
import "../styles/people.css";

const copy = {
    en: {
        label: "Contact",
        title: "Contact Luminovia about your next project.",
        intro: "Planning a workshop, a course or a technology project? Tell us what your team is working on and where you’d like support.",
        email: "Enquire about training or consulting",
        emailSubject: "Training or consulting enquiry",
        call: "Request an introductory call",
        callButton: "Suggest times by email",
        callSubject: "Introductory call with Luminovia",
        callText: "Share a little about your project, your time zone and when you’re available. We’ll arrange a time by email.",
        callTemplate: ["Hello Luminovia,", "", "I’d like to arrange an introductory call.", "", "What we’re working on:", "Time zone and availability:", "", "Kind regards,"],
        contact: "Contact details",
        business: "Email Luminovia",
        alternate: "Email Carina",
        australia: "Phone · Australia",
        germany: "Phone · Germany",
        brief: "What to include",
        briefItems: ["Your topic and what you’d like to achieve", "Who will take part and what they already know", "Timing, preferred language and time zone"],
        faq: "Common questions",
    },
    de: {
        label: "Kontakt",
        title: "Was möchten Sie mit Ihrem Team angehen?",
        intro: "Sie planen einen Workshop, einen Kurs oder ein Technologieprojekt? Schreiben Sie uns, woran Ihr Team arbeitet und wo Sie Unterstützung suchen.",
        email: "Training oder Beratung anfragen",
        emailSubject: "Anfrage zu Training oder Beratung",
        call: "Erstgespräch anfragen",
        callButton: "Termin per E-Mail anfragen",
        callSubject: "Erstgespräch mit Luminovia",
        callText: "Schildern Sie kurz Ihr Vorhaben und nennen Sie uns Ihre Zeitzone und mögliche Termine. Wir stimmen den Termin per E-Mail mit Ihnen ab.",
        callTemplate: ["Hallo Luminovia,", "", "ich würde gern ein Erstgespräch vereinbaren.", "", "Unser Vorhaben:", "Zeitzone und mögliche Termine:", "", "Viele Grüße"],
        contact: "Kontaktdaten",
        business: "E-Mail an Luminovia",
        alternate: "E-Mail an Carina",
        australia: "Telefon · Australien",
        germany: "Telefon · Deutschland",
        brief: "Was uns bei der Anfrage hilft",
        briefItems: ["Ihr Thema und das gewünschte Ergebnis", "Zielgruppe und Vorkenntnisse", "Zeitraum, gewünschte Sprache und Zeitzone"],
        faq: "Häufige Fragen",
    },
};

function telephoneHref(value) {
    return `tel:${value.replace(/[^\d+]/g, "")}`;
}

export default function ContactPage() {
    const {language} = useLanguage();
    const {faqs} = useSiteContent();
    const c = copy[language];
    const emailHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(c.emailSubject)}`;
    const callHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(c.callSubject)}&body=${encodeURIComponent(c.callTemplate.join("\r\n"))}`;
    const contacts = [
        {label: c.business, value: PROFILE.email, href: emailHref, Icon: Mail},
        {label: c.alternate, value: "info@carinaschoppe.com", href: "mailto:info@carinaschoppe.com", Icon: Mail},
        {label: c.australia, value: PROFILE.phoneAustralia, href: telephoneHref(PROFILE.phoneAustralia), Icon: Phone},
        {label: c.germany, value: PROFILE.phoneGermany, href: telephoneHref(PROFILE.phoneGermany), Icon: Phone},
    ];

    return (
        <main className="lumo-subpage people-page">
            <Container>
                <section className="people-contact-hero" aria-labelledby="contact-heading">
                    <div>
                        <p className="lumo-section-label">{c.label}</p>
                        <h1 id="contact-heading" className="people-display">{c.title}</h1>
                        <p className="people-lead">{c.intro}</p>
                        <a className="people-action" href={emailHref}>{c.email} <ArrowUpRight aria-hidden="true"/></a>
                    </div>
                    <div id="appointment" className="people-contact-call">
                        <Mail aria-hidden="true" size={35} strokeWidth={1.5}/>
                        <h2>{c.call}</h2>
                        <p>{c.callText}</p>
                        <a className="people-action" href={callHref}>{c.callButton} <ArrowUpRight aria-hidden="true"/></a>
                    </div>
                </section>

                <section id="contact-options" className="people-split people-section" aria-labelledby="contact-methods">
                    <div>
                        <h2 id="contact-methods">{c.contact}</h2>
                        <ul className="people-contact-list">
                            {contacts.map(({label, value, href, Icon}) => (
                                <li key={label}>
                                    <a href={href}>
                                        <Icon aria-hidden="true" size={21}/>
                                        <span><small>{label}</small><strong>{value}</strong></span>
                                        <ArrowUpRight aria-hidden="true" size={19}/>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <aside className="people-contact-brief" aria-labelledby="brief-heading">
                        <h2 id="brief-heading">{c.brief}</h2>
                        <ul>{c.briefItems.map((item) => <li key={item}>{item}</li>)}</ul>
                    </aside>
                </section>

                <section id="contact-faq" className="people-faq people-section" aria-labelledby="contact-faq-heading">
                    <h2 id="contact-faq-heading">{c.faq}</h2>
                    <div>
                        {faqs.map((item) => (
                            <details key={item.q}>
                                <summary>{item.q}</summary>
                                <p>{item.a}</p>
                            </details>
                        ))}
                    </div>
                </section>
            </Container>
        </main>
    );
}

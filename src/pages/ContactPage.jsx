import {ArrowUpRight, CalendarDays, Mail, Phone} from "lucide-react";
import {useLocation} from "react-router-dom";
import trainingTitles from "virtual:training-titles";
import {Container} from "../components/LuminoviaDesign.jsx";
import {PROFILE} from "../data/profile.js";
import {useSiteContent} from "../data/localizedContent.js";
import {useLanguage} from "../i18n.jsx";
import "../styles/people.css";

const copy = {
    en: {
        label: "Contact",
        title: "Contact Luminovia about your next project.",
        intro: "Send us the details of your project or suggest a time to talk it through.",
        enquiries: {
            general: ["Send an enquiry", "Training or consulting enquiry"],
            training: ["Request training", "Training enquiry"],
            consulting: ["Request consulting", "Consulting enquiry"],
            quote: ["Request a quote", "Quote request"],
        },
        enquiryCopy: "Add your goal, who’s involved and your preferred dates. We’ll suggest the next step by email.",
        emailButton: "Open email draft",
        courseLabel: "Selected course",
        enquiryGreeting: "Hello Luminovia,",
        enquiryFields: ["Topic and goal:", "Audience or team:", "Timing and preferred language:"],
        signOff: "Kind regards,",
        call: "Request an introductory call",
        callButton: "Suggest times by email",
        callSubject: "Introductory call with Luminovia",
        callText: "Suggest a few times and include your time zone. We’ll confirm a time by email.",
        callTemplate: ["Hello Luminovia,", "", "I’d like to arrange an introductory call.", "", "What we’re working on:", "Time zone and availability:", "", "Kind regards,"],
        contact: "Contact details",
        business: "Email Luminovia",
        alternate: "Email Carina",
        australia: "Phone · Australia",
        germany: "Phone · Germany",
        faq: "Common questions",
    },
    de: {
        label: "Kontakt",
        title: "Was möchten Sie mit Ihrem Team angehen?",
        intro: "Schreiben Sie uns, was Sie vorhaben, oder schlagen Sie einen Termin für ein Gespräch vor.",
        enquiries: {
            general: ["Anfrage stellen", "Anfrage zu Training oder Beratung"],
            training: ["Training anfragen", "Trainingsanfrage"],
            consulting: ["Beratung anfragen", "Beratungsanfrage"],
            quote: ["Angebot anfragen", "Angebotsanfrage"],
        },
        enquiryCopy: "Ergänzen Sie Ihr Ziel, die Zielgruppe und den Wunschzeitraum. Wir melden uns mit einem Vorschlag per E-Mail.",
        emailButton: "E-Mail-Entwurf öffnen",
        courseLabel: "Gewähltes Training",
        enquiryGreeting: "Hallo Luminovia,",
        enquiryFields: ["Thema und Ziel:", "Zielgruppe oder Team:", "Zeitraum und gewünschte Sprache:"],
        signOff: "Viele Grüße",
        call: "Erstgespräch anfragen",
        callButton: "Termin per E-Mail anfragen",
        callSubject: "Erstgespräch mit Luminovia",
        callText: "Schlagen Sie Termine vor und nennen Sie Ihre Zeitzone. Wir bestätigen den Termin per E-Mail.",
        callTemplate: ["Hallo Luminovia,", "", "ich würde gern ein Erstgespräch vereinbaren.", "", "Unser Vorhaben:", "Zeitzone und mögliche Termine:", "", "Viele Grüße"],
        contact: "Kontaktdaten",
        business: "E-Mail an Luminovia",
        alternate: "E-Mail an Carina",
        australia: "Telefon · Australien",
        germany: "Telefon · Deutschland",
        faq: "Häufige Fragen",
    },
};

function telephoneHref(value) {
    return `tel:${value.replace(/[^\d+]/g, "")}`;
}

function emailDraft(subject, lines) {
    return `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\r\n"))}`;
}

export default function ContactPage() {
    const {language} = useLanguage();
    const {faqs} = useSiteContent();
    const {hash, search} = useLocation();
    const c = copy[language];
    const params = new URLSearchParams(search);
    const requestedIntent = params.get("intent");
    const intent = Object.hasOwn(c.enquiries, requestedIntent) ? requestedIntent : "general";
    const courseSlug = params.get("course");
    const courseTitle = intent === "training" ? trainingTitles[language].find(([slug]) => slug === courseSlug)?.[1] : undefined;
    const [enquiryTitle, subject] = c.enquiries[intent];
    const fields = courseTitle ? [`${c.courseLabel}: ${courseTitle}`, ...c.enquiryFields] : c.enquiryFields;
    const emailHref = emailDraft(courseTitle ? `${subject} – ${courseTitle}` : subject, [c.enquiryGreeting, "", ...fields, "", c.signOff]);
    const callHref = emailDraft(c.callSubject, c.callTemplate);
    const callFeatured = hash === "#appointment";
    const contacts = [
        {label: c.business, value: PROFILE.email, href: emailHref, Icon: Mail},
        {label: c.alternate, value: "info@carinaschoppe.com", href: "mailto:info@carinaschoppe.com", Icon: Mail},
        {label: c.australia, value: PROFILE.phoneAustralia, href: telephoneHref(PROFILE.phoneAustralia), Icon: Phone},
        {label: c.germany, value: PROFILE.phoneGermany, href: telephoneHref(PROFILE.phoneGermany), Icon: Phone},
    ];

    return (
        <main className="lumo-subpage people-page">
            <Container>
                <div className="people-contact-intro">
                    <p className="lumo-section-label">{c.label}</p>
                    <h1 id="contact-heading" className="people-display">{c.title}</h1>
                    <p className="people-lead">{c.intro}</p>
                </div>
                <div className="people-contact-paths">
                    <section id="enquiry" className="people-contact-card" data-featured={!callFeatured} aria-labelledby="enquiry-heading" tabIndex={-1}>
                        <Mail className="people-contact-icon" aria-hidden="true" size={22}/>
                        <h2 id="enquiry-heading">{enquiryTitle}</h2>
                        {courseTitle && <p className="people-contact-course"><span>{c.courseLabel}</span><strong>{courseTitle}</strong></p>}
                        <p>{c.enquiryCopy}</p>
                        <a className="lumo-button" data-button-variant={callFeatured ? "secondary" : "primary"} href={emailHref}>
                            {c.emailButton} <ArrowUpRight size={18} aria-hidden="true"/>
                        </a>
                    </section>
                    <section id="appointment" className="people-contact-card" data-featured={callFeatured} aria-labelledby="appointment-heading" tabIndex={-1}>
                        <CalendarDays className="people-contact-icon" aria-hidden="true" size={22}/>
                        <h2 id="appointment-heading">{c.call}</h2>
                        <p>{c.callText}</p>
                        <a className="lumo-button" data-button-variant={callFeatured ? "primary" : "secondary"} href={callHref}>
                            {c.callButton} <ArrowUpRight size={18} aria-hidden="true"/>
                        </a>
                    </section>
                </div>

                <section id="contact-options" className="people-section" aria-labelledby="contact-methods">
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

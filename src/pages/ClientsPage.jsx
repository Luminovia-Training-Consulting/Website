import {ArrowDown, ArrowDownToLine} from "lucide-react";
import Button from "../components/Button.jsx";
import ClientProofSection from "../components/ClientProofSection.jsx";
import {Container} from "../components/LuminoviaDesign.jsx";
import {useLanguage} from "../i18n.jsx";
import "../styles/people.css";

const base = import.meta.env.BASE_URL;

const documentGroups = [
    {
        id: "certificates",
        heading: {en: "Degrees and certificates", de: "Abschlüsse und Zertifikate"},
        documents: [
            {
                filename: "carinaschoppe-bsc-certificate-en.pdf",
                en: ["Bachelor of Science", "Degree certificate in Business Information Systems from Paderborn University."],
                de: ["Bachelor of Science", "Abschlussurkunde in Wirtschaftsinformatik von der Universität Paderborn."],
            },
            {
                filename: "carinaschoppe-msc-certificate-en.pdf",
                en: ["Master of Science", "Confirmation of completion in Business Computer Science from IU International University of Applied Sciences."],
                de: ["Master of Science", "Abschlussbescheinigung für Wirtschaftsinformatik an der IU Internationalen Hochschule."],
            },
        ],
    },
    {
        id: "papers",
        heading: {en: "Academic papers", de: "Wissenschaftliche Arbeiten"},
        documents: [
            {
                filename: "carinaschoppe-bachelor-thesis-en.pdf",
                en: ["Bachelor’s thesis on AI and phishing", "An analysis of how ChatGPT affects the credibility and personalisation of phishing emails."],
                de: ["Bachelorarbeit zu KI und Phishing", "Eine Analyse, wie ChatGPT die Glaubwürdigkeit und Personalisierung von Phishing-E-Mails beeinflusst."],
            },
            {
                filename: "carinaschoppe-master-thesis-en.pdf",
                en: ["Master’s thesis on generative AI at work", "A literature review on the opportunities and risks of generative AI for employees in German companies."],
                de: ["Masterarbeit zu generativer KI im Arbeitsalltag", "Eine Literaturanalyse zu Chancen und Risiken generativer KI für Beschäftigte in deutschen Unternehmen."],
            },
            {
                filename: "carinaschoppe-mba-thesis-en.pdf",
                en: ["MBA thesis on AI governance", "A literature review and framework for managing generative AI in knowledge-intensive organisations."],
                de: ["MBA-Arbeit zu KI-Governance", "Eine Literaturübersicht und ein Rahmen für den Umgang mit generativer KI in wissensintensiven Organisationen."],
            },
        ],
    },
];

const copy = {
    en: {
        label: "References",
        title: "Teaching, training and research in practice.",
        intro: "Explore Luminovia’s collaborations and the teaching, speaking and research experience Carina Sophie Schoppe and Nenad Kalicanin bring to the team.",
        downloadsTitle: "Credentials and publications",
        downloadsIntro: "Download public copies of Carina Sophie Schoppe’s degree documents and academic papers in English.",
        organisations: "Organisations and projects",
        documentFormat: "PDF · English · Public copy",
        download: "Download PDF",
        next: "Planning something similar?",
        contact: "Discuss your project",
    },
    de: {
        label: "Referenzen",
        title: "Lehre, Weiterbildung und Forschung.",
        intro: "Hier finden Sie Kooperationen von Luminovia sowie ausgewählte Lehrtätigkeiten, Vorträge und Forschungsprojekte von Carina Sophie Schoppe und Nenad Kalicanin.",
        downloadsTitle: "Nachweise und Publikationen",
        downloadsIntro: "Hier können Sie englischsprachige Abschlussnachweise und wissenschaftliche Arbeiten von Carina Sophie Schoppe herunterladen.",
        organisations: "Organisationen und Projekte",
        documentFormat: "PDF · Englisch · Öffentliche Fassung",
        download: "PDF herunterladen",
        next: "Planen Sie ein ähnliches Vorhaben?",
        contact: "Projekt besprechen",
    },
};

export default function ClientsPage() {
    const {language} = useLanguage();
    const c = copy[language];

    return (
        <main className="lumo-subpage people-page">
            <Container>
                <section className="people-simple-hero people-reference-hero" aria-labelledby="references-heading">
                    <p className="lumo-section-label">{c.label}</p>
                    <h1 id="references-heading" className="people-display">{c.title}</h1>
                    <p className="people-lead">{c.intro}</p>
                    <div className="people-inline-links">
                        <a href="#organisations">{c.organisations} <ArrowDown aria-hidden="true"/></a>
                        <a href="#downloads">{c.downloadsTitle} <ArrowDown aria-hidden="true"/></a>
                    </div>
                </section>
            </Container>
            <ClientProofSection/>
            <Container>
                <section id="downloads" className="people-section people-downloads" aria-labelledby="downloads-heading">
                    <div className="people-section-intro">
                        <h2 id="downloads-heading">{c.downloadsTitle}</h2>
                        <p>{c.downloadsIntro}</p>
                    </div>
                    <div className="people-download-grid">
                        {documentGroups.map(({id, heading, documents}) => (
                            <section key={id} className="people-download-group" aria-labelledby={`downloads-${id}`}>
                                <h3 id={`downloads-${id}`}>{heading[language]}</h3>
                                <ul>
                                    {documents.map((entry) => {
                                        const [title, description] = entry[language];
                                        return (
                                            <li key={entry.filename}>
                                                <h4>{title}</h4>
                                                <p>{description}</p>
                                                <p className="people-kicker">{c.documentFormat}</p>
                                                <a className="people-text-link" href={`${base}downloads/${entry.filename}`}
                                                    download={entry.filename} aria-label={`${c.download} · ${title}`}>
                                                    {c.download} <ArrowDownToLine aria-hidden="true"/>
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </section>
                        ))}
                    </div>
                </section>
                <section className="people-section people-about-next" aria-labelledby="references-next-heading">
                    <h2 id="references-next-heading">{c.next}</h2>
                    <Button to="/contact#appointment">{c.contact}</Button>
                </section>
            </Container>
        </main>
    );
}

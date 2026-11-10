import ClientProofSection from "../components/ClientProofSection.jsx";
import {Container} from "../components/LuminoviaDesign.jsx";
import {useLanguage} from "../i18n.jsx";
import "../styles/people.css";

const copy = {
    en: {
        label: "References",
        title: "Teaching, training and research in practice.",
        intro: "Selected organisations and programmes where founder Carina Sophie Schoppe has taught, trained teams or worked on research. Each entry describes the work and links to the organisation or programme.",
    },
    de: {
        label: "Referenzen",
        title: "Wo Carina gelehrt und geforscht hat.",
        intro: "Eine Auswahl an Organisationen und Programmen, für die Gründerin Carina Sophie Schoppe unterrichtet, Trainings durchgeführt oder geforscht hat. Die Einträge beschreiben ihre Tätigkeit und verlinken zur jeweiligen Einrichtung oder zum Programm.",
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
                </section>
            </Container>
            <ClientProofSection/>
        </main>
    );
}

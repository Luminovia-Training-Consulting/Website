import ClientProofSection from "../components/ClientProofSection.jsx";
import {Container} from "../components/LuminoviaDesign.jsx";
import {useLanguage} from "../i18n.jsx";
import "../styles/people.css";

const copy = {
    en: {
        label: "References",
        title: "Teaching, training and research in practice.",
        intro: "Explore Luminovia’s collaborations and the teaching, speaking and research experience Carina Sophie Schoppe and Nenad Kalicanin bring to the team.",
    },
    de: {
        label: "Referenzen",
        title: "Lehre, Weiterbildung und Forschung.",
        intro: "Hier finden Sie Kooperationen von Luminovia sowie ausgewählte Lehrtätigkeiten, Vorträge und Forschungsprojekte von Carina Sophie Schoppe und Nenad Kalicanin.",
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

import ClientProofSection from "../components/ClientProofSection.jsx";
import {useLanguage} from "../i18n.jsx";
import Badge from "../components/Badge.jsx";

export default function ClientsPage() {
    const {language} = useLanguage();
    const copy = language === "de"
        ? {
            badge: "Kunden",
            title: "Kunden, Bildungspartner und Kooperationen.",
            intro: "Diese Seite zeigt ausschließlich Kunden, Bildungspartner und Kooperationskontexte. Consulting-Felder und Projektleistungen stehen separat auf der Kompetenz- und Projektseite.",
        }
        : {
            badge: "Clients",
            title: "Clients, education partners and collaborations.",
            intro: "This page shows clients, education partners and collaboration contexts only. Consulting areas and project services sit separately on the skills and projects pages.",
        };

    return (
        <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl text-center">
                <Badge tone="emerald">{copy.badge}</Badge>
                <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-black tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">{copy.title}</h1>
                <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300">{copy.intro}</p>
            </div>
            <ClientProofSection includeProof={false}/>
        </main>
    );
}

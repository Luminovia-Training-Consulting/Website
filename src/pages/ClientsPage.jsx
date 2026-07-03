import ClientProofSection from "../components/ClientProofSection.jsx";
import {useLanguage} from "../i18n.jsx";
import Badge from "../components/Badge.jsx";

export default function ClientsPage() {
    const {language} = useLanguage();
    const copy = language === "de"
        ? {
            badge: "Kunden",
            title: "Ehemalige Kunden, Bildungspartner und Testimonial-Muster.",
            intro: "Eine elegante Übersicht der Organisationen, Bildungspartner und Kooperationskontexte, die Carinas Arbeit und damit das Luminovia-Profil geprägt haben. Die Feedback-Texte sind anonymisierte Muster, keine benannten Kunden-Zitate.",
        }
        : {
            badge: "Clients",
            title: "Former clients, education partners and testimonial patterns.",
            intro: "An elegant overview of the organisations, education partners and collaboration contexts that shaped Carina's work and the Luminovia profile. Feedback text is anonymised pattern language, not named customer quotes.",
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

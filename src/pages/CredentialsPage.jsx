import {useEffect, useState} from "react";
import {useSiteContent} from "../data/localizedContent.js";
import {useLanguage} from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Card from "../components/Card.jsx";
import {cn} from "../components/utils.js";

export default function CredentialsPage() {
    const {language} = useLanguage();
    const {credentials, credentialCategories} = useSiteContent();
    const [filter, setFilter] = useState(credentialCategories[0]);
    useEffect(() => setFilter(credentialCategories[0]), [language, credentialCategories]);
    const visible = credentials.filter((credential) => filter === credentialCategories[0] || filter === "All" || credential.category === filter);
    const copy = language === "de"
        ? {
            badge: "Credentials & Teaching Proof",
            title: "Nachweise, die das Hauptangebot unterstützen: Lehre und Training.",
            intro: "Glaubwürdigkeit entsteht nicht durch Abschlüsse allein. Entscheidend ist die Verbindung aus Teaching Proof, modernen AI-Credentials, Cybersecurity-Lernpfaden, akademischem Hintergrund und zweisprachiger Durchführung.",
        }
        : {
            badge: "Credentials & teaching proof",
            title: "Proof that supports the main offer: teaching and training.",
            intro: "Credibility does not come from degrees alone. It comes from the combination of teaching proof, modern AI credentials, cybersecurity learning paths, academic grounding and bilingual delivery.",
        };

    return (
        <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <Badge>{copy.badge}</Badge>
                <div className="mt-6 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                    <h1 className="text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">{copy.title}</h1>
                    <p className="text-lg leading-8 text-slate-300">{copy.intro}</p>
                </div>

                <div className="mt-10 flex flex-wrap gap-2">
                    {credentialCategories.map((cat) => (
                        <button key={cat} onClick={() => setFilter(cat)} className={cn("rounded-full border px-4 py-2 text-sm font-black transition", filter === cat ? "border-white bg-white text-slate-950" : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white")}>{cat}</button>
                    ))}
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {visible.map((credential) => (
                        <Card key={credential.title}>
                            <div className="mb-5 flex items-center justify-between gap-3">
                                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-300 text-sm font-black text-slate-950">✓</div>
                                <Badge tone="white">{credential.category}</Badge>
                            </div>
                            <h2 className="text-xl font-black text-white">{credential.title}</h2>
                            <p className="mt-3 text-sm font-bold leading-6 text-sky-100">{credential.meta}</p>
                            <p className="mt-3 text-sm leading-7 text-slate-300">{credential.detail}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    );
}
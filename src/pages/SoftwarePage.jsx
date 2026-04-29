import SoftwareProjectsSection from "../components/SoftwareProjectsSection.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import {useLanguage} from "../i18n.jsx";

export default function SoftwarePage() {
    const {language} = useLanguage();
    const copy = language === "de"
        ? {
            badge: "Softwareportfolio",
            title: "Praktische Projekte rund um Automatisierung, AI-Research und Spieleentwicklung.",
            intro: "Dieses Portfolio zeigt ausgewählte Softwarearbeiten, die in Trainings und Beratungen als Praxisbezug dienen: Automatisierung mit Python, AI-gestützte Research-Workflows, Datenbereinigung, Kotlin-Plugins, Mobile Apps und Spieleentwicklung. Die Beispiele zeigen, wie technische Umsetzung, didaktisches Denken und reale Anwendungsfälle zusammenkommen.",
            github: "GitHub-Profil öffnen",
            skills: "Kompetenzen ansehen"
        }
        : {
            badge: "Software portfolio",
            title: "Practical projects across automation, AI research and game systems.",
            intro: "This portfolio highlights selected software work that gives my training and consulting practical depth: Python automation, AI-supported research workflows, data cleanup, Kotlin plugins, mobile apps and game systems. The examples show how technical implementation, teaching-oriented thinking and real use cases connect.",
            github: "Open GitHub profile",
            skills: "View skills"
        };
    return (
        <main className="pb-24 pt-32">
            <section className="px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <Badge>{copy.badge}</Badge>
                    <div className="mt-6 text-center">
                        <h1 className="mx-auto max-w-5xl text-5xl font-black tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                            {copy.title}
                        </h1>
                        <p className="mx-auto mt-7 max-w-4xl text-lg leading-8 text-slate-300">
                            {copy.intro}
                        </p>
                    </div>
                    <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Button href="https://github.com/CarinaSchoppe">{copy.github}</Button>
                        <Button to="/skills" variant="secondary">{copy.skills}</Button>
                    </div>
                </div>
            </section>
            <SoftwareProjectsSection/>
        </main>
    );
}

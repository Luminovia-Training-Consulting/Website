import SoftwareProjectsSection from "../components/SoftwareProjectsSection.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import {PROFILE} from "../data/profile.js";
import {useLanguage} from "../i18n.jsx";

export default function SoftwarePage() {
    const {language} = useLanguage();
    const copy = language === "de"
        ? {
            badge: "Projektportfolio",
            title: "Projekte, die Luminovia-Training und Consulting praktisch machen.",
            intro: "Dieses Portfolio zeigt ausgewählte Projektarbeit, die in Trainings, Beratung und Umsetzung als Praxisbezug dient: Automatisierung mit Python, AI-gestützte Research-Workflows, Datenbereinigung, Kotlin-Plugins, Mobile Apps, Game-Systeme und digitale Arbeitsabläufe.",
            github: "GitHub-Profil öffnen",
            skills: "Consulting ansehen",
        }
        : {
            badge: "Project portfolio",
            title: "Projects that make Luminovia training and consulting practical.",
            intro: "This portfolio highlights selected project work that gives Luminovia's training, consulting and implementation support practical depth: Python automation, AI-supported research workflows, data cleanup, Kotlin plugins, mobile apps, game systems and digital workflows.",
            github: "Open GitHub profile",
            skills: "View consulting",
        };
    return (
        <main className="pb-24 pt-32">
            <section className="px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <Badge tone="blue">{copy.badge}</Badge>
                    <div className="mt-6 text-center">
                        <h1 className="mx-auto max-w-5xl text-5xl font-black tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
                            {copy.title}
                        </h1>
                        <p className="mx-auto mt-7 max-w-4xl text-lg leading-8 text-slate-300">
                            {copy.intro}
                        </p>
                    </div>
                    <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Button href={PROFILE.github}>{copy.github}</Button>
                        <Button to="/consulting" variant="secondary">{copy.skills}</Button>
                    </div>
                </div>
            </section>
            <SoftwareProjectsSection/>
        </main>
    );
}

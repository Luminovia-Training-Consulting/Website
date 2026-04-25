import SoftwareProjectsSection from "../components/SoftwareProjectsSection.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import { useLanguage } from "../i18n.jsx";

export default function SoftwarePage() {
  const { language } = useLanguage();
  const copy = language === "de"
    ? { badge: "Softwareportfolio", title: "Praktische Projekte rund um Automatisierung, AI Research und Game Systems.", intro: "Eine kuratierte Auswahl von GitHub. Ziel ist nicht jedes Repository zu zeigen, sondern die Bandbreite: Python Tools, AI Workflows, Kotlin Plugins, Mobile Apps und lernfreundliche Softwarebeispiele.", github: "GitHub-Profil öffnen", skills: "Skills ansehen" }
    : { badge: "Software portfolio", title: "Practical projects across automation, AI research and game systems.", intro: "A curated selection from GitHub. The goal is not to show every repository, but the range: Python tools, AI workflows, Kotlin plugins, mobile apps and learning-friendly software examples.", github: "Open GitHub profile", skills: "View skills" };
  return (
    <main className="pb-24 pt-32">
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Badge>{copy.badge}</Badge>
          <div className="mt-6 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <h1 className="text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">
              {copy.title}
            </h1>
            <p className="text-lg leading-8 text-slate-300">
              {copy.intro}
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="https://github.com/CarinaSchoppe">{copy.github}</Button>
            <Button to="/skills" variant="secondary">{copy.skills}</Button>
          </div>
        </div>
      </section>
      <SoftwareProjectsSection />
    </main>
  );
}

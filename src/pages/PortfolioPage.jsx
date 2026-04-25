import { useSiteContent } from "../data/localizedContent.js";
import { useLanguage } from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Card from "../components/Card.jsx";
import ClientProofSection from "../components/ClientProofSection.jsx";

export default function PortfolioPage() {
  const { language } = useLanguage();
  const { selectedProjects } = useSiteContent();
  const copy = language === "de"
    ? {
      badge: "Proof-Projekte",
      title: "Projekte, die das Teaching-Profil unterstützen.",
      intro: "Diese Projekte sind nicht das Hauptangebot. Sie zeigen technische Tiefe, AI-Kompetenz, Research-Fähigkeit und praktische Lernkonzeption.",
      reference: "Referenz öffnen ↗",
    }
    : {
      badge: "Selected proof projects",
      title: "Projects that support the teaching profile.",
      intro: "These projects are not the main sales product. They strengthen credibility by showing technical depth, AI literacy, research capability and hands-on learning design.",
      reference: "View reference ↗",
    };

  return (
    <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Badge>{copy.badge}</Badge>
        <div className="mt-6 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <h1 className="text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">{copy.title}</h1>
          <p className="text-lg leading-8 text-slate-300">{copy.intro}</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {selectedProjects.map((project) => (
            <Card key={project.title}>
              <Badge tone="white">{project.tag}</Badge>
              <h2 className="mt-5 text-2xl font-black text-white">{project.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{project.copy}</p>
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs font-bold text-slate-300">{project.stack}</div>
              <a href={project.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-cyan-200 transition hover:text-white">{copy.reference}</a>
            </Card>
          ))}
        </div>
      </div>
      <ClientProofSection />
    </main>
  );
}

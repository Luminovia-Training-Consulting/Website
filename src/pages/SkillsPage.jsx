import { useSiteContent } from "../data/localizedContent.js";
import { useLanguage } from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";

export default function SkillsPage() {
  const { language } = useLanguage();
  const { skillGroups, trainingTopics } = useSiteContent();
  const copy = language === "de"
    ? {
      badge: "Skills & Themen",
      title: "Eine praktische Skill-Map für AI, Software, Cybersecurity und Business IT.",
      intro: "Diese Seite ist die schnelle Übersicht: was ich lehren, erklären, einordnen und in praktische Lernformate übersetzen kann.",
      formats: "Trainingsformate ansehen",
      credentials: "Credentials ansehen",
      clusters: "Lehrcluster",
      clustersTitle: "Themen, aus denen ich Kurse bauen kann.",
    }
    : {
      badge: "Skills & topics",
      title: "A practical skill map for AI, software, cybersecurity and business IT.",
      intro: "This page is the quick overview: what I can teach, explain, build around and translate into practical learning formats.",
      formats: "View training formats",
      credentials: "View credentials",
      clusters: "Teaching clusters",
      clustersTitle: "Topics I can turn into courses.",
    };
  return (
    <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
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

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button to="/training">{copy.formats}</Button>
          <Button to="/credentials" variant="secondary">{copy.credentials}</Button>
        </div>

        <section className="mt-14">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group) => (
              <Card key={group.group}>
                <h2 className="text-2xl font-black text-white">{group.group}</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-7">
            <Badge tone="emerald">{copy.clusters}</Badge>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{copy.clustersTitle}</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-4">
            {trainingTopics.map((topic) => (
              <Card key={topic.group} className="bg-gradient-to-br from-sky-300/10 via-white/[0.04] to-violet-300/10">
                <h3 className="text-2xl font-black text-white">{topic.group}</h3>
                <div className="mt-5 grid gap-2">
                  {topic.items.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-bold text-slate-200">{item}</div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

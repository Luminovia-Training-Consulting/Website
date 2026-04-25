import { useSiteContent } from "../data/localizedContent.js";
import { useLanguage } from "../i18n.jsx";
import Badge from "./Badge.jsx";
import Button from "./Button.jsx";
import Card from "./Card.jsx";

export default function SoftwareProjectsSection({ compact = false }) {
  const { t } = useLanguage();
  const { softwareProjects } = useSiteContent();
  const projects = compact ? softwareProjects.slice(0, 4) : softwareProjects;

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Badge tone="cyan">{t.softwareSection.badge}</Badge>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              {t.softwareSection.title}
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-300">
              {t.softwareSection.copy}
            </p>
            {compact && (
              <div className="mt-5">
                <Button to="/software" variant="secondary">{t.softwareSection.viewAll}</Button>
              </div>
            )}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[300px] flex-col rounded-xl border border-white/10 bg-[#111418]/88 p-5 shadow-[0_18px_60px_rgba(0,0,0,.2)] transition hover:-translate-y-0.5 hover:border-teal-200/35 hover:bg-[#151A1F]"
            >
              <div className="mb-5 flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs font-black uppercase tracking-[0.14em] text-teal-100">{project.type}</div>
                  <div className="mt-2 text-xs font-bold text-zinc-500">{project.status}</div>
                </div>
                <span className="shrink-0 rounded-md border border-white/10 px-3 py-1 text-xs font-black text-teal-100 transition group-hover:border-teal-100/40">
                  {t.github}
                </span>
              </div>
              <h3 className="text-2xl font-black text-white">{project.name}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300">{project.description}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-md border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-bold text-zinc-200">
                    {item}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

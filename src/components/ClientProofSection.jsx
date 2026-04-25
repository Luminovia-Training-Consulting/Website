import { useSiteContent } from "../data/localizedContent.js";
import { useLanguage } from "../i18n.jsx";
import Badge from "./Badge.jsx";
import Card from "./Card.jsx";

export default function ClientProofSection({ compact = false }) {
  const { t } = useLanguage();
  const { formerClients, testimonialProof } = useSiteContent();
  const visibleClients = compact ? formerClients.slice(0, 8) : formerClients;

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Badge tone="emerald">{t.clientSection.badge}</Badge>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              {t.clientSection.title}
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-300">
            {t.clientSection.copy}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {visibleClients.map((client) => (
            <a
              key={client.name}
              href={client.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-white/10 bg-[#111418]/88 p-5 shadow-[0_18px_60px_rgba(0,0,0,.2)] transition hover:-translate-y-0.5 hover:border-teal-200/35 hover:bg-[#151A1F]"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-white/20 bg-white text-sm font-black text-zinc-950 shadow-lg shadow-teal-500/10">
                  {client.initials}
                </div>
                <span className="rounded-md border border-white/10 px-3 py-1 text-xs font-black text-teal-100 transition group-hover:border-teal-100/40">
                  {t.visit}
                </span>
              </div>
              <div className="text-xs font-black uppercase tracking-[0.14em] text-zinc-400">{client.type}</div>
              <h3 className="mt-3 text-xl font-black text-white">{client.name}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{client.work}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonialProof.map((item) => (
            <Card key={item.title}>
              <div className="mb-5 text-4xl font-black text-teal-100/70">"</div>
              <h3 className="text-2xl font-black text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300">{item.quote}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

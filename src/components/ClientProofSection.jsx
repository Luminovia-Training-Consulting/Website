import { formerClients, testimonialProof } from "../data/content.js";
import Badge from "./Badge.jsx";
import Card from "./Card.jsx";

export default function ClientProofSection({ compact = false }) {
  const visibleClients = compact ? formerClients.slice(0, 8) : formerClients;

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Badge tone="emerald">Former clients</Badge>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              Trusted by academies, universities and professional training providers.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-300">
            A selected overview of organisations and education partners I have supported through courses, workshops, research assistance and professional IT training.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {visibleClients.map((client) => (
            <a
              key={client.name}
              href={client.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-white/[0.085]"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan-200 via-white to-emerald-200 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/15">
                  {client.initials}
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-black text-cyan-100 transition group-hover:border-cyan-100/40">
                  Visit
                </span>
              </div>
              <div className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">{client.type}</div>
              <h3 className="mt-3 text-xl font-black text-white">{client.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{client.work}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonialProof.map((item) => (
            <Card key={item.title} className="bg-gradient-to-br from-cyan-300/10 via-white/[0.04] to-violet-300/10">
              <div className="mb-5 text-4xl font-black text-cyan-100/70">"</div>
              <h3 className="text-2xl font-black text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.quote}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

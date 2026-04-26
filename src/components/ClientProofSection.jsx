import {useSiteContent} from "../data/localizedContent.js";
import {useLanguage} from "../i18n.jsx";
import Badge from "./Badge.jsx";
import Card from "./Card.jsx";

export default function ClientProofSection({compact = false}) {
    const {t} = useLanguage();
    const {formerClients, testimonialProof} = useSiteContent();
    const visibleClients = compact ? formerClients.slice(0, 8) : formerClients;

    return (
        <section className="soft-section px-4 py-16 sm:px-6 lg:px-8">
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

                <div className="grid items-start gap-3 md:grid-cols-2 xl:grid-cols-4">
                    {visibleClients.map((client, index) => (
                        <a
                            key={client.name}
                            href={client.href}
                            target="_blank"
                            rel="noreferrer"
                            className="soft-link-card group block p-4 focus:outline-none focus:ring-2 focus:ring-sky-200/80 sm:p-5"
                        >
                            <div className="mb-4 flex items-start justify-between gap-3">
                                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/20 bg-gradient-to-br from-white via-sky-50 to-blue-100 text-sm font-black text-zinc-950 shadow-lg shadow-sky-500/10">
                                    {client.initials}
                                </div>
                                <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-black text-sky-100 transition group-hover:border-sky-100/40">
                                    {t.visit}
                                </span>
                            </div>
                            <div className="text-xs font-black uppercase tracking-[0.14em] text-zinc-400">{client.type}</div>
                            <h3 className="mt-3 text-xl font-black text-white">{client.name}</h3>
                            <p className="mt-3 text-sm leading-7 text-zinc-300">{client.work}</p>
                            <div className="mt-5 rounded-[1.25rem] border border-sky-100/14 bg-[#071225]/62 p-4">
                                <div className="text-xs font-black uppercase tracking-[0.16em] text-sky-100">{t.clientSection.feedbackLabel}</div>
                                <p className="mt-3 text-sm font-black leading-6 text-white">
                                    {t.clientSection.feedbackThemes[index % t.clientSection.feedbackThemes.length]}
                                </p>
                                <p className="mt-4 text-xs leading-5 text-slate-300">{t.clientSection.feedbackNote}</p>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-12 grid gap-5 lg:grid-cols-3">
                    {testimonialProof.map((item) => (
                        <Card key={item.title}>
                            <div className="mb-5 text-4xl font-black text-sky-100/70">"</div>
                            <h3 className="text-2xl font-black text-white">{item.title}</h3>
                            <p className="mt-4 text-sm leading-7 text-zinc-300">{item.quote}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

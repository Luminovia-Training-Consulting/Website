import { coreOffers, trainingTopics, formats } from "../data/content.js";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import { cn } from "../components/utils.js";

export default function TrainingPage() {
  return (
    <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Badge>Training catalogue</Badge>
        <div className="mt-6 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <h1 className="text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">IT, AI and business technology training for adult learners and professional teams.</h1>
          <p className="text-lg leading-8 text-slate-300">Clear formats for education providers, companies, universities and event organisers that need practical, structured and modern digital skills delivery.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {coreOffers.map((offer) => (
            <Card key={offer.title} className={cn("bg-gradient-to-br", offer.gradient)}>
              <Badge tone="cyan">{offer.kicker}</Badge>
              <h2 className="mt-5 text-2xl font-black text-white">{offer.title}</h2>
              <p className="mt-3 text-lg font-black text-cyan-100">{offer.outcome}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{offer.copy}</p>
              <div className="mt-7 grid gap-3">
                {offer.deliverables.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">{item}</div>)}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <Badge tone="emerald">Topics</Badge>
              <h2 className="mt-4 text-3xl font-black text-white">Core teaching areas</h2>
            </div>
            <Button to="/contact" variant="secondary">Ask for custom topic</Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {trainingTopics.map((topic) => (
              <Card key={topic.group}>
                <h2 className="text-2xl font-black text-white">{topic.group}</h2>
                <div className="mt-5 space-y-3">
                  {topic.items.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm font-bold text-slate-200">{item}</div>)}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Badge tone="violet">Formats</Badge>
          <h2 className="mt-4 text-3xl font-black text-white">Training formats I can deliver</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {formats.map((format) => (
              <Card key={format.title}>
                <div className="text-sm font-black uppercase tracking-[0.18em] text-cyan-100">{format.label}</div>
                <h3 className="mt-3 text-2xl font-black text-white">{format.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{format.copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

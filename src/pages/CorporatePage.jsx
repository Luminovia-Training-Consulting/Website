import { audienceCards } from "../data/content.js";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";

export default function CorporatePage() {
  return (
    <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Badge>For organisations</Badge>
        <div className="mt-6 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <h1 className="text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">Training solutions for companies, education providers and events.</h1>
          <p className="text-lg leading-8 text-slate-300">Book me when your audience needs digital skills explained clearly and practised properly — from AI literacy to cybersecurity, programming and business IT.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {audienceCards.map((audience) => (
            <Card key={audience.title}>
              <h2 className="text-2xl font-black text-white">{audience.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{audience.copy}</p>
              <div className="mt-5 space-y-2">
                {audience.bullets.map((bullet) => <div key={bullet} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-bold text-slate-200">{bullet}</div>)}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-4">
          {[
            ["01", "Clarify", "Target group, level, goals, timeframe and desired learning outcome."],
            ["02", "Design", "Course structure, exercises, examples, materials and transfer logic."],
            ["03", "Deliver", "Live online training, workshop, lecture, keynote or multi-week course."],
            ["04", "Transfer", "Recap, templates, handouts, exercises and practical next steps."],
          ].map(([step, title, copy]) => (
            <Card key={step}>
              <div className="text-5xl font-black text-white/10">{step}</div>
              <h3 className="mt-4 text-2xl font-black text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{copy}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-cyan-200/20 bg-gradient-to-br from-cyan-200/15 to-violet-300/10 p-8 shadow-2xl shadow-black/25">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-black text-white">Need a reliable lecturer or speaker?</h2>
              <p className="mt-3 max-w-3xl text-slate-300">Send the topic, audience, format and date range. I will suggest a suitable training setup.</p>
            </div>
            <Button to="/contact">Request availability</Button>
          </div>
        </div>
      </div>
    </main>
  );
}

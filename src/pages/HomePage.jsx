import { Link } from "react-router-dom";
import { PROFILE, IMAGES } from "../data/profile.js";
import { trustStats, teachingProof, coreOffers, capabilities } from "../data/content.js";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import Metric from "../components/Metric.jsx";
import Photo from "../components/Photo.jsx";
import ConversionStrip from "../components/ConversionStrip.jsx";
import ClientProofSection from "../components/ClientProofSection.jsx";
import SoftwareProjectsSection from "../components/SoftwareProjectsSection.jsx";
import { cn } from "../components/utils.js";

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-cyan-300/20 via-fuchsia-400/10 to-violet-400/20 blur-3xl" />
      <div className="spin-slow absolute inset-2 rounded-full border border-dashed border-cyan-200/25" />
      <div className="spin-reverse absolute inset-16 rounded-full border border-dashed border-violet-200/25" />
      <div className="relative rounded-[2.4rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/45 backdrop-blur-xl">
        <Photo src={IMAGES.hero} alt="Carina Sophie Schoppe portrait" className="aspect-[4/5] rounded-[1.8rem]" imgClass="object-[50%_25%]" />
        <div className="absolute bottom-5 left-5 right-5 rounded-[1.4rem] border border-white/10 bg-[#070B16]/75 p-4 shadow-xl backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-xs font-black uppercase tracking-[0.18em] text-cyan-100">Main focus</div>
              <div className="mt-1 text-lg font-black text-white">Training · Workshops · Talks</div>
            </div>
            <div className="rounded-full bg-white px-3 py-1 text-xs font-black text-slate-950">Remote-first</div>
          </div>
        </div>
      </div>
      <div className="float-card absolute -right-2 top-10 rounded-[1.6rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:-right-10">
        <div className="text-xs font-black uppercase tracking-[0.18em] text-cyan-100">Learner rating</div>
        <div className="mt-1 text-sm font-black text-white">4.9 / 5</div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(103,232,249,.16),transparent_32%),radial-gradient(circle_at_85%_18%,rgba(167,139,250,.16),transparent_28%),linear-gradient(180deg,#070B16_0%,#0B1224_55%,#070B16_100%)]" />
        <div className="grid-bg absolute inset-0 opacity-25" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="enter-up">
            <Badge>Freelance lecturer · AI trainer · keynote speaker</Badge>
            <h1 className="mt-6 max-w-5xl text-5xl font-black tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              I deliver practical AI, IT and business technology training that people actually understand.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              I am <span className="font-semibold text-white">Carina Sophie Schoppe</span> — a Brisbane-based freelance lecturer, AI trainer and business technology speaker. I help learners, teams and organisations build real digital capability through clear teaching, hands-on exercises and modern learning design.
            </p>
            <div className="mt-7 rounded-[1.7rem] border border-white/10 bg-white/[0.055] p-4 text-sm leading-7 text-slate-300 backdrop-blur">
              <strong className="text-white">Primary offer:</strong> online lectures, workshops, keynotes, professional development courses and curriculum design in AI, software, cybersecurity, data, business informatics and digital transformation.
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={PROFILE.booking}>Book me for training</Button>
              <Button to="/training" variant="secondary">Explore training topics</Button>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {trustStats.map((stat) => <Metric key={stat.label} {...stat} />)}
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <Badge tone="violet">Positioning</Badge>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">A trainer profile built for modern digital education.</h2>
            </div>
            <p className="text-lg leading-8 text-slate-300">
              This website sells the right thing first: teaching, workshops, lectures and training delivery. Consulting and software remain credibility boosters, not the main message.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {teachingProof.map((proof) => (
              <Card key={proof.title}>
                <div className="mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-200 to-violet-300" />
                <div className="text-sm font-black uppercase tracking-[0.18em] text-cyan-100">{proof.title}</div>
                <h3 className="mt-3 text-2xl font-black text-white">{proof.value}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{proof.copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ClientProofSection compact />

      <SoftwareProjectsSection compact />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <Badge tone="violet">Explore more</Badge>
            <h2 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">More than a training catalogue.</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              ["Skills & topics", "See the full map of AI, software, cybersecurity, data, business IT, teaching and communication skills.", "/skills"],
              ["Software", "Open selected GitHub projects across automation, AI research workflows, Kotlin plugins and mobile/game development.", "/software"],
              ["My way", "Follow the timeline from early programming and studies to entrepreneurship, Brisbane and international training.", "/my-way"],
            ].map(([title, copy, to]) => (
              <Card key={title}>
                <h3 className="text-2xl font-black text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{copy}</p>
                <div className="mt-6">
                  <Button to={to} variant="secondary">Open</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <Badge>Training offers</Badge>
              <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">Three clear ways to book me.</h2>
            </div>
            <Button to="/contact" variant="secondary">Request availability</Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {coreOffers.map((offer, index) => (
              <Card key={offer.title} className={cn("bg-gradient-to-br", offer.gradient, index === 1 ? "border-emerald-200/30" : "") }>
                <Badge tone={index === 0 ? "cyan" : index === 1 ? "emerald" : "violet"}>{offer.kicker}</Badge>
                <h3 className="mt-5 text-2xl font-black text-white">{offer.title}</h3>
                <p className="mt-3 text-lg font-black text-cyan-100">{offer.outcome}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">{offer.copy}</p>
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-bold text-slate-200">Best for: {offer.bestFor}</div>
                <div className="mt-6 space-y-3">
                  {offer.deliverables.slice(0, 4).map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200"><span className="text-cyan-200">✓</span>{item}</div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Badge tone="amber">Human, credible, bookable</Badge>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">Personal enough to trust. Professional enough to book.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">The site combines portrait photography, clear training offers, proof of teaching quality and modern AI/IT positioning. The goal is simple: make education providers and companies see you as a premium lecturer, trainer and speaker.</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {capabilities.slice(0, 14).map((capability) => <span key={capability} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-bold text-slate-200">{capability}</span>)}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Photo src={IMAGES.tablet} alt="Carina using a tablet" className="aspect-[3/4] rounded-[2rem]" imgClass="object-[50%_20%]" />
            <Photo src={IMAGES.outdoor} alt="Carina outside a building" className="aspect-[3/4] rounded-[2rem] translate-y-10" imgClass="object-[50%_20%]" />
          </div>
        </div>
      </section>

      <ConversionStrip />
    </main>
  );
}

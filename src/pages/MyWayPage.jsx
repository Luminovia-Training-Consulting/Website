import { lifeMilestones } from "../data/content.js";
import { IMAGES } from "../data/profile.js";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import Photo from "../components/Photo.jsx";

export default function MyWayPage() {
  return (
    <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Badge>My way</Badge>
            <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">
              A life between learning, building, business and teaching.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              This timeline gives a compact overview of where my education, entrepreneurial work, software background and international training profile come from.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/skills">View skills</Button>
              <Button to="/contact" variant="secondary">Request training</Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Photo src={IMAGES.outdoor} alt="Carina outside" className="aspect-[3/4] rounded-3xl" imgClass="object-[50%_20%]" />
            <div className="grid gap-4">
              <Card>
                <h2 className="text-2xl font-black text-white">Education</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">Business informatics, digital business, AI, research and professional teaching.</p>
              </Card>
              <Card>
                <h2 className="text-2xl font-black text-white">Work</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">Software, training, consulting, entrepreneurship and research assistance.</p>
              </Card>
              <Card>
                <h2 className="text-2xl font-black text-white">Now</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">Based in Brisbane, delivering remote AI and IT training for Europe and APAC.</p>
              </Card>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <Badge tone="violet">Life timeline</Badge>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">Milestones at a glance.</h2>
            </div>
          </div>
          <div className="relative">
            <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-gradient-to-b from-cyan-200/60 via-white/15 to-violet-300/40 md:block" />
            <div className="grid gap-5">
              {lifeMilestones.map((item) => (
                <div key={`${item.year}-${item.title}`} className="relative md:pl-16">
                  <div className="absolute left-0 top-7 hidden h-10 w-10 place-items-center rounded-2xl border border-cyan-200/30 bg-[#0B1224] text-xs font-black text-cyan-100 md:grid">
                    {item.year.slice(0, 2)}
                  </div>
                  <Card className="bg-gradient-to-br from-white/[0.065] via-cyan-300/[0.035] to-violet-300/[0.05]">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="text-sm font-black uppercase tracking-[0.18em] text-cyan-100">{item.category}</div>
                        <h3 className="mt-3 text-2xl font-black text-white">{item.title}</h3>
                      </div>
                      <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-black text-white">{item.year}</div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{item.copy}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

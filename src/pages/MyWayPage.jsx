import { useSiteContent } from "../data/localizedContent.js";
import { useLanguage } from "../i18n.jsx";
import { IMAGES } from "../data/profile.js";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import Photo from "../components/Photo.jsx";

export default function MyWayPage() {
  const { language } = useLanguage();
  const { lifeMilestones } = useSiteContent();
  const copy = language === "de"
    ? { badge: "Werdegang", title: "Ein Leben zwischen Lernen, Bauen, Business und Lehre.", intro: "Diese Timeline gibt einen kompakten Überblick darüber, woher meine Ausbildung, mein Unternehmertum, mein Softwarehintergrund und mein internationales Trainingsprofil kommen.", skills: "Skills ansehen", request: "Training anfragen", education: "Bildung", educationCopy: "Wirtschaftsinformatik, Digital Business, AI, Forschung und professionelle Lehre.", work: "Arbeit", workCopy: "Software, Training, Consulting, Unternehmertum und Research Assistance.", now: "Jetzt", nowCopy: "Sitz in Brisbane, Remote AI- und IT-Trainings für Europa und APAC.", timeline: "Lebens-Timeline", milestones: "Meilensteine im Überblick." }
    : { badge: "My way", title: "A life between learning, building, business and teaching.", intro: "This timeline gives a compact overview of where my education, entrepreneurial work, software background and international training profile come from.", skills: "View skills", request: "Request training", education: "Education", educationCopy: "Business informatics, digital business, AI, research and professional teaching.", work: "Work", workCopy: "Software, training, consulting, entrepreneurship and research assistance.", now: "Now", nowCopy: "Based in Brisbane, delivering remote AI and IT training for Europe and APAC.", timeline: "Life timeline", milestones: "Milestones at a glance." };
  return (
    <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Badge>{copy.badge}</Badge>
            <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">
              {copy.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              {copy.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/skills">{copy.skills}</Button>
              <Button to="/contact" variant="secondary">{copy.request}</Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Photo src={IMAGES.outdoor} alt="Carina outside" className="aspect-[3/4] rounded-3xl" imgClass="object-[50%_20%]" />
            <div className="grid gap-4">
              <Card>
                <h2 className="text-2xl font-black text-white">{copy.education}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{copy.educationCopy}</p>
              </Card>
              <Card>
                <h2 className="text-2xl font-black text-white">{copy.work}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{copy.workCopy}</p>
              </Card>
              <Card>
                <h2 className="text-2xl font-black text-white">{copy.now}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{copy.nowCopy}</p>
              </Card>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <Badge tone="violet">{copy.timeline}</Badge>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{copy.milestones}</h2>
            </div>
          </div>
          <div className="relative">
            <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-gradient-to-b from-sky-200/60 via-white/15 to-violet-300/40 md:block" />
            <div className="grid gap-5">
              {lifeMilestones.map((item) => (
                <div key={`${item.year}-${item.title}`} className="relative md:pl-16">
                  <div className="absolute left-0 top-7 hidden h-10 w-10 place-items-center rounded-2xl border border-sky-200/30 bg-[#0B1224] text-xs font-black text-sky-100 md:grid">
                    {item.year.slice(0, 2)}
                  </div>
                  <Card className="bg-gradient-to-br from-white/[0.065] via-sky-300/[0.035] to-violet-300/[0.05]">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="text-sm font-black uppercase tracking-[0.18em] text-sky-100">{item.category}</div>
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

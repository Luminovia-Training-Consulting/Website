import { PROFILE, IMAGES } from "../data/profile.js";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import Photo from "../components/Photo.jsx";

const talks = [
  ["AI in the workplace", "What generative AI changes, what it does not change, and how teams can use it responsibly."],
  ["Responsible AI without theatre", "Practical governance, accountability and risk awareness for real organisations."],
  ["Cybersecurity for everyday work", "Security awareness that goes beyond fear and turns into concrete daily habits."],
  ["Future skills in business IT", "How AI, data, automation and digital tools reshape professional competence."],
  ["Prompt engineering for professionals", "How to communicate with AI systems in a structured, high-quality and repeatable way."],
  ["Digital education that works", "How to design adult learning formats that are practical, engaging and outcome-focused."],
];

export default function KeynotesPage() {
  return (
    <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Badge>Keynotes & expert talks</Badge>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <h1 className="text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">Talks that make AI, IT and digitalisation understandable.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">For conferences, internal events, education programmes, leadership sessions and knowledge days. The style: clear, structured, modern, approachable and business-relevant.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={PROFILE.booking}>Request speaker availability</Button>
              <Button to="/credentials" variant="secondary">View proof</Button>
            </div>
          </div>
          <Photo src={IMAGES.headshot} alt="Carina Sophie Schoppe headshot" className="aspect-[4/5] rounded-[2rem]" imgClass="object-[50%_18%]" />
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {talks.map(([title, copy]) => (
            <Card key={title}>
              <Badge tone="white">Talk topic</Badge>
              <h2 className="mt-5 text-2xl font-black text-white">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{copy}</p>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

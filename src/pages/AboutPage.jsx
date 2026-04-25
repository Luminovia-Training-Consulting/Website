import { PROFILE, IMAGES } from "../data/profile.js";
import { timeline } from "../data/content.js";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import Photo from "../components/Photo.jsx";

export default function AboutPage() {
  return (
    <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Badge>About Carina</Badge>
        <div className="mt-6 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h1 className="text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">I make complex digital topics teachable.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">My main work is teaching, speaking and professional training. I combine business informatics, AI, cybersecurity, software development and didactics to help learners build real competence instead of just hearing buzzwords.</p>
            <p className="mt-5 text-lg leading-8 text-slate-300">Clients book me when they need someone who can structure a topic, explain it clearly, activate learners and connect technical knowledge to business reality.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={PROFILE.linkedin}>View LinkedIn</Button>
              <Button href={PROFILE.github} variant="secondary">View GitHub</Button>
              <Button to="/my-way" variant="secondary">My timeline</Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Photo src={IMAGES.headshot} alt="Carina portrait" className="aspect-[3/4] rounded-[2rem]" imgClass="object-[50%_20%]" />
            <div className="grid gap-4">
              {[
                ["Didactic", "I translate complex topics into structured, learner-friendly formats with exercises and transfer logic."],
                ["Technical", "AI, software, cybersecurity, data and business IT are not just theory topics — I understand the implementation layer."],
                ["Professional", "Remote-first, bilingual and comfortable with adult learners, corporate teams and education providers."],
              ].map(([title, copy]) => (
                <Card key={title}>
                  <h2 className="text-xl font-black text-white">{title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{copy}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {[
            ["My Way", "A compact life timeline from school and early programming to Brisbane, AI training and international teaching.", "/my-way"],
            ["Skills", "A skill map for AI, software development, cybersecurity, business IT, teaching design and communication.", "/skills"],
            ["Blog", "Notes and future posts about AI, teaching, research, software projects and personal updates.", "/blog"],
          ].map(([title, copy, to]) => (
            <Card key={title}>
              <h2 className="text-2xl font-black text-white">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">{copy}</p>
              <div className="mt-6">
                <Button to={to} variant="secondary">Open</Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-black text-white">Teaching-focused timeline</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-5">
            {timeline.map((item) => (
              <Card key={item.year}>
                <div className="text-sm font-black text-cyan-100">{item.year}</div>
                <h3 className="mt-3 text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

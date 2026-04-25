import SoftwareProjectsSection from "../components/SoftwareProjectsSection.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";

export default function SoftwarePage() {
  return (
    <main className="pb-24 pt-32">
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Badge>Software portfolio</Badge>
          <div className="mt-6 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <h1 className="text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">
              Practical projects across automation, AI research and game systems.
            </h1>
            <p className="text-lg leading-8 text-slate-300">
              A curated selection from GitHub. The goal is not to show every repository, but the range: Python tools, AI workflows, Kotlin plugins, mobile apps and learning-friendly software examples.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="https://github.com/CarinaSchoppe">Open GitHub profile</Button>
            <Button to="/skills" variant="secondary">View skills</Button>
          </div>
        </div>
      </section>
      <SoftwareProjectsSection />
    </main>
  );
}

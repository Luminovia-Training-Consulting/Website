import { useSiteContent } from "../data/localizedContent.js";
import { useLanguage } from "../i18n.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";

export default function BlogPage() {
  const { language } = useLanguage();
  const { blogPosts } = useSiteContent();
  const featured = blogPosts[0];
  const remaining = blogPosts.slice(1);
  const copy = language === "de"
    ? {
      title: "Notizen über AI, Lehre, Software und Leben.",
      intro: "Ein einfacher Blogbereich für zukünftige Artikel, Updates, Reflexionen und Projektnotizen. Neue Beiträge liegen in einer Datendatei und werden automatisch gerendert.",
      how: "Beiträge hinzufügen",
      howCopy: "Füge ein neues Objekt zu blogPosts in src/data/content.js hinzu. Nach dem nächsten Build erscheint der Beitrag automatisch auf der Blog-Seite.",
      suggest: "Thema vorschlagen",
    }
    : {
      title: "Notes on AI, teaching, software and life.",
      intro: "A simple blog area for future articles, updates, reflections and project notes. New posts are stored in one data file and render automatically.",
      how: "How to add posts",
      howCopy: "Add a new object to blogPosts in src/data/content.js. The blog page will pick it up automatically after the next build.",
      suggest: "Suggest a topic",
    };

  return (
    <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Badge>Blog</Badge>
        <div className="mt-6 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <h1 className="text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">
            {copy.title}
          </h1>
          <p className="text-lg leading-8 text-slate-300">
            {copy.intro}
          </p>
        </div>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="bg-gradient-to-br from-cyan-300/15 via-white/[0.04] to-violet-300/15">
            <Badge tone="cyan">{featured.category}</Badge>
            <h2 className="mt-5 text-3xl font-black text-white">{featured.title}</h2>
            <p className="mt-3 text-sm font-black uppercase tracking-[0.16em] text-slate-400">{featured.date}</p>
            <p className="mt-5 text-base leading-8 text-slate-300">{featured.excerpt}</p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              {featured.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </Card>

          <Card>
            <h2 className="text-2xl font-black text-white">{copy.how}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {copy.howCopy}
            </p>
            <div className="mt-6">
              <Button to="/contact">{copy.suggest}</Button>
            </div>
          </Card>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-2">
          {remaining.map((post) => (
            <Card key={post.slug}>
              <Badge tone="white">{post.category}</Badge>
              <h2 className="mt-5 text-2xl font-black text-white">{post.title}</h2>
              <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-slate-500">{post.date}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{post.excerpt}</p>
              <div className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                {post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </Card>
          ))}
        </section>
      </div>
    </main>
  );
}

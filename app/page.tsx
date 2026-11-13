import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BookCall from "@/components/site/BookCall";
import FAQAccordion from "@/components/site/FAQAccordion";
import FlowDiagram from "@/components/site/FlowDiagram";
import ScrollStatement from "@/components/site/ScrollStatement";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import { booking, stats } from "@/lib/data/site";
import { getEngagement } from "@/lib/data/engagements";

// What we build, in three lines.
const practices = [
  {
    title: "AI & automation",
    line: "We find the workflows worth automating, build the agent or pipeline that handles them, and keep it accurate as your business changes.",
    links: [
      { label: "AI agents", href: "/services/ai-agents" },
      { label: "Workflow automation", href: "/services/workflow-automation" },
      { label: "AI chatbots", href: "/services/ai-chatbots" },
    ],
  },
  {
    title: "Web engineering",
    line: "Websites, customer portals, and internal tools built to load fast, rank well, and hand over cleanly.",
    links: [
      { label: "Web development", href: "/services/web-development" },
      { label: "AI integration", href: "/services/ai-integration" },
    ],
  },
  {
    title: "Design for the web",
    line: "UX and visual design by the same team that builds it, so nothing is lost in the handoff.",
    links: [{ label: "UI/UX design", href: "/services/ui-ux-design" }],
  },
];

const steps = [
  {
    title: "Book a free call",
    body: `${booking.duration} with the team that would do the work. We tell you what's automatable and what isn't worth doing.`,
  },
  {
    title: "Get a priced audit",
    body: "A written roadmap before a line of code, with the cost and the expected return on every item.",
  },
  {
    title: "Go live in 4–8 weeks",
    body: "A working build on your real data, with human review built in. Documented, tested, and yours.",
  },
];

// Three example engagements, read from the examples data so the homepage
// can never disagree with the full write-up. Their numbers are targets, and
// the section says so.
const examples = [
  "med-spa-front-desk",
  "freight-delivery-paperwork",
  "bookkeeping-document-collection",
].flatMap((slug) => {
  const e = getEngagement(slug);
  return e ? [e] : [];
});

const principles = [
  {
    title: "Outcomes before technology",
    body: "Every engagement starts from a business metric. If AI isn't the answer, we say so before you spend.",
  },
  {
    title: "AI where it earns its place",
    body: "Grounded in your data, wrapped in permissions and audit trails, and tested against simpler alternatives.",
  },
  {
    title: "Built to hand over",
    body: "Documented, tested, and owned by you. No black boxes and no lock-in.",
  },
];

const faqs = [
  {
    q: "What happens on the free call?",
    a: `It's ${booking.duration} with the team that would do the work. You describe the workflow that takes the most time, and we tell you what is automatable, roughly what it would take, and whether it's worth doing. There's no obligation and no sales sequence afterwards.`,
  },
  {
    q: "How much does a project cost?",
    a: "It depends on the workflow, so we don't guess. Every build starts with a priced audit: a scoped, written roadmap with the cost and expected return itemized, so you can decide on the numbers before committing to a build.",
  },
  {
    q: "How long until something is live?",
    a: "Typically four to eight weeks from kickoff to a production build. You see a working prototype on your own data well before that, so decisions are made on evidence.",
  },
  {
    q: "What if AI isn't the right answer for us?",
    a: "Then we say so before you spend. We benchmark every AI approach against simpler alternatives and recommend the simplest thing that works, even when that means a smaller project.",
  },
  {
    q: "Is our data safe?",
    a: "Models are grounded in your own data and wrapped in permissions, audit trails, and human review on anything that matters. 86% of our client work is in regulated industries, so this is how we build by default.",
  },
  {
    q: "Who owns what you build?",
    a: "You do. Everything is documented, tested, and handed over. Many clients keep us on to run and improve what we built, but that's their choice.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero: one statement, one action, the numbers underneath */}
      <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" aria-hidden="true" />

        <div className="container-site relative flex-1 flex flex-col justify-center pt-32 pb-16 md:pb-20">
          <p className="label-mono">
            AI automation &amp; web development · Dallas–Fort Worth
          </p>
          <h1 className="h-display mt-7 max-w-[15ch] text-white">
            AI automation, measured by the{" "}
            <span className="text-primary">hours it saves you.</span>
          </h1>
          <p className="lede mt-8 max-w-xl">
            Work that used to need people, engineered away. We build AI
            agents, workflow automation, and fast websites for 25+ active
            clients.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Link href={booking.anchor} className="btn-primary btn-lg group">
              {booking.label}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/examples"
              className="group inline-flex items-center gap-2 text-base font-medium text-white/70 hover:text-white transition-colors"
            >
              See example projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Headline numbers */}
        <div className="relative border-t border-line">
          <dl className="container-site grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col-reverse justify-end py-7 md:py-9 ${
                  i % 2 === 1 ? "pl-6 border-l border-line" : "pr-6"
                } ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${
                  i > 0 ? "lg:pl-10 lg:border-l lg:border-line" : ""
                }`}
              >
                <dt className="label-mono mt-3">{s.label}</dt>
                <dd className="text-4xl md:text-5xl font-light tracking-tight text-white">
                  {s.value}
                  <span className="text-white/40">{s.suffix}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* The problem, said plainly */}
      <section className="border-t border-line">
        <div className="container-site py-28 md:py-48">
          <ScrollStatement
            lines={[
              "Your team is doing work that software should be doing.",
              "Copying data between tools. Chasing documents. Answering the same question again.",
              "We find that work, build the system that does it, and stay to keep it running.",
            ]}
          />
        </div>
      </section>

      {/* What we build */}
      <section className="border-t border-line bg-surface">
        <div className="container-site py-24 md:py-36">
          <SectionHeading eyebrow="What we build" title="Three practices, one team." />

          <div className="border-t border-line">
            {practices.map((p, i) => (
              <Reveal
                key={p.title}
                className="grid grid-cols-1 md:grid-cols-[80px_minmax(0,4fr)_minmax(0,5fr)] gap-4 md:gap-10 py-9 md:py-12 border-b border-line"
              >
                <span className="font-mono text-sm text-white/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-3xl md:text-4xl font-light tracking-tight text-white">
                  {p.title}
                </h3>
                <div>
                  <p className="text-lg leading-relaxed text-white/60">{p.line}</p>
                  <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
                    {p.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="group inline-flex items-center gap-2 text-base font-medium text-white hover:text-primary transition-colors"
                        >
                          {l.label}
                          <ArrowRight className="size-4 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 md:mt-20">
            <FlowDiagram />
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-line">
        <div className="container-site py-24 md:py-36">
          <SectionHeading eyebrow="How it works" title="From first call to live system in three steps." />
          <ol className="grid grid-cols-1 md:grid-cols-3 border-t border-line">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className={`border-b border-line md:border-b-0 ${
                  i > 0 ? "md:border-l md:border-line" : ""
                }`}
              >
                <Reveal className={`py-9 md:py-12 ${i > 0 ? "md:pl-10" : ""} md:pr-10`}>
                  <span className="block text-6xl md:text-7xl font-light tracking-tight text-white/20">
                    {i + 1}
                  </span>
                  <h3 className="mt-8 text-2xl md:text-3xl font-light tracking-tight text-white">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-white/60">{s.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
          <Reveal className="mt-12">
            <Link href={booking.anchor} className="btn-primary btn-lg group">
              {booking.label}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Example projects */}
      <section className="border-t border-line bg-surface">
        <div className="container-site py-24 md:py-36">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Example projects"
              title="What a typical project looks like."
              lede="Three example engagements. The numbers are the targets we would set, worked out from stated assumptions and measured after launch."
            />
            <Reveal className="mb-12 md:mb-20">
              <Link href="/examples" className="btn-outline-light">
                All example projects
              </Link>
            </Reveal>
          </div>

          <div className="border-t border-line">
            {examples.map((e) => (
              <Reveal key={e.slug}>
                <Link
                  href={`/examples/${e.slug}`}
                  className="group grid grid-cols-1 md:grid-cols-[minmax(0,3fr)_minmax(0,5fr)_auto] items-end gap-3 md:gap-10 py-9 md:py-12 border-b border-line"
                >
                  <span>
                    <span className="label-mono block">Target</span>
                    <span className="mt-3 block text-6xl md:text-7xl font-light tracking-tight text-white">
                      {e.target.value}
                    </span>
                  </span>
                  <span>
                    <span className="block text-xl md:text-2xl font-light text-white">
                      {e.target.label}
                    </span>
                    <span className="mt-2 block text-base text-white/50 group-hover:text-white/80 transition-colors">
                      {e.title}
                    </span>
                  </span>
                  <ArrowRight className="hidden md:block size-6 mb-2 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="border-t border-line">
        <div className="container-site py-24 md:py-36">
          <SectionHeading
            eyebrow="How we work"
            title="Software first. AI where it counts."
            lede="AI doesn't replace good engineering. It raises the bar for it."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-line">
            {principles.map((p, i) => (
              <Reveal
                key={p.title}
                className={`py-9 md:py-12 border-b border-line md:border-b-0 ${
                  i > 0 ? "md:pl-10 md:border-l md:border-line" : ""
                } md:pr-10`}
              >
                <h3 className="text-2xl font-light tracking-tight text-white">
                  {p.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-white/60">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Questions people ask before they book */}
      <section className="border-t border-line bg-surface">
        <div className="container-site py-24 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-20">
            <SectionHeading eyebrow="Before you book" title="Questions we get on every first call." />
            <Reveal>
              <FAQAccordion items={faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      <BookCall />
    </main>
  );
}

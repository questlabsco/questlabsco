import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroShader from "@/components/site/HeroShader";
import GlowStatement from "@/components/site/GlowStatement";
import BookCall from "@/components/site/BookCall";
import FAQAccordion from "@/components/site/FAQAccordion";
import SectionHeading from "@/components/site/SectionHeading";
import Img from "@/components/site/Img";
import Reveal from "@/components/site/Reveal";
import { booking, stats } from "@/lib/data/site";
import { getEngagement } from "@/lib/data/engagements";

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
    body: "Every engagement starts from a business metric and works backward to the right tool. If AI isn't the answer, we say so before you spend.",
  },
  {
    title: "AI where it earns its place",
    body: "Models are grounded in your data, wrapped in permissions and audit trails, and benchmarked against simpler alternatives before they ship.",
  },
  {
    title: "Built to hand over, run to last",
    body: "Everything is documented, tested, and owned by you. No black boxes, no lock-in: staying with us is a choice, not a hostage situation.",
  },
];

const steps = [
  {
    title: "Book a free call",
    body: `${booking.duration} with the team that would do the work. You describe the workflow that eats your week; we tell you what's automatable and what isn't worth doing.`,
  },
  {
    title: "Get a priced audit",
    body: "A scoped, written roadmap before a line of code, with the cost and the expected return attached to every item. You decide on the numbers.",
  },
  {
    title: "Go live in 4–8 weeks",
    body: "A working build on your real data, with human review, permissions, and audit trails built in. Documented, tested, and yours.",
  },
];

const pillars = [
  {
    image: "/images/company/laptop-code.webp",
    title: "AI & automation",
    line: "From feasibility audit to autonomous systems in production. We find the workflows worth automating, build the pipeline or agent that handles them, and stay on to keep it accurate as your business changes.",
    href: "/services",
    cta: "AI and automation services",
  },
  {
    image: "/images/company/laptop-website.webp",
    title: "Web engineering",
    line: "Complete websites and web apps on modern edge stacks. Marketing sites, customer portals, and internal tools built to load fast, rank well, and hand over cleanly to whoever runs them next.",
    href: "/services/web-development",
    cta: "Web development services",
  },
  {
    image: "/images/company/design-sketches.webp",
    title: "Design for the web",
    line: "UX and visual design implemented by the same team that builds it. Research, wireframes, and visual systems that survive contact with real engineering constraints, because nothing is lost in handoff.",
    href: "/services/ui-ux-design",
    cta: "UI/UX design services",
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
      {/* Hero: animated shader background, fills the whole screen on load.
          The text is in the static HTML at full opacity, so it paints
          before any JavaScript runs. */}
      <section className="relative min-h-screen flex flex-col bg-ink-deep text-white overflow-hidden">
        <HeroShader />
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />

        <div className="container-site relative z-10 flex-1 flex items-center pt-32 pb-14 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-white">
              AI automation, measured by the hours it saves you
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white leading-relaxed max-w-2xl mx-auto">
              Work that used to need people, engineered away. We build AI
              agents, workflow automation, and fast websites for 25+ active
              clients.
            </p>
            <div className="mt-9 flex flex-wrap gap-4 justify-center">
              <Link href={booking.anchor} className="btn-primary btn-lg group">
                {booking.label}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/examples" className="btn-outline-light btn-lg">
                See example projects
              </Link>
            </div>
            <p className="mt-5 text-sm text-white/60">
              {booking.duration}. No sales pitch.
            </p>
          </div>
        </div>

        {/* Headline numbers, pinned to the bottom of the first screen */}
        <div className="relative z-10 border-t border-white/15">
          <dl className="container-site grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`py-6 md:py-8 ${i % 2 === 1 ? "pl-5 border-l border-white/15" : "pr-5"} ${
                  i >= 2 ? "border-t border-white/15 lg:border-t-0" : ""
                } ${i > 0 ? "lg:pl-8 lg:border-l lg:border-white/15" : ""}`}
              >
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-white/55 leading-snug min-h-[2.4em]">
                  {s.label}
                </dt>
                <dd className="mt-3 text-3xl md:text-4xl font-black text-white">
                  {s.value}
                  <span className="text-accent">{s.suffix}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Example projects, on the purple band */}
      <section
        className="text-white"
        style={{
          background: "linear-gradient(180deg, #2A2153 0%, #241B45 45%, #1E1840 100%)",
        }}
      >
        <div className="container-site py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
            <Reveal className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-[1.1] text-white">
                What a typical project looks like
              </h2>
              <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed">
                Three example engagements. The numbers are the targets we
                would set, worked out from stated assumptions and measured
                after launch.
              </p>
            </Reveal>
            <Reveal>
              <Link href="/examples" className="btn-outline-light">
                All example projects
              </Link>
            </Reveal>
          </div>

          <div className="border-t border-white/15">
            {examples.map((e) => (
              <Reveal key={e.slug}>
                <Link
                  href={`/examples/${e.slug}`}
                  className="group grid grid-cols-1 md:grid-cols-[240px_1fr_auto] items-baseline gap-2 md:gap-10 py-7 md:py-9 border-b border-white/15"
                >
                  <span>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/55">
                      Target
                    </span>
                    <span className="mt-2 block text-5xl md:text-6xl font-black leading-none text-white">
                      {e.target.value}
                    </span>
                  </span>
                  <span>
                    <span className="block text-lg md:text-xl font-semibold text-white leading-snug">
                      {e.target.label}
                    </span>
                    <span className="mt-2 block text-sm md:text-base text-white/60 group-hover:text-white transition-colors">
                      {e.title}
                    </span>
                  </span>
                  <ArrowRight className="hidden md:block size-5 self-center text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering-first statement: scroll-driven purple glow */}
      <GlowStatement />

      {/* Delivery principles, then how an engagement runs */}
      <section className="bg-white border-t border-line">
        <div className="container-site py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16">
            <Reveal>
              <h2 className="text-sm font-bold uppercase tracking-wide text-ink">
                Our delivery principles
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-xl md:text-2xl font-semibold text-ink leading-snug max-w-2xl">
                We own delivery from the first workshop to production
                support.
              </p>
              <div className="mt-8 border-t border-line">
                {principles.map((p) => (
                  <div
                    key={p.title}
                    className="grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-2 md:gap-8 py-5 md:py-6 border-b border-line"
                  >
                    <h3 className="text-base md:text-lg font-semibold text-ink uppercase tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16">
            <Reveal>
              <h2 className="text-sm font-bold uppercase tracking-wide text-ink">
                How it works
              </h2>
            </Reveal>
            <div>
              <ol className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {steps.map((s, i) => (
                  <li key={s.title} className="border border-line">
                    <Reveal className="p-6 h-full">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Step {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-4 text-xl font-black text-ink leading-tight">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                        {s.body}
                      </p>
                    </Reveal>
                  </li>
                ))}
              </ol>
              <Reveal className="mt-8">
                <Link href={booking.anchor} className="btn-primary btn-lg group">
                  {booking.label}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Practices: sticky stacking panels, image always on the left */}
      <div className="relative">
        {pillars.map((p, i) => (
          <section
            key={p.title}
            className={`sticky top-0 min-h-screen grid grid-cols-1 lg:grid-cols-2 ${
              i % 2 === 1 ? "bg-tint" : "bg-white"
            }`}
            style={{ zIndex: i + 1 }}
          >
            <div className="relative h-[45vh] lg:h-screen">
              <Img
                src={p.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center px-6 md:px-14 lg:px-16 xl:px-20 py-14 lg:py-0">
              <Reveal className="max-w-md">
                <h2 className="text-2xl md:text-3xl font-bold text-ink uppercase tracking-tight">
                  {p.title}
                </h2>
                <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                  {p.line}
                </p>
                <Link
                  href={p.href}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary group"
                >
                  {p.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      {/* Questions people ask before they book */}
      <section className="relative bg-tint border-y border-line" style={{ zIndex: pillars.length + 1 }}>
        <div className="container-site py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            <SectionHeading title="Questions we get on every first call" />
            <Reveal>
              <FAQAccordion items={faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      <div className="relative" style={{ zIndex: pillars.length + 1 }}>
        <BookCall />
      </div>
    </main>
  );
}

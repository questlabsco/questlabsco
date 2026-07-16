import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WebGLShader from "@/components/site/WebGLShader";
import RecognitionCarousel from "@/components/site/RecognitionCarousel";
import GlowStatement from "@/components/site/GlowStatement";
import SectionHeading from "@/components/site/SectionHeading";
import FeaturedCaseStudyCarousel from "@/components/site/FeaturedCaseStudyCarousel";
import CTABand from "@/components/site/CTABand";
import Reveal from "@/components/site/Reveal";
import { caseStudies } from "@/lib/data/case-studies";
import { stats } from "@/lib/data/site";

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

const pillars = [
  {
    image: "/images/company/laptop-code.jpg",
    title: "AI & automation",
    line: "From feasibility audit to autonomous systems in production. We find the workflows worth automating, build the pipeline or agent that handles them, and stay on to keep it accurate as your business changes.",
    href: "/services/",
  },
  {
    image: "/images/company/laptop-website.jpg",
    title: "Web engineering",
    line: "Complete websites and web apps on modern edge stacks. Marketing sites, customer portals, and internal tools built to load fast, rank well, and hand over cleanly to whoever runs them next.",
    href: "/services/web-development/",
  },
  {
    image: "/images/company/design-sketches.jpg",
    title: "Design for the web",
    line: "UX and visual design implemented by the same team that builds it. Research, wireframes, and visual systems that survive contact with real engineering constraints, because nothing is lost in handoff.",
    href: "/services/ui-ux-design/",
  },
];

export default function Home() {
  const featured = caseStudies.slice(0, 4);

  return (
    <main>
      {/* Hero: animated shader background, fills the whole screen on load */}
      <section className="relative min-h-screen flex items-center bg-ink-deep text-white overflow-hidden">
        <WebGLShader />
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        <div className="container-site relative z-10 py-32 text-center">
          <Reveal className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-white">
              Work that used to need people, engineered away
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white leading-relaxed max-w-xl mx-auto">
              AI automation and modern web products, measured by the hours
              they save you.
            </p>
            <div className="mt-9 flex flex-wrap gap-4 justify-center">
              <Link href="/contact/" className="btn-primary group !px-8 !py-3">
                Let&apos;s talk
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/case-studies/" className="btn-outline-light !px-8 !py-3">
                View case studies
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Industry recognition: carousel only, no surrounding copy */}
      <section
        className="text-white"
        style={{
          background: "linear-gradient(180deg, #2A2153 0%, #241B45 45%, #1E1840 100%)",
        }}
      >
        <div className="container-site py-14 md:py-20">
          <RecognitionCarousel onDark />
        </div>
      </section>

      {/* Engineering-first statement: tall, scroll-driven purple glow */}
      <GlowStatement />

      {/* Delivery principles + headline stats */}
      <section className="bg-white border-t border-line">
        <div className="container-site py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-wide text-ink">
                Our delivery principles
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-xl md:text-2xl font-semibold text-ink leading-snug max-w-2xl">
                We own delivery from the first workshop to production
                support.
              </p>
              <div className="mt-8 border-t border-line">
                {principles.map((p) => (
                  <Link
                    key={p.title}
                    href="/about/"
                    className="group flex items-center justify-between gap-6 py-5 border-b border-line hover:text-primary transition-colors"
                  >
                    <span className="text-base md:text-lg font-semibold text-ink group-hover:text-primary transition-colors uppercase tracking-tight">
                      {p.title}
                    </span>
                    <ArrowRight className="size-5 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} className="border border-line p-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground leading-snug min-h-[2.4em]">
                  {s.label}
                </p>
                <p className="mt-4 text-3xl md:text-4xl font-black text-ink">
                  {s.value}
                  <span className="text-primary">{s.suffix}</span>
                </p>
              </Reveal>
            ))}
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
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
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      {/* Case studies: full-bleed horizontal gallery */}
      <section className="relative z-10 bg-ink text-white">
        <div className="container-site pt-16 md:pt-24">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <SectionHeading title="Work that shipped, not just a demo" onDark />
            <Reveal delay={0.1} className="mb-12 md:mb-16">
              <Link href="/case-studies/" className="btn-outline-light !py-3 !px-6">
                View all
              </Link>
            </Reveal>
          </div>
        </div>
        <FeaturedCaseStudyCarousel items={featured} />
      </section>

      <CTABand />
    </main>
  );
}

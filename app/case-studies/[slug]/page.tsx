import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, User, Layers, Zap } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import CaseStudyCard from "@/components/site/CaseStudyCard";
import CaseStudyToc, { type TocSection } from "@/components/site/CaseStudyToc";
import CTABand from "@/components/site/CTABand";
import Reveal from "@/components/site/Reveal";
import { caseStudies, getCaseStudy } from "@/lib/data/case-studies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const cs = getCaseStudy((await params).slug);
  if (!cs) return {};
  return { title: cs.title, description: cs.summary };
}

const sections: TocSection[] = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "approach", label: "Our approach" },
  { id: "solution", label: "Solution" },
  { id: "outcomes", label: "Outcomes" },
  { id: "looking-ahead", label: "Looking ahead" },
  { id: "tech-stack", label: "Tech stack" },
];

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const cs = getCaseStudy((await params).slug);
  if (!cs) notFound();

  const more = caseStudies.filter((c) => c.slug !== cs.slug).slice(0, 3);

  return (
    <main>
      {/* Hero image with overlaid tags + title */}
      <section className="relative bg-ink-deep text-white pt-32 md:pt-40">
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={cs.image} alt={cs.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/30 to-black/40" />

          <div className="absolute top-6 left-6 right-6 flex flex-wrap gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white bg-accent px-2.5 py-1">
              {cs.industry}
            </span>
            {cs.services.map((s) => (
              <span
                key={s}
                className="text-[11px] font-semibold uppercase tracking-wider text-white border border-white/40 bg-black/20 backdrop-blur px-2.5 py-1"
              >
                {s}
              </span>
            ))}
          </div>

          <Reveal className="absolute bottom-6 left-6 right-6 md:right-24 max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.12] tracking-tight">
              {cs.title}
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
              {cs.summary}
            </p>
          </Reveal>
        </div>
      </section>

      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 lg:gap-16 py-14 md:py-20">
          {/* Sticky sidebar: meta + TOC */}
          <div className="lg:sticky lg:top-32 lg:self-start space-y-10">
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-6">
              <div>
                <User className="size-5 text-primary" />
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Client
                </p>
                <p className="mt-1 text-sm font-medium text-ink">{cs.client}</p>
              </div>
              <div>
                <Layers className="size-5 text-primary" />
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Domain
                </p>
                <p className="mt-1 text-sm font-medium text-ink">{cs.industry}</p>
              </div>
              <div>
                <Zap className="size-5 text-primary" />
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Services
                </p>
                <p className="mt-1 text-sm font-medium text-ink">
                  {cs.services.join(", ")}
                </p>
              </div>
            </div>
            <CaseStudyToc sections={sections} />
          </div>

          {/* Main content */}
          <div className="max-w-3xl space-y-20 md:space-y-24">
            <Reveal id="overview" className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-bold text-ink">Overview</h2>
              <p className="mt-5 text-base md:text-lg text-ink/80 leading-relaxed">
                {cs.summary}
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                {cs.aboutClient}
              </p>
            </Reveal>

            <Reveal id="challenge" className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-bold text-ink">Challenge</h2>
              <div className="mt-5 space-y-4">
                {cs.challenge.map((p, i) => (
                  <p key={i} className="text-base text-ink/80 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal id="approach" className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-bold text-ink">Our approach</h2>
              <div className="mt-5 space-y-4">
                {cs.solution.map((p, i) => (
                  <p key={i} className="text-base text-ink/80 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cs.secondImage}
                alt=""
                className="mt-8 w-full aspect-[16/9] object-cover border border-line"
              />
            </Reveal>

            <Reveal id="solution" className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-bold text-ink">Solution</h2>
              <p className="mt-5 text-base text-ink/80 leading-relaxed">
                Key capabilities include:
              </p>
              <ul className="mt-5 space-y-4">
                {cs.features.map((f) => (
                  <li key={f.title} className="pl-5 border-l-2 border-primary/30">
                    <span className="font-bold text-ink">{f.title}.</span>{" "}
                    <span className="text-muted-foreground">{f.body}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal id="outcomes" className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-bold text-ink">Outcomes</h2>
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
                {cs.results.map((r) => (
                  <div key={r.label} className="border-l-2 border-primary pl-5">
                    <p className="text-3xl md:text-4xl font-black tracking-tight text-ink">
                      {r.value}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {r.label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-base text-ink/80 leading-relaxed">
                {cs.resultsNarrative}
              </p>
              <blockquote className="mt-8 border-l-2 border-primary pl-6">
                <p className="text-lg font-medium text-ink leading-relaxed">
                  &ldquo;{cs.quote.text}&rdquo;
                </p>
                <footer className="mt-4 text-sm text-muted-foreground">
                  <span className="font-bold text-ink">{cs.quote.author}</span>,{" "}
                  {cs.quote.role}
                </footer>
              </blockquote>
            </Reveal>

            <Reveal id="looking-ahead" className="scroll-mt-32">
              <div className="bg-ink-deep p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 justify-between">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-white leading-snug max-w-md">
                    Looking to solve something similar in{" "}
                    {cs.industry.toLowerCase()}?
                  </h2>
                  <p className="mt-2 text-sm text-white/60 max-w-md">
                    Let&apos;s design a system built for your workload, not a
                    generic template.
                  </p>
                </div>
                <Link
                  href="/contact/"
                  className="btn-primary group shrink-0 !px-6"
                >
                  Let&apos;s talk
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>

            <Reveal id="tech-stack" className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-bold text-ink">Tech stack</h2>
              <ul className="mt-5 flex flex-wrap gap-3">
                {cs.tech.map((t) => (
                  <li
                    key={t}
                    className="border border-line bg-tint px-4 py-2 text-sm font-medium text-ink"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Related projects */}
      <section className="bg-tint border-y border-line">
        <div className="container-site py-20 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading title="Related projects" />
            <Reveal delay={0.1} className="mb-12 md:mb-16">
              <Link href="/case-studies/" className="btn-outline-dark !py-3 !px-6 group">
                View all
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {more.map((c) => (
              <CaseStudyCard key={c.slug} cs={c} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}

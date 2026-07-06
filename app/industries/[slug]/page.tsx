import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import CaseStudyCard from "@/components/site/CaseStudyCard";
import ContactForm from "@/components/site/ContactForm";
import Reveal from "@/components/site/Reveal";
import { industries, getIndustry } from "@/lib/data/industries";
import { getCaseStudy } from "@/lib/data/case-studies";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const industry = getIndustry((await params).slug);
  if (!industry) return {};
  return { title: industry.title, description: industry.intro };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const industry = getIndustry((await params).slug);
  if (!industry) notFound();

  const relatedCases = industry.caseStudySlugs
    .map(getCaseStudy)
    .filter((c) => c !== undefined);

  return (
    <main>
      {/* Hero with image */}
      <section className="bg-ink-deep text-white">
        <div className="container-site page-hero pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h1 className="text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight">
                {industry.title}
              </h1>
              <p className="mt-6 text-lg text-white/70 leading-relaxed">
                {industry.intro}
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/contact/" className="btn-primary group">
                  Let&apos;s talk
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="hidden lg:block border border-line-dark">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full aspect-[4/3] object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-white">
        <div className="container-site py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <Reveal className="lg:sticky lg:top-32">
              <SectionHeading
                title={`What we automate in ${industry.name.toLowerCase()}`}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={industry.image}
                alt={industry.name}
                className="hidden lg:block w-full aspect-[4/3] object-cover border border-line -mt-4"
              />
            </Reveal>
            <div className="border-t border-line">
              {industry.useCases.map((u, i) => (
                <Reveal
                  key={u.title}
                  delay={i * 0.04}
                  className="grid grid-cols-[48px_1fr] gap-4 py-6 border-b border-line"
                >
                  <span className="text-xl font-bold text-tint-strong leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-ink">{u.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {u.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes: dark band */}
      <section className="bg-ink text-white">
        <div className="container-site py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 items-center">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                What clients in this sector walk away with
              </h2>
            </Reveal>
            <ul className="space-y-5">
              {industry.outcomes.map((o, i) => (
                <Reveal key={o} delay={i * 0.08}>
                  <li className="flex items-start gap-4 pb-5 border-b border-line-dark last:border-0 last:pb-0">
                    <Check className="size-5 shrink-0 mt-0.5 text-accent" />
                    <span className="text-sm md:text-base text-white/80">{o}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related case studies */}
      {relatedCases.length > 0 && (
        <section className="bg-tint border-b border-line">
          <div className="container-site py-20 md:py-28">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading title="Work in this industry" />
              <Reveal delay={0.1} className="mb-12 md:mb-16">
                <Link href="/case-studies/" className="btn-outline-dark !py-3 !px-6">
                  View all
                </Link>
              </Reveal>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {relatedCases.map((cs) => (
                <CaseStudyCard key={cs.slug} cs={cs} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section className="bg-white">
        <div className="container-site py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <SectionHeading
              title={`Bring AI to your ${industry.name.toLowerCase()} operation`}
              lede="Describe the workflow that eats the most time. We'll tell you what automating it would take, and what it would return."
            />
            <Reveal delay={0.1} className="border border-line p-7 md:p-9">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

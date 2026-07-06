import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import RecognitionStrip from "@/components/site/RecognitionStrip";
import ProcessSteps from "@/components/site/ProcessSteps";
import TechStackTabs from "@/components/site/TechStackTabs";
import FAQAccordion from "@/components/site/FAQAccordion";
import CaseStudyCard from "@/components/site/CaseStudyCard";
import ContactForm from "@/components/site/ContactForm";
import Reveal from "@/components/site/Reveal";
import { services, getService } from "@/lib/data/services";
import { getIndustry } from "@/lib/data/industries";
import { getCaseStudy } from "@/lib/data/case-studies";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return { title: service.title, description: service.intro };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const relatedIndustries = service.industrySlugs
    .map(getIndustry)
    .filter((i) => i !== undefined);
  const relatedCases = service.caseStudySlugs
    .map(getCaseStudy)
    .filter((c) => c !== undefined);

  return (
    <main>
      {/* Hero */}
      <section className="bg-ink-deep text-white">
        <div className="container-site page-hero pb-16 md:pb-24">
          <Reveal className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight">
              {service.title}
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl">
              {service.intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact/" className="btn-primary group">
                Let&apos;s talk
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/case-studies/" className="btn-outline-light">
                View portfolio
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Recognition */}
      <section className="bg-white border-b border-line">
        <div className="container-site py-12 md:py-14">
          <RecognitionStrip />
        </div>
      </section>

      {/* Offerings: numbered list */}
      <section className="bg-white">
        <div className="container-site py-20 md:py-28">
          <SectionHeading title={`Our ${service.name} services`} />
          <div className="border-t border-line">
            {service.offerings.map((o, i) => (
              <Reveal
                key={o.title}
                delay={i * 0.04}
                className="grid grid-cols-1 md:grid-cols-[80px_280px_1fr] gap-3 md:gap-8 py-7 md:py-8 border-b border-line"
              >
                <span className="text-2xl font-bold text-tint-strong leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-ink leading-snug">
                  {o.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {o.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="bg-tint border-y border-line">
        <div className="container-site py-20 md:py-28">
          <SectionHeading title="What we build with it" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
            {service.solutions.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05} className="bg-white p-7">
                <h3 className="text-base font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries served */}
      {relatedIndustries.length > 0 && (
        <section className="bg-white">
          <div className="container-site py-20 md:py-24">
            <SectionHeading title="Where this delivers the most" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedIndustries.map((ind, i) => (
                <Reveal key={ind.slug} delay={i * 0.05}>
                  <Link href={`/industries/${ind.slug}/`} className="group block">
                    <div className="aspect-[4/3] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={ind.image}
                        alt={ind.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-ink group-hover:text-primary transition-colors">
                      {ind.name}
                    </h3>
                    <span className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Explore
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process: dark band */}
      <section className="bg-ink text-white">
        <div className="container-site py-20 md:py-28">
          <SectionHeading
            title="A six-step path from idea to production"
            onDark
          />
          <div className="[&_.bg-white]:bg-ink-soft [&_h3]:text-white [&_p]:text-white/60 [&_span]:text-white/15">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="bg-white">
        <div className="container-site py-20 md:py-28">
          <SectionHeading
            title="The stack behind the work"
            lede="Chosen per project for capability, cost, and your team's ability to own it later, never by vendor allegiance."
          />
          <Reveal>
            <TechStackTabs />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-tint border-y border-line">
        <div className="container-site py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            <SectionHeading title="Common questions" />
            <Reveal delay={0.1}>
              <FAQAccordion items={service.faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related case studies */}
      {relatedCases.length > 0 && (
        <section className="bg-white">
          <div className="container-site py-20 md:py-28">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading title="Related work" />
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
      <section className="bg-ink text-white border-t border-line-dark">
        <div className="container-site py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <SectionHeading
              title="Tell us about your project"
              lede="We'll come back within one business day with an honest read on feasibility, approach, and cost."
              onDark
            />
            <Reveal delay={0.1} className="bg-white p-7 md:p-9">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

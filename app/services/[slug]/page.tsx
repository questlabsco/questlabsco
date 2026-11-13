import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import RecognitionStrip from "@/components/site/RecognitionStrip";
import ProcessSteps from "@/components/site/ProcessSteps";
import TechStackTabs from "@/components/site/TechStackTabs";
import FAQAccordion from "@/components/site/FAQAccordion";
import ExampleCard from "@/components/site/ExampleCard";
import BookCall from "@/components/site/BookCall";
import Img from "@/components/site/Img";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import { services, getService } from "@/lib/data/services";
import { getIndustry } from "@/lib/data/industries";
import { getEngagement } from "@/lib/data/engagements";
import { booking } from "@/lib/data/site";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

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
  return pageMeta({
    title: service.title,
    description: service.intro,
    path: `/services/${service.slug}`,
  });
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
  const examples = service.caseStudySlugs
    .map(getEngagement)
    .filter((e) => e !== undefined);

  return (
    <main>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ])}
      />

      {/* Hero */}
      <section className="bg-background text-white">
        <div className="container-site page-hero pb-16 md:pb-24">
          <div className="max-w-3xl">
            <h1 className="h-page">
              {service.title}
            </h1>
            <p className="lede mt-7 max-w-2xl">
              {service.intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href={booking.anchor} className="btn-primary btn-lg group">
                {booking.label}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/examples" className="btn-outline-light btn-lg">
                See example projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="bg-background border-b border-line">
        <div className="container-site py-12 md:py-14">
          <RecognitionStrip />
        </div>
      </section>

      {/* Offerings: numbered list */}
      <section className="bg-background">
        <div className="container-site py-20 md:py-28">
          <SectionHeading title={`Our ${service.name} services`} />
          <div className="border-t border-line">
            {service.offerings.map((o, i) => (
              <Reveal
                key={o.title}
                delay={i * 0.04}
                className="grid grid-cols-1 md:grid-cols-[80px_280px_1fr] gap-3 md:gap-8 py-7 md:py-8 border-b border-line"
              >
                <span className="text-2xl font-bold text-white/15 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-foreground leading-snug">
                  {o.title}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {o.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="bg-surface border-y border-line">
        <div className="container-site py-20 md:py-28">
          <SectionHeading title="What we build with it" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
            {service.solutions.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05} className="bg-background p-7">
                <h3 className="text-base font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries served */}
      {relatedIndustries.length > 0 && (
        <section className="bg-background">
          <div className="container-site py-20 md:py-24">
            <SectionHeading title="Where this delivers the most" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedIndustries.map((ind, i) => (
                <Reveal key={ind.slug} delay={i * 0.05}>
                  <Link href={`/industries/${ind.slug}/`} className="group block">
                    <div className="aspect-[4/3] overflow-hidden">
                      <Img
                        src={ind.image}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-foreground group-hover:text-primary transition-colors">
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
      <section className="bg-background text-white">
        <div className="container-site py-20 md:py-28">
          <SectionHeading
            title="A six-step path from idea to production"
            onDark
          />
          <div className="[&_.bg-background]:bg-surface-raised [&_h3]:text-white [&_p]:text-white/60 [&_span]:text-white/15">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="bg-background">
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
      <section className="bg-surface border-y border-line">
        <div className="container-site py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
            <SectionHeading title="Common questions" />
            <Reveal delay={0.1}>
              <FAQAccordion items={service.faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Example projects that use this service */}
      {examples.length > 0 && (
        <section className="bg-background">
          <div className="container-site py-20 md:py-28">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading title="Example projects" />
              <Reveal delay={0.1} className="mb-12 md:mb-16">
                <Link href="/examples" className="btn-outline-dark !py-3 !px-6">
                  All examples
                </Link>
              </Reveal>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {examples.map((e) => (
                <ExampleCard key={e.slug} e={e} />
              ))}
            </div>
          </div>
        </section>
      )}

      <BookCall />
    </main>
  );
}

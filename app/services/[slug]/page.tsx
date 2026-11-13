import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import RecognitionStrip from "@/components/site/RecognitionStrip";
import ProcessSteps from "@/components/site/ProcessSteps";
import TechStackTabs from "@/components/site/TechStackTabs";
import FAQAccordion from "@/components/site/FAQAccordion";
import CaseStudyCard from "@/components/site/CaseStudyCard";
import BookCall from "@/components/site/BookCall";
import Img from "@/components/site/Img";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import Zigzag from "@/components/site/Zigzag";
import { Cloud } from "@/components/art/Doodles";
import ServiceHeroScene from "@/components/art/services/ServiceHeroScene";
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

// Headline casing for the hero: the data keeps sentence case (it also feeds
// the page title), so Title Case is applied at render time. Words that
// already carry capitals (AI, UI/UX) are left alone.
const SMALL = new Set(["a", "an", "and", "as", "at", "but", "by", "for", "in", "of", "on", "or", "the", "to", "with"]);
function titleCase(text: string) {
  return text
    .split(" ")
    .map((w, i) =>
      i > 0 && SMALL.has(w) ? w : w.charAt(0).toUpperCase() + w.slice(1)
    )
    .join(" ");
}

// Coloured top strips on the solution cards.
const strips = ["bg-sun", "bg-mint", "bg-coral", "bg-lilac"];

type Tone = "white" | "pale";

function Band({ tone, children, id }: { tone: Tone; children: ReactNode; id?: string }) {
  return (
    <section id={id} className={tone === "white" ? "bg-white" : "bg-surface"}>
      <div className="container-site py-16 md:py-24">{children}</div>
    </section>
  );
}

function AuditLink({ children }: { children: ReactNode }) {
  return (
    <Link href={booking.anchor} className="font-bold text-brand underline">
      {children}
    </Link>
  );
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

  // Hero headline: the first two words go in the highlight block.
  const words = titleCase(service.title).split(" ");
  const lead = words.slice(0, 2).join(" ");
  const rest = words.slice(2).join(" ");

  // The sections after the hero, in order. Tones alternate white / pale by
  // position, so a section that is skipped (no industries, no case
  // studies) never leaves two of the same colour touching.
  const blocks: { key: string; render: (tone: Tone) => ReactNode }[] = [
    {
      key: "offerings",
      render: (tone) => (
        <Band tone={tone}>
          <RecognitionStrip className="mb-16 md:mb-20" />
          <SectionHeading
            title={`Our ${service.name} Services`}
            highlight={service.name}
            note="Pick one, or stack a few"
            lede={
              <>
                Not sure which one you need? That is exactly what the{" "}
                <AuditLink>{booking.offer}</AuditLink> is for.
              </>
            }
          />
          <ol className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {service.offerings.map((o, i) => (
              <li key={o.title}>
                <Reveal className="card-pop flex h-full items-start gap-5 p-6 md:p-7">
                  <span
                    aria-hidden="true"
                    className="grid size-14 shrink-0 place-items-center rounded-2xl border-[3px] border-ink bg-sun text-2xl font-extrabold text-ink shadow-pop-sm"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold leading-snug text-ink">{o.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-ink/80">{o.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Band>
      ),
    },
    {
      key: "solutions",
      render: (tone) => (
        <Band tone={tone}>
          <SectionHeading
            title="What We Build With It"
            highlight="Build With It"
            lede="A few of the things this turns into once it is in production."
          />
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.solutions.map((s, i) => (
              <li key={s.title}>
                <Reveal className="card-pop flex h-full flex-col overflow-hidden">
                  <div aria-hidden="true" className={`h-4 border-b-[3px] border-ink ${strips[i % strips.length]}`} />
                  <div className="p-6">
                    <h3 className="text-lg font-extrabold text-ink">{s.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-ink/80">{s.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Band>
      ),
    },
  ];

  if (relatedIndustries.length > 0) {
    blocks.push({
      key: "industries",
      render: (tone) => (
        <Band tone={tone}>
          <SectionHeading
            title="Where This Delivers The Most"
            highlight="The Most"
            lede="The industries where this work pays back fastest for the teams we build with."
          />
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedIndustries.map((ind) => (
              <li key={ind.slug}>
                <Reveal className="h-full">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="card-pop group flex h-full flex-col overflow-hidden transition-[transform,box-shadow] duration-150 hover:-translate-y-1 hover:shadow-pop-lg"
                  >
                    <div className="aspect-[4/3] overflow-hidden border-b-[3px] border-ink">
                      <Img
                        src={ind.image}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-lg font-extrabold text-ink">{ind.name}</h3>
                      <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-extrabold text-brand">
                        Explore {ind.name}
                        <ArrowRight
                          aria-hidden="true"
                          className="size-4 shrink-0 transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </Band>
      ),
    });
  }

  blocks.push(
    {
      key: "process",
      render: (tone) => (
        <Band tone={tone}>
          <SectionHeading
            title="A Six-Step Path from Idea to Production"
            highlight="Idea to Production"
            note="Same six steps, every project"
            noteSide="right"
            lede={
              <>
                Step one can be a {booking.durationAdjective} call. Book your{" "}
                <AuditLink>{booking.offer}</AuditLink> to get it started.
              </>
            }
          />
          <ProcessSteps />
        </Band>
      ),
    },
    {
      key: "stack",
      render: (tone) => (
        <Band tone={tone}>
          <SectionHeading
            title="The Stack Behind the Work"
            highlight="Stack"
            lede="Chosen per project for capability, cost, and your team's ability to own it later, never by vendor allegiance."
          />
          <Reveal>
            <TechStackTabs />
          </Reveal>
        </Band>
      ),
    },
    {
      key: "faq",
      render: (tone) => (
        <Band tone={tone}>
          <SectionHeading
            title={`${service.name} Questions, Answered`}
            highlight="Answered"
            lede={
              <>
                Still wondering about something? Ask us on the{" "}
                <AuditLink>{booking.offer}</AuditLink> call.
              </>
            }
          />
          <Reveal className="mx-auto max-w-3xl">
            <FAQAccordion items={service.faqs} />
          </Reveal>
        </Band>
      ),
    }
  );

  if (examples.length > 0) {
    blocks.push({
      key: "case-studies",
      render: (tone) => (
        <Band tone={tone}>
          <SectionHeading
            title="Case Studies"
            highlight="Case Studies"
            lede={`Real client projects that use ${service.name}, with the goal each one was built to hit.`}
          />
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {examples.map((e) => (
              <CaseStudyCard key={e.slug} e={e} />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/case-studies" className="btn-outline-dark group">
              See All Case Studies
              <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Band>
      ),
    });
  }

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
      <section className="relative overflow-hidden bg-hero text-white">
        <Cloud className="pointer-events-none absolute left-[3%] top-8 hidden w-24 animate-drift md:block" />
        <Cloud className="pointer-events-none absolute right-[38%] bottom-10 hidden w-16 animate-drift opacity-90 lg:block [animation-delay:-6s]" />
        <div className="container-site page-hero relative pb-16 md:pb-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div className="text-center lg:text-left">
              <nav aria-label="Breadcrumb">
                <Link
                  href="/services"
                  className="inline-flex min-h-11 items-center text-sm font-extrabold uppercase tracking-[0.12em] text-white/90 hover:text-white"
                >
                  Services
                </Link>
              </nav>
              <h1 className="h-page mt-2">
                <span className="hl-blue">{lead}</span>
                {rest ? ` ${rest}` : ""}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl lg:mx-0">
                {service.intro}
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
                <Link href={booking.anchor} className="btn-primary btn-lg group">
                  {booking.labelLong}
                  <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/case-studies" className="btn-outline-light btn-lg">
                  See Case Studies
                </Link>
              </div>
            </div>
            <ServiceHeroScene slug={service.slug} className="hidden lg:block" />
          </div>
        </div>
      </section>

      {blocks.map((b, i) => {
        const tone: Tone = i % 2 === 0 ? "white" : "pale";
        const prev = i === 0 ? "hero" : i % 2 === 0 ? "pale" : "white";
        return (
          <div key={b.key}>
            <Zigzag from={prev} to={tone} />
            {b.render(tone)}
          </div>
        );
      })}

      <BookCall />
    </main>
  );
}

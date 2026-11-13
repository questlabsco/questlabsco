import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import CaseStudyCard from "@/components/site/CaseStudyCard";
import CaseStudyBody from "@/components/site/CaseStudyBody";
import BookCall from "@/components/site/BookCall";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import { Cloud, Sparkle } from "@/components/art/Doodles";
import { engagements, getEngagement } from "@/lib/data/engagements";
import { getIndustry } from "@/lib/data/industries";
import { booking } from "@/lib/data/site";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return engagements.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const e = getEngagement((await params).slug);
  if (!e) return {};
  return pageMeta({
    // The longest headlines drop the suffix to stay inside a search result.
    title: e.title.length > 50 ? e.title : `${e.title}: Case Study`,
    description: e.summary,
    path: `/case-studies/${e.slug}`,
    // These headlines are long; the brand suffix would push them past what
    // a search result shows.
    absoluteTitle: true,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const e = getEngagement((await params).slug);
  if (!e) notFound();

  const industry = getIndustry(e.industrySlug);
  // The next three case studies after this one, wrapping round, so every
  // page links to a different set.
  const idx = engagements.findIndex((x) => x.slug === e.slug);
  const more = [1, 2, 3].map((k) => engagements[(idx + k) % engagements.length]);

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Case studies", path: "/case-studies" },
          { name: e.title, path: `/case-studies/${e.slug}` },
        ])}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero text-white">
        <Cloud className="absolute left-[4%] top-16 hidden w-24 animate-drift md:block" />
        <Cloud className="absolute right-[6%] top-28 hidden w-16 animate-drift [animation-delay:-6s] md:block" />
        <Sparkle className="absolute bottom-14 right-[16%] hidden w-7 animate-twinkle md:block" />
        <Sparkle
          color="#FFFFFF"
          className="absolute left-[18%] top-10 hidden w-5 animate-twinkle [animation-delay:-1.2s] [animation-duration:3.4s] lg:block"
        />

        <div className="container-site relative pt-7 pb-10 text-center md:pt-9 md:pb-12">
          <p className="pill">
            Case Study
            {industry && (
              <>
                <span aria-hidden="true">·</span>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="text-brand underline-offset-2 hover:underline"
                >
                  {industry.name}
                </Link>
              </>
            )}
          </p>
          <h1 className="h-page mx-auto mt-4 max-w-4xl md:!text-[2.5rem]">{e.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
            {e.summary}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href={booking.anchor} className="btn-primary btn-lg group">
              {booking.labelLong}
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link href="/case-studies" className="btn-outline-dark btn-lg">
              All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* The write-up */}
      <section className="bg-surface">
        <div className="container-site pt-14 pb-16 md:pt-16 md:pb-24">
          <CaseStudyBody e={e} />
        </div>
      </section>

      {/* More case studies */}
      <section className="bg-white">
        <div className="container-site py-16 md:py-24">
          <SectionHeading
            title="More Case Studies"
            highlight="Case Studies"
            lede={
              <>
                One project per industry. If none of them looks like your week,
                bring the workflow to a{" "}
                <Link href={booking.anchor} className="font-bold text-brand underline">
                  {booking.offer}
                </Link>
                .
              </>
            }
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {more.map((x) => (
              <Reveal key={x.slug} className="flex">
                <CaseStudyCard e={x} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/case-studies" className="btn-outline-dark group">
              All Case Studies
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      <BookCall />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import ExampleCard from "@/components/site/ExampleCard";
import ExampleEngagement from "@/components/site/ExampleEngagement";
import BookCall from "@/components/site/BookCall";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
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
    title: `Example: ${e.title}`,
    description: e.summary,
    path: `/examples/${e.slug}`,
    // These headlines are long; the brand suffix would push them past what
    // a search result shows.
    absoluteTitle: true,
  });
}

export default async function ExamplePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const e = getEngagement((await params).slug);
  if (!e) notFound();

  const industry = getIndustry(e.industrySlug);
  const more = engagements.filter((x) => x.slug !== e.slug).slice(0, 3);

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Examples", path: "/examples" },
          { name: e.title, path: `/examples/${e.slug}` },
        ])}
      />

      {/* Hero */}
      <section className="bg-ink-deep text-white">
        <div className="container-site page-hero pb-16 md:pb-24">
          <div className="max-w-3xl">
            <p className="eyebrow-on-dark">
              Example engagement
              {industry && (
                <>
                  {" · "}
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {industry.name}
                  </Link>
                </>
              )}
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight">
              {e.title}
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl">
              {e.summary}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href={booking.anchor} className="btn-primary btn-lg group">
                {booking.label}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/examples" className="btn-outline-light btn-lg">
                All examples
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The write-up */}
      <section className="bg-tint border-b border-line">
        <div className="container-site py-16 md:py-24">
          <p className="mb-10 md:mb-14 max-w-3xl text-base md:text-lg text-muted-foreground leading-relaxed">
            This is an example of how we would scope a project like this one,
            not a client case study. The numbers are targets worked out from
            the assumptions stated below; after launch we measure what
            actually happened and report it.
          </p>
          <ExampleEngagement e={e} />
        </div>
      </section>

      {/* More examples */}
      <section className="bg-white">
        <div className="container-site py-20 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading title="More examples" />
            <Reveal className="mb-12 md:mb-16">
              <Link href="/examples" className="btn-outline-dark !py-3 !px-6 group">
                All examples
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {more.map((x) => (
              <ExampleCard key={x.slug} e={x} />
            ))}
          </div>
        </div>
      </section>

      <BookCall />
    </main>
  );
}

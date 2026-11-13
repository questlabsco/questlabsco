import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import CTABand from "@/components/site/CTABand";
import Reveal from "@/components/site/Reveal";
import { industries } from "@/lib/data/industries";
import Img from "@/components/site/Img";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "AI Automation by Industry",
  description:
    "AI automation solutions for healthcare, finance, retail, logistics, manufacturing, legal, real estate, and education.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <main>
      <section className="bg-ink-deep text-white">
        <div className="container-site page-hero pb-16 md:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight">
              AI that speaks your industry&apos;s language
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl">
              Generic AI demos are easy; systems that survive your industry&apos;s
              regulations, formats, and edge cases are not. Here&apos;s where
              we&apos;ve done the homework.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-site py-20 md:py-28">
          <SectionHeading title="Where we work" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 2) * 0.08}>
                <Link
                  href={`/industries/${ind.slug}/`}
                  className="group grid grid-cols-1 sm:grid-cols-[200px_1fr] border border-line bg-white hover:border-primary transition-colors h-full"
                >
                  <div className="aspect-[4/3] sm:aspect-auto sm:h-full overflow-hidden bg-tint">
                    <Img
                      src={ind.image}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-6 md:p-7 flex flex-col">
                    <h3 className="text-lg font-bold text-ink group-hover:text-primary transition-colors">
                      {ind.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {ind.summary}
                    </p>
                    <span className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Explore solutions
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Don't see your industry?"
        body="The patterns transfer. If your teams handle documents, messages, or repetitive decisions, there's almost certainly automation worth pricing out. Tell us what you do and we'll give you a straight answer."
      />
    </main>
  );
}

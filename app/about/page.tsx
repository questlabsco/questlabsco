import type { Metadata } from "next";
import SectionHeading from "@/components/site/SectionHeading";
import RecognitionStrip from "@/components/site/RecognitionStrip";
import StatsBar from "@/components/site/StatsBar";
import TestimonialCarousel from "@/components/site/TestimonialCarousel";
import CTABand from "@/components/site/CTABand";
import Reveal from "@/components/site/Reveal";
import { values } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Quest Labs Co. is an AI automation and web engineering team measured by the outcomes it delivers: meet the principles and people behind the work.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-ink-deep text-white">
        <div className="container-site page-hero pb-16 md:pb-24">
          <Reveal className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight">
              Bold enough to promise outcomes. Disciplined enough to deliver
              them.
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl">
              Quest Labs Co. exists because most businesses don&apos;t need
              more AI hype. They need someone to find the work worth
              automating, build the system properly, and stick around to keep
              it running.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <StatsBar />

      {/* Values */}
      <section className="bg-white">
        <div className="container-site py-20 md:py-28">
          <SectionHeading title="Five principles we hire, build, and bill by" />
          <div className="border-t border-line">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 0.04}
                className="grid grid-cols-1 md:grid-cols-[80px_240px_1fr] gap-3 md:gap-8 py-7 md:py-8 border-b border-line"
              >
                <span className="text-2xl font-bold text-tint-strong leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-ink leading-snug">
                  {v.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {v.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="bg-tint border-y border-line">
        <div className="container-site py-20 md:py-24">
          <SectionHeading title="Independent proof, not self-praise" />
          <RecognitionStrip />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white">
        <div className="container-site py-20 md:py-28">
          <SectionHeading title="What working with us is actually like" />
          <div className="max-w-4xl">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      <CTABand
        title="Work with us"
        body="Whether you have a scoped project or a vague suspicion that your team is doing too much by hand, the first conversation costs nothing."
      />
    </main>
  );
}

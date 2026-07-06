import type { Metadata } from "next";
import SectionHeading from "@/components/site/SectionHeading";
import CaseStudyGrid from "@/components/site/CaseStudyGrid";
import TestimonialCarousel from "@/components/site/TestimonialCarousel";
import CTABand from "@/components/site/CTABand";
import Reveal from "@/components/site/Reveal";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected AI automation and web development projects, with the measured results they delivered.",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="bg-ink-deep text-white">
        <div className="container-site page-hero pb-16 md:pb-24">
          <Reveal className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight">
              Work we can point to, results we can measure
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl">
              Every project below shipped to production and is described by
              what it changed for the business, not by the technology buzzwords
              involved.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Testimonials strip */}
      <section className="bg-white border-b border-line">
        <div className="container-site py-16 md:py-20">
          <div className="max-w-4xl">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Filterable grid */}
      <section className="bg-tint">
        <div className="container-site py-20 md:py-28">
          <SectionHeading title="Browse by industry or service" />
          <CaseStudyGrid />
        </div>
      </section>

      <CTABand
        title="Want results like these?"
        body="Tell us which of these projects looks most like your problem, or describe something entirely different. We'll give you an honest read either way."
      />
    </main>
  );
}

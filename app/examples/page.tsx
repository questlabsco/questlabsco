import type { Metadata } from "next";
import ExampleCard from "@/components/site/ExampleCard";
import CTABand from "@/components/site/CTABand";
import Reveal from "@/components/site/Reveal";
import { engagements } from "@/lib/data/engagements";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Example Automation Projects by Industry",
  description:
    "Eight worked examples of AI and workflow automation projects, one per industry: what gets built, how long it takes, and the target each is measured against.",
  path: "/examples",
});

export default function ExamplesPage() {
  return (
    <main>
      <section className="bg-background text-white">
        <div className="container-site page-hero pb-16 md:pb-24">
          <div className="max-w-3xl">
            <h1 className="h-page">
              Example projects, scoped the way we would scope yours
            </h1>
            <p className="lede mt-7 max-w-2xl">
              Eight worked examples, one per industry. Each shows what a
              typical project looks like: the business, what they do by hand
              today, what we build, how long it takes, and the target we
              would measure against.
            </p>
            <p className="mt-4 text-sm text-white/55 leading-relaxed max-w-2xl">
              These are examples, not client case studies. The numbers are
              targets worked out from stated assumptions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-site py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engagements.map((e) => (
              <Reveal key={e.slug} className="flex">
                <ExampleCard e={e} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Have a workflow like one of these?"
        body="Tell us which example looks most like your problem, or describe something entirely different. We'll give you an honest read either way."
      />
    </main>
  );
}

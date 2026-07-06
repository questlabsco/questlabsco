import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import CTABand from "@/components/site/CTABand";
import Reveal from "@/components/site/Reveal";
import { services, serviceGroups } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI consulting, AI agents, generative AI, chatbots, workflow automation, AI integration, web development, and UI/UX design.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Page hero */}
      <section className="bg-ink-deep text-white">
        <div className="container-site page-hero pb-16 md:pb-24">
          <Reveal className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight">
              Everything it takes to put AI to work, under one roof
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl">
              Strategy, engineering, and design from a single team. Start with
              a conversation or an audit; scale to systems your business runs
              on.
            </p>
          </Reveal>
        </div>
      </section>

      {serviceGroups.map((group, gi) => (
        <section
          key={group}
          className={gi % 2 === 0 ? "bg-white" : "bg-tint border-y border-line"}
        >
          <div className="container-site py-20 md:py-24">
            <SectionHeading
              title={group}
              lede={
                group === "AI & Automation"
                  ? "From your first feasibility question to autonomous systems in production."
                  : "Websites and web products designed and engineered by the same team."
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
              {services
                .filter((s) => s.group === group)
                .map((s, i) => (
                  <Reveal key={s.slug} delay={i * 0.05} className="bg-white">
                    <Link
                      href={`/services/${s.slug}/`}
                      className="group flex flex-col h-full p-7 md:p-8 hover:bg-tint transition-colors"
                    >
                      <h3 className="text-lg font-bold text-ink group-hover:text-primary transition-colors">
                        {s.name}
                      </h3>
                      <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                        {s.summary}
                      </p>
                      <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        Learn more
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Reveal>
                ))}
            </div>
          </div>
        </section>
      ))}

      <CTABand
        title="Not sure which service fits?"
        body="Describe the problem instead. We'll tell you what we'd build, what it would cost, and whether it's worth building at all."
      />
    </main>
  );
}

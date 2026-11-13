import type { Metadata } from "next";
import SectionHeading from "@/components/site/SectionHeading";
import RecognitionStrip from "@/components/site/RecognitionStrip";
import StatsBar from "@/components/site/StatsBar";
import BookCall from "@/components/site/BookCall";
import Reveal from "@/components/site/Reveal";
import { siteConfig, values } from "@/lib/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About Quest Labs Co.: AI Automation Agency",
  description:
    "Quest Labs Co. is an AI automation and web development agency with 25+ active clients, measured by the hours and outcomes it delivers.",
  path: "/about",
  absoluteTitle: true,
});

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-background text-white">
        <div className="container-site page-hero pb-16 md:pb-24">
          <div className="max-w-3xl">
            <h1 className="h-page">
              Bold enough to promise outcomes. Disciplined enough to deliver
              them.
            </h1>
            <p className="lede mt-7 max-w-2xl">
              Quest Labs Co. exists because most businesses don&apos;t need
              more AI hype. They need someone to find the work worth
              automating, build the system properly, and stick around to keep
              it running.
            </p>
            {(siteConfig.location || siteConfig.legalName) && (
              <p className="mt-5 text-sm text-white/55">
                {[siteConfig.legalName, siteConfig.location && `Based in ${siteConfig.location}`]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBar />

      {/* Values */}
      <section className="bg-background">
        <div className="container-site py-20 md:py-28">
          <SectionHeading title="Five principles we hire, build, and bill by" />
          <div className="border-t border-line">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 0.04}
                className="grid grid-cols-1 md:grid-cols-[80px_240px_1fr] gap-3 md:gap-8 py-7 md:py-8 border-b border-line"
              >
                <span className="text-2xl font-bold text-white/15 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-foreground leading-snug">
                  {v.title}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {v.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="bg-surface border-y border-line">
        <div className="container-site py-20 md:py-24">
          <SectionHeading title="Proof, not just promises" />
          <RecognitionStrip />
        </div>
      </section>

      <BookCall
        title="Work with us"
        body="Whether you have a scoped project or a vague suspicion that your team is doing too much by hand, the first conversation costs nothing."
      />
    </main>
  );
}

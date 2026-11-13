import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import RecognitionStrip from "@/components/site/RecognitionStrip";
import StatsBar from "@/components/site/StatsBar";
import BookCall from "@/components/site/BookCall";
import Reveal from "@/components/site/Reveal";
import Zigzag from "@/components/site/Zigzag";
import Mascot from "@/components/art/Mascot";
import { Cloud, Sparkle } from "@/components/art/Doodles";
import ValueIcon from "@/components/art/pages/ValueIcons";
import { booking, siteConfig, values } from "@/lib/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About Quest Labs Co.: AI Automation Agency",
  description:
    "Quest Labs Co. is an AI automation and web development agency with 25+ active clients, measured by the hours and outcomes it delivers.",
  path: "/about",
  absoluteTitle: true,
});

// Number badges for the values cycle through the accent colours.
const badgeFills = ["bg-sun", "bg-mint", "bg-brand-sky", "bg-coral", "bg-lilac"];

// Hero (blue) > stats (white) > values (pale) > proof (white) > booking.
export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero text-white">
        <Cloud className="hidden md:block absolute left-[5%] top-14 w-28 animate-drift" />
        <Cloud className="hidden md:block absolute right-[5%] top-24 w-20 animate-drift [animation-delay:-4s]" />
        <Sparkle className="hidden md:block absolute right-[14%] bottom-12 w-8 animate-twinkle" />

        <div className="container-site page-hero relative pb-16 md:pb-24 text-center">
          <div className="mx-auto max-w-3xl">
            <Mascot wave className="mx-auto mb-5 w-16 md:w-20 animate-float" />
            <h1 className="h-page">
              Bold Enough To Promise Outcomes. Disciplined Enough To{" "}
              <span className="hl-blue">Deliver Them.</span>
            </h1>
            <p className="mt-6 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed text-white/90">
              Quest Labs Co. exists because most businesses don&apos;t need
              more AI hype. They need someone to find the work worth
              automating, build the system properly, and stick around to keep
              it running.
            </p>
            {(siteConfig.location || siteConfig.legalName) && (
              <p className="mt-5 text-sm font-semibold text-white/80">
                {[siteConfig.legalName, siteConfig.location && `Based in ${siteConfig.location}`]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            )}
            <div className="mt-9 flex justify-center">
              <Link href={booking.anchor} className="btn-primary btn-lg group">
                {booking.labelLong}
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Zigzag from="hero" to="white" />

      {/* Stats */}
      <StatsBar />
      <Zigzag from="white" to="pale" />

      {/* Values */}
      <section className="bg-surface">
        <div className="container-site py-16 md:py-24">
          <SectionHeading
            title="Five Principles We Hire, Build, And Bill By"
            highlight="Bill By"
            note="Yes, billing too"
            noteSide="right"
          />
          <ol className="flex flex-wrap justify-center gap-6 md:gap-7">
            {values.map((v, i) => (
              <li
                key={v.title}
                className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.2rem)]"
              >
                <Reveal className="h-full">
                  <div className="card-pop flex h-full flex-col p-6 md:p-7">
                    <div className="flex items-center justify-between gap-4">
                      <span
                        aria-hidden="true"
                        className={`grid size-14 place-items-center rounded-full border-[3px] border-ink text-2xl font-extrabold text-ink shadow-pop-sm ${
                          badgeFills[i % badgeFills.length]
                        }`}
                      >
                        {i + 1}
                      </span>
                      <ValueIcon index={i} className="w-12 animate-wiggle" />
                    </div>
                    <h3 className="mt-5 text-xl font-extrabold leading-snug text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-ink/80">{v.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <Zigzag from="pale" to="white" />

      {/* Recognition */}
      <section className="bg-white">
        <div className="container-site py-16 md:py-24">
          <SectionHeading
            title="Proof, Not Just Promises"
            highlight="Not Just Promises"
            lede={
              <>
                Want to see how we work before you commit? Start with a{" "}
                <Link href={booking.anchor} className="text-brand font-bold underline">
                  {booking.offer}
                </Link>
                .
              </>
            }
          />
          <div className="flex justify-center">
            <RecognitionStrip />
          </div>
        </div>
      </section>

      <BookCall
        title="Work With Us"
        body="Whether you have a scoped project or a vague suspicion that your team is doing too much by hand, the first conversation costs nothing."
      />
    </main>
  );
}

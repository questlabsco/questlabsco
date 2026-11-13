import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import RecognitionStrip from "@/components/site/RecognitionStrip";
import StatsBar from "@/components/site/StatsBar";
import BookCall from "@/components/site/BookCall";
import Reveal from "@/components/site/Reveal";
import Zigzag from "@/components/site/Zigzag";
import ClientLogos from "@/components/home/ClientLogos";
import Mascot from "@/components/art/Mascot";
import { Cloud, Sparkle } from "@/components/art/Doodles";
import ValueIcon from "@/components/art/pages/ValueIcons";
import { booking, siteConfig, values } from "@/lib/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About Quest Labs Co.: AI Automation Agency",
  description:
    "Quest Labs Co. is an AI automation and web development agency in Dallas-Fort Worth with 25+ active clients. Here's how we work and who we work with.",
  path: "/about",
  absoluteTitle: true,
});

// Number badges for the values cycle through the accent colours.
const badgeFills = ["bg-sun", "bg-mint", "bg-brand-sky", "bg-coral", "bg-lilac"];

// Hero (blue) > stats (white) > values (pale) > who we work with (white)
// > proof (pale) > booking.
export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero text-white">
        <Cloud className="hidden md:block absolute left-[5%] top-14 w-28 animate-drift" />
        <Cloud className="hidden md:block absolute right-[5%] top-24 w-20 animate-drift [animation-delay:-4s]" />
        <Sparkle className="hidden md:block absolute right-[14%] bottom-12 w-8 animate-twinkle" />
        <Sparkle
          color="#FFFFFF"
          className="hidden md:block absolute left-[16%] bottom-16 w-5 animate-twinkle [animation-delay:-1.5s] [animation-duration:3.1s]"
        />

        <div className="container-site relative pt-8 pb-12 md:pt-10 md:pb-14 text-center">
          <div className="mx-auto max-w-4xl">
            <Mascot wave className="mx-auto mb-4 w-16 md:w-20 animate-float" />
            <h1 className="h-page">
              Straight Answers Up Front. We Own{" "}
              <span className="hl-blue">What We Build.</span>
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-lg leading-relaxed text-white/90">
              Most businesses don&apos;t need more AI hype. They need someone to
              find the work that&apos;s worth automating, build it properly, and
              still pick up the phone six months later.
            </p>
            {(siteConfig.location || siteConfig.legalName) && (
              <p className="mt-3 text-sm font-semibold text-white/80">
                {[siteConfig.legalName, siteConfig.location && `Based in ${siteConfig.location}`]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            )}
            <div className="mt-6 flex justify-center">
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
            title="Five Rules We Hire, Build And Bill By"
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
                      {/* The icons take turns moving; see ValueIcons. */}
                      <ValueIcon index={i} className="w-12" />
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

      {/* Who we work with */}
      <section className="bg-white">
        <div className="container-site py-16 md:py-24">
          <SectionHeading
            title="Who We Work With"
            highlight="Work With"
            lede="Mostly businesses around Dallas-Fort Worth: landscaping, fire protection, dermatology and med spas, mechanical services, real estate and property management."
            note="Our neighbors, mostly"
            noteSide="left"
          />
          <ClientLogos />
          <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-ink/80 md:text-lg">
            If you run something similar, we&apos;ve probably seen a version of
            your messiest workflow already. If you don&apos;t, that&apos;s fine
            too. The problems tend to rhyme.
          </p>
        </div>
      </section>
      <Zigzag from="white" to="pale" />

      {/* Recognition */}
      <section className="bg-surface">
        <div className="container-site py-16 md:py-24">
          <SectionHeading
            title="A Few Things You Can Hold Us To"
            highlight="Hold Us To"
            lede={
              <>
                Want to see how we work before you commit to anything? Start with
                a{" "}
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
        highlight="With Us"
        body="Got a scoped project, or just a hunch your team does too much by hand? Either way, the first call is free and we'll give you a straight answer."
      />
    </main>
  );
}

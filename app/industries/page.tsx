import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import CTABand from "@/components/site/CTABand";
import Reveal from "@/components/site/Reveal";
import Zigzag from "@/components/site/Zigzag";
import Img from "@/components/site/Img";
import Mascot from "@/components/art/Mascot";
import { Cloud, Sparkle } from "@/components/art/Doodles";
import { industries } from "@/lib/data/industries";
import { booking } from "@/lib/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "AI Automation by Industry",
  description:
    "What we automate with AI in healthcare, finance, retail, logistics, manufacturing, legal, real estate and education, with a real case study for each.",
  path: "/industries",
});

// Hub: blue hero > the eight industries (white) > call to action.
export default function IndustriesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero text-white">
        <Cloud className="hidden md:block absolute left-[4%] top-16 w-28 animate-drift" />
        <Cloud className="hidden md:block absolute right-[6%] top-10 w-20 animate-drift [animation-delay:-5s]" />
        <Cloud className="hidden lg:block absolute right-[16%] bottom-10 w-24 animate-drift [animation-delay:-8s]" />
        <Sparkle className="hidden md:block absolute left-[14%] bottom-14 w-8 animate-twinkle" />
        <Sparkle
          color="#FFFFFF"
          className="hidden md:block absolute right-[24%] top-8 w-5 animate-twinkle [animation-delay:-1.3s] [animation-duration:3.1s]"
        />

        <div className="container-site relative pt-8 pb-12 md:pt-10 md:pb-14 text-center">
          <div className="mx-auto max-w-3xl">
            <Mascot className="xl:hidden mx-auto mb-4 w-16 md:w-20 animate-float" />
            <h1 className="h-page">
              AI That Speaks <span className="hl-blue">Your Industry&apos;s Language</span>
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-lg leading-relaxed text-white/90">
              AI demos are easy. Getting something to survive your regulations,
              file formats and odd edge cases is the real work. Here&apos;s where
              we&apos;ve done it.
            </p>
            <div className="mt-6 flex justify-center">
              <Link href={booking.page} className="btn-primary btn-lg group">
                {booking.labelLong}
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
          <Mascot
            wave
            className="hidden xl:block absolute right-8 bottom-6 w-28 animate-float"
          />
        </div>
      </section>
      <Zigzag from="hero" to="white" />

      {/* The eight industries */}
      <section className="bg-white">
        <div className="container-site py-12 md:py-16">
          <SectionHeading
            title="Eight Industries We Know Inside Out"
            highlight="Inside Out"
            lede={
              <>
                Pick yours to see what we usually take off people&apos;s plates
                there. Not on the list? Bring it to a{" "}
                <Link href={booking.page} className="text-brand font-bold underline">
                  {booking.offer}
                </Link>{" "}
                anyway.
              </>
            }
            note="Each one has a real case study"
            noteSide="right"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
            {industries.map((ind) => (
              <Reveal key={ind.slug} className="h-full">
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group card-pop flex h-full flex-col overflow-hidden transition-[transform,box-shadow] duration-150 hover:-translate-y-1 hover:shadow-pop-lg"
                >
                  <div className="aspect-[4/3] overflow-hidden border-b-[3px] border-ink bg-surface">
                    <Img
                      src={ind.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <h3 className="text-lg font-extrabold leading-snug text-ink">
                      {ind.name}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-ink/80">
                      {ind.summary}
                    </p>
                    <span className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-extrabold text-brand">
                      See What We Automate
                      <ArrowRight
                        aria-hidden="true"
                        className="size-4 shrink-0 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Don't See Your Industry?"
        body={`The patterns carry over. If your team spends its day on documents, messages or the same decision made fifty times, there's probably something worth automating. Tell us what you do on a ${booking.offer} and we'll give you a straight answer.`}
      />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CaseStudyCard from "@/components/site/CaseStudyCard";
import CTABand from "@/components/site/CTABand";
import Reveal from "@/components/site/Reveal";
import Mascot from "@/components/art/Mascot";
import { Cloud, Sparkle } from "@/components/art/Doodles";
import { engagements } from "@/lib/data/engagements";
import { booking } from "@/lib/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "AI Automation Case Studies",
  description:
    "Eight client automation projects, one per industry: what we built, how long it took, and the hours it saved.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero text-white">
        <Cloud className="absolute left-[5%] top-14 hidden w-24 animate-drift md:block" />
        <Cloud className="absolute right-[8%] top-24 hidden w-16 animate-drift [animation-delay:-5s] md:block" />
        <Cloud className="absolute bottom-10 left-[14%] hidden w-14 animate-drift [animation-delay:-8s] lg:block" />
        <Sparkle className="absolute right-[22%] top-12 hidden w-7 animate-twinkle md:block" />
        <Sparkle
          color="#FFFFFF"
          className="absolute bottom-12 left-[28%] hidden w-5 animate-twinkle [animation-delay:-1.4s] [animation-duration:3.2s] md:block"
        />
        <Mascot
          mood="wink"
          wave
          className="absolute bottom-4 right-[5%] hidden w-28 animate-float xl:block"
        />

        <div className="container-site relative pt-8 pb-12 text-center md:pt-10 md:pb-14">
          <Mascot mood="wink" className="mx-auto mb-4 w-16 animate-float md:w-20 xl:hidden" />
          <h1 className="h-page mx-auto max-w-4xl">
            Case Studies: <span className="hl-blue">Real Projects</span>, Real Numbers
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
            Eight client projects, one per industry. Each shows what the team was
            doing by hand, what we built, how long it took and what it saved.
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
      </section>

      {/* The eight case studies */}
      <section className="bg-white">
        <div className="container-site py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {engagements.map((e, i) => (
              <Reveal key={e.slug} className="flex">
                <div
                  className={`flex w-full ${
                    i % 2 === 0 ? "lg:-rotate-1" : "lg:rotate-1"
                  }`}
                >
                  <CaseStudyCard e={e} />
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mx-auto mt-14 max-w-2xl text-center text-base leading-relaxed text-ink/80 md:text-lg">
            Spotted a workflow that looks like yours? Bring it to a{" "}
            <Link href={booking.page} className="font-bold text-brand underline">
              {booking.offer}
            </Link>{" "}
            and we&apos;ll tell you whether it&apos;s worth automating.
          </p>
        </div>
      </section>

      <CTABand
        title="Got A Workflow Like One Of These?"
        body={`Tell us which case study sounds most like your week, or describe something else entirely. On the ${booking.offer} (${booking.duration} with the people who'd do the work) we'll tell you what's automatable and whether it's worth it.`}
      />
    </main>
  );
}

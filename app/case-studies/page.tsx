import type { Metadata } from "next";
import Link from "next/link";
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
    "Eight client automation projects, one per industry: what we built, how long it took, and the goal each project was measured against.",
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
        <Mascot
          mood="wink"
          className="absolute bottom-6 right-[5%] hidden w-28 animate-float xl:block"
        />

        <div className="container-site page-hero relative pb-16 text-center md:pb-24">
          <h1 className="h-page mx-auto max-w-4xl">
            Case Studies: <span className="hl-blue">Real Projects</span>, With The
            Numbers Attached
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
            Eight client projects, one per industry. Each one shows the business,
            what the team did by hand, what we built, how long it took, and the
            goal we measure it against.
          </p>
        </div>
      </section>

      {/* The eight case studies */}
      <section className="bg-white">
        <div className="container-site py-16 md:py-24">
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
            and we will tell you what is worth automating.
          </p>
        </div>
      </section>

      <CTABand
        title="Have A Workflow Like One Of These?"
        body={`Tell us which case study looks most like your problem, or describe something else entirely. On the ${booking.offer}, ${booking.duration} with the team that would do the work, we tell you what is automatable and whether it is worth doing.`}
      />
    </main>
  );
}

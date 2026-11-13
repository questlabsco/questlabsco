import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import CTABand from "@/components/site/CTABand";
import Reveal from "@/components/site/Reveal";
import Zigzag from "@/components/site/Zigzag";
import Mascot from "@/components/art/Mascot";
import { Cloud, Sparkle } from "@/components/art/Doodles";
import ServiceIcon from "@/components/art/services/ServiceIcon";
import { services, serviceGroups } from "@/lib/data/services";
import { booking } from "@/lib/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "AI Automation and Web Development Services",
  description:
    "AI consulting, AI agents, generative AI, chatbots, workflow automation, AI integration, web development, and UI/UX design from one team.",
  path: "/services",
});

const groupCopy: Record<
  (typeof serviceGroups)[number],
  { title: string; highlight: string; lede: string; note?: string }
> = {
  "AI & Automation": {
    title: "AI & Automation Services",
    highlight: "AI & Automation",
    lede: "From your first feasibility question to autonomous systems in production.",
    note: "Most clients start here",
  },
  "Web & Design": {
    title: "Web & Design Services",
    highlight: "Web & Design",
    lede: "Websites and web products designed and engineered by the same team.",
  },
};

// Icon tile colours, cycled per card.
const tiles = ["bg-sun-light", "bg-surface", "bg-surface-cream"];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero text-white">
        <Cloud className="pointer-events-none absolute left-[4%] top-10 hidden w-28 animate-drift md:block" />
        <Cloud className="pointer-events-none absolute right-[6%] top-24 hidden w-20 animate-drift opacity-90 md:block [animation-delay:-5s]" />
        <Sparkle className="pointer-events-none absolute left-[14%] bottom-16 hidden w-8 animate-twinkle lg:block" />
        <div className="container-site page-hero relative pb-16 md:pb-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="h-page">
              Everything It Takes to Put AI to Work, <span className="hl-blue">Under One Roof</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
              Strategy, engineering, and design from a single team. Start with a {booking.offer},
              then scale to systems your business runs on.
            </p>
            <div className="mt-9 flex justify-center">
              <Link href={booking.page} className="btn-primary btn-lg group">
                {booking.labelLong}
                <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <Mascot
            wave
            className="pointer-events-none absolute bottom-6 right-[4%] hidden w-24 animate-float lg:block"
          />
        </div>
      </section>

      {serviceGroups.map((group, gi) => {
        const copy = groupCopy[group];
        const tone = gi % 2 === 0 ? "white" : "pale";
        const prev = gi === 0 ? "hero" : gi % 2 === 1 ? "white" : "pale";
        return (
          <div key={group}>
            <Zigzag from={prev} to={tone} />
            <section className={tone === "white" ? "bg-white" : "bg-surface"}>
              <div className="container-site py-16 md:py-24">
                <SectionHeading
                  title={copy.title}
                  highlight={copy.highlight}
                  note={copy.note}
                  lede={
                    <>
                      {copy.lede} Not sure which fits? Start with a{" "}
                      <Link href={booking.page} className="font-bold text-brand underline">
                        {booking.offer}
                      </Link>
                      .
                    </>
                  }
                />
                <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {services
                    .filter((s) => s.group === group)
                    .map((s, i) => (
                      <li key={s.slug}>
                        <Reveal className="h-full">
                          <Link
                            href={`/services/${s.slug}`}
                            className="card-pop group flex h-full flex-col p-6 transition-[transform,box-shadow] duration-150 hover:-translate-y-1 hover:shadow-pop-lg md:p-7"
                          >
                            <span
                              className={`grid size-16 place-items-center rounded-2xl border-[3px] border-ink ${
                                tiles[i % tiles.length]
                              }`}
                            >
                              <ServiceIcon slug={s.slug} className="size-11 transition-transform group-hover:rotate-6" />
                            </span>
                            <h3 className="mt-5 text-xl font-extrabold text-ink">{s.name}</h3>
                            <p className="mt-2 text-base leading-relaxed text-ink/80">{s.summary}</p>
                            <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-extrabold text-brand">
                              Explore {s.name}
                              <ArrowRight
                                aria-hidden="true"
                                className="size-4 transition-transform group-hover:translate-x-1"
                              />
                            </span>
                          </Link>
                        </Reveal>
                      </li>
                    ))}
                </ul>
              </div>
            </section>
          </div>
        );
      })}

      <CTABand
        title="Not Sure Which Service Fits?"
        body={`Describe the problem instead. On a ${booking.durationAdjective} call we'll tell you what is automatable, roughly what it would take, and whether it is worth doing.`}
      />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import CTABand from "@/components/site/CTABand";
import Reveal from "@/components/site/Reveal";
import Zigzag from "@/components/site/Zigzag";
import { Cloud, Sparkle } from "@/components/art/Doodles";
import ServiceIcon from "@/components/art/services/ServiceIcon";
import ServicesHubScene from "@/components/art/services/ServicesHubScene";
import { services, serviceGroups } from "@/lib/data/services";
import { booking } from "@/lib/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "AI Automation and Web Development Services",
  description:
    "AI consulting, AI agents, generative AI, chatbots, workflow automation, AI integration, web development and UI/UX design, all from one Dallas-Fort Worth team.",
  path: "/services",
});

const groupCopy: Record<
  (typeof serviceGroups)[number],
  { title: string; highlight: string; lede: string; note?: string }
> = {
  "AI & Automation": {
    title: "AI & Automation Services",
    highlight: "AI & Automation",
    lede: "Everything from \"is this even possible?\" to agents doing real work in production.",
    note: "Most clients start here",
  },
  "Web & Design": {
    title: "Web & Design Services",
    highlight: "Web & Design",
    lede: "Websites and web apps, designed and built by the same people, so nothing gets lost between the mockup and the code.",
  },
};

// Icon tile colours, cycled per card.
const tiles = ["bg-sun-light", "bg-surface", "bg-surface-cream"];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero: compact, with the art beside the text on desktop and under
          the button on smaller screens, so it shows on the first screen. */}
      <section className="relative overflow-hidden bg-hero text-white">
        <Cloud className="pointer-events-none absolute left-[3%] top-6 hidden w-24 animate-drift md:block" />
        <Cloud className="pointer-events-none absolute right-[44%] bottom-8 hidden w-16 animate-drift opacity-90 lg:block [animation-delay:-5s] [animation-duration:13s]" />
        <Sparkle className="pointer-events-none absolute left-[40%] top-10 hidden w-7 animate-twinkle lg:block [animation-delay:-0.8s]" />
        <div className="container-site relative pb-12 pt-8 md:pb-14 md:pt-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
            <div className="text-center lg:text-left">
              <h1 className="h-page">
                AI, Automation and Web Work, <span className="hl-blue">Under One Roof</span>
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/90 lg:mx-0">
                Strategy, builds and design from the same small team. Not sure which one you need?
                The {booking.offer} sorts that out in {booking.duration}.
              </p>
              <div className="mt-7 flex justify-center lg:justify-start">
                <Link href={booking.page} className="btn-primary btn-lg group">
                  {booking.labelLong}
                  <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <ServicesHubScene className="max-w-[260px] sm:max-w-[320px] lg:max-w-[460px]" />
          </div>
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
                      {copy.lede} Can&apos;t tell which one you need? Take the{" "}
                      <Link href={booking.page} className="font-bold text-brand underline">
                        {booking.offer}
                      </Link>{" "}
                      and we&apos;ll tell you.
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
                              More on {s.name}
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
        body={`Skip the menu and tell us what's eating your week. On a ${booking.durationAdjective} call we'll say what can be automated, roughly what it would take, and whether it's worth doing at all.`}
      />
    </main>
  );
}

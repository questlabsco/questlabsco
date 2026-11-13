import Link from "next/link";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import Img from "@/components/site/Img";
import { Sparkle } from "@/components/art/Doodles";
import { getEngagement, type Engagement } from "@/lib/data/engagements";
import { getIndustry } from "@/lib/data/industries";
import { booking } from "@/lib/data/site";

// Homepage: three case studies as taped-up polaroids. White section. The
// full list follows straight after as a table (CaseStudyGrid), which also
// carries the "all case studies" link, so this section ends tight.
const featured = [
  "med-spa-front-desk",
  "freight-delivery-paperwork",
  "bookkeeping-document-collection",
];

// Alternating tilt for the polaroid cards; each straightens and lifts on hover.
const tilts = ["-rotate-2", "rotate-[1.5deg]", "-rotate-1"];
const tapes = ["bg-sun", "bg-mint", "bg-coral"];
// Each card floats on its own slow loop, out of step with its neighbours.
const floats = ["0s", "-2.2s", "-4.1s"];
const sparkles = [
  { color: "#FFCB2E", place: "-right-3 top-10" },
  { color: "#B9A7FF", place: "-left-3 top-1/2" },
  { color: "#35D6A0", place: "-right-2 bottom-24" },
];

export default function CaseStudiesSection() {
  const items = featured
    .map((slug) => getEngagement(slug))
    .filter((e): e is Engagement => Boolean(e));

  return (
    <section className="bg-white pb-10 pt-16 md:pb-14 md:pt-24">
      <style>{`
        @keyframes cases-tape {
          0%, 100% { transform: translateX(-50%) rotate(-4deg); }
          50% { transform: translateX(-50%) rotate(3deg); }
        }
        @keyframes cases-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
      <div className="container-site">
        <SectionHeading
          title="Real Projects, With The Numbers Written Down"
          highlight="The Numbers Written Down"
          note="One for each industry we work in"
          noteSide="right"
          lede={
            <>
              Here are three. There&apos;s one for each of the eight industries we work in, and on your{" "}
              <a href={booking.anchor} className="font-bold text-brand underline">
                {booking.offer}
              </a>{" "}
              we&apos;ll walk you through whichever looks most like your business.
            </>
          }
        />

        <ul className="grid gap-12 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-8">
          {items.map((e, i) => {
            const industry = getIndustry(e.industrySlug);
            const sp = sparkles[i % sparkles.length];
            return (
              <li
                key={e.slug}
                className={i === 2 ? "sm:col-span-2 sm:mx-auto sm:w-1/2 lg:col-span-1 lg:w-auto" : undefined}
              >
                <div
                  className="relative h-full"
                  style={{ animation: `cases-float 6.5s ease-in-out ${floats[i % floats.length]} infinite` }}
                >
                  <Sparkle
                    color={sp.color}
                    className={`pointer-events-none absolute z-20 hidden w-7 animate-twinkle md:block ${sp.place}`}
                  />
                  <Reveal className="h-full">
                    <Link
                      href={`/case-studies/${e.slug}`}
                      className={`group relative flex h-full flex-col rounded-2xl border-[3px] border-ink bg-white p-3 pb-5 shadow-pop-lg transition-transform duration-300 ease-out hover:-translate-y-2 hover:rotate-0 focus-visible:rotate-0 ${tilts[i % tilts.length]}`}
                    >
                      {/* strip of tape holding the polaroid */}
                      <span
                        aria-hidden="true"
                        className={`absolute -top-3 left-1/2 z-10 h-6 w-20 rounded-sm border-[3px] border-ink ${tapes[i % tapes.length]} opacity-90`}
                        style={{
                          transform: "translateX(-50%) rotate(-4deg)",
                          animation: `cases-tape 5s ease-in-out ${i * -1.6}s infinite`,
                        }}
                      />
                      <div className="aspect-[4/3] overflow-hidden rounded-lg border-[3px] border-ink bg-surface">
                        <Img
                          src={e.image}
                          alt=""
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="flex flex-1 flex-col px-2 pt-5">
                        {industry && (
                          <span className="pill self-start !px-3 !py-1 !text-xs">{industry.name}</span>
                        )}
                        <h3 className="mt-3 text-lg font-extrabold leading-snug text-ink group-hover:underline md:text-xl">
                          {e.title}
                        </h3>

                        <div className="mt-auto pt-5">
                          {/* The measured result, in its own block so it always shows. */}
                          <div className="rounded-xl border-[3px] border-ink bg-surface-cream px-4 py-3">
                            <span className="inline-block rounded-md bg-ink px-2 py-0.5 text-xs font-extrabold uppercase tracking-[0.12em] text-white">
                              Result
                            </span>
                            <p className="mt-1.5 flex flex-wrap items-baseline gap-x-2">
                              <span className="text-3xl font-extrabold leading-tight text-ink md:text-4xl">
                                {e.target.value}
                              </span>
                              <span className="text-sm font-semibold text-ink/80">{e.target.label}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

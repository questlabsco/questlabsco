import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import Mascot from "@/components/art/Mascot";
import { Sparkle } from "@/components/art/Doodles";
import { engagements } from "@/lib/data/engagements";
import { getIndustry } from "@/lib/data/industries";
import { booking } from "@/lib/data/site";

// Homepage: all eight case studies as a chunky comparison table. Each row
// is its own outlined bar with a hard shadow and links to the case study;
// the header is a sky-blue bar. On phones every row becomes a stacked card
// with its own labels. Sits on white, right after the polaroid cards.
//
// Column widths are shared by the header and the rows.
const cols = "md:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)_minmax(0,1.5fr)_minmax(0,0.8fr)_2rem]";

const headers = ["Industry", "What We Automated", "The Goal", "Timeline"];

export default function CaseStudyGrid() {
  return (
    <section className="bg-white pb-16 pt-6 md:pb-24 md:pt-10">
      <style>{`
        @keyframes grid-peek {
          0%, 100% { transform: translateY(0) rotate(8deg); }
          50% { transform: translateY(-6px) rotate(4deg); }
        }
      `}</style>
      <div className="container-site">
        <SectionHeading
          title="Every Case Study, Side By Side"
          highlight="Side By Side"
          lede={
            <>
              Find your industry and see what we automated, plus what it&apos;s aiming for. If one looks
              familiar, bring it up on your{" "}
              <Link href={booking.anchor} className="font-bold text-brand underline">
                {booking.offer}
              </Link>
              .
            </>
          }
        />

        <Reveal className="relative mx-auto max-w-5xl">
          {/* Questy leaning on the corner of the table, and a sparkle or two
              (desktop only, decorative). */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -top-24 hidden w-20 lg:block"
            style={{ animation: "grid-peek 5.5s ease-in-out infinite" }}
          >
            <Mascot mood="happy" className="w-full" />
          </div>
          <Sparkle className="pointer-events-none absolute -left-6 -top-5 hidden w-7 animate-twinkle lg:block" />
          <Sparkle
            color="#FF7B7B"
            className="pointer-events-none absolute -bottom-6 -left-3 hidden w-5 animate-twinkle [animation-delay:-1.2s] [animation-duration:3.4s] lg:block"
          />

          {/* Header bar (desktop). The rows carry their own labels for
              phones and screen readers, so this one is visual only. */}
          <div
            aria-hidden="true"
            className={`hidden items-center gap-6 rounded-2xl border-[3px] border-ink bg-brand-sky px-6 py-4 text-sm font-extrabold uppercase tracking-[0.08em] text-ink shadow-pop md:grid ${cols}`}
          >
            {headers.map((h) => (
              <span key={h}>{h}</span>
            ))}
            <span />
          </div>

          <ul className="space-y-5 md:mt-4 md:space-y-4">
            {engagements.map((e) => {
              const industry = getIndustry(e.industrySlug);
              return (
                <li key={e.slug}>
                  <Link
                    href={`/case-studies/${e.slug}`}
                    className={`group grid gap-4 rounded-2xl border-[3px] border-ink bg-white p-5 shadow-pop transition-[transform,box-shadow] duration-150 hover:-translate-y-1 hover:shadow-pop-lg active:translate-x-[3px] active:translate-y-[3px] active:shadow-pop-sm md:items-center md:gap-6 md:px-6 md:py-4 ${cols}`}
                  >
                    <div>
                      <span className="block text-xs font-extrabold uppercase tracking-[0.1em] text-brand md:sr-only">
                        Industry
                      </span>
                      <span className="mt-1 inline-block rounded-full border-2 border-ink bg-sun-light px-3 py-0.5 text-sm font-extrabold text-ink md:mt-0">
                        {industry?.name ?? e.business}
                      </span>
                    </div>

                    <div>
                      <span className="block text-xs font-extrabold uppercase tracking-[0.1em] text-brand md:sr-only">
                        What we automated
                      </span>
                      <h3 className="mt-1 text-base font-extrabold leading-snug text-ink group-hover:underline md:mt-0">
                        {e.title}
                      </h3>
                    </div>

                    <div className="rounded-xl border-2 border-ink/15 bg-surface-cream px-3 py-2 md:border-0 md:bg-transparent md:p-0">
                      <span className="block text-xs font-extrabold uppercase tracking-[0.1em] text-brand md:sr-only">
                        Goal
                      </span>
                      <p className="mt-0.5 leading-snug md:mt-0">
                        <span className="text-lg font-extrabold text-ink">{e.target.value}</span>{" "}
                        <span className="text-sm font-semibold text-ink/75">{e.target.label}</span>
                      </p>
                    </div>

                    <div className="flex items-end justify-between gap-3 md:block">
                      <div>
                        <span className="block text-xs font-extrabold uppercase tracking-[0.1em] text-brand md:sr-only">
                          Timeline
                        </span>
                        <span className="mt-1 block whitespace-nowrap font-extrabold text-ink md:mt-0">
                          {e.timeline}
                        </span>
                      </div>
                      <ArrowRight
                        aria-hidden="true"
                        className="h-5 w-5 shrink-0 text-brand transition-transform duration-150 group-hover:translate-x-1 md:hidden"
                        strokeWidth={3}
                      />
                    </div>

                    <ArrowRight
                      aria-hidden="true"
                      className="hidden h-5 w-5 text-brand transition-transform duration-150 group-hover:translate-x-1 md:block"
                      strokeWidth={3}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <div className="mt-12 flex justify-center">
          <Link href="/case-studies" className="btn-outline-dark">
            Read All Eight Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}

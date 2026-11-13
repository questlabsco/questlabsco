import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import Mascot from "@/components/art/Mascot";
import { Sparkle } from "@/components/art/Doodles";
import {
  AuditClipboard,
  IconNumbers,
  IconQuickWins,
  IconTimeSinks,
  IconTools,
  IconWorkflows,
} from "@/components/art/steps/StepArt";
import { booking } from "@/lib/data/site";

const panels = [
  {
    title: "Your Workflows",
    body: "Where your team's hours really go, one step at a time.",
    Icon: IconWorkflows,
  },
  {
    title: "Your Tools",
    body: "The stuff you already pay for that could be pulling more weight.",
    Icon: IconTools,
  },
  {
    title: "Time Sinks",
    body: "The boring, repetitive work we'd hand to software first.",
    Icon: IconTimeSinks,
  },
  {
    title: "Quick Wins",
    body: "Fixes that don't need a big build. Sometimes a better spreadsheet is the answer.",
    Icon: IconQuickWins,
  },
  {
    title: "The Numbers",
    body: "A rough idea of the scope and what it would take to build.",
    Icon: IconNumbers,
  },
];

// Start x of each arrow (in a 1000-wide box) matches the centre of each of
// the five panel columns; all five land on the clipboard, which sits a
// little right of centre because Questy stands to its left.
const arrows = [
  { from: 100, to: 515 },
  { from: 300, to: 545 },
  { from: 500, to: 575 },
  { from: 700, to: 605 },
  { from: 900, to: 635 },
];

export default function AuditOffer() {
  return (
    <section className="bg-white py-16 md:py-24">
      <style>{`
        @keyframes audit-sway {
          0%, 100% { transform: rotate(-1.5deg) translateY(0); }
          50% { transform: rotate(1.5deg) translateY(-4px); }
        }
        .audit-sway { animation: audit-sway 6s ease-in-out infinite; transform-origin: 50% 100%; }
      `}</style>
      <div className="container-site">
        <SectionHeading
          title="What We Look At In Your Free Audit"
          highlight="Free Audit"
          note="Reason #3: it costs you nothing"
          noteSide="right"
          lede={`It starts with a 60-second quiz so we know what your business does. Then we spend ${booking.duration} on a call going through these five things with you, and tell you straight what's worth automating and what isn't.`}
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {panels.map((p, i) => (
            <li
              key={p.title}
              className={i === 4 ? "sm:col-span-2 sm:mx-auto sm:w-1/2 lg:col-span-1 lg:w-auto" : undefined}
            >
              <Reveal className="h-full">
                <div className="group card-pop h-full p-5 transition-transform duration-200 hover:-translate-y-1">
                  <span className="inline-block group-hover:animate-wiggle">
                    <p.Icon className="block size-12" />
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold text-ink underline decoration-sun decoration-[5px] underline-offset-[5px]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/80">{p.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* Dashed arrows from the five panels down to the clipboard (desktop). */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1000 120"
          preserveAspectRatio="none"
          className="mt-4 hidden h-28 w-full lg:block"
          fill="none"
        >
          {arrows.map((a) => (
            <g key={a.from} stroke="#1B1D4E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.75">
              <path
                d={`M${a.from} 6C${a.from} 64 ${a.to} 50 ${a.to} 106`}
                strokeDasharray="2 12"
                vectorEffect="non-scaling-stroke"
                className="animate-march"
              />
              <path d={`M${a.to - 8} 98l8 10 8-10`} vectorEffect="non-scaling-stroke" />
            </g>
          ))}
        </svg>

        {/* Questy with the audit clipboard. */}
        <div className="mt-12 flex items-end justify-center gap-2 sm:gap-4 lg:mt-2">
          <Mascot mood="wow" className="w-24 shrink-0 animate-float sm:w-32 md:w-36" />
          <div className="relative">
            <div className="audit-sway">
              <AuditClipboard className="w-44 -rotate-3 sm:w-52 md:w-56" />
            </div>
            <Sparkle
              color="#B9A7FF"
              className="absolute -bottom-1 -right-6 hidden w-5 animate-twinkle [animation-delay:-0.5s] [animation-duration:3.1s] sm:block"
            />
            <Sparkle
              className="absolute -right-4 -top-2 hidden w-8 animate-twinkle sm:block"
            />
            <Sparkle
              color="#35D6A0"
              className="absolute -left-2 top-1/3 hidden w-6 animate-twinkle [animation-delay:-1s] sm:block"
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <a href={booking.anchor} className="btn-primary btn-lg">
            {booking.labelLong}
          </a>
          <p className="text-sm font-semibold text-ink/70">
            {/* One string: the compiler drops the space after an expression
                when the text that follows contains an entity like &apos;. */}
            {`A 60-second quiz first, then ${booking.duration} with the people who'd do the work.`}
          </p>
        </div>
      </div>
    </section>
  );
}

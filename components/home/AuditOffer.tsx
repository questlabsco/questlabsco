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
    body: "Where your team's hours actually go, step by step.",
    Icon: IconWorkflows,
  },
  {
    title: "Your Tools",
    body: "What you already pay for that could be doing more.",
    Icon: IconTools,
  },
  {
    title: "Time Sinks",
    body: "The repetitive work worth automating first.",
    Icon: IconTimeSinks,
  },
  {
    title: "Quick Wins",
    body: "What can be fixed without a big build.",
    Icon: IconQuickWins,
  },
  {
    title: "The Numbers",
    body: "A rough scope and what it would take.",
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
      <div className="container-site">
        <SectionHeading
          title="What's In Your Free Automation Audit"
          highlight="Free Automation Audit"
          lede="On one short call we look at five things with you, then tell you straight which parts of your work are worth automating and which aren't."
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {panels.map((p, i) => (
            <li
              key={p.title}
              className={i === 4 ? "sm:col-span-2 sm:mx-auto sm:w-1/2 lg:col-span-1 lg:w-auto" : undefined}
            >
              <Reveal className="h-full">
                <div className="group card-pop h-full p-5 transition-transform duration-200 hover:-translate-y-1">
                  <p.Icon className="size-12 group-hover:animate-wiggle" />
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
            <AuditClipboard className="w-44 sm:w-52 md:w-56 -rotate-3" />
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
            {booking.duration}, with the team that would do the work.
          </p>
        </div>
      </div>
    </section>
  );
}

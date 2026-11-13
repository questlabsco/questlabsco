import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import { Sparkle } from "@/components/art/Doodles";
import { CalendarArt, RoadmapArt, RocketArt } from "@/components/art/steps/StepArt";
import { booking } from "@/lib/data/site";

const steps = [
  {
    title: "Get Your Free Audit",
    badge: "bg-sun",
    bob: "0s",
    Art: CalendarArt,
    lines: [
      `Answer a few quick questions, then hop on a ${booking.durationAdjective} call with the people who'd build it.`,
      "Tell us which job eats your week. We'll say what software can take off your plate, and what isn't worth the trouble.",
    ],
  },
  {
    title: "Get A Priced Roadmap",
    badge: "bg-mint",
    bob: "-1.2s",
    Art: RoadmapArt,
    lines: [
      "Before anyone writes code, you get a written plan with a price and an expected return on every item.",
      "Then you decide, with the numbers in front of you.",
    ],
  },
  {
    title: "Go Live In 4–8 Weeks",
    badge: "bg-coral",
    bob: "-2.4s",
    Art: RocketArt,
    lines: [
      "We build it on your real data, with a person checking anything that matters.",
      "It's tested, documented, and it's yours to keep.",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <style>{`
        @keyframes how-badge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
      <div className="container-site">
        <SectionHeading
          title="From “Can This Be Automated?” To Live In Three Steps"
          highlight="Three Steps"
          note="Reason #2: you see the price first"
          lede="No mystery invoices. You see the plan and what it costs before we build a thing."
        />

        <div className="relative">
          {/* Dashed connector between the number badges (desktop only).
              Runs from the centre of the first column to the centre of the
              last; the badges sit on top of it. */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-[26px] hidden h-3 w-[66.66%] md:block"
            fill="none"
          >
            <line
              x1="0"
              y1="6"
              x2="100%"
              y2="6"
              stroke="#1B1D4E"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="10 4"
              className="animate-march"
              opacity="0.7"
            />
          </svg>

          <Sparkle className="pointer-events-none absolute -top-6 left-[6%] hidden w-7 animate-twinkle md:block" />
          <Sparkle
            color="#B9A7FF"
            className="pointer-events-none absolute -top-2 right-[5%] hidden w-5 animate-twinkle [animation-delay:-1.5s] [animation-duration:3.3s] md:block"
          />

          <ol className="relative grid gap-14 md:grid-cols-3 md:gap-10">
            {steps.map((s, i) => (
              <li key={s.title}>
                <Reveal className="flex flex-col items-center text-center">
                  <span
                    className={`relative z-10 flex size-16 items-center justify-center rounded-full border-[3px] border-ink ${s.badge} text-2xl font-extrabold text-ink shadow-pop-sm`}
                    style={{ animation: `how-badge 3.6s ease-in-out ${s.bob} infinite` }}
                  >
                    <span className="sr-only">Step </span>
                    {i + 1}
                  </span>
                  <s.Art className="mt-6 w-44 md:w-48" />
                  <h3 className="mt-5 text-xl font-extrabold text-ink md:text-2xl">
                    {s.title}
                  </h3>
                  <div className="mt-3 max-w-xs space-y-2 text-base leading-relaxed text-ink/80">
                    {s.lines.map((l) => (
                      <p key={l}>{l}</p>
                    ))}
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 flex justify-center">
          <a href={booking.anchor} className="btn-primary btn-lg">
            {booking.labelLong}
          </a>
        </div>
      </div>
    </section>
  );
}

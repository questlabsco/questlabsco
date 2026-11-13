import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import { CalendarArt, RoadmapArt, RocketArt } from "@/components/art/steps/StepArt";
import { booking } from "@/lib/data/site";

const steps = [
  {
    title: "Get Your Free Audit",
    badge: "bg-sun",
    Art: CalendarArt,
    lines: [
      `${booking.duration} with the team that would do the work.`,
      "You describe the workflow that eats your week. We tell you what's automatable and what isn't worth doing.",
    ],
  },
  {
    title: "Get A Priced Roadmap",
    badge: "bg-mint",
    Art: RoadmapArt,
    lines: [
      "A written plan before a line of code, with the cost and the expected return on every item.",
      "You decide on the numbers.",
    ],
  },
  {
    title: "Go Live In 4–8 Weeks",
    badge: "bg-coral",
    Art: RocketArt,
    lines: [
      "A working build on your real data, with human review built in.",
      "Documented, tested, and yours.",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="container-site">
        <SectionHeading
          title="From Free Audit To Live System In Three Steps"
          highlight="Three Steps"
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

          <ol className="relative grid gap-14 md:grid-cols-3 md:gap-10">
            {steps.map((s, i) => (
              <li key={s.title}>
                <Reveal className="flex flex-col items-center text-center">
                  <span
                    className={`relative z-10 flex size-16 items-center justify-center rounded-full border-[3px] border-ink ${s.badge} text-2xl font-extrabold text-ink shadow-pop-sm`}
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

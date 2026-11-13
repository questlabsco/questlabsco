import { process } from "@/lib/data/process";
import Reveal from "./Reveal";

// Badge colours, cycled per step.
const badges = ["bg-sun", "bg-mint", "bg-coral", "bg-lilac", "bg-brand-sky", "bg-sun"];

// The shared six-step delivery process: six sticker cards with big number
// badges sitting on their top edge. On desktop (three per row) a dashed,
// marching line runs through the gaps between neighbouring badges.
export default function ProcessSteps() {
  return (
    <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-12 gap-y-12 pt-7">
      {process.map((p, i) => (
        <li key={p.step} className="relative">
          {/* connector to the next card in the same desktop row */}
          {i % 3 !== 2 && i < process.length - 1 && (
            <svg
              aria-hidden="true"
              viewBox="0 0 48 8"
              preserveAspectRatio="none"
              fill="none"
              className="hidden lg:block absolute left-full top-0 h-2 w-12 -translate-y-1/2"
            >
              <path
                d="M2 4h44"
                stroke="#1B1D4E"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="2 8"
                className="animate-march"
              />
            </svg>
          )}
          <Reveal className="card-pop relative h-full px-6 pb-7 pt-12 md:px-7">
            <span
              aria-hidden="true"
              className={`absolute -top-7 left-6 grid size-14 place-items-center rounded-2xl border-[3px] border-ink text-2xl font-extrabold text-ink shadow-pop-sm ${
                badges[i % badges.length]
              }`}
            >
              {Number(p.step)}
            </span>
            <h3 className="text-lg font-extrabold text-ink">
              <span className="sr-only">Step {Number(p.step)}: </span>
              {p.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-ink/80">{p.body}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

import { Timer, Wrench } from "lucide-react";
import Reveal from "./Reveal";
import type { Engagement } from "@/lib/data/engagements";
import { CheckBadge } from "@/components/art/Doodles";
import { BeforeAfter, BullseyeFace } from "@/components/art/cases/CaseArt";

// Body of a case-study page: a sticky scorecard (goal, timeline, tools) on
// the left, the write-up as a stack of numbered panels on the right. The
// number is always labelled "Goal" and paired with how it is measured; it
// is never presented as an achieved result.
export default function CaseStudyBody({ e }: { e: Engagement }) {
  return (
    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[320px_1fr] lg:gap-12">
      {/* Scorecard */}
      <aside className="card-pop-lg relative lg:sticky lg:top-28">
        <BullseyeFace className="absolute -right-4 -top-10 w-20 animate-float md:w-24" />
        <div className="rounded-t-[13px] border-b-[3px] border-ink bg-sun px-6 py-3.5">
          <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-ink">
            Project Scorecard
          </p>
        </div>

        <div className="px-6 pb-6 pt-6">
          <p className="inline-flex rounded-md border-2 border-ink bg-mint px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink">
            Goal
          </p>
          <p className="mt-3 text-4xl font-extrabold leading-none text-ink">
            {e.target.value}
          </p>
          <p className="mt-2 text-base leading-snug text-ink/80">{e.target.label}</p>
        </div>

        <div className="mx-6 border-t-2 border-dashed border-line" />

        <div className="px-6 py-5">
          <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-muted-foreground">
            <Timer aria-hidden="true" className="size-4 text-brand" />
            Timeline
          </p>
          <p className="mt-2 text-xl font-extrabold text-ink">{e.timeline}</p>
        </div>

        <div className="mx-6 border-t-2 border-dashed border-line" />

        <div className="px-6 pb-7 pt-5">
          <p className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-muted-foreground">
            <Wrench aria-hidden="true" className="size-4 text-brand" />
            Tools
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {e.tools.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* The write-up */}
      <div className="min-w-0 space-y-6 md:space-y-8">
        <Block n={1} color="bg-sun" title="The Business">
          <p>{e.business}</p>
        </Block>
        <Block n={2} color="bg-coral" title="Before">
          <p>{e.before}</p>
        </Block>

        <Reveal className="hidden sm:block">
          <div className="mx-auto max-w-md px-4">
            <BeforeAfter className="w-full" />
            <div className="mt-1 flex justify-between px-[6%] font-hand text-xl text-ink">
              <span>before</span>
              <span>after</span>
            </div>
          </div>
        </Reveal>

        <Block n={3} color="bg-mint" title="What We Built">
          {e.build.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Block>
        <Block n={4} color="bg-brand-sky" title={`Timeline: ${e.timeline}`}>
          <p>{e.timelineDetail}</p>
        </Block>
        <Block n={5} color="bg-lilac" title="The Goal, And How We Measure It">
          <p>
            <span className="font-extrabold text-ink">
              Goal: {e.target.value} {e.target.label}.
            </span>{" "}
            {e.measurement}
          </p>
        </Block>
        <Block n={6} color="bg-sun" title="What We Check With The Team">
          <ul className="space-y-3">
            {e.feedback.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <CheckBadge className="mt-0.5 w-7 shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Block>
      </div>
    </div>
  );
}

function Block({
  n,
  color,
  title,
  children,
}: {
  n: number;
  color: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="card-pop p-6 md:p-8">
      <div className="flex items-center gap-3.5">
        <span
          aria-hidden="true"
          className={`grid size-10 shrink-0 place-items-center rounded-full border-[3px] border-ink text-base font-extrabold text-ink shadow-pop-sm ${color}`}
        >
          {n}
        </span>
        <h2 className="text-xl font-extrabold leading-snug text-ink md:text-2xl">{title}</h2>
      </div>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-ink/80 md:text-[17px]">
        {children}
      </div>
    </Reveal>
  );
}

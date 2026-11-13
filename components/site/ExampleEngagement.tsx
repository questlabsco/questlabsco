import Reveal from "./Reveal";
import type { Engagement } from "@/lib/data/engagements";

// Body of an example-engagement page: the target, timeline and tools on the
// left, the write-up on the right. The "Target" label and the measurement
// block make clear this is a scope, not a finished client result.
export default function ExampleEngagement({ e }: { e: Engagement }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-16 items-start">
      {/* Target, timeline, tools */}
      <div className="lg:sticky lg:top-32 bg-white border border-line">
        <div className="p-7 border-b border-line">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Target
          </p>
          <p className="mt-4 text-4xl md:text-[2.6rem] font-black leading-none text-ink">
            {e.target.value}
          </p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            {e.target.label}
          </p>
        </div>
        <div className="p-7 border-b border-line">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Timeline
          </p>
          <p className="mt-3 text-xl font-bold text-ink">{e.timeline}</p>
        </div>
        <div className="p-7">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Tools
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {e.tools.map((t) => (
              <li
                key={t}
                className="border border-line bg-tint px-3 py-1.5 text-sm font-medium text-ink"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* The write-up */}
      <div className="max-w-3xl border-t border-line">
        <Block title="The business">
          <p>{e.business}</p>
        </Block>
        <Block title="Before">
          <p>{e.before}</p>
        </Block>
        <Block title="What we build">
          {e.build.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Block>
        <Block title={`Timeline: ${e.timeline}`}>
          <p>{e.timelineDetail}</p>
        </Block>
        <Block title="The target, and how we measure it">
          <p>{e.measurement}</p>
        </Block>
        <Block title="What we check with the team after launch">
          <ul className="space-y-2">
            {e.feedback.map((f) => (
              <li key={f} className="pl-5 border-l-2 border-primary/30">
                {f}
              </li>
            ))}
          </ul>
        </Block>
      </div>
    </div>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-8 py-7 md:py-8 border-b border-line">
      <h2 className="text-base font-bold text-ink leading-snug">{title}</h2>
      <div className="space-y-4 text-sm md:text-base text-ink/80 leading-relaxed">
        {children}
      </div>
    </Reveal>
  );
}

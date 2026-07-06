import { process } from "@/lib/data/process";
import Reveal from "./Reveal";

export default function ProcessSteps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
      {process.map((p, i) => (
        <Reveal key={p.step} delay={i * 0.06} className="bg-white p-7 md:p-8">
          <span className="text-4xl font-bold text-tint-strong leading-none">
            {p.step}
          </span>
          <h3 className="mt-4 text-lg font-bold text-ink">{p.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {p.body}
          </p>
        </Reveal>
      ))}
    </div>
  );
}

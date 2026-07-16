import { stats } from "@/lib/data/site";
import Reveal from "./Reveal";

export default function StatsBar() {
  return (
    <section className="bg-ink text-white">
      <div className="container-site py-14 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line-dark border border-line-dark">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="bg-ink p-6 md:p-8">
              <p className="text-3xl md:text-4xl font-bold text-white">
                {s.value}
                <span className="text-accent">{s.suffix}</span>
              </p>
              <p className="mt-2 text-xs md:text-sm text-white/50 leading-relaxed">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

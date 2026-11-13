import { teamStats } from "@/lib/data/site";
import Reveal from "./Reveal";

// Four chunky stat cards with a slight alternating tilt. Each card takes an
// accent fill; the text stays navy so it reads on every colour.
const looks = [
  { fill: "bg-sun-light", tilt: "-rotate-[1.5deg]" },
  { fill: "bg-brand-sky", tilt: "rotate-[1.5deg]" },
  { fill: "bg-mint/40", tilt: "-rotate-1" },
  { fill: "bg-lilac/50", tilt: "rotate-1" },
];

export default function StatsBar() {
  return (
    <section className="bg-white">
      <div className="container-site py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamStats.map((s, i) => {
            const look = looks[i % looks.length];
            return (
              <Reveal key={s.label} className="h-full">
                <div
                  className={`card-pop h-full p-6 md:p-7 transition-transform duration-200 hover:rotate-0 hover:-translate-y-1 ${look.fill} ${look.tilt}`}
                >
                  <p className="text-4xl md:text-5xl font-extrabold leading-none tracking-tight text-ink">
                    {s.value}
                    <span className="text-2xl md:text-3xl">{s.suffix}</span>
                  </p>
                  <p className="mt-4 text-sm md:text-base font-semibold leading-snug text-ink/80">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

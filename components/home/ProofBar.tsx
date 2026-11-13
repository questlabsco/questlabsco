import { stats } from "@/lib/data/site";
import { engagements } from "@/lib/data/engagements";
import Reveal from "@/components/site/Reveal";
import { FacesDoodle, ClockDoodle, StarDoodle, CalendarDoodle } from "@/components/art/proof/StatDoodles";

// Homepage: the proof right under the hero. Four stat cards, then the tools
// we build on as a sideways marquee. White section.

// One look per stat, in the order of `stats` in lib/data/site.ts.
const looks = [
  { Doodle: FacesDoodle, strip: "bg-mint", tilt: "-rotate-1" },
  { Doodle: ClockDoodle, strip: "bg-sun", tilt: "rotate-1" },
  { Doodle: StarDoodle, strip: "bg-coral", tilt: "-rotate-1" },
  { Doodle: CalendarDoodle, strip: "bg-lilac", tilt: "rotate-1" },
];

// Every tool named in a case study, once each.
const tools = Array.from(new Set(engagements.flatMap((e) => e.tools)));

function ToolList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0" aria-hidden={hidden || undefined}>
      {tools.map((t) => (
        <li key={t} className="mr-3">
          <span className="chip whitespace-nowrap">{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProofBar() {
  return (
    <section className="bg-white py-14 md:py-20">
      <style>{`
        @keyframes proof-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @keyframes proof-tick {
          to { transform: rotate(360deg); }
        }
        @keyframes proof-pop {
          0%, 20% { transform: scale(0); }
          32% { transform: scale(1.15); }
          40%, 85% { transform: scale(1); }
          100% { transform: scale(0); }
        }
        .proof-bob { animation: proof-bob 2.4s ease-in-out infinite; }
        .proof-tick { animation: proof-tick 6s linear infinite; }
        .proof-pop { animation: proof-pop 4s ease-out infinite; }
      `}</style>

      <div className="container-site">
        <Reveal>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {stats.map((s, i) => {
              const { Doodle, strip, tilt } = looks[i % looks.length];
              return (
                <li
                  key={s.label}
                  className={`card-pop relative overflow-hidden px-6 pb-6 pt-8 transition-transform duration-200 hover:rotate-0 ${tilt}`}
                >
                  <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-3 border-b-[3px] border-ink ${strip}`} />
                  <Doodle className="absolute bottom-3 right-3 h-11 w-11" />
                  <p className="whitespace-nowrap text-4xl font-extrabold leading-none tracking-tight text-ink sm:text-5xl lg:text-4xl xl:text-[2.75rem]">
                    {s.value}
                    <span className="text-brand">{s.suffix}</span>
                  </p>
                  <p className="mt-3 pr-12 text-sm font-semibold leading-snug text-ink/75 md:text-base">{s.label}</p>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <div className="mt-14 md:mt-16">
          <h2 className="h-section text-center text-2xl text-ink md:text-3xl">
            We Build On The Tools <span className="hl-sun">You Already Use</span>
          </h2>
          <div className="relative mt-7 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <div className="flex w-max animate-marquee py-1 hover:[animation-play-state:paused]">
              <ToolList />
              <ToolList hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

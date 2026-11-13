import { stats } from "@/lib/data/site";
import Reveal from "@/components/site/Reveal";
import ToolLogos from "@/components/site/ToolLogos";
import { Sparkle } from "@/components/art/Doodles";
import { FacesDoodle, ClockDoodle, StarDoodle, CalendarDoodle } from "@/components/art/proof/StatDoodles";

// Homepage: the proof right under the hero. Four stat cards, then the tools
// we build on (logo strip from components/site/ToolLogos). White section.

// One look per stat, in the order of `stats` in lib/data/site.ts.
const looks = [
  { Doodle: FacesDoodle, strip: "bg-mint", tilt: "-rotate-1" },
  { Doodle: ClockDoodle, strip: "bg-sun", tilt: "rotate-1" },
  { Doodle: StarDoodle, strip: "bg-coral", tilt: "-rotate-1" },
  { Doodle: CalendarDoodle, strip: "bg-lilac", tilt: "rotate-1" },
];

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
          <div className="relative mx-auto max-w-2xl text-center">
            <Sparkle
              className="pointer-events-none absolute -left-2 -top-4 hidden w-7 animate-twinkle md:block"
            />
            <Sparkle
              color="#FF7B7B"
              className="pointer-events-none absolute -right-1 top-6 hidden w-5 animate-twinkle [animation-delay:-1.4s] [animation-duration:3.2s] md:block"
            />
            <h2 className="h-section text-2xl text-ink md:text-3xl">
              We Build On The Tools <span className="hl-sun">You Already Use</span>
            </h2>
            <p className="mt-3 text-base text-ink/80">
              Most of the time we wire up what you&apos;ve already got, instead of selling you one more login.
            </p>
          </div>
          <div className="mt-7">
            <ToolLogos />
          </div>
        </div>
      </div>
    </section>
  );
}

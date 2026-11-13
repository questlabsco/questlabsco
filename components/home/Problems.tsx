import Link from "next/link";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import { booking } from "@/lib/data/site";
import { CopyDataArt, ChasingDocsArt, SameQuestionArt } from "@/components/art/proof/ProblemArt";

// Homepage: the manual work visitors will recognise, and the turn to the
// free audit. Pale section.
const problems = [
  {
    title: "Copying Data Between Tools",
    lines: ["The same order, typed into three systems.", "One typo and the numbers stop matching."],
    Art: CopyDataArt,
    tilt: "md:-rotate-1",
  },
  {
    title: "Chasing Documents",
    lines: ["Emailing clients for the form they forgot.", "Then emailing again next week."],
    Art: ChasingDocsArt,
    tilt: "md:rotate-1",
  },
  {
    title: "Answering The Same Question Again",
    lines: ["Where is my order? Are you open Sunday?", "Your best people answer it all day long."],
    Art: SameQuestionArt,
    tilt: "md:-rotate-1",
  },
];

export default function Problems() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <style>{`
        @keyframes prob-hop {
          0%, 8% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
          14% { transform: translate(0, -8px) rotate(-4deg); }
          40% { transform: translate(85px, -70px) rotate(12deg); }
          62%, 86% { transform: translate(170px, 0) rotate(0deg); opacity: 1; }
          94% { transform: translate(170px, 0); opacity: 0; }
          95% { transform: translate(0, 0); opacity: 0; }
          100% { transform: translate(0, 0); opacity: 1; }
        }
        @keyframes prob-sweep {
          0%, 100% { transform: translateX(-85px) rotate(-6deg); }
          50% { transform: translateX(85px) rotate(6deg); }
        }
        @keyframes prob-wobble {
          0%, 100% { transform: rotate(-8deg); }
          50% { transform: rotate(8deg); }
        }
        @keyframes prob-bubble {
          0% { transform: scale(0.2); opacity: 0; }
          7% { transform: scale(1.08); opacity: 1; }
          11%, 82% { transform: scale(1); opacity: 1; }
          92%, 100% { transform: scale(0.9); opacity: 0; }
        }
        @keyframes prob-drip {
          0%, 40% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          90% { transform: translateY(10px); opacity: 1; }
          100% { transform: translateY(14px); opacity: 0; }
        }
        .prob-hop { animation: prob-hop 4.2s ease-in-out infinite; }
        .prob-sweep {
          animation: prob-sweep 5s ease-in-out infinite;
          transform-box: view-box;
          transform-origin: 160px 100px;
        }
        .prob-wobble { animation: prob-wobble 1.6s ease-in-out infinite; }
        .prob-bubble { animation: prob-bubble 6s ease-out infinite backwards; }
        .prob-drip { animation: prob-drip 3s ease-in infinite; }
      `}</style>

      <div className="container-site">
        <SectionHeading
          title="Is Your Team Still Doing This By Hand?"
          highlight="By Hand"
          note="Be honest"
          lede={
            <>
              Copying, chasing and repeating yourself is work software should be doing. In your{" "}
              <Link href={booking.anchor} className="font-bold text-brand underline">
                {booking.offer}
              </Link>
              , we will show you which of it can go.
            </>
          }
        />

        <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {problems.map(({ title, lines, Art, tilt }) => (
            <Reveal key={title}>
              <article
                className={`card-pop-lg h-full overflow-hidden transition-transform duration-200 hover:rotate-0 ${tilt}`}
              >
                <div className="border-b-[3px] border-ink bg-surface-cream p-3">
                  <Art className="block aspect-[16/10] w-full" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-extrabold leading-snug text-ink">{title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-ink/80">
                    {lines[0]}
                    <br />
                    {lines[1]}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-col items-center text-center">
          <p className="text-xl font-extrabold text-ink md:text-2xl">
            Software can do all three. <span className="hl-sun">We build the software.</span>
          </p>
          <Link href={booking.anchor} className="btn-primary btn-lg mt-7">
            {booking.labelLong}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

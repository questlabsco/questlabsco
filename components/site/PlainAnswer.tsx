import Mascot from "@/components/art/Mascot";

// A plain definition right under the hero: the question as a heading and a
// short answer that makes sense when quoted on its own. Written for people
// who landed from a search, and for AI search tools that lift whole passages.
export default function PlainAnswer({
  answer,
  className = "",
}: {
  answer?: { q: string; a: string[] };
  className?: string;
}) {
  if (!answer) return null;
  return (
    <section
      aria-labelledby="plain-answer-heading"
      className={`reveal relative mx-auto max-w-4xl ${className}`}
    >
      <style>{`
        @keyframes plainanswer-bob {
          0%, 100% { transform: translateY(0) rotate(-4deg); }
          50% { transform: translateY(-6px) rotate(3deg); }
        }
        .plainanswer-bob { animation: plainanswer-bob 4.5s ease-in-out infinite; }
      `}</style>
      <div className="card-pop relative overflow-hidden">
        <div aria-hidden="true" className="h-4 border-b-[3px] border-ink bg-sun" />
        <div className="p-6 md:p-8 md:pr-36">
          <p className="eyebrow">The Short Answer</p>
          <h2 id="plain-answer-heading" className="mt-2 text-xl font-extrabold leading-snug text-ink md:text-2xl">
            {answer.q}
          </h2>
          {answer.a.map((para) => (
            <p key={para.slice(0, 32)} className="mt-3 text-base leading-relaxed text-ink/85 md:text-lg">
              {para}
            </p>
          ))}
        </div>
        <Mascot
          mood="happy"
          className="plainanswer-bob pointer-events-none absolute bottom-5 right-6 hidden w-24 md:block"
        />
      </div>
    </section>
  );
}

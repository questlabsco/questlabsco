import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import AuditQuiz from "@/components/quiz/AuditQuiz";
import { Sparkle } from "@/components/art/Doodles";
import BlueSky from "@/components/art/offer/BlueSky";
import HighlightTitle from "@/components/art/offer/HighlightTitle";
import { booking, siteConfig } from "@/lib/data/site";

const onTheCall = [
  "You tell us about the work that eats the most of your team's week.",
  "We tell you what's automatable, and what isn't worth the bother.",
  "You leave with a rough idea of what it would take, and can decide from there.",
];

const proof = [
  { value: "25+", label: "active clients" },
  { value: "10,000s", label: "of hours saved" },
  { value: "4.9 / 5", label: "client rating" },
];

// The booking section that closes most pages. It sits at #book so any
// "Get Your Free Audit" button on the same page scrolls straight to it.
// It opens the audit quiz; the quiz ends on the calendar.
export default function BookCall({
  title = "Get Your Free Automation Audit",
  highlight = "Free Automation Audit",
  body = `Seven quick questions, then pick a time. ${booking.duration} with the team that would do the work, and a straight answer.`,
}: {
  title?: string;
  // Phrase of `title` set in the highlight block.
  highlight?: string;
  body?: string;
}) {
  return (
    <section
      id="book"
      aria-labelledby="book-title"
      className="relative overflow-hidden bg-hero text-white"
    >
      <BlueSky dense />
      <div className="container-site relative py-16 md:py-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="pill">Free · {booking.duration}</p>
          <h2 id="book-title" className="h-page mt-5 text-white">
            <HighlightTitle title={title} highlight={highlight} />
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
            {body}
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:mt-10 lg:grid-cols-[4fr_7fr] lg:gap-12">
          {/* The quiz comes first on phones: it's the thing to do here. */}
          <div className="min-w-0 lg:order-2">
            <AuditQuiz headingLevel={3} />
          </div>

          <div className="lg:order-1 lg:pt-28">
            <h3 className="text-lg font-extrabold text-white">What happens on the call</h3>
            <ol className="mt-4 space-y-3">
              {onTheCall.map((line, i) => (
                <li key={line} className="card-pop flex items-center gap-4 p-4 text-ink">
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full border-[3px] border-ink bg-sun text-lg font-extrabold shadow-pop-sm"
                  >
                    {i + 1}
                  </span>
                  <span className="text-base font-semibold leading-snug">{line}</span>
                </li>
              ))}
            </ol>

            <ul className="mt-6 grid grid-cols-3 gap-3">
              {proof.map((s) => (
                <li
                  key={s.label}
                  className="rounded-xl border-[3px] border-ink bg-white px-2 py-3 text-center text-ink shadow-pop-sm"
                >
                  <span className="block text-lg font-extrabold leading-tight sm:text-xl">{s.value}</span>
                  <span className="mt-1 block text-xs font-semibold leading-tight text-ink/75">
                    {s.label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="relative mt-7 space-y-2 text-base leading-relaxed text-white/90">
              <Sparkle className="absolute -right-1 -top-3 hidden w-6 animate-twinkle [animation-delay:-0.8s] lg:block" />
              <p>
                Rather just pick a time?{" "}
                <Link
                  href={booking.calendarPage}
                  className="inline-flex min-h-[44px] items-center gap-1 font-bold text-white underline underline-offset-4 hover:text-sun-light"
                >
                  Go to the calendar
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </p>
              <p>
                Or email{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-words font-bold text-white underline underline-offset-4 hover:text-sun-light"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

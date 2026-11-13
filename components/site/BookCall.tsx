import Link from "next/link";
import CalendlyEmbed from "./CalendlyEmbed";
import Reveal from "./Reveal";
import { booking, siteConfig } from "@/lib/data/site";

const onTheCall = [
  "You describe the workflow that eats the most of your team's time.",
  "We tell you what is automatable, and what isn't worth doing.",
  "You leave with a rough scope and the numbers to decide on.",
];

// The booking section that closes every main page. It sits at #book so any
// "Book a free call" button on the same page scrolls straight to it.
export default function BookCall({
  title = "Book a free call",
  body = `${booking.duration} with the team that would do the work. We'll map your workflows, show you what's automatable, and attach real numbers. No sales pitch.`,
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section
      id="book"
      aria-labelledby="book-title"
      className="bg-ink text-white border-t border-line-dark"
    >
      <div className="container-site py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <h2
                id="book-title"
                className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-[1.1] text-white"
              >
                {title}
              </h2>
              <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed">
                {body}
              </p>
            </Reveal>

            <ol className="mt-9 border-t border-line-dark">
              {onTheCall.map((line, i) => (
                <li
                  key={line}
                  className="grid grid-cols-[44px_1fr] gap-3 py-4 border-b border-line-dark"
                >
                  <span className="text-lg font-bold leading-snug text-white/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm md:text-base text-white/85 leading-relaxed">
                    {line}
                  </span>
                </li>
              ))}
            </ol>

            <p className="mt-7 text-sm text-white/60 leading-relaxed">
              25+ active clients. Tens of thousands of hours of manual work
              saved. 4.9 / 5 average client rating.
            </p>

            <p className="mt-5 text-sm text-white/60 leading-relaxed">
              Rather write it down?{" "}
              <Link
                href="/contact#message"
                className="font-semibold text-accent hover:text-white transition-colors"
              >
                Send us a message
              </Link>{" "}
              or email{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-accent hover:text-white transition-colors"
              >
                {siteConfig.email}
              </a>
              . We reply within one business day.
            </p>
          </div>

          <div className="bg-white">
            <CalendlyEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}

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
  title = "Book a free call.",
  body = `${booking.duration} with the team that would do the work. No sales pitch.`,
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section
      id="book"
      aria-labelledby="book-title"
      className="relative border-t border-line overflow-hidden"
    >
      <div className="hero-glow absolute inset-0 pointer-events-none opacity-70" aria-hidden="true" />
      <div className="container-site relative py-24 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="label-mono">Free · {booking.duration}</p>
              <h2 id="book-title" className="h-page mt-5 text-white">
                {title}
              </h2>
              <p className="lede mt-6">{body}</p>
            </Reveal>

            <ol className="mt-10 border-t border-line">
              {onTheCall.map((line, i) => (
                <li
                  key={line}
                  className="grid grid-cols-[44px_1fr] gap-3 py-5 border-b border-line"
                >
                  <span className="font-mono text-sm leading-7 text-white/35">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base md:text-lg text-white/80 leading-relaxed">
                    {line}
                  </span>
                </li>
              ))}
            </ol>

            <p className="mt-8 text-base text-white/50 leading-relaxed">
              Rather write it down?{" "}
              <Link
                href="/contact#message"
                className="font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white transition-colors"
              >
                Send us a message
              </Link>{" "}
              or email{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white transition-colors"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </div>

          <div className="border border-line bg-surface">
            <CalendlyEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}

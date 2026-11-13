import Link from "next/link";
import CalendlyEmbed from "./CalendlyEmbed";
import Reveal from "./Reveal";
import Mascot from "@/components/art/Mascot";
import { Sparkle } from "@/components/art/Doodles";
import BlueSky from "@/components/art/offer/BlueSky";
import HighlightTitle from "@/components/art/offer/HighlightTitle";
import { booking, siteConfig } from "@/lib/data/site";

const onTheCall = [
  "You describe the workflow that eats the most of your team's time.",
  "We tell you what is automatable, and what isn't worth doing.",
  "You leave with a rough scope and the numbers to decide on.",
];

const proof = [
  { value: "25+", label: "active clients" },
  { value: "10,000s", label: "of hours saved" },
  { value: "4.9 / 5", label: "client rating" },
];

// The booking section that closes most pages. It sits at #book so any
// "Get Your Free Audit" button on the same page scrolls straight to it.
export default function BookCall({
  title = "Get Your Free Automation Audit",
  highlight = "Free Automation Audit",
  body = `${booking.duration} with the team that would do the work. No sales pitch, just a straight answer.`,
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
      <div className="container-site relative py-16 md:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="pill">Free · {booking.duration}</p>
          <h2 id="book-title" className="h-page mt-5 text-white">
            <HighlightTitle title={title} highlight={highlight} />
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
            {body}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-[5fr_6fr] lg:gap-14">
          <div>
            <h3 className="text-lg font-extrabold text-white">What happens on the call</h3>
            <ol className="mt-4 space-y-4">
              {onTheCall.map((line, i) => (
                <li key={line} className="card-pop flex items-center gap-4 p-4 text-ink md:p-5">
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full border-[3px] border-ink bg-sun text-lg font-extrabold shadow-pop-sm"
                  >
                    {i + 1}
                  </span>
                  <span className="text-base font-semibold leading-snug md:text-lg">{line}</span>
                </li>
              ))}
            </ol>

            <ul className="mt-8 grid grid-cols-3 gap-3">
              {proof.map((s) => (
                <li
                  key={s.label}
                  className="rounded-xl border-[3px] border-ink bg-white px-2 py-3 text-center text-ink shadow-pop-sm"
                >
                  <span className="block text-lg font-extrabold leading-tight sm:text-2xl">{s.value}</span>
                  <span className="mt-1 block text-xs font-semibold leading-tight text-ink/75 sm:text-sm">
                    {s.label}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-base leading-relaxed text-white/90">
              Rather write it down?{" "}
              <Link
                href="/contact#message"
                className="font-bold text-white underline underline-offset-4 hover:text-sun-light"
              >
                Send us a message
              </Link>{" "}
              or email{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="break-words font-bold text-white underline underline-offset-4 hover:text-sun-light"
              >
                {siteConfig.email}
              </a>
              .
            </p>

            <div aria-hidden="true" className="relative mt-10 hidden w-32 lg:block">
              <div className="animate-float">
                <Mascot mood="happy" wave className="w-full" />
              </div>
              <Sparkle className="absolute -right-6 top-2 w-7 animate-twinkle" />
            </div>
          </div>

          <div className="card-pop-lg overflow-hidden text-ink">
            <CalendlyEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import Mascot from "@/components/art/Mascot";
import BlueSky from "@/components/art/offer/BlueSky";
import HighlightTitle from "@/components/art/offer/HighlightTitle";
import { booking } from "@/lib/data/site";

// Compact call-to-action band for pages that don't carry the full booking
// section (the hubs).
export default function CTABand({
  title = "Find Out What's Worth Automating",
  highlight,
  body = `A free ${booking.durationAdjective} call with the people who'd actually do the work. We'll tell you what can be automated, and whether it's worth paying for.`,
}: {
  title?: string;
  // Phrase of `title` set in the highlight block (defaults to the last words).
  highlight?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-hero text-white">
      <BlueSky />
      <div className="container-site relative py-16 md:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div aria-hidden="true" className="mx-auto w-20 animate-float md:w-24">
            <Mascot wave mood="happy" className="w-full" />
          </div>
          <h2 className="h-page mt-5 text-white">
            <HighlightTitle title={title} highlight={highlight} />
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
            {body}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href={booking.page} className="btn-primary btn-lg group w-full sm:w-auto">
              {booking.labelLong}
              <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/case-studies" className="btn-outline-dark btn-lg w-full sm:w-auto">
              See Case Studies
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

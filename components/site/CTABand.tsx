import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { booking } from "@/lib/data/site";

// Compact call-to-action band for pages that don't carry the full booking
// section (the hubs).
export default function CTABand({
  title = "Find out what's worth automating.",
  body = `Book a free ${booking.durationAdjective} call. We'll come back with an honest read on feasibility, approach, and cost.`,
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative border-t border-line overflow-hidden">
      <div className="hero-glow absolute inset-0 pointer-events-none opacity-70" aria-hidden="true" />
      <div className="container-site relative py-24 md:py-36">
        <Reveal className="max-w-3xl">
          <h2 className="h-page text-white">{title}</h2>
          <p className="lede mt-6 max-w-2xl">{body}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href={booking.page} className="btn-primary btn-lg group">
              {booking.label}
              <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/examples" className="btn-outline-light btn-lg">
              See example projects
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { booking } from "@/lib/data/site";

// Compact call-to-action band for pages that don't carry the full booking
// section (the hubs and legal-adjacent pages).
export default function CTABand({
  title = "Find out what's worth automating",
  body = `Book a free ${booking.durationAdjective} call. We'll come back with an honest read on feasibility, approach, and cost.`,
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-ink text-white border-t border-line-dark">
      <div className="container-site py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-[1.1] text-white">
            {title}
          </h2>
          <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed">
            {body}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
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

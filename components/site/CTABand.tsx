import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTABand({
  title = "Have a project in mind?",
  body = "Tell us what you're trying to achieve. We'll come back within one business day with an honest read on feasibility, approach, and cost.",
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
            <Link href="/contact/" className="btn-primary group">
              Let&apos;s talk
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/case-studies/" className="btn-outline-light">
              View our work
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

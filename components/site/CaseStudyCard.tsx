import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/data/case-studies";

export default function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${cs.slug}/`}
      className="group flex flex-col border border-line bg-white hover:border-primary transition-colors"
    >
      <div className="aspect-[16/10] overflow-hidden bg-tint">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cs.image}
          alt={cs.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col flex-1 p-6 md:p-7">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-primary border border-primary/30 px-2.5 py-1">
            {cs.industry}
          </span>
          {cs.services.slice(0, 2).map((s) => (
            <span
              key={s}
              className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground border border-line px-2.5 py-1"
            >
              {s}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold text-ink leading-snug group-hover:text-primary transition-colors">
          {cs.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {cs.summary}
        </p>
        <span className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Read case study
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

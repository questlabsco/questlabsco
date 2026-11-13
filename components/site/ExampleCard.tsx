import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Engagement } from "@/lib/data/engagements";
import { getIndustry } from "@/lib/data/industries";
import Img from "./Img";

// Card for an example engagement. Always carries the "Example" label so it
// is never mistaken for a finished client case study.
export default function ExampleCard({ e }: { e: Engagement }) {
  const industry = getIndustry(e.industrySlug);
  return (
    <Link
      href={`/examples/${e.slug}`}
      className="group flex flex-col border border-line bg-white hover:border-primary transition-colors"
    >
      <div className="aspect-[16/10] overflow-hidden bg-tint">
        <Img
          src={e.image}
          alt=""
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col flex-1 p-6 md:p-7">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white bg-primary px-2.5 py-1">
            Example
          </span>
          {industry && (
            <span className="text-[11px] font-semibold uppercase tracking-wider text-primary border border-primary/30 px-2.5 py-1">
              {industry.name}
            </span>
          )}
        </div>
        <h3 className="text-lg font-bold text-ink leading-snug group-hover:text-primary transition-colors">
          {e.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {e.summary}
        </p>
        <p className="mt-5 pt-5 border-t border-line text-sm text-ink">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Target{" "}
          </span>
          <span className="font-bold">{e.target.value}</span> {e.target.label}
        </p>
        <span className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Read the example
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

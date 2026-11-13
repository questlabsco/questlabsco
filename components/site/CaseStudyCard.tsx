import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Engagement } from "@/lib/data/engagements";
import { getIndustry } from "@/lib/data/industries";
import Img from "./Img";

// "Polaroid" card for a case study: photo in a white frame, industry pill,
// title, summary and the goal the project is measured against. The whole
// card is one link and presses into its shadow on hover.
export default function CaseStudyCard({ e }: { e: Engagement }) {
  const industry = getIndustry(e.industrySlug);
  return (
    <Link
      href={`/case-studies/${e.slug}`}
      className="group flex h-full w-full flex-col rounded-2xl border-[3px] border-ink bg-white p-3 shadow-pop transition-[transform,box-shadow] duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-pop-sm"
    >
      <div className="aspect-[16/10] overflow-hidden rounded-lg border-[3px] border-ink bg-surface">
        <Img
          src={e.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
        {industry && (
          <span className="pill self-start !px-3 !py-1 text-xs">{industry.name}</span>
        )}
        <h3 className="mt-4 text-lg font-extrabold leading-snug text-ink">{e.title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-ink/75">{e.summary}</p>

        <p className="mt-5 rounded-lg border-2 border-ink bg-sun-light px-3.5 py-2.5 text-sm leading-snug text-ink">
          <span className="mr-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em]">
            Goal
          </span>
          <span className="text-lg font-extrabold">{e.target.value}</span>{" "}
          {e.target.label}
        </p>

        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-extrabold text-brand">
          See How We Built It
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}

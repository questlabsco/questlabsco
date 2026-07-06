"use client";

import { useMemo, useState } from "react";
import {
  caseStudies,
  caseStudyIndustries,
  caseStudyServices,
} from "@/lib/data/case-studies";
import CaseStudyCard from "./CaseStudyCard";

const ALL = "All";

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-line bg-white px-4 py-3 text-sm font-medium text-ink normal-case tracking-normal focus:outline-none focus:border-primary min-w-[200px]"
      >
        <option value={ALL}>All</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function CaseStudyGrid() {
  const [industry, setIndustry] = useState(ALL);
  const [service, setService] = useState(ALL);

  const filtered = useMemo(
    () =>
      caseStudies.filter(
        (c) =>
          (industry === ALL || c.industry === industry) &&
          (service === ALL || c.services.includes(service))
      ),
    [industry, service]
  );

  return (
    <div>
      <div className="flex flex-wrap items-end gap-4 mb-4">
        <FilterSelect
          label="Industry"
          value={industry}
          options={caseStudyIndustries}
          onChange={setIndustry}
        />
        <FilterSelect
          label="Service"
          value={service}
          options={caseStudyServices}
          onChange={setService}
        />
        {(industry !== ALL || service !== ALL) && (
          <button
            onClick={() => {
              setIndustry(ALL);
              setService(ALL);
            }}
            className="text-sm font-semibold text-primary hover:text-primary-hover pb-3"
          >
            Clear filters
          </button>
        )}
      </div>

      <p className="text-sm text-muted-foreground mb-8">
        {filtered.length} {filtered.length === 1 ? "case" : "cases"} found
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((cs) => (
          <CaseStudyCard key={cs.slug} cs={cs} />
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { techTabs } from "@/lib/data/techstack";

export default function TechStackTabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="border border-line">
      <div className="flex flex-wrap border-b border-line">
        {techTabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActive(i)}
            className={`px-5 py-4 text-sm font-semibold transition-colors border-b-2 -mb-px ${
              active === i
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-ink"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-7 md:p-9">
        <ul className="flex flex-wrap gap-3">
          {techTabs[active].items.map((item) => (
            <li
              key={item}
              className="border border-line bg-tint px-4 py-2 text-sm font-medium text-ink"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

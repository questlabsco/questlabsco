"use client";

import { useState } from "react";
import { techTabs } from "@/lib/data/techstack";

// Tabs for the tech stack. Every panel is in the HTML; inactive ones carry
// the `hidden` attribute, so crawlers (and no-JS visitors, who see the
// first tab) still get the full list in the source.
export default function TechStackTabs() {
  const [active, setActive] = useState(0);

  function onKey(e: React.KeyboardEvent<HTMLButtonElement>, i: number) {
    const n = techTabs.length;
    let next = -1;
    if (e.key === "ArrowRight") next = (i + 1) % n;
    else if (e.key === "ArrowLeft") next = (i - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    if (next < 0) return;
    e.preventDefault();
    setActive(next);
    document.getElementById(`tech-tab-${next}`)?.focus();
  }

  return (
    <div>
      <div role="tablist" aria-label="Technology categories" className="flex flex-wrap justify-center gap-3">
        {techTabs.map((tab, i) => {
          const selected = active === i;
          return (
            <button
              key={tab.label}
              id={`tech-tab-${i}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`tech-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
              className={`pill min-h-11 transition-[transform,background-color] ${
                selected ? "bg-sun" : "hover:bg-sun-light hover:-translate-y-0.5"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="card-pop mx-auto mt-8 max-w-4xl p-6 md:p-8">
        {techTabs.map((tab, i) => (
          <div
            key={tab.label}
            id={`tech-panel-${i}`}
            role="tabpanel"
            aria-labelledby={`tech-tab-${i}`}
            hidden={active !== i}
          >
            <ul className="flex flex-wrap justify-center gap-3">
              {tab.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

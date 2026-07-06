"use client";

import { useEffect, useRef, useState } from "react";

export type TocSection = { id: string; label: string };

export default function CaseStudyToc({ sections }: { sections: TocSection[] }) {
  const [active, setActive] = useState(sections[0]?.id);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY + 160;
        let current = sections[0]?.id;
        for (const s of sections) {
          const el = document.getElementById(s.id);
          if (el && el.offsetTop <= y) current = s.id;
        }
        setActive(current);
        ticking.current = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  return (
    <nav className="hidden lg:block">
      <ul className="space-y-0.5 border-l border-line">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`block pl-5 -ml-px py-2 text-sm border-l-2 transition-colors ${
                active === s.id
                  ? "border-primary text-primary font-semibold"
                  : "border-transparent text-muted-foreground hover:text-ink"
              }`}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

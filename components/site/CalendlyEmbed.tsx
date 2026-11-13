"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarDays } from "lucide-react";
import { siteConfig } from "@/lib/data/site";

const WIDGET_SRC = "https://assets.calendly.com/assets/external/widget.js";
// Colours to suit the white card-pop panel it sits in.
const EMBED_URL = `${siteConfig.calendlyUrl}?background_color=ffffff&text_color=1b1d4e&primary_color=3b4cff`;

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement;
        prefill?: { name?: string; email?: string };
      }) => void;
    };
  }
}

// Inline Calendly calendar. The third-party script only loads once the
// booking section is near the viewport, so it never slows the first paint.
// Until then (and with JavaScript off) a plain link to the calendar shows.
// `prefill` fills in the name and email on Calendly's booking form (the
// audit quiz passes what the visitor just typed).
export default function CalendlyEmbed({
  prefill,
}: {
  prefill?: { name?: string; email?: string };
} = {}) {
  const holder = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = holder.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "700px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!near) return;
    const init = () => {
      const el = holder.current;
      if (!el || !window.Calendly || el.querySelector("iframe")) return;
      const fill = {
        ...(prefill?.name ? { name: prefill.name } : {}),
        ...(prefill?.email ? { email: prefill.email } : {}),
      };
      window.Calendly.initInlineWidget({
        url: EMBED_URL,
        parentElement: el,
        ...(Object.keys(fill).length > 0 ? { prefill: fill } : {}),
      });
      setReady(true);
    };
    if (window.Calendly) {
      init();
      return;
    }
    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${WIDGET_SRC}"]`
    );
    if (!script) {
      script = document.createElement("script");
      script.src = WIDGET_SRC;
      script.async = true;
      document.head.appendChild(script);
    }
    script.addEventListener("load", init);
    return () => script?.removeEventListener("load", init);
    // The calendar is built once; a later prefill change doesn't rebuild it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [near]);

  return (
    <div className="relative bg-white text-ink min-h-[680px]">
      {!ready && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-8 text-center">
          <span className="flex size-16 items-center justify-center rounded-full border-[3px] border-ink bg-sun shadow-pop-sm">
            <CalendarDays aria-hidden="true" className="size-7 text-ink" strokeWidth={2.5} />
          </span>
          <p className="text-lg font-extrabold text-ink">Loading the calendar…</p>
          <a
            href={siteConfig.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Open the calendar in a new tab
          </a>
        </div>
      )}
      <div ref={holder} className="relative h-[680px] min-w-[280px]" />
    </div>
  );
}

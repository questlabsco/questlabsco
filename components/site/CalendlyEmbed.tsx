"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarDays } from "lucide-react";
import { siteConfig } from "@/lib/data/site";

const WIDGET_SRC = "https://assets.calendly.com/assets/external/widget.js";
// Dark colours so the calendar sits on the page instead of in a white box.
const EMBED_URL = `${siteConfig.calendlyUrl}?background_color=0e0e11&text_color=f2f2f3&primary_color=8fa2ff`;

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

// Inline Calendly calendar. The third-party script only loads once the
// booking section is near the viewport, so it never slows the first paint.
// Until then (and with JavaScript off) a plain link to the calendar shows.
export default function CalendlyEmbed() {
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
      window.Calendly.initInlineWidget({ url: EMBED_URL, parentElement: el });
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
  }, [near]);

  return (
    <div className="relative bg-background text-foreground min-h-[680px]">
      {!ready && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-8 text-center">
          <CalendarDays aria-hidden="true" className="size-10 text-primary" />
          <p className="text-base font-semibold text-foreground">
            Loading the calendar…
          </p>
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

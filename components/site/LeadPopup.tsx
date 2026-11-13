"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, X } from "lucide-react";
import Mascot from "@/components/art/Mascot";
import { Sparkle } from "@/components/art/Doodles";
import FreeBadge from "@/components/art/offer/FreeBadge";
import Chip from "@/components/quiz/Chip";
import { PAINS_PARAM, painOptions, savePains } from "@/components/quiz/questions";
import { booking } from "@/lib/data/site";

// Pop-up that opens the free audit quiz. It asks question 1 right here
// ("What's eating your team's time?"), then sends the visitor to
// /free-audit with their picks carried over (saved to sessionStorage, and
// also in the link as ?pains=... in case storage is blocked). The quiz
// picks them up and starts at question 2.
//
// Shows once per visitor, on whichever comes first:
//   - desktop exit intent (pointer leaves through the top) after 8s,
//   - scrolling past 55% of the page,
//   - 45s on the page.
// Never in the first 6s, never on /contact, /free-audit or /watch, never
// while the #book section is on screen, and not again for 14 days once it
// has been shown. Renders nothing until a trigger fires, so it has no
// effect on first paint or on crawlers.

const STORAGE_KEY = "ql-audit-popup";
const QUIET_DAYS = 14;
const MIN_MS = 6_000;
const EXIT_MIN_MS = 8_000;
const TIMER_MS = 45_000;
const SCROLL_RATIO = 0.55;
const EXCLUDED = ["/contact", "/watch", booking.page];

function recentlySeen(): boolean {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const at = Number(raw);
    return Number.isFinite(at) && Date.now() - at < QUIET_DAYS * 86_400_000;
  } catch {
    return false;
  }
}

function remember() {
  try {
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    // Storage blocked: the in-memory flag still stops repeats this visit.
  }
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])';

export default function LeadPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [picks, setPicks] = useState<string[]>([]);
  const shownRef = useRef(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstChipRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const titleId = useId();

  // Triggers
  useEffect(() => {
    if (shownRef.current) return;
    if (EXCLUDED.some((p) => pathname === p || pathname?.startsWith(`${p}/`))) return;
    if (recentlySeen()) return;

    const start = Date.now();
    let bookOnScreen = false;
    let pending = false; // a trigger fired while #book was on screen

    const show = () => {
      if (shownRef.current) return;
      shownRef.current = true;
      remember();
      returnFocusRef.current = document.activeElement as HTMLElement | null;
      setOpen(true);
      cleanup();
    };

    let early: number | undefined;
    const tryOpen = (minMs = MIN_MS) => {
      const wait = minMs - (Date.now() - start);
      if (wait > 0) {
        // Too soon: check again once the quiet period is over.
        if (early === undefined) early = window.setTimeout(() => tryOpen(), wait);
        return;
      }
      if (bookOnScreen) {
        pending = true;
        return;
      }
      show();
    };

    const book = document.getElementById("book");
    const io = book
      ? new IntersectionObserver(([entry]) => {
          bookOnScreen = entry.isIntersecting;
          if (!bookOnScreen && pending) tryOpen();
        })
      : null;
    if (book && io) io.observe(book);

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 200 && window.scrollY / max >= SCROLL_RATIO) tryOpen();
    };

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const onMouseOut = (e: MouseEvent) => {
      if (e.relatedTarget || e.clientY > 0) return;
      // Exit intent is a one-off moment: don't queue it for later.
      if (Date.now() - start < EXIT_MIN_MS || bookOnScreen) return;
      show();
    };

    const timer = window.setTimeout(() => tryOpen(), TIMER_MS);
    window.addEventListener("scroll", onScroll, { passive: true });
    if (finePointer) document.addEventListener("mouseout", onMouseOut);

    function cleanup() {
      window.clearTimeout(timer);
      window.clearTimeout(early);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onMouseOut);
      io?.disconnect();
    }
    return cleanup;
  }, [pathname]);

  const close = useCallback(() => {
    setOpen(false);
    const el = returnFocusRef.current;
    if (el && typeof el.focus === "function" && document.contains(el)) {
      window.setTimeout(() => el.focus(), 0);
    }
  }, []);

  // While open: focus, Escape, Tab trap, scroll lock (desktop)
  useEffect(() => {
    if (!open) return;
    const desktop = window.matchMedia("(min-width: 640px)").matches;

    // On desktop focus the first answer; on phones focus the panel, so the
    // view doesn't jump.
    if (desktop) firstChipRef.current?.querySelector<HTMLElement>("button")?.focus();
    else panelRef.current?.focus();

    const prevOverflow = document.body.style.overflow;
    if (desktop) document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const items = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      ).filter((el) => el.offsetParent !== null);
      if (items.length === 0) {
        e.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || active === panelRef.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      } else if (!panelRef.current.contains(active)) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  function toggle(id: string) {
    setPicks((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  }

  // Picks go along in storage and in the link; the quiz reads either.
  const href =
    picks.length > 0 ? `${booking.page}?${PAINS_PARAM}=${picks.join(",")}` : booking.page;

  function start() {
    savePains(picks);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-6">
      <style>{`
        @keyframes leadpop-sheet {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes leadpop-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={close}
        className="absolute inset-0 bg-ink/60 [animation:leadpop-fade_0.25s_ease-out_both]"
      />

      <div className="relative w-full sm:max-w-[34rem] [animation:leadpop-sheet_0.4s_cubic-bezier(0.2,0.9,0.3,1)_both] sm:animate-pop-in">
        {/* Questy peeking over the top edge, behind the panel */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[58px] left-6 w-[72px] animate-float [animation-duration:3.6s] sm:-top-[74px] sm:left-8 sm:w-24"
        >
          <Mascot wave mood="wow" className="w-full" />
        </div>
        <Sparkle className="pointer-events-none absolute -top-9 left-[6.5rem] w-6 animate-twinkle sm:left-[8.5rem] sm:-top-11 sm:w-7" />
        <Sparkle
          className="pointer-events-none absolute -top-4 left-[8.75rem] hidden w-4 animate-twinkle [animation-delay:-1s] sm:block sm:left-[11rem]"
          color="#FFFFFF"
        />

        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          tabIndex={-1}
          className="card-pop-lg relative z-10 max-h-[78vh] overflow-y-auto rounded-b-none border-b-0 shadow-none px-5 pb-6 pt-8 text-ink focus:outline-none sm:max-h-[90vh] sm:rounded-b-2xl sm:border-b-[3px] sm:shadow-pop-lg sm:px-8 sm:pb-8 sm:pt-10"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-3 top-3 flex size-11 items-center justify-center rounded-full border-[3px] border-ink bg-white text-ink shadow-pop-sm transition-transform hover:translate-x-px hover:translate-y-px hover:bg-surface"
          >
            <X aria-hidden="true" className="size-5" strokeWidth={3} />
          </button>

          <FreeBadge />
          <h2 id={titleId} className="mt-4 pr-10 text-[1.6rem] font-extrabold leading-tight sm:text-[1.9rem]">
            What&apos;s Eating Your <span className="hl-sun">Team&apos;s Time?</span>
          </h2>
          <p className="mt-2 text-base leading-relaxed text-ink/80">
            Tap whatever applies. A few more quick questions after this, then
            you pick a time for your free audit.
          </p>

          <div ref={firstChipRef} className="mt-4 flex flex-wrap gap-2">
            {painOptions.map((o) => (
              <Chip
                key={o.id}
                label={o.label}
                multi
                size="sm"
                pressed={picks.includes(o.id)}
                onClick={() => toggle(o.id)}
              />
            ))}
          </div>

          <Link href={href} onClick={start} className="btn-primary btn-lg group mt-6 w-full">
            Start My Free Audit
            <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Under a minute. {picks.length > 0 ? `${picks.length} picked so far.` : "You can pick more than one."}
          </p>
        </div>
      </div>
    </div>
  );
}

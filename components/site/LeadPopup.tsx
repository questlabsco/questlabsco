"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlertCircle, ArrowRight, X } from "lucide-react";
import Mascot from "@/components/art/Mascot";
import { CheckBadge, Sparkle } from "@/components/art/Doodles";
import FreeBadge from "@/components/art/offer/FreeBadge";
import { booking, siteConfig } from "@/lib/data/site";

// Email-capture pop-up for the free automation audit.
//
// Shows once per visitor, on whichever comes first:
//   - desktop exit intent (pointer leaves through the top) after 8s,
//   - scrolling past 55% of the page,
//   - 45s on the page.
// Never in the first 6s, never on /contact or /watch, never while the
// #book section is on screen, and not again for 14 days once it has been
// shown. Renders nothing until a trigger fires, so it has no effect on
// first paint or on crawlers.

const STORAGE_KEY = "ql-audit-popup";
const QUIET_DAYS = 14;
const MIN_MS = 6_000;
const EXIT_MIN_MS = 8_000;
const TIMER_MS = 45_000;
const SCROLL_RATIO = 0.55;
const EXCLUDED = ["/contact", "/watch"];

type Status = "idle" | "submitting" | "success" | "error";

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
  const [status, setStatus] = useState<Status>("idle");
  const shownRef = useRef(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
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

    // On phones focus the panel, so the keyboard doesn't jump up at once.
    if (desktop) emailRef.current?.focus();
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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: siteConfig.web3formsKey,
          subject: "Free audit request (pop-up)",
          from_name: "Quest Labs Website",
          page: pathname,
          ...data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
          className="pointer-events-none absolute -top-[58px] left-6 w-[72px] sm:-top-[74px] sm:left-8 sm:w-24"
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
          className="card-pop-lg relative z-10 max-h-[70vh] overflow-y-auto rounded-b-none border-b-0 shadow-none px-5 pb-6 pt-8 text-ink focus:outline-none sm:max-h-[90vh] sm:rounded-b-2xl sm:border-b-[3px] sm:shadow-pop-lg sm:px-9 sm:pb-9 sm:pt-10"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-3 top-3 flex size-11 items-center justify-center rounded-full border-[3px] border-ink bg-white text-ink shadow-pop-sm transition-transform hover:translate-x-px hover:translate-y-px hover:bg-surface"
          >
            <X aria-hidden="true" className="size-5" strokeWidth={3} />
          </button>

          {status === "success" ? (
            <div role="status" className="pr-10 text-center sm:pr-0">
              <CheckBadge className="mx-auto w-14" />
              <h2 id={titleId} className="mt-4 text-2xl font-extrabold">
                You&apos;re In.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink/80">
                We&apos;ll email you within one business day to set up your
                audit.
              </p>
              <Link href={booking.page} onClick={close} className="btn-primary btn-lg mt-6 w-full sm:w-auto">
                Pick A Time Now
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          ) : (
            <>
              <FreeBadge />
              <h2 id={titleId} className="mt-4 pr-10 text-[1.7rem] font-extrabold leading-tight sm:text-[2rem]">
                Want Your Team&apos;s <span className="hl-sun">Hours Back?</span>
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink/80">
                On a free {booking.durationAdjective} audit call we look at
                your workflows and tell you straight what&apos;s worth
                automating.
              </p>

              <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                {/* Honeypot for bots */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div>
                  <label htmlFor={`${titleId}-email`} className="text-sm font-bold">
                    Work email
                  </label>
                  <input
                    ref={emailRef}
                    id={`${titleId}-email`}
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className="mt-1 w-full rounded-lg border-[3px] border-ink bg-white px-4 py-3 text-base text-ink placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-4 focus:ring-sun"
                  />
                </div>
                <div>
                  <label htmlFor={`${titleId}-site`} className="text-sm font-bold">
                    Company website <span className="font-semibold text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    id={`${titleId}-site`}
                    name="website"
                    type="text"
                    inputMode="url"
                    autoComplete="url"
                    placeholder="company.com"
                    className="mt-1 w-full rounded-lg border-[3px] border-ink bg-white px-4 py-3 text-base text-ink placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-4 focus:ring-sun"
                  />
                </div>

                {status === "error" && (
                  <p role="alert" className="flex items-start gap-2 text-sm font-semibold text-red-700">
                    <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                    <span>
                      That didn&apos;t send. Please try again or email us at{" "}
                      <a href={`mailto:${siteConfig.email}`} className="underline">
                        {siteConfig.email}
                      </a>
                      .
                    </span>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary btn-lg mt-2 w-full disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending…" : "Send Me My Free Audit"}
                </button>
              </form>

              <p className="mt-3 text-center text-xs text-muted-foreground">
                No spam, just one email about your audit.{" "}
                <Link href="/privacy" onClick={close} className="font-semibold underline">
                  Privacy policy
                </Link>
              </p>
              <p className="mt-3 text-center text-sm">
                <Link
                  href={booking.page}
                  onClick={close}
                  className="inline-flex min-h-[44px] items-center gap-1 font-bold text-brand underline underline-offset-4"
                >
                  Or pick a time now
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

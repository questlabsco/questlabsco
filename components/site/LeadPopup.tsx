"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowRight, X } from "lucide-react";
import Mascot from "@/components/art/Mascot";
import { Sparkle } from "@/components/art/Doodles";
import FreeBadge from "@/components/art/offer/FreeBadge";
import { saveEmail } from "@/components/quiz/questions";
import { booking, siteConfig } from "@/lib/data/site";

// Email pop-up for the free automation audit. The visitor leaves an email,
// it is sent to the inbox straight away (so the lead is kept even if they
// stop there), and they go on to the quiz at /free-audit with the email
// already filled in on the last step.
//
// Shows once per visitor, on whichever comes first:
//   - desktop exit intent (pointer leaves through the top) after 8s,
//   - scrolling past 30% of the page,
//   - 20s on the page.
// Never in the first 6s, never on /contact, /free-audit or /watch, never
// while the #book section is on screen, and not again for 14 days once it
// has been shown. Renders nothing until a trigger fires, so it has no
// effect on first paint or on crawlers.
//
// To see it on demand, add ?popup=1 to any page address: that skips the
// 14-day wait and opens it after a second.

const STORAGE_KEY = "ql-audit-popup";
const QUIET_DAYS = 14;
const MIN_MS = 6_000;
const EXIT_MIN_MS = 8_000;
const TIMER_MS = 20_000;
const SCROLL_RATIO = 0.3;
const PREVIEW_PARAM = "popup";
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
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [invalid, setInvalid] = useState(false);
  const shownRef = useRef(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const emailId = useId();
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const titleId = useId();

  // Triggers
  useEffect(() => {
    if (shownRef.current) return;
    if (EXCLUDED.some((p) => pathname === p || pathname?.startsWith(`${p}/`))) return;
    let preview = false;
    try {
      preview = new URLSearchParams(window.location.search).has(PREVIEW_PARAM);
    } catch {
      // No preview.
    }
    if (!preview && recentlySeen()) return;

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

    const timer = window.setTimeout(() => (preview ? show() : tryOpen()), preview ? 1_000 : TIMER_MS);
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

    // On desktop focus the email field; on phones focus the panel, so the
    // keyboard doesn't jump up over the offer.
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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setInvalid(true);
      emailRef.current?.focus();
      return;
    }
    const bot =
      (e.currentTarget.elements.namedItem("botcheck") as HTMLInputElement | null)?.checked ?? false;

    // Send the lead now and don't wait for it: keepalive lets the request
    // finish while the visitor moves on to the quiz.
    void fetch("https://api.web3forms.com/submit", {
      method: "POST",
      keepalive: true,
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: siteConfig.web3formsKey,
        subject: "Pop-up lead: free audit",
        from_name: "Quest Labs Website",
        email: value,
        Source: "Email pop-up",
        Page: window.location.pathname,
        ...(bot ? { botcheck: true } : {}),
      }),
    }).catch(() => {
      // The quiz asks for the email again at the end, so nothing is lost.
    });

    saveEmail(value);
    setOpen(false);
    router.push(booking.page);
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
            Get Your Free <span className="hl-sun">Automation Audit</span>
          </h2>
          <p className="mt-2 text-base leading-relaxed text-ink/80">
            {`Leave your email and we'll show you which parts of your week software can take over. A 60-second quiz, then ${booking.duration} with the people who'd build it. It costs nothing.`}
          </p>

          <ul className="mt-4 space-y-1.5 text-sm font-semibold text-ink/85">
            {[
              "Which jobs are worth automating, and which aren't",
              "Roughly what it would take",
              "No sales pitch and no follow-up spam",
            ].map((line) => (
              <li key={line} className="flex items-start gap-2">
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border-2 border-ink bg-mint text-[11px] font-extrabold leading-none"
                >
                  ✓
                </span>
                {line}
              </li>
            ))}
          </ul>

          <form onSubmit={handleSubmit} noValidate className="mt-5">
            <label htmlFor={emailId} className="text-sm font-bold">
              Work email
            </label>
            <input
              ref={emailRef}
              id={emailId}
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="you@company.com"
              value={email}
              aria-invalid={invalid}
              aria-describedby={invalid ? `${emailId}-error` : undefined}
              onChange={(e) => {
                setEmail(e.target.value);
                if (invalid) setInvalid(false);
              }}
              className="mt-1 w-full rounded-lg border-[3px] border-ink bg-white px-4 py-3 text-base text-ink placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-4 focus:ring-sun"
            />
            {invalid && (
              <p id={`${emailId}-error`} role="alert" className="mt-1.5 text-sm font-bold text-[#B42318]">
                That email doesn&apos;t look right. Mind checking it?
              </p>
            )}
            {/* Honeypot: people never see or tick this. */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <button type="submit" className="btn-primary btn-lg group mt-4 w-full">
              Get My Free Audit
              <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            We use your email for your audit and nothing else.{" "}
            <Link href="/privacy" className="underline">
              Privacy policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

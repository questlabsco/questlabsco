"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import Mascot from "@/components/art/Mascot";
import { CheckBadge, Sparkle } from "@/components/art/Doodles";
import CalendlyEmbed from "@/components/site/CalendlyEmbed";
import { booking, siteConfig } from "@/lib/data/site";
import Chip from "./Chip";
import {
  type Answers,
  type Option,
  TOTAL_STEPS,
  emptyAnswers,
  hoursOptions,
  labelFor,
  labelsFor,
  loadSaved,
  painOptions,
  painsFromQuery,
  PAINS_PARAM,
  questionText,
  quips,
  save,
  teamOptions,
  timingOptions,
  toolOptions,
  yearlyLine,
} from "./questions";

export type CaseLink = {
  industrySlug: string;
  slug: string;
  title: string;
  summary: string;
};

type Send = "" | "sending" | "ok" | "failed";

// Steps 0 to 6 are the questions, 7 is the short "building" moment, 8 is
// the result with the calendar.
const BUILDING = 7;
const RESULT = 8;
const SINGLE_DELAY = 320; // ms the picked chip stays lit before moving on
const BUILD_TICKS = [350, 800, 1250];
const BUILD_MS = 1600;

const buildLines = [
  "Reading your answers",
  "Matching you with a case study",
  "Getting the calendar ready",
];

const inputClass =
  "mt-1 w-full rounded-lg border-[3px] border-ink bg-white px-4 py-3 text-base text-ink placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-4 focus:ring-sun";

export default function QuizClient({
  industryOptions,
  cases,
  headingLevel = 2,
}: {
  industryOptions: Option[];
  cases: CaseLink[];
  headingLevel?: 2 | 3;
}) {
  const H = headingLevel === 3 ? "h3" : "h2";
  const Sub = headingLevel === 3 ? "h4" : "h3";
  const uid = useId();

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(emptyAnswers);
  const [sent, setSent] = useState<Send>("");
  const [ticks, setTicks] = useState(0);
  const [boop, setBoop] = useState(0);

  const [ready, setReady] = useState(false);
  const moved = useRef(false); // the visitor has navigated: move focus
  const advancing = useRef(false);
  const timers = useRef<number[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const later = (fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms));
  };

  // Restore saved answers (and any picks carried over from the pop-up).
  useEffect(() => {
    const saved = loadSaved();
    const fromQuery = painsFromQuery(window.location.search);
    if (saved) {
      setAnswers(saved.answers);
      setSent(saved.sent);
      setStep(saved.done ? RESULT : Math.max(0, Math.min(saved.step, TOTAL_STEPS - 1)));
    }
    if (fromQuery.length > 0 && !(saved && saved.answers.pains.length > 0)) {
      setAnswers((a) => ({ ...a, pains: fromQuery }));
      setStep(1);
    }
    if (fromQuery.length > 0) {
      try {
        const url = new URL(window.location.href);
        url.searchParams.delete(PAINS_PARAM);
        window.history.replaceState(window.history.state, "", url.pathname + url.search + url.hash);
      } catch {
        // Leave the address as it is.
      }
    }
    setReady(true);
    const pending = timers.current;
    return () => pending.forEach((t) => window.clearTimeout(t));
  }, []);

  // Keep answers across a refresh.
  useEffect(() => {
    // Wait until the saved state has been read, so it isn't overwritten.
    if (!ready) return;
    save({
      step: Math.min(step, TOTAL_STEPS - 1),
      answers,
      done: step >= BUILDING,
      sent: sent === "sending" ? "" : sent,
    });
  }, [ready, step, answers, sent]);

  // Each new screen: move focus to its heading.
  useEffect(() => {
    if (!moved.current) return;
    headingRef.current?.focus();
  }, [step]);

  function go(next: number) {
    moved.current = true;
    setStep(next);
  }

  function pickOne(key: "industry" | "team" | "hours" | "timing", id: string) {
    if (advancing.current) return;
    advancing.current = true;
    setAnswers((a) => ({ ...a, [key]: id }));
    setBoop((b) => b + 1);
    later(() => {
      advancing.current = false;
      moved.current = true;
      setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
    }, SINGLE_DELAY);
  }

  function toggle(key: "pains" | "tools", id: string) {
    setAnswers((a) => {
      const list = a[key];
      return {
        ...a,
        [key]: list.includes(id) ? list.filter((x) => x !== id) : [...list, id],
      };
    });
    setBoop((b) => b + 1);
  }

  function setField(key: "name" | "email" | "website", value: string) {
    setAnswers((a) => ({ ...a, [key]: value }));
  }

  async function send(final: Answers, bot: boolean) {
    setSent("sending");
    const yearly = yearlyLine(final.hours);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: siteConfig.web3formsKey,
          subject: "Free audit quiz",
          from_name: "Quest Labs Website",
          name: final.name.trim() || "(not given)",
          email: final.email.trim(),
          "Company website": final.website.trim() || "(not given)",
          "What's eating their time": labelsFor(painOptions, final.pains).join(", ") || "(none picked)",
          "Type of business": labelFor(industryOptions, final.industry) || "(not answered)",
          "People who touch the work": labelFor(teamOptions, final.team) || "(not answered)",
          "Hours a week": labelFor(hoursOptions, final.hours) || "(not answered)",
          "Hours a year (their range x 52)": yearly ?? "(no estimate)",
          Tools: labelsFor(toolOptions, final.tools).join(", ") || "(skipped)",
          "How soon": labelFor(timingOptions, final.timing) || "(not answered)",
          Page: window.location.pathname,
          ...(bot ? { botcheck: true } : {}),
        }),
      });
      const json = await res.json();
      setSent(json.success ? "ok" : "failed");
    } catch {
      setSent("failed");
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const bot = (form.elements.namedItem("botcheck") as HTMLInputElement | null)?.checked ?? false;
    void send(answers, bot);
    setTicks(0);
    go(BUILDING);
    BUILD_TICKS.forEach((ms, i) => later(() => setTicks(i + 1), ms));
    later(() => go(RESULT), BUILD_MS);
  }

  const quip = quips[Math.min(step, quips.length - 1)];
  const isQuestion = step < BUILDING;

  return (
    <div className="quiz-root text-left">
      <style>{`
        @keyframes quiz-in {
          from { opacity: 0.35; transform: translateY(12px); }
          to { opacity: 1; transform: none; }
        }
        @keyframes quiz-boop {
          0% { transform: scale(1) rotate(0deg); }
          35% { transform: scale(1.1, 0.92) rotate(-4deg); }
          70% { transform: scale(0.97, 1.04) rotate(2deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes quiz-fill {
          from { transform: scaleX(0.04); }
          to { transform: scaleX(1); }
        }
        .quiz-in { animation: quiz-in 0.4s cubic-bezier(0.2, 0.9, 0.3, 1.1) both; }
        .quiz-boop { animation: quiz-boop 0.55s ease-out both; transform-origin: 50% 100%; }
        .quiz-fill { animation: quiz-fill ${BUILD_MS / 1000}s cubic-bezier(0.4, 0, 0.3, 1) both; }
      `}</style>

      {/* Questy and what he has to say about this step */}
      <div aria-hidden="true" className="mb-2 flex items-end gap-2 pl-1 sm:gap-3 sm:pl-3">
        <div className="relative w-[68px] shrink-0 animate-float [animation-duration:3.8s] sm:w-[88px]">
          <div key={`${step}-${boop}`} className="quiz-boop">
            <Mascot mood={quip.mood} wave={quip.wave} className="w-full" />
          </div>
          {step === RESULT && (
            <Sparkle className="absolute -right-3 -top-1 w-6 animate-twinkle" />
          )}
        </div>
        <div
          key={step}
          className="quiz-in relative mb-5 min-w-0 rounded-2xl border-[3px] border-ink bg-white px-3.5 py-2 font-hand text-lg leading-tight text-ink shadow-pop-sm sm:mb-7 sm:px-4 sm:text-xl"
        >
          <span className="absolute -left-[10px] bottom-3 size-4 rotate-45 border-b-[3px] border-l-[3px] border-ink bg-white" />
          <span className="relative">{quip.text}</span>
        </div>
      </div>

      <div className="card-pop-lg relative p-5 text-ink sm:p-7 md:p-8">
        {isQuestion && (
          <>
            <div className="flex min-h-[44px] items-center justify-between gap-3">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={() => go(step - 1)}
                  className="-ml-2 inline-flex min-h-[44px] items-center gap-1.5 rounded-lg px-2 text-sm font-extrabold text-ink transition-colors hover:bg-surface"
                >
                  <ArrowLeft aria-hidden="true" className="size-4" strokeWidth={3} />
                  Back
                </button>
              ) : (
                <span className="text-sm font-extrabold uppercase tracking-wide text-brand">
                  Free audit
                </span>
              )}
              <p className="text-sm font-extrabold text-ink/70">
                Step {step + 1} of {TOTAL_STEPS}
              </p>
            </div>
            <div
              role="progressbar"
              aria-label="Quiz progress"
              aria-valuemin={1}
              aria-valuemax={TOTAL_STEPS}
              aria-valuenow={step + 1}
              aria-valuetext={`Step ${step + 1} of ${TOTAL_STEPS}`}
              className="mt-2 h-3.5 overflow-hidden rounded-full border-[2.5px] border-ink bg-surface"
            >
              <div
                className="h-full w-full origin-left bg-brand transition-transform duration-500 ease-out"
                style={{ transform: `scaleX(${(step + 1) / TOTAL_STEPS})` }}
              />
            </div>
          </>
        )}

        <div key={step} className="quiz-in">
          {step === 0 && (
            <MultiStep
              H={H}
              headingRef={headingRef}
              title={questionText.pains}
              hint="Pick all that apply."
              options={painOptions}
              selected={answers.pains}
              onToggle={(id) => toggle("pains", id)}
              onNext={() => go(1)}
            />
          )}
          {step === 1 && (
            <SingleStep
              H={H}
              headingRef={headingRef}
              title={questionText.industry}
              hint="Pick the closest one."
              options={industryOptions}
              selected={answers.industry}
              onPick={(id) => pickOne("industry", id)}
            />
          )}
          {step === 2 && (
            <SingleStep
              H={H}
              headingRef={headingRef}
              title={questionText.team}
              hint="Count anyone who does even a bit of it."
              options={teamOptions}
              selected={answers.team}
              onPick={(id) => pickOne("team", id)}
            />
          )}
          {step === 3 && (
            <SingleStep
              H={H}
              headingRef={headingRef}
              title={questionText.hours}
              hint="Hours a week, across everyone. A rough guess is fine."
              options={hoursOptions}
              selected={answers.hours}
              onPick={(id) => pickOne("hours", id)}
            />
          )}
          {step === 4 && (
            <MultiStep
              H={H}
              headingRef={headingRef}
              title={questionText.tools}
              hint="Pick all that apply, or skip this one."
              options={toolOptions}
              selected={answers.tools}
              onToggle={(id) => toggle("tools", id)}
              onNext={() => go(5)}
              onSkip={() => {
                setAnswers((a) => ({ ...a, tools: [] }));
                go(5);
              }}
              size="sm"
            />
          )}
          {step === 5 && (
            <SingleStep
              H={H}
              headingRef={headingRef}
              title={questionText.timing}
              hint="Pick one."
              options={timingOptions}
              selected={answers.timing}
              onPick={(id) => pickOne("timing", id)}
            />
          )}
          {step === 6 && (
            <form onSubmit={handleSubmit} className="mt-5">
              <H
                ref={headingRef}
                tabIndex={-1}
                className="text-2xl font-extrabold leading-tight focus:outline-none sm:text-[1.7rem]"
              >
                {questionText.contact}
              </H>
              <p className="mt-1.5 text-sm font-semibold text-ink/65">
                Your answers go straight to the team, so the call starts at the
                useful part.
              </p>

              {/* Honeypot for bots */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${uid}-name`} className="text-sm font-bold">
                    First name
                  </label>
                  <input
                    id={`${uid}-name`}
                    name="name"
                    type="text"
                    autoComplete="given-name"
                    placeholder="Sam"
                    value={answers.name}
                    onChange={(e) => setField("name", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor={`${uid}-email`} className="text-sm font-bold">
                    Work email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id={`${uid}-email`}
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={answers.email}
                    onChange={(e) => setField("email", e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor={`${uid}-site`} className="text-sm font-bold">
                  Company website{" "}
                  <span className="font-semibold text-muted-foreground">(optional)</span>
                </label>
                <input
                  id={`${uid}-site`}
                  name="website"
                  type="text"
                  inputMode="url"
                  autoComplete="url"
                  placeholder="company.com"
                  value={answers.website}
                  onChange={(e) => setField("website", e.target.value)}
                  className={inputClass}
                />
              </div>

              <button type="submit" className="btn-primary btn-lg group mt-6 w-full sm:w-auto">
                Build My Free Audit
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-1"
                />
              </button>
              <p className="mt-3 text-xs text-muted-foreground">
                No spam. We use this for your audit and nothing else.{" "}
                <Link href="/privacy" className="font-semibold underline">
                  Privacy policy
                </Link>
              </p>
            </form>
          )}

          {step === BUILDING && (
            <div role="status" className="py-2">
              <H
                ref={headingRef}
                tabIndex={-1}
                className="text-2xl font-extrabold leading-tight focus:outline-none sm:text-[1.7rem]"
              >
                Building Your Audit
              </H>
              <div
                aria-hidden="true"
                className="mt-5 h-4 overflow-hidden rounded-full border-[2.5px] border-ink bg-surface"
              >
                <div className="quiz-fill h-full w-full origin-left bg-mint" />
              </div>
              <ul className="mt-5 space-y-3">
                {buildLines.map((line, i) => {
                  const done = ticks > i;
                  return (
                    <li key={line} className="flex items-center gap-3 text-base font-bold">
                      <span aria-hidden="true" className="relative flex size-7 shrink-0 items-center justify-center">
                        {done ? (
                          <CheckBadge className="quiz-boop w-7" />
                        ) : (
                          <span className="size-5 animate-spin-slow rounded-full border-[3px] border-ink border-t-transparent [animation-duration:0.9s]" />
                        )}
                      </span>
                      <span className={done ? "text-ink" : "text-ink/55"}>
                        {line}
                        <span className="sr-only">{done ? ", done" : ", working"}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {step === RESULT && (
            <Result
              H={H}
              Sub={Sub}
              headingRef={headingRef}
              answers={answers}
              caseLink={cases.find((c) => c.industrySlug === answers.industry)}
              sent={sent}
              onEdit={() => go(0)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

type HeadingTag = "h2" | "h3";
type HeadingRef = React.RefObject<HTMLHeadingElement>;

function QuestionHeading({
  H,
  headingRef,
  title,
  hint,
}: {
  H: HeadingTag;
  headingRef: HeadingRef;
  title: string;
  hint: string;
}) {
  return (
    <div className="mt-5">
      <H
        ref={headingRef}
        tabIndex={-1}
        className="text-2xl font-extrabold leading-tight focus:outline-none sm:text-[1.7rem]"
      >
        {title}
      </H>
      <p className="mt-1.5 text-sm font-semibold text-ink/65">{hint}</p>
    </div>
  );
}

function MultiStep({
  H,
  headingRef,
  title,
  hint,
  options,
  selected,
  onToggle,
  onNext,
  onSkip,
  size = "md",
}: {
  H: HeadingTag;
  headingRef: HeadingRef;
  title: string;
  hint: string;
  options: Option[];
  selected: string[];
  onToggle: (id: string) => void;
  onNext: () => void;
  onSkip?: () => void;
  size?: "sm" | "md";
}) {
  const count = selected.length;
  return (
    <>
      <QuestionHeading H={H} headingRef={headingRef} title={title} hint={hint} />
      <div className="mt-5 flex flex-wrap gap-2.5 sm:gap-3">
        {options.map((o) => (
          <Chip
            key={o.id}
            label={o.label}
            multi
            size={size}
            pressed={selected.includes(o.id)}
            onClick={() => onToggle(o.id)}
          />
        ))}
      </div>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p role="status" className="order-last text-sm font-semibold text-ink/65 sm:order-first">
          {count > 0 ? `${count} picked` : onSkip ? "Not sure? Skip it." : "Pick at least one to keep going."}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          {onSkip && (
            <button type="button" onClick={onSkip} className="btn-outline-dark btn-lg w-full sm:w-auto">
              Skip
            </button>
          )}
          <button
            type="button"
            onClick={onNext}
            disabled={count === 0}
            className="btn-primary btn-lg group w-full disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
          >
            Next
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </>
  );
}

function SingleStep({
  H,
  headingRef,
  title,
  hint,
  options,
  selected,
  onPick,
}: {
  H: HeadingTag;
  headingRef: HeadingRef;
  title: string;
  hint: string;
  options: Option[];
  selected: string;
  onPick: (id: string) => void;
}) {
  return (
    <>
      <QuestionHeading H={H} headingRef={headingRef} title={title} hint={hint} />
      <div className="mt-5 flex flex-wrap gap-2.5 sm:gap-3">
        {options.map((o) => (
          <Chip
            key={o.id}
            label={o.label}
            pressed={selected === o.id}
            onClick={() => onPick(o.id)}
          />
        ))}
      </div>
      <p className="mt-6 text-sm font-semibold text-ink/55">Tap one and we&apos;ll move on.</p>
    </>
  );
}

function Result({
  H,
  Sub,
  headingRef,
  answers,
  caseLink,
  sent,
  onEdit,
}: {
  H: HeadingTag;
  Sub: "h3" | "h4";
  headingRef: HeadingRef;
  answers: Answers;
  caseLink?: CaseLink;
  sent: Send;
  onEdit: () => void;
}) {
  const name = answers.name.trim();
  const pains = labelsFor(painOptions, answers.pains);
  const team = labelFor(teamOptions, answers.team);
  const hours = labelFor(hoursOptions, answers.hours);
  const yearly = yearlyLine(answers.hours);

  return (
    <div>
      <p className="text-sm font-extrabold uppercase tracking-wide text-brand">
        {name ? `Nice one, ${name}` : "Nice one"}
      </p>
      <H
        ref={headingRef}
        tabIndex={-1}
        className="mt-1 text-[1.75rem] font-extrabold leading-tight focus:outline-none sm:text-[2.1rem]"
      >
        Your Audit Is <span className="hl-sun">Ready To Book</span>
      </H>
      <p className="mt-3 text-base leading-relaxed text-ink/80">
        We&apos;ve got your answers, so nobody spends the first ten minutes on
        background. Pick a time below and we&apos;ll come prepared.
      </p>

      <div role="status">
        {sent === "failed" && (
          <p className="mt-4 rounded-lg border-2 border-coral bg-coral/10 px-4 py-3 text-sm font-semibold text-ink">
            Your answers didn&apos;t make it to our inbox, but you can still
            book below. Mention them on the call, or email{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-bold underline">
              {siteConfig.email}
            </a>
            .
          </p>
        )}
      </div>

      <div className={`mt-6 grid grid-cols-1 gap-4 ${caseLink ? "md:grid-cols-2" : ""}`}>
        <div className="rounded-xl border-[3px] border-ink bg-surface-cream p-4 sm:p-5">
          <Sub className="text-base font-extrabold">What You Told Us</Sub>
          <dl className="mt-3 space-y-3 text-sm leading-relaxed">
            {pains.length > 0 && (
              <div>
                <dt className="font-extrabold">Eating your time</dt>
                <dd className="mt-1.5 flex flex-wrap gap-1.5">
                  {pains.map((p) => (
                    <span key={p} className="rounded-md border-2 border-ink bg-white px-2 py-0.5 text-xs font-bold">
                      {p}
                    </span>
                  ))}
                </dd>
              </div>
            )}
            {team && (
              <div>
                <dt className="font-extrabold">Team</dt>
                <dd className="text-ink/80">
                  {answers.team === "1"
                    ? "Just you on this one."
                    : `${team} people touch this work.`}
                </dd>
              </div>
            )}
            {hours && (
              <div>
                <dt className="font-extrabold">Hours</dt>
                <dd className="text-ink/80">
                  {yearly ? (
                    <span className="mt-1 block rounded-lg border-2 border-ink bg-sun-light px-3 py-2 font-bold text-ink">
                      {yearly}
                    </span>
                  ) : (
                    "No guess yet. That's normal, we'll work it out together on the call."
                  )}
                </dd>
              </div>
            )}
          </dl>
        </div>

        {caseLink && (
          <Link
            href={`/case-studies/${caseLink.slug}`}
            className="group flex flex-col rounded-xl border-[3px] border-ink bg-white p-4 shadow-pop-sm transition-transform hover:-translate-y-1 sm:p-5"
          >
            <span className="self-start rounded-md border-2 border-ink bg-lilac px-2 py-0.5 text-xs font-extrabold uppercase tracking-wide">
              Case study, same industry
            </span>
            <span className="mt-3 block text-base font-extrabold leading-snug">{caseLink.title}</span>
            <span className="mt-2 block text-sm leading-relaxed text-ink/75">{caseLink.summary}</span>
            <span className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-extrabold text-brand underline underline-offset-4">
              Read the case study
              <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        )}
      </div>

      <div className="mt-8">
        <Sub className="text-xl font-extrabold">Pick A Time For Your Audit Call</Sub>
        <p className="mt-1 text-sm font-semibold text-ink/70">
          {booking.duration}, with the team that would do the work.
        </p>
        <div className="mt-4 overflow-hidden rounded-xl border-[3px] border-ink">
          <CalendlyEmbed prefill={{ name, email: answers.email.trim() }} />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-ink/75">
          Calendar not loading? Email{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-bold text-brand underline underline-offset-4">
            {siteConfig.email}
          </a>
        </p>
        <button
          type="button"
          onClick={onEdit}
          className="inline-flex min-h-[44px] items-center gap-1.5 self-start rounded-lg px-2 font-extrabold text-ink transition-colors hover:bg-surface sm:self-auto"
        >
          <RotateCcw aria-hidden="true" className="size-4" strokeWidth={2.75} />
          Change my answers
        </button>
      </div>
    </div>
  );
}

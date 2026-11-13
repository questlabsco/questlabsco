import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calculator, GitBranch, Hourglass, Wrench, Zap } from "lucide-react";
import AuditQuiz from "@/components/quiz/AuditQuiz";
import SectionHeading from "@/components/site/SectionHeading";
import Zigzag from "@/components/site/Zigzag";
import Reveal from "@/components/site/Reveal";
import { HandArrow, Sparkle } from "@/components/art/Doodles";
import BlueSky from "@/components/art/offer/BlueSky";
import {
  PaperStackBuddy,
  QuizFriendStyles,
  StopwatchBuddy,
} from "@/components/art/quiz/QuizFriends";
import { booking } from "@/lib/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Free Automation Audit",
  description: `Seven quick questions about where your team's time goes, then pick a time for a free ${booking.durationAdjective} automation audit with the team that would do the work.`,
  path: "/free-audit",
});

const looksAt = [
  {
    icon: GitBranch,
    title: "Your Workflows",
    body: "The steps your team repeats every week, in the order they actually happen.",
  },
  {
    icon: Wrench,
    title: "Your Tools",
    body: "What you already pay for, and whether it can do more before you buy anything new.",
  },
  {
    icon: Hourglass,
    title: "Time Sinks",
    body: "Where the hours really go. It's often not where people expect.",
  },
  {
    icon: Zap,
    title: "Quick Wins",
    body: "Anything small enough to fix fast. If there isn't one, we'll say so.",
  },
  {
    icon: Calculator,
    title: "The Numbers",
    body: "Roughly what a fix would take, next to the hours it eats now, so you can decide.",
  },
];

const badgeFills = ["bg-sun", "bg-mint", "bg-brand-sky", "bg-coral", "bg-lilac"];

export default function FreeAuditPage() {
  return (
    <main>
      <QuizFriendStyles />
      <section className="relative overflow-hidden bg-hero text-white">
        <BlueSky />
        <div className="container-site relative pb-14 pt-8 md:pb-20 md:pt-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="h-page text-white">
              Get Your <span className="hl-blue">Free Automation Audit</span>
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
              Seven quick taps, under a minute. Then you pick a time, and we
              show up already knowing your setup.
            </p>
          </div>

          <div className="mt-4 grid grid-cols-1 items-start gap-6 xl:grid-cols-[1fr_minmax(0,46rem)_1fr]">
            {/* Left friend: the stopwatch, with a note */}
            <div aria-hidden="true" className="relative hidden pt-28 xl:block">
              <p className="note-hand -rotate-6 text-center !text-white">
                Under a minute.
                <br />I timed it.
              </p>
              <HandArrow className="ml-auto mr-6 mt-1 w-12 -rotate-12 [&_path]:stroke-white" />
              <StopwatchBuddy className="mx-auto mt-2 w-36" />
              <Sparkle className="absolute left-2 top-16 w-6 animate-twinkle [animation-delay:-0.7s]" />
            </div>

            <div className="mx-auto w-full max-w-[46rem]">
              <AuditQuiz headingLevel={2} />
            </div>

            {/* Right friend: the paperwork you'd like gone */}
            <div aria-hidden="true" className="relative hidden pt-48 xl:block">
              <PaperStackBuddy className="mx-auto w-40" />
              <Sparkle
                className="absolute right-4 top-36 w-5 animate-twinkle [animation-delay:-1.6s]"
                color="#FFFFFF"
              />
            </div>
          </div>
        </div>
      </section>
      <Zigzag from="hero" to="white" />

      <section className="bg-white">
        <div className="container-site py-16 md:py-20">
          <SectionHeading
            title="What You Get"
            highlight="You Get"
            lede={`${booking.duration} on a call with the team that would do the work. Here's what we look at.`}
          />
          <ul className="flex flex-wrap justify-center gap-4 md:gap-5">
            {looksAt.map((item, i) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
                  className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(20%-1.1rem)]"
                >
                  <Reveal className="h-full">
                    <div className="card-pop flex h-full flex-col p-5">
                      <span
                        aria-hidden="true"
                        className={`flex size-12 items-center justify-center rounded-full border-[3px] border-ink shadow-pop-sm ${badgeFills[i]}`}
                      >
                        <Icon
                          className="size-5 animate-wiggle text-ink"
                          strokeWidth={2.5}
                          style={{ animationDelay: `${-i * 0.5}s`, animationDuration: `${2.4 + i * 0.4}s` }}
                        />
                      </span>
                      <h3 className="mt-4 text-lg font-extrabold leading-snug text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink/80">{item.body}</p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>

          <p className="mt-10 text-center text-base text-ink/80">
            Rather just pick a time?{" "}
            <Link
              href={booking.calendarPage}
              className="inline-flex min-h-[44px] items-center gap-1 font-bold text-brand underline underline-offset-4"
            >
              Go straight to the calendar
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

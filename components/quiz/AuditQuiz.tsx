import Link from "next/link";
import { industries } from "@/lib/data/industries";
import { engagements } from "@/lib/data/engagements";
import { booking } from "@/lib/data/site";
import QuizClient, { type CaseLink } from "./QuizClient";
import { extraIndustryOptions, type Option } from "./questions";

// The free audit quiz: seven quick questions, a short "building" moment,
// then a recap of the visitor's answers, a matching case study and the
// calendar. Used on /free-audit and in the #book section.
//
// This wrapper runs on the server: it trims the industry and case-study
// data down to the few strings the quiz needs, so the full data files stay
// out of the browser bundle. The quiz itself (QuizClient) renders question
// 1 in the server HTML and comes alive once it hydrates.
//
// `headingLevel`: 2 where the quiz sits under the page's h1 (/free-audit),
// 3 inside a section that already has its own h2 (#book).
export default function AuditQuiz({ headingLevel = 2 }: { headingLevel?: 2 | 3 } = {}) {
  const industryOptions: Option[] = [
    ...industries.map((i) => ({ id: i.slug, label: i.name })),
    ...extraIndustryOptions,
  ];
  const cases: CaseLink[] = industries
    .map((i) => engagements.find((e) => e.industrySlug === i.slug))
    .filter((e): e is NonNullable<typeof e> => Boolean(e))
    .map((e) => ({
      industrySlug: e.industrySlug,
      slug: e.slug,
      title: e.title,
      summary: e.summary,
    }));

  return (
    <>
      <QuizClient industryOptions={industryOptions} cases={cases} headingLevel={headingLevel} />
      <noscript>
        <p className="mt-4 rounded-lg border-[3px] border-ink bg-white px-4 py-3 text-center text-sm font-semibold text-ink">
          The quiz needs JavaScript.{" "}
          <Link href={booking.calendarPage} className="font-bold text-brand underline">
            Pick a time on the calendar instead
          </Link>
          .
        </p>
      </noscript>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import CaseStudyCard from "@/components/site/CaseStudyCard";
import BookCall from "@/components/site/BookCall";
import Img from "@/components/site/Img";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import Zigzag from "@/components/site/Zigzag";
import Mascot from "@/components/art/Mascot";
import { CheckBadge, Cloud, Sparkle } from "@/components/art/Doodles";
import { industries, getIndustry } from "@/lib/data/industries";
import { getEngagement } from "@/lib/data/engagements";
import { booking } from "@/lib/data/site";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import PlainAnswer from "@/components/site/PlainAnswer";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const industry = getIndustry((await params).slug);
  if (!industry) return {};
  return pageMeta({
    title: industry.title,
    description: industry.intro,
    path: `/industries/${industry.slug}`,
  });
}

// Headlines are Title Case; the data keeps sentence case for metadata.
// Leaves words like "AI" and "eLearning" alone.
function titleCase(s: string) {
  return s
    .split(" ")
    .map((w) =>
      w.length > 1 && /[A-Z]/.test(w[1]) ? w : w.charAt(0).toUpperCase() + w.slice(1),
    )
    .join(" ");
}

// Number badges cycle through the accent colours.
const badgeFills = ["bg-sun", "bg-mint", "bg-brand-sky", "bg-coral", "bg-lilac", "bg-sun-light"];

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const industry = getIndustry((await params).slug);
  if (!industry) notFound();

  const examples = industry.caseStudySlugs
    .map(getEngagement)
    .filter((e) => e !== undefined);

  // "AI Solutions For Healthcare": the part after "For" goes in the block.
  const heading = titleCase(industry.title);
  const split = heading.indexOf(" For ");
  const headLead = split >= 0 ? heading.slice(0, split + 5) : "";
  const headHl = split >= 0 ? heading.slice(split + 5) : heading;

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ])}
      />

      {/* 1. Hero: headline and intro, photo in a tilted polaroid */}
      <section className="relative overflow-hidden bg-hero text-white">
        <Cloud className="hidden md:block absolute left-[3%] top-10 w-24 animate-drift" />
        <Cloud className="hidden lg:block absolute left-[40%] bottom-8 w-20 animate-drift [animation-delay:-6s]" />

        <div className="container-site relative pt-8 pb-10 md:pt-10 md:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              {/* Long sector names wrap inside the block rather than overflow. */}
              <h1 className="h-page">
                {headLead}
                <span className="hl-blue !whitespace-normal">{headHl}</span>
              </h1>
              <p className="mt-4 mx-auto lg:mx-0 max-w-2xl text-lg leading-relaxed text-white/90">
                {industry.intro}
              </p>
              <div className="mt-6 flex justify-center lg:justify-start">
                <Link href={booking.anchor} className="btn-primary btn-lg group">
                  {booking.labelLong}
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[20rem] sm:max-w-sm lg:max-w-[24rem] px-4">
              {/* The polaroid sways a touch, as if it hangs from its tape. */}
              <style>{`
@keyframes ind-sway {
  0%, 100% { transform: rotate(2deg); }
  50% { transform: rotate(4.5deg); }
}
.ind-sway { animation: ind-sway 6.5s ease-in-out infinite; transform-origin: 50% 0; }
`}</style>
              <Sparkle className="absolute -top-3 left-0 z-10 w-10 animate-twinkle" />
              <Sparkle
                color="#FFFFFF"
                className="absolute -bottom-2 right-1 z-10 w-7 animate-twinkle [animation-delay:-1.1s] [animation-duration:3.3s]"
              />
              <Sparkle className="hidden lg:block absolute top-1/3 -right-3 z-10 w-5 animate-twinkle [animation-delay:-0.6s] [animation-duration:2.7s]" />
              <div className="ind-sway relative rounded-md border-[3px] border-ink bg-white p-3 pb-4 shadow-pop-lg">
                {/* strip of tape */}
                <span
                  aria-hidden="true"
                  className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-[4deg] rounded-sm border-2 border-ink bg-sun-light"
                />
                <div className="overflow-hidden rounded-sm border-[3px] border-ink">
                  <Img
                    src={industry.image}
                    alt=""
                    priority
                    className="block aspect-[4/3] w-full object-cover"
                  />
                </div>
                <p aria-hidden="true" className="mt-2 text-center font-hand text-2xl text-ink">
                  {industry.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Zigzag from="hero" to="white" />

      {/* 2. Use cases */}
      <section className="bg-white">
        <div className="container-site py-16 md:py-24">
          <PlainAnswer answer={industry.answer} className="mb-16 md:mb-20" />
          <SectionHeading
            title={`What We Automate In ${industry.name}`}
            highlight={industry.name}
            lede={
              <>
                The jobs teams in this sector hand us most often. Not sure which
                one is yours? Ask us on a{" "}
                <Link href={booking.anchor} className="text-brand font-bold underline">
                  {booking.offer}
                </Link>
                .
              </>
            }
          />
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
            {industry.useCases.map((u, i) => (
              <li key={u.title} className="h-full">
                <Reveal className="h-full">
                  <div className="card-pop flex h-full items-start gap-4 p-5 md:p-6">
                    <span
                      aria-hidden="true"
                      className={`grid size-12 shrink-0 place-items-center rounded-full border-[3px] border-ink text-lg font-extrabold text-ink shadow-pop-sm ${
                        badgeFills[i % badgeFills.length]
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-extrabold leading-snug text-ink">{u.title}</h3>
                      <p className="mt-2 text-base leading-relaxed text-ink/80">{u.body}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <Zigzag from="white" to="pale" />

      {/* 3. Outcomes */}
      <section className="bg-surface">
        <div className="container-site py-16 md:py-24">
          <SectionHeading
            title="What Changes For Your Team"
            highlight="Your Team"
            note="The part that pays for it"
            noteSide="left"
          />
          <div className="mx-auto flex max-w-4xl items-center gap-10">
            <Reveal className="flex-1">
              <ul className="card-pop-lg space-y-5 p-6 md:p-9">
                {industry.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-4">
                    <CheckBadge className="size-9 shrink-0" />
                    <span className="pt-1 text-base md:text-lg font-semibold leading-snug text-ink">
                      {o}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Mascot wave className="hidden lg:block w-40 shrink-0 animate-float" />
          </div>
        </div>
      </section>

      {/* 4. Related case studies */}
      {examples.length > 0 && (
        <>
          <Zigzag from="pale" to="white" />
          <section className="bg-white">
            <div className="container-site py-16 md:py-24">
              <SectionHeading
                title="A Case Study In This Industry"
                highlight="Case Study"
                lede="A real client project from this sector, and the goal we built it to hit."
              />
              <div
                className={`mx-auto grid grid-cols-1 gap-7 ${
                  examples.length > 1 ? "md:grid-cols-2 max-w-4xl" : "max-w-md"
                }`}
              >
                {examples.map((e) => (
                  <CaseStudyCard key={e.slug} e={e} />
                ))}
              </div>
              <div className="mt-10 flex justify-center">
                <Link href="/case-studies" className="btn-outline-dark">
                  See All Case Studies
                </Link>
              </div>
            </div>
          </section>
        </>
      )}

      <BookCall />
    </main>
  );
}

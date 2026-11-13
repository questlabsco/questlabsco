import type { Metadata } from "next";
import Link from "next/link";
import { Rss } from "lucide-react";
import CTABand from "@/components/site/CTABand";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import Zigzag from "@/components/site/Zigzag";
import { Cloud, Sparkle } from "@/components/art/Doodles";
import PostCard from "@/components/blog/PostCard";
import QuestyReading from "@/components/blog/QuestyReading";
import { categories, categorySlug, posts, postsIn } from "@/lib/data/blog";
import type { BlogCategory } from "@/lib/data/blog";
import { booking } from "@/lib/data/site";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  ...pageMeta({
    title: "The Quest Labs Blog: Automation Without The Hype",
    description:
      "Plain answers on AI agents, workflow automation tools and what automation really costs, from the Dallas team that builds it. No hype, just trade-offs.",
    path: "/blog",
  }),
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": "/blog/rss.xml" },
  },
};

// One line under each category headline.
const blurbs: Record<BlogCategory, { title: string; highlight: string; lede: string }> = {
  "Automation Basics": {
    title: "Automation Basics",
    highlight: "Basics",
    lede: "Start here if you're still working out what automation is for, and whether your business is ready for it yet.",
  },
  Tools: {
    title: "Tools",
    highlight: "Tools",
    lede: "n8n, Zapier, Make and the rest. What each one is good at, and where each one bites.",
  },
  "AI Agents": {
    title: "AI Agents",
    highlight: "AI Agents",
    lede: "What an AI agent actually does, what it costs to keep running, and when a plain chatbot is all you need.",
  },
  "Buying Guide": {
    title: "Buying Guide",
    highlight: "Guide",
    lede: "Agency, in-house hire, or nothing for now. How to choose without regretting it six months later.",
  },
  "Industry Playbooks": {
    title: "Industry Playbooks",
    highlight: "Playbooks",
    lede: "The first workflows we'd look at in a specific kind of business, and why those ones.",
  },
};

export default function BlogPage() {
  const [newest] = posts;

  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Blog", path: "/blog" }])} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero text-white">
        <Cloud className="absolute left-[3%] top-10 hidden w-24 animate-drift md:block" />
        <Cloud className="absolute right-[38%] top-6 hidden w-14 animate-drift [animation-delay:-6s] lg:block" />
        <Sparkle className="absolute left-[30%] top-8 hidden w-6 animate-twinkle md:block" />
        <Sparkle className="absolute bottom-10 right-[4%] hidden w-7 animate-twinkle [animation-delay:-1.2s] md:block" color="#FFFFFF" />

        <div className="container-site relative grid items-center gap-8 pb-12 pt-10 md:pb-16 md:pt-14 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_19rem]">
          <div className="text-center lg:text-left">
            <h1 className="h-page mx-auto max-w-3xl lg:mx-0">
              The Quest Labs Blog: Automation <span className="hl-blue">Without The Hype</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl lg:mx-0">
              Straight answers about AI agents, automation tools and what this stuff costs,
              written by the people who build it. Trade-offs included.
            </p>

            {categories.length > 1 && (
              <nav aria-label="Blog categories" className="mt-7">
                <ul className="flex flex-wrap justify-center gap-2.5 lg:justify-start">
                  {categories.map((c) => (
                    <li key={c}>
                      <a
                        href={`#${categorySlug(c)}`}
                        className="pill transition-transform duration-150 hover:-translate-y-0.5 hover:bg-sun-light"
                      >
                        {c}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>

          <div aria-hidden="true" className="relative mx-auto w-56 sm:w-64 lg:w-full">
            <div className="animate-float" style={{ animationDuration: "6s" }}>
              <QuestyReading className="w-full" />
            </div>
            <span className="note-hand absolute -top-2 left-0 hidden -rotate-6 !text-white xl:block">
              Today&apos;s reading
            </span>
          </div>
        </div>
      </section>
      <Zigzag from="hero" to="white" />

      {/* Newest post */}
      {newest && (
        <section aria-labelledby="newest-title" className="bg-white">
          <div className="container-site py-14 md:py-20">
            <h2 id="newest-title" className="eyebrow mb-5 text-center md:text-left">
              Newest Post
            </h2>
            <Reveal className="flex">
              <PostCard post={newest} large />
            </Reveal>
            <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-ink/80 md:text-lg">
              Got a question we haven&apos;t written up? Ask it on a{" "}
              <Link href={booking.page} className="font-bold text-brand underline">
                {booking.offer}
              </Link>
              . Or follow along with the{" "}
              <a href="/blog/rss.xml" className="inline-flex items-center gap-1 font-bold text-brand underline">
                RSS feed
                <Rss aria-hidden="true" className="size-4" />
              </a>
              .
            </p>
          </div>
        </section>
      )}

      {/* Every post, by category. Sections alternate pale and white, after
          the white "newest" section. */}
      {categories.map((c, i) => {
        const tone = i % 2 === 0 ? "pale" : "white";
        const prev = i % 2 === 0 ? "white" : "pale";
        const blurb = blurbs[c];
        return (
          <div key={c}>
            <Zigzag from={prev} to={tone} />
            <section
              id={categorySlug(c)}
              className={tone === "pale" ? "bg-surface" : "bg-white"}
            >
              <div className="container-site py-14 md:py-20">
                <SectionHeading title={blurb.title} highlight={blurb.highlight} lede={blurb.lede} />
                <ul role="list" className="flex flex-wrap justify-center gap-8">
                  {postsIn(c).map((post) => (
                    <li
                      key={post.slug}
                      className="flex w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
                    >
                      <PostCard post={post} />
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        );
      })}

      <CTABand
        title="Rather Just Ask Us?"
        highlight="Ask Us?"
        body={`Reading about automation only goes so far. On a free ${booking.durationAdjective} call, tell us the job that eats your week and we'll tell you if it's worth automating.`}
      />
    </main>
  );
}

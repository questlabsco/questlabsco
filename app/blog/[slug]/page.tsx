import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import BookCall from "@/components/site/BookCall";
import FAQAccordion from "@/components/site/FAQAccordion";
import JsonLd from "@/components/site/JsonLd";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import Zigzag from "@/components/site/Zigzag";
import { CheckBadge, Cloud, Sparkle } from "@/components/art/Doodles";
import HighlightTitle from "@/components/art/offer/HighlightTitle";
import PostBody from "@/components/blog/PostBody";
import PostCard from "@/components/blog/PostCard";
import PostCover from "@/components/blog/PostCover";
import { headingAnchors, renderInline } from "@/components/blog/inline";
import { categorySlug, formatPostDate, getPost, posts, relatedPosts } from "@/lib/data/blog";
import { booking } from "@/lib/data/site";
import { pageMeta } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    absoluteTitle: true,
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const toc = headingAnchors(post.body);
  const related = relatedPosts(post);
  const updated = post.updated && post.updated !== post.date ? post.updated : undefined;

  return (
    <main>
      <JsonLd data={articleSchema(post)} />
      {post.faqs.length > 0 && <JsonLd data={faqSchema(post.faqs)} />}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${slug}` },
        ])}
      />

      <article>
        {/* Hero: compact, so the cover shows on the first screen */}
        <header className="relative overflow-hidden bg-hero text-white">
          <Cloud className="absolute left-[2%] top-8 hidden w-20 animate-drift md:block" />
          <Cloud className="absolute bottom-8 left-[44%] hidden w-14 animate-drift [animation-delay:-7s] lg:block" />
          <Sparkle className="absolute right-[3%] top-8 hidden w-6 animate-twinkle md:block" />

          <div className="container-site relative grid items-center gap-10 pb-12 pt-10 md:pb-14 md:pt-12 lg:grid-cols-[minmax(0,1fr)_22rem] xl:grid-cols-[minmax(0,1fr)_25rem]">
            <div className="text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-sm font-extrabold text-white/90 underline-offset-4 hover:underline"
                >
                  <ArrowLeft aria-hidden="true" className="size-4" />
                  Blog
                </Link>
                <Link
                  href={`/blog#${categorySlug(post.category)}`}
                  className="pill transition-transform duration-150 hover:-translate-y-0.5 hover:bg-sun-light"
                >
                  {post.category}
                </Link>
              </div>

              <h1
                className="h-page mx-auto mt-5 max-w-3xl lg:mx-0"
                style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.85rem)" }}
              >
                <HighlightTitle title={post.title} />
              </h1>

              <p className="mt-5 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-sm font-semibold text-white/90 md:text-base lg:justify-start">
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                {updated && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>
                      Updated <time dateTime={updated}>{formatPostDate(updated)}</time>
                    </span>
                  </>
                )}
                <span aria-hidden="true">·</span>
                <span>{post.readMinutes} min read</span>
                <span aria-hidden="true">·</span>
                <span>By the Quest Labs Co. team</span>
              </p>
            </div>

            <div aria-hidden="true" className="relative hidden lg:block">
              <div className="rotate-2 overflow-hidden rounded-2xl border-[3px] border-ink bg-white p-2.5 shadow-pop-lg">
                <div className="overflow-hidden rounded-lg border-[3px] border-ink">
                  <PostCover art={post.art} className="block w-full" />
                </div>
              </div>
              <Sparkle className="absolute -left-4 -top-4 w-8 animate-twinkle [animation-delay:-0.8s]" />
            </div>
          </div>
        </header>
        <Zigzag from="hero" to="white" />

        {/* Short answer, takeaways, contents, then the post */}
        <div className="bg-white">
          <div className="container-site py-12 md:py-16">
            <div className="mx-auto max-w-[68ch] text-lg">
              <section aria-labelledby="short-answer" className="card-pop-lg relative bg-surface-cream p-6 md:p-8">
                <h2
                  id="short-answer"
                  className="absolute -top-4 left-5 rounded-full border-[3px] border-ink bg-sun px-3.5 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-ink shadow-pop-sm md:left-7"
                >
                  The Short Answer
                </h2>
                <p className="mt-2 text-lg font-semibold leading-relaxed text-ink md:text-xl md:leading-relaxed">
                  {renderInline(post.answer, {}, "answer")}
                </p>
              </section>

              {post.takeaways.length > 0 && (
                <section aria-labelledby="takeaways" className="mt-10">
                  <h2 id="takeaways" className="text-xl font-extrabold text-ink md:text-2xl">
                    What You&apos;ll Take Away
                  </h2>
                  <ul role="list" className="mt-4 space-y-3">
                    {post.takeaways.map((t, i) => (
                      <li key={i} className="flex gap-3 leading-relaxed text-ink/85">
                        <CheckBadge className="mt-0.5 size-7 shrink-0" />
                        <span className="min-w-0">{renderInline(t, {}, `tk${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {toc.length > 1 && (
                <nav
                  aria-labelledby="toc-title"
                  className="mt-10 rounded-xl border-[3px] border-line bg-surface p-5 md:p-6"
                >
                  <p id="toc-title" className="eyebrow">
                    In This Post
                  </p>
                  <ol role="list" className="mt-3 space-y-2">
                    {toc.map((h, i) => (
                      <li key={h.id} className="flex gap-3 text-base leading-snug">
                        <span aria-hidden="true" className="w-5 shrink-0 font-extrabold text-brand">
                          {i + 1}.
                        </span>
                        <a
                          href={`#${h.id}`}
                          className="font-semibold text-ink underline decoration-line decoration-2 underline-offset-4 hover:text-brand hover:decoration-brand"
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              <hr aria-hidden="true" className="my-12 border-0 border-t-[3px] border-dashed border-line" />
            </div>

            <PostBody blocks={post.body} />
          </div>
        </div>
      </article>

      {/* Follow-up questions */}
      {post.faqs.length > 0 && (
        <>
          <Zigzag from="white" to="pale" />
          <section className="bg-surface">
            <div className="container-site py-16 md:py-24">
              <SectionHeading
                title="Questions People Ask Next"
                highlight="Ask Next"
                lede="The things readers usually want to know once they've got this far."
              />
              <div className="mx-auto max-w-3xl">
                <FAQAccordion items={post.faqs} />
              </div>
            </div>
          </section>
        </>
      )}

      {/* Related posts */}
      {related.length > 0 && (
        <>
          {post.faqs.length > 0 && <Zigzag from="pale" to="white" />}
          <section className="bg-white">
            <div className="container-site py-16 md:py-24">
              <SectionHeading
                title="Keep Reading"
                highlight="Reading"
                lede={
                  <>
                    More on the same kind of problem. Or skip ahead and{" "}
                    <Link href={booking.anchor} className="font-bold text-brand underline">
                      ask us about yours
                    </Link>
                    .
                  </>
                }
              />
              <ul role="list" className="flex flex-wrap justify-center gap-8">
                {related.map((p) => (
                  <li
                    key={p.slug}
                    className="flex w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
                  >
                    <Reveal className="flex w-full">
                      <PostCard post={p} />
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </>
      )}

      <BookCall />
    </main>
  );
}

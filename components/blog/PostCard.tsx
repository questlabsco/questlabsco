import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/data/blog/types";
import PostCover from "./PostCover";

// A post as a card: cover drawing, category pill, title, excerpt and read
// time. The whole card is one link; it lifts on hover and presses into its
// shadow when clicked. The cover keeps moving on its own either way.
//
// `large` lays the card out side by side for the featured (newest) post.
export default function PostCard({
  post,
  large = false,
  headingLevel = "h3",
}: {
  post: BlogPost;
  large?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex h-full w-full flex-col rounded-2xl border-[3px] border-ink bg-white p-3 shadow-pop transition-[transform,box-shadow] duration-200 hover:-translate-y-1.5 hover:shadow-pop-lg active:translate-x-[3px] active:translate-y-[3px] active:shadow-pop-sm ${
        large ? "md:flex-row md:items-stretch md:gap-2" : ""
      }`}
    >
      <div
        className={`overflow-hidden rounded-lg border-[3px] border-ink ${
          large ? "aspect-[8/5] md:aspect-auto md:min-h-[17rem] md:w-[54%] md:shrink-0" : "aspect-[8/5]"
        }`}
      >
        <PostCover
          art={post.art}
          className="block h-full w-full transition-transform duration-300 group-hover:scale-[1.05] group-hover:-rotate-1"
        />
      </div>

      <div className={`flex flex-1 flex-col px-2 pb-2 pt-5 ${large ? "md:justify-center md:px-6 md:py-6" : ""}`}>
        <span className="pill self-start !px-3 !py-1 text-xs">{post.category}</span>
        <Heading
          className={`mt-4 font-extrabold leading-snug text-ink ${
            large ? "text-xl md:text-[1.85rem] md:leading-tight" : "text-lg"
          }`}
        >
          {post.title}
        </Heading>
        <p className={`mt-2 leading-relaxed text-ink/75 ${large ? "text-base md:text-lg" : "text-[15px]"}`}>
          {post.excerpt}
        </p>
        <span className="mt-auto flex items-center justify-between gap-3 pt-5 text-sm font-extrabold">
          <span className="inline-flex items-center gap-1.5 text-ink/70">
            <Clock aria-hidden="true" className="size-4" strokeWidth={2.75} />
            {post.readMinutes} min read
          </span>
          <span className="inline-flex items-center gap-1.5 text-brand">
            Read It
            <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </span>
      </div>
    </Link>
  );
}

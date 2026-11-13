import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import Reveal from "@/components/site/Reveal";
import { posts } from "@/lib/data/blog";
import PostCard from "./PostCard";

// Homepage section: the three newest posts.
export default function BlogTeaser() {
  const latest = posts.slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <section aria-label="From the blog" className="bg-surface">
      <div className="container-site py-16 md:py-24">
        <SectionHeading
          title="Fresh From The Blog"
          highlight="The Blog"
          lede="The questions we get on calls, answered the way we'd answer them across the table. Including the ones where the honest answer is that you don't need us yet."
          note="Written by the people who build it"
          noteSide="right"
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((post) => (
            <Reveal key={post.slug} className="flex">
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/blog" className="btn-outline-dark group">
            Read The Blog
            <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

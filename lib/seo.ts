import type { Metadata } from "next";
import { siteConfig } from "@/lib/data/site";

export const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Quest Labs Co.: AI automation and web development agency",
};

// Shortens copy to fit a search-result snippet: whole sentences where
// possible, otherwise a clean word boundary.
export function clip(text: string, max = 155): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const head = clean.slice(0, max + 1);
  const sentenceEnd = Math.max(
    head.lastIndexOf(". "),
    head.lastIndexOf("? "),
    head.lastIndexOf(": ")
  );
  if (sentenceEnd >= 70) return head.slice(0, sentenceEnd + 1).replace(/:$/, ".");
  const wordEnd = head.lastIndexOf(" ", max - 1);
  return `${head.slice(0, wordEnd).replace(/[,;:\s]+$/, "")}…`;
}

// Per-page metadata. Next.js replaces `openGraph` and `twitter` wholesale
// when a page sets them, so every page gets its own full set here.
export function pageMeta({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  const desc = clip(description);
  const socialTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description: desc,
      url: path,
      siteName: siteConfig.name,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: desc,
      images: [ogImage.url],
    },
  };
}

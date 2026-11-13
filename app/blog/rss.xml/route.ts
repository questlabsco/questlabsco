import { posts } from "@/lib/data/blog";
import { siteConfig } from "@/lib/data/site";

// RSS 2.0 feed of every post, written to /blog/rss.xml at build time.
export const dynamic = "force-static";

function xml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Noon UTC, so the date reads the same in every time zone.
const rfc822 = (iso: string) => new Date(`${iso}T12:00:00Z`).toUTCString();

export function GET() {
  const site = siteConfig.url;
  const feedUrl = `${site}/blog/rss.xml`;
  // Built from the newest post, not the clock, so the file only changes
  // when the content does.
  const latest = posts
    .map((p) => p.updated ?? p.date)
    .sort()
    .pop();
  const lastBuild = latest ? rfc822(latest) : undefined;

  const items = posts
    .map((p) => {
      const url = `${site}/blog/${p.slug}`;
      return [
        "    <item>",
        `      <title>${xml(p.title)}</title>`,
        `      <link>${xml(url)}</link>`,
        `      <guid isPermaLink="true">${xml(url)}</guid>`,
        `      <description>${xml(p.description)}</description>`,
        `      <category>${xml(p.category)}</category>`,
        `      <pubDate>${rfc822(p.date)}</pubDate>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const body = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">`,
    "  <channel>",
    `    <title>${xml(`${siteConfig.name} Blog`)}</title>`,
    `    <link>${xml(`${site}/blog`)}</link>`,
    `    <description>${xml(
      "Plain answers on AI agents, workflow automation tools and what automation really costs."
    )}</description>`,
    "    <language>en-us</language>",
    ...(lastBuild ? [`    <lastBuildDate>${lastBuild}</lastBuildDate>`] : []),
    `    <atom:link href="${xml(feedUrl)}" rel="self" type="application/rss+xml" />`,
    items,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}

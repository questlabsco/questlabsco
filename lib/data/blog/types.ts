// Content model for blog posts. Each post is one file in
// lib/data/blog/posts/<slug>.ts that default-exports a BlogPost.
//
// Inline formatting inside any text string:
//   [link text](/internal/path) or [link text](https://example.com)
//   **bold**
// Nothing else (no headings, lists or HTML inside strings).

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  // A boxed aside: a tip, a warning, a rule of thumb.
  | { type: "callout"; title?: string; text: string }
  // Comparison table. Every row has the same number of cells as `head`.
  | { type: "table"; head: string[]; rows: string[][] }
  // An in-article nudge to the free automation audit. `text` is one sentence.
  | { type: "cta"; text: string };

export type BlogCategory =
  | "Automation Basics"
  | "Tools"
  | "AI Agents"
  | "Industry Playbooks"
  | "Buying Guide";

// Which cover drawing the post uses (drawn by the blog components).
export type BlogArt =
  | "tools"
  | "robot"
  | "checklist"
  | "calendar"
  | "phone"
  | "house"
  | "truck"
  | "scales"
  | "magnifier"
  | "pricetag";

export type BlogPost = {
  slug: string;
  // Headline, Title Case, under 65 characters where possible.
  title: string;
  // Meta description, 140 to 155 characters, plain sentence case.
  description: string;
  // One or two sentences for cards.
  excerpt: string;
  category: BlogCategory;
  // ISO date, e.g. "2026-11-12".
  date: string;
  updated?: string;
  readMinutes: number;
  art: BlogArt;
  // The direct answer to the question the post is about, 40 to 60 words,
  // shown in a box at the top. Must stand on its own without the rest.
  answer: string;
  // Three to five one-line takeaways.
  takeaways: string[];
  body: Block[];
  // Three or four real questions a reader would ask next.
  faqs: { q: string; a: string }[];
  // Slugs of two or three related posts.
  related: string[];
};

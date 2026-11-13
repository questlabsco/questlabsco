import Link from "next/link";
import type { ReactNode } from "react";
import type { Block } from "@/lib/data/blog/types";

// A tiny, safe parser for the inline formatting posts are allowed to use:
//
//   [link text](/internal/path)   -> next/link
//   [link text](https://site.com) -> <a target="_blank" rel="noopener noreferrer">
//   **bold**                      -> <strong>
//
// Everything else is output as plain text, so React escapes it. No HTML
// from a post ever reaches the page as markup.

const LINK = String.raw`\[([^\]\n]+)\]\(([^)\s]+)\)`;
const BOLD = String.raw`\*\*([^*\n]+?)\*\*`;

type Href = { href: string; internal: boolean };

// Only site paths, in-page anchors, http(s) and mailto links are allowed.
// Anything else (javascript:, data:, protocol-relative //...) is dropped and
// only the link text is shown.
function safeHref(raw: string): Href | null {
  const url = raw.trim();
  if (url.startsWith("#")) return { href: url, internal: true };
  if (url.startsWith("/") && !url.startsWith("//")) {
    // Internal links have no trailing slash (the form the site serves).
    const href = url.length > 1 ? url.replace(/\/+(?=$|[?#])/, "") : url;
    return { href, internal: true };
  }
  if (/^https?:\/\/[^\s/]+/i.test(url)) return { href: url, internal: false };
  if (/^mailto:[^\s]+$/i.test(url)) return { href: url, internal: false };
  return null;
}

const linkClass =
  "font-bold text-brand underline decoration-2 underline-offset-[3px] hover:text-brand-dark";

export function renderInline(
  text: string,
  { links = true }: { links?: boolean } = {},
  keyBase = "t"
): ReactNode[] {
  // A fresh regex per call: the parser recurses, and a shared global regex
  // would carry its lastIndex between calls.
  const token = new RegExp(`${LINK}|${BOLD}`, "g");
  const out: ReactNode[] = [];
  let last = 0;
  let n = 0;
  let m: RegExpExecArray | null;

  while ((m = token.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    last = m.index + m[0].length;
    const key = `${keyBase}-${n++}`;

    if (m[3] !== undefined) {
      out.push(
        <strong key={key} className="font-extrabold text-ink">
          {renderInline(m[3], { links }, key)}
        </strong>
      );
      continue;
    }

    // A link. Its text may be bold, but never holds another link.
    const label = renderInline(m[1], { links: false }, key);
    const href = links ? safeHref(m[2]) : null;
    if (!href) {
      out.push(<span key={key}>{label}</span>);
    } else if (href.internal) {
      out.push(
        <Link key={key} href={href.href} className={linkClass}>
          {label}
        </Link>
      );
    } else if (href.href.startsWith("mailto:")) {
      out.push(
        <a key={key} href={href.href} className={linkClass}>
          {label}
        </a>
      );
    } else {
      out.push(
        <a
          key={key}
          href={href.href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {label}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      );
    }
  }

  if (last < text.length) out.push(text.slice(last));
  return out;
}

// The same text with the formatting marks removed, for ids and labels.
export function plainText(text: string): string {
  return text
    .replace(new RegExp(LINK, "g"), "$1")
    .replace(new RegExp(BOLD, "g"), "$1")
    .trim();
}

function slugify(text: string): string {
  return (
    plainText(text)
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 80)
      .replace(/-+$/g, "") || "section"
  );
}

// Anchor ids for every h2 in a post, in order and unique within the post.
// PostBody and the table of contents both use this, so they always agree.
export function headingAnchors(blocks: Block[]): { id: string; text: string }[] {
  const seen = new Map<string, number>();
  const out: { id: string; text: string }[] = [];
  for (const block of blocks) {
    if (block.type !== "h2") continue;
    const base = slugify(block.text);
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    out.push({ id: count ? `${base}-${count + 1}` : base, text: plainText(block.text) });
  }
  return out;
}

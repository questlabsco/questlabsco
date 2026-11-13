import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Mascot from "@/components/art/Mascot";
import type { Block } from "@/lib/data/blog/types";
import { booking } from "@/lib/data/site";
import { headingAnchors, plainText, renderInline } from "./inline";

const INK = "#1B1D4E";
const pivot = { transformBox: "fill-box", transformOrigin: "center" } as const;

// Renders a post's body blocks as plain semantic HTML in the site style.
// Server component: every word is in the static HTML.
export default function PostBody({ blocks }: { blocks: Block[] }) {
  const anchors = headingAnchors(blocks);
  let h2 = 0;

  return (
    <div className="post-body mx-auto max-w-[68ch] text-lg text-ink/85 [&>*:first-child]:mt-0">
      {blocks.map((block, i) => {
        const key = `b${i}`;
        switch (block.type) {
          case "p":
            return (
              <p key={key} className="mt-6 leading-[1.8]">
                {renderInline(block.text, {}, key)}
              </p>
            );

          case "h2": {
            const id = anchors[h2++]?.id;
            return (
              <h2
                key={key}
                id={id}
                className="mt-14 scroll-mt-28 text-[1.65rem] font-extrabold leading-tight text-ink md:text-[2rem]"
              >
                {renderInline(block.text, { links: false }, key)}
              </h2>
            );
          }

          case "h3":
            return (
              <h3
                key={key}
                className="mt-10 text-xl font-extrabold leading-snug text-ink md:text-[1.4rem]"
              >
                {renderInline(block.text, { links: false }, key)}
              </h3>
            );

          case "ul":
            return (
              <ul key={key} role="list" className="mt-6 space-y-3">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3.5 leading-[1.75]">
                    <span
                      aria-hidden="true"
                      className="mt-[0.55em] size-3 shrink-0 rounded-full border-[2.5px] border-ink bg-sun"
                    />
                    <span className="min-w-0">{renderInline(item, {}, `${key}-${j}`)}</span>
                  </li>
                ))}
              </ul>
            );

          case "ol":
            return (
              <ol key={key} role="list" className="mt-6 space-y-4">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3.5 leading-[1.75]">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border-[3px] border-ink bg-sun text-sm font-extrabold text-ink shadow-pop-sm"
                    >
                      {j + 1}
                    </span>
                    <span className="min-w-0">{renderInline(item, {}, `${key}-${j}`)}</span>
                  </li>
                ))}
              </ol>
            );

          case "callout":
            return <Callout key={key} title={block.title} text={block.text} k={key} />;

          case "table":
            return <PostTable key={key} head={block.head} rows={block.rows} k={key} />;

          case "cta":
            return <PostCta key={key} text={block.text} k={key} />;

          default:
            return null;
        }
      })}
    </div>
  );
}

// A boxed aside with a yellow strip and a little lightbulb.
function Callout({ title, text, k }: { title?: string; text: string; k: string }) {
  return (
    <aside className="card-pop relative mt-9 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-3.5 border-r-[3px] border-ink bg-sun"
      />
      <div className="flex gap-4 py-5 pl-8 pr-5 md:gap-5 md:py-6 md:pl-10 md:pr-7">
        <Bulb className="mt-0.5 w-9 shrink-0 md:w-11" />
        <div className="min-w-0">
          {title && (
            <p className="text-base font-extrabold uppercase tracking-[0.08em] text-ink">
              {renderInline(title, { links: false }, `${k}-t`)}
            </p>
          )}
          <p className={`${title ? "mt-2" : ""} leading-[1.75] text-ink/85`}>
            {renderInline(text, {}, k)}
          </p>
        </div>
      </div>
    </aside>
  );
}

function Bulb({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 54"
      className={className}
      aria-hidden="true"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* glow lines */}
      <g className="animate-twinkle" style={{ ...pivot, animationDuration: "2.6s" }}>
        <path d="M4 10l4 3M40 10l-4 3M22 1v4" stroke={INK} strokeWidth="2.8" />
      </g>
      <g className="animate-wiggle" style={{ transformBox: "view-box", transformOrigin: "22px 50px", animationDuration: "3.4s" }}>
        <path
          d="M22 7a14 14 0 0 0-8 25.5c1.6 1.2 2.4 2.8 2.4 4.5v1.5h11.2V37c0-1.7.8-3.3 2.4-4.5A14 14 0 0 0 22 7z"
          fill="#FFE38A"
          stroke={INK}
          strokeWidth="3.2"
        />
        <rect x="16" y="38.5" width="12" height="8" rx="3" fill="#FFFFFF" stroke={INK} strokeWidth="3" />
        <g className="animate-blink" style={{ ...pivot, animationDuration: "5.2s" }}>
          <circle cx="18" cy="21" r="1.9" fill={INK} />
          <circle cx="26" cy="21" r="1.9" fill={INK} />
        </g>
        <path d="M18.5 26.5q3.5 3 7 0" stroke={INK} strokeWidth="2.4" />
      </g>
    </svg>
  );
}

// Comparison table. Desktop: a coloured header bar and each row its own
// outlined, rounded bar. Phones: every row becomes a card, with each value
// labelled by its column. One <table> either way, so the content is never
// duplicated, and the wrapper keeps any overflow inside itself.
function PostTable({ head, rows, k }: { head: string[]; rows: string[][]; k: string }) {
  const edge =
    "md:border-y-[3px] md:border-ink md:first:rounded-l-xl md:first:border-l-[3px] md:last:rounded-r-xl md:last:border-r-[3px]";
  return (
    <div className="mt-9 max-w-full overflow-x-auto lg:-mx-12 lg:max-w-none">
      <table className="block w-full text-left text-base md:table md:border-separate md:border-spacing-y-3">
        <thead className="sr-only md:not-sr-only md:table-header-group">
          <tr>
            {head.map((h, j) => (
              <th
                key={j}
                scope="col"
                className={`bg-brand px-4 py-3 text-sm font-extrabold uppercase tracking-wide text-white ${edge}`}
              >
                {renderInline(h, { links: false }, `${k}-h${j}`)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="block space-y-4 md:table-row-group md:space-y-0">
          {rows.map((row, r) => (
            <tr
              key={r}
              className="block rounded-xl border-[3px] border-ink bg-white p-4 shadow-pop-sm md:table-row md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none"
            >
              {row.map((cell, c) => {
                const content = renderInline(cell, {}, `${k}-${r}-${c}`);
                if (c === 0) {
                  return (
                    <th
                      key={c}
                      scope="row"
                      className={`block border-b-2 border-line pb-2.5 text-lg font-extrabold leading-snug text-ink md:table-cell md:border-b-[3px] md:bg-surface-cream md:px-4 md:py-3.5 md:align-top md:text-base ${edge}`}
                    >
                      {content}
                    </th>
                  );
                }
                return (
                  <td
                    key={c}
                    data-label={head[c] ? plainText(head[c]) : undefined}
                    className={`block pt-3 leading-relaxed text-ink/85 before:mb-0.5 before:block before:text-xs before:font-extrabold before:uppercase before:tracking-[0.1em] before:text-brand before:content-[attr(data-label)] md:table-cell md:bg-white md:px-4 md:py-3.5 md:align-top md:before:content-none ${edge}`}
                  >
                    {content}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// In-article nudge to the free audit.
function PostCta({ text, k }: { text: string; k: string }) {
  return (
    <aside className="card-pop-lg mt-10 bg-surface-cream p-6 md:p-7">
      <div className="flex items-center gap-4 md:gap-5">
        <div aria-hidden="true" className="w-14 shrink-0 animate-float md:w-16" style={{ animationDuration: "4.6s" }}>
          <Mascot mood="happy" wave className="w-full" />
        </div>
        <p className="min-w-0 text-lg font-bold leading-snug text-ink md:text-xl">
          {renderInline(text, {}, k)}
        </p>
      </div>
      <div className="mt-5 flex justify-center sm:justify-start sm:pl-[4.5rem] md:pl-[5.25rem]">
        <Link href={booking.page} className="btn-primary group w-full sm:w-auto">
          {booking.labelLong}
          <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </aside>
  );
}

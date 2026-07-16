# Final — push & deploy checklist

Everything below was verified today with a clean build (`.next`/`out` deleted, rebuilt
from scratch: **32/32 pages generated, no errors**). The site is a fully static
export — no server, no API routes, no database — so it's a straightforward fit
for Cloudflare Pages' free plan.

## 1. Why this runs on Cloudflare Pages free plan

- `next.config.ts` has `output: "export"` and `images.unoptimized: true` —
  Next builds to plain HTML/CSS/JS in `out/`, no Node server required at runtime.
- No `app/api/*` routes, no server actions, no `next/image` (which would need
  a loader). Everything is a static `<img>` tag.
- Every dynamic route (`services/[slug]`, `industries/[slug]`,
  `case-studies/[slug]`) has `generateStaticParams`, so all pages are
  pre-rendered at build time — nothing needs to run per-request.
- Build output: **320 files, ~12 MB total**. Free plan limits are far above
  this (20,000 files / deployment, 25 MB / file, unlimited requests & bandwidth,
  500 builds / month).
- The contact form posts straight to Web3Forms from the browser (no backend),
  and the Calendly widget is a client-side `<script>` — both work fine as
  static files.

No paid Cloudflare feature (Workers, D1, KV, Pages Functions) is needed for
anything currently on the site.

## 2. Repo hygiene done before you push

- `.gitignore` now also excludes `.claude/`, `/screenshots/` (the reference
  mockups you gave me), `.vscode/`, `.idea/` — none of that belongs in the repo.
- Added `.nvmrc` (`20`) and `"engines": { "node": ">=20" }` in `package.json` so
  Cloudflare's build container picks a Node version Next.js 16 actually supports.
  (Without this, Cloudflare may default to an older Node and the build can fail.)
- Fixed two broken references I found while double-checking every image path
  against the actual files in `public/`:
  - A case study (`ecommerce-personalization`) pointed at an image file that
    no longer exists after this session's image swaps — repointed to
    `laptop-website.jpg`.
  - `public/sitemap.xml` still listed `/services/machine-learning/`, a page
    that was removed earlier — deleted that line.
  - Deleted three logo files (`logo.png`, `logo-dark.png`, `logo-full.png`)
    that nothing in the code references anymore.
- Two loose files still sit in the project root: `questlabs new logo.png` and
  `questlabsco logo with company name (2).png`. These are your original source
  assets (I already cropped/copied what's needed into `public/`) — harmless to
  commit, but you can delete them from the repo if you'd rather not carry
  ~1 MB of source art in git history.

Pushed to `github.com/questlabsco/questlabsco`.

## 3. Cloudflare project type: Workers (not classic Pages) — deploy command fix

Cloudflare's dashboard created this as a **Workers** project (their newer
unified "Workers Builds" system), not a classic Pages project. That type
requires an explicit deploy step after the build — Cloudflare tried to run
`npm run deploy`, which didn't exist yet and failed with `Missing script:
"deploy"`.

Fixed by adding:
- **`wrangler.toml`** — tells Wrangler to serve the static `out/` directory as
  the deployed assets (`[assets] directory = "./out"`). `name` is set to
  `"questlabsco"` — **double-check this matches your actual Cloudflare project
  name exactly** (dashboard → your project → Settings), otherwise Wrangler may
  try to create a new Worker instead of updating the existing one.
- **`wrangler`** as a devDependency, and a `"deploy": "wrangler deploy"` script
  in `package.json`.
- Verified locally with `npx wrangler deploy --dry-run` — it correctly read
  413 files from `out/` and validated with no errors (no live deploy happens
  in dry-run, so no auth was needed to check this).

Cloudflare's own build environment is already authenticated to your account
for this project, so `wrangler deploy` running inside their build pipeline
needs no extra secrets/API tokens from you.

**Next step:** commit and push these files (`wrangler.toml`, updated
`package.json`, `package-lock.json`, `.gitignore`) — Cloudflare will pick it up
and the build + deploy should both succeed.

### Follow-up fix 2: build step wasn't running at all before deploy

Third attempt: Node 22 installed correctly, `npm run deploy` ran wrangler
successfully — but wrangler immediately errored that `out/` didn't exist. The
build log confirmed why: it went straight from "Installing project
dependencies" to "Executing user deploy command", with **no build command
step in between** — the Cloudflare project's "Build command" dashboard field
is apparently empty, so `next build` never ran.

Rather than depend on that dashboard field being set correctly, made the
`deploy` script self-contained: `"deploy": "next build && wrangler deploy"`.
Now the build always happens right before the deploy regardless of dashboard
config. Verified locally end-to-end (`next build` → 32/32 pages → wrangler
dry-run reads all 413 files from `out/` with no errors).

You can still set the dashboard **Build command** to `npm run build` for
clarity/logging, but it's no longer load-bearing.

### Follow-up fix: wrangler needs Node ≥22

First deploy attempt after the above still failed: `wrangler@4.107.0` itself
requires Node ≥22, but `.nvmrc` had Node 20 pinned (right for Next.js, too old
for this wrangler version). Bumped `.nvmrc` and `package.json`'s
`engines.node` to `22`, rebuilt clean, and re-ran `npx wrangler deploy
--dry-run` locally on Node 22 — both the Next build and the wrangler dry-run
succeed. Push this change too; Cloudflare will pick up Node 22 from `.nvmrc`
for the next build.

### Build settings for reference (Settings → Build)

- **Build command:** `npm run build`
- **Deploy command:** `npm run deploy` (now exists)
- **Build output directory:** `out` (Wrangler reads this via `wrangler.toml`,
  not this dashboard field, but leave it set to `out` regardless)
- **Node version:** picked up from `.nvmrc` (confirmed in the build log:
  `nodejs@20.20.2`)
- No environment variables are required — the Web3Forms access key is a
  public client-side key by design and already lives in `lib/data/site.ts`.
- Add your real domain under the project's **Custom domains** tab once it's
  deploying successfully.

## 4. Still-placeholder content to replace before going fully live

Everything below is marked `EDIT-ME` in the code and is safe to edit anytime
(no rebuild-breaking risk — just data). Search the repo for `EDIT-ME` to jump
straight to each spot:

| File | What's placeholder |
|---|---|
| `lib/data/site.ts` | Social links (`linkedin`, `x` are dummy URLs), headline stats (23 years / 34% / 86% / 18 years) |
| `lib/data/recognition.ts` | Rating, market report, ISO certification, cloud partner claims — all placeholder text |
| `lib/data/testimonials.ts` | Quotes, author names, and company names are placeholders |
| `lib/data/case-studies.ts` | All six case studies are realistic placeholder projects — client names say "Confidential (EDIT-ME)" |
| `app/privacy/page.tsx`, `app/terms/page.tsx` | Legal boilerplate marked for review |
| `public/sitemap.xml` | Domain is `questlabsco.com` — update if your final domain differs |

None of this blocks a deploy — the site works correctly with placeholders in
place. It's just what to swap in before you'd call it "real."

## 5. Confirmed working this session

- Clean `npm run build` from a fully deleted `.next`/`out` (i.e. exactly what
  Cloudflare's build container will do) — 32/32 pages, zero errors.
- Every image path referenced in `app/`, `lib/`, and `components/` was checked
  against actual files in `public/` — all resolve correctly now.
- Contact form, Calendly embed, and the mega-menu/case-study/testimonial
  carousels all work purely client-side — nothing here needs a server.

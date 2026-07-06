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

This repo has **not** been initialized with git yet (no `.git` folder). To push:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## 3. Deploying on Cloudflare Pages (free)

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
2. Pick the repo you just pushed.
3. Build settings:
   - **Framework preset:** Next.js (Static HTML Export) — or "None"
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** picked up automatically from `.nvmrc` (20); if Cloudflare
     doesn't detect it, set the environment variable `NODE_VERSION = 20`
     manually in the Pages project settings.
4. No environment variables are required — the Web3Forms access key is a
   public client-side key by design (that's how Web3Forms works) and is
   already in `lib/data/site.ts`.
5. Deploy. Cloudflare gives you a `*.pages.dev` URL immediately.
6. Add your real domain under the project's **Custom domains** tab and follow
   Cloudflare's DNS instructions (trivial if the domain is already on
   Cloudflare; otherwise it'll walk you through it).

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

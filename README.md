# Quest Labs Co. — Website

Multi-page corporate site for Quest Labs Co. Built with Next.js (static
export), Tailwind CSS, and framer-motion. Deploys to **Cloudflare Pages free
plan** as pure static files — no server required.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export into ./out
```

## Deploy to Cloudflare Pages (free)

1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. Deploy. Add your custom domain under the project's *Custom domains* tab.

## Editing content (the important part)

All content lives in `lib/data/` — you edit data files, not page code.
Everything placeholder is marked with **`EDIT-ME`** comments:

| File | What's in it |
|---|---|
| `lib/data/site.ts` | Email, Calendly URL, Web3Forms key, social links, **stats**, **office locations**, values |
| `lib/data/clients.ts` | "Trusted by" company marks (currently placeholder names — replace!) |
| `lib/data/recognition.ts` | Award/certification badges (placeholders — replace!) |
| `lib/data/testimonials.ts` | Client quotes (placeholders — replace!) |
| `lib/data/case-studies.ts` | The six case studies (placeholder projects — replace with real ones) |
| `lib/data/services.ts` | All nine service pages' copy |
| `lib/data/industries.ts` | All eight industry pages' copy |
| `lib/data/process.ts`, `techstack.ts` | Delivery steps and tech-stack tabs |

Find every remaining placeholder with a search for `EDIT-ME`.

- **Images:** `public/images/` (free-licensed Unsplash photos — swap freely).
  Paths are referenced in the data files.
- **Logos:** `public/logo.png` (white, used on dark) and `public/logo-dark.png`
  (generated dark variant, used on white).
- **Contact form:** posts to Web3Forms → questlabsco@gmail.com. Key lives in
  `lib/data/site.ts`.
- **Sitemap:** `public/sitemap.xml` — update if you add/remove pages or change
  the domain.

## Structure

- `app/` — pages: home, `services/[slug]`, `industries/[slug]`,
  `case-studies/[slug]`, about, contact, privacy, terms
- `components/site/` — header (mega-menu), footer, hero canvas animation,
  section components, contact form
- Fonts: **Mona Sans** via `next/font/google`

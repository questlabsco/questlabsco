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
Some of it is still placeholder content that should be replaced with real
Quest Labs facts before launch:

| File | What's in it |
|---|---|
| `lib/data/site.ts` | Email, Calendly URL, Web3Forms key, social links, **stats**, **office locations**, values |
| `lib/data/clients.ts` | "Trusted by" company marks (currently placeholder names — replace!) |
| `lib/data/recognition.ts` | Award/certification badges (placeholders — replace!) |
| `lib/data/engagements.ts` | The eight example engagements at `/examples` (scopes with targets, not client results) |
| `lib/data/services.ts` | All nine service pages' copy |
| `lib/data/industries.ts` | All eight industry pages' copy |
| `lib/data/process.ts`, `techstack.ts` | Delivery steps and tech-stack tabs |

- **Images:** `public/images/` (free-licensed Unsplash photos — swap freely).
  Paths are referenced in the data files.
- **Logos:** `public/logo.png` (white, used on dark) and `public/logo-dark.png`
  (generated dark variant, used on white).
- **Contact form:** posts to Web3Forms → questlabsco@gmail.com. Key lives in
  `lib/data/site.ts`.
- **Sitemap:** generated at build time by `app/sitemap.ts` from the data files,
  so it updates itself when you add or remove pages. The domain lives in
  `lib/data/site.ts` (`siteConfig.url`).
- **Booking:** every main button books a call. The Calendly link is
  `siteConfig.calendlyUrl`; the button label and target are `booking` in the
  same file.
- **Images:** served as WebP. After adding or replacing an image, add its pixel
  size to `lib/image-dims.ts`.
- **Response headers:** `public/_headers` (security headers and caching).

## Structure

- `app/` — pages: home, `services/[slug]`, `industries/[slug]`,
  `examples/[slug]`, about, contact, privacy, terms
- `components/site/` — header (mega-menu), footer, hero canvas animation,
  section components, contact form
- Fonts: **Mona Sans** via `next/font/google`

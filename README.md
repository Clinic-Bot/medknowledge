# MedKnowledge — Colleges Landing Page

A production-ready, dependency-free landing page inviting Medical, Nursing,
Allied Health and Pharmacy institutions to share **MedKnowledge**
(https://medknowledge.diagnos-tick.in) with their students.

Built by **Skylinn Voxel Studio Private Limited** (Skyline Pixel Studio).

- Route: `/colleges`
- Live target: `https://medknowledge.diagnos-tick.in/colleges`

## Stack

Plain HTML5 / CSS3 / vanilla JavaScript. No build step, no framework, no
JS/CSS CDN dependencies. Fonts use the OS system-font stack (Segoe UI /
San Francisco / Roboto) so nothing external needs to load — this keeps the
page fast and fully self-contained.

The only outbound network call the page makes at runtime is optional: the
**Generate QR Code** button loads one image from `api.qrserver.com`. If you
need a fully offline build, swap that for a self-hosted QR generator (e.g.
bundle a small QR-generation script) — the call site is clearly marked in
`script.js`.

## Folder structure

```
medknowledge-colleges/
├── index.html
├── style.css
├── script.js
├── robots.txt
├── sitemap.xml
├── README.md
├── assets/
│   └── MedKnowledge_Brochure.pdf   (placeholder — replace with the real brochure)
├── images/                         (drop real screenshots here, see below)
└── icons/
    ├── favicon.svg
    └── logo.svg
```

`privacy.html` and `terms.html` are linked from the footer as placeholders —
add real policy pages before going live, or point those links at existing
pages on skylinepixelstudio.in.

## Content you'll likely want to customize

| What | Where |
|---|---|
| Feature cards (15 items) | `FEATURES` array in `script.js` |
| Screenshot cards (6 items) | `SCREENS` array in `script.js` — swap the placeholder thumbnail `<div class="screen-thumb">` markup in `renderScreens()` for a real `<img loading="lazy" src="images/screenshot-1.jpg" alt="…">` once you have screenshots |
| "Why Trust Us" cards | `TRUST` array in `script.js` |
| Stat counters (values only, editable without touching JS) | `data-count` / `data-suffix` attributes in `index.html`, `#stats` section |
| Testimonials | `#testiSlides` markup in `index.html` — replace "Coming Soon" quotes once you have real ones |
| Brochure PDF | `assets/MedKnowledge_Brochure.pdf` — a placeholder brochure is included; replace with your final design |
| Donation link | Already wired to `https://pmny.in/xJuAmT6XgxX7` in `index.html` |
| OG/Twitter share image | Add a real image at `images/og-cover.jpg` (1200×630) — the meta tags in `<head>` already reference this path |

## SEO included

- `robots.txt` and `sitemap.xml`
- Canonical URL, meta description/keywords
- Open Graph + Twitter Card tags
- `Organization` and `EducationalOrganization` JSON-LD structured data
- Semantic heading hierarchy (single `<h1>` in the hero, `<h2>` per section, `<h3>` per card)

## Accessibility

- Skip-to-content link
- Visible focus states (`:focus-visible`)
- ARIA labels on icon-only controls (nav toggle, carousel arrows, QR toggle)
- FAQ accordion and carousel are fully keyboard operable
- `prefers-reduced-motion` respected — animations are disabled for users who request it
- Alt text on all meaningful images; decorative SVGs marked `aria-hidden`

## Performance

- No render-blocking third-party requests
- `loading="lazy"` set on the QR image and ready to apply to real screenshots
- Single stylesheet, single script — minimal request count
- For production, let **Cloudflare Pages' automatic Auto Minify** (Speed →
  Optimization in the dashboard) handle HTML/CSS/JS minification rather than
  hand-minifying — it keeps the source files readable for future edits while
  still shipping compressed output. Enable Brotli compression the same way.

---

## Deploy: GitHub + Cloudflare Pages

### 1. Push to GitHub

```bash
cd medknowledge-colleges
git init
git add .
git commit -m "Initial commit: MedKnowledge colleges landing page"
git branch -M main
git remote add origin https://github.com/<your-org>/medknowledge-colleges.git
git push -u origin main
```

### 2. Connect Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Select the `medknowledge-colleges` repository, branch `main`.
3. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/`
4. Deploy. Cloudflare will give you a `*.pages.dev` URL first.

### 3. Route it under `/colleges` on `medknowledge.diagnos-tick.in`

If `medknowledge.diagnos-tick.in` is an existing Cloudflare Pages/Workers
project, the cleanest option is a **Worker route** or a **_redirects /
subpath deployment**:

- **Option A — separate Pages project + route:** Keep this as its own Pages
  project, then add a Cloudflare Worker (or a Pages "Advanced" routing
  rule) on the `medknowledge.diagnos-tick.in` zone that proxies
  `/colleges*` to this project's deployment.
- **Option B — same repo:** If the main MedKnowledge site is also on
  Cloudflare Pages, copy this project's files into a `/colleges` folder in
  that repo instead, so it deploys as part of the same Pages project at
  `medknowledge.diagnos-tick.in/colleges` with zero extra routing.

### 4. After deployment

In the Cloudflare dashboard for the zone:
- **SSL/TLS:** set to Full (Strict) — HTTPS is automatic on Pages.
- **Speed → Optimization:** enable Auto Minify (HTML/CSS/JS) and Brotli.
- **Caching:** default Pages caching is fine for static assets; purge cache after each deploy if you're testing changes.
- **Security → Settings:** consider enabling a baseline set of security headers (`X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`) via a `_headers` file in this project root if Option A is used.

### Optional: GitHub Actions (manual deploy is otherwise recommended)

```yaml
# .github/workflows/deploy.yml
name: Deploy to Cloudflare Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Publish to Cloudflare Pages
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: pages deploy . --project-name=medknowledge-colleges
```

Manual deploy via Wrangler (no CI needed):

```bash
npx wrangler pages deploy . --project-name=medknowledge-colleges
```

---

© Skylinn Voxel Studio Private Limited. Built for the MedKnowledge initiative.

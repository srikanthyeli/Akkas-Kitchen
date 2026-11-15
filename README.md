# AKKAS KITCHEN · అక్క ఇంటి వంట (Next.js)

The AKKAS KITCHEN landing page as a Next.js 16 project (App Router, TypeScript, Tailwind CSS v4).
It is a port of the static site in `akkas-kitchen-site/`, with the same content, design, images and behaviour.
It builds to a plain static site in `out/` that you can host anywhere.

## Requirements

- Node.js 20.9 or newer, and npm

## Commands

```bash
npm install      # install dependencies
npm run dev      # dev server at http://localhost:3000
npm run build    # static export to ./out
npm run lint     # ESLint (next/core-web-vitals + TypeScript)
npm test         # unit tests for the WhatsApp order-link builder
```

Preview the production build locally:

```bash
npm run build
npx serve out    # or: python3 -m http.server 8080 --directory out
```

## Deploy

`next.config.ts` sets `output: "export"` and `images.unoptimized: true`, so `npm run build` writes a fully static site to `out/`. No Node server is needed.

### Netlify

**Option 1: Git (recommended)**
1. Push this folder to GitHub, GitLab or Bitbucket.
2. In Netlify, choose **Add new site → Import an existing project** and pick the repo.
3. Set **Build command** to `npm run build` and **Publish directory** to `out`.
4. Deploy.

**Option 2: Netlify CLI**
```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --dir out          # draft preview URL
netlify deploy --prod --dir out   # production
```

**Option 3: Drag and drop.** Run `npm run build`, then drop the `out/` folder onto https://app.netlify.com/drop.

### Anywhere else

Upload the contents of `out/` to any static host, for example Vercel, Cloudflare Pages, GitHub Pages, S3 or nginx.
Images and assets use root paths (`/images/...`, `/_next/...`). If you host under a sub-path such as GitHub Pages `/<repo>/`, add `basePath` in `next.config.ts`.

## Project structure

```
app/
  layout.tsx        fonts (next/font: Playfair Display, Inter, Noto Sans Telugu) + metadata
  page.tsx          composes the sections
  globals.css       Tailwind import, brand theme tokens, ported site styles
components/
  Nav.tsx  Hero.tsx  About.tsx  Menu.tsx  FeaturedMeal.tsx  DishCard.tsx
  Location.tsx  LocationCard.tsx  Instagram.tsx  Order.tsx  Footer.tsx
  OrderForm.tsx       client component: builds the wa.me order link
  WhatsAppFab.tsx     floating WhatsApp button (shown at ≤860px)
  RevealObserver.tsx  client component: scroll-reveal animation
  SectionHeading.tsx  icons.tsx  site.ts
lib/
  whatsapp.ts       buildWaLink() / waLink(), number 919703235395
  whatsapp.test.ts  tests (npm test)
public/images/      photos (frames from the reel)
```

## Order form

The form at the bottom (`components/OrderForm.tsx`) requires Name, Phone and Item(s). It opens:

```
https://wa.me/919703235395?text=<encodeURIComponent(message)>
```

The message is:

```
AKKAS KITCHEN ఆర్డర్ కోసం
Name: …
Phone: …
Item(s): …
Quantity: …
Delivery area: …
Notes: …
```

Brand colours are Tailwind theme tokens in `app/globals.css`: `cream` #fbf5e9, `brand-orange` #d9580f, `brand-green` #1f3d2b and others.

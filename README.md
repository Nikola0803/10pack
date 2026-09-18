# EVLV Today — Next.js storefront

A pure React/Next.js rebuild of the EVLV Today site that was exported from Readdy,
built to sit on Vercel as a headless front end for a CRM.

The rebuild is a faithful reproduction, not a re-interpretation: at 1440px and at
390px every page renders to **exactly the same document height as the original
export**, with per-page pixel differences of ≤0.5% confined to things that are
supposed to differ (a live countdown, real cart state, and one card that happened
to be captured mid-hover).

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS 3, with the original build's theme reconstructed from its compiled
  stylesheet (`tailwind.config.ts`) and its bespoke component classes carried over
  verbatim (`src/app/globals.css`)
- Inter and Fraunces self-hosted from the exact woff2 subsets the original served
  (`public/fonts`), so line-breaking matches and the site makes no third-party font
  request
- Remixicon for icons (the only icon set the markup actually uses)

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
npm run typecheck
```

## Deploying to Vercel

Zero configuration: import the repository, framework preset "Next.js", build
`npm run build`. Every route is static or SSG today, so the whole site serves from
the edge until the CRM calls are added.

## Routes

| Route | Source page |
| --- | --- |
| `/` | Homepage |
| `/shop` | Shop, with working search, sort and category filters |
| `/shop/[slug]` | Product detail, pre-rendered for all 12 compounds |
| `/cart` | Cart, backed by real cart state |
| `/auth` | Sign in / create account (one page, two tabs) |
| `/coa` `/quality` `/research` `/research-use` | Documentation pages |
| `/membership` `/partner-program` | Programme pages |
| `/contact` `/faq` `/shipping` `/returns` `/track-order` `/report-abuse` | Support pages |
| `/privacy` `/terms` `/disclaimer` | Legal pages |
| `/verify` | Redirects to `/coa` — see "Known gaps" |

## Where the CRM plugs in

Everything the CRM will own is already isolated behind a small number of modules,
so wiring it up does not touch page markup:

- **`src/lib/products.ts`** — the product catalogue. Shaped like an API response
  (`Product`, `ProductDetail`, `Coa`). Replacing the exported constant with a
  `fetch()` against the CRM is a one-file change; pages read it through
  `getProduct()` and `relatedProducts()`.
- **`src/lib/cart.tsx`** — cart state. Currently a React context persisted to
  `localStorage`; swap the reducer's calls for CRM cart endpoints and the UI is
  unchanged.
- **`src/components/ContactView.tsx`, `TrackOrderView.tsx`, `NewsletterCta.tsx`** —
  each has a single `handleSubmit` that currently just flips a "sent" flag. Point
  those at the CRM (or a Next route handler) to go live.
- **`src/lib/site.ts`** — nav, footer columns, addresses, announcement copy.
- **`src/lib/faq.ts`** — FAQ content.

Checkout currently routes to `/auth`, matching the original.

## Known gaps in the source export

The export is a saved DOM, so anything the original site had not rendered at save
time is not in it. Three things are affected:

1. **FAQ answers.** Only the first (expanded) answer was in the DOM. The other six
   were rewritten from the site's own Shipping, Returns, Quality and product-page
   copy and are flagged `reconstructed: true` in `src/lib/faq.ts`. Worth a read
   against the original wording.
2. **Product detail content.** Only the GHK-Cu detail page was exported, so only
   that product has `detail` (description, badges, vial sizes, four COAs, the
   molecular profile and full spec table). The other eleven render the template
   with their own catalogue data, and the COA and Compound Information sections are
   skipped until their records exist.
3. **`/verify`.** Linked from three pages but never exported, so it redirects to the
   COA library for now.

Two smaller judgement calls, both easy to change: shop filter categories are derived
(every compound is a lyophilized reference pack; Klow and CJC-1295 + Ipamorelin are
additionally tagged as blends, and nothing is tagged "Laboratory Accessories"), and
the same-day-dispatch countdown is computed live against a 2 PM ET cut-off rather
than being a fixed string.

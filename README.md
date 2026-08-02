# Pursley Auto Care LLC — Website Redesign

A brand-new website for Pursley Auto Care LLC, built with React + Vite +
Tailwind CSS, pulling the business's own real logo, colors, quotes, and a
real photo of its actual shop from its Google Business Profile, the NAPA
AutoCare directory, and the shop's own genuine graphic logo.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Why this business

Pursley Auto Care LLC (18271 WA-3, Allyn, WA) was found following the
standing rule for this series: find a business with a listed contact and
no working website. This business has **no functioning website** — its
Google Business Profile has no website field at all (just an "Add
website" prompt), and the domain from its prior era, `ayers-automotive.com`,
does not resolve at all (a hard DNS/connection failure, confirmed by
direct navigation). It has a real, working phone number, a real logo, a
4.7-star rating across 70 Google reviews, and an owner who personally
replies to reviews by name.

This is the fourteenth entry in this portfolio. Every business already
built or fully contacted in this series was checked and ruled out first.

### Two candidates that were investigated and rejected before this one

- **K C Auto Repair** (Port Orchard, WA) — no website, but no discoverable
  email anywhere (not listed in NAPA's AutoCare directory, and its
  Facebook page is an unclaimed "Unofficial Page" with no contact info
  beyond a phone number), combined with a thin combined review count
  (~17 across Google and Yelp). Dropped for lack of a viable contact
  channel.
- **D & L Automotive** (Shelton, WA) — no real website (Google shows only
  a Mitchell1 booking-portal link, not an actual site), and a plausible
  NAPA-sourced email. However, vetting its Yelp reviews turned up two
  recent (2025), detailed, credible complaints: one describing the owner
  getting "verbal & aggressive... to the point where I thought we would
  come to blows" over a billing dispute, and another describing a
  dismissive response to a customer disputing a diagnostic fee. Given this
  portfolio's standing practice of dropping candidates with real,
  specific rudeness/aggression complaints (as with the Hansville "Mike's
  Repair" and Ken's Northwest Automotive candidates in earlier entries),
  this business was dropped despite an otherwise decent overall rating.

## Sourcing — what's real vs. what was designed

- **Business facts** (name, address, phone, rating, review count) —
  Google Maps business listing, confirmed 2026-08-02.
- **Email** — `serviceayersautomotive@gmail.com`, sourced from NAPA's
  AutoCare Center directory (napaonline.com, facilityId=1378404), which
  lists this exact phone number and address. This required extra care:
  this portfolio's *previous* entry (Gilmore's Automotive Services) was
  burned by a NAPA-listed email that turned out to be a dead domain, so
  this email was specifically traced rather than trusted at face value.
  The "Ayers" name in the address is not an error — it's this shop's own
  former name. Confirmed via a separate search: MapQuest's own listing
  states plainly, "Ayers Automotive, now operating as Pursley Auto Care
  LLC," and Birdeye's real review history for "Ayers Automotive Inc" at
  this same address goes back 6–12+ years on Facebook. The shop's own
  real logo graphic is dated "2024," marking when the rebrand to Pursley
  Auto Care LLC happened — at the same address and the same phone number
  this NAPA email is tied to. The prior `ayers-automotive.com` website
  domain is now completely dead (does not resolve), which is consistent
  with a small shop that rebranded and let its old site lapse but kept
  using its longstanding contact inbox.
- **Reputation vetting** — checked Google's review summary (heavily
  5-star weighted, only a small sliver of 1-star), and specifically
  opened and read individual reviews rather than relying on snippets. No
  red flags of any kind turned up.
- **Current owners** — "Rich and Megan," confirmed two ways: a reviewer
  (Lady Raven) wrote "I believe his name is Rich and his wife is Megan,"
  and the business's own reply to that review confirms it directly:
  "...a great experience with Rich and Megan at Pursley Auto Care LLC."
  No claim is made anywhere on this site about a relationship between
  today's owners and the shop's prior name or operators — only what's
  directly confirmed by real sources is used.
- **Services** — drawn directly from real review content: a free,
  no-charge diagnosis before billing (Lady Raven), rear wheel bearings
  and front CV axles on a Subaru Forester with brakes booked next (jon
  junker, Local Guide), an alternator replaced in under an hour
  (Google's own review-summary highlight), and oil changes through full
  suspension work across multiple visits (Kodi Young).
- **Reviews section** — a small spotlight of three fully-read, verified
  reviews (jon junker, Kodi Young, Lady Raven) plus Google's own three
  AI-generated review-summary quotes, rather than scraping a large grid of
  partial snippets. This listing's individual review text loaded slowly
  and inconsistently behind Google's own UI during research, so the
  reviews used here are ones that were specifically opened, fully read,
  and confirmed — not partially-visible text taken on faith.
- **Hours** — extracted directly from the Google listing's own hours
  table (Monday 10 AM–5 PM; Tuesday–Friday 9 AM–5 PM; Saturday and Sunday
  closed). Note the Monday start time is later than the rest of the week
  — a real, specific detail preserved rather than smoothed over.
- **Photos — used directly per the standing "skip photo approval" rule**
  (best available real assets used without a per-photo chat pause;
  sourcing documented transparently here instead):
  - `public/images/pursley-logo.png` — the business's own real logo
    graphic (a turbocharger design in a teal-to-blue gradient on solid
    black, stamped "2024," found directly in this listing's own Google
    Photos gallery). This is the first business in this portfolio with an
    actual graphic logo rather than a text wordmark, and the entire color
    palette and Hero design for this site were built around it.
  - `public/images/pursley-storefront.jpg` — a real photo of the shop's
    actual building at 18271 WA-3, from this listing's own Google Photos
    gallery. Transparently, this photo still shows the building's
    *previous* "Ayers Automotive" signage — it predates the 2024 rebrand.
    Rather than misrepresent it as current branding, it's used in the
    About section with an explicit caption noting the legacy signage; the
    current Pursley Auto Care identity is carried by the real logo
    throughout the rest of the site instead.
- **Colors** — every value in `tailwind.config.js`'s `turbo` (blue) and
  `teal` palettes was sampled with a Python/Pillow pixel color picker
  directly from the real logo image: teal from the top of the turbocharger
  pipe (`rgb(87,183,184)`), sky/mid-blue from the pipe's body
  (`rgb(95,178,221)` / `rgb(95,162,222)`), and a deeper indigo from the
  lower shadow of the turbo housing (`rgb(71,88,161)`). The `void`
  near-black background is sampled directly from the logo's own pure-black
  background (`rgb(0,0,0)`).

No AI-generated imagery is used anywhere in this project.

## Design system

Rajdhani is a condensed, technical/motorsport-inflected display face
chosen specifically to echo the shop's own real turbocharger logo mark —
a different pairing from every earlier entry in this portfolio. Inter is
the body face; JetBrains Mono renders stamped details like hours and
review metadata.

### Structure — intentionally varied again from earlier entries

Per the standing instruction to keep varying this portfolio's page
structure, this site's section order and component types are deliberately
different from every earlier entry:

- **Hero** is dark and logo-forward, built around the shop's real graphic
  logo with soft glow accents, rather than a full-bleed storefront photo
  or a split image/text layout — the first entry in this portfolio to
  center its Hero on an actual logo asset.
- **Services** is a row-list (icon + title + description stacked in
  divided rows) rather than a card grid, an accordion, or a numbered list.
- **Heritage** is a brand-new section type unique to this entry: a real,
  documented rebrand timeline (Ayers Automotive → Pursley Auto Care LLC,
  2024, same address and phone) — the first business in this portfolio
  with an actual name change to tell honestly rather than smooth over.
- **About** pairs the real storefront photo (with transparent signage
  captioning) with the shop's real story and the owner's own reply-quote.
- **Reviews** is a small spotlight of three large, fully-verified review
  cards rather than a dense many-quote wall.

## Verification note

This project's dependencies were **not installed and the dev server was
not run** in the sandbox that produced this code — outbound network access
to the npm registry (`registry.npmjs.org`) returned 403 Forbidden for this
session, consistent with every prior redesign in this portfolio. Every
`.jsx`/`.js` file was syntax- and import-checked with the TypeScript
compiler (`tsc --jsx react-jsx --noEmit --allowJs --skipLibCheck`) as a
stand-in — clean, zero errors. Every icon name referenced from
`src/components/icons.jsx` (including icons referenced dynamically via
`services.js`'s data-driven `icon` field) was cross-checked against the
icon registry — all present. Every Tailwind color class used across the
project was cross-checked against the tokens defined in
`tailwind.config.js`; this pass caught two real gaps (`turbo-200` and
`teal-800` were used in `Reviews.jsx` but not yet defined as shades), both
fixed by adding the missing shades to the palette rather than by removing
the classes. Every field referenced from `src/data/business.js`,
`src/data/services.js`, `src/data/testimonials.js`, `src/data/about.js`,
and `src/data/heritage.js` was confirmed to actually exist in those files.

## File structure

```
src/
  main.jsx              Entry point
  App.jsx                Page composition (varied section order — see above)
  index.css              Tailwind layers + shared component classes
  components/
    Header.jsx             Sticky nav using the real logo image
    Hero.jsx                 Dark, logo-forward hero with glow accents
    Services.jsx               Row-list, review-grounded services
    Heritage.jsx                  New: real 2024 rebrand timeline
    About.jsx                       Real storefront photo + owner story
    Reviews.jsx                       Spotlight of 3 verified reviews
    CTA.jsx                             Conversion band
    Contact.jsx                          Address/phone/email/hours/form/map
    Footer.jsx
    icons.jsx                            react-icons/lu registry
  data/
    business.js             Core business facts
    services.js                Service list, grounded in real reviews
    testimonials.js               Review summary quotes + featured reviews
    about.js                        Owner story + sourcing notes
    heritage.js                       Real rebrand timeline facts
public/
  images/                pursley-logo.png, pursley-storefront.jpg
  favicon.svg
```

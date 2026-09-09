# aperturescienceinnovators.com

A *Portal* / *Portal 2* lore fan site, built as the corporate website Aperture
Science Innovators would have printed in **Spring 1957** — and written
throughout in the voice of Cave Johnson.

Not a modern site with a retro filter. The conceit is that a 1950s industrial
firm's *printed* identity — annual report, product catalogue, employee
handbook, house organ — has been transposed to the web. Every page is a
document: it has a form number, a department, an issue date and a
classification.

---

## The house style

Everything a contributor needs is in **[`docs/HOUSE-STYLE.md`](docs/HOUSE-STYLE.md)**:
the conceit, the Cave Johnson voice guide, the hard canon table for what may
and may not appear in 1957, the full component API, the easter-egg quota, and
the period orthography rules. **[`docs/PAGE-BRIEFS.md`](docs/PAGE-BRIEFS.md)**
holds the commission for each individual sheet.

A few load-bearing decisions:

- **No images. At all.** Every mark on the site — the aperture, the enamel
  chamber signs, the atomic orbits, the advertising starbursts, the paper
  tooth, the halftone, the rubber stamps, the CRT scanlines — is inline SVG
  drawn parametrically or faked in CSS. There are no `<img>` tags, no external
  requests, and nothing to license.
- **Six house typefaces**, self-hosted at build time via `next/font`: Jost
  (Futura, for signage and headings), Newsreader (running text), Courier Prime
  (memoranda, forms, machine output), Bodoni Moda (advertising), Caveat (pencil
  marginalia) and Yellowtail (the President's facsimile signature).
- **Microfilm mode** rather than a dark theme: the same document photographed
  onto archival film. Respects `prefers-color-scheme`, remembers the choice,
  and sets itself before first paint so the archive never flashes daylight.
- **One filing registry.** `src/lib/structure.ts` is the single source for
  navigation, sub-navigation, breadcrumbs, the printed directory, adjacent-page
  links and `sitemap.xml`. Register a sheet there and it appears everywhere.

## Easter eggs

The site rewards reading, and it keeps score. A **personnel clearance** grade
is held in `localStorage` and raised by paying attention; higher grades unlock
gated paragraphs and an entire hidden section that is not in the printed
directory.

Ways in, roughly in order of how hard they are to find:

- Type certain words — any page, no input field. Some of them are doors.
- The old sequence: up, up, down, down, left, right, left, right, B, A.
- Click the aperture on the masthead nine times. It closes as you click.
- `/terminal` — eleven tons of relays on Sub-Level 4. `HELP` gets you started;
  `LOGIN` takes a name you will have read somewhere on the site.
- Hover or focus any redaction bar.
- Read `robots.txt`, `humans.txt`, the page source, and the browser console.
- Print a page. The ink knows things the screen does not.

Nothing leaves the browser. The clearance grade is forgotten the moment site
data is cleared.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # every route prerenders to static HTML
```

Next.js App Router, TypeScript, no CSS framework, no runtime dependencies
beyond React. Deploys to Vercel with no configuration.

## Legal

This is an unofficial fan work. *Portal*, *Portal 2*, Aperture Science, Cave
Johnson, Caroline, GLaDOS and the Enrichment Center are the property of Valve
Corporation. Nobody involved is affiliated with Valve, nothing here is endorsed
by them, and no money changes hands. Everything on the site is a joke told at
length in the voice of a fictional industrialist.

The cake is not in the kitchen.

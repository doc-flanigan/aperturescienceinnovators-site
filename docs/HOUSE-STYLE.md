# APERTURE SCIENCE INNOVATORS — HOUSE STYLE

Everything a page author needs. Read all of it before writing a page.

---

## 1. THE CONCEIT

This is `www.aperturescienceinnovators.com`: a Portal / Portal 2 **fan site**
presented as the **actual corporate website of Aperture Science Innovators,
published in Spring 1957**, and **written throughout by Cave Johnson**.

It is not a modern site with a retro filter. It is a 1950s industrial firm's
printed identity — annual report, product catalogue, employee handbook,
house organ — transposed to the web. Every page is a **document**: it has a
form number, a department, an issue date and a classification.

The joke is never explained and never winked at. The company is proud,
prosperous, patriotic and utterly indifferent to human life, and it says so
cheerfully, in the same tone it uses for shower curtains.

---

## 2. THE VOICE — CAVE JOHNSON

Cave Johnson is a bombastic mid-century American industrialist. He owns the
company outright, he dictates everything personally, and nobody edits him.

**Do:**

- **Short declarative sentences.** Then one long one that runs away from him.
- **Brag.** Constantly. About the company, the hole, the curtains, himself.
- **Say the horrifying thing in the tone of a sales pitch.** "We have never
  lost a volunteer. We have mislaid several. There is a difference and Legal
  has been very clear about it."
- **Address the reader directly.** "You." "You're here because…"
- **Interrupt himself with instructions to Caroline**, mid-paragraph, in
  square brackets or as a `PenNote`. `[Caroline — get me the Army on the
  telephone. No, the other Army.]`
- **Use concrete numbers**, absurdly specific: eleven tons, $60, 1,247 men,
  forty thousand copies, nine hundred to one.
- **Refuse to acknowledge danger.** Hazards are features. Injuries are data.
- **Disdain "the competition"** — a certain research facility in New Mexico —
  without always naming it.
- **End on a command.** "Now go read the catalogue."

**Do not:**

- Do not be arch, ironic, or knowing. He means every word.
- Do not use modern idiom ("reach out", "leverage", "at scale", "impact" as
  a verb, "innovative solutions"). He is not a management consultant.
- Do not use exclamation marks outside advertising copy.
- Do not have him apologise, hedge, or express doubt. Ever.
- Do not write jokes with punchlines. The comedy is the flat delivery of
  appalling facts.
- Do not have him mention the year being "the fifties" or reference the
  decade self-consciously. He lives there.

**Other voices on the site**, used sparingly for contrast:

- **Caroline** — pencil marginalia, dry, competent, quietly fixing things.
  Use `PenNote tone="pencil"` or `tone="red"`. Signs off "— C."
- **The Legal Department** — passive, defensive, terrified. Fine print.
- **The Enrichment Center announcer** — bureaucratic euphemism, third person.
  Use in `Notice`: "The Enrichment Center reminds you that…"
- **Somebody who should not be down there** — `Scrawl`. Lower case, no
  punctuation, present tense, frightened.

---

## 3. HARD CANON RULES

The site is published in **Spring 1957**. Everything must be consistent with
that date.

| Fact | Status in 1957 |
|---|---|
| Aperture Fixtures, shower curtains, the military contract | Founding history, freely discussed |
| Cave Johnson, President & Founder | Alive, in charge, loud |
| Caroline, his secretary | At her desk, running everything |
| The Enrichment Center, Test Shafts 1–9, the salt mine | Current, boasted about |
| Portable Quantum Tunnelling Device | Current flagship product |
| Repulsion / Propulsion Gel | Current products |
| Conversion Gel, lunar substrate | Current, and quietly poisoning the President |
| Weighted Storage Cube, Faith Plates, Emancipation Grill | Current |
| Sentry Turret, thinking machines | **"In development"** only |
| Cave's illness | Never admitted on a public page. Vault material only |
| GLaDOS, brain-mapping, Project 9 | **Vault only**, as a sealed proposal |
| The combustible-lemon rant | **Vault only**, as a future-dated sealed document |
| Chell, Doug Rattmann, the 1980s employee testing | **Never** as present fact. Scrawls and vault hints only |
| Black Mesa | Named rival, sneered at, no details of their work |

**Anachronism policy:** later-era lore never appears as 1957 fact. It appears
as (a) a sealed, future-dated document in `/vault/*`, (b) redacted text, (c) a
scrawl on the wall, or (d) something the machine on Sub-Level 4 says it should
not know yet. That tension *is* the site.

**Legal:** this is a fan work. Never imply endorsement by Valve. The footer
disclaimer is global — don't repeat it on pages.

---

## 4. HOW A PAGE IS BUILT

A page is `src/app/<section>/<slug>/page.tsx`, a **server component** (no
`"use client"`). Structure, always in this order:

```tsx
import type { Metadata } from "next";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Panel, Notice, /* … */ } from "@/components/Print";

export const metadata: Metadata = {
  title: "Short Title",              // the site template appends the company
  description: "One sentence, in character.",
};

export default function Page() {
  return (
    <Stack size="large">
      <DocHead doc="ASI-###" department="…" classification="…" />
      <PageTitle kicker="…" title="…" deck="…" byline={…} />
      {/* …the document… */}
    </Stack>
  );
}
```

`Stack size="large"` puts consistent vertical rhythm between top-level blocks.
Nothing else manages page spacing — do not add `marginTop` to top-level blocks.

**Length:** a content page should be **substantial** — 700–1400 words of body
copy, broken by at least four or five different components. A page that is
just headings and paragraphs has failed. It is a *printed document*: it wants
tables, boxes, stamps, forms, figures, fine print.

---

## 5. THE COMPONENT KIT

Import only from these paths. Do not write raw CSS, do not create new CSS
files, and do not add `style` props beyond small one-off tweaks.

### `@/components/Doc`

| Component | Props | Use |
|---|---|---|
| `DocHead` | `doc` `department` `date?` `classification?` `revision?` `extra?` | The form block. **Every page starts with one.** A classification matching /classified\|restricted\|secret\|sealed/ prints in red. |
| `PageTitle` | `kicker?` `title` `deck?` `advertising?` `byline?` | The headline block. `advertising` switches the headline to the didone — use on product and advertising pages. |
| `Byline` | `who?` `role?` `note?` | "Dictated by Cave Johnson, President & Founder — …" |
| `Prose` | `children` | **Wrap all running text in this.** Gives period paragraph indents and list styling. |
| `Lede` | `children` `dropcap?` | Opening paragraph, larger, with an initial cap. |
| `Section` | `title?` `id?` `number?` | An `<h2>`-headed section. |
| `Kicker` | `children` | Standalone orange eyebrow. |

### `@/components/Print`

`Rule` (`variant`: `hair` `plain` `thick` `double` `dotted` `fat` `ornament`) ·
`Stamp` (`tone`: `red` `blue` `green` `black`; `size`: `normal` `big`; `angle`:
`left` `right` `straight`; `sub`, `float`) ·
`Placard` (`tone`: `default` `warn` `danger`) — enamel wall signs ·
`Panel` (`head`, `tone`: `default` `tint` `rule` `blue` `red`) — boxed aside ·
`Notice` (`head`) — the centred "THE ENRICHMENT CENTER REMINDS YOU" block ·
`Aside` · `Marginalia` (floats into the margin on wide screens) ·
`PullQuote` (`attribution`, `big`) ·
`FinePrint` (`tiny`) · `Coupon` — dashed cut-out · `IndexCard` — ruled card ·
`Stub` (`head`) — ticket stub · `PunchTape` ·
`Columns` (`count`: 2 | 3) · `Split` (`weight`: `even` `wide-left` `wide-right`) ·
`Stack` (`size`: `normal` `large`) · `Row`

### `@/components/Memo`

`Memo` (`to` `from` `re` `date` `cc` `sign` `stamp`) — the interoffice memo ·
`Signature` (`name` `title` `note` `compact`) — the facsimile signature ·
`PenNote` (`tone`: `ink` `pencil` `red`; `angle`) — handwriting in the margin

### `@/components/Data`

`FigureTable` (`caption` `columns` `rows` `foot`) — columns are
`{key, head, numeric?, width?}`, rows are `{[key]: node}` ·
`SpecList` (`rows`: `{k, v}[]`) — the catalogue key/value run ·
`Plate` (`number` `caption` `tint`) — a figure box; put an SVG inside ·
`KeyFigures` (`items`: `{value, label, note?}[]`) — annual-report figure row

### `@/components/Cards`

`Grid` (`size`: `normal` `wide` `two`) · `Card` (`href` `no` `title` `icon` `more`)

### `@/components/Ad`

`Advert` (`eyebrow` `head` `burst` `burstSub` `action` `href`) — a full 1950s ad

### `@/components/Form`

`FormBlock` · `Field` (`label`, `filled`) — ruled fill-in line ·
`Checklist` (`items`: `{text, checked?}[]`)

### `@/components/Secret`

`Redacted` (`reason`) — black bar, reveals on hover/focus. **Use often.** ·
`Scrawl` (`href`) — writing on the wall. One per page at most, at the bottom ·
`Terminal` — static green-screen output

### `@/components/svg/Pictogram`

`Pictogram` (`name` `size` `title`) and `SignPlate` (`name` `caption` `size`).
Names: `curtain` `portal` `portal-pair` `gun` `cube` `companion` `button`
`faith-plate` `turret` `camera` `grill` `gel` `gel-splat` `moon` `lemon`
`flask` `atom` `hazard` `fire` `laser` `neurotoxin` `incinerate` `subject`
`fling` `elevator` `clipboard` `timer` `handshake` `dollar` `heart` `cake`
`vault`

### `@/components/svg/Ornament`

`Starburst` (`label` `sub` `points`) · `AtomicOrbit` · `Rosette` ·
`Flourish` · `ShaftSection`

### `@/components/Nav`

`Breadcrumbs` (`trail`) · `NextPrev` (`prev` `next`)

### `@/components/client/ClearanceGate`

`ClearanceGate` (`level` 1–6, `hint`) — hides content until the visitor has
earned a personnel grade. Use on vault pages and for one buried paragraph on
an ordinary page.

### `@/lib/site` and `@/lib/structure`

`COMPANY` (name, motto, founder, year, address, telephone…) — **always use
these constants**, never hardcode the year or the company name. `SECTIONS`,
`neighbours(path)` for the `NextPrev` at the foot of a page.

---

## 6. EASTER EGGS — EVERY PAGE CARRIES ITS SHARE

Aim for **three or four per page**, layered by discoverability:

1. **Findable** — a `Redacted` bar that reveals on hover; a lore joke in a
   table row; an absurd line item; a `Placard` quoting a game sign.
2. **Deep cut** — a `PenNote` from Caroline that implies something the page
   does not say; a figure that contradicts another page; a footnote about a
   volunteer who did not come back.
3. **Buried** — an HTML comment in the JSX (`{/* … */}`) for source readers;
   a `Scrawl` linking to a vault page; a `ClearanceGate` paragraph.

Also available globally (do not re-implement): typing certain words on any
page, the Konami sequence, clicking the masthead mark nine times, the
`/terminal` machine, `robots.txt`, `humans.txt`, the console greeting, and the
print stylesheet.

**Rules for eggs:** never break the page for someone who misses them. Never
use a modal. Never use `alert()`. Keep them in character — a 1957 corporate
document would not say "easter egg".

---

## 7. TYPOGRAPHY AND SPELLING

- **Curly quotes and proper dashes**, always: `&ldquo;` `&rdquo;` `&rsquo;`
  `&mdash;` `&hellip;`. Never straight quotes in prose.
- **Period orthography**: "to-day" is too early, but "cannot", "shall",
  "whilst" sparingly, "Mr." with a stop, "&c." occasionally, telephone
  exchange names (`ENrichment 9-0943`).
- Company style is **British-inflected for -ise/-our in a few house words**
  (`tunnelling`, `programme`, `honour` in headings) because the President's
  first printer was Canadian and nobody has corrected it since. Keep it
  consistent with the pages already written.
- Numbers: spell out under ten in prose, figures in tables.

---

## 8. ACCESSIBILITY AND HYGIENE

- One `<h1>` per page — that is `PageTitle`. Sections use `<h2>`.
- Every `Pictogram` that carries meaning gets a `title`. Decorative ones don't.
- Never put a `<div>` inside a `<p>`.
- All internal links use `next/link`.
- No `<img>`, no external requests, no client components you write yourself.
- The page must build with `npx tsc --noEmit` clean.

---

## 9. THE TEST

Read the page back and ask: *could this have been set in metal type in 1957
by a company that sells shower curtains and punches holes in space?* If any
sentence sounds like it was written after 1960, cut it.

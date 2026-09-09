# PAGE BRIEFS

One entry per unwritten sheet. Find yours, read the whole entry, then read
`docs/HOUSE-STYLE.md` and the exemplar at
`src/app/the-company/cave-johnson/page.tsx` before writing.

Every brief assumes: **Spring 1959**, written by Cave Johnson, 700–1400 words
of body copy, five or more distinct components, three or four easter eggs, one
`Scrawl` at the foot linking somewhere real.

**Figures that are already established across the site. Reuse them exactly.**
1,247 employees · 4,000 feet (the mine's tunnels run four kilometres down) ·
nine test shafts · $60 cash to volunteers · a contract "the size of a phone
book" · 4,118 volunteers since 1954, of whom 1,306 completed · founded 1943 as
Aperture Fixtures · Cave named 1943 Shower Curtain Salesman of the Year · the
salt mine bought January 1944 · renamed Aperture Science Innovators 1947 · the
1956 Eisenhower contract supplying every branch of the military **except the
Navy** · Test Shaft 09's foyer painted 1952 · Caroline engaged 1946.
**1943 to 1959 is sixteen years. 1946 to 1959 is thirteen.** Check any "N
years" you write.

**Ornament budget.** A real 1950s publication used one or two ornamental
devices per spread, not a theme park. **At most one `Stamp` and one
`Starburst` per page**, and plenty of pages should have neither. `Placard`s
are wall signage rather than ornament, but two or three is a plenty. The
comedy is in the deadpan: set the appalling sentence in exactly the same sober
type as the dull one, under the same form number.

Real routes you may link to (do not invent others): `/`, `/the-directory`,
`/legal`, `/terminal`, `/the-company` (+ `/cave-johnson`), `/products`,
`/enrichment-center` (+ `/volunteer`, `/refreshments`), `/science`,
`/careers`, `/investors`, `/bulletin`, `/vault` (+ `/combustible-lemons`,
`/project-9`, `/borealis`, `/the-dens`, `/lunar-memorandum`),
`/office-of-the-president` (+ `/caroline`), and any path listed in this file.

---

## THE COMPANY

### `/the-company/history` — "Our Story So Far" · ASI-102 · Records & Filing
The founding narrative, and the dates are canon — get them right. 1943:
Aperture Fixtures founded in a rented garage on four hundred dollars and a
bolt of vinyl; Cave named Shower Curtain Salesman of the Year. **January
1944: the purchase of a decommissioned salt mine in upper Michigan whose
tunnels run four kilometres down** — he bought the hole, not the salt. 1947:
renamed Aperture Science Innovators, on his stated reasoning that a shower
curtain is a low-tech portal between the inside and the outside of a shower.
1951–52: the first test shafts sunk; Shaft 09's foyer is painted 1952. 1953:
the first quantum tunnelling event. 1954: the volunteer programme opens.
**1956: the Eisenhower contract, curtains to every branch of the military
except the Navy.** 1959: Shaft 09's deepest spheres in full operation.
Lead with a `FigureTable` timeline; carry the narrative in `Prose` around it.
Include a `Memo` from 1947 arguing about the new name. Eggs: one year in the
timeline whose "event" column is entirely redacted; a `Marginalia` noting
Records disputes three of the dates; a note that the garage is still on the
books as an asset.

### `/the-company/mission` — "We Do What We Must Because We Can" · ASI-103 · Office of the President
The corporate creed, taken absolutely seriously. Unpack the motto clause by
clause — what "must" means, what "can" means, and why there is no third
clause. Contrast with "science isn't about why, it's about why not."
Use a very large `PullQuote`, a numbered `Section` per clause, a `Notice`, and
a `Placard` row. Include the company anthem as a boxed panel of verse the
President had commissioned and the steno pool refuses to sing. Eggs: the
fourth clause is redacted and reads, when revealed, something about consent;
a `ClearanceGate` paragraph on what the motto is meant to excuse.

### `/the-company/officers` — "Officers & Departments" · ASI-104 · Personnel
The org chart of a company with no board. Cave Johnson, President. Caroline,
Personal Secretary to the President (link her file — it is hidden, so link it
from a `Scrawl` or a redacted line, not a plain nav link). Department heads,
invented but consistent: Materials, Applied Sciences, Computation, Marine,
Medical, Legal (three people, basement rear), Records (second floor),
Maintenance, Commissary, and Greg, who cleans the reactor room and is listed
under no department at all.
Use `FigureTable` for the department roll, `SpecList` for the officers, a
`Plate` with an org diagram made of `Pictogram`s. Eggs: Marine Division has
one employee and one filing cabinet; the Applied Biology head's name is
redacted; Greg's entry has no start date and no supervisor.

### `/the-company/upper-michigan` — "The Salt Mine At Upper Michigan" · ASI-105 · Facilities
The facility itself, described with civic boosterism. A worked-out salt mine
bought in 1949 for the hole rather than the salt. Nine shafts, four thousand
feet, company housing, a rail spur, a commissary, a bowling league, a gate
house that has had the same man since 1951. The water table at forty feet on
Sub-Level 7. The reactor. The incinerator, which is not for documents.
Use `ShaftSection` from `@/components/svg/Ornament` inside a `Plate`,
`FigureTable` of the shafts (depth, opened, status — one shaft's status should
be unsettling), `SpecList` of the surface facilities. Eggs: Shaft 07's status
column; a `Redacted` line about what is below the water table; a note that the
mine came with the salt still in it and nobody has ever costed the salt.

### `/the-company/the-competition` — "On The Competition" · ASI-106 · Office of the President
Cave on Black Mesa, at length, without ever quite being libellous. Federal
money, federal timetable, federal haircuts. They publish; we finish. Forty
names on a paper and not one of them has gone through the hole personally.
This is a rant page: mostly `Prose` with a huge `PullQuote`, a comparison
`FigureTable` (Aperture vs "A Certain Facility In New Mexico" — columns like
"Time to first result", "Committees consulted", "Men sent through
personally"), and a `Memo` in which Legal begs him to remove three sentences.
Eggs: the competitor is never named in body copy but is named in one
`Redacted` span; a fine-print apology to New Mexico that apologises for
nothing.

### `/the-company/honors` — "Honors, Citations & Certain Findings" · ASI-107 · Office of the President
Awards won, awards anticipated, awards withdrawn, and citations of a less
welcome kind. Army commendations for the curtain. A state manufacturing prize.
Three safety citations from an inspectorate, all contested. An honorary
degree the President declined because of the hat.
Use a `FigureTable` with a "Status" column that goes from Awarded to Withdrawn
to Contested to "Returned by us, framed by them". `Stamp`s scattered.
Eggs: one award is dated in the future; the safety citations' "Findings"
column is redacted and reveals genuinely alarming text; a `Coupon` offering a
reprint of the commendation suitable for framing.

### `/the-company/correspondence` — "Correspondence" · ASI-108 · Records & Filing
How to write to us and what happens to mail. The cable address, the telephone
exchange, the gate house. A candid, escalating account of the company's postal
situation: the pneumatic diversity vent was connected to the mail room in 1955
as an efficiency measure and mail now arrives at ninety miles an hour, in
pieces, sometimes on a different floor, sometimes before it was sent.
Use `SpecList` for the addresses, `FigureTable` for delivery statistics, a
`Memo` from Records to Facilities about the vent, and a `Coupon` reply card.
Eggs: one row of the delivery table has a negative transit time; a
`Redacted` note about a letter that arrived addressed to somebody not yet
employed here.

---

## PRODUCTS

All product pages: `advertising` headline, a `SpecList` of specifications, an
`Advert` block, a `Plate` with the relevant `Pictogram`, a `FigureTable` of
some measured data, `FinePrint` with a horrifying disclaimer, and a
`Placard` or two. Prices in 1959 dollars.

### `/products/shower-curtains` — ASI-201 · Sales & Manufacturing
The founding product, still in the catalogue, still the best. Vinyl, weighted
hem, twelve grommets (raised from ten by presidential memorandum, no reason
given). Institutional Grey, Institutional Grey (Warm), and a green nobody has
ordered since 1951. Two hundred thousand to the Army in 1944 and every one
held water. The whole company is downstream of this curtain and the page
should be genuinely, unironically proud of it.
Eggs: the green's colour name is redacted; a footnote that one curtain in the
1953 laboratory was briefly in two rooms at once and is the reason for
everything that follows; the order form lists a size that is four thousand
feet long.

### `/products/quantum-tunnelling-device` — ASI-202 · Applied Sciences
The flagship. Two apertures, arbitrarily far apart, sharing one interior.
Momentum is conserved — speedy thing goes in, speedy thing comes out. Legal
has forbidden the words door, gate, portal, passage and "the thing"; the page
should visibly struggle for a permitted noun and settle on "aperture".
Handheld unit is heavy, tethered, and takes two men. Emphasise it is
industrial equipment, not a toy.
Use `SpecList` (weight, tether length, aperture diameter, maximum separation,
minimum separation — the minimum separation figure should be worrying),
`Pictogram name="portal-pair"`, a `Notice` about conservation of momentum.
Eggs: a forbidden-words list from Legal; a `Redacted` figure for "subjects
returned"; the maximum separation is listed as "not yet found".

### `/products/repulsion-gel` — ASI-203 · Materials
Began life as a dietetic pudding substitute. Nobody kept it down; everybody
bounced. The dietetic programme was abandoned; the bouncing was not. Include
the original nutritional claims table, crossed through, and the current
industrial specification beside it.
Eggs: the pudding flavour names; a medical footnote about the taste testers;
a `Redacted` line about what happened to the tasting panel's dental work.

### `/products/propulsion-gel` — ASI-204 · Materials
Makes a man run faster than a man has any business running. Stopping is sold
separately — say that plainly and then price "stopping" as a line item.
`FigureTable` of measured velocities by surface. Eggs: the fastest recorded
subject's name is redacted; a footnote about the wall at the end of Corridor 6.

### `/products/conversion-gel` — ASI-205 · Materials
Ground lunar substrate in suspension. The finest conductor of quantum
tunnelling fields ever measured, and pure poison. Both facts on the label,
cheerfully. Price per pound is enormous. Handling instructions that specify a
mask, followed by a note that the President does not use one — this is the
page that quietly connects to `/vault/lunar-memorandum`.
Eggs: the handling section's masks paragraph has a pencil `PenNote` from
Caroline; the price per pound is redacted; the scrawl should point at the
lunar memorandum.

### `/products/weighted-storage-cube` — ASI-206 · Manufacturing
Heavy, cubical, stores nothing. Sold as a solved problem. Play the absurdity
absolutely straight — dimensions, mass, materials, load rating for a thing
with no interior. Mention that a variant with markings on the faces was
produced in a short run for a chamber that required companionship, and that
the variant is not in the catalogue and will not be discussed.
`Pictogram name="cube"` and `name="companion"`. Eggs: the companion variant's
production figure is redacted; a `Notice` reminding personnel the cube cannot
speak; the scrawl points at `/vault/the-dens`.

### `/products/aerial-faith-plate` — ASI-207 · Applied Sciences
Throws a man across a room. The faith is required on the part of the man.
Trajectory table by mass. A section on landing, which is the customer's
responsibility.
Eggs: the trajectory table's last row has no landing figure; a `Placard`
reading "Mind The Ceiling"; a footnote on the plate's original use as a
loading-dock device.

### `/products/pneumatic-diversity-vent` — ASI-208 · Facilities
Moves objects, documents and occasionally personnel at ninety miles an hour
through a tube. Sold to warehouses and, disastrously, installed in our own
mail room. Cross-link `/the-company/correspondence`.
Eggs: a table of things recovered from the vent; one entry is a person, listed
by initials; the personnel-transit clause in the fine print.

### `/products/material-emancipation-grill` — ASI-209 · Applied Sciences
Removes from a volunteer any object he ought not to be carrying. The list of
what counts as an object grows alarming: tools, then coins, then buttons, then
fillings, then — redacted. Deadpan throughout.
Eggs: the dental advisory; the `Redacted` final category; a `Notice` that the
grill is not to be walked through twice.

### `/products/heimlich-counter-maneuver` — ASI-210 · Applied Biology
For lodging an object more firmly. Applications still being determined. This
is the purest joke on the site: present it as a rigorous medical product with
a technique diagram, an indications list, and an entirely empty
contraindications list. Licensed to nobody. Taught at no institution.
Eggs: a `Checklist` of indications where every item is ticked and none makes
sense; a footnote that the manoeuvre was developed in reverse from another
manoeuvre whose name the company does not have the rights to.

### `/products/take-a-wish-foundation` — ASI-211 · Corporate Philanthropy
A charitable arm that collects wishes from the terminally ill and puts them to
industrial use. Written with total sincerity as a philanthropic programme —
that is what makes it land. Wishes received, wishes granted, wishes "converted
to other purposes". A donation `Coupon`.
Eggs: the conversion-rate table; a genuinely touching letter from a child
followed by a Materials Department requisition referencing it by file number;
a `Redacted` line in the mission statement.

### `/products/sentry-turret` — ASI-212 · Applied Sciences (IN DEVELOPMENT)
Presently in development. Presently very polite. Presently unarmed, in most
models. The voice was recorded first and the mechanism second, which the page
should present as sound engineering practice. List the recorded phrases —
apologetic, courteous, plaintive. The armament section is one sentence and a
redaction.
Eggs: the phrase list, which should be funny and then abruptly not; a
`ClearanceGate` on the armament specification; a `Notice` that the turret is
not to be spoken to after hours.

### `/products/catalogue` — "The Complete Catalogue & Order Form" · ASI-299 · Sales
The order form for everything. A big `FigureTable` price list covering every
product on the site with catalogue numbers, a `Coupon` order form using
`Field`s, shipping terms, and a delivery-territory clause that excludes New
Mexico. This page should read as the back pages of a 1959 trade catalogue.
Eggs: one catalogue number that does not correspond to any product on the
site; the "quantity available" column for conversion gel; a line item for
"cake, celebration, per unit — n/a, see Form ASI-307".

---

## THE ENRICHMENT CENTER

### `/enrichment-center/test-shaft-09` — ASI-301 · Operations
The newest and deepest shaft, opened 11 March 1959, four months early. The
descent, the eleven-minute elevator, the enrichment spheres, the chambers, the
observation rooms. Proud, boosterish, specific. Use `ShaftSection` in a
`Plate`, `FigureTable` of the chambers with status columns, `SpecList` of the
shaft's vital statistics.
Eggs: Chamber 8's status; the log entries for 11 March (a subject who emerged
from a different door, then the same door twice); a `Redacted` depth figure
for the lowest level.

### `/enrichment-center/test-subjects` — ASI-303 · Operations
Our distinguished volunteers. Astronauts, war heroes, Olympians — who they
were, why Cave wanted them, and an honest note about who actually turns up.
Profiles of three or four named volunteers in `IndexCard`s or a `FigureTable`.
Then a short, quiet closing section about the ones we could not give back,
which should land hard because the rest of the page is so cheerful.
Eggs: one volunteer's "present whereabouts" column; a `ClearanceGate`
paragraph with the real figures; a `Redacted` line in the closing section.

### `/enrichment-center/chambers` — ASI-304 · Operations
A guided tour of the chamber signage. This is the page for `SignPlate` — use
many of them, with captions explaining the pictogram grammar: what each sign
means, in what order they are read, and why the signs are painted rather than
printed. A chamber walkthrough from door to door.
Eggs: one sign nobody can explain; the sign for Chamber 8 is described but not
shown; a note that the signs are read left to right except in Shaft 07.

### `/enrichment-center/safety` — ASI-305 · Operations
The Enrichment Center's comprehensive position on hazards, which is that there
are none. Structure it as a formal safety document that repeatedly redefines
its way out of every hazard. A `FigureTable` of "Reported Conditions" against
"Classification" where every classification is a euphemism.
Eggs: the euphemism column; a `Notice` about the fire doors; a `PenNote` from
Medical that contradicts the whole page.

### `/enrichment-center/compensation` — ASI-306 · Accounting
What we pay, when we pay it, and the eleven conditions under which we do not —
followed by a proud statement that none of the eleven has ever been invoked.
Rates by test category. Bonus schedule. Payment is cash from a tin.
Eggs: condition eleven; the bonus for "chambers of the ninth category", which
is not defined anywhere; a table row where compensation was posted to a home
address.

### `/enrichment-center/rules` — ASI-308 · Operations
Nineteen rules. Rule nineteen is not printed, for reasons given in rule four.
Write all nineteen as a numbered list — eighteen visible, and nineteen present
but redacted or gated. They should escalate from mundane (no running in the
corridors) to strange (do not acknowledge the observation windows) to
frightening (if you meet yourself, keep walking).
Eggs: rule 4 and rule 19 in tension; a `ClearanceGate` revealing rule 19; a
`Marginalia` noting rules 12 through 15 were added in one week in 1956.

---

## SCIENCE

### `/science/quantum-tunnelling` — ASI-401 · Applied Sciences
The physics of putting a hole where a hole was not, explained for the layman
and the shareholder. Cave's own explanation, which is wrong but confident,
followed by the department's explanation, which is correct and incomprehensible.
Conservation of momentum. The role of lunar substrate as a conductor.
Use `Plate` with `AtomicOrbit`, `SpecList`, `Columns`.
Eggs: the department's footnote about what happens at separations under one
inch; a `Redacted` sentence about the 1953 curtain.

### `/science/materials` — ASI-402 · Materials
Gels, resins, curtain fabrics, and the department that keeps setting fire to
the third floor. An inventory of active research lines, a table of incidents
by quarter, and a defensive statement from the department head.
Eggs: the incident table's "cause" column; a requisition for lemons; the
scrawl points at `/vault/combustible-lemons`.

### `/science/computation` — ASI-403 · Computation
Eleven tons of relays on Sub-Level 4, one punch-card reader, and an idea the
President will not let go of. The machine cannot add. It can be spoken to.
Link `/terminal` prominently — this is the page that sends people there.
Include a `Terminal` block of sample output.
Eggs: the machine's answer to a question nobody asked; a `ClearanceGate`
paragraph that mentions a project by number only; the relay stock came from a
duplicate purchase order signed twice on a Tuesday in 1954 (see Caroline's
file — do not link it directly, hint at it).

### `/science/lunar` — ASI-404 · Materials
The Lunar Substrate Program. We bought the moon rocks — all of them we could
get — and the price per pound is redacted on every page it appears. Excellent
conductor. Pure poison. Procurement, grinding, handling, storage.
Eggs: the handling section's masks paragraph; a `PenNote` from Medical; the
scrawl points at `/vault/lunar-memorandum`.

### `/science/applied-biology` — ASI-405 · Applied Biology
Human enhancement, mantid husbandry, and the long-term storage of a
personality. The mantis programme is presented as a rigorous research line
whose memorandum explained it would produce a soldier with the weaknesses of
both and was authorised anyway. Greg gets a mention. The personality-storage
line is described in one careful paragraph and then dropped.
Eggs: the mantis programme's staffing figure; Greg's reassignment; a
`ClearanceGate` paragraph that names Project 9 without explaining it.

### `/science/publications` — ASI-406 · Records
What we have published, what we have patented, and what we have merely gotten
to first. A `FigureTable` of papers with a "Status" column (Published,
Withdrawn, Suppressed, "Published by others first, disputed"). Patent list.
A priority-dispute section that is entirely about New Mexico.
Eggs: a paper whose author column is redacted; a patent for a shower curtain
that cites quantum tunnelling; a withdrawn paper titled after something in the
vault.

---

## CAREERS

### `/careers/openings` — ASI-501 · Personnel
Positions presently available. Physicists, machinists, one experienced
pyrotechnician, a great many test associates, and one opening that has been
open since 1954 and is never filled. Each position: title, department, rate,
requirements, and an honest note. Use `FigureTable` or repeated `Panel`s.
Eggs: the position that has been open since 1954; a requirement line reading
"must not have read Form ASI-900"; a `Redacted` note on the reactor room post.

### `/careers/benefits` — ASI-502 · Personnel
Housing, the commissary, the company store, the bowling league, and the finest
dental plan in the Upper Peninsula — which exists because of the emancipation
grill, a connection the page makes proudly and without embarrassment.
Eggs: the dental plan's origin; the company store's credit terms; a footnote
about the housing being inside the mine.

### `/careers/handbook` — ASI-503 · Personnel
Forty pages condensed to one. Chiefly concerning doors, and which ones open
from both sides. Write it as numbered handbook clauses with a house tone that
starts practical and becomes unnerving. Cover: hours, the gate, the descent,
the doors, the observation windows, what to do if you find a space that is not
on a drawing.
Eggs: the clause about spaces not on drawings (points at `/vault/the-dens`);
the clause about the third floor; a `ClearanceGate` clause.

### `/careers/bring-your-daughter-to-work-day` — ASI-504 · Personnel
The Enrichment Center's beloved annual science fair. Warm, genuine, and
therefore the most unsettling page on the site. This year's prize-winning
entries listed by child's first name and project title — potato batteries,
volcanoes, a rock collection, and one entry whose title is redacted. Photograph
captions with no photographs. A prize list.
Eggs: one child's entry is a potato battery and the potato is described as
"still functioning"; the attendance figure for this year versus last; a
`PenNote` from Caroline about which departments should not participate.

### `/careers/employee-of-the-month` — ASI-505 · Personnel
A rotating honour that has rotated rather faster than Personnel anticipated.
A month-by-month `FigureTable` for 1956–57: name, department, citation, and a
"Present status" column that should be read straight down. Greg appears more
than once.
Eggs: the "Present status" column; one month with no recipient and no
explanation; Greg's citation, which is the same every time.

---

## INVESTORS

### `/investors/annual-report` — ASI-601 · Accounting
Revenues, expenditures, and one line item the auditors have asked us to
explain three times. Full `FigureTable` of the 1956 accounts, `KeyFigures`
row, a segment breakdown (curtains still outsell everything), and a
President's statement.
Eggs: the lunar line item; a segment called "Other" that is larger than three
named segments; the auditors' note.

### `/investors/prospectus` — ASI-602 · Accounting
An opportunity to own a piece of the largest privately held hole in North
America — followed, immediately and repeatedly, by the fact that no shares are
for sale and never will be. The prospectus is a boast dressed as an offering.
Risk factors section, written honestly, which is devastating.
Eggs: the risk factors; a subscription `Coupon` that cannot be redeemed; a
line about what the President would do with an outside shareholder.

### `/investors/senate-hearing` — ASI-603 · Legal
The President's complete and unedited remarks to a subcommittee that did not
enjoy them. Format as a hearing transcript using `Terminal` or a typewriter
`Memo`-styled block, with SENATOR: and MR. JOHNSON: speaker labels. He is
combative, funny, and entirely unrepentant. Topics: the volunteer programme,
the compensation, the moon rocks, and one question about a missing person that
he answers by changing the subject.
Eggs: the stricken-from-the-record passages; the chairman's gavel; the moment
Caroline is mentioned and he stops talking.

---

## THE BULLETIN

### `/bulletin/spring-1959` — ASI-701 · Corporate Communications
The house organ for this quarter. Write it as an actual newsletter: three or
four news items with datelines, a bowling league table, a commissary notice, a
personals column, a safety reminder, and a "welcome to the company" list of new
hires. The lead is that NASA has named its seven astronauts and the President
has cabled all seven personally, unprompted, offering sixty dollars and an
afternoon. The noise from Sub-Level 4 is item four.
Use `Columns count={2}`, small headings, `IndexCard`, `Stub`.
Eggs: a personals ad seeking the return of a storage cube; a new hire whose
department is blank; the bowling league's Marine Division team, which has one
player.

### `/bulletin/winter-1958` — ASI-702 · Corporate Communications
Last winter's issue, same format, different news: the substrate procurement,
the bowling league finals, nine paragraphs about a missing elevator, and a
correction to the previous issue. Reference the fact that the Winter issue
reported no volunteer lost in the fourth quarter, which was correct at the
time of setting and remained correct for eleven days.
Eggs: the elevator; the correction column; an advertisement for the commissary
pie.

### `/bulletin/memoranda` — ASI-703 · Office of the President
Five or six of the President's interoffice memoranda, reproduced without
editing, using the `Memo` component repeatedly. Suggested subjects: the word
"impossible"; the commissary bread order; a memo forbidding the phrase "we
can't"; a memo about a man in Materials who did something remarkable; a memo
at eleven at night that goes somewhere unexpected; and one very short memo
that is three words long and lands like a punch.
Eggs: the eleven-at-night memo; a memo with a pencil reply from Caroline
attached; one memo that is dated in the future and stamped SEALED.

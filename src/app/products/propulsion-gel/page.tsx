import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Stamp, Panel, Notice, Rule, Row, FinePrint, Placard, PullQuote,
  Marginalia, Aside, Coupon, Split,
} from "@/components/Print";
import { Memo, PenNote } from "@/components/Memo";
import { FigureTable, SpecList, Plate, KeyFigures } from "@/components/Data";
import { Checklist } from "@/components/Form";
import { Advert } from "@/components/Ad";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Propulsion Gel",
  description:
    "An industrial emulsion which makes a man run faster than a man has any business running. Stopping is a separate product with a separate price.",
};

export default function Page() {
  const { prev, next } = neighbours("/products/propulsion-gel");

  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/products", label: "Products" },
          { label: "Propulsion Gel" },
        ]}
      />

      <DocHead
        doc="ASI-204"
        department="Materials"
        classification="Unrestricted"
        revision="Third printing. Schedule of arresting arrangements revised."
      />

      <div className="ap-rel">
        <Stamp float tone="red" sub="Stopping not included">
          Sold Separately
        </Stamp>
        <PageTitle
          advertising
          kicker={<>Materials Division &mdash; Emulsions &amp; Coatings</>}
          title="Propulsion Gel"
          deck={
            <>
              You paint it on a floor. Then the floor has an opinion about which way you are going, and the
              opinion is <i>forward</i>, and it is not interested in yours.
            </>
          }
          byline={
            <>
              Dictated by <b>Cave Johnson</b>, President &amp; Founder. Figures supplied by the Materials
              Division, who supplied them twice, because the first set was disputed by the wall.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            Propulsion Gel is an industrial emulsion, coloured orange, which is applied to a floor and which
            then makes a man run faster than a man has any business running. That is the product. That is
            the entire product. Everything else on this sheet is arithmetic and prices.
          </Lede>
          <p>
            It is not what we were after. In the spring of 1955 I told Materials that the curtain line on
            Sub-Level 2 was turning out eleven hundred units a shift, that I wanted fourteen hundred, and
            that I did not want to hear one word about rollers. What came back up the stairs nine weeks
            later was a five-gallon pail of orange emulsion and the man carrying it, and the man carrying it
            came through my office door at a speed which removed my office door.
          </p>
          <p>
            Now. Here is what it is not, because Sales keeps having to write the letter. It is not a
            lubricant. Slippery is a solved problem. Slippery was solved by the Egyptians and there is no
            money in it, and this company does not sell solved problems. We tested for slippery in every
            direction we could think of. A man standing on a treated deck stands. A man walking on a treated
            deck walks. A man who elects to <i>run</i> on a treated deck goes, and he keeps going, and he
            arrives places he had not yet decided to arrive at.
          </p>
          <p>
            The lab boys have a proper name for the mechanism. It is nine syllables long, four of them are
            Greek, and I have struck it from the catalogue. In this building we call it the orange, and when
            a foreman says the corridor is orange, every man on that shift knows precisely what he means and
            precisely which end of the corridor to stand at.
          </p>
        </Prose>

        <Stack>
          <Plate
            number="1"
            caption={
              <>
                Propulsion Gel, one coat, applied hot. Materials has never succeeded in photographing the
                gel and a man in the same frame, which the department regards as a documentation problem and
                which I regard as a testimonial.
              </>
            }
            tint
          >
            <Pictogram
              name="gel-splat"
              size={120}
              title="Propulsion Gel, applied"
              style={{ color: "var(--spot-orange)" }}
            />
          </Plate>

          <Row>
            <Placard>Corridor Live</Placard>
            <Placard tone="warn">Do Not Stop On The Orange</Placard>
            <Placard tone="danger">Mind The Wall</Placard>
          </Row>
        </Stack>
      </Split>

      <KeyFigures
        items={[
          { value: "61", label: "Feet per second", note: "Fastest recorded traversal, 4 March 1959" },
          { value: "406", label: "Instrumented runs", note: "Corridor 6, October to March" },
          { value: "$18.40", label: "Per gallon", note: "F.o.b. the loading dock" },
          { value: "3", label: "Times the wall has been re-faced", note: "Since January. Facilities have costed a fourth." },
        ]}
      />

      {/* ------------------------------------------------------------- */}

      <Section title="Specification">
        <SpecList
          rows={[
            { k: "Designation", v: "Propulsion Gel, Industrial Grade. Materials No. 204." },
            { k: "Appearance", v: "Opaque emulsion, Aperture Orange No. 4. Matt when cured." },
            {
              k: "Odour",
              v: (
                <>
                  Faint. Recorded in the file as &ldquo;citrus&rdquo; by a man who has since been asked not
                  to describe things.
                </>
              ),
            },
            { k: "Coverage", v: "340 square feet the gallon, one coat, on prepared concrete." },
            {
              k: "Coats recommended",
              v: (
                <>
                  Two. Three has been done. Three appears on this sheet over the signed objection of the
                  Materials Division and is available to any customer who asks for it by name.
                </>
              ),
            },
            { k: "Cure", v: "Nine minutes at seventy degrees Fahrenheit. Fully live at forty." },
            {
              k: "Coefficient of friction",
              v: (
                <>
                  Not applicable. Materials has attempted the measurement fourteen times and has three times
                  obtained a negative number.
                </>
              ),
            },
            {
              k: "Direction of effect",
              v: (
                <>
                  Forward. Always forward. Materials has not yet established forward <i>with respect to
                  what</i>, and has been told to stop putting that in the reports.
                </>
              ),
            },
            { k: "Shelf life", v: "Indefinite in a sealed drum. Six days in an open one, after which it has gone somewhere." },
            { k: "Packing", v: "Five-gallon pail; fifty-five-gallon drum; tank car." },
            { k: "Price", v: "$18.40 the gallon. $842.00 the drum. Tank car on application." },
            {
              k: "Stopping",
              v: (
                <>
                  <b>Sold separately.</b> See the schedule further down this sheet.
                </>
              ),
            },
          ]}
        />
      </Section>

      <PullQuote big attribution="The President, to the Materials Division, October 1958">
        I did not buy you a corridor so you could walk down it.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="What We Have Measured">
        <Prose>
          <p>
            Materials ran four hundred and six instrumented traversals in Corridor 6 between October and
            this March. Corridor 6 is one hundred and eighty feet of level concrete on Sub-Level 3 with a
            wall at the end of it. I will come back to the wall. Velocities below are sustained over the
            middle hundred feet, timed by two men with stop watches and, latterly, by a machine, because the
            two men kept disagreeing with each other in a manner Accounting found expensive.
          </p>
        </Prose>

        <FigureTable
          caption={
            <>
              Sustained and peak velocities by surface. Corridor 6, Sub-Level 3, October 1958 &ndash; March
              1959.
            </>
          }
          columns={[
            { key: "surface", head: "Surface" },
            { key: "coats", head: "Coats", numeric: true, width: "4.5rem" },
            { key: "mean", head: "Mean ft/sec", numeric: true },
            { key: "peak", head: "Peak ft/sec", numeric: true },
            { key: "who", head: "Subject of record" },
          ]}
          rows={[
            {
              surface: "Concrete, unfinished",
              coats: "1",
              mean: "29",
              peak: "36",
              who: "G. Halloran, machinist",
            },
            {
              surface: "Concrete, painted (Enrichment Grey)",
              coats: "1",
              mean: "33",
              peak: "40",
              who: "G. Halloran, machinist",
            },
            {
              surface: "Ceramic tile, chamber standard",
              coats: "1",
              mean: "38",
              peak: "46",
              who: "Volunteer 2,884",
            },
            {
              surface: "Steel deck plate, degreased",
              coats: "2",
              mean: "44",
              peak: "53",
              who: "Volunteer 3,109",
            },
            {
              surface: "Steel deck plate, degreased",
              coats: "3",
              mean: "51",
              peak: <b>61</b>,
              who: (
                <Redacted reason="Name withheld from the printed sheet at the request of Records">
                  Volunteer 3,110, of Marquette. He asked us to write down that he had done it, and we have
                  written it down, and this is where it is written.
                </Redacted>
              ),
            },
            {
              surface: "Salt, untreated (mine floor, Sub-Level 5)",
              coats: "1",
              mean: "21",
              peak: "24",
              who: "The Materials Division, collectively",
            },
            {
              surface: "Ice",
              coats: "1",
              mean: "12",
              peak: "14",
              who: "Slower. Nobody has explained this to me.",
            },
            {
              surface: "Ceiling",
              coats: "4",
              mean: "—",
              peak: "58",
              who: "Not a recommended application. Twice.",
            },
          ]}
          foot={
            <>
              Timed over the middle hundred feet. The final thirty feet of Corridor 6 are not instrumented,
              for reasons the Materials Division considers obvious and the Legal Department considers
              actionable.
            </>
          }
        />
      </Section>

      <Marginalia>
        The ceiling figure is included because it was measured. Materials wishes it recorded that it was not
        measured on purpose.
      </Marginalia>

      {/* ------------------------------------------------------------- */}

      <Section title="The Wall At The End Of Corridor 6">
        <Prose>
          <p>
            Corridor 6 ends in a wall. It has always ended in a wall. The wall is eighteen inches of
            reinforced concrete, it was poured in 1952, and it was there a good three years before the gel
            was &mdash; I want that on the record, because Legal has developed a nervous habit about this
            corridor and I will not have a wall of mine slandered by three men in a basement.
          </p>
          <p>
            The wall has been re-faced three times since January. Facilities have costed a fourth. Materials
            would prefer that I extend the corridor by two hundred feet, and I have declined, and I have
            declined in writing, because a longer corridor produces a faster man and the same wall, and I am
            not in the business of buying the same answer twice at a higher price.
          </p>
        </Prose>

        <PenNote tone="pencil" angle={-1.6}>
          Facilities have re-plastered the end of that corridor three times since January and I have stopped
          signing the requisitions. If you want a fourth you may sign it yourself, and you may write in the
          box what it is for. &mdash; C.
        </PenNote>

        <Memo
          to="Office of the President"
          from="Materials Division"
          re={<>Corridor 6 &mdash; extension of; alternatively, arresting arrangement at terminal end</>}
          date="19 March 1959"
          cc="Facilities. Medical, for information."
          sign={false}
        >
          <p>
            The Division requests authorisation to extend Corridor 6 by a further two hundred feet, or in
            the alternative to fit Arrangement B (graduated sand bed) at the terminal end at a cost of
            $310.00.
          </p>
          <p>
            The Division has now conducted four hundred and six traversals. The Division wishes to record
            that instrumentation ceases at one hundred and fifty feet not on grounds of expense but on
            grounds of recovery, and that the terminal wall is load-bearing, and that these two facts are
            not related but are becoming so.
          </p>
        </Memo>

        <PenNote tone="red" angle={1.1}>
          Denied. Longer corridor, faster man, same wall. Paint the last thirty feet orange so they can see
          it coming. &mdash; CJ
        </PenNote>
      </Section>

      <Notice head="The Enrichment Center Reminds You">
        The Enrichment Center reminds you that the treated corridor is a one-way corridor. It has always
        been a one-way corridor. Personnel who believe they are returning along a treated corridor are asked
        to consider, calmly and while still moving, what it is they are returning towards.
      </Notice>

      {/* ------------------------------------------------------------- */}

      <Section title="Stopping">
        <Prose>
          <p>
            Stopping is not included in the price of the gel. I want to be plain about that, in this type,
            on this sheet, because Sales has been getting letters and one of them was from a bank.
          </p>
          <p>
            Propulsion Gel accelerates. It does not decelerate. It does not slow, it does not taper, it does
            not consider slowing, and there is no mechanism within the emulsion by which it could be
            persuaded to. Deceleration is a separate discipline with a separate department and a separate
            price, and the customer may select from the schedule below or may elect &mdash; as very nearly
            all of our customers elect &mdash; to supply his own.
          </p>
        </Prose>

        <FigureTable
          caption="Schedule of arresting arrangements. Prices 1959, fitted, f.o.b. the loading dock."
          columns={[
            { key: "cat", head: "Cat. No.", width: "7rem" },
            { key: "arr", head: "Arrangement" },
            { key: "price", head: "Fitted price", numeric: true },
            { key: "note", head: "Note" },
          ]}
          rows={[
            {
              cat: "ASI-204/A",
              arr: "Arrest, passive (masonry)",
              price: "Customer supplies",
              note: "Universally available. Requires no maintenance. Requires a great deal of maintenance.",
            },
            {
              cat: "ASI-204/B",
              arr: "Arrest, graduated (sand bed, forty feet)",
              price: "$310.00",
              note: "Recommended. Ordered eleven times since 1957, nine of them by us.",
            },
            {
              cat: "ASI-204/C",
              arr: "Arrest, hydraulic (water trough, twelve feet)",
              price: "$95.00",
              note: "Water not supplied. At forty feet per second, water is masonry.",
            },
            {
              cat: "ASI-204/D",
              arr: "Arrest, aerial (faith plate redirect)",
              price: "$1,190.00",
              note: (
                <>
                  Converts the problem into a different problem, at height. See{" "}
                  <Link href="/products/aerial-faith-plate">Form ASI-207</Link>.
                </>
              ),
            },
            {
              cat: "ASI-204/E",
              arr: "Arrest, manual (rope, two men)",
              price: "$4.20",
              note: "Discontinued. The two men were consulted.",
            },
            {
              cat: "ASI-204/F",
              arr: "Arrest, none",
              price: "No charge",
              note: "Our most popular arrangement by volume, by a factor of nine hundred to one.",
            },
          ]}
          foot={
            <>
              Fitting by our own men, who arrive with the drum and leave without it. Arrangement F requires
              no fitting, no men and no drum, and is the reason this schedule is printed at all.
            </>
          }
        />
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section title={<>Application &amp; Handling</>}>
        <Prose>
          <p>
            The gel is sprayed. It is sprayed hot, at ninety pounds, through a lance, by a man in a suit, in
            a booth lined with asbestos board, and Medical informs me that I am obliged to mention the
            asbestos on any sheet that leaves this building. So: asbestos.
          </p>
          <p>
            And here is the good news the lab boys brought me on the same afternoon. The median latency on
            asbestos is forty-four point six years. If you are thirty or over you are laughing. Worst case,
            you miss out on a few rounds of canasta and you have advanced the cause of science by three
            centuries. I put those figures through the machine on Sub-Level 4 and the machine printed a
            happy face, and I have had it framed, and it is on the wall outside the booth where the men can
            see it.
          </p>
        </Prose>

        <Split weight="even">
          <Panel head={<>Sprayman&rsquo;s Check, Before Every Coat</>} tone="tint">
            <Checklist
              items={[
                { text: "Suit, hood, gauntlets and lance worn by the sprayman.", checked: true },
                { text: "Booth doors closed and dogged.", checked: true },
                { text: "Floor marked at both ends. Orange rope, not white.", checked: true },
                { text: "All personnel on the level advised that the corridor is live.", checked: true },
                { text: "All personnel on the level advised in which direction the corridor is live." },
              ]}
            />
          </Panel>

          <Panel head="Not To Be Applied To" tone="rule">
            <Prose>
              <ul>
                <li>Stairs. Any stairs. We have been over this with Facilities.</li>
                <li>Ramps exceeding four degrees.</li>
                <li>The interior of an elevator car, however tempting the arithmetic looks.</li>
                <li>
                  Any surface a volunteer is expected to stand still on whilst being addressed by the
                  announcement system.
                </li>
                <li>
                  Ceilings, notwithstanding the figure printed in the table above, which is a measurement
                  and not an endorsement.
                </li>
              </ul>
            </Prose>
          </Panel>
        </Split>

        <Aside>
          The gel lifts with hot water and a stiff broom. It lifts from concrete, tile, steel, salt and
          vinyl. It does not lift from wool, and the company has settled four suits about it, and the
          company settled all four rather than explain in open court what the claimant had been doing at the
          time.
        </Aside>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Advert
        eyebrow={<>Materials Division &mdash; Emulsions &amp; Coatings</>}
        head="Why Walk It When You Could Have Been There Already?"
        burst="ONE"
        burstSub="COAT"
        action={<>Order by the drum &mdash; Form ASI-299</>}
        href="/products/catalogue"
      >
        <p>
          Warehouses. Loading docks. Sorting floors. Any place where a man carries a thing from here to
          there, Propulsion Gel will have him there before he has finished deciding to go. Eighteen dollars
          and forty cents the gallon, three hundred and forty square feet to the gallon, and the whole floor
          live in nine minutes.
        </p>
        <p>
          Aperture Science Innovators has coated eleven thousand square feet of its own plant with this
          product and has no intention of stopping. The company has, in the main, no intention of stopping.
        </p>
      </Advert>

      <Coupon>
        <p className="ap-caps" style={{ fontSize: "0.68rem", marginTop: 0 }}>
          Materials Division &mdash; Sample Pint, Free To Trade Enquiries
        </p>
        <p>
          One pint of Propulsion Gel, Industrial Grade, sufficient for forty-two square feet, despatched
          free of charge to any firm on business letterhead. Cable APERTURE UPMICH or telephone ENrichment
          9-0943. Please state the length of your floor. Please state what is at the end of it.
        </p>
        <FinePrint tiny>
          Sample pints are despatched by pneumatic diversity vent and arrive at ninety miles an hour. Firms
          are advised to have somebody stand well back and somebody else stand ready.
        </FinePrint>
      </Coupon>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <ClearanceGate
        level={3}
        hint="Personnel who have taken an interest in the corridor may read the appended column."
      >
        <Panel head={<>Appendix C &mdash; Not Printed On The Trade Sheet</>} tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            The velocity table above carries five columns. The Division&rsquo;s working copy carries six.
            The sixth is headed <b>Recovered upright</b> and reads, straight down: yes, yes, yes, yes, no,
            yes, yes, and a dash. The Division has been instructed that the sixth column is a Materials
            matter and not a Sales matter. The Division agrees that it is not a Sales matter.
          </p>
        </Panel>
      </ClearanceGate>

      <FinePrint>
        Propulsion Gel, Industrial Grade, is sold as a coating and not as a means of conveyance. Aperture
        Science Innovators warrants the emulsion, its colour, its coverage and its cure time. It warrants no
        outcome arising from the use of a treated surface by a person, an animal, a vehicle or anything else
        capable of intending to be somewhere. The purchaser accepts that acceleration is the product, that
        deceleration is a separate catalogue item, and that the wall, kerb, bulkhead, machine, colleague or
        other terminal feature at the end of any treated run is the property, responsibility and
        arithmetical problem of the purchaser. Velocities quoted are averages of instrumented traversals by
        volunteers in good health who had been told what was going to happen. Aperture Science Innovators
        has never lost a man in Corridor 6.{" "}
        <Redacted reason="Struck by Legal, 21 March 1959, and reinstated by the President the same afternoon">
          Corridor 6 is one hundred and eighty feet long. Where a man is lost, he is lost somewhere.
        </Redacted>{" "}
        Retain this sheet. Form ASI-204.
      </FinePrint>

      {/* Materials logged 406 traversals. Records logged 405. */}
      {/* The disagreement is one run, on the fourth of March, and both sets of books are in the building. */}

      <Scrawl href="/vault/the-dens">
        i ran past the wall. i dont mean into it. the corridor keeps going and there are rooms down there
        that arent on the drawing and nobody has painted them grey yet
      </Scrawl>

      <p>
        <Link className="ap-caps" style={{ fontSize: "0.68rem" }} href="/products/catalogue">
          Order the whole line &mdash; Form ASI-299 &rarr;
        </Link>
      </p>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

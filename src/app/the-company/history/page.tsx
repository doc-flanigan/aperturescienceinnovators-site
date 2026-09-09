import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Split, Row, Aside, IndexCard,
} from "@/components/Print";
import { Memo, Signature, PenNote } from "@/components/Memo";
import { FigureTable, SpecList, Plate, KeyFigures } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Our Story So Far",
  description:
    "Sixteen years of Aperture Science Innovators, filed by the Records Department in the order the events actually happened, whatever the President remembers.",
};

export default function Page() {
  const { prev, next } = neighbours("/the-company/history");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/the-company", label: "The Company" },
          { label: "History" },
        ]}
      />

      <DocHead
        doc="ASI-102"
        department="Records & Filing"
        classification="Unrestricted"
        revision="Third printing. Three dates still disputed."
        extra={[{ label: "Compiled by", value: "Records & Filing, second floor" }]}
      />

      <div className="ap-rel">
        <Stamp float tone="black" sub="Second Floor" angle="right">
          Records Copy
        </Stamp>
        <PageTitle
          kicker={<>Form ASI-102 &mdash; Records &amp; Filing</>}
          title="Our Story So Far"
          deck={
            <>
              Sixteen years, one bolt of vinyl, four hundred dollars, one decommissioned salt mine and one
              hole in the fabric of space, set down in the order in which they occurred. The President
              dictated the narrative. Records supplied the dates. The two documents were reconciled with
              some difficulty and this is the result.
            </>
          }
          byline={
            <>
              Narrative dictated by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}. Chronology compiled,
              verified and in three places contested by the Records Department.
            </>
          }
        />
      </div>

      <KeyFigures
        items={[
          { value: "1943", label: "Founded", note: "As Aperture Fixtures" },
          { value: "16", label: "Years trading", note: "To this Spring" },
          { value: "9", label: "Test shafts", note: "Sunk, not all open" },
          { value: "4,000", label: "Feet, deepest working", note: "Four kilometres of tunnel" },
          { value: "1,247", label: "On the payroll", note: "As of March" },
        ]}
      />

      <Split weight="wide-left">
        <Prose>
          <Lede>
            Every company likes to tell you it started small. Most of them are lying, because most of them
            started with a bank, a brother-in-law and a going concern. This one started with four hundred
            dollars, a rented garage with a dirt floor, a bolt of vinyl forty yards long, and a
            twenty-six-year-old man who had correctly worked out that the United States of America was about
            to build a great many bathrooms and had not yet decided who was going to hang anything in them.
          </Lede>
          <p>
            That was 1943. The company was called Aperture Fixtures and it sold one product, and it sold it
            hard enough that by December of that same year the trade named its founder Shower Curtain
            Salesman of the Year, which is an honour a certain sort of man would be embarrassed by. The
            President is not that sort of man. The trophy is on the third floor. Nobody is to move the
            trophy.
          </p>
          <p>
            The word &ldquo;aperture&rdquo; was chosen because it made the curtain sound more hygienic. That
            is the whole of the reasoning and it worked, and there is a lesson in it that the entire
            research programme of this company has been built on since: the name of a thing changes what
            people will do with it.
          </p>

          <h2>January 1944 &mdash; He Bought The Hole</h2>
          <p>
            A worked-out salt mine came up for sale in the Upper Peninsula. The salt was gone. The sellers
            were embarrassed about the salt. They kept apologising for the salt. What they had left, and
            what they could not seem to give away, was a shaft complex whose tunnels run four kilometres
            straight down into the oldest rock on the continent, dry, cold, structurally sound, and
            absolutely private.
          </p>
          <p>
            He bought the hole. He has never once pretended otherwise. Everything this company has built
            since &mdash; nine test shafts, the Enrichment Center, the spheres, the whole of the volunteer
            programme &mdash; is built inside a hole that a salt concern could not unload, purchased in the
            same winter that the United States Army took delivery of two hundred thousand Aperture curtains
            and reported that every single one of them held water.
          </p>

          <h2>1947 &mdash; The Name</h2>
          <p>
            By 1947 the company had a machine shop, a chemist, and a president who had begun asking the
            chemist questions that were not about vinyl. Sales wanted the name left alone. Sales lost. The
            reasoning offered at the time is reproduced further down this sheet and it has never been
            improved upon: a shower curtain is a portal. A low-technology portal, admittedly, between the
            inside of a shower and the outside of a shower, but a portal, and a firm that has spent four
            years perfecting the low-technology version should not be shy about the other kind.
          </p>

          <h2>1951 to 1953 &mdash; Down, And Then Sideways</h2>
          <p>
            The first four test shafts were sunk in 1951 by men who had been hanging curtains eighteen
            months earlier. Test Shaft 09 came later and carries its construction date painted on the foyer
            wall in eleven-inch letters &mdash; 1952 &mdash; which Records considers more authoritative than
            anything in its own cabinets, on the grounds that nobody has ever successfully argued with a
            wall.
          </p>
          <p>
            Then, on a Thursday afternoon in April 1953, the lab boys put a hole in one wall of the
            materials laboratory and the hole came out of a different wall. There is no photograph. There
            was no committee. There was a curtain, a good deal of shouting, and a memorandum four hours
            later authorising every dollar in the building. Everything on the rest of this site follows from
            that Thursday.
          </p>

          <h2>1954 &mdash; The Programme</h2>
          <p>
            A hole is a curiosity until a man walks through it. In 1954 this company began paying members of
            the public sixty dollars, cash, same day, to do exactly that, against a contract the size of a
            phone book that nobody has ever finished reading and that Legal maintains is binding on the
            second page regardless. Since that year 4,118 volunteers have presented themselves at the gate
            and 1,306 have completed their testing.
          </p>
          <p>
            Records is obliged to state that the difference between those two figures is not a measure of
            anything, and that a great many men simply decline the second afternoon, and that the Enrichment
            Center pays them anyway.
          </p>

          <h2>1956 &mdash; The Contract</h2>
          <p>
            In 1956 the Eisenhower administration awarded Aperture Science Innovators the supply of shower
            curtains to every branch of the United States military. Every branch. The Army, the Air Force,
            the Marine Corps, the Coast Guard when it is being counted, and the two or three organisations
            that do not print their names on things.
          </p>
          <p>
            Except the Navy. The Navy went elsewhere, and the Navy&rsquo;s reasons were put in writing, and
            the writing is in the safe on the third floor, and the President has read it aloud at two
            Christmas parties. This company maintains a Marine Division to this day for reasons that are
            entirely to do with 1956 and not at all to do with any commercial opportunity anybody has been
            able to identify.
          </p>

          <h2>This Spring</h2>
          <p>
            Sixteen years on: 1,247 people on the payroll, nine shafts sunk, four kilometres of tunnel, and
            Test Shaft 09 running its deepest enrichment spheres in full daily operation. The curtain is
            still in the catalogue. The curtain still outsells the science. Nobody here finds that
            humiliating and neither should you.
          </p>
        </Prose>

        <Stack>
          <Panel head="The Founding Particulars" tone="tint">
            <SpecList
              rows={[
                { k: "Incorporated", v: "1943, as Aperture Fixtures" },
                { k: "Founding capital", v: "$400.00" },
                { k: "Premises", v: "One garage, rented" },
                { k: "Stock in hand", v: "One bolt of vinyl" },
                { k: "Employees", v: "One" },
                { k: "First-year honour", v: "Shower Curtain Salesman of the Year" },
                { k: "Renamed", v: `${COMPANY.name}, ${COMPANY.renamed}` },
                { k: "Mine acquired", v: "January 1944" },
                {
                  k: "Founding premises, present status",
                  v: (
                    <>
                      Carried on the asset register at $400.00. Lease renewed annually. Never visited.
                    </>
                  ),
                },
              ]}
            />
          </Panel>

          <Plate
            number="1"
            caption={
              <>
                The founding product and its principal descendant, drawn to no scale whatever. Records
                notes that the interval between them is ten years and that only one of them is
                presently insurable.
              </>
            }
          >
            <Row style={{ gap: "1.4rem", justifyContent: "center" }}>
              <Pictogram name="curtain" size={62} title="The Aperture Fixtures shower curtain, 1943" style={{ color: "var(--ink-2)" }} />
              <Pictogram name="portal" size={62} title="Quantum tunnelling aperture, 1953" style={{ color: "var(--spot-blue)" }} />
            </Row>
          </Plate>

          <Row>
            <Placard>Records &amp; Filing</Placard>
            <Placard tone="warn">Files Do Not Leave This Floor</Placard>
          </Row>

          <PenNote tone="pencil" angle={-1.2}>
            The garage lease was in his mother&rsquo;s name until 1948 and it is in mine now. Eleven dollars
            a year. He has never asked me why I keep renewing it and I have never told him. &mdash; C.
          </PenNote>
        </Stack>
      </Split>

      <PullQuote attribution={`${COMPANY.founder}, on the purchase of the mine, January 1944`}>
        They kept telling me there was no salt left in it. Son, I said, I am not in the salt business. I am
        in the business of owning somewhere nobody can see into.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="The Chronology, As Filed">
        <FigureTable
          caption="Principal events, 1943 to the present printing, with the file reference held by this department."
          columns={[
            { key: "year", head: "Year", numeric: true, width: "6rem" },
            { key: "event", head: "Event" },
            { key: "note", head: "Records Note" },
          ]}
          rows={[
            {
              year: "1943",
              event: "Aperture Fixtures incorporated. One product: the shower curtain.",
              note: <>Certificate of incorporation held in the third-floor safe. Original signature legible.</>,
            },
            {
              year: "1943",
              event: <>Mr. Johnson named Shower Curtain Salesman of the Year.</>,
              note: <>Trophy, one. Not to be moved. Instruction issued twice.</>,
            },
            {
              year: "Jan. 1944",
              event: <>Purchase of a decommissioned salt mine, Upper Peninsula &mdash; tunnels running four kilometres down.</>,
              note: (
                <>
                  Disputed. The deed is dated January; the cheque cleared in February. Records prefers the
                  cheque. The remaining salt has never been costed.
                </>
              ),
            },
            {
              year: "1944",
              event: "First United States Army contract. Two hundred thousand curtains.",
              note: <>Delivery notes complete. Every unit held water.</>,
            },
            {
              year: String(COMPANY.renamed),
              event: <>Renamed {COMPANY.name}. Trading name unchanged since.</>,
              note: <>See the memorandum reproduced below, filed under N/1.</>,
            },
            {
              year: "1949",
              event: "Materials Department established, third floor.",
              note: <>The third floor has been rebuilt twice. Records declines to say why.</>,
            },
            {
              year: "1951",
              event: "Test Shafts 1 through 4 sunk.",
              note: <>Disputed. Records holds 1950. The President holds 1951. The President prints the sheet.</>,
            },
            {
              year: "1952",
              event: <>Test Shaft 09 foyer completed and dated on the wall.</>,
              note: <>Painted, eleven-inch letters. Considered authoritative.</>,
            },
            {
              year: "1953",
              event: "First successful quantum tunnelling event, materials laboratory.",
              note: <>April. The day of the month is disputed. No photograph was taken.</>,
            },
            {
              year: "1954",
              event: "Volunteer testing programme opened to the general public.",
              note: <>4,118 presented to date; 1,306 completed. Both figures verified.</>,
            },
            {
              year: "1955",
              event: (
                <Redacted reason="Withdrawn from the file by instruction, 1955">
                  Test Shaft 07 closed below the fourth level. Twenty-two men reassigned in one afternoon.
                  Nothing else about this company changed and Records is instructed to say so.
                </Redacted>
              ),
              note: <>No file. Records has requested one four times.</>,
            },
            {
              year: "1956",
              event: <>Eisenhower administration contract &mdash; curtains to every branch of the military except the Navy.</>,
              note: <>Contract in the safe. The Navy&rsquo;s letter is in the same safe, separately.</>,
            },
            {
              year: "1956",
              event: "Lunar substrate procurement completed.",
              note: <Redacted reason="Figure withheld by Accounting">Cost per pound. Accounting has declined three times.</Redacted>,
            },
            {
              year: "1957",
              event: "Sub-Level 4 cleared and floored for the computation machine. Eleven tons of relays.",
              note: <>Delivered against a purchase order that appears in the ledger twice.</>,
            },
            {
              year: "1958",
              event: "Test Shaft 09 sunk to its final working depth.",
              note: <>Depth as filed. The figure on the foyer plate differs by ninety feet.</>,
            },
            {
              year: String(COMPANY.year),
              event: <>Test Shaft 09 opened 11 March, four months ahead of schedule. Deepest spheres in full operation.</>,
              note: <>Current. This sheet is the file.</>,
            },
          ]}
          foot={
            <>
              Compiled by Records &amp; Filing from the President&rsquo;s dictation, the deeds, the delivery
              notes and one wall. Where the sources disagree, the wall has been preferred.
            </>
          }
        />
      </Section>

      <Marginalia>
        Records disputes three of the dates above and has said so in writing on each of the three printings
        of this sheet. Records has been overruled on each of the three printings of this sheet. Records
        would like the record to show that it is the Records Department.
      </Marginalia>

      {/* ------------------------------------------------------------- */}

      <Section title="The Memorandum That Renamed The Company">
        <Memo
          to="All Personnel; Sales especially"
          re={<>The name of this firm, and the end of the discussion concerning it</>}
          date="3 September 1947"
          cc="Legal (for filing; no opinion sought)"
        >
          <p>
            Sales has now told me three times that customers will not know what we sell if we take
            &ldquo;Fixtures&rdquo; off the letterhead. Sales is correct. Customers will not know what we
            sell. Neither do I, and I have been here since the beginning, and that is precisely the
            condition I want this company operating under.
          </p>
          <p>
            Here is the reasoning and I will not be setting it out again. A shower curtain is a portal. It
            is a low-technology portal between the inside of a shower and the outside of a shower, and we
            have spent four years making the finest one in the Republic, and a firm that can do that has no
            business calling itself a fixture. A fixture is a thing that is bolted down. We are not bolted
            down. We own four kilometres of vertical Michigan and I intend to find out what is at the bottom
            of it.
          </p>
          <p>
            The name is <b>Aperture Science Innovators</b>. Not Laboratories &mdash; a laboratory is a room
            and I have a hole. Have the plate cut this week. Anyone who cannot say it may write it.
          </p>
        </Memo>

        <Aside>
          The plate was cut that week. It has been recut once, in 1953, when a printer in Marquette set
          &ldquo;Innovaters&rdquo; and forty thousand envelopes went out before anybody on the second floor
          noticed. Records has kept one.
        </Aside>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section title="Three Things This Company Did Not Plan">
        <Row style={{ gap: "1.2rem", alignItems: "stretch" }}>
          <IndexCard>
            <p className="ap-caps" style={{ fontSize: "0.6rem", color: "var(--ink-3)", margin: 0 }}>
              Card 1 &mdash; 1944
            </p>
            <p style={{ margin: "0.3rem 0 0" }}>
              The mine came with the salt still in it. Nobody has ever costed the salt. It is still down
              there, behind everything, holding up the ceiling of a department that does not know it.
            </p>
          </IndexCard>
          <IndexCard>
            <p className="ap-caps" style={{ fontSize: "0.6rem", color: "var(--ink-3)", margin: 0 }}>
              Card 2 &mdash; 1953
            </p>
            <p style={{ margin: "0.3rem 0 0" }}>
              The curtain in the materials laboratory was hanging in the room by accident. It had been put
              up to keep dust off a bench. It is the reason for the rest of this publication.
            </p>
          </IndexCard>
          <IndexCard>
            <p className="ap-caps" style={{ fontSize: "0.6rem", color: "var(--ink-3)", margin: 0 }}>
              Card 3 &mdash; 1954
            </p>
            <p style={{ margin: "0.3rem 0 0" }}>
              The volunteer programme was drafted as a two-week trial. It has run for five years. The tin
              the money comes out of is the original tin.
            </p>
          </IndexCard>
        </Row>
      </Section>

      <Notice head="The Enrichment Center Reminds You">
        A history is a document and a document is a thing that was written down by somebody. Where this
        sheet and your own recollection differ, this sheet is the sheet that is filed.
      </Notice>

      <ClearanceGate
        level={3}
        hint={<>Personnel of the third grade and above may read the Records Department&rsquo;s appended note.</>}
      >
        <Panel head={<>Appended By Records &amp; Filing. Not For The Printer.</>} tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            The 1955 entry was not lost. It was withdrawn, on a slip, and the slip is initialled by
            somebody whose initials do not appear anywhere else in this building. We have kept the slip.
            We have also kept the payroll sheets for that November, which run to 1,269 names against 1,247
            this March, and the difference is not accounted for by resignations, of which there were nine.
            Records is not drawing a conclusion. Records is a filing department. Records is simply noting
            that the arithmetic on this sheet does not close and that it has never once been asked to.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Signature note="Approved for printing, unread, in the usual way. Third printing, Spring 1959." />

      <FinePrint tiny>
        Form ASI-102. The printed directory describes this sheet as covering &ldquo;fourteen short
        years&rdquo;. The plate for the directory was cut in 1957 and the Records Department has declined to
        recut it, on the grounds that it would then have to be recut again. The correct figure is sixteen.
        Retain until superseded. See also{" "}
        <Link href="/the-company/cave-johnson">Form ASI-101</Link>, in which the President gives the same
        chronology from memory and gets three of it wrong.
      </FinePrint>

      {/* The chronology kept on this floor runs 1943 to 1959 and stops. */}
      {/* There is a second chronology on Sub-Level 4. It does not stop. */}
      {/* Nobody set that one in type and nobody asked the machine to keep it. */}

      <Scrawl href="/vault/the-dens">
        there is a year missing off the wall down here. someone painted over it and painted it back wrong
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

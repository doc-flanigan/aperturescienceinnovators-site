import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint, Marginalia,
  Split, Row, Aside, Stub, Columns,
} from "@/components/Print";
import { Memo, Signature, PenNote } from "@/components/Memo";
import { FigureTable, SpecList, Plate, KeyFigures } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ShaftSection, Flourish } from "@/components/svg/Ornament";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "The Salt Mine At Upper Michigan",
  description:
    "Nine shafts, four thousand feet, a rail spur, six bowling lanes and the largest privately held hole in North America, surveyed by the Facilities Department and boasted about by the President.",
};

export default function Page() {
  const { prev, next } = neighbours("/the-company/upper-michigan");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/the-company", label: "The Company" },
          { label: "The Facility" },
        ]}
      />

      <DocHead
        doc="ASI-105"
        department="Facilities"
        classification="Unrestricted"
        revision="Fourth survey"
        extra={[{ label: "Site", value: "Upper Peninsula, Michigan" }]}
      />

      <div className="ap-rel">
        <Stamp float tone="green" sub="Facilities, Fourth Survey">
          Surveyed
        </Stamp>
        <PageTitle
          kicker={<>Form ASI-105 &mdash; Facilities</>}
          title="The Salt Mine At Upper Michigan"
          deck={
            <>
              A worked-out salt mine, bought in January 1944 for the hole rather than the salt, and
              presently containing nine test shafts, a reactor, an incinerator, a commissary, six bowling
              lanes, 1,247 people and one question the Facilities Department has stopped putting in
              writing.
            </>
          }
          byline={
            <>
              Surveyed by the Facilities Department. Introduced, at some length and without being asked, by{" "}
              <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}.
            </>
          }
        />
      </div>

      <KeyFigures
        items={[
          { value: "9", label: "Test shafts", note: "Sunk. Not all open." },
          { value: "4,000", label: "Feet, deepest working level", note: "Feet. See the note on metres." },
          { value: "1,247", label: "On the payroll", note: "Most of them below grade" },
          { value: "1944", label: "Acquired", note: "January. Cash." },
          { value: "40", label: "Feet below the water table", note: "Sub-Level 7" },
        ]}
      />

      <Split weight="wide-left">
        <Prose>
          <Lede>
            Everybody who writes about this company writes about the curtain, and then the hole, and they
            get the order right and the emphasis wrong. The hole is not where the science happens. The hole
            is the science. There is no laboratory in the Republic that can hold a column of air four
            thousand feet tall at a steady sixty-eight degrees, and I did not build one either. I bought
            one, in January 1944, off a salt concern that could not have been happier to see the back of it.
          </Lede>
          <p>
            They apologised for the salt. They apologised the whole afternoon. There is no salt left in it,
            they said, as though a man in my position walks into a room looking for salt. I told them what I
            have told everybody since: I am not in the salt business. I am in the hole business, and this is
            the finest hole in North America, and I would like to pay you for it now, before you notice.
          </p>
          <p>
            Sixteen years later there are 1,247 people working in that hole, and a rail spur, and a
            commissary that does a pie, and six bowling lanes on the surface with a league in them, and a
            gate house with the same man in it since 1951. There is also, on the fourth survey, four
            thousand feet of tunnel that was here before we were and does not appear on any drawing the
            sellers gave us. Facilities calls this the inherited plant. I call it a bargain.
          </p>

          <h2>On The Salt, Since Somebody Always Asks</h2>
          <p>
            The mine came with the salt still in it. Not all of it &mdash; they took what was worth taking
            and then some &mdash; but there is salt down there, in quantity, in the west drifts, and it has
            been sitting in the dark since before this company had a name. Accounting has never entered it
            as an asset. Accounting cannot enter it as an asset without a tonnage, and a tonnage requires a
            man with a lamp and a tape measure walking west for a day and a half, and the last time
            Facilities proposed that survey the estimate came back at eleven hundred dollars and the
            President wrote one word on it and the word was &ldquo;no.&rdquo;
          </p>
          <p>
            So the salt is not on the books. It is the only thing this company owns that has never been
            costed, and I am told the sum involved is somewhere between forty thousand dollars and nothing
            at all, and I sleep exceptionally well.
          </p>
        </Prose>

        <Stack>
          <Plate
            number="1"
            caption="Cross-section, working shafts, schematic. Drawn to no scale that Facilities will defend. The dotted line is the water table; everything printed below it is printed from memory."
            tint
          >
            <ShaftSection style={{ width: "100%", maxWidth: 220, color: "var(--spot-blue)" }} />
          </Plate>

          <Panel head="Site, In Brief" tone="tint">
            <SpecList
              rows={[
                { k: "Acquired", v: `January ${COMPANY.mineAcquired}` },
                { k: "Former use", v: "Salt. Worked out. Allegedly." },
                { k: "Surface acreage", v: "1,410 acres, fenced" },
                { k: "Grade to deepest level", v: "4,000 ft. (Engineering: 4 km.)" },
                { k: "Test shafts sunk", v: "9" },
                { k: "Test shafts in service", v: "7" },
                { k: "Gate house", v: "One. Manned since 1951." },
                { k: "Rail", v: "Private spur, 2.6 miles" },
                {
                  k: "Below the water table",
                  v: (
                    <Redacted reason="Facilities declines to survey below Sub-Level 7">
                      Twelve levels. Two are ours.
                    </Redacted>
                  ),
                },
              ]}
            />
          </Panel>

          <Row>
            <Placard>Aperture Science Innovators</Placard>
            <Placard tone="warn">Hard Hat Beyond This Line</Placard>
          </Row>
        </Stack>
      </Split>

      <PullQuote attribution={`${COMPANY.founder}, to the Duluth, South Shore & Atlantic Railroad, 1948`}>
        Run the spur to my gate and I will fill your cars for twenty years. Run it to the county road and I
        will dig my own railway, and I will enjoy it.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="The Nine Shafts">
        <Prose>
          <p>
            Shafts 01 through 04 were sunk in 1951 by men who had spent eighteen months hanging curtains and
            were ready for a change. Shafts 05 and 06 followed in 1953, 08 in 1957, and Test Shaft 09 opened
            on 11 March of this year, four months early, by the straightforward method of not asking the
            engineers how long it would take. Shaft 07 is dealt with in the table and will not be dealt with
            twice.
          </p>
        </Prose>

        <FigureTable
          caption="Test shafts, depth, opening date and present status. Fourth survey, Facilities Department."
          columns={[
            { key: "no", head: "Shaft", numeric: true, width: "5rem" },
            { key: "depth", head: "Depth", numeric: true, width: "7rem" },
            { key: "opened", head: "Opened", numeric: true, width: "6rem" },
            { key: "status", head: "Present Status" },
          ]}
          rows={[
            { no: "01", depth: "640 ft.", opened: "1951", status: "In service. Instruction and demonstration." },
            { no: "02", depth: "900 ft.", opened: "1951", status: "In service. Materials, gel decanting." },
            { no: "03", depth: "1,150 ft.", opened: "1951", status: "In service. Chambers 1 through 6." },
            { no: "04", depth: "1,400 ft.", opened: "1951", status: "In service. Emancipation grill trials." },
            { no: "05", depth: "1,860 ft.", opened: "1953", status: "In service. Faith plate range." },
            { no: "06", depth: "2,100 ft.", opened: "1953", status: "In service. Corridor 6 remains closed at the far end." },
            {
              no: "07",
              depth: "2,400 ft.",
              opened: "1954",
              status: (
                <>
                  Closed below the fourth level, 1955. Above the fourth level: lit, heated, swept weekly,
                  entered by nobody.{" "}
                  <Redacted reason="Facilities has no instruction covering this line">
                    The signage below the fourth level reads right to left. It was not painted that way.
                  </Redacted>
                </>
              ),
            },
            { no: "08", depth: "3,100 ft.", opened: "1957", status: "In service. Computation, Sub-Level 4 plant." },
            {
              no: "09",
              depth: "4,000 ft.",
              opened: "1959",
              status: (
                <>
                  In service. Enrichment spheres, foyer painted 1952 against a shaft opened this March, a
                  discrepancy Records has been asked about and has answered.{" "}
                  <Link href="/enrichment-center/test-shaft-09">See ASI-301</Link>.
                </>
              ),
            },
          ]}
          foot={
            <>
              Facilities gives depths in feet and arrives at four thousand. Engineering gives them in metres
              and arrives at four kilometres. Both figures are in daily use, both appear in this
              publication, and neither department will move. The President has ruled that the hole is
              whatever depth the man standing in it says it is.
            </>
          }
        />

        <Marginalia>
          Shaft 07 is counted among the nine on every sheet this company prints, including this one. It is
          not counted among the seven in service. Facilities is aware that seven and one do not make nine
          and would rather not be asked to reconcile it in public.
        </Marginalia>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section title="The Surface">
        <Split weight="wide-right">
          <Stack>
            <Row style={{ gap: "1.4rem", flexWrap: "wrap" }}>
              <Pictogram name="elevator" size={54} title="The head frame and cage" style={{ color: "var(--ink-3)" }} />
              <Pictogram name="curtain" size={54} title="The curtain works" style={{ color: "var(--ink-3)" }} />
              <Pictogram name="cake" size={54} title="The commissary" style={{ color: "var(--ink-3)" }} />
            </Row>

            <Stub head="Ore Spur, Weekdays">
              In 0640 &mdash; Out 1720 &mdash; Two cars, three on a Thursday
            </Stub>

            <Stub head="Company Bus">
              Houghton 0555 &mdash; Gate 0640 &mdash; Returns when the shift bell says so
            </Stub>
          </Stack>

          <SpecList
            rows={[
              { k: "Gate house", v: "One man, one stove, one ledger. Mr. E. Pike, since 1951. He has not been late." },
              { k: "Head frame", v: "Steel, 94 ft., repainted every second spring in Institutional Grey" },
              { k: "Curtain works", v: "Two shops, 61 sewing stations, still the largest single building on the site" },
              { k: "Commissary", v: "Ninety covers. Pie daily. The pie is the reason the bus runs early." },
              { k: "Company store", v: "Credit against the pay envelope. Terms on Form ASI-502." },
              { k: "Housing", v: "Aperture Row: 88 units, 44 duplexes, one water tower, no through road" },
              { k: "Bowling", v: "Six lanes, league play Wednesdays. Marine Division fields a team of one." },
              { k: "Rail spur", v: "2.6 miles to the Duluth, South Shore & Atlantic. Ours. Bought outright, 1948." },
              { k: "Fence", v: "9,700 yards. Two gates. One is welded and has been since 1955." },
            ]}
          />
        </Split>

        <Aside>
          Employees living on Aperture Row should note that the Row sits directly above the second level and
          that the low hum reported in the north duplexes is the ventilation plant, is within specification,
          and has been within specification continuously since the plant was installed in 1952, including on
          the four occasions the plant was switched off for maintenance. See{" "}
          <Link href="/careers/benefits">Form ASI-502</Link> for the housing schedule.
        </Aside>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section title="Below Grade">
        <Prose>
          <p>
            Seven sub-levels are surveyed, drawn, lit and on the fire plan. They are listed here in full,
            because the Facilities Department has been asked for such a list eleven times in four years and
            proposes to be asked a twelfth time by somebody who has not read this sheet.
          </p>
        </Prose>

        <FigureTable
          caption="Sub-levels, principal plant, and the temperature at which each is held."
          columns={[
            { key: "lvl", head: "Level", width: "7rem" },
            { key: "plant", head: "Principal Plant" },
            { key: "temp", head: "Held At", numeric: true, width: "6rem" },
          ]}
          rows={[
            { lvl: "Sub-Level 1", plant: "Cage landing, muster hall, lamp room, first aid", temp: "68°" },
            { lvl: "Sub-Level 2", plant: "Machine shop, curtain overflow store, the good lathe", temp: "64°" },
            {
              lvl: "Sub-Level 3",
              plant: (
                <>
                  Materials. Gel decanting, resin ovens, and the fires that Records has for five years
                  insisted on filing under &ldquo;third floor.&rdquo;
                </>
              ),
              temp: "71°",
            },
            { lvl: "Sub-Level 4", plant: "Computation. Eleven tons of relays and one punch-card reader", temp: "58°" },
            { lvl: "Sub-Level 5", plant: "Incinerator, rated 1,100°. It is not for documents.", temp: <>&mdash;</> },
            { lvl: "Sub-Level 6", plant: "Reactor and reactor room. Cleaned nightly by Greg.", temp: "Warm" },
            {
              lvl: "Sub-Level 7",
              plant: (
                <>
                  Records, deep storage. Forty feet below the water table and dry by machinery alone.{" "}
                  <Redacted reason="Not surveyed. Not on the fire plan. Not discussed.">
                    The stair continues past the Records door for a further nine flights. Facilities has
                    measured it twice and got two answers.
                  </Redacted>
                </>
              ),
              temp: "51°",
            },
          ]}
          foot="The incinerator placard reading NOT FOR DOCUMENTS was added in enamel by a hand unknown to this department. Facilities did not order it, has not removed it, and concurs with it."
        />

        <Columns count={2}>
          <p>
            The reactor is a matter of some pride and very little conversation. It was installed in 1954,
            it runs the pumps, the lights, the ventilation plant, the elevators and the whole of the
            Computation load, and in five years it has been shut down exactly once, for eleven minutes, on
            a Tuesday, for reasons entered in the log as &ldquo;Greg.&rdquo;
          </p>
          <p>
            The pumps are the true wonder of this facility and nobody comes to see them. Four of them, on
            Sub-Level 7, moving eight hundred gallons a minute out of a level that has no business being
            dry. Stop them and the level is a lake in forty hours. They have not stopped. They will not
            stop. The company has a second reactor budgeted for no other purpose than to make certain of it.
          </p>
        </Columns>
      </Section>

      <Notice head="The Enrichment Center Reminds You">
        The elevators are held for the descending shift between 0730 and 0800 and again at the bell. An
        elevator that arrives without having been called is in service and may be entered. An elevator that
        arrives without having been called and without a car may not.
      </Notice>

      {/* ------------------------------------------------------------- */}

      <Section title="A Memorandum From The Office Of The President">
        <Memo
          to="Facilities; Engineering; Mr. Pike, for the gate ledger"
          re="Sub-Level 7, the pumps, and the proposal to stop digging"
          date="2 February 1959"
          cc="Records (one carbon, deep storage)"
          stamp={<Stamp tone="black" angle="right">File Copy</Stamp>}
        >
          <p>
            Facilities has submitted a proposal recommending that excavation below Sub-Level 7 be
            discontinued on the grounds of water, cost and what the proposal calls, in paragraph four,
            &ldquo;the character of the ground.&rdquo; I have read paragraph four eleven times. Paragraph
            four does not say what the character of the ground is. Paragraph four says that the men would
            rather not.
          </p>
          <p>
            I did not buy a hole to stop at the bottom of it. Nobody in this company has ever been paid to
            find out how deep a thing is not. Buy another pump. Buy four. If the water wins, we will
            establish what the water wants and we will sell it something.
          </p>
          <p>
            Excavation continues. Mr. Pike is instructed to log every man down and every man up, by name,
            nightly, and to bring me the ledger himself on any evening the two columns fail to agree.
          </p>
        </Memo>

        <PenNote tone="pencil" angle={-1.5}>
          The columns failed to agree on the 14th, the 19th and the 27th of last month. Mr. Pike brought me
          the ledger on all three evenings because the President was in Washington, and I have kept all
          three, and I have not yet decided what a person does with them. &mdash; C.
        </PenNote>
      </Section>

      {/* Facilities holds three site drawings: 1946, 1951, 1957. */}
      {/* The 1957 drawing has a corridor the 1951 drawing does not. */}
      {/* Nothing was dug there. Nobody signed for it. It is on the fire plan anyway. */}

      <ClearanceGate
        level={3}
        hint="Personnel of the third grade and above may read the Facilities note withheld from the printed survey."
      >
        <Panel head="Appended By Facilities. Withheld From The Printed Survey." tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            The fourth survey measured 61,400 linear feet of tunnel. The third survey, taken in 1957 by two
            of the same men with the same instrument, measured 58,900. The difference is 2,500 feet and it
            is not an error of arithmetic; this department has now checked the arithmetic four times and
            walked the west drifts twice. There is more tunnel down there than there was, and the new tunnel
            is old &mdash; the tool marks are wrong for our machines and wrong for the salt concern&rsquo;s
            machines and right for nothing this department can name. Facilities recommends no action.
            Facilities has never recommended no action before and would like that noted.
          </p>
        </Panel>
      </ClearanceGate>

      <Row>
        <Placard tone="warn">Sub-Level 7 &mdash; No Descent After The Shift Bell</Placard>
        <Placard tone="danger">Pumps Running &mdash; Do Not Silence Alarm</Placard>
        <Placard>Salt Is Not A Hazard</Placard>
      </Row>

      <Rule variant="fat" />

      <Prose>
        <p>
          That is the facility. Fourteen hundred acres of the Upper Peninsula, most of it trees, and
          underneath it the largest privately held hole in North America with the finest testing programme
          in the Republic running at the bottom of it. Men come up here from Chicago expecting a mine and
          they find a town, a railway, a pie, a bowling league and a column of air four thousand feet deep
          with science falling down it, and to a man they say the same thing, which is that they had no idea.
          Nobody has any idea. That is the pleasure of the thing.
        </p>
        <p>
          Come and see it. Write ahead &mdash; the{" "}
          <Link href="/the-company/correspondence">correspondence sheet</Link> explains why that is a longer
          sentence than it looks &mdash; and Mr. Pike will have your name in the ledger and a hard hat in
          your size. Then go and read{" "}
          <Link href="/the-company/history">how the whole thing started</Link>, which was with a curtain, and
          which nobody believes until they have seen the works.
        </p>
      </Prose>

      <Signature note="Form ASI-105. Fourth survey, Facilities Department, approved for printing without amendment." />

      <Flourish style={{ width: 200, color: "var(--ink-faint)", margin: "1.4rem 0" }} />

      <FinePrint tiny>
        Depths, acreages and linear measurements in this survey are given as measured on the date of the
        survey and are not warranted to be the same on any subsequent date. The presence of a corridor,
        stair, door or level on a drawing does not constitute a representation that it was constructed by
        this company, and the absence of one does not constitute a representation that it is not there.
        Form ASI-105. Retain until superseded by the fifth survey, which is not scheduled.
      </FinePrint>

      <Scrawl href="/vault/the-dens">
        count the doors on seven going down then count them coming up. do it twice. dont tell facilities
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

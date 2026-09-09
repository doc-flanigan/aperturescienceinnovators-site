import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Aside, Row, Split, IndexCard, Columns,
} from "@/components/Print";
import { Memo, PenNote, Signature } from "@/components/Memo";
import { Checklist } from "@/components/Form";
import { FigureTable, SpecList, KeyFigures } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { SignPlate } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Safety & Comfort",
  description:
    "The Enrichment Center has identified no hazard in sixteen years, and this sheet sets out the definitions by which that record was achieved.",
};

export default function Page() {
  const { prev, next } = neighbours("/enrichment-center/safety");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/enrichment-center", label: "Enrichment Center" },
          { label: "Safety" },
        ]}
      />

      <DocHead
        doc="ASI-305"
        department="Enrichment Center Operations"
        classification="Unrestricted — Posted In Every Chamber"
        revision="Seventh revision. Six of the seven amended the definitions."
        extra={[{ label: "Hazards Identified", value: "None" }]}
      />

      <div className="ap-rel">
        <Stamp float tone="green" size="big" sub="Sixteen Years">
          No Hazards
        </Stamp>
        <PageTitle
          kicker="Form ASI-305 — Enrichment Center Operations"
          title="Safety & Comfort"
          deck={
            <>
              The Enrichment Center has never identified a hazard. Not in sixteen years, not at four
              thousand feet, not in nine shafts. This sheet sets out how that was achieved, with the
              definitions attached, and the reader is invited to check them.
            </>
          }
          byline={
            <>
              Issued by Enrichment Center Operations under the authority of <b>{COMPANY.founder}</b>,{" "}
              {COMPANY.founderTitle}. Definitions supplied by the Legal Department, basement rear.
            </>
          }
        />
      </div>

      <Prose>
        <Lede>
          There are no hazards in the Aperture Science Enrichment Center. That is not an aspiration or a
          form of words assembled to please an inspector. It is the standing finding of seven revisions of
          this document, and it is why we can put a man four thousand feet under the Upper Peninsula on a
          Tuesday morning and have him back at the window by three.
        </Lede>
        <p>
          A visitor arrives at a sheet titled &ldquo;Safety&rdquo; expecting a list of dangers, and the
          Enrichment Center is sorry to disappoint him. There is no such list. There is a list of{" "}
          <em>conditions</em>, which is longer than most companies would print, and beside it a column
          stating what each condition is. Not one of them is a hazard. That is the whole of our safety
          programme and it has not failed yet.
        </p>
      </Prose>

      <Row>
        <Placard>Boots Issued At The Gate</Placard>
        <Placard tone="warn">Do Not Look Into The Aperture With Your Remaining Eye</Placard>
        <Placard tone="danger">This Door Closes Without Warning</Placard>
      </Row>

      {/* ------------------------------------------------------------- */}

      <Section title="What A Hazard Is, And Therefore What It Is Not" number="I">
        <Split weight="wide-left">
          <Prose>
            <p>
              Confusion in this industry proceeds from a loose use of the word. Working with the Legal
              Department &mdash; three people, a basement, worth every dollar of them &mdash; Operations has
              established that a reported condition is a hazard if, and only if, it satisfies all three of
              the tests opposite.
            </p>
            <p>
              All three. Not two. A condition satisfying two is an event. A condition satisfying one is a
              measurement. A condition satisfying none of them is a Tuesday, and this company has had a
              great many Tuesdays and has never complained of one.
            </p>
          </Prose>

          <Panel head="The Three Tests — Directive 12, Appendix C" tone="tint">
            <SpecList
              rows={[
                {
                  k: "First — Unexpected",
                  v: "Nobody in this company anticipated it. The President anticipates everything and has said so in writing.",
                },
                {
                  k: "Second — Uncontrolled",
                  v: "It cannot be stopped by a man turning a wheel. There is a man on every level and a wheel beside every man.",
                },
                {
                  k: "Third — Unmeasured",
                  v: "No instrument was recording. There is an instrument in every chamber and it is always recording. This test has never been satisfied.",
                },
                {
                  k: "Fourth",
                  v: (
                    <Redacted reason="Struck from the fourth revision at the request of Operations">
                      It was reported by the person to whom it happened.
                    </Redacted>
                  ),
                },
              ]}
            />
          </Panel>
        </Split>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section title="Reported Conditions & Their Classification" number="II">
        <Prose>
          <p>
            Personnel are encouraged to report conditions and personnel report a great many, which
            Operations takes for a healthy sign and not the other thing. Below is every condition reported
            in the first quarter of this year, from the ledger, in the reporting party&rsquo;s own wording.
          </p>
        </Prose>

        <FigureTable
          caption="Conditions reported to Operations, first quarter 1959"
          columns={[
            { key: "cond", head: "Condition, As Reported" },
            { key: "where", head: "Location", width: "8rem" },
            { key: "class", head: "Classification", width: "11rem" },
            { key: "act", head: "Action" },
          ]}
          rows={[
            {
              cond: "Water entered Chamber 4 to a depth of four feet, all at once",
              where: "Shaft 09",
              class: "Scheduled Humidity",
              act: "Boots issued.",
            },
            {
              cond: "Volunteer went in by one door and came out of another",
              where: "Chamber 2",
              class: "Ingress Variance",
              act: "Data retained. Volunteer paid.",
            },
            {
              cond: "Volunteer came out of the same door twice",
              where: "Chamber 2",
              class: "Ingress Variance (Compound)",
              act: "Data retained. Both paid.",
            },
            {
              cond: "Impact mark on the wall at the end of Corridor 6, at nine feet",
              where: "Sub-Level 3",
              class: "Architectural Feedback",
              act: "Repainted. Height recorded.",
            },
            {
              cond: "Fire, third floor, fourth of the quarter",
              where: "Surface",
              class: "Materials Department",
              act: "None. Budgeted for.",
            },
            {
              cond: "Air in Observation Room 3 caused four men to sit down on the floor",
              where: "Shaft 09",
              class: "Atmosphere, Enriched",
              act: "Ventilated. Three of four returned to shift.",
            },
            {
              cond: "Employee heard his own voice from an unoccupied chamber",
              where: "Sub-Level 4",
              class: "Acoustics",
              act: "Referred to Computation, which has not written back.",
            },
            {
              cond: "Elevator continued eleven seconds past the lowest indicated level",
              where: "Shaft 09",
              class: "Enthusiasm",
              act: "Indicator to be repainted.",
            },
            {
              cond: "Grill removed a volunteer’s fillings, buttons, keys and wedding ring",
              where: "Chamber 6",
              class: "Property Recovery",
              act: "Ring returned. Fillings not.",
            },
            {
              cond: "Nothing whatever reported from Chamber 8 in the entire quarter",
              where: "Shaft 09",
              class: "Compliance",
              act: "Chamber 8 commended.",
            },
            {
              cond: "Personnel decline the Sub-Level 7 stair after the shift bell",
              where: "Sub-Level 7",
              class: (
                <Redacted reason="Classification withheld pending the eighth revision">
                  Preference (Collective)
                </Redacted>
              ),
              act: "Stair remains open.",
            },
          ]}
          foot="Two hundred and eleven conditions reported. Two hundred and eleven classified. Hazards identified: none. Consider how improbable that would be if there were any."
        />

        <Marginalia>
          Operations records that the Classification column is completed before the Action column, and that
          since 1954 both have been completed by the same man, who is never the man who reported the
          condition.
        </Marginalia>
      </Section>

      <Notice head="The Enrichment Center Reminds You">
        The fire doors are not doors made of fire, nor, strictly, doors that resist it. They are the doors
        the Enrichment Center closes in the event of a fire. They close from the corridor side, whether or
        not the corridor is empty, at a speed determined by the fire. In sixteen years not one has failed to
        close, and the Enrichment Center regards that as much the more important of the two figures.
      </Notice>

      {/* ------------------------------------------------------------- */}

      <Section title="The Categories, Taken One At A Time" number="III">
        <Columns count={2}>
          <p>
            <b>Fire.</b> The third floor has burned four times this year and we have not lost a working day
            to it. Materials works with things that would rather be doing something else, and such a
            department occasionally gets its way. Nobody has been in the room at the time since 1956, and
            Operations asks that the sentence be read carefully.
          </p>
          <p>
            <b>Depth.</b> Four thousand feet is not a danger, it is a distance, and a distance is a thing an
            elevator solves. The descent takes eleven minutes and there is nothing to see for ten of them.
            The minute in which there is something is Sub-Level 4, and personnel face the doors.
          </p>
          <p>
            <b>Momentum.</b> A speedy thing goes in and a speedy thing comes out. That is the whole physics
            of it and no amount of committee work will get you a slower one. Momentum is conserved through
            an aperture. So, in the great majority of cases, is the volunteer.
          </p>
          <p>
            <b>Chemistry.</b> Do not swallow the repulsion gel; you will not keep it down, and the part of
            you that does will spend the afternoon near the ceiling. Do not handle conversion gel without a
            mask, whatever you may have seen the President do on a Thursday.
          </p>
        </Columns>

        <Row style={{ gap: "1.4rem", flexWrap: "wrap" }}>
          <SignPlate name="fire" caption="Unscheduled warmth" size={58} />
          <SignPlate name="neurotoxin" caption="Atmosphere, enriched" size={58} />
          <SignPlate name="laser" caption="Illumination, directional" size={58} />
          <SignPlate name="gel-splat" caption="Preference" size={58} />
          <SignPlate name="hazard" caption="No hazard identified" size={58} />
        </Row>

        <Aside>
          Directive 12 fixes the grammar: a black plate, a white figure, no detail a man cannot read at
          forty feet through plate glass while the room is on fire. That last clause is not decorative. It
          was written by a man who had tested it.
        </Aside>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section title="A Word From The President On Asbestos" number="IV">
        <Panel head="Dictated, and printed on this sheet at his insistence" tone="tint">
          <Prose>
            <p>
              Somebody in Personnel has been telling the new men that the insulation in this building is a
              problem. The insulation in this building is asbestos, and asbestos is the finest thing ever
              pumped into a wall. It does not burn, it does not rot, it holds the heat where you put it.
            </p>
            <p>
              The lab boys tell me it wants thirty years to do a man any harm. Thirty. So if you are
              thirty years of age or better you are laughing, because the worst of it costs you a few rounds
              of canasta at the far end of a long life and buys the sciences three centuries. I call that a
              bargain and I have called it that in front of a senator.
            </p>
            <p>
              If you are under thirty and it worries you, come to the third floor and I will find you
              something on the surface. I will also think slightly less of you, and I say so here rather
              than behind your back, which is more than New Mexico would do.
            </p>
          </Prose>
        </Panel>
      </Section>

      <PullQuote big attribution={`${COMPANY.founder}, to the state inspectorate, November 1957`}>
        A thing that has been written down is not a danger. It is an entry.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="The Memorandum That Settled It" number="V">
        <Memo
          to="Enrichment Center Operations"
          re="Hazards, the continued absence of"
          date="2 April 1959"
          cc="Legal; Medical (for information only)"
          stamp={
            <Stamp tone="black" angle="right" size="normal">
              File Copy
            </Stamp>
          }
        >
          <p>
            Medical has sent me eleven pages on this form. I have read four. Here is my answer and it is
            word for word the answer I gave in 1954.
          </p>
          <p>
            A hazard is a thing you did not see coming. We see everything coming. A man on every level, an
            instrument in every chamber, and a President on the third floor who does not sleep. What Medical
            describes is not a hazard. It is a <i>result</i>, and results are the entire product of this
            company.
          </p>
          <p>
            If a result is unpleasant we write it down, and the moment it is written down it stops being
            unpleasant and becomes data, and data has never hurt anybody. Operations will go on classifying.
            Legal will go on defining. Medical will go on being wrong at length, and I will go on reading
            the first four pages of it.
          </p>
        </Memo>

        <PenNote tone="red" angle={-1.6}>
          Medical has examined four hundred and nineteen men this quarter and classified none of them.
          Medical would like the word back. &mdash; Medical Dept.
        </PenNote>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section title="The Comfort Half Of This Form" number="VI">
        <Prose>
          <p>
            &ldquo;Comfort&rdquo; is in the title and it is not there to soften the first half. A
            comfortable man gives cleaner data than an anxious one, and we have spent real money on the
            proposition: coffee at the gate house, a laundered numbered coat, chambers held at sixty-eight
            degrees in all seasons, and a bench between every pair of chambers. Nobody will hurry you. The
            man whose job that would be has never been budgeted for.
          </p>
          <p>
            The announcement voice was chosen from eleven candidates on the single criterion of reassurance.
            At the conclusion of the final test there is{" "}
            <Link href="/enrichment-center/refreshments">refreshment in the commissary</Link>, and sixty
            dollars from a tin, paid by a man who has never once been late with it.
          </p>
        </Prose>

        <Panel head="Personal Precautions — All Persons Below The Gate">
          <Checklist
            items={[
              { text: "Remove all metal before descent. The gate will find what you forget.", checked: true },
              { text: "Walk. The corridors are long and the floor is not always the same floor.", checked: true },
              { text: "Do not pass through an emancipation grill twice in one day.", checked: true },
              { text: "If the chamber lights turn orange, stand still and wait to be told.", checked: true },
              { text: "If the announcement system uses your first name, it is not the announcement system.", checked: true },
              { text: "Report a condition once. It will be classified within the hour.", checked: true },
              { text: "Familiarise yourself with the location of the fire doors.", checked: false },
            ]}
          />
          <Aside>
            The final item has been printed unticked since 1956. Operations takes the view that in the event
            of a fire the fire doors will familiarise themselves with you.
          </Aside>
        </Panel>

        <IndexCard>
          <p className="ap-caps" style={{ fontSize: "0.62rem", color: "var(--spot-orange)", margin: "0 0 0.5rem" }}>
            Form ASI-305a &mdash; Personal Safety Card &mdash; Carry At All Times
          </p>
          <SpecList
            rows={[
              { k: "In the event of fire", v: "Continue testing. A door will close." },
              { k: "In the event of water", v: "Continue testing. Boots are issued." },
              { k: "In the event of gel", v: "Do not swallow it. Do not fight the bounce." },
              { k: "An aperture where no aperture was", v: "Step through it once. Not in both directions." },
              { k: "A noise from where there is no equipment", v: "Note the time. It will be classified as Acoustics." },
              { k: "In the event of a hazard", v: "There are no hazards. Report the condition." },
            ]}
          />
        </IndexCard>
      </Section>

      <KeyFigures
        items={[
          { value: "0", label: "Hazards identified", note: "Since 1943" },
          { value: "211", label: "Conditions classified", note: "First quarter, 1959" },
          { value: "3", label: "Safety citations", note: "All three contested" },
          { value: "1,247", label: "Personnel on the roll", note: "Every one accounted for" },
          { value: "16", label: "Years, clean", note: "See the definition, above" },
        ]}
      />

      <ClearanceGate
        level={4}
        hint="Senior grade or above. The note below is held by Operations and is not posted in the chambers."
      >
        <Panel head="Operations Note — Not For Posting" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", marginBottom: 0 }}>
            The seventh revision was prepared in the fortnight after the state inspectorate called in
            November 1957. Six of the seven revisions have amended the definitions; none has amended the
            conditions. Operations records, without recommendation, that the first quarter of 1955 and the
            first quarter of 1959 report substantially the same conditions in substantially the same rooms,
            and that under the definitions then in force, forty-one of them were hazards.
          </p>
        </Panel>
      </ClearanceGate>

      <PenNote tone="pencil" angle={-1.2}>
        The fire doors on Sub-Level 4 close before the fire, not after. I have checked the times twice and
        both times the doors were early. Maintenance says the doors decide. It is written down and it is in
        the third drawer with the rest of it. &mdash; C.
      </PenNote>

      <Rule variant="fat" />

      <Signature note="Form ASI-305, seventh revision. Approved for printing without amendment." />

      <FinePrint tiny>
        Posted in every chamber, corridor and elevator car below the gate house under Directive 12.
        Personnel finding this sheet posted where it ought not to be are asked to leave it exactly there and
        report the location as a condition. Nothing here limits Form <Link href="/legal">ASI-900</Link>,
        which limits everything else. Retain until superseded. It will be superseded.
      </FinePrint>

      {/* Conditions reported, first quarter 1955: 211. */}
      {/* Conditions reported, first quarter 1959: 211. */}
      {/* Operations has never explained the coincidence and has never been asked to. */}

      <Scrawl href="/vault/project-9">
        the doors on four shut before the smoke does. something down there is faster than fire. dont let it
        learn the elevator
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

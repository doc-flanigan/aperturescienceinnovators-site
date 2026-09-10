import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Row, Aside, IndexCard,
} from "@/components/Print";
import { PenNote } from "@/components/Memo";
import { FigureTable, SpecList, Plate, KeyFigures } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ShaftSection } from "@/components/svg/Ornament";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Test Shaft 09",
  description:
    "The newest and deepest of the nine, opened four months ahead of schedule. Eleven minutes down, and nothing to see on the way.",
};

export default function Page() {
  const { prev, next } = neighbours("/enrichment-center/test-shaft-09");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/enrichment-center", label: "Enrichment Center" },
          { label: "Test Shaft 09" },
        ]}
      />

      <DocHead
        doc="ASI-301"
        department="Enrichment Center Operations"
        classification="Unrestricted"
        revision="Second printing. Chamber schedule amended."
        extra={[{ label: "Opened", value: "11 March 1959" }]}
      />

      <div className="ap-rel">
        <Stamp float tone="green" sub="Four Months Early">
          In Service
        </Stamp>
        <PageTitle
          kicker="Enrichment Center Operations"
          title="Test Shaft 09"
          deck={
            <>
              The foyer was poured in 1952 and the shaft has been going down ever since. It accepted its
              first volunteers on the eleventh of March, four months ahead of the schedule the engineers
              gave me, which I achieved by the simple expedient of not asking the engineers for a schedule.
            </>
          }
          byline={
            <>
              Dictated by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}, at the head of the shaft
            </>
          }
        />
      </div>

      <KeyFigures
        items={[
          { value: "09", label: "Shaft number", note: "The newest of nine" },
          { value: "11", label: "Minutes to the bottom", note: "Nothing to see" },
          { value: "14", label: "Enrichment Spheres", note: "Numbered from the base" },
          { value: "62", label: "Chambers in service", note: "Of sixty-four cut" },
          { value: <Redacted reason="Facilities and Engineering do not agree and will not be made to">4,000 ft.</Redacted>, label: "To the lowest floor", note: "See note" },
        ]}
      />

      <Prose>
        <Lede>
          A test shaft is not a hole. A hole is what you have before you have spent eleven million dollars.
          A test shaft is a vertical street with rooms off it, and Shaft 09 is the best one we have built,
          and I want to walk you down it in the order a volunteer walks down it, because that is the only
          order in which any of it makes sense.
        </Lede>
        <p>
          You arrive at the gate house at eight. Mr. Pike has held that job since 1951 and has never once
          been wrong about who is in this building, which is a sentence I would like other departments to
          read twice. He takes your form, he gives you a numbered coat, and he points you at the tower.
        </p>
        <p>
          The tower is the only part of Shaft 09 that is above ground, and it is deliberately unimpressive.
          Brick, four storeys, a painted sign, and a door. The competition builds a lobby. We built a door,
          and put the eleven million dollars underneath it.
        </p>
      </Prose>

      <Row style={{ gap: "2rem", alignItems: "flex-start" }}>
        <Plate
          number="3"
          caption="Section through Shaft 09, drawn to no scale whatever. The Enrichment Spheres hang on the central column; the galleries and observation rooms are cut into the salt on either side. The lowest four levels are not shown, at the request of Facilities."
          tint
        >
          <ShaftSection style={{ width: "100%", maxWidth: 300, color: "var(--ink-2)" }} />
        </Plate>
        <div style={{ flex: "1 1 17rem" }}>
          <SpecList
            rows={[
              { k: "Foyer poured", v: "1952" },
              { k: "Opened to volunteers", v: "11 March 1959" },
              { k: "Enrichment Spheres", v: "Fourteen, numbered from the base upward" },
              { k: "Chambers cut", v: "Sixty-four" },
              { k: "Chambers in service", v: "Sixty-two" },
              { k: "Observation rooms", v: "Twenty-two, all glazed, all one-way" },
              { k: "Elevator", v: "One. Eleven minutes. Do not press the button twice." },
              { k: "Stair", v: "One. Nobody has ever walked it all the way." },
              { k: "Lowest floor", v: <Redacted reason="Facilities counts in feet, Engineering in metres, and neither will move">Disputed. See the note.</Redacted> },
            ]}
          />
        </div>
      </Row>

      <Marginalia>
        Facilities gives the depth in feet and Engineering gives it in metres and the two figures do not
        describe the same hole. The President has ruled that the shaft is whatever depth the man standing
        at the bottom of it says it is, and the matter is closed.
      </Marginalia>

      <Section title="The Descent">
        <Prose>
          <p>
            Eleven minutes. There is one lamp in the car and there is nothing to look at through the gate
            except salt going up past you, which after the first minute is exactly as interesting as it
            sounds. Volunteers are encouraged to talk to one another. Most do not.
          </p>
          <p>
            At the fourth minute the car passes the reactor gallery, and there is a warmth to it, and a
            noise, and a man called Greg who cleans that gallery and who will raise a hand to you as you go
            past if he happens to be facing the shaft. Greg has been down there longer than anyone can
            document and the Personnel Department has stopped trying.
          </p>
          <p>
            At the ninth minute the car passes Sub-Level 4 and the noise changes. That is eleven tons of
            relays doing arithmetic, badly, in the dark. At the eleventh minute the car stops, and the doors
            open on a corridor that is warm, dry, and painted the same institutional grey as everything
            else this company has ever sold.
          </p>
        </Prose>
      </Section>

      <PullQuote big attribution={`${COMPANY.founder}, addressing the first descent, 11 March 1959`}>
        You&rsquo;re here because we want the best, and you are it.
      </PullQuote>

      <Section title="The Chambers">
        <Prose>
          <p>
            Sixty-four were cut. Sixty-two are in service. The schedule below is the one posted at the head
            of the shaft, reproduced exactly, including the two entries Operations would rather were not
            reproduced exactly.
          </p>
        </Prose>

        <FigureTable
          caption="Chamber schedule, Test Shaft 09, as posted"
          columns={[
            { key: "no", head: "Chamber", numeric: true, width: "6rem" },
            { key: "sphere", head: "Sphere", numeric: true },
            { key: "app", head: "Principal Apparatus" },
            { key: "status", head: "Status" },
          ]}
          rows={[
            { no: "1–4", sphere: "01", app: "Button, pedestal. Cube, weighted.", status: "In service" },
            { no: "5–7", sphere: "02", app: "Aperture pair, fixed emplacement", status: "In service" },
            {
              no: "8",
              sphere: "02",
              app: "Aperture pair, fixed emplacement",
              status: <Redacted reason="Posted as In Service. Operations has posted it as In Service since 12 March.">Sealed 12 March. Reopened 12 March.</Redacted>,
            },
            { no: "9–18", sphere: "03", app: "Repulsion gel, ledge, button", status: "In service" },
            { no: "19–27", sphere: "04–05", app: "Propulsion gel, run, arrest", status: "In service" },
            { no: "28–36", sphere: "06–07", app: "Faith plate, trajectory", status: "In service" },
            { no: "37–48", sphere: "08–10", app: "Emancipation grill, cube, aperture", status: "In service" },
            { no: "49–60", sphere: "11–13", app: "Combined. Observation on two sides.", status: "In service" },
            { no: "61–62", sphere: "14", app: "Combined, extended duration", status: "In service" },
            {
              no: "63–64",
              sphere: "—",
              app: <Redacted reason="Cut in 1957. Never fitted. Never numbered on any drawing.">Cut. Not fitted.</Redacted>,
              status: "Not in service",
            },
          ]}
          foot="Chambers are numbered continuously across spheres rather than restarting at each, so that a volunteer’s record reads as one afternoon rather than fourteen."
        />
      </Section>

      <IndexCard>
        <p style={{ margin: 0 }}>
          <b>SHAFT LOG, 11 MARCH 1959, REPRODUCED FROM THE DAY BOOK:</b>
          <br />
          0640 &mdash; Shaft open. First volunteers descend.
          <br />
          0902 &mdash; Chambers 1 through 7 nominal.
          <br />
          1130 &mdash; Chamber 8. Subject did not emerge.
          <br />
          1131 &mdash; Chamber 8. Subject emerged. Different door.
          <br />
          1132 &mdash; Chamber 8. Subject emerged again. Same door.
          <br />
          1134 &mdash; See attached.
          <br />
          <i>There is no attached.</i>
        </p>
      </IndexCard>

      <Notice head="The Enrichment Center Reminds You">
        A chamber that has been sealed and reopened on the same day has been inspected twice as thoroughly
        as a chamber that has never been sealed at all.
      </Notice>

      <Row>
        <Pictogram name="elevator" size={58} title="The elevator" style={{ color: "var(--ink-3)" }} />
        <Placard>Test Shaft 09</Placard>
        <Placard tone="warn">Eleven Minutes &mdash; Do Not Press Twice</Placard>
        <Placard tone="danger">Chamber 8 &mdash; Do Not Enter</Placard>
      </Row>

      <Aside>
        The three placards above are the three placards at the head of the shaft. The third was hung on the
        thirteenth of March and Operations has been asked, twice, who authorised it, and has answered, twice,
        that the placard was already there.
      </Aside>

      <ClearanceGate level={3} hint="Test Associate grade or above. Operations does not post the lower schedule.">
        <Panel head="The Levels Below The Fourteenth Sphere" tone="red">
          <p style={{ fontSize: "var(--step--1)" }}>
            The shaft does not stop at Sphere 14. It stops at Sphere 14 for volunteers. Below that are the
            reactor gallery, the relay room, the incinerator flue, Records, the vault, and four levels which
            appear on the 1957 site drawing and on no drawing before it.
          </p>
          <SpecList
            rows={[
              { k: "Sub-Level 3", v: "Corridor 6. Closed at the far end. Re-plastered four times." },
              { k: "Sub-Level 4", v: "Relay room. Eleven tons. Greg has the key." },
              { k: "Sub-Level 6", v: "Ventilation plenum. Panels bolt from the outside." },
              { k: "Sub-Level 7", v: "Records and the vault. Below the water table." },
              { k: "Below that", v: <Redacted reason="Facilities recommends no action, for the first time in its existence">2,500 linear feet nobody dug.</Redacted> },
            ]}
          />
        </Panel>
      </ClearanceGate>

      <PenNote tone="pencil" angle={-1.3}>
        The eleven minutes is not the depth. I have timed the car going down and timed it coming up and it
        is eleven minutes down and nine minutes back. Nobody in Facilities will tell me why. &mdash; C.
      </PenNote>

      <Rule variant="fat" />

      <FinePrint>
        <p>
          Form ASI-301. Volunteers report to the gate house at the head of Shaft 09 at eight o&rsquo;clock.
          Bring the coupon from{" "}
          <Link href="/enrichment-center/volunteer">Form ASI-302</Link> and nothing metal; the reason is on{" "}
          <Link href="/products/material-emancipation-grill">Form ASI-209</Link> and it concerns fillings.
        </p>
      </FinePrint>

      {/* Sixty-four cut. Sixty-two fitted. Two numbered on no drawing. */}
      {/* The foreman who cut 63 and 64 left the company in 1957 and was paid in full. */}

      <Scrawl href="/vault/the-dens">
        the car takes eleven minutes down and nine coming up. work out where the other two minutes are
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

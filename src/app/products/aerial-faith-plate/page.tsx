import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Row, Aside,
} from "@/components/Print";
import { PenNote } from "@/components/Memo";
import { FigureTable, SpecList, Plate } from "@/components/Data";
import { Advert } from "@/components/Ad";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "The Aerial Faith Plate",
  description:
    "Throws a man across a room. The faith is required on the part of the man. Trajectory by mass, and a section on landing, which is the customer's responsibility.",
};

export default function Page() {
  const { prev, next } = neighbours("/products/aerial-faith-plate");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/products", label: "Products" },
          { label: "Faith Plate" },
        ]}
      />

      <DocHead
        doc="ASI-207"
        department="Applied Sciences"
        classification="Unrestricted"
        revision="Third printing. Landing section added at Legal's request."
        extra={[{ label: "Model", value: "ASI-207/A" }]}
      />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="Applied Sciences">
          Rated
        </Stamp>
        <PageTitle
          advertising
          kicker="Applied Sciences — Model ASI-207/A"
          title="The Aerial Faith Plate"
          deck={
            <>
              A spring-loaded steel plate, flush with the floor, that throws a man across a room in a
              trajectory Applied Sciences can predict to the inch. The faith is required on the part of the
              man. The plate has none and needs none; it is a plate.
            </>
          }
          byline={
            <>
              Dictated by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}
            </>
          }
        />
      </div>

      <Prose>
        <Lede>
          It began as a loading-dock device. A crate on the plate, a man at the lever, and the crate on the
          far side of the yard without a fork-lift or a second man. Then a machinist stood on it to see
          whether it worked with a crate his own weight, and it did, and he arrived on the far side of the
          yard upright, and Applied Sciences has been refining the upright part ever since.
        </Lede>
        <p>
          The plate is the simplest thing this company sells and the one that frightens visitors the most,
          and I want to say why, because it is instructive. A hole in the wall is strange, and strange
          things are easy to accept, because there is nothing to compare them to. A plate that throws you
          across a room is not strange. It is a thing you understand completely, in the half-second before
          it does it.
        </p>
      </Prose>

      <Row style={{ gap: "2rem", alignItems: "flex-start" }}>
        <Plate
          number="7"
          caption="The Aerial Faith Plate in section. Spring, cam, release. The customer stands on the plate. The customer is then not on the plate."
          tint
        >
          <Pictogram name="faith-plate" size={130} title="Aerial Faith Plate" />
        </Plate>
        <div style={{ flex: "1 1 18rem" }}>
          <SpecList
            rows={[
              { k: "Model", v: "ASI-207/A, floor-mounted, single throw" },
              { k: "Plate", v: "Steel, 30 in. square, flush" },
              { k: "Release", v: "Weight-triggered, 90 lb. minimum" },
              { k: "Throw, rated", v: "44 ft. at 180 lb., level floor" },
              { k: "Angle", v: "Fixed at manufacture. Do not adjust." },
              { k: "Reset", v: "Automatic. Four seconds. Do not stand on it during." },
              { k: "Landing", v: "See section below" },
              { k: "Price", v: "$1,140 f.o.b. Upper Michigan. Installation extra." },
            ]}
          />
        </div>
      </Row>

      <Section title="Trajectory">
        <FigureTable
          caption="Measured throw by subject mass, level floor, ASI-207/A"
          columns={[
            { key: "m", head: "Mass", numeric: true },
            { key: "d", head: "Throw", numeric: true },
            { key: "h", head: "Apex", numeric: true },
            { key: "t", head: "Air time", numeric: true },
            { key: "land", head: "Landing" },
          ]}
          rows={[
            { m: "90 lb.", d: "61 ft.", h: "14 ft.", t: "1.9 s", land: "Upright. Alarmed." },
            { m: "120 lb.", d: "54 ft.", h: "12 ft.", t: "1.8 s", land: "Upright" },
            { m: "150 lb.", d: "48 ft.", h: "11 ft.", t: "1.7 s", land: "Upright" },
            { m: "180 lb.", d: "44 ft.", h: "10 ft.", t: "1.6 s", land: "Upright. Rated." },
            { m: "210 lb.", d: "39 ft.", h: "9 ft.", t: "1.5 s", land: "Upright, mostly" },
            { m: "240 lb.", d: "34 ft.", h: "8 ft.", t: "1.4 s", land: "Seated" },
            { m: "Crate, 300 lb.", d: "28 ft.", h: "7 ft.", t: "1.3 s", land: "Crate" },
            { m: "Storage cube, weighted", d: "22 ft.", h: "6 ft.", t: "1.1 s", land: "Cube. Every time. It is a cube." },
            { m: "Subject, unrecorded", d: "—", h: <Redacted reason="Apex exceeded the chamber ceiling. See the placard.">Ceiling</Redacted>, t: "—", land: <Redacted reason="Applied Sciences has no entry in this column">—</Redacted> },
          ]}
          foot="Figures are for a level floor and a subject who does nothing. A subject who does something — reaches, turns, objects — will land somewhere else, and Applied Sciences has stopped predicting where."
        />
      </Section>

      <Marginalia>
        The last row is the reason there is a placard reading MIND THE CEILING at the head of every chamber
        fitted with a plate. There was no placard before that row.
      </Marginalia>

      <Section title="Landing">
        <Prose>
          <p>
            Legal has asked that this section exist, and Applied Sciences has written it, and I have read
            it, and it says what it needs to say in one sentence, which is this: <b>the plate is responsible
            for the throw and the customer is responsible for the landing.</b>
          </p>
          <p>
            The plate delivers a man to a point in space that Applied Sciences can name to the inch. What he
            does when he arrives at that point is between him and the floor. We have observed four thousand
            throws and the volunteers who land best are the ones who do least, which is a finding I have
            passed to the Personnel Department for its own purposes.
          </p>
        </Prose>

        <Panel head="Arrangements For Landing, Available At Extra Cost" tone="blue">
          <SpecList
            rows={[
              { k: "ASI-207/L1 — Nothing", v: "No charge. Our most popular arrangement." },
              { k: "ASI-207/L2 — Second plate, receiving", v: "$1,140. Catches and re-throws. Popular with nobody." },
              { k: "ASI-207/L3 — Repulsion gel, floor", v: "$60 / gal. The subject arrives and then leaves again." },
              { k: "ASI-207/L4 — An aperture", v: "See Form ASI-202. Converts the landing into a different landing, elsewhere." },
              { k: "ASI-207/L5 — A man with a net", v: "Withdrawn 1957. The man was consulted." },
            ]}
          />
        </Panel>
      </Section>

      <PullQuote big attribution={`${COMPANY.founder}, to a customer who asked about the landing`}>
        The plate is responsible for the throw. You are responsible for the landing. Everything in this
        building works that way and most things in life do too.
      </PullQuote>

      <Advert
        eyebrow="Loading Docks — Warehouses — Anywhere A Fork-Lift Is Too Slow"
        head="Forty-Four Feet. No Second Man."
        burst="$1,140"
        burstSub="F.O.B."
        action="Order Form ASI-299"
        href="/products/catalogue"
      >
        <p>
          A crate on the plate and a crate on the far side of the yard, in one and six-tenths of a second,
          with no fork-lift, no second man, and no path across the floor in between. Rated to 300 lb.
          Rated, for men, to 180.
        </p>
      </Advert>

      <Notice head="The Enrichment Center Reminds You">
        The Aerial Faith Plate does not require faith. It requires ninety pounds. The name was chosen by
        the President, over the objection of Applied Sciences, on the grounds that a customer who steps onto
        it without faith will step onto it anyway, and a customer who steps onto it with faith will enjoy
        it more.
      </Notice>

      <ClearanceGate level={2} hint="Junior Associate grade or above. The loading-dock trial is not in the public sheet.">
        <Panel head="Applied Sciences — The Loading-Dock Trial, 1955" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            The machinist who first stood on the plate was not asked to. He weighed 174 lb. He arrived on
            the far side of the yard upright and asked to go again, and did, eleven times, before the
            foreman stopped it. On the eleventh throw he did not arrive on the far side of the yard. He
            arrived, four seconds later, on the plate, which had reset, and which threw him again, and
            Applied Sciences has never established where he was for the four seconds, and he has never
            said, and he is employee of the month for January 1958.
          </p>
        </Panel>
      </ClearanceGate>

      <PenNote tone="pencil" angle={-1.2}>
        He named it. Applied Sciences wanted &ldquo;launch plate&rdquo;. He said nobody has ever bought a
        thing called a launch plate and he was right and it has sold forty. &mdash; C.
      </PenNote>

      <Row>
        <Pictogram name="fling" size={54} title="Trajectory" style={{ color: "var(--ink-3)" }} />
        <Placard>Applied Sciences &mdash; Sub-Level 2</Placard>
        <Placard tone="danger">Mind The Ceiling</Placard>
      </Row>

      <Aside>
        Forty plates sold. Thirty-eight to warehouses. Two to a gentleman in Ohio who would not say what for
        and paid cash. Applied Sciences has not followed up and has been asked not to.
      </Aside>

      <Rule variant="fat" />

      <FinePrint>
        <p>
          Form ASI-207. Landing arrangements are supplied under{" "}
          <Link href="/legal">Form ASI-900</Link>, clause II, items eight through ten. Repulsion gel for
          arrangement L3 is described at{" "}
          <Link href="/products/repulsion-gel">Form ASI-203</Link>; the aperture for L4 at{" "}
          <Link href="/products/quantum-tunnelling-device">Form ASI-202</Link>.
        </p>
      </FinePrint>

      {/* Four seconds. The plate had reset. He has never said where he was. */}

      <Scrawl href="/vault/the-dens">
        eleven throws. the eleventh didnt land in the yard. ask him where the four seconds went. he wont say. i was there
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

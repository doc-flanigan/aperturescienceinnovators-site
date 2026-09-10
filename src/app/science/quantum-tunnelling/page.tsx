import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Row, Aside, Columns,
} from "@/components/Print";
import { PenNote } from "@/components/Memo";
import { FigureTable, SpecList, Plate } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { AtomicOrbit } from "@/components/svg/Ornament";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Applied Quantum Tunnelling",
  description:
    "The physics of putting a hole where a hole was not — explained once by the President, who is wrong but confident, and once by the department, which is correct and incomprehensible.",
};

export default function Page() {
  const { prev, next } = neighbours("/science/quantum-tunnelling");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/science", label: "Science" },
          { label: "Quantum Tunnelling" },
        ]}
      />

      <DocHead
        doc="ASI-401"
        department="Applied Sciences"
        classification="Unrestricted"
        revision="Third printing. Department’s section unaltered at its insistence."
      />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="Since 1953">
          Proven
        </Stamp>
        <PageTitle
          kicker="Applied Sciences — Sub-Level 2"
          title="Applied Quantum Tunnelling"
          deck={
            <>
              A hole in one wall that comes out of a different wall. Six years since the first one, eleven
              thousand two hundred and four recorded transits, and not one satisfactory explanation of why
              it works that both the President and the department will sign.
            </>
          }
          byline={
            <>
              Section one dictated by <b>{COMPANY.founder}</b>. Section two written by Applied Sciences and
              printed without editorial interference, under protest, twice.
            </>
          }
        />
      </div>

      <Prose>
        <Lede>
          There are two explanations of quantum tunnelling in this company and they do not agree. I am
          printing both, in full, in the same type, and I am putting mine first because I own the building.
        </Lede>
      </Prose>

      <Section title="One. The President’s Explanation" number="I">
        <Columns count={2}>
          <p>
            Space is a fabric. Everybody says that and everybody says it as though it were a figure of
            speech, and it is not a figure of speech, it is a purchasing decision. We buy fabric. We have
            bought more fabric than any firm in the Upper Peninsula and we have been buying it since 1943.
          </p>
          <p>
            Now. What is a shower curtain? A shower curtain is a wall you can walk through. That is the
            whole of the product. On one side of it there is a shower and on the other side of it there is a
            bathroom, and the curtain is the arrangement by which a man is on one side and then, without any
            fuss, on the other.
          </p>
          <p>
            In 1953 one of my men spilled an emulsion on a curtain on the third floor and for about four
            seconds that curtain was hanging in two rooms at once. Not two curtains. One curtain, in two
            rooms, and I have the affidavits.
          </p>
          <p>
            So: if a curtain can be in two rooms, a doorway can be in two rooms, and if a doorway can be in
            two rooms then a man can go in one and come out the other. That is the science. The department
            will tell you it is not the science. The department has been telling me that for six years and
            in that time I have built eleven of them and the department has built none.
          </p>
        </Columns>
      </Section>

      <Row style={{ gap: "2rem", alignItems: "flex-start" }}>
        <Plate
          number="4"
          caption="The President’s diagram, reproduced from the back of an envelope. The two circles are the apertures. The line between them is described in his hand as ‘the curtain’. Applied Sciences has asked that the caption record that there is no curtain."
          tint
        >
          <AtomicOrbit rings={2} style={{ width: "100%", maxWidth: 180, color: "var(--accent)" }} />
        </Plate>
        <div style={{ flex: "1 1 18rem" }}>
          <SpecList
            rows={[
              { k: "First event", v: "1953, third floor, by accident" },
              { k: "First deliberate event", v: "1953, eleven days later" },
              { k: "First manned transit", v: "1954" },
              { k: "Recorded transits", v: "11,204" },
              { k: "Momentum", v: "Conserved. Every time. Without exception." },
              { k: "Mass", v: "Conserved. Every time. So far." },
              { k: "Elapsed time", v: <Redacted reason="Applied Sciences requires four paragraphs and has been given one line">Not always.</Redacted> },
            ]}
          />
        </div>
      </Row>

      <PullQuote big attribution="Applied Sciences, on being asked to shorten the departmental section">
        Momentum, a function of mass and velocity, is conserved between apertures. Speedy-thing goes in,
        Speedy-thing comes out.
      </PullQuote>

      <Section title="Two. The Department’s Explanation" number="II">
        <Prose>
          <p>
            Applied Sciences wishes to record, before anything else, that the third-floor curtain of 1953
            was not in two rooms at once. It was in one room, twice, and the distinction is the entire
            subject of this section.
          </p>
          <p>
            An aperture is not a hole. A hole is an absence of material. An aperture is an agreement between
            two regions of space that they will, for the duration, be treated as the same region. Nothing is
            removed. Nothing is transported. The two doorways do not connect; they are, while the field
            holds, one doorway that happens to have two sets of hinges.
          </p>
          <p>
            The consequence a layman feels first is momentum. A man entering the first aperture at thirty
            feet per second leaves the second at thirty feet per second, in the direction the second
            aperture is facing, because from the field&rsquo;s point of view he has not changed direction; he
            has not gone anywhere. The department has explained this to volunteers four thousand times and
            the phrasing that finally worked was the President&rsquo;s.
          </p>
          <p>
            The consequence the department feels first is that the effect requires a conductive substrate.
            Ordinary matter will not hold the agreement. Ground lunar substrate will hold it indefinitely,
            for reasons the department has published nothing about and will publish nothing about until it
            has something to publish.
          </p>
        </Prose>

        <Panel head="Conditions Under Which The Field Will Not Hold" tone="blue">
          <ul style={{ margin: 0, fontSize: "var(--step--1)" }}>
            <li>Where either aperture is obstructed by more than sixty per cent of its area.</li>
            <li>Where the substrate preparation is thinner than one-eighth of an inch.</li>
            <li>Where the two apertures are separated by less than eleven inches.</li>
            <li>Where the two apertures are separated by more than{" "}
              <Redacted reason="Applied Sciences has not found the figure and has stopped looking for it">
                no established maximum
              </Redacted>.
            </li>
            <li>Where the field is asked to hold across running water. The department declines to expand.</li>
          </ul>
        </Panel>

        <Aside>
          The eleven-inch minimum is not a limitation of the apparatus. Below eleven inches the two
          apertures are close enough that the field, in the department&rsquo;s phrasing, &ldquo;is unable to
          establish that there are two of them&rdquo;. What happens then is the subject of Appendix D, which
          is not printed.
        </Aside>
      </Section>

      <Notice head="The Enrichment Center Reminds You">
        Momentum is conserved. The Enrichment Center is required to remind you that this is a statement
        about physics and not a promise about floors.
      </Notice>

      <Section title="Measured Results, 1954 – Spring 1959">
        <FigureTable
          caption="Selected transits, Applied Sciences bench record"
          columns={[
            { key: "t", head: "Trial" },
            { key: "sep", head: "Separation", numeric: true },
            { key: "vin", head: "Entry", numeric: true },
            { key: "vout", head: "Exit", numeric: true },
            { key: "note", head: "Note" },
          ]}
          rows={[
            { t: "54-001", sep: "6 ft.", vin: "0 ft/s", vout: "0 ft/s", note: "First manned transit. A step." },
            { t: "55-140", sep: "41 ft.", vin: "18 ft/s", vout: "18 ft/s", note: "Nominal" },
            { t: "56-092", sep: "220 ft.", vin: "31 ft/s", vout: "31 ft/s", note: "Nominal at range" },
            { t: "57-311", sep: "1.4 mi.", vin: "12 ft/s", vout: "12 ft/s", note: "Second aperture in a rented barn. Farmer compensated." },
            { t: "58-006", sep: "11 in.", vin: "4 ft/s", vout: "—", note: "See the minimum separation clause" },
            {
              t: "59-018",
              sep: <Redacted reason="Not established. The second aperture was not where it was placed.">Not yet found</Redacted>,
              vin: "9 ft/s",
              vout: "9 ft/s",
              note: "Volunteer reported the second chamber smelled of salt water",
            },
          ]}
          foot="This facility is four thousand feet under a salt mine in the Upper Peninsula and contains no salt water. Applied Sciences has recorded the remark and taken no position on it."
        />
      </Section>

      <Marginalia>
        Trial 59-018 is the trial Applied Sciences cites when it asks, twice a year, for long-separation
        work to be suspended. It has asked twice a year since 1957.
      </Marginalia>

      <ClearanceGate level={3} hint="Test Associate grade or above. Appendix D is not printed in the public sheet.">
        <Panel head="Appendix D — Separations Below Eleven Inches" tone="red">
          <p style={{ fontSize: "var(--step--1)" }}>
            Below eleven inches the field cannot establish that there are two apertures, and resolves the
            difficulty by treating them as one. An object entering such a pair does not emerge, because
            there is nowhere for it to emerge from that is not also where it went in.
          </p>
          <p style={{ fontSize: "var(--step--1)", marginBottom: 0 }}>
            Eleven objects have been introduced to a sub-eleven-inch pair. Ten were inert. The eleventh was
            a pocket watch, wound, which the department recovered four days later from the same bench,
            running, and{" "}
            <Redacted reason="Applied Sciences will not put the interval in a public document">
              showing a time four days behind
            </Redacted>
            . No manned trial has been conducted and none will be.
          </p>
        </Panel>
      </ClearanceGate>

      <PenNote tone="pencil" angle={-1.3}>
        He tells everyone the curtain was in two rooms. Applied Sciences says it was in one room twice. I
        have read both affidavits and they describe different afternoons. &mdash; C.
      </PenNote>

      <Row>
        <Pictogram name="portal-pair" size={58} title="An aperture pair" style={{ color: "var(--ink-3)" }} />
        <Placard>Applied Sciences &mdash; Sub-Level 2</Placard>
        <Placard tone="warn">Minimum Separation 11 In.</Placard>
      </Row>

      <Rule variant="fat" />

      <FinePrint>
        <p>
          Form ASI-401. The apparatus is described in{" "}
          <Link href="/products/quantum-tunnelling-device">Form ASI-202</Link>; the conductive substrate in{" "}
          <Link href="/products/conversion-gel">Form ASI-205</Link> and{" "}
          <Link href="/science/lunar">Form ASI-404</Link>. Legal reminds all departments that the effect is
          not to be described in correspondence as a door, a gate, a portal, a passage, or the thing.
        </p>
      </FinePrint>

      {/* One curtain in two rooms, or one room twice. Six years and nobody will sign either. */}
      {/* The watch was four days behind. The watch had been gone four days. */}

      <Scrawl href="/vault/borealis">
        salt water. four thousand feet under michigan and the man smelled salt water
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

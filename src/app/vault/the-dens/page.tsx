import type { Metadata } from "next";
import { COMPANY } from "@/lib/site";
import { DocHead, PageTitle, Prose, Lede } from "@/components/Doc";
import { Stack, Stamp, Panel, Notice, Rule, Row, FinePrint, Placard, Aside, Marginalia } from "@/components/Print";
import { PenNote } from "@/components/Memo";
import { SpecList } from "@/components/Data";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { Breadcrumbs } from "@/components/Nav";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "The Dens",
  description:
    "Somebody has been writing on the walls of a facility that has not been built yet. Maintenance has painted over it four times.",
  robots: { index: false, follow: false },
};

/** A wall panel of scrawl, set in the hand of somebody who has been down there a while. */
function Wall({ lines, angle = -0.8 }: { lines: string[]; angle?: number }) {
  return (
    <div
      style={{
        border: "1px solid var(--rule-faint)",
        background: "var(--paper-deep)",
        padding: "1.4rem 1.5rem",
        transform: `rotate(${angle}deg)`,
        margin: "1.6rem 0",
      }}
    >
      {lines.map((l, i) => (
        <p
          key={i}
          style={{
            fontFamily: "var(--font-hand)",
            fontSize: `${1.15 + ((i * 7) % 5) * 0.07}rem`,
            lineHeight: 1.28,
            color: i % 3 === 0 ? "var(--spot-red)" : "var(--ink-2)",
            margin: "0 0 0.35rem",
            textIndent: 0,
            transform: `rotate(${((i * 13) % 5) - 2}deg)`,
            transformOrigin: "left center",
          }}
        >
          {l}
        </p>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <Stack size="large">
      <Breadcrumbs trail={[{ href: "/vault", label: "The Vault" }, { label: "The Dens" }]} />

      <DocHead
        doc="ASI-Ω-04"
        department="Maintenance — Sub-Level 6 and below"
        date="Reported four times. Filed once."
        classification="Sealed — Maintenance Incident"
        revision="Fourth painting"
      />

      <div className="ap-rel">
        <Stamp float sub="Fourth Painting">
          Painted Over
        </Stamp>
        <PageTitle
          kicker="Maintenance Incident — Behind The Panels"
          title="The Dens"
          deck={
            <>
              There are spaces behind the wall panels of Test Shaft 09 that are not on any drawing. Somebody
              has been living in them. Somebody has been writing in them. Somebody has been writing about
              things that have not happened.
            </>
          }
        />
      </div>

      <ClearanceGate level={3} hint="Test Associate grade or above. The word is a name. It is not on the payroll.">
        <Stack size="large">
          <Prose>
            <Lede>
              Maintenance first reported it in January. A panel in the service corridor behind Chamber 8 was
              found unbolted from the inside. Behind it: a space perhaps four feet by nine, a mattress, six
              tinned meals, a working light run off the chamber circuit, and every square inch of the walls
              written on.
            </Lede>
            <p>
              Maintenance painted it. Maintenance reported it again in February, at a different panel, in a
              different corridor, four levels down. Painted it. Reported it again in March. Painted it. The
              fourth report is dated the eleventh, which is the day Shaft 09 opened, which is four days
              before Maintenance found the second den, which Records has flagged and Maintenance has
              declined to discuss.
            </p>
            <p>
              The company employs 1,247 people. Every one of them is accounted for at the gate, morning and
              evening, by a man with a clipboard who has held the job since 1951 and has never once been
              wrong. Nobody is missing. Nobody is unaccounted for. Somebody is still down there.
            </p>
          </Prose>

          <Notice head="Maintenance Notice">
            Personnel are reminded that the service corridors are not a shortcut, are not a shelter, and are
            not a place to eat lunch. Personnel are further reminded that the panels bolt from the outside.
          </Notice>

          <h2>What Is On The Walls</h2>

          <p>
            Transcribed by a Maintenance foreman before the third painting. He has asked that his name not
            appear on this sheet. Records has honoured the request, which Records does not usually do.
          </p>

          <Wall
            angle={-0.9}
            lines={[
              "the cake is a lie the cake is a lie the cake is a lie",
              "she promised cake. she promises everyone cake",
              "SHE ISNT BUILT YET. THATS NOT THE SAME AS SHE ISNT HERE",
              "count the chambers. there are more chambers than there are chambers",
              "dont go in 8. 8 is fine. thats how they get you",
            ]}
          />

          <Wall
            angle={0.7}
            lines={[
              "1957 1962 1971 1982 199_ ____ they keep going",
              "i am writing this before it happens so somebody has it",
              "GREG CLEANS THE REACTOR ROOM. GREG IS FINE. GREG IS ALWAYS FINE",
              "the cube is the only one who listens",
              "if you are reading this: dont volunteer. take the sixty dollars and dont volunteer",
            ]}
          />

          <Row style={{ gap: "1.6rem", alignItems: "center" }}>
            <Pictogram name="companion" size={78} title="A cube, marked" style={{ color: "var(--spot-red)" }} />
            <Aside>
              Found in the second den, in the corner, facing the wall: one weighted storage cube, standard
              issue, with a heart drawn on each face in grease pencil. Maintenance did not remove it.
              Maintenance has been asked why not and has said, on the record,{" "}
              <em>&ldquo;it didn&rsquo;t seem right.&rdquo;</em>
            </Aside>
          </Row>

          <Panel head="The Four Dens" tone="red">
            <SpecList
              rows={[
                { k: "Den 1", v: "Service corridor behind Chamber 8. January. Painted." },
                { k: "Den 2", v: "Sub-Level 6, ventilation plenum. February. Painted." },
                { k: "Den 3", v: "Behind the incinerator flue. March. Painted." },
                {
                  k: "Den 4",
                  v: <Redacted reason="Maintenance will not put the location in writing">Reported 11 March. Not painted.</Redacted>,
                },
                { k: "Occupant", v: "None found" },
                { k: "Occupant, evidence of", v: "Considerable" },
                { k: "Personnel unaccounted for", v: "None" },
              ]}
            />
          </Panel>

          <Marginalia>
            The dates written on the second wall run to at least four digits the foreman could not read.
            Records has been asked to explain how a man underground in {COMPANY.year} comes to write
            &ldquo;1982&rdquo; on a wall and has replied that it is not a Records matter.
          </Marginalia>

          <PenNote tone="red" angle={-2.1}>
            He read the transcript. He read it twice, and then he sat down, which he does not do. Then he
            said &ldquo;paint it again&rdquo; and went back to work. He is frightened. I have never once
            seen him frightened. &mdash; C.
          </PenNote>

          <Row>
            <Placard tone="danger">Chamber 8 &mdash; Do Not Enter</Placard>
            <Placard tone="warn">Panels Bolt From The Outside</Placard>
          </Row>

          <Rule variant="fat" />

          <FinePrint tiny>
            Form ASI-Ω-04. Four reports. One file. Maintenance has requested that a fifth report, should
            there be one, be filed by somebody else.
          </FinePrint>

          <Scrawl href="/enrichment-center/refreshments">
            go and look at the cake page. go and look at what it promises. then come back down here
          </Scrawl>
        </Stack>
      </ClearanceGate>
    </Stack>
  );
}

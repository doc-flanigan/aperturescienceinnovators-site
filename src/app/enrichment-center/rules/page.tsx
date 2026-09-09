import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, FinePrint,
  Marginalia, Row, Aside, Columns,
} from "@/components/Print";
import { PenNote } from "@/components/Memo";
import { SpecList } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Rules Of The Enrichment Center",
  description:
    "Nineteen rules, posted at every landing. Rule nineteen is not printed, for the reason given in rule four.",
};

/** The rules are posted as a numbered enamel list. This is that list. */
function RuleItem({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2.6rem 1fr",
        gap: "0 0.9rem",
        padding: "0.55rem 0",
        borderBottom: "1px solid var(--rule-faint)",
        breakInside: "avoid",
      }}
    >
      <span
        className="ap-tabnum"
        style={{
          fontFamily: "var(--font-grot)",
          fontWeight: 600,
          fontSize: "var(--step-1)",
          lineHeight: 1.15,
          color: "var(--accent)",
        }}
      >
        {n}
      </span>
      <span style={{ fontSize: "var(--step-0)", lineHeight: 1.42 }}>{children}</span>
    </div>
  );
}

export default function Page() {
  const { prev, next } = neighbours("/enrichment-center/rules");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/enrichment-center", label: "Enrichment Center" },
          { label: "Rules" },
        ]}
      />

      <DocHead
        doc="ASI-308"
        department="Enrichment Center Operations"
        classification="Unrestricted — Eighteen Of Nineteen"
        revision="Fourth printing. Rules 12 through 15 added 1958."
      />

      <div className="ap-rel">
        <Stamp float sub="At Every Landing">
          Posted
        </Stamp>
        <PageTitle
          kicker="Enrichment Center Operations"
          title="Rules Of The Enrichment Center"
          deck={
            <>
              Nineteen rules, enamelled on a plate and bolted at every landing in every shaft. Eighteen of
              them are printed below. The nineteenth is not printed below, for the reason given in the
              fourth.
            </>
          }
          byline={
            <>
              Posted under the authority of <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}
            </>
          }
        />
      </div>

      <Prose>
        <Lede>
          Every one of these rules is on the plate because something happened. That is worth stating at the
          top, because a man reading a list of rules assumes somebody sat in a room and imagined them.
          Nobody imagined any of these. Each one has a date and an incident behind it and the incidents are
          in the day books on Sub-Level 7.
        </Lede>
      </Prose>

      <Panel head="The Plate, Reproduced">
        <RuleItem n={1}>
          Do not run in the corridors. The corridors are salt and salt is slick and we have lost more
          afternoons to a man running than to any apparatus in this building.
        </RuleItem>
        <RuleItem n={2}>
          Do not enter a chamber whose door is closed. A closed door is a chamber in use, a chamber being
          cleaned, or a chamber that Operations has closed. All three are the same instruction.
        </RuleItem>
        <RuleItem n={3}>
          Do not carry metal past the emancipation grill. This includes tools, coins, buttons, buckles and
          fillings. The grill does not distinguish and has never been asked to.
        </RuleItem>
        <RuleItem n={4}>
          Do not write down what you saw in a chamber until you have left the shaft. A note written
          underground is a note written by a man who is still underground, and this company has learned to
          treat the two as different documents.
        </RuleItem>
        <RuleItem n={5}>
          Do not press the elevator button twice. The car is coming. The car has always been coming. The
          second press does not reach the car, it reaches the relay room, and the relay room does not want
          it.
        </RuleItem>
        <RuleItem n={6}>
          Report any apparatus found outside its chamber. Do not carry it back. Do not put it right. Report
          it and leave it exactly where it is.
        </RuleItem>
        <RuleItem n={7}>
          Do not eat in a gel chamber, a substrate room, or Corridor 6.
        </RuleItem>
        <RuleItem n={8}>
          The observation windows are one-way. Personnel are reminded that this means one way.
        </RuleItem>
        <RuleItem n={9}>
          Do not acknowledge the observation windows. Do not wave at them, speak to them, or address a
          remark to whoever you believe is behind them. Whoever you believe is behind them is very often
          behind them, and it is not a rule about them; it is a rule about the data.
        </RuleItem>
        <RuleItem n={10}>
          Do not remain in a chamber after the buzzer. The chamber is being reset. You do not want to see a
          chamber being reset and, more to the point, this company does not want a man in a chamber that
          believes it is empty.
        </RuleItem>
        <RuleItem n={11}>
          Volunteers may withdraw at any time up to the sealing of the chamber door. Personnel may withdraw
          at any time whatever, from anything, and will be paid to the end of the week, and I will not be
          told about it.
        </RuleItem>
        <RuleItem n={12}>
          Do not open a wall panel. The panels bolt from the outside for a reason and the reason is
          ventilation, and if the reason is not ventilation, report it and do not open the panel.
        </RuleItem>
        <RuleItem n={13}>
          Do not enter a room that is not on the drawing you were given. Note its position, leave the level,
          and give the drawing to Facilities with the position marked.
        </RuleItem>
        <RuleItem n={14}>
          If a corridor is longer than the drawing says it is, walk back the way you came. Do not walk
          forward to establish how much longer it is. Facilities has established that. Facilities is not
          publishing it.
        </RuleItem>
        <RuleItem n={15}>
          Below the fourth level of Shaft 07 the signage reads right to left. This is not an error and it
          is not to be repainted. Read it as you find it.
        </RuleItem>
        <RuleItem n={16}>
          Do not descend alone after the six o&rsquo;clock whistle. Not because it is dangerous. Because
          the gate ledger has a down column and an up column and they are required to agree.
        </RuleItem>
        <RuleItem n={17}>
          If the lights go out, stand still. The shaft is four thousand feet of vertical street and you do
          not know it as well as you think you do. Someone will come. Someone has come every time.
        </RuleItem>
        <RuleItem n={18}>
          If you meet yourself, keep walking. Do not stop, do not speak, and do not turn around to check.
          Report it at the gate house on ascent, to Mr. Pike, who will write it in the book without comment
          because he has written it in the book before.
        </RuleItem>
        <RuleItem n={19}>
          <Redacted reason="Not printed. See rule four.">
            The nineteenth rule is on the plate and is not in this publication.
          </Redacted>
        </RuleItem>
      </Panel>

      <Marginalia>
        Rules 12 through 15 were all added in one week in 1958. Operations has been asked which week.
        Operations has answered that it was the week after the one before it.
      </Marginalia>

      <Notice head="The Enrichment Center Reminds You">
        Every rule on this plate exists because of a specific incident, on a specific date, involving a
        specific person. The Enrichment Center is required to remind you of the rule. The Enrichment Center
        is not required to remind you of the incident.
      </Notice>

      <Section title="On The Nineteenth">
        <Columns count={2}>
          <p>
            I am going to address this directly, because if I do not address it the Bulletin will print
            three letters about it and I will have to address it anyway.
          </p>
          <p>
            The nineteenth rule is on the plate. It is on every plate, at every landing, in every shaft,
            enamelled the same as the other eighteen, in the same size, in the same house type. Nobody has
            painted it out. Nobody is hiding it. Any man on the payroll can walk to a landing and read it.
          </p>
          <p>
            It is not printed in this publication because this publication leaves the building. Rule four
            says that a note written underground is a different document from a note written above it, and
            the nineteenth rule is the reason rule four is on the plate.
          </p>
          <p>
            If you want to know what it says, come and work here. That is not a dodge. That is a
            recruitment offer and the Personnel Department is on the second floor.
          </p>
        </Columns>
      </Section>

      <ClearanceGate
        level={5}
        hint="Vault Access or above. The plate is at every landing; the transcription is not."
      >
        <Panel head="Rule Nineteen, Transcribed From The Plate At The Sphere 14 Landing" tone="red">
          <p
            style={{
              fontFamily: "var(--font-grot)",
              fontSize: "var(--step-1)",
              lineHeight: 1.4,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              margin: 0,
            }}
          >
            If you find a landing that is not numbered, do not read the plate on it.
          </p>
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", marginTop: "1rem", marginBottom: 0 }}>
            Operations notes that rule nineteen is the only rule on the plate which refers to the plate,
            and that this is the difficulty. A man who has found an unnumbered landing has, by definition,
            already read the plate on it, because the plate is how a landing is numbered.
          </p>
        </Panel>
      </ClearanceGate>

      <Row style={{ gap: "1.4rem", alignItems: "center" }}>
        <Pictogram name="hazard" size={56} title="Rules" style={{ color: "var(--ink-3)" }} />
        <Placard>Rules Posted At Every Landing</Placard>
        <Placard tone="warn">Do Not Acknowledge The Windows</Placard>
      </Row>

      <Aside>
        The plates are enamelled steel, eleven by fourteen inches, made on the third floor by the same
        press that makes the shower curtain grommets. There are two hundred and six of them in the
        building. Facilities has counted them four times and got two hundred and six three times.
      </Aside>

      <SpecList
        rows={[
          { k: "Rules on the plate", v: "Nineteen" },
          { k: "Rules in this publication", v: "Eighteen" },
          { k: "Plates in the building", v: "Two hundred and six" },
          { k: "Times counted", v: "Four" },
          { k: "Times the count was two hundred and six", v: <Redacted reason="Facilities has stopped counting">Three.</Redacted> },
        ]}
      />

      <PenNote tone="red" angle={-1.6}>
        Rule eighteen was added in March 1956. Rule eighteen was added before rules twelve through fifteen
        and it is numbered after them. I have asked. Nobody renumbered anything. &mdash; C.
      </PenNote>

      <Rule variant="fat" />

      <FinePrint>
        <p>
          Form ASI-308. Volunteers are bound by rules 1 through 11 for the duration of one afternoon.
          Personnel are bound by all nineteen at all times, including at home, including after leaving the
          company &mdash; a clause{" "}
          <Link href="/legal">Legal</Link> inserted in 1957 and which the President has read exactly once,
          approved, and never mentioned again.
        </p>
      </FinePrint>

      {/* Two hundred and six plates. Three counts of two hundred and six. */}
      {/* The fourth count was two hundred and seven. */}

      <Scrawl href="/vault/the-dens">
        there is a landing on six with no number on it. i have read the plate. i read it twice
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

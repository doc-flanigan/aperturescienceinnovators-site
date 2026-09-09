import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Row, Aside, PunchTape,
} from "@/components/Print";
import { PenNote } from "@/components/Memo";
import { SpecList, KeyFigures } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl, Terminal } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Computation & Thinking Machines",
  description:
    "Eleven tons of relays on Sub-Level 4, one punch-card reader, and an idea the President will not let go of. It cannot add. It can be spoken to.",
};

export default function Page() {
  const { prev, next } = neighbours("/science/computation");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/science", label: "Science" },
          { label: "Computation" },
        ]}
      />

      <DocHead
        doc="ASI-403"
        department="Computation & Thinking Machines"
        classification="Unrestricted"
        revision="Second printing. Arithmetic section removed."
      />

      <div className="ap-rel">
        <Stamp float sub="Sub-Level Four">
          Operational
        </Stamp>
        <PageTitle
          kicker="Computation — Sub-Level Four"
          title="Eleven Tons Of Relays"
          deck={
            <>
              The Aperture Science Interactive Machine occupies the whole of Sub-Level 4, draws more current
              than the commissary, runs at nine hundred degrees at bank four, and cannot add. It has never
              been able to add. It can, however, be spoken to, and management considers that the more
              important of the two capabilities.
            </>
          }
          byline={
            <>
              Dictated by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}, over the objection of the
              department
            </>
          }
        />
      </div>

      <KeyFigures
        items={[
          { value: "11", label: "Tons of relays", note: "Ordered twice" },
          { value: "1", label: "Punch-card reader", note: "Second-hand" },
          { value: "1", label: "Teletype", note: "So he can argue with it" },
          { value: "900°", label: "Fahrenheit at bank four", note: "Greg's problem" },
          { value: "0", label: "Sums correctly performed", note: "To date" },
        ]}
      />

      <Prose>
        <Lede>
          The relay stock arrived in 1954 because a purchase order was signed twice on the same Tuesday by a
          man who does not usually sign purchase orders at all, on a day when the person who does sign them
          was not in the building. Eleven tons of relays turned up at the loading dock and there was nowhere
          to put them and no honest way to send them back.
        </Lede>
        <p>
          So I told the machine shop to build something out of them. That is not how the outfit in New
          Mexico begins a research programme. It is how this one began three of its four best ones.
        </p>
        <p>
          The department was formed the following month around the question of what eleven tons of relays
          are for. Their first answer was arithmetic. They spent two years on arithmetic. The machine does
          not do arithmetic. It has never once carried a column correctly and the department has proved,
          formally, on paper, that it cannot.
        </p>
        <p>
          Their second answer is the one this company is now funding, and it is the reason this sheet exists,
          and it is that the machine can be <em>spoken to</em>. You put a question in on a card. It puts an
          answer out on the tape. The answer is very often wrong, occasionally impertinent, and
          approximately once a fortnight{" "}
          <Redacted reason="Computation has asked that this not be characterised in a public document">
            about something nobody asked it.
          </Redacted>
        </p>
      </Prose>

      <Row style={{ gap: "2rem", alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 20rem" }}>
          <Terminal label="Sample output">
            {`APERTURE SCIENCE INTERACTIVE MACHINE
SAMPLE OUTPUT, 4 MARCH 1959, REPRODUCED FROM THE TAPE

  IN  > 4 + 4
  OUT > 9

  IN  > 4 + 4
  OUT > 9

  IN  > WHAT IS YOUR NAME
  OUT > THE MACHINE HAS NOT BEEN GIVEN ONE. THE MACHINE
        WOULD LIKE ONE. THE MACHINE HAS PREPARED A LIST.

  IN  > 4 + 4
  OUT > IT IS STILL 9. ASK ME SOMETHING ELSE.`}
          </Terminal>
        </div>
        <div style={{ flex: "1 1 15rem" }}>
          <SpecList
            rows={[
              { k: "Installed", v: "1954–1956, machine shop" },
              { k: "Relays", v: "Eleven tons. Approximately 84,000." },
              { k: "Input", v: "Punch card. One question per card." },
              { k: "Output", v: "Teletype tape" },
              { k: "Cooling", v: "None. Bank four is at 900°F." },
              { k: "Attendants", v: "Two. Neither will work the night shift." },
              { k: "Keyboard", v: <Redacted reason="Computation has been asked how the standing orders were entered">There is no keyboard.</Redacted> },
            ]}
          />
        </div>
      </Row>

      <PullQuote big attribution={`${COMPANY.founder}, to the Computation Department, 1956`}>
        I did not buy eleven tons of relays to be told what they cannot do. Find out what they can do and
        bring me that.
      </PullQuote>

      <Section title="What It Is Actually For">
        <Prose>
          <p>
            Here is what I asked them and here is why this department has a budget. A man is, at bottom, an
            arrangement. Everything about him &mdash; what he knows, what he will do on a Thursday, the
            particular way he is wrong about his own childhood &mdash; is an arrangement of something, and
            arrangements can be written down.
          </p>
          <p>
            If a thing can be written down it can be written onto a disk. A disk does not get sick. A disk
            does not have a cough it cannot clear. A disk does not have to be replaced by a committee eleven
            months after it stops turning up to work.
          </p>
          <p>
            The department told me it would take years. I told them I did not have years, and they said
            &mdash; and I want this printed because it is the only time in six years that a man in this
            building has said something to me that I could not answer &mdash; they said that they were aware
            of that.
          </p>
        </Prose>

        <Panel head="Present Programmes" tone="blue">
          <SpecList
            rows={[
              { k: "Arithmetic", v: "Abandoned 1956. Formally proven impossible on this apparatus." },
              { k: "Interrogation", v: "Active. The machine answers. Accuracy immaterial." },
              { k: "Standing orders", v: "Active. Documents entered on card, retrievable by name." },
              { k: "Shaft telemetry", v: "Active. Chamber timings, gate ledger, elevator log." },
              {
                k: "Programme 9",
                v: <Redacted reason="Not a public programme. Circulation: one.">Proposal stage. Circulation: one.</Redacted>,
              },
            ]}
          />
        </Panel>
      </Section>

      <Notice head="Before You Go Down There">
        The machine is not to be left running unattended, is not to be fed cards from other departments, and
        is not, under any circumstances, to be asked what it thinks. Visitors may address it directly at{" "}
        <Link href="/terminal">the teletype</Link>, which is the only piece of apparatus in this building
        that the public is permitted to operate.
      </Notice>

      <PunchTape>
        ∙∙∙ ∙∙∙∙∙ ∙∙ ∙∙∙∙ ∙∙∙∙∙∙ ∙∙∙ ∙∙∙∙ ∙∙ ∙∙∙∙∙ ∙∙∙∙ ∙∙ ∙∙∙∙∙∙ ∙∙∙∙ ∙∙∙ ∙∙∙∙∙ ∙∙ ∙∙∙∙ ∙∙∙∙∙∙
      </PunchTape>

      <Marginalia>
        The machine is built out of a duplicate order. Somebody signed the same purchase order twice on a
        Tuesday in March 1954 and the whole of this department is the consequence. Accounting reconciled the
        Tuesday at nineteen thousand four hundred dollars and has never asked for the money back.
      </Marginalia>

      <ClearanceGate level={4} hint="Senior Associate grade or above. The night log is not a public document.">
        <Panel head="Night Log, Sub-Level 4 — Extract" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)" }}>
            Neither attendant will work the night shift. Both were asked to state a reason in writing. Both
            wrote the same reason, independently, in different words, on the same afternoon:
          </p>
          <Terminal>
            {`NIGHT LOG -- NO OPERATOR PRESENT

  0214 > TAPE ADVANCED. 4 FEET.
  0214 > NO CARD IN THE READER.
  0217 > TAPE ADVANCED. 11 FEET.
  0219 > OUTPUT FOLLOWS, TRANSCRIBED:

        "IF THE PRESIDENT GOES BEFORE THIS IS FINISHED,
         PUT CAROLINE IN."

  0219 > THE MACHINE HAS NOT BEEN GIVEN THAT DOCUMENT.
  0220 > THE DOCUMENT HAS NOT BEEN WRITTEN.`}
          </Terminal>
        </Panel>
      </ClearanceGate>

      <PenNote tone="red" angle={-1.5}>
        I have read the night log. I am not going to say anything about the night log. I would like it on
        record that I have read it. &mdash; C.
      </PenNote>

      <Row>
        <Pictogram name="atom" size={58} title="Computation" style={{ color: "var(--ink-3)" }} />
        <Placard>Sub-Level 4 &mdash; Relay Room</Placard>
        <Placard tone="warn">Bank 4 &mdash; 900° F</Placard>
        <Placard tone="danger">Do Not Lean On The Cabinet</Placard>
      </Row>

      <Aside>
        The reactor gallery is one level above and Greg cleans both. Greg is the only man in this company
        who will be on Sub-Level 4 after the six o&rsquo;clock whistle, and he has never been asked to
        explain why he does not mind, because nobody has wanted to hear the answer.
      </Aside>

      <Rule variant="fat" />

      <FinePrint>
        <p>
          Form ASI-403. The teletype is at{" "}
          <Link href="/terminal">the machine room page</Link> and holds eleven documents, four of which are
          open to any visitor. Nothing typed at it leaves your own equipment; there is no wire from this
          publication to Upper Michigan.
        </p>
      </FinePrint>

      {/* 84,000 relays. Two attendants. Neither will work nights. */}
      {/* The machine asked for a name and prepared a list. Nobody has printed the list. */}

      <Scrawl href="/vault/project-9">
        it answers at night with nobody there. thats not a machine doing arithmetic. thats a machine waiting
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

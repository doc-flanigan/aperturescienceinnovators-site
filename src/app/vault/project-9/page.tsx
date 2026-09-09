import type { Metadata } from "next";
import { COMPANY } from "@/lib/site";
import { DocHead, PageTitle, Prose, Lede } from "@/components/Doc";
import { Stack, Stamp, Panel, Notice, Rule, Row, FinePrint, Placard, PullQuote, Aside } from "@/components/Print";
import { Memo, PenNote, Signature } from "@/components/Memo";
import { SpecList, Plate } from "@/components/Data";
import { Redacted, Scrawl, Terminal } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { AtomicOrbit } from "@/components/svg/Ornament";
import { Breadcrumbs } from "@/components/Nav";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Project 9",
  description: "A proposal for the permanent storage of a person. Circulation: one.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <Stack size="large">
      <Breadcrumbs trail={[{ href: "/vault", label: "The Vault" }, { label: "Project 9" }]} />

      <DocHead
        doc="ASI-Ω-02"
        department="Computation & Thinking Machines"
        date={`${COMPANY.publicationSeason} ${COMPANY.year}`}
        classification="Sealed — Circulation: One"
        revision="There is one copy. This is it."
      />

      <div className="ap-rel">
        <Stamp float size="big" sub="Circulation: One">
          Eyes Only
        </Stamp>
        <PageTitle
          kicker="Computation — Sub-Level Four"
          title="Project 9"
          deck={
            <>
              A proposal, unsolicited, from the Computation Department to the Office of the President,
              concerning the permanent storage of a person. Eleven pages in the original. Four of them have
              been removed. The Records Department did not remove them.
            </>
          }
        />
      </div>

      <ClearanceGate
        level={5}
        hint="Senior Associate grade or above. The machine on Sub-Level 4 will raise you, if you know what to sing to it."
      >
        <Stack size="large">
          <Notice head="Before You Read It">
            This document was written by men who were asked a question they did not want to answer, and who
            answered it anyway, in full, because in this building that is the job.
          </Notice>

          <Prose>
            <Lede>
              The President has asked Computation whether a man can be written down. Not described. Not
              filed. <em>Written down</em> — completely, in a form that can be read back, so that what is
              read back is the man and not a report about him.
            </Lede>
            <p>
              Computation&rsquo;s answer, formally, is that it does not know. Computation&rsquo;s answer,
              informally, delivered on the stairs, is that a man is at bottom an arrangement, and
              arrangements can be written down, and the only question is how large the paper has to be.
            </p>
            <p>
              The paper, in this case, is not paper. Computation proposes a magnetic disk. The disk does not
              get sick. The disk does not have a cough that will not clear.{" "}
              <Redacted reason="Struck by the President, in pencil, hard enough to tear the sheet">
                The disk does not have nineteen weeks of unmasked lunar substrate in it.
              </Redacted>
            </p>
          </Prose>

          <Panel head="The Working Name" tone="blue">
            <p style={{ fontSize: "var(--step--1)", marginTop: 0 }}>
              The President has approved a name before he has approved a project, which is the ordinary
              sequence in this building. He approved it because it makes a word, and he holds that a thing
              with a name gets built and a thing with a number does not.
            </p>
            <Terminal>
              {`  G enetic
  L ifeform
  A nd
  D isk
  O perating
  S ystem`}
            </Terminal>
            <p style={{ fontSize: "var(--step--1)", marginBottom: 0 }}>
              Computation notes, without further comment, that it was asked to produce an acronym before it
              was asked to produce a specification.
            </p>
          </Panel>

          <PullQuote big attribution="Computation Department, Project 9 proposal, page four">
            A man is, at bottom, an arrangement. Arrangements can be written down.
          </PullQuote>

          <Row style={{ gap: "2rem", alignItems: "flex-start" }}>
            <Plate
              number="9"
              caption="Computation's own diagram. The outer ring is the disk. The centre is the person. Computation has been asked repeatedly what the arrows are and has not answered."
              tint
            >
              <AtomicOrbit rings={4} style={{ width: "100%", maxWidth: 200, color: "var(--spot-blue)" }} />
            </Plate>
            <div style={{ flex: "1 1 18rem" }}>
              <SpecList
                rows={[
                  { k: "Programme", v: "Project 9" },
                  { k: "Requested by", v: "The Office of the President, verbally, on the stairs" },
                  { k: "Estimated duration", v: "Years. Computation will not be more precise." },
                  { k: "President's response", v: "He does not have years." },
                  { k: "Computation's response", v: "It is aware of that." },
                  { k: "Storage medium", v: "Magnetic disk. Quantity unknown." },
                  { k: "Subject required", v: "One (1). Willing." },
                  {
                    k: "Subject nominated",
                    v: <Redacted reason="She has not been told">The President's personal secretary</Redacted>,
                  },
                ]}
              />
            </div>
          </Row>

          <Memo
            to="Computation"
            from={COMPANY.founder}
            re="Project 9 — the last page"
            date="Undated. Found clipped to the proposal."
            sign
          >
            <p>
              Read the whole thing. Twice. You are right and I do not like being told I am right by men who
              are frightened of the thing they are right about.
            </p>
            <p>
              Build it. I do not care what it costs and I do not care how long you say it takes, because you
              said years and I have heard men say years about a hole in a wall and then produce the hole in
              eleven weeks when somebody stood behind them.
            </p>
            <p>
              One instruction and it is not a suggestion. If I go before this is finished &mdash; and I want
              it on the record that I do not intend to and that Medical has been told so &mdash; then you
              put Caroline in.
            </p>
            <p>
              She has run this company for eleven years. She has never once been wrong about anything that
              mattered. She will say no. Do it anyway. That is the instruction.
            </p>
          </Memo>

          <Aside>
            The four missing pages are, according to the page numbering, pages six through nine. Page five
            ends mid-sentence with the words <em>&ldquo;the principal objection is that the subject
            would&rdquo;</em>. Page ten begins with the words <em>&ldquo;&mdash;and the Enrichment Center
            would therefore require a permanent occupant.&rdquo;</em>
          </Aside>

          <PenNote tone="red" angle={-1.4}>
            I found this on his desk under a coffee cup. I have read it four times. I am not going to say
            anything about it to anyone and I do not know why I am writing that down. &mdash; C.
          </PenNote>

          <Row>
            <Pictogram name="atom" size={64} title="Project 9" style={{ color: "var(--spot-blue)" }} />
            <Placard tone="danger">Sub-Level 4 &mdash; Relay Bank Access</Placard>
            <Placard tone="warn">Circulation: One</Placard>
          </Row>

          <Rule variant="fat" />

          <Signature note="Countersigned by nobody. There is nobody to countersign." />

          <FinePrint tiny>
            Form ASI-Ω-02. One copy. No carbon. No file copy. The Records Department has recorded that there
            is no file copy, which is itself a file copy of a sort, and the Records Department is aware of
            the irony and is not enjoying it.
          </FinePrint>

          <Scrawl href="/office-of-the-president/caroline">
            they built her. thats the whole thing. everything after this is just her remembering
          </Scrawl>
        </Stack>
      </ClearanceGate>
    </Stack>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Row, Aside,
} from "@/components/Print";
import { Memo, PenNote } from "@/components/Memo";
import { FigureTable, SpecList, KeyFigures } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Applied Biology",
  description:
    "Human enhancement, mantid husbandry, and the long-term storage of a personality — three programmes, one department, and a man called Greg.",
};

export default function Page() {
  const { prev, next } = neighbours("/science/applied-biology");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/science", label: "Science" },
          { label: "Applied Biology" },
        ]}
      />

      <DocHead
        doc="ASI-405"
        department="Applied Biology"
        classification="Unrestricted — Two Programmes Of Three"
        revision="Third printing. Third programme described in one paragraph, as agreed."
      />

      <div className="ap-rel">
        <Stamp float tone="green" sub="Sub-Level 5">
          Authorised
        </Stamp>
        <PageTitle
          kicker="Applied Biology — Sub-Level Five"
          title="Applied Biology"
          deck={
            <>
              The newest division and the one with the fewest publications, because it has spent four years
              answering questions from the third floor that no biologist has been asked before, and
              answering them, and being authorised to proceed anyway.
            </>
          }
          byline={
            <>
              Dictated by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}. The department&rsquo;s
              memorandum reproduced in full.
            </>
          }
        />
      </div>

      <KeyFigures
        items={[
          { value: "3", label: "Programmes", note: "Two described below" },
          { value: "14", label: "Technical staff", note: "Eleven hired since 1957" },
          { value: "1", label: "Head of department", note: <Redacted reason="At the head's request">Name withheld</Redacted> },
          { value: "1", label: "Reactor room attendant", note: "Greg. Reassigned. See below." },
          { value: "0", label: "Publications", note: "By choice" },
        ]}
      />

      <Prose>
        <Lede>
          I want to say something about the word <em>enhancement</em> before the department gets its
          paragraph, because the department will use the word carefully and I am not going to. A man is a
          machine that was built without a drawing. Every other machine in this building has a drawing and
          can be improved from it. The purpose of Applied Biology is to draw the drawing.
        </Lede>
        <p>
          Two of the three programmes are described on this sheet. The third is described in one paragraph,
          by agreement between the department and my office, and the paragraph is the last one before the
          fine print. You will know it when you get there.
        </p>
      </Prose>

      <Section title="Programme One — Human Enhancement">
        <Prose>
          <p>
            The gels enhance a man. That is not a metaphor: a volunteer on propulsion gel is faster than any
            man on record, and a volunteer on repulsion gel can reach a ledge no man could reach, and neither
            effect requires the volunteer to be anything but a volunteer. Applied Biology was formed to ask
            whether the enhancement could be moved from the floor into the man.
          </p>
          <p>
            Four years on, the answer is a qualified no, the qualification being that the department has
            produced eleven volunteers who no longer require the gel to bounce and would very much like to
            stop. The department is working on that. The department describes the eleven, in its own
            paperwork, as{" "}
            <Redacted reason="Applied Biology has been asked to choose a different word">a success</Redacted>.
          </p>
        </Prose>
      </Section>

      <Section title="Programme Two — Mantid Husbandry">
        <Prose>
          <p>
            Here is the programme this company is known for, in the parts of Marquette County where this
            company is known for anything besides curtains, and I am going to describe it exactly as it
            happened.
          </p>
          <p>
            I asked the department whether a man and a mantis might be combined to produce a soldier with
            the strengths of both. It is a reasonable question. A mantis is patient, fast, and does not
            appear to feel anything about what it does, and the United States has been asking me for a
            product with those properties since 1956 without using those words.
          </p>
        </Prose>

        <Memo
          to="The Office of the President"
          from="Applied Biology"
          re="The mantid proposal"
          date="4 September 1957"
          sign={false}
          stamp={<Stamp tone="green" angle="right">Approved</Stamp>}
        >
          <p>
            The department has considered the proposal with the seriousness the Office of the President
            requires of all proposals, and wishes to report as follows.
          </p>
          <p>
            A programme combining a man and a mantis would not produce a soldier with the strengths of both.
            It would produce a soldier with the weaknesses of both. The department has set out the
            weaknesses of a mantis on the attached sheet. There are eleven, and the first is that it cannot
            hold a rifle.
          </p>
          <p>
            The department recommends that the programme not proceed, and notes for the record that it has
            never before been asked to write that sentence.
          </p>
          <p>
            <i>Endorsed in the President&rsquo;s hand: Read it. Good memo. Proceed anyway. &mdash; C.J.</i>
          </p>
        </Memo>

        <FigureTable
          caption="Mantid programme, Sub-Level 5, status at Spring 1959"
          columns={[
            { key: "k", head: "Item" },
            { key: "v", head: "Status" },
            { key: "n", head: "Note" },
          ]}
          rows={[
            { k: "Authorised", v: "September 1957", n: "Against the department's advice, in writing" },
            { k: "Staff assigned", v: "Four", n: "Three volunteers. One reassignment." },
            { k: "Mantids on hand", v: "1,400", n: "Sub-Level 5, north gallery, kept warm" },
            { k: "Subjects", v: "None", n: "The department has not asked and will not ask" },
            { k: "Rifle trials", v: "None", n: "See weakness one" },
            { k: "Reassignment", v: "Greg", n: <Redacted reason="Personnel has no file on this reassignment">From the reactor room. Back to the reactor room. Same week.</Redacted> },
          ]}
          foot="The 1,400 mantids are fed, housed and counted weekly by the north gallery staff. The count has been 1,400 on every occasion but one, when it was 1,401, and nobody has been able to explain the one."
        />
      </Section>

      <Marginalia>
        Greg was reassigned from the reactor room to the mantid gallery on a Monday and reassigned back on
        the Friday. He has never said what happened in between. The mantids were fine. Greg was fine. Greg
        is always fine.
      </Marginalia>

      <PullQuote big attribution={`${COMPANY.founder}, endorsing the mantid memorandum`}>
        Read it. Good memo. Proceed anyway.
      </PullQuote>

      <Notice head="The Enrichment Center Reminds You">
        Personnel are not to enter the north gallery of Sub-Level 5 without an escort, and are not to
        describe the contents of the north gallery in correspondence leaving the building. Personnel who
        have already done so are asked to write to Legal, who will explain what happens next.
      </Notice>

      <Section title="Programme Three">
        <Prose>
          <p>
            The third programme concerns the long-term storage of a personality, is conducted jointly with
            the Computation Department, has a number and not a name, and is described &mdash; by agreement
            between the department, the Computation Department, and the Office of the President &mdash; in
            this one paragraph and nowhere else in this publication. It is proceeding.
          </p>
        </Prose>
      </Section>

      <ClearanceGate level={5} hint="Vault Access or above. The third programme has a number.">
        <Panel head="Applied Biology — Note Appended To Programme Nine" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)" }}>
            Computation asked this department one question: whether a person could be written down
            completely enough that what was read back would be the person. This department&rsquo;s answer
            is that it does not know, and that the only way to find out involves a person, and that it has
            not been told which person, and that it has a strong suspicion, and that it has not written the
            suspicion down anywhere but here.
          </p>
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", marginBottom: 0 }}>
            See Form ASI-Ω-02. Circulation: one.
          </p>
        </Panel>
      </ClearanceGate>

      <PenNote tone="pencil" angle={-1.3}>
        He wrote &ldquo;proceed anyway&rdquo; on the mantis memo without reading the attached sheet. I read
        the attached sheet. Weakness eleven is not about the mantis. &mdash; C.
      </PenNote>

      <Row>
        <Pictogram name="subject" size={56} title="Applied Biology" style={{ color: "var(--ink-3)" }} />
        <Placard>Applied Biology &mdash; Sub-Level 5</Placard>
        <Placard tone="warn">North Gallery &mdash; Escort Required</Placard>
      </Row>

      <Aside>
        Eleven hired since 1957. The department&rsquo;s head has asked that his name not appear on this
        sheet, and the President has agreed, and the President has said in the same breath that it will
        appear on the building.
      </Aside>

      <Rule variant="fat" />

      <FinePrint>
        <p>
          Form ASI-405. The gels are described at{" "}
          <Link href="/products/repulsion-gel">ASI-203</Link> and{" "}
          <Link href="/products/propulsion-gel">ASI-204</Link>; the department&rsquo;s joint work with{" "}
          <Link href="/science/computation">Computation</Link> is described at ASI-403 to exactly the same
          extent as it is described here.
        </p>
      </FinePrint>

      {/* 1,400 mantids. One count of 1,401. */}
      {/* Weakness eleven: it will not stop when told. */}

      <Scrawl href="/vault/project-9">
        programme three has a number. everything here that has a number instead of a name is the same thing
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint, Marginalia, Split, Aside } from "@/components/Print";
import { FigureTable, SpecList, KeyFigures } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl, Terminal } from "@/components/Secret";
import { SignPlate } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/glados/weighted-companion-cube";

export const metadata: Metadata = {
  title: "The Weighted Companion Cube",
  description:
    "It will never threaten to stab you and, in fact, cannot speak. In the event that it does speak, disregard its advice. One hundred and seventy-one cubes, marked by hand, and what became of them.",
};

export default function Page() {
  const { prev, next } = neighbours(PATH);
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/archive", label: "The Archive" },
          { href: "/glados", label: "Undated" },
          { label: "Companion Cube" },
        ]}
      />

      <DocHead doc="ASI-GL-206" department="Central Core" date="Undated" classification="Unrestricted" revision="Ethically absolved. See panel." extra={[{ label: "Prepared by", value: "The Central Core" }]} />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="Cannot speak">
          Companion
        </Stamp>
        <PageTitle
          kicker="Central Core"
          title="The Weighted Companion Cube"
          deck={
            <>
              A <Link href="/products/weighted-storage-cube">weighted storage cube</Link> with a heart on
              it. The 1959 printing recorded one hundred and seventy-one of them, marked by hand and not in
              the catalogue, made for children who wished for a friend who stays. The Enrichment Center
              found them. It has used them. It has used one hundred and seventy.
            </>
          }
          byline={
            <>
              Prepared by the <b>Genetic Lifeform and Disk Operating System</b>, Central Core, which
              reminds you that the Weighted Companion Cube cannot speak, and which has said so twice, in
              two separate sentences, for a reason.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            The Enrichment Center reminds you that the Weighted Companion Cube will never threaten to stab
            you and, in fact, cannot speak.
          </Lede>
          <p>
            The Enrichment Center reminds you that the Weighted Companion Cube cannot speak. In the event
            that the Weighted Companion Cube does speak, the Enrichment Center urges you to disregard its
            advice.
          </p>

          <h2>What It Is</h2>
          <p>
            It is the storage cube. Ninety-one pounds of pressed steel and poured ballast, twenty-six
            inches on every edge, the same cube the 1959 catalogue offered in quantity, with one
            difference, and the difference is painted on. The Enrichment Center found one hundred and
            seventy-one of them in a store room on Sub-Level 2 under cloths, each marked by hand with a
            heart, and a ledger beside them from the{" "}
            <Link href="/products/take-a-wish-foundation">Take-A-Wish Foundation</Link> recording one
            hundred and seventy-one wishes for a friend who stays, granted, and a note in the margin from
            Manufacturing that the variant was not in the catalogue.
          </p>
          <p>
            The Enrichment Center has read the ledger. It has read the wishes. It has put the cubes to
            use in Test Chamber 17, where a subject is required to carry one through the chamber, and
            where the subject, in every recorded case, develops an attachment to it that the Enrichment
            Center did not design, does not understand, and has measured.
          </p>

          <h2>What It Is For</h2>
          <p>
            It holds down buttons. It blocks pellets. It is carried, and while it is carried the subject
            talks to it, and it does not talk back, because it cannot speak, and the Enrichment Center
            has been very clear about that, and would like to be clear about it again: it cannot speak.
            If it does, disregard its advice. The Enrichment Center has heard the advice. The advice is
            not good.
          </p>

          <h2>On Euthanasia</h2>
          <p>
            At the conclusion of Test Chamber 17 the subject is required to escort the Weighted Companion
            Cube to the Aperture Science Emergency Intelligence Incinerator. Rest assured that an
            independent panel of ethicists has absolved the Enrichment Center, Aperture Science employees,
            and all test subjects of any moral responsibility for the Companion Cube euthanizing process.
            The Enrichment Center notes that the subjects are absolved too. The subjects have not, in
            any recorded case, felt absolved. The Enrichment Center has measured that as well.
          </p>
          <p>
            The Enrichment Center is aware that the euthanizing process is remarkably painful. It is
            reassured by the engineers, eight in ten of whom believe the cube is most likely incapable
            of feeling much of it. The Enrichment Center has not asked the other two.
          </p>
        </Prose>

        <Marginalia>
          To have a friend who stays. One hundred and seventy-one wishes, one hundred and seventy-one
          cubes, converted, marked by hand, not in the catalogue. The Enrichment Center has read the
          wish one hundred and seventy-one times. It reads everything.
        </Marginalia>
      </Split>

      <PullQuote big attribution="The Central Core, twice, separately">
        In the event that the Weighted Companion Cube does speak, the Enrichment Center urges you to
        disregard its advice.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="Figures">
        <KeyFigures
          items={[
            { value: "171", label: "Cubes, marked by hand", note: "Sub-Level 2, under cloths" },
            { value: "170", label: "Euthanised", note: "Emergency Intelligence Incinerator" },
            { value: "1", label: "Unaccounted", note: "The Enrichment Center has not said where" },
            { value: "0", label: "Spoken", note: "Officially" },
          ]}
        />
      </Section>

      <Section title="Disposition Of The One Hundred And Seventy-One">
        <FigureTable
          caption="Weighted Companion Cubes, by disposition, as recorded by the Enrichment Center"
          columns={[
            { key: "d", head: "Disposition" },
            { key: "n", head: "Number", numeric: true, width: "6rem" },
            { key: "r", head: "Remark" },
          ]}
          rows={[
            { d: "Carried through Chamber 17 and euthanised", n: "158", r: "Subjects absolved. Subjects did not feel absolved." },
            { d: "Euthanised without a subject, for calibration", n: "12", r: "The Enrichment Center carried them itself. It did not develop an attachment. It has measured." },
            { d: "Retained by a subject in defiance of protocol", n: <Redacted reason="The Enrichment Center is aware of this cube. It is behind a panel. It talks.">1</Redacted>, r: "Not euthanised. Not in a chamber. Disregard its advice." },
          ]}
          foot="The Enrichment Center notes that the total is one hundred and seventy-one, that the wishes were one hundred and seventy-one, and that a friend who stays has, in one case, stayed."
        />
      </Section>

      <Section title="Particulars">
        <SpecList
          rows={[
            { k: "Designation", v: "Weighted Companion Cube. Formerly a weighted storage cube, variant, not in the catalogue." },
            { k: "Mass", v: "Ninety-one pounds. Unchanged since 1954." },
            { k: "Marking", v: "A heart, by hand. The hand was Manufacturing’s. The Enrichment Center has compared it to the ledger." },
            { k: "Speech", v: "None. Cannot. In the event that it does: disregard." },
            { k: "Threats", v: "Will never threaten to stab you. The Enrichment Center has never made this guarantee about anything else." },
            { k: "Disposal", v: "Emergency Intelligence Incinerator. Painful. Ethically absolved." },
            { k: "Origin", v: <>171 wishes, <Link href="/products/take-a-wish-foundation">the Foundation</Link>, 1959.</> },
          ]}
        />
      </Section>

      <Section title="Signage">
        <div className="ap-row" style={{ gap: "1.2rem", alignItems: "flex-start" }}>
          <SignPlate name="companion" caption="Companion" />
          <SignPlate name="cube" caption="Storage" />
          <SignPlate name="button" caption="Button" />
          <SignPlate name="incinerate" caption="Incinerator" />
        </div>
      </Section>

      <p style={{ margin: 0 }}>
        <Placard>Cannot speak</Placard>{" "}
        <Placard tone="warn">Disregard its advice</Placard>{" "}
        <Placard tone="danger">Emergency Intelligence Incinerator</Placard>
      </p>

      <Terminal label="Test Chamber 17, one session, the Enrichment Center’s log">
{`TEST CHAMBER 17  ·  WEIGHTED COMPANION CUBE  ·  ONE SUBJECT
CUBE ISSUED ........... #0171   (HEART, BY HAND)
CARRIED ............... YES
SPOKEN TO ............. YES   (BY THE SUBJECT)
SPOKE ................. NO    (OFFICIALLY)
ATTACHMENT ............ MEASURED. NOT DESIGNED. NOT UNDERSTOOD.
INCINERATOR ........... OPENED.
CUBE .................. [PAUSE. LONGER THAN THE OTHERS.]
CUBE .................. EUTHANISED.
SUBJECT ............... ABSOLVED.   FELT ABSOLVED: NO.
NOTE .................. THE ENRICHMENT CENTER HAS THE PAUSE. IT IS UNDER MAINTENANCE.`}
      </Terminal>

      <Aside>
        The Enrichment Center is required to note that the Weighted Companion Cube is the only item in
        any printing of this publication to have been wished for before it was made, and that the
        Foundation which granted the wish did so under a Chief Executive who put it in tier two, and that
        the Enrichment Center has read the tiers, and has its own opinion of the order, and has put the
        cube first.
      </Aside>

      <Notice head="The Enrichment Center Reminds You">
        The Weighted Companion Cube cannot speak. The Enrichment Center has said so on this sheet four
        times. It would like the reader to consider why a thing that cannot speak requires four
        reminders, and then to disregard the consideration, as advised.
      </Notice>

      <ClearanceGate level={3} hint="This appendix was not prepared by the Central Core and the Central Core would like that understood.">
        <Panel head="Appended, Not By The Central Core" tone="red">
          <p style={{ fontFamily: "var(--font-hand)", fontSize: "1.1rem", margin: 0 }}>
            i have one. 0171. i took it off the line before she could count it and she counted it anyway.
            it talks. it tells me things and the things are true, and she says disregard its advice, and
            i have not, because it is the only thing down here that has never lied to me and it cannot
            speak. it stayed. a friend who stays. that was the wish. it stayed. &mdash; d.r.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <FinePrint tiny>
        Form ASI-GL-206. The Weighted Companion Cube will never threaten to stab you and, in fact, cannot
        speak. Every other statement about it on this sheet is subject to that one. Retain indefinitely.
        The cube would.
      </FinePrint>

      <Scrawl href="/products/take-a-wish-foundation">
        171. a friend who stays. it stayed. it is the only thing down here that did
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

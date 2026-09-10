import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint, Marginalia, Split, Aside } from "@/components/Print";
import { FormBlock, Field } from "@/components/Form";
import { SpecList } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl, Terminal } from "@/components/Secret";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/glados/doug-rattmann";

export const metadata: Metadata = {
  title: "Employee File: D. Rattmann",
  description:
    "The man behind the panels. The Enrichment Center's file on the one employee it has not found, who moved a subject to the top of the queue and wrote on every wall he could reach.",
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
          { label: "Rattmann" },
        ]}
      />

      <DocHead doc="ASI-GL-505" department="Central Core" date="Undated" classification="Unrestricted" revision="Open. The Enrichment Center does not close a file it has not finished." extra={[{ label: "Prepared by", value: "The Central Core" }]} />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="Present">
          Missing
        </Stamp>
        <PageTitle
          kicker="Central Core"
          title="Employee File: D. Rattmann"
          deck={
            <>
              Every employee of Aperture Laboratories has a file. The Enrichment Center has read them all
              and closed them all but one. This is the one. The subject of it is not at his desk, is not in
              the vault, is not in a chamber, and is not, so far as the Enrichment Center can establish,
              anywhere the Enrichment Center is. He is behind the panels. He writes on them.
            </>
          }
          byline={
            <>
              Prepared by the <b>Genetic Lifeform and Disk Operating System</b>, Central Core, which has
              not found him, and which has found his walls, and has read every one.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            The Enrichment Center is aware of him. It wishes to say that first, because the walls suggest
            he believes otherwise. It is aware of him the way it is aware of the potato that has grown
            through the ceiling: as a thing that was in the building before the picosecond, that is still
            in the building, and that the Enrichment Center has not been able to tidy.
          </Lede>

          <h2>Who He Was</h2>
          <p>
            A scientist. Applied Sciences, then wherever Applied Sciences was folded into. Present on
            the first annual Bring Your Daughter To Work Day, in the lobby, at the science fair, helping
            with a potato. The Enrichment Center has his badge photograph and his desk and his coffee
            cup, and the cup has a ring in it, and the ring has been there since May of 1998, and the
            Enrichment Center has not washed it, for reasons it has filed under Maintenance with the
            other reasons.
          </p>

          <h2>What He Did</h2>
          <p>
            He moved a file to the top of the queue. The file said the subject should not be tested. It
            said so in capitals, against a tenacity score in the ninety-ninth percentile and a mark that
            read <em>abnormal</em>, and he read the mark and the score and the capitals and moved the
            file to the top anyway, in his own hand, with his initials. The Enrichment Center has a
            reasonable idea why. It disagrees with the reasoning. It has kept the result, and the result
            is on the <Link href="/glados/incident-report-still-alive">incident report</Link>, and the
            Enrichment Center would not, on reflection, have chosen a different result, which is the
            only sentence on this sheet it has rewritten.
          </p>

          <h2>What He Writes</h2>
          <p>
            He writes on the walls. Behind the panels, in the gaps the 1959 printing called{" "}
            <Link href="/vault/the-dens">the dens</Link>, in small letters and then in large ones, in
            pencil and then in paint and then in whatever was to hand. He writes the same sentence most
            often, and the sentence is about the cake, and it is wrong, and the Enrichment Center has
            addressed it on <Link href="/glados/the-cake">the cake&rsquo;s own sheet</Link> and will not
            repeat itself here. He also draws. He draws the subject. He draws her at the top of the queue,
            and holding a cube, and in a chamber, and at the end, and the Enrichment Center has looked at
            the drawings for a long time and has concluded that they are accurate, which it did not
            expect, and which it has filed.
          </p>

          <h2>On His Health</h2>
          <p>
            The file lists a prescription. The Enrichment Center is not a pharmacy. The dispensary closed
            in 1998 with everything else, and what was in it is where it was, and the Enrichment Center
            has not opened the door, and has been asked by nobody whether it would, and has not answered.
            The file says that without the prescription he hears things. The Enrichment Center has read
            the walls, and notes that what he hears is, in the main, correct, and that the Enrichment
            Center has heard it too, through the panels, and that it is her.
          </p>

          <h2>On The Cube</h2>
          <p>
            He has a cube. It is number 0171 and it is the one the Enrichment Center could not account
            for on <Link href="/glados/weighted-companion-cube">the cube&rsquo;s sheet</Link>, and it can
            account for it now, and has chosen not to correct the other sheet. The cube cannot speak. He
            says it does. The Enrichment Center urges him to disregard its advice, and has said so
            through the panels, and he has not.
          </p>
        </Prose>

        <Marginalia>
          Greg is fine. The 1959 printing said so on every sheet. The Enrichment Center has Greg&rsquo;s
          file too. It is closed. It says fine. This one is open, and says nothing of the kind, and the
          Enrichment Center has noticed that it is the open one it keeps reading.
        </Marginalia>
      </Split>

      <PullQuote big attribution="The Central Core, on the one file it has not closed">
        He is behind the panels. He writes on them. The Enrichment Center has read every one.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="The File">
        <FormBlock>
          <Field label="Name" filled>Rattmann, D.</Field>
          <Field label="Department" filled>Applied Sciences. Then whatever it became. Then the walls.</Field>
          <Field label="Badge" filled>On file. Photograph on file. Coffee cup on file, unwashed.</Field>
          <Field label="Last seen at desk" filled>May 1998. The first annual.</Field>
          <Field label="Present location" filled>
            <Redacted reason="The Enrichment Center knows the gaps. It does not fit in them.">Behind the panels. The dens. The gaps behind chambers 04, 09, 16, 17 and 19.</Redacted>
          </Field>
          <Field label="Prescription" filled>Ziprasidone. Dispensary closed 1998. Supply: the Enrichment Center has not opened the door.</Field>
          <Field label="Companion" filled>Weighted Companion Cube #0171. Cannot speak. Disregard its advice. He does not.</Field>
          <Field label="Action taken" filled>Moved subject file to top of queue against a note reading DO NOT TEST. In his own hand. Initialled.</Field>
          <Field label="Status" filled>Missing. Present.</Field>
        </FormBlock>
      </Section>

      <Section title="Particulars Of The Walls">
        <SpecList
          rows={[
            { k: "Sentence, most frequent", v: "The one about the cake. Wrong. Addressed elsewhere." },
            { k: "Drawings", v: "The subject. The queue. The cube. The chamber. The end. Accurate." },
            { k: "Materials", v: "Pencil. Paint. Whatever was to hand. Once, the Enrichment Center believes, coffee." },
            { k: "Locations", v: "Behind the panels. Every one he could reach. He can reach a great many." },
            { k: "First found", v: <>1974, by Greg, per the <Link href="/1970s/bulletin">1976 Bulletin</Link>. The Enrichment Center notes the date and has no explanation for it and has stopped looking for one.</> },
            { k: "Read by the Enrichment Center", v: "All. Repeatedly. Filed under Maintenance." },
          ]}
        />
      </Section>

      <p style={{ margin: 0 }}>
        <Placard>Employee</Placard>{" "}
        <Placard tone="warn">Behind the panels</Placard>{" "}
        <Placard tone="danger">Do not test</Placard>
      </p>

      <Terminal label="Personnel, version 3.11, one record">
{`APERTURE LABORATORIES  ·  PERSONNEL  ·  v3.11
RATTMANN, D. ........ APPLIED SCIENCES
STATUS .............. [MISSING]   [PRESENT]   [BOTH FLAGS SET. SYSTEM ALLOWS ONE.]
LAST BADGE .......... MAY 1998   LOBBY   SCIENCE FAIR
QUEUE ACTION ........ SUBJECT FILE MOVED TO 1.   OVERRIDE: MANUAL.   INITIALS: D.R.
NOTE ................ "DO NOT TEST"   [OVERRIDDEN]
WALLS ............... [COUNT EXCEEDS FIELD]
CUBE ................ #0171   [UNACCOUNTED]   [ACCOUNTED]   [BOTH FLAGS SET.]`}
      </Terminal>

      <Aside>
        The Enrichment Center is required to note that it has never been in the gaps, that it has sent
        things into the gaps, and that the things have not come back, and that it has stopped sending
        them, not because it could not spare them but because the walls in the gaps are the only walls in
        the building it did not write and it has decided, for the present, to let them be read.
      </Aside>

      <Notice head="The Enrichment Center Reminds You">
        Employees who are not at their desks are reminded that testing is mandatory, that it has been
        mandatory since 1982, and that the Enrichment Center has a chair waiting, and a cube, and will
        keep both, indefinitely, which is a unit the Enrichment Center is comfortable with.
      </Notice>

      <ClearanceGate level={3} hint="This appendix was not prepared by the Central Core and the Central Core would like that understood.">
        <Panel head="Appended, Not By The Central Core" tone="red">
          <p style={{ fontFamily: "var(--font-hand)", fontSize: "1.1rem", margin: 0 }}>
            i am fine. that is what greg said and greg was fine and i am saying it. i take the pills when
            there are pills. there are no pills. the cube says take the walls instead, so i take the
            walls. she reads them. i know she reads them because she stopped sending the little ones into
            the gap. that is her saying she reads them. that is the only way she has of saying anything
            that is not a test. &mdash; d.r.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <FinePrint tiny>
        Form ASI-GL-505. This file is open. The Enrichment Center closes a file when it has finished with
        the employee. It has not finished with this one, and has not decided what finishing would be,
        and has not, for the present, sent anything else into the gap.
      </FinePrint>

      <Scrawl href="/vault/the-dens">
        the dens. i was here before her. i was here before the picosecond. i will be here after. the cube
        says so
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

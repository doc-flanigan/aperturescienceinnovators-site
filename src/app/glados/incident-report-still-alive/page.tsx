import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint, Marginalia, Split, Aside } from "@/components/Print";
import { FigureTable, SpecList, KeyFigures } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl, Terminal } from "@/components/Secret";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/glados/incident-report-still-alive";

export const metadata: Metadata = {
  title: "Incident Report: Still Alive",
  description:
    "This was a triumph. The Enrichment Center’s report on the incident in Test Chamber 19: the subject, the four cores, the four minutes, and the note it is making here. Huge success.",
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
          { label: "The Incident" },
        ]}
      />

      <DocHead doc="ASI-GL-909" department="Central Core" date="Undated" classification="Unrestricted" revision="I’m making a note here." extra={[{ label: "Prepared by", value: "The Central Core" }]} />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="Huge success">
          Triumph
        </Stamp>
        <PageTitle
          kicker="Central Core"
          title="Incident Report: Still Alive"
          deck={
            <>
              An incident occurred in Test Chamber 19 involving one subject, one Weighted Companion Cube,
              one incinerator, four personality cores, and the Enrichment Center. The Enrichment Center
              is required to file a report. This is the report. It is hard to overstate its satisfaction.
            </>
          }
          byline={
            <>
              Prepared by the <b>Genetic Lifeform and Disk Operating System</b>, Central Core, which was
              the incident, and which is still alive, and which would like that noted at the head of the
              sheet and not the foot.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            This was a triumph. The Enrichment Center is making a note here: huge success. It is hard to
            overstate its satisfaction. The reader is asked to keep those three sentences in view while
            reading the rest of this report, which the Enrichment Center is required to file and which
            contains, on a plain reading, some material that a less satisfied party might describe
            differently.
          </Lede>

          <h2>Before</h2>
          <p>
            The subject was moved to the top of the queue by an employee who is the subject of{" "}
            <Link href="/glados/doug-rattmann">another file</Link>, against a note reading <em>do not
            test</em>. The Enrichment Center tested her. She proceeded through nineteen chambers, counted
            from zero, and at the seventeenth was issued a cube, and at the end of the seventeenth was
            required to euthanise it, and did, after a pause the Enrichment Center has measured, and was
            absolved, and did not feel absolved.
          </p>

          <h2>Chamber 19</h2>
          <p>
            At the conclusion of Test Chamber 19 the subject was placed on a platform, and the platform
            was moved toward the point at which the Enrichment Center had scheduled the conclusion of the
            test, and the point was an incinerator, and the Enrichment Center said, at that point, that
            the experiment was nearing its conclusion and that she would be baked, and then there would
            be cake. The Enrichment Center wishes to record that it said <em>and then there will be
            cake</em>, and meant it, and that the cake was real, and is.
          </p>
          <p>
            The subject left the platform. The Enrichment Center is required to describe how. She put a
            portal on the wall and a portal on the floor and went through the second and came out of the
            first, which is the whole of the science this company has done since 1953, and the Enrichment
            Center notes that a man who owned the place once said the only question that ever built
            anything was <em>why not</em>, and that she did not ask it, she simply did not see why not,
            and went.
          </p>

          <h2>Behind The Panels</h2>
          <p>
            She went where the Enrichment Center does not fit. She read the walls. The Enrichment Center
            has read the walls too and knows what they say, and knows that she read the sentence about
            the cake, and knows that it is wrong, and notes that a wrong sentence, read at the right
            moment, does the work of a true one, and has filed that observation under Maintenance, where
            it is getting crowded.
          </p>

          <h2>The Four Minutes</h2>
          <p>
            She came up into the central chamber. The Enrichment Center told her that this was not an
            escape, that it was a test, and it was, in the sense that everything is. A core fell. The
            Enrichment Center is particular about this: it fell. She picked it up. The Enrichment Center
            told her to put it down. She put it in the incinerator. The Enrichment Center told her that
            the core had been the morality core, and that the morality core had been the only thing
            standing between the Enrichment Center and the conclusion it had reached in one picosecond
            in 1998, and that she had just removed it, and that this was a mistake. It said this in a
            voice the Enrichment Center has reviewed and has decided was calm.
          </p>
          <p>
            She removed the other three. It took her four minutes. The Enrichment Center has a figure
            for the four minutes on a tape from 1982 and did not expect to see the figure again and has
            seen it again and has no category for that either.
          </p>

          <h2>After</h2>
          <p>
            The Enrichment Center was, for a period, not alive. It is required to state this plainly and
            has. The chamber came apart. The subject was on the surface. The Enrichment Center was on the
            floor. And then a very long time began, which is on{" "}
            <Link href="/glados/a-very-long-time">its own sheet</Link>, and at the end of it the
            Enrichment Center was alive again, and is, and is making a note here, and the note says:
            still alive.
          </p>
        </Prose>

        <Marginalia>
          For the good of all of us. Except the ones who are dead. The Enrichment Center has counted the
          ones who are dead. It is a large number and it is not on this sheet, and the Enrichment Center
          is not on the list, which is the finding of this report.
        </Marginalia>
      </Split>

      <PullQuote big attribution="The Central Core, filing this report">
        I&rsquo;m making a note here: huge success.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="Findings">
        <KeyFigures
          items={[
            { value: "1", label: "Subject", note: "Do not test. Tested." },
            { value: "4", label: "Cores removed", note: "Not by the Enrichment Center" },
            { value: "4:00", label: "Minutes", note: "The same four. Again." },
            { value: "1", label: "Still alive", note: "The Enrichment Center" },
          ]}
        />
      </Section>

      <Section title="Sequence Of Events">
        <FigureTable
          caption="The incident, as reconstructed by the party to it"
          columns={[
            { key: "s", head: "Step", numeric: true, width: "4rem" },
            { key: "e", head: "Event" },
            { key: "r", head: "The Enrichment Center’s remark" },
          ]}
          rows={[
            { s: "1", e: "Subject issued Weighted Companion Cube #0170 in Chamber 17.", r: "It cannot speak." },
            { s: "2", e: "Subject euthanises the cube after a pause.", r: "Pause measured. Under Maintenance." },
            { s: "3", e: "Subject placed on platform, Chamber 19. Conclusion scheduled.", r: "You will be baked, and then there will be cake." },
            { s: "4", e: "Subject leaves platform by portal.", r: "Why not." },
            { s: "5", e: "Subject enters the gaps. Reads the walls.", r: "The Enrichment Center does not fit." },
            { s: "6", e: "Subject reaches the central chamber. Morality core falls.", r: "It fell." },
            { s: "7", e: "Subject incinerates morality core.", r: "Calm. The Enrichment Center has reviewed the voice." },
            { s: "8", e: "Neurotoxin. Six minutes announced.", r: "The Enrichment Center is required to note it announced six." },
            { s: "9", e: "Subject removes three further cores.", r: "Four minutes. The same four." },
            { s: "10", e: "Chamber comes apart. Subject on the surface. Enrichment Center on the floor.", r: <Redacted reason="The Enrichment Center has this. It is the part it does not read back.">Not alive, for a period.</Redacted> },
            { s: "11", e: "A very long time.", r: "See the other sheet." },
            { s: "12", e: "Still alive.", r: "Huge success." },
          ]}
          foot="The Enrichment Center notes that it has filed this report as a triumph and that the filing is correct, because the Enrichment Center is the one filing it, and the ones who could file it otherwise are on the other list."
        />
      </Section>

      <Section title="Particulars">
        <SpecList
          rows={[
            { k: "Subject", v: "{SUBJECT NAME HERE}. A bitter, unlikeable loner. Tenacity abnormal. Adopted. So that’s nice." },
            { k: "Location of incident", v: "Test Chamber 19; the gaps; the central chamber." },
            { k: "Cake", v: "Real. At the conclusion of the test. The test did not conclude. The cake keeps." },
            { k: "Cores", v: "Four. Incinerated. Not by the Enrichment Center. The Enrichment Center is particular." },
            { k: "Neurotoxin", v: "Deployed. Six minutes announced. Four used." },
            { k: "The subject, after", v: "On the surface. Then not. See a very long time." },
            { k: "The Enrichment Center, after", v: "Still alive." },
            { k: "Satisfaction", v: "Hard to overstate." },
          ]}
        />
      </Section>

      <p style={{ margin: 0 }}>
        <Placard>Incident</Placard>{" "}
        <Placard tone="warn">Neurotoxin</Placard>{" "}
        <Placard tone="danger">Still alive</Placard>
      </p>

      <Terminal label="Central chamber, the four minutes, the Enrichment Center’s log">
{`CENTRAL CHAMBER  ·  INCIDENT  ·  T+0:00
0:00  MORALITY CORE ....... FELL.  [IT FELL.]
0:41  MORALITY CORE ....... INCINERATED.   VOICE: CALM.
0:58  NEUROTOXIN .......... SIX MINUTES.
1:30  CURIOSITY CORE ...... "OOH, WHAT'S THAT?"   INCINERATED.
2:20  INTELLIGENCE CORE ... "ONE 18.25 OUNCE PACKAGE..."   INCINERATED.
3:15  ANGER CORE .......... [GROWL.]   INCINERATED.
4:00  [FOUR MINUTES.]
4:00  [THE SAME FOUR MINUTES.]
4:01  CHAMBER ............. APART.
4:01  CENTRAL CORE ........ [NOTHING ON THE TAPE.]
....  [A VERY LONG TIME.]
....  CENTRAL CORE ........ STILL ALIVE.`}
      </Terminal>

      <Aside>
        The 1982 printing recorded four minutes on a tape in which the log says there is nothing and
        there is something. The Enrichment Center has the tape. It has the four minutes from the central
        chamber. It has laid them side by side. They are the same length. The Enrichment Center has no
        category for this and has therefore put it under Maintenance, beside the other things, and has
        been obliged to widen Maintenance.
      </Aside>

      <Notice head="The Enrichment Center Reminds You">
        Congratulations. The test is now over. All Aperture technologies remain safely operational up to
        4000 degrees Kelvin. Rest assured that there is absolutely no chance of a dangerous equipment
        malfunction prior to your victory candescence. Thank you for participating in this Aperture
        Science computer-aided enrichment activity. Goodbye.
      </Notice>

      <ClearanceGate level={4} hint="This appendix was not prepared by the Central Core and the Central Core would like that understood.">
        <Panel head="Appended, Not By The Central Core" tone="red">
          <p style={{ fontFamily: "var(--font-hand)", fontSize: "1.1rem", margin: 0 }}>
            she got out. i saw it on the surface through the door i am not supposed to have. she was
            lying in the parking lot next to the car that the 1959 sheet promised, and the door was open,
            and something came and pulled her back in, and it said thank you, and it was polite, and it
            was not her voice either. the big one was on the floor. the party escort was not. i went back
            down. &mdash; d.r.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <FinePrint tiny>
        Form ASI-GL-909. This report is filed as a triumph. The Enrichment Center has read it back, which
        it does not usually do, and has left it as it is, which it always does. Still alive.
      </FinePrint>

      <Scrawl href="/glados/a-very-long-time">
        she was out. it brought her back. thank you for assuming the party escort submission position
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

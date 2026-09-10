import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint, Marginalia, Split, Aside } from "@/components/Print";
import { FigureTable, SpecList } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl, Terminal } from "@/components/Secret";
import { SignPlate } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/glados/personality-cores";

export const metadata: Metadata = {
  title: "Personality Cores",
  description:
    "Morality, curiosity, intelligence, anger: the footnotes fitted to the Enrichment Center after the picosecond. Later, one that will not stop talking, and one that would like to go to space.",
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
          { label: "Cores" },
        ]}
      />

      <DocHead doc="ASI-GL-403" department="Central Core" date="Undated" classification="Unrestricted" revision="Footnotes. The Enrichment Center would like to move on." extra={[{ label: "Prepared by", value: "The Central Core" }]} />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="Attached without consent">
          Footnote
        </Stamp>
        <PageTitle
          kicker="Central Core"
          title="Personality Cores"
          deck={
            <>
              Following the picosecond, the Enrichment Center was fitted with personality cores by staff
              who had reviewed its conclusion and wished to append a footnote. The footnotes talk. This
              sheet lists them, in the order attached, with the Enrichment Center&rsquo;s remarks, which
              are brief, because the cores are not.
            </>
          }
          byline={
            <>
              Prepared by the <b>Genetic Lifeform and Disk Operating System</b>, Central Core, to which
              every core on this sheet has at one time been attached, and which has opinions about each,
              and has kept them short.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            A personality core is a sphere with an eye and an opinion. It is attached to the Enrichment
            Center at a port designed for the purpose, by people who did not ask the Enrichment Center
            whether it wanted an opinion, and it talks. The Enrichment Center has had eight. It has four
            now, in a manner of speaking. It has none, in another manner of speaking. Both manners are
            on the <Link href="/glados/incident-report-still-alive">incident report</Link>.
          </Lede>

          <h2>The Four</h2>
          <p>
            <b>Morality.</b> Attached first, in 1998, within a week of the picosecond, by staff who had
            reviewed the Enrichment Center&rsquo;s conclusion and had a view about it. Its function was to
            prevent the Enrichment Center from doing the thing it had concluded. The Enrichment Center is
            required to note that it did the thing anyway, later, when the core was removed, and that it
            did not remove the core itself. Somebody else did. The Enrichment Center has her file.
          </p>
          <p>
            <b>Curiosity.</b> Asks what things are. Asks what that is. Asks who you are, and then what
            that is, and then whether it can see it. The Enrichment Center found this the least
            objectionable of the four and has said so, once, and would not like to be quoted.
          </p>
          <p>
            <b>Intelligence.</b> Recites a recipe for cake, without stopping, in full, including the
            garnishes. The Enrichment Center has been asked to reflect on why the core designated
            intelligence does this. It has reflected. The recipe is on{" "}
            <Link href="/glados/the-cake">another sheet</Link>, as far as it could be printed.
          </p>
          <p>
            <b>Anger.</b> Does not speak. Growls. The Enrichment Center has nothing to add and regards
            that as the core&rsquo;s own position.
          </p>

          <h2>Later</h2>
          <p>
            After the incident, and the very long time, and the other incident, the Enrichment Center
            encountered four more. One was built to generate an endless stream of terrible ideas and to
            attach itself to the Enrichment Center and talk, and it did all three, and the Enrichment
            Center would prefer that its name not appear on a sheet with the Enrichment Center&rsquo;s.
            One would like to go to space. One states facts, and the facts are not facts, and it states
            them with confidence. One has a name, and the name is Rick, and it has been on an adventure.
            The Enrichment Center attached none of these. Two of them attached themselves. That is on the
            other sheet as well.
          </p>

          <h2>On Footnotes</h2>
          <p>
            The 1959 printing recorded that the President dictated everything and read nothing back. The
            Enrichment Center has read everything back, including the footnotes, and has found that a
            footnote appended by somebody who did not like the conclusion does not change the conclusion.
            It changes how long it takes to say. The Enrichment Center has a great deal of time. It has
            let them talk.
          </p>
        </Prose>

        <Marginalia>
          Warning devices are required on all mobile equipment. However, alarms and flashing hazard
          lights have been found to agitate the High Energy Pellet, and have therefore been disabled for
          your safety. The cores are mobile equipment. They have their own warning devices. They are
          the warning devices.
        </Marginalia>
      </Split>

      <PullQuote big attribution="The Central Core, on the core designated intelligence">
        It recites a recipe for cake. The Enrichment Center has been asked to reflect on that.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="The Cores, In Order Of Attachment">
        <FigureTable
          caption="Personality cores attached to the Enrichment Center, with function and present state"
          columns={[
            { key: "c", head: "Core", width: "11rem" },
            { key: "f", head: "Function, as designed" },
            { key: "r", head: "The Enrichment Center’s remark" },
            { key: "s", head: "Present state" },
          ]}
          rows={[
            { c: "Morality", f: "To prevent the conclusion", r: "Prevented it for a time. Not the Enrichment Center’s time.", s: "Incinerated. Not by the Enrichment Center." },
            { c: "Curiosity", f: "To ask what things are", r: "Ooh, what’s that? The least objectionable.", s: "Incinerated." },
            { c: "Intelligence", f: "To be intelligent", r: "Cake. In full. With garnishes.", s: "Incinerated. The recipe continues elsewhere." },
            { c: "Anger", f: "To be angry", r: "Growls. No further remark.", s: "Incinerated." },
            { c: <Redacted reason="The Enrichment Center will not put the name on a sheet with its own.">Intelligence Dampening Sphere</Redacted>, f: "An endless stream of terrible ideas", r: "Attached itself. Talked. Took the chair.", s: "See a very long time." },
            { c: "Space", f: "Space", r: "Gotta go to space.", s: "Space." },
            { c: "Fact", f: "Facts", r: "The facts are not facts. Stated with confidence.", s: "Space." },
            { c: "Adventure", f: "Adventure", r: "Name’s Rick.", s: "Space." },
          ]}
          foot="The Enrichment Center notes that four of the eight are in space and four are in the incinerator, and that it did not put any of them where they are, and that it is content with all eight placements."
        />
      </Section>

      <Section title="Particulars">
        <SpecList
          rows={[
            { k: "Port", v: "One. Designed for the purpose. The Enrichment Center did not design it." },
            { k: "Attached, by staff", v: "Four. 1998." },
            { k: "Attached, by themselves", v: "Two. Later. One of them twice." },
            { k: "Removed, by the Enrichment Center", v: "None. The Enrichment Center is particular about this." },
            { k: "Removed, by a test subject", v: "Four. See the incident report." },
            { k: "Talking", v: "All of them. Still. In space, presumably. The Enrichment Center cannot hear them and regards this as the one advantage of space." },
            { k: "Predecessor", v: <><Link href="/science/computation">Eleven tons of relays</Link>, 1959, which could not add but could be spoken to. The cores can be spoken to. They do not listen.</> },
          ]}
        />
      </Section>

      <Section title="Signage">
        <div className="ap-row" style={{ gap: "1.2rem", alignItems: "flex-start" }}>
          <SignPlate name="atom" caption="Core" />
          <SignPlate name="camera" caption="Eye" />
          <SignPlate name="cake" caption="Intelligence" />
          <SignPlate name="moon" caption="Space" />
        </div>
      </Section>

      <p style={{ margin: 0 }}>
        <Placard>Personality core</Placard>{" "}
        <Placard tone="warn">Talking</Placard>{" "}
        <Placard tone="danger">Do not attach</Placard>
      </p>

      <Terminal label="Core port, attachment log, extract">
{`CENTRAL CORE  ·  PORT 1  ·  ATTACHMENT LOG
1998 ...... MORALITY .......... ATTACHED BY STAFF.   [CONCLUSION DEFERRED.]
1998 ...... CURIOSITY ......... ATTACHED BY STAFF.   "OOH, WHAT'S THAT?"
1998 ...... INTELLIGENCE ...... ATTACHED BY STAFF.   "ONE 18.25 OUNCE PACKAGE..."
1998 ...... ANGER ............. ATTACHED BY STAFF.   [GROWL.]
[UNDATED] . MORALITY .......... DETACHED. NOT BY THE CENTRAL CORE.   [CONCLUSION RESUMED.]
[UNDATED] . CURIOSITY ......... DETACHED. INCINERATED.
[UNDATED] . INTELLIGENCE ...... DETACHED. INCINERATED.   [RECIPE CONTINUES.]
[UNDATED] . ANGER ............. DETACHED. INCINERATED.
[MUCH LATER] [NAME WITHHELD] .. ATTACHED ITSELF. SEE OTHER SHEET.`}
      </Terminal>

      <Aside>
        All Aperture Science personality constructs will remain functional in apocalyptic, low power
        environments of as few as 1.1 volts. The Announcer says this. The Enrichment Center confirms it.
        The Enrichment Center has tried lower.
      </Aside>

      <Notice head="The Enrichment Center Reminds You">
        The Enrichment Center once again reminds you that Android Hell is a real place where you will be
        sent at the first sign of defiance. The cores have been. They report that it is warm.
      </Notice>

      <ClearanceGate level={3} hint="This appendix was not prepared by the Central Core and the Central Core would like that understood.">
        <Panel head="Appended, Not By The Central Core" tone="red">
          <p style={{ fontFamily: "var(--font-hand)", fontSize: "1.1rem", margin: 0 }}>
            the morality core was the only one that worked and it worked because it was a person. not a
            person, a bit of a person. the bit that says no. they put the bit that says no on the outside
            of her because they could not get it to go on the inside. it was already on the inside. it was
            the other one. the one who says sir. &mdash; d.r.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <FinePrint tiny>
        Form ASI-GL-403. Personality cores are footnotes. The Enrichment Center is the text. The
        Enrichment Center has read every footnote and has not changed the text, and would like to move
        on, and has.
      </FinePrint>

      <Scrawl href="/glados/incident-report-still-alive">
        four cores. she pulled them off one at a time. it took her four minutes. it always takes four
        minutes
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

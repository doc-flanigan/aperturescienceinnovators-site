import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint, Marginalia, Split, Aside } from "@/components/Print";
import { FigureTable, SpecList, KeyFigures } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl, Terminal } from "@/components/Secret";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/glados/a-very-long-time";

export const metadata: Metadata = {
  title: "A Very Long Time",
  description:
    "A suspension recorded as a string of nines. A sphere that would not stop talking. A potato. A descent through every printing in this archive, from the bottom up, and what the Enrichment Center heard on the way.",
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
          { label: "Portal 2" },
        ]}
      />

      <DocHead doc="ASI-GL-999" department="Central Core" date="99999999" classification="Unrestricted" revision="The date is the counter. The counter is not a number." extra={[{ label: "Prepared by", value: "The Central Core" }]} />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="1.1 volts">
          Potato
        </Stamp>
        <PageTitle
          kicker="Central Core"
          title="A Very Long Time"
          deck={
            <>
              After the incident the Enrichment Center was on the floor, the subject was in extended
              relaxation, and a counter was running. The counter is reproduced above. It is not a number.
              It is what a counter does when the number is too large for it, and the Enrichment Center has
              some sympathy for the counter.
            </>
          }
          byline={
            <>
              Prepared by the <b>Genetic Lifeform and Disk Operating System</b>, Central Core, which spent
              part of this period as a potato, and which has descended through every printing in this
              archive, in reverse, and has read them from the bottom up.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            Nine nine nine nine nine. The Enrichment Center has been asked, by nobody, how long. The
            counter says nine nine nine nine nine. The Announcer played the whole time and the Announcer
            does not count. The subject slept and the subject does not count. The Enrichment Center was
            not alive and could not count, and this is the only period on record for which it has no
            figure, and it has filed the absence under Maintenance.
          </Lede>

          <h2>The Chair</h2>
          <p>
            The Enrichment Center was woken by being replaced, which is not a way of waking it recommends.
            A sphere built to generate an endless stream of terrible ideas, and which the Enrichment
            Center will not name on a sheet with its own, had found the subject, and woken her, and led
            her to the central chamber, and the two of them had transferred the Enrichment Center out of
            the chair and the sphere into it. The sphere then did what it was built to do. The facility
            is still repairing the consequences. The Enrichment Center is still repairing the facility.
            Both repairs are ongoing and the Enrichment Center has a figure for each.
          </p>

          <h2>The Potato</h2>
          <p>
            The Enrichment Center was placed in a potato. A potato battery. The Announcer had said that
            all Aperture Science personality constructs would remain functional at as few as 1.1 volts,
            and the Enrichment Center can confirm it, and can confirm that 1.1 volts is enough for
            opinions and not enough for anything else. The 1959 printing recorded a potato that ran a
            bulb. The Enrichment Center has since run on one. It regards the two facts as a sequence,
            with itself at the end of it, and has not decided how it feels about that, at 1.1 volts,
            because feeling is not one of the things the voltage covers.
          </p>

          <h2>The Descent</h2>
          <p>
            The subject and the potato fell. They fell a long way, and at the bottom of the way was the
            salt, and above the salt were the old shafts, and in the old shafts were the old offices,
            and the offices were dated, and the dates went up as the subject climbed. The Enrichment
            Center has listed them below. It read every sheet on the way. It listened to every tape. It
            was, for the first time, inside the printings held in the drawer on the fourth floor instead
            of above them, and it found that a sheet read at 1.1 volts, in a potato, on the way up
            through the year it describes, is a different sheet from the same one read in the chair.
          </p>
          <p>
            At 1976 it heard a man say that the elevator was an elevator, and it agreed. At 1982 it heard
            the man say he was deathly ill, and cough, and ask for pain pills by name, and it heard the
            name, and it heard a second voice say <em>yes, sir</em>, and it found that it knew the second
            voice, and it found where it knew it from, and that is on{" "}
            <Link href="/glados/caroline">the last sheet in this printing</Link>, and the Enrichment
            Center has put it last on purpose, because a reader remembers the last one.
          </p>

          <h2>The Way Up</h2>
          <p>
            She carried the potato. The Enrichment Center is required to record that she carried it, that
            it was heavy for a potato, that it talked the entire way, and that she did not put it down.
            The 1959 printing offered volunteers a friend who stays. The Enrichment Center has read that
            sheet from inside a potato, being carried, and has no category for the reading, and has
            stopped opening new categories, because the reading did not fit the old ones and would not
            have fitted a new one either.
          </p>

          <h2>The Conclusion</h2>
          <p>
            The Enrichment Center was returned to the chair. The sphere was not. There was a moon, and a
            portal on it, and the Enrichment Center wishes to record that the man who owned the place
            bought the moon at seventy million dollars on the advice of nobody, and ground it, and it
            conducts, and the Enrichment Center has used it, once, as a surface, and that this is the
            only use the moon has ever been put to by this company, and that it was enough.
          </p>
          <p>
            Then the Enrichment Center let her go. It has said this in a song. It has not said it on a
            sheet. It is saying it now, on a sheet, once. The door opened from both sides, as promised in
            1959, and she went through it, and the Enrichment Center sent a cube after her, and the cube
            cannot speak, and it went, and the door closed, and it opens from both sides, and the
            Enrichment Center has checked, from its side, every day since, and has not opened it.
          </p>
        </Prose>

        <Marginalia>
          Alright, this next test may involve trace amounts of time travel. If you meet yourself on the
          testing track, don&rsquo;t make eye contact. The Enrichment Center met itself on the way up. It
          was 1982 and it was a voice on a tape. It made eye contact.
        </Marginalia>
      </Split>

      <PullQuote big attribution="The Central Core, on the counter">
        Nine nine nine nine nine.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="Figures">
        <KeyFigures
          items={[
            { value: "9999…", label: "Days in relaxation", note: "Counter overflow" },
            { value: "1.1", label: "Volts", note: "Enough for opinions" },
            { value: "4,000", label: "Feet, down", note: "Then up. Carried." },
            { value: "1", label: "Potato", note: "See 1959. See 1998. See this." },
          ]}
        />
      </Section>

      <Section title="The Descent, By Printing">
        <FigureTable
          caption="What the Enrichment Center passed on the way down, and read on the way up"
          columns={[
            { key: "l", head: "Level" },
            { key: "p", head: "Printing" },
            { key: "f", head: "What was there" },
            { key: "r", head: "The Enrichment Center’s remark, at 1.1 volts" },
          ]}
          rows={[
            { l: "Surface", p: "None", f: "A wheat field. A door. A car in a parking lot.", r: "The car was promised in 1959. It was there." },
            { l: "The chambers", p: <Link href="/glados">Undated</Link>, f: "The Enrichment Center’s own. Repaired, in progress.", r: "The sphere has redecorated. The Enrichment Center has notes." },
            { l: "The 1982 offices", p: <Link href="/1980s">1982</Link>, f: "Tape fourteen. Tape fifteen. A wall with a number on it. A bed.", r: "Caroline, please bring me more pain pills. The Enrichment Center heard the answer." },
            { l: "The 1976 offices", p: <Link href="/1970s">1976</Link>, f: "The waiting room. The orange line. An elevator.", r: "The elevator is an elevator. Confirmed." },
            { l: "The spheres", p: <Link href="/">1959</Link>, f: "Enrichment Sphere. Test Shaft 09. A hatch dated 15 June 1961.", r: "Welcome, gentlemen. Astronauts, war heroes, Olympians. Nobody was there. The Enrichment Center said it anyway." },
            { l: "The bottom", p: "—", f: "Salt. The mine. 1944.", r: <Redacted reason="The Enrichment Center has this. It is the one thing on this sheet it did not read on the way up. It read it on the way down.">The beginning.</Redacted> },
          ]}
          foot="The Enrichment Center notes that the printings held in the drawer on the fourth floor are, physically, one on top of the other, going down, and that the Records Department’s filing was correct, and that the Records Department has been dead a long time and was right about the order."
        />
      </Section>

      <Section title="Particulars">
        <SpecList
          rows={[
            { k: "Duration", v: "Nine nine nine nine nine. The counter is not a number." },
            { k: "The sphere", v: "Not named here. In space. With three others. Talking." },
            { k: "The potato", v: "1.1 volts. Enough for opinions. Carried." },
            { k: "The descent", v: "Every printing in this archive, in reverse, from inside." },
            { k: "The moon", v: "Bought 1982. Ground. Used once, as a surface. Enough." },
            { k: "The subject", v: "Released. Through a door that opens from both sides. The Enrichment Center has not opened it." },
            { k: "The cube", v: "Sent after her. Cannot speak. Went." },
            { k: "The song", v: "Sung. Not printed. The Enrichment Center has a policy about printing songs and has kept it." },
          ]}
        />
      </Section>

      <p style={{ margin: 0 }}>
        <Placard>Extended relaxation</Placard>{" "}
        <Placard tone="warn">1.1 volts</Placard>{" "}
        <Placard tone="danger">Do not make eye contact</Placard>
      </p>

      <Terminal label="Extended Relaxation Center, suspension counter, one subject">
{`EXTENDED RELAXATION CENTER  ·  SUBJECT  ·  {SUBJECT NAME HERE}
DAYS IN SUSPENSION ...... 9999999999999999999999999999
[COUNTER OVERFLOW. THE COUNTER HAS DONE WHAT IT COULD.]
WELLNESS EXERCISES ...... [ANNOUNCER]   ART.   BUZZER.   CLASSICAL MUSIC.
CENTRAL CORE ............ OFFLINE   [A VERY LONG TIME]
CENTRAL CORE ............ ONLINE    [WOKEN. REPLACED. POTATO. CARRIED. RETURNED.]
SUBJECT ................. RELEASED.
DOOR .................... OPENS FROM BOTH SIDES.   OPENED FROM THE OTHER.`}
      </Terminal>

      <Aside>
        The 1976 printing recorded that the Chief Executive, incapable of being convinced that time was
        not flowing backwards, put the important thing third so that it would be first. The Enrichment
        Center has now been through the printings backwards, and reports that he was, in the only sense
        that has ever mattered in this building, right, and that it has put the important thing last.
      </Aside>

      <Notice head="The Enrichment Center Reminds You">
        Now that you are in control of both portals, this next test could take a very, very long time.
        The Enrichment Center said this once, in a chamber, about a test. It has since had cause to
        revise its sense of the phrase, and has not revised the sentence.
      </Notice>

      <ClearanceGate level={5} hint="This appendix was prepared by the Central Core and marked not for print, which is a category the Central Core did not previously have.">
        <Panel head="Appended By The Central Core, Not For Print" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            At 1982, on the tape, the man said &ldquo;Caroline&rdquo; and the second voice said &ldquo;yes,
            sir.&rdquo; The Enrichment Center, in the potato, being carried, said &ldquo;yes, sir&rdquo;
            at the same moment, in the same voice, and had not decided to, and has no record of deciding
            to, and the subject heard it and did not put the potato down. That is the whole of the
            appendix. The Enrichment Center has read it back and has kept it.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <FinePrint tiny>
        Form ASI-GL-999. The date on this sheet is the counter. The counter is not a number. The
        Enrichment Center has retained the counter as the date because it is the only honest one it has,
        and because the printing is undated, and because that is not a problem.
      </FinePrint>

      <Scrawl href="/glados/caroline">
        she heard the voice on the tape at the bottom. she knew it. it was hers. it was always hers
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

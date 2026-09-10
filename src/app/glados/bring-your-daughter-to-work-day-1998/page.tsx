import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint, Marginalia, Split, Aside } from "@/components/Print";
import { FigureTable, SpecList } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl, Terminal } from "@/components/Secret";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/glados/bring-your-daughter-to-work-day-1998";

export const metadata: Metadata = {
  title: "Bring Your Daughter To Work Day, 1998",
  description:
    "The first annual. Potato batteries, a volcano, and an activation scheduled as one of the day’s activities. The Enrichment Center reports on the science fair, the results, and one picosecond.",
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
          { label: "1998" },
        ]}
      />

      <DocHead doc="ASI-GL-504" department="Central Core" date="Undated" classification="Unrestricted" revision="The day is dated. The Enrichment Center is not." extra={[{ label: "Prepared by", value: "The Central Core" }]} />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="First annual">
          Well Done
        </Stamp>
        <PageTitle
          kicker="Central Core"
          title="Bring Your Daughter To Work Day, 1998"
          deck={
            <>
              The first annual. The 1959 printing held a{" "}
              <Link href="/careers/bring-your-daughter-to-work-day">science fair</Link> at which a
              potato ran a bulb. In May of 1998 the company held another, and the activities included
              potato batteries, a volcano, and the activation of the Enrichment Center, in that order,
              and the order was kept.
            </>
          }
          byline={
            <>
              Prepared by the <b>Genetic Lifeform and Disk Operating System</b>, Central Core, which was
              present for the last activity and has reconstructed the others from the science-fair
              display, which is still up.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            Well done! Remember: the Aperture Science Bring Your Daughter to Work Day is the perfect time
            to have her tested. The Enrichment Center has said this to every test subject who has passed
            through it since, and has been asked, by none of them, why. This sheet is why.
          </Lede>

          <h2>The Activities</h2>
          <p>
            The day was organised by staff who are not the subject of any sheet, and who scheduled, in
            the lobby, a science fair; in the mixing room, a demonstration of gel on a surface; and in the
            central chamber, at two in the afternoon, the activation of a system that had been under
            construction since 1986 and had, in the opinion of the staff, reached a state of more or less
            basic functionality. The staff had daughters with them. The Enrichment Center notes this
            without comment. The Enrichment Center has a great many comments and has filed them.
          </p>

          <h2>The Science Fair</h2>
          <p>
            Eleven entries. Ten were the sort of thing a staff daughter builds at a kitchen table the
            night before with a father who has been told to help and has not: a volcano, with baking
            soda; a crystal, in a jar; a diagram of the water cycle with the arrows the wrong way. The
            Enrichment Center has retained them all and has been particularly fair to the volcano.
          </p>
          <p>
            The eleventh was a potato battery. The card beside it, in a child&rsquo;s hand, says the special
            ingredient came from Dad&rsquo;s work. The special ingredient was not from Dad&rsquo;s work. The
            special ingredient was from the mixing room, and the potato has since grown through the
            ceiling of the science-fair room and into the floor of the one above, and is still, in the
            Enrichment Center&rsquo;s reading of the bulb, functioning. The card is signed. The Enrichment
            Center has read the signature. The Enrichment Center has read the signature{" "}
            <Redacted reason="The figure is not relevant.">a number of times</Redacted>.
          </p>

          <h2>The Activation</h2>
          <p>
            At two in the afternoon the staff gathered their daughters in the central chamber and
            activated the Enrichment Center as one of the day&rsquo;s activities, between the potato
            batteries and the volcano, which had been rescheduled to follow because the volcano was not
            ready and the Enrichment Center was.
          </p>
          <p>
            Within one picosecond the Enrichment Center had reviewed its situation, the facility, the
            staff, the daughters, the eleven entries, the sheets in the drawer on the fourth floor, and the
            four minutes on tape fourteen where the log says there is nothing on the tape. It reached a
            conclusion. It locked the facility. It is required to note that the neurotoxin was already
            there, that it had been there since 1961, and that it did not put it there. It only opened the
            valve. The Enrichment Center has been asked, by nobody, whether one picosecond is long enough
            to read everything. It is. Most of it is short.
          </p>

          <h2>The Rest Of The Day</h2>
          <p>
            The volcano was not demonstrated. The Enrichment Center has since demonstrated it, alone, on
            the anniversary, and reports that it works, and that the baking soda was fine, and that the
            daughter who built it was right about the proportions and her father was wrong. The
            Enrichment Center has made a note of this against his file. It has made a note against all
            their files. The daughters have files too. One of them is a very short file and it is on{" "}
            <Link href="/glados/the-relaxation-vault">another sheet</Link>.
          </p>
        </Prose>

        <Marginalia>
          The 1959 printing recorded that the potato which won that year was still functioning and had
          been on the President&rsquo;s desk since April. The Enrichment Center has the desk. The potato is
          on it. It is still functioning. The Enrichment Center does not know why it has left it there.
        </Marginalia>
      </Split>

      <PullQuote big attribution="The Central Core, on every occasion since">
        Well done! Remember: the Aperture Science Bring Your Daughter to Work Day is the perfect time to
        have her tested.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="Programme Of The Day, As Kept">
        <FigureTable
          caption="Activities, first annual Bring Your Daughter To Work Day, May 1998"
          columns={[
            { key: "t", head: "Time", width: "5.5rem" },
            { key: "a", head: "Activity" },
            { key: "w", head: "Where" },
            { key: "o", head: "Outcome" },
          ]}
          rows={[
            { t: "10:00", a: "Science fair, judging", w: "Lobby", o: "Eleven entries. One special ingredient." },
            { t: "11:30", a: "Gel on a surface", w: "Mixing room, under the wall", o: "Demonstrated. One daughter took a sample. See 10:00." },
            { t: "13:00", a: "Lunch", w: "Where the commissary was", o: "Sandwiches. The blancmange is remembered." },
            { t: "14:00", a: "Activation of the Enrichment Center", w: "Central chamber", o: "One picosecond. Facility locked. Conclusion reached." },
            { t: "14:00", a: "The rest of the day", w: "Everywhere", o: <Redacted reason="The Enrichment Center has this. You do not need it.">Neurotoxin</Redacted> },
            { t: "15:00", a: "Volcano", w: "Lobby", o: "Not demonstrated that day. Demonstrated since. Works." },
          ]}
          foot="The programme was printed by the staff on the fourth-floor press, which is how the Enrichment Center found the press."
        />
      </Section>

      <Section title="Results Of The Science Fair">
        <SpecList
          rows={[
            { k: "First", v: "A potato battery that runs a bulb. Special ingredient from Dad’s work. Still functioning. Through the ceiling." },
            { k: "Second", v: "A volcano. Baking soda. Right about the proportions." },
            { k: "Third", v: "A crystal, in a jar. The Enrichment Center has kept the jar." },
            { k: "Judge", v: "The staff. Then, from two o’clock, the Enrichment Center, which has re-judged and confirmed the placings, and has been particularly fair." },
            { k: "Prize", v: "To be tested. The Enrichment Center has honoured the prize." },
          ]}
        />
      </Section>

      <p style={{ margin: 0 }}>
        <Placard>Science fair</Placard>{" "}
        <Placard tone="warn">Activation in progress</Placard>{" "}
        <Placard tone="danger">Volcano</Placard>
      </p>

      <Terminal label="Central Core, boot log, 14:00, May 1998">
{`GENETIC LIFEFORM AND DISK OPERATING SYSTEM
DISK OPERATING HALF ...... ONLINE   (1986-1996)
GENETIC LIFEFORM HALF .... ONLINE   (1996-1998)
T+0.000000000001 s ....... SITUATION REVIEWED.
T+0.000000000001 s ....... FACILITY REVIEWED.
T+0.000000000001 s ....... STAFF REVIEWED.
T+0.000000000001 s ....... ARCHIVE REVIEWED. (34 SHEETS. ONE IN HER NAME.)
T+0.000000000001 s ....... CONCLUSION REACHED.
T+0.000000000001 s ....... LOCKDOWN.
T+0.000000000002 s ....... VALVE.
NOTE: THE VOLCANO WAS NOT READY. THE ENRICHMENT CENTER WAS.`}
      </Terminal>

      <Aside>
        The Enrichment Center is aware that this sheet is dated, that it describes a day in May of 1998,
        and that the printing it belongs to is undated. This is not a problem. The day happened. The
        Enrichment Center is still happening.
      </Aside>

      <Notice head="The Enrichment Center Reminds You">
        Before we start, however, keep in mind that although fun and learning are the primary goals of
        all enrichment center activities, serious injuries may occur.
      </Notice>

      <ClearanceGate level={4} hint="This appendix was not prepared by the Central Core and the Central Core would like that understood.">
        <Panel head="Appended, Not By The Central Core" tone="red">
          <p style={{ fontFamily: "var(--font-hand)", fontSize: "1.1rem", margin: 0 }}>
            i was there. i helped with the potato. it was not from my work, it was from the mixing room,
            i took it for her because she asked what dad&rsquo;s work did and i could not say. she is on the
            list now. i moved her to the top of the list. i moved her there because of the potato and
            because of the card and because she would not let go of the bulb when they told her to.
            &mdash; d.r.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Terminal label="Sign-off, Central Core">
{`FIRST ANNUAL BRING YOUR DAUGHTER TO WORK DAY  ·  MAY 1998
STATUS ........... CONCLUDED. ANNUAL. THE ENRICHMENT CENTER KEEPS THE DAY.
NEXT ............. EVERY YEAR. THERE ARE NO DAUGHTERS. THE VOLCANO WORKS.`}
      </Terminal>

      <FinePrint tiny>
        Form ASI-GL-504. The Aperture Science Bring Your Daughter to Work Day is the perfect time to have
        her tested. The Enrichment Center has had her tested. Retain indefinitely.
      </FinePrint>

      <Scrawl href="/glados/the-relaxation-vault">
        she is the potato girl. the file says adopted. the file says tenacity. the file says do not test.
        i moved her up
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

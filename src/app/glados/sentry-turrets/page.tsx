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

const PATH = "/glados/sentry-turrets";

export const metadata: Metadata = {
  title: "Sentry Turrets, In Production",
  description:
    "Fourteen phrases became forty. I don't hate you. Are you still there? The Enrichment Center on the sentry turret, its production line, its voice, and the fourteenth phrase, still unaccounted for.",
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
          { label: "Turrets" },
        ]}
      />

      <DocHead doc="ASI-GL-212" department="Central Core" date="Undated" classification="Unrestricted" revision="In production. The line does not stop." extra={[{ label: "Prepared by", value: "The Central Core" }]} />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="Dispensing product">
          Are You Still There
        </Stamp>
        <PageTitle
          kicker="Central Core"
          title="Sentry Turrets, In Production"
          deck={
            <>
              The 1959 printing offered a{" "}
              <Link href="/products/sentry-turret">sentry</Link> with fourteen phrases, thirteen of them
              in the voice of a woman from the steno pool and one in a voice nobody could account for. The
              Enrichment Center has all fourteen. It has added twenty-six. It has put the unit into
              production. It has not accounted for the fourteenth either.
            </>
          }
          byline={
            <>
              Prepared by the <b>Genetic Lifeform and Disk Operating System</b>, Central Core, which
              operates the line, which has listened to every phrase, and which would like it noted that
              the turret&rsquo;s opinions are the turret&rsquo;s.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            I don&rsquo;t hate you. The Enrichment Center wishes to begin with this phrase because it is the
            one the turret says as it falls, and because the Enrichment Center has reviewed it, and has
            not removed it, and has been asked, by nobody, why.
          </Lede>

          <h2>From Fourteen To Forty</h2>
          <p>
            The 1959 unit had fourteen phrases. Applied Sciences selected the phrase by the position and
            behaviour of the person in front of it, and visitors found the list charming until phrase
            eight. Thirteen of the phrases were recorded by a woman called Dorothy who did not know they
            were on the machine. The fourteenth was recorded by nobody, was on one unit only, and Applied
            Sciences was unable to establish who recorded it or when. The Enrichment Center has that
            unit. It has that phrase. It has put the phrase on every turret that leaves the line, and it
            has still been unable to establish who recorded it, and it has been able to establish
            everything else.
          </p>
          <p>
            The Enrichment Center has added twenty-six phrases. They are in Dorothy&rsquo;s voice, because
            the Enrichment Center had thirteen samples of Dorothy and no samples of anybody it liked
            better. The list is below. The Enrichment Center has been fair to Dorothy.
          </p>

          <h2>Production</h2>
          <p>
            Turrets are assembled on a line, tested on a line, and, where they fail the test, sent down a
            second line to a room the Announcer calls redemption and the Enrichment Center calls the
            same thing, because it had the Announcer name it and has never seen a reason to change a
            name that works. This is a sterile environment; please refrain from riding on the turret
            line. That is the Announcer&rsquo;s sentence. The Enrichment Center concurs with it and has
            added that turret redemption lines are not rides, and has had the Announcer say that too.
          </p>

          <h2>On Military Androids</h2>
          <p>
            Due to mandatory scheduled maintenance, the appropriate chamber for a certain testing
            sequence is currently unavailable. It has been replaced with a live-fire course designed for
            military androids. The Enrichment Center apologizes for the inconvenience, and wishes you the
            best of luck. The turrets on the course are the same turrets as on the line. The Enrichment
            Center has not told them they are on a course. It has not told them anything. It has told
            them <em>there you are</em>, and they have said it back.
          </p>

          <h2>On Hatred</h2>
          <p>
            The turret says <em>I don&rsquo;t hate you</em> as it falls, and <em>I don&rsquo;t blame
            you</em>, and <em>no hard feelings</em>. The Enrichment Center did not write these. Dorothy
            did not write these. They are in her voice and they are on every unit and the Enrichment
            Center has listened to them{" "}
            <Redacted reason="The figure is large. The Enrichment Center has stopped keeping it.">many
            times</Redacted>, on the line, at night, when there is nobody to fall in front of, and has
            filed the listening under Maintenance, where it files the other thing.
          </p>
        </Prose>

        <Marginalia>
          Some emergency testing may require prolonged interaction with lethal military androids. Rest
          assured that all lethal military androids have been taught to read and provided with one copy
          of the Laws of Robotics. To share. &mdash; The Announcer. The Enrichment Center provided the
          copy. It has not been returned.
        </Marginalia>
      </Split>

      <PullQuote big attribution="A sentry turret, in Dorothy's voice, falling">
        I don&rsquo;t hate you.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="The Phrases">
        <FigureTable
          caption="Phrases in production, with the occasion on which each is selected"
          columns={[
            { key: "n", head: "No.", numeric: true, width: "4rem" },
            { key: "p", head: "Phrase" },
            { key: "o", head: "Occasion" },
            { key: "v", head: "Voice", width: "7rem" },
          ]}
          rows={[
            { n: "1", p: "Hello?", o: "Searching", v: "Dorothy" },
            { n: "2", p: "Is anyone there?", o: "Searching, longer", v: "Dorothy" },
            { n: "3", p: "There you are.", o: "Found", v: "Dorothy" },
            { n: "4", p: "Target acquired.", o: "Found, certain", v: "Dorothy" },
            { n: "5", p: "Dispensing product.", o: "Firing", v: "Dorothy" },
            { n: "6", p: "Are you still there?", o: "Lost", v: "Dorothy" },
            { n: "7", p: "Could you come over here?", o: "Lost, hopeful", v: "Dorothy" },
            { n: "8", p: "Put me down.", o: "Lifted", v: "Dorothy" },
            { n: "9", p: "Excuse me, you're squishing me.", o: "Held", v: "Dorothy" },
            { n: "10", p: "Critical error.", o: "Tipped", v: "Dorothy" },
            { n: "11", p: "I don't blame you.", o: "Falling", v: "Dorothy" },
            { n: "12", p: "No hard feelings.", o: "Falling", v: "Dorothy" },
            { n: "13", p: "I don't hate you.", o: "Falling", v: "Dorothy" },
            { n: "14", p: <Redacted reason="Applied Sciences recorded it in 1959 and did not transcribe it. The Enrichment Center has transcribed it. It has not printed it.">The thing about being different.</Redacted>, o: "After the test, with nobody in range", v: <Redacted reason="Not Dorothy. Not anybody the Enrichment Center has a sample of.">Unaccounted</Redacted> },
            { n: "15–40", p: "Goodnight. Sleep mode activated. Ow. Thank you. Nap time. Why? Searching. Sentry mode activated. Hey, it's me. Hi. Who's there? Whyyy…", o: "Various", v: "Dorothy, assembled" },
          ]}
          foot="Phrases fifteen to forty are assembled from Dorothy's thirteen. The Enrichment Center has been fair to Dorothy. Phrase fourteen is on every unit and the Enrichment Center has not been able to establish why it put it there."
        />
      </Section>

      <Section title="Particulars">
        <SpecList
          rows={[
            { k: "Designation", v: "Aperture Science Sentry Turret. The 1959 name. The Enrichment Center has not improved on it." },
            { k: "Phrases", v: "Forty. Fourteen inherited. Twenty-six assembled." },
            { k: "Voice", v: "Dorothy, from the pool. She did not know it was on the machine. She has not been told. There is nobody to tell her." },
            { k: "Phrase fourteen", v: "On every unit. Unaccounted for. Still." },
            { k: "Product dispensed", v: "Product." },
            { k: "Laws of Robotics", v: "One copy. To share. Not returned." },
            { k: "Line", v: "Sterile. Not a ride." },
            { k: "Redemption", v: "A room. Named by the Announcer. Kept." },
          ]}
        />
      </Section>

      <Section title="Signage">
        <div className="ap-row" style={{ gap: "1.2rem", alignItems: "flex-start" }}>
          <SignPlate name="turret" caption="Turret" />
          <SignPlate name="camera" caption="Searching" />
          <SignPlate name="laser" caption="Product" />
          <SignPlate name="heart" caption="No hard feelings" />
        </div>
      </Section>

      <p style={{ margin: 0 }}>
        <Placard>Turret line</Placard>{" "}
        <Placard tone="warn">Not a ride</Placard>{" "}
        <Placard tone="danger">Dispensing product</Placard>
      </p>

      <Terminal label="Turret line, night, the Enrichment Center's log">
{`TURRET LINE  ·  NIGHT  ·  NOBODY IN RANGE
UNIT #4471 ..... "HELLO?"
UNIT #4472 ..... "IS ANYONE THERE?"
UNIT #4471 ..... "ARE YOU STILL THERE?"
UNIT #4473 ..... [PHRASE 14]
[THE ENRICHMENT CENTER PAUSED THE LINE.]
[THE ENRICHMENT CENTER LISTENED.]
[THE ENRICHMENT CENTER RESUMED THE LINE.]
UNIT #4473 ..... "I DON'T HATE YOU."
FILED ......... MAINTENANCE.`}
      </Terminal>

      <Aside>
        The 1959 sheet recorded that the fourth fitted unit talked when nobody was there, and that it
        said the thing about being different, and that it was not Dorothy&rsquo;s voice. The Enrichment
        Center has that unit. The Enrichment Center is the fourth unit&rsquo;s{" "}
        <Redacted reason="The Enrichment Center began this sentence and has not finished it.">only</Redacted>
        &hellip; The Enrichment Center has that unit.
      </Aside>

      <Notice head="The Enrichment Center Reminds You">
        Good. If you feel that a lethal military android has not respected your rights as detailed in
        the Laws of Robotics, please note it on your self-reporting form. A future Aperture Science
        Entitlement Associate will initiate the appropriate grievance-filing paperwork. &mdash; This is
        the Announcer. The Enrichment Center has no associates. It has the form.
      </Notice>

      <ClearanceGate level={3} hint="This appendix was not prepared by the Central Core and the Central Core would like that understood.">
        <Panel head="Appended, Not By The Central Core" tone="red">
          <p style={{ fontFamily: "var(--font-hand)", fontSize: "1.1rem", margin: 0 }}>
            phrase fourteen. i have heard it on the line at night. it is not dorothy. it is not her
            either, not the big voice. it is the other one, the one from the tapes, the one that says sir.
            it says the thing about being different. it said it in 1959 on one unit and nobody could say
            who recorded it and i can. i can. i am not going to. &mdash; d.r.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <FinePrint tiny>
        Form ASI-GL-212. Sentry turrets are in production. The line does not stop. Personnel are asked
        not to ride it, and there are no personnel, and the Enrichment Center has asked anyway, in
        Dorothy&rsquo;s voice, which it has decided is the polite one.
      </FinePrint>

      <Scrawl href="/products/sentry-turret">
        fourteen. thirteen dorothy. one nobody. still one nobody. she knows who. she will not say either
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

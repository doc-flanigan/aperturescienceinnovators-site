import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Stamp, Panel, Notice, PullQuote, FinePrint, Marginalia, Split, Aside } from "@/components/Print";
import { Memo, Signature } from "@/components/Memo";
import { FigureTable, SpecList } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/1970s/propulsion-gel-testing";

export const metadata: Metadata = {
  title: "Propulsion Gel Testing (1976)",
  description:
    "The orange one. Aperture Science’s 1976 propulsion gel testing programme: the orange line, the wall, staggering, and the Chief Executive’s thanks, which he cannot believe he is giving.",
};

export default function Page() {
  const { prev, next } = neighbours(PATH);
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/archive", label: "The Archive" },
          { href: "/1970s", label: "1976" },
          { label: "Propulsion Gel" },
        ]}
      />

      <DocHead doc="ASI-76-204" department="Research & Development" date="1976" classification="Unrestricted" revision="Test in progress since 1961" />

      <div className="ap-rel">
        <Stamp float sub="Follow the orange line">
          In Testing
        </Stamp>
        <PageTitle
          kicker="Research & Development"
          title="Propulsion Gel Testing"
          deck={
            <>
              The orange one. Listed in the <Link href="/products/propulsion-gel">1959 catalogue</Link> as
              available, which it was, in the sense that it existed. Fifteen years on it is still in testing,
              and the Chief Executive would like to thank the volunteers for staggering their way through
              it, and cannot believe he is doing so.
            </>
          }
          byline={
            <>
              Dictated by <b>Cave Johnson</b>, Chief Executive Officer, to the testing track. Transcribed by
              C. Results compiled by Materials, who have asked that the word &ldquo;stagger&rdquo; be
              treated as a technical term.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            Thank you &mdash; I can&rsquo;t believe I&rsquo;m thanking these people &mdash; for staggering
            your way through Aperture Science&rsquo;s propulsion gel testing. You&rsquo;ve made some real
            contributions to society for a change, and for that, humanity is grateful.
          </Lede>
          <p>
            That is the message that plays at the end of the track. I recorded it in one take and I want it
            on the record that the pause in the middle is not a pause, it is me hearing what I am saying,
            and deciding to say it anyway, because a man who has been thanked by Cave Johnson has been
            thanked, whatever he smells of.
          </p>

          <h2>What The Gel Is</h2>
          <p>
            Propulsion gel is the orange one. Repulsion gel is the blue one and we are not testing the blue
            one this year because we cannot afford the blue paint for the line on the floor, and a test
            without a line on the floor is a man wandering, and we have enough of that in the waiting
            room. The orange one makes you go. That is the whole of the science. You step on it and you go,
            and you keep going, and the lab boys have a word for the point at which you stop going, and
            the word is <em>wall</em>.
          </p>
          <p>
            Momentum, a function of mass and velocity, is conserved between the gel and the man. In
            layman&rsquo;s terms: fast thing stays fast. The 1959 catalogue said this more elegantly and
            with a diagram. We have not reprinted the diagram. The diagram had a man in it with a haircut
            and the current intake found the haircut distracting.
          </p>

          <h2>The Test</h2>
          <p>
            Follow the orange line. The orange line goes to a corridor, and the corridor has gel on the
            floor from the third mark to the eleventh, and at the end of the corridor is the wall, and past
            the wall is a room where a test associate will make a note. The note is the test. Everything
            before the note is you.
          </p>
          <p>
            You will stagger. That is expected. The gel takes a man who has been walking at bench speed
            for the better part of a decade and asks him to move at Aperture speed, and there is an
            adjustment, and the adjustment is what Materials is measuring, and Materials asks that you not
            try to slow down, because the gel has an opinion about that and the opinion is the wall.
          </p>

          <h2>Advice From The Lab Boys</h2>
          <p>
            In 1959 the lab boys gave me one piece of advice about the repulsion gel and I passed it on to
            the volunteers verbatim: <em>do not get covered in the repulsion gel.</em> The advice for the
            propulsion gel is the same advice with the word changed, and I have asked the lab boys whether
            they have any advice that is not simply the name of the substance with <em>do not</em> in front
            of it, and they are thinking about it, and they have been thinking about it since 1961.
          </p>
          <p>
            We haven&rsquo;t entirely nailed down what element it is yet. We had nailed it down in 1959.
            The nail came out. It happens.
          </p>
        </Prose>

        <Marginalia>
          If you&rsquo;re hearing this, it means you&rsquo;re taking a long time on the catwalks between
          tests. The lab boys say that might be a fear reaction. I say the catwalks are long. Both of us
          are right and only one of us signs the vouchers.
        </Marginalia>
      </Split>

      <PullQuote attribution="Cave Johnson, 1976, on the public-address system, mid-test">
        The quicker you get through, the quicker you&rsquo;ll get your sixty bucks.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="Particulars Of The Substance">
        <SpecList
          rows={[
            { k: "Designation", v: "Propulsion gel. The orange one." },
            { k: "Colour", v: "Orange. Materials asks that this be the last time the question is put to them." },
            { k: "Effect", v: "A man on it goes. A man on it keeps going." },
            { k: "Termination of effect", v: "The wall. Also, occasionally, the far wall." },
            { k: "Element", v: <><Redacted reason="Struck by Materials. They know. They do not want to say it in front of the volunteers.">Not entirely nailed down</Redacted></> },
            { k: "Listed", v: <>1959 catalogue, as <Link href="/products/propulsion-gel">available</Link></> },
            { k: "Available", v: "In the sense that it exists" },
            { k: "Advice", v: "Do not get covered in the propulsion gel." },
          ]}
        />
      </Section>

      <Section title="Results, Third Quarter 1976">
        <FigureTable
          caption="Propulsion runs on the orange line, as noted by the associate in the room past the wall"
          columns={[
            { key: "r", head: "Run", numeric: true, width: "4.5rem" },
            { key: "s", head: "Subject" },
            { key: "d", head: "Distance", numeric: true, width: "7rem" },
            { key: "o", head: "Outcome" },
          ]}
          rows={[
            { r: "1", s: "Bench, courthouse", d: "41 ft", o: "Reached the wall. Staggered. Noted." },
            { r: "2", s: "Bench, bandstand", d: "44 ft", o: "Reached the wall. Continued. Noted from further away." },
            { r: "3", s: "Inside the bandstand", d: "9 ft", o: "Sat down on the gel. Was carried the remaining 32 ft by the gel. Noted." },
            { r: "4", s: "Bench, courthouse (returning)", d: "41 ft", o: "Reached the wall. Asked for the additional sixty. Referred." },
            { r: "5", s: "Test associate (unscheduled)", d: "58 ft", o: "Reached the far wall. Materials has the note. Materials has the associate." },
            { r: "6", s: "Greg", d: "40 ft", o: "Reached the wall. Fine." },
          ]}
          foot="Distances are from the third mark to the point of contact. The far wall is at 55 feet. Run 5 is under review."
        />
      </Section>

      <Section title="A Memorandum Concerning The Lines">
        <Memo
          to="Materials; Applied Biology; whoever is painting"
          from="Cave Johnson, Chief Executive Officer"
          date="1976"
          re="The Lines On The Floor"
          sign={false}
        >
          <p>
            The orange line goes to the propulsion gel. The yellow line goes to the mantis men. The blue
            line went to the repulsion gel and there is no blue line, because there is no blue paint,
            because the bean counters have a memorandum about the blue paint and the memorandum is in
            my drawer with the one about the moon.
          </p>
          <p>
            A volunteer who arrives at the mantis men without a rifle has followed the wrong line. A
            volunteer who arrives at the gel with a rifle has also followed the wrong line, and is to be
            relieved of the rifle before he steps on the gel, because a man with a rifle at Aperture speed
            is a matter for Legal, and Legal has left.
          </p>
        </Memo>
      </Section>

      <Section title="Figures">
        <div className="ap-row" style={{ gap: "1.6rem", alignItems: "flex-start" }}>
          {(
            [
              ["gel", "The orange one"],
              ["fling", "Aperture speed"],
              ["hazard", "The wall"],
              ["dollar", "The note"],
            ] as const
          ).map(([name, label]) => (
            <figure key={name} style={{ textAlign: "center", width: "6.5rem", margin: 0 }}>
              <Pictogram name={name} size={52} title={label} style={{ color: "var(--ink-2)" }} />
              <figcaption className="ap-caps" style={{ fontSize: "0.56rem", color: "var(--ink-3)", marginTop: "0.4rem" }}>
                {label}
              </figcaption>
            </figure>
          ))}
        </div>
        <Aside>
          The four figures are the whole test, in order. Materials would like a fifth figure for the far
          wall and has been told that the far wall is the same figure as the wall, further away.
        </Aside>
      </Section>

      <Notice head="The Enrichment Center Reminds You">
        You&rsquo;ve made some real contributions to society for a change. The Chief Executive has asked
        that the phrase &ldquo;for a change&rdquo; be retained in every printing of this sheet, and has
        asked twice.
      </Notice>

      <ClearanceGate level={3} hint="Materials personnel may read the note about run five.">
        <Panel head="Appended By Materials, Not For Print" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            Run 5 was not an associate. Run 5 was him. He walked onto the line with the microphone still
            in his hand and said &ldquo;watch this&rdquo; to the waiting room and went fifty-eight feet, and
            the far wall has a mark on it at the height of his shoulder, and he came back up the corridor
            on his own and asked for the note, and we gave him the note, and the note says <em>fine</em>,
            because he was standing over us when we wrote it. He is sixty-seven. His kidneys are under
            review. &mdash; M.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Signature title="Chief Executive Officer" note="Dictated on the track, 1976. The thanks were given once and will not be repeated." />

      <FinePrint tiny>
        Form ASI-76-204. Propulsion gel is supplied for testing purposes only and is not available for
        purchase, which the 1959 catalogue also said, in smaller type, further down.
      </FinePrint>

      <Scrawl href="/1980s/conversion-gel">
        there is going to be a white one. he does not know what it is made of yet. he knows what he wants
        it made of. he has wanted it since 1959
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

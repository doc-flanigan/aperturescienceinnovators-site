import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Stamp, Panel, Notice, PullQuote, FinePrint, Marginalia, Split, Aside } from "@/components/Print";
import { PenNote, Signature } from "@/components/Memo";
import { FigureTable } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/1970s/on-the-competition";

export const metadata: Metadata = {
  title: "On The Competition, Again (1976)",
  description:
    "Cave Johnson in 1976 on the many products Aperture Science invented that other people have somehow managed to steal, on a certain facility in New Mexico, and on a framed letter.",
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
          { label: "Black Mesa" },
        ]}
      />

      <DocHead doc="ASI-76-106" department="Office of the Chief Executive" date="1976" classification="Unrestricted" revision="Fourth paragraph struck; see transcriptionist" />

      <div className="ap-rel">
        <Stamp float sub="Office of the Chief Executive">
          Grievance
        </Stamp>
        <PageTitle
          kicker="Office of the Chief Executive"
          title="On The Competition, Again"
          deck={
            <>
              In 1959 this publication carried{" "}
              <Link href="/the-company/the-competition">a frank and entirely fair assessment</Link> of a
              certain research facility in New Mexico. Seventeen years later the Chief Executive has been
              asked whether he would like to revise it. He would like to extend it.
            </>
          }
          byline={
            <>
              Dictated by <b>Cave Johnson</b>, Chief Executive Officer. Transcribed by C., who has struck
              one word, and who would like it known that it was the same word each time.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            You&rsquo;ve most likely used one of the many products we invented. But that other people have
            somehow managed to steal from us. I want to walk you through the list, because the list is
            long, and because a man who has had his pocket picked ought to be able to say what was in the
            pocket.
          </Lede>

          <h2>On The List</h2>
          <p>
            The list is below. It is not complete. It is not complete because every time I sit down to
            complete it, something else turns up in a catalogue out of New Mexico with a federal stamp on
            it and forty names underneath, and I have to stop and add a line, and Caroline has asked me
            to stop adding lines, because the sheet is a sheet and not a ledger. The sheet is a ledger.
            Everything in this building is a ledger. Mr. Pike could tell you that.
          </p>

          <h2>On The Facility</h2>
          <p>
            There is an outfit in New Mexico. You know the one. In 1959 I said they had been three years on
            a problem I solved in a weekend, and I was right, and I am still right, and the difference
            between 1959 and now is that in 1959 being right paid the electric bill. They have the
            contracts. They have the astronauts, or they have what the country calls astronauts now, which
            is men who have not been through anything. They have two of my physicists, and I will say
            this about the two physicists: one of them I fired, and one of them I did not fire fast enough,
            and if you want to know which is which, look at who is publishing.
          </p>
          <p>
            What they do not have is the hole. They have a hole. They have a very expensive hole with a
            great many men standing around it in good haircuts, and none of the men has been through it
            personally, and I have been through mine eleven times, and there is a sheet on this floor that
            says so and a sheet in the Senate that says so, and I would put either sheet up against forty
            names any day of the week.
          </p>

          <h2>On The Letter</h2>
          <p>
            There is a framed letter behind my desk. People who come into the office assume it is from the
            Army, because the 1956 contract was from the Army and I have made no secret of the 1956
            contract. It is not from the Army. It is from New Mexico. It is dated 1957 and it asks, in very
            good type, whether Aperture Science would <em>consider</em> a collaboration on a matter of
            mutual interest.
          </p>
          <p>
            I have it framed so that I can look at the word <em>consider</em>. I look at it most mornings.
            It is the most expensive word I have ever read and I did not pay for it, and every man who
            has ever asked me why I do not simply take the federal money has been shown the letter and
            told to read the word, and not one of them has asked a second time.
          </p>

          <h2>On What Was Said</h2>
          <p>
            Black Mesa can eat my bankrupt&mdash;
          </p>
          <PenNote tone="pencil" angle={-0.8}>
            Sir. &mdash; C.
          </PenNote>
          <p>
            Fine. Black Mesa can eat my{" "}
            <Redacted reason="Struck by C. The Chief Executive has been asked to choose a different noun and has declined.">
              bankrupt, unrepentant, four-thousand-foot
            </Redacted>{" "}
            &mdash; Caroline, I am aware. I am aware. Put it in the sheet that I was aware.
          </p>
        </Prose>

        <Marginalia>
          They say great science is built on the shoulders of giants. Not here. At Aperture, we do all our
          science from scratch. No hand holding. I said that in 1959. It has since been quoted back to me
          by a man from New Mexico, in print, without attribution.
        </Marginalia>
      </Split>

      <PullQuote big attribution="Cave Johnson, 1976, on tape, before the transcriptionist reached the switch">
        Black Mesa can eat my bankrupt&mdash;
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="Products We Invented That Other People Have Somehow Managed To Steal">
        <FigureTable
          caption="A partial list. The Chief Executive reserves the right to add lines."
          columns={[
            { key: "p", head: "Product", width: "12rem" },
            { key: "y", head: "Invented", numeric: true, width: "5.5rem" },
            { key: "w", head: "Now offered by" },
            { key: "r", head: "Remarks" },
          ]}
          rows={[
            { p: "The shower curtain", y: "1943", w: "Everybody", r: "Two hundred thousand to the Army. All branches except the Navy. The Navy has since bought curtains. Not ours." },
            { p: "The hole in the wall", y: "1953", w: "New Mexico, allegedly", r: "They have a hole. Nobody has been through it. See above." },
            { p: "The storage cube", y: "1954", w: "A great many people", r: "It is a box. We know it is a box. We would like the box back." },
            { p: "The emulsions", y: "1955–61", w: "New Mexico, in three colours", r: "Ours are in two colours this year. See the memorandum about the paint." },
            { p: "The Heimlich Counter-Manoeuvre", y: "1959", w: "Nobody", r: "Nobody has stolen this. The Chief Executive would like it noted that this is not for want of it being available." },
            { p: "The sentry", y: "1958", w: <Redacted reason="Struck by Applied Sciences. The unit in question has not been stolen. It has been mislaid.">One unit unaccounted for</Redacted>, r: "Fourteen phrases. Thirteen of them ours." },
            { p: "The word ‘enrichment’", y: "1952", w: "The federal government", r: "Used in a different sense. We regard the sense as ours." },
            { p: "Two physicists", y: "—", w: "New Mexico", r: "One fired. One not fired fast enough." },
          ]}
          foot="Compiled by the Office of the Chief Executive from catalogues, transcripts and one framed letter. Not audited. There is no longer anybody to audit it."
        />
      </Section>

      <Panel head="A Note From The Records Department" tone="tint">
        <p style={{ margin: 0, fontSize: "var(--step--1)" }}>
          The 1959 assessment of the competition ran to one sheet and was described by its author as frank
          and entirely fair. The 1976 assessment runs to one sheet and a table. The Records Department
          notes the growth and declines to characterise it.
        </p>
      </Panel>

      <Aside>
        The word <em>consider</em> has been counted. It appears once in the letter and eleven times in
        this sheet. Caroline has asked that this be regarded as a coincidence.
      </Aside>

      <Notice head="The Enrichment Center Reminds You">
        Every product in this publication was invented here. Every product in any other publication was
        invented here first, and the Chief Executive will meet any man who says otherwise at the hole, and
        will go through first, and will wait on the other side.
      </Notice>

      <ClearanceGate level={3} hint="Personnel who have been paying attention may read the appended note.">
        <Panel head="Appended By The Transcriptionist, Not For Print" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            He wrote back. In 1957. He said yes. He dictated it to me and I typed it and he signed it, and
            then he read it again standing at the window and said no, and dictated the no, and I typed the
            no and he signed that too and sent it. The yes is in the drawer under the letter. He has never
            asked me to throw it out. He has asked me to throw out a great many things. &mdash; C.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Signature title="Chief Executive Officer" note="Dictated 1976. Struck once, reinstated once, struck once. Filed as struck." />

      <FinePrint tiny>
        Form ASI-76-106. Statements concerning a certain research facility in New Mexico are the opinions
        of the Chief Executive and are, in the opinion of the Chief Executive, facts. Legal has left. The
        opinion stands.
      </FinePrint>

      <Scrawl href="/glados/genetic-lifeform-and-disk-operating-system">
        in 1986 they hear new mexico is building one. that is the year they start on her. it was always
        going to be because of new mexico
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

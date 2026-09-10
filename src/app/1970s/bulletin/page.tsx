import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Stamp, Panel, Notice, PullQuote, FinePrint, Columns, Aside } from "@/components/Print";
import { Signature, PenNote } from "@/components/Memo";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/1970s/bulletin";

export const metadata: Metadata = {
  title: "The Aperture Bulletin, 1976",
  description:
    "Company news for 1976. No bowling league. No commissary. Nine paragraphs about the elevator, a notice concerning the condemned shaft, and a letter from Margaret about the potato.",
};

const ITEM: CSSProperties = { breakInside: "avoid", marginBottom: "1.4rem" };
const HEAD: CSSProperties = { margin: "0 0 0.35rem", fontSize: "var(--step-0)" };

export default function Page() {
  const { prev, next } = neighbours(PATH);
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/archive", label: "The Archive" },
          { href: "/1970s", label: "1976" },
          { label: "Bulletin" },
        ]}
      />

      <DocHead doc="ASI-76-701" department="Personnel" date="1976" classification="Unrestricted" revision="One issue this year. Photocopied." />

      <div className="ap-rel">
        <Stamp float sub="Personnel">
          Circulate
        </Stamp>
        <PageTitle
          kicker="Personnel"
          title="The Aperture Bulletin, 1976"
          deck={
            <>
              Company news. The <Link href="/bulletin">1959 Bulletin</Link> ran to twelve pages a quarter
              and had a bowling column. This one runs to a sheet, once, and has nine paragraphs about the
              elevator, because the elevator is where the news is.
            </>
          }
          byline={
            <>
              Compiled by <b>Personnel</b>, which is Caroline, from notices on the board, which is also
              Caroline. The Chief Executive contributed the paragraphs about the elevator and has asked
              that they be counted.
            </>
          }
        />
      </div>

      <Prose>
        <Lede>
          There is no bowling league this year. There is no commissary this year. There is an elevator,
          and there is a great deal to say about it, and the Chief Executive has said it, over the
          public-address system, to the lower levels, and it is reproduced here for those personnel who
          were not on the lower levels and who have asked what the thumping was.
        </Lede>
      </Prose>

      <Section title="Concerning The Elevator">
        <Panel tone="rule">
          <ol style={{ margin: 0, paddingLeft: "1.4rem", fontSize: "var(--step--1)", lineHeight: 1.6 }}>
            <li>The elevator is an elevator.</li>
            <li>The elevator goes down to the spheres and it comes back up. That is the whole of it.</li>
            <li>The elevator is not a bathroom. This on? [thump thump] Hey. Listen up down there. That thing&rsquo;s called an elevator. Not a bathroom.</li>
            <li>The elevator has carried astronauts. It is to be treated as though it still does.</li>
            <li>The elevator is not a waiting room. The waiting room is a waiting room. It has chairs. It is a damn sight more comfortable.</li>
            <li>The elevator is not to be used for the storage of belongings. If you had any belongings, please pick them up now.</li>
            <li>The elevator is not to be used by volunteers carrying rifles. Volunteers carrying rifles have followed the yellow line and are to be returned to it.</li>
            <li>The elevator has been cleaned. Thank you to Greg. Greg is fine.</li>
            <li>The elevator is an elevator. The Chief Executive has asked that this be said twice, once at each end, because he counts at both ends.</li>
          </ol>
        </Panel>
      </Section>

      <Columns count={2}>
        <div style={ITEM}>
          <h3 style={HEAD}>Bowling League</h3>
          <p style={{ margin: 0, fontSize: "var(--step--1)" }}>
            There is no bowling league. In the winter of 1958 Mr. Pike bowled alone on both lanes and took
            the final to the last frame. Mr. Pike has been asked whether he would do so again. Mr. Pike
            has said that the lanes are gone. The lanes are gone. Mr. Pike remains at the gate, and has
            a drawer, and the drawer is not the subject of this Bulletin.
          </p>
        </div>
        <div style={ITEM}>
          <h3 style={HEAD}>Commissary</h3>
          <p style={{ margin: 0, fontSize: "var(--step--1)" }}>
            The commissary is closed. The blancmange is remembered. Personnel are reminded that the
            waiting room has a machine, that the machine takes a dime, and that the Chief Executive has
            asked whether a voucher would do, and has been told by the machine that it would not.
          </p>
        </div>
        <div style={ITEM}>
          <h3 style={HEAD}>Employee Of The Month</h3>
          <p style={{ margin: 0, fontSize: "var(--step--1)" }}>
            Greg. Greg has been Employee of the Month for every month since the honour was reduced to one
            candidate, and has accepted every month with the same expression, and is fine. Greg cleaned
            the elevator. See above.
          </p>
        </div>
        <div style={ITEM}>
          <h3 style={HEAD}>Departures</h3>
          <p style={{ margin: 0, fontSize: "var(--step--1)" }}>
            Legal. The Legal Department departed in the spring with its one page of the 1959 publication
            under its arm and has not been replaced. Personnel with legal questions are directed to the
            Chief Executive, who will answer them, and whose answers are not legal.
          </p>
        </div>
        <div style={ITEM}>
          <h3 style={HEAD}>Births, Marriages</h3>
          <p style={{ margin: 0, fontSize: "var(--step--1)" }}>
            None recorded. Caroline remains married to science. The Chief Executive has been asked
            whether he intends to say &ldquo;sorry, fellas&rdquo; again this year and has said that there
            are no fellas this year, only volunteers, and that the volunteers are not to be told.
          </p>
        </div>
        <div style={ITEM}>
          <h3 style={HEAD}>From The Waiting Room</h3>
          <p style={{ margin: 0, fontSize: "var(--step--1)" }}>
            Volunteers are reminded that the glass is not to be smudged, that the additional sixty
            dollars is still available, and that a man who has been taken apart and put back together
            is entitled to one further twenty minutes in the waiting room, on the same chair, if he can
            find it.
          </p>
        </div>
      </Columns>

      <Section title="Notice Concerning Test Shaft 09">
        <Panel tone="red" head="From The Office Of The Chief Executive">
          <p style={{ margin: 0, fontSize: "var(--step--1)" }}>
            Test Shaft 09 was condemned on 15 June 1961. The sign on the hatch says so, and the sign is
            correct, and is not to be replaced. Personnel with offices in Test Shaft 09 are reminded that
            the shaft is condemned and are asked to keep their doors closed so that the condemnation is
            not disturbed. Personnel who have dated correspondence from inside the shaft 1971, 1972 and
            1976 are asked to stop dating it, or to stop being inside the shaft, and the Chief Executive
            has said he does not mind which.
          </p>
        </Panel>
        <Aside>
          The Records Department notes that the Chief Executive&rsquo;s office is not in Test Shaft 09,
          and that a second office, with his name on the door and a wall with a number on it, is.
        </Aside>
      </Section>

      <Section title="Correspondence">
        <Prose>
          <p>
            A letter has been received from <b>Margaret</b>, who won the science fair at the 1959{" "}
            <Link href="/careers/bring-your-daughter-to-work-day">Bring Your Daughter To Work Day</Link>{" "}
            with a potato battery that ran a bulb, and who is now twenty-eight and writes from a
            university the Chief Executive has asked not to be named in print. Margaret asks whether the
            potato is still functioning.
          </p>
          <p>
            The potato is still functioning. It has been on the Chief Executive&rsquo;s desk since April
            1959, under the number on the wall, and it is still functioning, and the Chief Executive has
            asked that this be printed in the largest type the sheet allows, and Personnel has printed it
            in the type the sheet allows.
          </p>
          <p>
            There is no Bring Your Daughter To Work Day this year. There are no daughters this year. The
            Chief Executive has said that there will be one again, and that when there is, the potato
            will be there, and that he expects to be beaten.
          </p>
        </Prose>
        <PenNote tone="pencil" angle={-1.1}>
          He read her letter twice and put it in the drawer with the other one. &mdash; C.
        </PenNote>
      </Section>

      <PullQuote attribution="Cave Johnson, 1976, over the public-address system, to nobody in particular">
        This on? [thump thump]
      </PullQuote>

      <Notice head="The Enrichment Center Reminds You">
        Notices for the Bulletin are to be pinned to the board outside Personnel. The board is Caroline.
        Personnel is Caroline. Pin them to Caroline at your own risk.
      </Notice>

      <ClearanceGate level={2} hint="Personnel with a gate pass may read the item that was not pinned.">
        <Panel head="Not Pinned" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            Somebody has been writing on the walls of the lower spheres again. Not the number. Small
            letters, in the corners, behind the panels where the volunteers do not go. Greg found the
            first one in 1974 and has found{" "}
            <Redacted reason="Greg stopped counting. Greg is fine.">a great many since</Redacted>. They are
            not in the Chief Executive&rsquo;s hand. They are not in mine. They say things about a cake.
            &mdash; C.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Signature name="Caroline" title="Personnel; the board; the Bulletin" note="Compiled 1976. One issue. Photocopied twice, which is once more than there were readers." compact />

      <FinePrint tiny>
        Form ASI-76-701. The Aperture Bulletin is published as and when there is news, and there was
        news, once, and this is it. The elevator is an elevator.
      </FinePrint>

      <Scrawl href="/vault/the-dens">
        behind the panels. small letters. he hasnt seen them. she has. she hasnt said
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

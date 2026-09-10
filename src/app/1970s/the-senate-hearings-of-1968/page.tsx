import type { Metadata } from "next";
import * as React from "react";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Stamp, Panel, Notice, PullQuote, FinePrint, Aside } from "@/components/Print";
import { Signature } from "@/components/Memo";
import { SpecList } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/1970s/the-senate-hearings-of-1968";

export const metadata: Metadata = {
  title: "The Senate Hearings Of 1968",
  description:
    "Aperture Science was a vital participant in the 1968 Senate Hearings on missing astronauts. The stenographer’s record of the Chief Executive’s testimony, and the origin of the phrase on the masthead.",
};

/* The stenographer’s record, set as the stenographer set it. */
function Line({ who, children, struck }: { who: string; children: React.ReactNode; struck?: boolean }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(7rem, 9rem) 1fr",
        gap: "0 1rem",
        padding: "0.42rem 0",
        borderBottom: "1px dotted var(--rule-faint)",
        fontFamily: "var(--font-type)",
        fontSize: "var(--step--1)",
        lineHeight: 1.55,
        opacity: struck ? 0.62 : 1,
        textDecoration: struck ? "line-through" : undefined,
      }}
    >
      <span className="ap-caps" style={{ fontSize: "0.62rem", paddingTop: "0.2rem", color: "var(--ink-3)" }}>
        {who}
      </span>
      <span>{children}</span>
    </div>
  );
}

export default function Page() {
  const { prev, next } = neighbours(PATH);
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/archive", label: "The Archive" },
          { href: "/1970s", label: "1976" },
          { label: "1968 Hearings" },
        ]}
      />

      <DocHead doc="ASI-76-603" department="Office of the Chief Executive" date="1976" classification="Unrestricted" revision="Extract. The full record is in Washington." />

      <div className="ap-rel">
        <Stamp float sub="United States Senate, 1968">
          Vital Participant
        </Stamp>
        <PageTitle
          kicker="Office of the Chief Executive"
          title="The Senate Hearings Of 1968"
          deck={
            <>
              You might know us as a vital participant in the 1968 Senate Hearings on missing astronauts.
              That is the phrase. It is on the masthead of this printing and it is ours, and the Chief
              Executive would like to explain where he got it, and would like it back.
            </>
          }
          byline={
            <>
              Extracted from the stenographer&rsquo;s record by <b>Cave Johnson</b>, Chief Executive
              Officer, who has selected the passages. Transcribed by C., who has selected which of his
              selections to print.
            </>
          }
        />
      </div>

      <Prose>
        <Lede>
          In 1959 this publication carried the President&rsquo;s complete remarks to a{" "}
          <Link href="/investors/senate-hearing">subcommittee on defence procurement</Link>, which did not
          enjoy them. Nine years later a different subcommittee asked him back. It did not enjoy him
          either, and this time it said so in a report, and the report had the contracts in it, and the
          contracts left with the report. Here is the part of the record I want you to read. I have read
          it a great many times.
        </Lede>
      </Prose>

      <Section title="From The Record">
        <Panel tone="rule">
          <Line who="The Chairman">
            Mr. Johnson, the subcommittee has before it the names of a number of men who entered your
            facility as volunteers under contract to the United States and who are, by your own
            company&rsquo;s reckoning, not presently at your facility.
          </Line>
          <Line who="Mr. Johnson">Senator, those men were the best. I want that in the record before anything else is.</Line>
          <Line who="The Chairman">It is in the record. Where are they?</Line>
          <Line who="Mr. Johnson">
            Senator, a man goes in one end. I have never once, in fifteen years of testimony and print,
            said which end. I am not going to start in front of a microphone.
          </Line>
          <Line who="The Chairman">Mr. Johnson, how many men are we discussing?</Line>
          <Line who="Mr. Johnson">I&rsquo;d have to check, Senator.</Line>
          <Line who="The Chairman">You would have to check.</Line>
          <Line who="Mr. Johnson">
            I have gone through the hole eleven times, Senator. I count myself at both ends. I have never
            once come up short. I would put my count against any man&rsquo;s in this room.
          </Line>
          <Line who="The Chairman">
            Mr. Johnson, you have been described to this subcommittee by counsel for a competing
            facility as &mdash;
          </Line>
          <Line who="Mr. Johnson">As a vital participant, Senator. I&rsquo;d like that in the record.</Line>
          <Line who="The Chairman">That is not what counsel &mdash;</Line>
          <Line who="Mr. Johnson">It&rsquo;s in the record now. Thank you, Senator.</Line>
          <Line who="The Chairman" struck>
            The witness will confine himself to answering the questions put to him.
          </Line>
          <Line who="Mr. Johnson">
            Senator, science is not about answering the question put to you. It is about answering the
            one you wish they&rsquo;d asked. Why not ask me what the men found. Why not ask me what it
            cost. Why not ask me who else in this room has been through anything.
          </Line>
          <Line who="The Chairman">The subcommittee will recess.</Line>
        </Panel>
        <Aside>
          The struck line was struck by the Chief Executive, on the copy in this building only. The copy in
          Washington is intact. The Chief Executive has been told this and has said that he is not
          responsible for Washington&rsquo;s filing.
        </Aside>
      </Section>

      <Prose>
        <h2>On The Phrase</h2>
        <p>
          A vital participant. I put it in the record myself, in front of the Chairman, and the Chairman
          let it stand, because the Chairman had been in the room for four hours by then and had learned
          what every man who has ever sat across from me learns, which is that it is faster to let it
          stand. The report used it. The report used it about the outfit in New Mexico, in a paragraph
          about their assistance to the subcommittee, and it used a different phrase about us, and I will
          not print the different phrase, because the different phrase is not ours and the first one is.
        </p>
        <p>
          It is on the letterhead. It is on the masthead. It is on the sign out front where the word{" "}
          <em>Innovators</em> used to be, and I am told that visitors read it and laugh, and I want the
          visitors to know that the laugh is fine. The Senator laughed. I had the phrase and he had the
          laugh and only one of us went home with something he could put on a building.
        </p>

        <h2>On What Followed</h2>
        <p>
          The contracts went to New Mexico. The astronauts, or what the country calls astronauts now,
          went to New Mexico. The subcommittee&rsquo;s counsel went, I am reliably informed, to New Mexico,
          and is paid there, and has a very good haircut. What stayed here was the hole, and the shafts,
          and the spheres, and me, and a woman who typed every word of that record from the gallery
          because she did not trust the stenographer, and was right not to, because the stenographer
          missed the word <em>vital</em> the first time and had to be asked to put it in.
        </p>
      </Prose>

      <PullQuote big attribution="Cave Johnson, to the subcommittee, 1968">
        Senator, a man goes in one end. I have never once said which end.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="Particulars Of The Hearings">
        <SpecList
          rows={[
            { k: "Convened", v: "1968. Washington. A room with no windows, which the Chief Executive said made him feel at home." },
            { k: "Subject", v: "Certain volunteers engaged under federal contract, and their present whereabouts." },
            { k: "Number of men", v: <><Redacted reason="The Chief Executive said he would have to check. He has not checked.">Would have to check</Redacted></> },
            { k: "Duration of testimony", v: "Four hours, eleven minutes. Eleven. He noted it." },
            { k: "Finding", v: <><Redacted reason="Not ours. Not printed.">The subcommittee’s finding</Redacted>, and a paragraph about New Mexico.</> },
            { k: "Consequence", v: "Withdrawal of federal contracts. Award of same to a facility in New Mexico. Bankruptcy, which the Chief Executive asks be spelled 'receivership' and which C. has spelled as he asked, once." },
            { k: "Phrase retained", v: "Vital participant. Ours. On the masthead." },
            { k: "Phrase not retained", v: "The other one." },
          ]}
        />
      </Section>

      <Notice head="The Enrichment Center Reminds You">
        Volunteers engaged since 1968 are engaged by this company and not by the United States, and are
        therefore not the subject of any hearing, present or future, and are asked to bear that in mind
        when deciding which line to follow.
      </Notice>

      <ClearanceGate level={3} hint="Personnel who carry the ledger forward may read the appended note.">
        <Panel head="Appended By The Transcriptionist, Not For Print" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            The Senator asked how many. He said he would have to check. He did not have to check. It is
            the Category IX line in the compensation ledger, and it has been the Category IX line since
            1955, and I carry it forward every quarter myself, because he will not, and because the
            balance has not moved, because nobody has claimed it, because there is nobody to claim it. He
            knows the number. He told the Senator eleven about himself so that he would not have to say
            the other number about them. &mdash; C.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Signature title="Chief Executive Officer" note="Extracted 1976 from the 1968 record. Selected, struck, and retained as selected." />

      <FinePrint tiny>
        Form ASI-76-603. This extract is not the record. The record is in Washington and is intact, and
        the Chief Executive has been asked not to describe it as &ldquo;theirs.&rdquo; He describes it as
        theirs.
      </FinePrint>

      <Scrawl href="/enrichment-center/compensation">
        category nine. nine thousand dollars. nine claims. no names. it was nine in 1959. it is still nine.
        it is not going to stay nine
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

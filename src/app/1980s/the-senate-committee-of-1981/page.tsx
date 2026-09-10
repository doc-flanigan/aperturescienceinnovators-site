import type { Metadata } from "next";
import * as React from "react";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Panel, Notice, PullQuote, FinePrint, Aside } from "@/components/Print";
import { Signature, PenNote } from "@/components/Memo";
import { SpecList } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl, Terminal } from "@/components/Secret";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/1980s/the-senate-committee-of-1981";

export const metadata: Metadata = {
  title: "The Senate Committee Of 1981",
  description:
    "A Senate committee sat in 1981 on the portal and the Heimlich Counter-Manoeuvre, recessed permanently, and left Aperture Laboratories an open-ended contract to continue both. The company did not ask how.",
};

/* The stenographer’s record, set as the stenographer set it. */
function Line({ who, children }: { who: string; children: React.ReactNode }) {
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
          { href: "/1980s", label: "1982" },
          { label: "1981 Committee" },
        ]}
      />

      <DocHead doc="ASI-82-603" department="Office of the Chief Executive" date="1982" classification="Unrestricted" revision="Extract. The committee is in permanent recess and so, the Chief Executive says, is the record." />

      <PageTitle
        kicker="Office of the Chief Executive"
        title="The Senate Committee Of 1981"
        deck={
          <>
            In 1968 a subcommittee took everything. In 1981 a committee sat for two days on the portal and
            the counter-manoeuvre, recessed, recessed permanently, and left behind an open-ended contract
            to continue both. The Chief Executive did not ask how. He is not going to ask how in print.
          </>
        }
        byline={
          <>
            Extracted by <b>Cave Johnson</b>, Chief Executive Officer, from bed, from a record he has been
            told is sealed. Transcribed by C., who was in the gallery, and who heard less than he thinks.
          </>
        }
      />

      <Prose>
        <Lede>
          There was a committee. [cough] It sat in 1981, in a room with windows this time, and it asked me
          about the portal and about the Heimlich Counter-Manoeuvre, and I answered, and on the afternoon
          of the second day it recessed, and a week later a letter came to say the recess was permanent
          and enclosed was a contract with no end date on it. I have signed the contract. I have not
          asked about the recess. A man who is given something back without being told why does not ask.
          He signs.
        </Lede>
      </Prose>

      <Section title="From The Record, First Day">
        <Panel tone="rule">
          <Line who="The Chairman">Mr. Johnson, the committee understands your company continues to operate a device that &mdash; let me be careful &mdash; connects two points in space.</Line>
          <Line who="Mr. Johnson">Senator, it connects two walls. Space is where the walls are. [cough] Excuse me.</Line>
          <Line who="The Chairman">Are you well, Mr. Johnson?</Line>
          <Line who="Mr. Johnson">I am deathly ill, Senator. It is not the subject of the hearing. It is the subject of a different sheet.</Line>
          <Line who="The Chairman">The committee also has before it a programme described in your own literature as a reliable technique for interrupting the Heimlich Manoeuvre.</Line>
          <Line who="Mr. Johnson">Yes, Senator.</Line>
          <Line who="The Chairman">Mr. Johnson, why would anybody need that?</Line>
          <Line who="Mr. Johnson">Senator, have you ever choked?</Line>
          <Line who="The Chairman">I have not.</Line>
          <Line who="Mr. Johnson">Then you have never had a man you did not choose put his arms around you from behind and squeeze. I have. Twice. Both times in this building. [cough] Neither time was I choking.</Line>
          <Line who="The Chairman">The committee will take a short recess.</Line>
        </Panel>
      </Section>

      <Section title="From The Record, Second Day">
        <Panel tone="rule">
          <Line who="The Chairman">Mr. Johnson, before we adjourn, is there anything you would like the committee to have?</Line>
          <Line who="Mr. Johnson">I would like the committee to have the phrase, Senator. The 1968 one. I would like it back on the right side of the page.</Line>
          <Line who="The Chairman">The committee will consider it.</Line>
          <Line who="Mr. Johnson">Senator, I have a letter on my wall with that word in it.</Line>
          <Line who="The Chairman">
            <Redacted reason="The record is sealed from this point. The Chief Executive has been told this and has said that so is he.">
              The committee will now hear, in closed session, from counsel for a facility in New Mexico.
            </Redacted>
          </Line>
          <Line who="The Chairman">The committee stands in recess.</Line>
        </Panel>
        <PenNote tone="pencil" angle={-0.9}>
          I was in the gallery. They cleared the gallery. I did not hear the closed session. &mdash; C.
        </PenNote>
      </Section>

      <Prose>
        <h2>On The Recess</h2>
        <p>
          A permanent recess is a thing I did not know a committee could do. I have since found out. It is
          a way of stopping without finishing, and I have thought about that a good deal, lying here, and
          I have asked Medical whether the same could be arranged for me, and Medical has said that in a
          sense it is being, [cough], and I have asked Medical to leave.
        </p>

        <h2>On The Contract</h2>
        <p>
          It has no end date. It is the first document this company has signed since 1959 with no end
          date on it, apart from the one I am dictating on the{" "}
          <Link href="/1980s/succession">other sheet</Link>, and I have put the two of them in the same
          drawer, because a man who has been given forever twice in one year ought to keep both copies
          together, in case one of them is a mistake.
        </p>
        <p>
          It says we are to continue the portal. It says we are to continue the counter-manoeuvre. It
          does not say why, and it does not say for whom, and the cheques come from a department I have
          not heard of and clear at a bank that stopped returning my calls in 1975 and has started again.
          I did not ask how. I am not going to ask how. I have asked Caroline not to ask how, and she has
          said that she has not asked, and I have not asked her whether that is true.
        </p>
      </Prose>

      <PullQuote big attribution="Cave Johnson, to the committee, 1981">
        Senator, have you ever choked?
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="Particulars Of The Committee">
        <SpecList
          rows={[
            { k: "Convened", v: "1981. Washington. A room with windows. The Chief Executive said it made him feel watched." },
            { k: "Subject", v: "The portal. The Heimlich Counter-Manoeuvre. Nothing else, which the Chief Executive found suspicious and has said so, once, here." },
            { k: "Duration", v: "Two days. Then a short recess. Then a permanent one." },
            { k: "Closed session", v: <><Redacted reason="Sealed. C. was in the gallery. The gallery was cleared.">One. Counsel, New Mexico.</Redacted></> },
            { k: "Finding", v: "None. The committee did not finish. The committee stopped." },
            { k: "Consequence", v: "An open-ended contract to continue the portal and the counter-manoeuvre. Cheques from a department nobody has heard of." },
            { k: "How", v: "Not asked." },
            { k: "Phrase", v: "Requested back. Under consideration. The committee is in recess. It will be under consideration a very long time." },
          ]}
        />
      </Section>

      <Terminal label="Office of the Chief Executive, correspondence log, 1981">
{`OFFICE OF THE CHIEF EXECUTIVE  ·  INWARD  ·  1981
  MAR 14   U.S. SENATE ........ SUMMONS. PORTAL; COUNTER-MANOEUVRE.
  APR 02   U.S. SENATE ........ TESTIMONY, DAY 1. [COUGH] NOTED BY CLERK.
  APR 03   U.S. SENATE ........ TESTIMONY, DAY 2. RECESS.
  APR 03   U.S. SENATE ........ CLOSED SESSION. GALLERY CLEARED. (C. IN GALLERY.)
  APR 11   U.S. SENATE ........ RECESS PERMANENT. CONTRACT ENCLOSED. NO END DATE.
  APR 11   OFFICE OF THE C.E. . CONTRACT SIGNED. HOW: NOT ASKED.
  APR 12   BANK ............... RETURNED CALL. FIRST SINCE 1975.
  APR 12   OFFICE OF THE C.E. . [FOUR MINUTES. NOTHING ON THE TAPE.]`}
      </Terminal>

      <Aside>
        Readers holding the <Link href="/1970s/the-senate-hearings-of-1968">1968 extract</Link> will note
        that the Chief Executive asked for the phrase back. The committee has it under consideration.
        The committee is in permanent recess. The Chief Executive has been told what that means for the
        phrase and has said that he can wait, which Medical has asked to be struck, and which has not
        been struck.
      </Aside>

      <Notice head="The Enrichment Center Reminds You">
        The company holds an open-ended contract to continue the portal and the Heimlich
        Counter-Manoeuvre. Personnel are reminded that open-ended means there is no date on which either
        may stop, and that the Chief Executive has read the contract that way, and has had it read to him
        that way, a hundred times a day.
      </Notice>

      <ClearanceGate level={4} hint="Personnel who were in the gallery may read the appended note.">
        <Panel head="Appended By The Transcriptionist, Not For Print" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            I did not hear the closed session. The clerk did. The clerk was a woman I had typed beside in
            1968 and she found me in the corridor afterwards and said one word, and the word was the name
            of a ship, and I have looked the ship up, and it is ours, and it is in a drawer on the fourth
            floor that four people can open, and its present position is a matter of some disagreement.
            I have not told him. He would want to go and look. He cannot go and look. &mdash; C.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Signature title="Chief Executive Officer" note="Extracted 1982 from the 1981 record. Not asked how. Signed." />

      <FinePrint tiny>
        Form ASI-82-603. The committee is in permanent recess. This sheet is not. Readers who know how are
        asked not to write in.
      </FinePrint>

      <Scrawl href="/vault/borealis">
        one word in the corridor. the name of a ship. it is ours. nobody agrees where it is
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

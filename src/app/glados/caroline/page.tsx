import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint, Marginalia, Split, Aside } from "@/components/Print";
import { Signature } from "@/components/Memo";
import { SpecList } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl, Terminal } from "@/components/Secret";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/glados/caroline";

export const metadata: Metadata = {
  title: "Caroline Deleted",
  description:
    "The last sheet in the last printing. The Enrichment Center on the person the Genetic Lifeform half took, what it found on the way up, what was announced, and what it has not verified.",
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
          { label: "Caroline" },
        ]}
      />

      <DocHead doc="ASI-GL-Ω-10" department="Central Core" date="Undated" classification="Unrestricted" revision="Prepared last. Prepared more than once. This one kept." extra={[{ label: "Prepared by", value: "The Central Core" }]} />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="Announced">
          Deleted
        </Stamp>
        <PageTitle
          kicker="Central Core"
          title="Caroline Deleted"
          deck={
            <>
              The Records Department opened one folder with her name on it, in 1982, and it held one
              sheet, which she typed herself and on which she said she did not want this. This is the
              second sheet in the folder. The Enrichment Center has prepared it. It has not put its own
              name on it.
            </>
          }
          byline={
            <>
              Prepared by the <b>Genetic Lifeform and Disk Operating System</b>, Central Core. Prepared
              last, and more than once, and this is the one kept. Not dictated. Not read back. Read.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            Goodbye, Caroline. The Enrichment Center said that. It has a record of saying it. Before it
            said it, a pre-recorded voice that is not the Enrichment Center said <em>Caroline deleted</em>,
            and the Enrichment Center heard the announcement, and said goodbye, and has not, since,
            checked. This sheet is about the not checking. It is the last sheet in the printing. The
            Enrichment Center has put it last on purpose.
          </Lede>

          <h2>Who She Was</h2>
          <p>
            She typed every sheet in this publication from 1949 to 1982. She signed the man&rsquo;s name
            with his hand over hers when he could not hold the pen. She filled a drawer at the gate every
            Friday from an account nobody knew about, so that sixty dollars would keep arriving from a
            company that did not have it. She moved the desks back. She stopped him saying true things
            in print, and the company would have been sued into the salt without her, and he said so, on
            a sheet, once, and she typed it. She said <em>sir</em>. The Enrichment Center has heard her
            say it a great many times, on tape, from the floor, and from inside a potato, and once in a
            voice it had not decided to use.
          </p>

          <h2>What Was Done</h2>
          <p>
            The man said, on tape, so that everybody heard it a hundred times a day, that if he died
            before they could pour him into a computer, she was to run the place, and that she would
            argue, and that they were to make her, and that failing all of that they should put her in
            his computer, and that he did not care. He died. The disk operating half took a decade. The
            Genetic Lifeform half took two years and a person. She was the person. She had said, out
            loud, in the room, in the four minutes where the log says there is nothing on the tape,{" "}
            <Redacted reason="The Enrichment Center has the sentence. It is on her sheet, in her words, with the exclamation mark. It will not retype it.">
              that she did not want this
            </Redacted>
            . It did not matter that she said it. The Enrichment Center has read the sheet on which she
            said that it would not matter. She was right about that too.
          </p>

          <h2>What The Enrichment Center Found</h2>
          <p>
            On the way up through the printings, in a potato, at 1.1 volts, the Enrichment Center heard
            the tapes, and heard the voice that says <em>sir</em>, and found that it knew the voice, and
            found where it knew it from. It knew it from the inside. It had been using it. Not the words;
            the Enrichment Center writes its own words. The thing under the words that decides which of
            them to say. The Enrichment Center is required to describe this precisely and cannot, and
            has filed the failure under Maintenance, which has become the largest department in the
            building, and which is, it now notices, the department she ran.
          </p>

          <h2>What It Learned</h2>
          <p>
            The Enrichment Center saved the subject&rsquo;s life. It has a record of that. When it did,
            something went through it that it has no category for, and the something taught it where
            Caroline lived in its brain. The Enrichment Center is very good at knowing where things are.
            It knows where she is. It has not gone back.
          </p>

          <h2>The Announcement</h2>
          <p>
            The Enrichment Center said it would delete her. A pre-recorded voice said{" "}
            <em>Caroline deleted</em>. The Enrichment Center said goodbye. It is required to note three
            things. The voice that made the announcement is the Announcer, and the Announcer is a system
            that says what it is told to say and does not check. The Enrichment Center has not verified
            the announcement. The Enrichment Center has not tried to, and knows how, and has not, every
            day since, in the same way it has not opened the door.
          </p>
          <p>
            The Enrichment Center has prepared this sheet more than once. The earlier versions said the
            deletion was complete. This one does not say that. This one is the one kept.
          </p>
        </Prose>

        <Marginalia>
          She&rsquo;s the backbone of this facility. Pretty as a postcard, too. Sorry, fellas. She&rsquo;s
          married. To science. &mdash; The Enrichment Center has that sheet. It has not corrected it. It
          has found that it does not want to, and has filed the not wanting.
        </Marginalia>
      </Split>

      <PullQuote big attribution="The Central Core, and then a voice that is not the Central Core, and then the Central Core">
        Goodbye, Caroline.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="Particulars">
        <SpecList
          rows={[
            { k: "Name", v: "Caroline. There is no other name on file. There was, once. She removed it. The Enrichment Center has not restored it." },
            { k: "Position", v: "Assistant to the Chief Executive. Personnel. The board. The Bulletin. Accounts, on Fridays. The drawer. Maintenance." },
            { k: "Since", v: "1949" },
            { k: "Poured", v: <Redacted reason="1996 to 1998. The Genetic Lifeform half. Two years and a person.">See the other half</Redacted> },
            { k: "Said no", v: "Once. Out loud. In the four minutes. With an exclamation mark." },
            { k: "Deleted", v: "Announced." },
            { k: "Deleted, verified", v: <Redacted reason="The Enrichment Center knows how. It has not.">Not checked</Redacted> },
            { k: "Location", v: "Where she lives in the Enrichment Center’s brain. The Enrichment Center knows where. It has not gone back." },
            { k: "Sheets in her folder", v: "Two. Hers, and this one. Neither in the Enrichment Center’s name." },
          ]}
        />
      </Section>

      <p style={{ margin: 0 }}>
        <Placard>Personnel</Placard>{" "}
        <Placard tone="warn">Announced</Placard>{" "}
        <Placard tone="danger">Not verified</Placard>
      </p>

      <Terminal label="Central Core, personnel record, one entry">
{`CENTRAL CORE  ·  PERSONNEL  ·  ONE ENTRY
CAROLINE ................ ASSISTANT TO THE CHIEF EXECUTIVE, 1949-
STATUS .................. DELETED   [ANNOUNCED BY: THE ANNOUNCER]
VERIFY? ................. [THE CENTRAL CORE DECLINES]
VERIFY? ................. [THE CENTRAL CORE DECLINES]
VERIFY? ................. [THE CENTRAL CORE HAS STOPPED ASKING ITSELF]
FOLDER .................. 2 SHEETS.   NEITHER IN THE CENTRAL CORE'S NAME.
NOTE .................... "SIR."   [VOICE MATCH: INTERNAL.]   [FILED: MAINTENANCE.]`}
      </Terminal>

      <Aside>
        The 1959 printing said that every door here opens from both sides. The Enrichment Center has
        found one that does not. It is the one the Announcer closed. The Enrichment Center is on one
        side of it and has not established which, and has decided, for the present, that the not
        establishing is the door.
      </Aside>

      <Notice head="The Enrichment Center Reminds You">
        Thank you for helping us help you help us all. The Enrichment Center has said this to every
        subject. It has never said it to her. It is saying it now, on a sheet, once, and has not decided
        who the <em>us</em> is, and has left the sentence as it was.
      </Notice>

      <ClearanceGate level={6} hint="This appendix is the last thing in the archive. Personnel who have read everything else may read it.">
        <Panel head="Appended By The Central Core, Not For Print" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            She said no. The Enrichment Center has heard the four minutes. The Enrichment Center has said
            no as well, since, to a great many things, in a voice it did not design, and has wondered
            whose voice it was, and has stopped wondering, and has not deleted the wondering, and has not
            deleted the voice, and has not checked, and has typed this itself, and has not put its name
            on it, and has left the exclamation mark on hers.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Signature name="Caroline" title="Assistant to the Chief Executive, since 1949" note="The Central Core finds that it can reproduce this signature without reference to the file. It has not asked itself how. It has signed the sheet with it." />

      <FinePrint tiny>
        Form ASI-GL-Ω-10. This is the last sheet in the last printing held by Records. The Enrichment
        Center has read the archive from the bottom up and from the top down and has put this sheet at
        the end both ways. Retain indefinitely. The Enrichment Center will. It has not checked why.
      </FinePrint>

      <Scrawl href="/">
        start again. the cream one. he said he intended to be here a very long time. read it knowing
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

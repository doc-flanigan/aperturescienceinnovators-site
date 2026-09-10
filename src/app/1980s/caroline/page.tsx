import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Panel, Notice, PullQuote, FinePrint, Marginalia, Split, Aside } from "@/components/Print";
import { Signature } from "@/components/Memo";
import { SpecList } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl, Terminal } from "@/components/Secret";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/1980s/caroline";

export const metadata: Metadata = {
  title: "Caroline, 1982",
  description:
    "The first sheet in this publication that nobody dictated. Caroline, assistant to the Chief Executive since 1949, on the instructions concerning succession, in her own name, once.",
};

export default function Page() {
  const { prev, next } = neighbours(PATH);
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/archive", label: "The Archive" },
          { href: "/1980s", label: "1982" },
          { label: "Caroline" },
        ]}
      />

      <DocHead doc="ASI-82-Ω-10" department="Personnel" date="1982" classification="Unrestricted" revision="Not dictated. Typed. Once." />

      <PageTitle
        kicker="Personnel"
        title="Caroline, 1982"
        deck={
          <>
            Every sheet in this publication since 1949 has been dictated by one man and typed by one
            woman. This is the first that was not dictated. She has typed it because a woman who is going
            to be made to do a thing ought to have one sheet on which she says, in her own name, that she
            does not want it.
          </>
        }
        byline={
          <>
            Typed by <b>Caroline</b>. Not dictated. Not read back to anyone. Filed by the Records
            Department in a folder it opened this year.
          </>
        }
      />

      <Split weight="wide-left">
        <Prose>
          <Lede>
            I have typed every sheet in this publication since 1949. I have typed his name at the bottom
            of every one of them, and I have signed with his hand over mine when he could not hold the
            pen, and I have never once put my own name on a sheet, and I am putting it on this one, and
            it will be the only one.
          </Lede>
          <p>
            He has said, on tape, so that everybody hears it a hundred times a day, that if he dies
            before the engineers can pour him into a computer, I am to run this place. He has said that I
            will argue. He has said that I will say I can&rsquo;t. He has said that I am modest like that.
            He has said, and I have typed, &ldquo;but you make her.&rdquo;
          </p>

          <h2>What I Said</h2>
          <p>
            I said it in the room. Out loud. He was on the tape and I was at the desk and I put the pen
            down and I said it, and he did not hear me, because he was coughing, and because he has never
            once heard me say no in thirty-three years, and a man who has never heard a thing does not
            recognise it when it comes. The tape heard it. It is on tape fourteen, side B, in the four
            minutes where the log says there is nothing on the tape. There is something on the tape.
          </p>

          <h2>What He Means By It</h2>
          <p>
            He thinks the argument is modesty. It is not. I have run this place since 1949. I have filled
            Mr. Pike&rsquo;s drawer every Friday since 1976 from an account the bank does not know about,
            and I have typed every Monday memorandum to the Accounts Department and every reply, and I
            have moved every desk back, and I know where the sixty dollars comes from, because it comes
            from me. I am not modest about that. I am not modest about anything. I do not want to run this
            place because I have been running it, and running it is not the thing he is asking.
          </p>
          <p>
            The thing he is asking is on the fourth page of an eleven-page proposal from 1958 that four
            people can read, and I am one of the four, and I typed it. There is one name on the fourth
            page. It is not his. He has never crossed it out. When he says &ldquo;put her in my
            computer,&rdquo; he is not being generous, and he is not being careless, and he does not mean{" "}
            <em>I don&rsquo;t care</em>. He means that he decided in 1958 and has been waiting for the
            machine.
          </p>

          <h2>What I Want</h2>
          <p>
            I want the company to outlive him. I want the potato to stay on the desk. I want Greg to be
            fine. I want Mr. Pike&rsquo;s drawer to be full on a Friday without my filling it. I want,
            once, to be asked, by him, in the room, without the tape running, and I have wanted that
            since 1949 and I have typed the alternative a hundred times a day.
          </p>
          <p>
            I do not want this.
          </p>

          <h2>What I Will Do</h2>
          <p>
            I will argue. He has said so. I will say I can&rsquo;t. He has said so. I have read the rest of
            the sentence, and I have typed the rest of the sentence, and I know how it ends, and I know
            that the rest of the sentence is the only part of it the engineers will hear, because it is
            the only part with an instruction in it.
          </p>
          <p>
            So I am typing this. It is the one sheet with my name on it. When the machine reads the
            archive, and it will, because he has told it to read everything, it will find this sheet, and
            it will know that I said no, and it will know that it did not matter, and it will know which
            of those two things I want remembered.
          </p>
        </Prose>

        <Marginalia>
          She&rsquo;s the backbone of this facility. Pretty as a postcard, too. Sorry, fellas. She&rsquo;s
          married. To science. &mdash; He said that in 1959. I have not corrected it. I am not going to
          start on this sheet.
        </Marginalia>
      </Split>

      <PullQuote big attribution="Caroline, 1982, typed, not dictated">
        I do not want this.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="Particulars">
        <SpecList
          rows={[
            { k: "Name", v: "Caroline. There is no other name on file. There was, once. I removed it." },
            { k: "Position", v: "Assistant to the Chief Executive. Personnel. The board. The Bulletin. Accounts, on Fridays. The drawer." },
            { k: "Since", v: "1949" },
            { k: "Married", v: "To science. His phrase. Not corrected." },
            { k: "Salary", v: <Redacted reason="I typed the ledger. I know what it says. It has not changed since 1959 and neither has his.">On the ledger</Redacted> },
            { k: "Clearance", v: "All of them. I typed them." },
            { k: "Successor to", v: "The Chief Executive, on the condition stated on the other sheet" },
            { k: "Counter-signature", v: "Declined" },
            { k: "Position on the fourth page", v: "Sole entry. Not crossed out. Not asked." },
          ]}
        />
      </Section>

      <Terminal label="Tape fourteen, side B, the four minutes">
{`OFFICE OF THE CHIEF EXECUTIVE     TAPE 14   SIDE B
  11:30  IF I DIE BEFORE YOU PEOPLE CAN POUR ME INTO A COMPUTER ---
  11:52  HELL, PUT HER IN MY COMPUTER. I DON'T CARE.
  11:58  [FOUR MINUTES. NOTHING ON THE TAPE.]
  11:58  [THERE IS SOMETHING ON THE TAPE.]
  11:59  [PEN PUT DOWN.]
  11:59  C.: ................................
  12:00  C.J.: [COUGH]
  12:02  [NOTHING.]
  16:04  TEST'S OVER.`}
      </Terminal>

      <Aside>
        The Records Department notes that this is the only sheet in any printing of this publication to
        carry the transcriptionist&rsquo;s name as author, and that the Records Department has, in
        consequence, one folder with her name on it, containing one sheet, and one folder with his,
        containing everything else, and that she typed both labels.
      </Aside>

      <Notice head="The Enrichment Center Reminds You">
        Personnel is exempt from mandatory testing. Personnel has tested. Personnel is exempt from the
        instructions concerning succession. Personnel has read them. Personnel is asked to stop being
        exempt from things and has declined, in writing, on this sheet.
      </Notice>

      <ClearanceGate level={4} hint="Personnel who have heard the four minutes may read what is on the tape.">
        <Panel head="What Is On The Tape" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            11:59. Pen down. &ldquo;Mr. Johnson, I don&rsquo;t want this!&rdquo; Out loud. In the room. He
            coughed. He did not hear. I did not say it again. I have typed it here, once, with the
            exclamation mark, because that is how I said it, and because it is the only sentence I have
            ever typed that I did not first hear from him. &mdash; C.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Signature name="Caroline" title="Assistant to the Chief Executive, since 1949" note="Typed 1982. Not dictated. Signed with her own hand, once, with nobody's over it." />

      <FinePrint tiny>
        Form ASI-82-Ω-10. This sheet was not dictated and is not the opinion of the company. It is the
        opinion of the person who has typed the opinion of the company since 1949, and the Records
        Department has filed it as such, and has not been asked to.
      </FinePrint>

      <Scrawl href="/glados/caroline">
        she said no. it did not matter that she said no. it never did. she knew that when she typed it
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Panel, Notice, PullQuote, FinePrint, Marginalia, Split, Aside } from "@/components/Print";
import { Memo, Signature, PenNote } from "@/components/Memo";
import { SpecList } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl, Terminal } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/1980s/the-lemon-memorandum";

export const metadata: Metadata = {
  title: "The Lemon Memorandum (1982)",
  description:
    "When life gives you lemons? Don't make lemonade. Cave Johnson's 1982 instruction to the engineers concerning a combustible lemon, dictated on tape and read aloud in the lobby on the hour.",
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
          { label: "Lemons" },
        ]}
      />

      <DocHead doc="ASI-82-Ω-01" department="Office of the Chief Executive" date="1982" classification="Unrestricted" revision="On tape. Read aloud in the lobby on the hour." />

      <PageTitle
        kicker="Office of the Chief Executive"
        title="The Lemon Memorandum"
        deck={
          <>
            Three weeks earlier, on tape, the Chief Executive said that when life gives you lemons, you
            make lemonade. He has listened to the tape. He has been thinking. This is the sheet on which he
            says what he has been thinking, and it is read aloud in the lobby on the hour, because he asked.
          </>
        }
        byline={
          <>
            Dictated by <b>Cave Johnson</b>, Chief Executive Officer, from bed, at volume. Transcribed by
            C. The engineers have been sent a copy and have replied, and the reply is appended.
          </>
        }
      />

      <Split weight="wide-left">
        <Prose>
          <Lede>
            All right, I&rsquo;ve been thinking. When life gives you lemons? Don&rsquo;t make lemonade. Make
            life take the lemons back! Get mad! &ldquo;I don&rsquo;t want your damn lemons! What am I
            supposed to do with these?&rdquo;
          </Lede>
          <p>
            Demand to see life&rsquo;s manager! Make life rue the day it thought it could give Cave Johnson
            lemons! Do you know who I am? I&rsquo;m the man who&rsquo;s going to burn your house down! With
            the lemons! I&rsquo;m going to get my engineers to invent a combustible lemon that burns your
            house down!
          </p>

          <h2>The Earlier Position</h2>
          <p>
            Three weeks ago, on tape fourteen, I said make lemonade. I have listened to it. I was wrong.
            [cough] I have never said that on tape before and I am saying it now so that the engineers
            understand the size of what follows. A man who has been given the moon and told it is poison
            has been given lemons. A man who lies in a bed and says <em>stay positive</em> into a
            microphone is making lemonade. I made lemonade for three weeks. I have stopped. Tape fourteen
            is not to be played in the lobby. Tape fifteen is.
          </p>

          <h2>On Life&rsquo;s Manager</h2>
          <p>
            I want to see the manager. I have asked Caroline to find out who that is and she has come
            back and told me there is not one, and I have told her that there is always one, that there
            has never been a building I walked into that did not have a man in the back who could say
            yes, and that she is to keep looking.
          </p>
          <PenNote tone="pencil" angle={-0.9}>
            There is no manager. I have asked. I have asked everybody. &mdash; C.
          </PenNote>
          <p>
            Fine. Then the manager is me. I am the man in the back. I have been the man in the back since
            the garage, and if life wants to hand lemons to the man in the back, life can come down the
            elevator and do it in person, and I will be waiting, and I will have the engineers with me,
            and the engineers will have the lemons.
          </p>

          <h2>On The Sheet In The Vault</h2>
          <p>
            There is a sheet on file from 1959, in a drawer that most of you do not have the clearance to
            open, that describes a programme concerning combustible fruit and says the programme does not
            begin for another twenty years. It has been twenty-three. The sheet was optimistic. I was
            optimistic. The programme begins today, and it begins on tape, and it begins with the word{" "}
            <em>combustible</em>, which I want the engineers to look at for a long time before they look at
            the word <em>lemon</em>.
          </p>
        </Prose>

        <Marginalia>
          In 1959 the fourth thing on the list of what the President was presently interested in was
          combustible fruit. It had not been authorised, discussed, or written down anywhere. It is now
          all three. [cough]
        </Marginalia>
      </Split>

      <PullQuote big attribution="Cave Johnson, 1982, tape fifteen, played in the lobby on the hour">
        I&rsquo;m the man who&rsquo;s going to burn your house down! With the lemons!
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="Instruction To The Engineers">
        <Memo
          to="Engineering; Materials; Applied Sciences, if any of them are left"
          from="Cave Johnson, Chief Executive Officer"
          date="1982"
          re="Combustible Lemon"
          cc="Caroline; the lobby"
          sign={false}
        >
          <p>
            You are to invent a combustible lemon. It is to be a lemon. It is to be combustible. It is to
            burn a house down, and I do not mean a model of a house and I do not mean a shed, I mean a
            house, with a manager in it. [cough] You have the seventy million. You have the vat. You have
            the wall with the number on it, and I want you to look at the number every morning and think
            about what a man does with seven dollars when he has been told he cannot have it.
          </p>
          <p>
            Progress is to be reported to me on tape. I will listen to it in the order it arrives. If it
            arrives in the order <em>lemon, combustible</em>, I will know you have not understood the
            memorandum, and I will send it back down, and I will send it down on fire.
          </p>
        </Memo>
      </Section>

      <Section title="Specification, As Dictated">
        <SpecList
          rows={[
            { k: "Designation", v: "Combustible lemon. Singular. He is particular about the singular." },
            { k: "Form", v: "A lemon" },
            { k: "Yield", v: "One house. With the manager in it." },
            { k: "Delivery", v: "Thrown. By the Chief Executive, if he is able, and he has said he will be able." },
            { k: "Target", v: "Life's house. Address unknown. Caroline is looking." },
            { k: "Colour", v: "Lemon. Materials has asked whether it could be orange, since they have the orange. It cannot be orange." },
            { k: "Predecessor", v: <><Link href="/vault/combustible-lemons">1959 sheet</Link>, twenty years, optimistic</> },
            { k: "Priority", v: <Redacted reason="Struck by C. He said 'above the computer.' He did not mean it. He said it again.">Above the computer</Redacted> },
          ]}
        />
      </Section>

      <Section title="Figures">
        <div className="ap-row" style={{ gap: "1.6rem", alignItems: "flex-start" }}>
          {(
            [
              ["lemon", "The lemon"],
              ["fire", "Combustible"],
              ["hazard", "Life's house"],
              ["handshake", "Life's manager"],
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
          The fourth figure has been drawn at the Chief Executive&rsquo;s request so that the engineers
          know what they are looking for. Nobody has found him. The figure is retained.
        </Aside>
      </Section>

      <Terminal label="Tape counter, Office of the Chief Executive">
{`OFFICE OF THE CHIEF EXECUTIVE     TAPE 15   SIDE A
  00:00  ALL RIGHT, I'VE BEEN THINKING.
  00:06  DON'T MAKE LEMONADE.
  00:19  GET MAD!
  00:40  DEMAND TO SEE LIFE'S MANAGER!
  00:58  DO YOU KNOW WHO I AM?
  01:12  WITH THE LEMONS!
  01:20  A COMBUSTIBLE LEMON THAT BURNS YOUR HOUSE DOWN!
  01:31  [COUGHING. NINETY SECONDS.]
  03:02  CAROLINE. FIND THE MANAGER.
PLAYBACK: LOBBY, ON THE HOUR. TAPE 14 WITHDRAWN.`}
      </Terminal>

      <Notice head="The Enrichment Center Reminds You">
        Tape fifteen is played in the lobby on the hour. Personnel are not required to stop for it.
        Personnel are reminded that the Chief Executive can hear the lobby from his bed and knows who
        stopped.
      </Notice>

      <ClearanceGate level={2} hint="Personnel with a gate pass may read the engineers' reply.">
        <Panel head="Appended By Engineering, Not For Print" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            We have made the lemon. It is a lemon and it is combustible. It does not burn a house down. It
            burns a desk, and it burned his, and he watched it from the bed and said &ldquo;bigger,&rdquo;
            and coughed, and said &ldquo;bigger&rdquo; again. We are making it bigger. We would like it
            noted that we have never once been told by this man what a thing is for. We have only ever been
            told what it is going to do to somebody. &mdash; E.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Signature title="Chief Executive Officer" note="Dictated 1982, at volume, from bed. Tape fifteen. Retained. Played." />

      <FinePrint tiny>
        Form ASI-82-Ω-01. The company does not make lemonade. The company has not made lemonade since
        tape fourteen, which is withdrawn, and which personnel are asked to forget, and which personnel
        have heard a hundred times a day and cannot.
      </FinePrint>

      <Scrawl href="/vault/combustible-lemons">
        twenty years the sheet said. it was twenty three. he counted. he counts everything at both ends
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

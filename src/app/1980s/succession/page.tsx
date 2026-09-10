import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Panel, Notice, PullQuote, FinePrint, Marginalia, Split, Aside } from "@/components/Print";
import { Memo, Signature, PenNote } from "@/components/Memo";
import { Checklist, FormBlock, Field } from "@/components/Form";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl, Terminal } from "@/components/Secret";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/1980s/succession";

export const metadata: Metadata = {
  title: "Instructions Concerning Succession (1982)",
  description:
    "If I die before you people can pour me into a computer, I want Caroline to run this place. Cave Johnson’s 1982 standing instruction, on tape, played a hundred times a day, with the instrument of succession.",
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
          { label: "Succession" },
        ]}
      />

      <DocHead doc="ASI-82-Ω-02" department="Office of the Chief Executive" date="1982" classification="Unrestricted" revision="On tape. Standing instruction. A hundred times a day." />

      <PageTitle
        kicker="Office of the Chief Executive"
        title="Instructions Concerning Succession"
        deck={
          <>
            The Chief Executive has said what is to happen if he dies before the engineers can pour him
            into a computer. He has said it on tape, so that everybody hears it a hundred times a day, and
            he has said it in the order below, and he has asked that the order be kept.
          </>
        }
        byline={
          <>
            Dictated by <b>Cave Johnson</b>, Chief Executive Officer, from bed. Transcribed by C., as
            dictated, in full, including the part about her.
          </>
        }
      />

      <Split weight="wide-left">
        <Prose>
          <Lede>
            I will say this &mdash; and I&rsquo;m gonna say it on tape so everybody hears it a hundred times
            a day: if I die before you people can pour me into a computer, I want Caroline to run this
            place.
          </Lede>
          <p>
            Now she&rsquo;ll argue. She&rsquo;ll say she can&rsquo;t. She&rsquo;s modest like that. But you
            make her.
          </p>
          <p>Hell, put her in my computer. I don&rsquo;t care.</p>

          <h2>On The Order</h2>
          <p>
            There are five things in that and I want them numbered, because a man who leaves five
            instructions and does not number them has left one instruction, which is <em>argue</em>, and
            I have run this company for thirty-nine years on the principle that nobody argues with a
            number. The numbers are below. Read them at both ends.
          </p>

          <h2>On Modesty</h2>
          <p>
            She&rsquo;s modest like that. She has run this place since 1949 and has never once signed a
            sheet with her own name, and I have let her, because I wanted my name on it, and I am saying
            now, on tape, [cough], that the name on it was hers. Every sheet. Every voucher. Every Monday
            memorandum to the bean counters, which she typed, and every reply, which she typed, and the
            drawer at the gate, which she fills, and which I have never once asked about, because a man
            does not ask where the sixty dollars comes from when the sixty dollars keeps coming.
          </p>
          <p>
            So she will argue. She will say she can&rsquo;t. And you will look at her, and you will look at
            this building, and you will ask yourselves who you think has been running it, and then you
            will make her.
          </p>

          <h2>On The Computer</h2>
          <p>
            The engineers say the other half of the machine is a person. They say it will take a person.
            I have given them one and the one I have given them is deathly ill and the line on the chart
            goes one way, and I am not a fool, and I have read the{" "}
            <Link href="/1980s/brain-mapping">reports</Link>. So: if it cannot be me, put her in my
            computer. I don&rsquo;t care. I want that heard exactly the way I said it. I do not mean that I
            do not care about her. I mean that I do not care which of us it is, so long as it is one of
            us, so long as this place is run by somebody who was here, and there are two of those, and
            one of them is not going to be available.
          </p>
        </Prose>

        <Marginalia>
          She&rsquo;s the backbone of this facility. I said that in 1959, to a room full of astronauts, and
          I said it as a compliment, and I want it understood that I meant it as an organisational chart.
        </Marginalia>
      </Split>

      <PullQuote big attribution="Cave Johnson, 1982, tape fourteen, eleven minutes thirty">
        If I die before you people can pour me into a computer, I want Caroline to run this place.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="The Order, Numbered">
        <Checklist
          items={[
            { text: "Pour me into a computer.", checked: false },
            { text: "If the first cannot be done in time, Caroline runs this place.", checked: false },
            { text: "She will argue. She will say she can’t. You make her.", checked: false },
            { text: "Put her in my computer.", checked: false },
            { text: "I don’t care.", checked: true },
          ]}
        />
        <Aside>
          The fifth has been ticked by the Chief Executive, who says it is the only one already done.
          The transcriptionist has asked that it be recorded that he ticked it with his eyes shut.
        </Aside>
      </Section>

      <Section title="Instrument Of Succession">
        <FormBlock>
          <Field label="Principal" filled>Cave Johnson, Chief Executive Officer, Aperture Laboratories</Field>
          <Field label="Successor" filled>Caroline</Field>
          <Field label="Condition" filled>Death of the Principal prior to his being poured into a computer</Field>
          <Field label="Alternative" filled>The Successor to be poured into the computer instead. The Principal does not care.</Field>
          <Field label="Witness" filled>Greg. Greg is fine.</Field>
          <Field label="Signature of Principal" filled>Cave Johnson (facsimile; hand over the transcriptionist’s)</Field>
          <Field label="Counter-signature of Successor">Declined.</Field>
        </FormBlock>
        <PenNote tone="pencil" angle={-1}>
          Transcribed as dictated. What I have to say I have said to him and not to the tape. &mdash; C.
        </PenNote>
      </Section>

      <Section title="A Memorandum Concerning The Standing Instruction">
        <Memo
          to="All Personnel"
          from="Cave Johnson, Chief Executive Officer"
          date="1982"
          re="Playback"
          cc="Caroline, who is to hear it too, whatever she says"
          sign={false}
        >
          <p>
            Tape fourteen, side B, from eleven minutes thirty, is to be played over the public-address
            system a hundred times a day, at intervals to be set by Personnel, in every department, in
            the lobby, on the testing track, in the elevator, and in the mixing room, where the wall is.
            [cough] It is not to be played in my office. I know what it says.
          </p>
          <p>
            Any employee who can recite it is to be marked as having heard it. Any employee who cannot is
            to be tested. Any employee who says she cannot is Caroline, and is to be made.
          </p>
        </Memo>
      </Section>

      <Terminal label="Public-address system, playback log, one day">
{`APERTURE LABORATORIES  ·  P.A.  ·  TAPE 14  SIDE B  11:30-11:58
PLAYS TODAY ........ 100 / 100
DEPARTMENTS ........ ALL (OFFICE OF THE C.E. EXCLUDED, BY INSTRUCTION)
HEARD, BY RECITAL .. 41 PERSONNEL
HEARD, BY TESTING .. 40 PERSONNEL
EXEMPT ............. 0
DECLINED TO RECITE . 1  (PERSONNEL: C.)   ACTION: "MAKE HER"   STATUS: PENDING`}
      </Terminal>

      <Notice head="The Enrichment Center Reminds You">
        The instructions concerning succession are the instructions of the Chief Executive and are not
        subject to argument, which the Chief Executive has anticipated, and which he has addressed at
        item three.
      </Notice>

      <ClearanceGate level={4} hint="Personnel who have heard the four minutes may read the appended note.">
        <Panel head="Appended By The Transcriptionist, Not For Print" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            He thinks the argument is modesty. It is not modesty. I have read the eleven pages. I know
            what &ldquo;put her in my computer&rdquo; is and I know what the other half of the machine is
            and I typed the requisition for it in his hand with mine underneath. I have run this place
            since 1949. I am not modest about that. I am not modest about anything. I said what I said
            in the room, out loud, and he did not hear it, and the tape did, and it is in the four
            minutes. &mdash; C.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Signature title="Chief Executive Officer" note="Dictated 1982, from bed. Numbered at both ends. Played." />

      <FinePrint tiny>
        Form ASI-82-Ω-02. The instrument of succession is effective on the condition stated and is not
        counter-signed. The Chief Executive has been told that an instrument with one signature is a
        letter, and has said that it is the last one he intends to write, and that it will do.
      </FinePrint>

      <Scrawl href="/1980s/caroline">
        she said it. once. out loud. he didnt hear. the tape did. it is in the four minutes
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

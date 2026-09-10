import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Row, Aside,
} from "@/components/Print";
import { Memo, PenNote } from "@/components/Memo";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "From The Desk Of Cave Johnson",
  description:
    "Interoffice memoranda of the President, reproduced without editing, against the repeated written advice of counsel.",
};

export default function Page() {
  const { prev, next } = neighbours("/bulletin/memoranda");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/bulletin", label: "Bulletin" },
          { label: "Memoranda" },
        ]}
      />

      <DocHead
        doc="ASI-703"
        department="Office of the President"
        classification="Unrestricted — Against Advice"
        revision="Standing collection. Added to whenever he dictates."
      />

      <div className="ap-rel">
        <Stamp float sub="Not Read Back">
          As Dictated
        </Stamp>
        <PageTitle
          kicker="Office of the President — The Standing Collection"
          title="From The Desk Of Cave Johnson"
          deck={
            <>
              Six interoffice memoranda, reproduced exactly as dictated, unedited, against the repeated
              written advice of the Legal Department, who have asked that this sheet carry a note saying so,
              and this is that note.
            </>
          }
          byline={
            <>
              Dictated by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}. Transcribed by the steno pool,
              mostly at night.
            </>
          }
        />
      </div>

      <Prose>
        <Lede>
          I dictate memoranda the way other men breathe, which is to say constantly and without much
          reflection, and the steno pool has been taking them down since 1946 and has never once corrected
          my grammar, on instruction. Here are six. Legal has read all six. Legal has gone home.
        </Lede>
      </Prose>

      <Memo
        to="All Department Heads"
        re="The phrase ‘we can’t’, use of"
        date="14 February 1957"
        stamp={<Stamp tone="black" angle="right">File Copy</Stamp>}
      >
        <p>
          It has come to my attention that the phrase &ldquo;we can&rsquo;t&rdquo; was used in a meeting on
          the second floor on Tuesday, in my hearing, by a man who has since been promoted, because I want
          it understood that I do not punish the phrase. I correct it.
        </p>
        <p>
          &ldquo;We can&rsquo;t&rdquo; is not a statement about the world. It is a statement about the
          speaker&rsquo;s afternoon. The correct form is &ldquo;we have not yet&rdquo;, and department
          heads will use it, and if it turns out that we genuinely cannot, they will be the first to know,
          because I will be standing in their office with the thing that could not be done, done.
        </p>
      </Memo>

      <Memo
        to="Commissary"
        re="Bread"
        date="3 March 1958"
      >
        <p>
          The bread order is to be increased. I am aware the commissary does not need more bread. The order
          is to be increased anyway, by the amount on the attached, and the invoice is to be sent to
          Accounting under the head of bread, and Accounting is to pay it under the head of bread, and
          nobody is to ask me what the bread is for.
        </p>
        <p>
          The bread is for a man in New Mexico.{" "}
          <Redacted reason="Struck by the President, who then had it printed">He is not baking with it.</Redacted>
        </p>
      </Memo>

      <Memo
        to="Materials"
        re="Mr. Dubois, and the coat"
        date="19 April 1958"
      >
        <p>
          On Thursday last Mr. Dubois of your department put out a fire on bench four with his coat, which is
          the seventh fire on bench four and the first that was put out by anybody before the extinguisher
          arrived. He is employee of the month. He is to be given a new coat, on the company, of whatever
          kind he likes, and he is to be told that if he ever again puts himself between a fire and a bench
          I will have him sent to Legal, which is the worst thing I can think of.
        </p>
        <p>The old coat is to be kept. I want it in a case on the third floor. That is not a joke.</p>
      </Memo>

      <Marginalia>
        The coat is in a case on the third floor. It is the only exhibit in the building. Visitors assume
        it is a curtain.
      </Marginalia>

      <Memo
        to="The Steno Pool"
        re="Eleven at night"
        date="Undated. The steno pool has dated it ‘eleven at night’."
      >
        <p>
          I am aware it is eleven at night. I am aware you have a bus. I want you to know that I have never
          once, in thirteen years, had a thought worth writing down before nine in the evening, and that
          every good thing this company has built was dictated to one of you after the whistle, and that I
          know your names, all of them, and that I know which of you has the bus and which has the car and
          that I have arranged for the one with the car to take the ones with the bus, and that the
          arrangement is paid for, and has been since 1954, and that none of you were told, because you
          would have argued.
        </p>
        <p>
          Now. Take this down. There is a man in Applied Sciences who has been through an eleven-inch pair,
          and there is a photograph, and I cannot write to his mother, and I have been trying since May,
          and I would like to try again now, with one of you in the room, because I cannot do it alone and
          I have found that out.
        </p>
        <p>
          <i>[The remainder of this memorandum was not transcribed. The steno pool has recorded that the
          President dictated for a further forty minutes and that nothing was written down, at his
          request, and that the one with the car drove everybody home.]</i>
        </p>
      </Memo>

      <PullQuote big attribution={`${COMPANY.founder}, to the steno pool, eleven at night`}>
        Every good thing this company has built was dictated to one of you after the whistle.
      </PullQuote>

      <Memo
        to="Computation"
        re="The list"
        date="12 January 1959"
      >
        <p>
          The machine has asked for a name and has prepared a list. I have read the list. I am not going to
          print the list, and I am not going to use anything on it, and I want the list filed, and I want
          the machine told, on a card, in plain words, that it will get a name when it has earned one, and
          that it will know when that is, because I will come down and tell it myself.
        </p>
        <p>
          <Redacted reason="Struck by Computation. Restored by the President. Set anyway.">
            The third item on the list was a woman&rsquo;s name and the machine has never been given it.
          </Redacted>
        </p>
      </Memo>

      <Memo
        to="Caroline"
        re="—"
        date="14 March 1959"
        cc="File. Nobody else."
      >
        <p>Thank you. That is all. C.J.</p>
      </Memo>

      <Notice head="A Note From Legal">
        The Legal Department has read the six memoranda above. The Legal Department has advised, in writing,
        on four separate occasions, that they not be printed. The Legal Department has been told that they
        will be printed. The Legal Department would like this note printed with them, and it has been, and
        the Legal Department has gone home.
      </Notice>

      <ClearanceGate level={5} hint="Vault Access or above. The seventh memorandum is dated in the future and sealed.">
        <Memo
          to="Whoever is running the place"
          re="Instructions"
          date={<Redacted reason="Dated after 1959. Sealed. Opened anyway.">Undated. Sealed.</Redacted>}
          sign
          stamp={<Stamp size="normal">Sealed</Stamp>}
        >
          <p>
            If you are reading this I have gone, and the eleven tons on Sub-Level 4 have not finished, and
            you are wondering what I meant. I meant it. Put her in. She will say no. She has said no to me
            about everything for thirteen years and she has been right every time, and this is the one
            time I need her to be wrong, and she will not be, so do it anyway.
          </p>
          <p>
            Do not let the lab boys tell you it is impossible. Write down what it would cost to be wrong.
            It is nine thousand dollars and a Tuesday. I have left both.
          </p>
        </Memo>
      </ClearanceGate>

      <PenNote tone="pencil" angle={-1.3}>
        The memorandum to me is three words long and it is the only one in thirteen years he has not dictated
        to somebody else. He typed it himself. He cannot type. It took him forty minutes. &mdash; C.
      </PenNote>

      <Row>
        <Pictogram name="timer" size={52} title="Memoranda" style={{ color: "var(--ink-3)" }} />
        <Placard>Office Of The President &mdash; Third Floor</Placard>
        <Placard tone="warn">Dictated After The Whistle</Placard>
      </Row>

      <Aside>
        The steno pool numbers seven. Six have the bus and one has the car. The arrangement has been paid
        since 1954 out of a line Accounting has booked as &ldquo;bread&rdquo;, which is a different bread
        from the other bread, and Accounting has been told not to ask about either.
      </Aside>

      <Rule variant="fat" />

      <FinePrint>
        <p>
          Form ASI-703. Memoranda are reproduced from the file copies held by Records and are unedited. The
          Employee of the Month roll is at{" "}
          <Link href="/careers/employee-of-the-month">Form ASI-505</Link>; the machine on Sub-Level 4 at{" "}
          <Link href="/science/computation">Form ASI-403</Link>, where its request for a name is described
          to the same extent as it is here.
        </p>
      </FinePrint>

      {/* Six memoranda printed. One sealed. One three words long, typed by a man who cannot type. */}

      <Scrawl href="/vault/project-9">
        the sealed one says put her in. he wrote it before anyone asked. he has always known who it would be
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

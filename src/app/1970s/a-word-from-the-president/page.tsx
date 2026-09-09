import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Stamp, Panel, Notice, PullQuote, FinePrint, Marginalia, Split, Aside } from "@/components/Print";
import { Memo, Signature, PenNote } from "@/components/Memo";
import { SpecList } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/1970s/a-word-from-the-president";

export const metadata: Metadata = {
  title: "A Word From The Chief Executive (1976)",
  description:
    "Cave Johnson, Chief Executive Officer of Aperture Science, in 1976: on the Senate hearings, sixty dollars cash, the competition, and the elevator, which is not a bathroom.",
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
          { label: "Cave Johnson" },
        ]}
      />

      <DocHead
        doc="ASI-76-101"
        department="Office of the Chief Executive"
        date="1976"
        classification="Unrestricted"
        revision="Photocopy of a photocopy"
      />

      <div className="ap-rel">
        <Stamp float sub="Office of the Chief Executive">
          Dictated
        </Stamp>
        <PageTitle
          kicker="Office of the Chief Executive"
          title="A Word From The Chief Executive"
          deck={
            <>
              He founded the company at thirty-four with four hundred dollars and a bolt of vinyl. He is
              presently thirty-three years, one Senate hearing and no money further along. Here he is, at
              length, unedited, as he prefers, and as the transcriptionist has given up preventing.
            </>
          }
          byline={
            <>
              Dictated by <b>Cave Johnson</b>, Chief Executive Officer. Transcribed by C., who has asked
              that the first paragraph be noted as incomplete, and that the reason be noted as her.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            Greetings, friend. I&rsquo;m Cave Johnson, CEO of Aperture Science &mdash; you might know us as a
            vital participant in the 1968 Senate Hearings on missing astronauts. And you&rsquo;ve most likely
            used one of the many products we invented. But that other people have somehow managed to steal
            from us. Black Mesa can eat my bankrupt&mdash;
          </Lede>
          <PenNote tone="pencil" angle={-0.8}>
            Sir, the testing. &mdash; C.
          </PenNote>
          <p>
            Right. The testing. I want it on the record that I was going to say something else and that the
            something else was true, and that there is a woman in this office who has been stopping me
            saying true things since 1949 and that the company would have been sued into the salt a long
            time ago without her. That is not in the contract. Put it in the contract.
          </p>

          <h2>On The Hearings</h2>
          <p>
            A vital participant. That is the phrase. It is in the transcript, it is on the letterhead, and it
            is on the sign out front where the word <em>Innovators</em> used to be, and I would like to say
            for the benefit of anybody who has come here from the{" "}
            <Link href="/">1959 printing</Link> that the sign was not my idea and that I have come round to
            it. Innovators is what you call yourself. Vital participant is what a United States Senator calls
            you, under oath, into a microphone, and I will take that over a slogan any day of the week.
          </p>
          <p>
            The astronauts are a separate sheet. There is a separate sheet for the astronauts and I have
            been told not to summarise it here and I will not summarise it here except to say that they were
            volunteers, that they were the best, and that at no point did anybody at this company lose them.
            You cannot lose a man in a place that only has one exit. You can only be very slow to find him.
          </p>

          <h2>On Sixty Dollars</h2>
          <p>
            Now, you might be asking yourself, &ldquo;Cave, just how difficult are these tests? What was in
            that phone book of a contract I signed? Am I in danger?&rdquo; Let me answer those questions with a
            question: who wants to make sixty dollars? Cash.
          </p>
          <p>
            You can also feel free to relax for up to twenty minutes in the waiting room, which is a damn
            sight more comfortable than the park benches most of you were sleeping on when we found you. I
            want to be clear that we did find you. Nobody sent you. Nobody at this company has the budget to
            send anybody anywhere. We drove out with the van and we looked and there you were, and if that
            does not tell you how badly Aperture Science wants the best, I do not know what would.
          </p>
          <p>
            So. Welcome to Aperture. You&rsquo;re here because we want the best, and you&rsquo;re it. Nope.
            Couldn&rsquo;t keep a straight face.
          </p>
          <p>
            I used to say that line to astronauts. I used to say it with a straight face, and I have the sheet
            I said it on, because somebody in Records keeps everything, and I read it last week and I want to
            tell you that the sheet is right and I was right and the men were the best, and that the country
            took them and gave them to an outfit in New Mexico with a federal haircut. So now I say it to you.
            And I laugh, and you should not take that personally, because I am not laughing at you. I am
            laughing at the sheet.
          </p>

          <h2>On The Competition</h2>
          <p>
            In 1959 I wrote that a certain facility had been three years on a problem I solved in a weekend.
            They have now had the weekend. They have had the problem. They have had the contract, the
            budget, the astronauts, and two of my best physicists, one of whom I fired and one of whom I did
            not fire fast enough. What they have not had is a man go through the hole personally, and I am
            told that is still true, and I am told it by people who would know, because the people who would
            know are the people I am paying sixty dollars to go through it.
          </p>
          <p>
            I have gone through it eleven times. Legal asked me to stop saying that in print. Legal has
            since left. I can say what I like.
          </p>

          <h2>On The Additional Sixty</h2>
          <p>
            If you&rsquo;re interested in an additional sixty dollars, flag down a test associate and let
            &rsquo;em know. You could walk out of here with a hundred and twenty weighing down your bindle if
            you let us take you apart, put some science stuff in you, then put you back together good as
            new. We&rsquo;re not banging rocks together here. We know how to put a man back together.
          </p>
          <p>
            So that&rsquo;s a complete reassembly. New vitals. Spit-shine on the old ones. Plus we&rsquo;re
            scooping out tumours. Frankly, you oughtta be paying us.
          </p>

          <h2>On What Comes Next</h2>
          <p>
            I am sixty-seven years old. I have kidneys that the doctors have opinions about and a company
            that the bank has opinions about and I have stopped listening to either, because a man who
            listened to doctors and banks would never have bought a salt mine, and I bought a salt mine, and
            look where we are. Four thousand feet down. Lights on. There are men on the lower levels working
            on a gel that will make a man go faster than he wants to, and there is a memorandum on my desk
            from the bean counters about seven dollars, and I have decided which of those two things I am
            going to think about this afternoon, and it is not the seven dollars.
          </p>
          <p>
            The door is behind you. It still opens from both sides. I will be honest with you: we have
            stopped checking.
          </p>
        </Prose>

        <Marginalia>
          For many of you, I realise sixty dollars is an unprecedented windfall, so don&rsquo;t go spending
          it all on&hellip; I don&rsquo;t know. Caroline, what do these people buy? Tattered hats? Beard
          dirt?
        </Marginalia>
      </Split>

      <PullQuote attribution="Cave Johnson, 1976, on the public-address system, to the lower levels">
        This on? [thump thump] Hey. Listen up down there. That thing&rsquo;s called an elevator. Not a
        bathroom.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="Particulars Of The Chief Executive, 1976">
        <SpecList
          rows={[
            { k: "Name", v: "Cave Johnson" },
            { k: "Position", v: "Chief Executive Officer. There is no President. There is no board. There is no bank, as far as this office is concerned." },
            { k: "Age", v: "Sixty-seven" },
            { k: "Founded the company", v: "1943, with four hundred dollars and a bolt of vinyl" },
            { k: "Participation, Senate", v: "Vital (1968)" },
            { k: "Times through the hole", v: <>Eleven. <Redacted reason="Struck by C. He has not been through it since 1961.">Twelve, if you count</Redacted></> },
            { k: "Kidneys", v: "Under review" },
            { k: "Present interest", v: "Propulsion. Also, seven dollars." },
          ]}
        />
      </Section>

      <Section title="A Memorandum Concerning The Elevator">
        <Memo
          to="All Test Associates, Lower Levels"
          from="Cave Johnson, Chief Executive Officer"
          date="1976"
          re="The Elevator"
          cc="Caroline; whoever is on the P.A."
          sign={false}
        >
          <p>
            It has come to my attention, by way of the elevator, that some of the new volunteers are
            unclear on the purpose of the elevator. I have addressed the lower levels on this point over the
            public-address system and I am now addressing the test associates on paper, because the
            volunteers cannot read the paper and you can.
          </p>
          <p>
            The elevator goes down to the spheres and it comes back up. That is the whole of it. If a man
            gets into the elevator with any other intention, a test associate is to stop him, and if the
            test associate cannot stop him, the test associate is to ride up with him and explain it again
            at the top. I have had this elevator since 1952. It has carried astronauts. I want it treated
            like it carried astronauts.
          </p>
          <p>
            If you had any belongings, please pick them up now. We don&rsquo;t want old newspapers and sticks
            cluttering up the building.
          </p>
        </Memo>
      </Section>

      <Notice head="The Enrichment Center Reminds You">
        Compensation is sixty dollars, cash, paid on completion of the test. Completion is defined by the
        test associate. Cash is defined by the Chief Executive, who has asked whether a voucher counts, and
        has been told by Caroline that it does not, and has asked again.
      </Notice>

      <Aside>
        Greg is fine. Greg has been fine since 1959 and is presently on the lower levels with a
        clipboard, being fine there.
      </Aside>

      <ClearanceGate level={3} hint="Personnel who have been paying attention may read the appended note.">
        <Panel head="Appended By The Transcriptionist, Not For Print" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            He says the hearings speech to the volunteers word for word the way he said it to the
            Senators. He says it to the mirror in the mornings. I have heard it through the door. The
            astronauts had names and I have the list and the list is not filed on this floor, because he
            asked me where it was filed, once, in 1969, and I told him, and he has not asked since. &mdash;
            C.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Signature
        title="Chief Executive Officer"
        note="Dictated 1976. Transcribed, photocopied, and filed. The original was needed for something."
      />

      <FinePrint tiny>
        The opinions of the Chief Executive are the opinions of the company. There is no longer any
        mechanism by which they could be otherwise. Form ASI-76-101. This sheet was photocopied from a
        photocopy; where the text is illegible, assume it concerned New Mexico.
      </FinePrint>

      <Scrawl href="/1980s/conversion-gel">
        the bean counters said no to the rocks. he will find a way to say yes. he always finds a way
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

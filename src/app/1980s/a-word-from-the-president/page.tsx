import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Panel, Notice, PullQuote, FinePrint, Marginalia, Split, Aside } from "@/components/Print";
import { Memo, Signature, PenNote } from "@/components/Memo";
import { SpecList } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl, Terminal } from "@/components/Secret";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/1980s/a-word-from-the-president";

export const metadata: Metadata = {
  title: "Welcome To The Enrichment Center (1982)",
  description:
    "Cave Johnson, Chief Executive Officer of Aperture Laboratories, in 1982, from his bed: on mandatory testing, moon rocks, lemons, compact discs, and what is to happen if he dies before they can pour him into a computer.",
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
          { label: "Cave Johnson" },
        ]}
      />

      <DocHead
        doc="ASI-82-101"
        department="Office of the Chief Executive"
        date="1982"
        classification="Unrestricted"
        revision="Dictated on tape. The coughing has been left in."
      />

      <PageTitle
        kicker="Office of the Chief Executive"
        title="Welcome To The Enrichment Center"
        deck={
          <>
            He founded the company at thirty-four with four hundred dollars and a bolt of vinyl. He is
            presently seventy-three, upstairs, and deathly ill, which he has asked the reader to regard as
            a data point. Here he is, on tape, as he prefers, because he has stopped coming down.
          </>
        }
        byline={
          <>
            Dictated by <b>Cave Johnson</b>, Chief Executive Officer, from his bed. Transcribed by C. Played
            back at the Chief Executive&rsquo;s instruction until the tape wore, and then copied.
          </>
        }
      />

      <Split weight="wide-left">
        <Prose>
          <Lede>
            Welcome to the enrichment center. [cough] Since making test participation mandatory for all
            employees, the quality of our test subjects has risen dramatically. Employee retention,
            however, has not.
          </Lede>
          <p>
            [cough] As a result, you may have heard we&rsquo;re gonna phase out human testing. There&rsquo;s
            still a few things left to wrap up, though. First up,{" "}
            <Link href="/1980s/conversion-gel">conversion gel</Link>. [cough]
          </p>

          <h2>On The Rocks</h2>
          <p>
            The bean counters told me we literally could not afford to buy seven dollars worth of moon
            rocks, much less seventy million. Bought &rsquo;em anyway. Ground &rsquo;em up, mixed em into a
            gel.
          </p>
          <p>
            And guess what? Ground up moon rocks are pure poison. I am deathly ill.
          </p>
          <p>
            Still, it turns out they&rsquo;re a great portal conductor. So now we&rsquo;re gonna see if
            jumping in and out of these new portals can somehow leech the lunar poison out of a man&rsquo;s
            bloodstream. When life gives you lemons, make lemonade. [coughs] Let&rsquo;s all stay positive
            and do some science.
          </p>
          <p>
            That said, I would really appreciate it if you could test as fast as possible. Caroline, please
            bring me more pain pills.
          </p>

          <h2>On Why Not, Revisited</h2>
          <p>
            I wrote in 1959 that science is not about why. I have the sheet. It says why not, and it says
            why not buy the moon, and I want it understood by anybody reading the two sheets together that
            I did not put that line in as a joke and I did not buy the moon as a joke and I am not lying up
            here as a joke. [cough] I bought it because it was there and because they said I could not, and
            those are the only two reasons this company has ever needed, and they are both still good
            reasons. The rocks were a bad idea. Why not was not.
          </p>

          <h2>On Lemons</h2>
          <p>
            I have been thinking about the lemons. There is a{" "}
            <Link href="/1980s/the-lemon-memorandum">separate sheet</Link>. I want it read aloud. I want
            it read aloud in the lobby, on the hour, and I want the engineers to hear it, because there is
            an instruction in it for the engineers and it is the last instruction I intend to give them
            about fruit.
          </p>

          <h2>On Compact Discs</h2>
          <p>
            The point is: if we can store music on a compact disc, why can&rsquo;t we store a man&rsquo;s
            intelligence and personality on one? So I have the engineers figuring that out now.
          </p>
          <p>
            Brain mapping. Artificial intelligence. We should have been working on it thirty years ago.
            [cough] We were working on it thirty years ago. I asked, in 1959, whether a man could be
            written down, and eleven tons of relays said probably not, and I said try anyway, and they
            tried, and it is filed somewhere under a number I was not supposed to know. I have a smaller
            machine now. I have a shorter deadline. Those two facts are related and I would like the
            engineers to treat them as related.
          </p>
          <p>
            I will say this &mdash; and I&rsquo;m gonna say it on tape so everybody hears it a hundred
            times a day: if I die before you people can pour me into a computer, I want Caroline to run this
            place.
          </p>
          <p>
            Now she&rsquo;ll argue. She&rsquo;ll say she can&rsquo;t. She&rsquo;s modest like that. But you
            make her.
          </p>
          <p>Hell, put her in my computer. I don&rsquo;t care.</p>
          <PenNote tone="red" angle={-1.2}>
            [The transcription stops here for four minutes. &mdash; C.]
          </PenNote>

          <h2>On What Comes Next</h2>
          <p>
            There is a committee in Washington that has been permanently recessed, and there is a contract
            with no end date on it, and there is a facility four thousand feet down with the lights on, and
            there is a woman outside this door who has run the place for thirty-three years and will not say
            so. [cough] I have arranged all four of those things. I am arranging a fifth. When the fifth is
            arranged I will come down and see it, and if I do not come down, you will know it is because I
            am already in it.
          </p>
          <p>Allright, test&rsquo;s over. You can head on back to your desk.</p>
        </Prose>

        <Marginalia>
          Every door here still opens from both sides. He asked me to check, last week. I checked. It does.
          I did not tell him which side I was standing on. &mdash; C.
        </Marginalia>
      </Split>

      <PullQuote big attribution="Cave Johnson, 1982, on tape">
        When life gives you lemons, make lemonade.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="Particulars Of The Chief Executive, 1982">
        <SpecList
          rows={[
            { k: "Name", v: "Cave Johnson" },
            { k: "Position", v: "Chief Executive Officer, Aperture Laboratories" },
            { k: "Age", v: "Seventy-three" },
            { k: "Location", v: "Upstairs. In bed. On tape." },
            { k: "Condition", v: "Deathly ill. A data point." },
            { k: "Cause", v: "Seventy million dollars of the moon, ground fine" },
            { k: "Treatment under review", v: "Portal transit. Pain pills. Lemons, combustible." },
            { k: "Successor", v: <>Caroline. <Redacted reason="Struck by C. Reinstated by the Chief Executive, on tape, twice.">She will argue.</Redacted></> },
          ]}
        />
      </Section>

      <Section title="A Memorandum Concerning Testing">
        <Memo
          to="All Personnel"
          from="Cave Johnson, Chief Executive Officer"
          date="1982"
          re="Mandatory Test Participation"
          cc="Caroline; Personnel; the engineers, who are also personnel"
          sign={false}
        >
          <p>
            Effective immediately, all employees of Aperture Laboratories are test subjects. This includes
            the engineers, the bean counters, the print shop, the associates who administer the tests, and
            the associates who administer the associates. It does not include Caroline. Caroline has been
            told it does not include her and has said that it does, and we have left it there.
          </p>
          <p>
            An employee who declines to test is reminded that testing is a condition of employment, that
            employment is a condition of the elevator, and that the elevator is the only way up. [cough]
            An employee who has already tested is thanked, and is reminded that the quality of our test
            subjects has risen dramatically, and is asked to consider what that means about him.
          </p>
        </Memo>
      </Section>

      <Terminal label="Tape counter, Office of the Chief Executive">
{`OFFICE OF THE CHIEF EXECUTIVE     TAPE 14   SIDE B
  00:00  WELCOME TO THE ENRICHMENT CENTER. [COUGH]
  00:41  CONVERSION GEL. [COUGH]
  02:15  PURE POISON. DEATHLY ILL.
  03:02  CAROLINE, MORE PAIN PILLS.
  06:50  LEMONS. (SEE TAPE 15.)
  09:12  COMPACT DISC.
  11:30  IF I DIE BEFORE YOU PEOPLE ---
  11:58  [FOUR MINUTES. NOTHING ON THE TAPE.]
  16:04  TEST'S OVER.
PLAYBACK COUNT: 100/DAY, STANDING INSTRUCTION.`}
      </Terminal>

      <Notice head="The Enrichment Center Reminds You">
        Testing is mandatory for all employees. Employees are reminded that the Chief Executive is also
        testing, upstairs, on himself, with the moon, and that he has asked that this be counted.
      </Notice>

      <Aside>
        Greg is fine. Greg has tested, and is fine, and has been asked to test again, and is fine about
        that as well.
      </Aside>

      <ClearanceGate level={3} hint="Personnel who have been paying attention may read the appended note.">
        <Panel head="Appended By The Transcriptionist, Not For Print" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            He said &ldquo;thirty years ago&rdquo; and looked at the door, because he knew I was on the other
            side of it. He asked in 1959. I have that sheet too. I have all of them. He thinks I do not know
            what the fifth thing is. I typed the requisition. &mdash; C.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Signature
        title="Chief Executive Officer"
        note="Dictated 1982, from bed. Signed by the transcriptionist with the Chief Executive’s hand over hers, at his insistence."
      />

      <FinePrint tiny>
        The opinions of the Chief Executive are the opinions of the company. The company has been told
        this on tape and hears it a hundred times a day. Form ASI-82-101. Retain until superseded. Retain
        after.
      </FinePrint>

      <Scrawl href="/glados/genetic-lifeform-and-disk-operating-system">
        they built the disk half first. it took ten years. the other half was already here. she was
        outside the door the whole time
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

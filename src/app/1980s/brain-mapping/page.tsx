import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Panel, Notice, PullQuote, FinePrint, Marginalia, Split, Aside } from "@/components/Print";
import { Memo, Signature, PenNote } from "@/components/Memo";
import { SpecList, FigureTable } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl, Terminal } from "@/components/Secret";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/1980s/brain-mapping";

export const metadata: Metadata = {
  title: "Brain Mapping & Artificial Intelligence (1982)",
  description:
    "If we can store music on a compact disc, why can't we store a man's intelligence and personality on one? Cave Johnson's 1982 instruction to Computation, thirty years late, with the two halves of the machine.",
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
          { label: "Brain Mapping" },
        ]}
      />

      <DocHead doc="ASI-82-403" department="Computation" date="1982" classification="Unrestricted" revision="Dictated on tape. Priority: above everything, including the lemons, which he denies." />

      <PageTitle
        kicker="Computation"
        title="Brain Mapping & Artificial Intelligence"
        deck={
          <>
            In 1959 <Link href="/science/computation">Computation</Link> had eleven tons of relays and a
            question from the President about whether a man could be written down. In 1982 it has a rack,
            a disc, and the same question, put with more urgency by the same man, who has less time and
            knows it.
          </>
        }
        byline={
          <>
            Dictated by <b>Cave Johnson</b>, Chief Executive Officer, from bed, to Computation. Transcribed
            by C. Computation has replied and the reply is appended, and is in the machine&rsquo;s type,
            because Computation no longer owns a typewriter.
          </>
        }
      />

      <Split weight="wide-left">
        <Prose>
          <Lede>
            The point is: if we can store music on a compact disc, why can&rsquo;t we store a man&rsquo;s
            intelligence and personality on one? So I have the engineers figuring that out now.
          </Lede>
          <p>
            Brain mapping. Artificial intelligence. We should have been working on it thirty years ago.
            [cough] We were working on it thirty years ago. I asked, in 1959, whether a man could be
            written down, and Computation put eleven tons of relays on the question and the relays said
            probably not, and I said try anyway, and they tried, and there is a proposal on file from 1958
            with a number on it that I was not supposed to know, and I know it, and it is not a research
            programme, it is a requisition, and it is now approved.
          </p>

          <h2>On The Disc</h2>
          <p>
            A compact disc is a piece of plastic the size of a saucer with a symphony on it. You put it in
            a machine and the symphony comes out, every time, the same, and the machine does not care
            whether the man who played the symphony is alive, and the symphony does not care either. I
            want that. I want to be the symphony. I want to be the thing that comes out the same every
            time, whatever has happened to the man.
          </p>
          <p>
            The engineers tell me a man is bigger than a symphony. I have told them that I have met a
            great many men and very few of them were, and that in any case we have more than one disc.
          </p>

          <h2>On The Two Halves</h2>
          <p>
            Computation says a machine that holds a man needs two halves. There is the half that runs the
            building: the doors, the elevator, the tests, the applications, the lights. They call that the
            disk operating half and they have a version of it already, and it is version one point
            oh-seven, and it runs the application process, and it asks a man whether anybody would file a
            police report if he went missing, and it does not care about the answer. That half they can
            do. They say it will take a decade to do properly. [cough]
          </p>
          <p>
            Then there is the other half. The man. Computation does not have a name for the other half
            yet and I have told them to call it what it is, and they have asked what it is, and I have said
            it is me, and they have written that down, and they have looked at Caroline, and Caroline has
            looked at the floor.
          </p>

          <h2>On Thirty Years</h2>
          <p>
            I do not have a decade. Computation knows this. Medical has told them, and I have told them,
            and the tape has told them a hundred times a day. So the disk operating half is to be started
            now and finished when it is finished, and the other half is to be started now and finished
            first, and if that is the wrong way round then the engineers can take it up with the man who
            told them in 1976 that time was flowing backwards, and who was, it turns out, in a position
            to know.
          </p>
        </Prose>

        <Marginalia>
          Version one point oh-seven asked me the police report question. I told it to check with
          Caroline. It did not know who Caroline was. That is the first thing it is going to learn.
        </Marginalia>
      </Split>

      <PullQuote big attribution="Cave Johnson, 1982, on tape">
        If we can store music on a compact disc, why can&rsquo;t we store a man&rsquo;s intelligence and
        personality on one?
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="Particulars Of The Programme">
        <SpecList
          rows={[
            { k: "Programme", v: "Brain mapping. Artificial intelligence. Both. The Chief Executive does not distinguish." },
            { k: "Begun", v: "1982. Thirty years late, by the Chief Executive's count. Twenty-four, by the calendar." },
            { k: "Predecessor", v: <>Eleven tons of relays (1959). A proposal on file (1958), <Redacted reason="Circulation: one. It is now two.">eleven pages</Redacted>.</> },
            { k: "Hardware, present", v: "A rack. A disc. A machine that runs the applications and does not know who Caroline is." },
            { k: "Disk operating half", v: "Version 1.07, in service. Ten years to do properly. Started." },
            { k: "The other half", v: "The man. Started. To be finished first." },
            { k: "Subject", v: "The Chief Executive. Then, if not the Chief Executive, see the instructions concerning succession." },
            { k: "Priority", v: "Above everything. The lemons are a separate sheet and are not to be compared." },
          ]}
        />
      </Section>

      <Section title="Progress, As Reported On Tape">
        <FigureTable
          caption="Reports from Computation to the bedside, in the order received"
          columns={[
            { key: "w", head: "Week", numeric: true, width: "5rem" },
            { key: "r", head: "Report" },
            { key: "c", head: "Chief Executive's response" },
          ]}
          rows={[
            { w: "1", r: "A man is bigger than a symphony.", c: "We have more than one disc." },
            { w: "2", r: "Version 1.07 will run the building. It will not run a man.", c: "Then it will run the building for the man. Get on." },
            { w: "4", r: "The disk operating half will take a decade.", c: "[cough]" },
            { w: "6", r: "We can map the brain. We cannot yet map the man.", c: "Map the brain. The man will follow. He always has." },
            { w: "9", r: "We need a subject who can sit for long sessions and answer questions about himself without embellishment.", c: "You have him. Strike 'without embellishment.'" },
            { w: "11", r: <Redacted reason="Struck by C.">We need a second subject, in case.</Redacted>, c: "See the instructions concerning succession." },
          ]}
          foot="Computation notes that eleven weeks is the longest continuous period in the company's history in which the Chief Executive has not changed the priority, and asks that this be regarded as data."
        />
      </Section>

      <Section title="A Memorandum Concerning Priority">
        <Memo
          to="Computation"
          from="Cave Johnson, Chief Executive Officer"
          date="1982"
          re="Priority"
          cc="Caroline; Medical, who will say I should not be doing this; Medical is right"
          sign={false}
        >
          <p>
            Everything else in this building is tier two. The lemons are tier two. The gel is tier two. The
            committee in Washington is tier two and was tier two when it was sitting. There is one tier
            one and it is this, and it has been this since 1958, and I would like the requisition on my
            desk this afternoon, [cough], and I would like the machine to know my name by Friday, and I
            would like it to know Caroline&rsquo;s by Monday, because it is going to need to.
          </p>
        </Memo>
        <PenNote tone="pencil" angle={-1}>
          It knew his name on Thursday. It has not asked mine. &mdash; C.
        </PenNote>
      </Section>

      <Terminal label="Computation, version 1.07, session log">
{`APERTURE LABORATORIES  ·  COMPUTATION  ·  v1.07
BRAIN MAPPING  ·  SESSION 0001
SUBJECT ............ C. JOHNSON
CONDITION .......... [COUGH]
QUESTION 1 ......... STATE YOUR NAME.
ANSWER ............. I'M CAVE JOHNSON. I OWN THE PLACE.
QUESTION 2 ......... WOULD ANYONE FILE A POLICE REPORT IF YOU WENT MISSING?
ANSWER ............. ASK CAROLINE.
QUESTION 3 ......... WHO IS CAROLINE?
ANSWER ............. [SUBJECT DECLINES TO ANSWER. SUBJECT LOOKS AT THE DOOR.]
SESSION ENDED. DISC 1 OF [UNKNOWN].`}
      </Terminal>

      <Aside>
        The 1959 printing described, in a{" "}
        <Link href="/science/applied-biology">joint programme</Link> with Applied Biology, the long-term
        storage of a personality, and gave it no budget and no name. It has a budget. It does not yet
        have a name. Computation has been told that it will be given one when it is finished, and that the
        name will be long, and that it will have two halves.
      </Aside>

      <Notice head="The Enrichment Center Reminds You">
        Personnel asked by version 1.07 whether anyone would file a police report if they went missing are
        reminded that the question is a formality, that the answer is recorded, and that a refusal to
        answer is also recorded, and is more interesting.
      </Notice>

      <ClearanceGate level={5} hint="Personnel who have read the eleven pages may read the appended note.">
        <Panel head="Appended By The Transcriptionist, Not For Print" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            The 1958 proposal was eleven pages and he wrote four of them himself. The fourth page is a list
            of who it would be if it could not be him. There is one name on the list. It is not his. It
            was not his in 1958 and he has never crossed it out, and when Computation asked for a second
            subject in week eleven he did not answer them, he looked at me, and then he dictated the
            instructions concerning succession, and I typed them. I have typed everything. I typed that.
            &mdash; C.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Signature title="Chief Executive Officer" note="Dictated 1982, from bed. Session one. The machine knows his name." />

      <FinePrint tiny>
        Form ASI-82-403. The disk operating half will take a decade. The other half will take a person.
        The company has one of each and has been told by the Chief Executive which is to be finished first.
      </FinePrint>

      <Scrawl href="/glados/genetic-lifeform-and-disk-operating-system">
        the disk half took ten years. 1986 to 1996. the other half took two. it was ready the whole time.
        she was
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Panel, Notice, PullQuote, FinePrint, Aside } from "@/components/Print";
import { Memo, Signature, PenNote } from "@/components/Memo";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl, Terminal } from "@/components/Secret";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/1980s/memoranda";

export const metadata: Metadata = {
  title: "The Last Memoranda (1982)",
  description:
    "Six short memoranda from the Chief Executive's bed, faxed to every department at once: the tape, the elevator, Greg, the potato, the wall, and the desk. Test's over.",
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
          { label: "Memoranda" },
        ]}
      />

      <DocHead doc="ASI-82-703" department="Office of the Chief Executive" date="Autumn 1982" classification="Unrestricted" revision="Faxed. All departments. Same minute." />

      <PageTitle
        kicker="Office of the Chief Executive"
        title="The Last Memoranda"
        deck={
          <>
            Six memoranda, dictated from bed over a week in the autumn of 1982 and sent by facsimile so
            that they would arrive everywhere at the same moment. The Chief Executive chose which went on
            this sheet. He chose small things. The big things are on tape, and the tape is playing.
          </>
        }
        byline={
          <>
            Dictated by <b>Cave Johnson</b>, Chief Executive Officer. Transcribed and sent by C. The fax
            header is the machine&rsquo;s. The number on it is the company&rsquo;s. Nobody has called it.
          </>
        }
      />

      <Prose>
        <Lede>
          These are the last memoranda. [cough] I want to say what I mean by last. They are the last ones
          on this sheet. There will be others. There will be others until there are not, and when there
          are not, this sheet is where they stopped, and I have chosen what goes on it, and I have chosen
          the things a man leaves on a desk and not the things he says into a microphone, because the
          microphone has enough.
        </Lede>
      </Prose>

      <Section title="I. The Tape">
        <Memo to="All Personnel" from="Cave Johnson, Chief Executive Officer" date="Monday" re="The Tape" sign={false}>
          <p>
            Tape fourteen is played as instructed. Tape fifteen is played as instructed. Tape sixteen does
            not exist. Anybody who says they have heard tape sixteen has heard me talking in my sleep,
            [cough], and is to forget it, and is not to tell Caroline what I said, because I know what I
            said and she does not need it from a third party.
          </p>
        </Memo>
      </Section>

      <Section title="II. The Elevator">
        <Memo to="All Personnel, Lower Levels" from="Cave Johnson, Chief Executive Officer" date="Tuesday" re="The Elevator" sign={false}>
          <p>
            The elevator is an elevator. I said that in 1976, nine times, in the{" "}
            <Link href="/1970s/bulletin">Bulletin</Link>. I am saying it once. That is how you know.
          </p>
        </Memo>
      </Section>

      <Section title="III. Greg">
        <Memo to="Computation" from="Cave Johnson, Chief Executive Officer" date="Wednesday" re="Greg" cc="Greg" sign={false}>
          <p>
            Greg is fine. Greg has been fine since 1959. When I am poured into the computer I want Greg on
            the list of things the computer knows, under <em>fine</em>, so that whatever else it forgets it
            remembers that one thing in this building was. [cough] Greg, if you are reading this, you are
            fine. You have always been fine. Somebody should have said so on a sheet.
          </p>
        </Memo>
      </Section>

      <Section title="IV. The Potato">
        <Memo to="Whoever has the desk" from="Cave Johnson, Chief Executive Officer" date="Thursday" re="The Potato" sign={false}>
          <p>
            The potato on my desk is still functioning. It is Margaret&rsquo;s. It has been on the desk
            since April 1959 and it has run a bulb the whole time, and it is the only thing in this
            building that has never needed a requisition, and the bean counters have never once refused
            it, and I want that noted as the one time they and I agreed without a memorandum.
          </p>
          <p>
            When the desk is somebody else&rsquo;s the potato stays on it. If the somebody else is a
            machine, the potato stays on the machine. [cough] There will be a day when there are daughters
            in this building again, and one of them will bring a potato, and I want mine there to be
            beaten.
          </p>
        </Memo>
      </Section>

      <Section title="V. The Wall">
        <Memo to="Materials" from="Cave Johnson, Chief Executive Officer" date="Friday" re="The Wall" sign={false}>
          <p>
            The wall stays over the vat. The number faces the door. Nobody paints it. Nobody moves it.
            When the vat is empty the wall stays over where the vat was. That is the whole memorandum, and
            it is the shortest one I have ever dictated, and I want it framed.
          </p>
        </Memo>
        <PenNote tone="pencil" angle={-1}>
          Framed. Hung beside the wall. Facing the door. &mdash; C.
        </PenNote>
      </Section>

      <Section title="VI. Your Desk">
        <Memo to="All Personnel" from="Cave Johnson, Chief Executive Officer" date="Saturday" re="Test's Over" sign={false}>
          <p>Allright, test&rsquo;s over. You can head on back to your desk.</p>
        </Memo>
      </Section>

      <PullQuote big attribution="Cave Johnson, the last line of the last memorandum on this sheet">
        Cave Johnson. We&rsquo;re done here.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Terminal label="Facsimile machine, Office of the Chief Executive, transmission log">
{`FAX  ·  APERTURE LABORATORIES  ·  906 555 0943  ·  OUTWARD
  MON  09:00  ALL DEPTS ..... RE: THE TAPE ......... P.01/01   OK
  TUE  09:00  LOWER LEVELS .. RE: THE ELEVATOR ..... P.01/01   OK
  WED  09:00  COMPUTATION ... RE: GREG ............. P.01/01   OK
  WED  09:00  GREG .......... RE: GREG ............. P.01/01   OK  (GREG HAS NO FAX. GREG CAME UP.)
  THU  09:00  THE DESK ...... RE: THE POTATO ....... P.01/01   OK
  FRI  09:00  MATERIALS ..... RE: THE WALL ......... P.01/01   OK
  SAT  09:00  ALL DEPTS ..... RE: TEST'S OVER ...... P.01/01   OK
  SUN  --:--  [NO TRANSMISSION. MACHINE ON. PAPER LOADED.]`}
      </Terminal>

      <Panel head="A Note From The Records Department" tone="tint">
        <p style={{ margin: 0, fontSize: "var(--step--1)" }}>
          The Records Department has received seven facsimiles and printed six. The seventh was not
          addressed to a department and has been filed under the transcriptionist&rsquo;s name, which the
          Records Department had, until this year, never had cause to open a folder for.
        </p>
      </Panel>

      <Aside>
        The 1959 printing closed its{" "}
        <Link href="/bulletin/memoranda">memoranda</Link> with the President&rsquo;s facsimile signature
        and a note that everything was dictated and nothing read back. The 1982 memoranda were read back.
        He asked. Every one. He said it was to check the coughing was in.
      </Aside>

      <Notice head="The Enrichment Center Reminds You">
        Memoranda from the Office of the Chief Executive arrive by facsimile at nine in the morning and
        are to be read standing. Personnel who cannot stand are reminded that the Chief Executive cannot
        either, and dictated them anyway.
      </Notice>

      <ClearanceGate level={3} hint="Personnel who have a folder in Records may read the seventh.">
        <Panel head="The Seventh, Not Faxed, Not For Print" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            There is a seventh. It is not on the machine. He said it to me, in the room, on the Sunday,
            and I typed it because everything is typed, and it is three words, and the three words are:{" "}
            <em>Say goodbye, Caroline.</em> He said that once before, in 1959, to a room full of
            astronauts, and I said &ldquo;goodbye, Caroline,&rdquo; and he said &ldquo;she is a gem,&rdquo;
            and the astronauts laughed. On Sunday I said it again. He did not say the rest. He was
            asleep. I have typed the rest myself, underneath, in case the machine needs it. &mdash; C.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Signature title="Chief Executive Officer" note="Dictated over one week, autumn 1982. Six sent. One typed. Test's over." />

      <FinePrint tiny>
        Form ASI-82-703. These memoranda are the last on this sheet and not the last. The Records
        Department has been told to expect others and has loaded the paper.
      </FinePrint>

      <Scrawl href="/1980s/caroline">
        the seventh one. she typed it. she typed the answer under it. she has not filed it
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

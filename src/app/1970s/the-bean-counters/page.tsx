import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Stamp, Panel, Notice, PullQuote, FinePrint, Aside } from "@/components/Print";
import { Memo, Signature, PenNote } from "@/components/Memo";
import { FigureTable } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/1970s/the-bean-counters";

export const metadata: Metadata = {
  title: "The Bean Counters (1976)",
  description:
    "They said we could not afford seven dollars of moon rocks. This is the memorandum in which they said it, the Chief Executive's reply, and the wall on which he wrote the number.",
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
          { label: "Bean Counters" },
        ]}
      />

      <DocHead doc="ASI-76-601" department="Accounts Department" date="1976" classification="Unrestricted" revision="Two memoranda, one reply, one wall" />

      <div className="ap-rel">
        <Stamp float sub="Accounts Department">
          Refused
        </Stamp>
        <PageTitle
          kicker="Accounts Department"
          title="The Bean Counters"
          deck={
            <>
              They said we could not afford seven dollars of moon rocks. This is the memorandum in which
              they said it, reproduced in full at the Chief Executive&rsquo;s insistence, with his reply,
              also in full, also at his insistence, and a note on where the number went afterwards.
            </>
          }
          byline={
            <>
              Compiled by <b>Cave Johnson</b>, Chief Executive Officer, from his drawer. Transcribed by C.
              The Accounts Department has asked to be described as the Accounts Department. It is
              described below.
            </>
          }
        />
      </div>

      <Prose>
        <Lede>
          I keep the bean counters because a man with no money needs somebody to tell him so every
          morning, and I have found that I prefer to hear it from people I can fire. I have not fired
          them. I want that on the record too. In seventeen years of refusals I have not fired one of
          them, and I would like you to read the memorandum below and ask yourself whether you could have
          managed that, and then read my reply and ask yourself whether I did.
        </Lede>
      </Prose>

      <Section title="The Memorandum">
        <Memo
          to="Office of the Chief Executive"
          from="The Accounts Department"
          date="1976"
          re="Requisition L-7: Lunar Material, $7.00"
          cc="Materials; the Lunar Substrate Division, which the Department understands to be one man"
          sign={false}
        >
          <p>
            The Department has reviewed Requisition L-7, submitted by the Office of the Chief Executive in
            the sum of seven dollars ($7.00), for lunar material, quantity unspecified, supplier
            unspecified, purpose stated as &ldquo;to see.&rdquo;
          </p>
          <p>
            The Department regrets that the company cannot at present meet this expenditure. The
            Department notes that the company cannot at present meet the electric bill, the paint bill,
            the retainer of the Legal Department (since departed), or the interest on the facility, and
            that seven dollars, while small, is seven dollars the company does not have.
          </p>
          <p>
            The Department notes further that the Chief Executive&rsquo;s covering note describes the seven
            dollars as &ldquo;a start&rdquo; and refers to an eventual figure of seventy million dollars
            ($70,000,000). The Department has no comment on the eventual figure beyond observing that it
            exceeds the company&rsquo;s assets, its liabilities, the Department, and the moon.
          </p>
          <p>Requisition L-7 is returned unpaid. The Department remains at the Chief Executive&rsquo;s disposal.</p>
        </Memo>
      </Section>

      <Section title="The Reply">
        <Memo
          to="The Accounts Department"
          from="Cave Johnson, Chief Executive Officer"
          date="1976, the same afternoon"
          re="Your Memorandum"
          sign={false}
        >
          <p>
            Seven dollars. I have seen the number. I have written the number on the wall of my office,
            over the desk, where the letter from New Mexico used to hang, and I have underlined it, and
            every man who comes into this office from now until the day I leave it is going to look at
            that number and know who wrote it and who made me.
          </p>
          <p>
            You are right that we cannot afford it. You are right about the electric bill. You were right
            about the ramps, in 1958, and I did it anyway, and you were right about the meteorites, and I
            did it anyway, and there is not one thing this company has ever built that you did not first
            tell me we could not afford, and I want you to understand that I am not saying this to
            insult you. I am saying it because you are the most reliable instrument in the building. When
            you say no, I know I am looking at the right thing.
          </p>
          <p>
            One day I am going to buy the seventy million. When I do I am going to have the wall taken
            down and shipped up there with it. Requisition L-7 is resubmitted. It will be resubmitted
            every Monday. You remain at my disposal. That is the arrangement.
          </p>
        </Memo>
        <PenNote tone="pencil" angle={-1}>
          Resubmitted every Monday since. Returned every Monday since. Both of them keep the copies.
          &mdash; C.
        </PenNote>
      </Section>

      <PullQuote big attribution="Cave Johnson, 1959, on the bean counters, historically">
        Bean counters said I couldn&rsquo;t fire a man just for being in a wheelchair. Did it anyway. Ramps
        are expensive.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="Requisitions Refused, 1976">
        <FigureTable
          caption="Requisitions returned unpaid by the Accounts Department in the present year, with the Chief Executive's remarks"
          columns={[
            { key: "n", head: "No.", width: "4.5rem" },
            { key: "i", head: "Item" },
            { key: "s", head: "Sum", numeric: true, width: "6rem" },
            { key: "r", head: "Chief Executive's remark" },
          ]}
          rows={[
            { n: "L-7", i: "Lunar material, to see", s: "$7.00", r: "On the wall. Underlined." },
            { n: "P-2", i: "Blue paint, one line, floor", s: "$41.00", r: "Repulsion gel not tested this year. Follow the orange line." },
            { n: "E-1", i: "Sign for the elevator, reading 'ELEVATOR'", s: "$12.50", r: "Addressed the lower levels personally instead. See the Bulletin." },
            { n: "C-3", i: "Commissary, reopening of", s: "—", r: "The blancmange is remembered." },
            { n: "B-1", i: "Bowling league, lanes, two", s: "—", r: "Mr. Pike bowled alone on both. Mr. Pike has been asked. The lanes are gone." },
            { n: "LG-1", i: "Legal Department, retention of", s: "—", r: "Legal has left. Legal was right to." },
            { n: "H-9", i: "Hatch, Test Shaft 09, new sign", s: "$9.00", r: "The old sign says condemned. The old sign is fine. The offices behind it are fine." },
            { n: "—", i: "Mr. Pike's drawer", s: <Redacted reason="Not submitted. Never submitted.">Not submitted</Redacted>, r: "There is no requisition for the drawer. The drawer is not the Department's affair." },
          ]}
          foot="The Department notes that requisition L-7 appears once in this table and fifty-two times in its files."
        />
      </Section>

      <Panel head="The Department's Position" tone="tint">
        <p style={{ margin: 0, fontSize: "var(--step--1)" }}>
          The Accounts Department has read the reply and has asked that the following be printed
          beneath it: the Department has never once said that a thing could not be done. It has said
          that a thing could not be paid for. The Department regards the distinction as the whole of
          accountancy and the Chief Executive regards it as the whole of Aperture Science, and the two
          have agreed, in writing, on a Monday, that they are describing the same building.
        </p>
      </Panel>

      <Aside>
        The 1959 printing carried a{" "}
        <Link href="/science/lunar">Lunar Substrate Programme</Link> with eleven hundred and forty pounds
        of meteoritic material in the inventory. The Department notes that it refused that requisition
        too, and that the material was bought, and that the man who bought it grinds his own at seven in
        the morning without a mask, and that the Department has a memorandum about that as well, and
        that the memorandum is also in the drawer.
      </Aside>

      <Notice head="The Enrichment Center Reminds You">
        Requisitions are to be submitted in triplicate to the Accounts Department, which will return them
        in triplicate, and personnel are asked to keep their copy, because the Chief Executive keeps
        his.
      </Notice>

      <ClearanceGate level={3} hint="Personnel who refill the drawer may read the appended note.">
        <Panel head="Appended By The Transcriptionist, Not For Print" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            The seven dollars was mine. I put it in the requisition envelope the third Monday so that he
            would stop. He found it, and he stood at the window with it for a long time, and then he took
            it down to Mr. Pike and put it in the drawer for the vouchers and said Accounts had relented.
            Accounts did not relent. He knows whose it was. He has never said so. The sample he ground at
            the bench came from somewhere else and I do not know where, and I have stopped asking, because
            the last time I asked he said &ldquo;a start,&rdquo; and coughed. &mdash; C.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Signature title="Chief Executive Officer" note="Compiled 1976. The number is on the wall. It has been read." />

      <FinePrint tiny>
        Form ASI-76-601. The Accounts Department is not responsible for the wall. The Chief Executive is
        not responsible for the Accounts Department. Both are responsible for the company, and the company
        is in receivership, and the receiver has been shown the wall.
      </FinePrint>

      <Scrawl href="/1980s/conversion-gel">
        seventy million. he bought them anyway. the wall went up there with them. so did he
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

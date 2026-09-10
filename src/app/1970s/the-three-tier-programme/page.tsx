import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Stamp, Panel, Notice, PullQuote, FinePrint, Marginalia, Split, Aside } from "@/components/Print";
import { Memo, Signature, PenNote } from "@/components/Memo";
import { FigureTable, KeyFigures } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/1970s/the-three-tier-programme";

export const metadata: Metadata = {
  title: "The Three-Tier Research Programme (1976)",
  description:
    "Tier one, the Heimlich Counter-Manoeuvre. Tier two, the Take-A-Wish Foundation. Tier three, a rip in the fabric of space. Cave Johnson's 1976 research programme, dictated with failing kidneys and time flowing backwards.",
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
          { label: "Three Tiers" },
        ]}
      />

      <DocHead doc="ASI-76-400" department="Research & Development" date="1976" classification="Unrestricted" revision="Dictated in one sitting. Sitting was medically advised." />

      <div className="ap-rel">
        <Stamp float sub="Time is flowing backwards">
          Priority
        </Stamp>
        <PageTitle
          kicker="Research & Development"
          title="The Three-Tier Research Programme"
          deck={
            <>
              The whole of Aperture Science&rsquo;s research, reorganised into three tiers by the Chief
              Executive in the autumn of 1976, on the back of a chart from Medical, in one sitting. The
              third tier is the hole. He put it third on purpose.
            </>
          }
          byline={
            <>
              Dictated by <b>Cave Johnson</b>, Chief Executive Officer. Transcribed by C. Medical has
              asked that the first paragraph be read as a symptom. The Chief Executive has asked that it be
              read as a plan.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            My kidneys have failed. The doctors say so, and the doctors were right about the kidneys,
            which is the first thing they have been right about since 1953, and so I have to allow that
            they may be right about the rest. Here is the rest. Time is now flowing backwards. I am
            incapable of being convinced otherwise. I have asked to be convinced. I have had three men in
            here with charts. Nobody has managed it, and a man who cannot be convinced of a thing is
            obliged to plan for it, and this is the plan.
          </Lede>
          <p>
            If time is flowing backwards then the thing I do last is the thing I do first, and so I have
            put the whole of this company&rsquo;s research into three tiers, and I have put the important
            thing third, and I want every department to read the tiers in the order printed and to
            understand that the order printed is not the order in which they will happen.
          </p>

          <h2>Tier One</h2>
          <p>
            The <Link href="/products/heimlich-counter-maneuver">Heimlich Counter-Manoeuvre</Link>. A
            reliable technique for interrupting the Heimlich Manoeuvre. We announced it in 1959. We have
            not finished it, because every time we get a man to the point of choking, somebody in the room
            performs the Manoeuvre on him out of habit, and the habit is exactly what the Counter-Manoeuvre
            is for, and so the test succeeds by failing, and the lab boys have a word for that and the word
            is <em>Tuesday</em>. Tier one is the one with the federal interest. There is a subcommittee
            that would like to know why anybody needs it. I would like the subcommittee to choke on
            something and find out.
          </p>

          <h2>Tier Two</h2>
          <p>
            The <Link href="/products/take-a-wish-foundation">Take-A-Wish Foundation</Link>. A charitable
            organisation that takes wishes from terminally ill children and gives them to wish-deprived
            but otherwise healthy adults. It is a foundation. It is also a research programme, because
            the wishes are data, and because the one hundred and seventy-one children who wished for a
            friend who stays have given this company more to think about than the whole of Applied
            Sciences has since the war. Tier two pays for tier three. That is what a foundation is for.
          </p>

          <h2>Tier Three</h2>
          <p>
            A rip in the fabric of space. Shower-curtain-adjacent. Tier three is the hole, and it has
            been the hole since 1953, and it is tier three because tiers one and two will pay for it,
            and because a man who reads a list of three remembers the last one. That is not a trick.
            That is how lists work, and I have been making lists since the garage. The hole goes where it
            can be remembered.
          </p>
          <p>
            If time is flowing backwards, tier three is first. I want that understood. Everybody in this
            building who has ever asked me what we are doing here has been given an answer with the word{" "}
            <em>eventually</em> in it, and the word is now struck, on every sheet, because eventually
            has already happened and we are working our way back to it.
          </p>
        </Prose>

        <Marginalia>
          Alright, this next test may involve trace amounts of time travel. So, word of advice: if you
          meet yourself on the testing track, don&rsquo;t make eye contact. I said that in 1959 as a joke.
          Medical has asked me to stop saying it was a joke.
        </Marginalia>
      </Split>

      <PullQuote big attribution="Cave Johnson, 1976, on the back of a chart from Medical">
        Tier three is the hole. I put it third on purpose.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="The Programme, As Tiered">
        <KeyFigures
          items={[
            { value: "I", label: "Heimlich Counter-Manoeuvre", note: "Federal interest. Not finished. Tuesday." },
            { value: "II", label: "Take-A-Wish Foundation", note: "Pays for III. 171 friends who stay." },
            { value: "III", label: "A rip in the fabric of space", note: "The hole. Shower-curtain-adjacent. First, if backwards." },
          ]}
        />
        <FigureTable
          caption="Allocation of research effort by tier, autumn 1976"
          columns={[
            { key: "t", head: "Tier", width: "4rem" },
            { key: "p", head: "Programme" },
            { key: "s", head: "Staff", numeric: true, width: "5rem" },
            { key: "b", head: "Budget" },
            { key: "st", head: "Status" },
          ]}
          rows={[
            { t: "I", p: "Heimlich Counter-Manoeuvre", s: "4", b: "The subcommittee's, if they ask nicely", st: "Succeeding by failing" },
            { t: "II", p: "Take-A-Wish Foundation", s: "6", b: "Self-funding; see the Foundation", st: "171 units marked by hand. Not in the catalogue." },
            { t: "III", p: "A rip in the fabric of space", s: <Redacted reason="Everybody. It has always been everybody.">Remainder</Redacted>, b: "Tiers I and II", st: "Open since 1953. Has not closed." },
          ]}
          foot="Staff figures exclude the Chief Executive, who is in all three tiers, and Caroline, who is in none of them and runs all three."
        />
      </Section>

      <Section title="The Memorandum">
        <Memo
          to="All Departments"
          from="Cave Johnson, Chief Executive Officer"
          date="Autumn 1976"
          re="Reorganisation Of Research Into Three Tiers"
          cc="Medical, who will want to see this; Caroline, who has seen it"
          sign={false}
        >
          <p>
            Effective on receipt, all research at Aperture Science is assigned to one of three tiers. A
            department that cannot say which tier it is in is in tier three and should report to the
            shaft. A department that says it is in tier one is asked to demonstrate on a volunteer. A
            department that says it is in tier two is asked whether it has a wish, and if so, to hand it
            over.
          </p>
          <p>
            Departments are reminded that the tiers are printed in the order in which they will be paid
            for and not the order in which they matter, and that time is at present flowing backwards,
            and that the Chief Executive is not accepting correspondence on the second point.
          </p>
        </Memo>
        <PenNote tone="pencil" angle={-1.1}>
          He wrote the tiers on the back of the kidney chart. Tiers one and two are in pencil. Tier three
          is in ink. &mdash; C.
        </PenNote>
      </Section>

      <Aside>
        The Records Department notes that a 1958 proposal on file, concerning the permanent storage of
        a person, is not assigned to any tier. The Chief Executive has been asked which tier it belongs
        to and has said that it belongs to all of them, and then that it belongs to none of them, and
        then that it is not a research programme, it is a requisition.
      </Aside>

      <Notice head="The Enrichment Center Reminds You">
        If you meet yourself on the testing track, do not make eye contact. This instruction now appears
        on every plate, at every landing, in every shaft, immediately below the nineteenth rule, and
        personnel are asked to regard it as the twentieth.
      </Notice>

      <ClearanceGate level={3} hint="Personnel who have read the chart may read the appended note.">
        <Panel head="Appended By The Transcriptionist, Not For Print" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            Medical says the kidneys are the moon. Not the meteorites, which he handled in gloves; the
            dust off the seven-dollar sample that Accounts refused and that he obtained anyway, and
            ground himself, at the bench, without a mask, at seven in the morning when nobody was down
            there. He says it was to see. He has always ground his own. There is going to be more of it.
            He has said so. He has put it in a tier. &mdash; C.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Signature title="Chief Executive Officer" note="Dictated autumn 1976, seated. Medical was present. Medical has initialled the chart." />

      <FinePrint tiny>
        Form ASI-76-400. Tier three is not a security classification. Anybody who uses it as one has
        missed the point, and the point is the hole. Retain until time resumes its ordinary direction,
        at which time this sheet will already have been retained.
      </FinePrint>

      <Scrawl href="/terminal">
        the password is the tier. the important one. he told the machine the same thing he told the
        senator
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

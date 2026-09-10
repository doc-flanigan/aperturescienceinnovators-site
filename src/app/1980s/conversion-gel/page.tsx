import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Panel, Notice, PullQuote, FinePrint, Marginalia, Split, Aside } from "@/components/Print";
import { Memo, Signature, PenNote } from "@/components/Memo";
import { FigureTable, SpecList } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl, Terminal } from "@/components/Secret";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/1980s/conversion-gel";

export const metadata: Metadata = {
  title: "Conversion Gel (1982)",
  description:
    "Seventy million dollars of moon rocks, ground up, mixed into a gel. Pure poison. A great portal conductor. The 1982 leeching trial, in which the Chief Executive is subject zero.",
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
          { label: "Conversion Gel" },
        ]}
      />

      <DocHead doc="ASI-82-205" department="Materials" date="1982" classification="Unrestricted" revision="Dictated on tape. [cough]" />

      <PageTitle
        kicker="Materials"
        title="Conversion Gel"
        deck={
          <>
            The white one. Listed in the <Link href="/products/conversion-gel">1959 catalogue</Link> as a
            thing this company intended to make out of a thing it intended to buy. It has bought it. It has
            made it. Both facts are on the label, and so is a third.
          </>
        }
        byline={
          <>
            Dictated by <b>Cave Johnson</b>, Chief Executive Officer, from bed, to Materials. Transcribed by
            C. Results compiled by Materials and by Medical, who have asked to be listed separately.
          </>
        }
      />

      <Split weight="wide-left">
        <Prose>
          <Lede>
            First up, conversion gel. [cough] The bean counters told me we literally could not afford to
            buy seven dollars worth of moon rocks, much less seventy million. Bought &rsquo;em anyway. Ground
            &rsquo;em up, mixed em into a gel.
          </Lede>
          <p>And guess what? Ground up moon rocks are pure poison. I am deathly ill.</p>
          <p>
            Still, it turns out they&rsquo;re a great portal conductor. So now we&rsquo;re gonna see if
            jumping in and out of these new portals can somehow leech the lunar poison out of a man&rsquo;s
            bloodstream. When life gives you lemons, make lemonade. [coughs] Let&rsquo;s all stay positive
            and do some science.
          </p>

          <h2>What It Is</h2>
          <p>
            Conversion gel is the moon, ground fine, in a carrier. You paint it on a surface and the surface
            will take a portal. That is the whole of it and it is the thing this company has wanted since
            1953, when the hole came out of the wrong wall and the lab boys told me that it would only ever
            come out of certain walls, and I asked which, and they said the ones made of the moon, and I
            said then we will buy the moon, and the bean counters said no, and here we are. [cough] Twenty-nine
            years. Seventy million dollars. One wall, with a number on it, shipped up with the rocks and
            hung in the mixing room over the vat.
          </p>

          <h2>What It Does To A Man</h2>
          <p>
            It kills him. I want to be plain about that because I have been plain about everything else
            and I am not going to start hedging now. The 1959 sheet on the{" "}
            <Link href="/science/lunar">Lunar Substrate Programme</Link> said the meteorites were a
            respiratory poison in any quantity, at any exposure, with no threshold, and it said it on the
            label, and I read the label, and I ground my own at seven in the morning without a mask for
            twenty years because I wanted to see. I have seen. Medical has a chart. The chart has a line on
            it and the line goes one way.
          </p>

          <h2>The Leeching Trial</h2>
          <p>
            Here is the idea, and it is a good idea, and I want it understood that I would think it was a
            good idea even if it were not my bloodstream. The gel conducts the portal. The poison is the
            gel. A man who goes through the portal is, for the length of the transit, in a place where the
            gel is the wall, and the lab boys think the wall may take the poison back. Like calls to like.
            [cough] So we send a man through, and we sample him, and we send him through again, and we
            sample him again, and we see which way the line goes.
          </p>
          <p>
            That said, I would really appreciate it if you could test as fast as possible. Caroline,
            please bring me more pain pills.
          </p>
        </Prose>

        <Marginalia>
          We haven&rsquo;t entirely nailed down what element it is yet. That was the orange one. This one we
          have nailed down. It is the moon. It was always going to be the moon.
        </Marginalia>
      </Split>

      <PullQuote big attribution="Cave Johnson, 1982, on tape">
        Ground up moon rocks are pure poison. I am deathly ill.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="Particulars Of The Substance">
        <SpecList
          rows={[
            { k: "Designation", v: "Conversion gel. The white one." },
            { k: "Base", v: "Lunar material, seventy million dollars, ground fine" },
            { k: "Carrier", v: <Redacted reason="Struck by Materials. It is what was in the vat already.">Proprietary</Redacted> },
            { k: "Conductivity", v: "The finest conductor of quantum tunnelling fields ever measured. Still." },
            { k: "Toxicity", v: "Pure poison. Both facts on the label. The label is now very long." },
            { k: "Listed", v: <>1959 catalogue, <Link href="/products/conversion-gel">not yet available</Link></> },
            { k: "Available", v: "Yes. That is the difference between 1959 and now. That and the coughing." },
            { k: "The wall", v: "In the mixing room, over the vat. The number faces the door." },
          ]}
        />
      </Section>

      <Section title="Results, Leeching Trial, First Series">
        <FigureTable
          caption="Lunar load in the bloodstream before and after portal transit, as sampled by Medical"
          columns={[
            { key: "s", head: "Subject" },
            { key: "t", head: "Transits", numeric: true, width: "5.5rem" },
            { key: "b", head: "Load, before", numeric: true, width: "7rem" },
            { key: "a", head: "Load, after", numeric: true, width: "7rem" },
            { key: "r", head: "Remark" },
          ]}
          rows={[
            { s: "Employee, Accounts", t: "6", b: "Nil", a: "Trace", r: "The wall gave. It did not take." },
            { s: "Employee, Materials", t: "12", b: "Low", a: "Low", r: "No change. Subject asked to stop. Subject reminded testing is mandatory." },
            { s: "Employee, Print Shop", t: "20", b: "Low", a: "Moderate", r: "The line went the other way. Medical has the chart. Medical has the subject." },
            { s: "Greg", t: "9", b: "Nil", a: "Nil", r: "Fine." },
            { s: "Chief Executive", t: "11 (he insists)", b: "High", a: <Redacted reason="Struck by Medical. Reinstated by the Chief Executive as ‘a start’.">Higher</Redacted>, r: "A start." },
          ]}
          foot="Medical notes that in no subject did the load decrease, that in one it increased, and that the Chief Executive has described this as informative. Medical has asked that the word ‘informative’ be attributed."
        />
      </Section>

      <Section title="A Memorandum Concerning Masks">
        <Memo
          to="Materials; the Lunar Substrate Division; anyone at the bench"
          from="Cave Johnson, Chief Executive Officer"
          date="1982"
          re="Masks"
          sign={false}
        >
          <p>
            Masks are mandatory at the bench. [cough] This instruction is issued by a man who did not wear
            one and is issued for that reason. Anybody who wants to argue the point can come upstairs and
            look at me, and then go back down and put the mask on, and I will know whether he has, because
            the tape is always running and Caroline tells me who comes up.
          </p>
          <p>
            The wall stays where it is. Nobody touches the wall. The wall is the reason for the masks and
            I want the two things in the same room so that the reason is never in doubt.
          </p>
        </Memo>
        <PenNote tone="pencil" angle={-1}>
          Masks were issued in 1959. He has one. It is in the drawer. &mdash; C.
        </PenNote>
      </Section>

      <Terminal label="Medical, bedside chart, extract">
{`MEDICAL  ·  OFFICE OF THE CHIEF EXECUTIVE  ·  1982
SUBJECT ........ C. JOHNSON, 73
AGENT .......... LUNAR SUBSTRATE, GROUND, INHALED, 1961-82
LOAD ........... HIGH     TREND ...... [ONE WAY]
TRANSITS ....... 11 (SUBJECT'S COUNT)   9 (MEDICAL'S)
TREATMENT ...... PORTAL TRANSIT (TRIAL)   PAIN PILLS (CAROLINE)
PROGNOSIS ...... SUBJECT DECLINES TO HEAR IT
NOTE ........... SUBJECT SAYS "A START." SUBJECT COUGHS.`}
      </Terminal>

      <Aside>
        The 1976 printing carried a{" "}
        <Link href="/1970s/the-bean-counters">memorandum from the Accounts Department</Link> refusing seven
        dollars of this material. The Accounts Department has been shown the vat and has asked that it be
        recorded that the Department was right about the seven dollars and has said nothing about the
        seventy million, because there was nothing to say.
      </Aside>

      <Notice head="The Enrichment Center Reminds You">
        Conversion gel is applied to surfaces. It is not applied to personnel. Personnel who find that it
        has been applied to them are to report to Medical, and are reminded that Medical is on the way to
        the testing track, and that testing is mandatory.
      </Notice>

      <ClearanceGate level={3} hint="Personnel who go down to the mixing room may read the appended note.">
        <Panel head="Appended By The Transcriptionist, Not For Print" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            The wall went up with them. He had it crated and shipped and hung over the vat with the number
            facing the door, and he used to go down and look at it, and he cannot go down any more, so I
            go down, and I come back up and tell him it is still there. It is still there. He asks every
            day. He does not ask about the line on the chart. He knows which way the line goes. He has
            known since 1976, when Medical told him about the kidneys, and he put it in a tier. &mdash; C.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Signature title="Chief Executive Officer" note="Dictated 1982, from bed. Subject zero. A start." />

      <FinePrint tiny>
        Form ASI-82-205. Conversion gel is pure poison and a great portal conductor, and the company has
        printed both facts on the label in the order the Chief Executive dictated them, which is this
        order.
      </FinePrint>

      <Scrawl href="/1980s/the-lemon-memorandum">
        he said make lemonade. on tape. he is thinking about it. he is going to change his mind about the
        lemons
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

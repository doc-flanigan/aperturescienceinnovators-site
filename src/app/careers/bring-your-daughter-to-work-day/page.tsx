import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Row, Aside, IndexCard,
} from "@/components/Print";
import { PenNote } from "@/components/Memo";
import { FigureTable, SpecList, KeyFigures } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { Starburst } from "@/components/svg/Ornament";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Bring Your Daughter To Work Day",
  description:
    "The Enrichment Center's beloved annual science fair, and this year's prize-winning entries — potato batteries, volcanoes, a rock collection, and one title the judges will not print.",
};

export default function Page() {
  const { prev, next } = neighbours("/careers/bring-your-daughter-to-work-day");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/careers", label: "Careers" },
          { label: "Daughter To Work Day" },
        ]}
      />

      <DocHead
        doc="ASI-504"
        department="Personnel"
        classification="Unrestricted"
        revision="Sixth annual. Photograph captions retained; photographs not."
        extra={[{ label: "Held", value: "Fourth Saturday in April" }]}
      />

      <div className="ap-rel">
        <Stamp float tone="green" sub="Sixth Annual">
          Science Fair
        </Stamp>
        <PageTitle
          advertising
          kicker="Personnel — The Fourth Saturday In April"
          title="Bring Your Daughter To Work Day"
          deck={
            <>
              Six years running, the one Saturday a year the Enrichment Center is full of children, the
              commissary bakes, the President judges, and the gate ledger is allowed to be wrong on
              purpose. This year&rsquo;s fair drew ninety-one entries and the judging took until dark.
            </>
          }
          byline={
            <>
              Written by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}, who judged every entry
              personally and would like that known
            </>
          }
        />
      </div>

      <Row style={{ gap: "2rem", alignItems: "center" }}>
        <Starburst label="91" sub="ENTRIES" style={{ width: 120, flex: "0 0 auto", color: "var(--accent)" }} />
        <Prose>
          <Lede>
            I look forward to this Saturday more than any day in the company&rsquo;s year, and I want to
            explain why, because people assume it is sentiment. It is not sentiment. A child asks the
            question a grown man has trained himself not to ask, and every year at least one of them asks
            me something on the commissary floor that I take upstairs on Monday and fund.
          </Lede>
        </Prose>
      </Row>

      <KeyFigures
        items={[
          { value: "91", label: "Entries", note: "Up from 64" },
          { value: "88", label: "Children attending", note: "Three entered twice" },
          { value: "1", label: "Judge", note: "Me" },
          { value: "$60", label: "First prize", note: "Cash. From the tin." },
          { value: "0", label: "Descents", note: "Not below Sub-Level 1. Ever." },
        ]}
      />

      <Section title="This Year's Prize-Winners">
        <FigureTable
          caption="Sixth annual science fair, Sub-Level 1 commissary floor, April 1959"
          columns={[
            { key: "place", head: "Place" },
            { key: "name", head: "Entrant" },
            { key: "title", head: "Project" },
            { key: "note", head: "Judge's note" },
          ]}
          rows={[
            { place: "First", name: "Margaret, age 11", title: "A Potato Battery That Runs A Bulb", note: "The potato is still functioning. It has been on my desk since April. It is still functioning." },
            { place: "Second", name: "Ruth, age 9", title: "Volcano (Baking Soda)", note: "Erupted eleven times. Three were scheduled." },
            { place: "Third", name: "Dolores, age 12", title: "Rocks Of The Upper Peninsula, Labelled", note: "One rock is not from the Upper Peninsula. She knows which. She would not say." },
            { place: "Honourable", name: "Joan, age 10", title: "How A Shower Curtain Works", note: "Correct in every particular. I have hired her for 1966." },
            { place: "Honourable", name: "Anne, age 8", title: "My Father's Job", note: "A drawing of the gate house. Mr. Pike is in it. Mr. Pike wept." },
            { place: "Honourable", name: "Patricia, age 11", title: "Why Momentum Is Conserved", note: "She derived it. On a card. With a crayon." },
            {
              place: "Not placed",
              name: <Redacted reason="Entrant's name withheld at the parent's request">Withheld</Redacted>,
              title: <Redacted reason="The judges will not print the title. The President has read it twice.">Withheld</Redacted>,
              note: "See below.",
            },
          ]}
          foot="First prize is sixty dollars, cash, from the same tin as the volunteer programme, because the President holds that a child who has built a working thing has done an afternoon's work."
        />
      </Section>

      <Marginalia>
        Margaret&rsquo;s potato battery has run a bulb continuously since the fourth Saturday in April.
        Applied Sciences asked to examine it. I said no. It is a potato and it is hers.
      </Marginalia>

      <Section title="Photograph Captions">
        <Prose>
          <p>
            The Art Department was reorganised into the Materials Department in the spring and did not come
            back, so there are no photographs of this year&rsquo;s fair. The captions were written before
            the reorganisation and Personnel has asked that they be printed anyway, so that the day is on
            the record.
          </p>
        </Prose>
        <Row style={{ gap: "1rem", flexWrap: "wrap", alignItems: "stretch" }}>
          <IndexCard>
            <p style={{ margin: 0 }}>
              <b>FIG. 1.</b> The President, at the commissary door, eight o&rsquo;clock. Eighty-eight
              children. He shook every hand and asked every name and has, Personnel is able to confirm,
              remembered all eighty-eight.
            </p>
          </IndexCard>
          <IndexCard>
            <p style={{ margin: 0 }}>
              <b>FIG. 2.</b> The volcano, mid-eruption, unscheduled. Ruth, foreground, delighted. Materials,
              background, taking notes.
            </p>
          </IndexCard>
          <IndexCard>
            <p style={{ margin: 0 }}>
              <b>FIG. 3.</b> Mr. Pike, at the gate house, with Anne&rsquo;s drawing. The gate ledger, for
              the only day in the year, open on the counter with the up column deliberately left blank
              until the last child is out.
            </p>
          </IndexCard>
          <IndexCard>
            <p style={{ margin: 0 }}>
              <b>FIG. 4.</b> The cake. Real. Chocolate. One candle. The commissary bakes one cake a year
              and this is the day, and{" "}
              <Redacted reason="The commissary asked for this sentence">
                it is the only cake this building has ever actually produced.
              </Redacted>
            </p>
          </IndexCard>
        </Row>
      </Section>

      <PullQuote big attribution={`${COMPANY.founder}, to the assembled children, April 1959`}>
        You are here because we want the best, and one day you are going to be it, and I would like to be
        around to see that, and I intend to be.
      </PullQuote>

      <Notice head="The Enrichment Center Reminds You">
        The science fair is held on Sub-Level 1 and nowhere else. No child descends. No child has ever
        descended. The Enrichment Center is required to remind personnel of this and is glad, for once, to
        be reminding personnel of a rule that has never once been broken.
      </Notice>

      <Section title="The Entry That Was Not Placed">
        <Prose>
          <p>
            Ninety-one entries. Ninety were judged, placed or not placed, and their titles are on the
            board in the commissary for anybody to read. One was withdrawn by its parent before judging, at
            the parent&rsquo;s request, and I have agreed not to print the title, and I have read it twice,
            and I am going to say only that it was the best entry in the room and that the child was eight
            years old.
          </p>
        </Prose>
      </Section>

      <ClearanceGate level={4} hint="Senior Associate grade or above. The withdrawn entry is on Sub-Level 7.">
        <Panel head="Personnel — The Withdrawn Entry" tone="red">
          <SpecList
            rows={[
              { k: "Entrant", v: "Age eight. Name withheld. Parent in Applied Sciences." },
              { k: "Title", v: <Redacted reason="Read twice by the President. Not printed.">&ldquo;What Is Behind The Panels&rdquo;</Redacted> },
              { k: "Medium", v: "Crayon on card. A floor plan." },
              { k: "Level shown", v: "Six" },
              { k: "Drawing on file for level six", v: "Does not agree" },
              { k: "The child's drawing", v: "Agrees with the fourth survey" },
              { k: "The child has been below Sub-Level 1", v: "Never. Personnel has checked the ledger for six years." },
            ]}
          />
        </Panel>
      </ClearanceGate>

      <PenNote tone="pencil" angle={-1.3}>
        Eighty-eight this year. Sixty-four last year. I have kept the attendance sheet every year since the
        first and there is a name on last year&rsquo;s that is not on this year&rsquo;s and the father is
        still on the payroll and I have not asked him. &mdash; C.
      </PenNote>

      <Row>
        <Pictogram name="cake" size={54} title="The cake" style={{ color: "var(--ink-3)" }} />
        <Placard>Science Fair &mdash; Sub-Level 1 Only</Placard>
        <Placard tone="warn">No Child Descends</Placard>
      </Row>

      <Aside>
        Caroline&rsquo;s note to department heads, pinned in the commissary since 1955: <em>Materials,
        Applied Biology and Computation are welcome to attend and are not to demonstrate anything.</em>
      </Aside>

      <Rule variant="fat" />

      <FinePrint>
        <p>
          Form ASI-504. The fair is open to the daughters of all personnel and, since 1957, to the daughters
          of volunteers who have completed an afternoon. The commissary&rsquo;s standing cake order is
          described at <Link href="/enrichment-center/refreshments">Form ASI-307</Link>, and this is the
          one day in the year the commissary would like that sheet read.
        </p>
      </FinePrint>

      {/* Ninety-one entries. Ninety titles on the board. One floor plan in crayon that agrees with the fourth survey. */}
      {/* Sixty-four names last year. Eighty-eight this year. One missing. */}

      <Scrawl href="/vault/the-dens">
        the eight year old drew level six from memory. she has never been below one. ask her father what he brings home
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

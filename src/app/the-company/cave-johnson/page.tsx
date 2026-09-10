import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Split, Row, Aside,
} from "@/components/Print";
import { Memo, Signature, PenNote } from "@/components/Memo";
import { FigureTable, SpecList, Plate } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { AtomicOrbit, Flourish } from "@/components/svg/Ornament";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "A Word From The President",
  description:
    "Cave Johnson, President and Founder of Aperture Science Innovators, on shower curtains, quantum tunnelling, the competition, and why science is not about why.",
};

export default function CaveJohnsonPage() {
  const { prev, next } = neighbours("/the-company/cave-johnson");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/the-company", label: "The Company" },
          { label: "Cave Johnson" },
        ]}
      />

      <DocHead
        doc="ASI-101"
        department="Office of the President"
        classification="Unrestricted"
        revision="Dictated; not read back"
      />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="Office of the President">
          Dictated
        </Stamp>
        <PageTitle
          kicker="Office of the President"
          title="A Word From The President"
          deck={
            <>
              He founded the company at thirty-four with four hundred dollars and a bolt of vinyl. He is
              presently sixteen years, nine test shafts and one hole in the fabric of space further along.
              Here he is, at length, unedited, as he prefers.
            </>
          }
          byline={
            <>
              Dictated by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}. Transcribed by C. Not read back
              before printing, at the President&rsquo;s insistence.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            My name is Cave Johnson and I own the place. I want that established on the first line, because
            people come into this building and they look for the board, and there is no board. There is a
            desk on the third floor and there is me behind it and that is the entire governance of Aperture
            Science Innovators. When I want something built, it gets built. When I want it built by Friday,
            it gets built by Friday and somebody sleeps in the machine shop. That is not a boast. That is an
            organisational chart.
          </Lede>
          <p>
            I started this company in a rented garage in 1943 selling shower curtains. Everybody wants to
            skip past that part. I do not skip past that part. The United States Army bought two hundred
            thousand of my curtains and every one of them held water, and if you think that has nothing to
            do with quantum tunnelling then you have never had to make two hundred thousand of anything and
            have every single one come out right.
          </p>
          <p>
            The curtain paid for the mine. The mine paid for the shafts. The shafts paid for the physicists,
            and the physicists — God help me — the physicists came to my office in the spring of 1953 and
            told me they had put a hole in one wall and the hole had come out of a different wall, and did I
            want to see it.
          </p>
          <p>
            I said yes. That is the whole of my scientific method. Somebody says do you want to see it, and
            I say yes, and then we get a man and we point him at it.
          </p>

          <h2>On Why Not</h2>
          <p>
            There is a school of thought that says a scientist should first establish <em>why</em>. Why does
            it happen. Why does it happen that way. Why, if we move this here, does the gentleman in the
            chamber stop being in the chamber. That school of thought has produced a great many careful men
            and not one hole in a wall.
          </p>
          <p>
            Science is not about <em>why</em>. It is about <em>why not</em>. Why not put the gel in the
            pudding. Why not buy the moon. Why not send a man through and see which end he arrives at.{" "}
            <em>Why not</em> is the only question that has ever built anything, and it is the only question
            this company asks, and if that troubles you, the door is behind you and it opens from both
            sides, which is more than I can say for some of the doors further down.
          </p>

          <h2>On The Competition</h2>
          <p>
            There is an outfit in New Mexico. You know the one. Federal money, federal timetable, federal
            haircuts. They have been three years on a problem I solved in a weekend with a curtain and a
            volunteer named Hal, and they will publish about it, and the publication will have forty names
            on it, and not one of those forty men will have gone through the hole personally.
          </p>
          <p>
            I have gone through the hole personally. Eleven times. Legal has asked me to stop saying that in
            print. Legal is going to have to live with disappointment.
          </p>

          <h2>On The Volunteers</h2>
          <p>
            Astronauts. War heroes. Olympians. That is who I want in the chambers and that is who I have
            been getting, because when a man has already been shot at over Korea, an afternoon in Test Shaft
            09 does not frighten him, it bores him, and a bored man gives you clean data.
          </p>
          <p>
            We pay sixty dollars. Cash. Same day. No forms beyond the one, no waiting, no next of kin
            notified unless the volunteer specifically requests it, and I will tell you honestly that in
            sixteen years exactly four have requested it, and I remember all four of their names, and that
            is more than the outfit in New Mexico can say about anybody.
          </p>

          <h2>On What Comes Next</h2>
          <p>
            I am fifty years old. I intend to be here a very long time. There are men downstairs building a
            machine out of eleven tons of relays because I asked them whether a person could be written down
            — properly written down, filed, kept — and they said probably not and I said try anyway, and
            they are trying anyway, because that is what happens when I ask.
          </p>
          <p>
            You will read, in the pages that follow, about curtains and gels and holes and a cake we have
            been promising since 1953. All of it is true. Some of it is under review.{" "}
            <Redacted reason="Struck by Medical, March 1959">
              None of it is going anywhere just because one man&rsquo;s lungs have opinions.
            </Redacted>
          </p>
          <p>Now go read the catalogue.</p>
        </Prose>

        <Stack>
          <Panel head="The President, In Brief" tone="tint">
            <SpecList
              rows={[
                { k: "Born", v: "1907, Upper Peninsula" },
                { k: "Founded", v: "Aperture Fixtures, 1943" },
                { k: "Renamed", v: `${COMPANY.name}, ${COMPANY.renamed}` },
                { k: "Holdings", v: "One hundred per cent" },
                { k: "Board", v: "There is no board" },
                { k: "Office", v: "Third floor, end of the hall" },
                { k: "Door", v: "Always open. Do not use the door." },
                {
                  k: "Health",
                  v: <Redacted reason="Medical, not for circulation">Excellent. Do not ask again.</Redacted>,
                },
              ]}
            />
          </Panel>

          <Plate number="1" caption="The President’s own diagram of the quantum tunnelling principle, reproduced exactly, including the part where he stopped drawing.">
            <AtomicOrbit style={{ width: "100%", maxWidth: 180, color: "var(--spot-blue)" }} />
          </Plate>

          <Row>
            <Placard>Third Floor</Placard>
            <Placard tone="warn">Knock First</Placard>
          </Row>

          <PenNote tone="pencil" angle={-1.4}>
            He has not read this page. He will not read this page. If you need something changed, come and
            see me and we will change it together. &mdash; C.
          </PenNote>
        </Stack>
      </Split>

      <PullQuote big attribution={`${COMPANY.founder}, to the Materials Department, 1954`}>
        Science isn&rsquo;t about WHY. It&rsquo;s about WHY NOT.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="Sixteen Years, In The President’s Own Accounting">
        <FigureTable
          caption="Principal events, as dictated. Dates as remembered."
          columns={[
            { key: "year", head: "Year", numeric: true, width: "5rem" },
            { key: "event", head: "Event" },
            { key: "note", head: "The President’s Note" },
          ]}
          rows={[
            {
              year: "1943",
              event: "Aperture Fixtures incorporated. Shower curtains.",
              note: "Four hundred dollars and a bolt of vinyl.",
            },
            {
              year: "1944",
              event: "First United States Army contract.",
              note: "Two hundred thousand units. Every one held.",
            },
            {
              year: COMPANY.renamed,
              event: `Renamed ${COMPANY.name}.`,
              note: "‘Fixtures’ was small thinking. I have never been accused of it since.",
            },
            {
              year: "1944",
              event: "Purchase of the Upper Michigan salt mine, four kilometres deep.",
              note: "They were selling a hole. I like a hole.",
            },
            {
              year: "1951",
              event: "Test Shafts 1 through 4 sunk.",
              note: "Four is not enough. It has never been enough.",
            },
            {
              year: "1953",
              event: "First successful quantum tunnelling event.",
              note: "Somebody said do you want to see it. I said yes.",
            },
            {
              year: "1954",
              event: "Volunteer testing programme opened to the public.",
              note: "Sixty dollars. Cash. Same day.",
            },
            {
              year: "1956",
              event: "Lunar substrate procurement completed.",
              note: <Redacted reason="Figure withheld by Accounting">We bought the moon. All of it we could get.</Redacted>,
            },
            {
              year: COMPANY.year,
              event: "Test Shaft 09 opened four months early.",
              note: "By not asking the engineers how long it would take.",
            },
          ]}
          foot="Compiled by Records from the President’s dictation. Records notes that three of these dates are disputed by Records."
        />
      </Section>

      <Marginalia>
        The President has asked that the word &ldquo;disputed&rdquo; be removed from the note above. Records
        has declined. The note above is unchanged.
      </Marginalia>

      {/* ------------------------------------------------------------- */}

      <Section title="A Memorandum, Reproduced Without Editing">
        <Memo
          to="All Department Heads"
          re="The word ‘impossible’, use of"
          date="9 January 1959"
          cc="Legal (for information only; no action required or invited)"
          stamp={<Stamp tone="black" angle="right" size="normal">File Copy</Stamp>}
        >
          <p>
            It has come to my attention that the word &ldquo;impossible&rdquo; appeared eleven times in last
            month&rsquo;s departmental reports. Eleven. In one month. In a building that contains a hole
            which is in two places at once.
          </p>
          <p>
            Effective immediately, department heads submitting the word &ldquo;impossible&rdquo; will
            accompany it with a written estimate of what it would cost to be wrong. Not whether. What it
            would cost. I have found that the price of being wrong is usually about nine thousand dollars
            and a Tuesday, and I have nine thousand dollars, and it is very nearly Tuesday.
          </p>
          <p>
            Materials, this is chiefly about you. You have been told twice. This is the memorandum. There
            will not be a third.
          </p>
        </Memo>
      </Section>

      <Notice head="The Enrichment Center Reminds You">
        The President&rsquo;s remarks are the President&rsquo;s remarks. They do not constitute a warranty,
        a schedule, a medical opinion, or an instruction that any employee is required to follow, except
        for the ones that are.
      </Notice>

      {/* ------------------------------------------------------------- */}

      <Section title="What The President Is Presently Interested In">
        <Row style={{ gap: "1.6rem", alignItems: "flex-start" }}>
          {(
            [
              ["moon", "The moon, in quantity"],
              ["lemon", "Combustible fruit"],
              ["flask", "A dietetic pudding"],
              ["atom", "Writing a man down"],
              ["turret", "A polite machine"],
            ] as const
          ).map(([name, label]) => (
            <figure key={name} style={{ textAlign: "center", width: "6.5rem" }}>
              <Pictogram name={name} size={52} title={label} style={{ color: "var(--ink-2)" }} />
              <figcaption className="ap-caps" style={{ fontSize: "0.56rem", color: "var(--ink-3)", marginTop: "0.4rem" }}>
                {label}
              </figcaption>
            </figure>
          ))}
        </Row>

        <Aside>
          Four of the five have been formally authorised. The fifth has not been authorised, discussed, or
          written down anywhere, which is why it is on this list.
        </Aside>
      </Section>

      <ClearanceGate level={3} hint="Personnel who have been paying attention may read the appended note.">
        <Panel head="Appended By The Transcriptionist, Not For Print" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            He dictated this in one sitting on the fourteenth and had to stop twice. Both times he said it
            was the dust in the shaft. There is no dust in the shaft. I have been down the shaft. Somebody
            in Medical needs to make him sit still for an afternoon and I am plainly not going to be the one
            who manages it. &mdash; C.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Signature note="Dictated 14 March 1959. Transcribed, filed, and printed as received." />

      <Flourish style={{ width: 200, color: "var(--ink-faint)", margin: "1.6rem 0" }} />

      <FinePrint tiny>
        The opinions of the President are the opinions of the company. There is no mechanism by which they
        could be otherwise. Form ASI-101. Retain until superseded.
      </FinePrint>

      {/* The man in the chamber on 11 March is not named on any sheet. */}
      {/* He is named on one. It is not filed on this floor. */}

      <Scrawl href="/vault/lunar-memorandum">
        he keeps coughing. nobody writes it down. i write it down. somebody has to write it down
      </Scrawl>

      <p>
        <Link className="ap-caps" style={{ fontSize: "0.68rem" }} href="/the-company/history">
          Next: our story so far →
        </Link>
      </p>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

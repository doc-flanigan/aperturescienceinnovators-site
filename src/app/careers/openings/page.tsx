import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Row, Aside, Coupon,
} from "@/components/Print";
import { PenNote } from "@/components/Memo";
import { FigureTable, SpecList, KeyFigures } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Positions Presently Available",
  description:
    "Physicists, machinists, one experienced pyrotechnician, a great many test associates, and one opening that has been open since 1954.",
};

export default function Page() {
  const { prev, next } = neighbours("/careers/openings");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/careers", label: "Careers" },
          { label: "Openings" },
        ]}
      />

      <DocHead
        doc="ASI-501"
        department="Personnel"
        classification="Unrestricted"
        revision="Reprinted quarterly. The 1954 position reprinted every time."
      />

      <div className="ap-rel">
        <Stamp float tone="green" sub="All Grades">
          Hiring
        </Stamp>
        <PageTitle
          kicker="Personnel — Second Floor"
          title="Positions Presently Available"
          deck={
            <>
              Aperture Science Innovators is hiring. Aperture Science Innovators is always hiring. Personnel
              is authorised to discuss the first reason for that sentence, which is that the company has
              grown from four men to 1,247 in sixteen years and has never once stopped.
            </>
          }
          byline={
            <>
              Rates set by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}. Notes by Personnel, who have
              met the applicants.
            </>
          }
        />
      </div>

      <KeyFigures
        items={[
          { value: "1,247", label: "On the payroll", note: "March count" },
          { value: "31", label: "Positions open", note: "This quarter" },
          { value: "1", label: "Open since 1954", note: "See below" },
          { value: "0", label: "Diplomas asked for", note: "Ever" },
          { value: "Thursday", label: "Decision by", note: "If you apply on Monday" },
        ]}
      />

      <Prose>
        <Lede>
          No committee. No review board. No three-year grant cycle. One man reads your proposal, and if he
          likes it you have a machine shop, a budget and a deadline before the end of the week. If he does
          not like it he will tell you so to your face, which is more than most employers manage, and then
          he will very likely hire you anyway to find out why you thought of it.
        </Lede>
        <p>
          We do not ask for a diploma. We have never asked for a diploma. The best physicist in this building
          left school at fourteen to work the iron range and I found him because he wrote to me to say my
          curtains were hung wrong, and they were.
        </p>
      </Prose>

      <Section title="The Schedule Of Positions">
        <FigureTable
          caption="Positions open at Spring 1959, by department"
          columns={[
            { key: "pos", head: "Position" },
            { key: "dept", head: "Department" },
            { key: "rate", head: "Rate", numeric: true },
            { key: "req", head: "Requirements" },
            { key: "note", head: "Personnel note" },
          ]}
          rows={[
            { pos: "Physicist, applied", dept: "Applied Sciences", rate: "$9,400 p.a.", req: "Must have built something", note: "Four open. Always four." },
            { pos: "Machinist, first class", dept: "Machine shop", rate: "$2.85 hr.", req: "Own tools", note: "Six open. Sleeps in the shop on Thursdays." },
            { pos: "Pyrotechnician, experienced", dept: "Materials", rate: "$3.10 hr.", req: "Experienced", note: "The word is doing a great deal of work" },
            { pos: "Test Associate", dept: "Operations", rate: "$60 per afternoon", req: "General good health", note: "See Form ASI-302. This is the volunteer programme." },
            { pos: "Steno pool", dept: "Third floor", rate: "$1.40 hr.", req: "120 w.p.m. and nerve", note: "He dictates at night" },
            { pos: "Mask checker, mill door", dept: "Substrate", rate: "$2.10 hr.", req: "Must not be intimidated", note: "One refusal on record. It was the President." },
            { pos: "Gate house, relief", dept: "Operations", rate: "$2.40 hr.", req: "Counts accurately", note: "Mr. Pike has never taken a day. Relief is theoretical." },
            { pos: "Commissary", dept: "Sub-Level 1", rate: "$1.60 hr.", req: "Pie", note: "Thursdays only" },
            { pos: "Attendant, relay room, nights", dept: "Computation", rate: "$3.40 hr.", req: <Redacted reason="Personnel has withdrawn the requirement line">Must not have read Form ASI-900</Redacted>, note: "Open since 1956. Two applicants. Both withdrew on the tour." },
            { pos: "Reactor room, second", dept: "Facilities", rate: <Redacted reason="Rate withheld. It is very high.">—</Redacted>, req: "See Greg", note: "Open since 1954. Never filled." },
          ]}
          foot="Rates are for a forty-four hour week, paid Fridays, in cash, from a larger tin than the one at the gate house."
        />
      </Section>

      <Marginalia>
        The reactor room second has been open since 1954 and Personnel reprints it every quarter. Eleven men
        have applied. Eleven men have been taken down to meet Greg. None has come back up to fill in the
        form, and every one of them has said, on the way out, that Greg seemed perfectly nice.
      </Marginalia>

      <PullQuote big attribution={`${COMPANY.founder}, Personnel Department address, 1957`}>
        Bring me your best idea. If it is any good I will fund it by Thursday, and if it is no good I will
        tell you why, and either way you will know by Thursday.
      </PullQuote>

      <Section title="How To Apply">
        <Prose>
          <p>
            Write to Personnel at the address on the correspondence sheet, or present at the second-floor
            window marked PERSONNEL and not the window marked PERSONNEL (ARCHIVE), which is the same window
            with the shutter down. Bring nothing. If you have built a thing, bring the thing.
          </p>
          <p>
            You will be seen the same day. If your idea is any good you will be seen by the President the
            same day, because he is on the third floor and the stairs are right there, and he has been
            known to come down to the second floor at the sound of a good idea being described through a
            wall.
          </p>
        </Prose>

        <Coupon>
          <p className="ap-caps" style={{ fontSize: "0.66rem", margin: "0 0 0.5rem", color: "var(--accent)" }}>
            Present At The Second-Floor Window
          </p>
          <p style={{ fontFamily: "var(--font-ad)", fontSize: "var(--step-2)", lineHeight: 1.04, margin: "0 0 0.5rem" }}>
            Decision By Thursday.
          </p>
          <SpecList
            rows={[
              { k: "Name", v: "____________________" },
              { k: "What have you built", v: "____________________" },
              { k: "Did it work", v: "____________________" },
              { k: "Diploma", v: "Not required. Do not attach one. It will be returned." },
            ]}
          />
        </Coupon>
      </Section>

      <Notice head="The Enrichment Center Reminds You">
        Employment at the Enrichment Center is not participation in the testing programme. These are
        separate programmes, on separate forms, administered by many of the same people, in the same
        building, and the Personnel Department will not let a man confuse them, however keen he is on the
        sixty dollars.
      </Notice>

      <ClearanceGate level={2} hint="Junior Associate grade or above. Personnel does not print the second reason.">
        <Panel head="The Second Reason The Company Is Always Hiring" tone="red">
          <SpecList
            rows={[
              { k: "Hired, 1954 – Spring 1959", v: "1,106" },
              { k: "Left, same period", v: "412" },
              { k: "Left with notice", v: "298" },
              { k: "Left without notice", v: "103" },
              { k: "Left without notice, last seen below Sub-Level 4", v: <Redacted reason="Personnel has recorded the figure and been asked not to characterise it">Eleven.</Redacted> },
              { k: "Personnel files closed", v: "412" },
              { k: "Personnel files closed with a date", v: "401" },
            ]}
          />
        </Panel>
      </ClearanceGate>

      <PenNote tone="pencil" angle={-1.3}>
        The relay room nights post has been open since 1956. The two men who applied both asked me,
        separately, on the way out, whether the machine had been told they were coming. &mdash; C.
      </PenNote>

      <Row>
        <Pictogram name="handshake" size={56} title="Positions" style={{ color: "var(--ink-3)" }} />
        <Placard>Personnel &mdash; Second Floor</Placard>
        <Placard tone="warn">Not The Window With The Shutter Down</Placard>
      </Row>

      <Aside>
        The window with the shutter down is the archive. The archive is where the 412 closed files are. The
        shutter has been down since 1956 and the man who put it down was one of the 103.
      </Aside>

      <Rule variant="fat" />

      <FinePrint>
        <p>
          Form ASI-501. Terms of employment are set out in the{" "}
          <Link href="/careers/handbook">Employee Handbook, ASI-503</Link>; benefits at{" "}
          <Link href="/careers/benefits">ASI-502</Link>. Applicants for the testing programme are directed
          to <Link href="/enrichment-center/volunteer">Form ASI-302</Link> and asked, gently, to read it.
        </p>
      </FinePrint>

      {/* 103 left without notice. Eleven last seen below four. Eleven is the number on every sheet. */}

      <Scrawl href="/vault/the-dens">
        the reactor room second has been open since 1954. ask greg why nobody stays. he will tell you. thats the problem
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Row, Aside, Coupon,
} from "@/components/Print";
import { Memo, PenNote } from "@/components/Memo";
import { FigureTable, SpecList, KeyFigures } from "@/components/Data";
import { Checklist } from "@/components/Form";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Schedule Of Compensation",
  description:
    "Sixty dollars, cash, same day, from a tin — the rates, the bonuses, and the eleven conditions under which the Enrichment Center does not pay.",
};

export default function Page() {
  const { prev, next } = neighbours("/enrichment-center/compensation");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/enrichment-center", label: "Enrichment Center" },
          { label: "Compensation" },
        ]}
      />

      <DocHead
        doc="ASI-306"
        department="Accounting"
        classification="Unrestricted"
        revision="Seventh printing. Rate held."
        extra={[{ label: "Rate", value: "$60.00" }]}
      />

      <div className="ap-rel">
        <Stamp float sub="Held Since 1954">
          Cash
        </Stamp>
        <PageTitle
          advertising
          kicker="Accounting — Second Floor"
          title="Sixty Dollars, Cash, Same Day"
          deck={
            <>
              Paid at a window, out of a tin, by a man whose entire job is that window and that tin. No
              cheque, no waiting, no accounts department, no form beyond the one you have already signed.
              Accounting has proposed a cheque four times and has been told no four times.
            </>
          }
          byline={
            <>
              Rates set personally by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}, and not since revised
            </>
          }
        />
      </div>

      <KeyFigures
        items={[
          { value: "$60", label: "Standard afternoon", note: "Held since 1954" },
          { value: "$0", label: "Deductions", note: "There are none" },
          { value: "0", label: "Minutes to payment", note: "It is a tin" },
          { value: "11", label: "Conditions for non-payment", note: "None ever invoked" },
          { value: "$247,080", label: "Paid out to date", note: "4,118 presentations" },
        ]}
      />

      <Prose>
        <Lede>
          A man who has spent an afternoon being flung across a room by a plate should not then be asked to
          wait a fortnight for a cheque to clear. That is the whole of the policy. Everything else on this
          sheet is Accounting explaining the policy at greater length than the policy requires.
        </Lede>
        <p>
          Sixty dollars is roughly a week&rsquo;s wage on the iron range, for one afternoon, and I set it at
          sixty in 1954 because sixty is a number a man can picture. Accounting has recommended forty on
          three occasions and once had it printed as forty on the front page of this very publication before
          I caught it. It is sixty. It has always been sixty. It will be sixty.
        </p>
      </Prose>

      <Section title="The Schedule">
        <FigureTable
          caption="Rates of compensation, Enrichment Center volunteer testing programme"
          columns={[
            { key: "cat", head: "Category" },
            { key: "desc", head: "Description" },
            { key: "rate", head: "Rate", numeric: true },
            { key: "note", head: "Note" },
          ]}
          rows={[
            { cat: "I", desc: "Standard afternoon, one to eight chambers", rate: "$60.00", note: "The ordinary engagement" },
            { cat: "II", desc: "Extended afternoon, nine chambers or more", rate: "$75.00", note: "By the volunteer's request only" },
            { cat: "III", desc: "Gel exposure, any quantity", rate: "$60.00 + $5.00", note: "The five is for the laundry" },
            { cat: "IV", desc: "Emancipation grill, repeat traversal", rate: "$60.00 + $12.00", note: "See the dental plan" },
            { cat: "V", desc: "Aperture transit, recorded", rate: "$60.00 + $15.00", note: "Most requested" },
            { cat: "VI", desc: "Overnight observation, voluntary", rate: "$110.00", note: "Bed, board, and a lamp" },
            { cat: "VII", desc: "Substrate handling", rate: "$140.00", note: "Mask supplied. Mask compulsory." },
            { cat: "VIII", desc: "Duration trial, seven days", rate: "$400.00", note: "Four have been run" },
            {
              cat: "IX",
              desc: <Redacted reason="No chamber of the ninth category has been scheduled, cut, or numbered">Chambers of the ninth category</Redacted>,
              rate: "$1,000.00",
              note: <Redacted reason="Accounting has asked what a ninth-category chamber is and has not been told">Never claimed.</Redacted>,
            },
          ]}
          foot="Rates are per volunteer, per engagement, paid in United States currency at the gate house window on ascent. The ninth category has appeared on this schedule since the second printing and Accounting has been unable to establish who added it."
        />
      </Section>

      <Marginalia>
        The tin is a biscuit tin. It has been the same biscuit tin since 1954. Accounting has requisitioned
        a cash drawer twice and has twice been told that a drawer looks like a bank and a tin looks like a
        man keeping his word.
      </Marginalia>

      <Section title="The Eleven Conditions">
        <Prose>
          <p>
            Legal requires that the Enrichment Center publish the circumstances in which it would decline to
            compensate a volunteer. The Enrichment Center publishes them below and notes, with some
            satisfaction, that not one of the eleven has ever been invoked in five years of the programme.
          </p>
        </Prose>

        <Panel head="Conditions Under Which Compensation May Be Withheld">
          <Checklist
            items={[
              { text: "The volunteer did not present at the gate house." },
              { text: "The volunteer presented under a name that is not his." },
              { text: "The volunteer declined to descend, having signed. (He is paid anyway. See below.)" },
              { text: "The volunteer removed apparatus from a chamber." },
              { text: "The volunteer removed apparatus from a chamber by swallowing it." },
              { text: "The volunteer was found to be an employee of a competing research facility." },
              { text: "The volunteer was found to be an employee of this company." },
              { text: "The engagement was interrupted by an act of God, the State of Michigan, or the reactor." },
              { text: "The volunteer's afternoon was not, in the judgement of Operations, an afternoon." },
              { text: "The tin was empty. (This has occurred once. The man was paid from the President's pocket.)" },
              {
                text: (
                  <>
                    <Redacted reason="Condition eleven has never been read aloud, printed in full, or explained to the man at the window">
                      The volunteer ascended, and Operations is satisfied that he did not descend.
                    </Redacted>
                  </>
                ),
              },
            ]}
          />
          <p style={{ fontSize: "var(--step--1)", marginBottom: 0 }}>
            Condition three is on the list because Legal insisted it be on the list. The Enrichment Center
            has paid every man who signed and then thought better of it, all two thousand eight hundred and
            one of them, and will go on doing so, because a man who reads the form and changes his mind has
            given us the single most useful afternoon of anybody.
          </p>
        </Panel>
      </Section>

      <PullQuote big attribution={`${COMPANY.founder}, to Accounting, 1954, and to Accounting, 1956, and to Accounting, 1958`}>
        It is sixty dollars and it is cash and it is the same day. Write it down so I stop having to say it.
      </PullQuote>

      <Memo
        to="Accounting"
        from={COMPANY.founder}
        re="The cheque proposal, fourth"
        date="19 January 1959"
        stamp={<Stamp tone="black" angle="right">Declined</Stamp>}
      >
        <p>
          A cheque is a promise. A promise is a thing a company makes when it does not have the money in the
          building. We have the money in the building. It is in a tin.
        </p>
        <p>
          I understand the accounting is untidy and I understand you have said so four times and I want you
          to know that I have read all four and that the answer is the same one. When a man comes up out of
          that shaft he is going to be handed sixty dollars by a person, in his hand, while he is standing
          there. That is not an accounting decision.
        </p>
      </Memo>

      <Section title="When The Volunteer Is Not There To Be Paid">
        <Prose>
          <p>
            It has happened eleven times. On each of those eleven occasions the sixty dollars was made up
            into a registered packet and posted to the address on the volunteer&rsquo;s form within the same
            week, in cash, over the objection of the United States Post Office, which has written to us
            twice about it.
          </p>
        </Prose>
        <SpecList
          rows={[
            { k: "Packets posted", v: "Eleven" },
            { k: "Signed for", v: "Seven" },
            { k: "Returned undelivered", v: "Three" },
            { k: "Neither signed for nor returned", v: <Redacted reason="Records has raised this in writing">One.</Redacted> },
            { k: "Post Office letters received", v: "Two" },
            { k: "Post Office letters answered", v: "Two. Identically." },
          ]}
        />
      </Section>

      <ClearanceGate level={2} hint="Junior Associate grade or above. Accounting does not print the ninth-category ledger.">
        <Panel head="Ledger Extract — Category IX" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            Accounting maintains a line for every category on the schedule, whether or not it has ever been
            claimed. The Category IX line has a balance. The Category IX line has had a balance since the
            second printing. Nothing has ever been paid out of it and nothing has ever been paid into it
            and it does not reconcile against anything in this building.
          </p>
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", marginBottom: 0 }}>
            Balance carried forward: <b>$9,000.00.</b> Nine claims. Accounting has not been given the names.
          </p>
        </Panel>
      </ClearanceGate>

      <Coupon>
        <p className="ap-caps" style={{ fontSize: "0.66rem", margin: "0 0 0.5rem", color: "var(--accent)" }}>
          Present At The Window On Ascent
        </p>
        <p style={{ fontFamily: "var(--font-ad)", fontSize: "var(--step-2)", lineHeight: 1.04, margin: "0 0 0.5rem" }}>
          Good For Sixty Dollars.
        </p>
        <p style={{ fontSize: "var(--step--1)", margin: "0 0 0.7rem" }}>
          No endorsement. No identification. No questions. The man at the window has held that job since
          1954 and has never asked anybody anything.
        </p>
        <p style={{ margin: 0 }}>
          <Link className="ap-caps" style={{ fontSize: "0.66rem" }} href="/enrichment-center/volunteer">
            Application Form ASI-302 →
          </Link>
        </p>
      </Coupon>

      <Notice head="The Enrichment Center Reminds You">
        Compensation is unconditional in every case in which the volunteer is present to receive it, and in
        every case in which he is not.
      </Notice>

      <PenNote tone="pencil" angle={-1.2}>
        There is no ninth category. I have been through every schedule, every drawing and every day book in
        this building. The line is in the ledger and the chamber is not in the shaft. &mdash; C.
      </PenNote>

      <Row>
        <Pictogram name="dollar" size={56} title="Compensation" style={{ color: "var(--ink-3)" }} />
        <Placard>Payment Window &mdash; Gate House</Placard>
        <Placard tone="warn">Cash Only &mdash; No Cheques Issued</Placard>
      </Row>

      <Aside>
        The window is a window. It has a shutter, a shelf, a tin and a man. It is the only part of this
        company that has never once been reorganised.
      </Aside>

      <Rule variant="fat" />

      <FinePrint>
        <p>
          Form ASI-306. Compensation is governed by{" "}
          <Link href="/legal">Form ASI-900</Link>, clause I, which states that compensation is payable upon
          completion of the afternoon and does not require the volunteer&rsquo;s presence at the conclusion
          &mdash; a sentence Legal drafted, the President struck, Legal restored, and which has been printed
          in every edition since.
        </p>
      </FinePrint>

      {/* Nine claims against a category that does not exist. */}
      {/* Eleven men not returned. Nine inquiries closed the day they opened. */}

      <Scrawl href="/vault/the-dens">
        the tin is real. the sixty is real. count the ninth category and then count the shafts
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

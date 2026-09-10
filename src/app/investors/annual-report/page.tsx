import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Row, Aside,
} from "@/components/Print";
import { Signature, PenNote } from "@/components/Memo";
import { FigureTable, SpecList, KeyFigures } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Annual Report",
  description:
    "Revenues, expenditures, a segment breakdown in which the curtain still outsells everything, and one line item the auditors have asked us to explain three times.",
};

export default function Page() {
  const { prev, next } = neighbours("/investors/annual-report");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/investors", label: "Investors" },
          { label: "Annual Report" },
        ]}
      />

      <DocHead
        doc="ASI-601"
        department="Accounting"
        classification="Unrestricted — Unaudited"
        revision="Fiscal year ended 31 December 1958"
        extra={[{ label: "Audit", value: "Rescheduled" }]}
      />

      <div className="ap-rel">
        <Stamp float sub="Fiscal 1958">
          Unaudited
        </Stamp>
        <PageTitle
          kicker="Accounting — Fiscal Year 1958"
          title="Annual Report"
          deck={
            <>
              The accounts of Aperture Science Innovators for the year ended 31 December 1958, prepared by a
              department that is confident nobody reads past the first table and has arranged the tables
              accordingly. The President&rsquo;s statement follows the figures, because he insisted on
              reading them first.
            </>
          }
          byline={
            <>
              Prepared by <b>Accounting</b>. Statement by {COMPANY.founder}. Audit by nobody, yet.
            </>
          }
        />
      </div>

      <KeyFigures
        items={[
          { value: "$41.2M", label: "Gross receipts", note: "Up 14%" },
          { value: "$38.9M", label: "Expenditure", note: "Up 31%" },
          { value: "$2.3M", label: "Retained", note: "Spent by March" },
          { value: "1,247", label: "Persons employed", note: "Up from 1,106" },
          { value: "0", label: "Shareholders, outside", note: "By design" },
        ]}
      />

      <Prose>
        <Lede>
          This company is wholly owned by one man, has no board, no outside shareholders, and no obligation
          whatever to publish any of what follows. It publishes it anyway, every spring, because the
          President enjoys the tables and because he holds that a firm which will not show its figures is a
          firm that has something in them.
        </Lede>
      </Prose>

      <Section title="Receipts By Segment">
        <FigureTable
          caption="Gross receipts, fiscal 1958, by product segment"
          columns={[
            { key: "seg", head: "Segment" },
            { key: "rev", head: "Receipts", numeric: true },
            { key: "pct", head: "Share", numeric: true },
            { key: "chg", head: "Change", numeric: true },
            { key: "note", head: "Accounting note" },
          ]}
          rows={[
            { seg: "Shower curtains, military", rev: "$24,600,000", pct: "59.7%", chg: "+6%", note: "The 1956 contract. Every branch but one." },
            { seg: "Shower curtains, civil", rev: "$6,100,000", pct: "14.8%", chg: "+11%", note: "Institutional Grey remains the volume line" },
            { seg: "Industrial gels", rev: "$4,400,000", pct: "10.7%", chg: "+140%", note: "Repulsion outsells propulsion nine to one" },
            { seg: "Aperture apparatus, sold or leased", rev: "$2,900,000", pct: "7.0%", chg: "+80%", note: "Eleven units. Not doors." },
            { seg: "Substrate preparation", rev: "$1,300,000", pct: "3.2%", chg: "New", note: "Price per pound withheld" },
            { seg: "Storage cubes, plates, grills", rev: "$1,100,000", pct: "2.7%", chg: "+22%", note: "The cube stores nothing and sells anyway" },
            { seg: "Other", rev: "$800,000", pct: "1.9%", chg: "—", note: <Redacted reason="Accounting has been asked three times what ‘Other’ is">Larger than three named segments.</Redacted> },
          ]}
          foot="Total gross receipts $41,200,000. The curtain, in both segments, accounts for seventy-four cents of every dollar this company took in, and the Materials Department has been informed."
        />
      </Section>

      <Marginalia>
        The curtain has outsold everything else this company makes in every year since 1943, and the
        President has said, in print, that the year it stops will be the year he considers the science to
        have started paying for itself.
      </Marginalia>

      <Section title="Expenditure">
        <FigureTable
          caption="Expenditure, fiscal 1958, by head"
          columns={[
            { key: "h", head: "Head" },
            { key: "amt", head: "Amount", numeric: true },
            { key: "pct", head: "Share", numeric: true },
            { key: "note", head: "Accounting note" },
          ]}
          rows={[
            { h: "Wages and salaries", amt: "$9,800,000", pct: "25.2%", note: "1,247 persons, paid Fridays, from a tin" },
            { h: "Curtain manufacture", amt: "$8,100,000", pct: "20.8%", note: "Vinyl, grommets, the weighted hem" },
            { h: "Research divisions", amt: "$6,200,000", pct: "15.9%", note: "Six divisions. One never publishes." },
            { h: "Facilities and the shafts", amt: "$5,400,000", pct: "13.9%", note: "Shaft 09 came in four months early and eleven per cent over" },
            { h: "Lunar substrate procurement", amt: <Redacted reason="The line item. The auditors have asked three times.">$11,400,000</Redacted>, pct: <Redacted reason="Withheld with the amount">29.3%</Redacted>, note: "See the auditors' note" },
            { h: "Third-floor ceilings", amt: "$84,600", pct: "0.2%", note: "Nine. Facilities keeps a separate ledger." },
            { h: "Berthing, Aperture Marine", amt: "$9,600", pct: "0.02%", note: "Quarterly. Paid to a dock." },
            { h: "Compensation, volunteers", amt: "$71,040", pct: "0.2%", note: "1,184 afternoons at $60" },
            { h: "Legal", amt: "$41,000", pct: "0.1%", note: "Three people. Basement, rear." },
          ]}
          foot="Total expenditure $38,900,000, of which one line item exceeds every research division combined, and Accounting would like it noted that Accounting did not sign for it."
        />
      </Section>

      <Panel head="Auditors' Note" tone="red">
        <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)" }}>
          The auditors have asked, on three occasions, for an explanation of the expenditure recorded under
          Lunar Substrate Procurement, being the largest single line item in the company&rsquo;s history,
          paid to forty-one vendors in nine countries through four agents over fourteen months, and
          described in the President&rsquo;s own annotation as &ldquo;a bargain&rdquo;.
        </p>
        <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", marginBottom: 0 }}>
          The President has replied on three occasions. The reply is reproduced below. The audit, scheduled
          for February, was rescheduled to March, and has been rescheduled to a date the auditors have
          declined to name.
        </p>
      </Panel>

      <PullQuote big attribution={`${COMPANY.founder}, to the auditors, three times`}>
        It is my money. I bought a moon with it. Next question.
      </PullQuote>

      <Section title="The President’s Statement">
        <Prose>
          <p>
            Forty-one million dollars in, thirty-nine million out, and the difference spent by March on a
            shaft that opened four months early. That is the year. If you want it in one sentence, that is
            the sentence, and everything else on this sheet is Accounting.
          </p>
          <p>
            The curtain still pays for the science. It has paid for the science every year since 1953 and I
            do not apologise for that and I never will. A company that is ashamed of the product that keeps
            the lights on is a company that deserves the dark. We sell the finest shower curtain in the
            Republic to every branch of the armed forces but one, and with the money we are punching holes
            in the fabric of space, and I would like to see the outfit in New Mexico put that in an annual
            report.
          </p>
          <p>
            Research spending is up. It will be up next year. Wages are up and they will be up next year too,
            because I hired a hundred and forty-one people in 1958 and I intend to hire more, and every one
            of them will be paid on a Friday from a tin, and Accounting can put that in the notes.
          </p>
          <p>
            The substrate line is the substrate line. I have answered the auditors three times and I will
            answer them a fourth time in the same words. There is no line on this sheet I would take back.
          </p>
        </Prose>
        <Signature note="Fiscal 1958. Read, approved, not audited." />
      </Section>

      <Notice head="The Enrichment Center Reminds You">
        Past performance is not an indicator of future performance. Present performance is not an indicator
        of present performance either, and Accounting would appreciate it if that stopped being raised at
        meetings.
      </Notice>

      <ClearanceGate level={4} hint="Senior Associate grade or above. ‘Other’ is not itemised in the public sheet.">
        <Panel head="Accounting — The ‘Other’ Line, Itemised" tone="red">
          <SpecList
            rows={[
              { k: "Registered packets, cash, posted to home addresses", v: "$660" },
              { k: "Letters to Stockholm, four", v: "$12" },
              { k: "Framing, one letter from a national agency", v: "$4" },
              { k: "Bread, Commissary, over-ordered", v: <Redacted reason="Booked as bread. It is a retainer. He is in New Mexico.">$14,400</Redacted> },
              { k: "Ceiling, annexe, November 1957", v: "$9,400" },
              { k: "Lemons", v: "$0. Refused four times." },
              { k: "Balance, Category IX", v: "$9,000. Carried forward. Nine claims. No names." },
              { k: "Unreconciled", v: "$766,524" },
            ]}
          />
          <p style={{ fontSize: "var(--step--1)", marginBottom: 0 }}>
            Accounting has been unable to reconcile the balance of &ldquo;Other&rdquo; and has been told
            by the Office of the President that it is not to try.
          </p>
        </Panel>
      </ClearanceGate>

      <PenNote tone="pencil" angle={-1.3}>
        The auditors asked me, privately, whether he really said &ldquo;next question&rdquo; three times.
        He said it four. The fourth time there was no question. &mdash; C.
      </PenNote>

      <Row>
        <Pictogram name="dollar" size={54} title="Annual report" style={{ color: "var(--ink-3)" }} />
        <Placard>Accounting &mdash; Second Floor</Placard>
        <Placard tone="warn">Unaudited &mdash; Audit Rescheduled</Placard>
      </Row>

      <Aside>
        Accounting has fourteen people and one of them does nothing but the tin. The tin has balanced to the
        cent every Friday since 1954, which is more than can be said for any other ledger in the building.
      </Aside>

      <Rule variant="fat" />

      <FinePrint>
        <p>
          Form ASI-601. All figures unaudited. The company is wholly owned by its founder; the{" "}
          <Link href="/investors/prospectus">prospectus, ASI-602</Link>, explains at some length why that
          is not going to change. Aperture Marine&rsquo;s berthing is paid quarterly to a dock whose
          location the Marine Division is presently unable to confirm.
        </p>
      </FinePrint>

      {/* $766,524 unreconciled. Nobody is to try. */}
      {/* The bread is a man in New Mexico. */}

      <Scrawl href="/vault/borealis">
        nine thousand six hundred a year in berthing. to a dock. nobody has seen the dock since 1956
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

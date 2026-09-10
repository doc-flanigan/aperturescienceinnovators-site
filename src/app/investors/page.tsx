import type { Metadata } from "next";
import { SECTIONS } from "@/lib/structure";
import { SectionIndex } from "@/components/SectionIndex";
import { KeyFigures } from "@/components/Data";
import { Notice, FinePrint, PullQuote } from "@/components/Print";
import { Redacted, Scrawl } from "@/components/Secret";

const section = SECTIONS.find((s) => s.path === "/investors")!;

export const metadata: Metadata = {
  title: "Investor Relations",
  description:
    "The Aperture Science Innovators annual report, prospectus, and the President’s complete testimony before the United States Senate.",
};

export default function Page() {
  return (
    <SectionIndex
      section={section}
      doc="ASI-600"
      department="Accounting"
      kicker="Accounting"
      deck={
        <>
          Figures, forecasts and a full accounting of where the money went, prepared by a department that is
          confident nobody will read past the first table and has arranged the tables accordingly.
        </>
      }
      icons={{
        "/investors/annual-report": "dollar",
        "/investors/prospectus": "handshake",
        "/investors/senate-hearing": "hazard",
      }}
      after={
        <>
          <KeyFigures
            items={[
              { value: "$41.2M", label: "Gross receipts", note: "Fiscal 1956" },
              { value: "$38.9M", label: "Expenditure", note: "Fiscal 1956" },
              { value: "$2.3M", label: "Retained", note: "Spent by March" },
              {
                value: <Redacted reason="Withheld by Accounting pending the audit">$11.4M</Redacted>,
                label: "Lunar procurement",
                note: "One line item",
              },
              { value: "0", label: "Outside shareholders", note: "By design" },
            ]}
          />
          <PullQuote attribution="Cave Johnson, to the auditors, three times">
            It is my money. I bought a moon with it. Next question.
          </PullQuote>
          <Notice head="The Enrichment Center Reminds You">
            Past performance is not an indicator of future performance. Present performance is not an
            indicator of present performance either, and Accounting would appreciate it if that stopped
            being raised at meetings.
          </Notice>
          <FinePrint tiny>
            All figures unaudited. The audit was scheduled for February and rescheduled to March and
            rescheduled to a date the auditors have declined to name.
          </FinePrint>
          <Scrawl href="/vault/borealis">
            theres a boat on the books. nobody at this company has ever seen a boat
          </Scrawl>
        </>
      }
    >
      <p>
        Aperture Science Innovators is wholly owned by its founder and has no outside shareholders, no
        board, and no obligation whatsoever to publish any of what follows. It publishes it anyway, because
        the President enjoys the tables.
      </p>
    </SectionIndex>
  );
}

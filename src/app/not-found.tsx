import Link from "next/link";
import { COMPANY } from "@/lib/site";
import { DocHead, PageTitle, Prose } from "@/components/Doc";
import { Stack, Notice, Panel, FinePrint, Rule, Row, Placard } from "@/components/Print";
import { Pictogram } from "@/components/svg/Pictogram";
import { Scrawl, Redacted } from "@/components/Secret";
import { PenNote } from "@/components/Memo";

export const metadata = {
  title: "Sheet Not Found",
};

export default function NotFound() {
  return (
    <Stack size="large">
      <DocHead
        doc="ASI-404"
        department="Records & Filing"
        classification="Restricted — Incident Report"
        revision="Filed by the second-floor clerk"
      />

      <PageTitle
        kicker="Records & Filing — Incident Report"
        title="This Sheet Is Not In The File"
        deck={
          <>
            You have asked the Records Department for a document that the Records Department does not have.
            The Records Department would like it understood that this is not the same as the document not
            existing.
          </>
        }
      />

      <Row style={{ gap: "2rem", alignItems: "flex-start" }}>
        <Pictogram name="clipboard" size={96} style={{ color: "var(--ink-3)", flex: "0 0 auto" }} />
        <div style={{ flex: "1 1 20rem" }}>
          <Prose>
            <p>
              There are four ordinary explanations, and the clerk on duty is required to offer all of them
              before offering the fifth.
            </p>
            <ol>
              <li>The sheet was withdrawn by Legal, which happens to about nine sheets a month.</li>
              <li>The sheet was never printed, because the department that requested it was dissolved.</li>
              <li>You have mistyped the form number. Form numbers are exact. Form numbers are the only thing in this building that is.</li>
              <li>
                The sheet is filed on a floor that has been sealed since{" "}
                <Redacted reason="Date withheld pending the inquiry">the incident in March</Redacted>.
              </li>
            </ol>
            <p>
              The fifth explanation is that somebody took it. That happens too. We do not discuss the fifth
              explanation with visitors.
            </p>
          </Prose>
        </div>
      </Row>

      <Notice head="The Enrichment Center Reminds You">
        A document you cannot find is not a document that has been lost. It is a document that is
        currently enjoying a period of unsupervised privacy.
      </Notice>

      <Panel head="Try Instead" tone="tint">
        <ul style={{ margin: 0, paddingLeft: "1.2em" }}>
          <li>
            <Link href="/">The front page</Link> — the {COMPANY.publicationSeason} {COMPANY.year} edition
            in full.
          </li>
          <li>
            <Link href="/the-directory">The Directory</Link> — every sheet we admit to, by form number.
          </li>
          <li>
            <Link href="/products">The catalogue</Link> — if you were after a product, it is in here.
          </li>
          <li>
            <Link href="/enrichment-center/volunteer">The volunteer application</Link> — if you were after
            sixty dollars.
          </li>
        </ul>
      </Panel>

      <Rule variant="dotted" />

      <Row>
        <Placard tone="warn">Do Not Force The Cabinet</Placard>
        <Placard>Report Missing Sheets To Records</Placard>
      </Row>

      <PenNote tone="red" angle={-1.8}>
        Third time this week someone&rsquo;s asked for a sheet that isn&rsquo;t here. Cave, somebody is
        going through the files at night. — C.
      </PenNote>

      <FinePrint tiny>
        Error 404. The Enrichment Center does not use the number 404 for anything else and would like to
        stress that the coincidence is a coincidence.
      </FinePrint>

      <Scrawl href="/terminal">
        the files arent gone. theyre just further down. everything here is further down
      </Scrawl>
    </Stack>
  );
}

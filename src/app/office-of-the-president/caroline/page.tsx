import type { Metadata } from "next";
import { COMPANY } from "@/lib/site";
import { DocHead, PageTitle, Prose, Lede } from "@/components/Doc";
import {
  Stack, Stamp, Panel, Notice, Rule, Row, FinePrint, Placard, PullQuote, Marginalia, Aside, IndexCard,
} from "@/components/Print";
import { Memo, PenNote } from "@/components/Memo";
import { SpecList, FigureTable } from "@/components/Data";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { Breadcrumbs } from "@/components/Nav";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Caroline",
  description:
    "Personal secretary to the President. Engaged 1946. She basically runs the place, and everybody in the building except one man knows it.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/office-of-the-president", label: "The President’s Office" },
          { label: "Caroline" },
        ]}
      />

      <DocHead
        doc="ASI-Ω-10"
        department="Personnel — Officers"
        date="Opened 1946. Never closed."
        classification="Restricted — Officer File"
        revision="Amended by the subject, without authorisation, eleven times"
      />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="Officer File">
          Personnel
        </Stamp>
        <PageTitle
          kicker="Personal Secretary To The President"
          title="Caroline"
          deck={
            <>
              She has no surname on any document in this building. She has signed eleven thousand of them.
              The Personnel Department has raised the surname question four times and has, on all four
              occasions, been given a look and gone away again.
            </>
          }
        />
      </div>

      <ClearanceGate level={3} hint="Test Associate grade or above. Her name works on the machine downstairs, and it works typed on any page here.">
        <Stack size="large">
          <Prose>
            <Lede>
              Caroline was engaged in 1946 to answer the telephone in a company that had, at the time, one
              telephone and four employees. She is presently the second signature on every purchase order,
              every requisition, every contract and every payroll in a company of 1,247, and she is
              nominally still answering the telephone, which she does, on the first ring, every time.
            </Lede>
            <p>
              Her formal title is Personal Secretary to the President. Her actual position is best described
              by observing what happens when she is not in the building, which occurred once, in 1954, for
              a single day, and which the Accounting Department still refers to as the Tuesday.
            </p>
            <p>
              She is the only person in the company who says no to the President. She does it in front of
              people. He has never once overruled her in front of people, and has overruled her privately
              four times, and on three of those four occasions came back within the week and did it her way
              without mentioning it.
            </p>
          </Prose>

          <PullQuote
            big
            attribution={`${COMPANY.founder}, in her personnel file, in his own hand`}
          >
            Caroline basically runs this place. She has been the best damn thing that ever happened to
            Aperture, and if you are reading her file to check up on her, stop it.
          </PullQuote>

          <Row style={{ gap: "2rem", alignItems: "flex-start" }}>
            <Panel head="The File" tone="tint" style={{ flex: "1 1 20rem" }}>
              <SpecList
                rows={[
                  { k: "Position", v: "Personal Secretary to the President" },
                  { k: "Engaged", v: "1946" },
                  { k: "Surname", v: <Redacted reason="Not recorded. Not once. In thirteen years.">Not on file</Redacted> },
                  { k: "Departments", v: "All of them, in practice" },
                  { k: "Authority", v: "Whatever she says it is" },
                  { k: "Signature required on", v: "Everything above four hundred dollars" },
                  { k: "Days absent, 1946–1959", v: "One" },
                  { k: "Nominated for", v: <Redacted reason="She has not been told">Project 9</Redacted> },
                ]}
              />
            </Panel>
            <div style={{ flex: "0 1 16rem" }}>
              <Pictogram
                name="handshake"
                size={110}
                title="Personal Secretary to the President"
                style={{ color: "var(--ink-3)", display: "block", margin: "0 auto 1rem" }}
              />
              <Placard>Third Floor &mdash; Ext. 1</Placard>
            </div>
          </Row>

          <h2>The Tuesday</h2>

          <Prose>
            <p>
              On the sixteenth of March 1954 Caroline did not come in. She had given three weeks&rsquo;
              notice of the absence, in writing, to four departments. Here is what happened anyway.
            </p>
          </Prose>

          <FigureTable
            caption="16 March 1954 — Operational summary, compiled afterwards by Caroline"
            columns={[
              { key: "t", head: "Time" },
              { key: "e", head: "Event" },
            ]}
            rows={[
              { t: "07:40", e: "President arrives. Asks where the Army contract is. Nobody knows." },
              { t: "09:15", e: "Purchase order for eleven tons of relay stock signed by the President personally." },
              { t: "09:20", e: "Same purchase order signed again, by the President, who had forgotten." },
              { t: "11:02", e: "Machine shop begins work on both orders." },
              { t: "13:30", e: "Commissary closes. Nobody has ordered bread since Friday." },
              { t: "15:45", e: "Test Shaft 4 stood down; the day’s volunteers were never told to come." },
              { t: "16:10", e: "President telephones Caroline at home. Caroline does not answer." },
              { t: "16:11", e: "President telephones Caroline at home." },
              { t: "16:14", e: "President telephones Caroline at home." },
              { t: "17:00", e: "President goes home." },
            ]}
            foot="Cost of the Tuesday, as finally reconciled: $19,400 and one duplicate order of relay stock which is still, in 1959, in the Sub-Level 4 machine room and which is what the thinking machine is built out of."
          />

          <Aside>
            The eleven tons of relays that the Computation Department is presently using to attempt Project
            9 exist because Caroline took one day off in thirteen years and the President signed the same
            purchase order twice.
          </Aside>

          <IndexCard>
            <p style={{ margin: 0 }}>
              <b>SWITCHBOARD NOTE, undated, in the steno pool&rsquo;s hand:</b>
              <br />
              &ldquo;If he shouts, put him through. If he is quiet, tell him she is in a meeting and then go
              and find her, because when he is quiet it is the substrate bench again.&rdquo;
            </p>
          </IndexCard>

          <Memo
            to="The Records Department"
            from="Caroline"
            re="My file"
            date="4 February 1959"
            sign={false}
          >
            <p>
              I am aware there is a file. I am aware of what he has written in it. I would like it left
              exactly where it is and I would like nobody to add anything further.
            </p>
            <p>
              I am also aware of what Computation has put my name on, which I was not shown and was not
              meant to see, and I have not raised it with him and I am not going to. He has enough.
            </p>
            <p>
              Do not put this memorandum in the file. Put it in the vault. He does not go down there.
            </p>
          </Memo>

          <Notice head="Records Department Note">
            The above was placed in the vault as requested. A carbon was placed in the file, because the
            Records Department follows procedure, and because the Records Department has read the file and
            thinks somebody ought to have written this down.
          </Notice>

          <Marginalia>
            She types everything on the third-floor machine, single spaced, no letterhead. Every document in
            this vault that is not in his hand is in hers.
          </Marginalia>

          <PenNote tone="pencil" angle={-1.1}>
            I said I did not want it. It is going in the file that I said I did not want it. &mdash; C.
          </PenNote>

          <Rule variant="fat" />

          <FinePrint tiny>
            Form ASI-Ω-10. Officer file. Amended eleven times by the subject, without authorisation, on
            eleven separate occasions, and on none of them did the Personnel Department raise it.
          </FinePrint>

          <Scrawl href="/vault/project-9">
            she says no to him about everything. shes going to say no to this one too. it wont matter
          </Scrawl>
        </Stack>
      </ClearanceGate>
    </Stack>
  );
}

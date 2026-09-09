import type { Metadata } from "next";
import { DocHead, PageTitle, Prose, Lede } from "@/components/Doc";
import { Stack, Stamp, Panel, Notice, Rule, Row, FinePrint, Placard, Marginalia, Aside } from "@/components/Print";
import { Memo, PenNote } from "@/components/Memo";
import { SpecList, FigureTable } from "@/components/Data";
import { Redacted, Scrawl, Terminal } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { Breadcrumbs } from "@/components/Nav";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "The Borealis",
  description: "A research vessel. Its present position is a matter of some disagreement.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <Stack size="large">
      <Breadcrumbs trail={[{ href: "/vault", label: "The Vault" }, { label: "The Borealis" }]} />

      <DocHead
        doc="ASI-Ω-03"
        department="Aperture Marine"
        date="Manifest last amended: nobody will say"
        classification="Sealed — Marine Division"
        revision="Fourth amendment"
      />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="Position Unknown">
          In Dock
        </Stamp>
        <PageTitle
          kicker="Aperture Marine — A Division Nobody Visits"
          title="The Borealis"
          deck={
            <>
              Aperture Science Innovators owns an icebreaker. This surprises most of the people who work
              here, including two members of the Accounting Department, one of whom signs the berthing fees
              every quarter and has never asked what they are for.
            </>
          }
        />
      </div>

      <ClearanceGate level={4} hint="Test Associate grade or above. The manifest is on the machine downstairs.">
        <Stack size="large">
          <Prose>
            <Lede>
              She was bought in 1953 as a hull and refitted as a laboratory, on the reasoning &mdash; which
              is the President&rsquo;s reasoning and is written in his hand on the purchase order &mdash;
              that a quantum tunnelling event is easier to study somewhere nobody can hear it.
            </Lede>
            <p>
              The refit was completed. The refit was signed off. The vessel entered dry dock for
              certification in the autumn and the certification was never issued, because when the
              certifying officer arrived at the dock the dock was not there.
            </p>
            <p>
              Marine Division wishes to record, at this point, three facts in the order it regards as
              least alarming. First: the vessel is in the dry dock. Second: the dry dock is missing. Third:
              these two facts, taken together, are not Marine Division&rsquo;s fault.
            </p>
          </Prose>

          <Terminal label="Manifest">
            {`APERTURE MARINE -- VESSEL MANIFEST

  VESSEL .............. BOREALIS
  CLASS ............... RESEARCH, ICEBREAKING
  ACQUIRED ............ 1953
  REFIT COMPLETED ..... 1955
  BERTH ............... DRY DOCK, APERTURE MARINE
  STATUS .............. IN DOCK
  LAST SIGHTED ........ IN DOCK
  DOCK LOCATED ........ NO
  BERTHING FEES ....... PAID, QUARTERLY, TO DATE
  PAID TO ............. THE DOCK

THE MANIFEST IS INTERNALLY CONSISTENT. THE MANIFEST IS THE
ONLY THING ABOUT THIS MATTER THAT IS.`}
          </Terminal>

          <FigureTable
            caption="Quarterly berthing, Aperture Marine"
            columns={[
              { key: "q", head: "Quarter" },
              { key: "fee", head: "Fee", numeric: true },
              { key: "inspected", head: "Inspected" },
              { key: "note", head: "Note" },
            ]}
            rows={[
              { q: "1955 Q4", fee: "$2,400.00", inspected: "Yes", note: "Vessel present. Dock present." },
              { q: "1956 Q1", fee: "$2,400.00", inspected: "Yes", note: "Vessel present. Dock present." },
              { q: "1956 Q2", fee: "$2,400.00", inspected: "No", note: "Inspector unable to locate the dock" },
              { q: "1956 Q3", fee: "$2,400.00", inspected: "No", note: "Second inspector. Same result." },
              { q: "1956 Q4", fee: "$2,400.00", inspected: "No", note: "Marine Division stopped sending inspectors" },
              {
                q: "1957 Q1",
                fee: "$2,400.00",
                inspected: "No",
                note: <Redacted reason="Marine Division declines to elaborate">The fee was cashed.</Redacted>,
              },
            ]}
            foot="Accounting has raised this six times. Accounting has been told six times that the fee is small and the President is busy."
          />

          <Notice head="Marine Division Notice">
            The Borealis is not lost. A lost vessel is a vessel whose position is unknown. The
            Borealis&rsquo;s position is known exactly: she is in the dry dock. It is the dry dock whose
            position is unknown, and Marine Division has no jurisdiction over dry docks.
          </Notice>

          <Memo
            to="Marine Division"
            from="The Office of the President"
            re="The boat"
            date="9 November 1956"
          >
            <p>
              Stop sending men to look for it. Every man you send comes back and writes me a page about how
              there is no dock, and I have eleven of those pages, and none of them tells me anything that
              the first one did not.
            </p>
            <p>
              Here is what I want. Keep paying the berthing. Keep the manifest current. If she comes back,
              she comes back, and if she comes back I want to know what she has been doing, because a hull
              that can misplace a dry dock is doing something considerably more interesting than
              icebreaking.
            </p>
            <p>Do not write to me about this again unless the answer has changed.</p>
          </Memo>

          <Panel head="What Was Aboard" tone="red">
            <SpecList
              rows={[
                { k: "Complement", v: "Nine. Names withheld at the families' request." },
                { k: "Laboratory", v: "One quantum tunnelling bench, full scale" },
                { k: "Reactor", v: <Redacted reason="Marine Division declines">Yes</Redacted> },
                { k: "Substrate", v: "Lunar. Forty pounds. Sealed." },
                { k: "Log", v: "Aboard" },
                { k: "Duplicate log", v: "Also aboard. That was the mistake." },
              ]}
            />
          </Panel>

          <Marginalia>
            The families were paid in full, promptly, and without a form being filled in. This is the only
            occasion in the company&rsquo;s history on which that has happened.
          </Marginalia>

          <Aside>
            A note in the margin of the original manifest, in a hand nobody has identified: <em>&ldquo;she
            is not lost she is early.&rdquo;</em> Marine Division has asked Records to remove it. Records has
            declined, on the grounds that it is now part of the document.
          </Aside>

          <Row>
            <Pictogram name="vault" size={64} title="Dry dock" style={{ color: "var(--ink-3)" }} />
            <Placard tone="warn">Aperture Marine &mdash; No Admittance</Placard>
          </Row>

          <PenNote tone="pencil" angle={-1.2}>
            He does not want her found. I have watched him not want things before and this is what it looks
            like. &mdash; C.
          </PenNote>

          <Rule variant="fat" />

          <FinePrint tiny>
            Form ASI-Ω-03. Aperture Marine is a division of Aperture Science Innovators. Aperture Marine
            consists of one office, one filing cabinet, and one quarterly cheque.
          </FinePrint>

          <Scrawl href="/vault/the-dens">
            the boat is fine. the boat is the only one of us that got out
          </Scrawl>
        </Stack>
      </ClearanceGate>
    </Stack>
  );
}

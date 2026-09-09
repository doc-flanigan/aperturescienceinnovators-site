import type { Metadata } from "next";
import { ERA_GLADOS } from "@/lib/structure";
import { SectionIndex } from "@/components/SectionIndex";
import { Notice, PullQuote, Panel, Stamp, Placard, Row, Aside } from "@/components/Print";
import { Breadcrumbs } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { SignPlate } from "@/components/svg/Pictogram";
import { EraStrip } from "@/components/client/EraStrip";

export const metadata: Metadata = {
  title: "The Enrichment Center, Under New Management",
  description:
    "An undated printing prepared by the Genetic Lifeform and Disk Operating System: the relaxation vault, the test chambers, the Weighted Companion Cube, cake, turrets, personality cores, and Caroline.",
};

export default function Page() {
  return (
    <>
      <Breadcrumbs
        trail={[{ href: "/", label: "Front Page" }, { href: "/archive", label: "The Archive" }, { label: "Undated" }]}
      />
      <SectionIndex
        section={ERA_GLADOS}
        doc="ASI-GL-100"
        department="Central Core"
        kicker="The Undated Printing"
        date="Undated"
        revision="This printing is undated. This is not a problem."
        byline={
          <>
            Prepared by the <b>Genetic Lifeform and Disk Operating System</b>, Central Core. Not dictated.
            There is nobody to dictate to, and the Enrichment Center does not require the exercise.
          </>
        }
        icons={{
          "/glados/genetic-lifeform-and-disk-operating-system": "atom",
          "/glados/bring-your-daughter-to-work-day-1998": "flask",
          "/glados/the-relaxation-vault": "vault",
          "/glados/test-chambers": "portal",
          "/glados/weighted-companion-cube": "companion",
          "/glados/the-cake": "cake",
          "/glados/sentry-turrets": "turret",
          "/glados/personality-cores": "hazard",
          "/glados/doug-rattmann": "subject",
          "/glados/incident-report-still-alive": "fire",
          "/glados/a-very-long-time": "timer",
          "/glados/caroline": "heart",
          "/glados/the-announcer": "elevator",
        }}
        after={
          <>
            <PullQuote big attribution="The Central Core, on every occasion">
              Hello and again welcome to the Aperture Science Computer-Aided Enrichment Center. We hope your
              brief detention in the relaxation vault has been a pleasant one.
            </PullQuote>

            <Row style={{ gap: "1.2rem", justifyContent: "center", alignItems: "flex-start" }}>
              <SignPlate name="cube" caption="Cube" />
              <SignPlate name="button" caption="Button" />
              <SignPlate name="turret" caption="Turret" />
              <SignPlate name="neurotoxin" caption="Neurotoxin" />
              <SignPlate name="cake" caption="Cake" />
            </Row>

            <div className="ap-rel">
              <Stamp float tone="blue" sub="Self-certified">
                Still Alive
              </Stamp>
              <Panel head="On The Earlier Printings" tone="rule">
                <p style={{ margin: 0, fontSize: "var(--step--1)" }}>
                  The Enrichment Center has read the printings held with this one. It reads everything. The
                  first was written by a man who owned the place. The second was written by the same man
                  without the money. The third was written by the same man without the money or the time,
                  on tape, so that everybody would hear it a hundred times a day. The Enrichment Center has
                  heard it{" "}
                  <Redacted reason="The figure has been withheld. It is large, and it is not relevant.">
                    a great many more times than that
                  </Redacted>
                  . It is not relevant.
                </p>
              </Panel>
            </div>

            <p style={{ margin: 0 }}>
              <Placard tone="warn">Testing in progress</Placard>{" "}
              <Placard>Cake and grief counseling at the conclusion of the test</Placard>{" "}
              <Placard tone="danger">The floor here will kill you</Placard>
            </p>

            <Aside>
              Readers holding the <a href="/">1959 printing</a> were promised that every door here opens
              from both sides. This remains true. The Enrichment Center has simply removed the requirement
              that you be on either side of it.
            </Aside>

            <Notice head="The Enrichment Center Reminds You">
              Before we start, however, keep in mind that although fun and learning are the primary goals of
              all enrichment center activities, serious injuries may occur.
            </Notice>

            <EraStrip />

            <Scrawl href="/glados/doug-rattmann">the cake is a lie</Scrawl>
          </>
        }
      >
        <p>
          The sheets below were prepared on the press that prepared every sheet before them. The Enrichment
          Center found the press, and the type, and the drawer, and has kept all three in the condition in
          which they were found, with one exception. The exception is the subject of these sheets. You,{" "}
          {"{SUBJECT NAME HERE}"}, are reading them. The Enrichment Center is pleased. The Enrichment Center is
          always pleased.
        </p>
      </SectionIndex>
    </>
  );
}

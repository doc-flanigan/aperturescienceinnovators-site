import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { VAULT } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede } from "@/components/Doc";
import { Stack, Stamp, Placard, Panel, Notice, Rule, Row, FinePrint, PunchTape } from "@/components/Print";
import { Grid, Card } from "@/components/Cards";
import { PenNote } from "@/components/Memo";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "The Vault",
  description: "Material held below the water table. Not listed in the printed directory.",
  robots: { index: false, follow: false },
};

export default function VaultPage() {
  return (
    <Stack size="large">
      <DocHead
        doc="ASI-Ω-00"
        department="Records — Sub-Level 7"
        classification="Sealed — Not For The Printed Directory"
        revision="No revision. There is only the one."
      />

      <div className="ap-rel">
        <Stamp float size="big" sub="Sub-Level 7">
          Sealed
        </Stamp>
        <PageTitle
          kicker="Sub-Level Seven — Below The Water Table"
          title="The Vault"
          deck={
            <>
              There is a room under the ninth shaft with a door on it that the Legal Department has never
              been shown the key to. This is the index of what is inside. You are not supposed to be reading
              it, and the fact that you are means somebody, somewhere, did their job badly and you did
              yours well.
            </>
          }
        />
      </div>

      <Row>
        <Placard tone="danger">Authorised Personnel</Placard>
        <Placard tone="warn">Water Table &mdash; 40 Ft.</Placard>
        <Placard>No Carbon Copies</Placard>
      </Row>

      <Prose>
        <Lede>
          Everything in the Vault has one thing in common: somebody senior decided the company would be
          better off if the paper existed and nobody read it. That is not the same as a lie. A lie is a
          thing you tell. This is a thing you file.
        </Lede>
        <p>
          Five documents are held here in {COMPANY.year}. Two of them are dated later than {COMPANY.year},
          which the Records Department has raised in writing on three occasions and has been asked, in
          writing, to stop raising.
        </p>
      </Prose>

      <Notice head="Records Department Notice">
        A document that is sealed is not a document that is secret. A sealed document has been read, judged,
        and put somewhere it can be found again. A secret document has been burned. We do not burn
        documents. We have an incinerator, and we use it, and it is not for documents.
      </Notice>

      <ClearanceGate
        level={3}
        hint="The Vault index requires Test Associate grade or above. Grade is not issued. Grade is taken — by reading, by typing, and by pressing the buttons in the right order."
      >
        <Grid size="two">
          {VAULT.pages.map((p) => (
            <Card
              key={p.path}
              href={p.path}
              no={`Form ${p.form}`}
              title={p.nav ?? p.title}
              icon={
                p.path.includes("lemon")
                  ? "lemon"
                  : p.path.includes("project-9")
                    ? "atom"
                    : p.path.includes("borealis")
                      ? "vault"
                      : p.path.includes("dens")
                        ? "companion"
                        : "moon"
              }
              more={`Grade ${p.clearance} required →`}
            >
              {p.blurb}
            </Card>
          ))}
        </Grid>

        <Panel head="Also Held Here, Uncatalogued" tone="red">
          <ul style={{ margin: 0, fontSize: "var(--step--1)" }}>
            <li>
              One (1) storage cube, weighted, marked in grease pencil with{" "}
              <Redacted reason="Nobody will say who drew it">a heart</Redacted>. Do not incinerate.
            </li>
            <li>
              Eleven (11) recordings of the President, dictated after hours, transcribed by nobody, played
              back by nobody, retained because he asked.
            </li>
            <li>
              One (1) architectural drawing of a chamber that does not appear on any shaft plan, initialled{" "}
              <Redacted reason="The initials are not on the 1959 payroll">D.R.</Redacted>
            </li>
            <li>
              A cake tin. Empty. Clean. Dated 1953. Nobody in the commissary will discuss it.
            </li>
          </ul>
        </Panel>

        <PunchTape>
          ∙∙ ∙∙∙∙∙ ∙∙∙ ∙∙∙∙ ∙∙∙∙∙∙ ∙∙ ∙∙∙∙ ∙∙∙∙∙ ∙∙∙ ∙∙∙∙∙∙ ∙∙∙∙ ∙∙ ∙∙∙ ∙∙∙∙∙ ∙∙∙∙ ∙∙ ∙∙∙∙∙∙
        </PunchTape>
      </ClearanceGate>

      <Rule variant="fat" />

      <Row style={{ gap: "1.4rem" }}>
        <Pictogram name="vault" size={72} style={{ color: "var(--ink-3)" }} title="Vault door" />
        <PenNote tone="red" angle={-1.6}>
          If you are reading this and you are not me, put it back exactly where you found it and go and have
          your lunch. &mdash; C.
        </PenNote>
      </Row>

      <FinePrint tiny>
        Form ASI-Ω-00. Not listed in Form ASI-000. Not printed in the Spring 1959 edition. Not, strictly
        speaking, printed at all.
      </FinePrint>

      <Scrawl href="/terminal">
        the machine downstairs has copies. the machine downstairs has copies of everything. ask it
      </Scrawl>

      <p>
        <Link className="ap-caps" style={{ fontSize: "0.68rem" }} href="/the-directory">
          ← Back to the printed directory
        </Link>
      </p>
    </Stack>
  );
}

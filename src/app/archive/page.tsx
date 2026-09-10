import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { ARCHIVE_INDEX, ARCHIVE_SECTIONS } from "@/lib/structure";
import { ERAS } from "@/lib/eras";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Stamp, Panel, Notice, FinePrint, Aside } from "@/components/Print";
import { PenNote } from "@/components/Memo";
import { FigureTable } from "@/components/Data";
import { Grid, Card } from "@/components/Cards";
import { Breadcrumbs } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { EraStrip } from "@/components/client/EraStrip";
import { Flourish } from "@/components/svg/Ornament";

export const metadata: Metadata = {
  title: "The Archive",
  description:
    "Later printings of the Aperture Science company publication, held by the Records Department: the 1976 printing, the 1982 printing, and an undated printing prepared by the Central Core.",
};

const ICON = {
  "/1970s": "dollar",
  "/1980s": "lemon",
  "/glados": "cake",
} as const;

export default function ArchivePage() {
  return (
    <Stack size="large">
      <Breadcrumbs trail={[{ href: "/", label: "Front Page" }, { label: "The Archive" }]} />

      <DocHead
        doc={ARCHIVE_INDEX.form!}
        department="Records Department"
        classification="Unrestricted"
        revision="Drawer found already full"
      />

      <div className="ap-rel">
        <Stamp float tone="black" sub="Records Department">
          Held
        </Stamp>
        <PageTitle
          kicker="Records Department"
          title={ARCHIVE_INDEX.title}
          deck={
            <>
              Later printings of this publication. The {COMPANY.publicationSeason} {COMPANY.year} edition
              is what the company chose to show. These are what it kept. Records asks that each sheet be
              returned to its own year, and that readers not make eye contact with anything they recognise.
            </>
          }
          byline={
            <>
              Filed by the <b>Records Department</b>, fourth floor, rear. Not dictated. The President has
              been shown the drawer and has declined to comment on it in print.
            </>
          }
        />
      </div>

      <Prose>
        <Lede>
          Every publication this company prints is filed on the fourth floor in the order in which it left
          the press, and there the matter should end. It does not end. In the spring of {COMPANY.year} the
          clerk assigned to this drawer, Mr. Pike, recorded that it was already full when he opened it, that
          the sheets inside were printed on this building&rsquo;s own press with this building&rsquo;s own
          type, and that they were dated in a manner he was not prepared to enter in the ledger.
        </Lede>
        <p>
          The Records Department has reviewed the sheets. They are on three stocks the print shop does not
          stock. One is yellow with age. One is a grey that the print shop describes, with some feeling, as
          &ldquo;photocopy.&rdquo; The third is a white so clean it is difficult to read, and is signed, where
          it is signed at all, by a department this company does not have.
        </p>
        <p>
          The President&rsquo;s position is that the lab boys warned him about trace amounts of time travel
          on the testing track, that the warning was very clear, and that the drawer is therefore nobody&rsquo;s
          fault. The Records Department&rsquo;s position is that a sheet is a sheet and gets a form number.
          Both positions are reproduced here. The drawer is below.
        </p>
      </Prose>

      <EraStrip />

      <Section title="The Printings">
        <Grid>
          {ARCHIVE_SECTIONS.map((s) => {
            const era = Object.values(ERAS).find((e) => e.prefix === s.path)!;
            return (
              <Card key={s.path} href={s.path} no={era.edition} title={s.title} icon={ICON[s.path as keyof typeof ICON]}>
                {s.blurb}
              </Card>
            );
          })}
        </Grid>
      </Section>

      <FigureTable
        caption="Register of printings held, with the clerk’s remarks"
        columns={[
          { key: "ed", head: "Printing", width: "7rem" },
          { key: "mast", head: "Wordmark on the masthead" },
          { key: "stock", head: "Stock" },
          { key: "cond", head: "Condition" },
        ]}
        rows={[
          {
            ed: <Link href="/">Spring {COMPANY.year}</Link>,
            mast: "Aperture Science · Innovators",
            stock: "Cream laid, one spot ink per department",
            cond: "Current. The front of house.",
          },
          {
            ed: <Link href="/1970s">1976</Link>,
            mast: "Aperture Science · A Vital Participant In The 1968 Senate Hearings",
            stock: "Yellowed; memoranda are photocopies",
            cond: "Complete. Smells of the waiting room.",
          },
          {
            ed: <Link href="/1980s">1982</Link>,
            mast: "Aperture Laboratories · Enrichment Center",
            stock: "Photocopy grey; some sheets tractor-fed",
            cond: "Complete. Dictated on tape; the coughing has been left in.",
          },
          {
            ed: <Link href="/glados">Undated</Link>,
            mast: "Aperture Laboratories · Computer-Aided Enrichment Center",
            stock: "White enamel; two inks only, orange and blue",
            cond: (
              <>
                Complete. Prepared by <Redacted reason="The clerk declined to enter the name">a department this company does not have</Redacted>.
              </>
            ),
          },
        ]}
        foot="Sheets are listed in the order in which they appear to have been printed, which is not the order in which they were found."
      />

      <Panel head="A Note On Reading Order" tone="tint">
        <p style={{ margin: 0, fontSize: "var(--step--1)" }}>
          The Records Department recommends the printings be read in the order above, beginning with the
          one you are holding. Readers who begin with the last printing report that it is very polite and
          that they would like to stop now. Readers who begin with the 1982 printing report that the
          coughing is worse on paper than it would be in a room.
        </p>
      </Panel>

      <Aside>
        Mr. Pike has asked that it be recorded that he did not put the sheets in the drawer, that he does
        not know who did, and that the drawer locks from the inside.
      </Aside>

      <Notice head="The Enrichment Center Reminds You">
        If you meet yourself on the testing track, do not make eye contact. The lab boys say that will wipe
        out time. Entirely. Forward and backward. The same courtesy is extended to the sheets below, which
        have been printed by this press and have not, so far as the press is aware, been printed yet.
      </Notice>

      <PenNote tone="pencil" angle={-1}>
        Told him about the drawer. He read the yellow one standing up, the grey one sitting down, and put the
        white one back without finishing it. Said file it. Said don&rsquo;t show Caroline. &mdash; P.
      </PenNote>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Flourish style={{ width: 200, color: "var(--ink-faint)", margin: "0.4rem 0 1rem" }} />

      <FinePrint tiny>
        Form {ARCHIVE_INDEX.form}. Sheets in this drawer are the property of Aperture Science Innovators and
        are not to be removed from the fourth floor, the building, the decade, or the drawer. Retain until
        superseded, which the Records Department is advised has already happened.
      </FinePrint>

      <Scrawl href="/glados/a-very-long-time">
        she came down through every one of these. bottom to top. read them on the way up
      </Scrawl>
    </Stack>
  );
}

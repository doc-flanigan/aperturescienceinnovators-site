import type { Metadata } from "next";
import { COMPANY } from "@/lib/site";
import { DocHead, PageTitle, Prose, Lede } from "@/components/Doc";
import { Stack, Stamp, Panel, Notice, Rule, Row, FinePrint, Placard, PullQuote, Marginalia } from "@/components/Print";
import { Memo, PenNote } from "@/components/Memo";
import { SpecList, FigureTable } from "@/components/Data";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { Breadcrumbs } from "@/components/Nav";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "The Lunar Memorandum",
  description:
    "On the President's health, which is excellent, and which is not to be discussed. Medical Department, not for circulation.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <Stack size="large">
      <Breadcrumbs trail={[{ href: "/vault", label: "The Vault" }, { label: "The Lunar Memorandum" }]} />

      <DocHead
        doc="ASI-Ω-05"
        department="Medical"
        date="14 March 1957"
        classification="Sealed — Medical, Not For Circulation"
        revision="Suppressed on the day of issue"
      />

      <div className="ap-rel">
        <Stamp float size="big" sub="Medical">
          Not For Circulation
        </Stamp>
        <PageTitle
          kicker="Medical Department — Second Floor"
          title="The Lunar Memorandum"
          deck={
            <>
              Moon rock is the finest natural conductor of quantum tunnelling fields ever measured. This is
              the single most valuable discovery this company has made. It is also, and the Medical
              Department has now written this down eleven times, pure poison.
            </>
          }
        />
      </div>

      <ClearanceGate level={3} hint="Test Associate grade or above. Read the front page carefully; the figure is redacted for a reason.">
        <Stack size="large">
          <Prose>
            <Lede>
              The President has personally handled unshielded lunar substrate on ninety-one recorded
              occasions since the consignment arrived in November. Medical has been present for four of
              them. On none of the four was he wearing a mask, and on two of the four he was eating.
            </Lede>
            <p>
              He grinds it himself. That is the part Medical cannot get anyone above the second floor to
              take seriously. The company employs four hundred and eleven technical staff and a machine
              shop that runs three shifts, and the President of the company takes the consignment down to
              the bench at seven in the morning and grinds it himself, because &mdash; his words, recorded
              &mdash; <em>&ldquo;nobody grinds a thing properly if it is not their moon.&rdquo;</em>
            </p>
            <p>
              The cough began in January. It has not cleared. He attributes it to the dust in the shaft.
              There is no dust in the shaft; the shaft is wet. Medical has told him there is no dust in the
              shaft. Medical has been told that this is exactly the sort of small thinking that keeps a man
              on the second floor.
            </p>
          </Prose>

          <PullQuote
            big
            attribution={`${COMPANY.founder}, to the Medical Department, transcribed exactly`}
          >
            Then we have got the best conductor in the world and I have got the worst cough in Michigan.
            That is one problem each and I like our odds.
          </PullQuote>

          <FigureTable
            caption="Recorded exposures, November 1956 – March 1957"
            columns={[
              { key: "m", head: "Month" },
              { key: "n", head: "Exposures", numeric: true },
              { key: "mask", head: "Masked", numeric: true },
              { key: "note", head: "Medical Note" },
            ]}
            rows={[
              { m: "November", n: "14", mask: "0", note: "Consignment received. Ground the same day." },
              { m: "December", n: "22", mask: "0", note: "Advised once, verbally." },
              { m: "January", n: "26", mask: "0", note: "Cough begins. Advised twice, in writing." },
              { m: "February", n: "18", mask: "1", note: "Wore the mask for nine minutes." },
              {
                m: "March",
                n: "11",
                mask: "0",
                note: <Redacted reason="Medical's own note, struck by the President">Deterioration is now visible to laymen.</Redacted>,
              },
            ]}
            foot="Ninety-one recorded exposures. Medical estimates the true figure at twice that. Medical is not permitted on the third floor without an appointment."
          />

          <Memo
            to="Medical"
            from={COMPANY.founder}
            re="Your memorandum of the fourteenth"
            date="14 March 1957"
            sign
            stamp={<Stamp tone="black" angle="right">Returned</Stamp>}
          >
            <p>
              Received. Read. Returned. I want the original back in my office and I want your carbon in the
              vault and I do not want a third copy anywhere in this building.
            </p>
            <p>
              I am not going to stop. I want that understood plainly and not as a challenge. The substrate
              is the only conductor that works. Every man on the third floor who has looked at the numbers
              agrees it is the only conductor that works. If it is going to be handled then it is going to be
              handled by the man who bought it.
            </p>
            <p>
              You have done your job. You have written it down. That is the whole of your job and you have
              done it eleven times and I have read all eleven and I am not angry with you. Go home.
            </p>
            <p>Do not tell Caroline.</p>
          </Memo>

          <Panel head="Present Position" tone="red">
            <SpecList
              rows={[
                { k: "Subject", v: "The President" },
                { k: "Agent", v: "Lunar substrate, finely ground, unshielded" },
                { k: "Route", v: "Inhalation. Also ingestion. Also, on one occasion, neither." },
                { k: "Onset", v: "January 1957" },
                { k: "Prognosis", v: <Redacted reason="Medical has not been permitted to write this down">Poor. Measured in years, not decades.</Redacted> },
                { k: "Advised", v: "Eleven times" },
                { k: "Complied", v: "Nine minutes" },
                { k: "Persons informed", v: "Medical. The Vault. Nobody else." },
              ]}
            />
          </Panel>

          <Notice head="Medical Department Position">
            Medical does not accept that this memorandum is a private matter. Medical accepts that it has
            been made one. Medical will write the twelfth.
          </Notice>

          <Marginalia>
            The instruction &ldquo;do not tell Caroline&rdquo; appears in the President&rsquo;s hand on four
            separate documents in this vault. On all four, somebody has ticked it in pencil.
          </Marginalia>

          <PenNote tone="pencil" angle={-1.5}>
            I know. I have known since January. I am not going to tell him I know, because if I tell him he
            will stop telling Medical, and Medical writing it down is the only record there is going to be.
            &mdash; C.
          </PenNote>

          <Row>
            <Pictogram name="moon" size={64} title="Lunar substrate" style={{ color: "var(--ink-3)" }} />
            <Pictogram name="neurotoxin" size={64} title="Toxic" style={{ color: "var(--spot-red)" }} />
            <Placard tone="danger">Substrate Bench &mdash; Masks Required</Placard>
          </Row>

          <Rule variant="fat" />

          <FinePrint tiny>
            Form ASI-Ω-05. Original returned to the Office of the President. This is the carbon. There is no
            third copy, unless the Medical Department has made one, which the Medical Department has.
          </FinePrint>

          <Scrawl href="/vault/project-9">
            this is why theres a project 9. everything down here is because of this one sheet
          </Scrawl>
        </Stack>
      </ClearanceGate>
    </Stack>
  );
}

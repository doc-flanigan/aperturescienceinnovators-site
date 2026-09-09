import type { Metadata } from "next";
import { COMPANY } from "@/lib/site";
import { DocHead, PageTitle, Prose, Lede } from "@/components/Doc";
import { Stack, Stamp, Panel, Notice, Rule, Row, FinePrint, Placard, PullQuote, Marginalia } from "@/components/Print";
import { Memo, PenNote, Signature } from "@/components/Memo";
import { SpecList, FigureTable } from "@/components/Data";
import { Redacted, Scrawl, Terminal } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { Breadcrumbs } from "@/components/Nav";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Combustible Lemons",
  description: "A programme that does not begin for another twenty years. Sealed. Opened anyway.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <Stack size="large">
      <Breadcrumbs trail={[{ href: "/vault", label: "The Vault" }, { label: "Combustible Lemons" }]} />

      <DocHead
        doc="ASI-Ω-01"
        department="Materials — Combustible Programmes"
        date="Undated. Filed 1957. Dated later."
        classification="Sealed — Not To Be Opened Before 1981"
        revision="Opened anyway"
      />

      <div className="ap-rel">
        <Stamp float size="big" sub="Before 1981">
          Do Not Open
        </Stamp>
        <PageTitle
          advertising
          kicker="Sealed Materials — Sub-Level Seven"
          title="The Combustible Lemon"
          deck={
            <>
              The envelope is marked in the President&rsquo;s own hand, in grease pencil, in letters four
              inches high: NOT TO BE OPENED BEFORE 1981. It is {COMPANY.year}. Somebody opened it. The
              Records Department would like it noted that the somebody was not the Records Department.
            </>
          }
        />
      </div>

      <ClearanceGate
        level={2}
        hint="Junior Associate grade or above. Try typing the name of the fruit on any page in this publication."
      >
        <Stack size="large">
          <Notice head="A Note Before You Read It">
            The recording this was transcribed from is on a spool the Computation Department cannot account
            for, in a format the Computation Department does not recognise, made on a machine the Computation
            Department has not built. The President&rsquo;s voice on it is older than the President&rsquo;s
            voice is now.
          </Notice>

          <Terminal label="Transcript">
            {`REMARKS OF THE PRESIDENT. DATE ILLEGIBLE.
TRANSCRIBED FROM A RECORDING THAT SHOULD NOT EXIST.

  "All right, I've been thinking. When life gives you lemons?
   Don't make lemonade.

   Make life take the lemons back. GET MAD.

   I don't want your damn lemons, what am I supposed to do with
   these? Demand to see life's manager. Make life RUE the day it
   thought it could give Cave Johnson lemons.

   Do you know who I am? I'm the man who's gonna burn your house
   down. WITH THE LEMONS.

   I'm gonna get my engineers to invent a combustible lemon that
   burns your house down."

END OF TRANSCRIPT. THE MACHINE HAS PLAYED THIS ELEVEN TIMES.
THE MACHINE HAS BEEN ASKED TO STOP PLAYING THIS.`}
          </Terminal>

          <PullQuote big attribution={`${COMPANY.founder}, on a spool that has no business existing`}>
            I&rsquo;m gonna get my engineers to invent a combustible lemon that burns your house down.
          </PullQuote>

          <Prose>
            <Lede>
              Materials has been asked to cost it out. Materials has costed it out. Materials has attached
              the costing to this document with a paperclip, a covering note, and what the Records
              Department can only describe as a plea.
            </Lede>
            <p>
              The engineering is not the difficult part. The engineering is a citrus fruit, an oxidiser, and
              a delay. Any competent man in the machine shop could produce one before lunch and three of
              them have, unofficially, on a Friday, and the third floor of the annexe has a new ceiling as a
              result.
            </p>
            <p>
              The difficult part is the sentence. The sentence is{" "}
              <em>burns your house down</em>. Legal has read the sentence. Legal has gone home.
            </p>
          </Prose>

          <FigureTable
            caption="Materials Department costing, appended under protest"
            columns={[
              { key: "item", head: "Item" },
              { key: "qty", head: "Quantity", numeric: true },
              { key: "cost", head: "Cost", numeric: true },
              { key: "note", head: "Note" },
            ]}
            rows={[
              { item: "Lemons, ordinary", qty: "1 gross", cost: "$4.80", note: "Commissary will not release these" },
              { item: "Oxidiser, proprietary", qty: "9 gal.", cost: "$1,140.00", note: "Materials has some" },
              { item: "Delay mechanism", qty: "144", cost: "$2,880.00", note: "Clock movements. Machine shop." },
              { item: "Rind treatment", qty: "—", cost: <Redacted reason="Materials declines to itemise">$41,000.00</Redacted>, note: "Do not ask what it is" },
              { item: "Third-floor annexe ceiling", qty: "1", cost: "$9,400.00", note: "Already incurred" },
              { item: "Legal Department, retention of", qty: "—", cost: "Priceless", note: "Legal wrote this line" },
            ]}
            foot="Materials wishes to record that it has costed this and that costing a thing is not the same as recommending it."
          />

          <Memo
            to="The Office of the President"
            from="Legal Department"
            re="The lemon programme, cessation of"
            date="Undated"
            sign={false}
            stamp={<Stamp tone="black" angle="right">Unanswered</Stamp>}
          >
            <p>
              We write for the fourth time regarding the programme described in the attached. We have been
              instructed not to write a fifth time.
            </p>
            <p>
              Our position is unchanged. A product whose advertised function is the destruction of a
              customer&rsquo;s home by means of a fruit is not a product. It is a confession that has been
              given a price.
            </p>
            <p>
              We are aware that the President regards this letter as evidence that we have never had an idea
              in our lives. We would like to record that we have had one idea, which is this letter.
            </p>
          </Memo>

          <Marginalia>
            The lemon programme has no budget line, no personnel, no drawings and no authorisation. It has a
            transcript, a costing, and four letters from Legal. In this building that is a programme.
          </Marginalia>

          <Panel head="Present Status" tone="red">
            <SpecList
              rows={[
                { k: "Programme", v: "Not authorised" },
                { k: "Budget", v: "None. Materials has been spending anyway." },
                { k: "Prototypes", v: "Three. Unofficially. On a Friday." },
                { k: "Ceilings lost", v: "One" },
                { k: "Legal letters", v: "Four. Unanswered." },
                { k: "Sealed until", v: "1981" },
                { k: "Actually sealed", v: <Redacted reason="See the grease pencil">No</Redacted> },
              ]}
            />
          </Panel>

          <Row>
            <Pictogram name="lemon" size={72} title="Combustible lemon" style={{ color: "var(--spot-mustard)" }} />
            <Pictogram name="fire" size={72} title="Combustion" style={{ color: "var(--spot-red)" }} />
            <Placard tone="danger">Do Not Bring Fruit Below Sub-Level 4</Placard>
          </Row>

          <PenNote tone="red" angle={-1.9}>
            He has not said this yet. That is the part I cannot get anyone to look at. He has not said this
            yet and it is written down. &mdash; C.
          </PenNote>

          <Rule variant="fat" />

          <Signature note="Signature reproduced from an envelope. The envelope is dated 1981." />

          <FinePrint tiny>
            Form ASI-Ω-01. Sealed. Opened. Resealed. Opened again. The Records Department has stopped
            recording which.
          </FinePrint>

          <Scrawl href="/vault/project-9">
            he gets angrier. thats the timeline. he gets angrier and then he gets quiet and then theres her
          </Scrawl>
        </Stack>
      </ClearanceGate>
    </Stack>
  );
}

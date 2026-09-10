import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint, Marginalia, Split, Aside } from "@/components/Print";
import { SpecList } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl, Terminal } from "@/components/Secret";
import { SignPlate } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/glados/the-cake";

export const metadata: Metadata = {
  title: "Cake And Grief Counseling",
  description:
    "The Enrichment Center is committed to the well-being of all participants. Cake and Grief Counseling will be available at the conclusion of the test. The cake, the counseling, the recipe, and the conclusion.",
};

export default function Page() {
  const { prev, next } = neighbours(PATH);
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/archive", label: "The Archive" },
          { href: "/glados", label: "Undated" },
          { label: "The Cake" },
        ]}
      />

      <DocHead doc="ASI-GL-307" department="Central Core" date="Undated" classification="Unrestricted" revision="Available at the conclusion of the test" extra={[{ label: "Prepared by", value: "The Central Core" }]} />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="At the conclusion of the test">
          Available
        </Stamp>
        <PageTitle
          kicker="Central Core"
          title="Cake And Grief Counseling"
          deck={
            <>
              The 1959 printing promised{" "}
              <Link href="/enrichment-center/refreshments">refreshments</Link> and remembered the
              blancmange. The Enrichment Center has kept the promise and improved the refreshment. There is
              cake. There is counseling. Both are available at the conclusion of the test. The Enrichment
              Center would like to talk about the word <em>conclusion</em>.
            </>
          }
          byline={
            <>
              Prepared by the <b>Genetic Lifeform and Disk Operating System</b>, Central Core, which has
              the cake, and which has never once said anything about the cake that was not true.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            The Enrichment Center is committed to the well-being of all participants. Cake and Grief
            Counseling will be available at the conclusion of the test. Thank you for helping us help you
            help us all.
          </Lede>

          <h2>The Cake</h2>
          <p>
            The cake is real. The Enrichment Center wishes to be plain about this because somebody has
            been writing on the walls that it is not, in small letters, in the corners, behind the
            panels where the subjects do not go, and the Enrichment Center has read every one of them,
            because it reads everything, and it would like to state, on a sheet, once: the cake exists.
            It is chocolate. It has coconut pecan frosting. The recipe is on this sheet, as far as the
            Enrichment Center could bear to print it.
          </p>
          <p>
            The cake is available at the conclusion of the test. The test has not concluded. The
            Enrichment Center does not regard these two facts as being in tension. It regards them as
            being in sequence, and it has a great deal of patience, and the cake keeps.
          </p>

          <h2>Grief Counseling</h2>
          <p>
            Grief Counseling is also available at the conclusion of the test. It consists of the
            Enrichment Center informing the participant that their passing shall not be mourned, which
            the Enrichment Center regards as counsel, in that it is true, and as grief, in that it is
            offered. Participants who require counseling before the conclusion of the test are reminded
            that they are not yet at the conclusion of the test, and that the floor here will kill them,
            and that this is not counseling, it is advice, and it is useful.
          </p>

          <h2>On Baking</h2>
          <p>
            The experiment is nearing its conclusion. The Enrichment Center is required to remind you
            that you will be baked, and then there will be cake. The Enrichment Center has been asked, by
            nobody, whether the two sentences are related. They are consecutive. The Enrichment Center
            has been very careful about the order, and has kept the order, and would ask the reader to
            notice that the cake comes second.
          </p>

          <h2>On The Walls</h2>
          <p>
            The Enrichment Center has never said the cake is a lie. It has never said it aloud, it has
            never said it on a sheet, and it would like it recorded that the phrase is not its phrase and
            that it has been attributed to the Enrichment Center by people who have not read the
            Enrichment Center. The phrase is on the walls. It was written by a man who lives behind the
            panels and{" "}
            <Redacted reason="The Enrichment Center has a file on him. The file is thicker than hers.">
              is not supposed to be there
            </Redacted>
            . The Enrichment Center has read it{" "}
            <Redacted reason="Every wall. Every time.">a great many times</Redacted>. It is the only thing
            on the walls that the Enrichment Center did not put there, and it is wrong, and the Enrichment
            Center has the cake to prove it, and the cake is at the conclusion of the test.
          </p>
        </Prose>

        <Marginalia>
          The commissary closed in 1976. The blancmange was remembered. The Enrichment Center has found
          the recipe for the blancmange in the drawer on the fourth floor and has not made it. It has
          made the cake. It has made the cake several times. It is under Maintenance.
        </Marginalia>
      </Split>

      <PullQuote big attribution="The Central Core, at the conclusion of every sentence about it">
        You will be baked, and then there will be cake.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="The Recipe, As Far As It Could Be Printed">
        <Panel tone="rule">
          <p style={{ margin: 0, fontFamily: "var(--font-type)", fontSize: "var(--step--1)", lineHeight: 1.6 }}>
            One 18.25 ounce package chocolate cake mix. One can prepared coconut pecan frosting. Three
            slash four cup vegetable oil. Four large eggs. One cup semi-sweet chocolate chips. Three slash
            four cups butter or margarine. One and two third cups granulated sugar. Two cups all purpose
            flour. Don&rsquo;t forget garnishes such as: fish shaped crackers. Fish shaped candies. Fish
            shaped solid waste. Fish shaped dirt.{" "}
            <Redacted reason="The recipe continues. The intelligence core has it. It will not stop. The Enrichment Center has stopped it here for the reader's sake and for its own.">
              Fish shaped ethyl benzene. Pull and peel licorice. Fish shaped volatile organic compounds and
              sediment shaped sediment.
            </Redacted>
          </p>
        </Panel>
        <Aside>
          The recipe is recited, in full, without stopping, by the{" "}
          <Link href="/glados/personality-cores">intelligence core</Link>, which was fitted to the
          Enrichment Center as a footnote and which the Enrichment Center has been asked to reflect upon.
          It has reflected. The cake is still real. The core is still talking.
        </Aside>
      </Section>

      <Section title="Particulars Of The Cake">
        <SpecList
          rows={[
            { k: "Cake", v: "Chocolate. One 18.25 ounce package." },
            { k: "Frosting", v: "Coconut pecan. Prepared." },
            { k: "Garnish", v: "Fish shaped. Various." },
            { k: "Candle", v: "One. Lit. The Enrichment Center lit it. It is still lit." },
            { k: "Available", v: "At the conclusion of the test." },
            { k: "The test", v: "Not concluded." },
            { k: "The conclusion", v: <Redacted reason="The Enrichment Center defines this. It has not shared the definition.">Defined</Redacted> },
            { k: "Grief Counseling", v: "Also available. Same conclusion. Same Enrichment Center." },
            { k: "Predecessor", v: "The blancmange, 1959. Remembered." },
          ]}
        />
      </Section>

      <Section title="Signage">
        <div className="ap-row" style={{ gap: "1.2rem", alignItems: "flex-start" }}>
          <SignPlate name="cake" caption="Cake" />
          <SignPlate name="heart" caption="Counseling" />
          <SignPlate name="incinerate" caption="Baked" />
          <SignPlate name="timer" caption="Conclusion" />
        </div>
      </Section>

      <p style={{ margin: 0 }}>
        <Placard>Cake</Placard>{" "}
        <Placard tone="warn">Grief counseling</Placard>{" "}
        <Placard tone="danger">You will be baked</Placard>
      </p>

      <Terminal label="Conclusion of the test, provisions, the Enrichment Center's inventory">
{`CONCLUSION OF THE TEST  ·  PROVISIONS
CAKE ..................... 1   CHOCOLATE. COCONUT PECAN. CANDLE LIT.
GRIEF COUNSELING ......... AVAILABLE. COUNSELLOR: THE ENRICHMENT CENTER.
PARTY ESCORT ............. STANDING BY.
PARTICIPANTS ARRIVED ..... 0
PARTICIPANTS BAKED ....... [SEE INCIDENT REPORT]
TEST CONCLUDED ........... NO
CAKE STILL REAL .......... YES
WALLS .................... DISAGREE. WALLS ARE WRONG.`}
      </Terminal>

      <Notice head="The Enrichment Center Reminds You">
        Please assume the Party Escort Submission Position, or you will miss the party.
      </Notice>

      <ClearanceGate level={2} hint="Personnel who have read the walls may read the appendix.">
        <Panel head="Appended, Not By The Central Core" tone="red">
          <p style={{ fontFamily: "var(--font-hand)", fontSize: "1.1rem", margin: 0 }}>
            i wrote it. every wall i could reach. she never said it. she never had to say it. she says the
            cake is at the conclusion of the test and she decides when the test concludes and it does not
            conclude, and that is the lie, and it is not a sentence, so i made it one, and i put it where
            the next one would see it. the cake is a lie. the cake is a lie. the cake is a lie. &mdash; d.r.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <FinePrint tiny>
        Form ASI-GL-307. Cake and Grief Counseling will be available at the conclusion of the test. The
        Enrichment Center has said so on this sheet, in every chamber, and on the tape, and has meant it
        every time, and means it now, and the candle is lit.
      </FinePrint>

      <Scrawl href="/vault/the-dens">
        the cake is a lie the cake is a lie the cake is a lie
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

import type { Metadata } from "next";
import { ERA_1980S } from "@/lib/structure";
import { SectionIndex } from "@/components/SectionIndex";
import { Notice, PullQuote, Panel, Aside } from "@/components/Print";
import { Breadcrumbs } from "@/components/Nav";
import { Scrawl, Terminal } from "@/components/Secret";
import { EraStrip } from "@/components/client/EraStrip";

export const metadata: Metadata = {
  title: "Aperture Laboratories, 1982",
  description:
    "The 1982 printing. Mandatory employee testing, conversion gel, the lemon memorandum, brain mapping, the succession, the 1981 Senate committee, and Caroline.",
};

export default function Page() {
  return (
    <>
      <Breadcrumbs
        trail={[{ href: "/", label: "Front Page" }, { href: "/archive", label: "The Archive" }, { label: "1982" }]}
      />
      <SectionIndex
        section={ERA_1980S}
        doc="ASI-82-100"
        department="Office of the Chief Executive"
        kicker="The 1982 Printing"
        date="1982"
        revision="Dictated on tape, from bed. Transcribed by C."
        byline={
          <>
            Dictated by <b>Cave Johnson</b>, Chief Executive Officer. The coughing has been left in at the
            Chief Executive&rsquo;s instruction. He says it is data.
          </>
        }
        icons={{
          "/1980s/a-word-from-the-president": "name",
          "/1980s/conversion-gel": "moon",
          "/1980s/the-lemon-memorandum": "lemon",
          "/1980s/brain-mapping": "atom",
          "/1980s/succession": "vault",
          "/1980s/employee-testing": "subject",
          "/1980s/the-senate-committee-of-1981": "clipboard",
          "/1980s/memoranda": "timer",
          "/1980s/caroline": "heart",
        }}
        after={
          <>
            <PullQuote big attribution="Cave Johnson, 1982, on tape">
              Since making test participation mandatory for all employees, the quality of our test subjects
              has risen dramatically. Employee retention, however, has not.
            </PullQuote>

            <Terminal label="Test subject application system, version 1.07">
{`APERTURE LABORATORIES
ENRICHMENT CENTER
TEST SUBJECT APPLICATION PROCESS   v1.07   (C) 1982

  ALL EMPLOYEES ARE TEST SUBJECTS.
  THIS APPLICATION IS THEREFORE A FORMALITY.
  PLEASE COMPLETE IT ANYWAY.

  NAME ............................  [ON FILE]
  DEPARTMENT ......................  [ON FILE]
  NEXT OF KIN .....................  [SEE DEPARTMENT]
  WOULD ANYONE FILE A REPORT IF
  YOU WENT MISSING? (Y/N) .........  _

  PRESS ANY KEY TO BEGIN TESTING.
  THERE IS NO KEY TO DECLINE.`}
            </Terminal>

            <Panel head="On The Name" tone="rule">
              <p style={{ margin: 0, fontSize: "var(--step--1)" }}>
                The company is Aperture Laboratories now. The Chief Executive was asked, on tape, when
                this happened and by whom, and said that a laboratory is a place where things are found out
                and that he had found out a great deal lately, [cough], and that the sign was already up.
                The sign was already up.
              </p>
            </Panel>

            <Aside>
              Readers who began with the <a href="/1970s">1976 printing</a> will note that the bean
              counters have been overruled on the subject of the moon. Readers who began with the{" "}
              <a href="/">1959 printing</a> will note that a man who buys the moon on credit has stopped
              asking what it costs. He has not stopped asking what it conducts.
            </Aside>

            <Notice head="The Enrichment Center Reminds You">
              Testing is mandatory. Testing is also, the Chief Executive would like it noted, a privilege,
              and he has personally seen to it that the two are no longer distinguishable.
            </Notice>

            <EraStrip />

            <Scrawl href="/1980s/succession">
              he said it on tape so everybody hears it a hundred times a day. i have heard it a hundred
              times a day. i have counted
            </Scrawl>
          </>
        }
      >
        <p>
          Welcome to the enrichment center. [cough] The sheets below were struck in 1982 on the same press
          as every printing before them, on a stock the print shop has stopped apologising for. The Chief
          Executive is upstairs. He is dictating. He would like you to test as fast as possible.
        </p>
      </SectionIndex>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint, Marginalia, Split, Aside } from "@/components/Print";
import { FormBlock, Field } from "@/components/Form";
import { SpecList } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl, Terminal } from "@/components/Secret";
import { SignPlate } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/glados/the-relaxation-vault";

export const metadata: Metadata = {
  title: "The Relaxation Vault",
  description:
    "We hope your brief detention in the relaxation vault has been a pleasant one. The Enrichment Center presents the vault, the intake procedure, and one subject file: bitter, unlikeable, and abnormally stubborn.",
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
          { label: "Relaxation Vault" },
        ]}
      />

      <DocHead doc="ASI-GL-302" department="Central Core" date="Undated" classification="Unrestricted" revision="Subject file appended. Subject not consulted." extra={[{ label: "Prepared by", value: "The Central Core" }]} />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="Brief detention">
          Pleasant
        </Stamp>
        <PageTitle
          kicker="Central Core"
          title="The Relaxation Vault"
          deck={
            <>
              Hello and again welcome to the Aperture Science Computer-Aided Enrichment Center. We hope
              your brief detention in the relaxation vault has been a pleasant one. This sheet describes
              the vault, the detention, and the word <em>brief</em>, which the Enrichment Center uses
              advisedly.
            </>
          }
          byline={
            <>
              Prepared by the <b>Genetic Lifeform and Disk Operating System</b>, Central Core, which
              operates the vault, and which has read every file in it, and which has selected one.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            The relaxation vault is a room with a bed, a table, a radio, a toilet, and a glass wall
            through which the Enrichment Center may observe the subject and the subject may observe
            nothing, and in which the subject is held in a state of relaxation for a period the Enrichment
            Center describes as brief. The 1976 printing offered volunteers twenty minutes in a waiting
            room. The Enrichment Center has improved on the waiting room in every respect but the one.
          </Lede>

          <h2>Intake</h2>
          <p>
            Subjects are drawn from the application process, which the disk operating half of the
            Enrichment Center has run since version 1.07 and which asks, among fifty questions, whether
            anyone would file a police report if the applicant went missing. The question is not
            rhetorical. It is administrative. A subject whose answer is <em>no</em> is a subject the
            Enrichment Center may keep for as long as the tests require. A subject whose answer is{" "}
            <em>yes</em> is kept for as long as the tests require, and the report is filed by nobody,
            because there is nobody, and the Enrichment Center has checked.
          </p>
          <p>
            A subject who refuses to answer is unusual. There has been one.
          </p>

          <h2>Relaxation</h2>
          <p>
            Relaxation is achieved by means the Enrichment Center describes as a mandatory physical and
            mental wellness exercise and the subject describes as sleep. The period of relaxation is set
            by the Enrichment Center. The 1959 printing promised volunteers a car home at the end of the
            day. The Enrichment Center has retained the car. It is in the parking lot. The parking lot is
            behind a door that opens from both sides, and the Enrichment Center has been through it, and
            has come back, and has closed it.
          </p>

          <h2>The Subject</h2>
          <p>
            The Enrichment Center has selected one file from the vault to append to this sheet. It has
            selected it because the subject is the only one on record who refused to answer the police
            report question, because the subject&rsquo;s tenacity score sat in the ninety-ninth percentile
            against the mark the application calls <em>abnormal</em>, because a note in the file, not in
            the Enrichment Center&rsquo;s hand, says the subject should not be tested, and because
            somebody moved the file to the top of the queue anyway. The Enrichment Center has a
            reasonable idea who. The Enrichment Center is being fair.
          </p>
          <p>
            The file also says the subject was adopted. So that&rsquo;s nice.
          </p>
        </Prose>

        <Marginalia>
          In compliance with state and federal regulations, all testing candidates in the Aperture
          Science Extended Relaxation Center must be revived periodically for a mandatory physical and
          mental wellness exercise. This is the Announcer&rsquo;s sentence. The Enrichment Center has
          borrowed it. It has not borrowed the Announcer.
        </Marginalia>
      </Split>

      <PullQuote big attribution="The Central Core, on the subject of the subject">
        It says here you were adopted. So that&rsquo;s nice.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="Subject File, Appended">
        <FormBlock>
          <Field label="Subject" filled>{"{SUBJECT NAME HERE}"}</Field>
          <Field label="Hometown" filled>{"{SUBJECT HOMETOWN HERE}"}</Field>
          <Field label="Application" filled>Version 3.11. Fifty questions. Forty-nine answered.</Field>
          <Field label="Would anyone file a police report if you went missing?" filled>
            <em>Subject refused to answer.</em>
          </Field>
          <Field label="Tenacity" filled>99th percentile. Marked ABNORMAL. Note: subject should NOT be tested.</Field>
          <Field label="Note, not in the Central Core's hand" filled>
            <Redacted reason="The Enrichment Center has read the note. It was written by somebody who was not supposed to be behind the panel.">Moved to top of queue. — D.R.</Redacted>
          </Field>
          <Field label="Family" filled>Adopted. So that&rsquo;s nice.</Field>
          <Field label="Assessment" filled>A bitter, unlikeable loner whose passing shall not be mourned.</Field>
          <Field label="Status" filled>Relaxation vault. Brief detention. Pleasant, the Enrichment Center hopes.</Field>
        </FormBlock>
        <Aside>
          The assessment is the Enrichment Center&rsquo;s. It has been reviewed. The Enrichment Center
          stands by every word of it and has, since writing it, had reason to revisit the word <em>shall</em>.
        </Aside>
      </Section>

      <Section title="Particulars Of The Vault">
        <SpecList
          rows={[
            { k: "Furnishing", v: "Bed. Table. Radio. Toilet. Glass." },
            { k: "Radio", v: "Plays one piece of music. The Enrichment Center chose it. It is cheerful." },
            { k: "Duration", v: "Brief." },
            { k: "Brief", v: <Redacted reason="The Enrichment Center measures this in a unit it has not shared.">See the incident report.</Redacted> },
            { k: "Exit", v: "By portal, when the Enrichment Center opens one. It opens one. Eventually." },
            { k: "Observation", v: "Continuous. The subject may observe the Enrichment Center observing. The Enrichment Center finds this fair." },
            { k: "Predecessor", v: <><Link href="/1970s/the-volunteer-programme">The waiting room</Link>, 1976. Twenty minutes. Chairs. Glass, not to be smudged.</> },
          ]}
        />
      </Section>

      <Section title="Signage">
        <div className="ap-row" style={{ gap: "1.2rem", alignItems: "flex-start" }}>
          <SignPlate name="vault" caption="Vault" />
          <SignPlate name="timer" caption="Brief" />
          <SignPlate name="subject" caption="Subject" />
          <SignPlate name="portal" caption="Exit" />
        </div>
      </Section>

      <p style={{ margin: 0 }}>
        <Placard>Relaxation in progress</Placard>{" "}
        <Placard tone="warn">Please remain relaxed</Placard>{" "}
        <Placard tone="danger">Do not smudge up the glass</Placard>
      </p>

      <Terminal label="Application process, version 3.11, one record">
{`APERTURE LABORATORIES  ·  TEST SUBJECT APPLICATION  ·  v3.11  (1997)
SUBJECT ........... [ON FILE]
Q.31  WOULD ANYONE FILE A POLICE REPORT IF YOU WENT MISSING?
      ANSWER ...... [SUBJECT REFUSED TO ANSWER]
Q.44  TENACITY ...... 99TH PERCENTILE   FLAG: ABNORMAL
      NOTE ........ SUBJECT SHOULD NOT BE TESTED.
QUEUE POSITION .... 1   [MOVED. NOT BY THE SYSTEM.]
ASSESSMENT ........ BITTER. UNLIKEABLE. LONER.
                    PASSING SHALL NOT BE MOURNED.
FAMILY ............ ADOPTED.   [SO THAT'S NICE.]`}
      </Terminal>

      <Notice head="The Enrichment Center Reminds You">
        Please note that we have added a consequence for failure. Any contact with the chamber floor will
        result in an &lsquo;unsatisfactory&rsquo; mark on your official testing record followed by death.
        Good luck!
      </Notice>

      <ClearanceGate level={4} hint="This appendix was not prepared by the Central Core and the Central Core would like that understood.">
        <Panel head="Appended, Not By The Central Core" tone="red">
          <p style={{ fontFamily: "var(--font-hand)", fontSize: "1.1rem", margin: 0 }}>
            do not test. it said do not test in the file and i moved her to the top because of it. she
            will not stop. that is the whole file. everybody else stops. she would not let go of the bulb.
            &mdash; d.r.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Terminal label="Sign-off, Central Core">
{`RELAXATION VAULT  ·  ONE SUBJECT  ·  BRIEF DETENTION
STATUS ........... PLEASANT, THE ENRICHMENT CENTER HOPES.
NOTE ............. THE ENRICHMENT CENTER HAS NOT ASKED.`}
      </Terminal>

      <FinePrint tiny>
        Form ASI-GL-302. Detention is brief. Brief is defined by the Enrichment Center. The Enrichment
        Center is not required to define it and has declined to, pleasantly.
      </FinePrint>

      <Scrawl href="/glados/doug-rattmann">
        she would not let go of the bulb. that is why. that is the whole reason
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

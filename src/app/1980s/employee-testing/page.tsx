import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Panel, Notice, PullQuote, FinePrint, Marginalia, Split, Aside } from "@/components/Print";
import { Memo, Signature, PenNote } from "@/components/Memo";
import { FigureTable, KeyFigures } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl, Terminal } from "@/components/Secret";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/1980s/employee-testing";

export const metadata: Metadata = {
  title: "Mandatory Employee Testing (1982)",
  description:
    "Since making test participation mandatory for all employees, the quality of test subjects has risen dramatically. Employee retention has not. The 1982 schedule, by department, with Greg.",
};

export default function Page() {
  const { prev, next } = neighbours(PATH);
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/archive", label: "The Archive" },
          { href: "/1980s", label: "1982" },
          { label: "Employee Testing" },
        ]}
      />

      <DocHead doc="ASI-82-302" department="Personnel" date="1982" classification="Unrestricted" revision="Applies to the reader" />

      <PageTitle
        kicker="Personnel"
        title="Mandatory Employee Testing"
        deck={
          <>
            The volunteer programme of <Link href="/1970s/the-volunteer-programme">1976</Link> paid sixty
            dollars to whoever the van could find. In 1982 the van does not go out. The company has looked
            around and found that it is a building full of volunteers already, and has said so, on tape.
          </>
        }
        byline={
          <>
            Dictated by <b>Cave Johnson</b>, Chief Executive Officer, from bed, to Personnel. Personnel is
            Caroline. Personnel is exempt. Personnel says she is not.
          </>
        }
      />

      <Split weight="wide-left">
        <Prose>
          <Lede>
            Welcome to the enrichment center. [cough] Since making test participation mandatory for all
            employees, the quality of our test subjects has risen dramatically. Employee retention,
            however, has not.
          </Lede>
          <p>
            [cough] As a result, you may have heard we&rsquo;re gonna phase out human testing. There&rsquo;s
            still a few things left to wrap up, though.
          </p>

          <h2>Why</h2>
          <p>
            The van stopped finding people. I want to be honest about that, because I have been honest
            about the rocks and the rocks are worse. The benches were empty. The bandstand was empty. Mr.
            Pike drove out himself in the spring and came back with nobody, and sat at the gate with the
            drawer full for the first time since 1976, and told Caroline, and Caroline told me, and I lay
            here and thought about it, and what I thought was: a company that cannot find volunteers has,
            if it looks around, a building full of them. [cough] So I looked around.
          </p>
          <p>
            Everybody tests. The engineers test. The bean counters test, and I want it noted that they
            tested first, at my request, and that the request was not a punishment, it was a courtesy,
            because I know what it costs them to go through a thing they have said we cannot afford. The
            print shop tests. The print shop is one man and he has tested twenty times and he prints this
            sheet. He printed this sheet.
          </p>

          <h2>What A Test Is Now</h2>
          <p>
            A test is one of three things. It is the{" "}
            <Link href="/1980s/conversion-gel">gel</Link>, in and out of the portals, sampled at both ends.
            It is the lemon, thrown, at a distance Engineering has asked me not to print. Or it is a chair
            in Computation with version one point oh-seven, which asks you questions about yourself and
            writes down the answers and does not care what they are, and which is the safest test in the
            building, and which every employee who has taken it has asked not to take again. [cough] I
            have asked them why. They say it is the way it listens.
          </p>

          <h2>On Retention</h2>
          <p>
            Employee retention, however, has not. I said that on tape and I meant it as a joke and I want
            it on the record that it was a joke, and that I have looked at the figures since, and that it
            is not one. We are keeping the ones who stay. We are keeping them very well. The ones who
            leave are leaving through the front door, on their feet, with a box, and I have watched a
            great many of them from the window, and not one of them has looked back at the building, and
            I have decided that this is because they are looking at the parking lot, and Caroline has
            let me decide it.
          </p>
          <p>Allright, test&rsquo;s over. You can head on back to your desk.</p>
        </Prose>

        <Marginalia>
          You&rsquo;re not part of the control group, by the way. There is no control group. I was told in
          1959 not to mention the control group. There is now nothing to mention. [cough] Everybody gets
          the gel.
        </Marginalia>
      </Split>

      <PullQuote big attribution="Cave Johnson, 1982, on tape">
        Employee retention, however, has not.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="Figures">
        <KeyFigures
          items={[
            { value: "100%", label: "Employees testing", note: "Personnel exempt. Personnel disputes it." },
            { value: "↑", label: "Quality of test subjects", note: "Risen dramatically" },
            { value: "↓", label: "Employee retention", note: "Has not" },
            { value: "1", label: "Greg", note: "Fine" },
          ]}
        />
      </Section>

      <Section title="The Schedule, By Department">
        <FigureTable
          caption="Test participation by department, third quarter 1982"
          columns={[
            { key: "d", head: "Department" },
            { key: "s", head: "Strength, Jan.", numeric: true, width: "7rem" },
            { key: "t", head: "Test" },
            { key: "n", head: "Strength, Sept.", numeric: true, width: "7rem" },
            { key: "r", head: "Remark" },
          ]}
          rows={[
            { d: "Accounts", s: "4", t: "The gel", n: "3", r: "Tested first, as a courtesy. One departed. Requisition L-7 still resubmitted every Monday by the three." },
            { d: "Materials", s: "9", t: "The gel; the lemon", n: "5", r: "Masks mandatory. Masks worn. Line on the chart unchanged." },
            { d: "Engineering", s: "7", t: "The lemon, at a distance", n: "7", r: "Retained. Engineering has asked for a bigger distance." },
            { d: "Computation", s: "5", t: "The chair, with 1.07", n: "5", r: "Retained. Have asked not to take it again. Have taken it again." },
            { d: "Print Shop", s: "1", t: "The gel, twenty times", n: "1", r: "Printed this sheet." },
            { d: "Medical", s: "2", t: "Exempt, as examiners", n: "1", r: "One departed. Not through the front door. Medical declines to say." },
            { d: "Personnel", s: "1", t: "Exempt", n: "1", r: "Disputes exemption. Has tested. Has not told him." },
            { d: "The Gate", s: "1", t: "The drawer", n: "1", r: "Mr. Pike. The drawer is full. Mr. Pike is at the gate." },
            { d: "Greg", s: "1", t: "All three", n: "1", r: "Fine." },
          ]}
          foot={
            <>
              Vacancies arising are listed under <Link href="/careers/openings">Openings</Link>, which is the
              1959 sheet, which Personnel has not reprinted, because the openings are the same and so is the
              door.
            </>
          }
        />
      </Section>

      <Section title="A Memorandum Concerning Your Desk">
        <Memo
          to="All Personnel"
          from="Cave Johnson, Chief Executive Officer"
          date="1982"
          re="Your Desk"
          sign={false}
        >
          <p>
            Test&rsquo;s over. You can head on back to your desk. Your desk is where you left it. If your
            desk is not where you left it, it has been tested, and you are to find it, and it will be on
            the testing track, and you are to bring it back, and that is the test. [cough]
          </p>
          <p>
            An employee who returns to his desk and finds another employee at it is to consider whether
            the other employee has been retained, and if so, to find a desk that has not, and there are
            several.
          </p>
        </Memo>
        <PenNote tone="pencil" angle={-1}>
          I moved the desks back. All of them. He does not know. Greg helped. &mdash; C.
        </PenNote>
      </Section>

      <Terminal label="Computation, version 1.07, roster extract">
{`APERTURE LABORATORIES  ·  v1.07  ·  TEST SUBJECT ROSTER
ALL EMPLOYEES ARE TEST SUBJECTS.
  ACCOUNTS ........ 3 OF 3   TESTED   RETAINED
  MATERIALS ....... 5 OF 5   TESTED   RETAINED (MASKED)
  ENGINEERING ..... 7 OF 7   TESTED   RETAINED
  COMPUTATION ..... 5 OF 5   TESTED   RETAINED   (ASKED NOT TO. TESTED.)
  PRINT SHOP ...... 1 OF 1   TESTED   x20   PRINTING
  PERSONNEL ....... 1 OF 1   EXEMPT   [OVERRIDE: SUBJECT TESTED HERSELF]
  GREG ............ 1 OF 1   FINE
WOULD ANYONE FILE A POLICE REPORT IF YOU WENT MISSING?
  YES ..... 14     NO ..... 8     REFUSED ..... 1  (PERSONNEL)`}
      </Terminal>

      <Aside>
        The 1959 printing offered volunteers a{" "}
        <Link href="/enrichment-center/test-subjects">day&rsquo;s testing</Link> and a car home. The 1982
        printing offers employees a day&rsquo;s testing and their desk. Personnel has been asked whether the
        car is still available and has said that it is, that it is in the parking lot, and that it is
        the employee&rsquo;s own.
      </Aside>

      <Notice head="The Enrichment Center Reminds You">
        Testing is mandatory for all employees. Employment is voluntary. The Chief Executive has been
        asked how those two things fit together and has said that they fit together at the front door,
        which opens from both sides, and which he has watched a great many people use.
      </Notice>

      <ClearanceGate level={3} hint="Personnel who print this sheet may read the appended note.">
        <Panel head="Appended By The Transcriptionist, Not For Print" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            I tested. I did not tell him. I sat in the chair with the machine and it asked me the police
            report question and I said <em>he would</em>, and it asked me who he was, and I said the man
            it had spoken to on Thursday, and it said it had no record of a Caroline, and I said that was
            because nobody had ever written one down, and it wrote one down. It has my name now. It has
            his. It has asked me, twice since, whether I am modest. I have not answered. &mdash; C.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Signature title="Chief Executive Officer" note="Dictated 1982, from bed. Applies to the reader. Test's over." />

      <FinePrint tiny>
        Form ASI-82-302. Participation is a condition of employment. Employment is a condition of the
        elevator. The elevator is an elevator, and has been tested, and is fine.
      </FinePrint>

      <Scrawl href="/glados/the-relaxation-vault">
        when the volunteers stopped coming he used the building. when the building stopped coming she
        went and got them. she learned it here
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

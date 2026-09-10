import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Split, Row, IndexCard,
} from "@/components/Print";
import { Memo, Signature, PenNote } from "@/components/Memo";
import { FigureTable, SpecList, Plate, KeyFigures } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Officers & Departments",
  description:
    "Form ASI-104. The officers of Aperture Science Innovators, the sixteen departments beneath them, and the one man on the payroll who is beneath none of them.",
};

export default function OfficersPage() {
  const { prev, next } = neighbours("/the-company/officers");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/the-company", label: "The Company" },
          { label: "Officers" },
        ]}
      />

      <DocHead
        doc="ASI-104"
        department="Personnel"
        classification="Unrestricted — Personnel Copy"
        revision="Fourth printing; the Head column of one row has been blank in all four"
        extra={[{ label: "Payroll", value: "1,247" }]}
      />

      <div className="ap-rel">
        <Stamp float tone="black" sub="Second Floor">
          Personnel
        </Stamp>
        <PageTitle
          kicker={<>Form ASI-104 &mdash; Personnel</>}
          title="Officers &amp; Departments"
          deck={
            <>
              Sixteen departments, 1,247 people, four thousand feet of tunnel between the top of the chart
              and the bottom of it, and exactly one line of authority, which runs from a desk on the third
              floor to wherever it is presently required.
            </>
          }
          byline={
            <>
              Compiled by <b>Personnel</b>, second floor, at the instruction and under the pencil of{" "}
              <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}.
            </>
          }
        />
      </div>

      <KeyFigures
        items={[
          { value: "1,247", label: "On the payroll", note: "This Friday" },
          { value: "16", label: "Departments", note: "Fifteen with a door" },
          { value: "1", label: "Officer of the company", note: "It is enough" },
          { value: "0", label: "Directors", note: "See below" },
          { value: "3", label: "Men in Legal", note: "Basement, rear" },
        ]}
      />

      <Split weight="wide-left">
        <Prose>
          <Lede>
            A concern of 1,247 people is supposed to have a chart with boxes on it, and the boxes are
            supposed to be joined by lines, and the lines are supposed to mean something. Ours has one box
            at the top. Everything printed below that box is filing, and I want the men from Washington who
            keep writing in for this sheet to understand that I am not being coy with them. That is the
            chart. There is no second page.
          </Lede>
          <p>
            I own one hundred per cent of Aperture Science Innovators. There is no board, there are no
            outside directors, there is nobody in this building who can tell me no and keep his desk, and I
            have arranged it that way deliberately and at some expense. A committee has never once put a
            hole in a wall. I have the minutes to prove it.
          </p>

          <h2>On The Absence Of Vice-Presidents</h2>
          <p>
            We do not appoint Vice-Presidents. A Vice-President is a man paid a great deal of money to be
            nearly in charge, and nearly in charge is the most expensive commodity in American industry,
            because the man will not decide anything and he will not let anybody else decide it either. I
            have department heads. A department head decides, and if he decides wrong he tells me on the
            same day, and we find out together what it cost. Usually it is nine thousand dollars and a
            Tuesday. Twice it has been a floor.
          </p>
          <p>
            Nor do we have a Personnel Director in the sense the trade journals mean. We have Mr. Pike, who
            is eight men including himself, who knows the name and the shoe size of every soul on the
            payroll, and who has been asking me since 1954 to hold something he calls an exit interview.
            Mr. Pike and I have a difference of opinion about the word <em>exit</em>.
          </p>

          <h2>How A Department Comes To Exist Here</h2>
          <p>
            Not one department of this company was founded at a meeting. Materials exists because in 1948 a
            man named Vane wanted a room with a drain in it and would not stop asking me for the room.
            Computation exists because I asked whether a person could be written down and Mr. Kesler said
            probably not and I said try anyway. The{" "}
            <Link href="/the-company/the-competition">outfit in New Mexico</Link> founds a department by
            forming a committee to consider the founding of a department. We found one by giving a man a
            key and a floor and finding out on the Monday whether he still wanted it.
          </p>
          <p>
            The Marine Division exists because of 1956, and the Marine Division will continue to exist for
            precisely as long as the United States Navy continues to buy its shower curtains from somebody
            else. It has one employee. It has one filing cabinet. Its annual budget would not cover a
            Christmas party for four, and it is the finest money this company spends.
          </p>
          <p>
            Legal is three men in the basement, rear, behind the boiler, and I put them there. Not out of
            malice. Out of arithmetic. Every foot a memorandum has to travel before it reaches me is a foot
            in which somebody might improve it, and the Legal Department improves things by removing them.
            They are good men. They are wrong about almost everything, in writing, promptly, and in
            triplicate, and I have kept every one of the letters.
          </p>

          <h2>On My Secretary</h2>
          <p>
            Caroline has been at the desk outside my office since 1946. Thirteen years. Her title is
            Personal Secretary to the President and it is the smallest title in this building, and it is
            the only one I have never had cause to review, and every man in the table further down this
            sheet reports to me through a doorway that she sits in.
          </p>
          <p>
            She signs nothing. Officially. I want that on the sheet because Accounting wants it on the
            sheet.{" "}
            <Redacted reason="Personnel; amended at the request of Accounting, 1954">
              Fourteen requisitions in 1954 carry an authorisation that is not in my hand and not in
              anybody else&rsquo;s either, and every one of them was the right call.
            </Redacted>{" "}
            She is the best damn thing that ever happened to this company and she will strike that sentence
            out of this paragraph before it goes to the printer, and I have instructed the printer to put
            it back.
          </p>
        </Prose>

        <Stack>
          <Panel head="The Officers Of The Company" tone="tint">
            <SpecList
              rows={[
                { k: "President & Founder", v: <>{COMPANY.founder}. Since 1943. One hundred per cent.</> },
                { k: "Treasurer", v: "The President." },
                { k: "Corporate Secretary", v: "The President, on the filings." },
                { k: "In practice", v: "Caroline." },
                { k: "Vice-President", v: "None. See the second heading opposite." },
                {
                  k: "Board of Directors",
                  v: (
                    <Redacted reason="Records & Filing; minute book withdrawn 1947">
                      Convened once, 4 March 1947, for forty minutes. Dissolved by the only member present.
                    </Redacted>
                  ),
                },
                { k: "Chief Counsel", v: "Mr. A. Sedge. Basement, rear." },
                { k: "Personal Secretary", v: "Caroline. Appointed 1946." },
                {
                  k: "Signs for the company in the President’s absence",
                  v: <Redacted reason="No instrument on file">There has never been an absence.</Redacted>,
                },
              ]}
            />
          </Panel>

          <Row>
            <Placard>Second Floor</Placard>
            <Placard>Basement, Rear</Placard>
            <Placard tone="warn">Reactor Room</Placard>
          </Row>

          <PenNote tone="pencil" angle={-1.2}>
            The chart has him at the top and me in a footnote, which is how he wants it printed and how I
            prefer it filed. It is not how the telephone works. Four of the men in the table below have
            never had a memorandum from him that did not come through this desk first, and two of them do
            not know that, and it is better for the work that they do not. &mdash; C.
          </PenNote>
        </Stack>
      </Split>

      <PullQuote attribution={<>{COMPANY.founder}, to the Personnel Department, 1951</>}>
        Give a man a key and a floor. If he still wants it on the Monday, that is a department.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="The Departmental Roll">
        <FigureTable
          caption="Departments of Aperture Science Innovators, Spring 1959, in order of strength."
          columns={[
            { key: "dept", head: "Department" },
            { key: "head", head: "Head" },
            { key: "est", head: "Est.", numeric: true, width: "4.5rem" },
            { key: "n", head: "Personnel", numeric: true, width: "5.5rem" },
            { key: "where", head: "Where They Are Found" },
          ]}
          rows={[
            {
              dept: "Enrichment Center Operations",
              head: "Mr. H. Teague",
              est: "1954",
              n: "309",
              where: "Test Shaft 09, all levels",
            },
            {
              dept: "Sales & Manufacturing",
              head: "Mr. D. Mickelsen",
              est: "1943",
              n: "288",
              where: "Surface plant and the curtain line",
            },
            {
              dept: "Applied Sciences",
              head: "Dr. W. Pell",
              est: "1949",
              n: "214",
              where: "Sub-Levels 1 to 3",
            },
            {
              dept: "Materials",
              head: "Mr. H. Vane",
              est: "1948",
              n: "168",
              where: "Third floor. Rebuilt twice.",
            },
            {
              dept: "Maintenance",
              head: "Mr. C. Lamb",
              est: "1944",
              n: "96",
              where: "Everywhere, at all hours, unannounced",
            },
            {
              dept: "Applied Biology",
              head: (
                <Redacted reason="Held personally by the Office of the President">
                  Dr. G. Ansel. Appointed 1955. Do not print the name.
                </Redacted>
              ),
              est: "1955",
              n: "41",
              where: "Sub-Level 6, past the second gate",
            },
            {
              dept: "Commissary",
              head: "Mr. R. Bunting",
              est: "1946",
              n: "34",
              where: "Surface, west building",
            },
            {
              dept: "Computation",
              head: "Mr. S. Kesler",
              est: "1954",
              n: "26",
              where: <Link href="/science/computation">Sub-Level 4, with the relays</Link>,
            },
            {
              dept: "Records & Filing",
              head: "Mr. F. Pruitt",
              est: "1945",
              n: "22",
              where: "Second floor, north corridor",
            },
            {
              dept: "Medical",
              head: "Dr. E. Grieve",
              est: "1950",
              n: "19",
              where: "Second floor, opposite Records",
            },
            {
              dept: "Accounting",
              head: "Mr. L. Ashby",
              est: "1945",
              n: "11",
              where: "Second floor, the room with the safe",
            },
            {
              dept: "Personnel",
              head: "Mr. V. Pike",
              est: "1951",
              n: "8",
              where: "Second floor. This sheet was set here.",
            },
            {
              dept: "Corporate Communications",
              head: "Mr. J. Selkirk",
              est: "1957",
              n: "4",
              where: "Second floor, by the window",
            },
            {
              dept: "Legal",
              head: "Mr. A. Sedge",
              est: "1947",
              n: "3",
              where: <Link href="/legal">Basement, rear, behind the boiler</Link>,
            },
            {
              dept: "Office of the President",
              head: COMPANY.founder,
              est: "1943",
              n: "2",
              where: "Third floor, end of the hall",
            },
            {
              dept: "Marine Division",
              head: "Mr. D. Ottoway",
              est: "1956",
              n: "1",
              where: "Basement, rear, beside Legal. One filing cabinet.",
            },
            {
              dept: <>&mdash;</>,
              head: <b>Greg</b>,
              est: <>&mdash;</>,
              n: "1",
              where: "The reactor room",
            },
          ]}
          foot={
            <>
              The Personnel column above totals 1,246. The payroll pays 1,247. The difference is Greg, who
              is entered under no department, has no recorded start date and no supervisor, and who has
              been paid every second Friday since a date this department has four times failed to
              establish. Accounting declines to count him. Payroll counts him. Payroll wins, fortnightly.
            </>
          }
        />
      </Section>

      <Marginalia>
        The Marine Division has requested a second filing cabinet in each of the last three years. The
        request is approved each year by the President personally and has never been actioned, because the
        Marine Division has nothing to put in the first one.
      </Marginalia>

      {/* ------------------------------------------------------------- */}

      <Section title="The Chart Itself">
        <Plate
          number="1"
          tint
          caption="The organisational chart of Aperture Science Innovators, drawn by the President on the back of a commissary menu in 1955 and reproduced without correction. Departments are shown by their signage. The figure standing apart at the right is Greg."
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.9rem", width: "100%" }}>
            <figure style={{ textAlign: "center", margin: 0 }}>
              <Pictogram name="handshake" size={58} title="The President" style={{ color: "var(--spot-blue)" }} />
              <figcaption className="ap-caps" style={{ fontSize: "0.56rem", color: "var(--ink-3)", marginTop: "0.3rem" }}>
                The President
              </figcaption>
            </figure>

            <Rule variant="hair" style={{ width: "70%" }} />

            <Row style={{ gap: "1.3rem", flexWrap: "wrap", justifyContent: "center" }}>
              {(
                [
                  ["portal-pair", "Applied Sciences"],
                  ["gel", "Materials"],
                  ["atom", "Computation"],
                  ["heart", "Medical"],
                  ["clipboard", "Records, Personnel, Accounting"],
                  ["cube", "Sales & Manufacturing"],
                  ["curtain", "Marine Division"],
                ] as const
              ).map(([name, label]) => (
                <figure key={name} style={{ textAlign: "center", width: "6.2rem", margin: 0 }}>
                  <Pictogram name={name} size={42} title={label} style={{ color: "var(--ink-2)" }} />
                  <figcaption className="ap-caps" style={{ fontSize: "0.52rem", color: "var(--ink-3)", marginTop: "0.3rem" }}>
                    {label}
                  </figcaption>
                </figure>
              ))}
              <figure style={{ textAlign: "center", width: "6.2rem", margin: 0 }}>
                <Pictogram name="hazard" size={42} title="No department" style={{ color: "var(--spot-red)" }} />
                <figcaption className="ap-caps" style={{ fontSize: "0.52rem", color: "var(--ink-3)", marginTop: "0.3rem" }}>
                  Greg
                </figcaption>
              </figure>
            </Row>
          </div>
        </Plate>
      </Section>

      <Notice head="The Enrichment Center Reminds You">
        A department head is addressed by his department and not by his name. The department will answer.
        The name may have changed since this sheet was set, and the sheet is set twice a year.
      </Notice>

      {/* ------------------------------------------------------------- */}

      <Section title="Greg">
        <Split weight="wide-left">
          <Prose>
            <p>
              Greg cleans the reactor room. He has cleaned the reactor room since before the reactor room
              was called the reactor room, and Personnel has been trying for four years to establish under
              whose authority he began, and has arrived at no authority whatever. He is not in Maintenance.
              Mr. Lamb is emphatic about that and will not be drawn on why.
            </p>
            <p>
              I have met Greg twice. He does not ask for anything. He does not appear to require the
              protective equipment that Medical requires of everybody else who goes in there, and Medical
              has stopped issuing it to him, and when I asked Dr. Grieve to write down his reasoning Dr.
              Grieve asked me whether I was ordering him to. I was not. He has been{" "}
              <Link href="/careers/employee-of-the-month">Employee of the Month</Link> three times, which
              is more than any department head, and the citation is identical on all three occasions
              because Personnel has never found anybody willing to compose a new one.
            </p>
            <p>
              Some men are an entry on an organisational chart. Some men are the room. Leave him alone and
              let him work.
            </p>
          </Prose>

          <IndexCard>
            <SpecList
              rows={[
                { k: "Name", v: "Greg" },
                { k: "Department", v: <>&mdash;</> },
                { k: "Reports to", v: "No supervisor listed" },
                { k: "Commenced", v: "No date on file" },
                { k: "Duties", v: "Cleans the reactor room" },
                { k: "Clearance", v: "Whatever the reactor room requires" },
                { k: "Protective equipment", v: "Not issued since 1957" },
                { k: "Rate", v: "Paid. Fortnightly. Cash." },
                { k: "File", v: "Personnel Card 0000, made out in pencil" },
              ]}
            />
          </IndexCard>
        </Split>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section title="A Memorandum On The Subject Of Titles">
        <Memo
          to="Mr. V. Pike, Personnel"
          re="Titles, applications for"
          date="3 February 1959"
          cc="All department heads, for information and for discouragement"
        >
          <p>
            A gentleman from Applied Sciences came up to the third floor on Thursday and asked to be made
            an Assistant Director. I asked him what an Assistant Director does that he does not do now. He
            told me it would help when he telephones suppliers.
          </p>
          <p>
            Mr. Pike, we are not in the business of helping men telephone suppliers. Print him a card that
            says whatever he likes on it. Print two. The company has never once been slowed down by a card
            and has twice been slowed down by an organisational chart, and I have burned one of those and
            you have the other one in your drawer.
          </p>
          <p>
            No new titles this year. Anybody who wants a bigger title may have my office for an afternoon
            and my telephone and both of my problems, and I will be in the shaft.
          </p>
        </Memo>
      </Section>

      <ClearanceGate
        level={3}
        hint={<>Personnel of the third grade and above may read the note appended to the Head column.</>}
      >
        <Panel head="Appended By Personnel. Not For The Printer." tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            The Head column for Applied Biology has been left blank in all four printings of this sheet.
            The department was established in 1955, in the same month that twenty-two men were reassigned
            out of Test Shaft 07, and its requisitions are countersigned by nobody in this building.
            Personnel has three times asked the Office of the President for a name to set in the column and
            has three times been given, instead, a proposal that carries a number and no title. Personnel
            has stopped asking. Personnel notes only that a department of forty-one people is the fourth
            largest in the company and does not appear in the telephone list.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Signature note="Approved for printing 18 March 1959. Head column of one row approved blank." />

      <FinePrint tiny>
        Departmental strengths are correct as at the Friday of printing and are not a representation as to
        the strength of any department on the Monday following. Titles conferred by this sheet are
        descriptive only and confer no authority, no tenure and no seniority over any other holder of any
        other title. Form ASI-104, Personnel, second floor. Retain until superseded. Superseded sheets are
        to be returned to Records and not to the incinerator, which is not for documents.
      </FinePrint>

      {/* Personnel Card 0000 is the first card in the drawer. */}
      {/* Card 0001 is Caroline’s. The President’s is not in the drawer at all. */}
      {/* Somebody has pencilled a second name on card 0000, underneath Greg’s, and rubbed it out. */}

      <Scrawl href="/office-of-the-president/caroline">
        there is a card in the drawer with no department on it and there is a door on the third floor with
        no name on it and both of them are hers
      </Scrawl>

      <p>
        <Link className="ap-caps" style={{ fontSize: "0.68rem" }} href="/the-company/upper-michigan">
          Next: the salt mine at upper michigan →
        </Link>
      </p>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

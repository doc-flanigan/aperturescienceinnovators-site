import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Split, Row, Coupon, IndexCard, Aside,
} from "@/components/Print";
import { Memo, Signature, PenNote } from "@/components/Memo";
import { FigureTable, SpecList, Plate, KeyFigures } from "@/components/Data";
import { FormBlock, Field } from "@/components/Form";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Rosette } from "@/components/svg/Ornament";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Honors, Citations & Certain Findings",
  description:
    "Form ASI-107. Nine honours held, one declined on account of the hat, three citations contested, and one prize we have not been given yet.",
};

export default function HonorsPage() {
  const { prev, next } = neighbours("/the-company/honors");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/the-company", label: "The Company" },
          { label: "Honors" },
        ]}
      />

      <DocHead
        doc="ASI-107"
        department="Office of the President"
        classification="Unrestricted — Contested Matters Appended"
        revision="Third printing; one entry is dated ahead of this printing and that is deliberate"
        extra={[{ label: "Held", value: "9" }]}
      />

      <div className="ap-rel">
        <Stamp float tone="green" sub="Nine held. Three contested.">
          On The Wall
        </Stamp>
        <PageTitle
          kicker={<>Form ASI-107 &mdash; Office of the President</>}
          title="Honors, Citations &amp; Certain Findings"
          deck={
            <>
              Sixteen years of prizes, plaques and commendations, set out alongside the awards that were
              taken back, the degree the President would not accept, and three findings of a state
              inspectorate which we have framed and hung in the same row as the medals, having earned them
              in exactly the same way.
            </>
          }
          byline={
            <>
              Dictated by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}. Roll compiled by Records &amp;
              Filing, second floor, under protest as to two entries.
            </>
          }
        />
      </div>

      <KeyFigures
        items={[
          { value: "9", label: "Honours held", note: "All on one wall" },
          { value: "1", label: "Declined", note: "On account of the hat" },
          { value: "1", label: "Withdrawn", note: "1952. We kept the plate." },
          { value: "3", label: "Citations", note: "All three contested" },
          { value: "0", label: "From the Navy", note: "Nor sought" },
        ]}
      />

      <Split weight="wide-left">
        <Prose>
          <Lede>
            There is a wall behind my desk on the third floor and everything this company has ever been
            given is hanging on it. I want to be plain about the arrangement, because visitors get to the
            far end of it and go quiet. The medals are on that wall. The certificates are on that wall. The
            three findings of the state inspectorate are on that wall, framed in the same oak, in the same
            row, at the same height, and I paid for the framing personally.
          </Lede>
          <p>
            A prize is a piece of paper somebody sends you because you did something they understood. A
            citation is a piece of paper somebody sends you because you did something they did not. I have
            been in business sixteen years and I have collected both, and I will tell you which pile has
            been better company.
          </p>
          <p>
            The oldest thing on that wall is from 1943 and it says Shower Curtain Salesman of the Year. Men
            come up here expecting me to have buried it behind the physics. It is hung at eye level in the
            middle of the row, where a man cannot get past it, because everything on either side of it was
            paid for by the <Link href="/products/shower-curtains">curtain</Link>.
          </p>
          <p>
            The second thing worth your attention is a gap. There is a nail with nothing on it, at the end
            of the row nearest the window, and it has been empty since 1952. Records has asked twice about
            filling it. Records has been told twice.
          </p>
        </Prose>

        <Stack>
          <Panel head="The Wall, In Summary" tone="tint">
            <SpecList
              rows={[
                { k: "Location", v: "Third floor, behind the desk" },
                { k: "Frames", v: "Oak. Nine of one size, three of another." },
                { k: "Earliest", v: "1943 — Salesman of the Year" },
                { k: "Most recent", v: "1958 — returned by us, framed by them" },
                { k: "Empty nails", v: "One, since 1952" },
                { k: "Reserved space", v: "One, to the right, at the end" },
                {
                  k: "Cleaning",
                  v: <Redacted reason="Maintenance schedule, third floor">Greg. Fridays. Nobody else goes near it.</Redacted>,
                },
              ]}
            />
          </Panel>

          <Plate number="1" caption="The company seal as struck for the State Manufacturing Prize, 1948. The die is still in the machine shop and has been used since for other purposes.">
            <Rosette petals={24} style={{ width: "100%", maxWidth: 150, color: "var(--spot-blue)" }} />
          </Plate>

          <Row>
            <Placard>Honours Wall</Placard>
            <Placard tone="warn">Do Not Straighten</Placard>
          </Row>
        </Stack>
      </Split>

      {/* ------------------------------------------------------------- */}

      <Section title="The Roll, Complete And Unflattering" number="I">
        <Prose>
          <p>
            Records keeps this table and is not permitted to leave anything off it, withdrawals included &mdash;
            which most concerns of our size print on a different sheet, or not at all.
          </p>
        </Prose>

        <FigureTable
          caption="Honours, prizes and commendations received by Aperture Fixtures and by Aperture Science Innovators, 1943 to date."
          columns={[
            { key: "year", head: "Year", numeric: true, width: "5rem" },
            { key: "honour", head: "Honour" },
            { key: "body", head: "Awarding Body" },
            { key: "status", head: "Status" },
          ]}
          rows={[
            {
              year: "1943",
              honour: "Shower Curtain Salesman of the Year",
              body: "National Association of Bath & Sanitary Fixtures",
              status: "Held. Eye level. Middle of the row.",
            },
            {
              year: "1944",
              honour: "Certificate of Appreciation — 200,000 units, no returns",
              body: "Office of the Quartermaster General, U.S. Army",
              status: "Held",
            },
            {
              year: "1946",
              honour: "Certificate of Attendance",
              body: "National Bath & Sanitary Exposition, Chicago",
              status: "Held. Framed. It is a certificate of attendance.",
            },
            {
              year: "1948",
              honour: "State Manufacturing Prize (Second Class)",
              body: "State of Michigan",
              status: "Held. The class is disputed by the recipient.",
            },
            {
              year: "1951",
              honour: "Employer of the Year, Upper Peninsula",
              body: "Marquette County Chamber of Commerce",
              status: "Withdrawn, October 1952. We kept the plate.",
            },
            {
              year: "1956",
              honour: "Commendation — supply of shower curtains to every branch of the United States military except the Navy",
              body: "The Eisenhower administration",
              status: "Held. Reprints available below.",
            },
            {
              year: "1957",
              honour: "Honorary Doctorate of Science",
              body: "A college in Ann Arbor, named in the file",
              status: "Declined. See section III.",
            },
            {
              year: "1958",
              honour: "Industrial Achievement Medal, Second Award",
              body: "An institute of engineers, Detroit",
              status: "Returned by us, framed by them.",
            },
            {
              year: "1958",
              honour: "Distinguished Civilian Service, Department of the Navy",
              body: "The Navy",
              status: <Redacted reason="Office of the President — do not print">Not awarded. Not sought. Not discussed. The Navy knows what it did.</Redacted>,
            },
            {
              year: "1961",
              honour: "The Nobel Prize in Physics",
              body: "Stockholm",
              status: "Anticipated. Case built. Date reserved.",
            },
          ]}
          foot="Records notes that the final entry is dated ahead of this printing and has asked, in writing, that it be moved to a separate sheet. The President has read the request."
        />

        <Marginalia>
          The masthead of this sheet spells the word without a <i>u</i> and the body copy spells it with
          one. The President&rsquo;s first printer was Canadian and nobody has been given authority to
          correct him since 1947.
        </Marginalia>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section title="The Commendation, And A Reprint For Your Wall" number="II">
        <Prose>
          <p>
            In 1956 the Eisenhower administration gave us the supply of shower curtains to every branch of
            the United States military. Every branch. The Army, the Air Force, the Marine Corps, the Coast
            Guard when it is at war, and eleven agencies that do not care to be listed. There is one
            exception and I have never printed the reason for it and I am not going to start on a sheet
            filed under Honours.
          </p>
          <p>
            The commendation is nine inches by twelve and signed by a man whose name you would know. It
            cost sixty dollars to have the plate made, which is the same figure we pay a{" "}
            <Link href="/enrichment-center/volunteer">volunteer</Link> for an afternoon, and I want the
            symmetry noted because I noticed it myself and it pleased me.
          </p>
        </Prose>

        <Coupon>
          <p className="ap-caps" style={{ fontSize: "0.62rem", color: "var(--spot-orange)", margin: "0 0 0.6rem" }}>
            Form ASI-107a &mdash; Reprint Request &mdash; Cut Along The Dashes
          </p>
          <p style={{ marginTop: 0 }}>
            <b>THE 1956 COMMENDATION, SUITABLE FOR FRAMING.</b> Full size, heavy stock, two colours, mailed
            flat between boards. Twenty-five cents for postage. No charge to serving personnel, to
            employees, or to any man who has been through a chamber and come back out of it.
          </p>
          <FormBlock>
            <Field label="Name" />
            <Field label="Address" />
            <Field label="Branch, if any" />
            <Field label="Quantity" filled>
              (orders above four are referred to the third floor, where they are approved)
            </Field>
            <Field label="Frame required" filled>
              Oak &mdash; add $2.00 &mdash; struck from the same stock as the President&rsquo;s
            </Field>
          </FormBlock>
          <FinePrint>
            Reprints are despatched by way of the pneumatic diversity vent and arrive in the condition in
            which the vent leaves them. The company does not undertake that a reprint will arrive flat,
            whole, or in the week in which it was sent.
          </FinePrint>
        </Coupon>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section title="The Degree, And The Hat" number="III">
        <Prose>
          <p>
            In the autumn of 1957 a college offered me an honorary doctorate of science. I was glad to have
            it. I said so by telephone within the hour. Then the registrar sent along the order of
            proceedings and there was a hat in it.
          </p>
          <p>
            A square hat. A flat board on a man&rsquo;s head with a string coming off the corner of it. I
            have been four thousand feet down in a hard hat and I have worn a respirator for nine hours in a
            room that was on fire, and I have built a concern of 1,247 people without once putting on a
            mortarboard, which I would have thought was the point of the exercise.
          </p>
        </Prose>

        <Panel head="Letter, Office of the President to the Registrar, 4 November 1957 — reproduced entire" tone="rule">
          <Prose>
            <p>
              Sir &mdash; I accept the degree and I decline the ceremony. If the degree cannot be had
              without the hat then the degree cannot be had, and I will think no worse of your institution
              for it, and you may give the hat to somebody who has the head for it.
            </p>
            <p>
              Should the faculty wish to confer it another way, I will send a car. We will do it four
              thousand feet down, in a chamber of your choosing, and I will stand where your man tells me to
              stand and say whatever he wants said. Your Latin, my hole. Nobody has to wear anything.
            </p>
            <p>Yours &c., C. Johnson.</p>
          </Prose>
        </Panel>

        <Aside>
          The college did not send a delegation. The degree was not conferred. The correspondence is filed
          under Honours all the same, on the President&rsquo;s instruction, because in his view he won that
          one.
        </Aside>
      </Section>

      <PullQuote big attribution={`${COMPANY.founder}, on the framing bill, February 1959`}>
        A prize means somebody understood you. A citation means somebody was frightened of you. Hang them
        at the same height.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="Certain Findings" number="IV">
        <Prose>
          <p>
            Three times in sixteen years a state inspectorate has come up the road, gone down as far as we
            let it go, and written something down. Three citations, all three contested, all three
            unresolved &mdash; which in the law of this state means we are entitled to say{" "}
            <i>contested</i>, and we will, and Legal has been instructed to keep saying it after I am not
            here to say it myself.
          </p>
          <p>
            The findings are printed below because I would rather you had them from me than from a clerk in
            Lansing. Our position is beside them and it has not changed. The long form of it is on{" "}
            <Link href="/enrichment-center/safety">the safety sheet</Link>, where Operations has defined
            every one of these conditions out of existence at a length I have never had the patience for.
          </p>
        </Prose>

        <FigureTable
          caption={
            <>
              Citations issued by the state inspectorate. Findings quoted verbatim; the black is
              Legal&rsquo;s, not ours.
            </>
          }
          columns={[
            { key: "no", head: "Citation", width: "9rem" },
            { key: "date", head: "Date", width: "9rem" },
            { key: "finding", head: "Finding" },
            { key: "us", head: "Our Position" },
            { key: "status", head: "Status", width: "6rem" },
          ]}
          rows={[
            {
              no: "SI-1955-114",
              date: "9 August 1955",
              finding: (
                <Redacted reason="Withheld under Directive 12 pending contest">
                  Two levels of Shaft 07 record ambient temperatures for which the facility can identify no
                  heat source, and personnel have been instructed in writing not to enter them in the log.
                </Redacted>
              ),
              us: "The instruction was to stop entering the same figure twice.",
              status: "Contested",
            },
            {
              no: "SI-1957-041",
              date: "21 November 1957",
              finding: (
                <Redacted reason="Withheld under Directive 12 pending contest">
                  The inspecting party of four entered the emancipation corridor and left it as a party of
                  four. The inspector&rsquo;s account of the interval and the gate log differ by eleven
                  minutes, and one man in the party cannot say what he did with them.
                </Redacted>
              ),
              us: "Clocks. The corridor has two and they have never agreed.",
              status: "Contested",
            },
            {
              no: "SI-1958-203",
              date: "3 September 1958",
              finding: (
                <Redacted reason="Withheld under Directive 12 pending contest">
                  Of nine shafts the inspectorate was admitted to six. In two of the six there are finished
                  rooms, lit and heated, which do not appear on any drawing the company was able to produce.
                </Redacted>
              ),
              us: "The drawings are behind. Facilities is behind. That is not a finding.",
              status: "Contested",
            },
          ]}
          foot="Contest lodged in each case within the statutory period. The state has not listed any of the three for hearing. Legal describes this as a favourable posture."
        />

        <Memo
          to="Records & Filing, second floor"
          re="The wall behind my desk, arrangement of"
          date="2 February 1959"
          cc="Legal (no action required or invited)"
          stamp={
            <Stamp tone="black" angle="right" size="normal">
              File Copy
            </Stamp>
          }
        >
          <p>
            You have written three times asking that the citations come off the honours wall and go in a
            drawer. Here is the answer and it is the last one.
          </p>
          <p>
            A man from the state came into my building, walked as far as he was let, and was sufficiently
            impressed by what he saw to fill out a form about it in his own handwriting. That is a review.
            New Mexico has never had one. Frame all three in the oak and hang them in the row.
          </p>
          <p>
            While you have the hammer out: leave the nail by the window empty. I know what came off it and I
            do not need the reminder covered up.
          </p>
        </Memo>
      </Section>

      <Notice head="The Enrichment Center Reminds You">
        An honour is the opinion of a third party and constitutes no warranty, no safety certification and
        no undertaking of any kind. A citation is likewise the opinion of a third party. You are invited to
        weigh the two together, as we have, and to note that they hang at the same height.
      </Notice>

      {/* ------------------------------------------------------------- */}

      <Section title="Withdrawn, Returned, And Reserved" number="V">
        <Prose>
          <p>
            Employer of the Year, 1951, Marquette County, presented in a hotel dining room with a plate of
            chicken. Withdrawn in October of 1952 by a letter of four lines that gave no reason and asked
            for the plaque back. We returned the plaque. Nobody asked for the brass plate it was screwed to,
            so the plate is on the wall by itself, saying nothing at all, and it is my favourite object in
            this building.
          </p>
          <p>
            The Detroit medal of 1958 we sent back ourselves, it being a <i>second</i> award and the first
            having gone to a firm that makes pipe fittings. The institute has since framed the medal with
            our letter of return mounted beside it and hung the pair in their lobby, where I am told people
            stop and read it. Records calls that &ldquo;returned by us, framed by them&rdquo;, and the
            phrase now has a column of its own.
          </p>
        </Prose>

        <IndexCard>
          <p className="ap-caps" style={{ fontSize: "0.62rem", color: "var(--spot-orange)", margin: "0 0 0.5rem" }}>
            Form ASI-107b &mdash; Reserved Space &mdash; Third Floor, End Of Row
          </p>
          <SpecList
            rows={[
              { k: "Award", v: "The Nobel Prize in Physics" },
              { k: "Basis of expectation", v: "The work. There is no other basis and none is required." },
              { k: "Case", v: "Built. Machine shop. Curtain rail and plate glass." },
              { k: "Case dimensions", v: "14 in. × 14 in. × 4 in., lined" },
              { k: "Date reserved", v: "15 June 1961" },
              { k: "Reason for that date", v: "The President selected it. He was not asked to explain it." },
              { k: "Remarks", v: "Do not use the case for anything else in the meantime." },
            ]}
          />
        </IndexCard>

        <PenNote tone="pencil" angle={-1.3}>
          I have written to Stockholm four times and had three replies. He has read two of them. The case is
          finished and it is standing in the machine shop with a cloth over it and the men have started
          putting their coffee on it. Somebody ought to move it before he comes down. &mdash; C.
        </PenNote>
      </Section>

      <ClearanceGate
        level={4}
        hint="Senior grade or above. There is a fourth citation and it is not on the roll above."
      >
        <Panel head="Legal Department Note — Not For The Printed Roll" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", marginBottom: 0 }}>
            Citation SI-1959-007 was served at the gate house on 4 March and is not entered on Form ASI-107,
            the President having ruled that a citation is entered when it is contested and this one has not
            been contested. It cannot presently be contested. The inspector who served it asked to be shown
            Sub-Level 4 and was shown Sub-Level 4. The gate log carries his signature entering at 10:14. It
            does not carry his signature leaving. The state has written twice. Legal advises that the
            absence of a signature is not itself a finding, that Records need not volunteer a document
            nobody has asked for by number, and that this note is privileged.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Signature note="Dictated 3 April 1959. The wall was measured before printing. The nail is still empty." />

      <FinePrint tiny>
        Honours listed are those received by Aperture Fixtures (1943&ndash;1947) and by{" "}
        {COMPANY.name} ({COMPANY.renamed} to date). Contested citations are printed as the law of this state
        requires, and their appearance here is not an admission of any finding, condition, hazard, room,
        temperature, interval, or man. Form ASI-107. Retain until superseded. Enquiries:{" "}
        {COMPANY.telephone}, or by cable, {COMPANY.cable}.
      </FinePrint>

      {/* The empty nail by the window held Employer of the Year, 1951. */}
      {/* The Chamber of Commerce letter of October 1952 gave no reason. */}
      {/* Records has the reason. It is four lines and it is about a man. */}

      <Scrawl href="/vault/the-dens">
        the inspector counted the rooms and got two extra. i have counted them since. it is not two any more
      </Scrawl>

      <p>
        <Link className="ap-caps" style={{ fontSize: "0.68rem" }} href="/the-company/the-competition">
          Next: on the competition &rarr;
        </Link>
      </p>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

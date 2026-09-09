import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, FinePrint, Coupon,
  Marginalia, Aside, Split, Row, PullQuote,
} from "@/components/Print";
import { Memo, Signature, PenNote } from "@/components/Memo";
import { FigureTable, SpecList, KeyFigures } from "@/components/Data";
import { FormBlock, Field, Checklist } from "@/components/Form";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Correspondence",
  description:
    "Form ASI-108. Where to write to Aperture Science Innovators, how long your letter will take to reach us, and a frank account of what the mail room has been through since 1955.",
};

export default function Page() {
  const { prev, next } = neighbours("/the-company/correspondence");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/the-company", label: "The Company" },
          { label: "Correspondence" },
        ]}
      />

      <DocHead
        doc="ASI-108"
        department="Records & Filing"
        classification="Unrestricted — Records Copy"
        revision="Fourth revision. The third was lost in transit within this building."
        extra={[
          { label: "Cable", value: COMPANY.cable },
          { label: "Exchange", value: COMPANY.telephone },
        ]}
      />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="Second Floor, North Corridor">
          Received
        </Stamp>
        <PageTitle
          kicker={<>Form ASI-108 &mdash; Records &amp; Filing</>}
          title="Correspondence"
          deck={
            <>
              Four ways to reach this company, one way not to, and an honest accounting of what has become
              of the mail room since the Office of the President took an interest in its efficiency.
            </>
          }
          byline={
            <>
              Dictated by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}. Compiled, corrected and quietly
              re-corrected by the Records &amp; Filing Department, second floor, north corridor.
            </>
          }
        />
      </div>

      <KeyFigures
        items={[
          { value: "38,404", label: "Items received", note: "Calendar year 1958" },
          { value: "90", label: "Miles per hour", note: "Mail-room terminus" },
          { value: "9 sec.", label: "Second floor to Sub-Level 4", note: "When it arrives" },
          { value: "41%", label: "Arriving in one piece", note: "By the vent" },
          { value: "3", label: "Arrivals ahead of postmark", note: "Since November" },
        ]}
      />

      <Split weight="wide-left">
        <Prose>
          <Lede>
            Write to us. Nobody does, and it puzzles me. We are the largest privately held hole in North
            America, we employ 1,247 men and women under the Upper Peninsula, and the sack that comes up the
            county road most mornings would embarrass a hardware store. So write to us. This sheet tells you
            where to send it, how long it ought to take, and &mdash; because Records insisted, and because
            Records is right about this one thing &mdash; what may happen to it once it is inside the
            building.
          </Lede>
          <h2>What Reaches Us</h2>
          <p>
            The post reaches us. The gate house takes the county sack at seven, and three days after you
            drop a letter in a box in Cleveland it is on a sorting table in this mine. That is the United
            States Post Office, which is a very good outfit and does not get told so often enough.
          </p>
          <p>
            The cable reaches us fastest. <b>{COMPANY.cable}</b>, forty minutes, day or night, and the
            operator on the surface reads it aloud into a telephone whether or not the recipient has asked
            her to. If your business is urgent, cable. If your business is confidential, do not cable, and
            do not blame the operator, who has been told twice.
          </p>
          <p>
            The telephone reaches us, at <b>{COMPANY.telephone}</b>. Ask for the second floor. Do not ask
            for the third floor. If you ask for the third floor you will get the third floor, and then you
            will be talking to me, and I have not yet met the man who planned that conversation as far as
            its second sentence.
          </p>
          <p>
            Your own two hands reach us best of all. The gate house at the head of Shaft 09 has had the same
            man in it since 1951, he is awake at all hours, and he will take a document out of your hand and
            put it in the right room the same morning. A volunteer form goes there and only there &mdash;{" "}
            <Link href="/enrichment-center/volunteer">Form ASI-302</Link> is not to be posted, and the
            reasons are two sections further down this page.
          </p>

          <h2>The Vent</h2>
          <p>
            In the spring of 1955 somebody had an idea about the mail room. That somebody was me, and I
            want my name on it, because the idea was a good one and the arithmetic still is.
          </p>
          <p>
            The mail room is six men out of the Records Department&rsquo;s twenty-two. Before 1955 those six
            men carried thirty-odd thousand items a year up four flights of stairs and eleven hundred feet
            of elevator shaft, on foot, in a building where the journey between two desks is longer than
            the journey between two towns. So we connected the mail room to the{" "}
            <Link href="/products/pneumatic-diversity-vent">pneumatic diversity vent</Link>. Ninety miles an
            hour. Second floor to Sub-Level 4 in nine seconds. A day&rsquo;s walking abolished before lunch.
          </p>
          <p>
            Records has asked me to describe this in print as a fault. It is not a fault. A fault is a thing
            behaving otherwise than as designed. The vent moves what you put into it at ninety miles an hour,
            which is exactly and entirely what it does &mdash; to the letter, to the envelope, to the string,
            and to the gentleman from Accounting who in October leaned in to see where the noise went.
          </p>
          <p>
            What this means in practice is that correspondence now arrives at ninety miles an hour, in
            pieces, and occasionally on a floor nobody addressed. Records has built a system for sorting
            mail by fragment. It uses a light table and a roll of gummed tape, it recovers better than two
            letters in five, and it should not have to exist.
          </p>
          <p>
            And three times since November an item has come out of the mail-room terminus bearing a postmark
            later than the hour at which it landed on the table. Applied Sciences was consulted. Applied
            Sciences went very quiet and asked whether they might keep the envelopes. They may keep the
            envelopes. If a man can put a hole in one wall and take it out of another, the post office is
            not a special case, and they can stop looking at me like that.
          </p>
          <p>
            One item presently in the held file is addressed to a member of staff who is not on the payroll.
            Records has checked the payroll. Personnel has checked the payroll twice and then checked the
            applications, which is not the same thing and was a good instinct.{" "}
            <Redacted reason="Records & Filing — held file, drawer 4">
              The name is a woman&rsquo;s. The hand is not one we hold a sample of. Personnel has been
              instructed to file it forward.
            </Redacted>
          </p>
        </Prose>

        <Stack>
          <Panel head="Addresses Of This Company" tone="tint">
            <SpecList
              rows={[
                {
                  k: "By post",
                  v: (
                    <>
                      {COMPANY.address.line1}
                      <br />
                      {COMPANY.address.line2}
                      <br />
                      {COMPANY.address.line3}
                    </>
                  ),
                },
                { k: "By cable", v: <b>{COMPANY.cable}</b> },
                { k: "By telephone", v: <b>{COMPANY.telephone}</b> },
                { k: "By hand", v: "The gate house, head of Shaft 09. Any hour." },
                { k: "By rail", v: "The company spur. Freight only. Do not send a letter by freight." },
                { k: "By vent", v: "Not an address. Not a chute. See below." },
                { k: "In person", v: "By appointment, which is refused." },
              ]}
            />
          </Panel>

          <Row style={{ gap: "0.5rem", flexWrap: "wrap" }}>
            <Placard>Mail Room</Placard>
            <Placard tone="warn">Stand Clear Of The Terminus</Placard>
            <Placard tone="danger">Do Not Address The Vent</Placard>
          </Row>

          <Aside>
            Records asks that correspondents write on one side of the sheet only. Since 1955 this has been
            a matter of reassembly rather than of tidiness.
          </Aside>

          <PenNote tone="pencil" angle={-1.6}>
            There is a second sack. It comes on Thursdays and it does not go to the mail room. Twenty-two
            since January, all the same kind of letter, all asking the same one thing. I answer them myself,
            in longhand, at my own desk. He has never seen one and he is not going to. &mdash; C.
          </PenNote>
        </Stack>
      </Split>

      <PullQuote attribution={`${COMPANY.founder}, to the Records Department, November 1958`}>
        A letter that arrives before it was sent has still arrived. File it under the date on the envelope
        and stop telephoning me about it.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="Delivery, By Route">
        <FigureTable
          caption={
            <>
              Correspondence handled in the calendar year 1958, by route, with average transit and condition
              on arrival as recorded by the mail room.
            </>
          }
          columns={[
            { key: "route", head: "Route" },
            { key: "items", head: "Items", numeric: true, width: "6rem" },
            { key: "transit", head: "Average transit", numeric: true, width: "9rem" },
            { key: "whole", head: "Intact", numeric: true, width: "5rem" },
            { key: "note", head: "Records note" },
          ]}
          rows={[
            {
              route: "U.S. Mail, county sack to gate house",
              items: "22,140",
              transit: "3 days",
              whole: "99%",
              note: "Nothing whatever the matter with it. Recommended.",
            },
            {
              route: <>Cable, {COMPANY.cable}</>,
              items: "4,208",
              transit: "40 min.",
              whole: "100%",
              note: "Read aloud on arrival. This is not a service. It is the operator.",
            },
            {
              route: "Telephone message slips",
              items: "9,600",
              transit: "2 hr.",
              whole: "96%",
              note: <>The slip arrives intact. The message is another department&rsquo;s affair.</>,
            },
            {
              route: "By hand, gate house to second floor",
              items: "1,204",
              transit: "Same day",
              whole: "100%",
              note: "The gate house has never lost an item in eight years.",
            },
            {
              route: "Interoffice, on foot, second floor to third",
              items: "6,880",
              transit: "11 min.",
              whole: "88%",
              note: "The twelve per cent is the stairs, and the men on them.",
            },
            {
              route: "Pneumatic vent, mail room to Sub-Level 4",
              items: "3,377",
              transit: "9 sec.",
              whole: "41%",
              note: "Sorted by fragment. Reassembled where the tape holds.",
            },
            {
              route: "Pneumatic vent, Sub-Level 4 to mail room",
              items: "3,377",
              transit: <b style={{ color: "var(--spot-red)" }}>&minus;31 hr.</b>,
              whole: "12%",
              note: "Records is not accepting questions on this row.",
            },
            {
              route: "Diverted; floor not determined",
              items: "812",
              transit: "Not determined",
              whole: "—",
              note: "Recovered eventually. Most of it. See Form ASI-208.",
            },
            {
              route: "Held file, undeliverable",
              items: "31",
              transit: "—",
              whole: "100%",
              note: (
                <Redacted reason="Undeliverable: addressee not presently employed">
                  Addressees not on the payroll. Nine of the thirty-one are addressed in the same hand.
                </Redacted>
              ),
            },
          ]}
          foot={
            <>
              The two vent rows carry the same figure because they are the same 3,377 items, counted at both
              ends. Records is aware that the totals for this table do not reconcile and has, after four
              years, stopped attempting to make them.
            </>
          }
        />
      </Section>

      <Marginalia>
        The negative figure in the seventh row was queried by Accounting in January and re-queried in
        February. Records answered both with the same one-line memorandum, which is filed, and which reads:
        &ldquo;The figure is correct.&rdquo;
      </Marginalia>

      {/* ------------------------------------------------------------- */}

      <Section title="A Memorandum From Records, Reproduced In Full">
        <Memo
          to="Mr. C. Lamb, Maintenance"
          from="Mr. F. Pruitt, Records & Filing"
          re="Pneumatic diversity vent — mail-room terminus, disconnection of"
          date="21 November 1958"
          cc="Office of the President (for information; no reply expected)"
          sign={false}
        >
          <p>
            This department has requested the disconnection of the mail-room terminus on four occasions:
            June 1955, September 1955, March 1957 and the present date. Each was acknowledged. None was
            actioned. The position is therefore set out once more, in the plainest terms available.
          </p>
          <p>
            The terminus discharges into the sorting room at ninety miles per hour at a height of four feet
            two inches, which is the height of the sorting table and of a seated man&rsquo;s head. Six men
            work at that table. A screen was fitted in April 1957 and was recovered from Sub-Level 6 in
            June.
          </p>
          <p>
            This department does not raise the matter of the fourteenth of November, which is described on
            Form ASI-208 and which this department declines to describe again. It raises only the following:
            the item recovered that morning was not an item.
          </p>
          <p>
            Records asks for a valve, a screen, or the disconnection of the terminus. Records will accept any
            one of the three and has ceased to have a preference.
          </p>
        </Memo>

        <PenNote tone="red" angle={1.1}>
          Denied. It is nine seconds, Frank. Fit the screen again and bolt it this time. &mdash; C.J.
        </PenNote>
      </Section>

      <Notice head="The Enrichment Center Reminds You">
        The pneumatic diversity vent is not a mail chute, is not a rubbish chute, is not a speaking tube and
        is not to be addressed. Correspondence placed in the vent will arrive. Arriving and being delivered
        are separate undertakings, and only the first is guaranteed.
      </Notice>

      {/* ------------------------------------------------------------- */}

      <Section title="Reply Card">
        <Prose>
          <p>
            Cut along the dashed line, complete in ink, and hand it to the gate house or drop it in a box in
            your own town. No postage is required if mailed within the continental United States. Postage
            is required if mailed from within the Upper Peninsula, for reasons of a local arrangement this
            company cannot explain.
          </p>
        </Prose>

        <Coupon>
          <p className="ap-caps" style={{ fontSize: "0.68rem", marginBottom: "0.7rem" }}>
            {COMPANY.name} &mdash; Reply Card, Form ASI-108-R
          </p>

          <FormBlock>
            <Field label="Name" />
            <Field label="Address" />
            <Field label={<>City &amp; State</>} />
            <Field label="Reply desired by" filled>
              post / cable / telephone / (do not write &ldquo;vent&rdquo;)
            </Field>
          </FormBlock>

          <Rule variant="dotted" />

          <p className="ap-caps" style={{ fontSize: "0.62rem", color: "var(--ink-3)", margin: "0.6rem 0" }}>
            The nature of your correspondence
          </p>

          <Checklist
            items={[
              { text: "An order. See the catalogue and quote the number." },
              { text: "An enquiry as to employment. Personnel, second floor." },
              { text: "An offer to volunteer. Sixty dollars, cash, same day." },
              { text: "A complaint. See Form ASI-900 before writing, and then reconsider." },
              { text: "An invitation. The President regrets that he does not travel." },
              { text: "An enquiry concerning a person who came here and has not yet come home." },
            ]}
          />

          <Aside>
            The sixth line is ticked more often than the other five together. Records forwards those cards
            unopened to the third floor and keeps no copy, which is contrary to this department&rsquo;s
            standing instruction and has been permitted since 1957.
          </Aside>
        </Coupon>
      </Section>

      <ClearanceGate
        level={3}
        hint="Associate grade or above. The held file is not described at the gate house."
      >
        <Panel head={<>The Held File &mdash; Records &amp; Filing, Drawer 4</>} tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            Thirty-one items. Twenty-two are addressed to men who worked here and no longer do, and are held
            because there is nowhere to send them and nobody willing to write the covering letter. Nine are
            addressed to people who have never worked here at all, in one hand, on one stock of paper. One
            of the nine is addressed to the President in the President&rsquo;s own hand. The President did
            not write it. He read it, put it back in the envelope, and told this department to keep the
            drawer locked. This department does not have a key to the drawer. &mdash; F.P.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Prose>
        <p>
          That is the whole of it. Post to the gate house, cable if it is urgent, telephone the second
          floor, and hand it over yourself if it matters. Everything sent to this company is read. Not
          everything sent to this company is answered, and I will not pretend otherwise on a sheet with my
          name at the bottom of it.
        </p>
        <p>Now write to us.</p>
      </Prose>

      <Signature note="Form ASI-108, fourth revision. Dictated 2 April 1959. Set from the dictation, not from a corrected draft." />

      <FinePrint tiny>
        All correspondence received by {COMPANY.name} becomes the property of {COMPANY.name} upon arrival,
        upon dispatch, or upon such earlier moment as the circumstances of its arrival may establish. The
        company does not undertake to return enclosures or samples in the number or condition in which they
        were sent. Correspondence is retained seven years, or until the fourth drawer is full. See{" "}
        <Link href="/legal">Form ASI-900</Link> and the printed{" "}
        <Link href="/the-directory">Directory</Link>. Form ASI-108. Retain until superseded.
      </FinePrint>

      {/* Drawer 4 is locked. Records does not have the key. */}
      {/* Neither does Maintenance, and Maintenance has every key in this mine. */}

      <Scrawl href="/vault/the-dens">
        letters come out of the wall down here too. nobody posts them. somebody writes them
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

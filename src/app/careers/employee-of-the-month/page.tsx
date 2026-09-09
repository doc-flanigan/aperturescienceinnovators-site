import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Row, Aside,
} from "@/components/Print";
import { PenNote } from "@/components/Memo";
import { FigureTable, SpecList, KeyFigures } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Employee Of The Month",
  description:
    "A rotating honour that has rotated rather faster than Personnel anticipated. The roll for 1958 and 1959, with the present status of each recipient.",
};

export default function Page() {
  const { prev, next } = neighbours("/careers/employee-of-the-month");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/careers", label: "Careers" },
          { label: "Employee Of The Month" },
        ]}
      />

      <DocHead
        doc="ASI-505"
        department="Personnel"
        classification="Unrestricted"
        revision="Monthly. Status column added at Records' request, 1958."
      />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="Since 1956">
          Honoured
        </Stamp>
        <PageTitle
          kicker="Personnel — Second Floor"
          title="Employee Of The Month"
          deck={
            <>
              Instituted in 1956 to recognise, monthly, the man or woman whose work that month the President
              could not stop talking about. A photograph on the commissary wall, a citation in the Bulletin,
              and twenty dollars from the tin. Personnel adds a status column, at the request of Records,
              and asks that it be read straight down.
            </>
          }
          byline={
            <>
              Citations by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}. Status column by Records.
            </>
          }
        />
      </div>

      <KeyFigures
        items={[
          { value: "38", label: "Months since institution", note: "March 1956" },
          { value: "36", label: "Recipients", note: "Two months unfilled" },
          { value: "5", label: "Received it twice", note: "Greg, four of those" },
          { value: "$20", label: "From the tin", note: "Same tin" },
          { value: "23", label: "Still on the payroll", note: "See the column" },
        ]}
      />

      <Prose>
        <Lede>
          Every month I pick one. It is the easiest decision I make, because every month there is one person
          in this building who did a thing nobody asked for and it worked, and that is the whole
          qualification. There is a photograph. There is a citation. There is twenty dollars. I hand it over
          myself, on the commissary floor, in front of everybody, and I say why.
        </Lede>
        <p>
          Records has added a status column to this sheet. Records adds a status column to most things.
          Records has asked that it be read straight down without my commentary, and I have agreed, because
          I have read it straight down myself and there is no commentary I would add.
        </p>
      </Prose>

      <Section title="The Roll, 1958 – Spring 1959">
        <FigureTable
          caption="Employee of the month, sixteen months, with present status per Records"
          columns={[
            { key: "m", head: "Month" },
            { key: "who", head: "Recipient" },
            { key: "dept", head: "Department" },
            { key: "cite", head: "Citation" },
            { key: "st", head: "Present status" },
          ]}
          rows={[
            { m: "Jan 1958", who: "R. Kowalski", dept: "Machine shop", cite: "Built a thing on a Thursday that was asked for on a Friday", st: "On the payroll" },
            { m: "Feb 1958", who: "Greg", dept: "Reactor room", cite: "Cleaned the reactor room", st: "On the payroll" },
            { m: "Mar 1958", who: "E. Pike", dept: "Gate house", cite: "Columns agreed, thirty-one nights", st: "On the payroll" },
            { m: "Apr 1958", who: "M. Dubois", dept: "Materials", cite: "Extinguished bench four with his coat", st: "On the payroll. Coat not." },
            { m: "May 1958", who: "L. Tremblay", dept: "Applied Sciences", cite: "Trial 58-006. See ASI-401.", st: <Redacted reason="Records holds a date. Personnel does not.">File closed. No date.</Redacted> },
            { m: "Jun 1958", who: "Greg", dept: "Reactor room", cite: "Cleaned the reactor room", st: "On the payroll" },
            { m: "Jul 1958", who: "The steno pool", dept: "Third floor", cite: "Eleven at night, all of them, again", st: "On the payroll. All of them." },
            { m: "Aug 1958", who: "—", dept: "—", cite: "—", st: "No recipient. No explanation on file." },
            { m: "Sep 1958", who: "H. Lindqvist", dept: "Facilities", cite: "The fourth survey", st: "Left without notice, October" },
            { m: "Oct 1958", who: "Greg", dept: "Reactor room", cite: "Cleaned the reactor room", st: "On the payroll" },
            { m: "Nov 1958", who: "A. Ferreira", dept: "Substrate mill", cite: "Turned the President away at the mill door", st: "On the payroll. Raised." },
            { m: "Dec 1958", who: "The commissary", dept: "Sub-Level 1", cite: "The pie", st: "On the payroll" },
            { m: "Jan 1959", who: "J. Okafor", dept: "Operations", cite: "Chamber 8, eleventh of March, stayed at his post", st: "On the payroll. Transferred at his request." },
            { m: "Feb 1959", who: "Greg", dept: "Reactor room", cite: "Cleaned the reactor room", st: "On the payroll" },
            { m: "Mar 1959", who: "—", dept: "—", cite: "—", st: <Redacted reason="Records declines to say whether the month was unfilled or the recipient was">No recipient.</Redacted> },
            { m: "Apr 1959", who: "Margaret, age 11", dept: "Science fair", cite: "The potato", st: "Still functioning" },
          ]}
          foot="Greg's citation is the same every time because Greg's work is the same every time and it is the only work in this building that has never once failed."
        />
      </Section>

      <Marginalia>
        August 1958 has no recipient and no explanation. Personnel has asked the President three times. The
        President has said, three times, that August was August.
      </Marginalia>

      <PullQuote big attribution={`${COMPANY.founder}, handing over the February 1959 award`}>
        Greg. Again. It is always going to be Greg some of the time, and the month it stops being Greg is
        the month we should all be worried.
      </PullQuote>

      <Notice head="The Enrichment Center Reminds You">
        The photograph on the commissary wall is replaced monthly. The previous photographs are retained by
        Personnel in a drawer, in order, and the drawer is not for viewing, and personnel are asked not to
        ask why the drawer is not for viewing.
      </Notice>

      <Section title="On Greg">
        <Prose>
          <p>
            Four times. Nobody else has had it twice. The Bulletin has printed three letters about it and
            the answer to all three is the same: Greg cleans the reactor room, the reactor room is the one
            room in this building that has to be clean and has to be clean every day, and in five years it
            has been clean every day, and that is a record no other person on this payroll can match.
          </p>
          <p>
            He was down there before the reactor was. He has been asked to explain that and has not.
            Personnel has no start date for him and has stopped looking. He was reassigned once, to the
            mantid gallery, for a week, and was reassigned back, and neither Greg nor the mantids will say
            what happened, and both were fine.
          </p>
        </Prose>
      </Section>

      <ClearanceGate level={3} hint="Test Associate grade or above. Personnel does not print the drawer's contents.">
        <Panel head="Personnel — The Drawer" tone="red">
          <SpecList
            rows={[
              { k: "Photographs retained", v: "Thirty-six" },
              { k: "Photographs in which the recipient is alone", v: "Thirty-five" },
              { k: "The exception", v: "May 1958. L. Tremblay. There is a second figure behind him, out of focus, at the chamber door." },
              { k: "Chamber", v: "The one in Trial 58-006. Eleven-inch separation." },
              { k: "The second figure", v: <Redacted reason="Personnel compared it. Personnel has put the photograph back.">Also L. Tremblay.</Redacted> },
            ]}
          />
        </Panel>
      </ClearanceGate>

      <PenNote tone="pencil" angle={-1.4}>
        Thirty-six photographs. Twenty-three still here. He knows the number. He said August was August
        and then he did not say anything for the rest of the afternoon. &mdash; C.
      </PenNote>

      <Row>
        <Pictogram name="atom" size={54} title="Employee of the month" style={{ color: "var(--ink-3)" }} />
        <Placard>Commissary Wall &mdash; This Month</Placard>
        <Placard tone="warn">The Drawer Is Not For Viewing</Placard>
      </Row>

      <Aside>
        Margaret, age eleven, is the first recipient in the honour&rsquo;s history who is not on the
        payroll. The President has said she will be, and has named the year, and Personnel has opened a
        file.
      </Aside>

      <Rule variant="fat" />

      <FinePrint>
        <p>
          Form ASI-505. Citations are reprinted in{" "}
          <Link href="/bulletin">the Aperture Bulletin</Link>. Twenty dollars is paid from the gate house
          tin under the same terms as{" "}
          <Link href="/enrichment-center/compensation">Form ASI-306</Link>, which is to say in cash, the
          same day, whether or not the recipient is there to receive it.
        </p>
      </FinePrint>

      {/* Thirty-six photographs. One has two of the same man in it. */}
      {/* August was August. */}

      <Scrawl href="/vault/the-dens">
        may 1958. look at the photograph. look behind him. he is behind himself
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Row, Aside,
} from "@/components/Print";
import { Memo, PenNote } from "@/components/Memo";
import { FigureTable, SpecList, Plate, KeyFigures } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "The Lunar Substrate Program",
  description:
    "We bought the moon rocks. All of them we could get. The finest conductor of quantum tunnelling fields ever measured, and pure poison, and both facts are on the label.",
};

export default function Page() {
  const { prev, next } = neighbours("/science/lunar");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/science", label: "Science" },
          { label: "Lunar Program" },
        ]}
      />

      <DocHead
        doc="ASI-404"
        department="Materials — Substrate Division"
        classification="Unrestricted"
        revision="Second printing. Handling section expanded at Medical's request."
      />

      <div className="ap-rel">
        <Stamp float sub="Masks Compulsory">
          Handle With Care
        </Stamp>
        <PageTitle
          advertising
          kicker="Materials — Substrate Division"
          title="We Bought The Moon."
          deck={
            <>
              All of it we could get, from every dealer, collector, museum and university that would sell,
              at a price this publication is not going to print. It is the finest conductor of quantum
              tunnelling fields ever measured. It is also pure poison. Both facts are on the label and the
              label is not going to change.
            </>
          }
          byline={
            <>
              Dictated by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}, at the substrate bench
            </>
          }
        />
      </div>

      <KeyFigures
        items={[
          { value: "1,140", label: "Pounds procured", note: "Consignment complete" },
          { value: "41", label: "Vendors", note: "Nine countries" },
          { value: "1.0", label: "Field retention", note: "Indefinite. No decay measured." },
          { value: <Redacted reason="Accounting will not print the figure and the President will not let it be estimated">$11.4M</Redacted>, label: "Total procurement", note: "One line item" },
          { value: "0", label: "Substitutes found", note: "Nine years of looking" },
        ]}
      />

      <Prose>
        <Lede>
          Every conductor we tried held the field for a few seconds and then let it go. Copper, silver,
          graphite, every emulsion the Materials Department could stir, the shower curtain vinyl, and on one
          memorable afternoon a quantity of the commissary&rsquo;s blancmange. Seconds, all of them. And
          then a man in Applied Sciences put a chip of meteoritic material on the bench because it was on
          the bench, and the field held, and it is still holding, and that was 1955.
        </Lede>
        <p>
          Meteoritic material is not the moon. But it is the closest thing you can buy in quantity, and when
          we tested actual lunar substrate against it &mdash; and there is lunar substrate in the world, in
          museum drawers, in university cabinets, in the hands of gentlemen who did not know what they had
          &mdash; the lunar material was better by a factor this company measures in orders of magnitude.
        </p>
        <p>
          So I bought it. All of it I could get. Forty-one vendors in nine countries, over fourteen months,
          quietly, through four different agents so nobody worked out what was happening until it had
          happened. Accounting has asked me to stop describing the price as &ldquo;a bargain&rdquo; in
          print. It was a bargain.
        </p>
      </Prose>

      <PullQuote big attribution={`${COMPANY.founder}, to Accounting, on the substrate line item`}>
        It is my money. I bought a moon with it. Next question.
      </PullQuote>

      <Section title="Procurement">
        <FigureTable
          caption="Lunar and meteoritic substrate procured, 1955 – Winter 1958"
          columns={[
            { key: "y", head: "Period" },
            { key: "src", head: "Principal source" },
            { key: "lb", head: "Pounds", numeric: true },
            { key: "note", head: "Note" },
          ]}
          rows={[
            { y: "1955", src: "Bench specimen, origin unrecorded", lb: "0.02", note: "The chip. Still on the bench." },
            { y: "1956 Q1–Q2", src: "Private collections, United States", lb: "212", note: "Nine dealers. No questions asked either way." },
            { y: "1956 Q3", src: "University cabinets, four institutions", lb: "308", note: "Three sold. One is still corresponding." },
            { y: "1957", src: "Museum deaccessions, Europe", lb: "441", note: "Agents in Vienna and Lisbon" },
            { y: "1958 Q1", src: "Private, undisclosed", lb: "179", note: <Redacted reason="The vendor asked and we agreed">Vendor not named.</Redacted> },
            { y: "1958 Q4", src: "Final lot", lb: "—", note: "Consignment declared complete 28 February" },
          ]}
          foot="Total 1,140 pounds. The Substrate Division holds the only working inventory of its kind in private hands, and has declined four requests to confirm that in writing."
        />
      </Section>

      <Row style={{ gap: "2rem", alignItems: "flex-start" }}>
        <Plate
          number="6"
          caption="Lunar substrate, ground to 200 mesh, in suspension. In this condition it will hold a tunnelling field indefinitely and will pass through a paper mask as though the mask were not there."
          tint
        >
          <Pictogram name="moon" size={130} title="Lunar substrate" />
        </Plate>
        <div style={{ flex: "1 1 18rem" }}>
          <SpecList
            rows={[
              { k: "Form supplied", v: "Ground, 200 mesh, in suspension" },
              { k: "Field retention", v: "Indefinite. No decay has been measured." },
              { k: "Preparation", v: "One-eighth inch minimum. Cures in four hours." },
              { k: "Coverage", v: "41 sq. ft. per gallon" },
              { k: "Price", v: <Redacted reason="Accounting, and the President, and Legal, in that order">Per pound, on application only.</Redacted> },
              { k: "Substitutes", v: "None. Nine years of looking." },
              { k: "Respiratory hazard", v: "Total. See below, twice." },
            ]}
          />
        </div>
      </Row>

      <Section title="Handling">
        <Notice head="The Enrichment Center Is Required To Remind You">
          Ground lunar substrate is a respiratory poison in any quantity, at any exposure, with no threshold
          below which it is safe. A mask is compulsory at the bench, at the mill, at the mixing floor and in
          the store. This is not a departmental preference. Medical has required this sentence and Medical
          has required that it be set in the same size as everything else on this sheet.
        </Notice>

        <Prose>
          <p>
            The Substrate Division supplies a mask with every gallon, at no charge, and will supply a second
            one for nothing on request. Masks are checked at the mill door by a man whose entire job is
            checking masks at the mill door. Since the post was created in January 1958 there has been one
            recorded refusal.
          </p>
          <p>
            <Redacted reason="Medical wrote this sentence. It has been struck from four drafts and set in all four.">
              The recorded refusal was the President, and it has been the President on ninety-one occasions,
              and Medical has advised him in writing eleven times.
            </Redacted>
          </p>
        </Prose>

        <Panel head="Handling Requirements" tone="red">
          <ul style={{ margin: 0, fontSize: "var(--step--1)" }}>
            <li>Mask, checked at the door, at every stage from mill to bench. No exceptions are issued.</li>
            <li>Gloves. Substrate in suspension will pass a cotton glove in about nine minutes.</li>
            <li>No eating, drinking or smoking within the substrate rooms or Corridor 6.</li>
            <li>Grinding is done at the mill and nowhere else, by the mill crew and nobody else.</li>
            <li>Sweepings are not swept. Sweepings are wetted, bagged and weighed against the day&rsquo;s issue.</li>
            <li>Any quantity unaccounted for at the close of a shift stops the shift.</li>
          </ul>
        </Panel>
      </Section>

      <Memo
        to="The Office of the President"
        from="Medical"
        re="The mill door, eleventh notice"
        date="14 March 1959"
        sign={false}
        stamp={<Stamp tone="black" angle="right">Returned</Stamp>}
      >
        <p>
          Medical writes for the eleventh time regarding a single individual who continues to handle
          unshielded ground substrate at the bench, without a mask, and who grinds his own material at seven
          in the morning before the mill crew arrives.
        </p>
        <p>
          Medical is aware of who the individual is. Medical is aware that this memorandum will be returned.
          Medical will write a twelfth.
        </p>
      </Memo>

      <Marginalia>
        He grinds it himself. He has always ground it himself. His stated reason, recorded, is that nobody
        grinds a thing properly if it is not their moon.
      </Marginalia>

      <ClearanceGate level={3} hint="Test Associate grade or above. The exposure record is a Medical document.">
        <Panel head="Medical — Exposure Record, Substrate Bench" tone="red">
          <SpecList
            rows={[
              { k: "Recorded exposures, Nov 1958 – Mar 1959", v: "Ninety-one" },
              { k: "Of those, masked", v: "One. For nine minutes." },
              { k: "Advisories issued", v: "Eleven, in writing" },
              { k: "Advisories acknowledged", v: "Eleven" },
              { k: "Advisories acted upon", v: "Nine minutes" },
              { k: "Onset of symptoms", v: "January 1959" },
              { k: "Attributed by the subject to", v: "Dust in the shaft" },
              { k: "Dust in the shaft", v: <Redacted reason="The shaft is wet. It has always been wet.">There is none. The shaft is wet.</Redacted> },
            ]}
          />
          <p style={{ fontSize: "var(--step--1)", marginBottom: 0 }}>
            The full memorandum is Form ASI-Ω-05 and is held below the water table.
          </p>
        </Panel>
      </ClearanceGate>

      <PenNote tone="pencil" angle={-1.4}>
        Medical has written eleven. He has read eleven. He returns them the same afternoon and then goes
        back down to the bench. I have started keeping the carbons. &mdash; C.
      </PenNote>

      <Row>
        <Pictogram name="moon" size={54} title="Substrate" style={{ color: "var(--ink-3)" }} />
        <Pictogram name="neurotoxin" size={54} title="Respiratory hazard" style={{ color: "var(--spot-red)" }} />
        <Placard tone="danger">Substrate Bench &mdash; Masks Required</Placard>
        <Placard tone="warn">Mill Door &mdash; No Exceptions Issued</Placard>
      </Row>

      <Aside>
        The chip from 1955 is still on the bench in Applied Sciences, under glass, holding a field it was
        given four years ago. Nobody has been able to establish where it came from. The man who put it there
        thought it was a paperweight.
      </Aside>

      <Rule variant="fat" />

      <FinePrint>
        <p>
          Form ASI-404. Substrate is supplied to customers as{" "}
          <Link href="/products/conversion-gel">Conversion Gel, Form ASI-205</Link>, and is the conductive
          preparation described in{" "}
          <Link href="/science/quantum-tunnelling">Form ASI-401</Link>. Aperture Science Innovators makes no
          representation as to the origin of any material in the consignment and has declined, on the advice
          of counsel, to be told.
        </p>
      </FinePrint>

      {/* Ninety-one exposures. Nine minutes of mask. Eleven letters. */}
      {/* The cough started in January and it is March. */}

      <Scrawl href="/vault/lunar-memorandum">
        he grinds it himself at seven in the morning. everyone knows. everyone has decided not to know
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

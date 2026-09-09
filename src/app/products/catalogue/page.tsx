import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Row, Aside, Coupon,
} from "@/components/Print";
import { PenNote, Signature } from "@/components/Memo";
import { FigureTable, SpecList } from "@/components/Data";
import { FormBlock, Field, Checklist } from "@/components/Form";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { Starburst } from "@/components/svg/Ornament";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "The Complete Catalogue & Order Form",
  description:
    "Every item, every price, a coupon the Legal Department has read exactly once, and a delivery territory that excludes New Mexico.",
};

export default function Page() {
  const { prev, next } = neighbours("/products/catalogue");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/products", label: "Products" },
          { label: "Order Form" },
        ]}
      />

      <DocHead
        doc="ASI-299"
        department="Sales & Manufacturing"
        classification="Unrestricted — Binding On Signature"
        revision="Spring 1959 price list. Prices held except where noted."
      />

      <div className="ap-rel">
        <Stamp float tone="green" sub="Spring 1959">
          Price List
        </Stamp>
        <PageTitle
          advertising
          kicker="Sales & Manufacturing — Form ASI-299"
          title="The Complete Catalogue & Order Form"
          deck={
            <>
              Every item this company will sell you, every price, the terms, the territory, and an order
              coupon which the Legal Department has read exactly once and has asked not to be shown again.
              Prices are f.o.b. the Enrichment Center loading dock, Upper Michigan, and are held from the
              winter list except where the President has personally raised them.
            </>
          }
          byline={
            <>
              Prices set by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}. Catalogue numbers by Sales,
              who have been asked about one of them.
            </>
          }
        />
      </div>

      <Row style={{ gap: "2rem", alignItems: "center" }}>
        <Starburst label="ORDER" sub="TODAY" style={{ width: 120, flex: "0 0 auto", color: "var(--accent)" }} />
        <Prose>
          <Lede>
            If it is in this catalogue we have built one. If it is not in this catalogue we have very
            probably built one anyway, and you may write and ask, and the answer will come back from the
            third floor in the President&rsquo;s hand, and it will usually be yes and occasionally be a
            question about what you intend to do with it.
          </Lede>
        </Prose>
      </Row>

      <Section title="Price List">
        <FigureTable
          caption="Aperture Science Innovators — Complete price list, Spring 1959, f.o.b. Upper Michigan"
          columns={[
            { key: "no", head: "Cat. No.", width: "6.5rem" },
            { key: "item", head: "Item" },
            { key: "unit", head: "Unit" },
            { key: "price", head: "Price", numeric: true },
            { key: "avail", head: "Available" },
          ]}
          rows={[
            { no: "201-G", item: "Shower curtain, Institutional Grey, 72 × 72 in., twelve grommets", unit: "Each", price: "$4.20", avail: "Stock. Always stock." },
            { no: "201-W", item: "Shower curtain, Institutional Grey (Warm)", unit: "Each", price: "$4.20", avail: "Stock" },
            { no: "201-X", item: "Shower curtain, green", unit: "Each", price: "$4.20", avail: <Redacted reason="Eight bolts in the surface store. Not issued since October 1951.">Not issued</Redacted> },
            { no: "201-L", item: "Shower curtain, 72 in. × 4,000 ft., special", unit: "Each", price: "On application", avail: "One made. Hung. See ASI-201." },
            { no: "202-A", item: "Aperture, fixed emplacement, pair", unit: "Pair", price: "$6,200", avail: "Six weeks" },
            { no: "202-B", item: "Portable Quantum Tunnelling Device, complete", unit: "Each", price: "$14,750", avail: "Eleven weeks. Not a door." },
            { no: "203", item: "Repulsion gel, industrial", unit: "Gallon", price: "$60", avail: "Stock. 40 sq. ft. per gal." },
            { no: "204", item: "Propulsion gel, industrial", unit: "Gallon", price: "$60", avail: "Stock. Stopping sold separately." },
            { no: "204-F", item: "Arrest, none", unit: "—", price: "No charge", avail: "Our most popular arrangement" },
            { no: "205", item: "Conversion gel, lunar substrate, 200 mesh", unit: "Pound", price: <Redacted reason="Accounting. The President. Legal. In that order.">On application</Redacted>, avail: <Redacted reason="1,140 lb. was procured. Sales has not been told how much remains.">Limited</Redacted> },
            { no: "206", item: "Weighted storage cube, standard", unit: "Each", price: "$38", avail: "Stock. Stores nothing." },
            { no: "206-C", item: "Weighted storage cube, marked", unit: "Each", price: "—", avail: "Not for sale. Do not ask." },
            { no: "207-A", item: "Aerial Faith Plate, floor-mounted", unit: "Each", price: "$1,140", avail: "Four weeks. Mind the ceiling." },
            { no: "208", item: "Pneumatic Diversity Vent, per 100 ft.", unit: "Run", price: "$2,400", avail: "Eight weeks. Not for mail." },
            { no: "209", item: "Material Emancipation Grill", unit: "Each", price: "$3,100", avail: "Ten weeks. Dental not included." },
            { no: "210", item: "Heimlich Counter-Manoeuvre, instruction", unit: "Course", price: "$12", avail: "Applications still being determined" },
            { no: "211", item: "Take-A-Wish Foundation", unit: "—", price: "Wishes only", avail: "Money returned" },
            { no: "212", item: "Sentry, Aperture", unit: "—", price: "—", avail: "In development. Not for sale." },
            { no: "307", item: "Cake, celebration, per unit", unit: "Each", price: "n/a", avail: "See Form ASI-307. Commissary declines." },
            { no: "Ω-01", item: <Redacted reason="This number does not correspond to any product on this site. Sales has been asked. Sales added it in the second printing and cannot say why.">Combustible fruit, per gross</Redacted>, unit: "Gross", price: <Redacted reason="Not costed. Costed. Not printed.">—</Redacted>, avail: "Not a programme" },
          ]}
          foot="Prices f.o.b. the Enrichment Center loading dock. Quantity discounts on the curtain only. The curtain is the only line on which this company has ever offered a discount and the President has said it is the only line that has earned one."
        />
      </Section>

      <Marginalia>
        Catalogue number Ω-01 appeared in the second printing. Sales did not add it. Sales has checked the
        standing type and the number is in the standing type, and Sales has stopped checking.
      </Marginalia>

      <Section title="Terms Of Sale">
        <Panel head="Terms">
          <Checklist
            items={[
              { text: "Prices f.o.b. Upper Michigan. Freight by the DSS&A spur, 2.6 miles, to the buyer's carrier.", checked: true },
              { text: "Payment net thirty days. Cash on the curtain. The President prefers cash on everything and will say so.", checked: true },
              { text: "Delivery to any point in the continental United States and its territories, except as noted below.", checked: true },
              { text: "No delivery to New Mexico. Sales has been asked why and has referred the enquiry to the third floor, where it has been answered at length.", checked: true },
              { text: "No delivery by pneumatic vent. The vent is not for mail, is not for parcels, and has been asked to stop.", checked: true },
              { text: "The buyer accepts Form ASI-900 in full on signature of the order coupon, whether or not the buyer has read it, and Sales would like it noted that no buyer ever has.", checked: true },
              { text: "Apertures are sold in pairs and are not doors. The buyer agrees not to describe them as doors in correspondence.", checked: true },
              { text: "Substrate is sold only to buyers who have signed the mask undertaking and only in quantities the President has personally approved.", checked: true },
            ]}
          />
        </Panel>
      </Section>

      <Section title="Order Coupon">
        <Coupon>
          <p className="ap-caps" style={{ fontSize: "0.66rem", margin: "0 0 0.6rem", color: "var(--accent)" }}>
            Cut Here — Post To Sales &amp; Manufacturing, Upper Michigan — Or Bring It To The Dock
          </p>
          <p style={{ fontFamily: "var(--font-ad)", fontSize: "var(--step-2)", lineHeight: 1.04, margin: "0 0 0.8rem" }}>
            Order Form ASI-299.
          </p>
          <FormBlock>
            <Field label="Firm" />
            <Field label="Address" />
            <Field label="Cat. No." />
            <Field label="Quantity" />
            <Field label="Intended use" filled>
              (the President reads this line personally and will write back)
            </Field>
            <Field label="Territory" filled>
              (if New Mexico, do not complete this form)
            </Field>
            <Field label="Signature" />
          </FormBlock>
          <p style={{ fontSize: "var(--step--1)", margin: "0.6rem 0 0" }}>
            By signing, the buyer accepts Form ASI-900 in its entirety. The Legal Department has read this
            coupon once, has asked that the previous sentence be set in the largest type on the page, and
            has been told that it is set in the same type as everything else, which in this building is
            the compliment.
          </p>
        </Coupon>
      </Section>

      <PullQuote big attribution={`${COMPANY.founder}, to Sales, on the catalogue`}>
        If it is in the catalogue we have built one. If it is not, we have very probably built one anyway.
      </PullQuote>

      <Notice head="The Enrichment Center Reminds You">
        Products marked &ldquo;in development&rdquo; are in development. Products not so marked are also, in
        a sense, in development. Everything is in development. That is what development is, and Sales has
        been asked to stop putting this notice on the catalogue and has put it on anyway.
      </Notice>

      <ClearanceGate level={2} hint="Junior Associate grade or above. Sales does not print the delivery footnote.">
        <Panel head="Sales — Delivery Record, New Mexico" tone="red">
          <SpecList
            rows={[
              { k: "Orders received from New Mexico", v: "Fourteen, 1955 – 1959" },
              { k: "Orders filled", v: "None" },
              { k: "Orders answered by the President personally", v: "Fourteen" },
              { k: "Length of the fourteenth answer", v: "Eleven pages" },
              { k: "Items requested, most often", v: "Conversion gel. Every time. Every order." },
              { k: "Items despatched to New Mexico, ever", v: <Redacted reason="One. Bread. Monthly. Booked under Commissary.">One.</Redacted> },
            ]}
          />
        </Panel>
      </ClearanceGate>

      <PenNote tone="pencil" angle={-1.2}>
        He reads the intended-use line on every coupon. Every one. He wrote back to a man in Ohio about two
        faith plates and the man wrote back and now they correspond. I have never been told what the plates
        are for. &mdash; C.
      </PenNote>

      <Row>
        <Pictogram name="dollar" size={54} title="Order form" style={{ color: "var(--ink-3)" }} />
        <Placard>Sales &mdash; Loading Dock</Placard>
        <Placard tone="warn">We Do Not Ship To New Mexico</Placard>
      </Row>

      <Aside>
        The loading dock is the only door in this building that opens onto the outside. It is thirty feet
        wide, it faces the rail spur, and it is the door two hundred thousand curtains went out of in 1944,
        and the President will not have it repainted.
      </Aside>

      <Rule variant="fat" />

      <Signature note="Spring 1959 price list. Every price personally set. Every price personally held." />

      <FinePrint>
        <p>
          Form ASI-299. Full descriptions of every item are at the form numbers given; the catalogue index
          is at <Link href="/products">the Products sheet</Link>. Terms are governed by{" "}
          <Link href="/legal">Form ASI-900</Link>. Catalogue number Ω-01 does not correspond to any product
          and Sales has been asked to remove it and cannot, because it is in the standing type, and the
          standing type was locked by somebody who is not on the payroll.
        </p>
      </FinePrint>

      {/* Ω-01. In the standing type. Locked by nobody on the payroll. */}
      {/* Fourteen orders from New Mexico. All for the gel. All answered. None filled. */}

      <Scrawl href="/vault/combustible-lemons">
        omega one is in the price list. its in the standing type. nobody put it there. read the number. read what it is per gross
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

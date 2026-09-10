import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Split, Row, Aside, Coupon,
} from "@/components/Print";
import { Memo, PenNote } from "@/components/Memo";
import { FigureTable, SpecList, Plate, KeyFigures } from "@/components/Data";
import { Checklist, Field } from "@/components/Form";
import { Advert } from "@/components/Ad";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Conversion Gel",
  description:
    "Product No. 205 from the Materials Division: the moon, ground fine and held in suspension, being the only surface in the world that will take an aperture and the only one on this sheet that is also a poison.",
};

export default function ConversionGelPage() {
  const { prev, next } = neighbours("/products/conversion-gel");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/products", label: "Products & Divisions" },
          { label: "Conversion Gel" },
        ]}
      />

      <DocHead
        doc="ASI-205"
        department="Materials"
        classification="Unrestricted"
        revision="Fourth printing. Toxicological matter moved forward at the request of Medical."
      />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="Substrate Grade">
          Lunar
        </Stamp>
        <PageTitle
          advertising
          kicker={<>Materials Division &mdash; Product No. 205</>}
          title="Conversion Gel"
          deck={
            <>
              The moon, ground fine, held in suspension and sold by the pound. It is the finest conductor of
              quantum tunnelling fields ever measured on this earth and it is a poison of the first rank,
              and both of those sentences are printed on the pail, in the same size of type, because a
              customer is entitled to the whole of a thing.
            </>
          }
          byline={
            <>
              Dictated by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}. Specification from the Materials
              Division; the toxicology from Medical, who asked that the toxicology be put first and were
              overruled by the man who signs the sheet.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            You cannot put a hole in a wall. I have tried. The lab boys have tried with better equipment
            and worse language. Ordinary brick will not take an aperture, ordinary plaster will not take an
            aperture, and a poured concrete wall four feet thick will sit there under a full emitter charge
            and do absolutely nothing at all, forever, out of pure Midwestern stubbornness. What takes an
            aperture is moon rock. Nothing else does. We found that out in 1956 and then we went and bought
            every ounce of moon rock in North America that was not nailed down, and several that were.
          </Lede>
          <p>
            Conversion Gel No. 205 is that rock, ground to eleven microns and suspended in a white
            vehicle you can roll onto a wall with the same brush your painter uses for a corridor. One coat.
            Twenty minutes. Thereafter the wall is no longer a wall. It is a place where the{" "}
            <Link href="/products/quantum-tunnelling-device">Portable Quantum Tunnelling Device</Link> can
            be made to agree with itself, and the second place can be four hundred feet away, or on another
            level, or &mdash; and the Materials Division has asked me not to print this and I am printing it
            &mdash; on the other side of the same wall, which is a sentence I would like the gentlemen in
            New Mexico to read twice.
          </p>
          <p>
            I want to be honest about the price, because you will find it out at the loading dock anyway.
            This is the most expensive substance sold by any company in the United States by weight, and it
            is not close. A five-gallon pail of Conversion Gel costs more than the room you are going to
            paint with it. It costs more than the man you are going to pay to paint it. Accounting has
            declined to set the per-pound figure in type on a sheet that leaves this building, and I have
            let them win that one, and you may write to the Division and they will tell you over the
            telephone in a low voice.
          </p>
          <p>
            Now the other half. Ground lunar substrate is poison. Not an irritant. Not a nuisance dust.
            Poison, in the way that a thing is poison when the Medical Department writes you a memorandum
            about it eleven separate times and files a carbon each time. It does not clear from the lung.
            There is no schedule of recovery because nobody has ever been able to draw one. You wear the
            mask, you wet-sweep the bench, you do not use compressed air on it, and you do not &mdash; ever
            &mdash; grind it dry in a room with the door shut.
          </p>
          <p>
            That is the label, and the label is the truth, and I will tell you exactly what I think of the
            label further down this sheet in a paragraph the Legal Department has read four times.
          </p>
        </Prose>

        <Stack>
          <Panel head="Product No. 205, In Brief" tone="tint">
            <SpecList
              rows={[
                { k: "Catalogue No.", v: "ASI-205" },
                { k: "Form", v: "Aqueous suspension, matt, opaque" },
                { k: "Colour", v: "Lunar White. It is the only white in this building." },
                { k: "Substrate content", v: "9 per cent by weight, catalogue grade" },
                { k: "Particle size", v: "11 microns, hand-ground" },
                { k: "Applied thickness", v: "1/32 in. nominal. Thicker is waste." },
                { k: "Coverage", v: "22 sq. ft. per gallon" },
                { k: "Cure", v: "20 minutes at 68°F. Live at eight." },
                { k: "Aperture acceptance", v: "44 in. nominal, oval, first strike" },
                { k: "Service life", v: "Indefinite, unwashed" },
                { k: "Pail, 5 gallon", v: "$2,940.00" },
                {
                  k: "Price, the pound of substrate",
                  v: (
                    <Redacted reason="Accounting: not to be set in type on any sheet that leaves the building">
                      $11,300 delivered, and I would pay it again this afternoon, and next Tuesday, and I
                      have.
                    </Redacted>
                  ),
                },
                { k: "Toxicity", v: "Total. See Medical, below." },
              ]}
            />
          </Panel>

          <Plate
            number="1"
            caption="Conversion Gel No. 205, one coat, on prepared block. The Division notes that the plate cannot show the only interesting property of the material, which is that a hole will consent to be there."
            tint
          >
            <Pictogram
              name="moon"
              size={120}
              title="Ground lunar substrate in suspension"
              style={{ color: "var(--spot-blue)" }}
            />
          </Plate>

          <Row>
            <Placard tone="danger">Masks Beyond This Point</Placard>
            <Placard tone="warn">Do Not Sweep Dry</Placard>
            <Placard>White Wall &mdash; Live</Placard>
          </Row>

          <Aside>
            The Enrichment Center paints its chamber walls white for this reason and for no other. Visitors
            who have admired the brightness of the lower chambers have been admiring the most expensive
            paint in the Republic.
          </Aside>
        </Stack>
      </Split>

      <KeyFigures
        items={[
          { value: "9%", label: "Substrate by weight", note: "Catalogue grade. Below six it stops working." },
          { value: "1", label: "Coat", note: "A second coat has never improved a single reading." },
          { value: "22", label: "Square feet the gallon", note: "Measured on prepared block, not on brick" },
          { value: "0", label: "Substitutes found", note: "Fourteen candidate minerals tried since 1957" },
        ]}
      />

      <PullQuote big attribution={`${COMPANY.founder}, to the Materials Division, November 1956`}>
        Gentlemen, we have bought the moon. Grind it.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="I. What Takes An Aperture, And What Does Not">
        <Prose>
          <p>
            The Division has run first-strike acceptance trials on every surface it could find, carry or
            requisition, and on several it should not have. A first strike is an emitter charge at nominal
            power against a prepared surface at twelve feet. The surface either accepts the aperture or it
            does not, and there is no interesting middle case except the one in the fifth row, which the
            Division insists is a defect and which I have entered in the catalogue as a feature.
          </p>
        </Prose>

        <FigureTable
          caption="First-strike aperture acceptance by preparation. Materials Division bay, Sub-Level 3, 1957–1959."
          columns={[
            { key: "prep", head: "Preparation" },
            { key: "sub", head: "Substrate", numeric: true, width: "6rem" },
            { key: "acc", head: "Acceptance", numeric: true, width: "7rem" },
            { key: "note", head: "Division Note" },
          ]}
          rows={[
            { prep: "Poured concrete, unprepared", sub: "nil", acc: "0 of 40", note: "Stubborn. Expected." },
            { prep: "Lead-white house paint, two coats", sub: "nil", acc: "0 of 40", note: "Tried at the President’s insistence." },
            { prep: "Salt face, native (mine wall, Sub-Level 5)", sub: "nil", acc: "0 of 40", note: "The mine will not take a hole. The mine is the one thing here that will not." },
            { prep: "Conversion Gel, thin (4 per cent)", sub: "4%", acc: "9 of 40", note: "Intermittent. Do not sell." },
            {
              prep: "Conversion Gel, catalogue grade",
              sub: "9%",
              acc: "40 of 40",
              note: "This is the product. Every strike, every time, first time.",
            },
            {
              prep: "Conversion Gel, heavy (14 per cent)",
              sub: "14%",
              acc: "40 of 40",
              note: "Accepts, and continues to accept for eleven minutes after the emitter is shut off and unplugged. Materials calls this a defect.",
            },
            {
              prep: "Conversion Gel, experimental (22 per cent)",
              sub: "22%",
              acc: <Redacted reason="Materials Division: trial suspended, bay sealed">40 of 40, and then 41.</Redacted>,
              note: "Bay 4 remains sealed. Do not enter Bay 4 to read the meter; the meter has been moved outside the door.",
            },
            {
              prep: "One Aperture Fixtures shower curtain, coated by hand",
              sub: "9%",
              acc: "40 of 40",
              note: "Vinyl takes it beautifully. Sixteen years in this business and the curtain is still the best substrate I own.",
            },
          ]}
          foot="Forty strikes to a trial. Bay 4 was sealed on 2 February 1959 and the trial series closed. The Division has not asked to reopen it and I have not offered."
        />

        <Marginalia>
          The Division would like it recorded that the shower-curtain trial was conducted at eleven at night,
          without authorisation, by the President, alone, and that the Division learned of it from the log.
        </Marginalia>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section title="II. Procurement And Grinding">
        <Prose>
          <p>
            We do not mine this. Nobody mines this. What exists on this continent came down out of the sky
            at some point in the last several thousand years and was picked up by a farmer, a museum, a
            university or a man with a cart, and between 1954 and 1956 my buyers went and stood in front of
            every one of those people with a chequebook and did not haggle. Not once. Haggling is for men
            who intend to come back, and we did not intend to come back, because there was not going to be
            any more of it. That procurement is the moat around this company and it cost what a moat costs.
          </p>
          <p>
            The consignment came in by rail in November 1956 and it is held on the premises, catalogued,
            weighed to the quarter-ounce and counted every Friday afternoon by two men who do not like each
            other, which is the only accounting method I have ever found to be reliable. The full account of
            the programme is on{" "}
            <Link href="/science/lunar">Form ASI-404</Link>, and the shafts and stores that hold it are set
            out on <Link href="/the-company/upper-michigan">Form ASI-105</Link>.
          </p>
          <p>
            Grinding is done by hand at the substrate bench on the third floor. It is done by hand because
            a mill heats the material and heated substrate loses better than a third of its conductance and
            does not get it back. Eleven microns, by hand, wet, with a mask on. The first pound of every
            consignment the President grinds personally. That is not a ceremony and it is not for the
            photographers. It is because I bought it and I know what it cost and I am not handing the first
            pound of it to a man on his second week.
          </p>
        </Prose>

        <Panel head="Handling &mdash; Materials Division Standing Order No. 14" tone="rule">
          <Checklist
            items={[
              { text: "Respirator, cartridge type, fitted and checked at the cabinet by the bench.", checked: true },
              { text: "Gauntlets. Sleeves taped. Collar buttoned.", checked: true },
              { text: "Grind wet. Always wet. There is no dry grinding of this material in this building.", checked: true },
              { text: "Wet-sweep the bench and the floor at the end of every session.", checked: true },
              { text: "Compressed air is not to be used on the bench, the floor, the man, or his overalls.", checked: true },
              { text: "Bench log signed on entry and on leaving, both, every time.", checked: true },
              { text: "Signature of the man presently at the bench obtained.", checked: false },
            ]}
          />
        </Panel>

        <Prose>
          <p>
            There are fourteen respirators in the cabinet by the bench and every one of them is fitted,
            checked and good for a four-hour shift. Every man in Materials wears one. Every man in
            Maintenance who so much as walks past the bench wears one. Every visitor wears one, including
            two gentlemen from the Army in February who were most particular about it.
          </p>
          <p>The President does not use one.</p>
        </Prose>

        <PenNote tone="pencil" angle={-1.5}>
          Fourteen in the cabinet. I have counted them every Friday since January and the count has never
          once gone down. He is at that bench at seven in the morning and the door is shut. I have stopped
          ordering respirators. I have started ordering something else and I am not putting what on this
          sheet. &mdash; C.
        </PenNote>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section title="III. Medical Department, Reproduced In Full">
        <Prose>
          <p>
            Medical asked for this section and Medical wrote every word of it, and I have not struck
            anything out of it, which is a first for this publication and ought to tell you how seriously
            the company takes the material.
          </p>
        </Prose>

        <Panel head="Exposure Schedule &mdash; Lunar Substrate, Finely Ground" tone="blue">
          <SpecList
            rows={[
              { k: "Permissible exposure, masked", v: "Four hours the shift. Not consecutive." },
              { k: "Permissible exposure, unmasked", v: "Nil. There is no permissible unmasked exposure." },
              { k: "Route", v: "Inhalation, chiefly. Ingestion, where a man eats at the bench." },
              { k: "Clearance from the lung", v: "None established. Medical has looked for one since 1957." },
              { k: "Cumulative", v: "Yes. Every exposure is every previous exposure, added." },
              { k: "First sign", v: "A cough that does not clear and that the man attributes to the shaft." },
              {
                k: "Course thereafter",
                v: (
                  <Redacted reason="Medical Department: struck from the trade sheet by the Office of the President">
                    Measured in years and not in decades. Medical has now written this eleven times and
                    filed a carbon of each.
                  </Redacted>
                ),
              },
              { k: "Treatment", v: "None. The mask is the treatment. The mask is the whole of the treatment." },
              { k: "Persons presently under review", v: "Forty-one in Materials. One not in Materials." },
            ]}
          />
        </Panel>

        <Notice head="The Enrichment Center Reminds You">
          The Enrichment Center reminds you that the white walls of the lower chambers are a finish and not
          a hazard, provided they remain a finish. Personnel who find powder on a glove, a sleeve or a
          sandwich should report to Medical on the second floor and should not first go to the commissary.
        </Notice>

        <Memo
          to="Office of the President"
          from="Medical Department"
          re={<>Standing Order No. 14 &mdash; compliance at the substrate bench</>}
          date="6 March 1959"
          cc="Materials. Records, for the file."
          sign={false}
        >
          <p>
            Medical has audited the bench log for the period 1 January to 28 February. Compliance across the
            Materials Division stands at one hundred per cent, which the Department wishes recorded as
            creditable and unusual.
          </p>
          <p>
            The bench log records forty-nine entries in the period by one man not on the Division roll. The
            respirator cabinet was opened on none of those forty-nine occasions. The Department has raised
            this verbally on two occasions and in writing on eleven, and has been instructed on each
            occasion that the matter is not a Medical matter.
          </p>
          <p>
            The Department is obliged to note that it is precisely a Medical matter, and to note further
            that it will go on writing this memorandum at monthly intervals for as long as the entries
            continue.
          </p>
        </Memo>

        <PenNote tone="red" angle={1.2}>
          Filed. No reply required. Do not circulate this one and do not put it in the outer office tray.
          &mdash; CJ
        </PenNote>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Advert
        eyebrow="Materials Division — Product No. 205"
        head="The Only Wall In The World That Will Take A Hole."
        burst="205"
        burstSub="LUNAR"
        action="Order Form ASI-299"
        href="/products/catalogue"
      >
        <p>
          One coat. Twenty minutes. A brush your own painter already owns. Conversion Gel No. 205 converts
          any sound vertical surface into a conductive aperture face rated for the full emitter charge, and
          it does it the first time, every time, for the working life of the wall behind it.
        </p>
        <p>
          Sold by the pail and by the quarter-pail. Not sold by the drum, not sold by the tank car, and not
          sold at all to any address in the State of New Mexico, by standing instruction of this office. See{" "}
          <Link href="/enrichment-center/chambers">Form ASI-304</Link> for the chamber finish schedule.
        </p>
      </Advert>

      <Coupon>
        <p className="ap-caps" style={{ fontSize: "0.7rem", marginTop: 0 }}>
          Requisition &mdash; Conversion Gel No. 205 &mdash; Quarter-Pail &mdash; Countersignature Required
        </p>
        <p style={{ marginTop: 0 }}>
          Cut here and present at the substrate store, {COMPANY.address.line2}, {COMPANY.address.line3}, or
          telephone {COMPANY.telephone}. No sample tin is offered and none has ever been offered. Empty
          pails are returned to the store, weighed, and entered against the requisition.
        </p>
        <Field label="Name and grade" />
        <Field label={"Department & floor"} />
        <Field label="Wall to be prepared (with dimensions)" />
        <Field label="Respirator cabinet number, and date last checked" />
        <Field label="Countersignature, Materials Division" />
        <Field label="Weight drawn" />
        <Field label="Weight returned" />
        <FinePrint tiny>
          Weight drawn and weight returned are reconciled on the same Friday afternoon. A discrepancy of
          more than a quarter-ounce is reported to the Office of the President the same day, by hand, and
          not by the pneumatic vent.
        </FinePrint>
      </Coupon>

      <ClearanceGate
        level={3}
        hint="Test Associate grade or above. The bench log is not a public document; the arithmetic in it is."
      >
        <Panel head="Materials Division &mdash; Bench Note, Not For The Trade Sheet" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", marginTop: 0 }}>
            The Division has been asked by Medical to account for forty-nine unmasked entries in the bench
            log for January and February. The Division cannot account for them. The Division is not in a
            position to instruct the man concerned, has said so in writing, and has been told twice that
            saying so in writing is the sort of thinking that keeps a department on the third floor.
          </p>
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", marginBottom: 0 }}>
            The Division proposes, and will implement without further authority, the following: the cabinet
            by the bench is to be kept unlocked, stocked and visible; the bench is to be wet down each
            evening whether it has been used or not; and no member of this Division is to be alone on the
            third floor at seven in the morning. That last is not a safety measure. That last is so that
            somebody is there.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="fat" />

      <Row>
        <Pictogram name="moon" size={52} title="Lunar substrate" style={{ color: "var(--ink-3)" }} />
        <Pictogram name="neurotoxin" size={52} title="Toxic by inhalation" style={{ color: "var(--spot-red)" }} />
        <Pictogram name="gel" size={52} title="Conversion Gel, applied" style={{ color: "var(--ink-2)" }} />
        <Placard tone="danger">Substrate Bench &mdash; Masks Required</Placard>
      </Row>

      <FinePrint>
        <p>
          Form ASI-205. Conversion Gel No. 205 is warranted to accept an aperture from Aperture equipment at
          nominal charge and is warranted against nothing else of any kind. {COMPANY.name} accepts no
          liability for anything which passes through a surface prepared with this product, for anything
          which arrives out of a surface prepared with this product, or for the difference between the two.
          The product is toxic by inhalation and by ingestion and is not to be handled otherwise than under
          Standing Order No. 14. Persons who have handled this product unmasked are advised that the company
          maintains no register of such persons, keeps no record of such handling, and is under no
          obligation to inform them of anything at all &mdash; see <Link href="/legal">Form ASI-900</Link>,
          clauses VI and XI, and the further material at <Link href="/science/lunar">Form ASI-404</Link>.
        </p>
      </FinePrint>

      {/* Forty-nine entries in the bench log for January and February. */}
      {/* Not one of them is signed. The log is signed on entry and on leaving, both, every time. */}
      {/* Medical counted them anyway. Somebody else counts the respirators. */}

      <Scrawl href="/vault/lunar-memorandum">
        he grinds it himself at seven with the door shut and the cabinet full. somebody keeps writing it
        down. it is the only thing anybody is doing
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

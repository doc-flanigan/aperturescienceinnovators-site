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
import { Advert } from "@/components/Ad";
import { FormBlock, Field, Checklist } from "@/components/Form";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "The Weighted Storage Cube",
  description:
    "Ninety-one pounds of pressed steel and lead ballast with no interior whatever — the Aperture Weighted Storage Cube, sold as a solved problem, in continuous manufacture since 1954.",
};

export default function Page() {
  const { prev, next } = neighbours("/products/weighted-storage-cube");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/products", label: "Products" },
          { label: "Storage Cube" },
        ]}
      />

      <DocHead
        doc="ASI-206"
        department="Manufacturing"
        classification="Unrestricted"
        revision="Fourth printing. Specification unaltered since 1954. One variant withdrawn."
      />

      <div className="ap-rel">
        <Stamp float tone="black" sub="Catalogue No. 206-W">
          Standard Issue
        </Stamp>
        <PageTitle
          advertising
          kicker="Manufacturing Division &mdash; Sub-Level 2"
          title="The Weighted Storage Cube"
          deck={
            <>
              Twenty-six inches on every edge. Ninety-one pounds dry. Six identical faces, no handle, no lid,
              no hinge, and not one cubic inch of interior. It weighs a great deal and it stores nothing.
              Both of those are features and we charge for both.
            </>
          }
          byline={
            <>
              Dictated by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}, who has been asked in writing
              eleven times what goes inside it and has answered in writing eleven times.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            It is a cube. It weighs ninety-one pounds. It stores nothing whatsoever, and the gentleman who
            has just frowned at that sentence should stay exactly where he is, because that frown is the
            product. Every storage article ever sold in this Republic is a promise about an inside. Buy the
            crate, get the inside of the crate. Buy the drum, the cabinet, the safe. Aperture sells you the
            outside. The inside is not offered, not represented and not there.
          </Lede>
          <p>
            Here is the problem the cube solves, and I want it stated plainly, because Sales keeps trying to
            dress it up. Down in the chambers there is a button set into the floor. It does not stay pressed.
            The door across the room stays open exactly as long as the button stays down, and a man cannot
            stand on a button in one corner and walk through a door in the other, this being one of the very
            few laws of physics this company has not yet got round to.
          </p>
          <p>
            So the man needs a thing. The thing must be heavy enough to hold the button, small enough that
            he can get his arms round it, awkward enough that he must think about it, and stupid enough that
            it will do nothing else. It must not roll. It must not tip. It must not float, burn, dissolve,
            compress, or take an interest. In the spring of 1954 I told Manufacturing to bring me that thing
            by Friday and on the Thursday two men carried it into my office and set it on my desk and my desk
            is still on the second floor because the desk did not survive the trip.
          </p>
          <p>
            Manufacturing wished to call it the Weighted Chamber Mass. Sales wished to call it the Aperture
            Ballast Block. I named it the Weighted Storage Cube, because a customer will buy storage and a
            customer will not buy ballast, and because there is nothing so restful in all of industry as a
            solved problem with a plain name painted on it.
          </p>
          <p>
            Five years and eighteen thousand four hundred units later I have had exactly four returned.
            Three of those were freight damage to the crate and not to the cube, the cube being the only
            article in this catalogue that has never once been damaged by anything. The fourth I will come to
            further down this sheet, and then I will stop coming to it.
          </p>
        </Prose>

        <Stack>
          <Panel head="The Cube, In Brief" tone="tint">
            <SpecList
              rows={[
                { k: "Catalogue No.", v: "206-W" },
                { k: "In manufacture", v: "Continuously since 1954" },
                { k: "Edge", v: "26 in., all twelve, to .015 in." },
                { k: "Mass", v: "91 lb. dry. There is no wet." },
                { k: "Shell", v: "Pressed steel, two halves, welded at the equator" },
                { k: "Corners", v: "Cast aluminium. They do not mark the plates." },
                { k: "Ballast", v: "Lead-antimony and furnace slag, poured hot" },
                { k: "Interior volume", v: <>None. See below, and then see Legal.</> },
                { k: "Faces", v: "Six. Identical. Deliberately." },
                { k: "Handle", v: <>None. A handle is an opinion about which way is up.</> },
                { k: "Load rating", v: "2,400 lb. on any face" },
                { k: "Price, each", v: "$28.00" },
                { k: "Price, crate of six", v: "$158.00" },
                { k: "Recalls to date", v: "None" },
              ]}
            />
          </Panel>

          <Plate
            number="1"
            caption={
              <>
                The cube as manufactured. The drawing is the 1954 drawing. Note that there is no top, which is
                to say that there are six tops.
              </>
            }
          >
            <Pictogram
              name="cube"
              size={140}
              title="The Aperture Weighted Storage Cube, standard issue, six identical faces"
              style={{ color: "var(--ink-2)" }}
            />
          </Plate>

          <Row>
            <Placard>Cube, Weighted</Placard>
            <Placard tone="warn">Lift With The Legs</Placard>
          </Row>

          <PenNote tone="pencil" angle={-1.5}>
            The short run went out on one crate manifest and came back on another. He will tell you the
            numbers match. I have both manifests in front of me and they do not. &mdash; C.
          </PenNote>
        </Stack>
      </Split>

      <KeyFigures
        items={[
          { value: "18,400", label: "Cubes manufactured since 1954", note: "Sub-Level 2, one shift." },
          { value: "0", label: "Cubic inches of interior", note: "As designed. As sold." },
          { value: "2,400", label: "Pounds borne on any face", note: "Rated. Tested to rather more." },
          { value: "4", label: "Units returned", note: "Three were the crate." },
        ]}
      />

      <PullQuote big attribution={`${COMPANY.founder}, to Manufacturing, April 1954`}>
        I do not want a box. A box has an inside, and an inside is where trouble keeps its things. Bring me
        the outside of a box and charge me for all six sides of it.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="On The Question Of What Goes Inside">
        <Prose>
          <p>
            Records has a folder of correspondence on this subject two inches thick and I have read every
            letter in it personally, because a man who takes the trouble to write to a manufacturer deserves
            an answer from the manufacturer and not from a clerk. The letters all ask the same thing in
            different handwriting. Where is the lid. How does it open. What is it for storing.
          </p>
          <p>
            There is no lid. It does not open. It is for storing nothing, and it stores nothing more reliably
            than any article this company has ever produced, and I would put that claim beside the shower
            curtain, which is the highest thing I can say about a product. In sixty-one months of continuous
            service in the{" "}
            <Link href="/enrichment-center/chambers">test chambers</Link> not one cube has permitted anything
            to get inside it. Not water. Not gel. Not slag, not smoke, not a wristwatch, not a volunteer.
            Nothing has ever been stored in an Aperture Weighted Storage Cube and nothing ever will be, and
            that is a perfect record, and I have never known a competitor to hold a perfect record at
            anything.
          </p>
          <p>
            The outfit in New Mexico would have put a hinge on it. They would have held four meetings about
            the hinge, published a paper on the hinge, and the hinge would have failed, and a man in a
            chamber would presently be standing on a button for the rest of his natural life waiting on
            forty co-authors.
          </p>
        </Prose>

        <Aside>
          A cube may be stood upon, sat upon, hidden behind, thrown, dropped down a shaft, used to hold a door,
          used to hold a button, used to hold a second cube, and &mdash; on one recorded occasion in Chamber 4
          &mdash; used to hold a hat. It may not be opened. There is nothing to open.
        </Aside>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section title="Acceptance Trials, Manufacturing, 1954">
        <FigureTable
          caption={
            <>
              Conducted on Sub-Level 2 between the ninth and the nineteenth of June, 1954, on twelve units
              drawn from the first production run. Two further trials were added later and are printed here in
              their proper place.
            </>
          }
          columns={[
            { key: "no", head: "Trial", numeric: true, width: "4.5rem" },
            { key: "method", head: "Method" },
            { key: "std", head: "Standard" },
            { key: "result", head: "Result" },
          ]}
          rows={[
            {
              no: "1",
              method: <>Dead load, single face</>,
              std: <>2,400 lb., one hour</>,
              result: <>Pass. Held 6,100 lb. before the floor objected.</>,
            },
            {
              no: "2",
              method: <>Free drop, 40 ft., onto plate steel</>,
              std: <>No deformation</>,
              result: <>Pass. The plate was replaced.</>,
            },
            {
              no: "3",
              method: <>Furnace, 1,900&deg;F, ninety minutes</>,
              std: <>No loss of form</>,
              result: <>Pass. Paint scheme reapplied. Cube unbothered.</>,
            },
            {
              no: "4",
              method: <>Immersion, brine, ninety days, Sub-Level 7</>,
              std: <>No ingress</>,
              result: <>Pass. There is nowhere for anything to ingress to.</>,
            },
            {
              no: "5",
              method: <>Transit of a quantum tunnelling aperture, 60 ft. separation</>,
              std: <>Arrival intact, correct mass</>,
              result: (
                <>
                  Pass. Ninety-one pounds in, ninety-one pounds out. See{" "}
                  <Link href="/products/quantum-tunnelling-device">Form ASI-202</Link>, trial 59-022.
                </>
              ),
            },
            {
              no: "6",
              method: <>Aerial faith plate, unballasted subject</>,
              std: <>Landing within the marked square</>,
              result: <>Pass. The square was repainted twice during trials and once afterwards.</>,
            },
            {
              no: "7",
              method: <>Two men, one cube, one flight of stairs</>,
              std: <>Cube undamaged</>,
              result: <>Pass. Men undamaged is not the standard and was not the result.</>,
            },
            {
              no: "8",
              method: <>Incineration, plant incinerator, full cycle</>,
              std: <>Complete disposal</>,
              result: (
                <>
                  Fail. Recovered whole from the ash pit at 0640. Not attempted since, by standing order of
                  this office.
                </>
              ),
            },
            {
              no: "11",
              method: <>Unattended overnight, Chamber 4, observation window manned</>,
              std: <>No standard exists</>,
              result: <Redacted reason="Struck from the trial record by Operations, 1957">Moved. Nobody moved it.</Redacted>,
            },
          ]}
          foot={
            <>
              Trials 9 and 10 concerned the marked variant and are held with the withdrawn drawings. Trial 11
              was conducted by an observer on his own initiative and without authorisation, and his employment
              was continued, and his trial was entered into the record, because a finding is a finding whoever
              has the poor manners to make it.
            </>
          }
        />

        <Marginalia>
          Manufacturing objects to the printing of trial 8, on the grounds that the incinerator is not a test
          apparatus and that the ash pit is not a result. The President has directed that trial 8 remain.
        </Marginalia>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section title="What The Cube Will Not Do">
        <Prose>
          <p>
            The following is the complete list, compiled by Manufacturing, revised by Legal, and shortened by
            me on the grounds that a product sheet is not a confession. Every item is ticked, because every
            item has been established by trial, which is more than most manufacturers can say about the back
            of their own catalogue.
          </p>
        </Prose>

        <Checklist
          items={[
            { text: "It will not roll, tip, wobble, settle, or find its own level.", checked: true },
            { text: "It will not open, part, unseam, or admit a blade.", checked: true },
            { text: "It will not burn at any temperature this company can presently produce.", checked: true },
            { text: "It will not corrode in brine, gel, coolant, or the atmosphere of Sub-Level 7.", checked: true },
            { text: "It will not conduct a quantum tunnelling field, which is why it is not made of substrate and why it costs twenty-eight dollars instead of the other figure.", checked: true },
            { text: "It will not hold a charge, a grudge, or a temperature.", checked: true },
            { text: "It will not speak. See the notice below. The notice below is not a joke and was not printed at my request.", checked: true },
            {
              text: (
                <>
                  It will not be left behind in a chamber at the close of a test cycle, and personnel are
                  reminded that the count at the door is a count of cubes as well as of men.
                </>
              ),
              checked: true,
            },
          ]}
        />
      </Section>

      <Notice head="The Enrichment Center Reminds You">
        The Weighted Storage Cube cannot speak. In the event that the Weighted Storage Cube does speak, the
        Enrichment Center reminds you that it cannot, that no apparatus in this facility is capable of
        speech, and that the correct procedure is to complete the chamber, hand in your equipment at the door,
        and take the sixty dollars.
      </Notice>

      {/* ------------------------------------------------------------- */}

      <Section title="The Marked Variant">
        <Prose>
          <p>
            In 1957 the Enrichment Center asked Manufacturing for a short run of cubes with a device painted
            on each of the six faces. The request came from Operations and the reason given, in writing, on a
            requisition I have in front of me, was that a chamber then under preparation required the subject
            to form an attachment to the cube in order that the chamber could later require him to stop.
          </p>
          <p>
            The run was produced. The chamber was run. The paperwork is in order and the variant is not in
            this catalogue, is not for sale, is not quoted, and is not to be discussed with visitors, the
            trade press, the Marquette Chamber of Commerce, or anybody at all from New Mexico. I am putting
            that in the product sheet rather than in a memorandum because a memorandum can be misplaced and a
            catalogue cannot.
          </p>
          <p>
            The variant is mechanically identical to the standard issue in every respect: same shell, same
            ballast, same ninety-one pounds, same six faces, same nothing inside. The only difference is the
            paint. I want that understood by every man who reads this sheet. <em>The only difference is the
            paint.</em>
          </p>
        </Prose>

        <Split weight="wide-right">
          <Plate
            number="2"
            tint
            caption={
              <>
                The device, reproduced from the 1957 stencil drawing. Withdrawn from the pattern shop the same
                year. The stencil itself has not been located.
              </>
            }
          >
            <Pictogram
              name="companion"
              size={120}
              title="The marked variant. Not in the catalogue."
              style={{ color: "var(--spot-red)" }}
            />
          </Plate>

          <Panel head="Variant 206-C &mdash; Withdrawn" tone="red">
            <SpecList
              rows={[
                { k: "Catalogue No.", v: <>None. It was never catalogued.</> },
                { k: "Produced", v: <Redacted reason="Figure withheld at the direction of the Office of the President">Eighty units. The order was for eighty.</Redacted> },
                { k: "Marking", v: "Six faces, one device, grease-resistant enamel" },
                { k: "Purpose", v: "Attachment, formation of" },
                { k: "Second purpose", v: <Redacted reason="Operations declines to restate the protocol in a public sheet">Attachment, termination of</Redacted> },
                { k: "Returned to store", v: "Seventy-nine" },
                { k: "Withdrawn", v: "November 1957" },
                { k: "Available", v: "No" },
              ]}
            />
          </Panel>
        </Split>

        <Memo
          to="Manufacturing, Sub-Level 2; Operations; Records"
          re="Variant 206-C, disposal of"
          date="4 November 1957"
          cc="Legal (for filing only)"
          stamp={<Stamp tone="black" angle="right">Withdrawn</Stamp>}
        >
          <p>
            The marked run is withdrawn as of this morning. The pattern is off the shop floor, the stencil is
            off the wall, and the drawing goes to Records with the withdrawn work and not to the store.
            Nobody paints a face on a cube in this building again without my initials on the requisition, and
            I am not going to initial one.
          </p>
          <p>
            I am told by Operations that the chamber produced excellent data and I do not doubt it. I have
            read the observation sheets. Eleven of eleven subjects completed the chamber. Nine of eleven asked
            a question at the door afterwards, which is nine more than usually ask anything at the door, and
            it was the same question, and I am not printing it.
          </p>
          <p>
            Manufacturing will confirm the count back into store by Friday and Records will file the
            confirmation. That is the end of the matter and I would like the whole building to hear how
            plainly I am saying so.
          </p>
        </Memo>

        <PenNote tone="red" angle={1.2}>
          Eighty went down. He signed the requisition for eighty. Manufacturing has confirmed seventy-nine and
          he has accepted seventy-nine and initialled it without reading it, which he does not do. Somebody
          knows where the eightieth is. &mdash; C.
        </PenNote>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Advert
        eyebrow="Aperture Science Innovators &mdash; Manufacturing Division"
        head="A Solved Problem, Delivered By Freight."
        burst="$28.00"
        burstSub="EACH, F.O.B."
        action="Complete Order Form ASI-299"
        href="/products/catalogue"
      >
        <p>
          Ninety-one pounds of pressed steel and poured ballast, twenty-six inches on every edge, rated to
          bear a tonne on any face and warranted against absolutely nothing happening to it. It will hold your
          button down, hold your door open, hold your tarpaulin flat in a February gale and hold its shape in
          a furnace at nineteen hundred degrees. It requires no maintenance, no lubrication, no inspection and
          no conversation. Eighteen thousand four hundred delivered since 1954. Crate of six, one hundred and
          fifty-eight dollars, and the crate will fail before the cube does.
        </p>
      </Advert>

      <Section title="Order Form &mdash; Model 206-W">
        <Coupon>
          <FormBlock>
            <Field label="Name of purchaser" />
            <Field label="Institution, works or command" />
            <Field label="Quantity, cubes" filled>
              6
            </Field>
            <Field label="Intended application (optional; we do not read this line)" />
            <Field label="Delivery address (not New Mexico)" />
          </FormBlock>

          <p className="ap-caps" style={{ fontSize: "0.6rem", marginTop: "1rem" }}>
            Finishes stocked
          </p>
          <Checklist
            items={[
              { text: "Enrichment Grey, plain — ships from stock", checked: true },
              { text: "Enrichment Grey, with corner bands — four weeks" },
              { text: "Unpainted, mill finish — six weeks, and it will mark your floor" },
              { text: "Marked faces — not offered. Do not enter this line." },
            ]}
          />

          <FinePrint>
            Terms: net thirty days. Freight from the Enrichment Center loading dock, Upper Peninsula, Michigan;
            purchaser to arrange handling at destination and to arrange rather more of it than he expects.
            Telephone {COMPANY.telephone}. Cable {COMPANY.cable}. Delivery to the State of New Mexico is not
            undertaken and enquiries from that State are filed without reply.
          </FinePrint>
        </Coupon>
      </Section>

      <ClearanceGate
        level={2}
        hint="Personnel holding a store key for Sub-Level 2 may read the appended note."
      >
        <Panel head="Store Note, Sub-Level 2 &mdash; Not For The Catalogue" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            The seventy-nine marked units are racked in the north bay under a tarpaulin and I have counted them
            myself, twice, in March, and the count is seventy-nine. I am not disputing the count. I am
            disputing the arithmetic that gets from eighty to seventy-nine and calls it a rounding. The
            eightieth is somewhere in this mine, it has a device painted on all six faces, and one day a
            Maintenance man is going to find it sitting in a place nobody put it, facing a wall, and he is
            going to write it up as a mislaid asset. It is not a mislaid asset. Somebody took it somewhere on
            purpose and I would very much like to know who was doing the taking. &mdash; C.
          </p>
        </Panel>
      </ClearanceGate>

      <Row>
        <Placard>Sub-Level 2 Store</Placard>
        <Placard tone="danger">Do Not Incinerate</Placard>
      </Row>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <FinePrint tiny>
        The Aperture Weighted Storage Cube is warranted for five years against cracking, seam failure, ballast
        shift and loss of mass. It is not warranted to store, contain, retain, shelter or preserve any article
        whatever, no such capability being claimed, implied or possible, and the word &ldquo;Storage&rdquo; in
        the trade name is a name and not a representation. The purchaser accepts that the cube is heavy; that
        it will remain heavy; that it is heavier at the bottom of a shaft than at the top on account of the
        distance involved; and that Aperture Science Innovators is not liable for injury arising from the
        cube being lifted, dropped, carried, thrown, stood upon, slept beside, spoken to, or addressed by
        name. Personnel who have formed an attachment to a unit should consult{" "}
        <Link href="/enrichment-center/safety">Form ASI-305</Link> and should not consult Medical. Prices are
        1959 prices. Form ASI-206. See also <Link href="/legal" style={{ whiteSpace: "nowrap" }}>Form ASI-900</Link>. Retain until superseded.
      </FinePrint>

      {/* Trial 11 was conducted on the night of 3 October 1957 by an observer named on no other sheet. */}
      {/* His sheet says the cube was four feet from where he left it and square to the window. */}
      {/* Eighty went down. Seventy-nine came back. The eightieth is not lost; a lost thing does not choose a corner. */}

      <Scrawl href="/vault/the-dens">
        it doesnt talk back but it doesnt leave either and thats more than anyone else down here has managed
      </Scrawl>

      <p>
        <Link className="ap-caps" style={{ fontSize: "0.68rem" }} href="/products/aerial-faith-plate">
          Next: the plate that throws a man across a room →
        </Link>
      </p>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Stamp, Panel, Notice, Rule, Row, FinePrint, Placard, PullQuote,
  Marginalia, Aside, Coupon, Split, Columns,
} from "@/components/Print";
import { Memo, PenNote } from "@/components/Memo";
import { FigureTable, SpecList, Plate, KeyFigures } from "@/components/Data";
import { FormBlock, Field, Checklist } from "@/components/Form";
import { Advert } from "@/components/Ad";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "The Material Emancipation Grill",
  description:
    "A doorway that relieves a man of anything he ought not to be carrying out of a test chamber, in the order in which the company came to understand what carrying means.",
};

export default function Page() {
  const { prev, next } = neighbours("/products/material-emancipation-grill");

  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/products", label: "Products" },
          { label: "Emancipation Grill" },
        ]}
      />

      <DocHead
        doc="ASI-209"
        department="Applied Sciences"
        classification="Unrestricted. Dental advisory appended."
        revision="Fourth printing. Schedule of Classes extended to five."
      />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="One direction, once daily">
          Pass Once
        </Stamp>
        <PageTitle
          advertising
          kicker={<>Applied Sciences &mdash; Chamber Fittings</>}
          title="The Material Emancipation Grill"
          deck={
            <>
              A doorway with a standing objection. The man goes through. What the man is carrying does not,
              and the schedule of what constitutes carrying has been revised three times, upward, each time
              by the grill.
            </>
          }
          byline={
            <>
              Dictated by <b>Cave Johnson</b>, President &amp; Founder. Class schedule supplied by Applied
              Sciences. Class IV supplied by the Medical Department, unasked.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            Every test chamber in Test Shaft 09 has two doors and I have never had a moment&rsquo;s worry
            about the first one. The trouble is the second. A man finishes a chamber, and a man who has
            finished a chamber has in his hand a piece of the chamber, because that is what men are, and by
            Thursday you have a warehouse full of nothing and a volunteer in Marquette with a portable
            aperture in his coat pocket showing it to a barman.
          </Lede>
          <p>
            So we hung a grill in the doorway. It is a fluted lattice of ground lunar substrate in a steel
            frame, it draws eleven kilowatts, it hums at a pitch the commissary can hear through two floors,
            and it takes off a man anything the chamber wants back. He does not stop. He does not turn out
            his pockets. He walks through the door at his own pace whistling whatever he has been whistling,
            and the cube he was carrying is on the floor behind him, and he does not always notice, and
            noticing is not required.
          </p>
          <p>
            We call it emancipation because that is what it is. The object is freed of the man. Legal
            preferred &ldquo;recovery&rdquo; and Legal was outvoted by me, which is how voting works in this
            building. The lab boys call it the grill, the volunteers call it the buzzer, and one man in
            Materials calls it the collection plate, and I have not stopped him, because he is right.
          </p>
          <p>
            Now. I am going to set out on this sheet, in order, what the grill has been observed to consider
            an object. I want you to read the list in the order printed. It was written in that order. It
            was not written all at once.
          </p>
        </Prose>

        <Stack>
          <Plate
            number="1"
            caption={
              <>
                Grill, chamber pattern, seven bars. Applied Sciences has never photographed the field, only
                the frame, and the file note on why runs to two pages and no photograph.
              </>
            }
            tint
          >
            <Pictogram
              name="grill"
              size={120}
              title="Material emancipation grill, chamber pattern"
              style={{ color: "var(--spot-blue)" }}
            />
          </Plate>

          <Row>
            <Placard>Leave It In The Room</Placard>
            <Placard tone="warn">Pass Once Only</Placard>
            <Placard tone="danger">Do Not Reach Back Through</Placard>
          </Row>
        </Stack>
      </Split>

      <KeyFigures
        items={[
          { value: "41", label: "Grills in service", note: "Shafts 04 and 09. Trials began in Shaft 04, 1951." },
          { value: "11 kW", label: "Standing draw, each", note: "Continuous. The grill is never switched off." },
          { value: "9,340", label: "Items in lost property", note: "Since 1954. Sorted by class, not by owner." },
          { value: "0", label: "Objects carried out of Shaft 09", note: "Since the grills were fitted. This is the product." },
        ]}
      />

      {/* ------------------------------------------------------------- */}

      <Section title="Specification">
        <SpecList
          rows={[
            { k: "Designation", v: "Grill, Material Emancipation, chamber pattern. Applied Sciences No. 209." },
            { k: "Aperture", v: "Thirty-six inches wide, eighty-four inches high. One man, unhurried, with his hat on." },
            { k: "Bars", v: "Seven, horizontal, fluted. Nine on the freight pattern. Never an even number; ask Applied Sciences why and set an afternoon aside." },
            {
              k: "Active medium",
              v: (
                <>
                  Ground lunar substrate, sealed. See{" "}
                  <Link href="/products/conversion-gel">Form ASI-205</Link>. The seal is the expensive part
                  and the seal is not optional.
                </>
              ),
            },
            { k: "Draw", v: "11 kilowatts standing. The grill has no off position and no switch to look for." },
            { k: "Transit time", v: "One second and a half at a walk. Faster if you run, which is not faster." },
            { k: "Direction", v: "One. The grill is fitted to the far door and only to the far door." },
            {
              k: "Recovery",
              v: (
                <>
                  Objects fall to a tray on the chamber side. The tray is emptied nightly into lost property,
                  Sub-Level 3, and lost property is open Tuesdays.
                </>
              ),
            },
            {
              k: "Selectivity",
              v: (
                <>
                  Excellent, within Classes I through III. Applied Sciences describes it as{" "}
                  <i>improving</i>, which is the department&rsquo;s word and not mine.
                </>
              ),
            },
            { k: "Personnel rating", v: "One transit per person per day. See the Notice below, which is on this sheet because it had to be." },
            { k: "Fitted price", v: "$2,410.00 the chamber pattern; $3,180.00 the freight pattern. Substrate charged separately at the price on Form ASI-205." },
            { k: "Guarantee", v: "The grill will take the object. That is the whole of the guarantee and it has never been claimed against." },
          ]}
        />
      </Section>

      <PullQuote big attribution="The President, to Applied Sciences, 1956">
        I did not ask you to search him. I asked you to build a door he cannot carry anything through.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="The Schedule Of Classes">
        <Prose>
          <p>
            When Applied Sciences hung the first grill in Shaft 04 in 1951 they wrote a list of what it
            would take, and the list had one line on it, and the line said <i>test apparatus</i>. That is
            Class I. Everything below Class I was added afterwards, by observation, which is a polite way of
            saying that a man walked through a doorway and something happened that was not on the list and
            somebody wrote it down.
          </p>
        </Prose>

        <FigureTable
          caption="Schedule of Classes, as revised. Applied Sciences, current to March 1959."
          columns={[
            { key: "cls", head: "Class", width: "4.5rem" },
            { key: "added", head: "Added", numeric: true, width: "5rem" },
            { key: "what", head: "Constitutes an object" },
            { key: "note", head: "Departmental note" },
          ]}
          rows={[
            {
              cls: "I",
              added: "1951",
              what: "Test apparatus. Cubes, spheres, hand tools, the portable device, chamber signage.",
              note: "The class the grill was built for. Behaves perfectly.",
            },
            {
              cls: "II",
              added: "1952",
              what: "Personal metal. Coins, keys, wristwatches, spectacle frames, wedding rings, a hip flask.",
              note: "Returned on application at lost property, Sub-Level 3, Tuesdays.",
            },
            {
              cls: "III",
              added: "1954",
              what: "Fastenings. Buttons, buckles, hooks and eyes, zip fasteners, braces, boot eyelets.",
              note: "The Commissary now keeps a tin of safety pins by the elevator. Take two.",
            },
            {
              cls: "IV",
              added: "1957",
              what: "Dental. Amalgam fillings, gold inlays, bridgework, plates, pins, and one crown of the volunteer’s own manufacture.",
              note: (
                <>
                  Added by Medical over the objection of Applied Sciences, who held that a filling is part of
                  a man. The grill held otherwise. See the advisory below.
                </>
              ),
            },
            {
              cls: "V",
              added: "1959",
              what: (
                <Redacted reason="Class V withheld from the printed sheet pending the department’s definition of ‘carrying’">
                  Matter which Applied Sciences classes as carried and which Medical classes as the
                  volunteer. Four instances since January. Three of the four men completed the afternoon and
                  went home and could not afterwards say what had been taken, only that something had, and
                  the tray agrees with them.
                </Redacted>
              ),
              note: "Under review. The review is being conducted by the department that wrote the class.",
            },
          ]}
          foot="Classes are cumulative and have only ever been added to. Applied Sciences has never removed a class and has been asked twice whether it could."
        />
      </Section>

      <Marginalia>
        Sales would like it recorded that a customer buying the grill for a warehouse is buying Class I and
        is under no obligation to read past it. Sales has been told that the sheet prints in one piece.
      </Marginalia>

      <Notice head="The Enrichment Center Reminds You">
        The emancipation grill is not to be walked through twice. Once is the rating. Personnel who have
        passed through a grill and find that they have left something on the far side are reminded that they
        have not: the object is on <i>this</i> side, in the tray, where the grill put it. Personnel who go
        back for it and return a second time through the same grill in the same afternoon are asked to
        report to Medical, and are asked to report there <i>on foot</i>, and are asked not to stop at the
        commissary first.
      </Notice>

      {/* ------------------------------------------------------------- */}

      <Section title="The Dental Advisory">
        <Split weight="even">
          <Prose>
            <p>
              In November of 1957 a gentleman from Escanaba, a fine volunteer, a former sergeant, walked out
              of Chamber 6 in Shaft 09 with a wristwatch, a bunch of keys, a wedding ring and eleven
              amalgam fillings on the floor behind him and no idea whatsoever that anything had occurred.
              We gave him back the ring. The rest is in the tray. He asked for a cup of coffee and got one.
            </p>
            <p>
              Medical wrote me a memorandum about it and Medical was extremely put out, and I read the
              memorandum twice and then I did the arithmetic that Medical had not done, which is that this
              company now had a dental problem of exactly the size it could afford to fix. So we fixed it.
              That is the origin of the finest dental plan in the Upper Peninsula, it covers every man,
              woman and volunteer who goes below the surface, and it is described in full on{" "}
              <Link href="/careers/benefits">Form ASI-502</Link>, and I am proud of it, and I will not have
              it called compensation.
            </p>
            <p>
              The advisory itself is short. Come to the gate with your mouth as the good Lord left it, or
              come to the gate having told the man at the gate what is in it. He has held that job since
              1951 and he has heard worse.
            </p>
          </Prose>

          <Stack>
            <Panel head="Before You Enter A Chamber" tone="tint">
              <Checklist
                items={[
                  { text: "Wristwatch, keys and coin left at the gate house.", checked: true },
                  { text: "Wedding ring left at the gate house, or declared.", checked: true },
                  { text: "Dental work declared to the man at the gate.", checked: true },
                  { text: "Spectacles: one spare pair lodged with the observation room.", checked: true },
                  { text: "Braces exchanged for the Enrichment Center belt. Buttons are Class III." },
                  { text: "Anything you would be sorry to see in a tray." },
                ]}
              />
            </Panel>

            <PenNote tone="pencil" angle={-1.5}>
              Drawer 4 in lost property has been full since 1957 and I have stopped writing to next of kin,
              because three of the letters came back marked no such person at that address and one came back
              opened. If somebody in Applied Sciences will tell me whose the small things are I will do the
              letters myself, on my own time, and I will not put it through Accounting. &mdash; C.
            </PenNote>
          </Stack>
        </Split>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section title="Installations & Industrial Use">
        <Prose>
          <p>
            Forty-one grills are presently in service, thirty-four of them in Shaft 09 and the remainder in
            Shaft 04, where the trials were run and where two of the original 1951 frames are still hung and
            still drawing. Outside this company the grill sells to any concern that has a gate and a
            reason to doubt what goes through it: tool rooms, bonded stores, assay offices, one bank in
            Milwaukee, and a mint I am not permitted to name on a sheet that leaves the building.
          </p>
        </Prose>

        <FigureTable
          caption="Grills in service and material recovered, by location. Quarter ended March 1959."
          columns={[
            { key: "where", head: "Location" },
            { key: "n", head: "Grills", numeric: true, width: "5rem" },
            { key: "items", head: "Items recovered", numeric: true },
            { key: "note", head: "Note" },
          ]}
          rows={[
            { where: "Shaft 09, chamber doors", n: "31", items: "2,904", note: "Chiefly Class I. The product working as sold." },
            { where: "Shaft 09, Chamber 6", n: "1", items: "418", note: "Classes I to IV. The chamber with the cube and the button." },
            {
              where: "Shaft 09, Chamber 8",
              n: "1",
              items: "77",
              note: (
                <>
                  Nothing has been sent through Chamber 8 this quarter. The tray is emptied nightly all the
                  same and it is not empty.
                </>
              ),
            },
            { where: "Shaft 09, elevator lobby", n: "1", items: "61", note: "Fitted at my instruction after the barman in Marquette." },
            { where: "Shaft 04, emancipation corridor", n: "5", items: "1,190", note: "Two frames of 1951 manufacture. Corridor has two clocks and they have never agreed." },
            { where: "Sub-Level 3, lost property (outward door)", n: "1", items: "8", note: "Fitted 1958. Applied Sciences has been asked to explain the eight and has not." },
            { where: "Customer installations, all territories", n: "—", items: "Not reported to us", note: "Nor should it be. See the fine print." },
          ]}
          foot="Recovered items are logged by class and by chamber. They are not logged by owner. The company has never held that an emancipated object had an owner at the moment of emancipation."
        />

        <Memo
          to="Office of the President"
          from="Applied Sciences"
          re={<>Grill No. 41 &mdash; the Chamber 8 fitting; standing draw</>}
          date="27 March 1959"
          cc="Operations. Medical, for information."
          sign={false}
        >
          <p>
            The Division confirms that the grill at the Chamber 8 door has been continuously energised since
            its fitting in August 1958 and that no test has been scheduled through that door in the
            intervening period.
          </p>
          <p>
            The Division records that the tray beneath it has been emptied on one hundred and ninety-four
            occasions and has not on any occasion been found empty. The Division has catalogued the
            recovered material by class where a class applies. Seventy-seven items are held. Fourteen of the
            seventy-seven are Class III.
          </p>
          <p>
            The Division requests authorisation to de-energise the fitting for one hour, at a time of the
            President&rsquo;s choosing, with the corridor cleared, in order to establish what the door does
            when the grill is not in it.
          </p>
        </Memo>

        <PenNote tone="red" angle={1.2}>
          Denied. It stays lit. Empty the tray and stop counting the buttons. &mdash; CJ
        </PenNote>
      </Section>

      <Aside>
        Applied Sciences has continued counting the buttons. The President has been shown the count. The
        instruction is unchanged and so is the count.
      </Aside>

      {/* ------------------------------------------------------------- */}

      <ClearanceGate
        level={3}
        hint="Associate grade or above. The following paragraph is not in the customer’s copy of this sheet."
      >
        <Panel head="Applied Sciences — Working Note, Not For The Trade Copy" tone="red">
          <Prose>
            <p>
              The grill does not detect metal. It has never detected metal. It compares what passes through
              the plane against a register of what the chamber holds, and it removes the difference, and the
              register is written by the chamber and not by us. Class IV was not a change in the fitting. It
              was a change in the register. We do not know who revised it. We know when: eleven March, the
              afternoon Shaft 09 opened, between the second and the third descent, whilst the elevator was
              between floors and nobody at all was on the level.
            </p>
          </Prose>
        </Panel>
      </ClearanceGate>

      {/* ------------------------------------------------------------- */}

      <Advert
        eyebrow={<>Applied Sciences &mdash; Chamber Fittings</>}
        head="Nothing Leaves. Everybody Does."
        burst="ONE"
        burstSub="TRANSIT"
        action={<>Order by the doorway &mdash; Form ASI-299</>}
        href="/products/catalogue"
      >
        <p>
          Tool rooms. Bonded stores. Assay floors. Pay sheds. Wherever a man walks out at the whistle with
          more than he walked in with, the Material Emancipation Grill hangs in the doorway and settles the
          matter without a word said, without a hand laid on him, and without one minute lost from the
          shift.
        </p>
        <p>
          Twenty-four hundred and ten dollars fitted. Eleven kilowatts. Seven bars. Aperture Science
          Innovators has forty-one of them in its own plant and has not lost so much as a spanner since
          1951, and the men have got used to it, and so will yours.
        </p>
      </Advert>

      <Coupon>
        <p className="ap-caps" style={{ fontSize: "0.66rem", margin: "0 0 0.5rem", color: "var(--spot-orange)" }}>
          Cut Here &mdash; Lost Property, Sub-Level 3, Tuesdays Only
        </p>
        <p style={{ fontFamily: "var(--font-ad)", fontSize: "var(--step-3)", lineHeight: 1.02, margin: "0 0 0.6rem" }}>
          Claim Of Recovered Property.
        </p>
        <FormBlock>
          <Field label="Name of claimant" />
          <Field label="Chamber and date of transit" />
          <Field label="Article claimed" />
          <Field label="Class, if known" filled>
            (I to IV. Class V articles are not issued over the counter.)
          </Field>
          <Field label="Grounds of claim" filled>
            (that it was yours when you went in is sufficient. It is not conclusive.)
          </Field>
        </FormBlock>
        <FinePrint>
          Articles unclaimed after one year pass to the company. Articles which cannot be matched to a
          transit are held in Drawer 4 and are not advertised.
        </FinePrint>
      </Coupon>

      <Rule variant="double" />

      <Columns count={2}>
        <Panel head="What The Grill Will Not Take" tone="rule">
          <Prose>
            <ul>
              <li>Clothing, entire. Fastenings only, which is worse.</li>
              <li>Paper, ink, and the chamber log, which is why the log walks out and the pen does not.</li>
              <li>Water, coffee, and the commissary sandwich.</li>
              <li>Anything the chamber does not have a register entry for, which is the whole world outside the door.</li>
              <li>The volunteer.</li>
            </ul>
          </Prose>
        </Panel>

        <Panel head="Posted At Every Grilled Doorway" tone="tint">
          <Prose>
            <ul>
              <li>One transit. One direction. One man at a time.</li>
              <li>Do not stop in the plane of the bars.</li>
              <li>Do not reach back through for it. It is not yours on that side.</li>
              <li>Do not pass an object to another man through the bars.</li>
              <li>If the hum changes pitch, keep walking.</li>
            </ul>
          </Prose>
        </Panel>
      </Columns>

      <FinePrint>
        The Material Emancipation Grill is sold as an industrial fitting and not as a security device, a
        medical device, or a device of any kind having a bearing upon the person. The company makes no
        representation as to what the fitting will class as an object in the customer&rsquo;s premises,
        the classification being a property of the premises and not of the fitting. Title in any article
        emancipated passes to the operator of the fitting at the moment of emancipation and does not revert.
        Personnel and volunteers are rated for one transit in twenty-four hours; the company has no
        published position on a second transit and has declined, in writing, to develop one. Dental
        provision under Form ASI-502 is a benefit of employment and is not an admission. All claims under{" "}
        <Link href="/legal">Form ASI-900</Link>, which the claimant is deemed to have read.
      </FinePrint>

      {/* Fourteen of the seventy-seven items in the Chamber 8 tray are Class III. */}
      {/* Buttons come off a coat. Nobody has sent a coat through that door since August. */}

      <Scrawl href="/vault/the-dens">
        the tray under eight fills up on its own. somebody down there is losing buttons and its not any of us
      </Scrawl>

      <p>
        <Link className="ap-caps" style={{ fontSize: "0.68rem" }} href="/enrichment-center/chambers">
          See also: the signage at every chamber door &rarr;
        </Link>
      </p>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

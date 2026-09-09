import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Aside, Split, Row, Coupon,
} from "@/components/Print";
import { Memo, Signature, PenNote } from "@/components/Memo";
import { FigureTable, SpecList, Plate, KeyFigures } from "@/components/Data";
import { FormBlock, Field, Checklist } from "@/components/Form";
import { Advert } from "@/components/Ad";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "The Pneumatic Diversity Vent",
  description:
    "Form ASI-208. A tube, a blower and ninety miles an hour: the fastest way to move a document, a casting, a crate or &mdash; on one occasion this company has stopped apologising for &mdash; a member of staff.",
};

export default function Page() {
  const { prev, next } = neighbours("/products/pneumatic-diversity-vent");

  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/products", label: "Products" },
          { label: "Diversity Vent" },
        ]}
      />

      <DocHead
        doc="ASI-208"
        department="Facilities"
        classification="Unrestricted"
        revision="Sixth printing. Schedule of recoveries brought up to 1 April 1959."
        extra={[{ label: "Bore", value: "24 in. standard" }]}
      />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="Ninety miles per hour">
          In Service
        </Stamp>
        <PageTitle
          advertising
          kicker={<>Facilities Division &mdash; Conveyance &amp; Materials Handling</>}
          title="The Pneumatic Diversity Vent"
          deck={
            <>
              A tube, a blower and a hole in the wall at the far end. You put a thing in. Ninety miles an
              hour later the thing is somewhere else. The vent has no opinion whatever about what the thing
              was, and that is the whole of the invention.
            </>
          }
          byline={
            <>
              Dictated by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}. Figures certified by the
              Facilities Division. Schedule of recoveries compiled, under protest, by Records &amp; Filing.
            </>
          }
        />
      </div>

      <KeyFigures
        items={[
          { value: "90", label: "Miles per hour", note: "At every bore, at every load" },
          { value: "24 in.", label: "Standard trunk bore", note: "Larger to order" },
          { value: "1,188 ft.", label: "Longest run in this plant", note: "Second floor to Sub-Level 4" },
          { value: "9 sec.", label: "Transit, that run", note: "Door to door" },
          { value: "$4.15", label: "Per running foot", note: "Trunk tube, delivered" },
        ]}
      />

      <Split weight="wide-left">
        <Prose>
          <Lede>
            Every plant in America has the same disease and every plant in America has decided to live with
            it. A man picks a thing up at one end of a building and he carries it to the other end of the
            building, and for the whole of that walk he is a wage being spent on a corridor. We do not have
            that disease here. We cured it in 1955 with a length of tube, a blower the size of a bull and a
            decision nobody has been permitted to revisit.
          </Lede>
          <p>
            The Pneumatic Diversity Vent is a sealed steel tube of twenty-four inch bore. At the sending end
            there is a hatch. At the far end there is a terminus. Between the two there is a column of moving
            air at four and a half pounds to the square inch, and anything you place in that column arrives
            at the terminus at ninety miles an hour. Not approximately ninety. Ninety. The velocity is set by
            the blower and the blower does not consult the cargo.
          </p>

          <h2>Why It Is Called Diversity</h2>
          <p>
            Sales asked me to change the name. Sales has asked me to change the name four times. The name is
            correct and the name is staying, and here is the reason, and Sales may cut this paragraph out and
            paste it inside the lid of the sample case.
          </p>
          <p>
            A chute carries coal. A conveyor carries crates. A dumb-waiter carries a tray, and it carries the
            tray at the speed of the boy on the rope. Every one of those machines was designed around a cargo
            and every one of them fails the moment you hand it a cargo it was not designed around. This
            machine was designed around <i>nothing</i>. It is indifferent. Put in a ledger, a ball bearing, a
            drum of Repulsion Gel, forty pounds of ground lunar substrate, a hat, a sandwich, a cat, a
            two-hundred-page contract the size of a phone book, or the man who typed it. The vent moves all
            of them at ninety miles an hour, with an even hand, and asks you nothing. That is diversity. That
            is what the word means. I have looked it up, which is more than Sales has done.
          </p>

          <h2>Where To Put One</h2>
          <p>
            Warehouses. Granaries. Department stores &mdash; a receipt from the fourth floor to the counting
            house in under two seconds and the customer still buttoning his coat. Hospitals, where we have
            eleven installations and where the specimen work is very well thought of. Foundries. Newspaper
            composing rooms, which took to it faster than any trade we have sold to. Any building in which a
            man is presently walking, and by walking, costing you money.
          </p>
          <p>
            It goes in against the ceiling on standard hangers, it takes a bend of no less than nine feet
            radius, and it will run vertically for as long as your building is tall and then a good deal
            further, which we know because ours runs four thousand feet down and has never once had to be
            persuaded.
          </p>

          <h2>The Diverter</h2>
          <p>
            The junction is the clever part and it is the part I want you to buy. A diverter is a cast steel
            Y with a vane in it, thrown by a solenoid off a push-button at the sending hatch. One trunk, nine
            destinations, one man, no thought. Set the button, drop the item, the vane throws, the item goes.
          </p>
          <p>
            The vane throws in one hundred and ten milliseconds. An item travelling at ninety miles an hour
            covers fourteen and a half feet in that time. The Facilities Division would like the customer to
            understand that these two figures are the entire engineering of this product and that nearly
            every difficulty ever reported to us is one or the other of them arriving late. Set the button{" "}
            <i>first</i>. It is on every placard we have ever screwed to a wall and it is the only
            instruction the vent has.
          </p>
        </Prose>

        <Stack>
          <Plate
            number="1"
            caption={
              <>
                Trunk, hanger and diverter junction, twenty-four inch bore. The terminus is shown at the
                customary height of four feet two inches, which is the height of a sorting table, which is a
                coincidence this company has had four years to think about.
              </>
            }
            tint
          >
            <Pictogram
              name="fling"
              size={120}
              title="An item in transit through the vent"
              style={{ color: "var(--spot-blue)" }}
            />
          </Plate>

          <Panel head="Specification &mdash; Model 208-T" tone="tint">
            <SpecList
              rows={[
                { k: "Bore", v: "24 in. standard; 30 in. and 42 in. to order" },
                { k: "Velocity", v: "90 m.p.h., loaded or empty" },
                { k: "Working pressure", v: "4.5 lb. per sq. in., blower continuous" },
                { k: "Minimum bend", v: "9 ft. radius. Tighter bends are sold; they are not recommended." },
                { k: "Maximum run", v: "Not established. Our own is 4,000 ft. vertical." },
                { k: "Diverter throw", v: "110 milliseconds" },
                { k: "Maximum payload", v: "240 lb." },
                {
                  k: "Payload note",
                  v: (
                    <Redacted reason="Facilities Division — engineering note, not for the sample case">
                      Two hundred and forty pounds is the average American male plus a winter coat. This was
                      not an accident of the design. It was a specification.
                    </Redacted>
                  ),
                },
                { k: "Terminus height", v: "4 ft. 2 in. above finished floor" },
                { k: "Blower", v: "Aperture 9-series, 40 h.p., no user-serviceable parts" },
                { k: "Noise", v: "Considerable. Customers report they stop hearing it by the third week." },
              ]}
            />
          </Panel>

          <Row style={{ gap: "0.5rem", flexWrap: "wrap" }}>
            <Placard>Set The Button First</Placard>
            <Placard tone="warn">Vent Live &mdash; Both Directions</Placard>
            <Placard tone="danger">Feet First Or Not At All</Placard>
          </Row>

          <Aside>
            The third placard was ordered by Maintenance in December 1955 and has never been approved by any
            department. Facilities has decided not to enquire which of the two possibilities it was written
            to prevent.
          </Aside>

          <PenNote tone="pencil" angle={-1.5}>
            He measured the bore himself, in the shop, with his own rule, and then he stood in front of it
            for a while with his coat off. I have moved the sending hatch on the third floor and I have not
            told him why. If anybody asks, it was for the hangers. &mdash; C.
          </PenNote>
        </Stack>
      </Split>

      <PullQuote big attribution={`${COMPANY.founder}, to the Facilities Division, 1955`}>
        A machine that asks what you are putting into it is a machine that has already wasted your morning.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="Performance, By Cargo">
        <FigureTable
          caption={
            <>
              Trials conducted on the Sub-Level 2 test loop, 1957&ndash;58, twenty runs to each entry.
              Velocity is fixed by the blower and does not vary with the cargo; the columns that vary are the
              ones after it.
            </>
          }
          columns={[
            { key: "cargo", head: "Cargo" },
            { key: "mass", head: "Mass", numeric: true, width: "6rem" },
            { key: "vel", head: "Velocity", numeric: true, width: "6rem" },
            { key: "arr", head: "Arriving intact", numeric: true, width: "7rem" },
            { key: "note", head: "Facilities note" },
          ]}
          rows={[
            { cargo: "Ball bearing, 2 in.", mass: "1.1 lb.", vel: "90 m.p.h.", arr: "100%", note: "The terminus plate is a consumable. Order spares." },
            { cargo: "Ledger, bound", mass: "6 lb.", vel: "90 m.p.h.", arr: "97%", note: "Bound work travels. Loose work does not." },
            { cargo: "Correspondence, loose sheet", mass: "0.02 lb.", vel: "90 m.p.h.", arr: "41%", note: <>See <Link href="/the-company/correspondence">Form ASI-108</Link>. Records is still at the light table.</> },
            { cargo: "Casting, iron, crated", mass: "180 lb.", vel: "90 m.p.h.", arr: "100%", note: "The crate does not arrive intact. The casting does not care." },
            { cargo: "Pail of emulsion, lidded", mass: "44 lb.", vel: "90 m.p.h.", arr: "12%", note: "Lidded is a claim made by the lid, not by us." },
            { cargo: "Sandwich, commissary", mass: "0.6 lb.", vel: "90 m.p.h.", arr: "0%", note: "Twenty runs. Twenty. Materials has asked to be given the problem." },
            { cargo: "Wire screen, terminus guard", mass: "31 lb.", vel: "90 m.p.h.", arr: "—", note: "Fitted April 1957. Recovered June 1957, Sub-Level 6." },
            { cargo: "Personnel, one", mass: "168 lb.", vel: "90 m.p.h.", arr: "100%", note: "Entry unauthorised. Result recorded. Both of those are true." },
          ]}
          foot={
            <>
              The Facilities Division wishes it recorded that the eighth row was not a trial, was not
              scheduled, and appears in this table only because the President read the seven rows above it
              and said that a table with a gap in it is a lie with a ruling on it.
            </>
          }
        />
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section title="Recovered From The Vent">
        <Prose>
          <p>
            Every pneumatic system in the world has a sump, and every sump has a drawer beside it, and the
            drawer is the honest part of the machine. Ours is at the foot of the Sub-Level 4 terminus. What
            follows is the drawer, printed, because I am told competitors do not print theirs and I would
            like the trade to notice which of us is embarrassed.
          </p>
        </Prose>

        <FigureTable
          caption="Items recovered from the Sub-Level 4 sump and the diverter galleries, 1955 to 1 April 1959, as entered by Records & Filing."
          columns={[
            { key: "item", head: "Item recovered" },
            { key: "n", head: "No.", numeric: true, width: "5rem" },
            { key: "date", head: "Recovered", width: "9rem" },
            { key: "cond", head: "Condition on recovery" },
          ]}
          rows={[
            { item: "Correspondence, fragments", n: "9,041", date: "Continuous", cond: "Sorted by fragment. Two in five reassembled." },
            { item: "Punch cards, Computation", n: "1,860", date: "Continuous", cond: "Legible. Out of order. Computation says this is worse." },
            { item: "Spectacles, wire", n: "14", date: "1955–1959", cond: "Six pairs claimed. Eight pairs unclaimed and undamaged." },
            { item: "Wire terminus guard", n: "1", date: "June 1957", cond: "Sub-Level 6. Bolts still in it. Wall not still in it." },
            { item: "Bowling ball, league", n: "1", date: "March 1958", cond: "Excellent. Returned to the league. Retired from play." },
            { item: "Weighted Storage Cube", n: "1", date: "August 1958", cond: <>Unmarked faces. Undamaged. The cube is <i>always</i> undamaged.</> },
            { item: "Hat, homburg, grey", n: "3", date: "1956–1958", cond: "One is the President's. He has not asked for it back." },
            { item: "Personnel, one, initials H.M.K.", n: "1", date: "12 October 1958", cond: "Ambulatory. Talkative. Paid $60 from the tin and sent home in a company car." },
            { item: "Personnel, one, initials H.M.K.", n: "1", date: "3 December 1958", cond: "Ambulatory. Not talkative. Not scheduled. Not sent for." },
            {
              item: "Item recovered 14 November 1958",
              n: "1",
              date: "14 November 1958",
              cond: (
                <Redacted reason="Records & Filing declines to describe this entry a second time">
                  Records states that the item was not an item. Facilities states that the vent was not
                  running. Both departments have been asked to choose and neither will.
                </Redacted>
              ),
            },
          ]}
          foot={
            <>
              Records &amp; Filing has appended a standing note to this schedule which reads, in its
              entirety: &ldquo;The eighth and ninth lines are the same gentleman. The Facilities Division has
              been asked to confirm this and has confirmed it. Records is not satisfied and has said so on
              four occasions.&rdquo;
            </>
          }
        />
      </Section>

      <Marginalia>
        The gentleman with the initials was, on the first occasion, an employee of Accounting who leaned into
        an open hatch on the second floor to see where the noise went. He is on the payroll to-day, he is
        well, and he has asked twice for a transcript of the schedule above. It has twice been refused, which
        is Records&rsquo; decision and not mine.
      </Marginalia>

      {/* ------------------------------------------------------------- */}

      <Section title="Our Own Installation, Candidly">
        <Prose>
          <p>
            I will not sell a machine I have not lived with. In the spring of 1955 this company connected the
            mail room on the second floor to the Sub-Level 4 sorting floor: eleven hundred and eighty-eight
            feet of trunk, one diverter, nine seconds end to end, and a day of walking abolished before
            lunch. The arithmetic was right in 1955 and it is right in 1959, and it has cost this company a
            screen, a wall, four requests for disconnection and a certain amount of goodwill from a
            department on the second floor which I hold in the highest regard and intend to keep overruling.
          </p>
          <p>
            The full account is on{" "}
            <Link href="/the-company/correspondence">Form ASI-108, Correspondence</Link>, which Records
            wrote and which I have not edited beyond removing one adjective. Read it before you order. If a
            man is going to buy a thing from me I would rather he bought it with his eyes open, because the
            one thing worse than a customer who is surprised is a customer who is surprised in writing.
          </p>
        </Prose>

        <Memo
          to={<>Mr. C. Lamb, Maintenance</>}
          from={<>Facilities Division</>}
          re="Terminus, mail-room — screen, second fitting of"
          date="17 November 1958"
          cc="Records & Filing; Office of the President"
          sign={false}
        >
          <p>
            Maintenance is instructed to refit the terminus screen at the mail-room discharge and to bolt it
            through the wall plate rather than to the flange, the flange having been the point of failure in
            June 1957. Facilities has costed the work at eleven dollars and an afternoon.
          </p>
          <p>
            Maintenance is further instructed that the screen is to be fitted on the morning of the
            nineteenth and not on the morning of the eighteenth, the vent being scheduled down on the
            eighteenth for the annual inspection of the Sub-Level 4 gallery. The gallery inspection of
            November 1957 is not to be repeated in any particular.
          </p>
          <p>
            Facilities notes, for the file only, that this department has no explanation for the item
            recovered on the fourteenth and has stopped seeking one. The blower log for that morning shows
            the machine stopped from 0400 to 0730. The terminus discharged at 0641. Facilities has checked
            the log twice, has had the log checked by a second man, and now proposes to file it.
          </p>
        </Memo>

        <PenNote tone="red" angle={1.2}>
          Fit it Wednesday. Fit it Thursday. Fit it twice. But that blower log stays in the drawer and does
          not go up to the third floor, because he will want to try it. &mdash; C.
        </PenNote>
      </Section>

      <Notice head="The Enrichment Center Reminds You">
        The pneumatic diversity vent is not a slide, is not a shortcut, is not a means of avoiding the
        elevator and is not a means of leaving. Personnel are conveyed by stair, by elevator and by company
        car. Personnel who elect to be conveyed by vent will arrive, and will be classified on arrival as
        freight.
      </Notice>

      {/* ------------------------------------------------------------- */}

      <Advert
        eyebrow={<>Facilities Division &mdash; Conveyance &amp; Materials Handling</>}
        head="Why Is Your Best Man Walking?"
        burst="NINE"
        burstSub="SECONDS"
        action={<>Order by the foot &mdash; Form ASI-299</>}
        href="/products/catalogue"
      >
        <p>
          Four dollars and fifteen cents the running foot, delivered anywhere in the continental United
          States. Three hundred and twelve dollars the diverter junction. One thousand eight hundred and
          ninety dollars the blower, which will outlive your building. Installed by our own men in a
          fortnight, in your plant, over a weekend if the weekend is what you have.
        </p>
        <p>
          Eleven hospitals. Forty-one warehouses. Two newspapers of national circulation. One salt mine of
          four thousand feet, in which the longest single run in North America is presently moving somebody
          else&rsquo;s mail past somebody else&rsquo;s desk at ninety miles an hour, as designed.
        </p>
      </Advert>

      {/* ------------------------------------------------------------- */}

      <Section title="Ordering">
        <Prose>
          <p>
            Measure your building. Measure it honestly &mdash; the trunk does not care about the drawing, it
            cares about the wall. Send us the figure in running feet, the number of destinations you want
            served, and the weight of the heaviest thing you intend to send. If you do not know the weight of
            the heaviest thing you intend to send, send us the weight of your foreman and we shall size it
            from that, which is what we did here and which has held up.
          </p>
        </Prose>

        <Coupon>
          <p className="ap-caps" style={{ fontSize: "0.68rem", marginBottom: "0.7rem" }}>
            {COMPANY.name} &mdash; Enquiry Card, Form ASI-208-E
          </p>

          <FormBlock>
            <Field label="Name of firm" />
            <Field label="Address of premises" />
            <Field label="Trunk required, running feet" />
            <Field label="Destinations to be served" filled>
              one / three / nine / more than nine (attach drawing)
            </Field>
            <Field label="Heaviest item to be sent, lb." />
            <Field label="Heaviest item you will in fact send, lb." filled>
              (answer this one)
            </Field>
          </FormBlock>

          <Rule variant="dotted" />

          <p className="ap-caps" style={{ fontSize: "0.62rem", color: "var(--ink-3)", margin: "0.6rem 0" }}>
            Conditions of the premises &mdash; tick all that apply
          </p>

          <Checklist
            items={[
              { text: "The building has more than two floors.", checked: true },
              { text: "Men presently carry things between those floors on foot.", checked: true },
              { text: "The terminus may be sited clear of any seated man.", checked: false },
              { text: "The premises contain no cat." },
              { text: "You accept that the vent runs in both directions at all times." },
              { text: "You have read the whole of Form ASI-900 and wish to proceed." },
            ]}
          />

          <Aside>
            The third condition is the only one this company has ever failed on its own premises, and it is
            the only one on the card that Facilities regards as compulsory.
          </Aside>
        </Coupon>
      </Section>

      <ClearanceGate
        level={3}
        hint="Associate grade or above. The gallery schedule is not held at the gate house."
      >
        <Panel head={<>Appended By Facilities &mdash; Sub-Level 4 Gallery, Not For The Sample Case</>} tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            The trunk between Sub-Level 4 and the sorting floor is surveyed as one thousand one hundred and
            eighty-eight feet. Walked, hatch to hatch, with a chain, it is one thousand one hundred and
            eighty-eight feet. Timed at the stated velocity it is nine seconds, and nine seconds at ninety
            miles per hour is one thousand one hundred and eighty-eight feet, and this department has
            therefore reported the run as consistent for four years. It has never been consistent. There are
            eleven feet of gallery between the fourth and fifth hangers which do not appear on the
            construction drawing, are not accounted for in the survey, and are warm. Facilities has bricked
            the inspection plate over twice. It has been open both times it was next looked at. &mdash; Fac.
            Div., filed and not circulated.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Prose>
        <p>
          That is the vent. It is a tube and a blower and it does one thing at one speed for one price, and
          in sixteen years of this company I have not built anything else about which every word of that
          sentence is true. Buy it by the foot. Set the button first.
        </p>
      </Prose>

      <Signature note="Form ASI-208, sixth printing. Dictated 6 April 1959. Recoveries schedule appended by Records under protest, and printed anyway." />

      <FinePrint tiny>
        The pneumatic diversity vent is sold as materials-handling plant and is warranted for materials.
        Personnel are not materials. Personnel entering a vent, whether by instruction, by accident, by
        wager, or by the operation of the vent itself upon a person standing adjacent to an open hatch, are
        conveyed as freight and are subject in every particular to the company&rsquo;s freight terms, under
        which liability is limited to the declared value of the consignment. No personnel conveyed by this
        company&rsquo;s vents have ever been declared. {COMPANY.name} does not undertake that an item placed
        in a vent will emerge at the destination selected, on the floor selected, in the number in which it
        was despatched, or after the moment at which it was despatched. See{" "}
        <Link href="/legal">Form ASI-900</Link>,{" "}
        <Link href="/enrichment-center/safety">Form ASI-305</Link> and{" "}
        <Link href="/the-company/correspondence">Form ASI-108</Link>. Form ASI-208. Retain until superseded.
      </FinePrint>

      {/* The blower log for 14 November 1958 shows the machine stopped. */}
      {/* The terminus discharged anyway. Facilities filed the log. */}
      {/* Nobody has asked what the vent was connected to at 0641 that morning. */}

      <Scrawl href="/the-company/correspondence">
        somebody is posting letters into the tube from the far end and the far end is bricked up
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

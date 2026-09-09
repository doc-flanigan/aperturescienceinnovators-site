import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Split, Row, Aside, Coupon,
} from "@/components/Print";
import { Memo, Signature, PenNote } from "@/components/Memo";
import { FigureTable, SpecList, Plate, KeyFigures } from "@/components/Data";
import { Checklist } from "@/components/Form";
import { Advert } from "@/components/Ad";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "The Portable Quantum Tunnelling Device",
  description:
    "Two apertures, arbitrarily far apart, sharing one interior. Momentum is conserved. It is industrial equipment and it is not a door.",
};

export default function Page() {
  const { prev, next } = neighbours("/products/quantum-tunnelling-device");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/products", label: "Products" },
          { label: "Tunnelling Device" },
        ]}
      />

      <DocHead
        doc="ASI-202"
        department="Applied Sciences"
        classification="Unrestricted — Industrial Sale Only"
        revision="Fourth revision; nomenclature amended throughout at the request of counsel"
        extra={[{ label: "Model", value: "ASI-202/B, tethered, portable" }]}
      />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="Applied Sciences">
          Not A Door
        </Stamp>
        <PageTitle
          advertising
          kicker="Form ASI-202 — Applied Sciences"
          title="The Portable Quantum Tunnelling Device"
          deck={
            <>
              It makes two apertures. One of them is here and one of them is somewhere else, and the
              distance between them is a matter of complete indifference to whatever is standing in the
              first one. Six years in development, eleven thousand recorded transits, and one word we are
              no longer permitted to print.
            </>
          }
          byline={
            <>
              Dictated by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}. Nomenclature supervised, under
              protest, by the Legal Department.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            Here is what it does. You point it at a wall and you pull the handle and there is now a hole in
            that wall. You walk twenty feet and you point it at a second wall and you pull the handle again
            and there is now a hole in that wall as well. The two holes are the same hole. Step into one of
            them and you come out of the other one, in the same posture, at the same speed, holding the
            same sandwich.
          </Lede>
          <p>
            I have been told by counsel that the preceding paragraph contains four words I am not allowed to
            use and that I have used one of them six times. The permitted word is <b>aperture</b>. It is on
            the letterhead, so it will have to do, and I would remind the reader that we chose that word in
            1943 because it made a shower curtain sound hygienic and it has been earning its keep ever
            since.
          </p>
          <p>
            An aperture, then. Two of them. Arbitrarily far apart and sharing one interior. That interior is
            not a room, it is not a corridor, it has no length and it has no inside, and the only honest
            thing to say about it is that a man goes in one side and comes out the other and takes rather
            less time about it than a man ought to.
          </p>

          <h2>Momentum Is Conserved</h2>
          <p>
            This is the single most important sentence in this catalogue and I want it read twice. Speedy
            thing goes in, speedy thing comes out. The device does not slow anything down. It does not
            catch anything. It has no opinion whatsoever about what happens after the second aperture,
            which is a matter for the customer, the floor, and in three documented cases the ceiling.
          </p>
          <p>
            Purchasers who intend to place the second aperture above the first are advised that they have
            just built a machine for making a man go faster and faster in a circle forever, and that
            Aperture Science Innovators sells that machine separately, at a markup, as the{" "}
            <Link href="/products/aerial-faith-plate">Aerial Faith Plate</Link>, and would appreciate the
            business.
          </p>

          <h2>It Is Not A Toy</h2>
          <p>
            The handheld unit weighs eighty-nine pounds. It is tethered by forty feet of armoured cable to a
            generator cabinet the size of an icebox, and the cabinet is not portable, and the word
            &ldquo;portable&rdquo; in the product name refers to the emitter and to nothing else. Two men
            operate it. One carries and aims. One watches the tether. The man who watches the tether has
            the more important job and the Enrichment Center pays him accordingly.
          </p>
          <p>
            The emitting surface must be conductive. Ordinary rock, ordinary brick and ordinary plaster
            will not take an aperture and will not be persuaded to. What takes an aperture is a wall
            prepared with{" "}
            <Link href="/products/conversion-gel">conversion gel</Link>, which is ground lunar substrate in
            suspension, which we own more of than any government on this continent. That is not an accident
            of procurement. That is a moat.
          </p>
        </Prose>

        <Stack>
          <Panel head="Specification — Model ASI-202/B" tone="tint">
            <SpecList
              rows={[
                { k: "Emitter mass", v: "89 lb, dry" },
                { k: "Tether", v: "40 ft, armoured, non-detachable" },
                { k: "Generator cabinet", v: "1,140 lb. Not portable." },
                { k: "Aperture diameter", v: "44 in. nominal, oval" },
                { k: "Apertures per unit", v: "Two. Never one. Never three." },
                { k: "Maximum separation", v: <b>Not yet found</b> },
                {
                  k: "Minimum separation",
                  v: "11 in. Below eleven inches the two apertures are one aperture.",
                },
                { k: "Emitting surface", v: "Lunar-substrate conductive preparation" },
                { k: "Operators required", v: "Two" },
                { k: "Price, complete", v: "$14,750, f.o.b. Upper Michigan" },
              ]}
            />
          </Panel>

          <Plate
            number="1"
            caption="The paired aperture, as painted on the chamber wall in Shaft 09. The left-hand figure is the entry. There is no meaningful sense in which the left-hand figure is the entry."
            tint
          >
            <Pictogram
              name="portal-pair"
              size={150}
              title="Two apertures sharing one interior"
              style={{ color: "var(--spot-blue)" }}
            />
          </Plate>

          <Row>
            <Placard>Aperture &mdash; Do Not Obstruct</Placard>
            <Placard tone="warn">Mind Your Speed</Placard>
          </Row>

          <PenNote tone="pencil" angle={-1.6}>
            He tells the shareholders eleven. It is twelve. The twelfth was the fourteenth of March, he came
            back up alone, and he sat in the outer office for an hour without saying anything, and he has
            never once in thirteen years sat anywhere for an hour. &mdash; C.
          </PenNote>
        </Stack>
      </Split>

      <Notice head="The Enrichment Center Reminds You">
        Momentum is conserved. The Enrichment Center cannot make an object slower, cannot make an object
        stop, and has no arrangement of any kind with the floor. Speedy thing goes in. Speedy thing comes
        out. Please plan the remainder of your afternoon around this.
      </Notice>

      <KeyFigures
        items={[
          { value: "11,204", label: "Recorded transits", note: "Shaft 09, since 1953" },
          { value: "44 in.", label: "Aperture diameter", note: "Nominal, oval" },
          { value: "89 lb", label: "Emitter mass", note: "Two men" },
          { value: "$14,750", label: "Complete unit", note: "Tether included" },
          {
            value: <Redacted reason="Applied Sciences declines to define the term 'returned'">1,306</Redacted>,
            label: "Subjects returned",
            note: "Of those entered",
          },
        ]}
      />

      {/* ------------------------------------------------------------- */}

      <Section title="A Note On Nomenclature, Not Written By Me">
        <Prose>
          <p>
            In February the Legal Department came up to the third floor with a list. I am printing the list
            because I was told not to print the list, and because a customer reading this catalogue is
            entitled to know why the copy on this sheet reads like a man walking around a hole in his own
            floor.
          </p>
        </Prose>

        <Memo
          to="Mr. Johnson; Sales; the Print Shop"
          from="The Legal Department (Basement, Rear)"
          re="Nomenclature — Model ASI-202, permitted and forbidden nouns"
          date="18 February 1959"
          cc="Records & Filing"
          sign={false}
        >
          <p>
            Counsel has reviewed the 1958 catalogue copy and the correspondence arising from it. The
            following nouns are withdrawn from all Aperture Science Innovators printed matter, advertising,
            signage, invoicing and telephone enquiry with immediate effect. The reasons are given so that
            the President will stop asking for them.
          </p>
          <FigureTable
            caption="Schedule A — nouns, and their standing."
            columns={[
              { key: "word", head: "Noun", width: "9rem" },
              { key: "status", head: "Standing", width: "8rem" },
              { key: "why", head: "Reason Given By Counsel" },
            ]}
            rows={[
              {
                word: <b>Door</b>,
                status: "Forbidden",
                why: "A door is a fixture with a duty of care attached to it in nine states.",
              },
              {
                word: <b>Gate</b>,
                status: "Forbidden",
                why: "Implies a keeper, a toll, and a thing on the other side that wishes to come through.",
              },
              {
                word: <b>Portal</b>,
                status: "Forbidden",
                why: "Ecclesiastical. Attracts a class of correspondence the company cannot answer.",
              },
              {
                word: <b>Passage</b>,
                status: "Forbidden",
                why: "Implies duration. Nothing about this product has a duration.",
              },
              {
                word: <b>&ldquo;The thing&rdquo;</b>,
                status: "Forbidden",
                why: "Used by the President in a public address on 4 January. Counsel would rather not.",
              },
              {
                word: <b>Hole</b>,
                status: "Discouraged",
                why: "Accurate. That is the difficulty with it.",
              },
              {
                word: <b>Aperture</b>,
                status: "Permitted",
                why: "It is the name of the company. Counsel cannot be sued by the letterhead.",
              },
              {
                word: <b><Redacted reason="Struck from Schedule A by the President, 19 February">Wound</Redacted></b>,
                status: "Struck",
                why: "Proposed by Applied Sciences. Counsel agrees it is the most precise of the seven.",
              },
            ]}
            foot="Schedule A is binding on all printed matter. Schedule B, concerning verbs, is not yet agreed."
          />
          <p>
            Counsel notes for the record that the President responded to this schedule by having the words
            <i> Not A Door</i> cut into a rubber stamp, and that the stamp appears at the head of this very
            sheet.
          </p>
        </Memo>

        <Marginalia>
          Sales reports that the telephone enquiries have not diminished, and that callers now ask for
          &ldquo;the aperture thing&rdquo;, which Legal considers to be two violations in one breath.
        </Marginalia>
      </Section>

      <PullQuote big attribution={`${COMPANY.founder}, to the Legal Department, February 1959`}>
        Fine. It is not a door. It is an aperture. Now get out of my office through the aperture.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="Measured Performance, Test Shaft 09">
        <FigureTable
          caption="Selected transit trials, 1958 and the first quarter of 1959. Velocities measured at the plane of each aperture."
          columns={[
            { key: "trial", head: "Trial", width: "5.5rem" },
            { key: "sep", head: "Separation", numeric: true },
            { key: "in", head: "Entry, ft/sec", numeric: true },
            { key: "out", head: "Exit, ft/sec", numeric: true },
            { key: "note", head: "Observation" },
          ]}
          rows={[
            { trial: "58-114", sep: "22 ft", in: "4.1", out: "4.1", note: "Walking pace. Unremarkable and therefore excellent." },
            { trial: "58-140", sep: "310 ft", in: "31.8", out: "31.8", note: "Dropped mass. Momentum conserved to the instrument." },
            { trial: "58-207", sep: "1.9 miles", in: "31.8", out: "31.8", note: "Distance makes no difference. It has never made any difference." },
            { trial: "58-311", sep: "41 miles", in: "12.0", out: "12.0", note: "Second aperture struck in a rented barn outside Marquette. Farmer compensated." },
            { trial: "59-006", sep: "11 in.", in: "3.0", out: <b>&mdash;</b>, note: "Minimum separation trial. See ASI-401 and do not attempt this." },
            {
              trial: "59-018",
              sep: <Redacted reason="Figure withheld: no instrument on site could express it">Not yet found</Redacted>,
              in: "3.0",
              out: "3.0",
              note: "Volunteer reported the second chamber smelled of salt water. There is no salt water in this facility.",
            },
            { trial: "59-022", sep: "60 ft", in: "0.0", out: "0.0", note: "Weighted storage cube. The cube has no observations to offer." },
          ]}
          foot="Compiled by Applied Sciences from the chamber logs. Trial 59-006 is retained in the record at the President's insistence and against the recommendation of the department."
        />

        <Aside>
          Eleven thousand two hundred and four transits and the exit column has never once been larger than
          the entry column. Somebody in New Mexico will spend four years proving that. We proved it on a
          Thursday with a bowling ball and wrote it on the wall.
        </Aside>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section title="Handling, Siting & The Two-Man Rule">
        <Split weight="wide-right">
          <Panel head="Before Each Use" tone="rule">
            <Checklist
              items={[
                { text: "Generator cabinet earthed to the shaft rail.", checked: true },
                { text: "Tether inspected along its full forty feet.", checked: true },
                { text: "Both intended surfaces prepared and cured.", checked: true },
                { text: "Second man in position and in voice contact.", checked: true },
                { text: "Separation confirmed greater than eleven inches.", checked: true },
                { text: "All metal removed from any person who may transit." },
                { text: "Nobody standing in the second surface." },
                { text: "Nobody standing in the first surface either. This has happened." },
              ]}
            />
          </Panel>

          <Prose>
            <p>
              The device is sold to industry, to the mining trade, to two railroads and to every branch of
              the armed forces except the Navy, who have bought nothing whatever from this company since 1956
              and who know perfectly well why. It
              is not sold to households. It is not sold to schools. Three enquiries from schools have been
              received and all three were answered by Sales with a catalogue and a very short letter.
            </p>
            <p>
              Site the second aperture where you can see it. That is the whole of the siting instruction and
              it is the one customers ignore. An aperture you cannot see is an aperture into a place you
              have not inspected, and the company&rsquo;s position on places that have not been inspected is
              set out at length in{" "}
              <Link href="/legal">Form ASI-900</Link> and is not cheerful reading.
            </p>
            <p>
              Volunteers pass through under supervision, in a chamber, in daylight, having been paid.
              Sixty dollars, cash, same day. If you would like to be one of them the form is{" "}
              <Link href="/enrichment-center/volunteer">two sheets along</Link> and it is the size of a
              phone book and it is worth every page.
            </p>
          </Prose>
        </Split>
      </Section>

      <Advert
        eyebrow="Applied Sciences — Model ASI-202/B"
        head="Two Places. One Step. No Waiting."
        burst="$14,750"
        burstSub="COMPLETE"
        action="Order On Form ASI-299"
        href="/products/catalogue"
      >
        <p>
          Move ore. Move men. Move a locomotive part from the yard to the shop floor without troubling the
          yard, the shop, or the four hundred feet of rock in between. The Portable Quantum Tunnelling
          Device has been in continuous industrial service since 1953 and has never once mislaid a payload
          it was correctly aimed at.
        </p>
        <p>
          Delivered complete with emitter, tether, generator cabinet, two hundred pounds of conductive
          preparation and a man from Applied Sciences for the first fortnight. The man is included. The man
          is not optional.
        </p>
      </Advert>

      <Coupon>
        <p className="ap-caps" style={{ fontSize: "0.66rem", margin: "0 0 0.5rem", color: "var(--spot-orange)" }}>
          Cut Here &mdash; Enquiry Card, Applied Sciences
        </p>
        <SpecList
          rows={[
            { k: "Model", v: "ASI-202/B, tethered, portable" },
            { k: "Fixed emplacement", v: "ASI-202/A, $6,200, surfaces prepared by us" },
            { k: "Conductive preparation", v: "$41 per square foot, minimum forty feet" },
            { k: "Replacement tether", v: "$18 per foot. Do not splice a tether." },
            { k: "Demonstration", v: "Free of charge, at our facility, on a Tuesday" },
            { k: "Territory", v: "The Republic and its possessions, excepting New Mexico" },
          ]}
        />
      </Coupon>

      <ClearanceGate
        level={3}
        hint="Senior Associate grade or above. The paragraph below is not printed in the customer copy."
      >
        <Panel head="Appended By Applied Sciences — Not For The Customer Copy" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            The department wishes it recorded that &ldquo;maximum separation: not yet found&rdquo; is not a
            boast and was not written as one. We have opened the second aperture at forty-one miles, and at
            four hundred, and on 6 January at a separation we were unable to instrument at all, and in the
            last of those the second aperture opened somewhere with weather in it. The device does not
            appear to measure distance. The department&rsquo;s present view is that the device does not
            appear to be aware of distance, and that what we are aiming is not the aperture but our own
            confidence about where the far side ought to be. We have asked twice for a suspension of
            long-separation trials. The President has read both requests.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="fat" />

      <Signature note="Form ASI-202, fourth revision. Approved for printing, nomenclature and all." />

      <FinePrint tiny>
        The Portable Quantum Tunnelling Device is industrial equipment sold for industrial purposes. It is
        not a door, a gate, a portal or a passage, and any injury, disappearance, duplication, partial
        return or non-return arising from its use is governed entirely by Form ASI-900. Aperture Science
        Innovators warrants that the object which leaves the second aperture will have the same mass, the
        same velocity and the same direction as the object which entered the first. No warranty of any kind
        is given as to the identity of that object. Retain this sheet. Retain the man from Applied Sciences.
      </FinePrint>

      {/* Trial 59-018: the volunteer said salt water. Trial 58-311 was a barn. */}
      {/* Nobody in Applied Sciences has ever explained why the second aperture */}
      {/* keeps choosing water, and nobody on this floor has asked it out loud. */}

      <Scrawl href="/vault/borealis">
        they opened one here and one out on the water and only one of them is still where they left it
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

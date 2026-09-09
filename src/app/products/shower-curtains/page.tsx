import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Split, Row, Coupon,
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
  title: "The Aperture Fixtures Shower Curtain",
  description:
    "Vinyl, weighted hem, twelve grommets, and sixteen years of holding water for the United States Army — the founding product of Aperture Science Innovators, still in the catalogue and still the best on the market.",
};

export default function Page() {
  const { prev, next } = neighbours("/products/shower-curtains");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/products", label: "Products" },
          { label: "Shower Curtains" },
        ]}
      />

      <DocHead
        doc="ASI-201"
        department="Sales & Manufacturing"
        classification="Unrestricted"
        revision="Sixteenth printing. Specification unaltered since 1944, excepting the grommets."
      />

      <div className="ap-rel">
        <Stamp float tone="black" sub="Catalogue No. AF-1">
          Model One
        </Stamp>
        <PageTitle
          advertising
          kicker="Aperture Fixtures Division — Surface Plant"
          title="The Aperture Fixtures Shower Curtain"
          deck={
            <>
              Calendered vinyl. A hem weighted with eleven ounces of lead shot. Twelve rolled brass
              grommets. It hangs true, it sheds water, and every other sheet in this publication is
              downstream of it.
            </>
          }
          byline={
            <>
              Dictated by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}, who was named Shower Curtain
              Salesman of the Year in 1943 and has not been asked to give the plaque back.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            This is the product. Not the first product &mdash; the product. Men come up here from the
            magazines wanting to be shown the hole, and I take them out to the surface plant first and stand
            them in front of a curtain line running at four hundred units the hour, because if you do not
            understand the curtain you will not understand one word of the rest of it.
          </Lede>
          <p>
            I started in a rented garage in 1943 with four hundred dollars and a bolt of vinyl and cut the
            first hundred on a kitchen table. By December of that year the trade had a plaque with my name
            on it. A man does not get a plaque for enthusiasm. He gets it for shipping.
          </p>
          <p>
            The United States Army signed in the autumn of 1943 and took delivery of two hundred thousand
            curtains by the January in which I bought the mine. The Army does not take a manufacturer&rsquo;s
            word for anything. They pulled eleven hundred at random, hung them, filled them and left them
            filled for eight hours, and not one of them leaked. Not one. If you have never had to make two
            hundred thousand of a thing and have every single one come out right, then you have never had a
            standard imposed on you, and you are not qualified to have opinions about my volunteer programme
            either.
          </p>
          <p>
            That contract paid for the hole. The hole paid for the shafts. In 1956 the Eisenhower
            administration put an Aperture curtain in every branch of the United States military with the
            single exception of the Navy. The Navy wrote us a letter about it. The letter is in the safe.
            The letter is not in this catalogue.
          </p>
          <p>
            Sixteen years on, this curtain outsells every other line in this company by nine hundred to
            one, and I want that printed in the same type as the science, because it is the same company.
          </p>
        </Prose>

        <Stack>
          <Panel head="The Curtain, In Brief" tone="tint">
            <SpecList
              rows={[
                { k: "Catalogue No.", v: "AF-1" },
                { k: "In manufacture", v: "Continuously since 1943" },
                { k: "Material", v: "Calendered vinyl, .008 in." },
                { k: "Hem", v: "Sewn channel, 11 oz. lead shot" },
                { k: "Grommets", v: "Twelve. Rolled brass." },
                { k: "Seams", v: "Heat-sealed. No thread. Thread wicks." },
                { k: "Price, household", v: "$3.95" },
                { k: "Price, case of twelve", v: "$41.40" },
                { k: "Price, military specification", v: "$4.20" },
                { k: "Recalls to date", v: "None" },
              ]}
            />
          </Panel>

          <Plate
            number="1"
            caption={
              <>
                The curtain as it hangs. Twelve points of suspension, the hem weighted, the drop true. The
                drawing is the 1944 drawing. Nothing on it has needed changing.
              </>
            }
          >
            <Pictogram
              name="curtain"
              size={140}
              title="The Aperture Fixtures shower curtain, twelve grommets, weighted hem"
              style={{ color: "var(--ink-2)" }}
            />
          </Plate>

          <Row>
            <Placard>Twelve Points</Placard>
            <Placard tone="warn">Weighted Hem</Placard>
          </Row>

          <PenNote tone="pencil" angle={-1.6}>
            He raised it from ten to twelve on the ninth of April, 1948, and he will tell you he does not
            remember why. I typed the letter to Mrs. Kowalczyk in Marquette that March. I remember perfectly
            well. &mdash; C.
          </PenNote>
        </Stack>
      </Split>

      <KeyFigures
        items={[
          { value: "216,400", label: "Curtains shipped, 1958", note: "Surface plant, two shifts." },
          { value: "1,100", label: "Tested by the Army, 1944", note: "Failures: none." },
          { value: "12", label: "Grommets", note: "By memorandum. See below." },
          { value: "900:1", label: "Curtain sales, against all other lines", note: "Sales is not surprised." },
        ]}
      />

      <PullQuote big attribution={`${COMPANY.founder}, to the Marquette Chamber of Commerce, 1951`}>
        Anybody can put a hole in a wall. It takes a manufacturer to keep the water on one side of it.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="How It Is Made">
        <Prose>
          <p>
            The vinyl is calendered on the surface plant to eight thousandths of an inch, which is thicker
            than the trade uses and thicker than it needs to be, because a curtain that a man can see his
            hand through is a curtain he will not buy twice. It is cut on a fixed table, not a roller table.
            The seams are heat-sealed. We do not sew a seam that will be under water, because thread wicks,
            and a firm that sells a wicking curtain deserves the correspondence it gets.
          </p>
          <p>
            The hem carries eleven ounces of lead shot in a sewn channel, which is what makes the drop hang
            true and what makes the curtain sit against the tub instead of standing off it in the draught.
            Every man who has copied us has copied the vinyl and none of them has copied the hem, because
            the hem costs money and the customer cannot see it. The customer can feel it. I have built a
            company of four figures on things the customer cannot see and can feel.
          </p>
          <p>
            The line is run by fifty-one women out of Marquette and Ishpeming, several of whom have been on
            it since 1944, and they are counted in the 1,247 people on this company&rsquo;s payroll and are
            not counted last.
          </p>
        </Prose>
      </Section>

      <Section title="The Range">
        <FigureTable
          caption={<>Colours presently offered. Yardage is the 1958 twelve-month figure, surface plant.</>}
          columns={[
            { key: "colour", head: "Colour" },
            { key: "no", head: "Cat. No.", width: "6rem" },
            { key: "yards", head: "Yards, 1958", numeric: true },
            { key: "note", head: "Note" },
          ]}
          rows={[
            {
              colour: "Institutional Grey",
              no: "AF-1-G",
              yards: "214,000",
              note: "The colour of the Republic. Ships from stock.",
            },
            {
              colour: "Institutional Grey (Warm)",
              no: "AF-1-GW",
              yards: "96,500",
              note: <>Grey, but forgiving. Introduced 1949 at the request of hotels.</>,
            },
            {
              colour: (
                <>
                  Green,{" "}
                  <Redacted reason="Colour name withdrawn from the catalogue by Sales, October 1951">
                    Shaft Seven
                  </Redacted>
                </>
              ),
              no: "AF-1-X",
              yards: "0",
              note: (
                <>
                  Special order. Not ordered since 1951. Eight bolts remain in the surface store and nobody
                  has moved them.
                </>
              ),
            },
          ]}
          foot={
            <>
              The green was matched in 1951 against a sample the President brought up himself. Materials has
              never reproduced the sample and has stopped being asked to. The eight bolts are carried on the
              books at cost.
            </>
          }
        />

        <Marginalia>
          Sales notes that the green is listed here only because the President will not permit a colour to
          be struck from a catalogue while stock of it remains in the building. Sales has raised this four
          times.
        </Marginalia>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section title="The Acceptance Trials Of 1944">
        <FigureTable
          caption={
            <>
              United States Army acceptance trials, Marquette, February 1944, and one trial conducted
              afterwards by ourselves.
            </>
          }
          columns={[
            { key: "no", head: "Trial", numeric: true, width: "4.5rem" },
            { key: "method", head: "Method" },
            { key: "std", head: "Standard" },
            { key: "result", head: "Result" },
          ]}
          rows={[
            { no: "1", method: "Filled and hung, eight hours", std: "No seepage", result: "Pass. 1,100 of 1,100." },
            { no: "2", method: "Dead weight, single grommet", std: "25 lb.", result: "Pass at 61 lb." },
            { no: "3", method: "Humid chamber, thirty days", std: "No growth", result: "Pass." },
            { no: "4", method: "Vertical flame, twelve seconds", std: "Self-extinguishing", result: "Pass. The curtain will not carry a flame." },
            { no: "5", method: "Outdoors, Michigan, February", std: "Flexible at −40°F", result: "Pass. Two men were less flexible than the curtain." },
            {
              no: "6",
              method: "Hung on Sub-Level 2, salt atmosphere",
              std: "No degradation, one year",
              result: "Pass. Recovered 1958. Still serviceable.",
            },
            {
              no: "9",
              method: <>One curtain, one emulsion, two rooms</>,
              std: <>No standard exists</>,
              result: <>See Note 4.</>,
            },
          ]}
          foot={
            <>
              Trials 1 through 6 were conducted under Army supervision. Trials 7 and 8 were withdrawn by us
              before observation. Trial 9 was not conducted under anybody&rsquo;s supervision and was
              written up eleven days afterwards from memory.
            </>
          }
        />
      </Section>

      <Panel head="Note 4. Concerning One Curtain, March 1953" tone="rule">
        <Prose>
          <p>
            In the spring of 1953 a man in Materials put an early emulsion down the front of a curtain hung
            between the wet room and the corridor of the third-floor laboratory. For somewhere between four
            and nine seconds &mdash; the two witnesses disagree and both have signed &mdash; that curtain
            was in both rooms. Not half in each. Entirely in both. Twelve grommets on the rail in the wet
            room and twelve grommets on the rail in the corridor, counted twice, by two men, one of whom sat
            down on the floor afterwards.
          </p>
          <p>
            Everything in this catalogue printed after this sheet exists because of those nine seconds. The{" "}
            <Link href="/products/quantum-tunnelling-device">tunnelling device</Link>, the gels, the
            chambers, the whole of the{" "}
            <Link href="/science/quantum-tunnelling">Applied Quantum Tunnelling</Link> division, the nine
            shafts and every volunteer who has ever taken sixty dollars off this company. All of it comes
            out of a shower curtain, and I will not have that treated as a charming detail. It is the
            finding.
          </p>
          <p>The curtain was undamaged. It held water afterwards. We checked. Of course we checked.</p>
        </Prose>
      </Panel>

      {/* ------------------------------------------------------------- */}

      <Section title="A Memorandum Concerning Grommets">
        <Memo
          to="Manufacturing, Surface Plant"
          re="Grommets, number of"
          date="9 April 1948"
          cc="Sales (for compliance, not comment)"
          stamp={<Stamp tone="blue" angle="right">Effective At Once</Stamp>}
        >
          <p>
            Effective with the next roll, every curtain leaving this plant carries twelve grommets. Not ten.
            Twelve. The tooling is four hundred and six dollars and I have four hundred and six dollars.
          </p>
          <p>
            I am told Manufacturing would like a reason. Manufacturing has had sixteen memoranda from this
            desk and has been given a reason in eleven of them, which is a better ratio than Manufacturing
            has any right to expect. This is not one of the eleven.
          </p>
          <p>
            Sales asks whether the customer will notice. The customer will notice. That is not why either.
            Nobody in this building is to write the number ten on a curtain drawing again.
          </p>
        </Memo>
      </Section>

      <Notice head="The Enrichment Center Reminds You">
        The Aperture Fixtures Shower Curtain is rated for domestic, hotel, hospital and military
        installation. It is not rated for installation below Sub-Level 4, and personnel who find one hanging
        below Sub-Level 4 are asked to report the fact to Records rather than to touch it.
      </Notice>

      {/* ------------------------------------------------------------- */}

      <Advert
        eyebrow="Aperture Fixtures — Since 1943"
        head="It Holds Water. That Is The Whole Claim."
        burst="NO. 1"
        burstSub="SINCE 1943"
        action="Complete Order Form ASI-299"
        href="/products/catalogue"
      >
        <p>
          Sixteen years. Two hundred thousand to the Army in a single winter, and every one of them held.
          Twelve rolled brass grommets, a hem weighted with eleven ounces of lead shot, and a heat-sealed
          seam that has never once been recalled by the United States Government. Institutional Grey and
          Institutional Grey (Warm) ship from stock. Your floor stays dry or you may write to me personally
          at the Enrichment Center, and I will read it, which is more than the competition will do with
          anything you send them.
        </p>
      </Advert>

      <Section title="Order Form — Aperture Fixtures Model AF-1">
        <Coupon>
          <FormBlock>
            <Field label="Name of purchaser" />
            <Field label="Institution, hotel or command" />
            <Field label="Colour required (state one)" filled>
              Institutional Grey
            </Field>
            <Field label="Quantity, curtains" filled>
              12
            </Field>
            <Field label="Delivery address (not New Mexico)" />
          </FormBlock>

          <p className="ap-caps" style={{ fontSize: "0.6rem", marginTop: "1rem" }}>
            Sizes stocked
          </p>
          <Checklist
            items={[
              { text: "54 × 72 in. — domestic, tub" },
              { text: "72 × 72 in. — domestic, standard", checked: true },
              { text: "72 × 84 in. — hotel and hospital" },
              { text: "84 × 84 in. — barracks, military specification" },
              {
                text: (
                  <>
                    72 in. × 4,000 ft. — special order. One made. Hung in Test Shaft 09 in 1957, top to
                    bottom, and still hanging. Not repeatable at this price.
                  </>
                ),
              },
            ]}
          />

          <FinePrint>
            Terms: net thirty days. Freight from the Enrichment Center loading dock, Upper Peninsula,
            Michigan. Telephone {COMPANY.telephone}. Cable {COMPANY.cable}. Delivery to the State of New
            Mexico is not undertaken and enquiries from that State are filed without reply.
          </FinePrint>
        </Coupon>
      </Section>

      <ClearanceGate
        level={2}
        hint="Personnel who have taken an interest in the surface plant may read the appended note."
      >
        <Panel head="Materials Store, Surface Plant — Not For The Catalogue" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            The Trial 9 curtain is not in the Materials store and has not been since 1953. It is folded in
            the bottom drawer of the desk on the third floor. It was measured on the day at seventy-two
            inches by seventy-two. It was measured again in March of this year, by me, twice, with the
            plant&rsquo;s own rule: seventy-two by eighty-three. Nobody has stretched it. Nobody has touched
            it. I would like somebody in Materials to tell me what a curtain is doing growing eleven inches
            in a drawer, and I would like it in writing. &mdash; C.
          </p>
        </Panel>
      </ClearanceGate>

      <Row>
        <Placard>Surface Plant</Placard>
        <Placard tone="danger">Do Not Hang In Shaft 07</Placard>
      </Row>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <FinePrint tiny>
        The Aperture Fixtures Shower Curtain is warranted for one year against splitting, mildew, grommet
        failure and the ordinary conditions of a bathroom. It is not warranted against conditions arising
        below the water table; against re-entry; or against the curtain being subsequently discovered in a
        room other than the room in which it was hung. Aperture Science Innovators has settled two claims of
        the last description and does not concede that they concerned the same curtain. Prices are 1959
        prices and are subject to the vinyl market. Form ASI-201. See also{" "}
        <Link href="/legal">Form ASI-900</Link>. Retain until superseded.
      </FinePrint>

      {/* The 1948 grommet memorandum has a second page. It is not on this floor. */}
      {/* Mrs. Kowalczyk was paid in full and does not work here any more. */}
      {/* Ten grommets held. Twelve grommets held better. Nobody has ever asked what was hanging on them. */}

      <Scrawl href="/vault/the-dens">
        theres a curtain hanging down here and the room its in isnt on any drawing i can find
      </Scrawl>

      <p>
        <Link className="ap-caps" style={{ fontSize: "0.68rem" }} href="/products/quantum-tunnelling-device">
          Next: the device the curtain led to →
        </Link>
      </p>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

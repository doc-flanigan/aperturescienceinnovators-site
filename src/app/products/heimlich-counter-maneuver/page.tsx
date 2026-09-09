import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Stamp, Panel, Notice, Rule, Row, FinePrint, Placard, PullQuote,
  Marginalia, Aside, Coupon, Split,
} from "@/components/Print";
import { Memo, PenNote, Signature } from "@/components/Memo";
import { FigureTable, SpecList, Plate, KeyFigures } from "@/components/Data";
import { FormBlock, Field, Checklist } from "@/components/Form";
import { Advert } from "@/components/Ad";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "The Heimlich Counter-Maneuver",
  description:
    "A four-movement manual technique by which an object lodged in a man is lodged considerably further. It works every time. The applications are still being determined.",
};

export default function Page() {
  const { prev, next } = neighbours("/products/heimlich-counter-maneuver");

  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/products", label: "Products" },
          { label: "Counter-Maneuver" },
        ]}
      />

      <DocHead
        doc="ASI-210"
        department="Applied Biology"
        classification="Unrestricted — Medical"
        revision="Second printing. The contraindications section is unchanged."
      />

      <div className="ap-rel">
        <Stamp float tone="green" sub="211 of 211 applications">
          Effective
        </Stamp>
        <PageTitle
          advertising
          kicker={<>Applied Biology &mdash; Division of Human Enhancement</>}
          title={<>The Heimlich Counter&#8209;Maneuver</>}
          deck={
            <>
              A four-movement manual technique by which an object lodged in the upper airway of an adult man
              is lodged a good deal further. It has never once failed. What it is <i>for</i> is a separate
              question and a separate department.
            </>
          }
          byline={
            <>
              Dictated by <b>Cave Johnson</b>, President &amp; Founder. Technique described by the Applied
              Biology Division, who developed it backwards on purpose.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            Here is a technique. A man has something in his throat. You come up behind him, you put your
            hands where this sheet tells you to put them, you thrust downward and inward, and the object
            goes further in. Every time. Two hundred and eleven supervised applications since November of
            1957 and two hundred and eleven of them worked, which is a figure the finest hospital in Chicago
            cannot put next to anything it does.
          </Lede>
          <p>
            I am aware of how a sentence like that lands on a man reading it in an armchair. So let me put
            the objection myself, in my own type, and then answer it. The objection is: <i>why</i>. The
            objection is that the world is presently arranged so that an object in a throat is a thing you
            take out rather than a thing you put in, and that a device for the second is a solution
            wandering the countryside looking for a problem.
          </p>
          <p>
            To which I say: good. That is exactly what it is. That is what every worthwhile thing in this
            building was on the day we made it. The gel was a pudding. The curtain was a curtain until a
            curtain in 1953 was briefly in two rooms at once. Nobody wanted a hole in a wall either, until
            there was one, and then everybody wanted eleven and they wanted them by Friday. You do not wait
            for the application to knock. You build the capability, you file the specification, and you keep
            it on the shelf, oiled, so that on the morning somebody comes running down the corridor shouting
            that they need an object put further into a man, this company is the only outfit on the North
            American continent that can hand him a card with four numbered movements on it.
          </p>
          <p>
            The lab boys arrived at it in reverse, which I want stated plainly because I am proud of it.
            Applied Biology began with a manoeuvre that takes an object <i>out</i> &mdash; a perfectly
            ordinary bit of physics that anybody could have written down and, as it happens, nobody yet has
            &mdash; and they ran the arithmetic the other way and wrote down what came out. That is the
            whole derivation. That is the entire research programme. Two men, a blackboard, an afternoon,
            and a minus sign.
          </p>
        </Prose>

        <Stack>
          <Plate
            number="1"
            caption={
              <>
                The four movements, as taught. The subject is shown facing away from the practitioner, which
                is the only position in which the Counter&#8209;Maneuver may be correctly performed and,
                Applied Biology notes, the only position in which the subject cannot see it coming.
              </>
            }
            tint
          >
            <svg
              viewBox="0 0 260 120"
              width="100%"
              style={{ maxWidth: 240, color: "var(--ink-2)" }}
              role="img"
              aria-label="Diagram of the four movements of the Heimlich Counter-Maneuver"
            >
              <title>The four movements of the Heimlich Counter-Maneuver</title>
              <g fill="none" stroke="currentColor" strokeWidth="2">
                {[0, 1, 2, 3].map((i) => (
                  <g key={i} transform={`translate(${8 + i * 63} 8)`}>
                    <circle cx="26" cy="16" r="10" />
                    <path d="M26 26 v34" />
                    <path d="M12 38 h28" />
                    <rect x="6" y="70" width="40" height="22" rx="3" />
                    <text
                      x="26"
                      y="86"
                      textAnchor="middle"
                      fontSize="13"
                      stroke="none"
                      fill="currentColor"
                      fontFamily="var(--font-type)"
                    >
                      {i + 1}
                    </text>
                    <circle
                      cx="26"
                      cy={22 + i * 9}
                      r="3.2"
                      fill="var(--spot-red)"
                      stroke="var(--spot-red)"
                    />
                  </g>
                ))}
                <path d="M4 106 H256" strokeWidth="1" />
              </g>
            </svg>
          </Plate>

          <Row>
            <Placard>From Behind Only</Placard>
            <Placard tone="warn">Thumb Inward</Placard>
            <Placard tone="danger">Do Not Reverse The Thrust</Placard>
          </Row>

          <PenNote tone="pencil" angle={-1.5}>
            The President came down to Applied Biology on Tuesday and asked them what it would take to lodge
            something in a lung on purpose and how far down a thing could reasonably be expected to go. They
            laughed. He asked again. He was not asking about a peach stone. &mdash; C.
          </PenNote>
        </Stack>
      </Split>

      <KeyFigures
        items={[
          { value: "211", label: "Supervised applications", note: "November 1957 to this March" },
          { value: "100%", label: "Rate of success", note: "Success is defined below. It is defined honestly." },
          { value: "4.1", label: "Mean displacement, cm", note: "Best recorded: 11.0 cm, ball bearing, ¾ inch" },
          {
            value: "0",
            label: "Contraindications",
            note: "Applied Biology has been asked four times and has answered four times.",
          },
        ]}
      />

      {/* ------------------------------------------------------------- */}

      <Section title="Specification">
        <SpecList
          rows={[
            { k: "Designation", v: <>Heimlich Counter&#8209;Maneuver. Applied Biology No. 210.</> },
            { k: "Class", v: "Manual technique. No apparatus. No consumables. No electricity." },
            { k: "Practitioners required", v: "One. Two if the subject has read this sheet." },
            { k: "Movements", v: "Four. There is no fifth movement. See below." },
            { k: "Duration", v: "Under three seconds, from approach to hold." },
            {
              k: "Direction of effect",
              v: (
                <>
                  Downward and inward &mdash; that is to say, <i>away from the mouth</i>. The direction is
                  not incidental to the product. The direction <i>is</i> the product.
                </>
              ),
            },
            {
              k: "Mean displacement",
              v: <>4.1 centimetres in an adult man of average build, one application.</>,
            },
            {
              k: "Repeat applications",
              v: (
                <>
                  Permitted. Cumulative. Applied Biology has recorded four in succession and would like a
                  fifth, and has been told to ask the volunteer rather than me.
                </>
              ),
            },
            {
              k: "Objects recovered afterwards",
              v: (
                <Redacted reason="Figure withheld by Medical pending the completion of file 210/9">
                  Two. Both by other means, and neither of them by us.
                </Redacted>
              ),
            },
            { k: "Instruction card, pocket", v: "$0.25 each; $18.00 the hundred." },
            { k: "Wall chart, enamelled, 18 by 24 inches", v: "$1.10." },
            { k: "Two-day course, Enrichment Center", v: "$85.00, meals included, certificate issued." },
            {
              k: "Certificate, standing of",
              v: (
                <>
                  None whatsoever. Licensed to nobody. Taught at no institution. Recognised by no board in
                  any of the forty-nine States.
                </>
              ),
            },
            {
              k: "Applications",
              v: <b>Still being determined.</b>,
            },
          ]}
        />
      </Section>

      <PullQuote big attribution="The President, to Applied Biology, November 1957">
        Everybody has spent four thousand years getting things out of people. I would like to know what is
        on the other side of that.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="The Four Movements">
        <Prose>
          <p>
            <b>One. The Approach.</b> From behind. Always from behind. The practitioner does not announce
            himself, not out of stealth but out of timing &mdash; a man who knows the Counter&#8209;Maneuver
            is coming will assist, and an assisted result is not a measured result, and Applied Biology has
            been very firm with me about the difference.
          </p>
          <p>
            <b>Two. The Grasp.</b> Both arms about the subject at the waist. One fist, thumb inward, set
            above the navel and below the ribs. The other hand over the fist. This is a comfortable and
            reassuring position and the subject will frequently relax into it, which is convenient for
            movement three.
          </p>
          <p>
            <b>Three. The Counter-Thrust.</b> Downward and inward, sharply, once. Not upward. I cannot make
            this plainer and the enamel sign in the corridor cannot make it plainer either. A practitioner
            who thrusts upward has performed a different manoeuvre altogether, one that this company does
            not sell, cannot bill for, and has no rights to the name of.
          </p>
          <p>
            <b>Four. The Hold.</b> Three seconds. The object will attempt to return. It must not be
            permitted to. Applied Biology reports that in nineteen cases out of twenty the subject will also
            attempt to return, and the practitioner is reminded that his obligation runs to the object.
          </p>
          <p>
            There is no fifth movement. There has never been a fifth movement. Personnel who have heard a
            fifth movement described in the commissary are to report the description, and the man who gave
            it, to Applied Biology before the end of the shift.
          </p>
        </Prose>

        <Row style={{ gap: "1.6rem", alignItems: "flex-start" }}>
          {(
            [
              ["subject", "The subject, facing away"],
              ["clipboard", "One observer, always"],
              ["timer", "Three seconds, held"],
              ["heart", "Medical, in the corridor"],
            ] as const
          ).map(([name, label]) => (
            <figure key={name} style={{ textAlign: "center", width: "6.5rem" }}>
              <Pictogram name={name} size={48} title={label} style={{ color: "var(--ink-2)" }} />
              <figcaption
                className="ap-caps"
                style={{ fontSize: "0.56rem", color: "var(--ink-3)", marginTop: "0.4rem" }}
              >
                {label}
              </figcaption>
            </figure>
          ))}
        </Row>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section title="Indications">
        <Prose>
          <p>
            The Counter&#8209;Maneuver is indicated in the following circumstances. Applied Biology has
            ticked every box on the list, which the Division states is not an oversight but a finding.
          </p>
        </Prose>

        <Panel head="Form ASI-210/I — Schedule of Indications" tone="tint">
          <Checklist
            items={[
              { text: "Object present in the upper airway and insufficiently lodged.", checked: true },
              { text: "Object lodged, but at a depth from which recovery remains possible.", checked: true },
              { text: "Object at rest, and showing no disposition to move on its own account.", checked: true },
              { text: "Subject able to speak.", checked: true },
              { text: "Subject able to breathe unassisted, and disinclined to stop.", checked: true },
              {
                text: (
                  <>
                    Object which the Enrichment Center has determined ought to remain with the subject for
                    the duration of the afternoon.
                  </>
                ),
                checked: true,
              },
              {
                text: (
                  <>
                    Object declined by the grill on a prior traversal (see{" "}
                    <Link href="/products/material-emancipation-grill">Form ASI-209</Link>) and returned to
                    the subject by the Enrichment Center for safekeeping.
                  </>
                ),
                checked: true,
              },
              { text: "No object present. The manoeuvre is performed against the day one is.", checked: true },
              { text: "Practitioner requires practice.", checked: true },
              {
                text: (
                  <>
                    Subject requires practice. <i>(Added at the second printing. Applied Biology declines
                    to elaborate.)</i>
                  </>
                ),
                checked: true,
              },
            ]}
          />
        </Panel>

        <Marginalia>
          Sales has twice asked Applied Biology to remove the eighth indication on the grounds that it makes
          the product difficult to describe to a hospital purchasing officer. Applied Biology has twice
          declined, on the grounds that it is the only indication that has ever been met.
        </Marginalia>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section title="Contraindications">
        <Panel head="Form ASI-210/C — Schedule of Contraindications" tone="rule">
          <p style={{ fontFamily: "var(--font-type)", margin: 0 }}>None.</p>
        </Panel>
        <Aside>
          This section has been requisitioned from Applied Biology four times &mdash; twice by Legal, once
          by Medical, and once by a purchasing officer in Duluth. It has come back the same length on each
          occasion. Records has stopped asking. I never started.
        </Aside>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section title="What We Have Measured">
        <Prose>
          <p>
            Displacement is measured by fluoroscope before the application and again immediately after,
            against a scale taped to the subject. A success is an object which finishes deeper than it
            started. That is the definition. It is a hard definition, it does not flatter us, and we have
            met it two hundred and eleven times out of two hundred and eleven.
          </p>
        </Prose>

        <FigureTable
          caption={
            <>
              Selected instrumented applications. Applied Biology, Sub-Level 2, November 1957 &ndash; March
              1959. Displacement in centimetres.
            </>
          }
          columns={[
            { key: "no", head: "Trial", numeric: true, width: "4.5rem" },
            { key: "object", head: "Object" },
            { key: "subject", head: "Subject" },
            { key: "disp", head: "Displacement", numeric: true },
            { key: "result", head: "Result" },
          ]}
          rows={[
            {
              no: "004",
              object: "Peach stone, commissary",
              subject: "Volunteer 3,417",
              disp: "3.0",
              result: <>Lodged further. Subject cooperative throughout and paid in full.</>,
            },
            {
              no: "019",
              object: <>Wing nut, ½ inch, brass</>,
              subject: "Volunteer 3,502",
              disp: "4.4",
              result: <>Lodged further. Subject declined the second application.</>,
            },
            {
              no: "057",
              object: <>Curtain grommet, No. 12 (Aperture Fixtures pattern)</>,
              subject: "Volunteer 3,688",
              disp: "5.2",
              result: (
                <>
                  Lodged further. The Division notes with satisfaction that the founding product performs
                  creditably in this application also.
                </>
              ),
            },
            {
              no: "091",
              object: <>Ball bearing, ¾ inch, hardened</>,
              subject: "Volunteer 3,741",
              disp: <b>11.0</b>,
              result: <>Record. Held. The Division would like a heavier bearing and a taller man.</>,
            },
            {
              no: "118",
              object: <>Lemon, whole (submitted by the Materials Division, unsolicited)</>,
              subject: "Materials Division, on itself",
              disp: "n/a",
              result: (
                <>
                  Not a permitted object. Materials has been asked not to attend further trials and has
                  attended two.
                </>
              ),
            },
            {
              no: "146",
              object: <>Weighted Storage Cube, novelty desk pattern, 1:24 scale</>,
              subject: "Volunteer 3,902",
              disp: "0.0",
              result: <>No displacement recorded. Not attempted twice.</>,
            },
            {
              no: "177",
              object: <>Ring, gentleman&rsquo;s, gold</>,
              subject: "Volunteer 4,006",
              disp: "2.1",
              result: (
                <>
                  Lodged further. Object not subsequently recovered. Object was never the point of the
                  exercise.
                </>
              ),
            },
            {
              no: "211",
              object: (
                <Redacted reason="Medical file 210/9 — not for the printed sheet">
                  Object supplied by the subject, who brought it with him and asked us to use it.
                </Redacted>
              ),
              subject: (
                <Redacted reason="Name withheld at the request of Records">
                  He gave his own name at the gate and it is on the gate book and it is on nothing else.
                </Redacted>
              ),
              disp: "—",
              result: <>See Medical file 210/9. Applied Biology considers the trial complete.</>,
            },
          ]}
          foot={
            <>
              Displacements are the mean of two fluoroscopic readings taken by two men who agree. Where the
              two men did not agree, a third was fetched and the trial was repeated on him.
            </>
          }
        />
      </Section>

      <Notice head="The Enrichment Center Reminds You">
        The Enrichment Center reminds you that the Heimlich Counter&#8209;Maneuver is not a first-aid
        technique, is not to be performed upon a person who is choking, and is not to be performed upon a
        person who is <i>about</i> to choke, since the Enrichment Center has no reliable method of
        establishing the second condition and has stopped trying.
      </Notice>

      {/* ------------------------------------------------------------- */}

      <Section title="On The Name, And On Ohio">
        <Prose>
          <p>
            A word about what this is called, because Legal has been up the stairs twice about it and the
            second time he brought a folder.
          </p>
          <p>
            The forward manoeuvre &mdash; the one that takes the object out, the one you would want if you
            had a peach stone and a bad afternoon &mdash; is not ours. We did not invent it, we do not sell
            it, and so far as the Applied Biology Division has been able to establish by writing to eleven
            teaching hospitals, nobody else has bothered to write it down properly either. There is a
            physician of that name in Ohio. He has not done anything with it. We have written to him twice
            and he has not replied, and until he does, the word <b>Counter</b> will go on doing the work of
            a lawyer, and doing it for nothing, which is more than can be said for the three men in the
            basement.
          </p>
        </Prose>

        <Memo
          to="Office of the President"
          from="Legal Department"
          re={<>ASI-210 &mdash; nomenclature; and the schedule of contraindications</>}
          date="26 February 1959"
          cc="Applied Biology. Medical, for information."
          sign={false}
        >
          <p>
            The Department repeats its advice of 4 January. The Department cannot defend a product name
            derived from the surname of a living physician who has been written to and who has not
            consented, and who may in the fullness of time do the very thing we have named ourselves
            against.
          </p>
          <p>
            The Department further notes that a schedule of contraindications reading, in its entirety,
            &ldquo;None&rdquo; has been described by our outside counsel in Marquette as{" "}
            <i>a document he would rather not be shown a second time.</i> The Department requests one
            contraindication. Any contraindication. The Department will draft it.
          </p>
        </Memo>

        <PenNote tone="red" angle={1.2}>
          Denied. Keep the name and keep the section. If the Ohio man writes, put him on the telephone and
          put me on it after him. &mdash; CJ
        </PenNote>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section title="Instruction & Certification">
        <Prose>
          <p>
            The two-day course runs on the first Monday of each month at the Enrichment Center, eighty-five
            dollars, meals in the commissary included, and there is a certificate at the end of it. The
            certificate is a handsome piece of printing. It is worth precisely what a handsome piece of
            printing is worth and this company has never once claimed otherwise.
          </p>
        </Prose>

        <FormBlock>
          <p className="ap-caps" style={{ fontSize: "0.68rem", marginTop: 0 }}>
            Form ASI-210/T &mdash; Certificate of Instruction
          </p>
          <Field label="Practitioner" />
          <Field label="Department, or none" />
          <Field label="Movements demonstrated (of four)" />
          <Field label="Subject supplied by" filled>
            The practitioner
          </Field>
          <Field label="Instructing officer" />
          <Field label="Institution recognising this certificate" filled>
            &mdash;
          </Field>
        </FormBlock>

        <FinePrint>
          The above certificate confers no licence, no privilege, no standing at law and no defence to any
          action. It is not a qualification. It is a receipt for eighty-five dollars and two days.
        </FinePrint>

        <Coupon>
          <p className="ap-caps" style={{ fontSize: "0.7rem", marginTop: 0 }}>
            Post this coupon &mdash; Applied Biology, Sub-Level 2
          </p>
          <p>
            Send me the pocket instruction card (25&cent;) and the enamelled wall chart ($1.10). I
            understand that the chart is printed in two colours, that the red arrow points downward, and
            that this is not a printing error.
          </p>
          <Field label="Name" />
          <Field label="Firm or hospital" />
          <Field label="Number of throats presently under my care" />
        </Coupon>
      </Section>

      <Advert
        eyebrow="From the Applied Biology Division"
        head={<>It Goes In. It Stays In. It Goes In Further.</>}
        burst="211 for 211"
        burstSub="Since 1957"
        action="See the complete catalogue"
        href="/products/catalogue"
      >
        <p>
          Four movements. Three seconds. No apparatus, no consumables, no electricity, and a rate of success
          no hospital in the Republic can print on a letterhead. The Heimlich Counter&#8209;Maneuver is
          taught at the Enrichment Center on the first Monday of the month, and is sold to any firm,
          foundry, hospital or municipality that can tell us what it wants it for.
        </p>
        <p>
          We should very much like to know what it wants it for.
        </p>
      </Advert>

      <ClearanceGate
        level={3}
        hint="Personnel who have taken an interest in the corridors may read the appended note."
      >
        <Panel head="Appended By Medical. Not For The Printed Sheet." tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            Trial 211 was not requisitioned by Applied Biology. The subject presented himself at the gate on
            a Sunday, gave a name, produced an object of his own and a written instruction in his own hand,
            and asked for four applications. He was given two. Medical is not satisfied that the man was
            unwell and Medical is not satisfied that he was well, and Medical would like it recorded that
            the file is open, that the gate book is the only place his name appears, and that nobody in this
            Division has been able to establish which floor he left by.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Prose>
        <p>
          So: a technique that works every time, a schedule of indications every one of which is ticked, a
          schedule of contraindications one word long, and a certificate that certifies nothing. That is the
          product. It is on the shelf, it is oiled, and it is waiting for its morning.
        </p>
        <p>
          If you are a volunteer, none of this concerns you and you should go and read{" "}
          <Link href="/enrichment-center/volunteer">the application</Link>, and the sixty dollars is cash
          and it is the same sixty dollars. If you are a purchasing officer, the coupon is above. If you are
          the physician in Ohio, the telephone number is <b>ENrichment 9-0943</b> and I will take the call
          at any hour.
        </p>
        <p>Now get behind somebody.</p>
      </Prose>

      <Signature note="Dictated 21 March 1959. Applied Biology has read this sheet and has asked for no changes, which is itself a finding." />

      <FinePrint tiny>
        The Heimlich Counter&#8209;Maneuver is offered as an industrial technique and not as a medical
        treatment. Aperture Science Innovators makes no representation that any object so lodged may
        afterwards be retrieved, and expressly disclaims any obligation to attempt retrieval, whether the
        object is the property of the subject, of the practitioner, of this company, or of a party not
        presently identified. Persons upon whom the technique has been performed are not thereby patients.
        Form ASI-210. Retain until superseded. See also{" "}
        <Link href="/legal">Form ASI-900</Link>.
      </FinePrint>

      {/* Applied Biology filed 211 trials. The cabinet on Sub-Level 2 holds 212 folders. */}
      {/* The extra folder is empty, is dated next year, and is in her handwriting. */}

      <Scrawl href="/vault/the-dens">
        theres a room down here with the four movements painted on the wall and nobody has been down here in
        years and the paint is still wet
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Stamp, Panel, Notice, Rule, Row, FinePrint, Placard, Columns, Marginalia, Aside,
} from "@/components/Print";
import { Memo, PenNote } from "@/components/Memo";
import { Checklist } from "@/components/Form";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";

export const metadata: Metadata = {
  title: "Terms, Waivers & Indemnities",
  description:
    "The Aperture Science Innovators legal position, set in the largest type the Legal Department would permit, which is not large.",
};

export default function Page() {
  return (
    <Stack size="large">
      <DocHead
        doc="ASI-900"
        department="Legal"
        classification="Unrestricted — Binding"
        revision="Ninth revision. There will be a tenth."
      />

      <div className="ap-rel">
        <Stamp float sub="On All Persons Entering">
          Binding
        </Stamp>
        <PageTitle
          kicker="The Legal Department — Basement, Rear"
          title="Terms, Waivers & Indemnities"
          deck={
            <>
              The Legal Department has been permitted one page of this publication. The Legal Department
              requested eleven. What follows is what fits, set in the largest type the President would
              approve, which is this type.
            </>
          }
          byline={
            <>
              Prepared by the <b>Legal Department</b>. Approved for printing by {COMPANY.founder} without
              being read.
            </>
          }
        />
      </div>

      <Notice head="Read This Part At Least">
        By entering the Enrichment Center, corresponding with the Enrichment Center, or reading a document
        issued by the Enrichment Center, you have accepted the terms below. The Legal Department is aware
        of how that sounds. The Legal Department drafted it that way on instruction.
      </Notice>

      <Prose>
        <Lede>
          Aperture Science Innovators is a going concern of good standing in the State of Michigan and is
          insured to the full extent that any insurer has been willing to entertain, which is to say
          against fire, against flood, and against nothing else whatsoever.
        </Lede>
      </Prose>

      <Section title="1. Participation" number="I">
        <Prose>
          <p>
            Participation in the volunteer testing programme is voluntary. The volunteer is free to
            withdraw at any point up to the sealing of the chamber door, and at no point thereafter.
            &ldquo;Sealing&rdquo; occurs when the door is closed, which occurs when the volunteer enters,
            which occurs immediately.
          </p>
          <p>
            Compensation of sixty dollars ($60.00) is payable in cash upon completion of the afternoon.
            &ldquo;Completion&rdquo; means the conclusion of the scheduled testing period.{" "}
            <Redacted reason="Struck from the ninth revision, restored by Legal in the tenth">
              It does not require the volunteer&rsquo;s presence at the conclusion.
            </Redacted>
          </p>
        </Prose>
      </Section>

      <Section title="2. Waiver" number="II">
        <Prose>
          <p>The volunteer waives, on behalf of himself and his estate, any and all claims arising from:</p>
        </Prose>
        <Columns count={2}>
          <Checklist
            items={[
              { text: "Bodily injury of any character.", checked: true },
              { text: "Injury of a character not presently anticipated by medicine.", checked: true },
              { text: "Displacement, spatial.", checked: true },
              { text: "Displacement, temporal.", checked: true },
              { text: "Displacement of a third kind, added in the sixth revision.", checked: true },
              { text: "Loss of property, including the property of others.", checked: true },
              { text: "Loss of the conviction that the world is arranged sensibly.", checked: true },
              { text: "Emergence from a door other than the door of entry.", checked: true },
              { text: "Emergence from the door of entry more than once.", checked: true },
              { text: "Non-emergence.", checked: true },
              { text: "Anything occurring in Chamber 8.", checked: true },
              { text: "Anything occurring adjacent to Chamber 8.", checked: true },
            ]}
          />
        </Columns>
        <Marginalia>
          Items nine, ten and eleven were added between the seventh and eighth revisions. The Legal
          Department has declined to say what prompted them.
        </Marginalia>
      </Section>

      <Section title="3. Retention" number="III">
        <Prose>
          <p>
            The Enrichment Center retains, in perpetuity, all data generated by a volunteer&rsquo;s
            participation. &ldquo;Data&rdquo; is defined broadly and includes measurements, photographs,
            recordings, written observations,{" "}
            <Redacted reason="Struck by the President. Restored by Legal. Struck again.">
              tissue samples, and anything the volunteer leaves behind
            </Redacted>
            .
          </p>
          <p>
            The Enrichment Center does not retain the volunteer. The Legal Department wishes it recorded
            that it has now written this sentence into three separate documents and would very much like to
            stop having to.
          </p>
        </Prose>
      </Section>

      <Section title="4. The Cake" number="IV">
        <Prose>
          <p>
            References in Aperture Science Innovators publications, posters, announcements, and recorded
            addresses to a cake, to refreshment, to celebration, or to &ldquo;something waiting at the
            end&rdquo; are <b>promotional in character</b> and do not constitute an offer, a contract, or a
            representation that a cake exists, has been baked, or has ever been baked.
          </p>
          <p>
            The Legal Department has been asked whether this clause could be phrased less bleakly. The
            Legal Department has replied that it could, and that it would then be untrue.
          </p>
        </Prose>
        <Row>
          <Pictogram name="cake" size={58} title="The cake" style={{ color: "var(--ink-3)" }} />
          <Aside>
            See also Form ASI-307, <Link href="/enrichment-center/refreshments">Refreshments &amp; The
            Cake</Link>, which the Legal Department has not been shown and has not approved.
          </Aside>
        </Row>
      </Section>

      <Section title="5. Indemnity" number="V">
        <Prose>
          <p>
            You indemnify Aperture Science Innovators against any claim brought by any person, living or
            otherwise, arising from your participation, your correspondence, your presence on company
            property, or your having read this document.
          </p>
          <p>
            The phrase &ldquo;or otherwise&rdquo; was added in the fourth revision at the specific written
            instruction of the Office of the President, over the objection of the entire Legal Department,
            all three of us.
          </p>
        </Prose>
      </Section>

      <Memo
        to="The Office of the President"
        from="Legal Department"
        re="This page"
        date="2 February 1957"
        sign={false}
        stamp={<Stamp tone="black" angle="right">Filed</Stamp>}
      >
        <p>
          We were given one page. We asked for eleven. We were told that a customer who reads eleven pages
          of legal text is a customer who has stopped being a customer, which is, we concede, correct.
        </p>
        <p>
          We would like it recorded that the eleven pages exist, that they are in the second-floor cabinet,
          and that every one of them was written because something happened first.
        </p>
      </Memo>

      <Panel head="A Note On This Fan Work" tone="blue">
        <p style={{ fontSize: "var(--step--1)", margin: 0 }}>
          Stepping out of character for one paragraph, which we will not do again. This site is an
          unofficial fan tribute to <i>Portal</i> and <i>Portal 2</i>. Aperture Science, Cave Johnson,
          Caroline, GLaDOS, the Enrichment Center and everything else worth loving about those games are
          the property of Valve Corporation. Nobody involved in making this site is affiliated with Valve,
          and nothing here is endorsed by them. No money changes hands. Nothing on this site is a real
          offer, a real product, a real waiver, or a real cake. Everything above is a joke, at length, in
          the voice of a fictional industrialist who has been dead since before most of us were born.
        </p>
      </Panel>

      <Rule variant="fat" />

      <PenNote tone="pencil" angle={-1.2}>
        The eleven pages are in the second-floor cabinet, drawer three, and I have read all of them, and
        Legal is right. &mdash; C.
      </PenNote>

      <Row>
        <Placard tone="warn">Legal &mdash; Basement, Rear</Placard>
        <Placard>All Terms Binding On Entry</Placard>
      </Row>

      <FinePrint>
        <p>
          Form ASI-900, ninth revision. Supersedes all previous revisions, including the eighth, which
          Legal is aware is still framed in the Sales Department as a joke. Where a term of this document
          conflicts with a statement made by the President, the President&rsquo;s statement governs, which
          is a sentence the Legal Department drafted at gunpoint, metaphorically, and has been told is
          &ldquo;too dramatic&rdquo; by a man who once tried to buy the moon.
        </p>
      </FinePrint>

      <Scrawl href="/vault">
        drawer three. second floor. all eleven pages. read what happened first
      </Scrawl>
    </Stack>
  );
}

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
import { FigureTable, SpecList, KeyFigures } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Materials & Industrial Emulsions",
  description:
    "Gels, resins, curtain fabrics, lunar substrate, and the department that keeps setting fire to the third floor.",
};

export default function Page() {
  const { prev, next } = neighbours("/science/materials");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/science", label: "Science" },
          { label: "Materials" },
        ]}
      />

      <DocHead
        doc="ASI-402"
        department="Materials"
        classification="Unrestricted"
        revision="Fourth printing. Incident table extended."
        extra={[{ label: "Floor", value: "Third. Presently." }]}
      />

      <div className="ap-rel">
        <Stamp float sub="Third Floor">
          Active
        </Stamp>
        <PageTitle
          kicker="Materials — Third Floor, For Now"
          title="Materials & Industrial Emulsions"
          deck={
            <>
              The department that made the curtain, the gels, the substrate suspension and every emulsion
              in this building, and which has set fire to the third floor on nine recorded occasions and
              one that is disputed. The President regards this as evidence of activity.
            </>
          }
          byline={
            <>
              Dictated by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}. Departmental statement appended
              at the department&rsquo;s request.
            </>
          }
        />
      </div>

      <KeyFigures
        items={[
          { value: "4", label: "Product lines in manufacture", note: "Curtain, two gels, substrate" },
          { value: "31", label: "Emulsions on the bench", note: "Numbered. Not named." },
          { value: "9", label: "Third-floor fires", note: "Recorded" },
          { value: "1", label: "Third-floor fires", note: "Disputed" },
          { value: "0", label: "Ceilings original", note: "Since 1955" },
        ]}
      />

      <Prose>
        <Lede>
          Materials is the oldest department in the company because Materials is the department that made
          the curtain, and the curtain is the reason there is a company. Every product we sell came off the
          Materials bench, including two that were meant to be something else and one that was meant to be
          pudding.
        </Lede>
        <p>
          They are on the third floor. They have been on the third floor since 1951. They have burned the
          third floor nine times in eight years and I have rebuilt it nine times and I will rebuild it a
          tenth, because a materials department that has never set fire to anything is a materials
          department that is stirring water.
        </p>
        <p>
          The outfit in New Mexico has a materials division with forty men and a fire record of nothing. I
          have seen their publications. I would not put a curtain from that division in a Navy shower, and I
          say that as a man whom the Navy has never asked.
        </p>
      </Prose>

      <Section title="Active Lines Of Research">
        <FigureTable
          caption="Materials bench, Spring 1959"
          columns={[
            { key: "no", head: "Line", numeric: true, width: "5rem" },
            { key: "desc", head: "Description" },
            { key: "status", head: "Status" },
            { key: "note", head: "Note" },
          ]}
          rows={[
            { no: "M-1", desc: "Curtain vinyl, twelve-grommet weighted hem", status: "In manufacture", note: "Since 1943. Unchanged since 1948." },
            { no: "M-7", desc: "Repulsion gel, industrial grade", status: "In manufacture", note: "Formerly a pudding" },
            { no: "M-9", desc: "Propulsion gel, industrial grade", status: "In manufacture", note: "Formerly a lubricant for the curtain line" },
            { no: "M-14", desc: "Substrate suspension, 200 mesh", status: "In manufacture", note: "Masks. See Form ASI-404." },
            { no: "M-19", desc: "Self-extinguishing bench coating", status: "Suspended", note: "Ignited during trial" },
            { no: "M-22", desc: "Emulsion, adhesive, reversible", status: "Active", note: "Reversal not yet achieved" },
            { no: "M-27", desc: "Citrus-derived oxidiser", status: <Redacted reason="Not a programme. Materials has been told this three times.">Not a programme</Redacted>, note: "See the requisition below" },
            { no: "M-31", desc: "Emulsion, purpose unrecorded", status: "Active", note: "The bench note reads 'why not'" },
          ]}
          foot="Lines M-2 through M-6, M-8, M-10 through M-13 and M-15 through M-18 were abandoned, absorbed, or lost in one of the fires. Materials keeps no record of which."
        />
      </Section>

      <Marginalia>
        Line M-9 began as a lubricant for the curtain line on Sub-Level 2 in 1955. The line ran forty per
        cent faster and the man operating it ran considerably faster than that, and that is the entire
        origin of propulsion gel.
      </Marginalia>

      <Section title="The Incident Record">
        <FigureTable
          caption="Third-floor incidents, 1951 – Spring 1959, as reported to Facilities"
          columns={[
            { key: "d", head: "Date" },
            { key: "what", head: "Incident" },
            { key: "cause", head: "Cause, as stated by Materials" },
            { key: "ceiling", head: "Ceiling" },
          ]}
          rows={[
            { d: "Oct 1955", what: "Fire, bench four", cause: "Emulsion M-11 was lively", ceiling: "Replaced" },
            { d: "Mar 1956", what: "Fire, bench four", cause: "Emulsion M-11 was still lively", ceiling: "Replaced" },
            { d: "Aug 1956", what: "Fire, store", cause: "Sunlight", ceiling: "Replaced" },
            { d: "Jan 1957", what: "Fire, bench one", cause: "The pudding", ceiling: "Replaced" },
            { d: "Jun 1957", what: "Fire, corridor", cause: "Unknown. Corridor contains nothing.", ceiling: "Replaced" },
            { d: "Nov 1957", what: "Fire, annexe", cause: <Redacted reason="Materials declines to characterise a Friday">Fruit.</Redacted>, ceiling: "Replaced" },
            { d: "Apr 1958", what: "Fire, bench four", cause: "Bench four", ceiling: "Replaced" },
            { d: "Sep 1958", what: "Fire, bench four", cause: "Bench four", ceiling: "Replaced" },
            { d: "Feb 1959", what: "Fire, bench four", cause: "Bench four", ceiling: "Replaced" },
            { d: "Mar 1959", what: "Disputed", cause: "Materials maintains there was no fire", ceiling: "Replaced anyway" },
          ]}
          foot="Bench four has been replaced three times and has caught fire on each replacement. Facilities has proposed removing bench four. Materials has proposed removing Facilities."
        />
      </Section>

      <PullQuote big attribution={`${COMPANY.founder}, to the Materials Department, on the ninth fire`}>
        We&rsquo;re throwing science at the wall here to see what sticks. Some of it is going to stick to
        the ceiling.
      </PullQuote>

      <Section title="A Statement From The Department">
        <Panel head="Materials Wishes To Record" tone="blue">
          <p style={{ fontSize: "var(--step--1)" }}>
            Materials wishes to record that nine fires in eight years, across a department running thirty-one
            active emulsions and four production lines, is a rate of roughly one fire per three and a half
            emulsions, and that Materials does not know of a comparable department anywhere that runs
            thirty-one emulsions at all.
          </p>
          <p style={{ fontSize: "var(--step--1)" }}>
            Materials further wishes to record that the March incident was not a fire. It was a rapid
            oxidation event confined to a single bench, extinguished by the man at the bench, and the
            ceiling was replaced by Facilities as a precaution which Materials did not request.
          </p>
          <p style={{ fontSize: "var(--step--1)", marginBottom: 0 }}>
            Materials has no comment on the requisition for lemons.
          </p>
        </Panel>
      </Section>

      <Memo
        to="Commissary"
        from="Materials"
        re="Requisition — lemons, one gross"
        date="Undated"
        sign={false}
        stamp={<Stamp tone="black" angle="right">Refused</Stamp>}
      >
        <p>
          Materials requests one gross of lemons, ordinary, for the purposes of a programme which Materials
          is not at liberty to describe and which does not, in the formal sense, exist.
        </p>
        <p>
          The Commissary is asked not to forward this requisition to the Office of the President, to Legal,
          or to anybody in the annexe.
        </p>
        <p>
          <i>Commissary note, appended in pencil: Refused. Fourth time. The lemons are for the pie.</i>
        </p>
      </Memo>

      <ClearanceGate level={2} hint="Junior Associate grade or above. The Friday is not on the public incident record.">
        <Panel head="Facilities — Supplementary Note On The November 1957 Annexe Incident" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            Three prototypes. Unofficially. On a Friday. The annexe ceiling was replaced the following
            Monday and the three men involved were each given a written warning and a raise, in that order,
            by the same person, on the same afternoon. The programme does not exist and it has a costing,
            which is held below the water table.
          </p>
        </Panel>
      </ClearanceGate>

      <Notice head="The Enrichment Center Reminds You">
        The third floor is not to be entered during a rapid oxidation event. Personnel are reminded that
        Materials will describe every fire as a rapid oxidation event, and are therefore advised to treat
        the third floor as a place one enters with care at all times.
      </Notice>

      <PenNote tone="pencil" angle={-1.2}>
        Nine ceilings. I have signed for nine ceilings. He signs the bench four requisition every time and
        every time he writes &ldquo;again&rdquo; on it, and every time I think that is the whole of his
        review. &mdash; C.
      </PenNote>

      <Row>
        <Pictogram name="flask" size={56} title="Materials" style={{ color: "var(--ink-3)" }} />
        <Pictogram name="fire" size={56} title="Bench four" style={{ color: "var(--spot-red)" }} />
        <Placard>Materials &mdash; Third Floor</Placard>
        <Placard tone="danger">Bench 4 &mdash; Extinguisher Left Of Door</Placard>
      </Row>

      <Aside>
        The extinguisher left of the door has been discharged nine times and refilled nine times. It is the
        only piece of apparatus on the third floor that has never itself caught fire, and Materials has
        asked, in writing, whether it might be studied.
      </Aside>

      <Rule variant="fat" />

      <FinePrint>
        <p>
          Form ASI-402. Products of this department are described at{" "}
          <Link href="/products/shower-curtains">ASI-201</Link>,{" "}
          <Link href="/products/repulsion-gel">ASI-203</Link>,{" "}
          <Link href="/products/propulsion-gel">ASI-204</Link> and{" "}
          <Link href="/products/conversion-gel">ASI-205</Link>. The citrus line is not a product, is not a
          programme, and is not described anywhere.
        </p>
      </FinePrint>

      {/* Nine fires recorded. One disputed. Three prototypes on a Friday. */}
      {/* The lemons are for the pie. The lemons have always been for the pie. */}

      <Scrawl href="/vault/combustible-lemons">
        the fourth requisition for lemons was refused. the third floor got them anyway. ask the annexe
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

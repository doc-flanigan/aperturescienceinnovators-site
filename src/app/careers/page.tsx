import type { Metadata } from "next";
import { SECTIONS } from "@/lib/structure";
import { SectionIndex } from "@/components/SectionIndex";
import { Advert } from "@/components/Ad";
import { Notice, FinePrint, Row, Placard } from "@/components/Print";
import { Scrawl } from "@/components/Secret";

const section = SECTIONS.find((s) => s.path === "/careers")!;

export const metadata: Metadata = {
  title: "Employment",
  description:
    "Positions available at Aperture Science Innovators: benefits, the company town, the employee handbook and Bring Your Daughter To Work Day.",
};

export default function Page() {
  return (
    <SectionIndex
      section={section}
      doc="ASI-500"
      department="Personnel"
      kicker="Personnel"
      title="Employment"
      deck={
        <>
          Aperture Science Innovators is hiring. Aperture Science Innovators is always hiring. There are two
          reasons for that sentence and Personnel is authorised to discuss the first one.
        </>
      }
      icons={{
        "/careers/openings": "handshake",
        "/careers/benefits": "dollar",
        "/careers/handbook": "clipboard",
        "/careers/bring-your-daughter-to-work-day": "heart",
        "/careers/employee-of-the-month": "atom",
      }}
      after={
        <>
          <Advert
            eyebrow="Personnel Department — Second Floor"
            head="Bring Us Your Best Idea. We Will Fund It By Thursday."
            burst="HIRING"
            burstSub="ALL GRADES"
            action="See Positions Available"
            href="/careers/openings"
          >
            <p>
              No committee. No review board. No three-year grant cycle. One man reads your proposal, and if
              he likes it you have a machine shop, a budget and a deadline before the end of the week. If he
              does not like it he will tell you so to your face, which is more than most employers manage.
            </p>
          </Advert>
          <Row>
            <Placard>Personnel — Second Floor</Placard>
            <Placard tone="warn">Hard Hats Below Sub-Level 2</Placard>
          </Row>
          <Notice head="The Enrichment Center Reminds You">
            Employment at the Enrichment Center is not participation in the testing programme. These are
            separate programmes, administered by separate departments, on separate forms, in the same
            building, by many of the same people.
          </Notice>
          <FinePrint tiny>
            Aperture Science Innovators considers applications from all qualified persons and has never once
            asked to see a diploma. Form ASI-500. Personnel Department, second floor, ask for the window
            marked PERSONNEL and not the window marked PERSONNEL (ARCHIVE).
          </FinePrint>
          <Scrawl href="/careers/bring-your-daughter-to-work-day">
            check the science fair photographs. count the children. count them again next year
          </Scrawl>
        </>
      }
    >
      <p>
        Five sheets: what we are hiring for, what we pay you in and around, the handbook condensed to one
        page, our beloved annual science fair, and the honour that has rotated rather faster than Personnel
        anticipated.
      </p>
    </SectionIndex>
  );
}

import type { Metadata } from "next";
import { SECTIONS } from "@/lib/structure";
import { SectionIndex } from "@/components/SectionIndex";
import { Notice, FinePrint, Rule } from "@/components/Print";
import { PenNote } from "@/components/Memo";
import { Scrawl } from "@/components/Secret";

const section = SECTIONS.find((s) => s.path === "/bulletin")!;

export const metadata: Metadata = {
  title: "The Aperture Bulletin",
  description:
    "The house organ of Aperture Science Innovators: quarterly bulletins and the interoffice memoranda of Cave Johnson, reproduced without editing.",
};

export default function Page() {
  return (
    <SectionIndex
      section={section}
      doc="ASI-700"
      department="Corporate Communications"
      kicker="The House Organ"
      title="The Aperture Bulletin"
      deck={
        <>
          Published whenever there is news, and on several occasions when there was not. Circulated to all
          personnel, to the Army, to eleven newspapers who have never once printed a word of it, and to one
          address in New Mexico that the President insists upon.
        </>
      }
      icons={{
        "/bulletin/spring-1959": "clipboard",
        "/bulletin/winter-1956": "clipboard",
        "/bulletin/memoranda": "timer",
      }}
      after={
        <>
          <Rule variant="double" />
          <Notice head="Corrections">
            The Winter 1956 issue reported that no volunteer had been lost in the fourth quarter. This was
            correct at the time of setting and remained correct for eleven days.
          </Notice>
          <PenNote tone="pencil" angle={-1.2}>
            Cave — please stop dictating memoranda at eleven at night. The steno pool has a bus to catch and
            the bus does not wait for the Materials Department. &mdash; C.
          </PenNote>
          <FinePrint tiny>
            The Bulletin is set by the Enrichment Center Press on the second floor and printed on the third.
            Contributions from all departments are welcome and have never once been received.
          </FinePrint>
          <Scrawl href="/terminal">
            they print the good news on paper. the other news goes on the machine downstairs
          </Scrawl>
        </>
      }
    >
      <p>
        Three sheets are presently in circulation: this spring&rsquo;s issue, last winter&rsquo;s issue, and
        a standing collection of the President&rsquo;s interoffice memoranda, reproduced exactly as
        dictated, against the repeated written advice of the Legal Department.
      </p>
    </SectionIndex>
  );
}

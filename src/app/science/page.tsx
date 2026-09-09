import type { Metadata } from "next";
import { SECTIONS } from "@/lib/structure";
import { SectionIndex } from "@/components/SectionIndex";
import { Notice, PullQuote, Panel } from "@/components/Print";
import { Redacted, Scrawl } from "@/components/Secret";

const section = SECTIONS.find((s) => s.path === "/science")!;

export const metadata: Metadata = {
  title: "Research Divisions",
  description:
    "Applied quantum tunnelling, industrial emulsions, thinking machines, the lunar substrate programme and applied biology at Aperture Science Innovators.",
};

export default function Page() {
  return (
    <SectionIndex
      section={section}
      doc="ASI-400"
      department="Research & Development"
      kicker="Research & Development"
      deck={
        <>
          Six divisions, four hundred and eleven technical staff, and one standing instruction from the
          Office of the President: if a man tells you a thing cannot be done, write down what it would cost
          to be wrong about that, and bring the figure to the third floor.
        </>
      }
      icons={{
        "/science/quantum-tunnelling": "portal",
        "/science/materials": "flask",
        "/science/computation": "atom",
        "/science/lunar": "moon",
        "/science/applied-biology": "subject",
        "/science/publications": "clipboard",
      }}
      after={
        <>
          <PullQuote big attribution="Cave Johnson, to the Materials Department, 1954">
            We&rsquo;re throwing science at the wall here to see what sticks.
          </PullQuote>
          <Panel head="On Publication" tone="blue">
            <p style={{ margin: 0, fontSize: "var(--step--1)" }}>
              Aperture publishes when Aperture has finished, and not before. This is occasionally described
              by others as secrecy. We regard it as tidiness. A paper published mid-experiment is a paper
              that has to be published twice, and{" "}
              <Redacted reason="Struck by the President, who dictated it in the first place">
                the outfit in New Mexico publishes four times a year and has yet to finish anything
              </Redacted>
              .
            </p>
          </Panel>
          <Notice head="The Enrichment Center Reminds You">
            A negative result is still a result. A missing result is still a result. A result that has
            walked out of the building under its own power is, technically, still a result.
          </Notice>
          <Scrawl href="/vault/project-9">
            computation isnt working on computation. ask them what theyre working on. dont ask them twice
          </Scrawl>
        </>
      }
    >
      <p>
        The divisions below are listed in order of the President&rsquo;s present enthusiasm, which is
        reviewed weekly and has been known to reverse entirely between a Tuesday and a Wednesday.
      </p>
    </SectionIndex>
  );
}

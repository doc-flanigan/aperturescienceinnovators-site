import type { Metadata } from "next";
import { ERA_1970S } from "@/lib/structure";
import { SectionIndex } from "@/components/SectionIndex";
import { Notice, PullQuote, Panel, Stamp, Aside } from "@/components/Print";
import { Breadcrumbs } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { EraStrip } from "@/components/client/EraStrip";

export const metadata: Metadata = {
  title: "Aperture Science, 1976",
  description:
    "The 1976 printing of the Aperture Science company publication. The Senate hearings, the volunteer programme, the three-tier research programme, propulsion gel, the bean counters and the elevator.",
};

export default function Page() {
  return (
    <>
      <Breadcrumbs
        trail={[{ href: "/", label: "Front Page" }, { href: "/archive", label: "The Archive" }, { label: "1976" }]}
      />
      <SectionIndex
        section={ERA_1970S}
        doc="ASI-76-100"
        department="Office of the Chief Executive"
        kicker="The 1976 Printing"
        date="1976"
        revision="Photocopied; original mislaid"
        byline={
          <>
            Dictated by <b>Cave Johnson</b>, Chief Executive Officer. Transcribed by C. The Chief Executive
            asks that the word &ldquo;bankrupt&rdquo; be struck wherever it appears and it has been, except
            where it hasn&rsquo;t.
          </>
        }
        icons={{
          "/1970s/a-word-from-the-president": "name",
          "/1970s/the-volunteer-programme": "dollar",
          "/1970s/the-senate-hearings-of-1968": "clipboard",
          "/1970s/the-three-tier-programme": "portal",
          "/1970s/propulsion-gel-testing": "gel",
          "/1970s/on-the-competition": "handshake",
          "/1970s/the-bean-counters": "moon",
          "/1970s/bulletin": "elevator",
        }}
        after={
          <>
            <PullQuote big attribution="Cave Johnson, to the 1976 intake, on tape">
              So. Welcome to Aperture. You&rsquo;re here because we want the best, and you&rsquo;re it. Nope.
              Couldn&rsquo;t keep a straight face.
            </PullQuote>

            <div className="ap-rel">
              <Stamp float sub="Do not show the volunteers">
                Receivership
              </Stamp>
              <Panel head="On The Condition Of The Company" tone="rule">
                <p style={{ margin: 0, fontSize: "var(--step--1)" }}>
                  Aperture Science remains a going concern in every sense that matters to the Chief
                  Executive and in none of the senses that matter to the bank. The shafts are open. The
                  spheres are lit. The waiting room has chairs. A company that can put a man through a wall
                  can put itself through a fiscal year, and{" "}
                  <Redacted reason="Struck by the Chief Executive. Reinstated by the Chief Executive. Struck again by C.">
                    Black Mesa can eat my
                  </Redacted>{" "}
                  &mdash; Sir, the testing.
                </p>
              </Panel>
            </div>

            <Aside>
              Readers holding the {" "}
              <a href="/">1959 printing</a> will notice that the sixty dollars has not changed. Neither has
              the man. The Chief Executive regards both as evidence of consistency.
            </Aside>

            <Notice head="The Enrichment Center Reminds You">
              You can feel free to relax for up to twenty minutes in the waiting room, which is a damn sight
              more comfortable than the park benches most of you were sleeping on when we found you. Do not
              smudge up the glass. In fact, why not just go ahead and not touch anything unless it&rsquo;s
              test related.
            </Notice>

            <EraStrip />

            <Scrawl href="/1970s/the-bean-counters">
              they said no to the rocks. he wrote the number on the wall of his office. seven dollars. he
              underlined it
            </Scrawl>
          </>
        }
      >
        <p>
          The sheets below were struck in 1976 on the same press as the {" "}
          <a href="/">1959 printing</a>, on stock the print shop describes as &ldquo;what was left.&rdquo;
          The Chief Executive is eight years past the Senate, three years past the last federal contract,
          and one year past the point at which the bank stopped returning his calls. He is, as the reader
          will find, in tremendous form.
        </p>
      </SectionIndex>
    </>
  );
}

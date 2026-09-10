import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Row, Aside,
} from "@/components/Print";
import { PenNote } from "@/components/Memo";
import { FigureTable, SpecList, Plate } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "The Aperture Sentry Turret",
  description:
    "Presently in development. Presently very polite. Presently unarmed, in most models. The voice was recorded first and the mechanism second, which Applied Sciences regards as sound practice.",
};

export default function Page() {
  const { prev, next } = neighbours("/products/sentry-turret");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/products", label: "Products" },
          { label: "Sentry Turret" },
        ]}
      />

      <DocHead
        doc="ASI-212"
        department="Applied Sciences"
        classification="Unrestricted — In Development"
        revision="Second printing. Armament section unchanged; still one sentence."
        extra={[{ label: "Status", value: "In development" }]}
      />

      <div className="ap-rel">
        <Stamp float sub="Not For Sale">
          In Development
        </Stamp>
        <PageTitle
          advertising
          kicker="Applied Sciences — Programme ASI-212"
          title="A Polite Machine."
          deck={
            <>
              A free-standing sentry, three-legged, thirty-one inches high, that can see a man, address a
              man, and follow a man across a room with a pleasant voice and a single red eye. It is in
              development. It is very polite. It is unarmed, in most models. Applied Sciences recorded the
              voice first and built the mechanism second, and regards that as the correct order.
            </>
          }
          byline={
            <>
              Dictated by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}. Phrase list by Applied Sciences.
            </>
          }
        />
      </div>

      <Prose>
        <Lede>
          The United States has been asking me for a soldier that does not get tired, does not get
          frightened, and does not write to its mother, and it has been asking since 1956 without using
          those words. I have answered with a mantis programme, which Applied Biology advised against and
          which is proceeding, and with this, which Applied Sciences advised against and which is also
          proceeding, because in this building the memorandum advising against a thing is the memorandum
          that gets it a budget.
        </Lede>
        <p>
          It stands on three legs. It has one eye, and the eye is red because red is the colour you can
          see across a chamber through gel spray. It has a voice, and the voice is a young woman&rsquo;s,
          recorded on the third floor in 1958 by a member of the steno pool who has asked not to be named
          and who has been given a raise she does not know the reason for.
        </p>
        <p>
          The voice was recorded first. That is not a joke and Applied Sciences has been asked to defend it
          and has: a sentry that can address a man is a sentry that need not, in most cases, do anything
          else. Most men, addressed politely by a machine with a red eye, leave. The ones who do not leave
          are the subject of the armament section, which is one sentence long, and will stay one sentence
          long until I say otherwise.
        </p>
      </Prose>

      <Row style={{ gap: "2rem", alignItems: "flex-start" }}>
        <Plate
          number="12"
          caption="The sentry, front elevation. Three legs, one eye, and two panels in the casing that open. Applied Sciences has not been asked what is behind the panels in this printing and would prefer not to be."
          tint
        >
          <Pictogram name="turret" size={130} title="Aperture Sentry Turret" />
        </Plate>
        <div style={{ flex: "1 1 18rem" }}>
          <SpecList
            rows={[
              { k: "Height", v: "31 in., standing" },
              { k: "Legs", v: "Three. Folding." },
              { k: "Eye", v: "One. Red. Range 40 ft. in clear air, 22 ft. through gel." },
              { k: "Voice", v: "Recorded. Fourteen phrases at present. See below." },
              { k: "Tracks a man", v: "Yes. Across a room. Around a corner, not yet." },
              { k: "Mass", v: "38 lb." },
              { k: "Power", v: "Internal. Duration undisclosed." },
              { k: "Armament", v: <Redacted reason="One sentence. Not this one.">See section below.</Redacted> },
              { k: "Price", v: "Not for sale. In development." },
            ]}
          />
        </div>
      </Row>

      <Section title="The Recorded Phrases">
        <Prose>
          <p>
            Fourteen at present. Applied Sciences selects the phrase by the position and behaviour of the
            man in front of the eye. The list is printed in the order the sentry uses it, from first sight
            to last.
          </p>
        </Prose>
        <FigureTable
          caption="Phrases recorded for the sentry, 1958, in order of use"
          columns={[
            { key: "n", head: "No.", numeric: true, width: "4rem" },
            { key: "p", head: "Phrase" },
            { key: "when", head: "Used when" },
          ]}
          rows={[
            { n: "1", p: "Hello.", when: "A man enters the eye’s range" },
            { n: "2", p: "Who’s there?", when: "A man enters and stops" },
            { n: "3", p: "There you are.", when: "A man is found after being lost" },
            { n: "4", p: "I see you.", when: "A man attempts concealment" },
            { n: "5", p: "Could you come over here?", when: "A man is at the edge of range" },
            { n: "6", p: "Excuse me.", when: "A man turns away" },
            { n: "7", p: "Sorry.", when: "The sentry has done something" },
            { n: "8", p: "I don’t hate you.", when: "The sentry has done something to a man" },
            { n: "9", p: "Are you still there?", when: "A man has stopped moving" },
            { n: "10", p: "Please put me down.", when: "The sentry is lifted" },
            { n: "11", p: "I don’t blame you.", when: "The sentry is knocked over" },
            { n: "12", p: "Goodnight.", when: "The sentry is switched off by hand" },
            { n: "13", p: "Don’t be sad.", when: <Redacted reason="Applied Sciences will not state the condition">Condition withheld.</Redacted> },
            { n: "14", p: "I’m different.", when: <Redacted reason="One unit only. Not the same recording. Not the same voice.">One unit. Not the same voice.</Redacted> },
          ]}
          foot="Phrase fourteen was not recorded by the steno pool, is on one unit only, and Applied Sciences has been unable to establish who recorded it or when."
        />
      </Section>

      <Marginalia>
        Visitors find the phrase list charming until phrase eight, and the President has said that phrase
        eight is where a customer stops laughing and starts thinking about the armament section, and that
        this is the correct place for a customer to be.
      </Marginalia>

      <PullQuote big attribution={`${COMPANY.founder}, on why the voice came first`}>
        Most men, addressed politely by a machine with a red eye, leave. It is the ones who stay that we
        are still working on.
      </PullQuote>

      <Section title="Armament">
        <Prose>
          <p>
            <Redacted reason="One sentence. This is it. It is not printed.">
              The sentry is fitted, in the models that are fitted, with a mechanism behind the two panels
              which Applied Sciences has described in the drawings and nowhere else.
            </Redacted>
          </p>
        </Prose>
      </Section>

      <Notice head="The Enrichment Center Reminds You">
        The sentry is not to be spoken to after hours. It answers. Applied Sciences has established that it
        answers, has not established what it answers with when there is no man in front of the eye, and
        has asked that personnel not find out on its behalf.
      </Notice>

      <ClearanceGate level={4} hint="Senior Associate grade or above. The armament specification is not printed in the public sheet.">
        <Panel head="Applied Sciences — Armament, From The Drawing" tone="red">
          <SpecList
            rows={[
              { k: "Panels", v: "Two. Casing, left and right. Spring-opened." },
              { k: "Behind the panels, unfitted models", v: "Nothing. Counterweights." },
              { k: "Behind the panels, fitted models", v: <Redacted reason="Applied Sciences has drawn it and will not name it">Drawn. Not named.</Redacted> },
              { k: "Fitted models built", v: "Four" },
              { k: "Fitted models tested", v: "One. Sub-Level 2. Against a crate." },
              { k: "The crate", v: "Not recovered in a condition permitting description." },
              { k: "Phrase used during the test", v: "Seven, then eight, then nine." },
              { k: "Phrase used after the test, with nobody in range", v: <Redacted reason="Applied Sciences recorded it and has not transcribed it">Not thirteen. Not fourteen.</Redacted> },
            ]}
          />
        </Panel>
      </ClearanceGate>

      <PenNote tone="pencil" angle={-1.3}>
        The voice is Dorothy from the pool. She does not know it is on the machine. She thinks it was for
        the telephone. I have not told her and I have given her the raise and I do not know which of those
        two things I am going to regret. &mdash; C.
      </PenNote>

      <Row>
        <Pictogram name="turret" size={54} title="Sentry" style={{ color: "var(--ink-3)" }} />
        <Placard>Applied Sciences &mdash; In Development</Placard>
        <Placard tone="danger">Do Not Address The Sentry After Hours</Placard>
      </Row>

      <Aside>
        Four fitted units exist. Three are on Sub-Level 2 under cloths. The fourth is the one with phrase
        fourteen on it, and it is not on Sub-Level 2, and Applied Sciences has been asked where it is and
        has said that it was on Sub-Level 2 on Friday.
      </Aside>

      <Rule variant="fat" />

      <FinePrint>
        <p>
          Form ASI-212. The sentry is in development and is not for sale, lease, demonstration or
          discussion. Enquiries from any branch of the armed services will be answered by the President
          personally, except enquiries from the Navy, which will be answered by the President personally
          and at greater length. See{" "}
          <Link href="/science/applied-biology">Form ASI-405</Link> for the other soldier.
        </p>
      </FinePrint>

      {/* Fourteen phrases. Thirteen recorded by Dorothy. Fourteen by nobody. */}
      {/* The fourth unit was on Sub-Level 2 on Friday. */}

      <Scrawl href="/vault/the-dens">
        the fourth one talks when nobody is there. i have heard it. it says the thing about being different. it isnt her voice
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

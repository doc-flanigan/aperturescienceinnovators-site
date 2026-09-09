import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Stamp, Panel, Notice, Rule, Row, FinePrint, Placard, Marginalia, Aside, Split, IndexCard,
} from "@/components/Print";
import { Memo, PenNote, Signature } from "@/components/Memo";
import { FigureTable, SpecList, Plate } from "@/components/Data";
import { Checklist } from "@/components/Form";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram, SignPlate } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "The Test Chambers",
  description:
    "A guided tour of the Enrichment Center test chambers and the painted signage upon their walls, with the meaning of every approved pictogram and the order in which a man is to read them.",
};

export default function Page() {
  const { prev, next } = neighbours("/enrichment-center/chambers");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/enrichment-center", label: "Enrichment Center" },
          { label: "Test Chambers" },
        ]}
      />

      <DocHead
        doc="ASI-304"
        department="Enrichment Center Operations"
        classification="Unrestricted — Post In Every Chamber"
        revision="Third printing"
        extra={[{ label: "Authority", value: "Corporate Identity Directive 12, Appendix B" }]}
      />

      <div className="ap-rel">
        <Stamp float tone="black" sub="Directive 12, App. B">
          Post Here
        </Stamp>
        <PageTitle
          kicker="Enrichment Center Operations — Test Shaft 09"
          title="The Test Chambers"
          deck={
            <>
              Every chamber in this company is a sentence, painted on the wall to the left of the door in
              enamel three inches high. Herewith the vocabulary, the grammar, and a walk through one chamber
              from the door you come in by to the door you go out by.
            </>
          }
          byline={
            <>
              Dictated by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}. The parts about paint were
              supplied by Operations, who care about paint.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            A test chamber is a room with a problem in it. You walk in one end, you understand the problem,
            you solve the problem with whatever the room has given you, and you walk out the other end. That
            is the whole of it. Everything else on this sheet is about how we tell you which problem it is,
            without a single word of English, from forty feet, through a plate-glass window, whilst the room
            is on fire.
          </Lede>
          <p>
            We do not print the signs. We paint them. Visitors from the trade press keep asking whether a
            printed placard would not be cheaper. It would be. We tried it. Paper lasted eleven days in
            Chamber 3.
          </p>
          <p>
            Paper burns. Paper takes up gel and goes grey and then goes away. Paper posted at a chamber
            entry has twice been carried off by a volunteer who took it for a souvenir, whereupon the grill
            took it from him at the door and the next man walked into a room with no instructions at all.
            Enamel survives a fire, a flood, a fling and the grill, and enamel can be changed at seven in
            the morning by a man with a brush.
          </p>
          <p>
            The two men who do it came up from Marquette in 1952 to letter the foyer of Test Shaft 09 and
            have not run out of wall in the seven years since. They are the highest-paid tradesmen in this
            company and worth every dollar, and Accounting may read that sentence twice.
          </p>
        </Prose>

        <Stack>
          <Panel head="Signage — Standing Specification" tone="tint">
            <SpecList
              rows={[
                { k: "Medium", v: "Vitreous enamel on steel plate" },
                { k: "Plate", v: "12 in. square; 18 in. for a hazard" },
                { k: "Ground", v: "White. Always white." },
                { k: "Figure", v: "Black, 5-unit stroke, round terminals" },
                { k: "Second colour", v: "Orange, and orange means it will hurt you" },
                { k: "Position", v: "Eye height, left of the entry door" },
                { k: "Legibility", v: "Forty feet, through glass, in smoke" },
                { k: "Approved signs", v: "Twenty-two" },
                {
                  k: "Signs with a meaning on file",
                  v: <Redacted reason="Operations is still looking for the file">Twenty-one</Redacted>,
                },
              ]}
            />
          </Panel>

          <Row>
            <Placard>Chamber Entry</Placard>
            <Placard tone="warn">Read The Wall</Placard>
          </Row>

          <Marginalia>
            The signage is painted in the enamel used on the curtain rail brackets of 1944, from the same
            supplier, at the same price per gallon. Nobody has renegotiated it and nobody will.
          </Marginalia>
        </Stack>
      </Split>

      {/* ------------------------------------------------------------- */}

      <Section title="The Grammar Of A Sign">
        <Prose>
          <p>
            A chamber sign is read <b>left to right</b>, in four fields, and each field answers one question
            in order: <i>who</i>, <i>with what</i>, <i>does what</i>, and <i>then what</i>. A field may be
            left blank. A field may not be moved. Two of the four fields are frequently the same pictogram
            and that is not an error in the painting; it is the chamber telling you something.
          </p>
          <p>
            The signs read left to right in every shaft except Shaft 07, where they read right to left.
            Facilities holds that this was the second painter working back from the far end of the corridor
            in the winter of 1955 and losing his place. Operations holds a different view and has been asked
            not to publish it. Shaft 07 is not in service, so the question is academic.
          </p>
        </Prose>

        <Plate
          number="1"
          tint
          caption="A complete four-field sign, as painted at the entry to Chamber 4. Reads: a man — with a button — is thrown — and then there is refreshment. Every sign on this floor is a sentence of exactly this shape."
        >
          <Row style={{ gap: "0.9rem", alignItems: "center", justifyContent: "center" }}>
            <Pictogram name="subject" size={64} title="A man" />
            <Pictogram name="button" size={64} title="With a button" />
            <Pictogram name="fling" size={64} title="Is thrown" />
            <Pictogram name="cake" size={64} title="And then there is refreshment" />
          </Row>
        </Plate>

        <Aside>
          Across the working shafts the fourth field is refreshment in every chamber but three, where it is
          blank. Operations has declined to paint refreshment into those three, on the grounds that a sign is
          a statement of fact and this company does not paint a statement it cannot keep.
        </Aside>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section title="The Approved Vocabulary">
        <FigureTable
          caption="Corporate Identity Directive 12, Appendix B. The twenty-two approved chamber signs, of which fourteen are reproduced here and the remainder are on the wall."
          columns={[
            { key: "sign", head: "Sign", width: "4.5rem" },
            { key: "name", head: "Name In The Directive" },
            { key: "reads", head: "Reads As" },
            { key: "since", head: "In Service", numeric: true, width: "6rem" },
          ]}
          rows={[
            {
              sign: <Pictogram name="subject" size={30} title="A man" />,
              name: "SUBJECT",
              reads: "A man. You are the man.",
              since: "1952",
            },
            {
              sign: <Pictogram name="portal-pair" size={30} title="Apertures, paired" />,
              name: "APERTURE, PAIRED",
              reads: "Two holes, one interior. Go in the near one.",
              since: "1953",
            },
            {
              sign: <Pictogram name="fling" size={30} title="Momentum is conserved" />,
              name: "MOMENTUM, CONSERVED",
              reads: "Speedy thing goes in, speedy thing comes out.",
              since: "1953",
            },
            {
              sign: <Pictogram name="button" size={30} title="Press and hold" />,
              name: "BUTTON, HELD",
              reads: "Press it. It does not stay pressed. That is the problem.",
              since: "1954",
            },
            {
              sign: <Pictogram name="cube" size={30} title="Cube, weighted" />,
              name: "CUBE, WEIGHTED",
              reads: "Carry it. It is heavier than it looks and it looks heavy.",
              since: "1954",
            },
            {
              sign: <Pictogram name="faith-plate" size={30} title="Aerial faith plate" />,
              name: "PLATE, AERIAL",
              reads: "You are going up. The landing is your affair.",
              since: "1955",
            },
            {
              sign: <Pictogram name="gel-splat" size={30} title="Gel, lively" />,
              name: "GEL, LIVELY",
              reads: "The floor is not behaving as a floor.",
              since: "1955",
            },
            {
              sign: <Pictogram name="laser" size={30} title="Thermal discouragement" />,
              name: "DISCOURAGEMENT, THERMAL",
              reads: "Do not stand in the light. The light is not for standing in.",
              since: "1956",
            },
            {
              sign: <Pictogram name="camera" size={30} title="You are observed" />,
              name: "OBSERVATION",
              reads: "You are watched. Do not address the window.",
              since: "1952",
            },
            {
              sign: <Pictogram name="grill" size={30} title="Emancipation grill" />,
              name: "GRILL, EMANCIPATION",
              reads: "You may not take that with you, whatever it is.",
              since: "1956",
            },
            {
              sign: <Pictogram name="fire" size={30} title="Fire, expected" />,
              name: "FIRE, EXPECTED",
              reads: "This fire is part of the test. There is no sign for the other kind.",
              since: "1957",
            },
            {
              sign: <Pictogram name="timer" size={30} title="Sixty seconds" />,
              name: "INTERVAL",
              reads: "The figure beneath is in seconds and is not advisory.",
              since: "1956",
            },
            {
              sign: <Pictogram name="hazard" size={30} title="Withdrawn sign" />,
              name: "WITHDRAWN 1957",
              reads: (
                <Redacted reason="Withdrawn from the vocabulary by the Legal Department, August 1957">
                  It was painted in eleven chambers before Legal came down and saw it.
                </Redacted>
              ),
              since: "—",
            },
            {
              sign: <Pictogram name="vault" size={30} title="Sign 22" />,
              name: "SIGN 22",
              reads: "Meaning not on file. See the note below.",
              since: "Not requisitioned",
            },
          ]}
          foot="Operations maintains the Directive. Operations has maintained it since 1952 and would like it recorded that twenty-one of the twenty-two entries were written by Operations."
        />

        <Panel head="On Sign 22" tone="rule">
          <p>
            Sign 22 is painted at the head of the west corridor on the lowest working level of Shaft 09, on
            a plate of our steel, in our enamel, in the correct stroke and the correct hand. It was not
            requisitioned. It is not in the Directive. Neither painter will say he did it, and both are
            honest men who have never once denied a piece of work.
          </p>
          <p>
            It shows a door, and behind the door a shape, and the shape is not one of ours. Personnel are
            to read it as a hazard sign and walk on, because a sign you cannot explain is still a sign, and
            what it is telling you is very probably <i>not through here</i>.
          </p>
        </Panel>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section title="A Walk Through One Chamber, Door To Door">
        <Prose>
          <p>
            Take Chamber 4. It is not the most interesting chamber we have, and that is why I have chosen
            it: a man should learn the grammar on a plain sentence before he is asked to read a complicated
            one.
          </p>
          <p>
            You come out of the lift into a corridor white to shoulder height, with a numeral and a sign
            every forty feet. At the entry door is the four-field plate of Figure 1. You read it in a second
            and a half; we have measured it on 4,118 men since 1954, and the mean is one and four tenths.
          </p>
          <p>
            The door opens. The door seals behind you, and the plate to your right says so with one
            pictogram and no words. Every volunteer who ever complained of that plate complained afterwards
            rather than at the time, which Operations regards as proof the sign did its work.
          </p>
        </Prose>

        <Row style={{ gap: "1.3rem", flexWrap: "wrap" }}>
          <SignPlate name="elevator" caption="Descend. Eleven minutes." size={58} />
          <SignPlate name="subject" caption="A man. You." size={58} />
          <SignPlate name="button" caption="Press and hold" size={58} />
          <SignPlate name="cube" caption="Something must hold it down" size={58} />
          <SignPlate name="portal-pair" caption="Two holes, one interior" size={58} />
          <SignPlate name="grill" caption="Leave it in the room" size={58} />
          <SignPlate name="cake" caption="Refreshment follows" size={58} />
        </Row>

        <Prose>
          <p>
            Inside there is a button on a pedestal, a cube on the floor, and a door on the far wall that is
            open only whilst the button is pressed. The problem is stated by the room and by nothing else.
            The man behind the glass is not permitted to tell you the answer, is not permitted to nod, and
            has been instructed on the point twice in writing.
          </p>
          <p>
            You will work out that the cube can press the button for you. Every man works this out. The
            fastest was forty-one seconds and he was a machinist from Escanaba and not an astronaut at all,
            which I mention because it annoys the lab boys and because it is true.
          </p>
          <p>
            You go through the far door. The grill in the doorway takes from you anything you ought not to
            be carrying, which in Chamber 4 means the cube, a wristwatch, and{" "}
            <Redacted reason="Dental advisory, see Form ASI-209">
              on one occasion in 1957 a gentleman&rsquo;s bridgework.
            </Redacted>{" "}
            Then the corridor, the next numeral, the next sign, and so the afternoon proceeds until three
            o&rsquo;clock, when the last sign you read all day is the one with the elevator on it, and the
            one after that has a cake on it, and{" "}
            <Link href="/enrichment-center/refreshments">the commissary is on Sub-Level 1</Link>.
          </p>
        </Prose>

        <Panel head="Before The Door Seals — Posted At Every Chamber Entry">
          <Checklist
            items={[
              { text: "I have read the plate to the left of this door.", checked: true },
              { text: "I have read it left to right.", checked: true },
              { text: "I have counted the fields and there were four.", checked: true },
              { text: "I have not been told the answer by any member of staff.", checked: true },
              { text: "I understand that the orange field means it will hurt.", checked: true },
              { text: "I understand that a blank fourth field is not an oversight.", checked: false },
            ]}
          />
        </Panel>
      </Section>

      <Notice head="The Enrichment Center Reminds You">
        The signage is the instruction. There is no other instruction. If you are standing in a chamber
        wishing somebody would explain the sign to you, look at the observation window, note that nobody
        behind it has looked away, and proceed.
      </Notice>

      {/* ------------------------------------------------------------- */}

      <Section title="Chamber 8">
        <Prose>
          <p>
            Every visitor asks about the plate at Chamber 8, and every visitor is given a description
            rather than the thing, Operations having elected not to reproduce it in a document that leaves
            the building.
          </p>
          <p>
            It is four fields wide, like the others. The first field is a man. The second field is a man. The
            third field is an arrow, and the arrow points back at the second field. The fourth field is not
            blank.
          </p>
          <p>
            It was painted on the eleventh of March. The chamber was commissioned on the twelfth.
            Facilities has confirmed both dates in writing and offered no further remark, and I have
            decided, as President of this company, that a firm which can put a hole in one wall and take it
            out of another has no business being nervous about the order in which two things happened.
          </p>
        </Prose>

        <IndexCard>
          <p style={{ margin: 0 }}>
            <b>OPERATIONS FILE CARD, CHAMBER 8 — SIGNAGE:</b>
            <br />
            Plate present. Correct to Directive 12 in medium, stroke and mounting. Not in Directive 12. Do
            not repaint. Do not photograph. Do not stand in the corridor reading it for longer than it takes
            to read it.
          </p>
        </IndexCard>
      </Section>

      <Memo
        to="Facilities — Sign Shop"
        from="Enrichment Center Operations"
        re="Enamel requisition, quarter ending March; and the west corridor"
        date="24 March 1959"
        cc="Office of the President (for information)"
        sign={false}
        stamp={<Stamp tone="black" angle="right">Filed</Stamp>}
      >
        <p>
          Operations requisitioned eleven gallons of white and four of black for the quarter. Fourteen and
          five were drawn. This is the third quarter running in which more paint has left the shop than was
          ordered, and the discrepancy is consistent to a pint.
        </p>
        <p>
          We are not suggesting theft. Nobody steals enamel. We are asking Facilities which wall it is
          going on, because it is going on a wall, and we should like that wall on the maintenance round
          like any other.
        </p>
        <p>
          Whilst you are answering: the west corridor plate on the lowest working level is not ours and is
          not going to be painted over. That is settled. What remains is paperwork, which is what this
          memorandum is for.
        </p>
      </Memo>

      <PenNote tone="pencil" angle={-1.5}>
        The paint is drawn on my signature every quarter because somebody has to sign for it and he will not.
        He goes down at night with a brush and comes up with white on his cuff and tells me it is dust. I
        have stopped asking what he is painting. I have started counting the plates. &mdash; C.
      </PenNote>

      <ClearanceGate
        level={3}
        hint="Associate grade or above. The corridor census is not printed at the gate house."
      >
        <Panel head="Signage Census, Lowest Working Level — Not For The Public Sheet" tone="red">
          <SpecList
            rows={[
              { k: "Plates on the Directive", v: "22" },
              { k: "Plates counted, west corridor", v: "23" },
              { k: "Plates counted, west corridor, one week later", v: "24" },
              { k: "Painters employed", v: "2" },
              { k: "Painters who claim the additional work", v: "0" },
              {
                k: "Corridors on the drawing",
                v: <Redacted reason="Facilities and Records do not agree on this figure">4. There are five.</Redacted>,
              },
            ]}
          />
          <p style={{ fontSize: "var(--step--1)", marginBottom: 0 }}>
            A corridor not on a drawing is a matter for Facilities. A corridor not on a drawing that has
            been signposted to the Directive in our own enamel is a matter for somebody else.
          </p>
        </Panel>
      </ClearanceGate>

      <Row>
        <Placard>Read Left To Right</Placard>
        <Placard tone="warn">Do Not Address The Window</Placard>
        <Placard tone="danger">Orange Means It Will Hurt</Placard>
      </Row>

      <Rule variant="fat" />

      <Signature note="Form ASI-304, third printing. Approved for posting in every chamber of every working shaft." />

      <FinePrint>
        <p>
          Form ASI-304. The signage is instructional and does not warrant that the chamber will behave in
          the manner painted. See <Link href="/legal">Form ASI-900</Link> and{" "}
          <Link href="/enrichment-center/rules">the Rules of the Enrichment Center</Link>, rule four, which
          governs what a man is to do about a sign he does not understand.
        </p>
      </FinePrint>

      {/* Twenty-two approved. Twenty-four counted. The count is taken on Fridays. */}
      {/* Nobody has taken it twice on the same Friday. */}

      <Scrawl href="/terminal">
        sign 22 isnt in the book so i asked the machine what it means. it answered. i wish it hadnt
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

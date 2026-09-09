import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Split, Row, Aside,
} from "@/components/Print";
import { Memo, Signature, PenNote } from "@/components/Memo";
import { FigureTable, SpecList } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "We Do What We Must Because We Can",
  description:
    "The corporate creed of Aperture Science Innovators, unpacked clause by clause by the man who wrote it, including the clause that is no longer painted on the wall.",
};

export default function MissionPage() {
  const { prev, next } = neighbours("/the-company/mission");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/the-company", label: "The Company" },
          { label: "Our Mission" },
        ]}
      />

      <DocHead
        doc="ASI-103"
        department="Office of the President"
        classification="Unrestricted — Posted In Every Corridor"
        revision="Third setting. Three clauses."
        extra={[{ label: "Adopted", value: "1947" }]}
      />

      <div className="ap-rel">
        <Stamp float tone="black" sub="No Revisions Pending" angle="right">
          Standing Order
        </Stamp>
        <PageTitle
          kicker="The Corporate Creed — Office of the President"
          title="We Do What We Must Because We Can"
          deck={
            <>
              Three clauses, eleven feet wide, painted on the foyer wall at the head of Test Shaft 09 and
              repeated in every corridor in this company. Herewith what each one of them means, in the words
              of the man who wrote them, who has never been asked and has never stopped explaining.
            </>
          }
          byline={
            <>
              Dictated by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}. The creed is his. The commas are
              Caroline&rsquo;s and he has agreed to leave them alone.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            There are three lines painted on the wall of the foyer at the head of Shaft 09. The painters
            finished them in 1952 and nobody has touched them since. Eleven feet corner to corner, in the
            same grey we put on the curtains, and 1,247 men and women walk underneath them every morning at
            seven and most of them have stopped seeing the thing entirely. Good. A creed is not there to be
            admired. It is there to be obeyed by people who are not reading it.
          </Lede>
          <p>
            I wrote it in 1947, in one sitting, on the back of a purchase order for vinyl. That was the year
            we stopped being Aperture Fixtures and started being {COMPANY.name}, and a man who changes the
            name over his door had better have something to put underneath it. I had a hole four kilometres
            deep, forty-one employees and no idea what any of it was for. So I wrote down what I intended to
            do about that, and twelve years later it has not needed a single correction.
          </p>
          <p>
            People ask me what it means. Reporters ask. The Bureau of Standards asked in writing, twice, and
            a gentleman from the Senate asked in a manner I did not care for. It means what it says. It says
            it in eight words. Evidently eight were not sufficient for anybody, so here are rather more.
          </p>
        </Prose>

        <Stack>
          <Panel head="The Creed, As Filed" tone="tint">
            <SpecList
              rows={[
                { k: "Adopted", v: <>1947, on the reverse of a purchase order</> },
                { k: "Author", v: <>The President. Sole. Unassisted.</> },
                { k: "Clauses drafted", v: <>Four</> },
                { k: "Clauses painted, 1952", v: <>Three</> },
                { k: "Clauses presently displayed", v: <>Three</> },
                { k: "Lettering", v: <>Eleven feet, foyer wall, Shaft 09</> },
                { k: "Colour", v: <>Institutional Grey (Warm)</> },
                { k: "Revisions since 1947", v: <>None. There will be none.</> },
                {
                  k: "The fourth clause",
                  v: <>Not displayed. See section four of this sheet.</>,
                },
              ]}
            />
          </Panel>

          <Row>
            <Placard>We Do What We Must</Placard>
            <Placard>Because We Can</Placard>
          </Row>
          <Row>
            <Placard tone="warn">Do Not Loiter In The Foyer</Placard>
            <Pictogram name="atom" size={46} title="The corporate creed" style={{ color: "var(--ink-3)" }} />
          </Row>
        </Stack>
      </Split>

      <PullQuote big attribution={`Painted in the foyer of Test Shaft 09, ${COMPANY.shaftBuilt}`}>
        We do what we must because we can.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section number={1} title={<>&ldquo;We Do&rdquo;</>}>
        <Prose>
          <p>
            Two words, and they are the two most companies cannot say. Everybody in American industry has an
            intention. Intentions are free. There is an outfit in New Mexico with the finest intentions ever
            assembled under one roof and a committee to look after each one, and I invite you to go and count
            the holes they have put in a wall.
          </p>
          <p>
            <b>We do.</b> Present tense, no auxiliary verb. Not we plan to. Not we are positioned to. Not we
            have appointed a working group to consider the feasibility of. The sentence leaves no room for the
            man who is still deciding, and that is deliberate, because I have employed that man and he is
            expensive. In 1953 the lab boys put a hole in one wall and it came out of another. There is a
            version of this company that would have convened a study and published. We got a man instead.
            That is the whole of the first clause.
          </p>
        </Prose>
      </Section>

      <Section number={2} title={<>&ldquo;What We Must&rdquo;</>}>
        <Prose>
          <p>
            Here is where people get nervous, because they hear <em>must</em> and go looking for whoever is
            doing the compelling. There is no such person. I own one hundred per cent of this company. No
            board, no bank with its hand in the drawer, and no branch of the federal government that can tell
            me what to do with my own hole in the ground.
          </p>
          <p>
            <b>Must</b> is not an order from outside. Must is what a thing turns into once you have looked at
            it properly. A door that opens from one side only is a curiosity; a door that opens from one side
            only with a man behind it is a must. A grey powder that conducts a tunnelling field better than
            anything ever measured is a curiosity; the same powder in quantity, for money we happen to have,
            is a must.
          </p>
          <p>
            Records keeps a register of the musts. I never asked them to. They do it anyway, which is the
            best thing I can tell you about Records.
          </p>
        </Prose>

        <FigureTable
          caption="Register of Musts, 1943–1959. Maintained by Records, unbidden."
          columns={[
            { key: "year", head: "Year", numeric: true, width: "5rem" },
            { key: "must", head: "The Must" },
            { key: "who", head: "Determined By" },
            { key: "out", head: "Outcome" },
          ]}
          rows={[
            {
              year: "1943",
              must: <>Sell the Army a shower curtain in the middle of a war.</>,
              who: <>The President</>,
              out: <>Two hundred thousand units. Every one held water.</>,
            },
            {
              year: "1944",
              must: <>Buy a worked-out salt mine whose tunnels run four kilometres down.</>,
              who: <>The President</>,
              out: <>It is the entire physical plant of this company.</>,
            },
            {
              year: COMPANY.renamed,
              must: <>Stop being called Fixtures. Write a creed for under the new name.</>,
              who: <>The President</>,
              out: <>Four clauses drafted. Three survive.</>,
            },
            {
              year: "1953",
              must: <>Send a man through the hole rather than write a paper about it.</>,
              who: <>The President</>,
              out: <>He arrived. Different wall. Cheerful throughout.</>,
            },
            {
              year: "1954",
              must: <>Open the testing programme to the public at sixty dollars, cash.</>,
              who: <>The President</>,
              out: <>4,118 volunteers to date, of whom 1,306 completed.</>,
            },
            {
              year: "1955",
              must: <>Connect the diversity vent to the mail room, as an efficiency measure.</>,
              who: <>Facilities, unprompted</>,
              out: (
                <>
                  Under review since. See{" "}
                  <Link href="/the-company/correspondence">Form ASI-108</Link>.
                </>
              ),
            },
            {
              year: COMPANY.militaryContract,
              must: <>Procure lunar substrate in quantity, at the asking price, without haggling.</>,
              who: <>The President</>,
              out: <>Finest conductor ever measured. First-class poison.</>,
            },
            {
              year: "1957",
              must: <>Fit a second set of fire doors on Sub-Level 4, with a bolt on the outside.</>,
              who: <b>Caroline</b>,
              out: <>Fitted within the week. Records declines to expand upon this row.</>,
            },
            {
              year: COMPANY.year,
              must: <>Open Test Shaft 09 four months ahead of the engineers&rsquo; schedule.</>,
              who: <>The President</>,
              out: <>Opened 11 March. The engineers were informed on the 12th.</>,
            },
          ]}
          foot="In sixteen years no entry in this register has ever been recorded as declined. Records has been asked twice not to note that, and has noted it twice."
        />

        <Marginalia>
          The 1957 entry is the only line in this register not determined by the President, and the only line
          the President has never once questioned.
        </Marginalia>
      </Section>

      <Section number={3} title={<>&ldquo;Because We Can&rdquo;</>}>
        <Prose>
          <p>
            <b>Can.</b> Three letters, and they carry the entire building. Ability is the whole of the
            justification. If a thing can be done here, by these men, in this hole, the doing of it requires
            no further argument, and anybody wanting one may put the request in writing.
          </p>
          <p>
            Now. You will have noticed &mdash; a great many people have noticed, and one of them was a
            senator &mdash; that the sentence stops there. There is no <em>and we should</em>. There never was
            and there is not going to be. <em>Should</em> is a word for a man asking permission from
            somebody, and I invite you to look around this company and tell me of whom I would be asking.
            There is a desk on the third floor and there is me behind it. That is the ethics committee. It
            sits whenever I sit and it has never once failed to reach a decision.
          </p>
          <p>
            Elsewhere in this publication I say that science is not about why, it is about why not, and people
            treat that as the same sentence. It is not. <em>Why not</em> is a question you put to a
            laboratory. The creed is the answer you give a man who has come to your office to stop you. They
            point the same way; only one is painted on a wall. See{" "}
            <Link href="/the-company/cave-johnson">the President&rsquo;s own sheet</Link> for the other.
          </p>
        </Prose>

        <Aside>
          Legal has asked, on four occasions, that the words &ldquo;and lawfully&rdquo; be added to the end
          of the third clause. Legal has been thanked on four occasions. The wall is unchanged.
        </Aside>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section number={4} title="The Fourth Clause">
        <Prose>
          <p>
            I drafted four. The purchase order is in the safe. Three went on the wall in 1952 and the fourth
            did not, and the question comes up on every tour I give, so here it is, printed once.
          </p>
          <p>
            The fourth clause read:{" "}
            <b>
              <Redacted reason="Struck on the advice of Counsel, 1952. Never painted.">
                &ldquo;&hellip; and only ever with their willing consent.&rdquo;
              </Redacted>
            </b>
          </p>
          <p>
            Legal struck it before the painters reached it, on grounds I quote from the opinion because I
            cannot improve on them: of the four clauses, it was the only one enforceable against us. A
            statement of character is not actionable. A promise is. So the promise came off the wall, the
            character stayed on it, and Legal went back down to the basement rear having won the only argument
            it has ever won in this building.
          </p>
          <p>
            I shall be plain, because there is a way of reading that paragraph which does me no credit. We
            take volunteers. They sign a contract the size of a phone book, they are paid sixty dollars in
            cash the same day, and any man may turn round at the gate house.{" "}
            <Link href="/enrichment-center/volunteer">The form is printed in full elsewhere</Link> and I
            invite you to read every line of it, which is more than most of the signatories have managed. The
            clause came off the wall for a lawyer&rsquo;s reason. It did not come off because I stopped
            meaning it.
          </p>
        </Prose>

        <Memo
          to="Facilities — Sign Shop"
          re="Foyer lettering, Shaft 09"
          date="4 August 1952"
          cc="Legal (for information; the matter is closed)"
          stamp={<Stamp tone="blue" angle="left" size="normal">File Copy</Stamp>}
        >
          <p>
            You will paint three lines in the foyer, eleven feet across, so that a man coming out of the
            elevator cannot arrange to be looking elsewhere. Institutional Grey, the warm one, same batch as
            the curtain stock. No border, no rule, no ornament. If I wanted a certificate I would have had one
            framed.
          </p>
          <p>
            The copy sheet you were sent carries four lines. Paint the first three. Do not ask me about the
            fourth, do not telephone this office about the fourth, and do not raise it with the men. It is a
            matter between myself and three attorneys in the basement, settled in their favour, which I set
            down here because it will not happen again. Dry by the twentieth.
          </p>
        </Memo>

        <PenNote tone="pencil" angle={-1.2}>
          The sign painter&rsquo;s invoice is for four lines. We were billed for four and we paid for four
          and I have the invoice in the second drawer, filed under nothing, where it will stay. He has never
          asked me for it back. &mdash; C.
        </PenNote>
      </Section>

      <Notice head="The Enrichment Center Reminds You">
        The creed painted in the foyer is a statement of corporate character and not a term of any agreement
        between the Enrichment Center and any person. Nothing painted upon a wall of this facility
        constitutes a warranty or an undertaking of any kind. Established 1952. Holds good in all nine shafts.
      </Notice>

      {/* ------------------------------------------------------------- */}

      <Section title="The Company Anthem">
        <Prose>
          <p>
            In 1954 I had an anthem written. Forty dollars to a man in Marketing for the tune, the words
            supplied by me in an afternoon, four verses for mixed voices, intended for the Christmas gathering
            in the commissary. It has gone unsung at five consecutive gatherings. The steno pool declines.
            They decline politely, in writing, and every year on the same stated ground, which is the fourth
            verse. Three are printed below.
          </p>
        </Prose>

        <Panel head={<>Aperture Forever &mdash; Words by the President, 1954. Air: &ldquo;The Michigan Volunteer&rdquo;</>} tone="rule">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", lineHeight: 1.7, textIndent: 0 }}>
            A bolt of vinyl, four hundred dollars,
            <br />
            a garage and a Michigan sky;
            <br />
            the Army bought two hundred thousand
            <br />
            and not a one ran dry.
            <br />
            <br />
            We bought the hole, we left the salt,
            <br />
            we sank it shaft by shaft;
            <br />
            and the gentlemen who said it could not be done
            <br />
            are gentlemen at whom we laughed.
            <br />
            <br />
            We do what we must because we can,
            <br />
            we can because we&rsquo;re here;
            <br />
            and the question is never whether, boys,
            <br />
            the question is only the year.
          </p>
          <Rule variant="dotted" />
          <FinePrint>
            Fourth verse withheld at the request of the steno pool, the Commissary Committee, and, since
            March, the Medical Department. Copies of the complete setting were recalled in 1957. Personnel
            retaining a copy should not.
          </FinePrint>
        </Panel>
      </Section>

      <ClearanceGate
        level={3}
        hint="Associate grade or above. This paragraph was dictated late and has not been circulated."
      >
        <Panel head="Dictated 2 April 1959, Eleven In The Evening. Not For The Wall." tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            I know what the creed is for, and I would rather say it here than have somebody clever say it for
            me afterwards. It is not there to inspire anybody. It is there for the mornings when Operations
            comes up to the third floor with a number in his hand and the number is a man, and the two of us
            stand in this office and cannot find one reason we ought to have stopped &mdash; because there was
            never a stopping clause in it. We took the stopping clause off the wall in 1952 to save eleven
            dollars a year in premiums. Eight words, and every one of them a wall between myself and a
            question. Anybody who tells you different has never had to sign anything. &mdash; C. J.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Prose>
        <p>
          That is the creed. Eight words, twelve years, not a comma altered. It is painted where the elevator
          opens and repeated on enamel at every landing to the bottom, and it is the reason there is a company
          here at all instead of a hole full of salt and a man in a garage with a good idea and no nerve. Read
          it on your way in. Then get down the shaft. The seven o&rsquo;clock car does not wait.
        </p>
      </Prose>

      <Signature note="Dictated 2 April 1959. Transcribed and set without alteration. Form ASI-103." />

      <FinePrint tiny>
        Form ASI-103. Posted in every corridor under standing order of the Office of the President. The creed
        is the property of {COMPANY.name} and may not be reproduced by any concern engaged in comparable
        research, in New Mexico or elsewhere. Terms of engagement are governed throughout by{" "}
        <Link href="/legal">Form ASI-900</Link>, which does contain a stopping clause, at paragraph 41, in
        six-point type.
      </FinePrint>

      {/* The copy sheet with four lines on it is in the safe on the third floor. */}
      {/* The invoice for four lines is in the second drawer of a desk outside it. */}
      {/* Two different people kept proof of the same thing and never told each other. */}

      <Scrawl href="/vault/project-9">
        there were four. i counted the paint. ask him what the fourth one said and watch his face
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

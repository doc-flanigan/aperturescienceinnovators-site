import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Aside, Row, IndexCard,
} from "@/components/Print";
import { Memo, Signature, PenNote } from "@/components/Memo";
import { FigureTable, SpecList } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "On The Competition",
  description:
    "The President sets out, at length and against the advice of counsel, the exact difference between a company that finishes things and a certain research facility in New Mexico.",
};

export default function Page() {
  const { prev, next } = neighbours("/the-company/the-competition");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/the-company", label: "The Company" },
          { label: "The Competition" },
        ]}
      />

      <DocHead
        doc="ASI-106"
        department="Office of the President"
        classification="Unrestricted — Cleared By Legal Under Protest"
        revision="Third setting. Two sentences removed, both restored."
        extra={[{ label: "Sentences Struck", value: "None" }]}
      />

      <div className="ap-rel">
        <Stamp float tone="red" sub="Legal Has Asked Twice">
          As Dictated
        </Stamp>
        <PageTitle
          kicker="Office of the President — Form ASI-106"
          title="On The Competition"
          deck={
            <>
              A frank and entirely fair assessment of a certain research facility in New Mexico, prepared
              by the President personally, set in full, and passed for the press by a Legal Department
              which wishes the record to show that it was passed over their objection.
            </>
          }
          byline={
            <>
              Dictated by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}, on the afternoon of 4 March
              1959. Transcribed by C. Corrected once, for spelling.
            </>
          }
        />
      </div>

      <Prose>
        <Lede>
          Every publication of this kind carries a page on which the head of the firm explains that he does
          not think about his competitors. This is not that page. I think about them constantly. I think
          about them at four in the morning on the third floor with the light on, and I have asked Records
          to give the thinking a form number so that at least it is filed.
        </Lede>
        <p>
          I have said elsewhere in this publication that they run on federal money, a federal timetable and
          federal haircuts. I have had a month to reconsider that sentence and my only correction is that I
          should like it set larger. Everything a man does out there he does with somebody else&rsquo;s
          money and somebody else&rsquo;s permission, and by the time the permission arrives the man who
          wanted the thing has been promoted away from wanting it.
        </p>
        <p>
          I will not print their name. Legal has taken the position that setting the name of a going concern
          in the same column as the remarks I intend to make about it invites a proceeding with a Latin term
          attached. So the name is struck. Records, which files what it likes and answers to nobody except
          me and not always me, has filed it here anyway:{" "}
          <Redacted reason="Name struck by Legal, 4 March 1959. Restored by Records the same afternoon.">
            the Black Mesa Research Facility
          </Redacted>
          . The rest of this sheet is not struck.
        </p>
      </Prose>

      <PullQuote big attribution={`${COMPANY.founder}, dictating this sheet`}>
        They publish. We finish.
      </PullQuote>

      <Section title="They Publish. We Finish.">
        <Prose>
          <p>
            Here is the whole difference and you may stop reading after it. A man out there has an idea on
            Monday. By Friday it is a proposal. By the spring it is a grant. By the following spring it is a
            paper with forty names on it, and every one of those forty men is a serious man with a serious
            education, and not one of the forty has been through the hole personally. Not one. They have
            written about the hole. They have modelled the hole. Two of them have very likely lectured on
            the hole at an institution with ivy on it.
          </p>
          <p>
            I have been through the hole eleven times. I did not model it first. Somebody in Materials asked
            me whether I wanted to see it and I said yes, and that is the entirety of the procedure, and it
            has cost this company{" "}
            <Link href="/enrichment-center/volunteer">sixty dollars a man</Link> and produced nine test
            shafts, four thousand feet of them, in a hole I bought in January 1944 from people who thought
            they were selling salt.
          </p>
          <p>
            A grant makes a careful man. I have nothing against careful men; I employ 1,247 people and a
            fair number of them are careful, and the ones who are careful are in Accounting where careful
            belongs. But careful is a way of arriving second with a footnote. When a scientist out there
            wants to try a thing, he asks whether he may. When a scientist here wants to try a thing, he
            asks whether the truck is loaded, and the answer is that the truck is always loaded, because I
            own the truck.
          </p>
          <p>
            They will tell you their safety record is better than ours. It is. It is better than ours
            because nobody out there has been anywhere. You cannot be injured by a corridor you have not
            walked down. Set our figures beside theirs and ours look worse, and I want ours printed anyway,
            in the same type, on the same page: 4,118 volunteers since 1954, of whom 1,306 completed, every
            man of them paid in cash the same afternoon out of a tin on the second floor. Ask them for their
            tin. They will send you a form.
          </p>
        </Prose>

        <Row>
          <Placard>No Federal Money Below This Line</Placard>
          <Placard tone="warn">We Do Not Ship To New Mexico</Placard>
        </Row>
      </Section>

      <Section title="A Comparison, Prepared By Accounting And Not By Me">
        <FigureTable
          caption={
            <>
              Aperture Science Innovators of Upper Michigan, compared with a certain facility in New
              Mexico. Their column compiled from open publication, the acknowledgements pages thereof, and
              two afternoons of the President reading with a pencil.
            </>
          }
          columns={[
            { key: "particular", head: "Particular" },
            { key: "us", head: "This Company" },
            { key: "them", head: "A Certain Facility" },
          ]}
          rows={[
            {
              particular: "Trading name",
              us: COMPANY.name,
              them: (
                <Redacted reason="Struck by Legal. See body copy, paragraph three.">
                  Black Mesa Research Facility
                </Redacted>
              ),
            },
            {
              particular: "Founded on",
              us: "Four hundred dollars and a bolt of vinyl, 1943",
              them: "An appropriation",
            },
            {
              particular: "Time to first result, quantum tunnelling",
              us: "A weekend, 1953",
              them: "Three years and continuing",
            },
            {
              particular: "Committees consulted before a test is authorised",
              us: "None. There is a desk and there is me behind it.",
              them: "Thirty-one, counted from their own acknowledgements",
            },
            {
              particular: "Men sent through personally by the head of the firm",
              us: "Eleven",
              them: "None recorded",
            },
            {
              particular: "Papers published, 1953 to date",
              us: "Two. Both withdrawn by us.",
              them: "Sixty-one. All finished. None of them a hole.",
            },
            {
              particular: "Depth of principal facility",
              us: "4,000 feet, nine shafts",
              them: "Above the water table",
            },
            {
              particular: "Shower curtains manufactured to date",
              us: "One million four hundred thousand, every one held water",
              them: "None. The reader is invited to sit with that.",
            },
            {
              particular: "Branches of the United States military supplied",
              us: "Every one except the Navy (1956)",
              them: "Unable to determine; they were not asked",
            },
            {
              particular: "Naval contracts held",
              us: "None",
              them: "Also none, though for a different reason",
            },
            {
              particular: "Holes presently open in the fabric of space",
              us: "Not fewer than nine at the time of setting",
              them: "None that we have been shown",
            },
          ]}
          foot="Accounting notes that it was instructed to prepare a fair comparison and believes it has done so. Accounting further notes that the final three rows were supplied by the President and inserted after the table was closed."
        />
      </Section>

      <Aside>
        The President wishes it recorded that he has never in his life applied for a grant, and that the
        one occasion on which a department of this company applied for a grant, in 1951, the money arrived
        and was spent on a hole, which he regards as the correct handling of federal money by everybody
        concerned.
      </Aside>

      {/* ------------------------------------------------------------- */}

      <Section title="The Three Sentences">
        <Prose>
          <p>
            The Legal Department read this sheet in draft. The Legal Department is three people in the
            basement, rear, and I pay them to be frightened so that I do not have to be. Herewith their
            memorandum, reproduced entire, because a company that prints the comparison ought to print the
            objection.
          </p>
        </Prose>

        <Memo
          to={`${COMPANY.founder}, President & Founder`}
          from="The Legal Department (Basement, Rear)"
          re="Form ASI-106, draft of — three sentences"
          date="4 March 1959"
          cc="Records & Filing; Office of the President (file copy)"
          sign={false}
          stamp={<Stamp tone="black" angle="right">Objection Noted</Stamp>}
        >
          <p>
            The Department has reviewed the draft as dictated. The Department raises no objection to the
            table, the comparison, the tone, or the paragraph concerning haircuts, all of which are matters
            of opinion and are defensible as such.
          </p>
          <p>
            The Department objects to three sentences, numbered in the transcript as nine, thirty-one and
            forty-four. Sentence nine asserts as fact a matter concerning a third party&rsquo;s competence
            which the Department cannot substantiate and does not wish to attempt to substantiate in a
            courtroom. Sentence thirty-one concerns a living man. Sentence forty-four is not defamatory.
            Sentence forty-four is, in the professional judgement of this Department, a threat.
          </p>
          <p>
            The Department respectfully requests deletion of all three and will accept deletion of
            forty-four alone. The Department asks that the President initial this memorandum to indicate
            which course he has chosen.
          </p>
        </Memo>

        <Marginalia>
          The President has initialled the memorandum. He has initialled it in the margin beside the word
          &ldquo;deletion&rdquo; and has written, beside his initials, the word &ldquo;no&rdquo;.
        </Marginalia>

        <Panel head="The Three Sentences, As Set" tone="red">
          <SpecList
            rows={[
              {
                k: "Nine",
                v: "In sixteen years they have not built one single thing that a man could stand inside.",
              },
              {
                k: "Thirty-one",
                v: "Their director has never been below ground in his life and you can see it in his ceilings.",
              },
              {
                k: "Forty-four",
                v: (
                  <Redacted reason="Retained in the file copy at the President’s instruction. Not for the press.">
                    If they ever do open a hole out there, I will be the first man through it, and I will
                    not be knocking.
                  </Redacted>
                ),
              },
            ]}
          />
        </Panel>
      </Section>

      <Notice head="The Enrichment Center Reminds You">
        Remarks concerning other research organisations are the personal remarks of the President and are
        not the position of the Enrichment Center, which has no position, which has never had a position,
        and which would like the reader to note that the President dictated this notice as well.
      </Notice>

      {/* ------------------------------------------------------------- */}

      <Section title="Correspondence With New Mexico, 1953 To Date">
        <SpecList
          rows={[
            { k: "Letters received", v: "Fourteen" },
            { k: "Letters answered", v: "Fourteen" },
            { k: "Answered by the President personally", v: "Fourteen" },
            { k: "Answered on the same day received", v: "Thirteen" },
            { k: "Answered by cable, at length, at company expense", v: "Four" },
            { k: "Their men who have written asking after a position here", v: "Nine" },
            { k: "Engaged", v: "Two. Both in Materials. Both still with us." },
            {
              k: "Our men who have gone to them",
              v: (
                <Redacted reason="Personnel file closed 1957. Do not open on this floor.">
                  One. He was not in Materials.
                </Redacted>
              ),
            },
            { k: "Requests received for reprints of our 1953 findings", v: "Thirty-one" },
            { k: "Reprints supplied", v: "None. There is nothing to reprint." },
          ]}
        />

        <IndexCard>
          <p className="ap-caps" style={{ fontSize: "0.6rem", marginBottom: "0.4rem" }}>
            Records &amp; Filing — Card 106/c
          </p>
          <p style={{ margin: 0 }}>
            Letter, undated, postmark New Mexico, received 19 January 1959. One page. Enquires whether this
            company would consider a joint programme, terms to be discussed, and asks in the final
            paragraph what our men are using as a conductor. Answered same day by the President, by cable,
            in nine words. Cable retained. Nine words not retained.
          </p>
        </IndexCard>

        <PenNote tone="pencil" angle={-1.2}>
          The 1953 paper he tells everybody we never needed to publish is in my second drawer, sealed,
          addressed and stamped. He told me to hold it until the device worked. The device worked in
          November. He has never once asked me for it back. &mdash; C.
        </PenNote>
      </Section>

      <Section title="On Being Second">
        <Prose>
          <p>
            I want to close on something that will not read like a boast, which is unusual for me, so pay
            attention. There is exactly one thing those men have that I want, and it is not their money and
            it is not their building and it is certainly not their forty-name papers. It is that when one of
            them dies of old age, somebody at a university will know his name.
          </p>
          <p>
            Nobody is going to know the names of my people. Not the machinists, not the men in the shafts,
            not the fellow who paints the chamber numbers, not the girl who runs this entire company from a
            desk outside my door. Our{" "}
            <Link href="/science/publications">papers are withdrawn</Link>, our patents are filed under
            curtains, and the finest work done in North America in the last six years was done four
            thousand feet under the Upper Peninsula by men whose names are on a payroll and nowhere else.
          </p>
          <p>
            That is the price of finishing instead of publishing, and I have paid it cheerfully every year
            since 1943 and I will pay it again. But I have thought about it at four in the morning, on the
            third floor, with the light on. Now go and read the{" "}
            <Link href="/products/catalogue">catalogue</Link>, and then go and read theirs, and then tell me
            which of the two you could stand inside.
          </p>
        </Prose>
      </Section>

      <ClearanceGate
        level={3}
        hint="Personnel who have taken an interest in their surroundings may read the appended note."
      >
        <Panel head="Appended To The File Copy. Not For The Press." tone="blue">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            He reads every one of their papers. Twice. They are in the locked drawer of the desk, in order,
            with pencil in the margins, and on the matter of holding an unstable sample still he has written
            &ldquo;they are ahead of us here&rdquo; and underlined it. He will not say that in a corridor
            and he will certainly not say it on a printed sheet. He also has a man out there on a retainer
            that goes through Commissary as a bread order, and if they ever put a human being through an
            apparatus of their own, this office will know about it before the government does. &mdash; C.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Signature note="Dictated 4 March 1959. Passed for the press over the objection of counsel, which objection is printed above at the President’s insistence." />

      <FinePrint>
        <b>An apology to the State of New Mexico.</b> Aperture Science Innovators holds the State of New
        Mexico in the highest regard, has never had cause to complain of its climate, its highways or its
        people, and regrets any impression to the contrary that may have been formed by a reader of this
        sheet. Nothing herein is intended as a reflection upon the State, upon any department of the Federal
        Government, upon any institution of learning, or upon any individual living or otherwise employed.
        This company apologises without reservation for the impression. It does not apologise for the sheet.
        Delivery territories exclude New Mexico for reasons of freight. See <Link href="/legal">Form
        ASI-900</Link>.
      </FinePrint>

      <FinePrint tiny>
        Form ASI-106. Office of the President. Retain until superseded; this sheet has been superseded twice
        and retained both times.
      </FinePrint>

      {/* The one who went to them in 1957 did not resign. He was walked to the gate. */}
      {/* He had been down Shaft 07 twice in the same week and he asked Records for a drawing */}
      {/* of a level that Records does not hold a drawing of. The file is closed. */}

      <Scrawl href="/vault/borealis">
        they took the man from seven and he never told them what he saw down there he told the boat instead
      </Scrawl>

      <p>
        <Link className="ap-caps" style={{ fontSize: "0.68rem" }} href="/the-company/cave-johnson">
          See also: a word from the President →
        </Link>
      </p>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

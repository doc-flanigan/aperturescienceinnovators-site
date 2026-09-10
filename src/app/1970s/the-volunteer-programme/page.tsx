import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Stamp, Panel, Notice, PullQuote, FinePrint, Coupon, Aside, Split } from "@/components/Print";
import { PenNote, Signature } from "@/components/Memo";
import { FigureTable, SpecList } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/1970s/the-volunteer-programme";

export const metadata: Metadata = {
  title: "The Volunteer Programme, 1976",
  description:
    "Sixty dollars, cash. A hundred and twenty if you let us take you apart. The 1976 terms of the Aperture Science volunteer programme, with the compensation voucher and a comparison to 1959.",
};

export default function Page() {
  const { prev, next } = neighbours(PATH);
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/archive", label: "The Archive" },
          { href: "/1970s", label: "1976" },
          { label: "Volunteers" },
        ]}
      />

      <DocHead doc="ASI-76-302" department="Enrichment Center" date="1976" classification="Unrestricted" revision="Terms revised; sum unchanged" />

      <div className="ap-rel">
        <Stamp float sub="Cash. Ask for Mr. Pike.">
          Sixty Dollars
        </Stamp>
        <PageTitle
          kicker="Enrichment Center"
          title="The Volunteer Programme, 1976"
          deck={
            <>
              Who wants to make sixty dollars? Cash. The terms of participation in Aperture Science testing,
              as revised for the present intake, who were not astronauts, and who were not, when we found
              them, awake.
            </>
          }
          byline={
            <>
              Dictated by <b>Cave Johnson</b>, Chief Executive Officer, to the waiting room. Transcribed by
              C. The compensation vouchers are ready.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            Now, you might be asking yourself, &ldquo;Cave, just how difficult are these tests? What was in
            that phone book of a contract I signed? Am I in danger?&rdquo; Let me answer those questions
            with a question: who wants to make sixty dollars? Cash.
          </Lede>
          <p>
            In 1959 this company paid sixty dollars to astronauts, war heroes and Olympians, and it said
            so on a sheet, and the sheet is still on file. In 1976 this company pays sixty dollars to you. I
            want you to think about what that means. It means the sixty dollars has not moved, and I have
            not moved, and the only thing that has moved is who is standing in the waiting room, and I did
            not move that either. The country did. Take it up with the country.
          </p>

          <h2>Who We Are Looking For</h2>
          <p>
            We are looking for the best. We drove out with the van and we looked, and there you were, on
            the benches by the courthouse and under the bandstand and in one case inside the bandstand,
            and we brought you here, and you can feel free to relax for up to twenty minutes in the waiting
            room, which is a damn sight more comfortable than the park benches most of you were sleeping
            on when we found you.
          </p>
          <p>
            The testing area&rsquo;s just up ahead. The quicker you get through, the quicker you&rsquo;ll get
            your sixty bucks. Caroline, are the compensation vouchers ready?
          </p>
          <PenNote tone="pencil" angle={-0.9}>
            They are vouchers, sir. You said cash. &mdash; C.
          </PenNote>
          <p>
            They are vouchers that turn into cash at the Gate House. Mr. Pike has a drawer. It is the same
            thing. Anybody who says it is not the same thing can take it up with Mr. Pike, who has held
            the gate since 1951 and has never once lost an argument at it.
          </p>

          <h2>The Additional Sixty</h2>
          <p>
            If you&rsquo;re interested in an additional sixty dollars, flag down a test associate and let
            &rsquo;em know. You could walk out of here with a hundred and twenty weighing down your bindle if
            you let us take you apart, put some science stuff in you, then put you back together good as
            new. We&rsquo;re not banging rocks together here. We know how to put a man back together.
          </p>
          <p>
            In case you&rsquo;re interested, there&rsquo;s still some positions available for that bonus
            opportunity. Again: all you gotta do is let us disassemble you. So that&rsquo;s a complete
            reassembly. New vitals. Spit-shine on the old ones. Plus we&rsquo;re scooping out tumours.
            Frankly, you oughtta be paying us.
          </p>

          <h2>On The Mantis Men</h2>
          <p>
            Those of you who volunteered to be injected with praying mantis DNA, I&rsquo;ve got some good
            news and some bad news. Bad news is we&rsquo;re postponing those tests indefinitely. Good news
            is we&rsquo;ve got a much better test for you: fighting an army of mantis men. Pick up a rifle
            and follow the yellow line. You&rsquo;ll know when the test starts.
          </p>
          <p>
            Applied Biology would like it noted that the mantis men were not their idea. Applied Biology
            would like a great many things noted, and has been asked to note them on the yellow line.
          </p>
        </Prose>

        <Stack>
          <Coupon>
            <p className="ap-caps" style={{ margin: 0, fontSize: "0.62rem", letterSpacing: "0.14em" }}>
              Aperture Science &middot; Compensation Voucher
            </p>
            <p style={{ fontFamily: "var(--font-ad)", fontSize: "var(--step-3)", fontWeight: 700, lineHeight: 1, margin: "0.5rem 0 0.3rem" }}>
              $60
            </p>
            <p style={{ margin: 0, fontSize: "var(--step--2)" }}>
              Entitles the bearer to <b>sixty dollars in cash</b> at the Gate House upon completion of the
              test, as certified by a test associate. Not transferable. Not redeemable against tattered
              hats, beard dirt, or the elevator.
            </p>
            <p style={{ margin: "0.5rem 0 0", fontSize: "var(--step--2)" }}>
              Bonus opportunity: <b>additional $60</b> upon complete reassembly. Tick here if you would like
              to be taken apart. &#9744;
            </p>
          </Coupon>
          <Aside>
            For many of you, I realise sixty dollars is an unprecedented windfall, so don&rsquo;t go spending
            it all on&hellip; I don&rsquo;t know. Caroline, what do these people buy?
          </Aside>
        </Stack>
      </Split>

      <PullQuote big attribution="Cave Johnson, 1976, to the waiting room">
        You&rsquo;re here because we want the best, and you&rsquo;re it. Nope. Couldn&rsquo;t keep a straight
        face.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="Terms Of Participation">
        <SpecList
          rows={[
            { k: "Compensation", v: "Sixty dollars, cash, on completion. Completion is defined by the test associate." },
            { k: "Bonus opportunity", v: "Additional sixty dollars for complete disassembly and reassembly. New vitals. Tumours scooped." },
            { k: "Contract", v: "One. It is the size of a phone book. You have signed it. It is in the van." },
            { k: "Waiting room", v: "Up to twenty minutes. Chairs. Do not smudge up the glass." },
            { k: "Belongings", v: "If you had any, please pick them up now. We don't want old newspapers and sticks cluttering up the building." },
            { k: "The elevator", v: "Is an elevator." },
            { k: "Next of kin", v: <>Notified on request. Requests since 1968: <Redacted reason="Struck by C.">none, because nobody has asked, because nobody has anybody</Redacted>.</> },
          ]}
        />
      </Section>

      <Section title="The Programme, Then And Now">
        <FigureTable
          caption="Particulars of the volunteer programme, 1959 printing against 1976 printing"
          columns={[
            { key: "p", head: "Particular", width: "11rem" },
            { key: "a", head: "1959" },
            { key: "b", head: "1976" },
          ]}
          rows={[
            { p: "Volunteers", a: "Astronauts, war heroes, Olympians", b: "Whoever was on the bench" },
            { p: "How they arrived", a: "By limousine", b: "By the van" },
            { p: "Compensation", a: "Sixty dollars, cash", b: "Sixty dollars, cash. Unchanged. The Chief Executive regards this as consistency." },
            { p: "Contract", a: "One sheet", b: "One phone book" },
            { p: "Waiting room", a: "Not required", b: "Twenty minutes. A damn sight more comfortable." },
            { p: "Test", a: "Repulsion gel; mantis DNA", b: "Propulsion gel; mantis men; disassembly" },
            { p: "The line on the floor", a: "Blue", b: "Orange, or yellow. Not blue. We cannot afford the blue paint." },
            { p: "Straight face", a: "Kept", b: "Not kept" },
          ]}
          foot={
            <>
              Readers wishing to compare the original terms are referred to the{" "}
              <Link href="/enrichment-center/volunteer">1959 sheet</Link>, which is on file, and which the
              Chief Executive has read recently and would prefer you did not mention.
            </>
          }
        />
      </Section>

      <Notice head="The Enrichment Center Reminds You">
        Anyway, don&rsquo;t smudge up the glass down there. In fact, why don&rsquo;t you just go ahead and
        not touch anything unless it&rsquo;s test related.
      </Notice>

      <ClearanceGate level={2} hint="Personnel with a gate pass may read the note about the drawer.">
        <Panel head="Appended By The Transcriptionist, Not For Print" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            He says cash. They are vouchers. Mr. Pike honours them out of his own drawer and I refill the
            drawer on Fridays from an account the bank does not know about, because the bank knows about
            all the others. He has never asked where the sixty dollars comes from. He thinks it comes from
            the company. In a sense it does. &mdash; C.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Signature title="Chief Executive Officer" note="Dictated to the waiting room, 1976. The waiting room did not respond." />

      <FinePrint tiny>
        Form ASI-76-302. Sixty dollars is sixty dollars. Participation constitutes agreement to the contract,
        which the volunteer has signed, which is in the van, and which the van has taken back to the
        courthouse for the next intake.
      </FinePrint>

      <Scrawl href="/1970s/propulsion-gel-testing">
        the yellow line goes to the mantis men. the orange line goes to the gel. there is no blue line.
        there used to be a blue line
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Row, Aside, Coupon,
} from "@/components/Print";
import { PenNote } from "@/components/Memo";
import { SpecList, KeyFigures } from "@/components/Data";
import { Checklist } from "@/components/Form";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { Rosette } from "@/components/svg/Ornament";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Prospectus & Offering",
  description:
    "An opportunity to own a piece of the largest privately held hole in North America — followed immediately by the fact that no shares are for sale and never will be.",
};

export default function Page() {
  const { prev, next } = neighbours("/investors/prospectus");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/investors", label: "Investors" },
          { label: "Prospectus" },
        ]}
      />

      <DocHead
        doc="ASI-602"
        department="Accounting"
        classification="Unrestricted — Not An Offer"
        revision="Third printing. Still not an offer."
      />

      <div className="ap-rel">
        <Stamp float sub="Nothing For Sale">
          Not An Offer
        </Stamp>
        <PageTitle
          advertising
          kicker="Accounting — An Opportunity"
          title="Own A Piece Of The Hole."
          deck={
            <>
              The largest privately held hole in North America, four kilometres deep, sixteen years in the
              digging, with 1,247 people in it and a product line that ranges from a shower curtain to a
              device the Legal Department will not let us call a door. No shares are for sale. None ever
              will be. Read on anyway; the President wrote it and he would like it read.
            </>
          }
          byline={
            <>
              Written by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}, sole owner, sole shareholder,
              and sole reason there is no offering
            </>
          }
        />
      </div>

      <Row style={{ gap: "2rem", alignItems: "center" }}>
        <Rosette style={{ width: 120, flex: "0 0 auto", color: "var(--accent)", opacity: 0.7 }} />
        <Prose>
          <Lede>
            A prospectus is a document in which a company describes itself to people who might buy a piece
            of it. This company has never been for sale and is not for sale now, so what follows is a
            prospectus in the older sense: a view of the thing, from a height, for the pleasure of the
            looking.
          </Lede>
        </Prose>
      </Row>

      <KeyFigures
        items={[
          { value: "100%", label: "Held by the founder", note: "Since 1943" },
          { value: "0", label: "Shares issued", note: "Ever" },
          { value: "0", label: "Shares for sale", note: "See above" },
          { value: "14", label: "Offers received", note: "All declined" },
          { value: "1", label: "Offer framed", note: "Third floor" },
        ]}
      />

      <Section title="The Business">
        <Prose>
          <p>
            Aperture Science Innovators of Upper Michigan makes the finest shower curtain in the Republic
            and supplies it to every branch of the United States military but one. With the proceeds it
            operates nine test shafts in a salt mine four kilometres deep, employs 1,247 people in them,
            and conducts applied research in quantum tunnelling, industrial emulsions, thinking machines,
            lunar substrate and applied biology, none of which the competition has managed to finish.
          </p>
          <p>
            Receipts were forty-one million dollars in fiscal 1958. Expenditure was thirty-nine. The
            difference was spent by March on a shaft that opened four months early. That is the business,
            and I would put it up against any business in the State of Michigan, and I have, at the
            Chamber of Commerce, and they asked me to sit down.
          </p>
        </Prose>
      </Section>

      <Section title="Why There Is No Offering">
        <Prose>
          <p>
            An outside shareholder is a man who owns a piece of a decision. I have been asked fourteen times
            to sell such a piece, by banks, by two competitors, by a syndicate in Detroit and by a
            gentleman from New Mexico whose letter I have framed, and I have said no fourteen times, and I
            am going to say why once, here, so that the fifteenth man can save his stamp.
          </p>
          <p>
            When I decide that this company is going to spend its first quarter on a machine that makes a
            hole in one wall come out of another, that is what happens, and nobody sends me a memo about
            it. A shareholder sends memos. A shareholder wants a board. A board wants a committee. A
            committee is three years and a federal grant to boil water, and I have seen what that produces
            and it is in a cabinet on the second floor and I have read all of it twice.
          </p>
          <p>
            No shares. Not for money, not for the Navy, not for the moon. I bought the moon with my own.
          </p>
        </Prose>
      </Section>

      <PullQuote big attribution={`${COMPANY.founder}, to the syndicate from Detroit`}>
        You are asking to buy a piece of the only building in America where a man can say yes without
        asking anybody. I am not selling that. I am not sure it can be sold.
      </PullQuote>

      <Section title="Risk Factors">
        <Prose>
          <p>
            Legal has asked that this section be written honestly. It has been written honestly. Legal has
            asked that it now be removed. It has not been removed.
          </p>
        </Prose>
        <Panel head="Factors A Prudent Investor Would Consider, If There Were An Investor" tone="red">
          <Checklist
            items={[
              { text: "The company is wholly dependent on the health, judgement and temper of one man.", checked: true },
              { text: "That man handles unshielded lunar substrate without a mask on ninety-one recorded occasions.", checked: true },
              { text: "The company’s largest expenditure in its history has not been explained to the auditors.", checked: true },
              { text: "The company’s principal facility is a hole, and the depth of the hole is disputed.", checked: true },
              { text: "Two chambers, two levels and 2,500 feet of tunnel appear on no drawing before 1957.", checked: true },
              { text: "The company owns a vessel in a dry dock it cannot locate.", checked: true },
              { text: "The Materials Department has set fire to its own floor nine times.", checked: true },
              { text: "Eleven volunteers have not returned, and the inquiries into nine of them closed the day they opened.", checked: true },
              { text: "Something is writing on the walls of the service corridors, and it is writing dates.", checked: true },
              { text: "The company’s only competitor has a federal budget and publishes four times a year.", checked: true },
              {
                text: (
                  <Redacted reason="Legal wrote this one. Legal asked for it back. Legal did not get it back.">
                    The company’s succession plan is a proposal with a number, and the successor has not been told.
                  </Redacted>
                ),
                checked: true,
              },
            ]}
          />
          <p style={{ fontSize: "var(--step--1)", marginBottom: 0 }}>
            The President has read the above and has appended, in pencil: &ldquo;All true. Still not
            selling.&rdquo;
          </p>
        </Panel>
      </Section>

      <Marginalia>
        The fourteenth offer, from a gentleman in New Mexico, proposed a price for the whole concern that
        the President has described as &ldquo;insulting, and also about right, which is the insulting
        part&rdquo;.
      </Marginalia>

      <Coupon>
        <p className="ap-caps" style={{ fontSize: "0.66rem", margin: "0 0 0.5rem", color: "var(--accent)" }}>
          Subscription Form — Do Not Complete
        </p>
        <p style={{ fontFamily: "var(--font-ad)", fontSize: "var(--step-2)", lineHeight: 1.04, margin: "0 0 0.5rem" }}>
          I Wish To Subscribe For ______ Shares.
        </p>
        <SpecList
          rows={[
            { k: "Name", v: "____________________" },
            { k: "Amount tendered", v: "$____________________" },
            { k: "Shares available", v: "None" },
            { k: "Amount to be returned", v: "All of it, with a letter, by hand, from the President" },
          ]}
        />
        <p style={{ fontSize: "var(--step--1)", margin: "0.6rem 0 0" }}>
          Fourteen men have completed this form. Fourteen letters have been written. The letters are, the
          recipients report, the most courteous refusals they have ever received, and none of them has
          asked again.
        </p>
      </Coupon>

      <Notice head="The Enrichment Center Reminds You">
        This document is not an offer, an invitation, a solicitation, or a representation. It is a
        description of a company by the man who owns it, published for the pleasure of the describing, and
        Legal would like everyone to be quite clear that nothing in it is for sale, least of all the moon.
      </Notice>

      <ClearanceGate level={3} hint="Test Associate grade or above. The fourteenth letter is in the file.">
        <Panel head="The Fourteenth Refusal — Extract" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            &ldquo;Sir. Your letter proposes to buy this company, and your figure is about right, and I am
            framing it, because in sixteen years you are the first man to price the hole correctly and it
            is a source of some private grief to me that you work where you work. The answer is no. It was
            always going to be no. But I want you to know that if I were ever to sell, it would be to a
            man who knew what it was worth, and you are the only one who has written.&rdquo;
          </p>
        </Panel>
      </ClearanceGate>

      <PenNote tone="pencil" angle={-1.2}>
        He framed the fourteenth. It is behind his desk. He tells visitors it is a commendation from the
        Army. &mdash; C.
      </PenNote>

      <Row>
        <Pictogram name="handshake" size={54} title="Prospectus" style={{ color: "var(--ink-3)" }} />
        <Placard>Wholly Owned &mdash; No Board</Placard>
        <Placard tone="warn">Nothing On This Sheet Is For Sale</Placard>
      </Row>

      <Aside>
        The company has no shares because it was incorporated in 1943 on four hundred dollars, and four
        hundred dollars does not buy a share register, and by the time it could have, the President had
        decided he liked it this way.
      </Aside>

      <Rule variant="fat" />

      <FinePrint>
        <p>
          Form ASI-602. Figures are those of the{" "}
          <Link href="/investors/annual-report">annual report, ASI-601</Link>, unaudited. The risk factors
          above are printed at the insistence of the Office of the President and against the advice of
          Legal, who wrote the eleventh and would like it back.
        </p>
      </FinePrint>

      {/* Fourteen offers. One priced the hole correctly. It was from New Mexico. */}

      <Scrawl href="/the-company/the-competition">
        the framed letter behind his desk isnt from the army. read the letterhead. read where its from
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

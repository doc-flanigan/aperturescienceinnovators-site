import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Row, Aside, Coupon, IndexCard,
} from "@/components/Print";
import { Memo, PenNote } from "@/components/Memo";
import { FigureTable, SpecList, KeyFigures } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "The Take-A-Wish Foundation",
  description:
    "A charitable arm of Aperture Science Innovators that collects wishes from the terminally ill and puts them to industrial use.",
};

export default function Page() {
  const { prev, next } = neighbours("/products/take-a-wish-foundation");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/products", label: "Products" },
          { label: "Take-A-Wish" },
        ]}
      />

      <DocHead
        doc="ASI-211"
        department="Corporate Philanthropy"
        classification="Unrestricted"
        revision="Fourth printing. Conversion table updated."
        extra={[{ label: "Registered", value: "Michigan, 1956" }]}
      />

      <div className="ap-rel">
        <Stamp float tone="green" sub="Registered 1956">
          Charitable
        </Stamp>
        <PageTitle
          advertising
          kicker="Corporate Philanthropy — A Registered Charity"
          title="The Take-A-Wish Foundation"
          deck={
            <>
              Founded in 1956 as the charitable arm of this company, the Foundation collects the wishes of
              the terminally ill and puts them to industrial use. Every wish is received in writing, filed,
              acknowledged, and converted. The Foundation is proud of its conversion rate and prints it
              below.
            </>
          }
          byline={
            <>
              Written by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle} and Chairman of the Foundation
            </>
          }
        />
      </div>

      <KeyFigures
        items={[
          { value: "2,206", label: "Wishes received", note: "Since 1956" },
          { value: "2,206", label: "Wishes acknowledged", note: "Within the week" },
          { value: "14", label: "Wishes granted", note: "As stated" },
          { value: "2,188", label: "Wishes converted", note: "To other purposes" },
          { value: "99.2%", label: "Conversion rate", note: "Highest in the sector" },
        ]}
      />

      <Prose>
        <Lede>
          I want to describe this Foundation plainly, because it is the part of this company that people
          outside it understand least and the part I am, in a private way, proudest of. A dying child has a
          wish. Most charities grant it, once, and the wish is gone. This Foundation takes the wish, files
          it, and uses it, and the wish is not gone. It is in a cabinet on the second floor doing work.
        </Lede>
        <p>
          A wish is an idea nobody has told to be reasonable. That is rarer than you think. Every man on my
          payroll has been told to be reasonable ten thousand times and it shows. A child of nine who has
          been told she will not see ten has not been told anything of the kind, and her wish arrives on my
          desk in crayon and it is, four times in five, a better research proposal than anything Applied
          Sciences has sent up in a month.
        </p>
      </Prose>

      <Section title="How The Foundation Works">
        <Prose>
          <p>
            A wish is received in writing, by post, from the child or the family. It is acknowledged within
            the week, by a letter from me, in my hand, which I do not delegate. It is then read by the
            Foundation&rsquo;s committee, which is me and Caroline, and one of two things happens.
          </p>
          <p>
            If the wish can be granted as stated, it is granted as stated, in full, at the company&rsquo;s
            expense, and nobody is told. Fourteen have been.
          </p>
          <p>
            If the wish cannot be granted as stated &mdash; and most cannot, because most are for something
            the world does not contain &mdash; it is converted. The wish is given a file number and sent to
            the department best placed to find out whether the world could be made to contain it. That is
            what this company is for, and the Foundation is the purest expression of it we have.
          </p>
        </Prose>
      </Section>

      <FigureTable
        caption="Wishes received and disposed of, 1956 – Spring 1959"
        columns={[
          { key: "cat", head: "Wish, by category" },
          { key: "n", head: "Received", numeric: true },
          { key: "g", head: "Granted", numeric: true },
          { key: "c", head: "Converted", numeric: true },
          { key: "to", head: "Converted to" },
        ]}
        rows={[
          { cat: "To fly", n: "618", g: "0", c: "618", to: "Aerial Faith Plate, ASI-207. Trajectory programme." },
          { cat: "To be somewhere else", n: "402", g: "3", c: "399", to: "Applied Sciences. Aperture programme." },
          { cat: "To be stronger, faster", n: "377", g: "0", c: "377", to: "Gels, ASI-203 and 204. Applied Biology." },
          { cat: "To see the moon", n: "204", g: "2", c: "202", to: "Substrate Division. They have it." },
          { cat: "To not be afraid", n: "188", g: "0", c: "188", to: "Operations. The volunteer programme." },
          { cat: "To have a friend who stays", n: "171", g: "0", c: "171", to: <Redacted reason="Converted to a variant of the storage cube. The variant is not in the catalogue.">Manufacturing.</Redacted> },
          { cat: "A cake", n: "141", g: "9", c: "132", to: "Commissary. Standing order." },
          { cat: "To keep going", n: "94", g: "0", c: "94", to: <Redacted reason="Converted to a programme with a number">Computation.</Redacted> },
          { cat: "Other", n: "11", g: "0", c: "7", to: "Four not converted. Four not grantable. Four in my desk." },
        ]}
        foot="Every wish, granted or converted, is retained on file in the Foundation's cabinet on the second floor, in the child's own hand, and the cabinet is the only one in this building the President has never once asked Records to reorganise."
      />

      <Marginalia>
        Nine cakes. The Foundation has baked nine cakes in three years and the commissary has baked one in
        six, and the Foundation would like it known that it borrows the commissary&rsquo;s oven and
        returns it clean.
      </Marginalia>

      <Section title="A Letter, And What Became Of It">
        <Row style={{ gap: "1.4rem", alignItems: "stretch", flexWrap: "wrap" }}>
          <IndexCard>
            <p style={{ margin: 0 }}>
              <b>RECEIVED 4 NOVEMBER 1957. FILE TW-1,404.</b>
              <br />
              <span style={{ fontFamily: "var(--font-hand)", fontSize: "1.2rem", lineHeight: 1.3 }}>
                Dear Mr. Johnson, I am 9. The doctor says I will not see 10. I do not want a pony. I want a
                friend who does not have to go home at the end and who will not be sad after. Can you make
                one. I have drawn it. It is square so it does not roll away. Love, Ellen.
              </span>
            </p>
          </IndexCard>
          <IndexCard>
            <p style={{ margin: 0 }}>
              <b>MATERIALS REQUISITION, 11 NOVEMBER 1957. REF. TW-1,404.</b>
              <br />
              Storage cube, weighted, standard, one (1). To be marked on each face by hand. To be delivered
              to the address on the file. Not for the catalogue. Not to be numbered. Charged to the
              Foundation. Approved. &mdash; C.J.
            </p>
          </IndexCard>
        </Row>
        <Aside>
          The cube was delivered on the fourteenth. The Foundation received a second letter in December,
          from the mother, and it is in the file, and I am not going to print it, and I read it once a month.
        </Aside>
      </Section>

      <PullQuote big attribution={`${COMPANY.founder}, Chairman, to the Michigan registrar of charities`}>
        A wish is an idea nobody has told to be reasonable. I have a building full of men who have been
        told to be reasonable. I would trade the lot for a cabinet of crayon.
      </PullQuote>

      <Memo
        to="Applied Biology"
        from="The Foundation"
        re="Files TW-0,911 through TW-1,004 — 'to keep going'"
        date="2 February 1959"
        cc="Computation"
      >
        <p>
          Ninety-four wishes, received over three years, from ninety-four children, in ninety-four hands,
          all saying in one form or another that they would like to keep going after the doctor says they
          cannot.
        </p>
        <p>
          The Foundation has held these ninety-four for three years because no department could take them.
          The Foundation now understands that a programme exists, jointly between your two departments,
          with a number and not a name, which is asking whether a person can be written down. The
          Foundation is sending you the ninety-four. It does not need them back.
        </p>
      </Memo>

      <Notice head="The Enrichment Center Reminds You">
        The Take-A-Wish Foundation is a registered charity under the laws of the State of Michigan. Wishes
        are received in confidence, acknowledged in the President&rsquo;s hand, and converted at the
        highest rate in the sector. The Foundation has never once been audited, and the President has never
        once returned a wish.
      </Notice>

      <Coupon>
        <p className="ap-caps" style={{ fontSize: "0.66rem", margin: "0 0 0.5rem", color: "var(--accent)" }}>
          Donations — Cut Here — Post To The Foundation
        </p>
        <p style={{ fontFamily: "var(--font-ad)", fontSize: "var(--step-2)", lineHeight: 1.04, margin: "0 0 0.5rem" }}>
          The Foundation Accepts Wishes. It Does Not Accept Money.
        </p>
        <p style={{ fontSize: "var(--step--1)", margin: 0 }}>
          The company funds the Foundation in full and will go on doing so. Donors who wish to contribute
          are asked instead to write down the one thing they would ask for if they had been told they could
          not be reasonable, and to post it. It will be acknowledged. It will be filed. It will be used.
        </p>
      </Coupon>

      <ClearanceGate level={3} hint="Test Associate grade or above. The four in the desk are not in the cabinet.">
        <Panel head="The Four In The President's Desk" tone="red">
          <SpecList
            rows={[
              { k: "TW-0,001", v: "The first wish received. 1956. A boy. 'For my father to come back up.' His father was on the payroll. His father was one of the eleven." },
              { k: "TW-0,412", v: "'To be in two places so I can be home and at the hospital.' Converted, once, on the third floor, in 1953, by accident, with a curtain. Not repeatable." },
              { k: "TW-1,700", v: "'For Mr. Johnson to not be sick.' Received January 1959. The President has not been told this one is in his own desk." },
              { k: "TW-2,206", v: <Redacted reason="The most recent. Received March. In the President's hand. Addressed to himself.">The most recent.</Redacted> },
            ]}
          />
        </Panel>
      </ClearanceGate>

      <PenNote tone="pencil" angle={-1.3}>
        He answers every one by hand. Two thousand two hundred and six. It takes him the first hour of every
        morning and it is the only hour of the day he does not cough. &mdash; C.
      </PenNote>

      <Row>
        <Pictogram name="heart" size={54} title="The Foundation" style={{ color: "var(--ink-3)" }} />
        <Placard>Corporate Philanthropy &mdash; Second Floor</Placard>
        <Placard tone="warn">Wishes Received &mdash; Money Returned</Placard>
      </Row>

      <Rule variant="fat" />

      <FinePrint>
        <p>
          Form ASI-211. The Take-A-Wish Foundation is a registered charity and a wholly funded arm of
          Aperture Science Innovators. Conversions are made to the programmes described at{" "}
          <Link href="/products/aerial-faith-plate">ASI-207</Link>,{" "}
          <Link href="/products/weighted-storage-cube">ASI-206</Link>,{" "}
          <Link href="/science/lunar">ASI-404</Link> and elsewhere. The Foundation keeps every letter and
          has never once thrown one away.
        </p>
      </FinePrint>

      {/* 171 wished for a friend who stays. 171 cubes, marked by hand, not in the catalogue. */}
      {/* TW-2,206 is in his own hand, addressed to himself. */}

      <Scrawl href="/vault/project-9">
        ninety four children wished to keep going. he sent the wishes to the machine. thats what its for. thats what it was always for
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

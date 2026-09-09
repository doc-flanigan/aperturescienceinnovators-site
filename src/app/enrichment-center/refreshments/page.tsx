import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Stamp, Panel, Notice, Rule, Row, FinePrint, Placard, PullQuote, Marginalia, Aside, Coupon, IndexCard,
} from "@/components/Print";
import { Memo, PenNote } from "@/components/Memo";
import { FigureTable, SpecList, Plate } from "@/components/Data";
import { Advert } from "@/components/Ad";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl, Terminal } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { Starburst } from "@/components/svg/Ornament";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Refreshments & The Cake",
  description:
    "Coffee, sandwiches, and a cake that has been promised to every volunteer of the Aperture Science Enrichment Center since 1953.",
};

export default function Page() {
  const { prev, next } = neighbours("/enrichment-center/refreshments");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/enrichment-center", label: "Enrichment Center" },
          { label: "Refreshments" },
        ]}
      />

      <DocHead
        doc="ASI-307"
        department="Commissary & Volunteer Comfort"
        classification="Unrestricted"
        revision="Fourth printing. Unchanged since 1953."
      />

      <div className="ap-rel">
        <Stamp float tone="green" sub="Since 1953">
          Promised
        </Stamp>
        <PageTitle
          advertising
          kicker="Commissary — Sub-Level 1"
          title="And Then, Cake"
          deck={
            <>
              At the conclusion of the final test, every volunteer of the Aperture Science Enrichment Center
              is invited to the commissary for refreshment, congratulation, and cake. This has been the
              standing arrangement since {"1953"} and no volunteer has ever been denied it.
            </>
          }
        />
      </div>

      <Row style={{ gap: "2rem", alignItems: "center" }}>
        <Starburst
          label="FREE"
          sub="CAKE"
          style={{ width: 128, flex: "0 0 auto", color: "var(--spot-orange)" }}
        />
        <Prose>
          <Lede>
            The Enrichment Center believes that a man who has spent an afternoon being flung across a
            chamber by a plate has earned something with sugar in it. This is not a bonus, a bribe, or an
            inducement. It is what a decent company does.
          </Lede>
        </Prose>
      </Row>

      <Section title="What The Commissary Offers">
        <FigureTable
          caption="Commissary standing menu, Sub-Level 1, all shifts"
          columns={[
            { key: "item", head: "Item" },
            { key: "hours", head: "Available" },
            { key: "price", head: "To Personnel", numeric: true },
            { key: "vol", head: "To Volunteers" },
          ]}
          rows={[
            { item: "Coffee", hours: "All hours", price: "$0.05", vol: "Free" },
            { item: "Sandwich, egg", hours: "0600–1400", price: "$0.35", vol: "Free" },
            { item: "Sandwich, unspecified", hours: "1400–2200", price: "$0.30", vol: "Free" },
            { item: "Milk", hours: "Until it goes", price: "$0.10", vol: "Free" },
            { item: "Pie", hours: "Thursdays", price: "$0.25", vol: "Free" },
            {
              item: "Cake",
              hours: "At the conclusion of the final test",
              price: "—",
              vol: <b>Free</b>,
            },
          ]}
          foot="Prices held since 1953 by order of the President, who regards a commissary that turns a profit as a commissary that has misunderstood its job."
        />
      </Section>

      <PullQuote big attribution="Enrichment Center announcement, played in every chamber, every test, since 1953">
        Cake and Grief Counseling will be available at the conclusion of the test.
      </PullQuote>

      <Notice head="The Enrichment Center Reminds You">
        Grief Counseling is also available at the conclusion of the test. The Enrichment Center has never
        been asked why grief counseling would be required at the conclusion of a test, and has therefore
        never had to answer.
      </Notice>

      <Section title="The Cake Itself">
        <Prose>
          <p>
            The Enrichment Center celebration cake is prepared to a standing order held by the commissary
            since 1953. It is chocolate. It has a candle in it. The commissary has been asked not to publish
            the full ingredient list on the grounds that it is a trade matter, and the commissary has
            complied, and the commissary would like it recorded that it complied with some relief.
          </p>
        </Prose>

        <Row style={{ gap: "2rem", alignItems: "flex-start" }}>
          <Plate
            number="7"
            caption="The Enrichment Center celebration cake, as specified. One candle. The candle is not optional and the commissary has never been told why."
            tint
          >
            <Pictogram name="cake" size={120} title="The Enrichment Center celebration cake" />
          </Plate>
          <div style={{ flex: "1 1 18rem" }}>
            <SpecList
              rows={[
                { k: "Type", v: "Chocolate" },
                { k: "Candles", v: "One. Always one." },
                { k: "Standing order since", v: "1953" },
                { k: "Volunteers promised", v: "4,118" },
                { k: "Volunteers who reached the conclusion", v: "1,306" },
                {
                  k: "Cakes issued",
                  v: <Redacted reason="Commissary declines to publish this figure">0</Redacted>,
                },
                { k: "Cakes baked", v: <Redacted reason="See above. Same figure.">0</Redacted> },
                { k: "Tins on hand", v: "One. Empty. Clean. Dated 1953." },
              ]}
            />
          </div>
        </Row>

        <Marginalia>
          The commissary has requested, in writing, four times, that either the cake be baked or the
          announcement be changed. The commissary has received no reply on any occasion.
        </Marginalia>
      </Section>

      <Advert
        eyebrow="Sub-Level 1 — Open All Shifts"
        head="Come Down And Have Something."
        burst="FREE"
        burstSub="TO VOLUNTEERS"
        action="Volunteer Application ASI-302"
        href="/enrichment-center/volunteer"
      >
        <p>
          Coffee is five cents and worth eleven. The pie is on Thursdays and the pie is genuinely
          excellent. Come down, sit at a table, and let somebody who is not a scientist ask you how your
          afternoon went.
        </p>
      </Advert>

      <Memo
        to="The Office of the President"
        from="Commissary"
        re="The cake, fourth request"
        date="9 February 1959"
        sign={false}
        stamp={<Stamp tone="black" angle="right">No Reply</Stamp>}
      >
        <p>
          This is the fourth time we have written. We are not complaining about the work. We would bake four
          hundred cakes tomorrow and we would be glad to.
        </p>
        <p>
          We are asking to be told what to do when a volunteer comes down here at the end of an afternoon
          and asks for the cake he has been promised in every chamber all day. There is no procedure for
          that. We have been making it up for four years and we are not good at it.
        </p>
        <p>
          Either send us the order or take it out of the announcement. Please. Either one.
        </p>
      </Memo>

      <ClearanceGate level={1} hint="Volunteer grade or above. Type the word on any page in this publication.">
        <Stack>
          <Panel head="Commissary Standing Order — Retrieved From The Machine" tone="red">
            <Terminal>
              {`COMMISSARY STANDING ORDER
ENRICHMENT CENTER CELEBRATION CAKE

  FLOUR, RYE ......................... 1 1/2 CUP
  SUGAR, GRANULATED .................. 1 CUP
  COCOA .............................. 3/4 CUP
  CREAM OF TARTAR .................... 1 TSP
  ETHYL BENZENE, FISH-SHAPED ......... 1/4 CUP
  CANNED UNICORN MEAT ................ 1 CAN
  SUBSTITUTE PEOPLE ..................  AS REQUIRED
  CANDLES ............................ 1

BAKE AT 350 DEGREES UNTIL THE CENTRE IS NO LONGER A LIE.

COMMISSARY NOTE: we have never had the unicorn meat. we have
never had the ethyl benzene. we have made this cake zero times.
the cake is on the poster. the cake is in the contract. the cake
is in the announcement. the cake is not in the kitchen.`}
            </Terminal>
          </Panel>

          <Aside>
            The standing order was entered into the machine on Sub-Level 4 in 1955 by a clerk who has since
            left the company. The final paragraph is not part of the order. Nobody has been able to
            establish who added it, or when, or how, given that the machine has no keyboard.
          </Aside>
        </Stack>
      </ClearanceGate>

      <IndexCard>
        <p style={{ margin: 0 }}>
          <b>NOTICE POSTED IN THE COMMISSARY, HANDWRITTEN, UNDATED:</b>
          <br />
          &ldquo;If a volunteer asks about the cake, do not say no. Sit him down. Give him the pie. The pie
          is real.&rdquo;
        </p>
      </IndexCard>

      <PenNote tone="pencil" angle={-1.3}>
        I have asked him about this six times. He says the same thing every time: &ldquo;There will be
        cake.&rdquo; He is not lying. That is what worries me. &mdash; C.
      </PenNote>

      <Row>
        <Placard>Commissary &mdash; Sub-Level 1</Placard>
        <Placard tone="warn">Volunteers Eat Free</Placard>
        <Pictogram name="cake" size={52} title="Cake" style={{ color: "var(--spot-orange)" }} />
      </Row>

      <Rule variant="fat" />

      <FinePrint>
        <p>
          Form ASI-307. References in Aperture Science Innovators publications to a cake are promotional in
          character. See{" "}
          <Link href="/legal">Form ASI-900, clause IV</Link>, which the commissary has read and which the
          commissary would like everyone to know it did not write.
        </p>
      </FinePrint>

      {/* Four thousand one hundred and eighteen promised. Zero baked. */}
      {/* Somebody should have said something in 1953. */}

      <Scrawl href="/vault/the-dens">
        the cake is a lie. i wrote it on four walls. nobody has painted over the fourth one yet
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

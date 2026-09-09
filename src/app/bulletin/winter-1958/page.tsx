import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, FinePrint,
  Marginalia, Row, Aside, Stub, Columns,
} from "@/components/Print";
import { PenNote } from "@/components/Memo";
import { FigureTable } from "@/components/Data";
import { Advert } from "@/components/Ad";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { Flourish } from "@/components/svg/Ornament";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "The Aperture Bulletin — Winter 1958",
  description:
    "The substrate consignment declared complete, the bowling league finals, a correction, an advertisement for the pie, and nine paragraphs about a missing elevator.",
};

function Item({ date, head, children }: { date: string; head: string; children: React.ReactNode }) {
  return (
    <div style={{ breakInside: "avoid", marginBottom: "1.2rem" }}>
      <p className="ap-caps" style={{ fontSize: "0.62rem", color: "var(--accent)", margin: "0 0 0.15rem" }}>
        {date}
      </p>
      <h3 style={{ fontSize: "var(--step-1)", margin: "0 0 0.3rem", textTransform: "none", letterSpacing: 0 }}>{head}</h3>
      <div style={{ fontSize: "var(--step--1)" }}>{children}</div>
    </div>
  );
}

export default function Page() {
  const { prev, next } = neighbours("/bulletin/winter-1958");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/bulletin", label: "Bulletin" },
          { label: "Winter 1958" },
        ]}
      />

      <DocHead
        doc="ASI-702"
        department="Corporate Communications"
        classification="Unrestricted"
        revision="Vol. V, No. 4"
        date="Winter 1958"
      />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="Vol. V No. 4">
          Winter
        </Stamp>
        <PageTitle
          advertising
          kicker="The House Organ — Vol. V, No. 4"
          title="The Aperture Bulletin"
          deck={
            <>
              Winter 1958. The substrate consignment is declared complete; the bowling league finals; a
              correction to the autumn issue; the pie; and nine paragraphs, which the Bulletin has cut to
              four, about an elevator car that was on the third floor on a Tuesday and was not on any floor
              on the Wednesday.
            </>
          }
          byline={
            <>
              Edited by <b>Corporate Communications</b>. Elevator item by Facilities, who wrote nine
              paragraphs and were given four.
            </>
          }
        />
      </div>

      <Rule variant="double" />

      <Columns count={2}>
        <Item date="February 28" head="Substrate Consignment Declared Complete">
          <p>
            The Materials Department confirms receipt of the final lot of lunar substrate, bringing the
            company&rsquo;s holding to one thousand one hundred and forty pounds from forty-one vendors in
            nine countries. The consignment is the largest privately held inventory of its kind in the
            world, and the President has asked the Bulletin to say so and has asked the Bulletin not to say
            what it cost, and the Bulletin has done both.
          </p>
          <p>
            &ldquo;A bargain,&rdquo; the President told the Bulletin. Accounting, contacted for comment,
            declined to use the word.
          </p>
        </Item>

        <Item date="December 9" head="Bowling League Finals: Ironmen Take Fourth Title">
          <p>
            The Machine Shop Ironmen took their fourth consecutive league title on the ninth, defeating the
            Gate House in a final that Mr. Pike, bowling alone on both lanes, took to the last frame. The
            Marine Division finished ninth of fourteen for the third year running, which the Division
            regards as the best result any of its programmes has achieved.
          </p>
        </Item>

        <Item date="Facilities" head="The Elevator">
          <p>
            Facilities has asked the Bulletin to report that the number two car of the main shaft elevator
            was at the third floor on the evening of Tuesday the eleventh of November, that the shaft was
            locked at six, and that on the morning of Wednesday the twelfth the car was not at the third
            floor, nor at any floor, nor in the shaft, nor in the pit.
          </p>
          <p>
            The car was located on Thursday the thirteenth at Sub-Level 6, in a gallery which the number two
            car does not serve and which has no elevator doors. Facilities has no explanation. Facilities
            has given the Bulletin nine paragraphs of no explanation and the Bulletin has retained four.
          </p>
          <p>
            The car is back in service. It has been inspected twice. It runs eleven minutes down and{" "}
            <Redacted reason="Facilities struck the figure. Corporate Communications restored it.">nine minutes up</Redacted>
            , which is the same as before, which Facilities would like to stress.
          </p>
          <p>
            Personnel are reminded not to press the button twice.
          </p>
        </Item>

        <Item date="Correction" head="A Correction To The Autumn Issue">
          <p>
            The Autumn 1958 issue reported that the Materials Department&rsquo;s bench four had been
            replaced &ldquo;for the last time&rdquo;. Materials has asked the Bulletin to correct this to
            &ldquo;for the third time&rdquo;. The Bulletin regrets the error and regrets, in advance, the
            fourth.
          </p>
        </Item>
      </Columns>

      <Marginalia>
        The Bulletin&rsquo;s standing policy is that Facilities may have four paragraphs on any subject.
        Facilities has proposed a policy of nine. The Bulletin has proposed that Facilities find the
        elevator.
      </Marginalia>

      <Rule variant="hair" />

      <Row style={{ gap: "2rem", alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 22rem" }}>
          <FigureTable
            caption="Fourth quarter, 1958 — Operations summary"
            columns={[
              { key: "k", head: "Item" },
              { key: "v", head: "Figure", numeric: true },
              { key: "n", head: "Note" },
            ]}
            rows={[
              { k: "Volunteers presented", v: "412", n: "Q4" },
              { k: "Volunteers completed", v: "128", n: "Q4" },
              { k: "Volunteers not returned", v: "0", n: <Redacted reason="Correct at the time of setting. Correct for eleven days.">Correct at time of setting</Redacted> },
              { k: "Chambers in service, all shafts", v: "218", n: "Shaft 09 not yet open" },
              { k: "Third-floor ceilings", v: "2", n: "Q4" },
              { k: "Elevators located", v: "1", n: "Of one. Eventually." },
            ]}
            foot="The Bulletin sets this table from figures supplied by Operations on the last working day of the quarter and prints it as supplied."
          />
        </div>
        <div style={{ flex: "1 1 14rem" }}>
          <Panel head="Personals" tone="tint">
            <p style={{ fontSize: "var(--step--1)", margin: "0 0 0.6rem" }}>
              <b>FOUND.</b> Elevator car, number two. Sub-Level 6. Owner may collect. &mdash; Facilities.
            </p>
            <p style={{ fontSize: "var(--step--1)", margin: "0 0 0.6rem" }}>
              <b>WANTED.</b> Lemons, one gross. Not for the pie. &mdash; Third floor. <i>Refused.
              &mdash; Commissary.</i>
            </p>
            <p style={{ fontSize: "var(--step--1)", margin: 0 }}>
              <b>NOTICE.</b> The Marine Division bowling team is not disbanding. The Marine Division has one
              player and he is not disbanding either. &mdash; Box 1.
            </p>
          </Panel>
        </div>
      </Row>

      <Advert
        eyebrow="Commissary — Sub-Level 1 — Thursdays"
        head="Pie."
        action="The Commissary Menu, Form ASI-307"
        href="/enrichment-center/refreshments"
      >
        <p>
          Twenty-five cents. Thursdays. The Commissary has been asked what kind and has answered that it is
          Thursday&rsquo;s kind. The Commissary has never been asked twice.
        </p>
      </Advert>

      <Notice head="The Enrichment Center Reminds You">
        An elevator car that has been found is an elevator car that was never lost. It was merely, for two
        days, on a level it does not serve, and the Enrichment Center regards that as a matter for
        Facilities and not for the Bulletin.
      </Notice>

      <ClearanceGate level={3} hint="Test Associate grade or above. Paragraphs five through nine are on Sub-Level 7.">
        <Panel head="Facilities — Paragraphs Five Through Nine, Cut By The Bulletin" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            The car was found at Sub-Level 6 with its doors open onto a gallery that has no doors. The
            gallery is not on the 1951 drawing. It is on the 1957 drawing. The car&rsquo;s counter, which
            records trips, showed one trip more than the ledger. The car&rsquo;s cabin lamp was on. The car
            had been cleaned. Facilities did not clean it. Facilities has recommended, for the first time
            in its existence, no action, and would like it recorded that it did not enjoy writing that.
          </p>
        </Panel>
      </ClearanceGate>

      <PenNote tone="pencil" angle={-1.3}>
        Eleven days. The Bulletin went to press on the first and the fortnight in the shaft was the twelfth
        onward. Nobody at the Bulletin knew. I knew. I let it print. &mdash; C.
      </PenNote>

      <Row>
        <Pictogram name="elevator" size={52} title="The elevator" style={{ color: "var(--ink-3)" }} />
        <Stub head="Vol. V No. 4">Winter 1958 · 1,106 copies · Enrichment Center Press</Stub>
        <Placard tone="warn">Do Not Press The Button Twice</Placard>
      </Row>

      <Aside>
        The Winter issue was circulated to 1,106 personnel. The Spring issue was circulated to 1,247. The
        Bulletin is glad of the growth and would like Personnel to explain the eleven names on the winter
        list that are not on the spring one.
      </Aside>

      <Flourish style={{ width: 200, color: "var(--ink-faint)", margin: "1rem 0" }} />

      <FinePrint tiny>
        Vol. V, No. 4. The Aperture Bulletin is set by the Enrichment Center Press and circulated to all
        personnel. The elevator item was submitted by Facilities at nine paragraphs, cut to four by the
        Bulletin, and restored to nine by the Office of the President, on Sub-Level 7, where it is filed.
      </FinePrint>

      {/* The car had been cleaned. Facilities did not clean it. */}
      {/* Eleven names on the winter list. Eleven. It is always eleven. */}

      <Scrawl href="/enrichment-center/test-shaft-09">
        one trip more than the ledger. the car went somewhere with nobody in it. or with somebody the ledger doesnt count
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

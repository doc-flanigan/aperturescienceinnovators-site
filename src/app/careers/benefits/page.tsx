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
import { FigureTable, SpecList, KeyFigures } from "@/components/Data";
import { Advert } from "@/components/Ad";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Benefits & The Company Town",
  description:
    "Housing, the commissary, the company store, the bowling league, and the finest dental plan in the Upper Peninsula — which exists for a reason the company is proud of.",
};

export default function Page() {
  const { prev, next } = neighbours("/careers/benefits");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/careers", label: "Careers" },
          { label: "Benefits" },
        ]}
      />

      <DocHead
        doc="ASI-502"
        department="Personnel"
        classification="Unrestricted"
        revision="Fifth printing. Dental section expanded."
      />

      <div className="ap-rel">
        <Stamp float tone="green" sub="Aperture Row">
          Company Town
        </Stamp>
        <PageTitle
          advertising
          kicker="Personnel — Second Floor"
          title="A Roof, A Meal, And Your Teeth."
          deck={
            <>
              Everything a man needs, at a price he can picture, within four thousand feet of where he
              works. Housing on Aperture Row, coffee at five cents, the company store on credit, the finest
              bowling league in Marquette County, and a dental plan this company built for a reason it is
              not ashamed of.
            </>
          }
          byline={
            <>
              Dictated by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}
            </>
          }
        />
      </div>

      <KeyFigures
        items={[
          { value: "$14", label: "Rent, per month", note: "Aperture Row, two rooms" },
          { value: "5¢", label: "Coffee", note: "All hours" },
          { value: "0%", label: "Interest, company store", note: "Held since 1951" },
          { value: "100%", label: "Dental, covered", note: "Every filling. See below." },
          { value: "14", label: "Bowling teams", note: "One has a single player" },
        ]}
      />

      <Prose>
        <Lede>
          A man who lives four thousand feet above where he works spends two hours a day going up and down,
          and two hours a day is ten hours a week, and ten hours a week is a fifth of the man. So I built the
          housing inside the mine. Aperture Row is on the second level, it is warm, it is dry, it is
          fourteen dollars a month, and nobody who lives there has ever been late.
        </Lede>
        <p>
          The competition offers a pension. I offer a house you can walk to work from without going outside
          in a Michigan January. I know which one I would take, and I know which one 1,247 people took.
        </p>
      </Prose>

      <Section title="The Schedule Of Benefits">
        <FigureTable
          caption="Benefits available to all personnel, Spring 1959"
          columns={[
            { key: "b", head: "Benefit" },
            { key: "d", head: "Detail" },
            { key: "c", head: "Cost to personnel", numeric: true },
            { key: "n", head: "Note" },
          ]}
          rows={[
            { b: "Housing, Aperture Row", d: "Two rooms, heated, second level", c: "$14 / month", n: "Waiting list of nine" },
            { b: "Housing, surface", d: "Four rooms, Ishpeming road", c: "$31 / month", n: "For families and the claustrophobic" },
            { b: "Commissary", d: "All hours, Sub-Level 1", c: "See menu", n: "Coffee 5¢. Pie Thursdays." },
            { b: "Company store", d: "Credit against wages, no interest", c: "Nil", n: "Everything but lemons" },
            { b: "Medical", d: "Second floor, all hours", c: "Nil", n: "Medical has asked us to print ‘all hours’ in bold" },
            { b: "Dental", d: "Every procedure, every filling, no limit", c: "Nil", n: "See the next section. Please." },
            { b: "Bowling league", d: "Fourteen teams, Tuesdays", c: "Nil", n: "Marine Division fields one man" },
            { b: "Laundry", d: "Gel-grade, industrial", c: "Nil", n: "Gel does not come out. Laundry keeps trying." },
            { b: "Rail spur", d: "2.6 miles to the DSS&A", c: "Nil", n: "Freight only. Personnel have ridden it anyway." },
            { b: "Bomb shelter", d: "The whole facility", c: "Nil", n: "We are the bomb shelter" },
          ]}
          foot="No benefit on this schedule is contingent on length of service, grade, or department. The President’s position is that a man on his first day needs a roof exactly as much as a man on his last."
        />
      </Section>

      <Section title="The Dental Plan">
        <Prose>
          <p>
            Here is the section Personnel asked me to write carefully, and I am going to write it exactly as
            it happened, because this company does not pretend a benefit came from nowhere.
          </p>
          <p>
            In 1955 the Material Emancipation Grill entered service. The grill removes from a man any object
            he ought not to be carrying through it, and the department that built it defined &ldquo;object&rdquo;
            with a thoroughness I have come to expect from them. Tools. Coins. Buttons. Belt buckles. And, it
            emerged in the first week, fillings.
          </p>
          <p>
            Within a month this company had more men with holes in their teeth than any employer in the
            State of Michigan and I was not going to have that on my payroll. So I hired two dentists, put
            them on the second floor, told them to fill every hole this building makes at no charge for as
            long as the building keeps making them, and that is the finest dental plan in the Upper
            Peninsula, and it exists because of the grill, and I am proud of both.
          </p>
        </Prose>

        <Panel head="Dental — By The Numbers" tone="blue">
          <SpecList
            rows={[
              { k: "Dentists on staff", v: "Two. Full time." },
              { k: "Fillings replaced, 1955 – Spring 1959", v: "4,910" },
              { k: "Fillings replaced more than once, same tooth", v: "1,206" },
              { k: "Record, single tooth", v: "Eleven. Machine shop. He walks through it on purpose." },
              { k: "Fillings recovered from the grill tray", v: "4,910" },
              { k: "Fillings recovered that were not issued by this company", v: <Redacted reason="Dental has raised this in writing">Fourteen.</Redacted> },
            ]}
          />
        </Panel>
      </Section>

      <Marginalia>
        The two dentists are the only members of staff whose salaries the President has never once
        questioned, and the only ones who have never once been asked to go down the shaft.
      </Marginalia>

      <Advert
        eyebrow="Aperture Row — Second Level"
        head="Never Go Outside In January Again."
        burst="$14"
        burstSub="A MONTH"
        action="See Positions Available"
        href="/careers/openings"
      >
        <p>
          Two rooms, heated by the reactor gallery below, dry, and eleven minutes from the deepest chamber in
          North America. Waiting list of nine. The President has offered to dig more.
        </p>
      </Advert>

      <PullQuote big attribution={`${COMPANY.founder}, on the dental plan, to a visiting journalist who did not print it`}>
        Every hole this building makes, this building fills. That is the policy and it is the only one I
        have that the competition could not copy if they tried.
      </PullQuote>

      <Notice head="The Enrichment Center Reminds You">
        The company store extends credit against wages at no interest and has done since 1951. Personnel
        are reminded that credit is against wages, that wages are paid Fridays, and that the store has
        never once had to ask twice.
      </Notice>

      <ClearanceGate level={2} hint="Junior Associate grade or above. Facilities does not print the housing footnote.">
        <Panel head="Facilities — Note On Aperture Row" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            Aperture Row is on the second level of a salt mine four kilometres deep. It is heated by the
            reactor gallery, which is two levels down. It has never been cold. It has, on three nights in
            the last year, been warmer than Facilities can account for, and on those three nights the gate
            ledger&rsquo;s down and up columns did not agree.
          </p>
        </Panel>
      </ClearanceGate>

      <PenNote tone="pencil" angle={-1.2}>
        Fourteen fillings in the tray that we did not put in. Dental keeps them in a jar. Dental has not
        been told what to do with the jar and I have not been asked. &mdash; C.
      </PenNote>

      <Row>
        <Pictogram name="heart" size={54} title="Benefits" style={{ color: "var(--ink-3)" }} />
        <Placard>Aperture Row &mdash; Second Level</Placard>
        <Placard tone="warn">Dental &mdash; Second Floor &mdash; All Hours</Placard>
      </Row>

      <Aside>
        The Marine Division bowling team has one member, bowls on Tuesdays, and has finished ninth of
        fourteen for three consecutive seasons, which the Marine Division regards as the best result any of
        its programmes has achieved.
      </Aside>

      <Rule variant="fat" />

      <FinePrint>
        <p>
          Form ASI-502. The grill is described at{" "}
          <Link href="/products/material-emancipation-grill">Form ASI-209</Link>. The commissary menu is at{" "}
          <Link href="/enrichment-center/refreshments">Form ASI-307</Link>. The company store does not stock
          lemons, and personnel are asked to stop requesting them.
        </p>
      </FinePrint>

      {/* Fourteen fillings nobody issued. Three warm nights. The ledger disagreed on all three. */}

      <Scrawl href="/vault/the-dens">
        aperture row is warm on the nights the ledger is wrong. i have lived there four years. i have stopped sleeping on those nights
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

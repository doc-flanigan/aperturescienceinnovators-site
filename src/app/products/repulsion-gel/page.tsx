import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Split, Row, Aside, Coupon,
} from "@/components/Print";
import { Memo, PenNote } from "@/components/Memo";
import { FigureTable, SpecList, Plate } from "@/components/Data";
import { Checklist, Field } from "@/components/Form";
import { Advert } from "@/components/Ad";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Repulsion Gel",
  description:
    "Product No. 203 from the Materials Division: a high-rebound industrial emulsion in Aperture Orange that spent eleven months of its life trying to be a dietetic pudding.",
};

export default function RepulsionGelPage() {
  const { prev, next } = neighbours("/products/repulsion-gel");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/products", label: "Products & Divisions" },
          { label: "Repulsion Gel" },
        ]}
      />

      <DocHead
        doc="ASI-203"
        department="Materials"
        classification="Unrestricted"
        revision="Second printing. Nutritional matter struck."
      />

      <div className="ap-rel">
        <Stamp float tone="red" sub="Materials, 1955">
          Not A Foodstuff
        </Stamp>
        <PageTitle
          advertising
          kicker={<>Materials Division &mdash; Product No. 203</>}
          title="Repulsion Gel"
          deck={
            <>
              A high-rebound industrial emulsion in Aperture Orange, sold by the pail, the drum and the tank
              car. It spent eleven months of its life trying to be a dessert. That part is on this sheet
              too, because this company does not hide a failure. It puts a catalogue number on it.
            </>
          }
          byline={
            <>
              Dictated by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}. Specification supplied by the
              Materials Division. The adjectives are the President&rsquo;s and the Division disclaims them.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            In the spring of 1954 I told the Materials Division to invent a pudding. Not a better pudding.
            A pudding with nothing in it. The country is getting heavy, the country would like to keep
            eating, and I saw no reason on this earth why a man should not sit down to four bowls of
            dessert and get up lighter than he sat down. Materials said it could not be done. I asked them
            what it would cost to be wrong. Eleven months later I had a substance that goes into a man and
            does not stay in a man, and that is where the dietetic programme and I parted company.
          </Lede>
          <p>
            Here is the honest history, because the Legal Department tells me it is going to come out
            anyway. Repulsion Gel No. 203 was formulated as a dietetic pudding substitute. It was mixed in
            the third-floor kitchen by men in aprons. It came in six flavours. It was tested on seventeen
            volunteers from the steno pool and the machine shop, three spoonfuls apiece, and not one of
            those seventeen men kept it down. That is a total and unqualified failure of a dessert.
          </p>
          <p>
            But here is the thing nobody wrote in the report and everybody in that room saw. It did not
            come back <em>up</em>. It came back <em>off</em>. It hit the linoleum and it went straight back
            at the ceiling, and it hit the ceiling and it came back at the floor, and the seventeenth man
            put down his spoon and said, without any prompting from me, &ldquo;Mr. Johnson, that is not a
            pudding, that is a trampoline.&rdquo;
          </p>
          <p>
            I gave him a hundred dollars on the spot. The pudding programme closed that afternoon. The
            bouncing did not close and has not closed since.
          </p>
          <p>
            What we sell you now is that same emulsion with the sugar taken out and the solids doubled.
            You brush it on at a nominal eighth of an inch and it cures in forty minutes, and thereafter
            anything that strikes that surface leaves it faster than it arrived. Warehouses buy it for
            loading docks. The Enrichment Center paints entire chambers with it. Two gentlemen in Wisconsin
            bought a drum for a gymnasium and I have not heard from them since, which I choose to read as
            satisfaction.
          </p>
          <p>
            The lab boys will tell you they do not know what element is doing it. They have run the
            spectrograph eleven times. There is a line in there that belongs to nothing on the chart, and
            when I ask them about it they get quiet and look at their shoes. All I need to know about this
            product is on the drum: it is lively, it is orange, and it does not like the human skeleton.
          </p>
        </Prose>

        <Stack>
          <Panel head="Product No. 203, In Brief" tone="tint">
            <SpecList
              rows={[
                { k: "Catalogue No.", v: "ASI-203" },
                { k: "Form", v: "Thixotropic emulsion, opaque" },
                { k: "Colour", v: "Aperture Orange. No other colour is offered." },
                { k: "Applied thickness", v: "1/8 in. nominal" },
                { k: "Coverage", v: "40 sq. ft. per gallon" },
                { k: "Cure", v: "40 minutes at 68°F" },
                { k: "Coefficient of restitution", v: "1.09" },
                { k: "Service temperature", v: <>&minus;20&deg;F to 190&deg;F</> },
                { k: "Pail, 5 gallon", v: "$46.00" },
                { k: "Drum, 55 gallon", v: "$412.00" },
                { k: "Tank car", v: "Price on application. Bring a siding." },
                {
                  k: "Principal element",
                  v: (
                    <Redacted reason="Materials Division: analysis incomplete since 1955">
                      Not established. Eleven attempts.
                    </Redacted>
                  ),
                },
              ]}
            />
          </Panel>

          <Plate
            number="3"
            caption="Repulsion Gel No. 203 applied to poured concrete at the nominal eighth of an inch. The Division notes that the pictogram cannot convey the sound it makes."
            tint
          >
            <Pictogram name="gel" size={120} title="Repulsion Gel, applied" style={{ color: "var(--spot-orange)" }} />
          </Plate>

          <Row>
            <Placard tone="danger">Do Not Ingest</Placard>
            <Placard tone="warn">Do Not Lie Down</Placard>
          </Row>

          <Aside>
            The figure of 1.09 exceeds unity. The Materials Division has been asked to account for this on
            three occasions and has declined on three occasions, in writing, at increasing length.
          </Aside>
        </Stack>
      </Split>

      <PullQuote big attribution={`${COMPANY.founder}, closing the dietetic programme, 12 February 1955`}>
        Nobody kept it down. Everybody bounced. Gentlemen, we are in the wrong business and I have just
        found out which one.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="I. The Nutritional Claims, As Printed In 1955, Struck">
        <Prose>
          <p>
            These claims appeared on the label of the dietetic preparation for eleven months. They are
            reproduced struck through, because the President&rsquo;s standing instruction to Records is that
            a withdrawn claim is still a claim and still belongs in the file.
          </p>
        </Prose>

        <FigureTable
          caption="Claims as printed, Repulsion Gel dietetic preparation, first label, 1955"
          columns={[
            { key: "claim", head: "Claim As Printed" },
            { key: "basis", head: "Basis At The Time" },
            { key: "status", head: "Present Status" },
          ]}
          rows={[
            {
              claim: <s>Contains no calories whatever.</s>,
              basis: "Correct.",
              status: "Withdrawn. Correct, and withdrawn.",
            },
            {
              claim: <s>Nine delicious flavours.</s>,
              basis: "Six flavours.",
              status: "Withdrawn 1955",
            },
            {
              claim: <s>Settles agreeably.</s>,
              basis: "None offered.",
              status: "Withdrawn. Nothing about it settles.",
            },
            {
              claim: <s>Recommended by physicians.</s>,
              basis: "One physician. Ours. On salary.",
              status: "Withdrawn at the request of the physician",
            },
            {
              claim: <s>Suitable for children and the convalescent.</s>,
              basis: "Not established.",
              status: "Withdrawn urgently, 14 February 1955",
            },
            {
              claim: <s>Stays where you put it.</s>,
              basis: "The exact opposite is the product.",
              status: "Retained, in the industrial specification, unaltered",
            },
          ]}
          foot="Struck matter retained under the President&rsquo;s standing instruction to Records. Materials has asked twice for the whole table to be destroyed and has been refused twice."
        />

        <Panel head="The Six Flavours, For The Record">
          <SpecList
            rows={[
              { k: "No. 1", v: "Vanilla. It tasted of vanilla and of the drum." },
              { k: "No. 2", v: "Chocolate (Approximate)" },
              { k: "No. 3", v: "Butterscotch. The best of them, genuinely, and I will hear no argument." },
              { k: "No. 4", v: "Peach, Nearly" },
              {
                k: "No. 5",
                v: "Rhubarb. Discontinued 1955 at the unanimous written request of the tasting panel, which is the only unanimous thing that panel ever did.",
              },
              {
                k: "No. 6",
                v: (
                  <Redacted reason="Withdrawn from the flavour list, 1955">
                    Beef. It was a beef pudding. It was my idea and I stand behind it.
                  </Redacted>
                ),
              },
            ]}
          />
        </Panel>

        <Marginalia>
          The kitchen on the third floor was returned to the Materials Division in March 1955 and has not
          been used to prepare food since. The Division would like it noted that it never asked for a
          kitchen.
        </Marginalia>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section title="II. The Industrial Specification">
        <Prose>
          <p>
            Rebound is measured by dropping a twelve-pound test mass from a marked post and reading the top
            of the first return with a stop-watch and an honest man. The figures are the mean of forty
            drops. Where a figure is absent it is absent for a reason, and the reason is in the note
            column.
          </p>
        </Prose>

        <FigureTable
          caption="Measured rebound, twelve-pound test mass, Materials Division test bay, February 1959"
          columns={[
            { key: "surface", head: "Prepared Surface" },
            { key: "drop", head: "Drop", numeric: true, width: "6rem" },
            { key: "rebound", head: "First Return", numeric: true, width: "8rem" },
            { key: "note", head: "Division Note" },
          ]}
          rows={[
            { surface: "Poured concrete, unprepared", drop: "10 ft.", rebound: "11 ft. 2 in.", note: "Nominal. Sell this figure." },
            { surface: "Enamel wall plate", drop: "10 ft.", rebound: "11 ft. 9 in.", note: "The plate was afterwards recovered from the gallery." },
            { surface: "Painted steel decking", drop: "10 ft.", rebound: "12 ft. 4 in.", note: "Preferred substrate." },
            { surface: "Gel upon cured gel", drop: "10 ft.", rebound: "19 ft. 1 in.", note: "Permitted." },
            { surface: "Gel upon gel upon gel", drop: "10 ft.", rebound: <>&mdash;</>, note: "Not permitted. See Operations, Chamber 8." },
            {
              surface: "One volunteer, in boots, from the observation gallery",
              drop: "22 ft.",
              rebound: "24 ft. 7 in.",
              note: "Reading taken on the sixth pass. He was still gaining at the ninth and we stopped counting to go and get him.",
            },
            {
              surface: "Lower gallery, Test Shaft 09",
              drop: <Redacted reason="Operations: figure withheld pending review">4,000 ft.</Redacted>,
              rebound: <Redacted reason="Operations: figure withheld pending review">Still in progress at time of printing</Redacted>,
              note: "Discontinued as a line of enquiry.",
            },
          ]}
          foot="Materials has requested a taller post four times. Accounting has approved a taller post once and the post has not arrived."
        />

        <Notice head="The Enrichment Center Reminds You">
          Repulsion Gel is a floor covering. The Enrichment Center has been obliged to set that sentence in
          type, which tells you everything you need to know about the sort of afternoon the Enrichment
          Center has been having.
        </Notice>

        <Panel head="Before Application" tone="rule">
          <Checklist
            items={[
              { text: "Surface swept, dry, and free of loose material.", checked: true },
              { text: "Boots on. Not shoes. Boots, laced, above the ankle.", checked: true },
              { text: "Ceiling of the space inspected and reported sound.", checked: true },
              { text: "All personnel informed which way is now up.", checked: true },
              { text: "A second man posted outside the door, awake, with a rope.", checked: true },
            ]}
          />
        </Panel>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Section title="III. The Tasting Panel">
        <Prose>
          <p>
            Seventeen men from the steno pool and the machine shop volunteered in January 1955. Each took
            three spoonfuls. They were paid sixty dollars, cash, same as any volunteer, and signed the same
            contract, the one the size of a phone book, and I want it on this sheet that every one of those
            seventeen men walked out of that kitchen on his own feet. Some of them took a while to come
            down.
          </p>
        </Prose>

        <Panel head="Medical Findings, Tasting Panel, Twelve-Month Review, January 1956" tone="blue">
          <SpecList
            rows={[
              { k: "Panel size", v: "17" },
              { k: "Retained the preparation", v: "0" },
              { k: "Reported no effect whatever", v: "14" },
              { k: <>Reported &ldquo;a feeling of lift&rdquo;</>, v: "3" },
              { k: "Reported it again at twelve months", v: "3" },
              { k: "Reported it again at forty-eight months", v: "3" },
              {
                k: "Dental findings at review",
                v: (
                  <Redacted reason="Medical Department: not for the trade sheet">
                    Eleven men, upper and lower. Recovered from the ceiling. Six sets were re-seated and
                    five were not recoverable in a condition permitting re-seating.
                  </Redacted>
                ),
              },
              { k: "Panel reconvened", v: "Never. The Division declines." },
            ]}
          />
        </Panel>

        <FinePrint>
          <p>
            Medical footnote. Three members of the tasting panel continue to present at the gate house each
            spring for review. Medical&rsquo;s position is that there is no clinical finding to review and
            that the men are therefore not patients of this company. The dental plan described in{" "}
            <Link href="/careers/benefits">Form ASI-502</Link> was extended to the Upper Peninsula in 1956
            and the Personnel Department wishes it recorded that the two facts are unrelated.
          </p>
        </FinePrint>

        <PenNote tone="pencil" angle={-1.5}>
          The three of them still come every March. They stand at the gate for an hour and then they get the
          bus back. Medical will not open a file because Medical says there is nothing in the file. I have
          been paying their fares out of petty cash for four years and I am going to go on paying them.
          &mdash; C.
        </PenNote>
      </Section>

      {/* ------------------------------------------------------------- */}

      <Memo
        to="Materials Division"
        re="The pudding, discontinuation of"
        date="12 February 1955"
        cc="Commissary (for information; do not act on it)"
        stamp={<Stamp tone="black" angle="right">File Copy</Stamp>}
      >
        <p>
          Stop trying to make it a pudding. Eleven months, seventeen men, and not one bowl of it stayed
          where a bowl of it is supposed to stay. Do not bring me a flavour. Do not bring me a thickener.
          Do not bring me the beef one again.
        </p>
        <p>
          Bring me a drum of it, a brush, and the worst floor in this building, and paint the floor, and
          then get out of the room and let something heavy fall on it. Then telephone me at home, whatever
          the hour, and tell me how far up it went.
        </p>
        <p>
          You have not failed. You have succeeded at something else and you are the last men in Michigan to
          notice.
        </p>
      </Memo>

      <Advert
        eyebrow={<>Materials Division &mdash; Product No. 203</>}
        head="It Comes Back. Every Time. Faster."
        burst="1.09"
        burstSub="REBOUND"
        action="Order Form ASI-299"
        href="/products/catalogue"
      >
        <p>
          Loading docks. Foundry floors. Gymnasia. Any surface in your plant that has ever had to catch
          something. One coat, forty minutes to cure, and thereafter the floor does the work and your men do
          not. Aperture Orange, and only Aperture Orange, because a man ought to be able to see where the
          floor stops being a floor.
        </p>
        <p>
          Sold by the pail, the drum and the tank car. Ask your Aperture representative about the companion
          product, <Link href="/products/propulsion-gel">Propulsion Gel No. 204</Link>, for customers whose
          difficulty is horizontal rather than vertical.
        </p>
      </Advert>

      <Coupon>
        <p className="ap-caps" style={{ fontSize: "0.7rem", marginTop: 0 }}>
          Sample Tin &mdash; Repulsion Gel No. 203 &mdash; Four Ounces &mdash; Post Free
        </p>
        <p style={{ marginTop: 0 }}>
          Cut here and post to the Materials Division, {COMPANY.address.line2}, {COMPANY.address.line3}, or
          telephone {COMPANY.telephone}. One tin per plant. Tins are shipped upright and are to be opened
          upright.
        </p>
        <Field label="Name" />
        <Field label={"Plant & Address"} />
        <Field label="Nature of your floor" />
        <Field label="Height of your ceiling" />
        <Field label="Nearest hospital, and the road to it" />
        <FinePrint tiny>
          The sample tin is not a foodstuff, is not a dietetic preparation, is not a pudding, and is not to
          be described as any of those things by the recipient, his family, or his physician.
        </FinePrint>
      </Coupon>

      <ClearanceGate
        level={2}
        hint="Associate grade or above. Personnel who read the tables carefully tend to advance."
      >
        <Panel head={<>Materials Division &mdash; Internal Note, Not For The Trade Sheet</>} tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", marginTop: 0 }}>
            No. 203 has been run eleven times against the standard plates. Ten runs returned a line at a
            wavelength belonging to no element in the table. The eleventh was submitted to the machine on
            Sub-Level 4 on 3 November 1958, and the machine printed one word onto the tape nine minutes
            before the plate was fed to the reader.
          </p>
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", marginBottom: 0 }}>
            The Division cannot establish how, will not reproduce the word on a sheet that leaves this
            building, and has asked that the sample be moved to another floor. It has been moved. It is
            still lively.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="fat" />

      <Row>
        <Placard>Materials &mdash; Third Floor</Placard>
        <Placard tone="warn">Boots Beyond This Point</Placard>
        <Placard tone="danger">This Floor Is Not A Floor</Placard>
        <Pictogram name="gel-splat" size={52} title="Repulsion Gel hazard marking" style={{ color: "var(--spot-orange)" }} />
      </Row>

      <FinePrint>
        <p>
          Form ASI-203. No. 203 is warranted against failure of adhesion and against nothing else whatever.
          {" "}{COMPANY.name} accepts no liability for injury sustained above the level of the treated
          surface, which is to say for any injury sustained in a room in which the product has been
          correctly applied. Ingestion is not a use of this product. Persons who have ingested it should
          remain seated, remain calm, and remain indoors. See{" "}
          <Link href="/legal">Form ASI-900</Link>, clauses IV and IX, and the further material at{" "}
          <Link href="/science/materials">Form ASI-402</Link>, which the Materials Division prepared under
          protest.
        </p>
      </FinePrint>

      {/* Fourteen of the seventeen reported no effect whatever. */}
      {/* Fourteen of the seventeen were asked in a room with the President in it. */}

      <Scrawl href="/vault/the-dens">
        i came off the gallery on the sixth pass and i have not been all the way down since. the floor keeps
        giving me back
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, FinePrint,
  Marginalia, Row, Aside, IndexCard, Stub, Columns,
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
  title: "The Aperture Bulletin — Spring 1959",
  description:
    "NASA names seven astronauts and the President cables all of them; the commissary reopens; the bowling league; personals; and a word about the noise from Sub-Level 4.",
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
  const { prev, next } = neighbours("/bulletin/spring-1959");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/bulletin", label: "Bulletin" },
          { label: "Spring 1959" },
        ]}
      />

      <DocHead
        doc="ASI-701"
        department="Corporate Communications"
        classification="Unrestricted"
        revision="Vol. VI, No. 1"
        extra={[{ label: "Circulation", value: "1,247 and eleven newspapers" }]}
      />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="Vol. VI No. 1">
          Spring
        </Stamp>
        <PageTitle
          advertising
          kicker="The House Organ — Vol. VI, No. 1"
          title="The Aperture Bulletin"
          deck={
            <>
              Spring 1959. Seven astronauts, one telegram each; Shaft 09 in its first full quarter; the
              commissary open again under a new ceiling; the bowling league; the personals; and a word,
              which the President has asked to be printed fourth and not first, about the noise from
              Sub-Level 4.
            </>
          }
          byline={
            <>
              Edited by <b>Corporate Communications</b>. Lead item dictated by {COMPANY.founder}, who
              would not be kept out of it.
            </>
          }
        />
      </div>

      <Rule variant="double" />

      <Columns count={2}>
        <Item date="April 9" head="Seven Astronauts Named; President Cables All Seven">
          <p>
            The National Aeronautics and Space Administration this month announced the seven men who will
            fly for the United States, and within the hour the President had cabled every one of them
            personally, unprompted, offering sixty dollars and an afternoon in Test Shaft 09.
          </p>
          <p>
            &ldquo;Astronauts, war heroes, Olympians,&rdquo; the President told the Bulletin. &ldquo;I have
            been saying it at the head of that shaft for five years and this is the first April in which the
            word has meant anybody in particular. I want all seven. I will settle for one.&rdquo;
          </p>
          <p>
            One reply has been received. It was courteous. It was no. The President has had it framed and
            it hangs in the outer office, where Caroline has stopped moving it.
          </p>
        </Item>

        <Item date="March 11" head="Shaft 09 Completes First Quarter">
          <p>
            Test Shaft 09, opened four months early on the eleventh of March, has completed its first
            quarter with sixty-two chambers in service, fourteen Enrichment Spheres numbered from the base,
            and an elevator that Operations describes as &ldquo;reliable, eleven minutes, do not press it
            twice&rdquo;. Chamber 8 was sealed on the twelfth and reopened on the twelfth, and Operations
            has posted it as In Service since.
          </p>
        </Item>

        <Item date="February 2" head="Commissary Reopens Under New Ceiling">
          <p>
            Following the incident, and following the second incident, the Sub-Level 1 commissary reopened
            on the second of February with an entirely new ceiling and the same menu. Coffee remains five
            cents. Pie remains Thursday. The Materials Department has been asked to take its lunch
            elsewhere and has agreed to take it on the third floor, where the ceiling is also new.
          </p>
        </Item>

        <Item date="Ongoing" head="A Word About Sub-Level 4">
          <p>
            Personnel on Aperture Row have written to the Bulletin, three of them, about a noise from
            Sub-Level 4 after the six o&rsquo;clock whistle. The Computation Department wishes it known that
            the machine is not running after six; that neither attendant is on the night shift; that the
            relay room is locked; and that{" "}
            <Redacted reason="Computation asked for this sentence to be struck and Corporate Communications set it anyway">
              the tape has nevertheless advanced eleven feet on four nights this quarter.
            </Redacted>{" "}
            Personnel are asked to stop writing.
          </p>
        </Item>
      </Columns>

      <Marginalia>
        The President asked that the Sub-Level 4 item run fourth. It was going to run first. Corporate
        Communications has complied and would like it noted that it has complied.
      </Marginalia>

      <Rule variant="hair" />

      <Row style={{ gap: "2rem", alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 22rem" }}>
          <FigureTable
            caption="Bowling League — Standings at the close of the winter season"
            columns={[
              { key: "p", head: "Pos.", numeric: true, width: "3.5rem" },
              { key: "t", head: "Team" },
              { key: "w", head: "W", numeric: true },
              { key: "l", head: "L", numeric: true },
              { key: "n", head: "Note" },
            ]}
            rows={[
              { p: "1", t: "Machine Shop Ironmen", w: "22", l: "4", n: "Fourth title" },
              { p: "2", t: "Gate House (E. Pike)", w: "20", l: "6", n: "Team of one. Bowls both lanes." },
              { p: "3", t: "Materials Dept. Rapid Oxidation", w: "18", l: "8", n: "Renamed in March" },
              { p: "4", t: "Steno Pool", w: "17", l: "9", n: "Play at eleven at night" },
              { p: "5", t: "Applied Sciences Apertures", w: "14", l: "12", n: "Not doors" },
              { p: "9", t: "Marine Division", w: "9", l: "17", n: "One player. Ninth for the third year." },
              { p: "14", t: "Legal", w: "1", l: "25", n: "Three players. All objected." },
            ]}
            foot="Fourteen teams. The Reactor Room did not field a team; Greg bowls for nobody and has been asked."
          />
        </div>
        <div style={{ flex: "1 1 14rem" }}>
          <Panel head="Personals" tone="tint">
            <p style={{ fontSize: "var(--step--1)", margin: "0 0 0.6rem" }}>
              <b>LOST.</b> One storage cube, weighted, standard issue, marked on each face in grease pencil.
              Last seen Sub-Level 6. Sentimental value. Reward. Do not incinerate. &mdash; Box 41.
            </p>
            <p style={{ fontSize: "var(--step--1)", margin: "0 0 0.6rem" }}>
              <b>FOR SALE.</b> Helmet, one. Never worn by the present owner. Enquire at the gate house.
              &mdash; Volunteer 2,884.
            </p>
            <p style={{ fontSize: "var(--step--1)", margin: "0 0 0.6rem" }}>
              <b>WANTED.</b> Fourth for the Marine Division bowling team. Must have own shoes. Must not ask
              about the boat. &mdash; Box 1.
            </p>
            <p style={{ fontSize: "var(--step--1)", margin: 0 }}>
              <b>NOTICE.</b> The Commissary is not baking a cake. The Commissary has never baked the cake.
              Please stop asking the Commissary about the cake. &mdash; Commissary.
            </p>
          </Panel>
        </div>
      </Row>

      <Rule variant="hair" />

      <Columns count={2}>
        <Item date="Personnel" head="Welcome To The Company">
          <p>
            The Bulletin welcomes this quarter&rsquo;s new hires: R. Anand, Applied Sciences; M. Osei,
            Machine Shop; two to the Steno Pool who have asked not to be named until they have survived a
            night dictation; H. Bergström, Substrate Mill; and{" "}
            <Redacted reason="Personnel supplied the name and left the department blank">D. R., department not stated</Redacted>
            . Personnel has been asked about the blank and has said it is being looked into.
          </p>
        </Item>
        <Item date="Safety" head="Safety Reminder">
          <p>
            Personnel are reminded that the wall panels in the service corridors bolt from the outside, that
            a panel found bolted from the inside is to be reported and not opened, and that Maintenance has
            painted four this quarter and would like that to be the last of it.
          </p>
        </Item>
      </Columns>

      <Advert
        eyebrow="Commissary — Sub-Level 1 — Reopened"
        head="The Pie Is Real."
        action="See Refreshments, Form ASI-307"
        href="/enrichment-center/refreshments"
      >
        <p>
          Thursdays. Twenty-five cents to personnel, free to volunteers, and under an entirely new ceiling.
          The Commissary would like the pie to be the thing this building is known for. The Commissary is
          aware that it is not.
        </p>
      </Advert>

      <Notice head="Corrections">
        The Winter 1958 issue reported that no volunteer had been lost in the fourth quarter. This was
        correct at the time of setting and remained correct for eleven days.
      </Notice>

      <ClearanceGate level={3} hint="Test Associate grade or above. The item that was pulled is on Sub-Level 7.">
        <Panel head="Item Pulled Before Press — Retained By Corporate Communications" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            <b>MAINTENANCE — FOURTH DEN FOUND.</b> A fourth space behind the panels was reported on the
            eleventh of March, the day Shaft 09 opened. Unlike the first three it has not been painted.
            Unlike the first three it contained a drawing of Level 6 that agrees with the fourth survey and
            with nothing else. The Bulletin was asked by the Office of the President to hold the item, and
            has, and has kept the type standing.
          </p>
        </Panel>
      </ClearanceGate>

      <PenNote tone="pencil" angle={-1.2}>
        Cave &mdash; the astronaut item is fine. The Sub-Level 4 item is fine fourth. The pulled item is
        in my drawer with the standing type and I would like it left there. &mdash; C.
      </PenNote>

      <Row>
        <Pictogram name="clipboard" size={52} title="Bulletin" style={{ color: "var(--ink-3)" }} />
        <Stub head="Vol. VI No. 1">Spring 1959 · 1,247 copies · Enrichment Center Press</Stub>
        <Placard>Corporate Communications &mdash; Second Floor</Placard>
      </Row>

      <Flourish style={{ width: 200, color: "var(--ink-faint)", margin: "1rem 0" }} />

      <FinePrint tiny>
        The Aperture Bulletin is set by the Enrichment Center Press and circulated to all personnel, to the
        Army, to eleven newspapers who have never printed a word of it, and to one address in New Mexico
        that the President insists upon. Contributions are welcome and have never once been received.
      </FinePrint>

      {/* The seventh astronaut has not replied. The President cables him every Friday. */}
      {/* D. R. — department blank. Personnel is looking into it. */}

      <Scrawl href="/vault/the-dens">
        the pulled item. the standing type. she keeps it in her drawer. everything they wont print she keeps
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

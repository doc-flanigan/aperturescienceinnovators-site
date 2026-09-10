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
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Papers, Patents & Priority Disputes",
  description:
    "What Aperture Science Innovators has published, what it has patented, and what it has merely gotten to first.",
};

export default function Page() {
  const { prev, next } = neighbours("/science/publications");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/science", label: "Science" },
          { label: "Publications" },
        ]}
      />

      <DocHead
        doc="ASI-406"
        department="Records & Filing"
        classification="Unrestricted"
        revision="Sixth printing. One paper withdrawn since the fifth."
      />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="Records">
          Filed
        </Stamp>
        <PageTitle
          kicker="Records & Filing — Second Floor"
          title="Papers, Patents & Priority Disputes"
          deck={
            <>
              Aperture publishes when Aperture has finished, and not before. This is occasionally described
              by others as secrecy. We regard it as tidiness, and this sheet is the complete record of what
              we have been tidy about.
            </>
          }
          byline={
            <>
              Compiled by <b>Records &amp; Filing</b>. Priority section dictated by {COMPANY.founder}, who
              would not be kept out of it.
            </>
          }
        />
      </div>

      <KeyFigures
        items={[
          { value: "9", label: "Papers published", note: "Since 1947" },
          { value: "4", label: "Papers withdrawn", note: "Two by us" },
          { value: "31", label: "Patents granted", note: "Twelve on the curtain" },
          { value: "3", label: "Priority disputes", note: "All with one party" },
          { value: "0", label: "Disputes lost", note: "Also none conceded" },
        ]}
      />

      <Prose>
        <Lede>
          A paper published in the middle of an experiment is a paper that has to be published twice, and
          the second time it is an apology. This company has published nine papers in twelve years, and
          every one of them was published after the thing it described had been built, run, and sold to
          somebody.
        </Lede>
        <p>
          The outfit in New Mexico publishes four times a year and has yet to finish anything. I have their
          publications in a cabinet on the second floor, all of them, and I read every one, twice, and I
          have pencilled in the margins of a few, and Records has been told that the cabinet is not to be
          opened by anybody but me.
        </p>
      </Prose>

      <Section title="Papers">
        <FigureTable
          caption="Publications of Aperture Science Innovators, 1947 – Spring 1959"
          columns={[
            { key: "y", head: "Year", numeric: true, width: "5rem" },
            { key: "t", head: "Title" },
            { key: "a", head: "Author" },
            { key: "s", head: "Status" },
          ]}
          rows={[
            { y: "1947", t: "On the weighted hem: a note", a: "C. Johnson", s: "Published" },
            { y: "1949", t: "Grommet spacing and the twelve-grommet standard", a: "C. Johnson", s: "Published" },
            { y: "1951", t: "Vinyl in prolonged military service", a: "Materials", s: "Published" },
            { y: "1953", t: "A curtain observed in two rooms", a: <Redacted reason="Sealed, addressed, stamped, in the second drawer, never sent">Withheld</Redacted>, s: "Withheld by the author" },
            { y: "1954", t: "Conservation of momentum across a bounded field", a: "Applied Sciences", s: "Published" },
            { y: "1955", t: "A dietetic pudding substitute: preliminary trials", a: "Materials", s: "Withdrawn by us" },
            { y: "1955", t: "A dietetic pudding substitute: revised findings", a: "Materials", s: "Withdrawn by us. Same week." },
            { y: "1956", t: "Meteoritic conductors and field retention", a: "Applied Sciences", s: "Published" },
            { y: "1957", t: "Notes toward a theory of the aperture", a: "Applied Sciences", s: "Published" },
            { y: "1957", t: "On certain rooms not appearing on drawings", a: "Facilities", s: "Suppressed" },
            { y: "1958", t: "The lunar substrate: procurement and preparation", a: "Materials", s: "Published, price omitted" },
            { y: "1958", t: "Storage of a personality: a proposal", a: "Computation", s: <Redacted reason="Circulation: one">Not for publication</Redacted> },
            { y: "1959", t: "The Enrichment Sphere as an instrument", a: "Operations", s: "Published" },
          ]}
          foot="‘Suppressed’ is a Records classification meaning the paper exists, was set in type, and was ordered off the press by the Office of the President on the day of printing. There has been one."
        />
      </Section>

      <Marginalia>
        The 1953 curtain paper is finished. It has been finished since November 1953. It is in an envelope,
        addressed and stamped, in a drawer on the third floor, and the President tells everyone it was never
        worth publishing.
      </Marginalia>

      <Section title="Patents">
        <SpecList
          rows={[
            { k: "Shower curtain, weighted hem", v: "U.S. 1946. The foundation patent. Renewed." },
            { k: "Shower curtain, twelve-grommet", v: "U.S. 1948. Ten was small thinking." },
            { k: "Curtain fabric, spatially displaced", v: <Redacted reason="Granted. Cites quantum tunnelling. The examiner has written to ask what the claim means.">U.S. 1954</Redacted> },
            { k: "Aperture, fixed emplacement", v: "U.S. 1955" },
            { k: "Aperture, portable", v: "U.S. 1957. Not a door." },
            { k: "Gel, repulsive, industrial", v: "U.S. 1956" },
            { k: "Gel, propulsive, industrial", v: "U.S. 1956" },
            { k: "Substrate suspension, conductive", v: "U.S. 1957" },
            { k: "Plate, aerial, faith", v: "U.S. 1958" },
            { k: "Grill, emancipation, material", v: "U.S. 1958" },
            { k: "Storage cube, weighted", v: "U.S. 1956. The examiner asked what it stores." },
            { k: "Counter-manoeuvre, Heimlich", v: "Applied 1958. Pending. Examiner unwell." },
            { k: "Others", v: "Nineteen, on the curtain line, the grommet press and the hem." },
          ]}
        />
      </Section>

      <Section title="Priority">
        <Prose>
          <p>
            Three disputes. All with one party. All concerning work this company completed, ran and sold
            before the other party published a preliminary note about it, and all of them ongoing, because
            the other party has a federal budget for correspondence and I have Caroline.
          </p>
        </Prose>

        <FigureTable
          caption="Priority disputes, Aperture Science Innovators v. a certain facility in New Mexico"
          columns={[
            { key: "n", head: "No.", numeric: true, width: "4rem" },
            { key: "s", head: "Subject" },
            { key: "ours", head: "Ours" },
            { key: "theirs", head: "Theirs" },
            { key: "st", head: "Status" },
          ]}
          rows={[
            { n: "1", s: "Bounded-field conservation", ours: "1954, published; 1953, built", theirs: "1955, preliminary", st: "Ongoing" },
            { n: "2", s: "Conductive substrate retention", ours: "1956, published; 1955, on the bench", theirs: "1957, preliminary", st: "Ongoing" },
            { n: "3", s: "Sample containment", ours: <Redacted reason="Struck by the President in pencil">1958, unpublished. They are ahead of us here.</Redacted>, theirs: "1957, published", st: "Ongoing" },
          ]}
          foot="The President has pencilled in the margin of dispute three and Records has set the margin note as printed. The President has been informed."
        />
      </Section>

      <PullQuote big attribution={`${COMPANY.founder}, on the outfit in New Mexico`}>
        Forty names on a paper and not one of those forty men has gone through the hole personally.
      </PullQuote>

      <Notice head="The Enrichment Center Reminds You">
        A negative result is still a result. A withdrawn paper is still a paper. A suppressed paper is a
        paper the Office of the President has read more carefully than any other, and personnel should
        draw their own conclusions about which of the thirteen above that is.
      </Notice>

      <ClearanceGate level={3} hint="Test Associate grade or above. The suppressed paper is on Sub-Level 7.">
        <Panel head="Records — The Suppressed Paper, Abstract" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            <b>On certain rooms not appearing on drawings.</b> Facilities, 1957. Abstract: Four surveys of
            Test Shaft 09 have been conducted since 1952. The fourth measures two thousand five hundred more
            linear feet of tunnel than the third. Tool marks in the additional footage are consistent
            neither with this company&rsquo;s machines nor with the salt concern&rsquo;s. Facilities
            recommends no action, for the first time in its existence, and recommends further that this
            paper not be published, which recommendation the Office of the President has accepted.
          </p>
        </Panel>
      </ClearanceGate>

      <PenNote tone="pencil" angle={-1.4}>
        The 1953 paper is in my second drawer. It has been there since November. He asks me once a year
        whether I still have it and I say yes and he says good and that is the whole conversation.
        &mdash; C.
      </PenNote>

      <Row>
        <Pictogram name="clipboard" size={56} title="Publications" style={{ color: "var(--ink-3)" }} />
        <Placard>Records &mdash; Second Floor</Placard>
        <Placard tone="warn">Cabinet 4 &mdash; The President Only</Placard>
      </Row>

      <Aside>
        Cabinet 4 holds every publication of the other party, complete, from 1951. It is the best library of
        their work outside their own building and it has been read more carefully here than there.
      </Aside>

      <Rule variant="fat" />

      <FinePrint>
        <p>
          Form ASI-406. Reprints of published papers are available from Records at no charge. The dietetic
          pudding papers are not available, having been withdrawn, and Records will not discuss them, and
          Records has been asked about them more often than about any paper the company has actually
          published.
        </p>
      </FinePrint>

      {/* Thirteen rows. Nine published. One suppressed by the man who reads most carefully. */}
      {/* Dispute three: they are ahead of us. He wrote it himself. */}

      <Scrawl href="/the-company/the-competition">
        cabinet four. hes read every one of their papers twice. hes pencilled they are ahead in one of them
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

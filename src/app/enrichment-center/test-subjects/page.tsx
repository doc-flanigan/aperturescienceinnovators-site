import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Marginalia, Row, Aside, IndexCard,
} from "@/components/Print";
import { PenNote } from "@/components/Memo";
import { FigureTable, SpecList, KeyFigures } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Our Distinguished Volunteers",
  description:
    "Astronauts, war heroes and Olympians — and an honest account of who actually presents at the gate house on a Tuesday morning.",
};

export default function Page() {
  const { prev, next } = neighbours("/enrichment-center/test-subjects");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/enrichment-center", label: "Enrichment Center" },
          { label: "Volunteers" },
        ]}
      />

      <DocHead
        doc="ASI-303"
        department="Enrichment Center Operations"
        classification="Unrestricted"
        revision="Fifth printing. Roll of honour extended."
      />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="Since 1954">
          Roll Of Honour
        </Stamp>
        <PageTitle
          kicker="Enrichment Center Operations"
          title="Our Distinguished Volunteers"
          deck={
            <>
              Four thousand one hundred and eighteen men have presented at the gate house since the
              programme opened in 1954. This sheet is about the ones we can name, the ones we cannot, and
              the eleven the Records Department files under a word Accounting chose and will not now change.
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
          { value: "4,118", label: "Presented at the gate", note: "Since 1954" },
          { value: "2,801", label: "Read the form, went home", note: "The form working" },
          { value: "1,306", label: "Completed the afternoon", note: "And came back up" },
          { value: "417", label: "Volunteered a second time", note: "Roughly a third" },
          { value: "11", label: "Otherwise accounted for", note: <Redacted reason="Accounting chose the word">Accounting chose the word</Redacted> },
        ]}
      />

      <Prose>
        <Lede>
          I want astronauts. I have said so in every address I have given at the head of that shaft and I
          will go on saying it. Astronauts, war heroes, Olympians &mdash; men who have already done one
          difficult, frightening thing and found that they liked it. That is the man who gives you clean
          data, because that is the man who is not frightened enough to lie about what he saw.
        </Lede>
        <p>
          The National Aeronautics and Space Administration named seven of them this April. I cabled all
          seven personally the same afternoon, offered each of them sixty dollars and an afternoon of his
          time, and received one reply, which was courteous, and which was no. I have had the reply framed.
          It is in the outer office. Caroline has stopped moving it.
        </p>
        <p>
          Now. That is the preference and it is a strong one, and the Enrichment Center will concede, in
          print, that it is an aspiration rather than a description of the queue on a Tuesday morning. We
          take the men who come. We have taken longshoremen, machinists, two clergymen, a professional
          dancer, a man who would only give his occupation as &ldquo;between things&rdquo;, and one
          gentleman who arrived with his own helmet. Every single one of them produced usable data, and the
          man with the helmet produced the best afternoon of data in this company&rsquo;s history.
        </p>
      </Prose>

      <PullQuote big attribution={`${COMPANY.founder}, opening address, Test Shaft 09`}>
        Astronauts, war heroes, Olympians. You&rsquo;re here because we want the best, and you are it.
      </PullQuote>

      <Section title="Four Of Them, By Name, With Permission">
        <Prose>
          <p>
            The four gentlemen below sat for a photograph and signed a release permitting the Enrichment
            Center to print their names. There is no photograph, because the Art Department was
            reorganised into the Materials Department in the spring and did not come back, so you will have
            to take the names on their own.
          </p>
        </Prose>

        <Row style={{ gap: "1.2rem", alignItems: "stretch", flexWrap: "wrap" }}>
          <IndexCard>
            <p style={{ margin: 0 }}>
              <b>VOLUNTEER 0,412 &mdash; T. HALVERSEN, of Ishpeming.</b>
              <br />
              Iron range, nineteen years. First man down Shaft 04 in 1954 and the first man to ask, on
              coming up, whether he could go again on the Thursday. He could, and did, and has, eleven
              times. Occupation on his form: &ldquo;I move heavy things.&rdquo;
            </p>
          </IndexCard>
          <IndexCard>
            <p style={{ margin: 0 }}>
              <b>VOLUNTEER 1,908 &mdash; CPL. E. R. DOWD, of Marquette.</b>
              <br />
              Korea, two tours, decorated twice and will not say for what. Completed nine afternoons.
              Reported, after the sixth, that the chambers were &ldquo;restful&rdquo;, which is a word no
              member of this company&rsquo;s technical staff has ever used about them.
            </p>
          </IndexCard>
          <IndexCard>
            <p style={{ margin: 0 }}>
              <b>VOLUNTEER 3,110 &mdash; the fastest man we have measured.</b>
              <br />
              Sixty-one feet per second on three coats of propulsion gel over steel, on the fourth of
              March. He asked us to write down that he had done it. We have written it down, and this is
              where it is written.
            </p>
          </IndexCard>
          <IndexCard>
            <p style={{ margin: 0 }}>
              <b>VOLUNTEER 2,884 &mdash; the gentleman with his own helmet.</b>
              <br />
              Arrived at the gate house in 1957 wearing it, declined to explain it, declined to remove it,
              and was admitted on the President&rsquo;s personal instruction. Best single afternoon of data
              in the company&rsquo;s history.{" "}
              <Redacted reason="Operations has been unable to establish this since 1957">
                No surname is recorded on his form.
              </Redacted>
            </p>
          </IndexCard>
        </Row>
      </Section>

      <Notice head="The Enrichment Center Reminds You">
        A volunteer is a guest of this company for the duration of one afternoon and is entitled to the
        courtesies of a guest, including the coat, the coffee, the sixty dollars, and the right to walk out
        of the gate house at any time before the chamber door.
      </Notice>

      <Section title="Who Actually Comes">
        <FigureTable
          caption="Presenting volunteers by stated occupation, 1954 – Spring 1959"
          columns={[
            { key: "occ", head: "Stated occupation" },
            { key: "n", head: "Presented", numeric: true },
            { key: "c", head: "Completed", numeric: true },
            { key: "note", head: "Operations note" },
          ]}
          rows={[
            { occ: "Labouring, mining, iron range", n: "1,644", c: "702", note: "The backbone of the programme" },
            { occ: "Machinists and tradesmen", n: "881", c: "310", note: "Ask the best questions. Answer the fewest." },
            { occ: "Servicemen and former servicemen", n: "702", c: "241", note: "Bored by it, which is what we want" },
            { occ: "Clerical, professional, other", n: "509", c: "44", note: "Read the form" },
            { occ: "Athletes, competitive", n: "44", c: "6", note: "Six is six more than none" },
            { occ: "Clergy", n: "2", c: "2", note: "Both. Twice each." },
            { occ: "Astronauts", n: "0", c: "0", note: "The correspondence continues" },
            {
              occ: <>&ldquo;Between things&rdquo;</>,
              n: "336",
              c: "1",
              note: <Redacted reason="Operations declines to expand on this row">The one is the helmet.</Redacted>,
            },
          ]}
          foot="2,801 of the 4,118 read Form ASI-900 at the gate house and went home, which Operations regards not as a failure of the form but as the form doing precisely what a form is for."
        />
      </Section>

      <Marginalia>
        The Enrichment Center has never advertised for volunteers in a newspaper. Every man on this sheet
        arrived because another man told him about it in a bar in Ishpeming.
      </Marginalia>

      <Section title="The Ones We Could Not Give Back">
        <Prose>
          <p>
            Eleven. That is the figure and I am not going to bury it in a table on the fourth page, because
            burying it is what the outfit in New Mexico would do and I would rather print it here in the
            same type as everything else.
          </p>
          <p>
            Eleven men descended Test Shaft 09, or one of its predecessors, and did not ascend it. Their
            sixty dollars was posted to the address on their form the same week, in cash, by registered
            mail. Four of the eleven had completed the next-of-kin line and those four families were
            written to by me personally and I remember all four of their names.
          </p>
          <p>
            The Enrichment Center does not use the word accident, because an accident is a thing that
            happens to a company and this happened to eleven men.{" "}
            <Redacted reason="Struck by Legal. Restored by the President. Struck again. Set anyway.">
              Seven of the eleven were in the same fortnight in 1956 and nobody has ever asked me why.
            </Redacted>
          </p>
        </Prose>

        <Panel head="What Is Recorded" tone="red">
          <SpecList
            rows={[
              { k: "Volunteers not returned", v: "Eleven" },
              { k: "Compensation posted", v: "Eleven, in full, same week" },
              { k: "Next of kin on file", v: "Four" },
              { k: "Letters written by the President", v: "Four" },
              { k: "Inquiries opened", v: "Eleven" },
              { k: "Inquiries concluded", v: "Eleven" },
              { k: "Inquiries concluded on the day they opened", v: <Redacted reason="Records has raised this in writing on three occasions">Nine.</Redacted> },
            ]}
          />
        </Panel>
      </Section>

      <ClearanceGate level={4} hint="Senior Associate grade or above. Operations does not print the whereabouts column.">
        <Panel head="Operations Working Copy — Whereabouts Column" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)" }}>
            The public roll has four columns. The working copy has five. The fifth is headed WHEREABOUTS
            and it is filled in for one thousand three hundred and six men and blank for eleven, except
            that it is not blank for eleven. It reads, for two of the eleven, in the same hand, on two
            separate sheets, four months apart:
          </p>
          <p style={{ fontFamily: "var(--font-hand)", fontSize: "1.3rem", color: "var(--spot-red)", margin: "0.8rem 0 0" }}>
            &ldquo;seen&rdquo;
          </p>
        </Panel>
      </ClearanceGate>

      <PenNote tone="red" angle={-1.7}>
        He says he remembers all four names. He does. I have watched him say them to himself walking to the
        machine shop. He has never once written them down and I think that is on purpose. &mdash; C.
      </PenNote>

      <Row>
        <Pictogram name="subject" size={58} title="Volunteer" style={{ color: "var(--ink-3)" }} />
        <Placard>Volunteers Report To The Gate</Placard>
        <Placard tone="warn">One Afternoon &mdash; Sixty Dollars</Placard>
      </Row>

      <Rule variant="fat" />

      <FinePrint>
        <p>
          Form ASI-303. Volunteers are engaged under{" "}
          <Link href="/enrichment-center/volunteer">Form ASI-302</Link> and compensated under{" "}
          <Link href="/enrichment-center/compensation">Form ASI-306</Link>. The Enrichment Center thanks
          every man who has walked into that gate house, including &mdash; and the President has asked for
          this sentence to be set in the same size as the rest &mdash; the two thousand eight hundred and
          one who read the form and walked back out.
        </p>
      </FinePrint>

      {/* Seven of the eleven in one fortnight in 1956. */}
      {/* Shaft 07 was closed below the fourth level in 1955. Count the months. */}

      <Scrawl href="/vault/the-dens">
        i was 2884. i still have the helmet. ask them why i wore it. ask them what i had already seen
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

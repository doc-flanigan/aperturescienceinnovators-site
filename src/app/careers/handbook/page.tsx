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
import { SpecList } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "The Employee Handbook",
  description:
    "Forty pages condensed to one. Chiefly concerning doors, and which ones open from both sides.",
};

function Clause({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ padding: "0.7rem 0", borderBottom: "1px solid var(--rule-faint)", breakInside: "avoid" }}>
      <p className="ap-caps" style={{ fontSize: "0.64rem", color: "var(--accent)", margin: "0 0 0.25rem" }}>
        <span className="ap-tabnum">{n}</span> &middot; {title}
      </p>
      <div style={{ fontSize: "var(--step-0)", lineHeight: 1.44 }}>{children}</div>
    </div>
  );
}

export default function Page() {
  const { prev, next } = neighbours("/careers/handbook");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/careers", label: "Careers" },
          { label: "Handbook" },
        ]}
      />

      <DocHead
        doc="ASI-503"
        department="Personnel"
        classification="Unrestricted — Condensed"
        revision="The forty-page edition is in the second-floor cabinet."
      />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="One Sheet">
          Condensed
        </Stamp>
        <PageTitle
          kicker="Personnel — Second Floor"
          title="The Employee Handbook"
          deck={
            <>
              The full handbook runs to forty pages and nobody has read it since the man who wrote it,
              who left in 1956. This is the one-sheet edition, which the President dictated in an afternoon
              and which is, he maintains, the only part anybody needs.
            </>
          }
          byline={
            <>
              Dictated by <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}. Forty pages by a man who is no
              longer here.
            </>
          }
        />
      </div>

      <Prose>
        <Lede>
          A handbook is a list of everything a company has had to say out loud because somebody did the
          other thing. Forty pages is too many things. Here are the fourteen that matter, and the last five
          are about doors, because in a building like this one doors are most of what there is to know.
        </Lede>
      </Prose>

      <Panel head="The Handbook, Condensed">
        <Clause n="1" title="Hours">
          Seven to six, six days. The whistle goes at six. After the whistle the gate ledger closes its
          down column and a man who is below at that moment is below until morning, which is fine, and
          happens, and is why Aperture Row is on the second level.
        </Clause>
        <Clause n="2" title="The gate">
          Mr. Pike has held the gate since 1951. You sign down, you sign up, and if you forget to sign up
          Mr. Pike will come and find you, because the columns are required to agree, and they have agreed
          every night but three.
        </Clause>
        <Clause n="3" title="Pay">
          Fridays, in cash, from a tin. There is no cheque and there will be no cheque. The President has
          been asked four times.
        </Clause>
        <Clause n="4" title="The descent">
          Eleven minutes. One lamp. Do not press the button twice. Talk to the man next to you; most
          don&rsquo;t, and the ones who do are the ones Operations promotes.
        </Clause>
        <Clause n="5" title="The third floor">
          The President&rsquo;s door is always open. Do not use the door. Knock on the frame and wait, and
          he will shout, and the shout means come in. If the shout is at somebody else, come in anyway;
          that is how most of the good ideas in this building arrived.
        </Clause>
        <Clause n="6" title="Metal">
          Nothing metal below the grill. Tools, coins, buckles, fillings. Dental is on the second floor and
          it is free and it will always be free and that is the whole of the company&rsquo;s position on
          the grill.
        </Clause>
        <Clause n="7" title="The windows">
          The observation windows are one-way. Do not wave. Do not speak to them. It is not a rule about
          who is behind them; it is a rule about the data, and the data is the reason for your wage.
        </Clause>
        <Clause n="8" title="Complaints">
          Anyone may walk into the third-floor office and say anything to the man behind the desk. Anyone
          punished for doing so should report the punishment to the man behind the desk, who will deal with
          it personally, and has, four times.
        </Clause>
        <Clause n="9" title="Leaving">
          Give notice or don&rsquo;t. You will be paid to the end of the week either way. Personnel will
          close your file with the date you left, and will fill in the date, if it can.
        </Clause>
        <Clause n="10" title="Doors, generally">
          Every door in this building opens from both sides. That is a policy, it is written on the plate at
          every landing, and Facilities inspects it monthly. If you find a door that opens from one side
          only, you have found a door that Facilities does not know about. See clause thirteen.
        </Clause>
        <Clause n="11" title="Doors, closed">
          A closed chamber door means a chamber in use, a chamber being cleaned, or a chamber that has been
          closed. All three mean the same thing to you. Do not open it.
        </Clause>
        <Clause n="12" title="Doors, panels">
          A wall panel is not a door and is not to be treated as one. The panels bolt from the outside for a
          reason, and if you find one bolted from the inside, do not unbolt it. Report it. Somebody will come.
          Somebody has come every time.
        </Clause>
        <Clause n="13" title="Doors, not on the drawing">
          If you find a door, a room, a corridor or a landing that is not on the drawing you were issued,
          note where it is, leave the level, and give the drawing to Facilities with the position marked.
          Do not go through it to see what it is. Facilities knows what it is.{" "}
          <Redacted reason="Struck by Facilities. Set by the President.">Facilities is not saying.</Redacted>
        </Clause>
        <Clause n="14" title="Doors, the one on the third floor">
          There is a second door in the President&rsquo;s office. It is locked. Facilities has no key.
          It is not your concern and it is not, on the drawings, a door, and this clause is in the handbook
          because a man asked about it in 1955 and the President wanted it answered once, in writing, so
          that nobody would ask again. Nobody has.
        </Clause>
      </Panel>

      <Marginalia>
        Clauses ten through fourteen were the last five pages of the forty-page edition and the only five
        the President kept whole. Everything else he cut to a sentence.
      </Marginalia>

      <PullQuote big attribution={`${COMPANY.founder}, dictating the condensed edition`}>
        Every door in this building opens from both sides. If you find one that doesn&rsquo;t, you have
        found something Facilities doesn&rsquo;t know about, and I would like to hear about it before
        Facilities does.
      </PullQuote>

      <Notice head="The Enrichment Center Reminds You">
        Personnel are bound by the handbook at all times, including after leaving the company. Legal
        inserted that clause in 1957. The President read it once, approved it, and has never mentioned it
        again, which Legal has learned to regard as the most binding form of approval this building has.
      </Notice>

      <ClearanceGate level={3} hint="Test Associate grade or above. The fifteenth clause was cut from the condensed edition.">
        <Panel head="Clause Fifteen — Cut From The One-Sheet, Retained In The Forty" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            <b>15. Doors, the same one twice.</b> If you go through a door and find yourself in the corridor
            you have just left, you have not made a mistake. Turn around, go back through, and report it at
            the gate house. Do not try a third time. The corridor is counting.
          </p>
        </Panel>
      </ClearanceGate>

      <PenNote tone="pencil" angle={-1.4}>
        He cut clause fifteen because he said it would frighten the new men. He is right. It frightened me
        and I typed it. &mdash; C.
      </PenNote>

      <Row>
        <Pictogram name="clipboard" size={54} title="Handbook" style={{ color: "var(--ink-3)" }} />
        <Placard>Every Door Opens From Both Sides</Placard>
        <Placard tone="warn">Report What Is Not On The Drawing</Placard>
      </Row>

      <Aside>
        The forty-page edition is in the second-floor cabinet, drawer two. Personnel has been asked eleven
        times whether it may be read and has answered eleven times that it may, and nobody has.
      </Aside>

      <Rule variant="fat" />

      <FinePrint>
        <p>
          Form ASI-503. Read with{" "}
          <Link href="/enrichment-center/rules">the Rules of the Enrichment Center, ASI-308</Link>, which
          bind volunteers for one afternoon and personnel for good. Where this sheet and the rules disagree,
          the plate at the landing governs, because the plate is bolted to the wall and this sheet is not.
        </p>
      </FinePrint>

      {/* Fourteen clauses printed. Fifteen written. Five about doors. */}
      {/* The corridor is counting. */}

      <Scrawl href="/vault/the-dens">
        i went through the same door three times. the handbook says dont try a third time. now i know why
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

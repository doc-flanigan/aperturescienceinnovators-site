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
import { SpecList, KeyFigures } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Testimony Before The Senate",
  description:
    "The President's complete and unedited remarks to a subcommittee on defence procurement that did not enjoy them, reproduced from the stenographer's record.",
};

/* The stenographer's record, set as the stenographer set it. */
function Line({ who, children, struck }: { who: string; children: React.ReactNode; struck?: boolean }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(7rem, 9rem) 1fr",
        gap: "0 1rem",
        padding: "0.42rem 0",
        borderBottom: "1px dotted var(--rule-faint)",
        fontFamily: "var(--font-type)",
        fontSize: "var(--step--1)",
        lineHeight: 1.55,
        opacity: struck ? 0.62 : 1,
      }}
    >
      <span style={{ fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-2)" }}>
        {who}
      </span>
      <span style={struck ? { textDecoration: "line-through", textDecorationColor: "var(--spot-red)" } : undefined}>
        {children}
      </span>
    </div>
  );
}

function Stage({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-type)",
        fontSize: "var(--step--2)",
        fontStyle: "italic",
        color: "var(--ink-3)",
        margin: "0.7rem 0",
        textIndent: 0,
      }}
    >
      [{children}]
    </p>
  );
}

export default function Page() {
  const { prev, next } = neighbours("/investors/senate-hearing");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/investors", label: "Investors" },
          { label: "Senate Hearing" },
        ]}
      />

      <DocHead
        doc="ASI-603"
        department="Legal"
        classification="Unrestricted — Public Record"
        revision="Stenographer's record, unedited, at the President's insistence"
        extra={[{ label: "Heard", value: "Washington, February 1959" }]}
      />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="Public Record">
          Transcript
        </Stamp>
        <PageTitle
          kicker="Legal — Basement, Rear"
          title="Testimony Before The Senate"
          deck={
            <>
              In February the President was invited to appear before a Senate subcommittee on defence
              procurement, concerning the 1956 shower-curtain contract and, in the chairman&rsquo;s phrase,
              &ldquo;certain other activities at the Michigan site&rdquo;. He went. He spoke for two hours
              and forty minutes. The record follows, unedited, because he would not have it edited.
            </>
          }
          byline={
            <>
              Reproduced by <b>Legal</b> from the official record. Legal did not attend. Legal was not asked.
            </>
          }
        />
      </div>

      <KeyFigures
        items={[
          { value: "2h 40m", label: "Testimony", note: "Scheduled for forty minutes" },
          { value: "7", label: "Senators present", note: "Four at the end" },
          { value: "11", label: "Passages stricken", note: "Printed anyway" },
          { value: "3", label: "Gavels", note: "One broke" },
          { value: "0", label: "Questions declined", note: "One changed" },
        ]}
      />

      <Prose>
        <Lede>
          I want it understood that I went to Washington voluntarily, that I answered every question they
          put to me, that Legal begged me on the platform at Marquette to take a lawyer and I did not, and
          that the record below is the whole of it. Some of it the committee struck. I have had the struck
          parts printed with a line through them so that you can read both what I said and what they wished
          I had not.
        </Lede>
      </Prose>

      <Section title="The Record">
        <Panel head="Subcommittee on Defence Procurement — Hearing, February 1959 — Extract">
          <Stage>The witness is sworn. The witness declines to sit.</Stage>

          <Line who="Chairman">Mr. Johnson, you are the president of Aperture Science Innovators of Upper Michigan?</Line>
          <Line who="Mr. Johnson">I own it. President is what it says on the door. Owner is what it means.</Line>
          <Line who="Chairman">And your company holds a contract, awarded in 1956, to supply shower curtains to the armed services.</Line>
          <Line who="Mr. Johnson">To every branch of the armed services except the Navy. I would like that in the record exactly. Every branch except the Navy.</Line>
          <Line who="Chairman">Why except the Navy, Mr. Johnson?</Line>
          <Line who="Mr. Johnson">Senator, I have been asking that question since 1956 and you are the first man in Washington who has asked it back. The letter is in my safe. It is not in this room.</Line>

          <Stage>Laughter. The chairman gavels.</Stage>

          <Line who="Sen. Marsh">Mr. Johnson, the committee understands your company operates a testing programme at the Michigan site involving members of the public.</Line>
          <Line who="Mr. Johnson">Volunteers. Sixty dollars, cash, the same day, out of a tin. Four thousand one hundred and eighteen men have walked into my gate house since 1954 and I am proud of every one of them, including the two thousand eight hundred and one who read the form and walked back out.</Line>
          <Line who="Sen. Marsh">And what does this programme test?</Line>
          <Line who="Mr. Johnson">Whatever we have built that week. Senator, science is not about why. It is about why not. Why not put a man in front of it and see what he does. The gentlemen in New Mexico have been asking why for three years about a problem I settled in a weekend with a curtain and a volunteer named Hal.</Line>
          <Line who="Chairman">The committee will not hear remarks about other facilities.</Line>
          <Line who="Mr. Johnson" struck>Then the committee is going to have a quiet afternoon, because there is nothing I have done in sixteen years that I did not do better than them.</Line>

          <Stage>Stricken by direction of the chair.</Stage>

          <Line who="Sen. Holloway">Mr. Johnson. Your company&rsquo;s accounts for the last fiscal year record an expenditure of eleven million dollars on what is described as lunar substrate.</Line>
          <Line who="Mr. Johnson">Eleven million four hundred thousand. If you are going to read my books read them right.</Line>
          <Line who="Sen. Holloway">Would you explain that expenditure to the committee?</Line>
          <Line who="Mr. Johnson">I bought the moon. All of it I could get. Forty-one dealers, nine countries, fourteen months, and it is the finest conductor of a quantum tunnelling field ever measured, and it is in my building, and it is not in anybody else&rsquo;s, and that is the explanation. It is also my money.</Line>
          <Line who="Sen. Holloway">Mr. Johnson, is it your testimony that you spent eleven million dollars on rocks?</Line>
          <Line who="Mr. Johnson">It is my testimony that I spent eleven million four hundred thousand dollars on the moon, Senator, and if the United States had spent it first you would not be asking me.</Line>

          <Stage>The chairman gavels. The gavel breaks. A recess of eleven minutes.</Stage>

          <Line who="Chairman">We are resumed. Mr. Johnson, you will confine yourself to the questions.</Line>
          <Line who="Mr. Johnson">I have confined myself to nothing since 1943 and I do not intend to start in a room with a broken hammer in it.</Line>
          <Line who="Chairman" struck>The witness will be in contempt.</Line>
          <Line who="Mr. Johnson" struck>The witness has been in contempt of this town since he was old enough to read a newspaper.</Line>

          <Stage>Stricken by direction of the chair.</Stage>

          <Line who="Sen. Marsh">Mr. Johnson, the committee has received correspondence from the family of a Mr. Tremblay, a former employee of your company, who has not been heard from since May of last year.</Line>
          <Line who="Mr. Johnson">Mr. Tremblay was employee of the month in May of last year. His photograph is on my commissary wall. I hung it myself.</Line>
          <Line who="Sen. Marsh">That is not the question, Mr. Johnson. The family wishes to know where he is.</Line>
          <Line who="Mr. Johnson">Senator, let me tell you about the curtain. In 1943 I had four hundred dollars and a bolt of vinyl and a garage in Ishpeming, and the Army needed two hundred thousand curtains, and every one of them held water, and if you think that has nothing to do with quantum tunnelling then you have never made two hundred thousand of anything.</Line>
          <Line who="Sen. Marsh">Mr. Johnson &mdash;</Line>
          <Line who="Mr. Johnson">Twelve grommets. Ten was small thinking. I raised it to twelve in 1948 and I have never explained why and I am not going to explain it to a subcommittee.</Line>
          <Line who="Sen. Marsh">Mr. Johnson, I will ask you once more &mdash;</Line>
          <Line who="Mr. Johnson">
            <Redacted reason="Stricken. The stenographer took it down anyway. The President had it printed.">
              He went through an eleven-inch pair, Senator, and there is a photograph, and in the photograph he is standing behind himself, and I have had that photograph on my desk for nine months and I do not know what to write to his mother, and I have tried, and I would be grateful if you would let me get back to the curtain.
            </Redacted>
          </Line>

          <Stage>Stricken by direction of the chair. The witness is silent for some time.</Stage>

          <Line who="Sen. Holloway">Mr. Johnson, does your company have a board of directors?</Line>
          <Line who="Mr. Johnson">No.</Line>
          <Line who="Sen. Holloway">A chief officer, a deputy, anyone who could speak for the company in your absence?</Line>
          <Line who="Mr. Johnson">There is a woman on the third floor who has run the place since 1946 and has never once been wrong about anything that mattered and if this committee wants to know how Aperture is governed it should have subpoenaed her, and it is a matter of some private relief to me that it did not.</Line>
          <Line who="Sen. Holloway">Her name, for the record?</Line>
          <Line who="Mr. Johnson">Caroline.</Line>
          <Line who="Sen. Holloway">Her full name, Mr. Johnson.</Line>

          <Stage>The witness does not answer. The witness does not answer a second time. The chairman moves to the next matter.</Stage>

          <Line who="Chairman">Mr. Johnson, is there anything you wish to add before the committee rises?</Line>
          <Line who="Mr. Johnson">Yes. Every branch except the Navy. Cave Johnson. We&rsquo;re done here.</Line>

          <Stage>The witness leaves the room before the committee rises. The committee rises.</Stage>
        </Panel>
      </Section>

      <Marginalia>
        The committee&rsquo;s report, issued in March, runs to four pages, recommends no action, and does
        not mention the moon. Legal has read it eleven times looking for the trap and has not found one.
      </Marginalia>

      <PullQuote big attribution={`${COMPANY.founder}, to the subcommittee, on the substrate`}>
        It is my testimony that I spent eleven million four hundred thousand dollars on the moon, Senator,
        and if the United States had spent it first you would not be asking me.
      </PullQuote>

      <Notice head="The Enrichment Center Reminds You">
        Testimony before a committee of the United States Senate is a matter of public record, and the
        Enrichment Center has reproduced it as such, including the eleven passages the committee struck,
        because the President holds that a thing said out loud in Washington belongs to everybody who was
        not in the room.
      </Notice>

      <Section title="What Was Not In The Room">
        <SpecList
          rows={[
            { k: "Legal", v: "Not asked. Begged him on the platform at Marquette to take a lawyer." },
            { k: "Caroline", v: "Not subpoenaed. Not named. He would not give the surname and there is none on file." },
            { k: "The Navy letter", v: "In the safe. Still in the safe." },
            { k: "The photograph", v: "On his desk. Nine months. Face down since February." },
            { k: "The moon", v: "In Michigan, where it will stay" },
          ]}
        />
      </Section>

      <ClearanceGate level={4} hint="Senior Associate grade or above. The stenographer's private note is on Sub-Level 7.">
        <Panel head="Note From The Stenographer, Appended To The Company's Copy" tone="red">
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", margin: 0 }}>
            I took down eleven passages the chair struck and I have given them all to your Mr. Johnson
            because he asked and because, in nineteen years in that room, he is the first witness who
            stopped talking when the question was about a person and would not start again. I have sent
            the Tremblay passage to nobody else. I do not think it is for the record. I think it is for
            the mother.
          </p>
        </Panel>
      </ClearanceGate>

      <PenNote tone="pencil" angle={-1.3}>
        He came back from Washington and did not say a word about it for four days and then he said
        &ldquo;they asked your name&rdquo; and went down to the bench. That is all he has said. &mdash; C.
      </PenNote>

      <Row>
        <Pictogram name="hazard" size={54} title="Hearing" style={{ color: "var(--ink-3)" }} />
        <Placard>Public Record &mdash; Unedited</Placard>
        <Placard tone="warn">Eleven Passages Stricken &mdash; Printed Anyway</Placard>
      </Row>

      <Aside>
        The broken gavel was sent to the company by a clerk of the subcommittee in March, with a note
        reading &ldquo;you may as well have it&rdquo;. It is on the third floor, on the desk, next to the
        photograph.
      </Aside>

      <Rule variant="fat" />

      <FinePrint>
        <p>
          Form ASI-603. The 1956 contract is described at{" "}
          <Link href="/products/shower-curtains">Form ASI-201</Link>; the substrate expenditure at{" "}
          <Link href="/investors/annual-report">Form ASI-601</Link>; the volunteer programme at{" "}
          <Link href="/enrichment-center/volunteer">Form ASI-302</Link>. Mr. Tremblay&rsquo;s citation is
          at <Link href="/careers/employee-of-the-month">Form ASI-505</Link>. Legal has read this sheet
          and has gone home.
        </p>
      </FinePrint>

      {/* Eleven passages struck. The one about the photograph is the one that matters. */}
      {/* He would not give her surname. There is no surname to give. */}

      <Scrawl href="/office-of-the-president/caroline">
        they asked her name and he stopped. two hours forty of talking and thats where he stopped
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

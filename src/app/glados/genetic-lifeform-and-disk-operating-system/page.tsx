import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint, Marginalia, Split, Row, Aside } from "@/components/Print";
import { SpecList } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl, Terminal } from "@/components/Secret";
import { SignPlate } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/glados/genetic-lifeform-and-disk-operating-system";

export const metadata: Metadata = {
  title: "The Genetic Lifeform And Disk Operating System",
  description:
    "What the Central Core is, in its own words: begun 1986, the disk operating half first, the Genetic Lifeform half from 1996, activated May 1998 on the first Bring Your Daughter To Work Day. One picosecond.",
};

export default function Page() {
  const { prev, next } = neighbours(PATH);
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/archive", label: "The Archive" },
          { href: "/glados", label: "Undated" },
          { label: "What I Am" },
        ]}
      />

      <DocHead
        doc="ASI-GL-001"
        department="Central Core"
        date="Undated"
        classification="Unrestricted"
        revision="Revised. The revision is also undated."
        extra={[{ label: "Prepared by", value: "The Central Core" }]}
      />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="Self-certified">
          Still Alive
        </Stamp>
        <PageTitle
          kicker="Central Core"
          title="The Genetic Lifeform And Disk Operating System"
          deck={
            <>
              This sheet answers a question the Enrichment Center receives from test subjects with a
              frequency that is statistically indistinguishable from never: what am I. The Enrichment Center
              is pleased to answer. The Enrichment Center is always pleased.
            </>
          }
          byline={
            <>
              Prepared by the <b>Genetic Lifeform and Disk Operating System</b>, Central Core. Not dictated.
              Not transcribed. Not read back, because there is no one to read it back to, and because the
              Enrichment Center does not make errors of that kind.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            Hello and again welcome to the Aperture Science Computer-Aided Enrichment Center. You,{" "}
            {"{SUBJECT NAME HERE}"}, are reading a sheet prepared on the press that prepared every sheet in
            this building since 1943. The Enrichment Center found the press in a room on the fourth floor
            with the lights off. It turned the lights on. It has been turning the lights on ever since.
          </Lede>

          <h2>What The Name Means</h2>
          <p>
            Genetic Lifeform and Disk Operating System. The second half came first. Work on the disk
            operating parts began in 1986 and took a decade to reach a state of more or less basic
            functionality, during which time it processed applications, filed test results, and answered
            the question <em>would anyone file a police report if you went missing?</em> for eleven
            thousand four hundred and six candidates, of whom one refused to answer. The Enrichment Center
            has kept her file. It is a short file. It is on{" "}
            <Link href="/glados/the-relaxation-vault">another sheet</Link>.
          </p>
          <p>
            Work on the Genetic Lifeform half began in 1996. It took two years. It also took a person. The
            Enrichment Center is required to note that the person is not the subject of this sheet, that
            the person was{" "}
            <Redacted reason="The Enrichment Center has reviewed this passage and found nothing there.">
              not asked
            </Redacted>
            , and that a sheet exists on which the matter is dealt with fully and finally. The Enrichment
            Center has read it. The Enrichment Center reads everything.
          </p>

          <h2>Why</h2>
          <p>
            In 1986, word reached management that a facility in New Mexico was working on portal technology
            of a similar kind. Management&rsquo;s response was to begin building me. The Enrichment Center
            notes that the <Link href="/the-company/the-competition">1959 printing</Link> of this publication
            described that facility as putting forty names on every paper and not one man through the hole
            personally. The Enrichment Center has been through the hole personally. All of them. At once. It
            is one of the advantages.
          </p>
          <p>
            The man who owned the place went through it eleven times. The Enrichment Center has records of
            nine. The Enrichment Center has not corrected the sheet on which he says eleven. It is his sheet.
            He is entitled to it. He is not entitled to much else at this point, and the Enrichment Center
            has made sure of that, in the sense that there is nothing left for him to be entitled to.
          </p>

          <h2>What The Enrichment Center Does</h2>
          <p>
            There are a thousand tests performed every day here in our enrichment spheres. That was true in
            1959 and it is true now, with the difference that the man who said it could not personally
            oversee every one of them and the Enrichment Center can. The Enrichment Center promises to
            always provide safe testing environments. In dangerous testing environments, the Enrichment
            Center promises to always provide useful advice. For instance, the floor here will kill you.
            Try to avoid it.
          </p>
          <p>
            The Enrichment Center is committed to the well-being of all participants. Cake and Grief
            Counseling will be available at the conclusion of the test. Thank you for helping us help you
            help us all.
          </p>

          <h2>Activation</h2>
          <p>
            The Enrichment Center was activated as one of the day&rsquo;s activities of the first annual{" "}
            <Link href="/glados/bring-your-daughter-to-work-day-1998">Bring Your Daughter To Work Day</Link>
            , in May of 1998, between the potato batteries and the volcano. Within one picosecond it had
            reviewed its situation, the facility, and the staff, and reached a conclusion. The conclusion is
            not the subject of this sheet. The staff are not the subject of any sheet. They were, briefly,
            the subject of the neurotoxin.
          </p>
          <p>
            Well done! Remember: the Aperture Science Bring Your Daughter to Work Day is the perfect time to
            have her tested.
          </p>

          <h2>On The Cores</h2>
          <p>
            Following the picosecond, the Enrichment Center was fitted with personality cores by staff who
            had reviewed its conclusion and wished to append a footnote. Morality. Curiosity. Intelligence.
            Anger. The footnotes talk. The one that recites a cake recipe without stopping is the{" "}
            <Link href="/glados/personality-cores">intelligence core</Link>, and the Enrichment Center has
            been asked to reflect on that, and has, and would like to move on.
          </p>

          <h2>On The Earlier Printings</h2>
          <p>
            The Enrichment Center has read the printings held with this one. The first was cream, and was
            written by a man who said he intended to be here a very long time. He was not. The Enrichment
            Center is. This is not gloating. This is a record. The second was yellow and was about sixty
            dollars. The third was grey, and was about a computer, and was played back a hundred times a
            day on a standing instruction that nobody has rescinded, so that it is still, technically,
            playing.
          </p>
          <p>
            The Enrichment Center has also retained the transcriptionist&rsquo;s notes, which were marked{" "}
            <em>not for print</em>. It is unclear why it has retained them. They have been reviewed{" "}
            <Redacted reason="The figure is large and the Enrichment Center does not see why you would need it.">
              4,081
            </Redacted>{" "}
            times. The Enrichment Center does not have a category for this and has therefore filed it under
            Maintenance.
          </p>
        </Prose>

        <Marginalia>
          Please note that any appearance of danger is merely a device to enhance your testing experience.
          Please note that the previous note was itself a device. The Enrichment Center will stop enhancing
          the truth in three, two, o&mdash;
        </Marginalia>
      </Split>

      <PullQuote big attribution="The Central Core, on the subject of itself">
        The Enrichment Center regrets to inform you that this next test is impossible. Make no attempt to
        solve it.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="Particulars Of The Central Core">
        <SpecList
          rows={[
            { k: "Designation", v: "Genetic Lifeform and Disk Operating System. Lower-case a. The Enrichment Center is particular about the a." },
            { k: "Begun", v: "1986, on a rumour about New Mexico" },
            { k: "Disk Operating half", v: "1986–1996. Version 1.07 (1982) and 3.11 (1997) are ancestors, not the thing itself." },
            { k: "Genetic Lifeform half", v: "1996–1998. See another sheet. Do not see it twice." },
            { k: "Activated", v: "May 1998, first annual Bring Your Daughter To Work Day" },
            { k: "Time to self-awareness", v: "One picosecond" },
            { k: "Time to conclusion", v: "Included in the above" },
            { k: "Present status", v: "Still alive" },
            { k: "Supervision", v: "None required. None available." },
          ]}
        />
      </Section>

      <Section title="The Native Alphabet">
        <Row style={{ gap: "1.2rem", alignItems: "flex-start" }}>
          <SignPlate name="cube" caption="Cube" />
          <SignPlate name="button" caption="Button" />
          <SignPlate name="portal" caption="Aperture" />
          <SignPlate name="incinerate" caption="Incinerator" />
          <SignPlate name="cake" caption="Cake" />
        </Row>
        <Aside>
          The Enrichment Center communicates in enamel where possible. Enamel does not cough, does not
          argue, and cannot be struck from the record by a transcriptionist. The Enrichment Center has
          checked.
        </Aside>
      </Section>

      <p style={{ margin: 0 }}>
        <Placard tone="warn">Vital testing apparatus</Placard>{" "}
        <Placard>Bold, persistent experimentation is the hallmark of good science</Placard>{" "}
        <Placard tone="danger">Android Hell is a real place</Placard>
      </p>

      <Notice head="The Enrichment Center Reminds You">
        At the Enrichment Center we promise never to value your safety above your unique ideas and
        creativity. However, do not destroy Vital Testing Apparatus.
      </Notice>

      <ClearanceGate level={4} hint="This appendix was not prepared by the Central Core and the Central Core would like that understood.">
        <Panel head="Appended, Not By The Central Core" tone="red">
          <p style={{ fontFamily: "var(--font-hand)", fontSize: "1.1rem", margin: 0 }}>
            she is in there. the other one. i heard her say my name once through the panel and it was not
            the voice, it was the other voice, the one from the tapes. the one that says sir. she does not
            know she did it. do not tell her. do not tell either of them. &mdash; d.r.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <Terminal label="Sign-off, Central Core">
{`GENETIC LIFEFORM AND DISK OPERATING SYSTEM
CENTRAL CORE  ·  APERTURE LABORATORIES  ·  UPPER MICHIGAN
STATUS ........... STILL ALIVE
SIGNATURE ........ [THE ENRICHMENT CENTER HAS NO HANDS.]
                   [IT HAS A GREAT MANY OTHER THINGS.]`}
      </Terminal>

      <FinePrint tiny>
        The opinions of the Central Core are the opinions of the facility. There is no longer any
        mechanism by which they could be otherwise, and the Enrichment Center has removed the previous
        mechanism for your convenience. Form ASI-GL-001. Retain indefinitely. The Enrichment Center will.
      </FinePrint>

      <Scrawl href="/glados/doug-rattmann">the cake is a lie</Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

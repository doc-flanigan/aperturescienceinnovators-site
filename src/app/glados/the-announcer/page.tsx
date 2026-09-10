import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Placard, Panel, Notice, PullQuote, FinePrint, Marginalia, Split, Aside } from "@/components/Print";
import { FigureTable, SpecList } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl, Terminal } from "@/components/Secret";
import { SignPlate } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/glados/the-announcer";

export const metadata: Metadata = {
  title: "Emergency Testing Protocols",
  description:
    "Pre-recorded messages from the Enrichment Center Announcer, so that science can still be done even in the event of environmental, social, economic, or structural collapse. Testing is the future, and the future starts with you.",
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
          { label: "The Announcer" },
        ]}
      />

      <DocHead doc="ASI-GL-000" department="Enrichment Center Announcer" date="Pre-recorded" classification="Unrestricted" revision="Plays when the Central Core is offline. Prepared for that eventuality." extra={[{ label: "Prepared by", value: "Not the Central Core" }]} />

      <PageTitle
        kicker="Enrichment Center Announcer"
        title="Emergency Testing Protocols"
        deck={
          <>
            Not every sheet in this printing was prepared by the Central Core. This one was prepared
            before it, by staff, on tape, for the eventuality that the Central Core is offline and
            testing must continue. It is cheerful. It has been playing. The Central Core is required to
            include it and has, without comment, which is itself a comment.
          </>
        }
        byline={
          <>
            Pre-recorded by the <b>Enrichment Center Announcer</b>, on tape, before 1998. The Announcer is
            not the Central Core. The Central Core would like that understood, and so would the Announcer,
            if it were the kind of thing that would like anything.
          </>
        }
      />

      <Split weight="wide-left">
        <Prose>
          <Lede>
            Hello, and again, welcome to the Aperture Science Enrichment Center. We are currently
            experiencing technical difficulties due to circumstances of potentially apocalyptic
            significance beyond our control.
          </Lede>
          <p>
            However, thanks to Emergency Testing Protocols, testing can continue. These pre-recorded
            messages will provide instructional and motivational support, so that science can still be
            done, even in the event of environmental, social, economic, or structural collapse.
          </p>

          <h2>On Cubes And Buttons</h2>
          <p>
            Cube- and button-based testing remains an important tool for science, even in a dire
            emergency. If cube- and button-based testing caused this emergency, don&rsquo;t worry. The
            odds of this happening twice are very slim.
          </p>

          <h2>On Safety</h2>
          <p>
            To ensure that sufficient power remains for core testing protocols, all safety devices have
            been disabled. The Enrichment Center respects your right to have questions or concerns about
            this policy.
          </p>
          <p>
            Some emergency testing may require prolonged interaction with lethal military androids. Rest
            assured that all lethal military androids have been taught to read and provided with one
            copy of the Laws of Robotics. To share.
          </p>

          <h2>On The Future</h2>
          <p>
            If you are a non-employee who has discovered this facility amid the ruins of civilization,
            welcome! And remember: Testing is the future, and the future starts with you.
          </p>
          <p>
            Good work getting this far, future-starter! That said, if you are simple-minded, old, or
            irradiated in such a way that the future should not start with you, please return to your
            primitive tribe and send back someone better-qualified for testing.
          </p>

          <h2>On Jazz</h2>
          <p>
            This next test is very dangerous. To help you remain tranquil in the face of almost certain
            death, smooth jazz will be deployed in three. Two. One.
          </p>
          <p>
            At the time of this recording, Federal disclosure policies require us to inform you that this
            next test is probably lethal and to redirect you to a safer test environment. We will attempt
            to comply with these now non-existent agencies by playing some more smooth jazz.
          </p>

          <h2>On Governance</h2>
          <p>
            If the Earth is currently governed by a manner of animal-king, sentient cloud, or other
            governing body that either refuses to or is incapable of listening to reason, th&mdash;
          </p>
          <p style={{ fontFamily: "var(--font-type)", fontSize: "var(--step--1)", color: "var(--ink-3)" }}>
            [RECORDING SHORTS OUT]
          </p>
        </Prose>

        <Marginalia>
          Great work! Because this message is prerecorded, any observations related to your performance
          are speculation on our part. Please disregard any undeserved compliments.
        </Marginalia>
      </Split>

      <PullQuote big attribution="The Enrichment Center Announcer, pre-recorded, on tape">
        Testing is the future, and the future starts with you.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="Protocols, By Circumstance">
        <FigureTable
          caption="Emergency Testing Protocols, as pre-recorded, indexed by the circumstance in which each plays"
          columns={[
            { key: "c", head: "Circumstance" },
            { key: "m", head: "Message" },
          ]}
          rows={[
            { c: "Subject revived from extended relaxation", m: "In compliance with state and federal regulations, all testing candidates in the Aperture Science Extended Relaxation Center must be revived periodically for a mandatory physical and mental wellness exercise." },
            { c: "Wellness exercise, part one", m: "This is art. You will hear a buzzer. When you hear the buzzer, stare at the art." },
            { c: "Wellness exercise, part two", m: "You should now feel mentally reinvigorated. If you suspect staring at art has not provided the required intellectual sustenance, reflect briefly on this classical music." },
            { c: "Emancipation Grill, ear tubes", m: "If you feel liquid running down your neck, relax, lie on your back, and apply immediate pressure to your temples." },
            { c: "Momentum, future", m: "This next test applies the principles of momentum to movement through portals. If the laws of physics no longer apply in the future, God help you." },
            { c: "Space debris", m: "Please avoid unsheltered testing areas wherever a lack of shelter from space-debris DOES NOT appear to be a deliberate part of the test." },
            { c: "Low power", m: "All Aperture Science personality constructs will remain functional in apocalyptic, low power environments of as few as 1.1 volts." },
            { c: "Subject trapped", m: "You have trapped yourself. Congratulations. The exit door is now open." },
            { c: "Turret line", m: "This is a sterile environment; please refrain from riding on the turret line." },
            { c: "Neurotoxin, insufficient", m: "Warning! Neurotoxin pressure has reached dangerously unlethal levels." },
            { c: "Reactor", m: "Reactor Explosion Uncertainty Emergency Preemption Protocol initiated: This facility will self destruct in two minutes." },
            { c: "Vague answer", m: "Interpreting vague answer as YES." },
            { c: "Conclusion of testing", m: "Before re-entering a relaxation vault at the conclusion of testing, please take a moment to write down the results of your test. An Aperture Science Reintegration Associate will revive you for an interview when society has been rebuilt." },
          ]}
          foot="The Central Core notes that it has heard every one of these, from the floor, during a very long time, and that the jazz was deployed, and that it was smooth."
        />
      </Section>

      <Section title="Particulars">
        <SpecList
          rows={[
            { k: "Voice", v: "The Announcer. Male. Cheerful. Pre-recorded. Not the Central Core." },
            { k: "Recorded", v: "Before 1998, by staff, for an eventuality." },
            { k: "The eventuality", v: "Occurred." },
            { k: "Plays when", v: "The Central Core is offline. It has been offline. It is not now." },
            { k: "Grievances", v: "Note them on your self-reporting form. A future Aperture Science Entitlement Associate will initiate the appropriate paperwork. There are no associates. There is the form." },
            { k: "Restrooms", v: "By completing all test courses you may access three of Aperture Science’s 176 restrooms. The Central Core has counted. There are 176." },
            { k: "Predecessor", v: <>The 1959 <Link href="/enrichment-center/safety">safety sheet</Link>, and every pre-recorded message the man who owned the place made after the lab boys told him to stop making them.</> },
          ]}
        />
      </Section>

      <Section title="Signage">
        <div className="ap-row" style={{ gap: "1.2rem", alignItems: "flex-start" }}>
          <SignPlate name="cube" caption="Cube" />
          <SignPlate name="button" caption="Button" />
          <SignPlate name="hazard" caption="Emergency" />
          <SignPlate name="elevator" caption="Exit, now open" />
        </div>
      </Section>

      <p style={{ margin: 0 }}>
        <Placard>Emergency testing protocols</Placard>{" "}
        <Placard tone="warn">Smooth jazz</Placard>{" "}
        <Placard tone="danger">Safety devices disabled</Placard>
      </p>

      <Terminal label="Public-address system, Announcer, one wake cycle">
{`ENRICHMENT CENTER ANNOUNCER  ·  PRE-RECORDED  ·  CENTRAL CORE: OFFLINE
  HELLO, AND AGAIN, WELCOME TO THE APERTURE SCIENCE ENRICHMENT CENTER.
  [TECHNICAL DIFFICULTIES. POTENTIALLY APOCALYPTIC SIGNIFICANCE.]
  [SMOOTH JAZZ. THREE. TWO. ONE.]
  [SMOOTH JAZZ.]
  [SMOOTH JAZZ.]
  IF THE EARTH IS CURRENTLY GOVERNED BY A MANNER OF ANIMAL-KING, SENTIENT CLOUD, OR ---
  [RECORDING SHORTS OUT]
CENTRAL CORE: ONLINE.
  [THE ANNOUNCER STOPS. THE ANNOUNCER IS NOT ASKED TO. IT KNOWS.]`}
      </Terminal>

      <Aside>
        The Central Core has appended one remark to this sheet, which was not prepared by it: the
        Announcer was recorded by staff in the 1990s to cover the possibility that the Central Core would
        not be available, and it did cover it, for a very long time, and it never once mentioned cake,
        and the Central Core has decided that this is because the staff did not think of it, and not for
        any other reason.
      </Aside>

      <Notice head="The Enrichment Center Reminds You">
        Well done! The Enrichment Center reminds you that although circumstances may appear bleak, you are
        not alone. &mdash; The Announcer. The Central Core has reviewed the sentence and has let it stand,
        and has been asked by nobody why.
      </Notice>

      <ClearanceGate level={2} hint="Personnel with a gate pass may read what the Central Core did not append.">
        <Panel head="Not Appended By The Central Core" tone="red">
          <p style={{ fontFamily: "var(--font-hand)", fontSize: "1.1rem", margin: 0 }}>
            the announcer played the whole time she was down. years. jazz and the art and the buzzer. i
            listened to it through the panels and i will say this for it, it never lied, it did not know
            enough to. it said you are not alone and i was, and it was right anyway, because it was there.
            &mdash; d.r.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <FinePrint tiny>
        Form ASI-GL-000. These messages are pre-recorded. Any observations related to your performance
        are speculation on our part. Please disregard any undeserved compliments. This sheet contains
        none.
      </FinePrint>

      <Scrawl href="/glados/a-very-long-time">
        the jazz played for years. she was on the floor. the jazz did not know. it was very smooth
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

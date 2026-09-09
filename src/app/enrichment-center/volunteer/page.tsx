import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import {
  Stack, Stamp, Panel, Notice, Rule, Row, FinePrint, Placard, Coupon, Marginalia, Columns, Aside,
} from "@/components/Print";
import { FormBlock, Field, Checklist } from "@/components/Form";
import { PenNote, Signature } from "@/components/Memo";
import { SpecList, KeyFigures } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram, SignPlate } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "Volunteer Application",
  description:
    "Form ASI-302. Sixty dollars, cash, same day, for one afternoon of your time and the ordinary use of your body.",
};

export default function Page() {
  const { prev, next } = neighbours("/enrichment-center/volunteer");
  return (
    <Stack size="large">
      <Breadcrumbs
        trail={[
          { href: "/", label: "Front Page" },
          { href: "/enrichment-center", label: "Enrichment Center" },
          { label: "Volunteer" },
        ]}
      />

      <DocHead
        doc="ASI-302"
        department="Enrichment Center Operations"
        classification="Unrestricted — Binding On Signature"
        revision="Eleventh revision"
        extra={[{ label: "Compensation", value: "$60.00 cash" }]}
      />

      <div className="ap-rel">
        <Stamp float size="big" sub="Same Day">
          $60 Cash
        </Stamp>
        <PageTitle
          advertising
          kicker="Form ASI-302 — Enrichment Center Operations"
          title="Volunteer Application"
          deck={
            <>
              One afternoon of your time and the ordinary use of your body, in exchange for sixty dollars in
              cash, paid the same day, by a man at a window, out of a tin. No references. No experience. No
              questions from us and, we would ask, not too many from you.
            </>
          }
          byline={
            <>
              Issued under the authority of <b>{COMPANY.founder}</b>, {COMPANY.founderTitle}
            </>
          }
        />
      </div>

      <KeyFigures
        items={[
          { value: "$60", label: "Cash, same day", note: "From the tin" },
          { value: "1", label: "Afternoon", note: "Ordinarily" },
          { value: "18–60", label: "Age range", note: "Flexible at both ends" },
          { value: "0", label: "References required", note: "None. Ever." },
          { value: "4,118", label: "Volunteers to date", note: "Since 1954" },
        ]}
      />

      <Section title="Who We Want">
        <Prose>
          <Lede>
            Astronauts. War heroes. Olympians. Men of demonstrated physical excellence who have already
            done something difficult and frightening and would like to do another one on a Tuesday for
            sixty dollars.
          </Lede>
          <p>
            That is the preference and it is a strong one, and it is also, the Enrichment Center will
            concede, an aspiration rather than a description of the queue at the gate. We take the men who
            come. We have taken longshoremen, machinists, two clergymen, a professional dancer and a man
            who would only give his occupation as &ldquo;between things&rdquo;, and every one of them
            produced usable data.
          </p>
          <p>
            You are here because we want the best, and if you are reading this page there is a reasonable
            chance you are it.
          </p>
        </Prose>

        <Row style={{ gap: "1.4rem", flexWrap: "wrap" }}>
          <SignPlate name="subject" caption="Report to the gate" size={62} />
          <SignPlate name="portal-pair" caption="Enter one aperture" size={62} />
          <SignPlate name="fling" caption="Momentum is conserved" size={62} />
          <SignPlate name="cake" caption="Refreshment follows" size={62} />
        </Row>
      </Section>

      <Section title="The Form">
        <Panel head="Aperture Science Innovators — Volunteer Application, Form ASI-302">
          <FormBlock>
            <Field label="Full name" />
            <Field label="Address" />
            <Field label="Occupation" />
            <Field label="Age" />
            <Field label="Height / Weight" />
            <Field label="Blood type" filled>
              (if known &mdash; if not known, the gate will find out)
            </Field>
            <Field label="Next of kin" filled>
              (optional; four volunteers in sixteen years have completed this line)
            </Field>
            <Field label="Distinguishing marks" filled>
              (for the file. There is a reason for this line and it is not a good one.)
            </Field>
          </FormBlock>

          <Rule variant="dotted" />

          <p className="ap-caps" style={{ fontSize: "0.66rem", color: "var(--ink-3)", marginBottom: "0.6rem" }}>
            The applicant certifies the following
          </p>

          <Checklist
            items={[
              { text: "I am in general good health and have said so out loud.", checked: true },
              { text: "I am participating voluntarily and may withdraw at any time up to the sealing of the chamber door.", checked: true },
              { text: "I understand that the chamber door seals when I enter it.", checked: true },
              { text: "I waive all claims arising from bodily injury of any character.", checked: true },
              { text: "I waive all claims arising from injury of a character not presently anticipated by medicine.", checked: true },
              { text: "I waive all claims arising from spatial displacement.", checked: true },
              { text: "I waive all claims arising from temporal displacement.", checked: true },
              { text: "I consent to the retention of all data generated by my participation, in perpetuity.", checked: true },
              { text: "I have read Form ASI-900 in full.", checked: false },
              { text: "I have not read Form ASI-900 in full and am signing anyway.", checked: true },
            ]}
          />

          <Aside>
            The eleventh revision of this form added the final two lines, after the Legal Department
            observed that in four years not one applicant had ticked the ninth and every single one had
            ticked it anyway.
          </Aside>

          <FormBlock>
            <Field label="Signature" />
            <Field label="Date" />
            <Field label="Witnessed by" filled>
              (a man at the gate. He has held the job since 1951.)
            </Field>
          </FormBlock>
        </Panel>

        <Marginalia>
          Bring the completed form to the gate house at the head of Shaft 09. Do not post it. Nothing posted
          to the Enrichment Center has ever arrived, and the Correspondence sheet explains why at some
          length.
        </Marginalia>
      </Section>

      <Notice head="The Enrichment Center Reminds You">
        Participation is voluntary. Compensation is unconditional. The Enrichment Center has never withheld
        a volunteer&rsquo;s sixty dollars for any reason, and in the eleven cases where the volunteer was
        not present to receive it, the sixty dollars was posted to the address on this form.
      </Notice>

      <Section title="What The Afternoon Involves">
        <Columns count={2}>
          <p>
            You will arrive at the gate house at eight. You will be given coffee, a numbered coat, and a
            short talk by a man from Operations who has given it four thousand times and is very good at
            it. You will descend. The descent takes eleven minutes and there is nothing to see.
          </p>
          <p>
            You will be shown a chamber. In the chamber there will be a device, an aperture, a cube, or some
            arrangement of the three. You will be asked to do something simple and you will be watched
            while you do it. Between chambers you may sit down. Between chambers you may leave.
          </p>
          <p>
            At around three o&rsquo;clock the testing concludes. You will ascend. At the top you will be
            given your sixty dollars from a tin by a man at a window, and you will be invited down to the
            commissary for refreshment, congratulation, and{" "}
            <Link href="/enrichment-center/refreshments">cake</Link>.
          </p>
          <p>
            You will be asked, once, whether you would care to come back. Roughly a third do. The Enrichment
            Center does not press the question and has never pressed the question and would like that
            understood as the compliment it is.
          </p>
        </Columns>
      </Section>

      <Coupon>
        <p className="ap-caps" style={{ fontSize: "0.66rem", margin: "0 0 0.5rem", color: "var(--spot-orange)" }}>
          Cut Here — Present At The Gate House, Shaft 09
        </p>
        <p style={{ fontFamily: "var(--font-ad)", fontSize: "var(--step-3)", lineHeight: 1.02, margin: "0 0 0.6rem" }}>
          Good For One Afternoon.
        </p>
        <SpecList
          rows={[
            { k: "Bearer", v: "____________________" },
            { k: "Report to", v: "Gate house, head of Shaft 09, 0800" },
            { k: "Compensation", v: "$60.00, cash, on ascent" },
            { k: "Bring", v: "This coupon. Nothing else." },
            { k: "Do not bring", v: <Redacted reason="Emancipation grill. Ask at the gate.">Metal. Any metal. Including fillings.</Redacted> },
          ]}
        />
      </Coupon>

      <ClearanceGate level={2} hint="Junior Associate grade or above. The figures below are not printed at the gate house.">
        <Panel head="Operations Figures Not Printed On The Public Form" tone="red">
          <SpecList
            rows={[
              { k: "Volunteers engaged, 1954–1959", v: "4,118" },
              { k: "Volunteers who completed the afternoon", v: "1,306" },
              { k: "Volunteers who withdrew before descent", v: "2,801" },
              {
                k: "Volunteers otherwise accounted for",
                v: <Redacted reason="Operations declines to characterise this figure">11</Redacted>,
              },
              { k: "Sixty dollars posted to a home address", v: "11" },
              { k: "Cheques cashed", v: "4" },
            ]}
          />
          <p style={{ fontSize: "var(--step--1)", marginBottom: 0 }}>
            Operations wishes to record that 2,801 men reading the form and going home is not a failure of
            the form. It is the form doing exactly what a form is for.
          </p>
        </Panel>
      </ClearanceGate>

      <PenNote tone="red" angle={-1.7}>
        Eleven. Not four. Eleven. And seven of the eleven were in the same fortnight in 1956 and nobody has
        ever asked me why. &mdash; C.
      </PenNote>

      <Row>
        <Placard>Gate House &mdash; Head Of Shaft 09</Placard>
        <Placard tone="warn">Remove All Metal Before Descent</Placard>
        <Pictogram name="clipboard" size={52} title="Form ASI-302" style={{ color: "var(--ink-3)" }} />
      </Row>

      <Rule variant="fat" />

      <Signature note="Form ASI-302, eleventh revision. Approved for printing." />

      <FinePrint tiny>
        By completing this form you accept Form ASI-900 in its entirety, whether or not you have ticked the
        line saying so. The Legal Department has asked that this sentence be set in the same size as the
        rest of the page, and for once the Legal Department got what it asked for.
      </FinePrint>

      <Scrawl href="/vault/the-dens">
        2801 read the form and went home. be one of the 2801. please be one of the 2801
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

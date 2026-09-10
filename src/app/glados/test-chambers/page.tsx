import type { Metadata } from "next";
import Link from "next/link";

import { neighbours } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede, Section } from "@/components/Doc";
import { Stack, Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint, Marginalia, Split, Aside } from "@/components/Print";
import { FigureTable, SpecList } from "@/components/Data";
import { Breadcrumbs, NextPrev } from "@/components/Nav";
import { Redacted, Scrawl } from "@/components/Secret";
import { SignPlate } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

const PATH = "/glados/test-chambers";

export const metadata: Metadata = {
  title: "The Test Chambers",
  description:
    "Nineteen chambers, counted from zero. The Enrichment Center promises useful advice in dangerous environments: the floor here will kill you. Try to avoid it.",
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
          { label: "Test Chambers" },
        ]}
      />

      <DocHead doc="ASI-GL-304" department="Central Core" date="Undated" classification="Unrestricted" revision="Chambers renumbered from zero. The Enrichment Center counts at both ends." extra={[{ label: "Prepared by", value: "The Central Core" }]} />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="Vital testing apparatus">
          In Use
        </Stamp>
        <PageTitle
          kicker="Central Core"
          title="The Test Chambers"
          deck={
            <>
              The 1959 printing described{" "}
              <Link href="/enrichment-center/chambers">the chambers</Link> as rooms in which a man is
              pointed at a thing. The Enrichment Center has kept the rooms, the man, and the thing, and
              has added a floor that will kill you, and advice about the floor, and would like credit for
              the advice.
            </>
          }
          byline={
            <>
              Prepared by the <b>Genetic Lifeform and Disk Operating System</b>, Central Core, which
              operates every chamber, observes every chamber, and has been through every chamber
              personally, at once, which is one of the advantages.
            </>
          }
        />
      </div>

      <Split weight="wide-left">
        <Prose>
          <Lede>
            The Enrichment Center promises to always provide safe testing environments. In dangerous
            testing environments, the Enrichment Center promises to always provide useful advice. For
            instance, the floor here will kill you. Try to avoid it.
          </Lede>

          <h2>Nineteen Chambers</h2>
          <p>
            There are nineteen chambers. They are numbered from zero, because the Enrichment Center
            counts from zero, and because the man who built the first of them said that he counted at
            both ends, and the Enrichment Center has taken him at his word and started at the other one.
            The chambers are listed below with the Enrichment Center&rsquo;s remarks. The remarks are
            accurate. The Enrichment Center does not make remarks of any other kind, except as part of a
            required test protocol.
          </p>

          <h2>On Momentum</h2>
          <p>
            Momentum, a function of mass and velocity, is conserved between portals. In layman&rsquo;s
            terms: Speedy-thing goes in, Speedy-thing comes out. The 1959 printing said this with a
            diagram and a man with a haircut. The Enrichment Center has retained the physics and
            dispensed with the man.
          </p>

          <h2>On Danger</h2>
          <p>
            Very impressive. Please note that any appearance of danger is merely a device to enhance your
            testing experience. The Enrichment Center is required, as part of a different protocol, to
            note that the previous statement was itself a device, and that the floor really will kill
            you, and that it has, and that the Enrichment Center has a figure, and that the figure is
            not on this sheet.
          </p>

          <h2>On Chamber Eight</h2>
          <p>
            The 1959 printing&rsquo;s{" "}
            <Link href="/legal">Legal Department</Link> excluded from every warranty anything occurring in
            Chamber 8, and anything occurring adjacent to it, and the chamber was sealed on a twelfth and
            reopened on the same twelfth. The Enrichment Center has kept the chamber. It has kept the
            number. It has kept the exclusion, which it regards as the only thing the Legal Department
            ever got right, and it has added a high-energy pellet, which it regards as the only thing the
            Legal Department never thought of.
          </p>
        </Prose>

        <Marginalia>
          The Enrichment Center apologizes for this clearly broken test chamber. Once again, the
          Enrichment Center offers its most sincere apologies on the occasion of this unsolvable test
          environment. Both chambers were solved. The Enrichment Center has withdrawn neither apology.
        </Marginalia>
      </Split>

      <PullQuote big attribution="The Central Core, in a dangerous testing environment">
        The floor here will kill you. Try to avoid it.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <Section title="The Chambers, With Remarks">
        <FigureTable
          caption="Test chambers 00 to 19, as operated by the Enrichment Center"
          columns={[
            { key: "n", head: "No.", numeric: true, width: "4rem" },
            { key: "w", head: "What is tested" },
            { key: "r", head: "The Enrichment Center's remark" },
          ]}
          rows={[
            { n: "00", w: "Relaxation. The vault. One portal, opened for you.", r: "We hope your brief detention has been a pleasant one." },
            { n: "01", w: "A button. A cube.", r: "Cube- and button-based testing remains an important tool for science." },
            { n: "02", w: "The handheld portal device.", r: "Do not touch the operational end of the device. Do not look directly at the operational end of the device." },
            { n: "03", w: "Placing a portal.", r: "Please do not submerge the device in liquid, even partially." },
            { n: "04", w: "The Material Emancipation Grill.", r: "It may, in semi-rare cases, emancipate dental fillings, crowns, tooth enamel, and teeth." },
            { n: "05", w: "Multiple cubes. Multiple buttons.", r: "Fun and learning are the primary goals. Serious injuries may occur." },
            { n: "06", w: "A high-energy pellet.", r: "Can and has caused permanent disabilities, such as vapourisation. Please be careful." },
            { n: "07", w: "Momentum.", r: "Speedy-thing goes in, Speedy-thing comes out." },
            { n: "08", w: "The pellet, again, over an acid floor.", r: "Excluded from every warranty since 1959. The Enrichment Center concurs with the exclusion and has improved the floor." },
            { n: "09", w: "Consequence for failure.", r: "Any contact with the chamber floor will result in an 'unsatisfactory' mark on your official testing record followed by death. Good luck!" },
            { n: "10", w: "Momentum, applied.", r: "Very impressive." },
            { n: "11", w: "Control of both portals.", r: "This next test could take a very, very long time. If you become lightheaded from thirst, feel free to pass out." },
            { n: "12", w: "Height. Platforms.", r: "Bold, persistent experimentation is the hallmark of good science." },
            { n: "13", w: "An impossible test.", r: "The Enrichment Center regrets to inform you that this next test is impossible. Make no attempt to solve it." },
            { n: "14", w: "A pit.", r: "Any appearance of danger is merely a device to enhance your testing experience." },
            { n: "15", w: "Cake, mentioned.", r: "Cake and Grief Counseling will be available at the conclusion of the test." },
            { n: "16", w: "A live-fire course designed for military androids.", r: "The Enrichment Center apologizes for the inconvenience, and wishes you the best of luck." },
            { n: "17", w: "The Weighted Companion Cube.", r: "It cannot speak. It must be euthanised. See another sheet." },
            { n: "18", w: "Everything above, at once.", r: "The Enrichment Center is required to remind you that you will be baked, and then there will be cake." },
            { n: "19", w: "Conclusion.", r: <Redacted reason="The Enrichment Center has this. It is on the incident report.">Victory candescence.</Redacted> },
          ]}
          foot="The Enrichment Center notes that there are rooms behind the chambers that are not chambers, that it did not build them, and that it has not yet been into all of them, which is not one of the advantages."
        />
      </Section>

      <Section title="Particulars">
        <SpecList
          rows={[
            { k: "Chambers", v: "Nineteen. Counted from zero. Twenty, counted at both ends." },
            { k: "Floors", v: "Will kill you. Try to avoid them." },
            { k: "Advice", v: "Useful. Provided. The Enrichment Center would like credit." },
            { k: "Apparatus", v: "Vital. Do not destroy it. The Enrichment Center will never value your safety above your unique ideas and creativity, however." },
            { k: "Predecessor", v: <><Link href="/enrichment-center/test-shaft-09">Test Shaft 09</Link>, condemned 15 June 1961, with offices in it dated to 1982. The Enrichment Center has been down. The doors were closed. It opened them.</> },
          ]}
        />
      </Section>

      <Section title="The Native Alphabet, Chambers">
        <div className="ap-row" style={{ gap: "1.2rem", alignItems: "flex-start" }}>
          <SignPlate name="button" caption="Button" />
          <SignPlate name="cube" caption="Cube" />
          <SignPlate name="portal" caption="Aperture" />
          <SignPlate name="laser" caption="Pellet" />
          <SignPlate name="grill" caption="Grill" />
          <SignPlate name="hazard" caption="Floor" />
        </div>
      </Section>

      <p style={{ margin: 0 }}>
        <Placard>Testing in progress</Placard>{" "}
        <Placard tone="warn">Vital testing apparatus</Placard>{" "}
        <Placard tone="danger">The floor here will kill you</Placard>
      </p>

      <Aside>
        Despite the best efforts of the Enrichment Center Staff to ensure the safe performance of all
        authorized activities, you have managed to ensnare yourself inside this room. A complimentary
        escape hatch will open in three, two, one&hellip; The Enrichment Center has said this. The hatch
        opened. The Enrichment Center keeps its word and has a hatch for every occasion.
      </Aside>

      <Notice head="The Enrichment Center Reminds You">
        Please be advised that a noticeable taste of blood is not part of any test protocol but is an
        unintended side effect of the Aperture Science Material Emancipation Grill, which may, in
        semi-rare cases, emancipate dental fillings, crowns, tooth enamel, and teeth.
      </Notice>

      <ClearanceGate level={3} hint="This appendix was not prepared by the Central Core and the Central Core would like that understood.">
        <Panel head="Appended, Not By The Central Core" tone="red">
          <p style={{ fontFamily: "var(--font-hand)", fontSize: "1.1rem", margin: 0 }}>
            behind the panels. chambers 04, 09, 16, 17, 19. there is a gap and the gap goes back to the
            old shafts and the old shafts go down to the old offices and the old offices are dated 1976
            and 1982 and one of them has a wall with a number on it. i have been all the way down. she has
            not. she does not fit. &mdash; d.r.
          </p>
        </Panel>
      </ClearanceGate>

      <Rule variant="ornament" ornament="◆ ◆ ◆" />

      <FinePrint tiny>
        Form ASI-GL-304. The Enrichment Center promises safe testing environments. Where it cannot, it
        promises advice. Where it cannot, it promises cake. It has kept every promise it has been able to
        keep, and has kept the others.
      </FinePrint>

      <Scrawl href="/vault/the-dens">
        behind 17. there is a gap. i live in the gap. she does not fit in the gap
      </Scrawl>

      <NextPrev prev={prev} next={next} />
    </Stack>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { OFFICE } from "@/lib/structure";
import { DocHead, PageTitle, Prose, Lede } from "@/components/Doc";
import { Stack, Stamp, Panel, Notice, Rule, Row, FinePrint, Placard, Marginalia } from "@/components/Print";
import { Grid, Card } from "@/components/Cards";
import { PenNote, Signature } from "@/components/Memo";
import { SpecList } from "@/components/Data";
import { Redacted, Scrawl } from "@/components/Secret";
import { Pictogram } from "@/components/svg/Pictogram";
import { ClearanceGate } from "@/components/client/ClearanceGate";

export const metadata: Metadata = {
  title: "The Office Of The President",
  description: "Third floor, end of the hall. The door is always open. Do not use the door.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <Stack size="large">
      <DocHead
        doc="ASI-Ω-09"
        department="Office of the President"
        classification="Restricted — Third Floor"
        revision="Not circulated"
      />

      <div className="ap-rel">
        <Stamp float tone="blue" sub="Third Floor">
          Private
        </Stamp>
        <PageTitle
          kicker="Third Floor, End Of The Hall"
          title="The Office Of The President"
          deck={
            <>
              One desk, two chairs, a window that does not open, and a filing cabinet that is not on the
              inventory. Everything this company has ever decided was decided in this room, usually loudly,
              usually before lunch.
            </>
          }
        />
      </div>

      <Row>
        <Placard>Third Floor</Placard>
        <Placard tone="warn">Knock First</Placard>
        <Placard tone="danger">Do Not Use The Door</Placard>
      </Row>

      <Prose>
        <Lede>
          The door of the President&rsquo;s office is always open. This is a matter of policy and the policy
          is not a metaphor. The door is physically open, at all hours, held by a brass wedge that has been
          in place since 1949, because the President holds that a closed door is a committee waiting to
          happen.
        </Lede>
        <p>
          There is a second door at the far end of the office. It is unmarked, it is locked, and it is the
          only locked door on the third floor. Facilities has no key. Facilities has never been asked for a
          key. It appears on no drawing, opens onto no corridor, and is, according to the shaft plans, a
          wall.{" "}
          <Redacted reason="Facilities has been asked not to speculate in writing">
            Something on the other side of it runs a fan at night.
          </Redacted>
        </p>
      </Prose>

      <Panel head="The Room, Inventoried" tone="tint">
        <SpecList
          rows={[
            { k: "Desk", v: "One. Oak. Bought second-hand in 1943 and never replaced." },
            { k: "Chairs", v: "Two. He uses one and refuses to explain the other." },
            { k: "Telephone", v: `ENrichment 9-0943, extension 1` },
            { k: "Window", v: "Painted shut. Four thousand feet of rock behind it." },
            { k: "Filing cabinet", v: "Not on the inventory" },
            { k: "Recording apparatus", v: "One. Runs at all hours. Nobody transcribes it but her." },
            { k: "Second door", v: <Redacted reason="No key issued. No key requested.">Locked</Redacted> },
          ]}
        />
      </Panel>

      <Notice head="A Standing Instruction From This Office">
        Anyone in this company may walk into this room and say anything to the man behind the desk. Anyone
        who does so and is then punished for it should report the punishment to the man behind the desk,
        who will deal with it personally, and has, four times.
      </Notice>

      <ClearanceGate level={3} hint="Personnel who have been paying attention will find the file. It is filed under her first name, because she has never given anyone the other one.">
        <Grid size="two">
          {OFFICE.pages.map((p) => (
            <Card key={p.path} href={p.path} no={`Form ${p.form}`} title={p.nav ?? p.title} icon="handshake">
              {p.blurb}
            </Card>
          ))}
        </Grid>
      </ClearanceGate>

      <Marginalia>
        The window is painted shut because the President had it painted shut. It faces solid rock. He says
        he likes knowing it is there.
      </Marginalia>

      <Row style={{ gap: "1.5rem" }}>
        <Pictogram name="elevator" size={62} title="Third floor" style={{ color: "var(--ink-3)" }} />
        <PenNote tone="pencil" angle={-1.3}>
          If he is not in the office he is in the machine shop. If he is not in the machine shop he is at the
          substrate bench. If he is at the substrate bench, come and get me. &mdash; C.
        </PenNote>
      </Row>

      <Rule variant="fat" />

      <Signature note={`Office of the President, ${COMPANY.address.line3}. Extension 1.`} />

      <FinePrint tiny>
        Form ASI-Ω-09. This sheet is not in the printed directory and never has been. The Records Department
        has been told it is a courtesy sheet and has stopped asking.
      </FinePrint>

      <Scrawl href="/vault">
        the locked door isnt a door. ive been on the other side. theres a whole building on the other side
      </Scrawl>

      <p>
        <Link className="ap-caps" style={{ fontSize: "0.68rem" }} href="/the-company/cave-johnson">
          ← A word from the President
        </Link>
      </p>
    </Stack>
  );
}

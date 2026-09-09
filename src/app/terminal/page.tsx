import type { Metadata } from "next";
import Link from "next/link";

import { DocHead, PageTitle, Prose } from "@/components/Doc";
import { Stack, Notice, FinePrint, Rule, Row, Placard, PunchTape } from "@/components/Print";
import { AptTerminal } from "@/components/client/AptTerminal";
import { Scrawl } from "@/components/Secret";

export const metadata: Metadata = {
  title: "The Machine",
  description:
    "Aperture Science Interactive Machine, Model 1959. Eleven tons of relays on Sub-Level 4. It cannot add. It can be spoken to.",
  robots: { index: false, follow: true },
};

export default function TerminalPage() {
  return (
    <Stack size="large">
      <DocHead
        doc="ASI-Ω-99"
        department="Computation & Thinking Machines"
        classification="Restricted — Machine Room"
        revision="Sub-Level 4"
      />

      <PageTitle
        kicker="Sub-Level Four"
        title="The Aperture Science Interactive Machine"
        deck={
          <>
            Eleven tons of relays, one punch-card reader, and a teletype the President had installed
            because he wanted to be able to argue with it. It cannot add. It has never been able to add.
            It can, however, be spoken to, and management considers that the more important of the two.
          </>
        }
      />

      <Notice head="Before You Begin">
        The machine is not to be left running unattended, is not to be fed cards from other departments,
        and is not, under any circumstances, to be asked what it thinks.
      </Notice>

      <AptTerminal />

      <Row>
        <Placard tone="warn">Do Not Lean On The Cabinet</Placard>
        <Placard>Relay Bank 4 — 900° F</Placard>
      </Row>

      <Rule variant="dotted" />

      <Prose>
        <p>
          The machine holds eleven documents. Four of them are open to any visitor. The rest are held
          against a personnel grade, which the Personnel Department does not issue and has, in fact, never
          heard of. Grade accumulates on its own, in the ordinary course of paying attention.
        </p>
        <p>
          If the machine will not give you a document, it will tell you what grade the document wants.
          There is more than one way to raise it, and none of them are in the Employee Handbook. Try{" "}
          <code>LOGIN</code> with a name you have read somewhere on these pages.
        </p>
      </Prose>

      <PunchTape>
        ∙∙∙∙ ∙∙∙∙ ∙∙∙∙ ∙∙∙∙ ∙∙∙ ∙∙∙∙∙ ∙∙ ∙∙∙∙ ∙∙∙∙∙∙ ∙∙∙ ∙∙∙∙ ∙∙ ∙∙∙∙∙ ∙∙∙∙ ∙∙ ∙∙∙∙∙∙ ∙∙∙∙ ∙∙∙
      </PunchTape>

      <FinePrint>
        <p>
          Nothing typed into the machine leaves this browser. There is no wire from this page to Upper
          Michigan; there is no Upper Michigan. Your personnel grade is recorded in your own browser&rsquo;s
          storage and is forgotten the moment you clear it.
        </p>
      </FinePrint>

      <Scrawl href="/vault">
        it answers. thats the part nobody wants to write down. it answers
      </Scrawl>

      <p>
        <Link className="ap-caps" style={{ fontSize: "0.68rem" }} href="/">
          ← Return to the lobby
        </Link>
      </p>
    </Stack>
  );
}

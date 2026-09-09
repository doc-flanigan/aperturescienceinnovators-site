import type { Metadata } from "next";
import { SECTIONS } from "@/lib/structure";
import { SectionIndex } from "@/components/SectionIndex";
import { PullQuote, Notice } from "@/components/Print";
import { Scrawl } from "@/components/Secret";

const section = SECTIONS.find((s) => s.path === "/the-company")!;

export const metadata: Metadata = {
  title: "The Company",
  description:
    "Aperture Science Innovators of Upper Michigan: who we are, where we came from, and how much of the Upper Peninsula we have hollowed out to get here.",
};

export default function Page() {
  return (
    <SectionIndex
      section={section}
      doc="ASI-100"
      department="Office of the President"
      kicker="The Company"
      deck={
        <>
          There is a hole in Upper Michigan four thousand feet deep with 1,247 people working in it, and
          every single one of them is here because a man sold two hundred thousand shower curtains to the
          United States Army and did not stop there.
        </>
      }
      icons={{
        "/the-company/cave-johnson": "subject",
        "/the-company/history": "clipboard",
        "/the-company/mission": "atom",
        "/the-company/officers": "handshake",
        "/the-company/upper-michigan": "elevator",
        "/the-company/the-competition": "hazard",
        "/the-company/honors": "heart",
        "/the-company/correspondence": "timer",
      }}
      after={
        <>
          <PullQuote attribution="Cave Johnson, to a reporter who asked what the company does">
            We find out. That&rsquo;s the business. Everything else on the balance sheet is a consequence of
            finding out.
          </PullQuote>
          <Notice head="A Note On This Department">
            The Company file is maintained by the Office of the President, which is to say by the President,
            which is to say it has never once been fact-checked and never will be.
          </Notice>
          <Scrawl href="/office-of-the-president/caroline">
            the third floor is the only floor that still has a light on at night. ask who is up there
          </Scrawl>
        </>
      }
    >
      <p>
        Eight sheets. They cover the founding, the founder, the creed, the officers, the hole itself, the
        outfit in New Mexico, the awards we have won, and how to write to us if you must. Read them in that
        order or do not; the Records Department has given up caring.
      </p>
    </SectionIndex>
  );
}

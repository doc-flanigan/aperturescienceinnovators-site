import type { Metadata } from "next";
import { SECTIONS } from "@/lib/structure";
import { SectionIndex } from "@/components/SectionIndex";
import { Notice, Coupon, Row, Placard, PullQuote } from "@/components/Print";
import { Scrawl } from "@/components/Secret";
import Link from "next/link";

const section = SECTIONS.find((s) => s.path === "/enrichment-center")!;

export const metadata: Metadata = {
  title: "The Enrichment Center",
  description:
    "The Aperture Science Enrichment Center: nine test shafts, sixty dollars cash, and the finest volunteer testing programme in the Republic.",
};

export default function Page() {
  return (
    <SectionIndex
      section={section}
      doc="ASI-300"
      department="Enrichment Center Operations"
      kicker="Four Thousand Feet Down"
      deck={
        <>
          The Enrichment Center is where the science happens and where the volunteers happen to the
          science. Astronauts, war heroes and Olympians especially welcome. Sixty dollars, cash, same day,
          and the finest afternoon of your life whichever way it goes.
        </>
      }
      icons={{
        "/enrichment-center/test-shaft-09": "elevator",
        "/enrichment-center/volunteer": "clipboard",
        "/enrichment-center/test-subjects": "subject",
        "/enrichment-center/chambers": "portal",
        "/enrichment-center/safety": "hazard",
        "/enrichment-center/compensation": "dollar",
        "/enrichment-center/refreshments": "cake",
        "/enrichment-center/rules": "grill",
      }}
      after={
        <>
          <PullQuote big attribution="Cave Johnson, opening address, Test Shaft 09">
            Who&rsquo;s ready to make some science?
          </PullQuote>
          <Row>
            <Placard>Enrichment Center — Sub-Level 1</Placard>
            <Placard tone="warn">Volunteers Report To The Gate</Placard>
            <Placard tone="danger">Chamber 8 — Do Not Enter</Placard>
          </Row>
          <Coupon>
            <p className="ap-caps" style={{ fontSize: "0.66rem", margin: "0 0 0.5rem", color: "var(--spot-orange)" }}>
              Present At The Gate
            </p>
            <p style={{ fontFamily: "var(--font-ad)", fontSize: "var(--step-2)", lineHeight: 1.05, margin: "0 0 0.5rem" }}>
              One Afternoon. Sixty Dollars.
            </p>
            <p style={{ margin: 0 }}>
              <Link className="ap-caps" style={{ fontSize: "0.66rem" }} href="/enrichment-center/volunteer">
                Application Form ASI-302 →
              </Link>
            </p>
          </Coupon>
          <Notice head="The Enrichment Center Reminds You">
            The Enrichment Center is a place of learning, of discovery, and of the occasional loud noise
            from a direction in which there is no equipment.
          </Notice>
          <Scrawl href="/vault/the-dens">
            chamber 8 is fine. chamber 8 has always been fine. thats the part that isnt fine
          </Scrawl>
        </>
      }
    >
      <p>
        Nine shafts have been sunk beneath the Upper Peninsula and eight of them are working. Shaft 09,
        opened this March four months ahead of schedule, is the deepest and the newest and the only one with
        an elevator that goes all the way down without being asked twice.
      </p>
    </SectionIndex>
  );
}

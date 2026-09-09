import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { DocHead, PageTitle, Prose, Lede } from "@/components/Doc";
import {
  Rule, Stamp, Placard, Panel, Notice, PullQuote, FinePrint,
  Coupon, Split, Stack, Row, Marginalia,
} from "@/components/Print";
import { Signature, PenNote } from "@/components/Memo";
import { KeyFigures } from "@/components/Data";
import { Grid, Card } from "@/components/Cards";
import { Advert } from "@/components/Ad";
import { Redacted, Scrawl } from "@/components/Secret";
import { AtomicOrbit } from "@/components/svg/Ornament";

export const metadata: Metadata = {
  title: `${COMPANY.motto}`,
  description:
    "Aperture Science Innovators of Upper Michigan: quantum tunnelling, industrial emulsions, military shower curtains, and the finest volunteer testing programme in the Republic.",
};

export default function FrontPage() {
  return (
    <Stack size="large">
      <DocHead
        doc="ASI-1"
        department="Office of the President"
        classification="Unrestricted — For General Circulation"
        revision={`${COMPANY.publicationSeason} ${COMPANY.year}`}
      />

      {/* ------------------------------------------------------------- */}

      <div className="ap-rel">
        <Stamp float sub={`${COMPANY.publicationSeason} ${COMPANY.year}`}>
          Approved
        </Stamp>
        <PageTitle
          advertising
          kicker={`${COMPANY.name} of Upper Michigan`}
          title={<>We Do What We Must Because We Can</>}
          deck={
            <>
              Fourteen years ago this company sold shower curtains to the United States Army. Today it
              punches holes in the fabric of space for a living and it still sells the curtains, because a
              man does not walk away from a good curtain. This is the {COMPANY.year} edition of our public
              record. Read all of it. Especially the small type.
            </>
          }
          byline={
            <>
              Written, dictated, revised and personally approved by <b>{COMPANY.founder}</b>,{" "}
              {COMPANY.founderTitle}
            </>
          }
        />
      </div>

      <KeyFigures
        items={[
          { value: "1,247", label: "Persons employed", note: "As of the March count" },
          { value: "4,000", label: "Feet below Michigan", note: "And still going" },
          { value: "9", label: "Test shafts sunk", note: "Shaft 09 now open" },
          { value: "$60", label: "Paid per volunteer", note: "Cash. Same day." },
          { value: "31%", label: "Volunteers returned", note: <Redacted reason="Figure under review by Legal">of those who entered</Redacted> },
        ]}
      />

      {/* ------------------------------------------------------------- */}

      <Split weight="wide-left">
        <div>
          <h2 style={{ marginTop: 0 }}>A Word From The President</h2>
          <Prose>
            <Lede>
              Welcome to Aperture. My name is Cave Johnson and I own the place. Not a board, not a bank, not
              a committee of gentlemen in New Mexico who need three years and a federal grant to boil water.
              Me. I own it. That means when I decide this company is going to spend its entire first
              quarter on a machine that makes a hole in one wall come out of another wall, that is what
              happens, and nobody sends me a memo about it.
            </Lede>
            <p>
              People ask what business we are in. I tell them: the business of finding out. That is not a
              slogan the advertising men gave me. That is the actual answer. We started in shower curtains
              because the Army needed curtains and I needed money. We are in quantum tunnelling now because
              one of my physicists spilled something on a curtain and the curtain was briefly in two rooms
              at once. You do not walk away from that. You put a man in front of it and you take notes.
            </p>
            <p>
              The gentlemen in New Mexico will tell you science is careful. Science is a lot of things, and
              careful is one of the ones it can be, on a slow afternoon, when nobody is watching. But science
              is not about <em>why</em>. It is about <em>why not</em>. Why is the moon not made of something
              useful? Why is a man not able to fall through a floor and come out of a ceiling? Why not, we
              said, and then we spent eleven million dollars finding out, and now a man can, and we have the
              footage.
            </p>
            <p>
              You will find, in the pages that follow, a complete accounting of what we make, what we are
              looking into, what we pay, and what we are legally required to disclose. You will also find
              some things we are not legally required to disclose, because I put them in myself and Legal
              only reads the pages with numbers on them.
            </p>
            <p>
              Now go read the catalogue. And if you are between the ages of eighteen and sixty and are in
              general good health, the Enrichment Center is accepting volunteers, and the Enrichment Center
              pays cash.
            </p>
          </Prose>
          <Signature note="Dictated. Transcribed by C. — do not correct his grammar again." />
        </div>

        <Stack>
          <Panel head="Presently Accepting" tone="tint">
            <p style={{ margin: 0, fontSize: "var(--step--1)" }}>
              Astronauts. War heroes. Olympians. Men of demonstrated physical excellence and no immediate
              family obligations. We want the best, and if you are reading this, there is a reasonable
              chance you are it.
            </p>
            <p style={{ marginTop: "0.9rem", marginBottom: 0 }}>
              <Link className="ap-caps" style={{ fontSize: "0.66rem" }} href="/enrichment-center/volunteer">
                Volunteer Application →
              </Link>
            </p>
          </Panel>

          <Row>
            <Placard>Test Shaft 09</Placard>
            <Placard tone="warn">Mind The Gel</Placard>
          </Row>

          <Notice head="The Enrichment Center Reminds You">
            The Enrichment Center is required by law to inform you that participation is voluntary. The
            Enrichment Center is not required by law to inform you of anything else, and will not.
          </Notice>

          <AtomicOrbit
            style={{ width: "100%", maxWidth: 200, color: "var(--spot-blue)", opacity: 0.5, margin: "0 auto", display: "block" }}
          />
        </Stack>
      </Split>

      <PullQuote big attribution={`${COMPANY.founder}, address to the assembled volunteers, Test Shaft 09`}>
        You&rsquo;re here because we want the best, and you are it.
      </PullQuote>

      {/* ------------------------------------------------------------- */}

      <section>
        <h2>What We Make</h2>
        <Prose>
          <p>
            Twelve product lines, four research divisions, and one shower curtain that has outsold every
            other item on this list by a factor of nine hundred. The Materials Department has been informed.
            The Materials Department is taking it poorly.
          </p>
        </Prose>

        <Grid size="two">
          <Card
            href="/products/quantum-tunnelling-device"
            icon="portal-pair"
            no="Form ASI-202"
            title="Portable Quantum Tunnelling Device"
          >
            Two holes, arbitrarily far apart, that share an interior. Legal has asked us to stop calling it a
            door, a gate, a portal, a passage, or &ldquo;the thing.&rdquo;
          </Card>
          <Card href="/products/shower-curtains" icon="curtain" no="Form ASI-201" title="Aperture Fixtures Shower Curtain">
            Vinyl, weighted hem, twelve grommets, rated for military installation and, as of last March, for
            partial spatial displacement.
          </Card>
          <Card href="/products/repulsion-gel" icon="gel-splat" no="Form ASI-203" title="Repulsion Gel">
            Began life as a dietetic pudding substitute. Nobody kept it down. Everybody bounced.
          </Card>
          <Card href="/products/conversion-gel" icon="moon" no="Form ASI-205" title="Conversion Gel">
            Ground lunar substrate in suspension. Finest conductor of quantum tunnelling known to man. Also
            the finest poison. Both facts are on the label.
          </Card>
          <Card href="/products/weighted-storage-cube" icon="cube" no="Form ASI-206" title="Weighted Storage Cube">
            Heavy. Cubical. Stores nothing whatsoever. The Enrichment Center considers this a solved problem.
          </Card>
          <Card href="/products/sentry-turret" icon="turret" no="Form ASI-212" title="Aperture Sentry Turret">
            In development. Speaks in a pleasant voice. The pleasant voice is not, at present, attached to
            anything the Legal Department wishes to describe.
          </Card>
        </Grid>

        <p style={{ marginTop: "1.2rem" }}>
          <Link className="ap-caps" style={{ fontSize: "0.68rem" }} href="/products">
            The complete catalogue →
          </Link>
        </p>
      </section>

      {/* ------------------------------------------------------------- */}

      <Advert
        eyebrow="Since 1943 — Still The Finest Curtain In The Republic"
        head="A Man Is Entitled To A Dry Floor."
        burst="NEW!"
        burstSub="12 GROMMETS"
        action="Order Form ASI-299"
        href="/products/catalogue"
      >
        <p>
          The Aperture Fixtures Shower Curtain hangs true, sheds water, and has never once been recalled by
          the United States Government. Available in Institutional Grey, Institutional Grey (Warm), and, by
          special order, a green nobody has asked for since 1951.
        </p>
      </Advert>

      {/* ------------------------------------------------------------- */}

      <Split>
        <section>
          <h2 style={{ marginTop: 0 }}>From The Bulletin</h2>
          <Stack>
            <div>
              <p className="ap-caps" style={{ fontSize: "0.62rem", color: "var(--spot-orange)", margin: "0 0 0.2rem" }}>
                March 14
              </p>
              <h3 style={{ fontSize: "var(--step-0)", margin: "0 0 0.3rem" }}>Shaft 09 Opens Ahead Of Schedule</h3>
              <p style={{ fontSize: "var(--step--1)", margin: 0 }}>
                The ninth and deepest test shaft accepted its first volunteers on the eleventh, four months
                early. Mr. Johnson credits &ldquo;not asking the engineers how long it would take.&rdquo;
              </p>
            </div>
            <div>
              <p className="ap-caps" style={{ fontSize: "0.62rem", color: "var(--spot-orange)", margin: "0 0 0.2rem" }}>
                February 28
              </p>
              <h3 style={{ fontSize: "var(--step-0)", margin: "0 0 0.3rem" }}>Lunar Procurement Completed</h3>
              <p style={{ fontSize: "var(--step--1)", margin: 0 }}>
                Materials confirms receipt of the full consignment. Cost per pound is not printed here, on the
                advice of everyone.
              </p>
            </div>
            <div>
              <p className="ap-caps" style={{ fontSize: "0.62rem", color: "var(--spot-orange)", margin: "0 0 0.2rem" }}>
                February 2
              </p>
              <h3 style={{ fontSize: "var(--step-0)", margin: "0 0 0.3rem" }}>Commissary Reopens</h3>
              <p style={{ fontSize: "var(--step--1)", margin: 0 }}>
                Following the incident, and following the second incident, the third-floor commissary has
                reopened with an entirely new ceiling and the same menu.
              </p>
            </div>
          </Stack>
          <p style={{ marginTop: "1.2rem" }}>
            <Link className="ap-caps" style={{ fontSize: "0.66rem" }} href="/bulletin">
              All bulletins →
            </Link>
          </p>
        </section>

        <div>
          <Coupon>
            <p className="ap-caps" style={{ fontSize: "0.66rem", margin: "0 0 0.6rem", color: "var(--spot-orange)" }}>
              Cut Here — Present At The Gate
            </p>
            <p style={{ fontFamily: "var(--font-ad)", fontSize: "var(--step-2)", lineHeight: 1.05, margin: "0 0 0.6rem" }}>
              Sixty Dollars, Cash, Same Day
            </p>
            <p style={{ fontSize: "var(--step--1)", margin: "0 0 0.8rem" }}>
              For one afternoon of your time and the ordinary use of your body. No experience necessary. No
              references required. No next of kin notified.
            </p>
            <p style={{ margin: 0 }}>
              <Link className="ap-caps" style={{ fontSize: "0.66rem" }} href="/enrichment-center/volunteer">
                Application Form ASI-302 →
              </Link>
            </p>
          </Coupon>

          <PenNote tone="pencil" angle={-1.1}>
            Cave — the sixty is now forty. Accounting changed it Tuesday. Please stop having it printed.
          </PenNote>
        </div>
      </Split>

      <Rule variant="fat" />

      {/* ------------------------------------------------------------- */}

      <Marginalia>
        Circulation note: this edition supersedes all previous editions, including the one with the
        recipe in it.
      </Marginalia>

      <FinePrint>
        <p>
          <b>Notice to the reader.</b> Every figure in this publication was accurate at the moment it was
          set in type. Aperture Science Innovators makes no representation that any figure remains accurate,
          that any product described herein exists, or that any volunteer described herein remains
          available for comment. Participation in the Enrichment Center testing programme constitutes
          waiver of{" "}
          <Redacted reason="Struck by counsel, 1954">every right you presently believe yourself to hold</Redacted>{" "}
          and consent to the retention of{" "}
          <Redacted reason="Struck by counsel, 1956">tissue samples in perpetuity</Redacted>. The Enrichment
          Center is not responsible for loss of property, loss of limb, or loss of the conviction that the
          world is arranged sensibly.
        </p>
      </FinePrint>

      <Scrawl href="/vault/the-dens">
        the cake is a lie — the cake is a lie — the cake is a lie — she said there was cake
      </Scrawl>
    </Stack>
  );
}

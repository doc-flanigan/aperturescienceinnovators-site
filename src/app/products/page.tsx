import type { Metadata } from "next";
import { SECTIONS } from "@/lib/structure";
import { SectionIndex } from "@/components/SectionIndex";
import { Advert } from "@/components/Ad";
import { Notice, FinePrint } from "@/components/Print";
import { Redacted, Scrawl } from "@/components/Secret";

const section = SECTIONS.find((s) => s.path === "/products")!;

export const metadata: Metadata = {
  title: "Products & Divisions",
  description:
    "The complete Aperture Science Innovators line: shower curtains, quantum tunnelling devices, industrial gels, storage cubes, faith plates and a turret that is presently very polite.",
};

export default function Page() {
  return (
    <SectionIndex
      section={section}
      doc="ASI-200"
      department="Sales & Manufacturing"
      kicker="The Catalogue"
      title="Products & Divisions"
      deck={
        <>
          Thirteen sheets covering everything this company will sell you, everything it will lease you, and
          two things it will give you free of charge on the condition that you sign the form and do not
          read the form.
        </>
      }
      icons={{
        "/products/shower-curtains": "curtain",
        "/products/quantum-tunnelling-device": "portal-pair",
        "/products/repulsion-gel": "gel",
        "/products/propulsion-gel": "gel-splat",
        "/products/conversion-gel": "moon",
        "/products/weighted-storage-cube": "cube",
        "/products/aerial-faith-plate": "faith-plate",
        "/products/pneumatic-diversity-vent": "fling",
        "/products/material-emancipation-grill": "grill",
        "/products/heimlich-counter-maneuver": "subject",
        "/products/take-a-wish-foundation": "heart",
        "/products/sentry-turret": "turret",
        "/products/catalogue": "dollar",
      }}
      after={
        <>
          <Advert
            eyebrow="Sales & Manufacturing"
            head="If It Is In This Catalogue, We Have Built One."
            burst="ORDER"
            burstSub="TODAY"
            action="Complete Order Form ASI-299"
            href="/products/catalogue"
          >
            <p>
              Aperture Science Innovators does not advertise products it has not built. Aperture Science
              Innovators has, on four occasions, built a product specifically so that it could advertise it.
              The Legal Department regards these as the same policy stated twice.
            </p>
          </Advert>
          <Notice head="The Enrichment Center Reminds You">
            Products marked &ldquo;in development&rdquo; are in development. Products not marked &ldquo;in
            development&rdquo; are also, in a sense, in development. Everything is in development. That is
            what development is.
          </Notice>
          <FinePrint>
            Prices on application. Delivery from the Enrichment Center loading dock, Upper Peninsula. We do
            not ship to New Mexico.{" "}
            <Redacted reason="Struck by Sales, 1955">We know exactly why you are asking.</Redacted>
          </FinePrint>
          <Scrawl href="/vault/combustible-lemons">
            theres a product line that isnt in here. its fruit. thats all im putting on the wall
          </Scrawl>
        </>
      }
    >
      <p>
        The list below is ordered by the year the product entered manufacture, which means it opens with a
        shower curtain and closes with a machine that talks. Nobody in Sales considers this an accident.
      </p>
    </SectionIndex>
  );
}

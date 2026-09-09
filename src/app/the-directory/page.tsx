import type { Metadata } from "next";
import Link from "next/link";

import { COMPANY } from "@/lib/site";
import { SECTIONS, UTILITY_PAGES, VAULT, OFFICE, LOOSE_PAGES } from "@/lib/structure";
import { DocHead, PageTitle, Prose } from "@/components/Doc";
import { Stack, Rule, FinePrint, Panel, Notice } from "@/components/Print";
import { ClearanceGate } from "@/components/client/ClearanceGate";
import { Scrawl } from "@/components/Secret";

export const metadata: Metadata = {
  title: "The Directory",
  description: "Every sheet in the Spring 1959 edition, filed by department.",
};

function DeptList({
  title,
  path,
  pages,
}: {
  title: string;
  path: string;
  pages: { path: string; title: string; nav?: string; blurb?: string; form?: string }[];
}) {
  return (
    <section style={{ breakInside: "avoid" }}>
      <h2 style={{ marginTop: "2rem" }}>
        <Link href={path} style={{ textDecoration: "none", color: "inherit" }}>
          {title}
        </Link>
      </h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, borderTop: "1px solid var(--rule)" }}>
        {pages.map((p) => (
          <li
            key={p.path}
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(5.5rem, 6.5rem) 1fr",
              gap: "0 1rem",
              padding: "0.5rem 0",
              borderBottom: "1px solid var(--rule-faint)",
              margin: 0,
            }}
          >
            <span
              className="ap-type"
              style={{ fontSize: "0.66rem", color: "var(--ink-faint)", letterSpacing: "0.06em", paddingTop: "0.2rem" }}
            >
              {p.form ?? "—"}
            </span>
            <span>
              <Link href={p.path} style={{ fontFamily: "var(--font-grot)", fontWeight: 600, textDecoration: "none" }}>
                {p.title}
              </Link>
              {p.blurb ? (
                <span style={{ display: "block", fontSize: "var(--step--1)", color: "var(--ink-3)", marginTop: "0.1rem" }}>
                  {p.blurb}
                </span>
              ) : null}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function DirectoryPage() {
  return (
    <Stack size="large">
      <DocHead doc="ASI-000" department="Records & Filing" classification="Unrestricted" />
      <PageTitle
        kicker="Records & Filing"
        title="The Directory"
        deck={
          <>
            Every sheet in the {COMPANY.publicationSeason} {COMPANY.year} edition, filed by department and
            numbered by form. If a sheet you were expecting is not listed, it was either withdrawn, never
            printed, or is being held on the far side of a door you have not yet been issued a key to.
          </>
        }
      />

      <Notice head="A Note On Completeness">
        This directory lists what the Records Department will admit to. The Records Department is on the
        second floor. The Records Department has never been to the ninth shaft.
      </Notice>

      {SECTIONS.map((s) => (
        <DeptList key={s.path} title={s.title} path={s.path} pages={s.pages} />
      ))}

      <DeptList title="General" path="/the-directory" pages={UTILITY_PAGES} />

      <Rule variant="fat" />

      <ClearanceGate
        level={3}
        hint="Material below the water table is listed only for personnel who have found their own way to it."
      >
        <Panel head="Not For The Printed Directory" tone="red">
          <p style={{ fontSize: "var(--step--1)" }}>
            You have been issued access to the following. Do not photograph these sheets. Do not discuss
            these sheets in the commissary. Do not, under any circumstances, mention them to Legal.
          </p>
          <DeptList title={VAULT.title} path={VAULT.path} pages={VAULT.pages} />
          <DeptList title={OFFICE.title} path={OFFICE.path} pages={OFFICE.pages} />
          <DeptList title="Machine Access" path="/terminal" pages={LOOSE_PAGES} />
        </Panel>
      </ClearanceGate>

      <FinePrint tiny>
        Filed under Directive 12. Retain until superseded. Superseding editions are issued whenever the
        President reads the previous edition.
      </FinePrint>

      <Scrawl href="/terminal">
        they took the index cards. the shafts arent on the index cards. count the doors instead
      </Scrawl>
    </Stack>
  );
}

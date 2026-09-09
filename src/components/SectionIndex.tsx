import * as React from "react";
import { DocHead, PageTitle, Prose } from "@/components/Doc";
import { Grid, Card } from "@/components/Cards";
import { Stack } from "@/components/Print";
import type { SectionEntry } from "@/lib/site";
import type { PictogramName } from "@/components/svg/Pictogram";

/**
 * The contents sheet at the head of each department's file. Struck from the
 * filing system so a new page appears here the moment it is registered.
 */
export function SectionIndex({
  section,
  doc,
  department,
  kicker,
  title,
  deck,
  classification,
  icons = {},
  children,
  after,
}: {
  section: SectionEntry;
  doc: string;
  department: string;
  kicker?: React.ReactNode;
  title?: React.ReactNode;
  deck?: React.ReactNode;
  classification?: string;
  icons?: Partial<Record<string, PictogramName>>;
  children?: React.ReactNode;
  after?: React.ReactNode;
}) {
  return (
    <Stack size="large">
      <DocHead doc={doc} department={department} classification={classification} />
      <PageTitle
        kicker={kicker ?? department}
        title={title ?? section.title}
        deck={deck ?? section.blurb}
      />
      {children ? <Prose>{children}</Prose> : null}
      <Grid size="two">
        {section.pages.map((p) => (
          <Card
            key={p.path}
            href={p.path}
            no={p.form ? `Form ${p.form}` : undefined}
            title={p.nav ?? p.title}
            icon={icons[p.path]}
          >
            {p.blurb}
          </Card>
        ))}
      </Grid>
      {after}
    </Stack>
  );
}

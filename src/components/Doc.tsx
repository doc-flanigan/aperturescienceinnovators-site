import * as React from "react";
import { COMPANY } from "@/lib/site";

/* =========================================================================
   DOCUMENT FURNITURE
   Every sheet that leaves this building carries a header, a title and a
   responsible party. No exceptions. — Office of Corporate Identity
   ========================================================================= */

export type DocHeadProps = {
  /** Form number, e.g. "ASI-114-C". Invent freely; nobody checks. */
  doc: string;
  department: string;
  /** Free text: "Spring 1957", "14 March 1957", "Undated". */
  date?: string;
  classification?: string;
  revision?: string;
  /** Extra cells, if the form demands them. */
  extra?: { label: string; value: React.ReactNode }[];
};

export function DocHead({
  doc,
  department,
  date = `${COMPANY.publicationSeason} ${COMPANY.year}`,
  classification = "Unrestricted",
  revision,
  extra = [],
}: DocHeadProps) {
  /* Word boundaries matter here: "Unrestricted" contains "restricted", and
     without \b every unrestricted sheet on the site prints its classification
     in the red reserved for the ones that are not. */
  const restricted = /\b(classified|restricted|secret|eyes only|sealed|not for circulation)\b/i.test(
    classification
  );
  const cells: { label: string; value: React.ReactNode; flag?: boolean }[] = [
    { label: "Form No.", value: doc },
    { label: "Department", value: department },
    { label: "Issued", value: date },
    { label: "Classification", value: classification, flag: restricted },
  ];
  if (revision) cells.push({ label: "Revision", value: revision });
  for (const e of extra) cells.push({ label: e.label, value: e.value });

  return (
    <div className="ap-dochead ap-noprint-none">
      {cells.map((c) => (
        <div className="ap-dochead__cell" key={c.label}>
          <span className="ap-dochead__label">{c.label}</span>
          <span className={`ap-dochead__value${c.flag ? " ap-dochead__value--flag" : ""}`}>{c.value}</span>
        </div>
      ))}
    </div>
  );
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return <span className="ap-kicker">{children}</span>;
}

export type PageTitleProps = {
  kicker?: React.ReactNode;
  title: React.ReactNode;
  deck?: React.ReactNode;
  /** Use the advertising didone for the headline. Product pages, mostly. */
  advertising?: boolean;
  byline?: React.ReactNode;
};

export function PageTitle({ kicker, title, deck, advertising, byline }: PageTitleProps) {
  return (
    <header className={`ap-title${advertising ? " ap-title--ad" : ""}`}>
      {kicker ? <Kicker>{kicker}</Kicker> : null}
      <h1 className="ap-title__h">{title}</h1>
      {deck ? <p className="ap-deck">{deck}</p> : null}
      {byline ? <p className="ap-byline">{byline}</p> : null}
    </header>
  );
}

/** The standard attribution. Everything here is written by the boss. */
export function Byline({
  who = COMPANY.founder,
  role = COMPANY.founderTitle,
  note,
}: {
  who?: string;
  role?: string;
  note?: React.ReactNode;
}) {
  return (
    <p className="ap-byline">
      Dictated by <b>{who}</b>, {role}
      {note ? <> &mdash; {note}</> : null}
    </p>
  );
}

/** Running text. Wrap prose in this to get period paragraph indents. */
export function Prose({
  children,
  wide,
  className = "",
}: {
  children: React.ReactNode;
  wide?: boolean;
  className?: string;
}) {
  return (
    <div className={`ap-prose${wide ? " ap-measure-wide" : ""} ${className}`.trim()}>{children}</div>
  );
}

/** First paragraph of a section, set larger, with an initial cap. */
export function Lede({ children, dropcap = true }: { children: React.ReactNode; dropcap?: boolean }) {
  return <p className={`ap-lede${dropcap ? " ap-dropcap" : ""}`}>{children}</p>;
}

export function Section({
  title,
  id,
  number,
  children,
}: {
  title?: React.ReactNode;
  id?: string;
  number?: string | number;
  children: React.ReactNode;
}) {
  return (
    <section id={id}>
      {title ? (
        <h2>
          {number !== undefined ? (
            <span className="ap-tabnum" style={{ color: "var(--ink-faint)", marginRight: "0.5em" }}>
              {number}.
            </span>
          ) : null}
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  );
}

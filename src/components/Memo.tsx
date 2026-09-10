import * as React from "react";
import { COMPANY } from "@/lib/site";

/* =========================================================================
   INTEROFFICE MEMORANDUM
   Typed by the steno pool, carbon to file, initialled by the sender.
   ========================================================================= */

export function Memo({
  to = "All Personnel",
  from = COMPANY.founder,
  re,
  date = `${COMPANY.publicationSeason} ${COMPANY.year}`,
  cc,
  children,
  sign = true,
  stamp,
}: {
  to?: React.ReactNode;
  from?: React.ReactNode;
  re: React.ReactNode;
  date?: React.ReactNode;
  cc?: React.ReactNode;
  children: React.ReactNode;
  sign?: boolean;
  stamp?: React.ReactNode;
}) {
  return (
    <div className="ap-memo">
      {stamp ? <div className="ap-memo__stamp">{stamp}</div> : null}
      <p className="ap-memo__title">Interoffice Memorandum</p>
      <div className="ap-memo__fields">
        <span className="ap-memo__key">To</span>
        <span className="ap-memo__val">{to}</span>
        <span className="ap-memo__key">From</span>
        <span className="ap-memo__val">{from}</span>
        <span className="ap-memo__key">Date</span>
        <span className="ap-memo__val">{date}</span>
        <span className="ap-memo__key">Re</span>
        <span className="ap-memo__val">{re}</span>
        {cc ? (
          <>
            <span className="ap-memo__key">cc</span>
            <span className="ap-memo__val">{cc}</span>
          </>
        ) : null}
      </div>
      <div className="ap-memo__body">{children}</div>
      {sign ? (
        <div className="ap-memo__sign">
          <Signature compact />
        </div>
      ) : null}
    </div>
  );
}

/**
 * The facsimile signature. Mr. Johnson signs everything personally, which is
 * to say he signed one card in 1949 and the print shop has been photographing
 * it ever since.
 */
export function Signature({
  name = COMPANY.founder,
  title = COMPANY.founderTitle,
  note,
  compact,
}: {
  name?: string;
  title?: string;
  note?: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <div className="ap-sign">
      <span
        aria-hidden="true"
        style={{
          display: "block",
          fontFamily: "var(--font-sign)",
          fontSize: compact ? "2.1rem" : "2.9rem",
          lineHeight: 1,
          color: "var(--spot-blue)",
          transform: "rotate(-2.2deg)",
          transformOrigin: "left bottom",
          marginBottom: "0.15rem",
          whiteSpace: "nowrap",
        }}
      >
        {name}
      </span>
      <div className="ap-sign__rule" />
      <p className="ap-sign__name">
        <b>{name}</b>
        {title}
        {note ? <span style={{ display: "block" }}>{note}</span> : null}
      </p>
    </div>
  );
}

/** A note scribbled on the page in pencil by whoever handled it last. */
export function PenNote({
  children,
  tone = "ink",
  angle = -1.4,
}: {
  children: React.ReactNode;
  tone?: "ink" | "pencil" | "red";
  angle?: number;
}) {
  const color = tone === "red" ? "var(--spot-red)" : tone === "pencil" ? "var(--ink-3)" : "var(--spot-blue)";
  return (
    <p
      style={{
        fontFamily: "var(--font-hand)",
        fontSize: "1.28rem",
        lineHeight: 1.32,
        color,
        transform: `rotate(${angle}deg)`,
        margin: "1.1rem 0",
        maxWidth: "34ch",
        textIndent: 0,
      }}
    >
      {children}
    </p>
  );
}

import * as React from "react";
import Link from "next/link";

/* =========================================================================
   MATERIAL NOT INTENDED FOR GENERAL CIRCULATION
   If you are reading this comment you are already further in than most.
   ========================================================================= */

/**
 * Redaction bar. The Legal Department blacks it out; hovering or focusing
 * un-blacks it, because the Legal Department has never once been given a
 * budget for anything that actually works.
 */
export function Redacted({ children, reason }: { children: React.ReactNode; reason?: string }) {
  return (
    <span className="ap-redact" tabIndex={0} title={reason ?? "Withheld under Directive 12"}>
      {children}
    </span>
  );
}

/** Something written on the wall by somebody who should not have been down there. */
export function Scrawl({ children, href }: { children: React.ReactNode; href?: string }) {
  const content = <span style={{ fontFamily: "var(--font-hand)", fontSize: "1.05rem" }}>{children}</span>;
  if (href) {
    return (
      <Link className="ap-scrawl" href={href} aria-label="An inscription on the wall">
        {content}
      </Link>
    );
  }
  return <span className="ap-scrawl">{content}</span>;
}

/** Machine output. Green phosphor, in a building that will not have any for years. */
export function Terminal({ children, label }: { children: React.ReactNode; label?: React.ReactNode }) {
  return (
    <div className="ap-terminal" role="figure" aria-label={typeof label === "string" ? label : "Machine output"}>
      <pre>{children}</pre>
    </div>
  );
}

import * as React from "react";
import Link from "next/link";
import { Starburst } from "@/components/svg/Ornament";

/* =========================================================================
   THE ADVERTISEMENT
   Mr. Johnson's view is that a page without an advertisement on it is a page
   the shareholders paid for twice.
   ========================================================================= */

export function Advert({
  eyebrow,
  head,
  children,
  burst,
  burstSub,
  action,
  href,
}: {
  eyebrow?: React.ReactNode;
  head: React.ReactNode;
  children?: React.ReactNode;
  burst?: string;
  burstSub?: string;
  action?: React.ReactNode;
  href?: string;
}) {
  return (
    <aside className="ap-ad">
      {burst ? <Starburst className="ap-ad__burst" label={burst} sub={burstSub} /> : null}
      {eyebrow ? <p className="ap-ad__eyebrow">{eyebrow}</p> : null}
      <p className="ap-ad__head">{head}</p>
      {children ? <div className="ap-ad__copy">{children}</div> : null}
      {action && href ? (
        <p style={{ marginTop: "1.1rem", marginBottom: 0 }}>
          <Link
            href={href}
            className="ap-caps"
            style={{
              display: "inline-block",
              border: "2px solid var(--ink)",
              padding: "0.5rem 1.1rem",
              fontSize: "0.68rem",
              textDecoration: "none",
              color: "var(--ink)",
              background: "var(--paper)",
            }}
          >
            {action}
          </Link>
        </p>
      ) : null}
    </aside>
  );
}

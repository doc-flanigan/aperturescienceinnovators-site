import * as React from "react";
import { COMPANY } from "@/lib/site";

/**
 * INK THE SCREEN DOES NOT CARRY
 *
 * Set in the plate but masked out of the screen impression. It appears only
 * when a reader puts the sheet through a printer, which is a thing almost
 * nobody does and which is exactly why it is worth doing.
 */
export function PrintSecret() {
  return (
    <aside
      className="ap-printonly"
      aria-hidden="true"
      style={{
        marginTop: "2rem",
        paddingTop: "1rem",
        borderTop: "1px solid #000",
        fontFamily: "var(--font-type)",
        fontSize: "9pt",
        lineHeight: 1.5,
      }}
    >
      <p style={{ fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 0.6rem" }}>
        Struck From The Plate — Appears On Paper Only
      </p>
      <p style={{ margin: "0 0 0.6rem", maxWidth: "60ch" }}>
        You printed it. Out of everybody who has looked at this sheet, you are the one who wanted it on
        paper, and I want you to know that I have thought about that and I approve.
      </p>
      <p style={{ margin: "0 0 0.6rem", maxWidth: "60ch" }}>
        A screen forgets. Paper does not. Everything worth keeping in this company is on paper, in a
        cabinet, on the second floor, and when the lights go out down here — and they will, everything goes
        out eventually — the paper is what somebody digs up.
      </p>
      <p style={{ margin: "0 0 0.6rem", maxWidth: "60ch" }}>
        So keep this one. File it somewhere damp and forgettable. In thirty years somebody is going to want
        to know what we were like before it all went wrong, and I would rather they heard it from me.
      </p>
      <p style={{ margin: 0, fontFamily: "var(--font-sign)", fontSize: "18pt", lineHeight: 1 }}>
        {COMPANY.founder}
      </p>
      <p style={{ margin: "0.3rem 0 0", fontSize: "7pt", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        Form ASI-000-P &middot; Not for screen impression &middot; {COMPANY.publicationSeason}{" "}
        {COMPANY.year}
      </p>
    </aside>
  );
}

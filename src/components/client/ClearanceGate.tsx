"use client";

import * as React from "react";
import { gradeName, readClearance, subscribeClearance } from "@/lib/clearance";

/**
 * Content behind a clearance grade. Renders the locked plate on the server so
 * there is no flash of privileged material, then checks the visitor's own
 * records after mount.
 */
export function ClearanceGate({
  level,
  children,
  hint,
}: {
  level: number;
  children: React.ReactNode;
  hint?: React.ReactNode;
}) {
  const [have, setHave] = React.useState<number | null>(null);

  React.useEffect(() => {
    setHave(readClearance());
    return subscribeClearance(setHave);
  }, []);

  if (have === null) {
    return (
      <div className="ap-locked" suppressHydrationWarning>
        Verifying personnel file&hellip;
      </div>
    );
  }

  if (have >= level) return <>{children}</>;

  return (
    <div className="ap-locked">
      Restricted &mdash; {gradeName(level)} clearance or above
      <small>
        Your file reads: {gradeName(have)}.{" "}
        {hint ?? "Advancement is available to personnel who take an interest in their surroundings."}
      </small>
    </div>
  );
}

/** A small badge for the footer showing where the visitor currently stands. */
export function ClearanceBadge() {
  const [have, setHave] = React.useState<number | null>(null);
  React.useEffect(() => {
    setHave(readClearance());
    return subscribeClearance(setHave);
  }, []);
  if (have === null) return null;
  return (
    <span title="Recorded on this machine only.">
      Personnel grade: <b style={{ color: "var(--ink-2)" }}>{gradeName(have)}</b>
    </span>
  );
}

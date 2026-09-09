/* =========================================================================
   PERSONNEL CLEARANCE — CLIENT SIDE ONLY
   Clearance is recorded on the visitor's own equipment. The Enrichment
   Center does not retain it, transmit it, or admit to its existence.
   ========================================================================= */

export const CLEARANCE_KEY = "asi.personnel.clearance";
export const CLEARANCE_EVENT = "asi:clearance";

export const GRADES = [
  "Visitor",
  "Volunteer",
  "Junior Associate",
  "Test Associate",
  "Senior Associate",
  "Vault Access",
  "Office of the President",
] as const;

export const MAX_GRADE = GRADES.length - 1;

export function gradeName(level: number): string {
  return GRADES[Math.max(0, Math.min(MAX_GRADE, level))];
}

export function readClearance(): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = window.localStorage.getItem(CLEARANCE_KEY);
    const n = raw ? Number.parseInt(raw, 10) : 0;
    return Number.isFinite(n) ? Math.max(0, Math.min(MAX_GRADE, n)) : 0;
  } catch {
    return 0;
  }
}

/** Raise clearance to at least `level`. Clearance is never revoked. Legally, it cannot be. */
export function grantClearance(level: number, reason?: string): number {
  if (typeof window === "undefined") return 0;
  const current = readClearance();
  const next = Math.max(current, Math.max(0, Math.min(MAX_GRADE, level)));
  try {
    window.localStorage.setItem(CLEARANCE_KEY, String(next));
  } catch {
    /* The visitor has disabled storage. The visitor remains a Visitor. */
  }
  window.dispatchEvent(
    new CustomEvent(CLEARANCE_EVENT, { detail: { level: next, raised: next > current, reason } })
  );
  return next;
}

export function revokeClearance(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(CLEARANCE_KEY);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent(CLEARANCE_EVENT, { detail: { level: 0, raised: false, reason: "revoked" } }));
}

export function subscribeClearance(fn: (level: number) => void): () => void {
  if (typeof window === "undefined") return () => {};
  const handler = () => fn(readClearance());
  window.addEventListener(CLEARANCE_EVENT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(CLEARANCE_EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}

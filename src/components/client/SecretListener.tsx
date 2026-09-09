"use client";

import * as React from "react";
import Link from "next/link";
import { MAX_GRADE, grantClearance, readClearance } from "@/lib/clearance";

type Slip = { id: number; head: string; body: string; href?: string; cta?: string };

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

/**
 * Words a visitor might type while standing in a lobby. The Enrichment Center
 * is not listening. The Enrichment Center is simply very good at anticipating.
 */
const PHRASES: { word: string; grade: number; head: string; body: string; href?: string; cta?: string }[] = [
  {
    word: "cake",
    grade: 1,
    head: "Refreshment Requisition Filed",
    body: "Your request has been logged with the Enrichment Center commissary. The cake is real. The cake has always been real. Do not let anyone tell you otherwise.",
    href: "/enrichment-center/refreshments",
    cta: "Collect refreshment",
  },
  {
    word: "lemons",
    grade: 2,
    head: "Combustible Materials Division",
    body: "You have accessed a research programme that does not exist yet. Mr. Johnson would like a word about what life has been giving you lately.",
    href: "/vault/combustible-lemons",
    cta: "Open the sealed folder",
  },
  {
    word: "caroline",
    grade: 3,
    head: "The President's Office",
    body: "Caroline is not at her desk. Caroline is never not at her desk. Somebody should look into that.",
    href: "/office-of-the-president/caroline",
    cta: "See her file",
  },
  {
    word: "rattmann",
    grade: 3,
    head: "Employee File Located",
    body: "That name is not on any 1957 payroll. It will be. Follow the marks on the wall.",
    href: "/vault/the-dens",
    cta: "Follow the marks",
  },
  {
    word: "portal",
    grade: 2,
    head: "Quantum Tunnelling Division",
    body: "The Aperture Science Portable Quantum Tunnelling Device is not a portal. Legal has been extremely clear about this. It is a hole. Holes are not patentable. Portals are.",
    href: "/products/quantum-tunnelling-device",
    cta: "See the device",
  },
  {
    word: "glados",
    grade: 5,
    head: "Genetic Lifeform And Disk Operating System",
    body: "That is not a word. That is an acronym for a project that has not been named yet, by people who have not been hired yet, to solve a problem Mr. Johnson has not admitted to having.",
    href: "/vault/project-9",
    cta: "Read the proposal",
  },
  {
    word: "borealis",
    grade: 4,
    head: "Marine Division",
    body: "The vessel is in dry dock. The vessel has been in dry dock for some time. Nobody has been able to confirm which dry dock.",
    href: "/vault/borealis",
    cta: "Consult the manifest",
  },
];

export function SecretListener() {
  const [slips, setSlips] = React.useState<Slip[]>([]);
  const idRef = React.useRef(0);
  const konamiRef = React.useRef(0);
  const bufRef = React.useRef("");
  const firedRef = React.useRef<Set<string>>(new Set());

  const push = React.useCallback((s: Omit<Slip, "id">) => {
    idRef.current += 1;
    const id = idRef.current;
    setSlips((prev) => [...prev.filter((p) => p.head !== s.head), { id, ...s }]);
  }, []);

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;
      if (target && target.isContentEditable) return;

      /* --- the sequence every visitor already knows --- */
      const want = KONAMI[konamiRef.current];
      const got = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (got === want) {
        konamiRef.current += 1;
        if (konamiRef.current === KONAMI.length) {
          konamiRef.current = 0;
          grantClearance(MAX_GRADE, "konami");
          push({
            head: "Office of the President — Clearance Granted",
            body:
              "Well, would you look at that. You pressed the buttons in the right order. That is the entire job, friend. Every door in this building is now yours. Try not to open the ones marked with a skull.",
            href: "/vault",
            cta: "Open the vault",
          });
        }
      } else {
        konamiRef.current = got === KONAMI[0] ? 1 : 0;
      }

      /* --- and the words --- */
      if (e.key.length === 1 && /[a-z]/i.test(e.key)) {
        bufRef.current = (bufRef.current + e.key.toLowerCase()).slice(-24);
        for (const p of PHRASES) {
          if (bufRef.current.endsWith(p.word) && !firedRef.current.has(p.word)) {
            firedRef.current.add(p.word);
            grantClearance(Math.max(readClearance(), p.grade), `typed:${p.word}`);
            push({ head: p.head, body: p.body, href: p.href, cta: p.cta });
          }
        }
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [push]);

  if (slips.length === 0) return null;

  return (
    <div className="ap-slips ap-noprint" aria-live="polite">
      {slips.map((s) => (
        <div className="ap-slip" key={s.id} role="status">
          <button
            type="button"
            className="ap-slip__x"
            aria-label="Dismiss notice"
            onClick={() => setSlips((prev) => prev.filter((p) => p.id !== s.id))}
          >
            ×
          </button>
          <p className="ap-slip__head">{s.head}</p>
          <p className="ap-slip__body">{s.body}</p>
          {s.href ? (
            <Link className="ap-slip__cta" href={s.href} onClick={() => setSlips((prev) => prev.filter((p) => p.id !== s.id))}>
              {s.cta ?? "Proceed"} →
            </Link>
          ) : null}
          <p className="ap-slip__foot">Aperture Science Innovators &middot; Form ASI-777 &middot; Retain for your records</p>
        </div>
      ))}
    </div>
  );
}

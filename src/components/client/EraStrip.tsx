"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ERAS, ERA_ORDER, eraForPath } from "@/lib/eras";

/**
 * The drawer of printings. One tab per edition, the one you are holding
 * reversed out. Records asks that you return each sheet to its own year.
 */
export function EraStrip() {
  const pathname = usePathname() ?? "/";
  const current = eraForPath(pathname);
  return (
    <nav className="ap-era-strip ap-noprint" aria-label="Printings held by Records">
      {ERA_ORDER.map((k) => {
        const e = ERAS[k];
        const here = current.key === k && k !== "1959";
        return (
          <Link
            key={k}
            className="ap-era-strip__item"
            href={e.prefix}
            aria-current={here ? "true" : undefined}
          >
            <b>{e.nav}</b>
            {e.edition}
          </Link>
        );
      })}
    </nav>
  );
}

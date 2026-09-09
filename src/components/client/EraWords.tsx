"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { eraForPath } from "@/lib/eras";

/**
 * The wordmark and the right-hand block, which change with the printing.
 * Rendered as the 1959 masthead on the server and corrected after mount, so
 * the front of house never flashes a later name.
 */
export function EraWords() {
  const pathname = usePathname() ?? "/";
  const era = eraForPath(pathname);
  return (
    <>
      <div className="ap-masthead__words">
        <Link href={era.prefix} className="ap-masthead__name">
          {era.name}
        </Link>
        <span className="ap-masthead__sub">{era.sub}</span>
        <span className="ap-masthead__motto">{era.motto}</span>
      </div>
      <div className="ap-masthead__est">
        <b>{era.est}</b>
        {era.place}
        <br />
        {era.contact}
      </div>
    </>
  );
}

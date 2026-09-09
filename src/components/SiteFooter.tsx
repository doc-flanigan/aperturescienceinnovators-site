import * as React from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/site";
import { SECTIONS, UTILITY_PAGES } from "@/lib/structure";
import { Lamp } from "@/components/client/Lamp";
import { ClearanceBadge } from "@/components/client/ClearanceGate";
import { ApertureMark } from "@/components/svg/ApertureMark";

export function SiteFooter() {
  const cols = SECTIONS.slice(0, 4);
  const rest = SECTIONS.slice(4);

  return (
    <footer className="ap-foot">
      <div className="ap-foot__inner">
        <div className="ap-foot__cols">
          {cols.map((s) => (
            <div key={s.path}>
              <p className="ap-foot__head">{s.nav}</p>
              <ul className="ap-foot__list">
                {s.pages.slice(0, 6).map((p) => (
                  <li key={p.path}>
                    <Link href={p.path}>{p.nav ?? p.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="ap-foot__head">Also</p>
            <ul className="ap-foot__list">
              {rest.map((s) => (
                <li key={s.path}>
                  <Link href={s.path}>{s.nav}</Link>
                </li>
              ))}
              {UTILITY_PAGES.map((p) => (
                <li key={p.path}>
                  <Link href={p.path}>{p.nav ?? p.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ap-colophon">
          <div style={{ display: "flex", gap: "0.9rem", alignItems: "flex-start", maxWidth: "34rem" }}>
            <ApertureMark style={{ width: 42, height: 42, flex: "0 0 auto", color: "var(--ink-faint)" }} />
            <div>
              <p>
                {COMPANY.address.line1} &middot; {COMPANY.address.line2} &middot; {COMPANY.address.line3}
              </p>
              <p>
                Telephone {COMPANY.telephone} &middot; Cable address {COMPANY.cable}
              </p>
              <p>
                Form ASI-1 &middot; {COMPANY.publicationSeason} {COMPANY.year} printing &middot; 40M copies &middot;
                Printed in the U.S.A. by the Enrichment Center Press
              </p>
              <p style={{ color: "var(--ink-ghost)" }}>
                A fan work. Portal, Aperture Science and Cave Johnson are the property of Valve Corporation.
                Not affiliated with, endorsed by, or of any interest whatsoever to Valve.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem", alignItems: "flex-start" }}>
            <Lamp />
            <ClearanceBadge />
            <span style={{ color: "var(--ink-ghost)" }}>
              {/* If you are reading the source, try /terminal. */}
              &copy; {COMPANY.year} {COMPANY.name}. All rights reserved, several twice.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

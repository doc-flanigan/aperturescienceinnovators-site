import * as React from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/site";
import { MastheadMark } from "@/components/client/MastheadMark";
import { PrimaryNav, SectionNav } from "@/components/client/PrimaryNav";

export function SiteHeader() {
  return (
    <header className="ap-masthead">
      <div className="ap-masthead__top">
        <div className="ap-masthead__mark">
          <MastheadMark />
        </div>
        <div className="ap-masthead__words">
          <Link href="/" className="ap-masthead__name">
            Aperture Science
          </Link>
          <span className="ap-masthead__sub">Innovators</span>
          <span className="ap-masthead__motto">{COMPANY.motto}</span>
        </div>
        <div className="ap-masthead__est">
          <b>Established {COMPANY.founded}</b>
          Upper Michigan, U.S.A.
          <br />
          Telephone {COMPANY.telephone}
        </div>
      </div>
      <div className="ap-masthead__rules" aria-hidden="true" />
      <PrimaryNav />
      <SectionNav />
    </header>
  );
}

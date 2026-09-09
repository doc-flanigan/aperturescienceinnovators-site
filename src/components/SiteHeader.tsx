import * as React from "react";
import { MastheadMark } from "@/components/client/MastheadMark";
import { PrimaryNav, SectionNav } from "@/components/client/PrimaryNav";
import { EraWords } from "@/components/client/EraWords";

export function SiteHeader() {
  return (
    <header className="ap-masthead">
      <div className="ap-masthead__top">
        <div className="ap-masthead__mark">
          <MastheadMark />
        </div>
        <EraWords />
      </div>
      <div className="ap-masthead__rules" aria-hidden="true" />
      <PrimaryNav />
      <SectionNav />
    </header>
  );
}

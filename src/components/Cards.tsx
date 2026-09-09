import * as React from "react";
import Link from "next/link";
import { Pictogram, type PictogramName } from "@/components/svg/Pictogram";

/* =========================================================================
   INDEX CARDS AND CATALOGUE LISTINGS
   ========================================================================= */

export function Grid({
  children,
  size = "normal",
}: {
  children: React.ReactNode;
  size?: "normal" | "wide" | "two";
}) {
  const cls = size === "wide" ? "ap-grid ap-grid--wide" : size === "two" ? "ap-grid ap-grid--2" : "ap-grid";
  return <div className={cls}>{children}</div>;
}

export function Card({
  href,
  no,
  title,
  icon,
  children,
  more,
}: {
  href?: string;
  no?: React.ReactNode;
  title: React.ReactNode;
  icon?: PictogramName;
  children?: React.ReactNode;
  more?: React.ReactNode;
}) {
  const inner = (
    <>
      {icon ? (
        <Pictogram
          name={icon}
          size={36}
          style={{ color: "var(--ink-3)", marginBottom: "0.15rem" }}
        />
      ) : null}
      {no ? <span className="ap-card__no">{no}</span> : null}
      <h3 className="ap-card__title">{title}</h3>
      {children ? <div className="ap-card__body">{children}</div> : null}
      {href ? <span className="ap-card__more">{more ?? "See page →"}</span> : null}
    </>
  );
  if (href) {
    return (
      <Link className="ap-card" href={href}>
        {inner}
      </Link>
    );
  }
  return <div className="ap-card">{inner}</div>;
}

import * as React from "react";

/* =========================================================================
   PRESSROOM DEVICES
   Rules, stamps, placards, panels and the other things a print shop can do
   to a sheet of paper. Use them. That is what they are for.
   ========================================================================= */

export function Rule({
  variant = "plain",
  ornament,
  style,
}: {
  variant?: "hair" | "plain" | "thick" | "double" | "dotted" | "fat" | "ornament";
  ornament?: React.ReactNode;
  style?: React.CSSProperties;
}) {
  if (variant === "ornament") {
    return (
      <div className="ap-rule ap-rule--ornament" style={style} role="separator">
        <span aria-hidden="true" style={{ fontSize: "0.8rem", letterSpacing: "0.3em" }}>
          {ornament ?? "◆"}
        </span>
      </div>
    );
  }
  return <hr className={`ap-rule ap-rule--${variant}`} style={style} />;
}

export function Stamp({
  children,
  sub,
  tone = "red",
  size = "normal",
  angle = "left",
  float,
  style,
}: {
  children: React.ReactNode;
  sub?: React.ReactNode;
  tone?: "red" | "blue" | "green" | "black";
  size?: "normal" | "big";
  angle?: "left" | "right" | "straight";
  float?: boolean;
  style?: React.CSSProperties;
}) {
  const cls = [
    "ap-stamp",
    tone !== "red" ? `ap-stamp--${tone}` : "",
    size === "big" ? "ap-stamp--big" : "",
    angle === "right" ? "ap-stamp--tilt-r" : angle === "straight" ? "ap-stamp--straight" : "",
    float ? "ap-stamp--float" : "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <span className={cls} style={style}>
      {children}
      {sub ? <span className="ap-stamp__sub">{sub}</span> : null}
    </span>
  );
}

/** The enamel signs bolted to the wall down in the shafts. */
export function Placard({
  children,
  tone = "default",
  style,
}: {
  children: React.ReactNode;
  tone?: "default" | "warn" | "danger";
  style?: React.CSSProperties;
}) {
  return (
    <span className={`ap-placard${tone !== "default" ? ` ap-placard--${tone}` : ""}`} style={style}>
      {children}
    </span>
  );
}

export function Panel({
  head,
  children,
  tone = "default",
  style,
  id,
}: {
  head?: React.ReactNode;
  children: React.ReactNode;
  tone?: "default" | "tint" | "rule" | "blue" | "red";
  style?: React.CSSProperties;
  id?: string;
}) {
  return (
    <div id={id} className={`ap-panel${tone !== "default" ? ` ap-panel--${tone}` : ""}`} style={style}>
      {head ? <p className="ap-panel__head">{head}</p> : null}
      {children}
    </div>
  );
}

/** "THE ENRICHMENT CENTER REMINDS YOU..." */
export function Notice({ head, children }: { head?: React.ReactNode; children: React.ReactNode }) {
  return (
    <aside className="ap-notice">
      {head ? <span className="ap-notice__head">{head}</span> : null}
      <div className="ap-notice__body">{children}</div>
    </aside>
  );
}

export function Aside({ children }: { children: React.ReactNode }) {
  return <div className="ap-aside">{children}</div>;
}

/** A note in the margin, in the boss's own hand where the boss is available. */
export function Marginalia({ children }: { children: React.ReactNode }) {
  return <div className="ap-marginalia">{children}</div>;
}

export function PullQuote({
  children,
  attribution,
  big,
}: {
  children: React.ReactNode;
  attribution?: React.ReactNode;
  big?: boolean;
}) {
  return (
    <figure className={`ap-pullquote${big ? " ap-pullquote--big" : ""}`}>
      <blockquote className="ap-pullquote__q" style={{ border: 0, padding: 0, margin: 0 }}>
        &ldquo;{children}&rdquo;
      </blockquote>
      {attribution ? <figcaption className="ap-pullquote__a">&mdash; {attribution}</figcaption> : null}
    </figure>
  );
}

export function FinePrint({ children, tiny }: { children: React.ReactNode; tiny?: boolean }) {
  return <div className={`ap-fineprint${tiny ? " ap-fineprint--tiny" : ""}`}>{children}</div>;
}

export function Coupon({ children }: { children: React.ReactNode }) {
  return <div className="ap-coupon">{children}</div>;
}

export function IndexCard({ children }: { children: React.ReactNode }) {
  return <div className="ap-indexcard">{children}</div>;
}

export function Stub({ head, children }: { head?: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="ap-stub">
      {head ? <b>{head}</b> : null}
      {children}
    </span>
  );
}

/** A run of punch-card holes. Selectable, in case anyone wants to read it. */
export function PunchTape({ children }: { children: React.ReactNode }) {
  return <div className="ap-punch">{children}</div>;
}

export function Columns({ count = 2, children }: { count?: 2 | 3; children: React.ReactNode }) {
  return <div className={`ap-cols ap-cols--${count}`}>{children}</div>;
}

export function Split({
  children,
  weight = "even",
}: {
  children: React.ReactNode;
  weight?: "even" | "wide-left" | "wide-right";
}) {
  return <div className={`ap-split${weight !== "even" ? ` ap-split--${weight}` : ""}`}>{children}</div>;
}

export function Stack({
  children,
  size = "normal",
  className = "",
}: {
  children: React.ReactNode;
  size?: "normal" | "large";
  className?: string;
}) {
  return <div className={`${size === "large" ? "ap-stack-lg" : "ap-stack"} ${className}`.trim()}>{children}</div>;
}

export function Row({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div className="ap-row" style={style}>
      {children}
    </div>
  );
}

import * as React from "react";

/* =========================================================================
   TABLES, FIGURES AND SPECIFICATIONS
   Numbers reassure the investor. Supply numbers.
   ========================================================================= */

export type TableColumn = {
  key: string;
  head: React.ReactNode;
  /** Right-align and use tabular figures. */
  numeric?: boolean;
  width?: string;
};

export function FigureTable({
  caption,
  columns,
  rows,
  foot,
}: {
  caption?: React.ReactNode;
  columns: TableColumn[];
  rows: Record<string, React.ReactNode>[];
  foot?: React.ReactNode;
}) {
  return (
    <div className="ap-table-wrap">
      <table className="ap-table">
        {caption ? <caption>{caption}</caption> : null}
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} scope="col" className={c.numeric ? "ap-num" : undefined} style={c.width ? { width: c.width } : undefined}>
                {c.head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {columns.map((c) => (
                <td key={c.key} className={c.numeric ? "ap-num" : undefined}>
                  {r[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {foot ? (
        <p className="ap-fineprint" style={{ marginTop: "0.6rem" }}>
          {foot}
        </p>
      ) : null}
    </div>
  );
}

/** Key/value specification run — the backbone of the product catalogue. */
export function SpecList({ rows }: { rows: { k: React.ReactNode; v: React.ReactNode }[] }) {
  return (
    <dl className="ap-spec">
      {rows.map((r, i) => (
        <div className="ap-spec__row" key={i}>
          <dt className="ap-spec__k">{r.k}</dt>
          <dd className="ap-spec__v" style={{ margin: 0 }}>
            {r.v}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function Plate({
  children,
  number,
  caption,
  tint,
}: {
  children: React.ReactNode;
  number?: React.ReactNode;
  caption?: React.ReactNode;
  tint?: boolean;
}) {
  return (
    <figure className="ap-figure" style={tint ? { background: "var(--paper-deep)" } : undefined}>
      <div className="ap-figure__plate">{children}</div>
      {caption || number ? (
        <figcaption>
          {number ? <b>Fig. {number}. </b> : null}
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

/** A row of numbers with labels, as on the cover of an annual report. */
export function KeyFigures({ items }: { items: { value: React.ReactNode; label: React.ReactNode; note?: React.ReactNode }[] }) {
  return (
    <div
      className="ap-grid"
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(9rem, 1fr))` }}
    >
      {items.map((it, i) => (
        <div className="ap-card" key={i} style={{ gap: "0.2rem" }}>
          <span
            className="ap-tabnum"
            style={{
              fontFamily: "var(--font-ad)",
              fontSize: "var(--step-3)",
              fontWeight: 700,
              lineHeight: 1,
              color: "var(--ink)",
            }}
          >
            {it.value}
          </span>
          <span className="ap-caps" style={{ fontSize: "0.6rem", color: "var(--ink-3)" }}>
            {it.label}
          </span>
          {it.note ? (
            <span style={{ fontSize: "0.66rem", color: "var(--ink-faint)", fontFamily: "var(--font-type)" }}>{it.note}</span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

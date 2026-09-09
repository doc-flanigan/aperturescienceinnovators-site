import * as React from "react";

/* =========================================================================
   FORMS
   A form is a promise the applicant makes to us. It is not a promise we
   make to the applicant. — Legal Department
   ========================================================================= */

export function FormBlock({ children }: { children: React.ReactNode }) {
  return <div className="ap-form">{children}</div>;
}

export function Field({
  label,
  children,
  filled,
}: {
  label: React.ReactNode;
  children?: React.ReactNode;
  filled?: boolean;
}) {
  return (
    <div className="ap-field">
      <span className="ap-field__label">{label}</span>
      <span className={`ap-field__line${filled ? " ap-field__line--filled" : ""}`}>{children}</span>
    </div>
  );
}

export function Checklist({
  items,
}: {
  items: { text: React.ReactNode; checked?: boolean }[];
}) {
  return (
    <ul className="ap-check">
      {items.map((it, i) => (
        <li key={i} data-checked={it.checked ? "true" : undefined}>
          {it.text}
        </li>
      ))}
    </ul>
  );
}

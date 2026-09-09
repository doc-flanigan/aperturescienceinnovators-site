import * as React from "react";
import Link from "next/link";

export function Breadcrumbs({ trail }: { trail: { href?: string; label: React.ReactNode }[] }) {
  return (
    <nav className="ap-crumbs ap-noprint" aria-label="Breadcrumb">
      {trail.map((t, i) => (
        <React.Fragment key={i}>
          {i > 0 ? <span className="ap-crumbs__sep" aria-hidden="true">›</span> : null}
          {t.href ? <Link href={t.href}>{t.label}</Link> : <span aria-current="page">{t.label}</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}

export function NextPrev({
  prev,
  next,
}: {
  prev?: { href: string; label: React.ReactNode };
  next?: { href: string; label: React.ReactNode };
}) {
  if (!prev && !next) return null;
  return (
    <nav className="ap-nextprev ap-noprint" aria-label="Adjacent pages">
      {prev ? (
        <Link className="ap-nextprev__link" href={prev.href}>
          <span className="ap-nextprev__dir">← Preceding sheet</span>
          <span className="ap-nextprev__t">{prev.label}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link className="ap-nextprev__link ap-nextprev__link--next" href={next.href}>
          <span className="ap-nextprev__dir">Following sheet →</span>
          <span className="ap-nextprev__t">{next.label}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}

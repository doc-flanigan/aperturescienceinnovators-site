"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SECTIONS, UTILITY_PAGES, ARCHIVE_INDEX, ARCHIVE_SECTIONS, sectionForPath } from "@/lib/structure";

export function PrimaryNav() {
  const pathname = usePathname() ?? "/";
  const active = sectionForPath(pathname);
  const directory = UTILITY_PAGES[0];

  return (
    <nav className="ap-nav ap-noprint" aria-label="Departments">
      <ul className="ap-nav__list">
        <li className="ap-nav__item">
          <Link className="ap-nav__link" href="/" aria-current={pathname === "/" ? "true" : undefined}>
            Front Page
          </Link>
        </li>
        {SECTIONS.map((s) => (
          <li className="ap-nav__item" key={s.path}>
            <Link
              className="ap-nav__link"
              href={s.path}
              aria-current={active?.path === s.path ? "true" : undefined}
            >
              {s.nav}
            </Link>
          </li>
        ))}
        <li className="ap-nav__item">
          <Link
            className="ap-nav__link"
            href={ARCHIVE_INDEX.path}
            aria-current={
              pathname === ARCHIVE_INDEX.path || ARCHIVE_SECTIONS.some((s) => active?.path === s.path)
                ? "true"
                : undefined
            }
          >
            {ARCHIVE_INDEX.nav}
          </Link>
        </li>
        <li className="ap-nav__item">
          <Link
            className="ap-nav__link"
            href={directory.path}
            aria-current={pathname === directory.path ? "true" : undefined}
          >
            {directory.nav}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

/** The sibling strip that appears once you are inside a department. */
export function SectionNav() {
  const pathname = usePathname() ?? "/";
  const section = sectionForPath(pathname);
  if (!section || section.pages.length === 0) return null;

  return (
    <nav className="ap-subnav ap-noprint" aria-label={`${section.title} contents`}>
      <ul className="ap-subnav__list">
        <li className="ap-subnav__item">
          <Link
            className="ap-subnav__link"
            href={section.path}
            aria-current={pathname === section.path ? "true" : undefined}
          >
            {section.title}
          </Link>
        </li>
        {section.pages
          .filter((p) => !p.hidden || pathname.startsWith(section.path))
          .map((p) => (
            <li className="ap-subnav__item" key={p.path}>
              <Link
                className="ap-subnav__link"
                href={p.path}
                aria-current={pathname === p.path ? "true" : undefined}
              >
                {p.nav ?? p.title}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}

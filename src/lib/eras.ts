/* =========================================================================
   THE PRINTINGS
   The 1959 edition is the front of house. Records holds the rest. Each
   later printing is the same press and the same mark on stock that has
   aged the way the company did.
   ========================================================================= */

export type EraKey = "1959" | "1970s" | "1980s" | "glados";

export type Era = {
  key: EraKey;
  /** Path prefix that puts a reader inside this printing. "/" for the front of house. */
  prefix: string;
  /** The wordmark on the masthead. */
  name: string;
  /** The second line under the wordmark. */
  sub: string;
  motto: string;
  /** The right-hand block: established line, place, contact. */
  est: string;
  place: string;
  contact: string;
  /** The printing this era is presented as. */
  edition: string;
  /** What DocHead prints when a page does not give a date. */
  defaultDate: string;
  /** Short label for navigation between printings. */
  nav: string;
  /** Who is speaking, by default. */
  author: string;
  authorTitle: string;
};

export const ERAS: Record<EraKey, Era> = {
  "1959": {
    key: "1959",
    prefix: "/",
    name: "Aperture Science",
    sub: "Innovators",
    motto: "We Do What We Must Because We Can",
    est: "Established 1943",
    place: "Upper Michigan, U.S.A.",
    contact: "Telephone ENrichment 9-0943",
    edition: "Spring 1959",
    defaultDate: "Spring 1959",
    nav: "1959",
    author: "Cave Johnson",
    authorTitle: "President & Founder",
  },
  "1970s": {
    key: "1970s",
    prefix: "/1970s",
    name: "Aperture Science",
    sub: "A Vital Participant In The 1968 Senate Hearings",
    motto: "We Do What We Must Because We Can",
    est: "Established 1943",
    place: "Upper Michigan, U.S.A.",
    contact: "Telephone ENrichment 9-0943 (please let it ring)",
    edition: "1976 Printing",
    defaultDate: "1976",
    nav: "1970s",
    author: "Cave Johnson",
    authorTitle: "Chief Executive Officer",
  },
  "1980s": {
    key: "1980s",
    prefix: "/1980s",
    name: "Aperture Laboratories",
    sub: "Enrichment Center",
    motto: "We Do What We Must Because We Can",
    est: "Established 1943",
    place: "Upper Michigan, U.S.A.",
    contact: "Internal extension only",
    edition: "1982 Printing",
    defaultDate: "1982",
    nav: "1980s",
    author: "Cave Johnson",
    authorTitle: "Chief Executive Officer, from his bed",
  },
  glados: {
    key: "glados",
    prefix: "/glados",
    name: "Aperture Laboratories",
    sub: "Computer-Aided Enrichment Center",
    motto: "We Do What We Must Because We Can",
    est: "Established 1943",
    place: "Upper Michigan, U.S.A.",
    contact: "There is no telephone",
    edition: "Undated",
    defaultDate: "Undated",
    nav: "GLaDOS",
    author: "The Genetic Lifeform and Disk Operating System",
    authorTitle: "Central Core",
  },
};

export const ERA_ORDER: EraKey[] = ["1959", "1970s", "1980s", "glados"];

export function eraForPath(pathname: string): Era {
  for (const key of ["glados", "1980s", "1970s"] as EraKey[]) {
    const e = ERAS[key];
    if (pathname === e.prefix || pathname.startsWith(`${e.prefix}/`)) return e;
  }
  return ERAS["1959"];
}

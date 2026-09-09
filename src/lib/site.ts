/* =========================================================================
   HOUSE FACTS
   One place for everything the print shop keeps getting wrong.
   ========================================================================= */

export const COMPANY = {
  name: "Aperture Science Innovators",
  shortName: "Aperture Science",
  formerName: "Aperture Fixtures",
  motto: "We Do What We Must Because We Can",
  founder: "Cave Johnson",
  founderTitle: "President & Founder",
  founded: 1943,
  renamed: 1947,
  /** January 1944. Cave bought the hole, not the salt. */
  mineAcquired: 1944,
  /** The Eisenhower administration contract: every branch except the Navy. */
  militaryContract: 1956,
  /** Test Shaft 09's foyer carries a painted construction date of 1952. */
  shaftBuilt: 1952,
  year: 1959,
  publicationSeason: "Spring",
  domain: "www.aperturescienceinnovators.com",
  address: {
    line1: "Aperture Science Innovators",
    line2: "The Enrichment Center, Test Shaft 09",
    line3: "Upper Peninsula, Michigan",
  },
  telephone: "ENrichment 9-0943",
  cable: "APERTURE UPMICH",
} as const;

export const SITE = {
  title: `${COMPANY.name}`,
  tagline: COMPANY.motto,
  description:
    "The official corporate publication of Aperture Science Innovators of Upper Michigan — quantum tunnelling, industrial emulsions, military shower curtains, and the finest volunteer testing programme in the Republic.",
  url: "https://www.aperturescienceinnovators.com",
} as const;

export type PageEntry = {
  path: string;
  title: string;
  /** Short title for navigation and cards. */
  nav?: string;
  /** One-line catalogue description, used on section index pages. */
  blurb?: string;
  /** Form number printed in the document header. */
  form?: string;
  /** Kept out of the primary navigation and the printed directory. */
  hidden?: boolean;
  /** Minimum personnel grade before the directory will admit it exists. */
  clearance?: number;
};

export type SectionEntry = {
  path: string;
  title: string;
  nav: string;
  blurb: string;
  hidden?: boolean;
  pages: PageEntry[];
};

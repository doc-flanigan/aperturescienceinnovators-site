import type { PageEntry, SectionEntry } from "@/lib/site";

/* =========================================================================
   THE FILING SYSTEM
   Every sheet this company prints, in the order the Records Department
   insists upon. Navigation, breadcrumbs, the printed directory and the
   machine-readable index are all struck from this one plate.
   ========================================================================= */

export const SECTIONS: SectionEntry[] = [
  {
    path: "/the-company",
    title: "The Company",
    nav: "The Company",
    blurb:
      "Who we are, where we came from, and precisely how much of Upper Michigan we have hollowed out to get here.",
    pages: [
      {
        path: "/the-company/cave-johnson",
        title: "A Word From The President",
        nav: "Cave Johnson",
        form: "ASI-101",
        blurb: "Mr. Johnson addresses the reader personally, at length, and without being asked to stop.",
      },
      {
        path: "/the-company/history",
        title: "Our Story So Far",
        nav: "History",
        form: "ASI-102",
        blurb: "From a shower curtain to a hole in the fabric of space, in fourteen short years.",
      },
      {
        path: "/the-company/mission",
        title: "We Do What We Must Because We Can",
        nav: "Our Mission",
        form: "ASI-103",
        blurb: "The corporate creed, the corporate anthem, and the corporate position on the word 'why'.",
      },
      {
        path: "/the-company/officers",
        title: "Officers & Departments",
        nav: "Officers",
        form: "ASI-104",
        blurb: "The men and the one woman who make the Enrichment Center run.",
      },
      {
        path: "/the-company/upper-michigan",
        title: "The Salt Mine At Upper Michigan",
        nav: "The Facility",
        form: "ASI-105",
        blurb: "Nine shafts, four thousand feet, and the largest privately held hole in North America.",
      },
      {
        path: "/the-company/the-competition",
        title: "On The Competition",
        nav: "The Competition",
        form: "ASI-106",
        blurb: "A frank and entirely fair assessment of a certain research facility in New Mexico.",
      },
      {
        path: "/the-company/honors",
        title: "Honors, Citations & Certain Findings",
        nav: "Honors",
        form: "ASI-107",
        blurb: "Awards received, awards anticipated, and awards that were regrettably withdrawn.",
      },
      {
        path: "/the-company/correspondence",
        title: "Correspondence",
        nav: "Correspondence",
        form: "ASI-108",
        blurb: "How to reach us, and a candid account of what happens to mail that reaches us.",
      },
    ],
  },
  {
    path: "/products",
    title: "Products & Divisions",
    nav: "Products",
    blurb:
      "The complete Aperture line, from the curtain that started it all to devices Legal has asked us to stop calling 'holes'.",
    pages: [
      {
        path: "/products/shower-curtains",
        title: "The Aperture Fixtures Shower Curtain",
        nav: "Shower Curtains",
        form: "ASI-201",
        blurb: "The product that built this company. Still in the catalogue. Still the best on the market.",
      },
      {
        path: "/products/quantum-tunnelling-device",
        title: "The Portable Quantum Tunnelling Device",
        nav: "Tunnelling Device",
        form: "ASI-202",
        blurb: "Two holes. One here, one there. Legal insists we mention that it is not a door.",
      },
      {
        path: "/products/repulsion-gel",
        title: "Repulsion Gel",
        nav: "Repulsion Gel",
        form: "ASI-203",
        blurb: "Originally a dietetic pudding substitute. The dietetic application did not survive contact with a spoon.",
      },
      {
        path: "/products/propulsion-gel",
        title: "Propulsion Gel",
        nav: "Propulsion Gel",
        form: "ASI-204",
        blurb: "Makes a man run faster than a man has any business running. Stopping is sold separately.",
      },
      {
        path: "/products/conversion-gel",
        title: "Conversion Gel",
        nav: "Conversion Gel",
        form: "ASI-205",
        blurb: "Ground lunar substrate in suspension. Excellent conductor. Catastrophic to inhale.",
      },
      {
        path: "/products/weighted-storage-cube",
        title: "The Weighted Storage Cube",
        nav: "Storage Cube",
        form: "ASI-206",
        blurb: "It weighs a great deal and it stores nothing. Both of these are features.",
      },
      {
        path: "/products/aerial-faith-plate",
        title: "The Aerial Faith Plate",
        nav: "Faith Plate",
        form: "ASI-207",
        blurb: "Throws a man across a room. The faith is required on the part of the man.",
      },
      {
        path: "/products/pneumatic-diversity-vent",
        title: "The Pneumatic Diversity Vent",
        nav: "Diversity Vent",
        form: "ASI-208",
        blurb: "Moves objects, documents and occasionally personnel at ninety miles per hour through a tube.",
      },
      {
        path: "/products/material-emancipation-grill",
        title: "The Material Emancipation Grill",
        nav: "Emancipation Grill",
        form: "ASI-209",
        blurb: "Removes from a volunteer any object he ought not to be carrying. Fillings are an object.",
      },
      {
        path: "/products/heimlich-counter-maneuver",
        title: "The Heimlich Counter-Maneuver",
        nav: "Counter-Maneuver",
        form: "ASI-210",
        blurb: "For lodging an object more firmly. The applications are, admittedly, still being determined.",
      },
      {
        path: "/products/take-a-wish-foundation",
        title: "The Take-A-Wish Foundation",
        nav: "Take-A-Wish",
        form: "ASI-211",
        blurb: "A charitable arm that collects wishes from the terminally ill and puts them to industrial use.",
      },
      {
        path: "/products/sentry-turret",
        title: "The Aperture Sentry Turret",
        nav: "Sentry Turret",
        form: "ASI-212",
        blurb: "Presently in development. Presently very polite. Presently unarmed, in most models.",
      },
      {
        path: "/products/catalogue",
        title: "The Complete Catalogue & Order Form",
        nav: "Order Form",
        form: "ASI-299",
        blurb: "Every item, every price, and a coupon the Legal Department has read exactly once.",
      },
    ],
  },
  {
    path: "/enrichment-center",
    title: "The Enrichment Center",
    nav: "Enrichment Center",
    blurb:
      "Where the science happens and where the volunteers happen to the science. Astronauts, war heroes and Olympians especially welcome.",
    pages: [
      {
        path: "/enrichment-center/test-shaft-09",
        title: "Test Shaft 09",
        nav: "Test Shaft 09",
        form: "ASI-301",
        blurb: "The newest and deepest of the shafts, and the only one with a working elevator.",
      },
      {
        path: "/enrichment-center/volunteer",
        title: "Volunteer Application",
        nav: "Volunteer",
        form: "ASI-302",
        blurb: "Sixty dollars, a firm handshake, and a form nobody has ever finished reading.",
      },
      {
        path: "/enrichment-center/test-subjects",
        title: "Our Distinguished Volunteers",
        nav: "Volunteers",
        form: "ASI-303",
        blurb: "The finest men America can spare, and a note on the ones we could not give back.",
      },
      {
        path: "/enrichment-center/chambers",
        title: "The Test Chambers",
        nav: "Test Chambers",
        form: "ASI-304",
        blurb: "A guided tour of the chambers, the signage, and the meaning of each pictogram on the wall.",
      },
      {
        path: "/enrichment-center/safety",
        title: "Safety & Comfort",
        nav: "Safety",
        form: "ASI-305",
        blurb: "The Enrichment Center's comprehensive position on hazards, which is that there are none.",
      },
      {
        path: "/enrichment-center/compensation",
        title: "Schedule Of Compensation",
        nav: "Compensation",
        form: "ASI-306",
        blurb: "What we pay, when we pay it, and the eleven conditions under which we do not.",
      },
      {
        path: "/enrichment-center/refreshments",
        title: "Refreshments & The Cake",
        nav: "Refreshments",
        form: "ASI-307",
        blurb: "Coffee, sandwiches, and a cake that has been promised to every volunteer since 1953.",
      },
      {
        path: "/enrichment-center/rules",
        title: "Rules Of The Enrichment Center",
        nav: "Rules",
        form: "ASI-308",
        blurb: "Nineteen rules. Rule nineteen is not printed, for reasons given in rule four.",
      },
    ],
  },
  {
    path: "/science",
    title: "Research Divisions",
    nav: "Science",
    blurb:
      "Science is not about why. It is about why not. Herewith the divisions in which we ask why not, professionally.",
    pages: [
      {
        path: "/science/quantum-tunnelling",
        title: "Applied Quantum Tunnelling",
        nav: "Quantum Tunnelling",
        form: "ASI-401",
        blurb: "The physics of putting a hole where a hole was not, explained for the layman and the shareholder.",
      },
      {
        path: "/science/materials",
        title: "Materials & Industrial Emulsions",
        nav: "Materials",
        form: "ASI-402",
        blurb: "Gels, resins, curtain fabrics, and the department that keeps setting fire to the third floor.",
      },
      {
        path: "/science/computation",
        title: "Computation & Thinking Machines",
        nav: "Computation",
        form: "ASI-403",
        blurb: "Eleven tons of relays, one punch-card reader, and an idea the President will not let go of.",
      },
      {
        path: "/science/lunar",
        title: "The Lunar Substrate Program",
        nav: "Lunar Program",
        form: "ASI-404",
        blurb: "We bought the moon rocks. All of them. Do not ask what they cost. Ask what they conduct.",
      },
      {
        path: "/science/applied-biology",
        title: "Applied Biology",
        nav: "Applied Biology",
        form: "ASI-405",
        blurb: "Human enhancement, mantid husbandry, and the long-term storage of a personality.",
      },
      {
        path: "/science/publications",
        title: "Papers, Patents & Priority Disputes",
        nav: "Publications",
        form: "ASI-406",
        blurb: "What we have published, what we have patented, and what we have merely gotten to first.",
      },
    ],
  },
  {
    path: "/careers",
    title: "Employment",
    nav: "Careers",
    blurb:
      "Aperture Science Innovators is hiring. Aperture Science Innovators is always hiring. There are reasons for both halves of that sentence.",
    pages: [
      {
        path: "/careers/openings",
        title: "Positions Presently Available",
        nav: "Openings",
        form: "ASI-501",
        blurb: "Physicists, machinists, one experienced pyrotechnician, and a great many test associates.",
      },
      {
        path: "/careers/benefits",
        title: "Benefits & The Company Town",
        nav: "Benefits",
        form: "ASI-502",
        blurb: "Housing, the commissary, the company store, and the finest dental plan in the Upper Peninsula.",
      },
      {
        path: "/careers/handbook",
        title: "The Employee Handbook",
        nav: "Handbook",
        form: "ASI-503",
        blurb: "Forty pages condensed to one. Chiefly concerning doors, and which ones open from both sides.",
      },
      {
        path: "/careers/bring-your-daughter-to-work-day",
        title: "Bring Your Daughter To Work Day",
        nav: "Daughter To Work Day",
        form: "ASI-504",
        blurb: "The Enrichment Center's beloved annual science fair, and this year's prize-winning entries.",
      },
      {
        path: "/careers/employee-of-the-month",
        title: "Employee Of The Month",
        nav: "Employee Of The Month",
        form: "ASI-505",
        blurb: "A rotating honour. It has rotated rather faster than the Personnel Department anticipated.",
      },
    ],
  },
  {
    path: "/investors",
    title: "Investor Relations",
    nav: "Investors",
    blurb:
      "Figures, forecasts, and a full accounting of where the money went, prepared in the belief that nobody will read past the first table.",
    pages: [
      {
        path: "/investors/annual-report",
        title: "Annual Report",
        nav: "Annual Report",
        form: "ASI-601",
        blurb: "Revenues, expenditures, and one line item the auditors have asked us to explain three times.",
      },
      {
        path: "/investors/prospectus",
        title: "Prospectus & Offering",
        nav: "Prospectus",
        form: "ASI-602",
        blurb: "An opportunity to own a piece of the largest privately held hole in North America.",
      },
      {
        path: "/investors/senate-hearing",
        title: "Testimony Before The Senate",
        nav: "Senate Hearing",
        form: "ASI-603",
        blurb: "Mr. Johnson's complete and unedited remarks to a subcommittee that did not enjoy them.",
      },
    ],
  },
  {
    path: "/bulletin",
    title: "The Aperture Bulletin",
    nav: "Bulletin",
    blurb:
      "The house organ. Published whenever there is news, and on several occasions when there was not.",
    pages: [
      {
        path: "/bulletin/spring-1959",
        title: "The Aperture Bulletin — Spring 1959",
        nav: "Spring 1959",
        form: "ASI-701",
        blurb: "The Mercury Seven are named, the commissary reopens, and a word about the noise from Sub-Level 4.",
      },
      {
        path: "/bulletin/winter-1958",
        title: "The Aperture Bulletin — Winter 1958",
        nav: "Winter 1958",
        form: "ASI-702",
        blurb: "The substrate procurement, the bowling league, and nine paragraphs about a missing elevator.",
      },
      {
        path: "/bulletin/memoranda",
        title: "From The Desk Of Cave Johnson",
        nav: "Memoranda",
        form: "ASI-703",
        blurb: "Interoffice memoranda, reproduced without editing, against the advice of counsel.",
      },
    ],
  },
];

export const UTILITY_PAGES: PageEntry[] = [
  { path: "/the-directory", title: "The Directory", nav: "Directory", form: "ASI-000", blurb: "Every sheet in this publication, filed by department." },
  { path: "/legal", title: "Terms, Waivers & Indemnities", nav: "Legal", form: "ASI-900", blurb: "The fine print, set in the largest type the Legal Department would permit." },
];

/* -------------------------------------------------------------------------
   MATERIAL NOT LISTED IN THE PRINTED DIRECTORY
   ------------------------------------------------------------------------- */

export const VAULT: SectionEntry = {
  path: "/vault",
  title: "The Vault",
  nav: "The Vault",
  hidden: true,
  blurb: "Material held below the water table. You are not supposed to be reading this.",
  pages: [
    { path: "/vault/combustible-lemons", title: "Combustible Lemons", nav: "Combustible Lemons", form: "ASI-Ω-01", hidden: true, clearance: 2, blurb: "A programme that does not begin for another twenty years." },
    { path: "/vault/project-9", title: "Project 9", nav: "Project 9", form: "ASI-Ω-02", hidden: true, clearance: 5, blurb: "A proposal for the permanent storage of a person." },
    { path: "/vault/borealis", title: "The Borealis", nav: "The Borealis", form: "ASI-Ω-03", hidden: true, clearance: 4, blurb: "A research vessel. Its present position is a matter of some disagreement." },
    { path: "/vault/the-dens", title: "The Dens", nav: "The Dens", form: "ASI-Ω-04", hidden: true, clearance: 3, blurb: "Somebody has been writing on the walls of a facility that is not yet finished." },
    { path: "/vault/lunar-memorandum", title: "The Lunar Memorandum", nav: "Lunar Memorandum", form: "ASI-Ω-05", hidden: true, clearance: 3, blurb: "On the President's health, which is excellent, and which is not to be discussed." },
  ],
};

export const OFFICE: SectionEntry = {
  path: "/office-of-the-president",
  title: "The Office Of The President",
  nav: "The President's Office",
  hidden: true,
  blurb: "Third floor, end of the hall, door is always open, do not use the door.",
  pages: [
    { path: "/office-of-the-president/caroline", title: "Caroline", nav: "Caroline", form: "ASI-Ω-10", hidden: true, clearance: 3, blurb: "Personal secretary to the President. The best damn thing that ever happened to this company." },
  ],
};

export const LOOSE_PAGES: PageEntry[] = [
  { path: "/terminal", title: "Aperture Science Interactive Terminal", nav: "Terminal", form: "ASI-Ω-99", hidden: true, blurb: "Machine access. Bring your own punch cards." },
];

/* -------------------------------------------------------------------------
   DERIVED INDICES
   ------------------------------------------------------------------------- */

export const ALL_SECTIONS: SectionEntry[] = [...SECTIONS, VAULT, OFFICE];

export const ALL_PAGES: PageEntry[] = [
  ...ALL_SECTIONS.flatMap((s) => [
    { path: s.path, title: s.title, nav: s.nav, blurb: s.blurb, hidden: s.hidden },
    ...s.pages,
  ]),
  ...UTILITY_PAGES,
  ...LOOSE_PAGES,
];

export const PAGE_BY_PATH = new Map(ALL_PAGES.map((p) => [p.path, p]));

export function sectionForPath(path: string): SectionEntry | undefined {
  return ALL_SECTIONS.find((s) => path === s.path || path.startsWith(`${s.path}/`));
}

export function pageTitle(path: string): string | undefined {
  return PAGE_BY_PATH.get(path)?.title;
}

/** Neighbouring sheets within a section, for the foot of each page. */
export function neighbours(path: string): {
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
} {
  const section = sectionForPath(path);
  if (!section) return {};
  const list = section.pages;
  const i = list.findIndex((p) => p.path === path);
  if (i === -1) return {};
  const prev = i > 0 ? list[i - 1] : undefined;
  const next = i < list.length - 1 ? list[i + 1] : undefined;
  return {
    prev: prev ? { href: prev.path, label: prev.nav ?? prev.title } : { href: section.path, label: section.nav },
    next: next ? { href: next.path, label: next.nav ?? next.title } : undefined,
  };
}

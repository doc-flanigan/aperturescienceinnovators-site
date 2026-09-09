import { Jost, Newsreader, Courier_Prime, Bodoni_Moda, Caveat, Yellowtail } from "next/font/google";

/* -------------------------------------------------------------------------
   THE HOUSE FACES
   Chosen in 1951 and not up for discussion.

   Jost           — the geometric sans of the age. Signage, headings, labels.
   Newsreader     — running text, set the way a company report is set.
   Courier Prime  — the typing pool. Memoranda, forms, machine output.
   Bodoni Moda    — advertising. Sells shower curtains. Sells anything.
   Caveat         — a pencil. For the things people write in the margins.
   Yellowtail     — the President's signature. He signed it once, in 1949.
   ------------------------------------------------------------------------- */

export const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});

export const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

export const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-courier-prime",
});

export const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bodoni",
});

export const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hand",
});

export const yellowtail = Yellowtail({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-sign",
});

export const FONT_CLASSNAMES = [
  jost.variable,
  newsreader.variable,
  courierPrime.variable,
  bodoni.variable,
  caveat.variable,
  yellowtail.variable,
].join(" ");

import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@/styles/components.css";

import { FONT_CLASSNAMES } from "@/lib/fonts";
import { COMPANY, SITE } from "@/lib/site";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LAMP_BOOT_SCRIPT } from "@/components/client/Lamp";
import { SecretListener } from "@/components/client/SecretListener";
import { ConsoleGreeting } from "@/components/client/ConsoleGreeting";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.title} — ${COMPANY.motto}`,
    template: `%s — ${SITE.title}`,
  },
  description: SITE.description,
  applicationName: SITE.title,
  authors: [{ name: COMPANY.founder }],
  creator: COMPANY.founder,
  publisher: COMPANY.name,
  keywords: [
    "Aperture Science",
    "Cave Johnson",
    "Portal",
    "Portal 2",
    "Enrichment Center",
    "quantum tunnelling",
    "shower curtains",
    "Upper Michigan",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.title,
    title: `${SITE.title} — ${COMPANY.motto}`,
    description: SITE.description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description },
  other: {
    "aperture-clearance": "VISITOR",
    "aperture-notice": "The Enrichment Center reminds you that the Weighted Companion Cube cannot speak.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#efe6d2" },
    { media: "(prefers-color-scheme: dark)", color: "#14181b" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={FONT_CLASSNAMES} suppressHydrationWarning>
      <head>
        {/* Reading room lighting is set before the first photon leaves the tube. */}
        <script dangerouslySetInnerHTML={{ __html: LAMP_BOOT_SCRIPT }} />
      </head>
      <body>
        {/*
          ┌──────────────────────────────────────────────────────────────┐
          │  APERTURE SCIENCE INNOVATORS — UPPER MICHIGAN                │
          │  "We do what we must because we can."                        │
          │                                                              │
          │  Reader: you have opened the source of a corporate           │
          │  publication. Mr. Johnson would like you to know that this   │
          │  is exactly the sort of initiative we look for.              │
          │                                                              │
          │  Try /terminal. Try typing a word. Try the old sequence.     │
          │  Try printing a page — the ink knows things the screen does  │
          │  not.                                                        │
          └──────────────────────────────────────────────────────────────┘
        */}
        <a className="ap-skip" href="#main">
          Skip to the document
        </a>
        <div className="ap-shell">
          <div className="ap-sheet">
            <span className="ap-crop ap-crop--tl" aria-hidden="true" />
            <span className="ap-crop ap-crop--tr" aria-hidden="true" />
            <span className="ap-crop ap-crop--bl" aria-hidden="true" />
            <span className="ap-crop ap-crop--br" aria-hidden="true" />
            <div className="ap-sheet__inner">
              <SiteHeader />
              <main id="main">{children}</main>
            </div>
          </div>
          <SiteFooter />
        </div>
        <div className="ap-tooth" aria-hidden="true" />
        <SecretListener />
        <ConsoleGreeting />
      </body>
    </html>
  );
}

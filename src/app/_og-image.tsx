import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { COMPANY, SITE } from "@/lib/site";

/**
 * Shared by opengraph-image.tsx and twitter-image.tsx. The site's masthead,
 * reduced to a single sheet: the aperture mark, the wordmark, the house
 * rule, the motto, and the same address block the front page carries.
 */

export const alt = `${SITE.title} — ${COMPANY.motto}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const APERTURE_MARK_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M 94 50 A 44 44 0 0 1 81.11 81.11 L 58.82 62.14 Z M 81.11 81.11 A 44 44 0 0 1 50 94 L 47.65 64.82 Z M 50 94 A 44 44 0 0 1 18.89 81.11 L 37.86 58.82 Z M 18.89 81.11 A 44 44 0 0 1 6 50 L 35.18 47.65 Z M 6 50 A 44 44 0 0 1 18.89 18.89 L 41.18 37.86 Z M 18.89 18.89 A 44 44 0 0 1 50 6 L 52.35 35.18 Z M 50 6 A 44 44 0 0 1 81.11 18.89 L 62.14 41.18 Z M 81.11 18.89 A 44 44 0 0 1 94 50 L 64.82 52.35 Z" fill="#1e1b16" stroke="#1e1b16" stroke-width="1.2" stroke-linejoin="round"/></svg>';
const markSrc = `data:image/svg+xml;base64,${Buffer.from(APERTURE_MARK_SVG).toString("base64")}`;

export async function renderOgImage() {
  const [jostRegular, jostSemibold] = await Promise.all([
    readFile(join(process.cwd(), "assets/og-fonts/jost-400.ttf")),
    readFile(join(process.cwd(), "assets/og-fonts/jost-600.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#efe6d2",
          padding: "76px 92px",
          fontFamily: "Jost",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", gap: 32 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={markSrc} width={112} height={112} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 78,
                fontWeight: 600,
                letterSpacing: "0.01em",
                lineHeight: 0.98,
                color: "#1e1b16",
              }}
            >
              APERTURE SCIENCE
            </div>
            <div
              style={{
                marginTop: 16,
                fontSize: 28,
                fontWeight: 400,
                letterSpacing: "0.42em",
                color: "#453e33",
              }}
            >
              INNOVATORS
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 40,
            borderTop: "6px solid #2a251d",
            borderBottom: "2px solid #8e836c",
            height: 10,
            display: "flex",
          }}
        />

        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 36,
              fontWeight: 400,
              letterSpacing: "0.1em",
              color: "#6f6554",
              textAlign: "center",
            }}
          >
            WE DO WHAT WE MUST BECAUSE WE CAN
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            letterSpacing: "0.05em",
            color: "#6a6252",
          }}
        >
          <div style={{ display: "flex" }}>ESTABLISHED 1943 — UPPER MICHIGAN, U.S.A.</div>
          <div style={{ display: "flex" }}>WWW.APERTURESCIENCEINNOVATORS.COM</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Jost", data: jostRegular, style: "normal", weight: 400 },
        { name: "Jost", data: jostSemibold, style: "normal", weight: 600 },
      ],
    }
  );
}

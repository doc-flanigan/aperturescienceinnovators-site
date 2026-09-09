import * as React from "react";

/**
 * ENRICHMENT CENTER SIGNAGE PICTOGRAMS
 * Corporate Identity Directive 12, Appendix B.
 *
 * The grammar is fixed: 100x100 field, 5-unit stroke, round terminals, no
 * detail a man can't read at forty feet through a plate-glass window while
 * the room is on fire.
 */

const S = { fill: "none", stroke: "currentColor", strokeWidth: 5, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const SF = { fill: "currentColor", stroke: "none" } as const;

const GLYPHS: Record<string, React.ReactNode> = {
  /* --- The founding product ------------------------------------------- */
  curtain: (
    <>
      <path {...S} d="M12 18h76" />
      <path {...S} d="M20 18c0 22-4 40 0 64M36 18c0 22 4 42 0 64M52 18c0 22-4 40 0 64M68 18c0 22 4 42 0 64M84 18c0 22-4 40 0 64" />
      <circle {...SF} cx="20" cy="14" r="3.5" />
      <circle {...SF} cx="36" cy="14" r="3.5" />
      <circle {...SF} cx="52" cy="14" r="3.5" />
      <circle {...SF} cx="68" cy="14" r="3.5" />
      <circle {...SF} cx="84" cy="14" r="3.5" />
    </>
  ),

  /* --- Quantum tunnelling --------------------------------------------- */
  portal: (
    <>
      <ellipse {...S} cx="50" cy="50" rx="24" ry="38" />
      <ellipse {...S} cx="50" cy="50" rx="13" ry="27" strokeWidth={2.5} opacity={0.55} />
    </>
  ),
  "portal-pair": (
    <>
      <ellipse {...S} cx="24" cy="50" rx="14" ry="30" />
      <ellipse {...S} cx="76" cy="50" rx="14" ry="30" />
      <path {...S} strokeDasharray="6 7" d="M38 50h24" />
    </>
  ),
  gun: (
    <>
      <path {...S} d="M14 40h44l14 12-14 12H14z" />
      <path {...S} d="M30 64v18h14V64" />
      <circle {...S} cx="76" cy="52" r="9" />
    </>
  ),

  /* --- Furniture of the test chamber ---------------------------------- */
  cube: (
    <>
      <path {...S} d="M50 12 86 30v40L50 88 14 70V30z" />
      <path {...S} d="M50 12v76M14 30l36 18 36-18" opacity={0.35} strokeWidth={2.5} />
      <circle {...S} cx="50" cy="58" r="8" strokeWidth={4} />
    </>
  ),
  companion: (
    <>
      <path {...S} d="M50 12 86 30v40L50 88 14 70V30z" />
      <path {...SF} d="M50 68c-9-7-16-12-16-19a7.6 7.6 0 0 1 13.2-5.1L50 46.6l2.8-2.7A7.6 7.6 0 0 1 66 49c0 7-7 12-16 19z" />
    </>
  ),
  button: (
    <>
      <path {...S} d="M18 78h64l-8-12H26z" />
      <ellipse {...S} cx="50" cy="46" rx="26" ry="12" />
      <path {...S} d="M24 46v10c0 6 12 11 26 11s26-5 26-11V46" />
    </>
  ),
  "faith-plate": (
    <>
      <path {...S} d="M16 78h68" />
      <path {...S} d="M26 78 50 62l24 16" />
      <path {...S} d="M50 52V14M50 14l-12 14M50 14l12 14" />
    </>
  ),
  turret: (
    <>
      <path {...S} d="M34 22c0-7 7-12 16-12s16 5 16 12v34c0 8-7 14-16 14s-16-6-16-14z" />
      <circle {...SF} cx="50" cy="34" r="6" />
      <path {...S} d="M36 66 22 90M64 66l14 24M50 70v20" />
    </>
  ),
  camera: (
    <>
      <path {...S} d="M20 30h44v34H20z" />
      <path {...S} d="M64 40l16-10v44l-16-10z" />
      <circle {...SF} cx="38" cy="47" r="7" />
      <path {...S} d="M42 30V16" strokeWidth={4} />
    </>
  ),
  grill: (
    <>
      <path {...S} d="M22 14v72M38 14v72M54 14v72M70 14v72" />
      <path {...S} strokeWidth={2.5} opacity={0.5} d="M14 34h72M14 66h72" />
    </>
  ),

  /* --- Materials sciences --------------------------------------------- */
  gel: (
    <>
      <path {...S} d="M50 12c14 20 24 31 24 44a24 24 0 0 1-48 0c0-13 10-24 24-44z" />
      <path {...S} strokeWidth={3} opacity={0.55} d="M38 58c0 8 5 13 12 14" />
    </>
  ),
  "gel-splat": (
    <>
      <path {...S} d="M26 66c-8-14 2-30 18-32 14-2 26 6 28 18 2 12-8 22-22 22-10 0-20-2-24-8z" />
      <circle {...SF} cx="80" cy="30" r="4" />
      <circle {...SF} cx="20" cy="34" r="3" />
      <circle {...SF} cx="70" cy="78" r="3.5" />
      <circle {...SF} cx="30" cy="82" r="2.5" />
    </>
  ),
  moon: (
    <>
      <path {...S} d="M62 14a38 38 0 1 0 0 72 40 40 0 0 1 0-72z" />
      <circle {...S} strokeWidth={3} cx="44" cy="38" r="6" />
      <circle {...S} strokeWidth={3} cx="34" cy="62" r="4" />
      <circle {...S} strokeWidth={3} cx="54" cy="70" r="3" />
    </>
  ),
  lemon: (
    <>
      <ellipse {...S} cx="50" cy="52" rx="34" ry="24" transform="rotate(-24 50 52)" />
      <path {...S} d="M20 34l-8-8M80 70l8 8" strokeWidth={4} />
      <path {...S} strokeWidth={3} opacity={0.55} d="M34 62 66 42" />
    </>
  ),
  flask: (
    <>
      <path {...S} d="M40 12h20M44 12v26L22 78a6 6 0 0 0 5 10h46a6 6 0 0 0 5-10L56 38V12" />
      <path {...S} strokeWidth={3} d="M33 62h34" opacity={0.6} />
    </>
  ),
  atom: (
    <>
      <circle {...SF} cx="50" cy="50" r="7" />
      <ellipse {...S} strokeWidth={3.5} cx="50" cy="50" rx="40" ry="15" />
      <ellipse {...S} strokeWidth={3.5} cx="50" cy="50" rx="40" ry="15" transform="rotate(60 50 50)" />
      <ellipse {...S} strokeWidth={3.5} cx="50" cy="50" rx="40" ry="15" transform="rotate(120 50 50)" />
    </>
  ),

  /* --- Hazards, of which there are none ------------------------------- */
  hazard: (
    <>
      <path {...S} d="M50 12 92 84H8z" />
      <path {...S} d="M50 40v22" strokeWidth={6} />
      <circle {...SF} cx="50" cy="72" r="4" />
    </>
  ),
  fire: (
    <>
      <path {...S} d="M50 10c4 18-14 22-14 38a14 14 0 0 0 28 0c0-6-4-10-4-16 10 6 16 16 16 26a26 26 0 0 1-52 0C24 38 46 32 50 10z" />
    </>
  ),
  laser: (
    <>
      <path {...S} d="M10 50h34M56 50h34" strokeWidth={6} />
      <circle {...S} cx="50" cy="50" r="7" />
      <path {...S} strokeWidth={3} d="M50 26v-14M50 88V74M28 28 20 20M72 28l8-8M28 72l-8 8M72 72l8 8" opacity={0.6} />
    </>
  ),
  neurotoxin: (
    <>
      <circle {...S} cx="50" cy="42" r="22" />
      <circle {...SF} cx="41" cy="38" r="4" />
      <circle {...SF} cx="59" cy="38" r="4" />
      <path {...S} strokeWidth={4} d="M40 54c4 4 16 4 20 0" />
      <path {...S} strokeWidth={3.5} d="M28 74c8 8 36 8 44 0M34 86c6 5 26 5 32 0" opacity={0.6} />
    </>
  ),
  incinerate: (
    <>
      <path {...S} d="M18 34h64v50H18z" />
      <path {...S} d="M18 34 34 12h32l16 22" />
      <path {...S} strokeWidth={4} d="M40 78c-6-8 2-14 4-22 4 8 12 12 12 20a8 8 0 0 1-16 2z" />
    </>
  ),

  /* --- Persons and process -------------------------------------------- */
  subject: (
    <>
      <circle {...S} cx="50" cy="22" r="11" />
      <path {...S} d="M50 34v30M50 64 34 90M50 64l16 26M28 46h44" />
    </>
  ),
  fling: (
    <>
      <path {...S} strokeDasharray="7 8" d="M12 82C24 26 76 26 88 82" />
      <circle {...SF} cx="50" cy="34" r="7" />
      <path {...S} d="M12 82h18M70 82h18" strokeWidth={6} />
    </>
  ),
  elevator: (
    <>
      <path {...S} d="M22 12h56v76H22z" />
      <path {...S} d="M50 12v76" strokeWidth={3} opacity={0.5} />
      <path {...S} d="M36 40l-6 8h12zM64 60l6-8H58z" strokeWidth={3} />
    </>
  ),
  clipboard: (
    <>
      <path {...S} d="M24 18h52v70H24z" />
      <path {...S} d="M40 12h20v12H40z" />
      <path {...S} strokeWidth={3.5} d="M36 44h28M36 58h28M36 72h16" />
    </>
  ),
  timer: (
    <>
      <circle {...S} cx="50" cy="54" r="32" />
      <path {...S} d="M50 34v20l14 10" />
      <path {...S} d="M38 10h24" strokeWidth={6} />
    </>
  ),
  handshake: (
    <>
      <path {...S} d="M10 44l16-12 16 10 16-10 16 12" />
      <path {...S} d="M26 32v26a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8V32" />
      <path {...S} strokeWidth={3.5} d="M42 58h16" />
    </>
  ),
  dollar: (
    <>
      <path {...S} d="M68 26c-6-6-36-10-36 6 0 14 36 6 36 22 0 16-30 12-36 6" />
      <path {...S} strokeWidth={4} d="M50 10v80" />
    </>
  ),
  heart: <path {...SF} d="M50 84C28 66 14 55 14 39a20 20 0 0 1 36-12 20 20 0 0 1 36 12c0 16-14 27-36 45z" />,
  cake: (
    <>
      <path {...S} d="M18 54h64v32H18z" />
      <path {...S} d="M18 54c0-8 14-12 32-12s32 4 32 12" />
      <path {...S} strokeWidth={3.5} d="M50 42V26M50 26c-5-4 0-10 0-10s5 6 0 10z" />
      <path {...S} strokeWidth={3} opacity={0.5} d="M18 68h64" />
    </>
  ),
  vault: (
    <>
      <circle {...S} cx="50" cy="50" r="34" />
      <circle {...S} cx="50" cy="50" r="12" />
      <path {...S} strokeWidth={4} d="M50 16v14M50 70v14M16 50h14M70 50h14M26 26l10 10M64 64l10 10M74 26 64 36M36 64 26 74" />
    </>
  ),
};

export type PictogramName = keyof typeof GLYPHS;

export const PICTOGRAM_NAMES = Object.keys(GLYPHS) as PictogramName[];

export function Pictogram({
  name,
  title,
  size = 48,
  ...rest
}: { name: PictogramName; title?: string; size?: number } & React.SVGProps<SVGSVGElement>) {
  const glyph = GLYPHS[name];
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {glyph ?? GLYPHS.hazard}
    </svg>
  );
}

/** The pictogram as the Enrichment Center prefers it: reversed out of black. */
export function SignPlate({
  name,
  caption,
  size = 84,
}: {
  name: PictogramName;
  caption?: string;
  size?: number;
}) {
  return (
    <figure style={{ display: "inline-block", textAlign: "center", margin: 0 }}>
      <div
        style={{
          background: "var(--ink)",
          color: "var(--paper)",
          padding: "0.7rem",
          display: "inline-flex",
          border: "2px solid var(--ink)",
          boxShadow: "inset 0 0 0 2px var(--paper), inset 0 0 0 4px var(--ink)",
        }}
      >
        <Pictogram name={name} size={size} title={caption} />
      </div>
      {caption ? (
        <figcaption
          className="ap-caps"
          style={{ fontSize: "0.6rem", marginTop: "0.45rem", color: "var(--ink-3)", maxWidth: `${size + 40}px` }}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

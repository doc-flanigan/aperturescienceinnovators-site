import * as React from "react";

/**
 * The Aperture. Eight blades, closing clockwise.
 *
 * Drawn from geometry rather than a pasted path so the mark can be re-cut at
 * any blade count without a trip to the art department. Mr. Johnson has
 * personally approved eight and considers the matter closed.
 */

const CX = 50;
const CY = 50;

function pt(radius: number, degrees: number) {
  const r = (degrees * Math.PI) / 180;
  return [CX + radius * Math.cos(r), CY + radius * Math.sin(r)] as const;
}

function f(n: number) {
  return Math.round(n * 1000) / 1000;
}

export type ApertureMarkProps = {
  blades?: number;
  /** How far each blade sweeps in toward the opening, in degrees. */
  swirl?: number;
  /** Radius of the central opening (0-46). Smaller = more closed. */
  opening?: number;
  strokeWidth?: number;
  title?: string;
} & React.SVGProps<SVGSVGElement>;

export function ApertureMark({
  blades = 8,
  swirl = 54,
  opening = 15,
  strokeWidth = 4.5,
  title,
  ...rest
}: ApertureMarkProps) {
  const R = 46;
  const arcR = 40;

  const edges: string[] = [];
  for (let i = 0; i < blades; i++) {
    const t0 = (i * 360) / blades;
    const [x0, y0] = pt(R, t0);
    const [x1, y1] = pt(opening, t0 + swirl);
    edges.push(`M ${f(x0)} ${f(y0)} A ${arcR} ${arcR} 0 0 1 ${f(x1)} ${f(y1)}`);
  }

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <circle cx={CX} cy={CY} r={R} />
      <path d={edges.join(" ")} />
    </svg>
  );
}

/** Solid-fill variant for favicons, seals and anywhere a hairline would vanish. */
export function ApertureSeal({ title, ...rest }: { title?: string } & React.SVGProps<SVGSVGElement>) {
  const blades = 8;
  const R = 46;
  const opening = 16;
  const swirl = 54;
  const wedges: string[] = [];
  for (let i = 0; i < blades; i++) {
    const t0 = (i * 360) / blades;
    const t1 = t0 + 360 / blades;
    const [ax, ay] = pt(R, t0);
    const [bx, by] = pt(R, t1);
    const [cx2, cy2] = pt(opening, t0 + swirl);
    wedges.push(
      `M ${f(ax)} ${f(ay)} A ${R} ${R} 0 0 1 ${f(bx)} ${f(by)} L ${f(cx2)} ${f(cy2)} Z`
    );
  }
  return (
    <svg
      viewBox="0 0 100 100"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d={wedges.join(" ")} fill="currentColor" stroke="currentColor" strokeWidth={1.2} strokeLinejoin="round" />
    </svg>
  );
}

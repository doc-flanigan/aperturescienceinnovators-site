import * as React from "react";

/**
 * PRINTERS' ORNAMENT
 * Bursts, rosettes and orbits, cut in-house. The Art Department was
 * reorganised into the Materials Department in the spring; these are what
 * they left behind.
 */

function f(n: number) {
  return Math.round(n * 100) / 100;
}

/** The advertising burst. Points alternate between two radii. */
export function Starburst({
  points = 22,
  inner = 0.78,
  label,
  sub,
  ...rest
}: { points?: number; inner?: number; label?: string; sub?: string } & Omit<React.SVGProps<SVGSVGElement>, "points">) {
  const cx = 50;
  const cy = 50;
  const R = 48;
  const coords: string[] = [];
  const total = points * 2;
  for (let i = 0; i < total; i++) {
    const r = i % 2 === 0 ? R : R * inner;
    const a = ((i * 360) / total - 90) * (Math.PI / 180);
    coords.push(`${f(cx + r * Math.cos(a))},${f(cy + r * Math.sin(a))}`);
  }
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" {...rest}>
      <polygon points={coords.join(" ")} fill="currentColor" />
      {label ? (
        <text
          x="50"
          y={sub ? 46 : 55}
          textAnchor="middle"
          fill="var(--paper)"
          fontFamily="var(--font-grot)"
          fontWeight={700}
          fontSize={label.length > 6 ? 15 : 21}
          letterSpacing="0.5"
        >
          {label}
        </text>
      ) : null}
      {sub ? (
        <text
          x="50"
          y="63"
          textAnchor="middle"
          fill="var(--paper)"
          fontFamily="var(--font-grot)"
          fontWeight={500}
          fontSize={9}
          letterSpacing="1"
        >
          {sub}
        </text>
      ) : null}
    </svg>
  );
}

/** Atomic-age orbit. Every 1950s brochure had one. Ours has two extra electrons. */
export function AtomicOrbit({ rings = 3, ...rest }: { rings?: number } & React.SVGProps<SVGSVGElement>) {
  const arr = Array.from({ length: rings }, (_, i) => (i * 180) / rings);
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" aria-hidden="true" {...rest}>
      {arr.map((deg) => (
        <ellipse key={deg} cx="50" cy="50" rx="46" ry="17" strokeWidth={2} transform={`rotate(${f(deg)} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="7" fill="currentColor" stroke="none" />
      {arr.map((deg) => {
        const a = ((deg + 12) * Math.PI) / 180;
        return (
          <circle
            key={`e${deg}`}
            cx={f(50 + 46 * Math.cos(a))}
            cy={f(50 + 17 * Math.sin(a))}
            r="3.4"
            fill="currentColor"
            stroke="none"
            transform={`rotate(${f(deg)} 50 50)`}
          />
        );
      })}
    </svg>
  );
}

/** Engine-turned rosette, as seen on share certificates and bad cheques. */
export function Rosette({ petals = 24, ...rest }: { petals?: number } & React.SVGProps<SVGSVGElement>) {
  const circles = Array.from({ length: petals }, (_, i) => {
    const a = ((i * 360) / petals) * (Math.PI / 180);
    return { cx: f(50 + 16 * Math.cos(a)), cy: f(50 + 16 * Math.sin(a)) };
  });
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={0.6} aria-hidden="true" {...rest}>
      {circles.map((c, i) => (
        <circle key={i} cx={c.cx} cy={c.cy} r="30" />
      ))}
      <circle cx="50" cy="50" r="47" strokeWidth={1.4} />
    </svg>
  );
}

/** A typographic flourish for the foot of a chapter. */
export function Flourish(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 20" fill="none" stroke="currentColor" strokeWidth={1.4} aria-hidden="true" {...props}>
      <path d="M4 10h62" />
      <path d="M136 10h60" />
      <path d="M100 3 108 10 100 17 92 10z" fill="currentColor" stroke="none" />
      <circle cx="76" cy="10" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="124" cy="10" r="2.6" fill="currentColor" stroke="none" />
      <path d="M82 10h6M112 10h6" />
    </svg>
  );
}

/** Cross-section of the shafts, used as a spot illustration. */
export function ShaftSection(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 130" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
      <path strokeWidth={2} d="M4 24h192" />
      <path strokeWidth={1} strokeDasharray="3 4" d="M4 24c14-8 30-6 44-2s28 6 46 1 34-8 52-3 32 8 50 4" />
      <g strokeWidth={1.4}>
        <path d="M62 24v100M138 24v100" />
        <path d="M62 44h76M62 66h76M62 88h76M62 110h76" />
      </g>
      <g strokeWidth={1} opacity={0.55}>
        <path d="M20 40h30M20 58h30M20 76h30M150 40h30M150 58h30M150 76h30" />
      </g>
      <circle cx="100" cy="34" r="5" strokeWidth={1.6} />
      <circle cx="100" cy="56" r="5" strokeWidth={1.6} />
      <circle cx="100" cy="78" r="5" strokeWidth={1.6} />
      <circle cx="100" cy="100" r="5" strokeWidth={1.6} />
      <path strokeWidth={1.2} strokeDasharray="2 3" d="M100 39v12M100 61v12M100 83v12M100 105v20" />
    </svg>
  );
}

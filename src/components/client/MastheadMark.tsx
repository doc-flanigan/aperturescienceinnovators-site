"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ApertureMark } from "@/components/svg/ApertureMark";
import { grantClearance } from "@/lib/clearance";

/**
 * The mark on the masthead. It is an aperture. Apertures close.
 * Nine presses closes it entirely, and what is behind it is not the lobby.
 */
export function MastheadMark({ className }: { className?: string }) {
  const router = useRouter();
  const [count, setCount] = React.useState(0);
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const opening = Math.max(2, 15 - count * 1.7);
  const swirl = 54 + count * 2.6;

  function tap() {
    const next = count + 1;
    setCount(next);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCount(0), 2200);
    if (next >= 9) {
      if (timer.current) clearTimeout(timer.current);
      setCount(0);
      grantClearance(5, "aperture-closed");
      router.push("/vault");
    }
  }

  return (
    <button
      type="button"
      onClick={tap}
      aria-label="Aperture Science Innovators"
      title="Aperture Science Innovators"
      className={className}
      style={{
        background: "none",
        border: 0,
        padding: 0,
        cursor: "pointer",
        color: "inherit",
        display: "block",
        lineHeight: 0,
      }}
    >
      <ApertureMark opening={opening} swirl={swirl} style={{ width: "100%", height: "auto", display: "block" }} />
    </button>
  );
}

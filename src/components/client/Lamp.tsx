"use client";

import * as React from "react";

const KEY = "asi.readingroom.lamp";

/**
 * READING ROOM LIGHTING
 * Daylight: the document as printed.
 * Microfilm: the document as the archive holds it, after hours.
 */
export function Lamp() {
  const [mode, setMode] = React.useState<"daylight" | "microfilm" | null>(null);

  React.useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setMode(current === "microfilm" ? "microfilm" : "daylight");
  }, []);

  function toggle() {
    const next = mode === "microfilm" ? "daylight" : "microfilm";
    setMode(next);
    if (next === "microfilm") {
      document.documentElement.setAttribute("data-theme", "microfilm");
    } else {
      document.documentElement.setAttribute("data-theme", "daylight");
    }
    try {
      window.localStorage.setItem(KEY, next);
    } catch {
      /* ignore */
    }
  }

  return (
    <button type="button" className="ap-lamp ap-noprint" onClick={toggle} suppressHydrationWarning>
      <span className="ap-lamp__bulb" aria-hidden="true" />
      <span>
        Reading room:{" "}
        <b style={{ fontWeight: 600 }}>{mode === null ? "        " : mode}</b>
      </span>
    </button>
  );
}

/** Runs before paint so the archive never flashes daylight at 3 a.m. */
export const LAMP_BOOT_SCRIPT = `(function(){try{var k=${JSON.stringify(KEY)};var s=localStorage.getItem(k);var m=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;var t=s?s:(m?"microfilm":"daylight");document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

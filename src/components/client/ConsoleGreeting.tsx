"use client";

import * as React from "react";

const BANNER = String.raw`
   _   ___ ___ ___ _____ _   _ ___ ___
  /_\ | _ \ __| _ \_   _| | | | _ \ __|
 / _ \|  _/ _||   / | | | |_| |   / _|
/_/ \_\_| |___|_|_\ |_|  \___/|_|_\___|
        S C I E N C E   I N N O V A T O R S
`;

/**
 * If a visitor is clever enough to open the developer's inspection panel,
 * a visitor is clever enough to be recruited.
 */
export function ConsoleGreeting() {
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window as unknown as { __asiGreeted?: boolean };
    if (w.__asiGreeted) return;
    w.__asiGreeted = true;

    const head = "color:#c25a1c;font-family:monospace;font-size:11px;line-height:1.15";
    const body = "color:#1d5878;font-family:monospace;font-size:12px";
    const dim = "color:#8a8170;font-family:monospace;font-size:11px";

    /* eslint-disable no-console */
    console.log(`%c${BANNER}`, head);
    console.log(
      "%cSo you're a look-under-the-hood type. Good. We hire those.",
      body
    );
    console.log(
      "%cThe front of this building is for investors. You want the back.\n" +
        "  · Type a word. Any word. Some of them are doors.\n" +
        "  · The old sequence still works. Up, up, down, down, and so forth.\n" +
        "  · Read the print. Nobody reads the print. That is where we keep things.\n" +
        "  · /the-directory lists every sheet we admit to.",
      dim
    );
    console.log(
      "%cAPERTURE SCIENCE INNOVATORS — WE DO WHAT WE MUST BECAUSE WE CAN",
      "color:#8d2f21;font-family:monospace;font-size:11px;font-weight:bold"
    );
    /* eslint-enable no-console */
  }, []);

  return null;
}

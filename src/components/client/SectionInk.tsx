"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { eraForPath } from "@/lib/eras";

/**
 * THE PRESS RUN
 *
 * A 1950s job was black plus one spot colour. The catalogue section ran
 * orange because the catalogue ran orange; the science bulletin ran teal
 * because it was a different day on a different press. This stamps the
 * department onto the root element so every accent on the sheet resolves to
 * that one ink, and no page ever shows four spot colours at once.
 */
export function SectionInk() {
  const pathname = usePathname() ?? "/";

  React.useEffect(() => {
    const root = document.documentElement;
    const era = eraForPath(pathname);
    /* The printing first: it decides the stock. Then the department's ink. */
    if (era.key === "1959") root.removeAttribute("data-era");
    else root.setAttribute("data-era", era.key);
    const dept = pathname.split("/")[1] ?? "";
    if (dept) root.setAttribute("data-dept", dept);
    else root.removeAttribute("data-dept");
  }, [pathname]);

  return null;
}

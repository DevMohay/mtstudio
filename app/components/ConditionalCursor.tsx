"use client";

import React, { useEffect, useState } from "react";
import Cursor from "./Cursor";

export default function ConditionalCursor() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Detect if device supports hover + fine pointer (desktop typically)
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");

    const update = () => setEnabled(mq.matches);

    update(); // initial check

    if (mq.addEventListener) {
      mq.addEventListener("change", update);
    } else if (mq.addListener) {
      mq.addListener(update); // older browsers
    }

    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener("change", update);
      } else if (mq.removeListener) {
        mq.removeListener(update);
      }
    };
  }, []);

  if (!enabled) return null; // mobile/tablet => no cursor effect
  return <Cursor />;
}

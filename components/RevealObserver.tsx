"use client";

import { useEffect } from "react";

/** Fades/slides `.reveal` elements in as they enter the viewport (same as the original script). */
export default function RevealObserver() {
  useEffect(() => {
    (window as unknown as { __revealReady?: boolean }).__revealReady = true;
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((x) => {
          if (x.isIntersecting) {
            x.target.classList.add("in");
            io.unobserve(x.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

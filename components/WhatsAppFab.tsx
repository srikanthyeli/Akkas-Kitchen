"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./icons";
import { waLink } from "@/lib/whatsapp";

export default function WhatsAppFab() {
  // Hide the floating button while the order form is on screen so it never covers form fields
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const el = document.getElementById("order");
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setHidden(e.isIntersecting), { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <aside
      aria-label="Quick WhatsApp Order"
      className={`fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 flex items-center group transition-all duration-300 ${hidden ? "opacity-0 pointer-events-none translate-y-4" : "opacity-100"}`}
    >
      <a
        href={waLink()}
        target="_blank"
        rel="noopener"
        className="flex items-center gap-2.5 bg-[#1f8f4e] hover:bg-[#18763f] text-white p-3 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-black/40 hover:scale-105 active:scale-95 transition-all duration-300 no-underline"
        aria-label="Order on WhatsApp (97032 35395)"
      >
        <span className="relative flex items-center justify-center">
          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-white" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#34d399]"></span>
          </span>
        </span>
        <span className="hidden sm:inline-flex flex-col text-left leading-tight pr-1">
          <span className="text-[11px] font-semibold text-emerald-100 uppercase tracking-wider">
            Online Now
          </span>
          <span className="text-sm font-bold text-white font-serif">
            Order on WhatsApp
          </span>
        </span>
      </a>
    </aside>
  );
}

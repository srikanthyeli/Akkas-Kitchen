"use client";

import { useState, useEffect } from "react";
import { WhatsAppIcon, MenuIcon, CloseIcon, PhoneIcon } from "./icons";
import { waLink } from "@/lib/whatsapp";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#why-us", label: "Why Us" },
  { href: "#about", label: "Our Story" },
  { href: "#location", label: "Delivery" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 transition-all duration-300">
      {/* Top micro-announcement bar */}
      <div className="bg-[#16301f] text-[#fbf5e9] text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 border-b border-[#244b32]">
        <span className="inline-flex items-center gap-1.5 bg-[#1f8f4e]/20 text-[#a3e6be] px-2 py-0.5 rounded-full text-[11px] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse"></span>
          Taking Fresh Orders
        </span>
        <span className="hidden sm:inline text-white/80">Madhapur &amp; HITEC City</span>
        <span className="hidden md:inline text-white/50">·</span>
        <a
          href="tel:919703235395"
          className="text-[#ffb27a] hover:text-white transition-colors inline-flex items-center gap-1 font-medium"
        >
          <PhoneIcon className="w-3 h-3 stroke-current" />
          97032 35395
        </a>
      </div>

      {/* Main navbar */}
      <nav
        className={`transition-all duration-200 border-b ${
          scrolled
            ? "bg-[#fbf5e9]/95 backdrop-blur-md shadow-sm border-[#e7d9bd]"
            : "bg-[#fbf5e9] border-[#e7d9bd]/80"
        }`}
      >
        <div className="wrap flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a
            className="flex items-center gap-2 group text-decoration-none no-underline"
            href="#top"
            aria-label="Akka's Kitchen Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#d9580f] to-[#b8470a] flex items-center justify-center text-white shadow-sm shadow-[#d9580f]/30 group-hover:scale-105 transition-transform">
              <span className="text-lg font-bold font-serif">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg md:text-xl tracking-wider text-[#1f3d2b] leading-tight">
                AKKAS <span className="text-[#b8470a]">KITCHEN</span>
              </span>
              <span className="text-xs font-medium text-[#b8470a] tracking-wider leading-none te font-telugu">
                అక్క ఇంటి వంట
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-7 list-none m-0 p-0">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="whitespace-nowrap text-[#1f3d2b] hover:text-[#d9580f] font-medium text-[15px] transition-colors no-underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#order"
              className="whitespace-nowrap text-[15px] font-medium text-[#1f3d2b] hover:text-[#d9580f] px-3 py-2 rounded-lg transition-colors no-underline"
            >
              Order Form
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-[#1f8f4e] hover:bg-[#18763f] text-white px-4 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-[#1f8f4e]/20 transition-all hover:-translate-y-0.5 no-underline"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span className="whitespace-nowrap">Order on WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="sm:hidden inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#1f8f4e] text-white shadow-sm"
              aria-label="Order on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-xl bg-[#f3e8d2] text-[#1f3d2b] flex items-center justify-center focus:outline-none hover:bg-[#ebdcc0] transition-colors cursor-pointer"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <CloseIcon className="w-5 h-5 stroke-current" />
              ) : (
                <MenuIcon className="w-5 h-5 stroke-current" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[102px] bottom-0 bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-[#fbf5e9] border-b border-[#e7d9bd] p-6 shadow-2xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-[#e7d9bd]">
              <div>
                <p className="font-serif font-bold text-[#1f3d2b] text-base">AKKAS KITCHEN</p>
                <p className="text-xs text-[#b8470a] font-telugu">అక్క ఇంటి వంట · Homemade food</p>
              </div>
              <span className="text-[11px] font-semibold bg-[#1f8f4e]/10 text-[#1f8f4e] px-2.5 py-1 rounded-full">
                Open Daily
              </span>
            </div>

            <ul className="flex flex-col gap-1 py-4 list-none m-0 p-0">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-3 px-3 rounded-xl text-[#1f3d2b] font-medium text-base hover:bg-[#f3e8d2] transition-colors no-underline"
                  >
                    <span>{l.label}</span>
                    <span className="text-[#b8470a] font-bold">→</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-[#e7d9bd] space-y-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#1f8f4e] text-white py-3.5 px-4 rounded-xl font-semibold shadow-md text-base no-underline"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                <span>Chat &amp; Order on WhatsApp</span>
              </a>

              <a
                href="#order"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#d9580f] text-white py-3 px-4 rounded-xl font-semibold text-sm no-underline"
              >
                <span>Fill Instant Order Form</span>
              </a>

              <div className="text-center text-xs text-[#3c5a46] pt-2">
                Cloud Kitchen in Madhapur · Delivery across HITEC City
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

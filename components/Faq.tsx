"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { ChevronDownIcon, WhatsAppIcon } from "./icons";
import { waLink } from "@/lib/whatsapp";

const faqs = [
  {
    q: "How does ordering from Akka's Kitchen work?",
    a: "Use the order form below or WhatsApp 97032 35395 with your items, spice level and address. We confirm, cook fresh and deliver hot.",
  },
  {
    q: "Can I customize the spice levels of the curry?",
    a: "Yes. Choose Mild, Medium or Spicy Andhra style.",
  },
  {
    q: "How are the phulkas and curry packed for delivery?",
    a: "Curries go in leak-proof, microwave-safe containers, and phulkas in foil wraps to stay soft and hot.",
  },
  {
    q: "Is dine-in available at Akka's Kitchen?",
    a: "No, we're delivery and takeaway only.",
  },
  {
    q: "Do you take bulk food orders or office team lunches?",
    a: "Yes, for office teams and family events. Please order 12–24 hours ahead.",
  },
  {
    q: "What payment methods are supported?",
    a: "UPI (GPay, PhonePe, Paytm) or cash on delivery nearby.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#fbf5e9] border-b border-[#e7d9bd]/80">
      <div className="wrap">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Everything You Need to Know"
        >
          Got questions about our cooking process, delivery, or custom orders? Find answers below or message akka directly!
        </SectionHeading>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="reveal bg-white rounded-2xl border border-[#eadbc0] overflow-hidden transition-all duration-200 shadow-2xs hover:shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-serif font-bold text-base sm:text-lg text-[#1f3d2b] hover:text-[#d9580f] transition-colors focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{f.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#f3e8d2] flex items-center justify-center shrink-0 text-[#1f3d2b] transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#d9580f] text-white" : ""
                    }`}
                  >
                    <ChevronDownIcon className="w-4 h-4 stroke-current" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm sm:text-base text-[#1f3d2b]/80 leading-relaxed border-t border-[#f3e8d2] pt-4 animate-in fade-in duration-200">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center reveal">
          <p className="text-sm text-[#3c5a46] mb-3">
            Have a different question or dietary preference?
          </p>
          <a
            href={waLink("హాయ్ అక్క, నాకు ఒక ప్రశ్న ఉంది (Hi Akka, I have a question about the food)")}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 text-[#1f8f4e] hover:text-[#18763f] text-sm font-semibold underline underline-offset-4"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current" />
            <span>Ask Akka on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

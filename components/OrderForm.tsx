"use client";

import { useState, type FormEvent } from "react";
import { WhatsAppIcon, FlameIcon, ClockIcon } from "./icons";
import { buildWaLink, REQUIRED_FIELDS, type OrderFields } from "@/lib/whatsapp";

const FIELD_NAMES = ["name", "phone", "items", "qty", "area", "notes"] as const;

const QUICK_ITEMS = [
  "1/2 Kg Chicken Curry + White Rice + Phulkas",
  "Pressure-Cooked Chicken Curry (1/2 Kg)",
  "Hand-Rolled Tawa Phulkas (4 pcs)",
  "Hand-Rolled Tawa Phulkas (10 pcs)",
  "Steamed White Rice Bowl",
  "Homemade Chicken Dum Biryani Special",
];

const SPICE_OPTIONS = [
  "Mild (Kid friendly)",
  "Medium Homestyle (Standard)",
  "Spicy Andhra Style",
];

const TIME_SLOTS = [
  "ASAP Delivery",
  "Lunch (12:30 PM – 2:30 PM)",
  "Dinner (7:30 PM – 10:00 PM)",
];

export default function OrderForm() {
  const [formData, setFormData] = useState<OrderFields>({
    name: "",
    phone: "",
    items: "1/2 Kg Chicken Curry + White Rice + Phulkas",
    qty: "1",
    area: "Madhapur",
    notes: "Medium Homestyle spice level",
  });

  const [selectedSpice, setSelectedSpice] = useState("Medium Homestyle (Standard)");
  const [selectedTime, setSelectedTime] = useState("ASAP Delivery");

  const handleChange = (field: keyof OrderFields, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleQuickAdd = (item: string) => {
    setFormData((prev) => {
      if (!prev.items) return { ...prev, items: item };
      if (prev.items.includes(item)) return prev;
      return { ...prev, items: `${prev.items}, ${item}` };
    });
  };

  const handleSpiceSelect = (spice: string) => {
    setSelectedSpice(spice);
    setFormData((prev) => {
      const cleanNotes = prev.notes
        .replace(/Spice:\s*[^;]+;?\s*/gi, "")
        .trim();
      const updated = cleanNotes
        ? `Spice: ${spice}; ${cleanNotes}`
        : `Spice: ${spice}`;
      return { ...prev, notes: updated };
    });
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setFormData((prev) => {
      const cleanNotes = prev.notes
        .replace(/Time:\s*[^;]+;?\s*/gi, "")
        .trim();
      const updated = cleanNotes
        ? `Time: ${time}; ${cleanNotes}`
        : `Time: ${time}`;
      return { ...prev, notes: updated };
    });
  };

  const adjustQty = (delta: number) => {
    const current = parseInt(formData.qty) || 1;
    const next = Math.max(1, current + delta);
    handleChange("qty", String(next));
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const field = (id: string) =>
      form.elements.namedItem(id) as HTMLInputElement | HTMLTextAreaElement;

    const values = Object.fromEntries(
      FIELD_NAMES.map((n) => [n, field(n).value.trim()]),
    ) as OrderFields;

    for (const req of REQUIRED_FIELDS) {
      if (!values[req]) {
        field(req).focus();
        return;
      }
    }

    window.open(buildWaLink(values), "_blank", "noopener");
  }

  // Generate live WhatsApp preview text
  const previewText = [
    "AKKAS KITCHEN ఆర్డర్ కోసం",
    `Name: ${formData.name || "(Your Name)"}`,
    `Phone: ${formData.phone || "(Your Phone Number)"}`,
    `Item(s): ${formData.items || "(Selected Food Items)"}`,
    `Quantity: ${formData.qty || "1"}`,
    `Delivery area: ${formData.area || "Madhapur"}`,
    `Notes: ${formData.notes || "None"}`,
  ].join("\n");

  return (
    <div className="reveal max-w-4xl mx-auto">
      <form
        id="orderForm"
        className="bg-white text-[#1f3d2b] p-6 sm:p-10 rounded-[32px] shadow-2xl border-t-8 border-[#d9580f] border border-[#ead9b8] relative"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="mb-8 pb-6 border-b border-[#f3e8d2]">
          <h3 className="font-serif text-2xl font-bold text-[#1f3d2b] mb-1">
            Customize &amp; Send Your WhatsApp Order
          </h3>
          <p className="text-sm text-[#3c5a46]">
            Select your favorite homemade dishes below. Submitting will open WhatsApp with your pre-formatted order message.
          </p>
        </div>

        {/* Quick Item Picker Chips */}
        <div className="mb-6">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#b8470a] mb-2">
            Quick Add Popular Dishes:
          </label>
          <div className="flex flex-wrap gap-2">
            {QUICK_ITEMS.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleQuickAdd(item)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all cursor-pointer border ${
                  formData.items.includes(item)
                    ? "bg-[#1f3d2b] text-white border-[#1f3d2b]"
                    : "bg-[#fbf5e9] text-[#1f3d2b] border-[#eadbc0] hover:bg-[#f3e8d2] hover:border-[#d9580f]"
                }`}
              >
                + {item}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#1f3d2b] mb-2">
              Your Name <span className="text-[#b8470a]">*</span>
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              placeholder="e.g. Rahul Reddy"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl border border-[#d8c7a5] bg-[#fffcf7] text-[#1f3d2b] focus:outline-none focus:border-[#d9580f] focus:ring-2 focus:ring-[#d9580f]/20 transition-all text-sm font-medium"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#1f3d2b] mb-2">
              Phone Number <span className="text-[#b8470a]">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              placeholder="e.g. 98765 43210"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl border border-[#d8c7a5] bg-[#fffcf7] text-[#1f3d2b] focus:outline-none focus:border-[#d9580f] focus:ring-2 focus:ring-[#d9580f]/20 transition-all text-sm font-medium"
            />
          </div>

          {/* Items Field */}
          <div className="sm:col-span-2">
            <label htmlFor="items" className="block text-xs font-bold uppercase tracking-wider text-[#1f3d2b] mb-2">
              Selected Item(s) <span className="text-[#b8470a]">*</span>
            </label>
            <input
              id="items"
              name="items"
              required
              placeholder="e.g. 1/2 Chicken Curry + White Rice + Phulkas"
              value={formData.items}
              onChange={(e) => handleChange("items", e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl border border-[#d8c7a5] bg-[#fffcf7] text-[#1f3d2b] focus:outline-none focus:border-[#d9580f] focus:ring-2 focus:ring-[#d9580f]/20 transition-all text-sm font-medium"
            />
          </div>

          {/* Quantity with stepper */}
          <div>
            <label htmlFor="qty" className="block text-xs font-bold uppercase tracking-wider text-[#1f3d2b] mb-2">
              Quantity / Number of Meals
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => adjustQty(-1)}
                className="w-11 h-11 rounded-xl bg-[#f3e8d2] text-[#1f3d2b] font-bold text-lg flex items-center justify-center hover:bg-[#ebdcc0] transition-colors cursor-pointer shrink-0"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <input
                id="qty"
                name="qty"
                placeholder="e.g. 1"
                value={formData.qty}
                onChange={(e) => handleChange("qty", e.target.value)}
                className="w-full text-center px-4 py-3 rounded-xl border border-[#d8c7a5] bg-[#fffcf7] text-[#1f3d2b] font-bold text-base focus:outline-none focus:border-[#d9580f]"
              />
              <button
                type="button"
                onClick={() => adjustQty(1)}
                className="w-11 h-11 rounded-xl bg-[#f3e8d2] text-[#1f3d2b] font-bold text-lg flex items-center justify-center hover:bg-[#ebdcc0] transition-colors cursor-pointer shrink-0"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Delivery Area */}
          <div>
            <label htmlFor="area" className="block text-xs font-bold uppercase tracking-wider text-[#1f3d2b] mb-2">
              Delivery Area / Landmark
            </label>
            <input
              id="area"
              name="area"
              placeholder="e.g. Madhapur, Near Cyber Towers"
              value={formData.area}
              onChange={(e) => handleChange("area", e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl border border-[#d8c7a5] bg-[#fffcf7] text-[#1f3d2b] focus:outline-none focus:border-[#d9580f] focus:ring-2 focus:ring-[#d9580f]/20 transition-all text-sm font-medium"
            />
          </div>

          {/* Spice Preference Pills */}
          <div className="sm:col-span-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1f3d2b] mb-2 flex items-center gap-1.5">
              <FlameIcon className="w-3.5 h-3.5 text-[#b8470a]" />
              <span>Spice Level Preference:</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {SPICE_OPTIONS.map((spice) => (
                <button
                  key={spice}
                  type="button"
                  onClick={() => handleSpiceSelect(spice)}
                  className={`text-xs py-2.5 px-3 rounded-xl font-medium border text-center transition-all cursor-pointer ${
                    selectedSpice === spice
                      ? "bg-[#d9580f] text-white border-[#d9580f] shadow-xs"
                      : "bg-[#fffcf7] text-[#1f3d2b] border-[#d8c7a5] hover:bg-[#f3e8d2]"
                  }`}
                >
                  {spice}
                </button>
              ))}
            </div>
          </div>

          {/* Preferred Delivery Time */}
          <div className="sm:col-span-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1f3d2b] mb-2 flex items-center gap-1.5">
              <ClockIcon className="w-3.5 h-3.5 text-[#1f8f4e]" />
              <span>Preferred Delivery Timing:</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {TIME_SLOTS.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => handleTimeSelect(time)}
                  className={`text-xs py-2.5 px-3 rounded-xl font-medium border text-center transition-all cursor-pointer ${
                    selectedTime === time
                      ? "bg-[#1f3d2b] text-white border-[#1f3d2b] shadow-xs"
                      : "bg-[#fffcf7] text-[#1f3d2b] border-[#d8c7a5] hover:bg-[#f3e8d2]"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="sm:col-span-2">
            <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-[#1f3d2b] mb-2">
              Special Instructions / Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              placeholder="Spice level, timing, flat number, or special requests"
              value={formData.notes}
              onChange={(e) => handleChange("notes", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#d8c7a5] bg-[#fffcf7] text-[#1f3d2b] focus:outline-none focus:border-[#d9580f] focus:ring-2 focus:ring-[#d9580f]/20 transition-all text-sm font-medium"
            />
          </div>

          {/* Live WhatsApp Message Preview Bubble */}
          <div className="sm:col-span-2 bg-[#f0f9f3] border border-[#a3e6be] rounded-2xl p-4 sm:p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1f8f4e] flex items-center gap-1.5">
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                <span>Live WhatsApp Message Preview:</span>
              </span>
              <span className="text-[11px] text-[#3c5a46] font-medium">Auto-generated</span>
            </div>
            <pre className="text-xs text-[#1f3d2b] font-mono whitespace-pre-wrap bg-white/80 p-3.5 rounded-xl border border-[#c6ecd6] overflow-x-auto leading-relaxed">
              {previewText}
            </pre>
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2">
            <button
              className="w-full inline-flex items-center justify-center gap-3 bg-[#1f8f4e] hover:bg-[#18763f] text-white font-bold py-4 px-8 rounded-full text-base sm:text-lg shadow-xl shadow-[#1f8f4e]/30 hover:shadow-2xl hover:-translate-y-0.5 transition-all cursor-pointer border-0"
              type="submit"
            >
              <WhatsAppIcon className="w-6 h-6 fill-current" />
              <span>Send Order on WhatsApp</span>
            </button>
            <p className="text-center text-xs text-[#3c5a46] mt-3">
              Direct connection with Akka&apos;s Kitchen (97032 35395) · Zero aggregator markups
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

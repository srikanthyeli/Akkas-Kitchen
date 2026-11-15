import { WhatsAppIcon } from "./icons";
import OrderForm from "./OrderForm";
import { waLink } from "@/lib/whatsapp";

export default function Order() {
  return (
    <section id="order" className="py-20 md:py-28 bg-gradient-to-b from-[#1b3626] via-[#152c1e] to-[#122419] text-[#fbf5e9] relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#d9580f]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="wrap relative z-10">
        <div className="sec-h reveal text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#ffb27a] mb-2">
            <span>Direct WhatsApp Ordering</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white! font-bold mt-1 mb-3">
            Place Your Order
          </h2>
          <p className="text-[#e8efe5]! text-base sm:text-lg">
            Fill the form below or WhatsApp <strong className="text-[#ffb27a] font-bold">97032 35395</strong>.
          </p>
        </div>

        {/* The interactive order form */}
        <OrderForm />

        {/* Quick Direct Link alternative */}
        <div className="mt-12 text-center reveal">
          <p className="text-sm text-[#d9e3d6] mb-4">
            Prefer to chat directly without filling the form?
          </p>
          <a
            className="inline-flex items-center gap-2 text-[#a3e6be] hover:text-white font-semibold text-base underline underline-offset-4"
            href={waLink()}
            target="_blank"
            rel="noopener"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current" />
            <span>Chat on WhatsApp (97032 35395)</span>
          </a>
        </div>
      </div>
    </section>
  );
}

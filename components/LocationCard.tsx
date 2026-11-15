import { PinIcon, TruckIcon, ClockIcon } from "./icons";
import { MAPS_URL } from "./site";
import { waLink } from "@/lib/whatsapp";

const deliveryZones = [
  { area: "Madhapur", time: "20–30 mins" },
  { area: "HITEC City / Cyber Towers", time: "25–35 mins" },
  { area: "Kondapur", time: "30–40 mins" },
  { area: "Durgam Cheruvu & Inorbit", time: "20–30 mins" },
  { area: "Jubilee Hills", time: "35–45 mins" },
  { area: "Gachibowli", time: "35–45 mins" },
];

export default function LocationCard() {
  const checkDeliveryWa =
    "హాయ్ అక్క, నా ఏరియాకి డెలివరీ ఉందా? (Hi Akka, do you deliver to my area?)";

  return (
    <div className="reveal bg-gradient-to-br from-white via-[#fffaf2] to-[#fff4e3] rounded-[32px] p-8 sm:p-12 border border-[#ead9b8] shadow-xl relative overflow-hidden">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#d9580f_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.04] pointer-events-none"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Side: Pin Icon & Address info */}
        <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-[#d9580f] to-[#b8470a] flex items-center justify-center text-white shadow-lg shadow-[#d9580f]/30 mb-6">
            <PinIcon className="w-10 h-10 fill-current" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-[#b8470a] mb-1">
            Cloud Kitchen Hub
          </span>
          <h3 className="font-serif text-3xl font-bold text-[#1f3d2b] mb-1">
            Madhapur, Hyderabad
          </h3>
          <p className="font-telugu text-xl font-semibold text-[#b8470a] mb-3">
            మాదాపూర్, హైదరాబాద్
          </p>
          <p className="text-sm text-[#3c5a46] font-medium mb-6">
            Near HITEC City, Durgam Cheruvu &amp; Cyber Gateway.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
            <a
              className="inline-flex items-center justify-center gap-2 bg-[#d9580f] hover:bg-[#b8470a] text-white px-5 py-3 rounded-full text-sm font-semibold shadow-md shadow-[#d9580f]/20 hover:-translate-y-0.5 transition-all no-underline text-center"
              href={MAPS_URL}
              target="_blank"
              rel="noopener"
            >
              <PinIcon className="w-4 h-4 fill-current" />
              <span>Open in Google Maps</span>
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 bg-transparent text-[#1f3d2b] hover:bg-[#1f3d2b] hover:text-white border-2 border-[#1f3d2b] px-5 py-3 rounded-full text-sm font-semibold transition-all no-underline text-center"
              href={waLink(checkDeliveryWa)}
              target="_blank"
              rel="noopener"
            >
              <span>Ask about your area</span>
            </a>
          </div>
        </div>

        {/* Right Side: Delivery Radius & Coverage Grid */}
        <div className="lg:col-span-7 bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#e7d9bd] shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-serif text-lg font-bold text-[#1f3d2b] flex items-center gap-2">
              <TruckIcon className="w-5 h-5 text-[#b8470a]" />
              <span>Estimated Delivery Times</span>
            </h4>
            <span className="text-xs text-[#1f8f4e] font-semibold bg-[#1f8f4e]/10 px-2.5 py-1 rounded-full flex items-center gap-1">
              <ClockIcon className="w-3.5 h-3.5" />
              <span>Dispatched Hot</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {deliveryZones.map((z, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#fbf5e9] border border-[#eadbc0] flex items-center justify-between"
              >
                <div>
                  <div className="text-sm font-bold text-[#1f3d2b]">{z.area}</div>
                  <div className="text-xs text-[#3c5a46] font-medium flex items-center gap-1 mt-0.5">
                    <span>⚡</span>
                    <span>{z.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-xs text-[#3c5a46] bg-[#f3e8d2]/70 p-3.5 rounded-xl border border-[#e2d0ad] flex items-start gap-2">
            <span className="text-base leading-none">ℹ️</span>
            <span>
              <strong>Cloud Kitchen Model:</strong> Delivery and takeaway only, so all our focus goes on fresh cooking.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { WhatsAppIcon, FlameIcon, TruckIcon } from "./icons";
import { ORDER_PREFIX, waLink } from "@/lib/whatsapp";

const trustPills = [
  { label: "100% Homestyle", icon: "🏡" },
  { label: "Hand-Rolled Phulkas", icon: "🫓" },
  { label: "Small-Pot Cooking", icon: "🥘" },
  { label: "Zero Palm Oil", icon: "🌿" },
  { label: "#akkaintivanta", icon: "❤️" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fbf5e9] via-[#f7eedc] to-[#fbf5e9] pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#e7d9bd]/60" id="top">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#d9580f]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-[#1f3d2b]/10 to-transparent rounded-full blur-2xl pointer-events-none -z-0"></div>

      <div className="wrap relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3e8d2] border border-[#e2d0ad] text-[#b8470a] text-xs font-semibold uppercase tracking-wider mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#d9580f]"></span>
              <span>Authentic Homemade Cloud Kitchen · Madhapur</span>
            </div>

            {/* Main title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1f3d2b] leading-[1.08] mb-4">
              AKKAS <span className="text-[#b8470a]">KITCHEN</span>
            </h1>

            {/* Bilingual tagline */}
            <div className="mb-6">
              <p className="font-telugu text-2xl sm:text-3xl font-semibold text-[#b8470a] mb-1">
                అక్క ఇంటి వంట
              </p>
              <p className="text-lg sm:text-xl text-[#3c5a46] font-medium">
                Heavenly Homemade Food · Delivered Hot in Madhapur &amp; HITEC City
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#1f3d2b]/85 max-w-xl leading-relaxed mb-8">
              Small-batch chicken curry, hand-rolled phulkas and hot white rice, cooked just like akka makes at home.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <a
                className="inline-flex items-center justify-center gap-3 bg-[#1f8f4e] hover:bg-[#18763f] text-white font-semibold px-7 py-4 rounded-full text-base sm:text-lg shadow-lg shadow-[#1f8f4e]/30 hover:shadow-xl hover:-translate-y-0.5 transition-all no-underline text-center"
                href={waLink(ORDER_PREFIX)}
                target="_blank"
                rel="noopener"
              >
                <WhatsAppIcon className="w-6 h-6 fill-current" />
                <span>Order on WhatsApp</span>
              </a>

              <a
                className="inline-flex items-center justify-center gap-2 bg-[#ffffff]/80 hover:bg-[#ffffff] text-[#1f3d2b] hover:text-[#d9580f] border-2 border-[#d9580f]/40 hover:border-[#d9580f] font-semibold px-6 py-4 rounded-full text-base shadow-sm hover:-translate-y-0.5 transition-all no-underline text-center"
                href="#menu"
              >
                <FlameIcon className="w-5 h-5 stroke-current text-[#b8470a]" />
                <span>Explore Menu &amp; Combos</span>
              </a>
            </div>

            {/* Trust feature pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {trustPills.map((pill) => (
                <span
                  key={pill.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 border border-[#dcc9a4] text-xs font-medium text-[#1f3d2b] shadow-2xs hover:bg-white transition-colors"
                >
                  <span>{pill.icon}</span>
                  <span>{pill.label}</span>
                </span>
              ))}
            </div>

            {/* Quick delivery notice */}
            <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm text-[#3c5a46] font-medium">
              <TruckIcon className="w-4 h-4 text-[#b8470a]" />
              <span>Delivering across Madhapur, HITEC City, Kondapur, Jubilee Hills &amp; nearby</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Reel Frame */}
          <div className="lg:col-span-5 relative reveal">
            <div className="relative mx-auto max-w-[440px] lg:max-w-none">
              {/* Decorative outline border frame */}
              <div className="absolute -inset-3 rounded-[32px] border-2 border-[#d9580f]/30 transform rotate-1 pointer-events-none hidden sm:block"></div>

              {/* Main image card */}
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl shadow-[#1f3d2b]/25 bg-white border-4 border-white">
                <Image
                  src="/images/meal.jpg"
                  width={720}
                  height={940}
                  alt="1/2 kg chicken curry, a bowl of white rice and folded phulkas from Akkas Kitchen"
                  priority
                  className="w-full object-cover aspect-[4/5] object-center transform hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Floating Bottom Dish Description Card */}
                <div className="absolute bottom-4 inset-x-4 bg-gradient-to-r from-[#fbf5e9]/95 to-[#fffdf9]/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border-l-4 border-[#d9580f] border border-[#e7d9bd]/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif font-bold text-sm sm:text-base text-[#1f3d2b]">
                        Signature Homestyle Combo
                      </p>
                      <p className="text-xs text-[#b8470a] font-medium">
                        1/2 Kg Chicken Curry · Steamed Rice · Hand-Rolled Phulkas
                      </p>
                    </div>
                    <span className="text-[11px] font-bold bg-[#d9580f] text-white px-2.5 py-1 rounded-full whitespace-nowrap">
                      Cooked Fresh
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

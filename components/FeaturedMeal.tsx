import Image from "next/image";
import { WhatsAppIcon, StarIcon, CheckIcon } from "./icons";
import { waLink } from "@/lib/whatsapp";

export default function FeaturedMeal() {
  const mealWaText =
    "AKKAS KITCHEN ఆర్డర్ కోసం\n1/2 Kg Chicken Curry + White Rice + Phulkas Featured Combo ఆర్డర్ చేయాలనుకుంటున్నాను";

  return (
    <article className="reveal bg-gradient-to-br from-white to-[#fff9f0] rounded-[32px] overflow-hidden shadow-xl border-2 border-[#e7d4b5] mb-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
        {/* Left Column: Image with reel badge */}
        <div className="lg:col-span-6 relative aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-full min-h-[340px] bg-[#f3e8d2]">
          <Image
            src="/images/meal-sq.jpg"
            width={900}
            height={900}
            alt="Meal of half chicken curry, white rice and phulkas at Akka's Kitchen"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute top-4 left-4 bg-[#1f3d2b]/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-md">
            <span>🎥</span>
            <span>Real Reel Frame</span>
          </div>
          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-[#1f3d2b] px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg border border-[#e7d9bd]">
            <StarIcon className="w-3.5 h-3.5 fill-amber-500" />
            <span>Most Ordered Combo</span>
          </div>
        </div>

        {/* Right Column: Details & Ordering */}
        <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d9580f] text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <span>Signature Homestyle Feast</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1f3d2b] leading-tight mb-2">
            1/2 Kg Chicken Curry + White Rice + Phulkas
          </h3>

          <p className="font-telugu text-sm sm:text-base font-semibold text-[#b8470a] mb-4">
            అక్క ఇంటి చికెన్ కర్రీ · వేడి అన్నం · చేతి పుల్కాలు
          </p>

          <p className="text-sm sm:text-base text-[#1f3d2b]/85 leading-relaxed mb-6">
            <strong className="text-[#b8470a] font-semibold">Prep:</strong> Chicken slow-cooked with fresh-roasted spices into a thick, aromatic gravy, served with white rice and soft phulkas.
          </p>

          {/* Highlights checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-xs sm:text-sm font-medium text-[#1f3d2b]">
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 fill-[#1f8f4e]" />
              <span>Generous portion for 1–2 foodies</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 fill-[#1f8f4e]" />
              <span>Cooked fresh upon order</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 fill-[#1f8f4e]" />
              <span>Customizable spice levels</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 fill-[#1f8f4e]" />
              <span>Spill-proof warm delivery box</span>
            </div>
          </div>

          {/* Price & Actions */}
          <div className="pt-6 border-t border-[#eadbc0] flex flex-col gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#3c5a46] font-semibold block">
                Direct Pricing
              </span>
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#b8470a]">
                Ask on WhatsApp
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                className="whitespace-nowrap inline-flex items-center justify-center gap-2 bg-[#1f8f4e] hover:bg-[#18763f] text-white px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base shadow-md shadow-[#1f8f4e]/30 hover:-translate-y-0.5 transition-all no-underline text-center"
                href={waLink(mealWaText)}
                target="_blank"
                rel="noopener"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                <span>Order This Meal</span>
              </a>
              <a
                href="#order"
                className="whitespace-nowrap inline-flex items-center justify-center px-6 py-3.5 rounded-full border-2 border-[#1f3d2b] text-[#1f3d2b] hover:bg-[#1f3d2b] hover:text-white font-semibold text-sm sm:text-base transition-all no-underline"
              >
                Order via Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

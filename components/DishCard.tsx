import Image from "next/image";
import { WhatsAppIcon } from "./icons";
import { waLink } from "@/lib/whatsapp";

export type Dish = {
  name: string;
  teName?: string;
  prep: string;
  dietaryTag?: string;
  portion?: string;
  spiceLevel?: string;
  image: { src: string; width: number; height: number; alt: string };
};

export default function DishCard({ dish }: { dish: Dish }) {
  const directWaText = `AKKAS KITCHEN ఆర్డర్ కోసం\nనేను ${dish.name} ఆర్డర్ చేయాలనుకుంటున్నాను (I would like to order: ${dish.name})`;

  return (
    <article className="reveal bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-[#eadbc0] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
      <div>
        {/* Image container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[#f3e8d2]">
          <Image
            src={dish.image.src}
            width={dish.image.width}
            height={dish.image.height}
            alt={dish.image.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {dish.dietaryTag && (
            <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-[#1f3d2b] px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-[#e7d9bd]">
              {dish.dietaryTag}
            </span>
          )}
          {dish.spiceLevel && (
            <span className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full text-[11px] font-medium">
              {dish.spiceLevel}
            </span>
          )}
        </div>

        {/* Content body */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1f3d2b] group-hover:text-[#d9580f] transition-colors">
                {dish.name}
              </h3>
              {dish.teName && (
                <p className="font-telugu text-sm font-semibold text-[#b8470a]">
                  {dish.teName}
                </p>
              )}
            </div>
            {dish.portion && (
              <span className="text-xs text-[#3c5a46] font-medium bg-[#f3e8d2] px-2.5 py-1 rounded-lg shrink-0">
                {dish.portion}
              </span>
            )}
          </div>

          <div className="w-8 h-0.5 bg-[#d9580f] my-3"></div>

          <p className="text-sm text-[#1f3d2b]/80 leading-relaxed mb-4">
            <strong className="text-[#b8470a] font-semibold">Prep:</strong> {dish.prep}
          </p>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="px-6 pb-6 pt-0 mt-auto">
        <div className="flex items-center justify-between pt-4 border-t border-[#f3e8d2]">
          <span className="text-sm font-bold text-[#b8470a]">
            Price: Ask on WhatsApp
          </span>
          <a
            href={waLink(directWaText)}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 bg-[#1f8f4e] hover:bg-[#18763f] text-white px-3.5 py-2 rounded-full text-xs font-semibold shadow-xs hover:shadow transition-all no-underline"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
            <span>Order Dish</span>
          </a>
        </div>
      </div>
    </article>
  );
}

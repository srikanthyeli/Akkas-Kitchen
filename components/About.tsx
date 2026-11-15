import Image from "next/image";
import { CheckIcon } from "./icons";

const stats = [
  { value: "100%", label: "Homemade Quality", sub: "Cooked just like home" },
  { value: "0%", label: "Palm Oil / Colors", sub: "Clean & gut-friendly" },
  { value: "Daily", label: "Freshly Made Batches", sub: "Lunch & Dinner" },
  { value: "Madhapur", label: "Cloud Kitchen", sub: "Fast HITEC City dispatch" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#f3e8d2]/60 border-b border-[#e7d9bd] relative">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with artisanal frame */}
          <div className="lg:col-span-5 reveal relative">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              {/* Decorative background shape */}
              <div className="absolute -inset-4 bg-[#d9580f]/10 rounded-[34px] transform -rotate-2"></div>
              
              <div className="relative rounded-[28px] overflow-hidden shadow-xl border-4 border-white bg-white">
                <Image
                  src="/images/rolling.jpg"
                  width={720}
                  height={1280}
                  alt="Flour dough being rolled by hand with a rolling pin on a wooden board at Akka's Kitchen"
                  className="w-full aspect-[4/5] object-cover object-center"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-[#e7d9bd] flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#b8470a]">
                      Crafted By Hand
                    </p>
                    <p className="text-sm font-semibold text-[#1f3d2b]">
                      Authentic Wooden Rolling Pin &amp; Tawa
                    </p>
                  </div>
                  <span className="text-xl">🫓</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial story */}
          <div className="lg:col-span-7 reveal">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#b8470a] mb-3">
              <span>Our Story &amp; Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1f3d2b] leading-tight mb-3">
              Food from our Home <br className="hidden sm:inline" />
              to your Plate
            </h2>

            <p className="font-telugu text-xl sm:text-2xl font-semibold text-[#b8470a] mb-6 flex items-center gap-2">
              <span>అక్క ఇంటి వంట</span>
              <span className="text-sm font-sans font-medium text-[#3c5a46]">· Heavenly Homemade ❤️</span>
            </p>

            <div className="space-y-4 text-base sm:text-lg text-[#1f3d2b]/85 leading-relaxed mb-8">
              <p>
                <strong className="text-[#1f3d2b] font-semibold">AKKAS KITCHEN</strong> is a homemade-food cloud kitchen in Madhapur, Hyderabad, bringing warm, clean home food to busy HITEC City.
              </p>
              <p>
                Akka cooks every meal the way she cooks for her own family.
              </p>
              <p className="text-sm sm:text-base text-[#3c5a46] font-medium bg-white/80 p-4 rounded-xl border-l-4 border-[#1f8f4e] shadow-2xs">
                &ldquo;No shortcuts. Just real home food you can eat every day.&rdquo;
              </p>
            </div>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((s, idx) => (
                <div key={idx} className="bg-white/80 rounded-xl p-3.5 border border-[#e7d9bd] text-center shadow-2xs">
                  <div className="font-serif text-xl sm:text-2xl font-bold text-[#b8470a]">
                    {s.value}
                  </div>
                  <div className="text-xs font-bold text-[#1f3d2b] mt-0.5">
                    {s.label}
                  </div>
                  <div className="text-[11px] text-[#3c5a46] mt-0.5">
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp action */}
            <div className="flex flex-wrap items-center gap-4">
              
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1f3d2b]">
                <CheckIcon className="w-4 h-4 fill-[#1f8f4e]" />
                <span>Small batches, always fresh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { UtensilsIcon, FlameIcon, CheckIcon, TruckIcon } from "./icons";

const features = [
  {
    icon: <UtensilsIcon className="w-6 h-6 stroke-[#d9580f]" />,
    title: "Small-Pot Pressure Cooking",
    te: "ఇంటి వంట పద్ధతి",
    desc: "Cooked in small steel pressure-cooker pots, never big commercial vats, for tender meat and rich gravy.",
  },
  {
    icon: <FlameIcon className="w-6 h-6 stroke-[#d9580f]" />,
    title: "Hand-Rolled Tawa Phulkas",
    te: "చేతితో చేసిన వేడి పుల్కాలు",
    desc: "Fresh wheat dough, rolled by hand and puffed hot on the tawa. Soft and light.",
  },
  {
    icon: <CheckIcon className="w-6 h-6 fill-[#1f8f4e]" />,
    title: "Clean Oil & Real Spices",
    te: "పరిశుభ్రమైన పదార్థాలు",
    desc: "No palm oil, vanaspati or artificial colors. Just Andhra spices and cold-pressed oils.",
  },
  {
    icon: <TruckIcon className="w-6 h-6 stroke-[#d9580f]" />,
    title: "Quick Direct WhatsApp Orders",
    te: "సులువుగా ఆర్డర్ చేయండి",
    desc: "No apps or markups. Order from akka on WhatsApp, choose your spice level, and get it delivered hot.",
  },
];

export default function Features() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-[#fffdfa] border-b border-[#e7d9bd]/70">
      <div className="wrap">
        <div className="sec-h reveal text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#b8470a] mb-2">
            <span>Why Akka&apos;s Kitchen</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1f3d2b] font-bold mt-1 mb-3">
            Real Home Cooking, No Compromise
          </h2>
          <p className="text-[#3c5a46] text-base sm:text-lg">
            Why it tastes just like home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="reveal bg-[#fbf5e9]/70 hover:bg-[#fbf5e9] rounded-2xl p-6 border border-[#eadbc0] hover:border-[#d9580f]/40 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-xs border border-[#e7d9bd] mb-4">
                  {feat.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1f3d2b] mb-1">
                  {feat.title}
                </h3>
                <p className="text-sm font-semibold text-[#b8470a] font-telugu mb-3">
                  {feat.te}
                </p>
                <p className="text-sm text-[#1f3d2b]/80 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

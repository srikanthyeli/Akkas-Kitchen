import DishCard, { type Dish } from "./DishCard";
import FeaturedMeal from "./FeaturedMeal";
import SectionHeading from "./SectionHeading";
import { WhatsAppIcon, FlameIcon, UtensilsIcon } from "./icons";
import { waLink } from "@/lib/whatsapp";

const dishes: Dish[] = [
  {
    name: "Pressure-Cooked Chicken Curry",
    teName: "స్టీల్ కుక్కర్ నాటుకోడి శైలి చికెన్ కర్రీ",
    dietaryTag: "🍗 Fresh Farm Poultry",
    portion: "1/2 Kg or Full Kg",
    spiceLevel: "🌶️🌶️ Medium / Customizable",
    prep: "Slow-cooked in a steel cooker into a rich red gravy. Family recipe.",
    image: {
      src: "/images/curry.jpg",
      width: 720,
      height: 1280,
      alt: "Chicken curry in a red gravy in the cooking pot at Akka's Kitchen",
    },
  },
  {
    name: "Hand-Rolled Tawa Phulkas",
    teName: "చేతితో తిక్కిన మెత్తని తవా పుల్కాలు",
    dietaryTag: "🌾 100% Whole Wheat",
    portion: "Set of 4, 6 or 10",
    spiceLevel: "Mild & Soft",
    prep: "Hand-rolled wheat phulkas, puffed hot on the tawa. Soft and light.",
    image: {
      src: "/images/tawa.jpg",
      width: 720,
      height: 880,
      alt: "Phulka cooking on a black tawa with a spatula at Akka's Kitchen",
    },
  },
  {
    name: "Steamed White Rice",
    teName: "వేడి వేడి తెల్ల అన్నం",
    dietaryTag: "🍚 Fluffy & Steamed",
    portion: "Full Bowl Portion",
    spiceLevel: "Comforting",
    prep: "Fresh, fluffy rice, perfect with the curry.",
    image: {
      src: "/images/rice.jpg",
      width: 720,
      height: 720,
      alt: "A bowl of plain steamed white rice at Akka's Kitchen",
    },
  },
];

const specials = [
  {
    title: "Homemade Chicken Dum Biryani",
    te: "ఇంటి చికెన్ దమ్ బిర్యానీ",
    desc: "Dum-cooked basmati and chicken with home-ground masala. Not oily.",
    tag: "Weekend Special & Pre-order",
  },
  {
    title: "Office Team Lunches (10–50 Pax)",
    te: "ఆఫీస్ టీమ్ లంచ్ ఆర్డర్స్",
    desc: "Meal boxes or party packs for IT teams in HITEC City.",
    tag: "Corporate Friendly",
  },
  {
    title: "Party & Bulk Food Orders",
    te: "పార్టీ & ఫ్యామిలీ బల్క్ ఆర్డర్స్",
    desc: "Parties and family events. Curries by the kg and phulka baskets, delivered hot.",
    tag: "24-hr Prior Notice",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 md:py-28 bg-[#fbf5e9] border-b border-[#e7d9bd]/70">
      <div className="wrap">
        <SectionHeading
          eyebrow="Menu Highlights"
          title="Straight from our Kitchen"
        >
          Every photo on this page is a real frame from our own reel. No stock photography, no artificial restaurant styling.
        </SectionHeading>

        {/* Featured Meal Centerpiece */}
        <FeaturedMeal />

        {/* Individual Dishes 3-Card Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#1f3d2b]">
                Individual Dishes &amp; Portions
              </h3>
              <p className="text-sm text-[#3c5a46]">
                Order dishes separately or build your custom home meal box
              </p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#b8470a] bg-[#f3e8d2] px-3 py-1.5 rounded-full">
              <FlameIcon className="w-3.5 h-3.5 stroke-current" />
              <span>Made Fresh To Order</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dishes.map((d) => (
              <DishCard key={d.name} dish={d} />
            ))}
          </div>
        </div>

        {/* Special Offerings & Bulk Orders */}
        <div className="reveal bg-gradient-to-br from-[#1f3d2b] to-[#14281c] text-white rounded-[32px] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#d9580f]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d9580f] text-white text-xs font-bold uppercase tracking-wider mb-3">
                <UtensilsIcon className="w-3.5 h-3.5 stroke-current" />
                <span>Special Inquiries &amp; Catering</span>
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                Also Ask About Our Specials
              </h3>
              <p className="text-sm sm:text-base text-[#d9e3d6]">
                Looking for biryani, weekend treats, or catering for a gathering? Chat with us directly on WhatsApp to check availability!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {specials.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block text-[11px] font-bold text-[#ffb27a] uppercase tracking-wider mb-2">
                      {item.tag}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm font-semibold text-[#ffb27a] font-telugu mb-2">
                      {item.te}
                    </p>
                    <p className="text-xs sm:text-sm text-[#d9e3d6] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-2">
              <a
                href={waLink("హాయ్ అక్క, నాకు పార్టీ / బల్క్ ఫుడ్ ఆర్డర్ వివరాలు కావాలి (Hi Akka, I want details about Party/Bulk food orders)")}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2.5 bg-[#1f8f4e] hover:bg-[#18763f] text-white px-7 py-3.5 rounded-full font-semibold text-base shadow-lg hover:-translate-y-0.5 transition-all no-underline"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                <span>Ask for Custom Prices &amp; Availability</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { StarIcon } from "./icons";

const reviews = [
  {
    name: "Sandeep Mandava",
    role: "Senior Software Engineer, Mindspace",
    area: "Madhapur",
    rating: 5,
    text: "Akka's chicken curry and phulkas taste exactly like Sunday meals back home in Vijayawada. Clean and not greasy!",
    meal: "1/2 Kg Chicken Curry + Phulkas Combo",
  },
  {
    name: "Pooja Srikanth",
    role: "HR Lead & Resident",
    area: "HITEC City",
    rating: 5,
    text: "The phulkas stayed soft and warm after delivery. I ordered lunch for 6 teammates and everyone loved it.",
    meal: "Phulkas & Chicken Curry Office Meal",
  },
  {
    name: "Kiran Varma",
    role: "Architect & Food Lover",
    area: "Kondapur",
    rating: 5,
    text: "You can tell it's small-batch cooking. Tender chicken, deep flavor. Real home food.",
    meal: "Weekend Chicken Curry & White Rice",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#f3e8d2]/50 border-b border-[#e7d9bd]/80 relative overflow-hidden">
      <div className="wrap">
        <div className="sec-h reveal text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#b8470a] mb-2">
            <span>Customer Love</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1f3d2b] font-bold mt-1 mb-3">
            Loved by Foodies in Madhapur &amp; HITEC City
          </h2>
          <p className="text-[#3c5a46] text-base sm:text-lg">
            What our regulars say.
          </p>

          <div className="inline-flex items-center gap-2 mt-4 bg-white/90 px-4 py-2 rounded-full border border-[#e7d9bd] shadow-2xs">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 fill-amber-500" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#1f3d2b]">4.9 / 5 Rating</span>
            <span className="text-xs text-[#3c5a46]">· 100% WhatsApp Verified Foodies</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="reveal bg-white rounded-3xl p-8 border border-[#eadbc0] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(r.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#1f8f4e] bg-[#1f8f4e]/10 px-2.5 py-0.5 rounded-full">
                    Verified Order
                  </span>
                </div>

                {/* Review body */}
                <p className="text-[#1f3d2b]/85 text-sm sm:text-base leading-relaxed mb-6 italic">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-[#f3e8d2]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#d9580f] to-[#b8470a] text-white flex items-center justify-center font-bold text-sm font-serif shadow-xs">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#1f3d2b]">
                      {r.name}
                    </h4>
                    <p className="text-xs text-[#3c5a46]">
                      {r.role} · <span className="font-semibold text-[#b8470a]">{r.area}</span>
                    </p>
                  </div>
                </div>
                <div className="mt-3 text-[11px] font-medium text-[#3c5a46] bg-[#fbf5e9] px-2.5 py-1 rounded-md">
                  Favorite: {r.meal}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { InstagramIcon } from "./icons";
import { INSTAGRAM_URL } from "./site";

const reelMoments = [
  {
    image: "/images/tawa.jpg",
    title: "Tawa Puffed Hot Phulkas",
    caption: "Hand-rolled and puffed on the flame.",
  },
  {
    image: "/images/curry.jpg",
    title: "Slow-Cooked Chicken Curry",
    caption: "Simmered with pure masalas.",
  },
  {
    image: "/images/meal.jpg",
    title: "Complete Meal Box",
    caption: "Chicken curry, bowl of steamed white rice and fresh phulkas.",
  },
];

export default function Instagram() {
  return (
    <section className="py-20 md:py-28 bg-[#fffcf7] border-b border-[#e7d9bd]/80 relative overflow-hidden">
      <div className="wrap">
        <div className="sec-h reveal text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#b8470a] mb-2">
            <span>Follow Our Kitchen Reels</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1f3d2b] font-bold mt-1 mb-3">
            See What&apos;s Cooking Today
          </h2>
          <p className="text-[#3c5a46] text-base sm:text-lg">
            Every photo here is from akka&apos;s real cooking reels. Follow along on Instagram!
          </p>
        </div>

        {/* 3 Reel Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reelMoments.map((item, idx) => (
            <a
              key={idx}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener"
              className="group reveal relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#f3e8d2] shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 block no-underline"
            >
              <Image
                src={item.image}
                width={720}
                height={1280}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-3 group-hover:bg-[#d9580f] group-hover:scale-110 transition-all">
                  <span className="text-sm">▶</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-white/80 line-clamp-2">
                  {item.caption}
                </p>
                <div className="mt-3 text-[11px] font-semibold text-[#ffb27a] flex items-center gap-1">
                  <span>Watch on Instagram Reel</span>
                  <span>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Instagram Follow Button */}
        <div className="text-center reveal">
          <a
            className="inline-flex items-center gap-3 font-serif text-lg sm:text-xl text-[#1f3d2b] hover:text-white border-2 border-[#d9580f] hover:bg-[#d9580f] px-8 py-4 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 no-underline"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener"
          >
            <InstagramIcon className="w-6 h-6 fill-current text-[#b8470a] group-hover:text-white" />
            <span>Follow @akkas_kitchen_155</span>
          </a>
          <p className="text-xs text-[#3c5a46] mt-3">
            Tag us with <span className="font-semibold text-[#b8470a]">#akkaintivanta</span> to be featured!
          </p>
        </div>
      </div>
    </section>
  );
}

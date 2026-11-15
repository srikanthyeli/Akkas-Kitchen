import { INSTAGRAM_URL, MAPS_URL } from "./site";
import { WhatsAppIcon, InstagramIcon, PinIcon, PhoneIcon } from "./icons";
import { waLink } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-[#0f2115] text-[#c9d6c6] pt-16 pb-24 md:pb-16 border-t border-[#1b3a26]">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1b3a26]">
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#d9580f] flex items-center justify-center text-white font-serif font-bold text-base">
                A
              </div>
              <div>
                <p className="font-serif font-bold text-white text-lg tracking-wide leading-none">
                  AKKAS <span className="text-[#b8470a]">KITCHEN</span>
                </p>
                <p className="text-xs text-[#ffb27a] font-telugu mt-0.5">
                  అక్క ఇంటి వంట · Homemade Food
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#a3b8a1] leading-relaxed">
              Authentic homestyle Telugu cloud kitchen in Madhapur, Hyderabad. Small-pot pressure cooked curries and hand-rolled tawa phulkas crafted fresh daily with love and hygiene.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener"
                className="w-9 h-9 rounded-full bg-[#1f8f4e]/20 text-[#34d399] hover:bg-[#1f8f4e] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Order on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener"
                className="w-9 h-9 rounded-full bg-white/10 text-[#ffb27a] hover:bg-[#d9580f] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Follow on Instagram"
              >
                <InstagramIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener"
                className="w-9 h-9 rounded-full bg-white/10 text-white hover:bg-[#d9580f] flex items-center justify-center transition-colors"
                aria-label="Find on Google Maps"
              >
                <PinIcon className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-[#d9580f] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm list-none p-0 m-0">
              <li>
                <a href="#menu" className="text-[#c9d6c6] hover:text-[#ffb27a] transition-colors no-underline">
                  Menu &amp; Combos
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-[#c9d6c6] hover:text-[#ffb27a] transition-colors no-underline">
                  Why Akka&apos;s Kitchen
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#c9d6c6] hover:text-[#ffb27a] transition-colors no-underline">
                  Our Cooking Story
                </a>
              </li>
              <li>
                <a href="#location" className="text-[#c9d6c6] hover:text-[#ffb27a] transition-colors no-underline">
                  Location &amp; Delivery
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[#c9d6c6] hover:text-[#ffb27a] transition-colors no-underline">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Delivery Zones */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-[#d9580f] pl-2.5">
              Delivery Coverage
            </h4>
            <ul className="space-y-1.5 text-xs text-[#a3b8a1] list-none p-0 m-0">
              <li className="flex items-center gap-1.5">
                <span className="text-[#b8470a]">•</span> Madhapur &amp; Cyber Towers
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#b8470a]">•</span> Mindspace &amp; HITEC City
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#b8470a]">•</span> Kondapur &amp; Kothaguda
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#b8470a]">•</span> Durgam Cheruvu &amp; Inorbit
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#b8470a]">•</span> Jubilee Hills (Road 36 &amp; 45)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#b8470a]">•</span> Gachibowli / Financial District
              </li>
            </ul>
          </div>

          {/* Col 4: Timings & Ordering */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-[#d9580f] pl-2.5">
              Kitchen Hours &amp; Contact
            </h4>
            <div className="space-y-3 text-xs text-[#a3b8a1]">
              <div>
                <strong className="text-white block font-medium">Daily Lunch Service:</strong>
                <span>11:30 AM – 3:00 PM</span>
              </div>
              <div>
                <strong className="text-white block font-medium">Daily Dinner Service:</strong>
                <span>7:00 PM – 10:30 PM</span>
              </div>
              <div className="pt-2">
                <a
                  href="tel:919703235395"
                  className="inline-flex items-center gap-1.5 text-[#ffb27a] font-semibold text-sm hover:underline"
                >
                  <PhoneIcon className="w-3.5 h-3.5 stroke-current" />
                  <span>+91 97032 35395</span>
                </a>
              </div>
              <div className="text-[11px] text-[#7d9b7a] pt-1">
                Cloud kitchen model · Delivery &amp; Takeaway Only
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7d9b7a]">
          <p className="m-0">
            © {new Date().getFullYear()} AKKAS KITCHEN · <span className="font-telugu text-[#ffb27a]">అక్క ఇంటి వంట</span> · All rights reserved.
          </p>
          <p className="m-0 flex items-center gap-3">
            <span>Made with pure ghee, clean oil &amp; Telugu love</span>
            <span>•</span>
            <a href="#top" className="text-[#ffb27a] hover:underline no-underline">
              Back to Top ↑
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

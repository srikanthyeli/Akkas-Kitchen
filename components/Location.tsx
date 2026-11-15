import LocationCard from "./LocationCard";
import SectionHeading from "./SectionHeading";

export default function Location() {
  return (
    <section id="location" className="py-20 md:py-28 bg-[#f3e8d2]/60 border-b border-[#e7d9bd]/80">
      <div className="wrap">
        <SectionHeading eyebrow="Location & Coverage" title="Where we Cook & Deliver">
          Cooked fresh in Madhapur, near HITEC City. Delivery and takeaway only, so order on WhatsApp.
        </SectionHeading>
        <LocationCard />
      </div>
    </section>
  );
}

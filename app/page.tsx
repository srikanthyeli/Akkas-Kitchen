import About from "@/components/About";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Instagram from "@/components/Instagram";
import Location from "@/components/Location";
import Menu from "@/components/Menu";
import Nav from "@/components/Nav";
import Order from "@/components/Order";
import RevealObserver from "@/components/RevealObserver";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbf5e9] text-[#1f3d2b] selection:bg-[#d9580f] selection:text-white">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Features />
        <About />
        <Menu />
        <Location />
        <Instagram />
        <Faq />
        <Order />
      </main>
      <Footer />
      <WhatsAppFab />
      <RevealObserver />
    </div>
  );
}

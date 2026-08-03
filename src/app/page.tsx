import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import TrustBar from "@/components/layout/TrustBar";
import Services from "@/components/sections/Services";
import FeaturedPackages from "@/components/sections/FeaturedPackages"; // <-- Import
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <FeaturedPackages /> {/* <-- Add here */}
      <WhatsAppFloat />
    </>
  );
}
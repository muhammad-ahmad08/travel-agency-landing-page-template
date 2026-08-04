import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import TrustBar from "@/components/layout/TrustBar";
import Services from "@/components/sections/Services";
import FeaturedPackages from "@/components/sections/FeaturedPackages";
import WhyChooseUs from "@/components/sections/WhyChooseUs"; // <-- Import
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <FeaturedPackages />
      <WhyChooseUs /> {/* <-- Add here */}
      <WhatsAppFloat />
    </>
  );
}
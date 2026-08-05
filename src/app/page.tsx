import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import TrustBar from "@/components/layout/TrustBar";
import Services from "@/components/sections/Services";
import FeaturedPackages from "@/components/sections/FeaturedPackages";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA"; // <-- Import
import Footer from "@/components/layout/Footer"; // <-- Import
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <FeaturedPackages />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <Contact />
      <CTA /> {/* <-- Add here */}
      <Footer /> {/* <-- Add here */}
      <WhatsAppFloat />
    </>
  );
}
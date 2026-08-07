import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { FaCheckCircle } from "react-icons/fa";

export default function Hero() {
  return (
    // relative positioning so we can layer text over the image
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Next.js Image Background */}
      <Image
        src="/images/hero-bg.jpg" // Correct path: starts from inside the 'public' folder
        alt="The Holy Kaaba" // Always use descriptive alt text for SEO and accessibility
        fill // 'fill' tells the image to stretch to the size of its parent container
        className="object-cover absolute inset-0 z-0" // object-cover ensures it doesn't distort
        priority // 'priority' tells Next.js to load this image first, as it's above the fold
      />
      
      {/* Dark overlay to make text readable */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Hero Content */}
      <Container className="relative z-20 text-center text-white">
        <h1 className="font-heading text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Your Spiritual Journey <br className="hidden md:block" /> Begins Here
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 drop-shadow-md">
          Experience premium Umrah, Hajj, and international tours with unparalleled service and trusted guidance.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="gold">Explore Packages</Button>
          <Button variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white">
            Contact Us
          </Button>
        </div>
      </Container>
          {/* Trust Badges */}
      <div className="absolute bottom-10 left-0 right-0 z-20">
        <Container>
          <div className="flex items-center justify-center gap-6 flex-wrap hidden md:blocak">
            {["IATA Accredited", "Ministry of Hajj Approved", "TAAP Member", "DTS Certified"].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <FaCheckCircle className="text-gold text-sm" />
                <span className="text-sm font-semibold tracking-wide">{badge}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
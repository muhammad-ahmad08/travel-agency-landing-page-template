import Image from "next/image";
import { FaHotel, FaShieldAlt, FaHeadset } from "react-icons/fa";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Reveal from "../ui/Reveal";

const features = [
  {
    icon: <FaHotel className="text-2xl text-gold" />,
    title: "Luxury Accommodations",
    description: "Handpicked 4 and 5-star hotels located just steps away from the Haram and major attractions."
  },
  {
    icon: <FaShieldAlt className="text-2xl text-gold" />,
    title: "100% Transparent Pricing",
    description: "No hidden fees or surprise charges. The price you see is exactly what you pay, guaranteed."
  },
  {
    icon: <FaHeadset className="text-2xl text-gold" />,
    title: "24/7 Dedicated Support",
    description: "Our experienced multilingual guides and support team are available around the clock to assist you."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <Reveal>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Image */}
          <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/why-us.jpg"
              alt="Premium travel experience"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-700"
            />
            {/* Optional: Add a floating badge over the image */}
            <div className="absolute bottom-8 left-8 bg-white p-4 rounded-xl shadow-2xl">
              <p className="text-3xl font-heading font-extrabold text-primary">15+</p>
              <p className="text-sm text-text-muted">Years of Excellence</p>
            </div>
          </div>

          {/* Right Side: Content */}
          <div>
            <SectionTitle 
              subtitle="Why Travel With Us" 
              title="Experience the Difference"
              center={false} // Aligns the title to the left for this layout
            />
            
            <p className="text-text-muted mb-8 leading-relaxed">
              We are dedicated to providing seamless, spiritually fulfilling, and luxurious travel experiences. Our commitment to excellence has made us a trusted name for thousands of pilgrims and travelers worldwide.
            </p>

            {/* Features Checklist */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-text-main mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-text-muted">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="primary">Contact Our Team</Button>
          </div>

        </div>
      </Container>
      </Reveal>
    </section>
  );
}
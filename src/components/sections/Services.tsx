import { FaMosque, FaPlaneDeparture, FaPassport } from "react-icons/fa";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

// 1. Define our services data
const services = [
  {
    icon: <FaMosque className="text-4xl text-gold" />,
    title: "Hajj & Umrah Packages",
    description: "Embark on your spiritual journey with our premium, all-inclusive packages. 5-star hotels steps away from the Haram, expert guides, and seamless transportation.",
  },
  {
    icon: <FaPlaneDeparture className="text-4xl text-gold" />,
    title: "International Tours",
    description: "Explore the world with our curated international tour packages. From the beaches of Maldives to the streets of Turkey, we handle every detail.",
  },
  {
    icon: <FaPassport className="text-4xl text-gold" />,
    title: "Visa Services",
    description: "Fast, reliable, and 100% successful visa processing for tourists, business travelers, and students. Let us handle the paperwork while you pack your bags.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-background">
      <Container>
        {/* 2. Use our reusable SectionTitle */}
        <SectionTitle subtitle="What We Offer" title="Our Premium Services" />

        {/* 3. Grid layout for the cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 4. Map through the services array to generate cards */}
          {services.map((service, index) => (
            <div 
              key={index} 
              // Tailwind magic: hover effect to lift the card up slightly
              className="bg-surface p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center"
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 flex items-center justify-center bg-primary/10 rounded-full mb-6">
                {service.icon}
              </div>
              
              <h3 className="font-heading text-xl font-bold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-text-muted mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <Button variant="outline" className="mt-auto">Learn More</Button>
            </div>
          ))}
          
        </div>
      </Container>
    </section>
  );
}
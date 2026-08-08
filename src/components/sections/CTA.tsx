import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "../ui/Reveal";

export default function CTA() {
  return (
    <section className="bg-primary-dark py-16 relative overflow-hidden">
      <Reveal>
      {/* Decorative background blobs for a premium feel */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary opacity-20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <Container className="relative z-10 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-4">
          Ready to Plan Your Spiritual Journey?
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
          Contact our travel experts today and get a personalized quote for your dream trip. Limited slots available for upcoming Hajj and Umrah seasons!
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="gold" className="text-lg px-10 py-4">Book a Consultation</Button>
          <a href="tel:+923001234567" className="text-white font-heading font-semibold flex items-center gap-2 hover:text-gold transition-colors">
            Or Call Us: +92 300 1234567
          </a>
        </div>
      </Container>
      </Reveal>
    </section>
  );
}
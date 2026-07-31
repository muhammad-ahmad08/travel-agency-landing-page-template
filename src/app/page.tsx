import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

export default function Home() {
  return (
    <>
      {/* The WhatsApp button floats above everything */}
      <WhatsAppFloat />

      <main className="flex min-h-screen flex-col items-center justify-center p-10">
        <Container>
          {/* Testing SectionTitle */}
          <SectionTitle 
            subtitle="Our Premium Services" 
            title="What We Offer" 
          />

          {/* Testing Buttons inside a Container */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button>Primary Button</Button>
            <Button variant="gold">Gold Button</Button>
            <Button variant="outline">Outline Button</Button>
          </div>

        </Container>
      </main>
    </>
  );
}
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

// Dummy data for our gallery
const galleryImages = [
  { src: "/images/gallery/g1.png", title: "Ramadan Umrah Group", span: "row-span-2" },
  { src: "/images/gallery/g2.png", title: "Istanbul Tour", span: "" },
  { src: "/images/gallery/g3.jpg", title: "Corporate tour", span: "" },
  { src: "/images/gallery/g4.webp", title: "Hajj 2025", span: "row-span-2" },
  { src: "/images/gallery/g5.webp", title: "Luxury Maldives", span: "" },
  { src: "/images/gallery/g6.jpg", title: "Visa Success", span: "" },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle subtitle="Our Memories" title="Happy Travelers Gallery" />
        
        {/* 
          We use grid-flow-dense so the grid automatically fills in gaps 
          created by the row-span-2 items.
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-xl shadow-md group cursor-pointer ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Premium Hover Overlay */}
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                <h4 className="text-white font-heading font-bold text-lg md:text-xl text-center px-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.title}
                </h4>
              </div>
            </div>
          ))}

        </div>
      </Container>
    </section>
  );
}
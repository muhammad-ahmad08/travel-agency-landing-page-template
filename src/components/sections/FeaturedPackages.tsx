import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import PackageCard from "@/components/ui/PackageCard";
import Reveal from "../ui/Reveal";
const packages = [
  {
    image: "/images/packages/turkey.jpg",
    title: "7 Days Istanbul Tour",
    duration: "7 Days",
    rating: 4.8,
    price: "$899",
    badge: "best Seller",
  },
  {
    image: "/images/packages/umrah.jpg",
    title: "15 Days Premium Umrah",
    duration: "15 Days",
    rating: 5.0,
    price: "$1,499",
    badge: "Best Seller",
  },
  {
    image: "/images/packages/maldives.jpg",
    title: "6 Days Maldives Getaway",
    duration: "6 Days",
    rating: 4.7,
    price: "$2,100",
  },
  {
    image: "/images/packages/dubai.jpg",
    title: "5 Days Dubai Adventure",
    duration: "5 Days",
    rating: 4.9,
    price: "$1,200",
    badge: "New",
  },
  {
    image: "/images/packages/ramadan-umrah.jpg",
    title: "10 Days Ramadan Umrah",
    duration: "10 Days",
    rating: 5.0,
    price: "$1,850",
    badge: "Limited",
  },
  {
    image: "/images/packages/egypt.jpg",
    title: "8 Days Egypt & Nile Cruise",
    duration: "8 Days",
    rating: 4.6,
    price: "$1,350",
  },
];

export default function FeaturedPackages() {
  return (
    <section className="py-20 bg-background">
      <Reveal>
        <Container>
          <SectionTitle
            subtitle="Top Destinations"
            title="Featured Travel Packages"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <PackageCard
                  image={pkg.image}
                  title={pkg.title}
                  duration={pkg.duration}
                  rating={pkg.rating}
                  price={pkg.price}
                  badge={pkg.badge}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </Reveal>
    </section>
  );
}

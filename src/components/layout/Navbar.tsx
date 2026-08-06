import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Logo from "../ui/Logo";

export default function Navbar() {
  return (
    // sticky top-0 keeps the navbar glued to the top of the screen when scrolling
    <nav className="sticky top-0 z-40 bg-surface shadow-md py-4">
      <Container>
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <Logo variant="dark" />

          {/* Desktop Navigation Links (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-8 font-heading font-medium text-text-main">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
            <Link href="#packages" className="hover:text-primary transition-colors">Packages</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>

          {/* CTA Button (hidden on mobile) */}
          <div className="hidden md:block">
            <Button variant="gold">Book Now</Button>
          </div>

        </div>
      </Container>
    </nav>
  );
}
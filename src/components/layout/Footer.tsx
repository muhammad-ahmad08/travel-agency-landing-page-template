import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Container from "@/components/ui/Container";
import Logo from "../ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-text-main text-gray-400 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & About */}
          <div className="md:col-span-1">
            <Logo variant="light" rounded /> 
            <p className="text-sm leading-relaxed">
              Your trusted partner for Hajj, Umrah, and international travel. Providing premium, hassle-free journeys with 100% transparency.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-gold hover:text-white transition-colors"><FaFacebookF /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-gold hover:text-white transition-colors"><FaInstagram /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-gold hover:text-white transition-colors"><FaTwitter /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-gold hover:text-white transition-colors"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-gold transition-colors">Our Services</Link></li>
              <li><Link href="#packages" className="hover:text-gold transition-colors">Travel Packages</Link></li>
              <li><Link href="#contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Top Destinations */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-4">Top Destinations</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-gold transition-colors">Umrah Packages</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Hajj Packages</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Turkey Tours</Link></li>
              <li><Link href="#" className="hover:text-gold transition-colors">Dubai Tours</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>123 Travel Street, Lahore, Pakistan</li>
              <li>Phone: +92 300 1234567</li>
              <li>Email: info@alsafartours.com</li>
              <li>Hours: Mon - Sat (9am - 7pm)</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} Al-Safar Tours. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
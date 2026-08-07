"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { FaBars, FaTimes } from "react-icons/fa";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu
  const [isScrolled, setIsScrolled] = useState(false); // For smart background

  // Smart Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? "bg-white shadow-md py-3" : "bg-white/10 py-5"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Logo variant={isScrolled || isOpen ? "dark" : "light"} />

          {/* Desktop Navigation Links */}
          <div className={`hidden md:flex items-center gap-8 font-heading font-medium ${
            isScrolled ? "text-text-main" : "text-white"
          }`}>
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <Link href="#services" className="hover:text-gold transition-colors">Services</Link>
            <Link href="#packages" className="hover:text-gold transition-colors">Packages</Link>
            <Link href="#contact" className="hover:text-gold transition-colors">Contact</Link>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button variant="gold">Book Now</Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {/* Change icon color based on scroll state */}
            <span className={isScrolled || isOpen ? "text-primary" : "text-white"}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </span>
          </button>
        </div>
      </Container>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white overflow-hidden border-t border-gray-100"
          >
            <Container>
              <div className="flex flex-col py-4 gap-4 font-heading font-medium text-text-main">
                <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-gold transition-colors py-2">Home</Link>
                <Link href="#services" onClick={() => setIsOpen(false)} className="hover:text-gold transition-colors py-2">Services</Link>
                <Link href="#packages" onClick={() => setIsOpen(false)} className="hover:text-gold transition-colors py-2">Packages</Link>
                <Link href="#contact" onClick={() => setIsOpen(false)} className="hover:text-gold transition-colors py-2">Contact</Link>
                <Button variant="gold" className="mt-2">Book Now</Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
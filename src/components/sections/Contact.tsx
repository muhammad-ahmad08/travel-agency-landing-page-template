"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Reveal from "../ui/Reveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    destination: "Umrah Package",
    message: ""
  });

  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    
    try {
      // 1. Send the email via our Next.js API Route
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // 2. Open WhatsApp with the pre-filled message
      const whatsappMessage = `*New Travel Inquiry*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Destination:* ${formData.destination}%0A*Message:* ${formData.message}`;
      const whatsappNumber = "923001234567"; 
      window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");

      // 3. Show success message and reset form
      setIsSuccess(true);
      setFormData({ name: "", phone: "", destination: "Umrah Package", message: "" });
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);

    } catch (error) {
      console.error("Error sending inquiry:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <Reveal>
      <Container>
        <SectionTitle subtitle="Get In Touch" title="Plan Your Next Journey" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* Left Side: Form */}
          <div className="p-8 md:p-10">
            <h3 className="font-heading text-2xl font-bold text-primary mb-6">
              Send us an Inquiry
            </h3>
            
            {/* Success Message */}
            {isSuccess && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                ✅ Inquiry sent successfully! Check your WhatsApp.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-text-main mb-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-main mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1 234 567 890" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-main mb-1">Destination</label>
                <select 
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                >
                  <option>Umrah Package</option>
                  <option>Hajj Package</option>
                  <option>International Tour</option>
                  <option>Visa Assistance</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-main mb-1">Message (Optional)</label>
                <textarea 
                  name="message"
                  rows={3} 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your travel plans..." 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>
              
              <Button type="submit" variant="gold" className="w-full">
                {isSending ? "Sending Inquiry..." : "Submit Inquiry"}
              </Button>
            </form>
          </div>

          {/* Right Side: Map & Contact Info */}
          <div className="bg-primary text-white p-8 md:p-10 flex flex-col">
            <h3 className="font-heading text-2xl font-bold mb-6">Visit Our Office</h3>
            
            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-gold text-xl mt-1" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-300 text-sm">123 Travel Street, Business District, Lahore, Pakistan</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-gold text-xl mt-1" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-gray-300 text-sm">+92 300 1234567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-gold text-xl mt-1" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-gray-300 text-sm">info@alsafartours.com</p>
                </div>
              </div>
            </div>

            <div className="mt-auto rounded-xl overflow-hidden h-64 min-h-[200px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.2182875377595!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190f5af8f9a0ab%3A0x9e4e04d04e4e04d0!2sLahore!5e0!3m2!1sen!2s!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </Container>
      </Reveal>
    </section>
  );
}
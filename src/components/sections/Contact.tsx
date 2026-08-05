import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <Container>
        <SectionTitle subtitle="Get In Touch" title="Plan Your Next Journey" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* Left Side: Form */}
          <div className="p-8 md:p-10">
            <h3 className="font-heading text-2xl font-bold text-primary mb-6">
              Send us an Inquiry
            </h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-text-main mb-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-main mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+1 234 567 890" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-main mb-1">Destination</label>
                <select 
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
                  rows={3} 
                  placeholder="Tell us about your travel plans..." 
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>
              <Button variant="gold" className="w-full">Submit Inquiry</Button>
            </form>
          </div>

          {/* Right Side: Map & Contact Info */}
          <div className="bg-primary text-white p-8 md:p-10 flex flex-col">
            <h3 className="font-heading text-2xl font-bold mb-6">Visit Our Office</h3>
            
            {/* Contact Details List */}
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

            {/* Google Maps Embed */}
            <div className="mt-auto rounded-xl overflow-hidden h-64 min-h-[200px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.3461400480364!2d74.2650495!3d31.4321364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919017cb09470eb%3A0x5e82e145c393064c!2sEminent%20travels%20and%20tours!5e0!3m2!1sen!2s!4v1785903237320!5m2!1sen!2s"
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
    </section>
  );
}
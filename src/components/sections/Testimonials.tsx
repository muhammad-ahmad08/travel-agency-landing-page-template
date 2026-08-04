"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

// 1. Add your real Google Reviews here later
const reviews = [
  {
    name: "Ahmed Khan",
    location: "Lahore, Pakistan",
    rating: 5,
    text: "Alhamdulillah, the best Umrah experience of my life. The hotel was literally steps away from the Haram. The staff was incredibly helpful. Highly recommend Al-Safar Tours!"
  },
  {
    name: "Fatima Noor",
    location: "London, UK",
    rating: 5,
    text: "Booked the Turkey tour for my family. Everything was perfectly organized, from the flights to the luxury hotels. We didn't have to worry about a single thing. 10/10 service."
  },
  {
    name: "Bilal Ahmed",
    location: "Dubai, UAE",
    rating: 5,
    text: "Got my visa processed in record time. Their team is highly professional and transparent about pricing. No hidden charges at all. Will definitely use them again for Umrah."
  },
  {
    name: "Fatima Noor",
    location: "Islamabad, Pakistan",
    rating: 5,
    text: "Booked the Turkey tour for my family. Everything was perfectly organized, from the flights to the luxury hotels. We didn't have to worry about a single thing. 10/10 service."
  },
  {
    name: "Ali Usman",
    location: "Karachi, Pakistan",
    rating: 5,
    text: "Booked the Turkey tour for my family. Everything was perfectly organized, from the flights to the luxury hotels. We didn't have to worry about a single thing. 10/10 service."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 2. Auto-slide logic using React Hooks
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Changes review every 5 seconds

    return () => clearInterval(interval); // Cleans up the timer
  }, []);

  return (
    <section className="py-20 bg-background">
      <Container>
        <SectionTitle subtitle="Client Testimonials" title="What Our Travelers Say" />
        
        <div className="max-w-3xl mx-auto relative h-[300px] md:h-[250px]">
          {/* 3. Framer Motion Animation Wrapper */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-xl text-center relative"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-gold text-3xl mx-auto mb-6 opacity-50" />
              
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4 text-gold">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-text-muted text-lg italic mb-6 leading-relaxed">
                {reviews[currentIndex].text}
              </p>

              {/* Reviewer Info */}
              <div>
                <p className="font-heading font-bold text-primary text-lg">
                  {reviews[currentIndex].name}
                </p>
                <p className="text-text-muted text-sm">
                  {reviews[currentIndex].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 4. Manual Dots to click through reviews */}
        <div className="flex justify-center gap-2 mt-16">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-gold" : "bg-gray-300"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
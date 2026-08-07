"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "motion/react";

// A custom counter component
const Counter = ({ target }: { target: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true }); // Only animate once
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const start = Date.now();
      
      const timer = setInterval(() => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        setCount(Math.floor(progress * target));
        
        if (progress === 1) clearInterval(timer);
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [inView, target]);

  return <span ref={ref}>{count}</span>;
};

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 3200, suffix: "+", label: "Happy Pilgrims" },
  { value: 100, suffix: "%", label: "Visa Success Rate" },
  { value: 24, suffix: "/7", label: "Customer Support" },
];

export default function TrustBar() {
  return (
    <section className="bg-primary-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-3xl md:text-4xl font-heading font-extrabold text-gold mb-1">
                <Counter target={stat.value} />{stat.suffix}
              </p>
              <p className="text-sm md:text-base text-gray-300 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
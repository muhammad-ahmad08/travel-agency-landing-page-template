"use client";

import { motion } from "motion/react";
import React from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number; // Optional delay so items can stagger their animation
}

export default function Reveal({ children, delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-180px" }} // Animates exactly when it enters the screen, but only once
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.44, 1, 0.72, 2] // Premium Apple-style easing
      }}
    >
      {children}
    </motion.div>
  );
}
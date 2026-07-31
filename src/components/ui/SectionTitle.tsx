import React from "react";

interface SectionTitleProps {
  subtitle: string;
  title: string;
  center?: boolean; // Optional: allows us to center the title or align it left
}

export default function SectionTitle({ subtitle, title, center = true }: SectionTitleProps) {
  return (
    <div className={`${center ? "text-center mx-auto" : "text-left"} max-w-2xl mb-12`}>
      <span className="inline-block text-gold font-heading font-semibold tracking-wide uppercase text-sm mb-2">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-primary mb-4">
        {title}
      </h2>
      {/* Decorative line */}
      <div className={`h-1 w-20 bg-gold rounded-full ${center ? "mx-auto" : ""}`}></div>
    </div>
  );
}
import React from "react";

// 1. Define the "Props" (the instructions our button accepts)
interface ButtonProps {
  children: React.ReactNode; // The text or icon inside the button
  variant?: "primary" | "gold" | "outline"; // The style variant
  onClick?: () => void; // Function to run when clicked
  type?: "button" | "submit";
  className?: string; // Allow adding extra Tailwind classes if needed
}

export default function Button({
  children,
  variant = "primary", // Default to primary if no variant is passed
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  
  // 2. Define the Tailwind classes for each variant using our Design Tokens
const baseStyles = "px-8 py-3 rounded-lg font-heading font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md";
  
  // 2. Upgraded Variants: Added colored glowing shadows (shadow-[...])
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-[0_4px_15px_rgba(30,58,138,0.4)] hover:shadow-[0_8px_25px_rgba(30,58,138,0.6)]",
    gold: "bg-gold text-white hover:bg-gold-light shadow-[0_4px_15px_rgba(217,119,6,0.4)] hover:shadow-[0_8px_25px_rgba(217,119,6,0.6)]",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  // 3. Combine the classes
  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

  // 4. Return the actual HTML button
  return (
    <button type={type} onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}
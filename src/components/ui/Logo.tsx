import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config";

interface LogoProps {
  variant?: "light" | "dark"; 
  rounded?: boolean; // New prop for the premium footer look
  className?: string;
}

export default function Logo({ variant = "dark", rounded = false, className = "" }: LogoProps) {
  const logoSrc = variant === "light" ? siteConfig.logoDark : siteConfig.logo;

  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      {/* Conditional Premium Wrapper */}
      <div className={rounded ? "bg-white/10 backdrop-blur-sm p-2 rounded-xl border border-white/20 shadow-lg" : ""}>
        <Image
          src={logoSrc}
          alt={siteConfig.agencyName}
          width={180}
          height={50}
          // h-10 forces the height to 40px, w-auto keeps the aspect ratio perfect. This fixes the navbar!
          className="h-10 w-auto md:h-15" 
          priority
        />
      </div>
    </Link>
  );
}
import Image from "next/image";
import { siteConfig } from "@/config";

export default function Preloader() {
  return (
    <div className="preloader-container fixed inset-0 z-[100] bg-white flex items-center justify-center p-8 pointer-events-none">
      
      {/* Logo with Intro Animation */}
      <div className="preloader-logo rounded-[2.5rem] relative w-4/5 md:w-1/2 h-1/3 md:h-2/5">
        <Image
          src={siteConfig.logoDark}
          alt={siteConfig.agencyName}
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
      
      {/* Premium Growing Loading Bar */}
      <div className="preloader-bar absolute bottom-0 left-0 h-1 bg-gold"></div>
    </div>
  );
}
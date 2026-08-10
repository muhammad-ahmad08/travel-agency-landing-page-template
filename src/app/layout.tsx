import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/layout/Preloader";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";

// Initialize the fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // We link this to our CSS variable later
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Poppins needs specific weights defined
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Al-Safar Tours | Premium Hajj, Umrah & International Travel",
    template: "%s | Al-Safar Tours" // This automatically adds your brand name to sub-pages
  },
  description: "Book your trusted spiritual journey and international vacations. Premium Hajj & Umrah packages, visa services, and luxury tours with 100% transparency.",
  keywords: ["Hajj Packages", "Umrah Packages", "Visa Services", "International Tours", "Travel Agency", "Visit Visa", "Study Visa"],
  openGraph: {
    title: "Al-Safar Tours | Premium Travel Agency",
    description: "Experience premium Umrah, Hajj and international tours with unparalleled service.",
    url: "https://your-website-url.com", // Change this later when you get the live link
    siteName: "Al-Safar Tours",
    images: [
      {
        url: "/images/hero-bg.jpg", // Use your beautiful hero image for social sharing
        width: 1200,
        height: 630,
        alt: "Al-Safar Tours",
      }
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* We apply the font variables to the body tag */}
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <ScrollProgressBar />
        <Preloader />
        {children}
      </body>
    </html>
  );
}

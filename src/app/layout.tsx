import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

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
  title: "Premium Hajj, Umrah & International Tours",
  description: "Book your trusted spiritual journey and international vacations with us.",
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
        {children}
      </body>
    </html>
  );
}

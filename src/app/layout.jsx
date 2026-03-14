import { Inter, Syne, Outfit, Space_Mono, Permanent_Marker, Bricolage_Grotesque, Fraunces } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  variable: "--font-permanent",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Magnet Lover | Premium Custom Magnets",
  description: "Bespoke design, premium quality magnets for the music industry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${syne.variable} ${outfit.variable} ${spaceMono.variable} ${permanentMarker.variable} ${bricolage.variable} ${fraunces.variable} font-sans antialiased text-white selection:bg-accent-yellow selection:text-black`}>
        <CustomCursor />
        <div className="bg-grain" />
        {children}
      </body>
    </html>
  );
}

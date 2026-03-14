import { Inter, Lilita_One, Permanent_Marker } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lilita = Lilita_One({
  weight: "400",
  variable: "--font-lilita",
  subsets: ["latin"],
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  variable: "--font-permanent",
  subsets: ["latin"],
});

export const metadata = {
  title: "Magnet Lover | Premium Custom Magnets",
  description: "Bespoke design, premium quality magnets for the music industry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${lilita.variable} ${permanentMarker.variable} font-sans antialiased text-white selection:bg-accent-yellow selection:text-black`}>
        <div className="bg-grain" />
        {children}
      </body>
    </html>
  );
}

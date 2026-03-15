"use client";
import Hero from "@/components/Hero";
import StatBar from "@/components/StatBar";
import Marquee from "@/components/Marquee";
import ProblemSection from "@/components/ProblemSection";
import TouringReality from "@/components/TouringReality";
import ProfitCalc from "@/components/ProfitCalc";
import Benefits from "@/components/Benefits";
import Mission from "@/components/Mission";
import TeamSection from "@/components/TeamSection";
import BigMarquee from "@/components/BigMarquee";
import TrustSection from "@/components/TrustSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import MagnetBoard from "@/components/MagnetBoard";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* Main Content Layout with Grid Columns */}
      <div className="main-grid">
        <div className="side-col hidden lg:block" />
        
        <div className="content-col">
          <Hero />
          <StatBar />
          
          <ProblemSection />
          <Benefits />
          <TouringReality />
          <ProfitCalc />
          
          <Mission />
          <BigMarquee />
          <TrustSection />
          <ContactForm />
          <TeamSection />
          <Footer />
          <MagnetBoard />
        </div>

        <div className="side-col hidden lg:block" />
      </div>
      
    </main>
  );
}

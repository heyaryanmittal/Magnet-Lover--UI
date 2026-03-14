"use client";
import Hero from "@/components/Hero";
import StatBar from "@/components/StatBar";
import Marquee from "@/components/Marquee";
import ProblemSection from "@/components/ProblemSection";
import TouringReality from "@/components/TouringReality";
import ProfitCalc from "@/components/ProfitCalc";
import Benefits from "@/components/Benefits";
import Mission from "@/components/Mission";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* Main Content Layout with Grid Columns */}
      <div className="main-grid">
        <div className="side-col hidden lg:block" />
        
        <div className="content-col">
          <Hero />
          <Marquee text="SCROLL // " speed={40} />
          <StatBar />
          
          <ProblemSection />
          <TouringReality />
          
          <Marquee text="MEMORIES // MUSIC // MERCH // " speed={25} />
          
          <ProfitCalc />
          <Benefits />
          
          <Mission />
          <ContactForm />
          
          <Footer />
        </div>

        <div className="side-col hidden lg:block" />
      </div>
      
    </main>
  );
}

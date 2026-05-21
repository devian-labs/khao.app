import { AudienceModeProvider } from "@/components/AudienceMode";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import WhatYouReplace from "@/components/WhatYouReplace";
import FeaturesSection from "@/components/FeaturesSection";
import RolesSection from "@/components/RolesSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <AudienceModeProvider>
      <div className="flex flex-col min-h-screen bg-white font-sans">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <HowItWorks />
          <WhatYouReplace />
          <FeaturesSection />
          <RolesSection />
          <PricingSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </AudienceModeProvider>
  );
}

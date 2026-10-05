import { AudienceModeProvider } from "@/components/AudienceMode";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { DEFAULT_DESCRIPTION, HOME_TITLE, pageMetadata } from "@/lib/site";
import { homeGraph } from "@/lib/structured-data";
import { defaultFaqs } from "@/lib/faqs";

export const metadata = pageMetadata({
  title: HOME_TITLE,
  absoluteTitle: true,
  description: DEFAULT_DESCRIPTION,
  path: "/",
});

export default function Home() {
  return (
    <AudienceModeProvider>
      <JsonLd data={homeGraph(defaultFaqs)} />
      <div className="flex flex-col min-h-screen bg-white font-sans">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <HowItWorks />
          <FeaturesSection />
          <PricingSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </AudienceModeProvider>
  );
}

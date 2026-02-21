import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BotPricingSection from "@/components/BotPricingSection";
import WebPricingSection from "@/components/WebPricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BotPricingSection />
      <WebPricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;

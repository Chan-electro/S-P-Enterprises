import HeroSection from "@/components/sections/hero";
import FeaturedMachinery from "@/components/sections/featured-machinery";
import WhyTitanX from "@/components/sections/why-titanx";
import IndustryApplications from "@/components/sections/industry-applications";
import CTASection from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <WhyTitanX />
      <IndustryApplications />
      <div className="h-[20vh] bg-white" /> {/* Spacer to prevent scroll collision */}
      <FeaturedMachinery />
      <CTASection />
    </main>
  );
}

import HeroSection from "@/components/sections/hero";
import FeaturedMachinery from "@/components/sections/featured-machinery";
import WhyYSPSpares from "@/components/sections/why-spenterprises";
import IndustryApplications from "@/components/sections/industry-applications";
import CTASection from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <WhyYSPSpares />
      <IndustryApplications />
      <FeaturedMachinery />
      <CTASection />
    </main>
  );
}

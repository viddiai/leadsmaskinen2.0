import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { RoiSection } from "@/components/sections/RoiSection";
import { AnalyzerCtaSection } from "@/components/sections/AnalyzerCtaSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { IdealClientSection } from "@/components/sections/IdealClientSection";
import { GuideSection } from "@/components/sections/GuideSection";
import { FaqSection } from "@/components/sections/FaqSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ProcessSection />
      <RoiSection />
      <AnalyzerCtaSection />
      <ComparisonSection />
      <IdealClientSection />
      <PackagesSection />
      <GuideSection />
      <FaqSection />
    </>
  );
}

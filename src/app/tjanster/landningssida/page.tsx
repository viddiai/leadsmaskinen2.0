import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CalendlyButton } from "@/components/ui/CalendlyButton";
import { ServiceTrust } from "@/components/sections/ServiceTrust";
import { ServiceFaq } from "@/components/sections/ServiceFaq";
import { ServiceCta } from "@/components/sections/ServiceCta";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Landningssida",
  description:
    "En fokuserad konverteringsyta med ett oemotståndligt värdeerbjudande som förvandlar besökare till leads. Klar på 1 vecka.",
};

const FEATURES = [
  "Copywriting som fokuserar på kundens problem.",
  "Design optimerad för både mobil och desktop.",
  "Integration med din outreach och ditt CRM.",
  "Möjlighet att boka möte direkt på sidan.",
];

export default function LandningssidaPage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper background="gradient" className="pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateOnScroll>
            <span className="inline-block rounded-full bg-orange-light px-4 py-1.5 text-sm font-medium text-orange">
              Standardpaketet
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-h1 font-medium text-graphite">
              En landningssida byggd för att konvertera – klar på 1 vecka.
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="mt-6 text-body-lg text-steel">
              Sluta skicka trafik till din startsida. Vi bygger en fokuserad
              konverteringsyta med ett oemotståndligt värdeerbjudande som
              förvandlar besökare till leads.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.3}>
            <div className="mt-8">
              <CalendlyButton>
                Bygg min landningssida{" "}
                <ArrowRight className="ml-2 h-5 w-5" />
              </CalendlyButton>
            </div>
          </AnimateOnScroll>
        </div>
      </SectionWrapper>

      {/* Vad du får */}
      <SectionWrapper background="white">
        <AnimateOnScroll>
          <div className="mx-auto max-w-3xl">
            <SectionHeading title="Allt du behöver för att börja generera leads direkt" />
            <p className="mt-6 text-body-lg text-steel leading-relaxed text-center">
              En ren, snabb och optimerad landningssida med en tydlig
              konverteringspunkt. Oavsett om det är en PDF-guide, ett webinar
              eller en audit, ser vi till att tröskeln för att lämna sina
              uppgifter är minimal.
            </p>
          </div>
        </AnimateOnScroll>
      </SectionWrapper>

      {/* Innehåll */}
      <SectionWrapper background="soft">
        <SectionHeading title="Vad som ingår" />
        <div className="mx-auto mt-10 max-w-2xl">
          <ul className="space-y-4">
            {FEATURES.map((feature, i) => (
              <AnimateOnScroll key={feature} delay={i * 0.1}>
                <li className="flex items-start gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-light">
                    <Check className="h-3.5 w-3.5 text-orange" />
                  </div>
                  <span className="text-body text-steel">{feature}</span>
                </li>
              </AnimateOnScroll>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      <ServiceTrust />
      <ServiceFaq />
      <ServiceCta
        title="Redo att börja konvertera?"
        subtitle="På 1 vecka har du en landningssida som jobbar för dig dygnet runt."
        cta="Bygg min landningssida"
      />
    </>
  );
}

import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CalendlyButton } from "@/components/ui/CalendlyButton";
import { ServiceTrust } from "@/components/sections/ServiceTrust";
import { ServiceFaq } from "@/components/sections/ServiceFaq";
import { ServiceCta } from "@/components/sections/ServiceCta";
import {
  Calculator,
  HelpCircle,
  BookOpen,
  MousePointerClick,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nischportal",
  description:
    "En komplett leadmotor med 5+ konverteringspunkter som utbildar din målgrupp och driver dem mot ett bokat möte.",
};

const PARTS = [
  {
    icon: Calculator,
    title: "ROI-kalkylator",
    description: "Låt kunden se sitt eget värde.",
  },
  {
    icon: HelpCircle,
    title: "Nisch-Quiz",
    description: "Kvalificera leads baserat på deras svar.",
  },
  {
    icon: BookOpen,
    title: "Kunskapsbank",
    description: "Guider som löser faktiska problem.",
  },
  {
    icon: MousePointerClick,
    title: "Multi-CTA",
    description: "Strategiskt placerade knappar för maximal konvertering.",
  },
];

export default function PortalPage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper background="gradient" className="pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateOnScroll>
            <span className="inline-block rounded-full bg-orange-light px-4 py-1.5 text-sm font-medium text-orange">
              Premiumpaketet
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-h1 font-medium text-graphite">
              Bli den självklara auktoriteten i din nisch med en egen portal.
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="mt-6 text-body-lg text-steel">
              En komplett leadmotor med 5+ konverteringspunkter som utbildar din
              målgrupp och driver dem mot ett bokat möte.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.3}>
            <div className="mt-8">
              <CalendlyButton>
                Se ett exempel på en portal{" "}
                <ArrowRight className="ml-2 h-5 w-5" />
              </CalendlyButton>
            </div>
          </AnimateOnScroll>
        </div>
      </SectionWrapper>

      {/* Varför en portal? */}
      <SectionWrapper background="white">
        <AnimateOnScroll>
          <div className="mx-auto max-w-3xl">
            <SectionHeading title="Ge värde först, sälj sen" />
            <p className="mt-6 text-body-lg text-steel leading-relaxed text-center">
              En portal är mer än en hemsida. Det är ett verktyg. Genom att
              erbjuda ROI-kalkylatorer, quiz och nischade guider får du
              besökaren att stanna längre, återkomma oftare och lita på din
              expertis.
            </p>
          </div>
        </AnimateOnScroll>
      </SectionWrapper>

      {/* Maskinens delar */}
      <SectionWrapper background="soft">
        <SectionHeading title="Maskinens delar" />
        <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-2">
          {PARTS.map((part, i) => (
            <AnimateOnScroll key={part.title} delay={i * 0.1}>
              <Card>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-light">
                  <part.icon className="h-5 w-5 text-orange" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-graphite">
                  {part.title}
                </h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">
                  {part.description}
                </p>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </SectionWrapper>

      <ServiceTrust />
      <ServiceFaq />
      <ServiceCta
        title="Redo att bygga din leadmotor?"
        subtitle="Boka en konsultation så visar vi hur en portal kan se ut i din nisch."
        cta="Se ett exempel på en portal"
      />
    </>
  );
}

import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CalendlyButton } from "@/components/ui/CalendlyButton";
import { ServiceTrust } from "@/components/sections/ServiceTrust";
import { ServiceFaq } from "@/components/sections/ServiceFaq";
import { ServiceCta } from "@/components/sections/ServiceCta";
import { Zap, Layers, FlaskConical, Bell, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Marketing Automation",
  description:
    "80% av alla affärer kräver 5+ uppföljningar. Vi bygger flödena som gör jobbet åt dig, så att inget lead faller mellan stolarna.",
};

const FEATURES = [
  {
    icon: Zap,
    title: "Trigger-baserade mejl",
    description: "Skickas direkt vid konvertering.",
  },
  {
    icon: Layers,
    title: "Smart segmentering",
    description: "Olika budskap beroende på vad de laddat ner.",
  },
  {
    icon: FlaskConical,
    title: "A/B-testning",
    description:
      "Vi optimerar ämnesrader och copy för högsta öppningsgrad.",
  },
  {
    icon: Bell,
    title: "CRM-synk",
    description: 'Dina säljare får notis när ett lead är "varmt".',
  },
];

export default function AutomationPage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper background="gradient" className="pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateOnScroll>
            <span className="inline-block rounded-full bg-orange-light px-4 py-1.5 text-sm font-medium text-orange">
              Nurturing & Automation
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-h1 font-medium text-graphite">
              Sälj medan du sover. Automatisera din uppföljning.
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="mt-6 text-body-lg text-steel">
              80% av alla affärer kräver 5+ uppföljningar. Vi bygger flödena som
              gör jobbet åt dig, så att inget lead faller mellan stolarna.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.3}>
            <div className="mt-8">
              <CalendlyButton>
                Automatisera min uppföljning{" "}
                <ArrowRight className="ml-2 h-5 w-5" />
              </CalendlyButton>
            </div>
          </AnimateOnScroll>
        </div>
      </SectionWrapper>

      {/* Nurturing-logiken */}
      <SectionWrapper background="white">
        <AnimateOnScroll>
          <div className="mx-auto max-w-3xl">
            <SectionHeading title="Från MQL till SQL utan manuellt arbete" />
            <p className="mt-6 text-body-lg text-steel leading-relaxed text-center">
              När någon konverterar på din sida börjar resan. Vi sätter upp en
              5-stegs mejlserie som utbildar, bygger förtroende och leder fram
              till ett bokat möte.
            </p>
          </div>
        </AnimateOnScroll>
      </SectionWrapper>

      {/* Funktioner */}
      <SectionWrapper background="soft">
        <SectionHeading title="Funktioner" />
        <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-2">
          {FEATURES.map((f, i) => (
            <AnimateOnScroll key={f.title} delay={i * 0.1}>
              <Card>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-light">
                  <f.icon className="h-5 w-5 text-orange" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-graphite">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">
                  {f.description}
                </p>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </SectionWrapper>

      <ServiceTrust />
      <ServiceFaq />
      <ServiceCta
        title="Redo att automatisera?"
        subtitle="Sluta tappa leads. Låt automationen göra jobbet."
        cta="Automatisera min uppföljning"
      />
    </>
  );
}

import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CalendlyButton } from "@/components/ui/CalendlyButton";
import { ServiceTrust } from "@/components/sections/ServiceTrust";
import { ServiceFaq } from "@/components/sections/ServiceFaq";
import { ServiceCta } from "@/components/sections/ServiceCta";
import { Target, Shield, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "ICP & Persona Outreach",
  description:
    "Vi identifierar din idealkund och bygger en automatiserad outreach-motor som öppnar dörrar hos företagen du faktiskt vill jobba med.",
};

const STEPS = [
  {
    step: 1,
    icon: Target,
    title: "ICP/Persona Workshop",
    description: "Vi definierar exakt vem vi ska nå.",
  },
  {
    step: 2,
    icon: Shield,
    title: "Domänuppvärmning",
    description:
      "Vi säkrar din leveransbarhet så att mejlen hamnar i inkorgen, inte i skräpposten.",
  },
  {
    step: 3,
    icon: Users,
    title: "Multi-channel Outreach",
    description:
      "Riktade sekvenser via Cold Email och LinkedIn som känns personliga, inte automatiserade.",
  },
];

export default function IcpOutreachPage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper background="gradient" className="pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateOnScroll>
            <span className="inline-block rounded-full bg-orange-light px-4 py-1.5 text-sm font-medium text-orange">
              Precision & Outreach
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-h1 font-medium text-white">
              Sluta gissa. Börja träffa rätt beslutsfattare.
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="mt-6 text-body-lg text-white/60">
              Vi identifierar din idealkund (ICP) och bygger en automatiserad
              outreach-motor som öppnar dörrar hos företagen du faktiskt vill
              jobba med.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.3}>
            <div className="mt-8">
              <CalendlyButton>
                Starta min ICP Audit <ArrowRight className="ml-2 h-5 w-5" />
              </CalendlyButton>
            </div>
          </AnimateOnScroll>
        </div>
      </SectionWrapper>

      {/* Problemet */}
      <SectionWrapper background="white">
        <AnimateOnScroll>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              title="Varför de flesta outreach-kampanjer misslyckas"
            />
            <p className="mt-6 text-body-lg text-white/60 leading-relaxed text-center">
              De flesta skickar generiska meddelanden till för breda listor.
              Resultatet? Låg svarsfrekvens och brända domäner. Vi gör tvärtom.
              Vi börjar med en djupdykning i din ICP för att förstå deras
              specifika smärtpunkter.
            </p>
          </div>
        </AnimateOnScroll>
      </SectionWrapper>

      {/* Lösningen */}
      <SectionWrapper background="soft">
        <SectionHeading title="Lösningen: Vår process" />
        <div className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <AnimateOnScroll key={s.step} delay={i * 0.1}>
              <Card>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-light">
                  <s.icon className="h-5 w-5 text-orange" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-orange">
                  Steg {s.step}
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-medium text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  {s.description}
                </p>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </SectionWrapper>

      <ServiceTrust />
      <ServiceFaq />
      <ServiceCta
        title="Redo att nå rätt beslutsfattare?"
        subtitle="Boka en konsultation så visar vi hur din outreach-motor kan se ut."
        cta="Starta min ICP Audit"
      />
    </>
  );
}

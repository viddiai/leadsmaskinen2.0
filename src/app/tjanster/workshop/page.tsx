import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CalendlyButton } from "@/components/ui/CalendlyButton";
import { ServiceTrust } from "@/components/sections/ServiceTrust";
import { ServiceFaq } from "@/components/sections/ServiceFaq";
import { ServiceCta } from "@/components/sections/ServiceCta";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "ICP & Persona Workshop",
  description:
    "Vet du exakt vem din idealkund är, var de finns och vad som håller dem vakna om nätterna? Vår workshop ger dig svaren.",
};

const DELIVERABLES = [
  "Definierad ICP & Persona-profil.",
  "Färdiga outreach-budskap.",
  "Strategisk plan för din leadmotor.",
];

export default function WorkshopPage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper background="gradient" className="pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateOnScroll>
            <span className="inline-block rounded-full bg-orange-light px-4 py-1.5 text-sm font-medium text-orange">
              Instegstjänsten
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-h1 font-extrabold text-graphite">
              Grunden för all framgångsrik försäljning: Din ICP.
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="mt-6 text-body-lg text-steel">
              Vet du exakt vem din idealkund är, var de finns och vad som håller
              dem vakna om nätterna? Vår workshop ger dig svaren.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.3}>
            <div className="mt-8">
              <CalendlyButton>
                Boka min ICP Workshop{" "}
                <ArrowRight className="ml-2 h-5 w-5" />
              </CalendlyButton>
            </div>
          </AnimateOnScroll>
        </div>
      </SectionWrapper>

      {/* Innehåll */}
      <SectionWrapper background="white">
        <AnimateOnScroll>
          <div className="mx-auto max-w-3xl">
            <SectionHeading title="3 timmar som förändrar din säljstrategi" />
            <p className="mt-6 text-body-lg text-steel leading-relaxed text-center">
              Vi går igenom din historik, dina bästa kunder och din marknad för
              att skapa en knivskarp profil av din idealkund. Vi tar fram
              budskapen som faktiskt landar.
            </p>
          </div>
        </AnimateOnScroll>
      </SectionWrapper>

      {/* No-brainer-erbjudandet */}
      <SectionWrapper background="soft">
        <SectionHeading title="En investering som betalar sig direkt" />
        <AnimateOnScroll>
          <div className="mx-auto mt-10 max-w-2xl">
            <Card highlighted>
              <div className="text-center">
                <p className="text-h2 font-[family-name:var(--font-display)] font-extrabold text-graphite">
                  7 500 <span className="text-h3 text-steel">kr</span>
                </p>
                <p className="mt-2 text-body text-steel">
                  Om du väljer att gå vidare med en Landningssida eller Portal
                  efteråt, drar vi av hela kostnaden från startavgiften.{" "}
                  <strong className="text-graphite">
                    Du har inget att förlora.
                  </strong>
                </p>
              </div>

              <div className="mt-8 border-t border-grey-light pt-6">
                <h3 className="mb-4 font-semibold text-graphite">
                  Leverabler
                </h3>
                <ul className="space-y-3">
                  {DELIVERABLES.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-light">
                        <Check className="h-3.5 w-3.5 text-orange" />
                      </div>
                      <span className="text-body text-steel">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </AnimateOnScroll>
      </SectionWrapper>

      <ServiceTrust />
      <ServiceFaq />
      <ServiceCta
        title="Redo att lägga grunden?"
        subtitle="3 timmar som ger dig klarhet i vem du ska nå och hur."
        cta="Boka min ICP Workshop"
      />
    </>
  );
}

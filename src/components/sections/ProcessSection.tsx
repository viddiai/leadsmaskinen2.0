"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessSection() {
  return (
    <SectionWrapper id="process">
      <SectionHeading
        title="Så här bygger vi din leadmotor – steg för steg."
        subtitle="Tre steg. En komplett kedja. Från okänd kontakt till kvalificerat möte."
      />

      {/* Process illustration */}
      <AnimateOnScroll>
        <img
          src="/hero_image.webp"
          alt="Leadgenereringsprocess – från idealkund till affär"
          className="mx-auto mb-10 w-full"
        />
      </AnimateOnScroll>

      {/* Step titles and descriptions */}
      <div className="grid gap-8 lg:grid-cols-3">
        {PROCESS_STEPS.map((step, i) => (
          <AnimateOnScroll key={step.step} delay={i * 0.15}>
            <div className="text-center">
              <span className="mb-2 inline-block text-sm font-bold uppercase tracking-wider text-orange">
                Steg {step.step}
              </span>
              <h3 className="text-h3 mb-3 font-semibold text-graphite">
                {step.title}
              </h3>
              <p className="text-body mx-auto max-w-xs text-steel">
                {step.description}
              </p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}

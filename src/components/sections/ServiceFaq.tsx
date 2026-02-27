"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SERVICE_FAQ } from "@/lib/constants";

export function ServiceFaq() {
  return (
    <SectionWrapper background="soft">
      <SectionHeading title="Vanliga frågor" />

      <AnimateOnScroll>
        <div className="mx-auto max-w-3xl">
          {SERVICE_FAQ.map((item) => (
            <Accordion
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}

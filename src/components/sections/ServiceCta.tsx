"use client";

import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { ArrowRight } from "lucide-react";

interface ServiceCtaProps {
  title: string;
  subtitle: string;
  cta: string;
}

export function ServiceCta({ title, subtitle, cta }: ServiceCtaProps) {
  return (
    <section className="bg-white/[0.03]">
      <div
        className="mx-auto text-center"
        style={{
          maxWidth: "var(--max-w-content)",
          padding: "clamp(2.75rem, 6vw, 5.625rem) clamp(1rem, 3vw, 2rem)",
        }}
      >
        <AnimateOnScroll>
          <h2 className="font-[family-name:var(--font-display)] text-h2 font-medium text-white">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body-lg text-white/70">
            {subtitle}
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              onClick={() => {
                // @ts-expect-error Calendly is loaded externally
                window.Calendly?.initPopupWidget({
                  url: "https://calendly.com/stefan-245/30min",
                });
              }}
            >
              {cta} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

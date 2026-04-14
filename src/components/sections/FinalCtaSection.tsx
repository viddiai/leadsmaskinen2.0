"use client";

import Script from "next/script";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function FinalCtaSection() {
  return (
    <section
      id="cta-final"
      className="relative overflow-hidden bg-white/[0.03]"
      style={{
        paddingTop: "clamp(3rem, 8vw, 7rem)",
        paddingBottom: "clamp(3rem, 8vw, 7rem)",
      }}
    >
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-orange/10 blur-3xl" />

      <div
        className="relative mx-auto text-center"
        style={{
          maxWidth: "var(--max-w-content)",
          paddingLeft: "clamp(1rem, 3vw, 2rem)",
          paddingRight: "clamp(1rem, 3vw, 2rem)",
        }}
      >
        <AnimateOnScroll>
          <h2 className="text-h2 mx-auto max-w-2xl font-[family-name:var(--font-display)] font-medium text-white">
            Redo att bygga din leadmotor?
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <p className="text-body-lg mx-auto mt-4 max-w-xl text-white/60">
            Boka en kostnadsfri konsultation. Vi visar exakt hur din pipeline
            kan se ut.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div
            className="calendly-inline-widget mx-auto mt-10 rounded-lg overflow-hidden"
            data-url="https://calendly.com/stefan-245/30min"
            style={{ minWidth: "320px", height: "700px", maxWidth: "660px" }}
          />
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <p className="mt-6 text-sm text-white/40">
            30 minuter. Inga förpliktelser. Konkret plan.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

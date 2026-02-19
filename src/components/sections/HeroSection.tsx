"use client";

import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { HERO } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white-soft to-white"
    >
      {/* Jigsaw pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url(/jigsaw.svg)",
          backgroundSize: "192px 192px",
        }}
      />

      {/* Subtle decorative circles */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-orange/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-orange/5 blur-3xl" />

      <div
        className="relative mx-auto flex flex-col items-center"
        style={{
          maxWidth: "var(--max-w-content)",
          padding: "7rem clamp(1rem, 3vw, 2rem) 4rem",
        }}
      >
        <div className="text-center">
          <AnimateOnScroll>
            <h1 className="text-hero mx-auto max-w-4xl font-[family-name:var(--font-display)] font-extrabold text-graphite">
              {HERO.title}
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <p className="text-hero mx-auto mt-2 max-w-4xl font-[family-name:var(--font-display)] font-extrabold text-graphite/20">
              {HERO.tagline}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <p className="text-body-lg mx-auto mt-8 max-w-2xl text-steel">
              {HERO.subtitle}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.3}>
            <div className="mt-10">
              <Button
                size="lg"
                onClick={() => {
                  // @ts-expect-error Calendly is loaded externally
                  window.Calendly?.initPopupWidget({ url: "https://calendly.com/stefan-245/30min" });
                }}
              >
                {HERO.cta} &rarr;
              </Button>
            </div>
          </AnimateOnScroll>
        </div>

      </div>

      {/* Hero illustration – 70% of viewport width, semi-transparent */}
      <AnimateOnScroll delay={0.2}>
        <img
          src="/hero_image.webp"
          alt="Leadgenereringsprocess – från idealkund till affär"
          className="mx-auto mt-5 opacity-40"
          style={{ width: "70vw" }}
        />
      </AnimateOnScroll>
    </section>
  );
}

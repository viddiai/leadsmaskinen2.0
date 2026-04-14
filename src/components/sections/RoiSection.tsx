"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";
import { ROI_STATS, ROI_RESULT } from "@/lib/constants";

export function RoiSection() {
  return (
    <SectionWrapper id="roi" background="soft">
      <SectionHeading
        title="338 % ROI första året – räkna själv."
        subtitle="Baserat på en portalkund med 3 säljare och 100 000 kr i genomsnittligt affärsvärde."
      />

      <div className="mx-auto max-w-4xl">
        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {ROI_STATS.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <span className="block text-3xl font-extrabold text-white whitespace-nowrap lg:text-h2">
                  {stat.value}
                </span>
                <span className="mt-1 block text-sm text-white/60">
                  {stat.label}
                </span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Result box */}
        <AnimateOnScroll delay={0.4}>
          <div className="mt-10 rounded-lg bg-white/[0.03] border border-white/10 p-8 text-center text-white">
            <div className="grid gap-6 sm:grid-cols-4">
              <div>
                <span className="block text-sm uppercase tracking-wider text-white/50">
                  Total försäljning
                </span>
                <span className="mt-1 block text-2xl font-bold">
                  {ROI_RESULT.revenue}
                </span>
              </div>
              <div>
                <span className="block text-sm uppercase tracking-wider text-white/50">
                  Investering
                </span>
                <span className="mt-1 block text-2xl font-bold">
                  {ROI_RESULT.investment}
                </span>
              </div>
              <div>
                <span className="block text-sm uppercase tracking-wider text-white/50">
                  Besparing
                </span>
                <span className="mt-1 block text-2xl font-bold text-orange">
                  {ROI_RESULT.savings}
                </span>
              </div>
              <div>
                <span className="block text-sm uppercase tracking-wider text-white/50">
                  Nettovinst
                </span>
                <span className="mt-1 block text-2xl font-bold text-success">
                  {ROI_RESULT.profit}
                </span>
              </div>
            </div>
            <p className="mt-6 text-lg font-semibold">
              Kundens ROI:{" "}
              <span className="text-orange">{ROI_RESULT.roi}</span>
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.5}>
          <div className="mt-8 text-center">
            <Button href="/kalkylator/">
              Visa vad mina siffror kan bli
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}

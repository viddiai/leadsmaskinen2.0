"use client";

import { useState, useMemo } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { CalculatorInput } from "@/components/calculator/CalculatorInput";
import { CalculatorSlider } from "@/components/calculator/CalculatorSlider";
import { HeroMetric } from "@/components/calculator/HeroMetric";
import {
  costOfBadProspecting,
  opportunityValue,
} from "@/lib/calculators";

export function CostOpportunitySection() {
  // Cost (red) state
  const [numSalespeople, setNumSalespeople] = useState(3);
  const [costPerHour, setCostPerHour] = useState(600);
  const [hoursPerWeek, setHoursPerWeek] = useState(12);
  const [inefficientPct, setInefficientPct] = useState(50);

  // Opportunity (green) state
  const [newDealsPerYear, setNewDealsPerYear] = useState(23);
  const [avgOrderValue, setAvgOrderValue] = useState(100000);
  const [marginPct, setMarginPct] = useState(30);
  const [customerLifetimeYears, setCustomerLifetimeYears] = useState(2);

  const cost = useMemo(
    () =>
      costOfBadProspecting({
        numSalespeople,
        costPerHour,
        hoursPerWeek,
        inefficientPct,
      }),
    [numSalespeople, costPerHour, hoursPerWeek, inefficientPct]
  );

  const opp = useMemo(
    () =>
      opportunityValue({
        newDealsPerYear,
        avgOrderValue,
        marginPct,
        customerLifetimeYears,
      }),
    [newDealsPerYear, avgOrderValue, marginPct, customerLifetimeYears]
  );

  return (
    <SectionWrapper id="roi" background="soft">
      <SectionHeading
        title="Vad kostar dålig prospektering — och vad är ny tillväxt värd?"
        subtitle="Räkna själv. Två sidor av samma mynt."
      />

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        {/* LEFT — Cost (red) */}
        <AnimateOnScroll delay={0}>
          <div className="h-full rounded-2xl border border-red-500/30 bg-red-950/40 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white">
              Vad kostar din ineffektiva prospektering?
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Du betalar redan idag för dåliga leads. Pengarna brinner —
              oavsett om du tar in Leadsmaskinen eller inte.
            </p>

            <div className="mt-6 grid gap-4">
              <CalculatorInput
                label="Antal säljare"
                value={numSalespeople}
                onChange={setNumSalespeople}
                suffix="st"
              />
              <CalculatorInput
                label="Internkostnad per säljtimme"
                value={costPerHour}
                onChange={setCostPerHour}
                suffix="kr"
              />
              <CalculatorInput
                label="Prospekteringstid per säljare/vecka"
                value={hoursPerWeek}
                onChange={setHoursPerWeek}
                suffix="h"
              />
              <CalculatorSlider
                label="Ineffektiv andel av prospekteringstiden"
                value={inefficientPct}
                onChange={setInefficientPct}
                min={0}
                max={100}
                suffix="%"
                accent="orange"
              />
            </div>

            <div className="mt-6 space-y-4 border-t border-white/10 pt-6">
              <HeroMetric
                label="Total prospekteringskostnad/år"
                value={cost.totalProspectingCost}
                tone="neutral"
              />
              <HeroMetric
                label="Bortkastad kostnad/år"
                value={cost.wastedCost}
                tone="orange"
                size="hero"
              />
              <p className="text-sm italic text-white/70">
                Det här är pengar du brinner på fel prospekt och dålig data —
                varje år.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* RIGHT — Opportunity (green) */}
        <AnimateOnScroll delay={0.15}>
          <div className="h-full rounded-2xl border border-success/30 bg-green-950/40 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white">
              Vad kan nya affärer ge dig?
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Möjlighetsräknaren — ren uppsida. Vad öppnar sig om du
              vinner fler affärer?
            </p>

            <div className="mt-6 grid gap-4">
              <CalculatorSlider
                label="Antal nya affärer per år"
                value={newDealsPerYear}
                onChange={setNewDealsPerYear}
                min={0}
                max={200}
                suffix="st"
                accent="success"
              />
              <CalculatorInput
                label="Genomsnittligt ordervärde"
                value={avgOrderValue}
                onChange={setAvgOrderValue}
                suffix="kr"
              />
              <CalculatorInput
                label="Marginal"
                value={marginPct}
                onChange={setMarginPct}
                suffix="%"
              />
              <CalculatorInput
                label="Livstid på kund"
                value={customerLifetimeYears}
                onChange={setCustomerLifetimeYears}
                suffix="år"
              />
            </div>

            <div className="mt-6 space-y-4 border-t border-white/10 pt-6">
              <HeroMetric
                label="Ökad försäljning år 1"
                value={opp.salesYear1}
                tone="neutral"
              />
              <HeroMetric
                label="Ökad bruttomarginal år 1"
                value={opp.grossMarginY1}
                tone="success"
                size="hero"
              />
              <HeroMetric
                label="Totalt värde över livstid"
                value={opp.ltvValue}
                tone="neutral"
              />
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}

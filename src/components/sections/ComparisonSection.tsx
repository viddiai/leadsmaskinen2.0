"use client";

import { X, Check } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const AGENCY_CONS = [
  "Betalt för timmar/retainer, oavsett leads",
  'Incitament kan spreta: "aktivitet" blir målet',
  "Otydlig spårning och svår insyn",
  "Långsammare leverans, mer manuell hantering",
  "Högre totalpris över tid i många upplägg",
  'Optimering blir "om tid finns"',
];

const LM_PROS = [
  "Betalt kopplat till levererade leads (pay-per-lead)",
  "Gemensamma incitament: vi vinner när partnern får leads",
  "Full transparens i gemensam dashboard",
  "Snabbare leverans genom produktiserat, automatiserat arbetssätt",
  "Lägre pris än byrå i modellen, utan retainer-låsta kostnader",
  "Månadsvis optimeringsloop som standard",
];

export function ComparisonSection() {
  return (
    <SectionWrapper id="comparison">
      <SectionHeading
        title="Standard hos Leadsmaskinen"
        subtitle="Ni får en skalbar motor – inte timmar. Utfallet är kärnan."
      />

      <div className="mx-auto max-w-5xl">
        <AnimateOnScroll>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Traditionella Byråer */}
            <div className="rounded-xl border border-grey-light bg-white p-6 shadow-[var(--shadow-card)]">
              <h3 className="mb-6 text-xl font-bold text-graphite">
                Traditionella Byråer
              </h3>
              <div className="space-y-4">
                {AGENCY_CONS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                    <span className="text-sm text-steel">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadsmaskinen */}
            <div className="relative rounded-xl border-2 border-orange bg-white p-6 shadow-[var(--shadow-card-hover)]">
              <div className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-success text-white shadow-md">
                <Check className="h-4 w-4" />
              </div>
              <h3 className="mb-6 text-xl font-bold text-graphite">
                Leadsmaskinen
              </h3>
              <div className="space-y-4">
                {LM_PROS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    <span className="text-sm font-medium text-graphite">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}

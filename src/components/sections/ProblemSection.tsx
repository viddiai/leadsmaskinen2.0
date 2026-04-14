"use client";

import {
  TrendingDown,
  MousePointerClick,
  Clock,
  Receipt,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { PROBLEMS } from "@/lib/constants";

const iconMap = {
  TrendingDown,
  MousePointerClick,
  Clock,
  Receipt,
} as const;

export function ProblemSection() {
  return (
    <SectionWrapper id="problem" background="soft">
      <SectionHeading
        title="Känner du igen dig?"
        subtitle="De flesta B2B-företag kämpar med samma utmaningar – och förlorar affärer varje dag."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PROBLEMS.map((problem, i) => {
          const Icon = iconMap[problem.icon as keyof typeof iconMap];
          return (
            <AnimateOnScroll key={problem.title} delay={i * 0.1}>
              <div className="rounded-lg bg-white/5 border border-white/10 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-light">
                  <Icon className="h-6 w-6 text-orange" />
                </div>
                <h3 className="text-h3 mb-2 font-semibold text-white">
                  {problem.title}
                </h3>
                <p className="text-body text-white/60">{problem.description}</p>
              </div>
            </AnimateOnScroll>
          );
        })}
      </div>

      <AnimateOnScroll delay={0.4}>
        <p className="mt-12 text-center text-body-lg font-medium text-white">
          Det finns en bättre väg.
        </p>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}

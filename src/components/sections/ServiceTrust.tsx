"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SERVICE_TRUST } from "@/lib/constants";
import { ShieldCheck } from "lucide-react";

export function ServiceTrust() {
  return (
    <SectionWrapper background="white">
      <AnimateOnScroll>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-light">
            <ShieldCheck className="h-6 w-6 text-orange" />
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-h3 font-bold text-graphite">
            {SERVICE_TRUST.title}
          </h2>
          <p className="mt-4 text-body-lg text-steel leading-relaxed">
            {SERVICE_TRUST.body}
          </p>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}

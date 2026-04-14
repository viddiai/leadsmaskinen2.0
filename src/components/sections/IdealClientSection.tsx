"use client";

import { Check, X } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { IDEAL_FIT, POOR_FIT } from "@/lib/constants";

export function IdealClientSection() {
  return (
    <section
      id="ideal-client"
      className="bg-white/[0.03] py-16 md:py-24"
    >
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: "var(--max-w-content)",
          paddingLeft: "clamp(1rem, 3vw, 2rem)",
          paddingRight: "clamp(1rem, 3vw, 2rem)",
        }}
      >
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-h2 font-medium text-white font-[family-name:var(--font-display)]">
            Är Leadsmaskinen rätt för dig?
          </h2>
          <div className="mt-4 mx-auto h-1 w-12 rounded-full bg-orange" />
          <p className="text-body-lg mt-6 mx-auto max-w-2xl font-light text-white/60 font-[family-name:var(--font-display)]">
            Vi är selektiva med vilka uppdrag vi tar för att säkerställa bästa möjliga resultat för våra partners.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
          {/* Bra match */}
          <AnimateOnScroll delay={0}>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success/20">
                  <Check className="h-4 w-4 text-success" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Vi är en bra match om
                </h3>
              </div>
              <ul className="space-y-4">
                {IDEAL_FIT.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success/70" />
                    <span className="text-sm text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Passar sämre */}
          <AnimateOnScroll delay={0.15}>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20">
                  <X className="h-4 w-4 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Vi passar sämre om
                </h3>
              </div>
              <ul className="space-y-4">
                {POOR_FIT.map((item) => (
                  <li key={item} className="flex gap-3">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/70" />
                    <span className="text-sm text-white/60">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

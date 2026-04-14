"use client";

import { Check, Clock } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { PACKAGES } from "@/lib/constants";

function PricingCard({
  pkg,
  delay,
}: {
  pkg: (typeof PACKAGES)[keyof typeof PACKAGES];
  delay: number;
}) {
  return (
    <AnimateOnScroll delay={delay}>
      <Card highlighted={pkg.popular} className="relative flex flex-col h-full">
        {pkg.popular && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Populärast
          </span>
        )}

        <div className="mb-6">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange">
            {pkg.label}
          </span>
          <h3 className="text-h3 mt-1 font-bold text-white">{pkg.name}</h3>
        </div>

        <div className="mb-6">
          {"originalPrice" in pkg && pkg.originalPrice && (
            <div className="mb-1 flex items-center gap-2">
              <span className="text-lg text-white/30 line-through">
                {pkg.originalPrice} {pkg.unit}
              </span>
              <span className="rounded-full bg-orange/20 px-2.5 py-0.5 text-xs font-semibold text-orange">
                SPARA {(parseInt(String(pkg.originalPrice).replace(/\s/g, "")) - parseInt(pkg.price.replace(/\s/g, ""))).toLocaleString("sv-SE")} kr
              </span>
            </div>
          )}
          <span className="text-h1 font-extrabold text-white">
            {pkg.price}
          </span>
          <span className="ml-1 text-white/60">{pkg.unit}</span>
          <p className="mt-1 text-sm text-white/60">{pkg.priceNote}</p>
        </div>

        <div className="mb-6 flex items-center gap-2 text-sm text-white/60">
          <Clock className="h-4 w-4" />
          <span>Leverans: {pkg.delivery}</span>
        </div>

        <ul className="mb-8 space-y-3 flex-grow">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex gap-3 text-body">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />
              <span className="text-white/60">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          variant={pkg.popular ? "primary" : "secondary"}
          fullWidth
          onClick={() => {
            // @ts-expect-error Calendly is loaded externally
            window.Calendly?.initPopupWidget({ url: "https://calendly.com/stefan-245/30min" });
          }}
        >
          {pkg.cta}
        </Button>
      </Card>
    </AnimateOnScroll>
  );
}

export function PackagesSection() {
  return (
    <SectionWrapper id="packages">
      <SectionHeading
        title="Välj ditt paket."
        subtitle="Två vägar till kvalificerade leads. Samma beprövade metod."
      />

      <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
        <PricingCard pkg={PACKAGES.portal} delay={0} />
        <PricingCard pkg={PACKAGES.landing} delay={0.15} />
      </div>

      <AnimateOnScroll delay={0.3}>
        <div className="mx-auto mt-10 max-w-2xl rounded-lg border border-white/10 bg-white/5 p-6 text-center">
          <p className="text-body text-white/60">
            <span className="font-semibold text-white">
              Inte redo för ett helt paket?
            </span>{" "}
            Starta med en fristående ICP Persona Workshop – 7 500 kr (avräknas om
            du går vidare).
          </p>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  );
}

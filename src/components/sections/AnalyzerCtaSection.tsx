"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function AnalyzerCtaSection() {
  const [url, setUrl] = useState("");
  const router = useRouter();

  const handleAnalyze = () => {
    if (!url.trim()) return;
    const encoded = encodeURIComponent(url.trim());
    router.push(`/konverteringsanalys/?url=${encoded}`);
  };

  return (
    <SectionWrapper background="gradient">
      <div className="mx-auto max-w-2xl">
        <AnimateOnScroll>
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-orange-light px-4 py-1.5 text-sm font-medium text-orange">
              Gratis verktyg
            </span>
            <h2 className="text-h1 mt-6 font-[family-name:var(--font-display)] font-extrabold text-graphite">
              Testa din webbsidas konverteringsförmåga
            </h2>
            <p className="text-body-lg mt-4 text-steel">
              Få en obarmhärtig analys av vad som hindrar din webbsida från att
              konvertera besökare till leads.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <Card>
            <h3 className="mb-4 text-lg font-semibold text-graphite">
              Analysera din webbsidas konverteringsförmåga
            </h3>
            <div className="flex gap-3">
              <input
                type="url"
                placeholder="Ange URL att analysera..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
                className="flex-1 rounded-md border border-grey-light px-4 py-3 text-graphite placeholder:text-steel/50 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
              />
              <Button onClick={handleAnalyze}>Analysera</Button>
            </div>
          </Card>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}

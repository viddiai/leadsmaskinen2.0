"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

export default function GuidePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to webhook/backend
    console.log("Guide download:", { name, email });
    setSubmitted(true);
  };

  return (
    <SectionWrapper background="gradient" className="min-h-screen pt-40">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-orange-light px-4 py-1.5 text-sm font-medium text-orange">
          Gratis guide
        </span>

        <h1 className="text-h1 mt-6 font-[family-name:var(--font-display)] font-medium text-graphite">
          7 beprövade sätt att öka konverteringen och vinna fler affärer
        </h1>

        <p className="text-body-lg mt-4 text-steel">
          Lär dig exakt hur framgångsrika B2B-företag konverterar fler besökare
          till kvalificerade leads – utan att öka sin annonsbudget.
        </p>

        <div className="mx-auto mt-10 max-w-[260px]">
          <img
            src="/guide-cover-v2.png"
            alt="7 beprövade sätt att öka konverteringen och vinna fler affärer"
            className="w-full rounded-sm shadow-lg"
          />
        </div>

        <ul className="mt-8 space-y-3 text-left inline-block">
          {[
            "Hur du identifierar din idealkund med precision",
            "De 5 konverteringspunkterna som varje portal behöver",
            "Automation som värmer upp leads medan du sover",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-body">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />
              <span className="text-steel">{item}</span>
            </li>
          ))}
        </ul>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <input
              type="text"
              placeholder="Ditt namn"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-md border border-grey-light px-4 py-3 text-graphite placeholder:text-steel/50 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
            />
            <input
              type="email"
              placeholder="Din e-postadress"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-md border border-grey-light px-4 py-3 text-graphite placeholder:text-steel/50 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
            />
            <Button fullWidth>Ladda ner guiden gratis</Button>
            <p className="text-xs text-steel/60">
              Vi delar aldrig din e-post. Läs vår{" "}
              <a href="/integritetspolicy/" className="underline hover:text-steel">
                integritetspolicy
              </a>
              .
            </p>
          </form>
        ) : (
          <div className="mt-10 rounded-lg bg-success/10 border border-success/30 p-8">
            <Check className="mx-auto h-12 w-12 text-success" />
            <h2 className="text-h3 mt-4 font-semibold text-graphite">
              Tack! Kolla din inbox.
            </h2>
            <p className="mt-2 text-body text-steel">
              Vi har skickat guiden till {email}. Kolla skräpposten om du inte
              hittar den.
            </p>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}

"use client";

import { useState } from "react";
import { X, Check } from "lucide-react";
import { useExitIntent } from "@/hooks/useExitIntent";

const BENEFITS = [
  "Formulera ett värdeerbjudande som faktiskt övertygar svenska beslutsfattare",
  "Fånga upp potentiella kunder innan de är redo att köpa",
  "Eliminera friktion som dödar affärer",
  "Bygga systematiskt förtroende genom sociala bevis",
  "Skapa handlingsdriven kommunikation som leder till avslut",
  "Strukturera komplex information utan att överväldiga",
  "Använda avancerade strategier för dramatisk tillväxt",
];

export function ExitIntentModal() {
  const { triggered, dismiss } = useExitIntent();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to webhook/backend
    console.log("Exit intent lead:", { email });
    setSubmitted(true);
    setTimeout(dismiss, 2500);
  };

  if (!triggered) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-[#111]"
        style={{
          boxShadow:
            "0 0 60px rgba(255, 106, 61, 0.25), 0 0 120px rgba(255, 106, 61, 0.1), 0 25px 50px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* Close button */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
          aria-label="Stäng"
        >
          <X className="h-4 w-4" />
        </button>

        {!submitted ? (
          <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-5 lg:gap-12">
            {/* Left: Guide cover */}
            <div className="flex justify-center lg:col-span-2">
              <img
                src="/guide-cover-v2.png"
                alt="7 beprövade sätt att öka konverteringen och vinna fler affärer"
                className="w-full max-w-xs rounded-lg shadow-[var(--shadow-card-hover)]"
              />
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-3">
              <h2 className="font-[family-name:var(--font-display)] text-h3 font-medium text-white">
                7 beprövade sätt att öka konverteringen och vinna fler affärer
              </h2>

              <p className="mt-4 font-semibold text-white">Denna guide ger dig</p>
              <p className="mt-1 text-sm text-white/60">Konkreta verktyg för att:</p>

              <ul className="mt-3 space-y-2">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm text-white/60">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <p className="mt-5 flex items-start gap-2 rounded-lg bg-orange/10 px-4 py-3 text-sm text-white">
                <span className="flex-shrink-0">💡</span>
                Kom ihåg: Varje kapitel avslutas med &quot;3 saker du kan göra imorgon&quot; – konkreta åtgärder som ger omedelbar effekt.
              </p>

              <form onSubmit={handleSubmit} className="mt-6">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    required
                    placeholder="Din e-postadress"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
                  />
                  <button
                    type="submit"
                    className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md bg-orange px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-orange-hover"
                  >
                    Hämta guiden
                  </button>
                </div>
                <p className="mt-2 text-xs text-white/60">
                  Vi behandlar dina uppgifter enligt vår{" "}
                  <a href="/integritetspolicy/" className="underline hover:text-white">
                    integritetspolicy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-light">
              <Check className="h-7 w-7 text-orange" />
            </div>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-medium text-white">
              Tack!
            </h2>
            <p className="mt-2 text-body text-white/60">
              Kolla din inbox – guiden är på väg!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

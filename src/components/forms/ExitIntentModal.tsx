"use client";

import { useState } from "react";
import { X, Check } from "lucide-react";
import { useExitIntent } from "@/hooks/useExitIntent";

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-graphite/80 backdrop-blur-md p-4">
      <div
        className="relative flex w-full max-w-3xl overflow-hidden rounded-2xl bg-white"
        style={{
          boxShadow:
            "0 0 60px rgba(255, 106, 61, 0.25), 0 0 120px rgba(255, 106, 61, 0.1), 0 25px 50px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* Left: Guide cover */}
        <div className="hidden md:flex w-[40%] shrink-0 items-center justify-center bg-graphite p-10">
          <img
            src="/guide-cover.png"
            alt="7 beprövade sätt att öka konverteringen och vinna fler affärer"
            className="w-full rounded-sm shadow-lg"
          />
        </div>

        {/* Right: Content */}
        <div className="relative flex-1 p-8 md:p-10">
          <button
            onClick={dismiss}
            className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-grey-light text-steel transition-colors hover:bg-grey-light hover:text-graphite cursor-pointer"
            aria-label="Stäng"
          >
            <X className="h-4 w-4" />
          </button>

          {!submitted ? (
            <>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-graphite md:text-3xl">
                Vänta! Missa inte guiden.
              </h2>
              <p className="mt-3 text-body text-steel">
                Ladda ner vår kostnadsfria guide och lär dig 7 beprövade sätt
                att öka konverteringen och vinna fler affärer.
              </p>

              <ul className="mt-5 space-y-2.5">
                {[
                  "Konkreta verktyg du kan använda direkt",
                  "Strategier för svenska B2B-företag",
                  "3 saker du kan göra imorgon i varje kapitel",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                    <span className="text-sm text-graphite">{item}</span>
                  </li>
                ))}
              </ul>

              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <input
                  type="email"
                  placeholder="Din e-postadress"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg border border-grey-light bg-white-soft px-4 py-3.5 text-graphite placeholder:text-steel/40 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
                />
                <button
                  type="submit"
                  className="w-full cursor-pointer rounded-lg bg-orange px-6 py-3.5 font-semibold text-white transition-all hover:bg-orange-hover hover:shadow-lg"
                >
                  Hämta guiden gratis
                </button>
              </form>

              <p className="mt-4 text-center text-xs text-steel/50">
                Vi behandlar dina uppgifter enligt vår integritetspolicy.
              </p>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-light">
                <Check className="h-7 w-7 text-orange" />
              </div>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold text-graphite">
                Tack!
              </h2>
              <p className="mt-2 text-body text-steel">
                Kolla din inbox.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

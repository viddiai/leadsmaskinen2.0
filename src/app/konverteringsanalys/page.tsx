"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  AlertTriangle,
  FileText,
  BarChart3,
  Check,
  ArrowRight,
  Star,
  Loader2,
  RotateCcw,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { useAnalyzer, type AnalyzeResult } from "@/hooks/useAnalyzer";

function StarRating({ score }: { score: number }) {
  const rounded = Math.round(score);
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < rounded ? "fill-orange text-orange" : "text-grey-light"}`}
        />
      ))}
      <span className="ml-2 text-sm font-medium text-steel">
        {score.toFixed(1)}/5
      </span>
    </div>
  );
}

function ResultView({
  result,
  onGetReport,
}: {
  result: AnalyzeResult;
  onGetReport: () => void;
}) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-h3 font-bold text-graphite">
            {result.company_name || "Analysresultat"}
          </h2>
          {result.industry_label && (
            <span className="mt-1 inline-block text-xs font-medium uppercase tracking-wider text-orange">
              {result.industry_label}
            </span>
          )}
        </div>
        <StarRating score={result.overall_score} />
      </div>

      {/* Description */}
      <p className="text-body text-steel">
        {(result.company_description || "").substring(0, 250)}
        {(result.company_description || "").length > 250 ? "..." : ""}
      </p>

      {/* Issues */}
      <Card>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </div>
          <span className="font-semibold text-graphite">
            Identifierade problem
          </span>
          <span className="ml-auto text-sm text-steel">
            {result.issues_count || result.logical_errors.length} st
          </span>
        </div>
        <ul className="space-y-3">
          {result.logical_errors.map((error, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span className="text-sm text-steel leading-relaxed">
                {error}
              </span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Summary */}
      <Card>
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white-soft">
            <FileText className="h-4 w-4 text-steel" />
          </div>
          <span className="font-semibold text-graphite">Sammanfattning</span>
        </div>
        <p className="text-sm text-steel leading-relaxed">
          {result.short_description || result.teaser_text}
        </p>
      </Card>

      {/* Full report teaser */}
      <div className="rounded-lg border-2 border-orange/20 bg-orange-light p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange/10">
            <BarChart3 className="h-4 w-4 text-orange" />
          </div>
          <span className="font-semibold text-graphite">
            Den fullständiga rapporten
          </span>
        </div>
        <ul className="mb-6 space-y-3">
          {[
            "Detaljerad analys av leadmagneter och formulär",
            "Granskning av CTA-knappar och konverteringselement",
            "Betyg på varje konverteringskriterium",
            "5 konkreta rekommendationer för ökad konvertering",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-orange/10">
                <Check className="h-3 w-3 text-orange" />
              </div>
              <span className="text-sm text-steel">{item}</span>
            </li>
          ))}
        </ul>
        <Button onClick={onGetReport} fullWidth>
          Få den fullständiga rapporten{" "}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <p className="mt-3 text-center text-xs text-steel/60">
          Gratis. Ingen spam. Levereras direkt.
        </p>
      </div>
    </div>
  );
}

function LeadForm({
  onSubmit,
  error,
  isSubmitting,
}: {
  onSubmit: (name: string, email: string, company: string) => void;
  error: string;
  isSubmitting: boolean;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name, email, company);
  };

  const inputClass =
    "w-full rounded-md border border-grey-light px-4 py-3 text-graphite placeholder:text-steel/50 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20";

  return (
    <Card>
      <h3 className="text-h3 mb-4 font-semibold text-graphite">
        Fyll i för att få rapporten
      </h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Ditt namn *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={inputClass}
        />
        <input
          type="email"
          placeholder="Din e-post *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={inputClass}
        />
        <input
          type="text"
          placeholder="Företagsnamn (valfritt)"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={inputClass}
        />
        <Button fullWidth className={isSubmitting ? "opacity-70" : ""}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Skickar...
            </>
          ) : (
            <>
              Få den fullständiga rapporten{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </form>
    </Card>
  );
}

function KonverteringsanalysContent() {
  const searchParams = useSearchParams();
  const initialUrl = searchParams.get("url") || undefined;
  const analyzer = useAnalyzer(initialUrl);

  return (
    <SectionWrapper background="gradient" className="min-h-screen pt-40">
      <div className="mx-auto max-w-2xl">
        {/* Header - always visible */}
        <AnimateOnScroll>
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-orange-light px-4 py-1.5 text-sm font-medium text-orange">
              Gratis verktyg
            </span>
            <h1 className="text-h1 mt-6 font-[family-name:var(--font-display)] font-medium text-graphite">
              Testa din webbsidas konverteringsförmåga
            </h1>
            <p className="text-body-lg mt-4 text-steel">
              Få en obarmhärtig analys av vad som hindrar din webbsida från att
              konvertera besökare till leads.
            </p>
          </div>
        </AnimateOnScroll>

        {/* URL Input */}
        {analyzer.state === "idle" && (
          <AnimateOnScroll delay={0.1}>
            <Card>
              <h3 className="mb-4 text-lg font-semibold text-graphite">
                Analysera din webbsidas konverteringsförmåga
              </h3>
              <div className="flex gap-3">
                <input
                  type="url"
                  placeholder="Ange URL att analysera..."
                  value={analyzer.url}
                  onChange={(e) => analyzer.setUrl(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && analyzer.analyze()}
                  className="flex-1 rounded-md border border-grey-light px-4 py-3 text-graphite placeholder:text-steel/50 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
                />
                <Button onClick={analyzer.analyze}>Analysera</Button>
              </div>
              {analyzer.error && (
                <p className="mt-2 text-sm text-red-500">{analyzer.error}</p>
              )}
            </Card>
          </AnimateOnScroll>
        )}

        {/* Loading */}
        {analyzer.state === "loading" && (
          <Card className="text-center py-12">
            <Loader2 className="mx-auto h-10 w-10 animate-spin text-orange" />
            <p className="mt-4 text-body font-medium text-graphite">
              Analyserar webbsidan...
            </p>
            <p className="mt-1 text-sm text-steel">
              Detta kan ta upp till 30 sekunder.
            </p>
          </Card>
        )}

        {/* Result */}
        {analyzer.state === "result" && analyzer.result && (
          <>
            <ResultView
              result={analyzer.result}
              onGetReport={analyzer.showLeadForm}
            />
            <button
              onClick={analyzer.reset}
              className="mx-auto mt-6 flex items-center gap-2 text-sm text-steel hover:text-graphite cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" /> Analysera en annan webbsida
            </button>
          </>
        )}

        {/* Lead Form */}
        {(analyzer.state === "leadForm" || analyzer.state === "submitting") && (
          <>
            <LeadForm
              onSubmit={analyzer.submitLead}
              error={analyzer.error}
              isSubmitting={analyzer.state === "submitting"}
            />
            <button
              onClick={analyzer.reset}
              className="mx-auto mt-6 flex items-center gap-2 text-sm text-steel hover:text-graphite cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" /> Börja om
            </button>
          </>
        )}
      </div>
    </SectionWrapper>
  );
}

export default function KonverteringsanalysPage() {
  return (
    <Suspense>
      <KonverteringsanalysContent />
    </Suspense>
  );
}

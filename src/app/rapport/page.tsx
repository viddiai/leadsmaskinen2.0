"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Star,
  Loader2,
  AlertTriangle,
  FileText,
  BarChart3,
  Lightbulb,
  ClipboardList,
  ArrowRight,
  Download,
  ExternalLink,
  Megaphone,
  FormInput,
  MousePointerClick,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { useReport, type ReportData } from "@/hooks/useReport";

const API_URL =
  "https://konverteringsoptimerare-production.up.railway.app/api";

/* ── Star rating (reused pattern) ── */

function StarRating({ score, size = "md" }: { score: number; size?: "sm" | "md" }) {
  const rounded = Math.round(score);
  const starSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${starSize} ${i < rounded ? "fill-orange text-orange" : "text-white/20"}`}
        />
      ))}
      <span className="ml-1.5 text-sm font-medium text-white/60">
        {score.toFixed(1)}/5
      </span>
    </div>
  );
}

/* ── Section header helper ── */

function SectionHeader({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  badge,
}: {
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  title: string;
  badge?: string;
}) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-lg ${iconBg}`}
      >
        <Icon className={`h-4 w-4 ${iconColor}`} />
      </div>
      <span className="font-semibold text-white">{title}</span>
      {badge && (
        <span className="ml-auto text-sm text-white/60">{badge}</span>
      )}
    </div>
  );
}

/* ── Report content ── */

function ReportContent({ report }: { report: ReportData }) {
  const pdfUrl = `${API_URL}/report/${report.report_id}/pdf?token=${new URLSearchParams(window.location.search).get("token")}`;

  return (
    <div className="space-y-6">
      {/* 1. Header */}
      <AnimateOnScroll>
        <div className="mb-2">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-h2 font-[family-name:var(--font-display)] font-medium text-white">
                {report.company_name || "Konverteringsrapport"}
              </h1>
              {report.industry_label && (
                <span className="mt-1 inline-block text-xs font-medium uppercase tracking-wider text-orange">
                  {report.industry_label}
                </span>
              )}
            </div>
            <StarRating score={report.overall_score} />
          </div>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-white/60">
            <span>
              Analyserad:{" "}
              {new Date(report.created_at).toLocaleDateString("sv-SE")}
            </span>
            <a
              href={report.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-orange hover:text-orange-hover transition-colors"
            >
              {report.url}
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </AnimateOnScroll>

      {/* 2. Kort beskrivning */}
      <AnimateOnScroll delay={0.05}>
        <Card>
          <SectionHeader
            icon={FileText}
            iconBg="bg-white/5"
            iconColor="text-white/60"
            title="Kort beskrivning"
          />
          <p className="text-sm text-white/60 leading-relaxed">
            {report.short_description || report.company_description || "Ingen beskrivning tillgänglig."}
          </p>
        </Card>
      </AnimateOnScroll>

      {/* 3. Resultat: Leadmagneter & formulär */}
      <AnimateOnScroll delay={0.1}>
        <Card>
          <SectionHeader
            icon={Megaphone}
            iconBg="bg-orange-light"
            iconColor="text-orange"
            title="Resultat: Leadmagneter, formulär & CTA:er"
          />

          {report.lead_magnets_analysis && (
            <p className="mb-4 text-sm text-white/60 leading-relaxed">
              {report.lead_magnets_analysis}
            </p>
          )}

          <ul className="mb-4 space-y-2">
            <li className="flex items-start gap-2 text-sm">
              <Megaphone className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
              <span className="text-white/60">
                <strong className="text-white">Leadmagneter:</strong>{" "}
                {report.lead_magnets?.length || 0} identifierade.{" "}
                {(report.lead_magnets || [])
                  .slice(0, 3)
                  .map((lm) => lm.text)
                  .join(", ") || "Inga specifika hittades."}
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <FormInput className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
              <span className="text-white/60">
                <strong className="text-white">Formulär:</strong>{" "}
                {report.forms?.length || 0} st identifierade.
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <MousePointerClick className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
              <span className="text-white/60">
                <strong className="text-white">CTA:</strong>{" "}
                {(report.cta_buttons || [])
                  .slice(0, 5)
                  .map((c) => `"${c.text}"`)
                  .join(", ") || "Inga tydliga CTA:er hittades."}
              </span>
            </li>
          </ul>

          {report.forms_analysis && (
            <p className="mb-3 text-sm text-white/60 leading-relaxed">
              {report.forms_analysis}
            </p>
          )}
          {report.cta_analysis && (
            <p className="text-sm text-white/60 leading-relaxed">
              {report.cta_analysis}
            </p>
          )}
        </Card>
      </AnimateOnScroll>

      {/* 4. Avgörande insikter */}
      <AnimateOnScroll delay={0.15}>
        <Card highlighted>
          <SectionHeader
            icon={Lightbulb}
            iconBg="bg-orange/10"
            iconColor="text-orange"
            title="Avgörande insikter"
          />
          {report.logical_verdict ? (
            <div className="space-y-3 text-sm text-white/60 leading-relaxed whitespace-pre-line">
              {report.logical_verdict}
            </div>
          ) : (
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Loader2 className="h-4 w-4 animate-spin text-orange" />
              Genererar AI-analys...
            </div>
          )}
        </Card>
      </AnimateOnScroll>

      {/* 5. Konverteringsanalys (tabell) */}
      {report.criteria_analysis?.length > 0 && (
        <AnimateOnScroll delay={0.2}>
          <Card>
            <SectionHeader
              icon={BarChart3}
              iconBg="bg-white/5"
              iconColor="text-white/60"
              title="Konverteringsanalys"
            />

            {/* Desktop table */}
            <div className="max-md:hidden overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="pb-3 font-semibold text-white">
                      Kriterium
                    </th>
                    <th className="pb-3 font-semibold text-white">
                      Betyg
                    </th>
                    <th className="pb-3 font-semibold text-white">
                      Förklaring
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {report.criteria_analysis.map((c) => {
                    const aiExplanation =
                      report.criteria_explanations?.[c.criterion] ||
                      c.explanation;
                    return (
                      <tr
                        key={c.criterion}
                        className="border-b border-white/10/50 last:border-0"
                      >
                        <td className="py-3 pr-4 font-medium text-white">
                          {c.criterion_label}
                        </td>
                        <td className="py-3 pr-4">
                          <StarRating score={c.score} size="sm" />
                        </td>
                        <td className="py-3 text-white/60">
                          {aiExplanation}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile stacked cards */}
            <div className="md:hidden space-y-4">
              {report.criteria_analysis.map((c) => {
                const aiExplanation =
                  report.criteria_explanations?.[c.criterion] ||
                  c.explanation;
                return (
                  <div
                    key={c.criterion}
                    className="rounded-md border border-white/10/50 p-4"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-medium text-white text-sm">
                        {c.criterion_label}
                      </span>
                    </div>
                    <StarRating score={c.score} size="sm" />
                    <p className="mt-2 text-sm text-white/60">
                      {aiExplanation}
                    </p>
                  </div>
                );
              })}
            </div>
          </Card>
        </AnimateOnScroll>
      )}

      {/* 6. Sammanfattande bedömning */}
      {report.summary_assessment && (
        <AnimateOnScroll delay={0.25}>
          <Card>
            <SectionHeader
              icon={ClipboardList}
              iconBg="bg-white/5"
              iconColor="text-white/60"
              title="Sammanfattande bedömning"
            />
            <ul className="space-y-3">
              {report.summary_assessment
                .split("\n")
                .filter((line) => line.trim())
                .map((line, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange" />
                    <span className="text-sm text-white/60 leading-relaxed">
                      {line.trim()}
                    </span>
                  </li>
                ))}
            </ul>
          </Card>
        </AnimateOnScroll>
      )}

      {/* 7. Rekommendationer */}
      {report.recommendations?.length > 0 && (
        <AnimateOnScroll delay={0.3}>
          <div className="rounded-lg border-2 border-orange/20 bg-orange-light p-6">
            <SectionHeader
              icon={AlertTriangle}
              iconBg="bg-orange/10"
              iconColor="text-orange"
              title="Rekommendationer"
            />
            <ol className="space-y-4">
              {report.recommendations.map((rec, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange text-white text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="text-sm text-white/60 leading-relaxed">
                    {rec}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </AnimateOnScroll>
      )}

      {/* 8. Nästa steg */}
      <AnimateOnScroll delay={0.35}>
        <Card>
          <h2 className="text-h3 mb-3 font-bold text-white">
            Nästa steg
          </h2>
          <p className="mb-4 text-sm text-white/60 leading-relaxed">
            Vill du ha hjälp att åtgärda problemen och öka din konvertering?
          </p>
          <Button href="https://calendly.com/stefan-245/30min">
            Boka genomgång för ökad konvertering{" "}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Card>
      </AnimateOnScroll>

      {/* 9. PDF-nedladdning */}
      <AnimateOnScroll delay={0.4}>
        <div className="flex justify-center">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border-2 border-white/10 px-6 py-3 text-sm font-semibold text-white/60 transition-all hover:border-orange hover:text-white"
          >
            <Download className="h-4 w-4" />
            Ladda ner som PDF
          </a>
        </div>
      </AnimateOnScroll>

      {/* 10. Footer */}
      <div className="pt-4 text-center text-sm text-white/40">
        <a
          href="/"
          className="text-orange hover:text-orange-hover transition-colors"
        >
          Gå till Leadsmaskinen
        </a>
      </div>
    </div>
  );
}

/* ── Page wrapper (needs Suspense for useSearchParams) ── */

function ReportPageInner() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const token = searchParams.get("token");
  const { state, report, error } = useReport(id, token);

  return (
    <SectionWrapper background="gradient" className="min-h-screen pt-40">
      <div className="mx-auto max-w-3xl">
        {/* Loading */}
        {state === "loading" && (
          <Card className="py-12 text-center">
            <Loader2 className="mx-auto h-10 w-10 animate-spin text-orange" />
            <p className="mt-4 text-body font-medium text-white">
              Laddar rapport...
            </p>
          </Card>
        )}

        {/* Error */}
        {state === "error" && (
          <Card className="py-12 text-center">
            <AlertTriangle className="mx-auto h-10 w-10 text-red-500" />
            <p className="mt-4 text-body font-medium text-white">
              Kunde inte ladda rapporten
            </p>
            <p className="mt-1 text-sm text-white/60">{error}</p>
            <div className="mt-6">
              <Button href="/konverteringsanalys/">
                Gör en ny analys
              </Button>
            </div>
          </Card>
        )}

        {/* Report */}
        {state === "ready" && report && <ReportContent report={report} />}
      </div>
    </SectionWrapper>
  );
}

export default function RapportPage() {
  return (
    <Suspense
      fallback={
        <SectionWrapper background="gradient" className="min-h-screen pt-40">
          <div className="mx-auto max-w-3xl">
            <Card className="py-12 text-center">
              <Loader2 className="mx-auto h-10 w-10 animate-spin text-orange" />
              <p className="mt-4 text-body font-medium text-white">
                Laddar rapport...
              </p>
            </Card>
          </div>
        </SectionWrapper>
      }
    >
      <ReportPageInner />
    </Suspense>
  );
}

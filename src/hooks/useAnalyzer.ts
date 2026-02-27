"use client";

import { useState, useCallback, useEffect, useRef } from "react";

const API_URL =
  "https://konverteringsoptimerare-production.up.railway.app/api";

export interface AnalyzeResult {
  company_name: string;
  industry_label: string;
  overall_score: number;
  company_description: string;
  logical_errors: string[];
  short_description: string;
  teaser_text: string;
  issues_count: number;
  report_id: string;
}

interface LeadResponse {
  access_token: string;
}

type AnalyzerState =
  | "idle"
  | "loading"
  | "result"
  | "leadForm"
  | "submitting"
  | "done";

export function useAnalyzer(initialUrl?: string) {
  const [state, setState] = useState<AnalyzerState>("idle");
  const [url, setUrl] = useState(initialUrl || "");
  const [error, setError] = useState("");
  const [result, setResult] = useState<AnalyzeResult | null>(null);
  const autoStarted = useRef(false);

  const analyze = useCallback(async () => {
    const trimmed = url.trim();
    if (!trimmed) {
      setError("Ange en URL");
      return;
    }

    const fullUrl = trimmed.startsWith("http") ? trimmed : "https://" + trimmed;
    try {
      new URL(fullUrl);
    } catch {
      setError("Ogiltig URL");
      return;
    }

    setError("");
    setState("loading");

    try {
      const res = await fetch(`${API_URL}/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: fullUrl }),
      });

      if (!res.ok) throw new Error("Analys misslyckades");

      const data: AnalyzeResult = await res.json();
      setResult(data);
      setState("result");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Något gick fel. Försök igen."
      );
      setState("idle");
    }
  }, [url]);

  const showLeadForm = useCallback(() => {
    setState("leadForm");
  }, []);

  const submitLead = useCallback(
    async (name: string, email: string, company: string) => {
      if (!name || !email) {
        setError("Namn och e-post krävs");
        return;
      }
      if (!email.includes("@")) {
        setError("Ogiltig e-postadress");
        return;
      }
      if (!result) return;

      setError("");
      setState("submitting");

      try {
        const res = await fetch(`${API_URL}/lead`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            company_name: company || null,
            report_id: result.report_id,
          }),
        });

        if (!res.ok) throw new Error("Något gick fel");

        const data: LeadResponse = await res.json();
        setState("done");

        // Redirect to full report on our own site
        window.location.href = `/rapport/?id=${result.report_id}&token=${data.access_token}`;
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Något gick fel. Försök igen."
        );
        setState("leadForm");
      }
    },
    [result]
  );

  // Auto-start analysis if initialUrl is provided
  useEffect(() => {
    if (initialUrl && !autoStarted.current) {
      autoStarted.current = true;
      analyze();
    }
  }, [initialUrl, analyze]);

  const reset = useCallback(() => {
    setState("idle");
    setUrl("");
    setError("");
    setResult(null);
  }, []);

  return {
    state,
    url,
    setUrl,
    error,
    result,
    analyze,
    showLeadForm,
    submitLead,
    reset,
  };
}

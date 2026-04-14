"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { Info } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

/* ── Number formatting ── */
const fmt = (n: number) =>
  new Intl.NumberFormat("sv-SE", {
    maximumFractionDigits: 1,
    minimumFractionDigits: 0,
  }).format(n);

const fmtKr = (n: number) => `${fmt(n)} kr`;
const fmtSt = (n: number) => `${fmt(n)} st`;
const fmtPct = (n: number) => `${fmt(n)} %`;

/* ── Tooltip component ── */
function Tooltip({ text }: { text: string }) {
  return (
    <span className="group relative ml-1 inline-flex cursor-help">
      <Info className="h-4 w-4 text-white/30" />
      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded-lg bg-white/10 px-3 py-2 text-xs leading-relaxed text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        {text}
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-white/10" />
      </span>
    </span>
  );
}

/* ── Input field component ── */
function InputField({
  label,
  value,
  onChange,
  tooltip,
  suffix,
  readOnly = false,
}: {
  label: string;
  value: number;
  onChange?: (v: number) => void;
  tooltip?: string;
  suffix?: string;
  readOnly?: boolean;
}) {
  const [text, setText] = useState(fmt(value));
  const [focused, setFocused] = useState(false);
  const prevValue = useRef(value);

  // Sync formatted display when value changes externally (not while editing)
  useEffect(() => {
    if (!focused && value !== prevValue.current) {
      setText(fmt(value));
    }
    prevValue.current = value;
  }, [value, focused]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setText(raw);
    const normalized = raw.replace(/\s/g, "").replace(",", ".");
    const num = parseFloat(normalized);
    if (!isNaN(num)) onChange?.(num);
    else if (normalized === "" || normalized === ".") onChange?.(0);
  };

  const handleBlur = () => {
    setFocused(false);
    setText(fmt(value));
  };

  return (
    <div>
      <label className="mb-1.5 flex items-center text-sm font-medium text-white">
        {label}
        {suffix && <span className="ml-1 text-white/40">({suffix})</span>}
        {tooltip && <Tooltip text={tooltip} />}
      </label>
      {readOnly ? (
        <div className="rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-base font-semibold text-white">
          {fmt(value)} {suffix === "kr" ? "kr" : suffix === "%" ? "%" : "st"}
        </div>
      ) : (
        <input
          type="text"
          inputMode="decimal"
          value={focused ? text : fmt(value)}
          onFocus={() => setFocused(true)}
          onBlur={handleBlur}
          onChange={handleChange}
          className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder:text-white/30 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
        />
      )}
    </div>
  );
}

/* ── Result card component ── */
function ResultCard({
  label,
  value,
  variant = "default",
}: {
  label: string;
  value: string;
  variant?: "default" | "blue" | "green" | "green-dark" | "orange" | "yellow" | "light";
}) {
  const styles = {
    default: "border-white/10 bg-white/5",
    blue: "border-blue-200 bg-blue-600 text-white",
    green: "border-green-900 bg-green-950",
    "green-dark": "border-green-800 bg-green-900",
    orange: "border-orange/30 bg-orange/10",
    yellow: "border-yellow-900 bg-yellow-950",
    light: "border-white/10 bg-white/[0.03]",
  };

  const labelColor =
    variant === "blue" ? "text-blue-100" : "text-white/60";
  const valueColor =
    variant === "blue"
      ? "text-white"
      : variant === "green" || variant === "green-dark"
        ? "text-green-400"
        : variant === "orange"
          ? "text-orange"
          : "text-white";

  return (
    <div className={`rounded-lg border px-4 py-3 ${styles[variant]}`}>
      <p className={`text-xs font-medium ${labelColor}`}>{label}</p>
      <p className={`text-lg font-bold ${valueColor}`}>{value}</p>
    </div>
  );
}

/* ── Main page ── */
export default function KalkylatorPage() {
  // Indata
  const [dealValue, setDealValue] = useState(100000);
  const [mqlRate, setMqlRate] = useState(1);
  const [sqlRate, setSqlRate] = useState(3);
  const [dealRate, setDealRate] = useState(0);
  const [outreach, setOutreach] = useState(10000);
  const [portalPct, setPortalPct] = useState(15);
  const [mqlPct, setMqlPct] = useState(10);
  const [sqlPct, setSqlPct] = useState(3);
  const [mqlDealPct, setMqlDealPct] = useState(3);
  const [sqlDealPct, setSqlDealPct] = useState(40);
  const [marginPct, setMarginPct] = useState(30);

  // LTV / ROI inputs
  const [investment, setInvestment] = useState(0);
  const [ltvFactor, setLtvFactor] = useState(2);

  // Säljkostnads-sektionen
  const [numSalespeople, setNumSalespeople] = useState(3);
  const [hourlyRate, setHourlyRate] = useState(600);
  const [prospectingHoursPerWeek, setProspectingHoursPerWeek] = useState(12);
  const [inefficiencyPct, setInefficiencyPct] = useState(50);

  // Direktberäkningar
  const calc = useMemo(() => {
    const portalVisitors = outreach * (portalPct / 100);
    const mqlLeads = portalVisitors * (mqlPct / 100);
    const sqlLeads = portalVisitors * (sqlPct / 100);
    const mqlValue = dealValue * (mqlRate / 100);
    const sqlValue = dealValue * (sqlRate / 100);
    const mqlDeals = mqlLeads * (mqlDealPct / 100);
    const sqlDeals = sqlLeads * (sqlDealPct / 100);
    const totalDeals = mqlDeals + sqlDeals;
    const totalSales = totalDeals * dealValue;
    const margin = totalSales * (marginPct / 100);
    const leadProvision = mqlLeads * mqlValue + sqlLeads * sqlValue;
    const dealProvision = totalSales * (dealRate / 100);

    // Säljkostnad
    const prospectingHoursPerYear = numSalespeople * prospectingHoursPerWeek * 52;
    const totalProspectingCost = prospectingHoursPerYear * hourlyRate;
    const inefficientCost = totalProspectingCost * (inefficiencyPct / 100);

    // Nettovinst = marginal - provisioner - investering + besparing
    const netProfit = margin - leadProvision - dealProvision - investment + inefficientCost;

    // LTV (inkl. besparing per år)
    const ltvValue = (margin + inefficientCost) * ltvFactor;
    const totalCost = leadProvision + dealProvision + investment;
    const roiKr = ltvValue - totalCost;
    const roiPct = totalCost > 0 ? (ltvValue / totalCost) * 100 : 0;

    return {
      portalVisitors,
      mqlLeads,
      sqlLeads,
      mqlValue,
      sqlValue,
      mqlDeals,
      sqlDeals,
      totalDeals,
      totalSales,
      margin,
      leadProvision,
      dealProvision,
      netProfit,
      ltvValue,
      roiKr,
      roiPct,
      prospectingHoursPerYear,
      totalProspectingCost,
      inefficientCost,
    };
  }, [
    dealValue, mqlRate, sqlRate, dealRate, outreach,
    portalPct, mqlPct, sqlPct, mqlDealPct, sqlDealPct,
    marginPct, investment, ltvFactor,
    numSalespeople, hourlyRate, prospectingHoursPerWeek, inefficiencyPct,
  ]);

  return (
    <SectionWrapper background="gradient" className="min-h-screen pt-40 pb-20">
      {/* Header */}
      <AnimateOnScroll>
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-orange-light px-4 py-1.5 text-sm font-medium text-orange">
            ROI-kalkylator
          </span>
          <h1 className="text-h2 mt-4 font-[family-name:var(--font-display)] font-medium text-white">
            Beräkna din ROI
          </h1>
          <p className="text-body mt-3 font-light text-white/60 font-[family-name:var(--font-display)]">
            Fyll i värdena för att se estimerad besparing, försäljning, nettovinst och ROI.
          </p>
        </div>
      </AnimateOnScroll>

      {/* Pipeline visualization */}
      <AnimateOnScroll delay={0.05}>
        <div className="mb-10 flex items-start justify-center gap-2 sm:gap-4">
          {[
            { step: "1", label: "Kontaktade via e-post/LinkedIn", value: fmtSt(outreach) },
            { step: "2", label: "Besökare till portal/landningssida", value: fmtSt(calc.portalVisitors) },
            { step: "3", label: "Leads", value: fmtSt(calc.mqlLeads + calc.sqlLeads) },
            { step: "4", label: "Bokade möten", value: fmtSt(calc.sqlLeads) },
            { step: "5", label: "Affärer", value: fmtSt(calc.totalDeals) },
          ].flatMap((item, i, arr) => {
            const circle = (
              <div key={item.step} className="flex flex-col items-center">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-orange bg-white/5 text-xs sm:text-sm font-bold text-orange shadow-sm">
                  {item.step}
                </div>
                <span className="mt-2 text-center text-[10px] sm:text-xs font-semibold text-white" style={{ maxWidth: 100 }}>{item.label}</span>
                <span className="text-xs text-white/60">{item.value}</span>
              </div>
            );
            if (i < arr.length - 1) {
              const arrow = (
                <div key={`arrow-${i}`} className="mt-4 flex items-center text-orange/40">
                  <div className="h-px w-4 bg-current sm:w-8" />
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0">
                    <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              );
              return [circle, arrow];
            }
            return [circle];
          })}
        </div>
      </AnimateOnScroll>

      {/* 3 column layout */}
      <div className="grid gap-6 lg:grid-cols-3">

        {/* ── Column 1: Säljarkostnadskalkyl ── */}
        <AnimateOnScroll delay={0}>
          <Card className="h-full">
            <h2 className="text-h3 font-bold text-white">Säljarkostnadskalkyl</h2>
            <p className="mb-6 text-sm text-white/60">Vad kostar din säljkår på prospektering?</p>

            <div className="space-y-4">
              <InputField
                label="Antal säljare"
                suffix="st"
                value={numSalespeople}
                onChange={setNumSalespeople}
              />
              <InputField
                label="Internkostnad per timme"
                suffix="kr"
                value={hourlyRate}
                onChange={setHourlyRate}
                tooltip="Full internkostnad inkl. lön, sociala avgifter, pension, IT etc. Typiskt 400–820 kr/h för AE/SDR."
              />
              <InputField
                label="Prospekteringstid per säljare/vecka"
                suffix="h"
                value={prospectingHoursPerWeek}
                onChange={setProspectingHoursPerWeek}
                tooltip="Typiskt 8–16 timmar/vecka (20–40 % av arbetstiden) för B2B-säljare."
              />
              <div>
                <label className="mb-1.5 flex items-center text-sm font-medium text-white">
                  Ineffektiv andel prospekteringstid (fel ICP / dålig data)
                  <Tooltip text="Analyser visar att upp till 50 % av prospekteringstiden är ineffektiv p.g.a. dålig data eller fel målgrupp." />
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={5}
                    value={inefficiencyPct}
                    onChange={(e) => setInefficiencyPct(Number(e.target.value))}
                    className="flex-1 accent-orange"
                  />
                  <div className="w-20 shrink-0">
                    <InputField
                      label=""
                      suffix="%"
                      value={inefficiencyPct}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <hr className="border-white/10" />

              <ResultCard
                label="Prospekteringstimmar per år (totalt team)"
                value={`${fmt(calc.prospectingHoursPerYear)} h`}
              />
              <ResultCard
                label="Total prospekteringskostnad per år"
                value={fmtKr(calc.totalProspectingCost)}
                variant="orange"
              />
              <div className="rounded-lg border border-orange/30 bg-orange/10 px-4 py-3">
                <p className="text-xs font-medium text-white/60">
                  varav ineffektiv tid ({fmt(inefficiencyPct)} %)
                </p>
                <p className="text-lg font-bold text-orange">{fmtKr(calc.inefficientCost)}</p>
                <p className="mt-0.5 text-[10px] text-white/40">
                  = pengar du bränner på fel prospekt och dålig data
                </p>
              </div>
              <div className="rounded-lg border border-blue-800 bg-blue-950/50 px-4 py-3">
                <p className="text-xs font-semibold text-blue-300">
                  Varför försvinner denna kostnad med Leadsmaskinen?
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-blue-200/70">
                  Istället för att dina säljare lägger tid på kall prospektering mot fel målgrupper
                  bygger vi en ICP/Persona-styrd outreach som riktar sig till exakt rätt beslutsfattare.
                  Det innebär att din pipeline fylls med högkvalitativa, förkvalificerade leads —
                  vilket ger kortare säljcykler, högre konvertering och noll bortkastad prospekteringstid.
                </p>
              </div>
            </div>
          </Card>
        </AnimateOnScroll>

        {/* ── Column 2: Indata ── */}
        <AnimateOnScroll delay={0.1}>
          <Card className="h-full">
            <h2 className="text-h3 font-bold text-white">Indata</h2>
            <p className="mb-6 text-sm text-white/60">Ange dina värden nedan</p>

            <div className="space-y-4">
              <InputField
                label="Genomsnittligt värde per affär"
                suffix="kr"
                value={dealValue}
                onChange={setDealValue}
              />
              <InputField
                label="Marginal"
                suffix="%"
                value={marginPct}
                onChange={setMarginPct}
                tooltip="Din vinstmarginal på varje avslutad affär."
              />
              <InputField
                label="Lead-ersättning MQL"
                suffix="%"
                value={mqlRate}
                onChange={setMqlRate}
                tooltip="Procentuell ersättning du betalar per MQL-lead, baserat på genomsnittligt affärsvärde."
              />
              <InputField
                label="Lead-ersättning SQL"
                suffix="%"
                value={sqlRate}
                onChange={setSqlRate}
                tooltip="Procentuell ersättning du betalar per SQL-lead, baserat på genomsnittligt affärsvärde."
              />
              <InputField
                label="Ersättning för affär"
                suffix="%"
                value={dealRate}
                onChange={setDealRate}
                tooltip="Procentuell provision du betalar på varje avslutad affär."
              />

              <hr className="border-white/10" />

              <InputField
                label="Outreach – Kontaktade via e-post"
                suffix="st"
                value={outreach}
                onChange={setOutreach}
              />
              <InputField
                label="Andel besökare till Portalen"
                suffix="%"
                value={portalPct}
                onChange={setPortalPct}
                tooltip="Andelen av de kontaktade som besöker portalen/landningssidan."
              />
              <InputField
                label="Antal besökare till Portalen"
                suffix="st"
                value={calc.portalVisitors}
                readOnly
              />

              <hr className="border-white/10" />

              <InputField
                label="Andel MQL-leads"
                suffix="%"
                value={mqlPct}
                onChange={setMqlPct}
                tooltip="Andel av portalbesökarna som blir Marketing Qualified Leads."
              />
              <InputField
                label="Andel SQL-leads"
                suffix="%"
                value={sqlPct}
                onChange={setSqlPct}
                tooltip="Andel av portalbesökarna som blir Sales Qualified Leads."
              />
              <InputField
                label="Andel affärer per lead – MQL"
                suffix="%"
                value={mqlDealPct}
                onChange={setMqlDealPct}
                tooltip="Hur stor andel av MQL-leads som konverterar till en avslutad affär."
              />
              <InputField
                label="Andel affärer per lead – SQL"
                suffix="%"
                value={sqlDealPct}
                onChange={setSqlDealPct}
                tooltip="Hur stor andel av SQL-leads som konverterar till en avslutad affär."
              />
            </div>
          </Card>
        </AnimateOnScroll>

        {/* ── Column 3: Direktberäkningar + LTV ── */}
        <AnimateOnScroll delay={0.2}>
          <Card className="h-full">
            <h2 className="text-h3 font-bold text-white">Direktberäkningar</h2>
            <p className="mb-6 text-sm text-white/60">Resultaten uppdateras i realtid</p>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <ResultCard label="Antal MQL-leads" value={fmtSt(calc.mqlLeads)} />
                <ResultCard label="Antal SQL-leads" value={fmtSt(calc.sqlLeads)} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <ResultCard label="MQL-värde per lead" value={fmtKr(calc.mqlValue)} />
                <ResultCard label="SQL-värde per lead" value={fmtKr(calc.sqlValue)} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <ResultCard label="Beräknade MQL-affärer" value={fmtSt(calc.mqlDeals)} />
                <ResultCard label="Beräknade SQL-affärer" value={fmtSt(calc.sqlDeals)} />
              </div>

              <ResultCard
                label="Totalt antal affärer"
                value={fmtSt(calc.totalDeals)}
                variant="yellow"
              />
              <ResultCard
                label="Total försäljning"
                value={fmtKr(calc.totalSales)}
                variant="blue"
              />
              <ResultCard
                label="Marginal"
                value={fmtKr(calc.margin)}
                variant="green"
              />
              <ResultCard
                label="Leadsprovision"
                value={fmtKr(calc.leadProvision)}
                variant="orange"
              />
              <ResultCard
                label="Affärsprovision"
                value={fmtKr(calc.dealProvision)}
                variant="light"
              />
              <InputField
                label="Investering"
                suffix="kr"
                value={investment}
                onChange={setInvestment}
              />

              {/* Besparing från säljarkostnadskalkyl */}
              <ResultCard
                label="Besparing med Leadsmaskinen per år"
                value={`+${fmtKr(calc.inefficientCost)}`}
                variant="green"
              />

              {/* Nettovinst — extra framhävd */}
              <div className="relative overflow-hidden rounded-xl border-2 border-green-700 bg-gradient-to-br from-green-950 to-green-900 px-5 py-5 shadow-lg">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-green-800/30" />
                <div className="absolute -bottom-2 -left-2 h-16 w-16 rounded-full bg-green-800/20" />
                <p className="relative text-xs font-semibold uppercase tracking-wider text-green-400">
                  Nettovinst
                </p>
                <p className="relative mt-1 text-3xl font-extrabold text-green-300">
                  {fmtKr(calc.netProfit)}
                </p>
                <p className="relative mt-1 text-[10px] text-green-400/70">
                  Marginal − provisioner − investering + besparing
                </p>
              </div>

              {/* LTV / ROI */}
              <hr className="border-white/10" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">
                Livstidsvärde
              </h3>

              <InputField
                label="LTV (År)"
                value={ltvFactor}
                onChange={setLtvFactor}
              />

              <div>
                <p className="mb-1.5 text-sm font-medium text-white/60">LTV (Värde)</p>
                <p className="text-2xl font-bold text-white">{fmtKr(calc.ltvValue)}</p>
              </div>
              <div>
                <p className="mb-1.5 text-sm font-medium text-white/60">ROI (kr)</p>
                <p className={`text-2xl font-bold ${calc.roiKr >= 0 ? "text-green-600" : "text-red-500"}`}>
                  {fmtKr(calc.roiKr)}
                </p>
              </div>
              <div>
                <p className="mb-1.5 text-sm font-medium text-white/60">ROI (%)</p>
                <p className={`text-2xl font-bold ${calc.roiPct >= 100 ? "text-green-600" : "text-orange"}`}>
                  {fmtPct(calc.roiPct)}
                </p>
              </div>
            </div>
          </Card>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}

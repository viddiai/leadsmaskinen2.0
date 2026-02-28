"use client";

import { useState, useEffect } from "react";

const COLORS = {
  bg: "#0B0F1A",
  bgCard: "#111827",
  text: "#F8FAFC",
  textMuted: "#94A3B8",
  accent: "#F26A3E",
  accentGlow: "rgba(242, 106, 62, 0.15)",
  accentSoft: "rgba(242, 106, 62, 0.08)",
  line: "rgba(148, 163, 184, 0.1)",
  lineActive: "rgba(242, 106, 62, 0.4)",
  green: "#34D399",
  greenGlow: "rgba(52, 211, 153, 0.2)",
};

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient mesh */}
      <div
        className="absolute blur-[80px]"
        style={{
          top: "-20%", right: "-10%", width: "60%", height: "60%",
          background: `radial-gradient(ellipse at center, ${COLORS.accentSoft} 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute blur-[60px]"
        style={{
          bottom: "-10%", left: "-5%", width: "40%", height: "50%",
          background: "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.05) 0%, transparent 70%)",
        }}
      />
      {/* Grid lines */}
      <svg width="100%" height="100%" className="absolute inset-0 opacity-30">
        <defs>
          <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke={COLORS.line} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
      {/* Fade edges */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, ${COLORS.bg} 0%, transparent 15%, transparent 85%, ${COLORS.bg} 100%),
                        linear-gradient(to bottom, ${COLORS.bg} 0%, transparent 20%, transparent 80%, ${COLORS.bg} 100%)`,
        }}
      />
    </div>
  );
}

function AnimatedCounter({ end, suffix = "", duration = 2000, delay = 0 }: {
  end: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    const steps = 40;
    const increment = end / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, end, duration]);

  return <span>{count.toLocaleString("sv-SE")}{suffix}</span>;
}

function PipelineVisualization() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: "Outreach", count: "10 000", sub: "kontakter", icon: "📡" },
    { label: "Besökare", count: "1 500", sub: "15% CTR", icon: "👁" },
    { label: "MQL", count: "150", sub: "kvalificerade", icon: "🎯" },
    { label: "SQL", count: "45", sub: "bokade möten", icon: "🤝" },
    { label: "Affärer", count: "23", sub: "stängda", icon: "💰" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div
      className="hero-slide-up"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "28px 24px",
        background: `linear-gradient(135deg, ${COLORS.bgCard} 0%, rgba(17, 24, 39, 0.8) 100%)`,
        borderRadius: "16px",
        border: `1px solid ${COLORS.line}`,
        backdropFilter: "blur(10px)",
        width: "100%",
        maxWidth: "380px",
        animationDelay: "0.5s",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div
          className="hero-pulse"
          style={{
            width: "8px", height: "8px", borderRadius: "50%",
            background: COLORS.green,
            boxShadow: `0 0 8px ${COLORS.greenGlow}`,
          }}
        />
        <span
          className="font-[family-name:var(--font-mono)]"
          style={{
            fontSize: "11px", fontWeight: 600, letterSpacing: "1.5px",
            color: COLORS.green, textTransform: "uppercase",
          }}
        >
          LIVE PIPELINE — EXEMPELKUND
        </span>
      </div>

      {/* Funnel steps */}
      {steps.map((step, i) => {
        const isActive = i === activeStep;
        const widthPercent = 100 - i * 16;
        return (
          <div key={i} className="flex items-center gap-3" style={{ marginBottom: i < steps.length - 1 ? "4px" : "0" }}>
            <div
              style={{
                position: "relative",
                width: `${widthPercent}%`,
                minWidth: "120px",
                minHeight: "42px",
                background: isActive
                  ? `linear-gradient(90deg, ${COLORS.accentGlow} 0%, rgba(242,106,62,0.05) 100%)`
                  : "rgba(148, 163, 184, 0.03)",
                borderRadius: "8px",
                border: `1px solid ${isActive ? COLORS.lineActive : COLORS.line}`,
                display: "flex",
                alignItems: "center",
                padding: "0 12px",
                gap: "8px",
                transition: "all 0.5s ease",
                overflow: "hidden",
              }}
            >
              {isActive && (
                <div
                  style={{
                    position: "absolute", left: 0, top: 0, bottom: 0, width: "3px",
                    background: COLORS.accent,
                    borderRadius: "8px 0 0 8px",
                    boxShadow: `0 0 12px ${COLORS.accent}`,
                  }}
                />
              )}
              <span style={{ fontSize: "14px" }}>{step.icon}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  className="font-[family-name:var(--font-mono)]"
                  style={{
                    fontSize: "12px", fontWeight: 600,
                    color: isActive ? COLORS.text : COLORS.textMuted,
                    transition: "color 0.3s",
                  }}
                >
                  {step.label}
                </div>
              </div>
              <div style={{ textAlign: "right", whiteSpace: "nowrap", flexShrink: 0 }}>
                <div
                  className="font-[family-name:var(--font-mono)]"
                  style={{
                    fontSize: "15px", fontWeight: 700,
                    color: isActive ? COLORS.accent : COLORS.textMuted,
                    transition: "color 0.3s",
                  }}
                >
                  {step.count}
                </div>
                <div
                  className="font-[family-name:var(--font-mono)]"
                  style={{ fontSize: "9px", color: COLORS.textMuted, letterSpacing: "0.5px" }}
                >
                  {step.sub}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Bottom result */}
      <div
        className="mt-4"
        style={{
          padding: "14px 16px",
          background: COLORS.accentGlow,
          borderRadius: "10px",
          border: `1px solid ${COLORS.lineActive}`,
        }}
      >
        {/* Labels row */}
        <div className="flex justify-between" style={{ marginBottom: "4px" }}>
          <div
            className="font-[family-name:var(--font-mono)]"
            style={{
              fontSize: "10px", fontWeight: 600, letterSpacing: "1px",
              color: COLORS.textMuted, textTransform: "uppercase",
            }}
          >
            KUNDENS ROI
          </div>
          <div
            className="font-[family-name:var(--font-mono)]"
            style={{
              fontSize: "10px", fontWeight: 600, letterSpacing: "1px",
              color: COLORS.textMuted, textTransform: "uppercase",
            }}
          >
            TOTAL FÖRSÄLJNING
          </div>
        </div>
        {/* Values row */}
        <div className="flex justify-between items-baseline">
          <div
            className="font-[family-name:var(--font-display)]"
            style={{
              fontSize: "28px", fontWeight: 800, color: COLORS.accent,
              lineHeight: 1.1,
            }}
          >
            <AnimatedCounter end={575} suffix="%" delay={1200} />
          </div>
          <div
            className="font-[family-name:var(--font-mono)]"
            style={{
              fontSize: "18px", fontWeight: 700, color: COLORS.text,
              marginTop: "2px",
            }}
          >
            <AnimatedCounter end={2300} suffix=" tkr" delay={1500} duration={2500} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustBadge({ text, delay }: { text: string; delay: number }) {
  return (
    <div
      className="hero-fade-in font-[family-name:var(--font-mono)]"
      style={{
        display: "inline-flex", alignItems: "center", gap: "6px",
        padding: "6px 14px",
        background: "rgba(148, 163, 184, 0.06)",
        border: `1px solid ${COLORS.line}`,
        borderRadius: "100px",
        fontSize: "12px", color: COLORS.textMuted,
        animationDelay: `${delay}s`,
      }}
    >
      <span style={{ color: COLORS.accent }}>✓</span>
      {text}
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ background: COLORS.bg, padding: "40px 24px" }}
    >
      <GridBackground />

      <div
        className="relative z-10 w-full flex items-center justify-between gap-15 hero-layout"
        style={{ maxWidth: "var(--max-w-content)" }}
      >
        {/* Left: text content */}
        <div className="hero-slide-up flex-1 max-w-[560px] hero-left">
          {/* Label */}
          <div
            className="font-[family-name:var(--font-mono)]"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "8px 16px",
              background: COLORS.accentGlow,
              border: `1px solid ${COLORS.lineActive}`,
              borderRadius: "100px",
              fontSize: "12px", fontWeight: 600, letterSpacing: "1.2px",
              color: COLORS.accent, textTransform: "uppercase",
              marginBottom: "28px",
            }}
          >
            <span>⚡</span> B2B Leadgenerering
          </div>

          <h1
            className="font-[family-name:var(--font-display)]"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 52px)",
              fontWeight: 700, lineHeight: 1.08,
              color: COLORS.text,
              margin: "0 0 8px 0", letterSpacing: "-1.5px",
            }}
          >
            Ersättning för resultat,<br />inte timmar.
          </h1>

          <h2
            className="font-[family-name:var(--font-display)]"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 36px)",
              fontWeight: 700, lineHeight: 1.08,
              margin: 0, letterSpacing: "-0.5px",
            }}
          >
            <span className="hero-shimmer">Idealkunder in. Affärer ut.</span>
          </h2>

          <p
            className="font-[family-name:var(--font-display)]"
            style={{
              fontSize: "17px", lineHeight: 1.6,
              color: COLORS.textMuted,
              margin: "20px 0 32px 0", maxWidth: "480px",
            }}
          >
            Vi bygger nichade portaler och landningssidor som ökar konvertering,
            kvalificerar målgruppen och skapar en förutsägbar pipeline. Inga
            onödiga funktioner, bara det som driver affärer.
          </p>

          <a href="/#packages" className="hero-cta">
            Få din ICP / Persona Workshop — gratis vid köp →
          </a>

          <div className="flex flex-wrap gap-2 mt-7">
            <TrustBadge text="Pay-per-lead" delay={1.0} />
            <TrustBadge text="Inga retainers" delay={1.15} />
            <TrustBadge text="Live inom 3 veckor" delay={1.3} />
          </div>
        </div>

        {/* Right: pipeline visualization */}
        <div className="shrink-0 hero-right">
          <PipelineVisualization />
        </div>
      </div>
    </section>
  );
}

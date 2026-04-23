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
      {/* Single warm radial — subtle */}
      <div
        className="absolute blur-[100px]"
        style={{
          top: "-15%", right: "-5%", width: "55%", height: "55%",
          background: `radial-gradient(ellipse at center, ${COLORS.accentSoft} 0%, transparent 70%)`,
        }}
      />
      {/* Grid lines — quieter */}
      <svg width="100%" height="100%" className="absolute inset-0 opacity-[0.12]">
        <defs>
          <pattern id="hero-grid" width="72" height="72" patternUnits="userSpaceOnUse">
            <path d="M 72 0 L 0 0 0 72" fill="none" stroke={COLORS.line} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
      {/* Fade edges — extended */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, ${COLORS.bg} 0%, transparent 18%, transparent 82%, ${COLORS.bg} 100%),
                        linear-gradient(to bottom, ${COLORS.bg} 0%, transparent 22%, transparent 78%, ${COLORS.bg} 100%)`,
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
    { label: "Besparing", count: "374 400", sub: "kr/år prospektering", icon: "💸" },
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
            NETTOVINST
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
            <AnimatedCounter end={338} suffix="%" delay={1200} />
          </div>
          <div
            className="font-[family-name:var(--font-mono)]"
            style={{
              fontSize: "18px", fontWeight: 700, color: COLORS.text,
              marginTop: "2px",
            }}
          >
            <AnimatedCounter end={739400} suffix=" kr" delay={1500} duration={2500} />
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
      style={{ background: COLORS.bg, padding: "80px 24px" }}
    >
      <GridBackground />

      <div
        className="relative z-10 w-full flex items-center justify-between gap-20 hero-layout"
        style={{ maxWidth: "var(--max-w-content)" }}
      >
        {/* Left: text content */}
        <div className="hero-slide-up flex-1 max-w-[600px] hero-left">
          {/* Eyebrow — minimal, editorial */}
          <div
            className="font-[family-name:var(--font-mono)]"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "6px 14px",
              background: "transparent",
              border: `1px solid ${COLORS.line}`,
              borderRadius: "100px",
              fontSize: "11px", fontWeight: 600, letterSpacing: "1.4px",
              color: COLORS.textMuted, textTransform: "uppercase",
              marginBottom: "36px",
            }}
          >
            <span style={{ color: COLORS.accent }}>⚡</span> B2B Leadgenerering
          </div>

          <h1
            className="font-[family-name:var(--font-serif)]"
            style={{
              fontSize: "clamp(2.5rem, 5.5vw, 68px)",
              fontWeight: 400, lineHeight: 1.02,
              color: COLORS.text,
              margin: "0 0 24px 0", letterSpacing: "-0.02em",
            }}
          >
            Automatisera er prospektering – få bokade möten på löpande band.
          </h1>

          <h2
            className="font-[family-name:var(--font-display)]"
            style={{
              fontSize: "clamp(1.25rem, 2.2vw, 24px)",
              fontWeight: 700, lineHeight: 1.35,
              margin: 0, letterSpacing: "-0.2px",
            }}
          >
            <span className="hero-shimmer">Vi ersätter manuellt listbyggande och kall outreach med intelligent automation. Ni betalar bara för resultat.</span>
          </h2>

          <p
            className="font-[family-name:var(--font-display)]"
            style={{
              fontSize: "18px", lineHeight: 1.65,
              color: COLORS.textMuted,
              margin: "24px 0 36px 0", maxWidth: "520px",
            }}
          >
            Vi sköter hela kedjan från prospekt till bokat möte. Ni betalar
            bara för faktiska resultat – vilket gör att ni aldrig kan gå back
            på samarbetet.
          </p>

          <div className="flex flex-wrap gap-2 mt-7">
            <TrustBadge text="Pay-per-lead" delay={1.0} />
            <TrustBadge text="Inga retainers" delay={1.15} />
            <TrustBadge text="Live inom 3 veckor" delay={1.3} />
          </div>
        </div>

        {/* Right: pipeline collage */}
        <div className="shrink-0 hero-right">
          <div className="relative inline-block">
          {/* Floating accent top-right — Affärer stängda */}
          <div
            className="hero-fade-in absolute z-20"
            style={{
              top: "-28px", right: "-36px",
              display: "inline-flex", alignItems: "center", gap: "10px",
              padding: "12px 16px",
              background: "rgba(17, 24, 39, 0.85)",
              border: `1px solid ${COLORS.line}`,
              borderRadius: "12px",
              backdropFilter: "blur(12px)",
              boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
              transform: "rotate(2.5deg)",
              animationDelay: "1.4s",
            }}
          >
            <div
              style={{
                width: "28px", height: "28px", borderRadius: "8px",
                background: "rgba(52, 211, 153, 0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "14px",
              }}
            >
              ✓
            </div>
            <div>
              <div
                className="font-[family-name:var(--font-mono)]"
                style={{
                  fontSize: "9px", fontWeight: 600, letterSpacing: "1px",
                  color: COLORS.textMuted, textTransform: "uppercase",
                  marginBottom: "2px",
                }}
              >
                Affärer stängda
              </div>
              <div
                className="font-[family-name:var(--font-display)]"
                style={{
                  fontSize: "16px", fontWeight: 700, color: COLORS.text,
                  lineHeight: 1,
                }}
              >
                23 / månad
              </div>
            </div>
          </div>

          {/* Main pipeline */}
          <PipelineVisualization />

          {/* Floating accent bottom-left — Live pulse pill */}
          <div
            className="hero-fade-in absolute z-20"
            style={{
              bottom: "-22px", left: "-44px",
              display: "inline-flex", alignItems: "center", gap: "10px",
              padding: "10px 16px",
              background: "rgba(17, 24, 39, 0.88)",
              border: `1px solid ${COLORS.line}`,
              borderRadius: "100px",
              backdropFilter: "blur(12px)",
              boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
              transform: "rotate(-2deg)",
              animationDelay: "1.6s",
            }}
          >
            <div
              className="hero-pulse"
              style={{
                width: "8px", height: "8px", borderRadius: "50%",
                background: COLORS.green,
                boxShadow: `0 0 10px ${COLORS.greenGlow}`,
              }}
            />
            <span
              className="font-[family-name:var(--font-mono)]"
              style={{
                fontSize: "11px", fontWeight: 600, letterSpacing: "1px",
                color: COLORS.text, textTransform: "uppercase",
              }}
            >
              Pipeline aktiv
            </span>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

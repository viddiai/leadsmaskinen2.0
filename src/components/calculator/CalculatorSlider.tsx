"use client";

import { useId } from "react";
import { fmt } from "@/lib/formatters";

interface CalculatorSliderProps {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  accent?: "orange" | "success";
}

export function CalculatorSlider({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  suffix,
  accent = "orange",
}: CalculatorSliderProps) {
  const id = useId();
  const accentClass =
    accent === "success" ? "accent-success" : "accent-orange";

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <label htmlFor={id} className="text-sm font-medium text-white">{label}</label>
        <span className="text-sm font-semibold text-white">
          {fmt(value)}
          {suffix ? ` ${suffix}` : ""}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`w-full cursor-pointer ${accentClass}`}
      />
    </div>
  );
}

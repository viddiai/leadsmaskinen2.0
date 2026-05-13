import { fmtKr } from "@/lib/formatters";

interface HeroMetricProps {
  label: string;
  value: number;
  tone?: "orange" | "success" | "neutral";
  size?: "hero" | "default";
}

const toneClasses = {
  orange: "text-orange",
  success: "text-success",
  neutral: "text-white",
};

export function HeroMetric({
  label,
  value,
  tone = "neutral",
  size = "default",
}: HeroMetricProps) {
  const valueSize =
    size === "hero" ? "text-3xl md:text-4xl font-extrabold" : "text-xl font-bold";

  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wider text-white/50">
        {label}
      </p>
      <p className={`mt-1 ${valueSize} ${toneClasses[tone]}`}>{fmtKr(value)}</p>
    </div>
  );
}

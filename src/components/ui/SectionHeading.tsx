interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-h2 font-medium text-white font-[family-name:var(--font-display)]">
        {title}
      </h2>
      <div
        className={`mt-4 h-1 w-12 rounded-full bg-orange ${centered ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p
          className={`text-body-lg mt-6 font-light text-white/60 font-[family-name:var(--font-display)] ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

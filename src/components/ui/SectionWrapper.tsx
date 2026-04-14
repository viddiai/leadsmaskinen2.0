interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  background?: "white" | "soft" | "gradient";
  className?: string;
}

const bgStyles = {
  white: "bg-transparent",
  soft: "bg-white/[0.02]",
  gradient: "bg-white/[0.01]",
};

export function SectionWrapper({
  children,
  id,
  background = "white",
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`${bgStyles[background]} ${className}`}
      style={{
        paddingTop: "clamp(2.75rem, 6vw, 5.625rem)",
        paddingBottom: "clamp(2.75rem, 6vw, 5.625rem)",
      }}
    >
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: "var(--max-w-content)",
          paddingLeft: "clamp(1rem, 3vw, 2rem)",
          paddingRight: "clamp(1rem, 3vw, 2rem)",
        }}
      >
        {children}
      </div>
    </section>
  );
}

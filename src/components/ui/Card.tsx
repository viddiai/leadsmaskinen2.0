interface CardProps {
  children: React.ReactNode;
  highlighted?: boolean;
  className?: string;
}

export function Card({
  children,
  highlighted = false,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-2xl border p-6 transition-colors duration-200 md:p-8 ${
        highlighted
          ? "border-orange/30 bg-orange/5 shadow-[0_0_50px_-20px_rgba(255,106,61,0.1)]"
          : "border-white/10 bg-white/5 hover:bg-white/[0.07]"
      } ${className}`}
    >
      {children}
    </div>
  );
}

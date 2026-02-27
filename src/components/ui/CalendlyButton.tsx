"use client";

import { Button } from "@/components/ui/Button";

interface CalendlyButtonProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
  className?: string;
}

export function CalendlyButton({
  children,
  size = "lg",
  variant = "primary",
  fullWidth,
  className,
}: CalendlyButtonProps) {
  return (
    <Button
      size={size}
      variant={variant}
      fullWidth={fullWidth}
      className={className}
      onClick={() => {
        // @ts-expect-error Calendly is loaded externally
        window.Calendly?.initPopupWidget({
          url: "https://calendly.com/stefan-245/30min",
        });
      }}
    >
      {children}
    </Button>
  );
}

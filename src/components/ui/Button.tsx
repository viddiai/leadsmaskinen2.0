"use client";

import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-black hover:bg-orange hover:text-white hover:scale-105 active:scale-95 shadow-md",
  secondary:
    "border-2 border-orange text-orange hover:bg-orange hover:text-white",
  ghost: "text-white/60 hover:text-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-8 py-3.5 text-base",
  lg: "px-10 py-4.5 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  fullWidth = false,
  disabled = false,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold uppercase tracking-wider rounded-full transition-all duration-150 ease-in-out";
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={styles}>
      {children}
    </button>
  );
}

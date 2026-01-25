import { type ReactElement } from "react";

interface ButtonProps {
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  disabled?: boolean;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const sizeStyles = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2.5 text-sm",
  lg: "px-5 py-3 text-base",
};

const variantStyles = {
  primary: "bg-gray-900 text-white hover:bg-gray-800 shadow-sm dark:bg-slate-800 dark:hover:bg-slate-700",
  secondary: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-600 dark:hover:bg-slate-700",
};

export const Button = ({
  size,
  text,
  startIcon,
  endIcon,
  disabled,
  onClick,
  variant = "primary",
}: ButtonProps) => {
  return (
    <button
      className={`
        rounded-lg font-medium flex items-center gap-2 
        transition-all duration-150
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon && <span className="shrink-0">{startIcon}</span>}
      {text}
      {endIcon && <span className="shrink-0">{endIcon}</span>}
    </button>
  );
};
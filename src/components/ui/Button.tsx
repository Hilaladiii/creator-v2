import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "primary" | "secondary" | "outline" | "third";
  full?: boolean;
  size?: "normal" | "big" | "wide";
  className?: string;
}
const Button = ({
  label,
  variant = "primary",
  full = false,
  size = "normal",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "font-bold text-sm px-5 py-3 rounded-md disabled:cursor-not-allowed",
        {
          "bg-blue50 text-white disabled:bg-opacity-50 hover:bg-opacity-50 ":
            variant === "primary",
        },
        {
          "text-blue50 bg-white disabled:bg-opacity-50 hover:ring-1 hover:ring-blue50 hover:text-white hover:bg-transparent transition":
            variant === "secondary",
        },
        {
          "outline-none ring-1 ring-blue50 disabled:opacity-50 text-blue50 bg-white hover:bg-blue50 hover:ring-opacity-70 hover:bg-opacity-70 hover:text-white transition ":
            variant === "outline",
        },
        {
          "bg-blue10 disabled:opacity-50 text-blue50 hover:ring-1 hover:ring-blue50 hover:bg-white transition":
            variant === "third",
        },
        {
          "w-full": full,
        },
        {
          "w-full max-w-md py-2": size == "big",
        },
        {
          "w-full max-w-[18rem]": size == "wide",
        },
        className
      )}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;

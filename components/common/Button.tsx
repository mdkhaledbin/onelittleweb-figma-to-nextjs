import { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex cursor-pointer items-center justify-center rounded-[5px] font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed3c6a] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary: "bg-[#ED3C6A] text-white hover:bg-[#d73760] hover:scale-[1.02]",
      secondary:
        "bg-[#fac4d2] text-[#191d23] hover:bg-[#f7b4c6] hover:scale-[1.02]",
      ghost: "text-[#191d23] hover:bg-[#f9fafb]",
      outline:
        "border border-[#ED3C6A] text-[#ED3C6A] hover:bg-[#fff4f7] hover:scale-[1.02]",
    };

    const sizes = {
      sm: "h-11 px-5 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-[50px] px-6 text-sm",
    };

    return (
      <button
        ref={ref}
        className={twMerge(
          clsx(baseStyles, variants[variant], sizes[size], className),
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export default Button;

import LogoSvg from "@/assets/logo.svg?react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const logoVariants = cva("", {
  variants: {
    logoSize: {
      sm: "size-8",
      md: "size-12",
      lg: "size-20",
    },
    textSize: {
      sm: "text-xl",
      md: "text-2xl",
      lg: "text-3xl",
    },
    defaultVariants: {
      logoSize: "md",
      textSize: "md",
    },
  },
});

export interface LogoProps extends VariantProps<typeof logoVariants> {
  size?: "sm" | "md" | "lg";
}

export const Logo = ({ size }: LogoProps) => {
  return (
    <div className="flex gap-4 items-center">
      <LogoSvg className={cn(logoVariants({ logoSize: size }))} />
      <span
        className={`font-mooli font-bold ${cn(logoVariants({ textSize: size }))}`}
      >
        ryhtmd
      </span>
    </div>
  );
};

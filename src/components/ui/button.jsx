import React from "react";
import { cn } from "../../lib/utils";

const variants = {
  default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
  secondary: "border border-border bg-cream/70 text-forest hover:bg-sand",
  ghost: "text-pine hover:bg-sand/70",
};

export function Button({ className, variant = "default", asChild = false, ...props }) {
  const Comp = asChild ? "a" : "button";

  return (
    <Comp
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-extrabold transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}

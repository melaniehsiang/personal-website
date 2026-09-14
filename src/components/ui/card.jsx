import React from "react";
import { cn } from "../../lib/utils";

export function Card({ className, ...props }) {
  return (
    <article
      className={cn(
        "rounded-[1.625rem] border border-border bg-card/75 p-7 text-card-foreground shadow-[0_14px_40px_rgba(16,37,26,0.08)]",
        className,
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }) {
  return <div className={cn("space-y-2", className)} {...props} />;
}

export function CardTitle({ className, ...props }) {
  return <h3 className={cn("text-xl font-bold tracking-tight text-pine", className)} {...props} />;
}

export function CardContent({ className, ...props }) {
  return <div className={cn("mt-4 text-muted-foreground", className)} {...props} />;
}

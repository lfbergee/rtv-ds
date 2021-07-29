import { HtmlHTMLAttributes, forwardRef } from "react";

export const LightMode = forwardRef<HTMLDivElement, HtmlHTMLAttributes<HTMLDivElement>>(
  ({ children, className = "", ...props }, ref) => (
    <div ref={ref} className={`rds-light ${className}`} {...props}>
      {children}
    </div>
  )
);

LightMode.displayName = "LightMode";

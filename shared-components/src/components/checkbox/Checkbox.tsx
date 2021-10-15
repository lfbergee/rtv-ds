import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react";

import "./checkbox.scss";

export interface Checkbox extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  lightBackground: boolean;
  labelText: string;
  id: string;
}

type Props = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & Checkbox, "ref">;

export const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ className, id, lightBackground, labelText, ...props }, ref) => (
    <div className="rds-form-group">
      <input
        ref={ref}
        className={`
          rds-checkbox
          rds-checkbox--input ${className} ${lightBackground ? "rds-light" : ""}
          `}
        id={id}
        type="checkbox"
        {...props}
      />
      <label htmlFor={id} className="rds-checkbox--label">
        {labelText}
      </label>
    </div>
  )
);

Checkbox.displayName = "Checkbox";

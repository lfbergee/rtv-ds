import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react";

import "./checkbox.scss";
import { generateId } from "./internal/generateId";

export interface Checkbox extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  lightBackground: boolean;
  labelText: string;
  id?: string;
}

type Props = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & Checkbox, "ref">;

export const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ className, id, lightBackground, labelText, ...props }, ref) => {
    const internalId = generateId(id);

    return (
      <div className="rds-form-group-box">
        <input
          ref={ref}
          className={`
          rds-checkbox
          rds-checkbox--input ${className} ${lightBackground ? "rds-light" : ""}
          `}
          id={internalId}
          type="checkbox"
          {...props}
        />
        <label htmlFor={internalId} className="rds-checkbox--label">
          {labelText}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

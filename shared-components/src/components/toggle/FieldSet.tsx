import { FieldsetHTMLAttributes, forwardRef } from "react";
import { RadioContext } from "./RadioContext";

interface FieldSetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string;
  name: string;
  showLegend?: boolean;
}

export const FieldSet = forwardRef<HTMLFieldSetElement, FieldSetProps>(
  ({ legend, children, name, className = "", showLegend = false, ...rest }, ref) => {
    return (
      <RadioContext.Provider value={{ radioName: name }}>
        <fieldset data-testid="fieldset" {...rest} className={`rds-field-set ${className}`} ref={ref}>
          <legend className={`rds-field-set__legend ${showLegend ? "" : "sr-only"}`}>{legend}</legend>
          {children}
        </fieldset>
      </RadioContext.Provider>
    );
  }
);

FieldSet.displayName = "FieldSet";

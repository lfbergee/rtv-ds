import { FieldsetHTMLAttributes, forwardRef } from "react";
import { RadioContext } from "./RadioContext";

interface FieldSetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string;
  name: string;
}

export const FieldSet = forwardRef<HTMLFieldSetElement, FieldSetProps>(
  ({ legend, children, name, className = "", ...rest }, ref) => {
    return (
      <RadioContext.Provider value={{ radioName: name }}>
        <fieldset {...rest} className={`rds-field-set ${className}`} ref={ref}>
          <legend className="rds-field-set__legend">{legend}</legend>
          {children}
        </fieldset>
      </RadioContext.Provider>
    );
  }
);

FieldSet.displayName = "FieldSet";

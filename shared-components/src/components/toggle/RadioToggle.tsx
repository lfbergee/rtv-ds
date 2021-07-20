import { forwardRef, InputHTMLAttributes, useContext } from "react";
import { RadioContext } from "./RadioContext";

import "./radioToggle.scss";
import "../button/button-shared.scss";
import "../button/button.scss";

interface RadioToggleInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const RadioToggleInput = forwardRef<HTMLInputElement, RadioToggleInputProps>(
  ({ label, name, className = "", ...rest }, ref) => {
    const { radioName } = useContext(RadioContext);
    return (
      <label className={`rds-radio-toggle rds-button rds-button__shared rds-button__shared--primary  ${className}`}>
        <input className="rds-radio-toggle__input" {...rest} ref={ref} type="radio" name={radioName || name} />
        <span className="rds-radio-toggle__label">{label}</span>
      </label>
    );
  }
);

RadioToggleInput.displayName = "RadioToggleInput";

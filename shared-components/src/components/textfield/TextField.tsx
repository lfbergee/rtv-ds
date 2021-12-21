import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react";
import { SubBody } from "../typography/Typography";
import { generateId } from "../core/utils/generateId";

import "./textfield.scss";

type Props = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">;

export const TextField = forwardRef<
  HTMLInputElement,
  Props & {
    className?: string;
    name: string;
    label: string;
    fullWidth?: boolean;
    valid?: boolean;
    lightBackground?: boolean | "white";
    whiteBackground?: boolean;
    labelClass?: string;
    error?: string | null | false;
  }
>(
  (
    {
      className = "",
      id,
      labelClass = "",
      type = "text",
      fullWidth = false,
      valid,
      lightBackground = false,
      label,
      error,
      ...props
    },
    ref
  ) => {
    const errorTextId = generateId();
    const generatedId = generateId(id);
    const useWhiteBackground = lightBackground === "white";
    const ariaInvalid = !!error;

    return (
      <div
        className={`rds-textfield
      ${lightBackground ? "rds-light" : ""}
      ${useWhiteBackground ? "rds-white" : ""}
      ${fullWidth ? "rds-textfield--full-width" : ""}  
      ${className}`}
      >
        <label
          htmlFor={generatedId}
          className={`rds-textfield-label ${labelClass} ${lightBackground ? "rds-light" : ""} ${
            useWhiteBackground ? "rds-white" : ""
          }`}
          data-valid={valid}
        >
          <input
            ref={ref}
            id={generatedId}
            className={`
            rds-textfield-input ${error || valid === false ? "rds-textfield-input--error" : ""} 
            `}
            type={type}
            placeholder={label}
            aria-invalid={ariaInvalid}
            aria-describedby={error ? errorTextId : undefined}
            data-valid={valid}
            {...props}
          />
          <span>{label}</span>
        </label>
        {error && (
          <SubBody
            id={errorTextId}
            className={`rds-textfield rds-textfield--error-text ${lightBackground ? "rds-light" : ""}`}
          >
            {error}
          </SubBody>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";

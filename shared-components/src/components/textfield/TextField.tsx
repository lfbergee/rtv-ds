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
    labelClass?: string;
    errorMessage?: string;
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
      errorMessage,
      ...props
    },
    ref
  ) => {
    const errorTextId = generateId();
    const generatedId = generateId(id);
    const whiteBackground = lightBackground === "white";
    const isValid = !errorMessage && valid;
    const ariaInvalid = !!errorMessage || valid === false;

    return (
      <div
        className={`rds-textfield
      ${lightBackground ? "rds-light" : ""}
      ${whiteBackground ? "rds-white" : ""}
      ${fullWidth ? "rds-textfield--full-width" : ""}  
      ${className}`}
      >
        <label
          htmlFor={generatedId}
          className={`rds-textfield-label ${labelClass} ${lightBackground ? "rds-light" : ""} ${
            whiteBackground ? "rds-white" : ""
          }`}
          data-valid={isValid}
        >
          <input
            ref={ref}
            id={generatedId}
            className={`
            rds-textfield-input ${ariaInvalid ? "rds-textfield-input--error" : ""} 
            `}
            type={type}
            placeholder={label}
            aria-invalid={ariaInvalid}
            aria-describedby={errorMessage ? errorTextId : undefined}
            data-valid={isValid}
            {...props}
          />
          <span>{label}</span>
        </label>
        {errorMessage && (
          <SubBody
            id={errorTextId}
            className={`rds-textfield rds-textfield--error-text ${lightBackground ? "rds-light" : ""}`}
          >
            {errorMessage}
          </SubBody>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";

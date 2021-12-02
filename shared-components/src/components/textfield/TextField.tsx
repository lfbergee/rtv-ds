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
      <div className={`rds-form-group ${className}`}>
        <input
          ref={ref}
          id={generatedId}
          className={`
        rds-textfield
        rds-textfield--input ${error ? "rds-textfield--input--error" : ""} ${
            fullWidth ? "rds-textfield--input--full-width" : ""
          } ${lightBackground ? "rds-light" : ""}
          ${useWhiteBackground ? "rds-white" : ""}
        `}
          type={type}
          placeholder={label}
          aria-invalid={ariaInvalid}
          aria-describedby={error ? errorTextId : undefined}
          {...props}
        />
        <label
          htmlFor={generatedId}
          className={`rds-textfield rds-textfield--label ${labelClass} ${lightBackground ? "rds-light" : ""} ${
            useWhiteBackground ? "rds-white" : ""
          }`}
        >
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

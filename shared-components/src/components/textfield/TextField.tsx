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
    lightBackground?: boolean;
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
        `}
          type={type}
          placeholder={label}
          aria-describedby={error ? errorTextId : undefined}
          {...props}
        />
        {error && (
          <SubBody id={errorTextId} className="rds-textfield--error-text">
            {error}
          </SubBody>
        )}
        <label
          htmlFor={generatedId}
          className={`rds-textfield rds-textfield--label ${labelClass} ${lightBackground ? "rds-light" : ""}`}
        >
          <span>{label}</span>
        </label>
      </div>
    );
  }
);

TextField.displayName = "TextField";

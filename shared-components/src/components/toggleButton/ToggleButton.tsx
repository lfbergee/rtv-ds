import { ChangeEvent, FC, forwardRef, InputHTMLAttributes, useRef, useState } from "react";
import { generateId } from "./internal/generateId";
import "./toggleButton.scss";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  children: string;
  showLabel?: boolean;
  icons?:
    | {
        checkedIcon?: () => JSX.Element;
        uncheckedIcon?: () => JSX.Element;
      }
    | {
        toggleIcon?: FC<{ checked: boolean }>;
      };
  iconClass?: string;
}

export const ToggleButton = forwardRef<HTMLInputElement, Props>(
  (
    { defaultChecked, showLabel = true, icons, iconClass = "", children, onChange, id, className = "", ...rest },
    ref
  ) => {
    const internalRef = useRef<HTMLInputElement>(null);
    const [internalId] = useState(generateId(id));
    const [isChecked, setIsChecked] = useState(!!defaultChecked);

    const CheckedIcon = icons && "checkedIcon" in icons ? icons.checkedIcon : null;
    const UncheckedIcon = icons && "uncheckedIcon" in icons ? icons.uncheckedIcon : null;
    const ToggleIcon = icons && "toggleIcon" in icons ? icons.toggleIcon : null;

    const inputRef = ref || internalRef;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (typeof onChange === "function") {
        onChange(e);
      }
      if (typeof inputRef !== "function") {
        setIsChecked(!!inputRef.current?.checked);
      } else {
        setIsChecked(!isChecked);
      }
    };

    return (
      <div className={className}>
        <input
          id={internalId}
          ref={inputRef}
          type="checkbox"
          className="rds-toggle-button__input"
          onChange={handleChange}
          defaultChecked={defaultChecked}
          {...rest}
        />
        <label
          data-testid="toggle-button__label"
          className={`rds-toggle-button ${showLabel ? "" : "rds-toggle-button--round"}`}
          htmlFor={internalId}
        >
          <span className="rds-toggle-button__content">
            {icons && (
              <span className={`rds-toggle-button__rounded ${iconClass}`}>
                {ToggleIcon && <ToggleIcon checked={isChecked} />}
                {CheckedIcon && isChecked && <CheckedIcon />}
                {UncheckedIcon && !isChecked && <UncheckedIcon />}
              </span>
            )}
            <span data-testid="toggle-button__label__text" className={showLabel ? "" : "sr-only"}>
              {children}
            </span>
          </span>
        </label>
      </div>
    );
  }
);

ToggleButton.displayName = "ToggleButton";

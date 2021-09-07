import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  postfix?: string;
  icon?: () => JSX.Element;
  className?: string;
  iconClass?: string;
}

interface BaseButtonProps extends ButtonProps {
  buttonType: "primary" | "secondary" | "tertiary";
  buttonStyle: "rds-button" | "rds-icon-button";
}

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  (
    {
      children,
      buttonType,
      buttonStyle,
      type = "button",
      isLoading = false,
      postfix,
      icon: Icon,
      iconClass = "",
      disabled,
      className = "",
      "aria-busy": ariaBusy,
      ...rest
    },
    ref
  ) => (
    <button
      type={type}
      {...rest}
      ref={ref}
      disabled={isLoading || disabled}
      aria-busy={isLoading || ariaBusy}
      className={`${buttonStyle} rds-button__shared rds-button__shared--${buttonType} rds-button--${buttonType} ${
        isLoading ? "rds-button--loading" : ""
      } ${className}`}
    >
      {Icon && (
        <span data-testid="rds-button__icon" className={`rds-button__icon ${iconClass}`}>
          <Icon />
        </span>
      )}
      {children}
      {!!postfix && buttonStyle !== "rds-icon-button" && <span className="rds-button__postfix">{postfix}</span>}
    </button>
  )
);

BaseButton.displayName = "BaseButton";

import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  postfix?: string;
  icon?: () => JSX.Element;
  className?: string;
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
      disabled,
      className = "",
      ...rest
    },
    ref
  ) => (
    <button
      type={type}
      {...rest}
      ref={ref}
      disabled={isLoading || disabled}
      className={`${buttonStyle} rds-button__shared rds-button__shared--${buttonType} rds-button--${buttonType} ${
        isLoading ? "rds-button--loading" : ""
      } ${className}`}
    >
      {Icon && (
        <span className="rds-button__icon">
          <Icon />
        </span>
      )}
      {children}
      {!!postfix && <span className="rds-button__postfix">{postfix}</span>}
    </button>
  )
);

BaseButton.displayName = "BaseButton";

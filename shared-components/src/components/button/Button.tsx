import { ButtonHTMLAttributes, FC, forwardRef } from "react";

import "./button.scss";
import "./button-shared.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  postfix?: string;
  icon?: () => JSX.Element;
  className?: string;
}

interface BaseButtonProps extends ButtonProps {
  buttonType: "primary" | "secondary" | "tertiary";
}

const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  (
    {
      children,
      buttonType,
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
      className={`rsc-button rsc-button__shared rsc-button__shared--${buttonType} rsc-button--${buttonType} ${
        isLoading ? "rsc-button--loading" : ""
      } ${className}`}
    >
      {Icon && (
        <span className="rsc-button__icon">
          <Icon />
        </span>
      )}
      {children}
      {!!postfix && <span className="rsc-button__postfix">{postfix}</span>}
    </button>
  )
);

export const PrimaryButton: FC<ButtonProps> = (props) => (
  <BaseButton buttonType="primary" {...props} />
);

export const SecondaryButton: FC<ButtonProps> = (props) => (
  <BaseButton buttonType="secondary" {...props} />
);

export const TertiaryButton: FC<ButtonProps> = (props) => (
  <BaseButton buttonType="tertiary" {...props} />
);

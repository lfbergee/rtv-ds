import { forwardRef } from "react";
import { ButtonProps, BaseButton } from "./BaseButton";

import "./icon-button.scss";
import "./button-shared.scss";

interface IconButtonProps extends Omit<ButtonProps, "icon" | "postfix"> {
  ["aria-label"]: string;
  icon: () => JSX.Element;
}

export const PrimaryIconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => (
  <BaseButton buttonStyle="rds-icon-button" buttonType="primary" ref={ref} {...props} />
));

PrimaryIconButton.displayName = "PrimaryIconButton";

export const SecondaryIconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => (
  <BaseButton buttonStyle="rds-icon-button" buttonType="secondary" ref={ref} {...props} />
));

SecondaryIconButton.displayName = "SecondaryIconButton";

export const TertiaryIconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => (
  <BaseButton buttonStyle="rds-icon-button" buttonType="tertiary" ref={ref} {...props} />
));

TertiaryIconButton.displayName = "TertiaryIconButton";

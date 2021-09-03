import { forwardRef } from "react";
import { ButtonProps, BaseButton } from "./BaseButton";

import "./button.scss";
import "./button-shared.scss";

export const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <BaseButton buttonStyle="rds-button" buttonType="primary" ref={ref} {...props} />
));

PrimaryButton.displayName = "PrimaryButton";

export const SecondaryButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <BaseButton buttonStyle="rds-button" buttonType="secondary" ref={ref} {...props} />
));

SecondaryButton.displayName = "SecondaryButton";

export const TertiaryButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <BaseButton buttonStyle="rds-button" buttonType="tertiary" ref={ref} {...props} />
));

TertiaryButton.displayName = "TertiaryButton";

import { FC } from "react";
import { ButtonProps, BaseButton } from "./BaseButton";

import "./button.scss";
import "./button-shared.scss";

export const PrimaryButton: FC<ButtonProps> = (props) => (
  <BaseButton buttonStyle="rds-button" buttonType="primary" {...props} />
);

export const SecondaryButton: FC<ButtonProps> = (props) => (
  <BaseButton buttonStyle="rds-button" buttonType="secondary" {...props} />
);

export const TertiaryButton: FC<ButtonProps> = (props) => (
  <BaseButton buttonStyle="rds-button" buttonType="tertiary" {...props} />
);

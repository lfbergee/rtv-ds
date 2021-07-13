import { FC } from "react";
import { ButtonProps, BaseButton } from "./BaseButton";

import "./icon-button.scss";
import "./button-shared.scss";

interface IconButtonProps extends Omit<ButtonProps, "icon" | "children"> {
  ["aria-label"]: string;
  icon: () => JSX.Element;
}

export const PrimaryIconButton: FC<IconButtonProps> = ({ ...props }) => (
  <BaseButton buttonStyle="rds-icon-button" buttonType="primary" {...props} />
);

export const SecondaryIconButton: FC<IconButtonProps> = ({ ...props }) => (
  <BaseButton buttonStyle="rds-icon-button" buttonType="secondary" {...props} />
);

export const TertiaryIconButton: FC<IconButtonProps> = ({ ...props }) => (
  <BaseButton buttonStyle="rds-icon-button" buttonType="tertiary" {...props} />
);

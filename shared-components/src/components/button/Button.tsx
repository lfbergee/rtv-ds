import { FC } from "react";
import { ButtonProps, BaseButton } from "./BaseButton";

import "./button.scss";
import "./button-shared.scss";

export const PrimaryButton: FC<ButtonProps> = (props) => (
  <BaseButton buttonStyle="rds-button" buttonType="primary" ref={props.ref} {...props} />
);

export const SecondaryButton: FC<ButtonProps> = (props) => (
  <BaseButton buttonStyle="rds-button" buttonType="secondary" ref={props.ref} {...props} />
);

export const TertiaryButton: FC<ButtonProps> = (props) => (
  <BaseButton buttonStyle="rds-button" buttonType="tertiary" ref={props.ref} {...props} />
);

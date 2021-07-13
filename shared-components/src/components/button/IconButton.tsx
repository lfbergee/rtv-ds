import { FC } from "react";
import { ButtonProps, BaseButton } from "./BaseButton";
import Play from "../icons/Play.svg?component";
import Pause from "../icons/Pause.svg?component";

import "./icon-button.scss";
import "./button-shared.scss";

interface IconButtonProps extends Omit<ButtonProps, "icon" | "children"> {
  as: "play" | "pause";
}

const getIcon = (as: "play" | "pause") => {
  switch (as) {
    case "play":
      return Play;
    case "pause":
      return Pause;
    default:
      return undefined;
  }
};

export const PrimaryIconButton: FC<IconButtonProps> = ({ as, ...props }) => (
  <BaseButton buttonStyle="rds-icon-button" buttonType="primary" icon={getIcon(as)} {...props} />
);

export const SecondaryIconButton: FC<IconButtonProps> = ({ as, ...props }) => (
  <BaseButton buttonStyle="rds-icon-button" buttonType="secondary" icon={getIcon(as)} {...props} />
);

export const TertiaryIconButton: FC<IconButtonProps> = ({ as, ...props }) => (
  <BaseButton buttonStyle="rds-icon-button" buttonType="tertiary" icon={getIcon(as)} {...props} />
);

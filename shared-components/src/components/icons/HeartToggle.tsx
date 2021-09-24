import { FC } from "react";
import HeartFilled from "./HeartFilled.svg?component";
import HeartUnfilled from "./HeartUnfilled.svg?component";

import "./heartToggle.scss";

export const HeartToggle: FC<{ checked: boolean }> = ({ checked }) => (
  <span className={checked ? "rds-icon__heart-toggle" : ""} data-testid={checked ? "heart" : "unheart"}>
    {checked ? <HeartFilled /> : <HeartUnfilled />}
  </span>
);

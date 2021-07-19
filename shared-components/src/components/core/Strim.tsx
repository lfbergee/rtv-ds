import { FC } from "react";

import "./core.scss";
import "./strm.scss";

export const Strim: FC = ({ children }) => {
  return <div className="strm">{children}</div>;
};

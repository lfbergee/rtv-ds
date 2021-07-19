import { FC } from "react";

import "./core.scss";
import "./rtv.scss";

export const RiksTV: FC = ({ children }) => {
  return <div className="rtv">{children}</div>;
};

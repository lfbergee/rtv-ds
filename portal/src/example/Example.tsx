import { FC } from "react";
import "./style.scss";

export const Example: FC = ({ children }) => {
  return <div className="portal-example">{children}</div>;
};

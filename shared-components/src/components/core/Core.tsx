import { FC } from "react";
import { detectUserInputMethod } from "./utils/detectUserInputMethod";

detectUserInputMethod();

export const Core: FC<{ brand: "strm" | "rtv" }> = ({ brand, children }) => {
  return <div className={brand}>{children}</div>;
};

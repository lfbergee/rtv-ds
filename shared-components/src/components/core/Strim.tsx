import { FC } from "react";
import { Core } from "./Core";

import "./strm.scss";

export const StrimProvider: FC = ({ children }) => <Core brand="strm">{children}</Core>;

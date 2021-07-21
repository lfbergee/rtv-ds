import { FC } from "react";
import { Core } from "./Core";

import "./rtv.scss";

export const RiksTVProvider: FC = ({ children }) => <Core brand="rtv">{children}</Core>;

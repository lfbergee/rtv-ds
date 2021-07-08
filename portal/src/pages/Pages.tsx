import { FC } from "react";
import { AllComponents } from "./all-components/AllComponents";
import { FrontPage } from "./front-page/FrontPage";
import { GettingStarted } from "./kom-i-gang/GettingStarted";
import DevelopComponents from "./develop-components/develop-components.mdx";

const makePage = (path: string, component: FC, name: string) => ({ path, component, name });

export const documentationPages = [
  makePage("/", FrontPage, "Hjem"),
  makePage("/kom-i-gang", GettingStarted, "Kom i gang"),
  makePage("/lage-komponenter", DevelopComponents, "Lage komponenter"),
];

export const componentPages = [makePage("/alle", AllComponents, "alle")];

export const allPages = [...documentationPages, ...componentPages];

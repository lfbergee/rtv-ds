import { AllComponents } from "./all-components/AllComponents";
import FrontPage from "./front-page/introduction.mdx";
import GettingStarted from "./kom-i-gang/kom-i-gang.mdx";
import DevelopComponents from "./develop-components/develop-components.mdx";

const makePage = (path: string, element: JSX.Element, name: string) => ({ path, element, name });

export const documentationPages = [
  makePage("/", <FrontPage />, "Hjem"),
  makePage("/kom-i-gang", <GettingStarted />, "Kom i gang"),
  makePage("/lage-komponenter", <DevelopComponents />, "Lage komponenter"),
];

export const componentPages = [makePage("/alle", <AllComponents />, "alle")];

export const allPages = [...documentationPages, ...componentPages];

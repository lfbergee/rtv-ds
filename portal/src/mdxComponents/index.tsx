/* eslint-disable jsx-a11y/anchor-has-content, @typescript-eslint/no-explicit-any, react/display-name */
import { lazy } from "react";
import { H1, H2, H3, H4, Body, Bold } from "@rikstv/shared-components/src/components/typography/Typography";

import "./style.scss";

const Code = lazy(() => import("./CodeBlock/CodeBlock"));

export const mdxComponents = {
  h1: (props: any): JSX.Element => <H1 {...props} />,
  h2: (props: any): JSX.Element => <H2 {...props} />,
  h3: (props: any): JSX.Element => <H3 {...props} />,
  h4: (props: any): JSX.Element => <H4 {...props} />,
  p: (props: any): JSX.Element => <Body className="portal-max-width" {...props} />,
  b: (props: any): JSX.Element => <Bold {...props} />,
  strong: (props: any): JSX.Element => <Bold {...props} />,
  pre: (props: any): JSX.Element => <div {...props} />,
  a: (props: any): JSX.Element => <a style={{ color: "currentColor" }} {...props} />,
  code: Code,
};

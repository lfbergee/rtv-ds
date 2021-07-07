import { CodeBlock } from "./CodeBlock/CodeBlock";
import { H1, H2, H3, H4, Body, Bold } from "@rikstv/shared-components/src/components/typography/Typography";

/* eslint-disable @typescript-eslint/no-explicit-any, react/display-name */
export const mdxComponents = {
  h1: (props: any): JSX.Element => <H1 {...props} />,
  h2: (props: any): JSX.Element => <H2 {...props} />,
  h3: (props: any): JSX.Element => <H3 {...props} />,
  h4: (props: any): JSX.Element => <H4 {...props} />,
  p: (props: any): JSX.Element => <Body {...props} />,
  b: (props: any): JSX.Element => <Bold {...props} />,
  strong: (props: any): JSX.Element => <Bold {...props} />,
  pre: (props: any): JSX.Element => <div {...props} />,
  code: CodeBlock,
};
/* eslint-enable @typescript-eslint/no-explicit-any */

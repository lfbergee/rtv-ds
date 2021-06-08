import { CodeBlock } from './CodeBlock/CodeBlock';
import {
  H1,
  H2,
  H3,
} from "@rikstv/shared-components/src/components/typography/Typography";

export const mdxComponents = {
    h1: (props: any) => <H1 {...props} />,
    h2: (props: any) => <H2 {...props} />,
    h3: (props: any) => <H3 {...props} />,
    pre: (props: any) => <div {...props} />,
    code: CodeBlock
  }
import { CodeBlock } from './CodeBlock/CodeBlock';

export const mdxComponents = {
    h1: (props: any) => <h1 {...props} />,
    pre: (props: any) => <div {...props} />,
    code: CodeBlock
  }
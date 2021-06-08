import Highlight, { defaultProps } from "prism-react-renderer";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { mdx } from "@mdx-js/react";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "@rikstv/shared-components/src/components/button/Button";
import {
  H1,
  H2,
  H3,
} from "@rikstv/shared-components/src/components/typography/Typography";

export const CodeBlock = ({
  children,
  className,
  live,
  render,
}: {
  children: any;
  className: any;
  live: any;
  render: any;
}) => {
  const language = className.replace(/language-/, "");

  if (live) {
    return (
      <div style={{ marginTop: "40px" }}>
        <LiveProvider
          code={children.trim()}
          transformCode={(code: string) => "/** @jsx mdx */" + code}
          scope={{
            mdx,
            PrimaryButton,
            SecondaryButton,
            TertiaryButton,
            H1,
            H2,
            H3,
          }}
        >
          <LivePreview />
          <details
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              marginTop: "16px",
              borderRadius: "4px",
              maxWidth: " 750px",
              padding: "16px",
              cursor: "pointer",
            }}
          >
            <summary>Vis kode</summary>
            <LiveEditor />
          </details>
          <LiveError />
        </LiveProvider>
      </div>
    );
  }

  if (render) {
    return (
      <div style={{ marginTop: "40px" }}>
        <LiveProvider code={children}>
          <LivePreview />
        </LiveProvider>
      </div>
    );
  }

  return (
    <Highlight {...defaultProps} code={children.trim()} language={language}>
      {({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }: {
        className: any;
        style: any;
        tokens: any;
        getLineProps: any;
        getTokenProps: any;
      }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line: any, i: number) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token: any, key: number) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

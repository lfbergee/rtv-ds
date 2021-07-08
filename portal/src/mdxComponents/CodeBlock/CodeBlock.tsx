import { FC, useCallback, useContext, useEffect, useRef, useState } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { mdx } from "@mdx-js/react";
import * as components from "@rikstv/shared-components/src/components";
import { TypeContext } from "../../utils/makeComponent";
import { DisplayTypes } from "../../display-types/DisplayTypes";
import { DisplayStyle } from "../../display-style/DisplayStyle";

import "./style.scss";

export const CodeBlock: FC<{
  children: string;
  className: string;
  live: boolean;
  render: boolean;
}> = ({ children, className, live, render }) => {
  const [styleValues, setStyleValues] = useState<CSSStyleDeclaration>();
  const ref = useRef<HTMLDivElement>(null);
  const language = className.replace(/language-/, "") as Language;

  const { types } = useContext(TypeContext);
  const component = children.split(">")[0].split(" ")[0].replace("<", "");
  const componentType = types.filter((item) => item.displayName === component);

  const handleResize = useCallback(() => {
    if (ref.current) {
      if (ref.current.firstElementChild?.firstElementChild) {
        setStyleValues(window.getComputedStyle(ref.current.firstElementChild.firstElementChild));
      }
    }
  }, [setStyleValues]);

  useEffect(() => {
    handleResize();
  }, [handleResize]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  if (live) {
    return (
      <div className="portal-code-block">
        <LiveProvider
          code={children.trim()}
          transformCode={(code: string) => "/** @jsx mdx */" + code}
          scope={{
            mdx,
            ...components,
          }}
        >
          <div ref={ref}>
            <LivePreview />
          </div>
          <details className="portal-code-block__details">
            <summary>Vis kode</summary>
            <LiveEditor />
          </details>
          <LiveError />
        </LiveProvider>
        <DisplayTypes types={componentType} />
        <DisplayStyle styleValues={styleValues} />
      </div>
    );
  }

  if (render) {
    return (
      <div className="portal-code-block">
        <LiveProvider code={children}>
          <LivePreview />
        </LiveProvider>
        <DisplayTypes types={componentType} />
      </div>
    );
  }

  return (
    <Highlight {...defaultProps} code={children.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "var(--strim-spacing--24)" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

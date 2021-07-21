import { FC, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { mdx } from "@mdx-js/react";
import * as components from "@rikstv/shared-components/src/components";
import * as icons from "@rikstv/shared-components/src/components/icons/Icons";
import { TypeContext, Types } from "../../utils/makeComponent";
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
  const [componentType, setComponentType] = useState<Types>();

  const ref = useRef<HTMLDivElement>(null);
  const language = (className?.replace(/language-/, "") as Language) || "markup";

  const { types } = useContext(TypeContext);

  const handleResize = useCallback(() => {
    if (ref.current) {
      if (ref.current.firstElementChild?.firstElementChild) {
        setStyleValues(window.getComputedStyle(ref.current.firstElementChild.firstElementChild));
      }
    }
  }, [setStyleValues]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleResize();
    }, 0);
    return () => {
      window.clearTimeout(timeout);
    };
  }, [handleResize]);

  useLayoutEffect(() => {
    if (!componentType && live) {
      let component = children.split(">")[0].split(" ")[0].replace("<", "").trim();
      if (component === "") {
        component = children.split(">")[0].split("\n")[0].replace("<", "").trim();
      }

      Promise.all(types).then((resolve) => {
        setComponentType(resolve.flatMap((a) => a.default).filter((item) => item.displayName === component));
      });
    }
  }, [componentType, setComponentType, types, children, live]);

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
            ...icons,
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
        <DisplayStyle styleValues={styleValues} />
        {!!componentType?.length && <DisplayTypes types={componentType} />}
      </div>
    );
  }

  if (render) {
    return (
      <div className="portal-code-block">
        <LiveProvider
          code={children.trim()}
          scope={{
            mdx,
            ...components,
            ...icons,
          }}
        >
          <LivePreview />
          <div className="portal-max-width">
            <Highlight {...defaultProps} code={children.trim()} language={language}>
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className={className}
                  style={{
                    ...style,
                    backgroundColor: "var(--rds-background-overlay-medium)",
                    padding: "var(--rds-spacing--24)",
                    borderRadius: "var(--rds-roundness--default)",
                    overflowX: "auto",
                  }}
                >
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
          </div>
        </LiveProvider>
      </div>
    );
  }

  return (
    <div className="portal-max-width">
      <Highlight {...defaultProps} code={children.trim()} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{
              ...style,
              backgroundColor: "var(--rds-background-overlay-medium)",
              padding: "var(--rds-spacing--24)",
              borderRadius: "var(--rds-roundness--default)",
              overflowX: "auto",
            }}
          >
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
    </div>
  );
};

export { CodeBlock as default };

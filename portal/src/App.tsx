import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";

import { Header } from "./header/Header";
import { Navigation } from "./navigation/Navigation";
import { ThemeContext, themes } from "./navigation/ThemeContext";
import { Example } from "./example/Example";
import { components } from "./config";
import { mdxComponents } from "./mdxComponents";
import Introduction from "./introduction.mdx";

import "./style.scss";

export const App = () => {
  const [theme, setTheme] = useState<themes>("rtv");
  return (
    <MDXProvider components={mdxComponents}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <BrowserRouter>
          <div className="portal-layout">
            <Header />
            <Navigation />
            <main>
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => (
                    <Example>
                      <Introduction />
                    </Example>
                  )}
                />
                {components.map(({ displayName, Page, types }) => (
                  <Route
                    key={displayName}
                    path={`/${displayName}`}
                    exact
                    render={() => (
                      <Example types={types}>
                        <Page />
                      </Example>
                    )}
                  />
                ))}
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      </ThemeContext.Provider>
    </MDXProvider>
  );
};

import { FC, Suspense, useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";

import { Header } from "./header/Header";
import { Navigation } from "./navigation/Navigation";
import { ThemeContext, themes } from "./navigation/ThemeContext";
import { allPages } from "./pages/Pages";
import { components } from "./config";
import { mdxComponents } from "./mdxComponents";

import "./style.scss";

export const App: FC = () => {
  const [theme, setTheme] = useState<themes>("rtv");
  return (
    <Suspense fallback="Laster innhold">
      <MDXProvider components={mdxComponents}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <HashRouter basename="rtv-ds">
            <div className="portal-layout">
              <Header />
              <Navigation />
              <main>
                <Switch>
                  {allPages.map((page) => (
                    <Route key={page.path} {...page} exact />
                  ))}
                  {components.map(({ displayName, Page }) => (
                    <Route key={displayName} path={`/${displayName}`} exact component={Page} />
                  ))}
                </Switch>
              </main>
            </div>
          </HashRouter>
        </ThemeContext.Provider>
      </MDXProvider>
    </Suspense>
  );
};

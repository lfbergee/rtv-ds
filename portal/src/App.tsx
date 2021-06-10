import { FC, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";

import { Header } from "./header/Header";
import { Navigation } from "./navigation/Navigation";
import { ThemeContext, themes } from "./navigation/ThemeContext";
import { AllComponents } from "./pages/all-components/AllComponents";
import { GettingStarted } from "./pages/kom-i-gang/GettingStarted";
import { components } from "./config";
import { mdxComponents } from "./mdxComponents";

import "./style.scss";
import { FrontPage } from "./pages/front-page/FrontPage";

export const App: FC = () => {
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
                <Route path="/" exact component={FrontPage} />
                <Route path="/alle" exact component={AllComponents} />
                <Route path="/kom-i-gang" exact component={GettingStarted} />
                {components.map(({ displayName, Page }) => (
                  <Route key={displayName} path={`/${displayName}`} exact component={Page} />
                ))}
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      </ThemeContext.Provider>
    </MDXProvider>
  );
};

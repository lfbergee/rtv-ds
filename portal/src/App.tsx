import { FC, Suspense, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import { Core } from "@rikstv/shared-components/src/components/core/Core";

import { Header } from "./header/Header";
import { Navigation } from "./navigation/Navigation";
import { ThemeContext, themes } from "./navigation/ThemeContext";
import { allPages } from "./pages/Pages";
import { components } from "./config";
import { mdxComponents } from "./mdxComponents";

import "./style.scss";

export const App: FC = () => {
  const [theme, setTheme] = useState<themes>("strm");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Core brand={theme}>
        <HashRouter>
          <div className="portal-layout">
            <Header />
            <Navigation />
            <main>
              <Suspense fallback="Laster innhold">
                <MDXProvider components={mdxComponents}>
                  <Routes>
                    {allPages.map((page) => (
                      <Route key={page.path} {...page} />
                    ))}
                    {components.map(({ displayName, Page }) => (
                      <Route key={displayName} path={`/${displayName.replace(" ", "-")}`} element={<Page />} />
                    ))}
                  </Routes>
                </MDXProvider>
              </Suspense>
            </main>
          </div>
        </HashRouter>
      </Core>
    </ThemeContext.Provider>
  );
};

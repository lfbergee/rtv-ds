import { FC, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import { Core } from "@rikstv/shared-components/src/components/core/Core";

import { components } from "./config";
import { ThemeContext, themes } from "./navigation/ThemeContext";
import { allPages } from "./pages/Pages";
import { Layout } from "./layout/Layout";

import "./style.scss";
import { NotFound } from "./pages/fourOhFour/NotFound";

export const App: FC = () => {
  const [theme, setTheme] = useState<themes>("strm");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Core brand={theme}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {allPages.map((page) => (
                <Route key={page.path} {...page} index={page.path === "/"} />
              ))}
              {components.map(({ displayName, Page }) => (
                <Route key={displayName} path={`/${displayName.replace(" ", "-")}`} element={<Page />} />
              ))}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </HashRouter>
      </Core>
    </ThemeContext.Provider>
  );
};

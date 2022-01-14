import { Body, H1 } from "@rikstv/shared-components/src/components";
import { Core } from "@rikstv/shared-components/src/components/core/Core";
import { FC, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { ThemeContext, themes } from "./navigation/ThemeContext";
import "./style.scss";

const Gone = () => (
  <div className="portal-max-width">
    <H1>Design systemet har flyttet</H1>
    <Body lookLike="title-4">
      Oppdater dine lenker med <a href="https://designsystem.strim.no">designsystem.strim.no</a>, denne siden kommer til
      å bli borte.
    </Body>
  </div>
);

export const DeprecationApp: FC = () => {
  const [theme, setTheme] = useState<themes>("strm");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Core brand={theme}>
        <HashRouter>
          <Routes>
            <Route path="*" element={<Layout />}>
              <Route path="*" element={<Gone />} />
            </Route>
          </Routes>
        </HashRouter>
      </Core>
    </ThemeContext.Provider>
  );
};

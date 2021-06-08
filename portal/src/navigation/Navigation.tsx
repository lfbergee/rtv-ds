import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { components } from "../config";
import { ThemeContext } from "./ThemeContext";

import "./style.scss";
import { PrimaryButton } from "@rikstv/shared-components/src/components/button/Button";

export const Navigation = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  useEffect(() => {
    const prevTheme = theme === "rtv" ? "strm" : "rtv";
    document.getElementById("root")?.classList.add(theme);
    document.getElementById("root")?.classList.remove(prevTheme);
  }, [theme]);

  const toggleTheme = () => {
    if (setTheme) {
      setTheme(theme === "rtv" ? "strm" : "rtv");
    }
  };

  return (
    <nav className="portal-navigation">
      <div className="portal-navigation__toggle">
        <PrimaryButton onClick={toggleTheme}>
          {`Bytt til ${theme === "rtv" ? "Strim" : "RiksTV"}`}
        </PrimaryButton>
      </div>
      <ul className="portal-navigation__list">
        <li className="portal-navigation__list__item">
          <NavLink exact to="/">
            Hjem
          </NavLink>
        </li>
        {components.map(({ displayName }) => (
          <li key={displayName} className="portal-navigation__list__item">
            <NavLink exact to={`/${displayName}`}>
              {displayName}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

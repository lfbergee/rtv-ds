import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { components } from "../config";

import "./style.scss";

export const Navigation = () => {
  const [theme, setTheme] = useState<"rtv" | "strm">("rtv");

  useEffect(() => {
    const prevTheme = theme === "rtv" ? "strm" : "rtv"
    document.getElementById('root')?.classList.add(theme);
    document.getElementById('root')?.classList.remove(prevTheme);
  },[theme]);

  return (
    <nav className="portal-navigation">
      <button className="portal-navigation__toggle" onClick={() => setTheme(theme === "rtv" ? "strm" : "rtv")}>
        {`Bytt til ${theme === "rtv" ? "Strim" : "RiksTV"}`}
      </button>
      <ul className="portal-navigation__list">
        <li className="portal-navigation__list__item">
          <NavLink exact to="/">Hjem</NavLink>
        </li>
        {components.map(({ displayName }) => (
          <li key={displayName} className="portal-navigation__list__item">
            <NavLink exact to={`/${displayName}`}>{displayName}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

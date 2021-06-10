import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { components } from "../config";
import { ThemeContext } from "./ThemeContext";

import "./style.scss";
import { PrimaryButton, TertiaryButton } from "@rikstv/shared-components/src/components/button/Button";

export const Navigation: FC = () => {
  const [searchStr, setSearchStr] = useState("");
  const [filteredComponents, setFilteredComponents] = useState(components);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const prevTheme = theme === "rtv" ? "strm" : "rtv";
    document.getElementById("root")?.classList.add(theme);
    document.getElementById("root")?.classList.remove(prevTheme);
  }, [theme]);

  useEffect(() => {
    if (searchStr === "") {
      setFilteredComponents(components);
    } else {
      setFilteredComponents(components.filter(({ displayName }) => displayName.includes(searchStr)));
    }
  }, [searchStr, setFilteredComponents]);

  const toggleTheme = () => {
    if (setTheme) {
      setTheme(theme === "rtv" ? "strm" : "rtv");
    }
  };

  const emptyStrString = () => setSearchStr("");
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => setSearchStr(e.target.value);

  return (
    <nav className="portal-navigation">
      <div className="portal-navigation__toggle">
        <PrimaryButton onClick={toggleTheme}>{`Bytt til ${theme === "rtv" ? "Strim" : "RiksTV"}`}</PrimaryButton>
      </div>
      <ul className="portal-navigation__list">
        <li className="portal-navigation__list__item">
          <NavLink exact to="/">
            Hjem
          </NavLink>
        </li>
        <li className="portal-navigation__list__item">
          <NavLink exact to="/kom-i-gang">
            Kom i gang
          </NavLink>
        </li>
      </ul>
      <label className="portal-navigation__search">
        Filter komponenter
        <input className="portal-navigation__search__input" type="text" onChange={handleSearch} value={searchStr} />
      </label>
      <ul className="portal-navigation__list">
        <li className="portal-navigation__list__item">
          <NavLink exact to="/alle">
            Alle
          </NavLink>
        </li>
        {filteredComponents.map(({ displayName }) => (
          <li key={displayName} className="portal-navigation__list__item">
            <NavLink exact to={`/${displayName}`}>
              {displayName}
            </NavLink>
          </li>
        ))}

        {filteredComponents.length === 0 && (
          <li className="portal-navigation__list__item">
            Ingen komponenter matcher {searchStr} 🤬
            <TertiaryButton type="button" onClick={emptyStrString}>
              Tøm filter
            </TertiaryButton>
          </li>
        )}
      </ul>
    </nav>
  );
};

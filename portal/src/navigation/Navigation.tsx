import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { components } from "../config";
import { ThemeContext } from "./ThemeContext";

import "./style.scss";
import { PrimaryButton } from "@rikstv/shared-components/src/components/button/Button";
import { componentPages, documentationPages } from "../pages/Pages";

export const Navigation: FC = () => {
  const [searchStr, setSearchStr] = useState("");
  const [showMenu, setShowMenu] = useState<boolean>();

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

  const emptyStrString = () => setSearchStr("");
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => setSearchStr(e.target.value);
  const toggleMenu = () => setShowMenu(!showMenu);
  const closeMenu = () => setShowMenu(!showMenu);
  const toggleTheme = () => {
    if (setTheme) {
      setTheme(theme === "rtv" ? "strm" : "rtv");
      closeMenu();
    }
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className={`portal-menu-btn ${showMenu ? "portal-menu-btn--close" : "portal-menu-btn--open"}`}
        title={showMenu ? "Lukk meny" : "Åpne meny"}
      />
      <nav className={`portal-navigation ${showMenu ? "portal-navigation--show-mobile" : ""}`}>
        <ul className="portal-navigation__list">
          {documentationPages.map((page) => (
            <li key={page.path} className="portal-navigation__list__item">
              <NavLink onClick={closeMenu} exact to={page.path}>
                {page.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <label className="portal-navigation__search">
          Filter komponenter
          <input className="portal-navigation__search__input" type="text" onChange={handleSearch} value={searchStr} />
        </label>
        <ul className="portal-navigation__list">
          {componentPages.map((page) => (
            <li key={page.path} className="portal-navigation__list__item">
              <NavLink onClick={closeMenu} exact to={page.path}>
                {page.name}
              </NavLink>
            </li>
          ))}
          {filteredComponents.map(({ displayName }) => (
            <li key={displayName} className="portal-navigation__list__item">
              <NavLink onClick={closeMenu} exact to={`/${displayName}`}>
                {displayName}
              </NavLink>
            </li>
          ))}

          {filteredComponents.length === 0 && (
            <li className="portal-navigation__list__item">
              Ingen komponenter matcher {searchStr} 🤬
              <PrimaryButton type="button" onClick={emptyStrString}>
                Tøm filter
              </PrimaryButton>
            </li>
          )}
        </ul>
        <div className="portal-navigation__toggle">
          <PrimaryButton onClick={toggleTheme}>{`Bytt til ${theme === "rtv" ? "Strim" : "RiksTV"}`}</PrimaryButton>
        </div>
      </nav>
    </>
  );
};

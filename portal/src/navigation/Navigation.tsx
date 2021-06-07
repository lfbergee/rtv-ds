import { useState } from "react";
import { NavLink } from "react-router-dom";
import { components } from "../config";

export const Navigation = () => {
  const [theme, setTheme] = useState<"rtv" | "strm">("rtv")
  return (
    <nav>
      <button onClick={() => {
        const nextTheme = theme === "rtv" ? "strm" : "rtv";
        document.getElementById('root')?.classList.add(nextTheme);
        document.getElementById('root')?.classList.remove(theme);
        setTheme(nextTheme);
      }}>
        Toggle
      </button>
      <ul>
        <li>
          <NavLink to="/">Hjem</NavLink>
        </li>
        {components.map(({ displayName }) => (
          <li key={displayName}>
            <NavLink to={`/${displayName}`}>{displayName}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

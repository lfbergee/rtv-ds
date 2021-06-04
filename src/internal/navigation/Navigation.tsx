import { NavLink } from "react-router-dom";
import { components } from "../../config";

export const Navigation = () => {
  return (
    <nav>
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

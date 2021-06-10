import { FC } from "react";
import "./style.scss";

interface Props {
  types?: any;
}

export const Example: FC<Props> = ({ children, types }) => (
  <>
    {children}
    <aside className="portal-example__types">
      {types?.map((type: any) => (
        <details key={type.displayName}>
          <summary>Typer for {type.displayName}</summary>
          <ul>
            {Object.entries(type.props).map((p: any) => (
              <li
                key={p[0]}
              >{`${p[0]} | ${p[1].defaultValue} | ${p[1].required} | ${p[1].type.name}`}</li>
            ))}
          </ul>
        </details>
      ))}
    </aside>
  </>
);

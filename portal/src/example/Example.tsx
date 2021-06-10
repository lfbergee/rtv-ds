import { FC, memo } from "react";
import { Types } from "../utils/makeComponent";
import { mapTypeToProps } from "./mapTypeToProps";
import "./style.scss";

interface Props {
  types?: Types;
}

export const Example: FC<Props> = memo(({ children, types }) => (
  <>
    {children}
    <aside className="portal-example__types">
      {types?.map((type) => (
        <details key={type.displayName} className="portal-example__types__details">
          <summary>Typer for {type.displayName}</summary>
          <table className="portal-example__types__table">
            <thead>
              <tr>
                <th scope="col">Prop</th>
                <th scope="col">DefaultValue</th>
                <th scope="col">isRequired</th>
                <th scope="col">Type</th>
              </tr>
            </thead>
            <tbody>
              {mapTypeToProps(type.props).map(({ prop, defaultValue, isRequired, type, isFromNodeModules }) => (
                <tr key={prop} className={isFromNodeModules ? "portal-example__types--node-module" : ""}>
                  <td>{prop}</td>
                  <td>{defaultValue}</td>
                  <td>{isRequired ? "✅" : ""}</td>
                  <td>{type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </details>
      ))}
    </aside>
  </>
));

Example.displayName = "ExampleWrapper";

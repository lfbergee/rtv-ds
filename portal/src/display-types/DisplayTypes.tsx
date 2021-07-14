import { FC, memo } from "react";
import { Types } from "../utils/makeComponent";
import { mapTypeToProps } from "./mapTypeToProps";
import "./style.scss";

interface Props {
  types?: Types;
}

export const DisplayTypes: FC<Props> = memo(({ types }) => (
  <aside className="portal-example__types">
    {types?.map((type) => (
      <details key={type.displayName} className="portal-example__types__details">
        <summary>Typer for {type.displayName}</summary>
        <table className="portal-example__types__table">
          <thead>
            <tr>
              <th className="portal-example__types--large-row" scope="col">
                Prop
              </th>
              <th className="portal-example__types--large-row" scope="col">
                Type
              </th>
              <th className="portal-example__types--small-row" scope="col">
                Default
              </th>
              <th className="portal-example__types--small-row" scope="col">
                Required
              </th>
            </tr>
          </thead>
          <tbody>
            {mapTypeToProps(type.props).map(({ prop, defaultValue, isRequired, type, isFromNodeModules }) => (
              <tr key={prop} className={isFromNodeModules ? "portal-example__types--node-module" : ""}>
                <td className="portal-example__types--large-row">{prop}</td>
                <td className="portal-example__types--large-row">{type}</td>
                <td className="portal-example__types--small-row">{defaultValue}</td>
                <td className="portal-example__types--small-row">
                  {isRequired ? (
                    <span role="img" aria-label="checkmark" className="portal-example__types--required">
                      ✅
                    </span>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    ))}
  </aside>
));

DisplayTypes.displayName = "DisplayTypes";

import { FC, memo } from "react";
import "./style.scss";

interface Props {
  types?: any;
}

export const Example: FC<Props> = memo(({ children, types }) => (
  <>
    {children}
    <aside className="portal-example__types">
      {types?.map((type: any) => (
        <details
          key={type.displayName}
          className="portal-example__types__details"
        >
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
              {mapTypeToProps(type.props).map(
                ({
                  prop,
                  defaultValue,
                  isRequired,
                  type,
                  isFromNodeModules,
                }) => (
                  <tr
                    key={prop}
                    className={
                      isFromNodeModules
                        ? "portal-example__types--node-module"
                        : ""
                    }
                  >
                    <td>{prop}</td>
                    <td>{defaultValue}</td>
                    <td>{isRequired}</td>
                    <td>{type}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </details>
      ))}
    </aside>
  </>
));

interface MappedType {
  prop: string;
  defaultValue: string;
  isRequired: "true" | "false";
  type: string;
  isFromNodeModules: boolean;
}

function mapTypeToProps(typeToProp: any): Array<MappedType> {
  return Object.entries(typeToProp).map((p: any) => ({
    prop: p[0] || "",
    defaultValue: p[1]?.defaultValue?.value?.toString() || "",
    isRequired: p[1]?.required?.toString() || "false",
    type: p[1]?.type?.name || "",
    isFromNodeModules:
      !!p[1]?.declarations[0]?.fileName?.includes("/node_modules/"),
  }));
}

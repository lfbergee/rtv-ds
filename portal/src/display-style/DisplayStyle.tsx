import { FC } from "react";

const computedStyleValues = [
  "font-family",
  "font-size",
  "line-height",
  "color",
  "text-transform",
  "letter-spacing",
  "font-weight",
  "padding",
  "border-radius",
  "background-color",
];

export const DisplayStyle: FC<{ styleValues?: CSSStyleDeclaration }> = ({ styleValues }) => (
  <aside className="portal-example__types">
    <details className="portal-example__types__details">
      <summary>Vis stil</summary>
      <p>
        Dette er utregna stiler, så verdier som font-størrelse, linje høyde vil kunne variere med akutell skjermbredde
      </p>
      <table className="portal-example__types__table">
        <thead>
          <tr>
            <th scope="col">Prop</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          {computedStyleValues.map((styleProp) =>
            styleValues && styleValues.getPropertyValue(styleProp) ? (
              <tr key={styleProp}>
                <td>{styleProp}</td>
                <td>{styleValues.getPropertyValue(styleProp)}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </details>
  </aside>
);

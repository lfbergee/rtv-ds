import { Accordion } from "@rikstv/shared-components/src/components";
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

const uselessValues = ["0px", "none", "rgba(0, 0, 0, 0)"];

const displayComputedValue = (styleProp: string, styleValues?: CSSStyleDeclaration) =>
  styleValues &&
  styleValues.getPropertyValue(styleProp) &&
  !uselessValues.includes(styleValues.getPropertyValue(styleProp));

export const DisplayStyle: FC<{ styleValues?: CSSStyleDeclaration }> = ({ styleValues }) => (
  <aside className="portal-example__types">
    <Accordion heading="Vis stil" initialOpen={false}>
      <div className="portal-example__types__details">
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
              displayComputedValue(styleProp, styleValues) ? (
                <tr key={styleProp}>
                  <td>{styleProp}</td>
                  <td>{styleValues?.getPropertyValue(styleProp)}</td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
    </Accordion>
  </aside>
);

import { mount } from "@cypress/react";
import { Strim } from "../Strim";

import "../strm.scss";

it("Should set data attribute on mouse activity", () => {
  mount(
    <Strim>
      <button>Hello btn</button>
      <button>Hello btn</button>
    </Strim>
  );
  cy.findByTestId("core-entry").should("have.class", "strm");

  cy.get("button").first().click();
  cy.get("html").should("have.data", "mousenavigation", true);
});

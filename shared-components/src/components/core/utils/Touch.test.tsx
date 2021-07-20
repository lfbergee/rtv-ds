import { mount } from "@cypress/react";
import { Strim } from "../Strim";

import "../strm.scss";

it("Should set data attribute on touch activity", () => {
  mount(
    <Strim>
      <button>Hello btn</button>
      <button>Hello btn</button>
    </Strim>
  );
  cy.findByTestId("core-entry").should("have.class", "strm");

  cy.get("body").trigger(`touchstart`, 200, 50, { force: true });
  cy.get("html").should("have.data", "touchnavigation", true);
});

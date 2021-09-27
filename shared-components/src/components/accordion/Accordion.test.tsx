import { Body } from "..";
import { brands, customMount } from "../../../cypress/customConfig";
import { Accordion } from "./Accordion";

brands.forEach((brand) => {
  it("Should render Accordion initially open", () => {
    customMount(brand)(
      <Accordion heading="Title">
        <Body>Content</Body>
      </Accordion>
    );
    cy.findByTestId("rds-accordion").should("have.attr", "open");
    cy.findByTestId("rds-accordion-summary").click();
    cy.findByTestId("rds-accordion").should("not.have.attr", "open");
  });

  it("Should render Accordion initially closed", () => {
    customMount(brand)(
      <Accordion heading="Title" initialOpen={false}>
        <Body>Content</Body>
      </Accordion>
    );
    cy.findByTestId("rds-accordion").should("not.have.attr", "open");
    cy.findByTestId("rds-accordion-summary").click();
    cy.findByTestId("rds-accordion").should("have.attr", "open");
  });
});

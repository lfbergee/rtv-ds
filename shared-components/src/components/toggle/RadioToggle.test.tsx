import { brands, customMount } from "../../../cypress/customConfig";
import { FieldSet } from "./FieldSet";
import { RadioToggleInput } from "./RadioToggle";

import "./radioToggle.scss";

brands.forEach((brand) => {
  it(`Should render DisplayTitle`, () => {
    customMount(brand)(
      <FieldSet legend="hello" name="fields">
        <RadioToggleInput label="one" />
        <RadioToggleInput label="two" />
      </FieldSet>
    );
    cy.get("fieldset").should("have.class", "rds-field-set");
    cy.get("legend").should("have.class", "rds-field-set__legend");
    cy.get("label")
      .first()
      .should("have.class", "rds-radio-toggle rds-button rds-button__shared rds-button__shared--primary");
    cy.get("input").first().should("have.class", "rds-radio-toggle__input");
    cy.get("input").first().should("have.attr", "name", "fields");
    cy.get("input").last().should("have.attr", "name", "fields");
    cy.get("input").first().should("not.have.attr", "checked", false);
    cy.get("input").first().check();
  });
});

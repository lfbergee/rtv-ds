import { brands, customMount } from "../../../cypress/customConfig";
import { TextField } from "./TextField";

import "./textfield.scss";

brands.forEach((brand) => {
  it(`Should have have working text field for ${brand}`, () => {
    customMount(brand)(
      <>
        <TextField name="username" className="username-input-class" id="username-input" label="Username" />
        <TextField
          name="password"
          className="password-input-class"
          label="Password"
          type="password"
          error="Wrong password"
        />
      </>
    );
    cy.get("div").should("have.class", "rds-form-group").and("have.class", "username-input-class");
    cy.get("input").first().should("have.class", "rds-textfield").and("have.class", "rds-textfield--input");
    cy.get("input").first().should("have.id", "username-input");
    cy.get("input").first().should("have.attr", "name", "username");
    cy.get("input").first().should("have.attr", "placeholder", "Username");
    cy.get("input").first().should("have.attr", "type", "text");
    cy.get("label").first().should("have.class", "rds-textfield").and("have.class", "rds-textfield--label");

    cy.get("div").should("have.class", "rds-form-group").and("have.class", "password-input-class");
    cy.get("input").last().should("have.class", "rds-textfield").and("have.class", "rds-textfield--input");
    cy.get("input").last().should("have.attr", "name", "password");
    cy.get("input").last().should("have.attr", "placeholder", "Password");
    cy.get("input").last().should("have.attr", "type", "password");
    cy.get("label").last().should("have.class", "rds-textfield").and("have.class", "rds-textfield--label");
    cy.get("div")
      .should("have.class", "password-input-class")
      .children()
      .should("have.class", "rds-textfield--error-text")
      .and("contain", "Wrong password");
  });
});

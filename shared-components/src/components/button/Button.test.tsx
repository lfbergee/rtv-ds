import { brands, customMount } from "../../../cypress/customConfig";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./Button";

brands.forEach((brand) => {
  it(`Should render PrimaryButton`, () => {
    customMount(brand)(<PrimaryButton>Hello world</PrimaryButton>);
    cy.findByRole("button").contains("Hello world");
  });

  it(`Should render SecondaryButton`, () => {
    customMount(brand)(<SecondaryButton>Hello world</SecondaryButton>);
    cy.findByRole("button").contains("Hello world");
  });

  it(`Should render TertiaryButton`, () => {
    customMount(brand)(<TertiaryButton>Hello world</TertiaryButton>);
    cy.findByRole("button").contains("Hello world");
  });
});

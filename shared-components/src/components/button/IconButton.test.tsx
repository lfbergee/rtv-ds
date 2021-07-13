import { brands, customMount } from "../../../cypress/customConfig";
import { PrimaryIconButton, SecondaryIconButton, TertiaryIconButton } from "./IconButton";

brands.forEach((brand) => {
  it(`Should render PrimaryIconButton`, () => {
    customMount(brand)(<PrimaryIconButton as="play" aria-label="Spill" />);
    cy.findByRole("button").should("have.attr", "aria-label", "Spill");
  });

  it(`Should render SecondaryIconButton`, () => {
    customMount(brand)(<SecondaryIconButton as="play" aria-label="Spill" />);
    cy.findByRole("button").should("have.attr", "aria-label", "Spill");
  });

  it(`Should render TertiaryIconButton`, () => {
    customMount(brand)(<TertiaryIconButton as="play" aria-label="Spill" />);
    cy.findByRole("button").should("have.attr", "aria-label", "Spill");
  });
});

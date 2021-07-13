import { brands, customMount } from "../../../cypress/customConfig";
import { PrimaryIconButton, SecondaryIconButton, TertiaryIconButton } from "./IconButton";
import { Play } from "../icons/Icons";

brands.forEach((brand) => {
  it(`Should render PrimaryIconButton`, () => {
    customMount(brand)(<PrimaryIconButton icon={Play} aria-label="Spill" />);
    cy.findByRole("button").should("have.attr", "aria-label", "Spill");
  });

  it(`Should render SecondaryIconButton`, () => {
    customMount(brand)(<SecondaryIconButton icon={Play} aria-label="Spill" />);
    cy.findByRole("button").should("have.attr", "aria-label", "Spill");
  });

  it(`Should render TertiaryIconButton`, () => {
    customMount(brand)(<TertiaryIconButton icon={Play} aria-label="Spill" />);
    cy.findByRole("button").should("have.attr", "aria-label", "Spill");
  });
});

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

  it(`Should render PrimaryIconButton as submit`, () => {
    customMount(brand)(<PrimaryIconButton icon={Play} type="submit" aria-label="Spill" />);
    cy.findByRole("button").should("have.attr", "type", "submit");
  });

  it(`Should render PrimaryIconButton as reset`, () => {
    customMount(brand)(<PrimaryIconButton icon={Play} type="reset" aria-label="Spill" />);
    cy.findByRole("button").should("have.attr", "type", "reset");
  });

  it(`Should render a disabled PrimaryIconButton`, () => {
    customMount(brand)(<PrimaryIconButton icon={Play} disabled aria-label="Spill" />);
    cy.findByRole("button").should("have.attr", "disabled", "disabled");
  });

  it(`Should render a loading PrimaryIconButton`, () => {
    customMount(brand)(<PrimaryIconButton icon={Play} isLoading aria-label="Spill" />);
    cy.findByRole("button").should("have.attr", "disabled", "disabled").should("have.attr", "aria-busy", "true");
  });
});

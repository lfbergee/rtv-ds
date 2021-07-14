import { brands, customMount } from "../../../cypress/customConfig";
import { Play } from "../icons/Icons";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./Button";

brands.forEach((brand) => {
  it(`Should render PrimaryButton`, () => {
    customMount(brand)(<PrimaryButton>Hello world</PrimaryButton>);
    cy.findByRole("button")
      .contains("Hello world")
      .should("have.class", "rds-button")
      .should("have.class", "rds-button__shared")
      .should("have.class", "rds-button__shared--primary")
      .should("have.class", "rds-button--primary")
      .should("have.attr", "type", "button");
  });

  it(`Should render SecondaryButton`, () => {
    customMount(brand)(<SecondaryButton>Hello world</SecondaryButton>);
    cy.findByRole("button")
      .contains("Hello world")
      .should("have.class", "rds-button")
      .should("have.class", "rds-button__shared")
      .should("have.class", "rds-button__shared--secondary")
      .should("have.class", "rds-button--secondary")
      .should("have.attr", "type", "button");
  });

  it(`Should render TertiaryButton`, () => {
    customMount(brand)(<TertiaryButton>Hello world</TertiaryButton>);
    cy.findByRole("button")
      .contains("Hello world")
      .should("have.class", "rds-button")
      .should("have.class", "rds-button__shared")
      .should("have.class", "rds-button__shared--tertiary")
      .should("have.class", "rds-button--tertiary")
      .should("have.attr", "type", "button");
  });

  it(`Should render PrimaryButton as submit`, () => {
    customMount(brand)(<PrimaryButton type="submit">Hello world</PrimaryButton>);
    cy.findByRole("button").should("have.attr", "type", "submit");
  });

  it(`Should render PrimaryButton as reset`, () => {
    customMount(brand)(<PrimaryButton type="reset">Hello world</PrimaryButton>);
    cy.findByRole("button").should("have.attr", "type", "reset");
  });

  it(`Should render a disabled PrimaryButton`, () => {
    customMount(brand)(<PrimaryButton disabled>Hello world</PrimaryButton>);
    cy.findByRole("button").should("have.attr", "disabled", "disabled");
  });

  it(`Should render a loading PrimaryButton`, () => {
    customMount(brand)(<PrimaryButton isLoading>Hello world</PrimaryButton>);
    cy.findByRole("button").should("have.attr", "disabled", "disabled").should("have.attr", "aria-busy", "true");
  });

  it(`Should render a PrimaryButton with postfix`, () => {
    customMount(brand)(<PrimaryButton postfix="$100">Hello world</PrimaryButton>);
    cy.findByRole("button").contains("$100").should("have.class", "rds-button__postfix");
  });

  it(`Should render a PrimaryButton with icon`, () => {
    customMount(brand)(<PrimaryButton icon={Play}>Hello world</PrimaryButton>);
    cy.findByRole("button").findAllByTestId("rds-button__icon").should("have.class", "rds-button__icon");
  });
});

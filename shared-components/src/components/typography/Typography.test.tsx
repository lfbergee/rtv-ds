import { brands, customMount } from "../../../cypress/customConfig";
import { DisplayTitle, H1, H2, H3, H4, Body, SubBody, Bold, Meta, Tag } from "./Typography";

import "./typography.scss";

brands.forEach((brand) => {
  it(`Should render DisplayTitle`, () => {
    customMount(brand)(<DisplayTitle>Hello world</DisplayTitle>);
    cy.findByRole("heading").contains("Hello world");
  });

  it(`Should render H1`, () => {
    customMount(brand)(<H1>Hello world</H1>);
    cy.findByRole("heading").contains("Hello world");
  });

  it(`Should render H2`, () => {
    customMount(brand)(<H2>Hello world</H2>);
    cy.findByRole("heading").contains("Hello world");
  });

  it(`Should render H3`, () => {
    customMount(brand)(<H3>Hello world</H3>);
    cy.findByRole("heading").contains("Hello world");
  });

  it(`Should render H4`, () => {
    customMount(brand)(<H4>Hello world</H4>);
    cy.findByRole("heading").contains("Hello world");
  });

  it(`Should render Body`, () => {
    customMount(brand)(<Body>Hello world</Body>);
    cy.findByText("Hello world").contains("Hello world");
  });

  it(`Should render SubBody`, () => {
    customMount(brand)(<SubBody>Hello world</SubBody>);
    cy.findByText("Hello world").contains("Hello world");
  });

  it(`Should render Bold`, () => {
    customMount(brand)(<Bold>Hello world</Bold>);
    cy.findByText("Hello world").contains("Hello world");
  });

  it(`Should render Meta`, () => {
    customMount(brand)(<Meta>Hello world</Meta>);
    cy.findByText("Hello world").contains("Hello world");
  });

  it(`Should render Tag`, () => {
    customMount(brand)(<Tag>Hello world</Tag>);
    cy.findByText("Hello world").contains("Hello world");
  });
});

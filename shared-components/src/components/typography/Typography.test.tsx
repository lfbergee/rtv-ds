import { brands, customMount } from "../../../cypress/customConfig";
import { DisplayTitle, H1, H2, H3, H4, Body, SubBody, Bold, Meta, Tag } from "./Typography";

import "./typography.scss";

brands.forEach((brand) => {
  it(`Should render DisplayTitle`, () => {
    customMount(brand)(<DisplayTitle>Hello world</DisplayTitle>);
    cy.findByRole("heading").get("h1").contains("Hello world").should("have.class", "rds-display-title");
  });

  it(`Should render H1`, () => {
    customMount(brand)(<H1>Hello world</H1>);
    cy.findByRole("heading").get("h1").contains("Hello world").should("have.class", "rds-title-1");
  });

  it(`Should render H2`, () => {
    customMount(brand)(<H2>Hello world</H2>);
    cy.findByRole("heading").get("h2").contains("Hello world").should("have.class", "rds-title-2");
  });

  it(`Should render H3`, () => {
    customMount(brand)(<H3>Hello world</H3>);
    cy.findByRole("heading").get("h3").contains("Hello world").should("have.class", "rds-title-3");
  });

  it(`Should render H4`, () => {
    customMount(brand)(<H4>Hello world</H4>);
    cy.findByRole("heading").get("h4").contains("Hello world").should("have.class", "rds-title-4");
  });

  it(`Should render Body`, () => {
    customMount(brand)(<Body>Hello world</Body>);
    cy.findByText("Hello world").get("p").contains("Hello world").should("have.class", "rds-body");
  });

  it(`Should render SubBody`, () => {
    customMount(brand)(<SubBody>Hello world</SubBody>);
    cy.findByText("Hello world").get("p").contains("Hello world").should("have.class", "rds-sub-body");
  });

  it(`Should render Bold`, () => {
    customMount(brand)(<Bold>Hello world</Bold>);
    cy.findByText("Hello world").get("strong").contains("Hello world").should("have.class", "rds-bold");
  });

  it(`Should render Meta`, () => {
    customMount(brand)(<Meta>Hello world</Meta>);
    cy.findByText("Hello world").get("span").contains("Hello world").should("have.class", "rds-meta");
  });

  it(`Should render Tag`, () => {
    customMount(brand)(<Tag>Hello world</Tag>);
    cy.findByText("Hello world").get("span").contains("Hello world").should("have.class", "rds-tag");
  });

  it(`Should render DisplayTitle to look like title-4`, () => {
    customMount(brand)(<DisplayTitle lookLike="title-4">Hello world</DisplayTitle>);
    cy.findByRole("heading")
      .contains("Hello world")
      .should("have.class", "rds-title-4")
      .should("not.have.class", "rds-display-title");
  });

  it(`Should render DisplayTitle with className`, () => {
    customMount(brand)(<DisplayTitle className="hello-world">Hello world</DisplayTitle>);
    cy.findByRole("heading")
      .contains("Hello world")
      .should("have.class", "rds-display-title")
      .should("have.class", "hello-world");
  });
});

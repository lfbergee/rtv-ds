import { useRef, useState } from "react";
import { brands, customMount } from "../../../cypress/customConfig";
import { HeartToggle } from "../icons/HeartToggle";
import { Heart, HeartUnfilled } from "../icons/Icons";
import { ToggleButton } from "./ToggleButton";

brands.forEach((brand) => {
  it(`Should render ToggleButton`, () => {
    customMount(brand)(<ToggleButton>Hello world</ToggleButton>);
    cy.findByRole("checkbox").should("have.class", "rds-toggle-button__input").should("not.be.checked");
    cy.findByTestId("toggle-button__label").contains("Hello world").click();
    cy.findByRole("checkbox").should("be.checked");
  });

  it(`Should render ToggleButton with icon toggler`, () => {
    customMount(brand)(<ToggleButton icons={{ toggleIcon: HeartToggle }}>Hello world</ToggleButton>);
    cy.findByRole("checkbox").should("have.class", "rds-toggle-button__input").should("not.be.checked");
    cy.findByTestId("unheart").should("exist");
    cy.findByTestId("heart").should("not.exist");
    cy.findByTestId("toggle-button__label").contains("Hello world").click();
    cy.findByRole("checkbox").should("be.checked");
    cy.findByTestId("unheart").should("not.exist");
    cy.findByTestId("heart").should("exist");
  });

  it(`Should render ToggleButton with icon`, () => {
    customMount(brand)(
      <ToggleButton icons={{ checkedIcon: Heart, uncheckedIcon: HeartUnfilled }}>Hello world</ToggleButton>
    );
    cy.findByRole("checkbox").should("have.class", "rds-toggle-button__input").should("not.be.checked");
    cy.findByTestId("unheart-svg").should("exist");
    cy.findByTestId("heart-svg").should("not.exist");
    cy.findByTestId("toggle-button__label").contains("Hello world").click();
    cy.findByRole("checkbox").should("be.checked");
    cy.findByTestId("unheart-svg").should("not.exist");
    cy.findByTestId("heart-svg").should("exist");
  });

  it(`Should render ToggleButton with id`, () => {
    customMount(brand)(
      <ToggleButton id="hest" showLabel={false}>
        Hello world
      </ToggleButton>
    );
    cy.findByRole("checkbox").should("have.id", "hest").should("not.be.checked");
    cy.findByTestId("toggle-button__label").click();
    cy.findByTestId("toggle-button__label__text").contains("Hello world");
    cy.findByRole("checkbox").should("be.checked");
  });

  it(`Should render ToggleButton with custom onChange`, () => {
    let called = false;
    const changeFn = () => {
      if (called) {
        return true;
      }
      called = true;
      return false;
    };
    customMount(brand)(
      <ToggleButton onChange={changeFn} showLabel={false}>
        Hello world
      </ToggleButton>
    );
    cy.findByRole("checkbox").should("have.class", "rds-toggle-button__input").should("not.be.checked");
    cy.findByTestId("toggle-button__label").click();
    cy.findByTestId("toggle-button__label__text").contains("Hello world");
    cy.findByRole("checkbox")
      .should("be.checked")
      .then(() => {
        expect(changeFn()).equal(true);
      });
  });

  it(`Should render ToggleButton with ref`, () => {
    const Toggler = () => {
      const ref = useRef<HTMLInputElement>(null);
      const [counter, setCounter] = useState(0);
      return (
        <ToggleButton onChange={() => setCounter(counter + 1)} ref={ref}>{`${ref.current?.checked}`}</ToggleButton>
      );
    };

    customMount(brand)(<Toggler />);
    cy.findByRole("checkbox").should("have.class", "rds-toggle-button__input").should("not.be.checked");
    // on first render the ref will be undefined
    cy.findByTestId("toggle-button__label__text").contains("undefined");
    cy.findByTestId("toggle-button__label").click();
    // counter triggers a render, and now the ref is set and reflect the toggle state
    cy.findByTestId("toggle-button__label__text").contains("true");
    cy.findByTestId("toggle-button__label").click();
    // counter triggers a render, and now the ref is set and reflect the toggle state
    cy.findByTestId("toggle-button__label__text").contains("false");
  });
});

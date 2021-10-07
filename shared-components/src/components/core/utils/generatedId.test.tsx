import { mount } from "@cypress/react";
import { TextField } from "../..";
import { StrimProvider } from "../Strim";

it("Should return a specific id if one was specified or generate one otherwise", () => {
  const now = new Date(2021, 11, 5).getTime(); // We set the time so we know what Id will be generated from generateId()
  cy.clock(now);

  mount(
    <StrimProvider>
      <TextField name="specified-id" id="unique-id" label="user-name" />
      <TextField name="unspecified-id" label="password" />
    </StrimProvider>
  );
  cy.get("input").first().should("have.attr", "id", "unique-id");
  cy.get("input").last().should("have.attr", "id", "1638658800000");
});

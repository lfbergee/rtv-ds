import Case from "case";
import { resolveStyle } from "./resolveStyle";
import * as component from "../../components";

const componentsWithoutCSSFile = ["LightMode"];

it(`Should render PrimaryIconButton`, () => {
  cy.then(() => {
    for (const comp in component) {
      expect(resolveStyle(Case.kebab(comp))).to.satisfy(
        (str: string) => str.startsWith("@rikstv/shared-components/dist/") || componentsWithoutCSSFile.includes(comp)
      );
    }
  });
});

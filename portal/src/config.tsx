import Core from "@rikstv/shared-components/src/components/core/core.mdx";
import Button from "@rikstv/shared-components/src/components/button/button.mdx";
import Typography from "@rikstv/shared-components/src/components/typography/typography.mdx";
import buttonType from "../../shared-components/src/components/button/Button?type";
import typographyType from "../../shared-components/src/components/typography/Typography?type";

import { Example } from "./example/Example";

const componentFactory = (name: string, Page: any, types: any) => ({
  Page: () => (
    <Example types={types}>
      <Page />
    </Example>
  ),
  displayName: name,
});

export const components = [
  componentFactory("button", Button, buttonType),
  componentFactory("core", Core, []),
  componentFactory("typografi", Typography, typographyType),
];

import Core from "@rikstv/shared-components/src/components/core/core.mdx";
import Button from "@rikstv/shared-components/src/components/button/button.mdx";
import Typography from "@rikstv/shared-components/src/components/typography/typography.mdx";
import buttonType from "../../shared-components/src/components/button/Button?type";
import typographyType from "../../shared-components/src/components/typography/Typography?type";


export const components = [
  { Page: Button, displayName: "button", types: buttonType },
  { Page: Core, displayName: "core", types: [] },
  { Page: Typography, displayName: "typografi", types: typographyType },
];

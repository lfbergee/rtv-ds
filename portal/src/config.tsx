import { makeComponent } from "./utils/makeComponent";

// Components
import Core from "@rikstv/shared-components/src/components/core/core.mdx";
import Button from "@rikstv/shared-components/src/components/button/button.mdx";
import Typography from "@rikstv/shared-components/src/components/typography/typography.mdx";

// Types
import buttonType from "../../../shared-components/src/components/button/Button?type";
import typographyType from "../../../shared-components/src/components/typography/Typography?type";

export const components = [
  makeComponent("button", Button, buttonType),
  makeComponent("core", Core, []),
  makeComponent("typografi", Typography, typographyType),
];

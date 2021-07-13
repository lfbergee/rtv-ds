import { makeComponent } from "./utils/makeComponent";

// Components
import Spacing from "@rikstv/shared-components/src/components/core/spacing.mdx";
import Colors from "@rikstv/shared-components/src/components/core/colors.mdx";
import Button from "@rikstv/shared-components/src/components/button/button.mdx";
import IconButton from "@rikstv/shared-components/src/components/button/iconButton.mdx";
import Typography from "@rikstv/shared-components/src/components/typography/typography.mdx";

// Types
import buttonType from "../../../shared-components/src/components/button/Button?type";
import iconButtonType from "../../../shared-components/src/components/button/IconButton?type";
import typographyType from "../../../shared-components/src/components/typography/Typography?type";

export const components = [
  makeComponent("button", Button, buttonType),
  makeComponent("icon button", IconButton, iconButtonType),
  makeComponent("spacing", Spacing),
  makeComponent("colors", Colors),
  makeComponent("typografi", Typography, typographyType),
].sort((a, b) => a.displayName.localeCompare(b.displayName));

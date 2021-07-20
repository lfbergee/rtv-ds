import { lazy } from "react";
import { makeComponent, LazyImportedTypes } from "./utils/makeComponent";

// Components
const Spacing = lazy(() => import("@rikstv/shared-components/src/components/core/spacing.mdx"));
const Colors = lazy(() => import("@rikstv/shared-components/src/components/core/colors.mdx"));
const Button = lazy(() => import("@rikstv/shared-components/src/components/button/button.mdx"));
const IconButton = lazy(() => import("@rikstv/shared-components/src/components/button/iconButton.mdx"));
const RadioToggle = lazy(() => import("@rikstv/shared-components/src/components/toggle/radioToggle.mdx"));
const Typography = lazy(() => import("@rikstv/shared-components/src/components/typography/typography.mdx"));

// Types
const buttonType: LazyImportedTypes = import("../../../shared-components/src/components/button/Button?type");
const iconButtonType: LazyImportedTypes = import("../../../shared-components/src/components/button/IconButton?type");
const radioToggleType: LazyImportedTypes = import("../../../shared-components/src/components/toggle/RadioToggle?type");
const fieldSetType: LazyImportedTypes = import("../../../shared-components/src/components/toggle/FieldSet?type");
const typographyType: LazyImportedTypes = import(
  "../../../shared-components/src/components/typography/Typography?type"
);

// if more than one type is needed to show types in example
// just add more at the end, makeCompontent takes as many types as you could ever want
export const components = [
  makeComponent("button", Button, buttonType),
  makeComponent("icon button", IconButton, iconButtonType),
  makeComponent("radio toggle", RadioToggle, radioToggleType, fieldSetType),
  makeComponent("spacing", Spacing),
  makeComponent("colors", Colors),
  makeComponent("typografi", Typography, typographyType),
].sort((a, b) => a.displayName.localeCompare(b.displayName));

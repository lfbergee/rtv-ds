import { lazy } from "react";
import { makeComponent, LazyImportedTypes } from "./utils/makeComponent";

// Components
const Accordion = lazy(() => import("@rikstv/shared-components/src/components/accordion/accordion.mdx"));
const Core = lazy(() => import("@rikstv/shared-components/src/components/core/core.mdx"));
const Spacing = lazy(() => import("@rikstv/shared-components/src/components/core/spacing.mdx"));
const Colors = lazy(() => import("@rikstv/shared-components/src/components/core/colors.mdx"));
const Button = lazy(() => import("@rikstv/shared-components/src/components/button/button.mdx"));
const IconButton = lazy(() => import("@rikstv/shared-components/src/components/button/iconButton.mdx"));
const TextField = lazy(() => import("@rikstv/shared-components/src/components/textfield/textfield.mdx"));
const RadioToggle = lazy(() => import("@rikstv/shared-components/src/components/toggle/radioToggle.mdx"));
const Typography = lazy(() => import("@rikstv/shared-components/src/components/typography/typography.mdx"));
const ToggleButton = lazy(() => import("@rikstv/shared-components/src/components/toggleButton/toggleButton.mdx"));

// Types
const buttonType: LazyImportedTypes = import("../../../shared-components/src/components/button/Button?type");
const iconButtonType: LazyImportedTypes = import("../../../shared-components/src/components/button/IconButton?type");
const textFieldType: LazyImportedTypes = import("../../../shared-components/src/components/textfield/TextField?type");
const toggleButtonType: LazyImportedTypes = import(
  "../../../shared-components/src/components/toggleButton/ToggleButton?type"
);
const radioToggleType: LazyImportedTypes = import("../../../shared-components/src/components/toggle/RadioToggle?type");
const fieldSetType: LazyImportedTypes = import("../../../shared-components/src/components/toggle/FieldSet?type");
const typographyType: LazyImportedTypes = import(
  "../../../shared-components/src/components/typography/Typography?type"
);
const accordionType: LazyImportedTypes = import("../../../shared-components/src/components/accordion/Accordion?type");

// if more than one type is needed to show types in example
// just add more at the end, makeComponent takes as many types as you could ever want
export const components = [
  makeComponent("button", Button, buttonType),
  makeComponent("icon button", IconButton, iconButtonType),
  makeComponent("toggle button", ToggleButton, toggleButtonType),
  makeComponent("radio toggle", RadioToggle, radioToggleType, fieldSetType),
  makeComponent("core", Core),
  makeComponent("spacing", Spacing),
  makeComponent("colors", Colors),
  makeComponent("typografi", Typography, typographyType),
  makeComponent("accordion", Accordion, accordionType),
  makeComponent("textfield", TextField, textFieldType),
].sort((a, b) => a.displayName.localeCompare(b.displayName));

import { FC } from "react";
import { ColorSwatch } from "./ColorSwatch";
import { ExampleGrid } from "./ExampleGrid";
import { SpacingBlock } from "./SpacingBlock";

export const Colors: FC = () => (
  <div style={{ padding: "8px" }}>
    <ExampleGrid title="Brand colors">
      <ColorSwatch
        color="--rds-heading-accent"
        usage={["Title 3", "Secondary button default", "Toggle selected", "details - links"]}
      />
      <ColorSwatch color="--rds-accent-color" usage={["Primary button background color", "Progressbar live"]} />
      <ColorSwatch color="--rds-accent-color-dark" usage={["15% darker than accent"]} />
    </ExampleGrid>

    <ExampleGrid title="Button text">
      <ColorSwatch color="--rds-button-primary-fg" usage={["Textcolor primary button"]} />
    </ExampleGrid>

    <ExampleGrid title="Foreground">
      <ColorSwatch color="--rds-foreground-primary" usage={["Primary text color", "Secondary button focus color"]} />
      <ColorSwatch color="--rds-foreground-secondary" usage={["Second text color", "metadata", "EPG not sendt"]} />
      <ColorSwatch color="--rds-foreground-tertiary" usage={["Selected element background color"]} />
    </ExampleGrid>

    <ExampleGrid title="Background">
      <ColorSwatch color="--rds-background-primary" usage={["app background"]} />
      <ColorSwatch color="--rds-background-secondary" usage={["contrast background"]} />
      <ColorSwatch color="--rds-background-tertiary" usage={["contrast background"]} />
    </ExampleGrid>

    <ExampleGrid title="Transparent objects">
      <ColorSwatch color="--rds-foreground-overlay-soft" usage={["separator"]} />
      <ColorSwatch color="--rds-foreground-overlay-medium" usage={["Progressbar background"]} />
      <ColorSwatch color="--rds-foreground-overlay-heavy" usage={[]} />
    </ExampleGrid>

    <ExampleGrid title="Image/player overlays">
      <ColorSwatch color="--rds-background-overlay-soft" usage={["Gradient middle", "Unfocused asset overlay"]} />
      <ColorSwatch color="--rds-background-overlay-medium" usage={["Player overlay"]} />
      <ColorSwatch color="--rds-background-overlay-heavy" usage={["Gradient darkest"]} />
    </ExampleGrid>

    <ExampleGrid title="Feedback">
      <ColorSwatch color="--rds-feedback-info" />
      <ColorSwatch color="--rds-feedback-warning" />
      <ColorSwatch color="--rds-feedback-confirm" />
      <ColorSwatch color="--rds-feedback-error-text" />
      <ColorSwatch color="--rds-feedback-error-object" />
    </ExampleGrid>
  </div>
);

export const Spacing: FC = () => (
  <div style={{ display: "flex" }}>
    <SpacingBlock size={2} />
    <SpacingBlock size={4} />
    <SpacingBlock size={8} />
    <SpacingBlock size={16} />
    <SpacingBlock size={24} />
    <SpacingBlock size={32} />
    <SpacingBlock size={48} />
    <SpacingBlock size={64} />
    <SpacingBlock size={80} />
    <SpacingBlock size={96} />
  </div>
);

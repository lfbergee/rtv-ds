import { FC } from "react";
import { ColorSwatch } from "./ColorSwatch";
import { ExampleGrid } from "./ExampleGrid";
import { SpacingBlock } from "./SpacingBlock";

export const Colors: FC = () => (
  <div style={{ padding: "8px" }}>
    <ExampleGrid title="Brand colors">
      <ColorSwatch
        color="--heading-accent"
        usage={["Title 3", "Secondary button default", "Toggle selected", "details - links"]}
      />
      <ColorSwatch color="--accent-color" usage={["Primary button background color", "Progressbar live"]} />
      <ColorSwatch color="--accent-color-dark" usage={["15% darker than accent"]} />
    </ExampleGrid>

    <ExampleGrid title="Button text">
      <ColorSwatch color="--button-primary-fg" usage={["Textcolor primary button"]} />
    </ExampleGrid>

    <ExampleGrid title="Foreground">
      <ColorSwatch color="--foreground-primary" usage={["Primary text color", "Secondary button focus color"]} />
      <ColorSwatch color="--foreground-secondary" usage={["Second text color", "metadata", "EPG not sendt"]} />
      <ColorSwatch color="--foreground-tertiary" usage={["Selected element background color"]} />
    </ExampleGrid>

    <ExampleGrid title="Background">
      <ColorSwatch color="--background-primary" usage={["app background"]} />
      <ColorSwatch color="--background-secondary" usage={["contrast background"]} />
    </ExampleGrid>

    <ExampleGrid title="Transparent objects">
      <ColorSwatch color="--foreground-overlay-soft" usage={["separator"]} />
      <ColorSwatch color="--foreground-overlay-medium" usage={["Progressbar background"]} />
      <ColorSwatch color="--foreground-overlay-heavy" usage={[]} />
    </ExampleGrid>

    <ExampleGrid title="Image/player overlays">
      <ColorSwatch color="--background-overlay-soft" usage={["Gradient middle", "Unfocused asset overlay"]} />
      <ColorSwatch color="--background-overlay-medium" usage={["Player overlay"]} />
      <ColorSwatch color="--background-overlay-heavy" usage={["Gradient darkest"]} />
    </ExampleGrid>

    <ExampleGrid title="Feedback">
      <ColorSwatch color="--feedback-info" />
      <ColorSwatch color="--feedback-warning" />
      <ColorSwatch color="--feedback-confirm" />
      <ColorSwatch color="--feedback-error" />
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

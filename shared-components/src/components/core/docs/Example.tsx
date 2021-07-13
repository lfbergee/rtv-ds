import { FC } from "react";
import { ColorSwatch } from "./ColorSwatch";
import { ExampleGrid } from "./ExampleGrid";
import { SpacingBlock } from "./SpacingBlock";

export const Colors: FC = () => (
  <div style={{ padding: "8px" }}>
    <ExampleGrid title="Brand colors">
      <ColorSwatch
        color="--heading-accent"
        title="Display"
        usage={["Title 3", "Secondary button default", "Toggle selected", "details - links"]}
      />
      <ColorSwatch
        color="--accent-color"
        title="accent-color"
        usage={["Primary button background color", "Progressbar live"]}
      />
      <ColorSwatch color="--accent-color-dark" title="accent-color-dark" usage={["15% darker than accent"]} />
    </ExampleGrid>

    <ExampleGrid title="Button text">
      <ColorSwatch color="--button-primary-fg" title="button-primary-fg" usage={["Textcolor primary button"]} />
    </ExampleGrid>

    <ExampleGrid title="Foreground">
      <ColorSwatch
        color="--foreground-primary"
        title="foreground-primary"
        usage={["Primary text color", "Secondary button focus color"]}
      />
      <ColorSwatch
        color="--foreground-secondary"
        title="foreground-secondary"
        usage={["Second text color", "metadata", "EPG not sendt"]}
      />
      <ColorSwatch
        color="--foreground-tertiary"
        title="foreground-tertiary"
        usage={["Selected element background color"]}
      />
    </ExampleGrid>

    <ExampleGrid title="Background">
      <ColorSwatch color="--background-primary" title="background-primary" usage={["app background"]} />
      <ColorSwatch color="--background-secondary" title="background-secondary" usage={["contrast background"]} />
    </ExampleGrid>

    <ExampleGrid title="Transparent objects">
      <ColorSwatch color="--foreground-overlay-soft" title="foreground-overlay-soft" usage={["separator"]} />
      <ColorSwatch
        color="--foreground-overlay-medium"
        title="foreground-overlay-medium"
        usage={["Progressbar background"]}
      />
      <ColorSwatch color="--foreground-overlay-heavy" title="foreground-overlay-heavy" usage={[]} />
    </ExampleGrid>

    <ExampleGrid title="Image/player overlays">
      <ColorSwatch
        color="--background-overlay-soft"
        title="background-overlay-soft"
        usage={["Gradient middle", "Unfocused asset overlay"]}
      />
      <ColorSwatch color="--background-overlay-medium" title="background-overlay-medium" usage={["Player overlay"]} />
      <ColorSwatch color="--background-overlay-heavy" title="background-overlay-heavy" usage={["Gradient darkest"]} />
    </ExampleGrid>

    <ExampleGrid title="Feedback">
      <ColorSwatch color="--feedback-info" title="feedback-info" />
      <ColorSwatch color="--feedback-warning" title="feedback-warning" />
      <ColorSwatch color="--feedback-confirm" title="feedback-confirm" />
      <ColorSwatch color="--feedback-error" title="feedback-error" />
    </ExampleGrid>
  </div>
);

export const Spacing: FC = () => (
  <>
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
  </>
);

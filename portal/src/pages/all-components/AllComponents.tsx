import { FC } from "react";
import { components } from "../../config";

export const AllComponents: FC = () => (
  <>
    <h1>Alle komponenter</h1>
    {components.map(({ Page, displayName }) => (
      <Page key={displayName} />
    ))}
  </>
);

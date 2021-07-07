import { FC } from "react";
import { components } from "../../config";

export const AllComponents: FC = () => (
  <>
    {components.map(({ Page, displayName }) => (
      <Page key={displayName} />
    ))}
  </>
);

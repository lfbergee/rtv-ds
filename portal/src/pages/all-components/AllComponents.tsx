import { components } from "../../config";

export const AllComponents = () => (
  <>
    <h1>Alle komponenter</h1>
    {components.map(({ Page }) => (
      <Page />
    ))}
  </>
);

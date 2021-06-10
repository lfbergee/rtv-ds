import { Example } from "../example/Example";

type Types = any;

export const makeComponent = (
  name: string,
  Page: () => JSX.Element,
  types: Types[]
) => ({
  Page: () => (
    <Example types={types}>
      <Page />
    </Example>
  ),
  displayName: name,
});

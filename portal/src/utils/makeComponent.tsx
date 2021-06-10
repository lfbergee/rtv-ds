import { Example } from "../example/Example";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RawTypeProps = [string, any];

export type Types = Array<{
  displayName: string;
  props: RawTypeProps;
}>;

export const makeComponent = (
  name: string,
  Page: () => JSX.Element,
  types: Types
): { Page: () => JSX.Element; displayName: string } => {
  const WrappedPage = () => (
    <Example types={types}>
      <Page />
    </Example>
  );
  return {
    Page: WrappedPage,
    displayName: name,
  };
};

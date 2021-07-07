import { createContext } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RawTypeProps = [string, any];

export type Types = Array<{
  displayName: string;
  props: RawTypeProps;
}>;

export const TypeContext = createContext<{ types: Types }>({ types: [] });

export const makeComponent = (
  name: string,
  Page: () => JSX.Element,
  types: Types
): { Page: () => JSX.Element; displayName: string } => {
  const WrappedPage = () => (
    <TypeContext.Provider value={{ types }}>
      <Page />
    </TypeContext.Provider>
  );
  return {
    Page: WrappedPage,
    displayName: name,
  };
};

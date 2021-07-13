import { createContext } from "react";

export type RawTypeProps = [string, unknown];

export type Types = Array<{
  displayName: string;
  props: RawTypeProps;
}>;

export const TypeContext = createContext<{ types: Types }>({ types: [] });

export const makeComponent = (
  name: string,
  Page: () => JSX.Element,
  types?: Promise<{ default: Types }>
): { Page: () => JSX.Element; displayName: string } => {
  let resolvedTypes: Types;

  if (types) {
    types.then((resolve) => {
      resolvedTypes = resolve.default;
    });
  }

  const WrappedPage = () => (
    <TypeContext.Provider value={{ types: resolvedTypes || [] }}>
      <Page />
    </TypeContext.Provider>
  );

  return {
    Page: WrappedPage,
    displayName: name,
  };
};

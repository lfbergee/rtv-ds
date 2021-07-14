import { createContext, LazyExoticComponent } from "react";

export type RawTypeProps = [string, unknown];

export type Types = Array<{
  displayName: string;
  props: RawTypeProps;
}>;

export type LazyImportedTypes = Promise<{ default: Types }>;

const defaultTypes = new Promise<{ default: Types }>((resolve) => setTimeout(() => resolve({ default: [] })));

export const TypeContext = createContext<{ types: LazyImportedTypes }>({ types: defaultTypes });

export const makeComponent = (
  name: string,
  Page: (() => JSX.Element) | LazyExoticComponent<React.ComponentType<unknown>>,
  types?: LazyImportedTypes
): { Page: () => JSX.Element; displayName: string } => {
  const WrappedPage = () => (
    <TypeContext.Provider value={{ types: types || defaultTypes }}>
      <Page />
    </TypeContext.Provider>
  );

  return {
    Page: WrappedPage,
    displayName: name,
  };
};

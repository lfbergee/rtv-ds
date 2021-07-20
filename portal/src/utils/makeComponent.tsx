import { createContext, LazyExoticComponent } from "react";
import { GithubLink } from "../links/GithubLink";
import { NpmLink } from "../links/NpmLink";
import { LinkContainer } from "../links/LinkContainer";

export type RawTypeProps = [string, unknown];

export type Types = Array<{
  displayName: string;
  props: RawTypeProps;
}>;

export type LazyImportedTypes = Promise<{ default: Types }>;

export type LazyImportedTypesArray = Array<LazyImportedTypes>;

const defaultTypes = [new Promise<{ default: Types }>((resolve) => setTimeout(() => resolve({ default: [] })))];

export const TypeContext = createContext<{ types: LazyImportedTypesArray }>({ types: defaultTypes });

export const makeComponent = (
  name: string,
  Page: (() => JSX.Element) | LazyExoticComponent<React.ComponentType<unknown>>,
  ...types: LazyImportedTypesArray
): { Page: () => JSX.Element; displayName: string } => {
  const WrappedPage = () => (
    <TypeContext.Provider value={{ types: types || defaultTypes }}>
      <LinkContainer>
        <GithubLink />
        <NpmLink />
      </LinkContainer>
      <Page />
    </TypeContext.Provider>
  );

  return {
    Page: WrappedPage,
    displayName: name,
  };
};

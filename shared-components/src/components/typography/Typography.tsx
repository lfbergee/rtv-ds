import { forwardRef, ForwardRefExoticComponent, HTMLAttributes } from "react";

import "./typography.scss";

type HeadingLevels = 1 | 2 | 3 | 4;
type SemanticElement = `h${HeadingLevels}` | "p" | "span" | "strong";
interface Props extends HTMLAttributes<HTMLHeadingElement> {
  lookLike: `title-${HeadingLevels}` | "display-title" | "body" | "sub-body" | "tag" | "bold" | "meta";
  className?: string;
}

interface FactoryProps extends Pick<Props, "lookLike"> {
  semanticElement: SemanticElement;
}

const typographyFactory = (
  factoryProps: FactoryProps
): ForwardRefExoticComponent<Props & React.RefAttributes<HTMLHeadingElement>> =>
  // eslint-disable-next-line react/display-name
  forwardRef<HTMLHeadingElement, Props>(
    ({ children, lookLike = factoryProps.lookLike, className = "", ...props }, ref) => {
      const C = factoryProps.semanticElement;
      return (
        <C className={`rds-${lookLike} ${className}`} {...props} ref={ref}>
          {children}
        </C>
      );
    }
  );

export const DisplayTitle = typographyFactory({ semanticElement: "h1", lookLike: "display-title" });
export const H1 = typographyFactory({ semanticElement: "h1", lookLike: "title-1" });
export const H2 = typographyFactory({ semanticElement: "h2", lookLike: "title-2" });
export const H3 = typographyFactory({ semanticElement: "h3", lookLike: "title-3" });
export const H4 = typographyFactory({ semanticElement: "h4", lookLike: "title-4" });
export const Body = typographyFactory({ semanticElement: "p", lookLike: "body" });
export const SubBody = typographyFactory({ semanticElement: "p", lookLike: "sub-body" });
export const Tag = typographyFactory({ semanticElement: "span", lookLike: "tag" });
export const Bold = typographyFactory({ semanticElement: "strong", lookLike: "bold" });
export const Meta = typographyFactory({ semanticElement: "span", lookLike: "meta" });

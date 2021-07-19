import { forwardRef, ForwardRefExoticComponent, HTMLAttributes } from "react";

import "./typography.scss";

type HeadingLevels = 1 | 2 | 3 | 4;
type SemanticElement = `h${HeadingLevels}` | "p" | "span" | "strong";
type AcceptedHTMLElements = HTMLSpanElement | HTMLHeadingElement | HTMLParagraphElement;

interface Props<T extends AcceptedHTMLElements> extends HTMLAttributes<T> {
  lookLike?: `title-${HeadingLevels}` | "display-title" | "body" | "sub-body" | "tag" | "bold" | "meta";
  className?: string;
}

interface FactoryProps<T extends AcceptedHTMLElements> extends Pick<Props<T>, "lookLike"> {
  semanticElement: SemanticElement;
}

interface TypographyType {
  <T extends AcceptedHTMLElements>(props: FactoryProps<T>): ForwardRefExoticComponent<
    Props<T> & React.RefAttributes<T>
  >;
}

const typographyFactory: TypographyType = (factoryProps) =>
  // eslint-disable-next-line react/display-name
  forwardRef(({ children, lookLike = factoryProps.lookLike, className = "", ...props }, ref) => {
    const C = factoryProps.semanticElement;
    return (
      // @ts-ignore ts mismatches ref while constrained
      <C className={`rds-${lookLike} ${className}`} {...props} ref={ref}>
        {children}
      </C>
    );
  });

export const DisplayTitle = typographyFactory<HTMLHeadingElement>({ semanticElement: "h1", lookLike: "display-title" });
export const H1 = typographyFactory<HTMLHeadingElement>({ semanticElement: "h1", lookLike: "title-1" });
export const H2 = typographyFactory<HTMLHeadingElement>({ semanticElement: "h2", lookLike: "title-2" });
export const H3 = typographyFactory<HTMLHeadingElement>({ semanticElement: "h3", lookLike: "title-3" });
export const H4 = typographyFactory<HTMLHeadingElement>({ semanticElement: "h4", lookLike: "title-4" });
export const Body = typographyFactory<HTMLParagraphElement>({ semanticElement: "p", lookLike: "body" });
export const SubBody = typographyFactory<HTMLParagraphElement>({ semanticElement: "p", lookLike: "sub-body" });
export const Tag = typographyFactory<HTMLParagraphElement>({ semanticElement: "span", lookLike: "tag" });
export const Bold = typographyFactory<HTMLParagraphElement>({ semanticElement: "strong", lookLike: "bold" });
export const Meta = typographyFactory<HTMLSpanElement>({ semanticElement: "span", lookLike: "meta" });

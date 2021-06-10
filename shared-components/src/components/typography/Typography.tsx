import { forwardRef, HTMLAttributes } from "react";

type HeadingLevels = `h${1 | 2 | 3 | 4 | 5}`;
type TypographyStyles = `title-${"large" | "medium" | "small"}`;

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  lookLike: TypographyStyles;
}

const typographyFactory = (semanticElement: HeadingLevels) =>
  // eslint-disable-next-line react/display-name
  forwardRef<HTMLHeadingElement, Props>(({ children, lookLike, ...props }, ref) => {
    const C = semanticElement;
    return (
      <C className={lookLike} {...props} ref={ref}>
        {children}
      </C>
    );
  });

export const H1 = typographyFactory("h1");
H1.defaultProps = { lookLike: "title-large" };

export const H2 = typographyFactory("h2");
H2.defaultProps = { lookLike: "title-medium" };

export const H3 = typographyFactory("h3");
H3.defaultProps = { lookLike: "title-small" };

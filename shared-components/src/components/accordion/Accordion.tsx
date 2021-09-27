import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode, useEffect, useRef } from "react";
import { Chevron } from "../icons/Chevron";

import "./accordion.scss";

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  heading: ReactNode;
  initialOpen?: boolean;
  alignChevronLeft?: boolean;
  lightBackground?: boolean;
}
export const Accordion: FC<Props> = ({
  initialOpen = true,
  children,
  heading,
  className = "",
  alignChevronLeft = false,
  lightBackground = false,
  ...rest
}) => {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.open = initialOpen;
    }
  }, [initialOpen]);

  return (
    <details
      ref={ref}
      data-testid="rds-accordion"
      className={`rds-accordion-details ${lightBackground ? "rds-accordion-details--light" : ""}  ${
        alignChevronLeft ? "rds-accordion-details--left" : ""
      } ${className}`}
      {...rest}
    >
      <summary data-testid="rds-accordion-summary" className="rds-accordion-details__summary">
        <Chevron />
        <div className="rds-accordion-details__summary__content">{heading}</div>
      </summary>
      {children}
    </details>
  );
};

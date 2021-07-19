import { FC } from "react";
import { H3 } from "../..";

export const ExampleGrid: FC<{ title: string }> = ({ children, title }) => (
  <>
    <H3>{title}</H3>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "var(--rds-spacing--24)",
        marginBottom: "var(--rds-spacing--48)",
      }}
    >
      {children}
    </div>
  </>
);
